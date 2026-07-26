"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { SectionCard } from "@/components/onboarding/FormField";
import { OnboardingLoading } from "@/components/onboarding/OnboardingLoading";
import { ProgressRail } from "@/components/onboarding/ProgressRail";
import { useOnboardingSession } from "@/components/onboarding/useOnboardingSession";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import { buildIntakeHandoffUrl } from "@/lib/onboarding/intake-handoff-url";
import { SITE } from "@/lib/constants";

type ProvisionStatus = {
  status?: string;
  organizationName?: string;
  ownerName?: string;
  claimTitle?: string;
  readyFileCount?: number;
};

type HandoffResult = {
  handoffCode?: string;
  expiresAt?: string;
  redirectPathHint?: string;
};

export function ActivatedStage() {
  const { session, loading, error } = useOnboardingSession();
  const [provision, setProvision] = useState<ProvisionStatus | null>(null);
  const [provisionLoading, setProvisionLoading] = useState(true);
  const [provisionError, setProvisionError] = useState<string | null>(null);
  const [handoffError, setHandoffError] = useState<string | null>(null);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    void (async () => {
      setProvisionLoading(true);
      setProvisionError(null);
      const result = await onboardingFetchJson<ProvisionStatus>(
        "/api/onboarding/provision",
      );
      setProvisionLoading(false);
      if (result.ok) {
        setProvision(result.data);
        if (
          result.data?.status === "failed_retryable" ||
          result.data?.status === "failed"
        ) {
          setProvisionError(
            "Workspace setup hit a temporary issue. You can retry in a moment.",
          );
        } else {
          // Clear a prior retryable failure once the saga reports ready/completed.
          setProvisionError(null);
        }
      } else {
        setProvisionError(result.message);
      }
    })();
  }, []);

  const organizationName =
    provision?.organizationName ||
    session?.provision?.organizationName ||
    session?.company?.dbaName ||
    session?.company?.legalCompanyName ||
    "your organization";
  const ownerName =
    provision?.ownerName ||
    session?.provision?.ownerName ||
    [session?.company?.firstName, session?.company?.lastName]
      .filter(Boolean)
      .join(" ") ||
    "Owner";
  const claimTitle =
    provision?.claimTitle ||
    session?.provision?.claimTitle ||
    session?.claim?.propertyOrJobName ||
    "Your claim";
  const fileCount =
    provision?.readyFileCount ??
    session?.provision?.readyFileCount ??
    session?.files?.filter((f) => f.securityState === "ready").length ??
    session?.files?.length ??
    0;

  async function openWorkspace() {
    setOpening(true);
    setHandoffError(null);
    const result = await onboardingFetchJson<HandoffResult>(
      "/api/onboarding/handoff",
      { method: "POST", json: {} },
    );
    setOpening(false);
    if (!result.ok || !result.data.handoffCode) {
      // Never echo handoff codes into UI/error text.
      setHandoffError(
        result.ok
          ? "Handoff is not available yet."
          : result.message,
      );
      return;
    }

    const platformBase =
      process.env.NEXT_PUBLIC_PLATFORM_URL ||
      "https://app.theclaimsninja.com";
    try {
      // Code must go to /auth/intake-handoff — not the claim workspace path.
      window.location.assign(
        buildIntakeHandoffUrl(platformBase, result.data.handoffCode),
      );
    } catch {
      setHandoffError("Handoff is not available yet.");
    }
  }

  if (loading) {
    return <OnboardingLoading />;
  }

  if (!session && error) {
    return (
      <div className="bg-brand-black px-5 py-24 text-center text-zinc-300">
        <p>{error}</p>
        <Link href="/" className="mt-4 inline-block text-brand-red-light">
          Back to website
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-black px-5 pb-16 pt-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-6">
          <Link href="/" className="text-sm text-zinc-400 hover:text-white">
            ← Back to website
          </Link>
        </div>

        <ProgressRail current="account" allComplete className="mb-10" />

        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {provisionLoading
              ? "Setting up your workspace"
              : provisionError
                ? "Workspace setup needs attention"
                : "Your workspace is ready"}
          </h1>
          <p className="mt-3 text-base text-zinc-400 sm:text-lg">
            {provisionLoading
              ? "Please wait while we finish provisioning."
              : provisionError
                ? "You can retry setup without creating duplicate records."
                : `${organizationName} is set up and your first claim is live.`}
          </p>
        </div>

        {provisionLoading ? (
          <SectionCard className="mx-auto mt-8 max-w-xl text-center">
            <p className="text-sm text-zinc-400" aria-live="polite">
              Provisioning in progress…
            </p>
          </SectionCard>
        ) : null}

        {provisionError ? (
          <SectionCard className="mx-auto mt-8 max-w-xl text-center">
            <p className="text-sm text-brand-red-light" role="alert">
              {provisionError}
            </p>
            <button
              type="button"
              className="mt-4 rounded-xl border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/5"
              onClick={() => {
                setProvisionLoading(true);
                setProvisionError(null);
                void (async () => {
                  const result = await onboardingFetchJson<ProvisionStatus>(
                    "/api/onboarding/provision",
                  );
                  setProvisionLoading(false);
                  if (result.ok) {
                    setProvision(result.data);
                    if (
                      result.data?.status === "failed_retryable" ||
                      result.data?.status === "failed"
                    ) {
                      setProvisionError(
                        "Workspace setup hit a temporary issue. You can retry in a moment.",
                      );
                    } else {
                      setProvisionError(null);
                    }
                  } else setProvisionError(result.message);
                })();
              }}
            >
              Retry setup
            </button>
          </SectionCard>
        ) : null}

        {!provisionLoading && !provisionError ? (
        <SectionCard className="mx-auto mt-8 max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-3xl text-emerald-400 shadow-[0_0_40px_-10px_rgba(16,185,129,0.8)]">
            ✓
          </div>
          <ul className="space-y-4 text-left text-sm">
            {[
              ["Organization created", organizationName],
              ["Owner account activated", ownerName],
              ["Claim created", claimTitle],
              ["Documents secured", `${fileCount} files ready`],
            ].map(([label, value]) => (
              <li
                key={label}
                className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-brand-black/40 px-3 py-3"
              >
                <span className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">✓</span>
                  {label}
                </span>
                <span className="text-right font-medium text-white">{value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-zinc-500">
            You&apos;re the organization owner. You can invite teammates and manage
            your company from the platform.
          </p>
        </SectionCard>
        ) : null}

        <div className="mx-auto mt-8 max-w-xl space-y-3 text-center">
          <button
            type="button"
            onClick={() => void openWorkspace()}
            disabled={opening || provisionLoading || Boolean(provisionError)}
            className="w-full rounded-xl bg-brand-red px-5 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_-18px_rgba(220,38,38,0.95)] transition hover:brightness-110 disabled:opacity-60"
          >
            {opening ? "Opening…" : "Open Claim Workspace"}
          </button>
          <Link
            href="/login"
            className="inline-block text-sm text-zinc-300 hover:text-white"
          >
            Go to contractor home
          </Link>
          <p className="text-sm text-zinc-500">
            Need help?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-brand-red-light hover:text-brand-red"
            >
              Contact Claims Ninja
            </a>
            .
          </p>
          {handoffError ? (
            <p className="text-sm text-brand-red-light" role="alert">
              {handoffError}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
