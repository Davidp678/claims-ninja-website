export type ClaimIntelligenceSnapshot = {
  id: string;
  tradeLabel: string;
  insights: readonly string[];
};

export type IntelligenceCategoryId =
  | "code_compliance"
  | "scope_gaps"
  | "pricing_discrepancies"
  | "moisture_mitigation"
  | "op_opportunities"
  | "interior_reconstruction";

export type IntelligenceCategory = {
  id: IntelligenceCategoryId;
  label: string;
  subline: string;
};

export const CLAIM_INTELLIGENCE_SNAPSHOTS: readonly ClaimIntelligenceSnapshot[] = [
  {
    id: "water_mitigation",
    tradeLabel: "Water mitigation",
    insights: [
      "Interior drying scope expanded",
      "Additional moisture mapping documented",
      "Recovery opportunity identified",
    ],
  },
  {
    id: "fire_restoration",
    tradeLabel: "Fire restoration",
    insights: [
      "Content manipulation gaps flagged",
      "Code-related scope discrepancies detected",
      "Supplement escalation recommended",
    ],
  },
  {
    id: "commercial_reconstruction",
    tradeLabel: "Commercial / reconstruction",
    insights: [
      "Line item variance identified",
      "Scope sequencing inconsistencies detected",
      "Additional recoverable scope documented",
    ],
  },
] as const;

export const INTELLIGENCE_CATEGORIES: readonly IntelligenceCategory[] = [
  { id: "code_compliance", label: "Code Compliance", subline: "Upgrade & compliance gaps" },
  { id: "scope_gaps", label: "Scope Gaps", subline: "Missing trade scope" },
  { id: "pricing_discrepancies", label: "Pricing Discrepancies", subline: "Unit cost & quantity" },
  { id: "moisture_mitigation", label: "Moisture / Mitigation", subline: "Drying & mapping scope" },
  { id: "op_opportunities", label: "O&P Opportunities", subline: "Overhead & profit review" },
  {
    id: "interior_reconstruction",
    label: "Interior Reconstruction",
    subline: "Finish & build-back scope",
  },
] as const;
