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
    ].join("\n"),
  });

  const pdfFailures: string[] = [];

  for (const { meta, signedUrl } of signedFiles) {
    const mime = meta.contentType.toLowerCase().split(";")[0]?.trim() ?? "";

    if (isImageMime(mime)) {
      parts.push({
        type: "image_url",
        image_url: { url: signedUrl, detail: "auto" },
      });
      continue;
    }

    if (isPdfMime(mime)) {
      const fileId = await uploadPdfToOpenAI(client, signedUrl, meta.originalName);
      if (fileId) {
        parts.push({
          type: "file",
          file: { file_id: fileId },
        } as ChatCompletionContentPart);
      } else {
        pdfFailures.push(meta.originalName);
      }
    }
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
Output must follow the provided JSON schema exactly.`;

export async function runClaimAnalysis(params: {
  request: AnalyzeClaimRequest;
  signedFiles: SignedClaimFileInput[];
}): Promise<ClaimAnalysisResult> {
  const client = createOpenAIClient();
  const model = getClaimAnalysisModel();

  const userParts = await buildUserContentParts(
    client,
    params.request,
    params.signedFiles,
  );

  const messages: ChatCompletionMessageParam[] = [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: userParts },
  ];

  let completion;
  try {
    completion = await client.chat.completions.create({
      model,
      messages,
      temperature: 0.2,
      max_tokens: 4096,
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
