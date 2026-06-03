export type LeadFlowStep =
  | "idle"
  | "name"
  | "company"
  | "contact"
  | "primaryNeed"
  | "carrierEstimate"
  | "claimValue"
  | "preferredNextStep"
  | "confirm"
  | "submitting"
  | "success";

export type LeadFlowDraft = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  primaryNeed: string;
  carrierEstimateStatus: string;
  approximateClaimValue: string;
  preferredNextStep: string;
};

export type LeadFlowChoice = {
  id: string;
  label: string;
  value: string;
};

export const EMPTY_LEAD_DRAFT: LeadFlowDraft = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  primaryNeed: "",
  carrierEstimateStatus: "",
  approximateClaimValue: "",
  preferredNextStep: "",
};

export const LEAD_FLOW_CANCEL_CHOICES: LeadFlowChoice[] = [
  { id: "cancel", label: "Cancel", value: "__cancel__" },
  { id: "restart", label: "Start over", value: "__restart__" },
];

export const PRIMARY_NEED_CHOICES: LeadFlowChoice[] = [
  { id: "supplements", label: "Supplements", value: "supplements" },
  {
    id: "public-adjuster",
    label: "Public adjuster support",
    value: "public-adjuster",
  },
  { id: "ai-analysis", label: "AI claim analysis", value: "ai-analysis" },
  {
    id: "platform-partnership",
    label: "Platform partnership",
    value: "platform-partnership",
  },
  { id: "general", label: "General inquiry", value: "general" },
];

export const CARRIER_ESTIMATE_CHOICES: LeadFlowChoice[] = [
  { id: "carrier-yes", label: "Yes", value: "yes" },
  { id: "carrier-no", label: "No", value: "no" },
  { id: "carrier-not-sure", label: "Not sure", value: "not-sure" },
];

export const PREFERRED_NEXT_STEP_CHOICES: LeadFlowChoice[] = [
  { id: "next-intake", label: "Claim intake", value: "claim-intake" },
  { id: "next-strategy", label: "Strategy call", value: "strategy-call" },
  { id: "next-follow-up", label: "Team follow-up", value: "team-follow-up" },
];

export const LEAD_SUCCESS_FOLLOW_UPS = [
  "get-started",
  "talk-to-team",
  "view-pricing",
  "view-faq",
] as const;

export const LEAD_SUCCESS_MESSAGE =
  "Got it — your info has been sent to the Claims Ninja team. The fastest next step is to start the claim intake or book a strategy call.";
