"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { SectionCard } from "@/components/onboarding/FormField";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { useOnboardingSession } from "@/components/onboarding/useOnboardingSession";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import {
  AGREEMENT_EFFECTIVE_LABEL,
  AGREEMENT_TITLE,
  AGREEMENT_VERSION,
} from "@/lib/onboarding/constants";

type AgreementMeta = {
  documentId?: string;
  title?: string;
  version?: string;
  effectiveDate?: string;
  contentSha256?: string;
  acceptanceEnabled?: boolean;
  textPreview?: string;
};

export function AgreementStage() {
  const router = useRouter();
  const { session, loading, error, saveState, saveExit, version } =
    useOnboardingSession();
  const [agreement, setAgreement] = useState<AgreementMeta | null>(null);
  const [authority, setAuthority] = useState(false);
  const [terms, setTerms] = useState(false);
  const [busy, setBusy] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const result = await onboardingFetchJson<AgreementMeta>(
        "/api/onboarding/agreement",
      );
      if (result.ok) setAgreement(result.data);
    })();
  }, []);

  const company =
    session?.company?.legalCompanyName ||
    session?.company?.dbaName ||
    "your company";
  const signerName = [session?.company?.firstName, session?.company?.lastName]
    .filter(Boolean)
    .join(" ");
  // Canonical public labels — never show "Service Agreement" / "Version 1.0".
  const title = AGREEMENT_TITLE;
  const versionLabel = AGREEMENT_VERSION;
  const effective = AGREEMENT_EFFECTIVE_LABEL;
  const documentVersion = agreement?.version || AGREEMENT_VERSION;

  async function handleContinue() {
    setLocalError(null);
    if (!authority || !terms) {
      setLocalError("Confirm both acceptance boxes to continue.");
      return;
    }
    setBusy(true);
    const result = await onboardingFetchJson("/api/onboarding/agreement/accept", {
      method: "POST",
      json: {
        expectedVersion: version,
        documentId: agreement?.documentId,
        documentVersion,
        contentSha256: agreement?.contentSha256,
        signerName,
        signerEmail: session?.company?.workEmail,
        organizationName: company,
        authorityAttested: true,
        termsAttested: true,
        acceptanceLanguage: `I have read and agree to the ${title} and Privacy Policy.`,
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
    return <div className="bg-brand-black px-5 py-24 text-zinc-400">Loading…</div>;
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

  const acceptanceBlocked = agreement?.acceptanceEnabled === false;

  return (
    <OnboardingShell
      stage="agreement"
      title="Consulting Agreement"
      description={`Review and accept the agreement for ${company}.`}
      saveState={saveState}
      onSaveExit={() => void saveExit()}
      continueLabel="Accept & continue to billing →"
      onContinue={() => void handleContinue()}
      continueDisabled={!authority || !terms || acceptanceBlocked}
      continueLoading={busy}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        <SectionCard>
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Consulting Agreement
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                Version {versionLabel} · Effective {effective}
              </p>
            </div>
            <a
              href="/api/onboarding/agreement/download"
              className="rounded-lg border border-white/20 px-3 py-2 text-sm text-white hover:border-white/40"
            >
              Download
            </a>
          </div>
          <div className="max-h-[28rem] overflow-y-auto rounded-xl border border-white/10 bg-brand-black/50 p-4 text-sm leading-relaxed text-zinc-300">
            {agreement?.textPreview ? (
              <pre className="whitespace-pre-wrap font-sans">
                {agreement.textPreview}
              </pre>
            ) : (
              <div className="space-y-4">
                <p>
                  This {title} sets forth the terms governing the relationship
                  between The Claims Ninja LLC and the Client organization named
                  during onboarding.
                </p>
                <p>
                  The full immutable snapshot (version {versionLabel}, effective{" "}
                  {effective}) is available for download. Scroll and review before
                  accepting.
                </p>
                <p className="text-zinc-500">
                  Production acceptance remains release-gated until legal review
                  clears. Engineering environments may allow test acceptance when
                  the platform flag permits.
                </p>
              </div>
            )}
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            Scroll to review the complete agreement.
          </p>
        </SectionCard>

        <SectionCard title="Review & accept">
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Signer</dt>
              <dd className="text-white">{signerName || "—"}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Title</dt>
              <dd className="text-white">{session.company?.jobTitle || "—"}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Company</dt>
              <dd className="text-right text-white">{company}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Email</dt>
              <dd className="text-right text-white">
                {session.company?.workEmail || "—"}
              </dd>
            </div>
          </dl>

          <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-100">
            Your acceptance is securely recorded. We record the agreement version,
            date, signer, and verification details.
          </div>

          <label className="mt-5 flex items-start gap-3 text-sm text-zinc-200">
            <input
              type="checkbox"
              checked={authority}
              onChange={(e) => setAuthority(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-white/30 bg-brand-black text-brand-red focus:ring-brand-red"
            />
            <span>
              I confirm that I am authorized to bind {company}.
            </span>
          </label>

          <label className="mt-3 flex items-start gap-3 text-sm text-zinc-200">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-white/30 bg-brand-black text-brand-red focus:ring-brand-red"
            />
            <span>
              I have read and agree to the{" "}
              <span className="text-brand-red-light">{title}</span> and Privacy
              Policy.
            </span>
          </label>

          <p className="mt-4 text-xs text-zinc-500">
            By continuing, you are providing an electronic signature.
          </p>

          {(localError || error) && (
            <p className="mt-3 text-sm text-brand-red-light" role="alert">
              {localError || error}
            </p>
          )}

          {acceptanceBlocked ? (
            <p className="mt-3 text-sm text-amber-300">
              Legal acceptance is currently disabled pending release gates.
            </p>
          ) : null}
        </SectionCard>
      </div>
    </OnboardingShell>
  );
}
