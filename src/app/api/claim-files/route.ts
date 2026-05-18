import { NextResponse } from "next/server";

import {
  buildClaimStoragePath,
  CLAIM_FILES_BUCKET,
  isValidClaimSessionId,
  MAX_CLAIM_FILES,
  sanitizeStorageFileName,
  toClaimFileRecord,
  validateClaimFileInput,
  type ClaimFileRecord,
} from "@/lib/claim-files";
import {
  createSupabaseServerClient,
  SupabaseServerConfigError,
} from "@/lib/supabase";

export const runtime = "nodejs";

function isFileLike(value: FormDataEntryValue): value is File {
  return (
    typeof value === "object" &&
    value !== null &&
    "arrayBuffer" in value &&
    typeof (value as File).arrayBuffer === "function"
  );
}

export async function POST(request: Request) {
  try {
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { error: "Invalid multipart form data", code: "INVALID_FORM" },
        { status: 400 },
      );
    }

    const sessionIdRaw = formData.get("sessionId");
    if (typeof sessionIdRaw !== "string" || !isValidClaimSessionId(sessionIdRaw)) {
      return NextResponse.json(
        { error: "A valid sessionId is required.", code: "INVALID_SESSION" },
        { status: 400 },
      );
    }
    const sessionId = sessionIdRaw.trim();

    const entries = formData.getAll("files").filter(isFileLike);
    if (entries.length === 0) {
      return NextResponse.json(
        { error: "No files provided.", code: "NO_FILES" },
        { status: 400 },
      );
    }
    if (entries.length > MAX_CLAIM_FILES) {
      return NextResponse.json(
        {
          error: `You can upload up to ${MAX_CLAIM_FILES} files per request.`,
          code: "TOO_MANY_FILES",
        },
        { status: 400 },
      );
    }

    for (const file of entries) {
      const check = validateClaimFileInput({
        name: file.name,
        type: file.type,
        size: file.size,
      });
      if (!check.ok) {
        return NextResponse.json(
          { error: check.reason, code: "INVALID_FILE" },
          { status: 400 },
        );
      }
    }

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

    const uploaded: ClaimFileRecord[] = [];

    for (const file of entries) {
      const fileName = sanitizeStorageFileName(file.name);
      const storagePath = buildClaimStoragePath(sessionId, fileName);
      const contentType =
        file.type.split(";")[0]?.trim() || "application/octet-stream";
      const buffer = Buffer.from(await file.arrayBuffer());

      const { error } = await supabase.storage
        .from(CLAIM_FILES_BUCKET)
        .upload(storagePath, buffer, {
          contentType,
          upsert: false,
        });

      if (error) {
        console.error("[api/claim-files] Storage upload error:", {
          message: error.message,
          storagePath,
        });
        return NextResponse.json(
          { error: "Failed to upload file.", code: "STORAGE_UPLOAD_FAILED" },
          { status: 500 },
        );
      }

      uploaded.push(
        toClaimFileRecord(
          sessionId,
          fileName,
          file.name,
          contentType,
          file.size,
        ),
      );
    }

    return NextResponse.json({ sessionId, files: uploaded });
  } catch (err) {
    console.error("[api/claim-files] Unhandled error:", err);
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL" },
      { status: 500 },
    );
  }
}
