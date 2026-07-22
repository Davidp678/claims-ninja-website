"use client";

import { cn } from "@/lib/cn";
import type { SaveState } from "@/lib/onboarding/types";

type SaveExitBarProps = {
  saveState?: SaveState;
  onSaveExit?: () => void;
  continueLabel?: string;
  onContinue?: () => void;
  continueDisabled?: boolean;
  continueLoading?: boolean;
  hint?: string;
  className?: string;
  showContinue?: boolean;
};

export function SaveExitBar({
  saveState = "idle",
  onSaveExit,
  continueLabel = "Continue →",
  onContinue,
  continueDisabled = false,
  continueLoading = false,
  hint = "You can return and finish later.",
  className,
  showContinue = true,
}: SaveExitBarProps) {
  const statusLabel =
    saveState === "saving"
      ? "Saving…"
      : saveState === "saved"
        ? "Saved just now"
        : saveState === "error"
          ? "Save failed — retry"
          : hint;

  return (
    <div
      className={cn(
        "onboarding-save-exit sticky bottom-0 z-20 border-t border-white/10 bg-brand-elevated/95 backdrop-blur-md",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onSaveExit}
            className="rounded-lg border border-white/25 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:border-white/45 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light"
          >
            Save & exit
          </button>
          <p
            className={cn(
              "truncate text-sm",
              saveState === "error" ? "text-brand-red-light" : "text-zinc-400",
              saveState === "saved" && "text-emerald-400",
            )}
          >
            {statusLabel}
          </p>
        </div>

        {showContinue && (
          <button
            type="button"
            onClick={onContinue}
            disabled={continueDisabled || continueLoading}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-red px-5 text-sm font-semibold text-white shadow-[0_10px_30px_-14px_rgba(220,38,38,0.9)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400 disabled:shadow-none"
          >
            {continueLoading ? "Working…" : continueLabel}
          </button>
        )}
      </div>
    </div>
  );
}
