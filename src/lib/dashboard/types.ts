import type { ClaimAnalysisResult } from "@/lib/claim-analysis";
import type {
  ClaimReviewCalculatorInputs,
  UploadedFileMeta,
} from "@/lib/calculator-lead";
import type { ClaimStatus } from "@/lib/dashboard/claim-status";

export type ClaimNote = {
  id: string;
  leadId: string;
  noteText: string;
  createdAt: string;
};

export type DashboardClaimRow = {
  id: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
  status: ClaimStatus;
  createdAt: string;
  opportunityScore: number | null;
  missedRevenueLow: number | null;
  missedRevenueHigh: number | null;
};

export type DashboardClaimDetail = {
  id: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
  preferredContactMethod: string | null;
  status: ClaimStatus;
  createdAt: string;
  claimSessionId: string | null;
  claimCalculatorInputs: ClaimReviewCalculatorInputs | null;
  uploadedFilesMeta: UploadedFileMeta[];
  aiAnalysis: ClaimAnalysisResult | null;
  analyzedAt: string | null;
  aiModel: string | null;
  analysisVersion: string | null;
};
