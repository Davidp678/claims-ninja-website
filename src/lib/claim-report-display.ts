import type { ClaimFinding, FindingCategory, FindingSeverity } from "@/lib/claim-analysis";
import type { Locale } from "@/lib/i18n/config";

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

type OpportunityTierKey =
  | "high"
  | "strong"
  | "meaningful"
  | "light"
  | "minimal";

function getOpportunityTierKey(score: number): OpportunityTierKey {
  if (score >= 81) return "high";
  if (score >= 61) return "strong";
  if (score >= 41) return "meaningful";
  if (score >= 21) return "light";
  return "minimal";
}

const OPPORTUNITY_TIERS: Record<
  Locale,
  Record<OpportunityTierKey, OpportunityTier>
> = {
  en: {
    high: {
      label: "High-value opportunity",
      strength: "High confidence",
      description:
        "Substantial recoverable value is likely. Prioritize a full supplement and carrier review.",
    },
    strong: {
      label: "Strong opportunity",
      strength: "High confidence",
      description:
        "Multiple recoverable gaps likely exist. Prioritize a structured supplement review.",
    },
    meaningful: {
      label: "Meaningful opportunity",
      strength: "Solid potential",
      description:
        "Meaningful upside is likely. Targeted line-item and scope validation recommended.",
    },
    light: {
      label: "Light opportunity",
      strength: "Worth validating",
      description:
        "Some gaps may exist. A focused review can confirm whether additional recovery is realistic.",
    },
    minimal: {
      label: "Minimal opportunity",
      strength: "Baseline",
      description:
        "Limited additional recovery indicated. Continue with documented scope validation.",
    },
  },
  es: {
    high: {
      label: "Oportunidad de alto valor",
      strength: "Alta confianza",
      description:
        "Es probable que haya un valor recuperable considerable. Priorice una revisión completa de suplementos y con la aseguradora.",
    },
    strong: {
      label: "Oportunidad sólida",
      strength: "Alta confianza",
      description:
        "Es probable que existan varias brechas recuperables. Priorice una revisión estructurada de suplementos.",
    },
    meaningful: {
      label: "Oportunidad significativa",
      strength: "Potencial sólido",
      description:
        "Es probable que haya un margen significativo. Se recomienda validar el alcance y las partidas específicas.",
    },
    light: {
      label: "Oportunidad ligera",
      strength: "Vale la pena validar",
      description:
        "Pueden existir algunas brechas. Una revisión enfocada puede confirmar si es realista recuperar más.",
    },
    minimal: {
      label: "Oportunidad mínima",
      strength: "Base",
      description:
        "Se indica una recuperación adicional limitada. Continúe con la validación del alcance documentado.",
    },
  },
};

export function getOpportunityTier(
  score: number,
  locale: Locale = "en",
): OpportunityTier {
  const tiers = OPPORTUNITY_TIERS[locale] ?? OPPORTUNITY_TIERS.en;
  return tiers[getOpportunityTierKey(score)];
}

/** Tailwind text color band for a calibrated opportunity score. */
export function getOpportunityScoreColor(score: number): string {
  const key = getOpportunityTierKey(score);
  if (key === "high" || key === "strong") return "text-brand-red-light";
  if (key === "meaningful") return "text-amber-300";
  return "text-zinc-300";
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
    badge: "border-brand-red/55 bg-brand-red/18 text-brand-red-light",
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
