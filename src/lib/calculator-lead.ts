/**
 * Lead submission payloads for calculator flows.
 * Structured for future API / CRM integration (POST body shape).
 */

import type { ClaimAnalysisResult } from "@/lib/claim-analysis";

export type PreferredContactMethod = "email" | "phone" | "either";

/** Contact fields collected in the shared lead form. */
export type LeadContactFields = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  /** claim-review */
  preferredContactMethod?: PreferredContactMethod;
  /** roi-report — e.g. jobs/claims per month */
  monthlyClaimVolume?: string;
};

export type UploadedFileMeta = {
  fileName: string;
  originalName: string;
  contentType: string;
  size: number;
  storagePath: string;
  bucket: string;
};

export type ClaimReviewCalculatorInputs = {
  claimType: string;
  carrierEstimate: string;
  description: string;
};

export type RoiCalculatorInputsSnapshot = {
  averageCarrierEstimatePerJob: number;
  jobsPerMonth: number;
  assumedUpliftPercent: number;
  inHouseMonthlyCost: number;
};

export type RoiCalculatorOutputsSnapshot = {
  usesCarrierEstimateFeeModel: boolean;
  documentedIncreasePerJob: number;
  finalRcvPerJob: number;
  ninjaFeePerJob: number;
  netUpliftPerJob: number;
  monthlyNetUplift: number;
  monthlyNinjaFee: number;
  annualNetUplift: number;
  annualNinjaFee: number;
  annualInHouseCost: number;
  annualVsInHouseDelta: number;
};

export type ClaimReviewLeadSubmission = {
  calculatorType: "claim-review";
  timestamp: string;
  lead: LeadContactFields;
  claimCalculatorInputs: ClaimReviewCalculatorInputs;
  uploadedFilesMeta: UploadedFileMeta[];
  claimSessionId?: string;
  /** Merged server-side from `claim_analyses` when available. */
  aiAnalysis?: ClaimAnalysisResult;
  analyzedAt?: string;
  aiModel?: string;
  analysisVersion?: string;
};

export type RoiReportLeadSubmission = {
  calculatorType: "roi-report";
  timestamp: string;
  lead: LeadContactFields;
  roiCalculatorInputs: RoiCalculatorInputsSnapshot;
  roiCalculatorOutputs: RoiCalculatorOutputsSnapshot;
};

export type ChatbotPrimaryNeed =
  | "supplements"
  | "public-adjuster"
  | "ai-analysis"
  | "platform-partnership"
  | "general";

export type CarrierEstimateStatus = "yes" | "no" | "not-sure";

export type ChatbotPreferredNextStep =
  | "claim-intake"
  | "strategy-call"
  | "team-follow-up";

export type ChatbotLeadDetails = {
  source: "claims-ninja-ai-chatbot";
  primaryNeed: ChatbotPrimaryNeed | string;
  carrierEstimateStatus: CarrierEstimateStatus | string;
  approximateClaimValue?: string;
  preferredNextStep: ChatbotPreferredNextStep | string;
  conversationSummary?: string;
  submittedAt: string;
};

export type ChatbotLeadSubmission = {
  calculatorType: "chatbot";
  timestamp: string;
  lead: LeadContactFields;
  chatbotDetails: ChatbotLeadDetails;
};

export type ContactInquiryType =
  | "claim-review"
  | "partnership-inquiry"
  | "existing-client-support"
  | "strategic-partner-inquiry"
  | "general-question";

export const CONTACT_INQUIRY_TYPES: readonly ContactInquiryType[] = [
  "claim-review",
  "partnership-inquiry",
  "existing-client-support",
  "strategic-partner-inquiry",
  "general-question",
] as const;

export type ContactInquiryDetails = {
  inquiryType: ContactInquiryType;
  message: string;
  website?: string;
  monthlyClaimVolume?: string;
  sourcePage: "/contact";
  submittedAt: string;
};

export type ContactInquiryLeadSubmission = {
  calculatorType: "contact-inquiry";
  timestamp: string;
  lead: LeadContactFields;
  contactDetails: ContactInquiryDetails;
};

export type LeadSubmissionPayload =
  | ClaimReviewLeadSubmission
  | RoiReportLeadSubmission
  | ChatbotLeadSubmission
  | ContactInquiryLeadSubmission;

export type LeadSubmissionPayloadWithoutTimestamp = Omit<
  LeadSubmissionPayload,
  "timestamp"
>;
