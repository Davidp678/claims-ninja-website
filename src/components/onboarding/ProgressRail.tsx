import { cn } from "@/lib/cn";
import {
  ONBOARDING_STAGES,
  type OnboardingStage,
} from "@/lib/onboarding/stages";

type ProgressRailProps = {
  current: OnboardingStage;
  className?: string;
  /** When true, all steps render as complete (activated screen). */
  allComplete?: boolean;
};

/** Compact progress labels — distinct from page titles. */
const PROGRESS_LABELS: Record<OnboardingStage, string> = {
  claim: "Claim details",
  company: "Company",
  agreement: "Agreement",
  billing: "Billing",
  account: "Account",
};

export function ProgressRail({
  current,
  className,
  allComplete = false,
}: ProgressRailProps) {
  const total = ONBOARDING_STAGES.length;
  const currentIndex = Math.max(0, ONBOARDING_STAGES.indexOf(current));
  const stepNumber = allComplete ? total : currentIndex + 1;
  const label = PROGRESS_LABELS[allComplete ? "account" : current] ?? "Claim details";
  const fillPercent = (stepNumber / total) * 100;

  return (
    <div
      aria-label="Onboarding progress"
      className={cn("w-full max-w-xl", className)}
    >
      <p className="text-sm leading-snug">
        <span className="font-semibold text-white">{label}</span>
        <span className="text-zinc-500">{"  ·  "}</span>
        <span className="font-normal text-zinc-500">
          Step {stepNumber} of {total}
        </span>
      </p>
      <div
        className="mt-2.5 h-0.5 w-full overflow-hidden bg-white/15"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={stepNumber}
        aria-valuetext={`${label}, Step ${stepNumber} of ${total}`}
      >
        <div
          className="h-full bg-brand-red transition-[width] duration-300 ease-out"
          style={{ width: `${fillPercent}%` }}
        />
      </div>
    </div>
  );
}
