import { NextResponse } from "next/server";

import { parseClaimFilePrepareRequest } from "@/lib/claim-files";
import {
  ClaimFileUploadPrepareError,
  prepareClaimFileUpload,
} from "@/lib/claim-storage-upload";
import {
  createSupabaseServerClient,
  SupabaseServerConfigError,
} from "@/lib/supabase";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        {
          error:
            "Multipart uploads are not supported. Use JSON prepare + direct Storage upload.",
          code: "USE_SIGNED_UPLOAD",
        },
        { status: 400 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body", code: "INVALID_JSON" },
        { status: 400 },
      );
    }

    const parsed = parseClaimFilePrepareRequest(body);
    if (!parsed.ok) {
      const code =
        parsed.reason.includes("sessionId") ? "INVALID_SESSION" : "INVALID_FILE";
      return NextResponse.json(
        { error: parsed.reason, code },
        { status: 400 },
      );
    }

    const { sessionId, file } = parsed.data;

    let supabase;
    try {
      supabase = createSupabaseServerClient();
    } catch (err) {
      if (err instanceof SupabaseServerConfigError) {
        console.error("[api/claim-files] Supabase config:", err.message);
        return NextResponse.json(
          { error: "File upload is not configured.", code: err.code },
          { status: 503 },
        );
      }
      throw err;
    }

    try {
      const prepared = await prepareClaimFileUpload(supabase, sessionId, file);
      return NextResponse.json({
        sessionId,
        signedUrl: prepared.signedUrl,
        file: prepared.record,
      });
    } catch (err) {
      if (err instanceof ClaimFileUploadPrepareError) {
        return NextResponse.json(
          { error: err.message, code: err.code },
          { status: err.code === "INVALID_FILE" ? 400 : 500 },
        );
      }
      throw err;
    }
  } catch (err) {
    console.error("[api/claim-files] Unhandled error:", err);
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL" },
      { status: 500 },
    );
  }
}
