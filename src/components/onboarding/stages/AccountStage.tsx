"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  FieldLabel,
  SectionCard,
  TextInput,
} from "@/components/onboarding/FormField";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { useOnboardingSession } from "@/components/onboarding/useOnboardingSession";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import {
  evaluatePassword,
  isPasswordValid,
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

  const email =
    session?.accountEmail || session?.company?.workEmail || "";
  const requirements = useMemo(() => evaluatePassword(password), [password]);
  const valid =
    isPasswordValid(password) && passwordsMatch(password, confirm) && !!email;

  async function handleSendCode() {
    setLocalError(null);
    if (!valid) {
      setLocalError("Meet all password requirements and confirm your password.");
      return;
    }
    setBusy(true);
    const result = await onboardingFetchJson("/api/onboarding/account/password", {
      method: "POST",
      json: {
        expectedVersion: version,
        email,
        password,
      },
    });
    // Clear local password material immediately after the request returns.
    setPassword("");
    setConfirm("");
    setBusy(false);
    if (!result.ok) {
      setLocalError(result.message);
      return;
    }
    router.push("/onboarding/verify");
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

  return (
    <OnboardingShell
      stage="account"
      title="Create your account"
      description="Set your password to secure your Claims Ninja workspace."
      saveState={saveState}
      onSaveExit={() => void saveExit()}
      continueLabel="Send verification code"
      onContinue={() => void handleSendCode()}
      continueDisabled={!valid}
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
            />
          </div>

          <ul className="grid gap-2 sm:grid-cols-2">
            {requirements.map((req) => (
              <li
                key={req.id}
                className={`flex items-center gap-2 text-sm ${
                  req.met ? "text-emerald-400" : "text-zinc-500"
                }`}
              >
                <span aria-hidden>{req.met ? "✓" : "○"}</span>
                {req.label}
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-100">
            After email verification, you&apos;ll become the organization owner and
            your claim workspace will be created.
          </div>

          {(localError || error) && (
            <p className="text-sm text-brand-red-light" role="alert">
              {localError || error}
            </p>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => router.push("/onboarding/company")}
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
