export type RecoveredRevenueProof = {
  amount: string;
  detail: string;
};

export type IntelligenceCategoryId =
  | "code_gaps"
  | "op"
  | "pricing_errors"
  | "missing_scope"
  | "roofing_components"
  | "labor_discrepancies";

export type IntelligenceCategory = {
  id: IntelligenceCategoryId;
  label: string;
  subline: string;
};

export const RECOVERED_REVENUE_PROOFS: readonly RecoveredRevenueProof[] = [
  {
    amount: "+ $14,200 recovered",
    detail: "Code compliance upgrades identified",
  },
  {
    amount: "+ $8,700 supplement increase",
    detail: "Missed roofing accessories + O&P",
  },
  {
    amount: "+ $11,400 approved",
    detail: "Interior scope expansion documented",
  },
] as const;

export const INTELLIGENCE_CATEGORIES: readonly IntelligenceCategory[] = [
  { id: "code_gaps", label: "Code Gaps", subline: "Compliance line items" },
  { id: "op", label: "O&P", subline: "Overhead & profit" },
  { id: "pricing_errors", label: "Pricing Errors", subline: "Unit cost validation" },
  { id: "missing_scope", label: "Missing Scope", subline: "Scope expansion" },
  { id: "roofing_components", label: "Roofing Components", subline: "Accessory bundles" },
  { id: "labor_discrepancies", label: "Labor Discrepancies", subline: "Trade hour gaps" },
] as const;
