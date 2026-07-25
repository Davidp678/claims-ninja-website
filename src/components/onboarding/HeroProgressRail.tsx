import { cn } from "@/lib/cn";

/** Marketing hero stepper — Claim → Company → Agreement → Billing → Account. */
export const HERO_STEPS = [
  { key: "claim", label: "Claim" },
  { key: "company", label: "Company" },
  { key: "agreement", label: "Agreement" },
  { key: "billing", label: "Billing" },
  { key: "account", label: "Account" },
] as const;

type HeroProgressRailProps = {
  current?: (typeof HERO_STEPS)[number]["key"];
  className?: string;
};

export function HeroProgressRail({
  current = "claim",
  className,
}: HeroProgressRailProps) {
  const currentIndex = HERO_STEPS.findIndex((step) => step.key === current);

  return (
    <ol
      aria-label="Claim intake steps"
      className={cn("flex w-full items-start justify-between gap-1", className)}
    >
      {HERO_STEPS.map((step, index) => {
        const active = index === currentIndex;
        const complete = index < currentIndex;
        const showConnector = index < HERO_STEPS.length - 1;

        return (
          <li
            key={step.key}
            className={cn(
              "flex min-w-0 flex-1 items-center",
              showConnector &&
                "after:mx-1.5 after:h-px after:flex-1 after:bg-white/20 sm:after:mx-2",
              complete && showConnector && "after:bg-white/35",
            )}
          >
            <div className="flex min-w-0 flex-col items-center gap-1.5 sm:flex-row sm:gap-2">
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold sm:h-8 sm:w-8 sm:text-sm",
                  active && "bg-brand-red text-white",
                  complete && "bg-brand-red/80 text-white",
                  !active &&
                    !complete &&
                    "border border-white/25 bg-transparent text-zinc-400",
                )}
                aria-current={active ? "step" : undefined}
              >
                {index + 1}
              </span>
              <span
                className={cn(
                  "max-w-[4.5rem] truncate text-center text-[11px] font-medium sm:max-w-none sm:text-left sm:text-sm",
                  active ? "text-brand-red-light" : "text-zinc-500",
                )}
              >
                {step.label}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
