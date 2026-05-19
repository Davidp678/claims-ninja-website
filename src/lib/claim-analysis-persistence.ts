import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";

import {
  parsePersistedClaimAnalysis,
  toPersistedClaimAnalysis,
  type ClaimAnalysisResult,
  type PersistedClaimAnalysis,
} from "@/lib/claim-analysis";
import { isValidClaimSessionId } from "@/lib/claim-files";

const CLAIM_ANALYSES_TABLE = "claim_analyses";

type ClaimAnalysisRow = {
  claim_session_id: string;
  ai_analysis: unknown;
  analyzed_at: string;
  ai_model: string;
  analysis_version: string;
};

export async function saveClaimAnalysis(
  supabase: SupabaseClient,
  claimSessionId: string,
  analysis: ClaimAnalysisResult,
  aiModel: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!isValidClaimSessionId(claimSessionId)) {
    return { ok: false, error: "Invalid claim session id." };
  }

  const persisted = toPersistedClaimAnalysis(analysis, aiModel);
  const row: ClaimAnalysisRow = {
    claim_session_id: claimSessionId.trim(),
    ai_analysis: persisted.aiAnalysis,
    analyzed_at: persisted.analyzedAt,
    ai_model: persisted.aiModel,
    analysis_version: persisted.analysisVersion,
  };

  const { error } = await supabase.from(CLAIM_ANALYSES_TABLE).upsert(
    { ...row, updated_at: new Date().toISOString() },
    { onConflict: "claim_session_id" },
  );

  if (error) {
    console.error("[claim-analysis-persistence] upsert failed:", {
      claimSessionId,
      message: error.message,
      code: "code" in error ? String(error.code) : undefined,
    });
    return { ok: false, error: error.message };
  }

  return { ok: true };
}

export async function loadClaimAnalysisForSession(
  supabase: SupabaseClient,
  claimSessionId: string,
): Promise<PersistedClaimAnalysis | null> {
  if (!isValidClaimSessionId(claimSessionId)) {
    return null;
  }

  const { data, error } = await supabase
    .from(CLAIM_ANALYSES_TABLE)
    .select("ai_analysis, analyzed_at, ai_model, analysis_version")
    .eq("claim_session_id", claimSessionId.trim())
    .maybeSingle();

  if (error) {
    console.error("[claim-analysis-persistence] load failed:", {
      claimSessionId,
      message: error.message,
    });
    return null;
  }

  if (!data) return null;

  return parsePersistedClaimAnalysis({
    aiAnalysis: data.ai_analysis,
    analyzedAt: data.analyzed_at,
    aiModel: data.ai_model,
    analysisVersion: data.analysis_version,
  });
}
