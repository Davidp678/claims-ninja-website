import { cn } from "@/lib/cn";

/** Marketing hero stepper — Claim → Company → Agreement → Billing → Account. */
export const HERO_STEPS = [
  { key: "claim", label: "Claim details" },
  { key: "company", label: "Company" },
  { key: "agreement", label: "Agreement" },
  { key: "billing", label: "Billing" },
  { key: "account", label: "Account" },
] as const;

type HeroProgressRailProps = {
  current?: (typeof HERO_STEPS)[number]["key"];
  className?: string;
};

/**
 * Minimal progress line for the homepage hero intake card.
 * Replaces crowded numbered circles / connectors / future-step labels.
 */
export function HeroProgressRail({
  current = "claim",
  className,
}: HeroProgressRailProps) {
  const total = HERO_STEPS.length;
  const currentIndex = Math.max(
    0,
    HERO_STEPS.findIndex((step) => step.key === current),
  );
  const stepNumber = currentIndex + 1;
  const label = HERO_STEPS[currentIndex]?.label ?? "Claim details";
  const fillPercent = (stepNumber / total) * 100;

  return (
    <div
      aria-label="Claim intake steps"
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
