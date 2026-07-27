"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { SectionCard } from "@/components/onboarding/FormField";
import { OnboardingLoading } from "@/components/onboarding/OnboardingLoading";
import { ProgressRail } from "@/components/onboarding/ProgressRail";
import { useOnboardingSession } from "@/components/onboarding/useOnboardingSession";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import { SITE } from "@/lib/constants";
import {
  userFacingHandoffError,
  userFacingOnboardingError,
} from "@/lib/onboarding/user-errors";

type ProvisionStatus = {
  status?: string;
  handoffEligible?: boolean;
  organizationName?: string | null;
  ownerName?: string | null;
  claimTitle?: string | null;
  readyFileCount?: number;
  claimId?: string | null;
  organizationId?: string | null;
  gateCode?: string | null;
  gateReason?: string | null;
  errorCode?: string | null;
};

type HandoffResult = {
  expiresAt?: string;
  redirectPathHint?: string;
  /** Full Platform `/auth/intake-handoff?code=…` URL built server-side. */
  browserHandoffUrl?: string;
};

const PLATFORM_HOME =
  (typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_PLATFORM_URL?.replace(/\/$/, "")) ||
  "https://app.theclaimsninja.com";

const POLL_MS = 2000;
const MAX_POLL_ATTEMPTS = 45;

function maskCorrelationId(raw: string | null | undefined): string {
  if (!raw) return "n/a";
  const trimmed = raw.trim();
  if (trimmed.length <= 12) return trimmed;
  return `${trimmed.slice(0, 6)}…${trimmed.slice(-4)}`;
}

export function ActivatedStage() {
  const { session, loading, error } = useOnboardingSession();
  const [provision, setProvision] = useState<ProvisionStatus | null>(null);
  const [provisionLoading, setProvisionLoading] = useState(true);
  const [provisionError, setProvisionError] = useState<string | null>(null);
  const [handoffError, setHandoffError] = useState<string | null>(null);
  const [opening, setOpening] = useState(false);
  const [correlationId, setCorrelationId] = useState<string | null>(null);
  const pollAttempts = useRef(0);
  const cancelled = useRef(false);

  const fetchProvision = useCallback(async (): Promise<ProvisionStatus | null> => {
    const result = await onboardingFetchJson<ProvisionStatus>(
      "/api/onboarding/provision",
    );
    if (!result.ok) {
      setProvisionError(
        userFacingOnboardingError(result.code, result.message),
      );
      setCorrelationId(`${result.code ?? "ERR"}-${Date.now().toString(36)}`);
      return null;
    }
    setProvision(result.data);
    return result.data;
  }, []);

  useEffect(() => {
    cancelled.current = false;
    pollAttempts.current = 0;

    void (async () => {
      setProvisionLoading(true);
      setProvisionError(null);

      while (!cancelled.current && pollAttempts.current < MAX_POLL_ATTEMPTS) {
        pollAttempts.current += 1;
        const data = await fetchProvision();
        if (cancelled.current) return;

        if (!data) {
          setProvisionLoading(false);
          return;
        }

        if (data.handoffEligible && data.status === "completed") {
          setProvisionError(null);
          setProvisionLoading(false);
          return;
        }

        if (data.status === "failed" || data.status === "failed_retryable") {
          setProvisionError(
            "Workspace setup hit a temporary issue. You can retry in a moment.",
          );
          setProvisionLoading(false);
          return;
        }

        if (
          data.gateCode === "SCANNER_UNAVAILABLE" ||
          data.errorCode === "SCANNER_UNAVAILABLE"
        ) {
          setProvisionError(
            userFacingOnboardingError(
              "SCANNER_UNAVAILABLE",
              data.gateReason ?? undefined,
            ),
          );
          setProvisionLoading(false);
          return;
        }

        // Still provisioning / verified — keep polling.
        setProvisionLoading(true);
        await new Promise((r) => setTimeout(r, POLL_MS));
      }

      if (!cancelled.current) {
        setProvisionError(
          "Workspace setup is taking longer than expected. Retry setup without creating duplicates.",
        );
        setProvisionLoading(false);
      }
    })();

    return () => {
      cancelled.current = true;
    };
  }, [fetchProvision]);

  const workspaceReady = Boolean(
    !provisionLoading &&
      !provisionError &&
      provision?.handoffEligible &&
      provision.status === "completed" &&
      provision.claimId,
  );

  const organizationName = workspaceReady
    ? provision?.organizationName || "your organization"
    : null;
  const ownerName = workspaceReady ? provision?.ownerName || "Owner" : null;
  const claimTitle = workspaceReady ? provision?.claimTitle || "Your claim" : null;
  const fileCount = workspaceReady ? (provision?.readyFileCount ?? 0) : null;

  async function retireIntakeCookie() {
    try {
      await onboardingFetchJson("/api/onboarding/session/retire", {
        method: "POST",
        json: {},
      });
    } catch {
      /* best-effort */
    }
  }

  async function openWorkspace() {
    if (opening) return;
    setOpening(true);
    setHandoffError(null);

    const status = await fetchProvision();
    if (!status?.handoffEligible || status.status !== "completed" || !status.claimId) {
      setHandoffError(
        userFacingHandoffError(
          status?.gateCode ?? "PROVISIONING_INCOMPLETE",
          status?.gateReason ?? undefined,
        ),
      );
      setCorrelationId(
        `prov-${(status?.claimId ?? "pending").toString().slice(0, 8)}-${Date.now().toString(36)}`,
      );
      setOpening(false);
      return;
    }

    const result = await onboardingFetchJson<HandoffResult>(
      "/api/onboarding/handoff",
      { method: "POST", json: {} },
    );

    if (!result.ok || !result.data.browserHandoffUrl) {
      setHandoffError(
        result.ok
          ? userFacingHandoffError("PROVISIONING_INCOMPLETE", undefined)
          : userFacingHandoffError(result.code, result.message),
      );
      setCorrelationId(
        `${result.ok ? "handoff" : result.code}-${Date.now().toString(36)}`,
      );
      setOpening(false);
      return;
    }

    try {
      const handoffUrl = new URL(result.data.browserHandoffUrl);
      if (
        handoffUrl.pathname !== "/auth/intake-handoff" ||
        !handoffUrl.searchParams.get("code")
      ) {
        setHandoffError(userFacingHandoffError("PROVISIONING_INCOMPLETE", undefined));
        setOpening(false);
        return;
      }
      // Retire resume cookie immediately before navigation so a later return
      // to the website cannot reuse this completed intake.
      await retireIntakeCookie();
      window.location.assign(handoffUrl.toString());
    } catch {
      setHandoffError(userFacingHandoffError("PROVISIONING_INCOMPLETE", undefined));
      setOpening(false);
    }
  }

  if (loading) {
    return <OnboardingLoading />;
  }

  if (!session && error) {
    return (
      <div className="bg-brand-black px-5 py-24 text-center text-zinc-300">
        <p>{userFacingOnboardingError(undefined, error)}</p>
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
                : workspaceReady
                  ? "Your workspace is ready"
                  : "Setting up your workspace"}
          </h1>
          <p className="mt-3 text-base text-zinc-400 sm:text-lg">
            {provisionLoading
              ? "Please wait while we finish provisioning."
              : provisionError
                ? "You can retry setup without creating duplicate records."
                : workspaceReady
                  ? `${organizationName} is set up and your first claim is live.`
                  : "Please wait while we finish provisioning."}
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
                pollAttempts.current = 0;
                void (async () => {
                  while (pollAttempts.current < MAX_POLL_ATTEMPTS) {
                    pollAttempts.current += 1;
                    const data = await fetchProvision();
                    if (
                      data?.handoffEligible &&
                      data.status === "completed"
                    ) {
                      setProvisionError(null);
                      setProvisionLoading(false);
                      return;
                    }
                    if (
                      data?.status === "failed" ||
                      data?.status === "failed_retryable"
                    ) {
                      setProvisionError(
                        "Workspace setup hit a temporary issue. You can retry in a moment.",
                      );
                      setProvisionLoading(false);
                      return;
                    }
                    await new Promise((r) => setTimeout(r, POLL_MS));
                  }
                  setProvisionError(
                    "Workspace setup is taking longer than expected. Retry setup without creating duplicates.",
                  );
                  setProvisionLoading(false);
                })();
              }}
            >
              Retry setup
            </button>
          </SectionCard>
        ) : null}

        {workspaceReady ? (
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
                  key={label as string}
                  className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-brand-black/40 px-3 py-3"
                >
                  <span className="flex items-center gap-2 text-zinc-300">
                    <span className="text-emerald-400">✓</span>
                    {label}
                  </span>
                  <span className="text-right font-medium text-white">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-zinc-500">
              You&apos;re the organization owner. You can invite teammates and
              manage your company from the platform.
            </p>
          </SectionCard>
        ) : null}

        <div className="mx-auto mt-8 max-w-xl space-y-3 text-center">
          <button
            type="button"
            onClick={() => void openWorkspace()}
            disabled={opening || !workspaceReady}
            className="w-full rounded-xl bg-brand-red px-5 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_-18px_rgba(220,38,38,0.95)] transition hover:brightness-110 disabled:opacity-60"
          >
            {opening ? "Opening…" : "Open Claim Workspace"}
          </button>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <a
              href={`${PLATFORM_HOME}/login`}
              className="text-zinc-300 hover:text-white"
            >
              Sign in
            </a>
            <a
              href={`${PLATFORM_HOME}/dashboard/claims`}
              className="text-zinc-300 hover:text-white"
            >
              Go to contractor home
            </a>
          </div>
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
            <div className="space-y-2" role="alert">
              <p className="text-sm text-brand-red-light">{handoffError}</p>
              <button
                type="button"
                onClick={() => void openWorkspace()}
                disabled={opening}
                className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-white hover:bg-white/5 disabled:opacity-60"
              >
                Retry
              </button>
              {correlationId ? (
                <p className="text-xs text-zinc-500">
                  Support reference:{" "}
                  <button
                    type="button"
                    className="font-mono text-zinc-300 underline-offset-2 hover:underline"
                    onClick={() => {
                      void navigator.clipboard?.writeText(correlationId);
                    }}
                  >
                    {maskCorrelationId(correlationId)}
                  </button>
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
