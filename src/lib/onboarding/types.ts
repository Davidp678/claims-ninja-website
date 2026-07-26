import type { OnboardingStage } from "./stages";

export type LossType =
  | "wind_hail"
  | "water"
  | "fire"
  | "mold"
  | "storm"
  | "other";

export const LOSS_TYPE_OPTIONS: { value: LossType; label: string }[] = [
  { value: "wind_hail", label: "Wind / Hail" },
  { value: "water", label: "Water" },
  { value: "fire", label: "Fire" },
  { value: "mold", label: "Mold" },
  { value: "storm", label: "Storm" },
  { value: "other", label: "Other" },
];

export type ClaimDraft = {
  propertyOrJobName?: string;
  lossType?: LossType | string;
  lossDate?: string;
  claimType?: "insurance" | "retail_other";
  streetAddress?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  homeownerName?: string;
  insuranceCarrier?: string;
  claimNumber?: string;
  policyNumber?: string;
  lossDescription?: string;
};

export type CompanyDraft = {
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  mobilePhone?: string;
  workEmail?: string;
  legalCompanyName?: string;
  dbaName?: string;
  companyPhone?: string;
  website?: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  primaryTrade?: string;
  serviceArea?: string;
  licenseNumber?: string;
};

export type BillingContactDraft = {
  firstName?: string;
  lastName?: string;
  title?: string;
  email?: string;
  phone?: string;
  legalCompanyName?: string;
  dbaName?: string;
  apEmail?: string;
  apPhone?: string;
  /** @deprecated Prefer firstName + lastName */
  name?: string;
  sameAsCompanyAddress?: boolean;
};

export type BillingAddressDraft = {
  streetAddress?: string;
  suite?: string;
  city?: string;
  state?: string;
  postalCode?: string;
};

export type IntakeFileSummary = {
  id: string;
  filename: string;
  sizeBytes: number;
  securityState: string;
  contentType?: string;
};

export type IntakeSessionProjection = {
  status: string;
  stage: OnboardingStage | string;
  version: number;
  expiresAt?: string;
  claim?: ClaimDraft;
  company?: CompanyDraft;
  billingContact?: BillingContactDraft;
  billingAddress?: BillingAddressDraft;
  files?: IntakeFileSummary[];
  agreement?: {
    documentId?: string;
    title?: string;
    version?: string;
    effectiveDate?: string;
    contentSha256?: string;
    acceptanceEnabled?: boolean;
    accepted?: boolean;
  };
  billing?: {
    captureEnabled: boolean;
    continueAllowed: boolean;
    reason?: string | null;
  };
  accountEmail?: string | null;
  provision?: {
    status?: string;
    organizationName?: string;
    ownerName?: string;
    claimTitle?: string;
    readyFileCount?: number;
  };
};

export type SaveState = "idle" | "saving" | "saved" | "error";
