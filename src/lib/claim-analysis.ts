import type { UploadedFileMeta } from "@/lib/calculator-lead";

export type FindingSeverity = "low" | "medium" | "high";

export type FindingCategory =
  | "missing_item"
  | "pricing"
  | "code"
  | "coverage"
  | "op"
  | "documentation"
  | "other";

export type ClaimFinding = {
  title: string;
  severity: FindingSeverity;
  category: FindingCategory;
  explanation: string;
  recommendedAction: string;
  confidence: number;
};

export type EstimatedMissedRevenueRange = {
  low: number;
  high: number;
  currency: "USD";
};

export type ClaimAnalysisResult = {
  summary: string;
  opportunityScore: number;
  estimatedMissedRevenueRange: EstimatedMissedRevenueRange;
  findings: ClaimFinding[];
  nextSteps: string[];
  disclaimers: string[];
};

export type AnalyzeClaimRequest = {
  claimSessionId: string;
  uploadedFilesMeta: UploadedFileMeta[];
  claimType: string;
  carrierEstimate: string;
  description: string;
};

const SEVERITIES: FindingSeverity[] = ["low", "medium", "high"];
const CATEGORIES: FindingCategory[] = [
  "missing_item",
  "pricing",
  "code",
  "coverage",
  "op",
  "documentation",
  "other",
];

const DEFAULT_DISCLAIMER =
  "This is a preliminary AI-assisted review only — not a final estimate, legal opinion, or coverage determination.";

export const ANALYZE_CLAIM_JSON_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: [
    "summary",
    "opportunityScore",
    "estimatedMissedRevenueRange",
    "findings",
    "nextSteps",
    "disclaimers",
  ],
  properties: {
    summary: { type: "string" },
    opportunityScore: { type: "number" },
    estimatedMissedRevenueRange: {
      type: "object",
      additionalProperties: false,
      required: ["low", "high", "currency"],
      properties: {
        low: { type: "number" },
        high: { type: "number" },
        currency: { type: "string", enum: ["USD"] },
      },
    },
    findings: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: [
          "title",
          "severity",
          "category",
          "explanation",
          "recommendedAction",
          "confidence",
        ],
        properties: {
          title: { type: "string" },
          severity: { type: "string", enum: SEVERITIES },
          category: { type: "string", enum: CATEGORIES },
          explanation: { type: "string" },
          recommendedAction: { type: "string" },
          confidence: { type: "number" },
        },
      },
    },
    nextSteps: {
      type: "array",
      items: { type: "string" },
    },
    disclaimers: {
      type: "array",
      items: { type: "string" },
    },
  },
} as const;

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseFinding(raw: unknown): ClaimFinding | null {
  if (!isRecord(raw)) return null;
  const title = raw.title;
  const severity = raw.severity;
  const category = raw.category;
  const explanation = raw.explanation;
  const recommendedAction = raw.recommendedAction;
  const confidence = raw.confidence;
  if (typeof title !== "string" || !title.trim()) return null;
  if (typeof severity !== "string" || !SEVERITIES.includes(severity as FindingSeverity))
    return null;
  if (typeof category !== "string" || !CATEGORIES.includes(category as FindingCategory))
    return null;
  if (typeof explanation !== "string" || !explanation.trim()) return null;
  if (typeof recommendedAction !== "string" || !recommendedAction.trim()) return null;
  if (typeof confidence !== "number" || !Number.isFinite(confidence)) return null;

  return {
    title: title.trim(),
    severity: severity as FindingSeverity,
    category: category as FindingCategory,
    explanation: explanation.trim(),
    recommendedAction: recommendedAction.trim(),
    confidence: clamp(confidence, 0, 1),
  };
}

function parseStringArray(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is string => typeof item === "string" && item.trim().length > 0)
    .map((s) => s.trim());
}

export function parseAndValidateAnalysisResult(raw: unknown): ClaimAnalysisResult {
  if (!isRecord(raw)) {
    throw new Error("Analysis response is not an object.");
  }

  const summary = raw.summary;
  const opportunityScore = raw.opportunityScore;
  const rangeRaw = raw.estimatedMissedRevenueRange;
  const findingsRaw = raw.findings;

  if (typeof summary !== "string" || !summary.trim()) {
    throw new Error("Invalid or missing summary.");
  }
  if (typeof opportunityScore !== "number" || !Number.isFinite(opportunityScore)) {
    throw new Error("Invalid opportunityScore.");
  }
  if (!isRecord(rangeRaw)) {
    throw new Error("Invalid estimatedMissedRevenueRange.");
  }
  const low = rangeRaw.low;
  const high = rangeRaw.high;
  const currency = rangeRaw.currency;
  if (typeof low !== "number" || !Number.isFinite(low)) {
    throw new Error("Invalid revenue range low.");
  }
  if (typeof high !== "number" || !Number.isFinite(high)) {
    throw new Error("Invalid revenue range high.");
  }
  if (currency !== "USD") {
    throw new Error("Revenue range currency must be USD.");
  }

  const findings: ClaimFinding[] = [];
  if (Array.isArray(findingsRaw)) {
    for (const item of findingsRaw) {
      const finding = parseFinding(item);
      if (finding) findings.push(finding);
    }
  }

  let disclaimers = parseStringArray(raw.disclaimers);
  if (!disclaimers.some((d) => d.toLowerCase().includes("preliminary"))) {
    disclaimers = [DEFAULT_DISCLAIMER, ...disclaimers];
  }

  return {
    summary: summary.trim(),
    opportunityScore: clamp(Math.round(opportunityScore), 0, 100),
    estimatedMissedRevenueRange: {
      low: Math.max(0, Math.min(low, high)),
      high: Math.max(0, Math.max(low, high)),
      currency: "USD",
    },
    findings,
    nextSteps: parseStringArray(raw.nextSteps),
    disclaimers,
  };
}
