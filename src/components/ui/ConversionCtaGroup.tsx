import { CTA_LINKS } from "@/lib/constants";
import { cn } from "@/lib/cn";

import { Button } from "./Button";

type RowBreakpoint = "sm" | "lg" | "xl";

const ROW_BREAKPOINT_CLASSES: Record<RowBreakpoint, string> = {
  sm: "sm:flex-row sm:items-center",
  lg: "lg:flex-row lg:items-center",
  xl: "xl:flex-row xl:items-center",
};

const ROW_WRAP_CLASSES: Record<RowBreakpoint, string> = {
  sm: "sm:flex-wrap",
  lg: "lg:flex-wrap",
  xl: "xl:flex-wrap",
};

type ConversionCtaGroupProps = {
  primaryLabel: string;
  secondaryLabel: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  stackOnMobile?: boolean;
  /** Breakpoint at which stacked CTAs become a horizontal row (default sm). */
  rowBreakpoint?: RowBreakpoint;
  /** Allow buttons to wrap at the row breakpoint instead of forcing nowrap. */
  allowWrap?: boolean;
  /** Navbar-style secondary as text link only */
  secondaryAsTextLink?: boolean;
  /** Muted consultative line below buttons (calculator) */
  scheduleHint?: string;
  /** When true, only the primary button is shown (use with scheduleHint for calculator). */
  hideSecondaryButton?: boolean;
  primaryClassName?: string;
  secondaryClassName?: string;
};

export function ConversionCtaGroup({
  primaryLabel,
  secondaryLabel,
  size = "lg",
  className,
  stackOnMobile = true,
  rowBreakpoint = "sm",
  allowWrap = false,
  secondaryAsTextLink = false,
  scheduleHint,
  hideSecondaryButton = false,
  primaryClassName,
  secondaryClassName,
}: ConversionCtaGroupProps) {
  const nowrapClass = allowWrap ? undefined : "whitespace-nowrap";

  return (
    <div className={cn(className)}>
      <div
        className={cn(
          "flex gap-4",
          stackOnMobile
            ? cn("flex-col", ROW_BREAKPOINT_CLASSES[rowBreakpoint], allowWrap && ROW_WRAP_CLASSES[rowBreakpoint])
            : "flex-row items-center",
          !stackOnMobile && allowWrap && "flex-wrap",
        )}
      >
        <Button
          href={CTA_LINKS.onboarding}
          size={size}
          className={cn(nowrapClass, primaryClassName)}
        >
          {primaryLabel}
        </Button>
        {!hideSecondaryButton &&
          (secondaryAsTextLink ? (
            <a
              href={CTA_LINKS.schedule}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-sm font-medium text-zinc-300 transition-colors hover:text-white",
                secondaryClassName,
              )}
            >
              {secondaryLabel}
            </a>
          ) : (
            <Button
              href={CTA_LINKS.schedule}
              variant="secondary"
              size={size}
              className={cn(nowrapClass, secondaryClassName)}
            >
              {secondaryLabel}
            </Button>
          ))}
      </div>
      {scheduleHint ? (
        <p className="mt-3 text-sm text-zinc-400">
          Prefer to talk first?{" "}
          <a
            href={CTA_LINKS.schedule}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-300 underline-offset-2 transition-colors hover:text-brand-red-light hover:underline"
          >
            {scheduleHint}
          </a>
        </p>
      ) : null}
    </div>
  );
}
