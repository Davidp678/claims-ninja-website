import "server-only";

import { notFound } from "next/navigation";

import type { PersistedClaimAnalysis } from "@/lib/claim-analysis";
import { loadClaimAnalysisForSession } from "@/lib/claim-analysis-persistence";
import { formatClaimSessionRef } from "@/lib/claim-report-display";
import { isValidClaimSessionId } from "@/lib/claim-files";
import { createSupabaseServerClient } from "@/lib/supabase";

export type ClaimReportContext = {
  claimType?: string;
  carrierEstimate?: string;
  fileCount?: number;
};

export type ClaimReportData = {
  claimSessionId: string;
  shortRef: string;
  persisted: PersistedClaimAnalysis;
  context?: ClaimReportContext;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseLeadContext(payload: unknown): ClaimReportContext | undefined {
  if (!isRecord(payload)) return undefined;
  if (payload.calculatorType !== "claim-review") return undefined;

  const inputs = payload.claimCalculatorInputs;
  const uploadedFilesMeta = payload.uploadedFilesMeta;

  const context: ClaimReportContext = {};

  if (isRecord(inputs)) {
    if (typeof inputs.claimType === "string" && inputs.claimType.trim()) {
      context.claimType = inputs.claimType.trim();
    }
    if (typeof inputs.carrierEstimate === "string" && inputs.carrierEstimate.trim()) {
      context.carrierEstimate = inputs.carrierEstimate.trim();
    }
  }

  if (Array.isArray(uploadedFilesMeta)) {
    context.fileCount = uploadedFilesMeta.length;
  }

  return Object.keys(context).length > 0 ? context : undefined;
}

async function loadOptionalLeadContext(
  claimSessionId: string,
): Promise<ClaimReportContext | undefined> {
  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("leads")
      .select("payload")
      .filter("payload->>claimSessionId", "eq", claimSessionId)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error || !data?.payload) return undefined;
    return parseLeadContext(data.payload);
  } catch {
    return undefined;
  }
}

export async function loadClaimReportData(
  claimSessionId: string,
): Promise<ClaimReportData> {
  const trimmed = claimSessionId.trim();

  if (!isValidClaimSessionId(trimmed)) {
    notFound();
  }

  const supabase = createSupabaseServerClient();
  const persisted = await loadClaimAnalysisForSession(supabase, trimmed);

  if (!persisted) {
    notFound();
  }

  const context = await loadOptionalLeadContext(trimmed);

  return {
    claimSessionId: trimmed,
    shortRef: formatClaimSessionRef(trimmed),
    persisted,
    context,
  };
}
