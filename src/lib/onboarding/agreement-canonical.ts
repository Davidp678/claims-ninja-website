/**
 * Platform is canonical for Consulting Agreement metadata.
 * Website must fail closed if the platform response conflicts.
 */

export const AGREEMENT_TITLE = "Consulting Agreement";
export const AGREEMENT_VERSION = "2026-06-10";
export const AGREEMENT_EFFECTIVE_DATE = "2026-06-10";
export const AGREEMENT_EFFECTIVE_LABEL = "June 10, 2026";

/** Full immutable snapshot content SHA-256 (must match platform seed). */
export const AGREEMENT_CONTENT_SHA256 =
  "30142d8d0b9452de83b7cf41f92e7094a413e813af3325e74e343e639aae948d";

export type PlatformAgreementMeta = {
  title?: string | null;
  version?: string | null;
  effectiveDate?: string | null;
  effectiveDateDisplay?: string | null;
  contentSha256?: string | null;
};

export type AgreementIntegrityResult =
  | { ok: true }
  | { ok: false; reason: string };

export function assertPlatformAgreementMatchesCanonical(
  meta: PlatformAgreementMeta | null | undefined,
): AgreementIntegrityResult {
  if (!meta) {
    return {
      ok: false,
      reason: "Agreement metadata is unavailable from the platform.",
    };
  }

  const title = (meta.title ?? "").trim();
  const version = (meta.version ?? "").trim();
  const effectiveDate = (meta.effectiveDate ?? "").trim();
  const effectiveDisplay = (meta.effectiveDateDisplay ?? "").trim();
  const hash = (meta.contentSha256 ?? "").trim().toLowerCase();

  if (title !== AGREEMENT_TITLE) {
    return { ok: false, reason: "Agreement title mismatch." };
  }
  if (version !== AGREEMENT_VERSION) {
    return { ok: false, reason: "Agreement version mismatch." };
  }
  if (
    effectiveDate !== AGREEMENT_EFFECTIVE_DATE &&
    effectiveDisplay !== AGREEMENT_EFFECTIVE_LABEL
  ) {
    return { ok: false, reason: "Agreement effective date mismatch." };
  }
  if (hash !== AGREEMENT_CONTENT_SHA256) {
    return { ok: false, reason: "Agreement content hash mismatch." };
  }

  return { ok: true };
}
