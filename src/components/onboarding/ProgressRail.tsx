import { cn } from "@/lib/cn";
import {
  STAGE_LABELS,
  type OnboardingStage,
} from "@/lib/onboarding/stages";

/**
 * Visual stepper order for the mockup (Claim → Company → Agreement → Billing → Account).
 * Route / state-machine order remains unchanged in `ONBOARDING_STAGES`.
 */
export const PROGRESS_DISPLAY_STAGES: readonly OnboardingStage[] = [
  "claim",
  "company",
  "agreement",
  "billing",
  "account",
] as const;

/** Journey progression order used only to derive complete vs upcoming. */
const FLOW_ORDER: readonly OnboardingStage[] = [
  "claim",
  "company",
  "account",
  "agreement",
  "billing",
] as const;

type ProgressRailProps = {
  current: OnboardingStage;
  className?: string;
  /** When true, all steps render as complete (activated screen). */
  allComplete?: boolean;
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 10.5 8 14l7.5-8" />
    </svg>
  );
}

export function ProgressRail({
  current,
  className,
  allComplete = false,
}: ProgressRailProps) {
  const currentFlowIndex = FLOW_ORDER.indexOf(current);

  return (
    <ol
      aria-label="Onboarding progress"
      className={cn(
        "onboarding-progress-rail flex w-full items-center justify-between gap-1",
        className,
      )}
    >
      {PROGRESS_DISPLAY_STAGES.map((stage, index) => {
        const flowIndex = FLOW_ORDER.indexOf(stage);
        const complete =
          allComplete || (flowIndex >= 0 && flowIndex < currentFlowIndex);
        const active = !allComplete && stage === current;
        const upcoming = !complete && !active;
        const showConnector = index < PROGRESS_DISPLAY_STAGES.length - 1;

        return (
          <li
            key={stage}
            className={cn(
              "flex min-w-0 flex-1 items-center",
              showConnector && "after:mx-2 after:h-px after:flex-1 after:bg-white/15",
              complete && showConnector && "after:bg-white/35",
            )}
          >
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                  complete && "border border-white/25 bg-transparent text-zinc-300",
                  active && "bg-brand-red text-white",
                  upcoming &&
                    "border border-white/20 bg-transparent text-zinc-400",
                )}
                aria-current={active ? "step" : undefined}
              >
                {complete && !active ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  index + 1
                )}
              </span>
              <span
                className={cn(
                  "hidden text-sm font-medium sm:inline",
                  active ? "text-white" : "text-zinc-500",
                )}
              >
                {STAGE_LABELS[stage]}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
