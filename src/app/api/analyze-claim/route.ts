import { NextResponse } from "next/server";

import type { ClaimAnalysisResult } from "@/lib/claim-analysis";
import {
  calibrateOpportunityScore,
  parseCarrierEstimate,
} from "@/lib/claim-scoring";
import { saveClaimAnalysis } from "@/lib/claim-analysis-persistence";
import {
  getClaimDeepModel,
  getClaimTriageModel,
  OpenAIAnalysisError,
  OpenAIConfigError,
  runClaimDeepAnalysis,
  runClaimTriageAnalysis,
} from "@/lib/claim-analysis-openai";
import { validateAnalyzeClaimRequest } from "@/lib/claim-files";
import {
  createClaimFileSignedUrls,
  SignedUrlError,
} from "@/lib/claim-storage-signed-urls";
import {
  createSupabaseServerClient,
  SupabaseServerConfigError,
} from "@/lib/supabase";

export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Apply the shared deterministic calibration so the homepage card (returned
 * triage) and the report page (persisted deep) use identical score logic.
 */
function withCalibratedScore(
  analysis: ClaimAnalysisResult,
  carrierEstimate: number,
): ClaimAnalysisResult {
  return {
    ...analysis,
    opportunityScore: calibrateOpportunityScore({
      revenueRange: analysis.estimatedMissedRevenueRange,
      findings: analysis.findings,
      carrierEstimate,
      fallbackScore: analysis.opportunityScore,
    }),
  };
}

function logUsage(
  phase: "triage" | "deep",
  model: string,
  sessionId: string,
  usage: { promptTokens: number; completionTokens: number; totalTokens: number } | null,
) {
  if (!usage) return;
  console.info("[api/analyze-claim] token usage:", {
    phase,
    model,
    claimSessionId: sessionId,
    ...usage,
  });
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body", code: "INVALID_REQUEST" },
        { status: 400 },
      );
    }

    const validated = validateAnalyzeClaimRequest(body);
    if (!validated.ok) {
      return NextResponse.json(
        { error: validated.reason, code: "INVALID_REQUEST" },
        { status: 400 },
      );
    }

    const claimRequest = validated.data;

    let supabase;
    try {
      supabase = createSupabaseServerClient();
    } catch (err) {
      if (err instanceof SupabaseServerConfigError) {
        console.error("[api/analyze-claim] Supabase config:", err.message);
        return NextResponse.json(
          { error: "Analysis is not configured.", code: err.code },
          { status: 503 },
        );
      }
      throw err;
    }

    let signedFiles: Awaited<ReturnType<typeof createClaimFileSignedUrls>> = [];
    if (claimRequest.uploadedFilesMeta.length > 0) {
      try {
        signedFiles = await createClaimFileSignedUrls(
          supabase,
          claimRequest.uploadedFilesMeta,
        );
      } catch (err) {
        if (err instanceof SignedUrlError) {
          return NextResponse.json(
            { error: err.message, code: err.code },
            { status: 500 },
          );
        }
        throw err;
      }
    }

    const carrierEstimate = parseCarrierEstimate(claimRequest.carrierEstimate);

    const triageModel = getClaimTriageModel();
    const { analysis: rawTriageAnalysis, usage: triageUsage } =
      await runClaimTriageAnalysis({
        request: claimRequest,
        signedFiles,
      });
    const triageAnalysis = withCalibratedScore(rawTriageAnalysis, carrierEstimate);

    logUsage("triage", triageModel, claimRequest.claimSessionId, triageUsage);

    // Persist triage synchronously so a fast lead submit can reliably find the
    // analysis by claimSessionId. Deep analysis still overwrites it async below.
    const triageSave = await saveClaimAnalysis(
      supabase,
      claimRequest.claimSessionId,
      triageAnalysis,
      triageModel,
    );
    if (!triageSave.ok) {
      console.error(
        "[api/analyze-claim] Failed to persist triage analysis (response still returned):",
        triageSave.error,
      );
    }

    const deepModel = getClaimDeepModel();
    void runClaimDeepAnalysis({
      request: claimRequest,
      signedFiles,
    })
      .then(({ analysis: deepAnalysis, usage: deepUsage }) => {
        logUsage("deep", deepModel, claimRequest.claimSessionId, deepUsage);
        return saveClaimAnalysis(
          supabase,
          claimRequest.claimSessionId,
          withCalibratedScore(deepAnalysis, carrierEstimate),
          deepModel,
        );
      })
      .then((saveResult) => {
        if (!saveResult.ok) {
          console.error(
            "[api/analyze-claim] Failed to persist deep analysis:",
            saveResult.error,
          );
        }
      })
      .catch((err) => {
        console.error("[api/analyze-claim] Deep analysis background error:", err);
      });

    return NextResponse.json({
      analysis: triageAnalysis,
      phase: "triage",
    });
  } catch (err) {
    if (err instanceof OpenAIConfigError) {
      console.error("[api/analyze-claim] OpenAI config:", err.message);
      return NextResponse.json(
        { error: "AI analysis is not configured.", code: err.code },
        { status: 503 },
      );
    }
    if (err instanceof OpenAIAnalysisError) {
      console.error("[api/analyze-claim] OpenAI analysis:", err.message);
      return NextResponse.json(
        { error: "Failed to analyze claim.", code: err.code },
        { status: 502 },
      );
    }

    console.error("[api/analyze-claim] Unhandled error:", err);
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL" },
      { status: 500 },
    );
  }
}
