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

export type LeadSubmissionPayload =
  | ClaimReviewLeadSubmission
  | RoiReportLeadSubmission;

export type LeadSubmissionPayloadWithoutTimestamp = Omit<
  LeadSubmissionPayload,
  "timestamp"
>;
