import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";

import type { UploadedFileMeta } from "@/lib/calculator-lead";

export const SIGNED_URL_TTL_SECONDS = 600;

export type SignedClaimFileInput = {
  meta: UploadedFileMeta;
  signedUrl: string;
};

export class SignedUrlError extends Error {
  readonly code = "SIGNED_URL_FAILED" as const;

  constructor(message: string) {
    super(message);
    this.name = "SignedUrlError";
  }
}

async function createSingleSignedUrl(
  supabase: SupabaseClient,
  meta: UploadedFileMeta,
): Promise<SignedClaimFileInput> {
  const { data, error } = await supabase.storage
    .from(meta.bucket)
    .createSignedUrl(meta.storagePath, SIGNED_URL_TTL_SECONDS);

  if (error || !data?.signedUrl) {
    console.error("[claim-storage-signed-urls] createSignedUrl failed:", {
      storagePath: meta.storagePath,
      message: error?.message,
    });
    throw new SignedUrlError(
      `Failed to create signed URL for ${meta.originalName}.`,
    );
  }

  return { meta, signedUrl: data.signedUrl };
}

export async function createClaimFileSignedUrls(
  supabase: SupabaseClient,
  files: UploadedFileMeta[],
): Promise<SignedClaimFileInput[]> {
  return Promise.all(files.map((meta) => createSingleSignedUrl(supabase, meta)));
}
