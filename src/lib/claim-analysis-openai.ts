import "server-only";

import OpenAI from "openai";
import type {
  ChatCompletionContentPart,
  ChatCompletionMessageParam,
} from "openai/resources/chat/completions";

import {
  ANALYZE_CLAIM_JSON_SCHEMA,
  parseAndValidateAnalysisResult,
  type AnalyzeClaimRequest,
  type ClaimAnalysisResult,
} from "@/lib/claim-analysis";
import type { SignedClaimFileInput } from "@/lib/claim-storage-signed-urls";

export class OpenAIConfigError extends Error {
  readonly code = "OPENAI_CONFIG" as const;

  constructor(message: string) {
    super(message);
    this.name = "OpenAIConfigError";
  }
}

export class OpenAIAnalysisError extends Error {
  readonly code = "OPENAI_ANALYSIS_FAILED" as const;

  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "OpenAIAnalysisError";
  }
}

export type ClaimAnalysisUsage = {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
};

export type ClaimAnalysisRunResult = {
  analysis: ClaimAnalysisResult;
  usage: ClaimAnalysisUsage | null;
};

const MAX_OUTPUT_TOKENS = 2048;
const MAX_VISION_IMAGES = 4;
const MAX_INLINE_FINDINGS = 6;

function createOpenAIClient(): OpenAI {
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) {
    throw new OpenAIConfigError("OPENAI_API_KEY is missing.");
  }
  return new OpenAI({ apiKey: key });
}

export function getClaimAnalysisModel(): string {
  return process.env.OPENAI_MODEL?.trim() || "gpt-4o";
}

export function getClaimTriageModel(): string {
  return (
    process.env.OPENAI_CLAIM_TRIAGE_MODEL?.trim() ||
    process.env.OPENAI_MODEL?.trim() ||
    "gpt-4o-mini"
  );
}

export function getClaimDeepModel(): string {
  return (
    process.env.OPENAI_CLAIM_DEEP_MODEL?.trim() ||
    process.env.OPENAI_MODEL?.trim() ||
    "gpt-4o"
  );
}

function isImageMime(mime: string): boolean {
  const m = mime.toLowerCase().split(";")[0]?.trim() ?? "";
  return m === "image/jpeg" || m === "image/png" || m === "image/webp";
}

function isPdfMime(mime: string): boolean {
  const m = mime.toLowerCase().split(";")[0]?.trim() ?? "";
  return m === "application/pdf";
}

async function uploadPdfToOpenAI(
  client: OpenAI,
  signedUrl: string,
  fileName: string,
): Promise<string | null> {
  try {
    const res = await fetch(signedUrl);
    if (!res.ok) {
      console.error("[claim-analysis-openai] PDF fetch failed:", fileName, res.status);
      return null;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const file = await client.files.create({
      file: new File([buffer], fileName, { type: "application/pdf" }),
      purpose: "user_data",
    });
    return file.id;
  } catch (err) {
    console.error("[claim-analysis-openai] PDF upload to OpenAI failed:", fileName, err);
    return null;
  }
}

type FilePartResult =
  | { type: "parts"; parts: ChatCompletionContentPart[] }
  | { type: "pdf_failure"; name: string };

async function buildFileParts(
  client: OpenAI,
  meta: SignedClaimFileInput["meta"],
  signedUrl: string,
  imageIndex: number,
): Promise<FilePartResult> {
  const mime = meta.contentType.toLowerCase().split(";")[0]?.trim() ?? "";

  if (isImageMime(mime)) {
    if (imageIndex >= MAX_VISION_IMAGES) {
      return { type: "parts", parts: [] };
    }
    return {
      type: "parts",
      parts: [
        {
          type: "image_url",
          image_url: { url: signedUrl, detail: "low" },
        },
      ],
    };
  }

  if (isPdfMime(mime)) {
    const fileId = await uploadPdfToOpenAI(client, signedUrl, meta.originalName);
    if (fileId) {
      return {
        type: "parts",
        parts: [
          {
            type: "file",
            file: { file_id: fileId },
          } as ChatCompletionContentPart,
        ],
      };
    }
    return { type: "pdf_failure", name: meta.originalName };
  }

  return { type: "parts", parts: [] };
}

async function buildUserContentParts(
  client: OpenAI,
  request: AnalyzeClaimRequest,
  signedFiles: SignedClaimFileInput[],
): Promise<ChatCompletionContentPart[]> {
  const parts: ChatCompletionContentPart[] = [];

  const fileList =
    signedFiles.length === 0
      ? "No documents uploaded."
      : signedFiles
          .map(
            (f) =>
              `- ${f.meta.originalName} (${f.meta.contentType}, ${f.meta.size} bytes)`,
          )
          .join("\n");

  const imageCount = signedFiles.filter((f) =>
    isImageMime(f.meta.contentType),
  ).length;

  parts.push({
    type: "text",
    text: [
      "Analyze this insurance claim opportunity for supplement / missed scope.",
      "",
      `Claim type: ${request.claimType}`,
      `Carrier estimate: ${request.carrierEstimate || "Not provided"}`,
      `Description: ${request.description || "Not provided"}`,
      "",
      "Uploaded files:",
      fileList,
      imageCount > MAX_VISION_IMAGES
        ? `Note: ${imageCount - MAX_VISION_IMAGES} additional image(s) are listed but not attached — prioritize the attached images and filenames.`
        : "",
    ]
      .filter(Boolean)
      .join("\n"),
  });

  const pdfFailures: string[] = [];
  let imageIndex = 0;

  const fileResults = await Promise.all(
    signedFiles.map(async (file) => {
      const mime = file.meta.contentType.toLowerCase().split(";")[0]?.trim() ?? "";
      const index = isImageMime(mime) ? imageIndex++ : imageIndex;
      return buildFileParts(client, file.meta, file.signedUrl, index);
    }),
  );

  for (const result of fileResults) {
    if (result.type === "pdf_failure") {
      pdfFailures.push(result.name);
      continue;
    }
    parts.push(...result.parts);
  }

  if (pdfFailures.length > 0) {
    parts.push({
      type: "text",
      text: `Note: Could not process PDF(s) for vision analysis: ${pdfFailures.join(", ")}. Base your review on other inputs and filenames.`,
    });
  }

  return parts;
}

const SYSTEM_PROMPT = `You are an expert insurance supplement analyst assisting licensed public adjusters and restoration contractors.
Perform a preliminary triage of the claim based on the provided description, carrier estimate, and any uploaded documents/images.
Identify realistic supplement opportunities, documentation gaps, pricing issues, code-related items, coverage considerations, and overhead/profit concerns when relevant.
Be specific and actionable. Express uncertainty where evidence is limited.
Do not guarantee outcomes, coverage, or legal conclusions.
Return at most ${MAX_INLINE_FINDINGS} findings — prioritize the highest-impact opportunities for the inline triage view.
Output must follow the provided JSON schema exactly.`;

function parseUsage(usage?: {
  prompt_tokens?: number;
  completion_tokens?: number;
  total_tokens?: number;
}): ClaimAnalysisUsage | null {
  if (!usage) return null;
  return {
    promptTokens: usage.prompt_tokens ?? 0,
    completionTokens: usage.completion_tokens ?? 0,
    totalTokens: usage.total_tokens ?? 0,
  };
}

async function runCompletion(params: {
  client: OpenAI;
  model: string;
  messages: ChatCompletionMessageParam[];
  maxTokens: number;
}): Promise<{ content: string; usage: ClaimAnalysisUsage | null }> {
  let completion;
  try {
    completion = await params.client.chat.completions.create({
      model: params.model,
      messages: params.messages,
      temperature: 0.2,
      max_tokens: params.maxTokens,
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "claim_analysis",
          strict: true,
          schema: ANALYZE_CLAIM_JSON_SCHEMA,
        },
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new OpenAIAnalysisError(`OpenAI request failed: ${msg}`, { cause: err });
  }

  const content = completion.choices[0]?.message?.content;
  if (!content) {
    throw new OpenAIAnalysisError("OpenAI returned empty content.");
  }

  return { content, usage: parseUsage(completion.usage) };
}

function parseAnalysisContent(content: string): ClaimAnalysisResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(content) as unknown;
  } catch (err) {
    throw new OpenAIAnalysisError("OpenAI returned invalid JSON.", { cause: err });
  }

  try {
    return parseAndValidateAnalysisResult(parsed);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new OpenAIAnalysisError(`Invalid analysis structure: ${msg}`, { cause: err });
  }
}

export async function runClaimAnalysis(params: {
  request: AnalyzeClaimRequest;
  signedFiles: SignedClaimFileInput[];
  model?: string;
  maxTokens?: number;
}): Promise<ClaimAnalysisRunResult> {
  const client = createOpenAIClient();
  const model = params.model ?? getClaimAnalysisModel();

  const userParts = await buildUserContentParts(
    client,
    params.request,
    params.signedFiles,
  );

  const messages: ChatCompletionMessageParam[] = [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: userParts },
  ];

  const { content, usage } = await runCompletion({
    client,
    model,
    messages,
    maxTokens: params.maxTokens ?? MAX_OUTPUT_TOKENS,
  });

  return {
    analysis: parseAnalysisContent(content),
    usage,
  };
}

export async function runClaimTriageAnalysis(params: {
  request: AnalyzeClaimRequest;
  signedFiles: SignedClaimFileInput[];
}): Promise<ClaimAnalysisRunResult> {
  return runClaimAnalysis({
    ...params,
    model: getClaimTriageModel(),
    maxTokens: 1200,
  });
}

export async function runClaimDeepAnalysis(params: {
  request: AnalyzeClaimRequest;
  signedFiles: SignedClaimFileInput[];
}): Promise<ClaimAnalysisRunResult> {
  return runClaimAnalysis({
    ...params,
    model: getClaimDeepModel(),
    maxTokens: 4096,
  });
}
