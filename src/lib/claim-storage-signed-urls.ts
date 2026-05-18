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

export async function createClaimFileSignedUrls(
  supabase: SupabaseClient,
  files: UploadedFileMeta[],
): Promise<SignedClaimFileInput[]> {
  const results: SignedClaimFileInput[] = [];

  for (const meta of files) {
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

    results.push({ meta, signedUrl: data.signedUrl });
  }

  return results;
}
