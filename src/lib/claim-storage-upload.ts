import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";

import {
  CLAIM_FILES_BUCKET,
  buildClaimStoragePath,
  sanitizeStorageFileName,
  toClaimFileRecord,
  validateClaimFileInput,
  type ClaimFileRecord,
  type ClaimFileValidationInput,
} from "@/lib/claim-files";

export type PreparedClaimFileUpload = {
  signedUrl: string;
  token: string;
  storagePath: string;
  record: ClaimFileRecord;
};

export class ClaimFileUploadPrepareError extends Error {
  readonly code: string;

  constructor(message: string, code: string) {
    super(message);
    this.name = "ClaimFileUploadPrepareError";
    this.code = code;
  }
}

export async function prepareClaimFileUpload(
  supabase: SupabaseClient,
  sessionId: string,
  file: ClaimFileValidationInput,
): Promise<PreparedClaimFileUpload> {
  const check = validateClaimFileInput(file);
  if (!check.ok) {
    throw new ClaimFileUploadPrepareError(check.reason, "INVALID_FILE");
  }

  const fileName = sanitizeStorageFileName(file.name);
  const storagePath = buildClaimStoragePath(sessionId, fileName);
  const contentType =
    file.type.split(";")[0]?.trim() || "application/octet-stream";

  const { data, error } = await supabase.storage
    .from(CLAIM_FILES_BUCKET)
    .createSignedUploadUrl(storagePath, { upsert: false });

  if (error || !data?.signedUrl || !data.token) {
    console.error("[claim-storage-upload] createSignedUploadUrl failed:", {
      message: error?.message,
      storagePath,
    });
    throw new ClaimFileUploadPrepareError(
      "Failed to prepare file upload.",
      "SIGNED_UPLOAD_PREPARE_FAILED",
    );
  }

  const record = toClaimFileRecord(
    sessionId,
    fileName,
    file.name,
    contentType,
    file.size,
  );

  return {
    signedUrl: data.signedUrl,
    token: data.token,
    storagePath,
    record,
  };
}
