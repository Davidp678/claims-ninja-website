"use client";

import { cn } from "@/lib/cn";

export type AnalysisProgressPhase =
  | "uploading"
  | "reading"
  | "scoring"
  | "finalizing";

type ClaimAnalysisProgressProps = {
  phase: AnalysisProgressPhase;
  uploadCompleted?: number;
  uploadTotal?: number;
  className?: string;
};

const PHASE_LABELS: Record<AnalysisProgressPhase, string> = {
  uploading: "Uploading files",
  reading: "Reading documents",
  scoring: "Scoring opportunity",
  finalizing: "Finalizing report",
};

function phasePercent(
  phase: AnalysisProgressPhase,
  uploadCompleted: number,
  uploadTotal: number,
): number {
  if (phase === "uploading") {
    if (uploadTotal <= 0) return 12;
    return Math.min(38, 8 + (uploadCompleted / uploadTotal) * 30);
  }
  if (phase === "reading") return 55;
  if (phase === "scoring") return 78;
  return 92;
}

export function ClaimAnalysisProgress({
  phase,
  uploadCompleted = 0,
  uploadTotal = 0,
  className,
}: ClaimAnalysisProgressProps) {
  const percent = phasePercent(phase, uploadCompleted, uploadTotal);
  const label =
    phase === "uploading" && uploadTotal > 0
      ? `${PHASE_LABELS.uploading} (${uploadCompleted}/${uploadTotal})`
      : PHASE_LABELS[phase];

  return (
    <div className={cn("space-y-2", className)} aria-live="polite">
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-medium text-zinc-300">{label}</span>
        <span className="tabular-nums text-zinc-500">{Math.round(percent)}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-brand-red transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
