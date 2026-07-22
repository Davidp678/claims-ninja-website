"use client";

import Link from "next/link";

import { ProgressRail } from "@/components/onboarding/ProgressRail";
import { SaveExitBar } from "@/components/onboarding/SaveExitBar";
import { cn } from "@/lib/cn";
import type { OnboardingStage } from "@/lib/onboarding/stages";
import type { SaveState } from "@/lib/onboarding/types";

type OnboardingShellProps = {
  stage: OnboardingStage;
  title: string;
  description: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  saveState?: SaveState;
  onSaveExit?: () => void;
  continueLabel?: string;
  onContinue?: () => void;
  continueDisabled?: boolean;
  continueLoading?: boolean;
  showContinue?: boolean;
  allComplete?: boolean;
  className?: string;
  hint?: string;
};

export function OnboardingShell({
  stage,
  title,
  description,
  children,
  sidebar,
  saveState,
  onSaveExit,
  continueLabel,
  onContinue,
  continueDisabled,
  continueLoading,
  showContinue = true,
  allComplete = false,
  className,
  hint,
}: OnboardingShellProps) {
  return (
    <div className={cn("onboarding-shell bg-brand-black text-white", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            ← Back to website
          </Link>
          {saveState === "saved" || saveState === "saving" ? (
            <p className="flex items-center gap-1.5 text-sm text-emerald-400">
              <span aria-hidden>✓</span>
              {saveState === "saving" ? "Saving…" : "Progress saved"}
            </p>
          ) : null}
        </div>

        <header className="mb-8 max-w-3xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-base text-zinc-400 sm:text-lg">{description}</p>
        </header>

        <ProgressRail
          current={stage}
          allComplete={allComplete}
          className="mb-10"
        />

        <div
          className={cn(
            "grid gap-6",
            sidebar
              ? "lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start"
              : undefined,
          )}
        >
          <div className="min-w-0 space-y-5">{children}</div>
          {sidebar ? (
            <aside className="space-y-4 lg:sticky lg:top-28">{sidebar}</aside>
          ) : null}
        </div>
      </div>

      <SaveExitBar
        saveState={saveState}
        onSaveExit={onSaveExit}
        continueLabel={continueLabel}
        onContinue={onContinue}
        continueDisabled={continueDisabled}
        continueLoading={continueLoading}
        showContinue={showContinue}
        hint={hint}
      />
    </div>
  );
}
