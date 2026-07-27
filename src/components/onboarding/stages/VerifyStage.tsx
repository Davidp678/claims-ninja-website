"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type ClipboardEvent,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";

import { SectionCard } from "@/components/onboarding/FormField";
import { OnboardingLoading } from "@/components/onboarding/OnboardingLoading";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { useOnboardingSession } from "@/components/onboarding/useOnboardingSession";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";

export function VerifyStage() {
  const router = useRouter();
  const { session, loading, error, saveState, saveExit, version } =
    useOnboardingSession();
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(42);
  const [busy, setBusy] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = window.setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => window.clearInterval(id);
  }, [seconds]);

  const email =
    session?.accountEmail || session?.company?.workEmail || "your email";
  const code = digits.join("");
  const complete = code.length === 6;

  function setDigitAt(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    setDigits((prev) => {
      const next = [...prev];
      next[index] = digit;
      return next;
    });
    if (digit && index < 5) inputs.current[index + 1]?.focus();
  }

  function onKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  }

  function onPaste(event: ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();
    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasted) return;
    const next = Array.from({ length: 6 }, (_, i) => pasted[i] ?? "");
    setDigits(next);
    inputs.current[Math.min(pasted.length, 5)]?.focus();
  }

  async function handleVerify() {
    setLocalError(null);
    if (!complete) return;
    setBusy(true);
    const result = await onboardingFetchJson("/api/onboarding/account/otp/verify", {
      method: "POST",
      json: { expectedVersion: version, code },
    });
    setBusy(false);
    if (!result.ok) {
      setLocalError(result.message);
      return;
    }
    router.push("/onboarding/activated");
  }

  async function handleResend() {
    if (seconds > 0) return;
    setLocalError(null);
    const result = await onboardingFetchJson("/api/onboarding/account/otp/resend", {
      method: "POST",
      json: { expectedVersion: version },
    });
    if (!result.ok) {
      setLocalError(result.message);
      return;
    }
    setSeconds(60);
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
      title="Verify your email"
      description={`We sent a 6-digit verification code to ${email}.`}
      saveState={saveState}
      onSaveExit={() => void saveExit()}
      showContinue={false}
    >
      <SectionCard className="mx-auto max-w-xl">
        <div className="flex justify-center gap-2 sm:gap-3" onPaste={onPaste}>
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputs.current[index] = el;
              }}
              inputMode="numeric"
              autoComplete={index === 0 ? "one-time-code" : "off"}
              aria-label={`Digit ${index + 1}`}
              maxLength={1}
              value={digit}
              onChange={(e) => setDigitAt(index, e.target.value)}
              onKeyDown={(e) => onKeyDown(index, e)}
              className="h-12 w-10 rounded-lg border border-white/15 bg-brand-black text-center text-lg font-semibold text-white outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/30 sm:h-14 sm:w-12"
            />
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-zinc-500">
          This code expires in 10 minutes.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
          <button
            type="button"
            disabled={seconds > 0}
            onClick={() => void handleResend()}
            className="text-zinc-400 disabled:cursor-not-allowed"
          >
            {seconds > 0
              ? `Resend code in 00:${String(seconds).padStart(2, "0")}`
              : "Resend code"}
          </button>
          <Link
            href="/onboarding/company"
            className="text-white underline-offset-2 hover:underline"
          >
            Use a different email
          </Link>
        </div>

        <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center text-sm text-emerald-100">
          Verification protects your organization and claim information.
        </div>

        {(localError || error) && (
          <p className="mt-4 text-center text-sm text-brand-red-light" role="alert">
            {localError || error}
          </p>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => router.push("/onboarding/account")}
            className="rounded-lg border border-white/25 px-4 py-2.5 text-sm text-white hover:border-white/40"
          >
            Back
          </button>
          <button
            type="button"
            disabled={!complete || busy}
            onClick={() => void handleVerify()}
            className="rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400"
          >
            {busy ? "Verifying…" : "Verify & create workspace"}
          </button>
        </div>
      </SectionCard>
    </OnboardingShell>
  );
}
