"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { SectionCard } from "@/components/onboarding/FormField";
import { OnboardingLoading } from "@/components/onboarding/OnboardingLoading";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { useOnboardingSession } from "@/components/onboarding/useOnboardingSession";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import {
  APPROVED_CLICKWRAP_LANGUAGE,
  PRIVACY_EFFECTIVE_LABEL,
  PRIVACY_TITLE,
  PRIVACY_VERSION,
  TERMS_DISPLAY_TITLE,
  TERMS_EFFECTIVE_LABEL,
  TERMS_VERSION,
  assertPlatformAgreementMatchesCanonical,
  type PlatformAgreementMeta,
} from "@/lib/onboarding/agreement-canonical";

type AgreementPackage = PlatformAgreementMeta & {
  documentId?: string;
  textPreview?: string;
  acceptanceEnabled?: boolean;
};

export function AgreementStage() {
  const router = useRouter();
  const { session, loading, error, saveState, saveExit, version } =
    useOnboardingSession();
  const [agreement, setAgreement] = useState<AgreementPackage | null>(null);
  const [integrityError, setIntegrityError] = useState<string | null>(null);
  const [authority, setAuthority] = useState(false);
  const [clickwrap, setClickwrap] = useState(false);
  const [busy, setBusy] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [activeDoc, setActiveDoc] = useState<"terms" | "privacy">("terms");
  const checkboxId = useId();
  const authorityId = useId();
  const errorRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    void (async () => {
      const result = await onboardingFetchJson<AgreementPackage>(
        "/api/onboarding/agreement",
      );
      if (!result.ok) {
        setIntegrityError(
          "Legal documents are temporarily unavailable. Please try again later.",
        );
        return;
      }
      const check = assertPlatformAgreementMatchesCanonical(result.data);
      if (!check.ok) {
        setAgreement(null);
        setIntegrityError(
          "Legal configuration is unavailable. Document metadata from the platform does not match the approved clickwrap package.",
        );
        return;
      }
      setIntegrityError(null);
      setAgreement(result.data);
    })();
  }, []);

  useEffect(() => {
    if (localError) errorRef.current?.focus();
  }, [localError]);

  const company =
    session?.company?.legalCompanyName ||
    session?.company?.dbaName ||
    "your company";
  const signerName = [session?.company?.firstName, session?.company?.lastName]
    .filter(Boolean)
    .join(" ");

  const termsText =
    agreement?.textPreview ||
    agreement?.documents?.find((d) => d.title === "Consulting Agreement")
      ?.textPreview ||
    "";
  const privacyText =
    agreement?.privacy?.textPreview ||
    agreement?.documents?.find((d) => d.title === PRIVACY_TITLE)?.textPreview ||
    "";

  async function handleAgreeAndContinue() {
    setLocalError(null);
    if (integrityError || !agreement) {
      setLocalError("Legal documents are unavailable.");
      return;
    }
    const alreadyAccepted = session?.agreement?.accepted === true;
    if (
      !alreadyAccepted &&
      (agreement.acceptanceEnabled === false ||
        agreement.privacy?.stagingPlaceholder === true)
    ) {
      setLocalError(
        "Legal acceptance is unavailable until an approved Privacy Policy is published.",
      );
      return;
    }
    if (!alreadyAccepted && (!authority || !clickwrap)) {
      setLocalError(
        "Confirm authorization and the required acceptance checkbox to continue.",
      );
      return;
    }
    const check = assertPlatformAgreementMatchesCanonical(agreement);
    if (!check.ok) {
      setIntegrityError(
        "Legal configuration is unavailable. Please refresh and try again.",
      );
      return;
    }
    setBusy(true);
    const result = await onboardingFetchJson("/api/onboarding/agreement/accept", {
      method: "POST",
      json: {
        expectedVersion: version,
        documentId: agreement.documentId,
        documentVersion: TERMS_VERSION,
        contentSha256: agreement.contentSha256,
        privacyDocumentId: agreement.privacy?.documentId,
        privacyDocumentVersion: agreement.privacy?.version,
        privacyContentSha256: agreement.privacy?.contentSha256,
        signerName,
        signerEmail: session?.company?.workEmail || session?.accountEmail,
        organizationName: company,
        authorityAttested: true,
        termsAttested: true,
        checkboxAttested: true,
        explicitSubmit: true,
        acceptanceLanguage: APPROVED_CLICKWRAP_LANGUAGE,
      },
    });
    setBusy(false);
    if (!result.ok) {
      setLocalError(result.message);
      return;
    }
    router.push("/onboarding/billing");
  }

  if (loading) {
    return <OnboardingLoading />;
  }
  if (!session) {
    return (
      <div className="bg-brand-black px-5 py-24 text-center text-zinc-300">
        <p>{error ?? "No active intake session."}</p>
        <Link href="/" className="mt-4 inline-block text-brand-red-light">
          Start from the homepage
        </Link>
      </div>
    );
  }

  const privacyPlaceholder =
    agreement?.privacy?.stagingPlaceholder === true ||
    agreement?.documents?.some(
      (d) =>
        ((d.title ?? "").trim() === PRIVACY_TITLE ||
          (d.displayTitle ?? "").trim() === PRIVACY_TITLE) &&
        d.stagingPlaceholder === true,
    ) === true;

  const alreadyAccepted = session.agreement?.accepted === true;

  const acceptanceBlocked =
    !!integrityError ||
    !agreement ||
    (!alreadyAccepted &&
      (agreement.acceptanceEnabled === false || privacyPlaceholder));

  const canSubmit =
    !busy &&
    !acceptanceBlocked &&
    (alreadyAccepted || (authority && clickwrap));

  return (
    <OnboardingShell
      stage="agreement"
      title="Terms & privacy"
      description={`Review the Claims Ninja Terms of Service and Privacy Policy for ${company}, then agree to continue.`}
      saveState={saveState}
      onSaveExit={() => void saveExit()}
      continueLabel="Agree and continue"
      onContinue={() => void handleAgreeAndContinue()}
      continueDisabled={!canSubmit}
      continueLoading={busy}
    >
      {integrityError ? (
        <SectionCard>
          <p className="text-sm text-amber-200" role="alert">
            {integrityError}
          </p>
          <p className="mt-3 text-xs text-zinc-500">
            Expected: {TERMS_DISPLAY_TITLE} · {TERMS_VERSION} ·{" "}
            {TERMS_EFFECTIVE_LABEL}
          </p>
        </SectionCard>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
          <SectionCard>
            <div className="mb-4 flex flex-wrap items-center gap-2" role="tablist" aria-label="Legal documents">
              <button
                type="button"
                role="tab"
                aria-selected={activeDoc === "terms"}
                className={`rounded-lg px-3 py-2 text-sm ${
                  activeDoc === "terms"
                    ? "bg-brand-red text-white"
                    : "border border-white/20 text-zinc-300 hover:border-white/40"
                }`}
                onClick={() => setActiveDoc("terms")}
              >
                Terms of Service
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeDoc === "privacy"}
                className={`rounded-lg px-3 py-2 text-sm ${
                  activeDoc === "privacy"
                    ? "bg-brand-red text-white"
                    : "border border-white/20 text-zinc-300 hover:border-white/40"
                }`}
                onClick={() => setActiveDoc("privacy")}
              >
                Privacy Policy
              </button>
              <a
                href={`/api/onboarding/agreement/download?doc=${activeDoc === "privacy" ? "privacy" : "terms"}`}
                className="ml-auto rounded-lg border border-white/20 px-3 py-2 text-sm text-white hover:border-white/40"
              >
                Download
              </a>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">
                {activeDoc === "privacy"
                  ? PRIVACY_TITLE
                  : TERMS_DISPLAY_TITLE}
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                {activeDoc === "privacy"
                  ? privacyPlaceholder
                    ? "Staging placeholder — not approved for acceptance"
                    : `Version ${agreement?.privacy?.version ?? PRIVACY_VERSION} · Effective ${agreement?.privacy?.effectiveDateDisplay ?? PRIVACY_EFFECTIVE_LABEL}`
                  : `Version ${TERMS_VERSION} · Effective ${TERMS_EFFECTIVE_LABEL}`}
              </p>
            </div>
            <div
              className="mt-4 max-h-[28rem] overflow-y-auto rounded-xl border border-white/10 bg-brand-black/50 p-4 text-sm leading-relaxed text-zinc-300"
              tabIndex={0}
              aria-label={
                activeDoc === "privacy"
                  ? "Privacy Policy text"
                  : "Terms of Service text"
              }
            >
              <pre className="whitespace-pre-wrap font-sans">
                {(activeDoc === "privacy" ? privacyText : termsText) ||
                  "Loading document…"}
              </pre>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Documents are available for full review before acceptance. Native
              clickwrap only — no third-party e-signature provider.
            </p>
          </SectionCard>

          <SectionCard title="Review & accept">
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-zinc-500">Signer</dt>
                <dd className="text-white">{signerName || "—"}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-zinc-500">Company</dt>
                <dd className="text-right text-white">{company}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-zinc-500">Verified email</dt>
                <dd className="text-right text-white">
                  {session.accountEmail ||
                    session.company?.workEmail ||
                    "—"}
                </dd>
              </div>
            </dl>

            <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-100">
              Acceptance is recorded with the document versions, content hashes,
              verified identity context, and server timestamp. No handwritten
              signature ceremony is used.
            </div>

            <label
              htmlFor={authorityId}
              className="mt-5 flex items-start gap-3 text-sm text-zinc-200"
            >
              <input
                id={authorityId}
                type="checkbox"
                checked={authority}
                onChange={(e) => setAuthority(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-white/30 bg-brand-black text-brand-red focus:ring-brand-red"
              />
              <span>I confirm that I am authorized to bind {company}.</span>
            </label>

            <label
              htmlFor={checkboxId}
              className="mt-3 flex items-start gap-3 text-sm text-zinc-200"
            >
              <input
                id={checkboxId}
                type="checkbox"
                checked={clickwrap}
                onChange={(e) => setClickwrap(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-white/30 bg-brand-black text-brand-red focus:ring-brand-red"
              />
              <span>{APPROVED_CLICKWRAP_LANGUAGE}</span>
            </label>

            {(localError || error) && (
              <p
                ref={errorRef}
                tabIndex={-1}
                className="mt-3 text-sm text-brand-red-light outline-none"
                role="alert"
                aria-live="assertive"
              >
                {localError || error}
              </p>
            )}

            {agreement?.acceptanceEnabled === false || privacyPlaceholder ? (
              <p className="mt-3 text-sm text-amber-300" role="status">
                {privacyPlaceholder
                  ? "Privacy Policy is still a staging placeholder and cannot be accepted. Legal readiness is incomplete until counsel-approved text is published."
                  : "Legal acceptance is currently disabled pending release gates."}
              </p>
            ) : null}

            {session.agreement?.accepted ? (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-emerald-200">
                  Acceptance already recorded for this intake.
                </p>
                <a
                  href="/api/onboarding/agreement/receipt"
                  className="inline-block text-sm text-brand-red-light hover:underline"
                >
                  Download acceptance receipt
                </a>
              </div>
            ) : null}
          </SectionCard>
        </div>
      )}
    </OnboardingShell>
  );
}
