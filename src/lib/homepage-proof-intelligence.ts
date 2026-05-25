export type OperationalMetric = {
  id: string;
  value: string;
  label: string;
  detail: string;
};

export type NetworkModuleId =
  | "ai_intelligence"
  | "supplement_team"
  | "pa_support"
  | "client_portal"
  | "claim_coordination"
  | "estimate_delivery";

export type NetworkModule = {
  id: NetworkModuleId;
  label: string;
  subline: string;
};

export const OPERATIONAL_METRICS: readonly OperationalMetric[] = [
  {
    id: "estimate_delivery",
    value: "24hr",
    label: "Estimate delivery",
    detail: "AI-assisted triage + supplement team review",
  },
  {
    id: "settlement_cycle",
    value: "~3 weeks",
    label: "Average settlement cycle",
    detail: "Operational execution, not inbox backlog",
  },
  {
    id: "carrier_increase",
    value: "40–45%",
    label: "Avg. increase over carrier estimate",
    detail: "Documented supplement outcomes across restoration trades",
  },
  {
    id: "review_workflow",
    value: "AI + expert",
    label: "Review workflow",
    detail: "Intelligence flagged; experienced supplement professionals finalize",
  },
] as const;

export const NETWORK_MODULES: readonly NetworkModule[] = [
  {
    id: "ai_intelligence",
    label: "AI Claim Intelligence",
    subline: "Scope, pricing & documentation signals",
  },
  {
    id: "supplement_team",
    label: "Supplement Team",
    subline: "Contractor-focused supplement execution",
  },
  {
    id: "pa_support",
    label: "Public Adjuster Support",
    subline: "PA escalation when claims require it",
  },
  {
    id: "client_portal",
    label: "Contractor Client Portal",
    subline: "Centralized claim intake & files",
  },
  {
    id: "claim_coordination",
    label: "Claim Coordination",
    subline: "Status, notes, and workflow alignment",
  },
  {
    id: "estimate_delivery",
    label: "Estimate Delivery",
    subline: "24hr AI-assisted estimate turnaround",
  },
] as const;

/** @deprecated Use NetworkModuleId */
export type PlatformCapabilityId = NetworkModuleId;

/** @deprecated Use NetworkModule */
export type PlatformCapability = NetworkModule;

/** @deprecated Use NETWORK_MODULES */
export const PLATFORM_CAPABILITIES = NETWORK_MODULES;
