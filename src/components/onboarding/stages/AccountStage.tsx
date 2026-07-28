"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import {
  FieldLabel,
  SectionCard,
  TextInput,
} from "@/components/onboarding/FormField";
import { OnboardingLoading } from "@/components/onboarding/OnboardingLoading";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { useOnboardingSession } from "@/components/onboarding/useOnboardingSession";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import {
  evaluatePassword,
  getAccountFormBlockers,
  getPrimaryAccountFormBlocker,
  isPasswordValid,
  isValidAccountEmail,
  maskEmailAddress,
  passwordsMatch,
} from "@/lib/onboarding/password-policy";

export function AccountStage() {
  const router = useRouter();
  const { session, loading, error, saveState, saveExit, version } =
    useOnboardingSession();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [correlationId, setCorrelationId] = useState<string | null>(null);
  const [sentNotice, setSentNotice] = useState<string | null>(null);
  const inFlight = useRef(false);

  const email =
    session?.accountEmail || session?.company?.workEmail || "";
  const requirements = useMemo(() => evaluatePassword(password), [password]);
  const blockers = useMemo(
    () => getAccountFormBlockers({ password, confirm, email }),
    [password, confirm, email],
  );
  const primaryBlocker = getPrimaryAccountFormBlocker({
    password,
    confirm,
    email,
  });
  const valid =
    isPasswordValid(password) &&
    passwordsMatch(password, confirm) &&
    isValidAccountEmail(email);

  async function handleSendCode() {
    setLocalError(null);
    setCorrelationId(null);
    setSentNotice(null);
    if (!valid || inFlight.current) {
      return;
    }
    inFlight.current = true;
    setBusy(true);
    const result = await onboardingFetchJson<{
      status?: string;
      emailSent?: boolean;
    }>("/api/onboarding/account/password", {
      method: "POST",
      json: {
        expectedVersion: version,
        email,
        password,
      },
    });
    setBusy(false);
    inFlight.current = false;

    if (!result.ok) {
      setLocalError(
        result.message ||
          "We couldn’t send your verification code. Please try again.",
      );
      if (result.correlationId) setCorrelationId(result.correlationId);
      return;
    }

    // Clear password material only after confirmed server success.
    setPassword("");
    setConfirm("");
    setSentNotice(
      `Verification code sent to ${maskEmailAddress(email)}.`,
    );
    router.push("/onboarding/verify");
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

  return (
    <OnboardingShell
      stage="account"
      title="Create your account"
      description="Set your password to secure your Claims Ninja workspace."
      saveState={saveState}
      onSaveExit={() => void saveExit()}
      continueLabel="Send verification code"
      continueLoadingLabel="Sending verification code…"
      continueBlockedReason={!valid ? primaryBlocker : null}
      onContinue={() => void handleSendCode()}
      continueDisabled={!valid || busy}
      continueLoading={busy}
      hint="Saved just now"
    >
      <SectionCard>
        <div className="mx-auto max-w-xl space-y-5">
          <div>
            <FieldLabel htmlFor="loginEmail">Login email</FieldLabel>
            <div className="relative">
              <TextInput
                id="loginEmail"
                value={email}
                readOnly
                disabled
                className="pr-10"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-zinc-500">
                🔒
              </span>
            </div>
            <p className="mt-1.5 text-xs text-zinc-500">
              This is the work email from your company information.
            </p>
          </div>

          <div>
            <FieldLabel htmlFor="password">Create password</FieldLabel>
            <div className="relative">
              <TextInput
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-16"
                aria-invalid={
                  password.length > 0 && !isPasswordValid(password)
                    ? true
                    : undefined
                }
                aria-describedby="password-requirements"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 text-xs text-zinc-400 hover:text-white"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <FieldLabel htmlFor="confirm">Confirm password</FieldLabel>
            <TextInput
              id="confirm"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              aria-invalid={
                confirm.length > 0 && !passwordsMatch(password, confirm)
                  ? true
                  : undefined
              }
            />
          </div>

          <ul
            id="password-requirements"
            className="grid gap-2 sm:grid-cols-2"
            aria-label="Password requirements"
          >
            {requirements.map((req) => (
              <li
                key={req.id}
                className={`flex items-center gap-2 text-sm ${
                  req.met ? "text-emerald-400" : "font-medium text-amber-200"
                }`}
              >
                <span aria-hidden>{req.met ? "✓" : "○"}</span>
                <span>
                  {req.label}
                  <span className="sr-only">
                    {req.met ? " met" : " not met"}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {blockers.length > 1 ? (
            <ul className="space-y-1 text-sm text-amber-100/90" aria-live="polite">
              {blockers.slice(0, 3).map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          ) : null}

          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-100">
            After email verification, your claim workspace will be provisioned with
            you as the organization owner.
          </div>

          {sentNotice ? (
            <p className="text-sm text-emerald-300" role="status">
              {sentNotice}
            </p>
          ) : null}

          {(localError || error) && (
            <div className="space-y-2" role="alert">
              <p className="text-sm text-brand-red-light">
                {localError || error}
              </p>
              {correlationId ? (
                <p className="text-xs text-zinc-500">
                  Reference: {correlationId}
                </p>
              ) : null}
              <button
                type="button"
                onClick={() => void handleSendCode()}
                disabled={!valid || busy}
                className="rounded-lg border border-white/25 px-3 py-1.5 text-sm text-white hover:border-white/40 disabled:opacity-50"
              >
                Retry
              </button>
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => router.push("/onboarding/billing")}
              className="rounded-lg border border-white/25 px-4 py-2.5 text-sm text-white hover:border-white/40"
            >
              Back
            </button>
          </div>
        </div>
      </SectionCard>
    </OnboardingShell>
  );
}
