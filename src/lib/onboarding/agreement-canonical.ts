/**
 * Platform is canonical for clickwrap document metadata.
 * Website must fail closed if the platform response conflicts.
 */

export const TERMS_TITLE = "Consulting Agreement";
export const TERMS_DISPLAY_TITLE = "Claims Ninja Terms of Service";
export const TERMS_VERSION = "2026-06-10";
export const TERMS_EFFECTIVE_DATE = "2026-06-10";
export const TERMS_EFFECTIVE_LABEL = "June 10, 2026";
export const TERMS_CONTENT_SHA256 =
  "30142d8d0b9452de83b7cf41f92e7094a413e813af3325e74e343e639aae948d";

export const PRIVACY_TITLE = "Privacy Policy";
export const PRIVACY_VERSION = "counsel-approved-2026-07-24";
export const PRIVACY_EFFECTIVE_DATE = "2026-07-24";
export const PRIVACY_EFFECTIVE_LABEL = "July 24, 2026";
export const PRIVACY_CONTENT_SHA256 =
  "ce1c4acf446674334dcc6b92e26d08847a5c4b42c6febb72ee1a3f5591ac87a1";

/** Exact approved checkbox language (native clickwrap; no e-sign provider). */
export const APPROVED_CLICKWRAP_LANGUAGE =
  "I have read and agree to the Claims Ninja Terms of Service and acknowledge the Privacy Policy. I consent to use electronic records and signatures for this onboarding process.";

/** @deprecated Use TERMS_* constants */
export const AGREEMENT_TITLE = TERMS_TITLE;
/** @deprecated Use TERMS_VERSION */
export const AGREEMENT_VERSION = TERMS_VERSION;
/** @deprecated Use TERMS_EFFECTIVE_DATE */
export const AGREEMENT_EFFECTIVE_DATE = TERMS_EFFECTIVE_DATE;
/** @deprecated Use TERMS_EFFECTIVE_LABEL */
export const AGREEMENT_EFFECTIVE_LABEL = TERMS_EFFECTIVE_LABEL;
/** @deprecated Use TERMS_CONTENT_SHA256 */
export const AGREEMENT_CONTENT_SHA256 = TERMS_CONTENT_SHA256;

export type PlatformAgreementDoc = {
  documentId?: string | null;
  title?: string | null;
  displayTitle?: string | null;
  version?: string | null;
  effectiveDate?: string | null;
  effectiveDateDisplay?: string | null;
  contentSha256?: string | null;
  textPreview?: string | null;
  stagingPlaceholder?: boolean;
};

export type PlatformAgreementMeta = PlatformAgreementDoc & {
  acceptanceEnabled?: boolean;
  approvedAcceptanceLanguage?: string | null;
  documents?: PlatformAgreementDoc[] | null;
  privacy?: PlatformAgreementDoc | null;
  configurationError?: string | null;
};

export type AgreementIntegrityResult =
  | { ok: true }
  | { ok: false; reason: string };

function matchesDoc(
  meta: PlatformAgreementDoc | null | undefined,
  expected: {
    title: string;
    displayTitle?: string;
    version: string;
    effectiveDate: string;
    effectiveLabel: string;
    hash: string;
  },
): AgreementIntegrityResult {
  if (!meta) {
    return { ok: false, reason: "Document metadata is unavailable." };
  }
  const title = (meta.title ?? "").trim();
  const displayTitle = (meta.displayTitle ?? "").trim();
  const version = (meta.version ?? "").trim();
  const effectiveDate = (meta.effectiveDate ?? "").trim();
  const effectiveDisplay = (meta.effectiveDateDisplay ?? "").trim();
  const hash = (meta.contentSha256 ?? "").trim().toLowerCase();

  const titleOk =
    title === expected.title ||
    (expected.displayTitle !== undefined &&
      (displayTitle === expected.displayTitle || title === expected.displayTitle));
  if (!titleOk) {
    return { ok: false, reason: "Document title mismatch." };
  }
  if (version !== expected.version) {
    return { ok: false, reason: "Document version mismatch." };
  }
  if (
    effectiveDate !== expected.effectiveDate &&
    effectiveDisplay !== expected.effectiveLabel
  ) {
    return { ok: false, reason: "Document effective date mismatch." };
  }
  if (hash !== expected.hash) {
    return { ok: false, reason: "Document content hash mismatch." };
  }
  return { ok: true };
}

export function assertPlatformAgreementMatchesCanonical(
  meta: PlatformAgreementMeta | null | undefined,
): AgreementIntegrityResult {
  if (!meta) {
    return {
      ok: false,
      reason: "Agreement metadata is unavailable from the platform.",
    };
  }
  if (meta.configurationError) {
    return {
      ok: false,
      reason: "Agreement configuration is unavailable.",
    };
  }

  const termsCheck = matchesDoc(meta, {
    title: TERMS_TITLE,
    displayTitle: TERMS_DISPLAY_TITLE,
    version: TERMS_VERSION,
    effectiveDate: TERMS_EFFECTIVE_DATE,
    effectiveLabel: TERMS_EFFECTIVE_LABEL,
    hash: TERMS_CONTENT_SHA256,
  });
  if (!termsCheck.ok) return termsCheck;

  const privacy = meta.privacy ??
    meta.documents?.find(
      (d) =>
        (d.title ?? "").trim() === PRIVACY_TITLE ||
        (d.displayTitle ?? "").trim() === PRIVACY_TITLE,
    );
  const privacyCheck = matchesDoc(privacy, {
    title: PRIVACY_TITLE,
    version: PRIVACY_VERSION,
    effectiveDate: PRIVACY_EFFECTIVE_DATE,
    effectiveLabel: PRIVACY_EFFECTIVE_LABEL,
    hash: PRIVACY_CONTENT_SHA256,
  });
  if (!privacyCheck.ok) return privacyCheck;

  if (
    meta.approvedAcceptanceLanguage &&
    meta.approvedAcceptanceLanguage.trim() !== APPROVED_CLICKWRAP_LANGUAGE
  ) {
    return { ok: false, reason: "Approved acceptance language mismatch." };
  }

  return { ok: true };
}
