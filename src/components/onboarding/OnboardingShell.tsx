"use client";

import Link from "next/link";

import { ProgressRail } from "@/components/onboarding/ProgressRail";
import { SaveExitBar } from "@/components/onboarding/SaveExitBar";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
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
  continueLoadingLabel?: string;
  continueBlockedReason?: string | null;
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
  continueLoadingLabel,
  continueBlockedReason,
  showContinue = true,
  allComplete = false,
  className,
  hint,
}: OnboardingShellProps) {
  return (
    <div
      className={cn(
        "onboarding-shell relative min-h-[70vh] overflow-hidden bg-brand-black text-white",
        className,
      )}
    >
      <HeroBackdrop />

      <div
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-8 sm:px-6 lg:px-8"
        style={{
          paddingTop: "calc(var(--site-header-height, 6rem) + 1.5rem)",
        }}
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            ← Back to website
          </Link>
          {saveState === "saved" || saveState === "saving" ? (
            <p className="flex items-center gap-1.5 text-sm text-emerald-400">
              <span
                aria-hidden
                className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white"
              >
                ✓
              </span>
              {saveState === "saving" ? "Saving…" : "Progress saved"}
            </p>
          ) : null}
        </div>

        <header className="mb-6">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-3xl text-base text-zinc-400 sm:text-lg">
            {description}
          </p>
        </header>

        <ProgressRail
          current={stage}
          allComplete={allComplete}
          className="mb-8"
        />

        <div
          className={cn(
            "grid gap-6",
            sidebar
              ? "lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start xl:grid-cols-[minmax(0,1fr)_320px]"
              : undefined,
          )}
        >
          <div className="min-w-0 space-y-4">{children}</div>
          {sidebar ? (
            <aside className="space-y-4 lg:sticky lg:top-28">{sidebar}</aside>
          ) : null}
        </div>

        <SaveExitBar
          saveState={saveState}
          onSaveExit={onSaveExit}
          continueLabel={continueLabel}
          onContinue={onContinue}
          continueDisabled={continueDisabled}
          continueLoading={continueLoading}
          continueLoadingLabel={continueLoadingLabel}
          continueBlockedReason={continueBlockedReason}
          showContinue={showContinue}
          hint={hint}
          className="mt-8"
        />
      </div>
    </div>
  );
}
