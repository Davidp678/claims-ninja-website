import { CTA_LINKS } from "@/lib/constants";
import { cn } from "@/lib/cn";

import { Button } from "./Button";

type ConversionCtaGroupProps = {
  primaryLabel: string;
  secondaryLabel: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  stackOnMobile?: boolean;
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
  secondaryAsTextLink = false,
  scheduleHint,
  hideSecondaryButton = false,
  primaryClassName,
  secondaryClassName,
}: ConversionCtaGroupProps) {
  return (
    <div className={cn(className)}>
      <div
        className={cn(
          "flex gap-4",
          stackOnMobile
            ? "flex-col sm:flex-row sm:items-center"
            : "flex-row items-center",
        )}
      >
        <Button
          href={CTA_LINKS.onboarding}
          size={size}
          className={cn("whitespace-nowrap", primaryClassName)}
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
                "text-sm font-medium text-zinc-400 transition-colors hover:text-white",
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
              className={cn("whitespace-nowrap", secondaryClassName)}
            >
              {secondaryLabel}
            </Button>
          ))}
      </div>
      {scheduleHint ? (
        <p className="mt-3 text-sm text-zinc-500">
          Prefer to talk first?{" "}
          <a
            href={CTA_LINKS.schedule}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-400 underline-offset-2 transition-colors hover:text-brand-red-light hover:underline"
          >
            {scheduleHint}
          </a>
        </p>
      ) : null}
    </div>
  );
}
