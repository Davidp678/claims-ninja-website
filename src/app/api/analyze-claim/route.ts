import { NextResponse } from "next/server";

import {
  OpenAIAnalysisError,
  OpenAIConfigError,
  runClaimAnalysis,
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

    let signedFiles: Awaited<ReturnType<typeof createClaimFileSignedUrls>> = [];
    if (claimRequest.uploadedFilesMeta.length > 0) {
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

    const analysis = await runClaimAnalysis({
      request: claimRequest,
      signedFiles,
    });

    return NextResponse.json({ analysis });
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
