import "server-only";

import {
  parseAndValidateAnalysisResult,
  parsePersistedClaimAnalysis,
} from "@/lib/claim-analysis";
import { loadClaimAnalysisForSession } from "@/lib/claim-analysis-persistence";
import type { ClaimReviewLeadSubmission } from "@/lib/calculator-lead";
import { normalizeLeadStatus } from "@/lib/dashboard/claim-status";
import type {
  ClaimNote,
  DashboardClaimDetail,
  DashboardClaimRow,
} from "@/lib/dashboard/types";
import { createSupabaseServerClient } from "@/lib/supabase";

const CLAIM_NOTES_TABLE = "claim_notes";

type LeadRow = {
  id: string;
  company: string | null;
  lead_name: string | null;
  email: string | null;
  phone: string | null;
  status: string | null;
  created_at: string;
  payload: unknown;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseClaimReviewPayload(
  payload: unknown,
): ClaimReviewLeadSubmission | null {
  if (!isRecord(payload)) return null;
  if (payload.calculatorType !== "claim-review") return null;

  const lead = payload.lead;
  if (!isRecord(lead)) return null;

  const claimCalculatorInputs = payload.claimCalculatorInputs;
  const uploadedFilesMeta = payload.uploadedFilesMeta;

  const result: ClaimReviewLeadSubmission = {
    calculatorType: "claim-review",
    timestamp:
      typeof payload.timestamp === "string" ? payload.timestamp : "",
    lead: {
      fullName: typeof lead.fullName === "string" ? lead.fullName : "",
      company: typeof lead.company === "string" ? lead.company : "",
      email: typeof lead.email === "string" ? lead.email : "",
      phone: typeof lead.phone === "string" ? lead.phone : "",
      preferredContactMethod:
        lead.preferredContactMethod === "email" ||
        lead.preferredContactMethod === "phone" ||
        lead.preferredContactMethod === "either"
          ? lead.preferredContactMethod
          : undefined,
    },
    claimCalculatorInputs: isRecord(claimCalculatorInputs)
      ? {
          claimType:
            typeof claimCalculatorInputs.claimType === "string"
              ? claimCalculatorInputs.claimType
              : "",
          carrierEstimate:
            typeof claimCalculatorInputs.carrierEstimate === "string"
              ? claimCalculatorInputs.carrierEstimate
              : "",
          description:
            typeof claimCalculatorInputs.description === "string"
              ? claimCalculatorInputs.description
              : "",
        }
      : { claimType: "", carrierEstimate: "", description: "" },
    uploadedFilesMeta: Array.isArray(uploadedFilesMeta)
      ? uploadedFilesMeta.filter(
          (f): f is ClaimReviewLeadSubmission["uploadedFilesMeta"][number] =>
            isRecord(f) &&
            typeof f.fileName === "string" &&
            typeof f.storagePath === "string",
        )
      : [],
    claimSessionId:
      typeof payload.claimSessionId === "string"
        ? payload.claimSessionId
        : undefined,
  };

  try {
    if (payload.aiAnalysis !== undefined) {
      result.aiAnalysis = parseAndValidateAnalysisResult(payload.aiAnalysis);
    }
  } catch {
    // omit invalid embedded analysis
  }
  if (typeof payload.analyzedAt === "string") {
    result.analyzedAt = payload.analyzedAt;
  }
  if (typeof payload.aiModel === "string") {
    result.aiModel = payload.aiModel;
  }
  if (typeof payload.analysisVersion === "string") {
    result.analysisVersion = payload.analysisVersion;
  }

  return result;
}

function extractAiFromPayload(payload: ClaimReviewLeadSubmission | null) {
  if (!payload) {
    return {
      opportunityScore: null as number | null,
      missedRevenueLow: null as number | null,
      missedRevenueHigh: null as number | null,
      aiAnalysis: null,
      analyzedAt: null as string | null,
      aiModel: null as string | null,
      analysisVersion: null as string | null,
    };
  }

  const persisted = parsePersistedClaimAnalysis({
    aiAnalysis: payload.aiAnalysis,
    analyzedAt: payload.analyzedAt,
    aiModel: payload.aiModel,
    analysisVersion: payload.analysisVersion,
  });

  if (!persisted) {
    return {
      opportunityScore: null,
      missedRevenueLow: null,
      missedRevenueHigh: null,
      aiAnalysis: null,
      analyzedAt: null,
      aiModel: null,
      analysisVersion: null,
    };
  }

  return {
    opportunityScore: persisted.aiAnalysis.opportunityScore,
    missedRevenueLow: persisted.aiAnalysis.estimatedMissedRevenueRange.low,
    missedRevenueHigh: persisted.aiAnalysis.estimatedMissedRevenueRange.high,
    aiAnalysis: persisted.aiAnalysis,
    analyzedAt: persisted.analyzedAt,
    aiModel: persisted.aiModel,
    analysisVersion: persisted.analysisVersion,
  };
}

function rowToListItem(row: LeadRow): DashboardClaimRow {
  const payload = parseClaimReviewPayload(row.payload);
  const ai = extractAiFromPayload(payload);

  return {
    id: row.id,
    company: row.company?.trim() || payload?.lead.company?.trim() || "—",
    contactName: row.lead_name?.trim() || payload?.lead.fullName?.trim() || "—",
    email: row.email?.trim() || payload?.lead.email?.trim() || "—",
    phone: row.phone?.trim() || payload?.lead.phone?.trim() || "—",
    status: normalizeLeadStatus(row.status),
    createdAt: row.created_at,
    opportunityScore: ai.opportunityScore,
    missedRevenueLow: ai.missedRevenueLow,
    missedRevenueHigh: ai.missedRevenueHigh,
  };
}

export async function listClaimReviewLeads(): Promise<DashboardClaimRow[]> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("leads")
    .select("id, company, lead_name, email, phone, status, created_at, payload")
    .eq("calculator_type", "claim-review")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    console.error("[dashboard/leads] list error:", error.message);
    throw new Error("Failed to load claims queue.");
  }

  return (data ?? []).map((row) => rowToListItem(row as LeadRow));
}

async function resolveAiForDetail(
  payload: ClaimReviewLeadSubmission | null,
): Promise<ReturnType<typeof extractAiFromPayload>> {
  let ai = extractAiFromPayload(payload);

  if (!ai.aiAnalysis && payload?.claimSessionId) {
    const supabase = createSupabaseServerClient();
    const persisted = await loadClaimAnalysisForSession(
      supabase,
      payload.claimSessionId,
    );
    if (persisted) {
      ai = {
        opportunityScore: persisted.aiAnalysis.opportunityScore,
        missedRevenueLow: persisted.aiAnalysis.estimatedMissedRevenueRange.low,
        missedRevenueHigh: persisted.aiAnalysis.estimatedMissedRevenueRange.high,
        aiAnalysis: persisted.aiAnalysis,
        analyzedAt: persisted.analyzedAt,
        aiModel: persisted.aiModel,
        analysisVersion: persisted.analysisVersion,
      };
    }
  }

  return ai;
}

export async function getClaimReviewLeadById(
  id: string,
): Promise<DashboardClaimDetail | null> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("leads")
    .select("id, company, lead_name, email, phone, status, created_at, payload")
    .eq("id", id)
    .eq("calculator_type", "claim-review")
    .maybeSingle();

  if (error) {
    console.error("[dashboard/leads] detail error:", error.message);
    throw new Error("Failed to load claim detail.");
  }

  if (!data) return null;

  const row = data as LeadRow;
  const payload = parseClaimReviewPayload(row.payload);
  const ai = await resolveAiForDetail(payload);

  return {
    id: row.id,
    company: row.company?.trim() || payload?.lead.company?.trim() || "—",
    contactName: row.lead_name?.trim() || payload?.lead.fullName?.trim() || "—",
    email: row.email?.trim() || payload?.lead.email?.trim() || "—",
    phone: row.phone?.trim() || payload?.lead.phone?.trim() || "—",
    preferredContactMethod: payload?.lead.preferredContactMethod ?? null,
    status: normalizeLeadStatus(row.status),
    createdAt: row.created_at,
    claimSessionId: payload?.claimSessionId ?? null,
    claimCalculatorInputs: payload?.claimCalculatorInputs ?? null,
    uploadedFilesMeta: payload?.uploadedFilesMeta ?? [],
    aiAnalysis: ai.aiAnalysis,
    analyzedAt: ai.analyzedAt,
    aiModel: ai.aiModel,
    analysisVersion: ai.analysisVersion,
  };
}

export async function updateClaimLeadStatus(
  leadId: string,
  status: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const supabase = createSupabaseServerClient();

  const { error } = await supabase
    .from("leads")
    .update({ status })
    .eq("id", leadId)
    .eq("calculator_type", "claim-review");

  if (error) {
    console.error("[dashboard/leads] status update error:", error.message);
    return { ok: false, error: error.message };
  }

  return { ok: true };
}

export async function listClaimNotes(leadId: string): Promise<ClaimNote[]> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from(CLAIM_NOTES_TABLE)
    .select("id, lead_id, note_text, created_at")
    .eq("lead_id", leadId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[dashboard/leads] notes list error:", error.message);
    throw new Error("Failed to load notes.");
  }

  return (data ?? []).map((row) => ({
    id: row.id as string,
    leadId: row.lead_id as string,
    noteText: row.note_text as string,
    createdAt: row.created_at as string,
  }));
}

export async function addClaimNote(
  leadId: string,
  noteText: string,
): Promise<ClaimNote> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from(CLAIM_NOTES_TABLE)
    .insert({ lead_id: leadId, note_text: noteText.trim() })
    .select("id, lead_id, note_text, created_at")
    .single();

  if (error || !data) {
    console.error("[dashboard/leads] note insert error:", error?.message);
    throw new Error("Failed to save note.");
  }

  return {
    id: data.id as string,
    leadId: data.lead_id as string,
    noteText: data.note_text as string,
    createdAt: data.created_at as string,
  };
}
