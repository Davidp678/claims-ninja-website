import type { ClaimFinding, FindingCategory, FindingSeverity } from "@/lib/claim-analysis";

export const currencyFmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const reportDateFmt = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeStyle: "short",
});

export function formatClaimSessionRef(claimSessionId: string): string {
  return claimSessionId.replace(/-/g, "").slice(0, 8).toUpperCase();
}

export type OpportunityTier = {
  label: string;
  strength: string;
  description: string;
};

export function getOpportunityTier(score: number): OpportunityTier {
  if (score >= 71) {
    return {
      label: "Strong opportunity",
      strength: "High confidence",
      description:
        "Multiple recoverable gaps likely exist. Prioritize a structured supplement review.",
    };
  }
  if (score >= 41) {
    return {
      label: "Moderate opportunity",
      strength: "Solid potential",
      description:
        "Meaningful upside is likely. Targeted line-item and scope validation recommended.",
    };
  }
  return {
    label: "Emerging opportunity",
    strength: "Worth validating",
    description:
      "Some gaps may exist. A focused review can confirm whether additional recovery is realistic.",
  };
}

export function formatConfidencePercent(confidence: number): number {
  return Math.round(Math.max(0, Math.min(1, confidence)) * 100);
}

export type ComplexityLabel = {
  label: string;
  detail: string;
};

export function getComplexityLabel(findings: ClaimFinding[]): ComplexityLabel {
  const high = findings.filter((f) => f.severity === "high").length;
  const medium = findings.filter((f) => f.severity === "medium").length;

  if (high >= 3 || (high >= 2 && medium >= 2)) {
    return {
      label: "High complexity",
      detail: "Multiple high-impact gaps detected across the claim file.",
    };
  }
  if (high >= 1 || medium >= 3) {
    return {
      label: "Moderate complexity",
      detail: "Several areas warrant professional scope and pricing review.",
    };
  }
  if (findings.length > 0) {
    return {
      label: "Focused review",
      detail: "Targeted adjustments may unlock additional recovery.",
    };
  }
  return {
    label: "Baseline review",
    detail: "Continue with documented scope validation and carrier follow-up.",
  };
}

export const CATEGORY_LABELS: Record<FindingCategory, string> = {
  missing_item: "Missing item",
  pricing: "Pricing",
  code: "Code compliance",
  coverage: "Coverage",
  op: "Overhead & profit",
  documentation: "Documentation",
  other: "Other",
};

export const SEVERITY_STYLES: Record<
  FindingSeverity,
  { label: string; badge: string; dot: string }
> = {
  high: {
    label: "High",
    badge: "border-brand-red/50 bg-brand-red/15 text-brand-red-light",
    dot: "bg-brand-red-light",
  },
  medium: {
    label: "Medium",
    badge: "border-amber-500/40 bg-amber-500/10 text-amber-200",
    dot: "bg-amber-400",
  },
  low: {
    label: "Low",
    badge: "border-white/20 bg-white/5 text-zinc-300",
    dot: "bg-zinc-400",
  },
};

export function formatRevenueRange(low: number, high: number): string {
  return `${currencyFmt.format(low)} – ${currencyFmt.format(high)}`;
}
