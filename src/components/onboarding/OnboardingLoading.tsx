import { cn } from "@/lib/cn";

type OnboardingLoadingProps = {
  label?: string;
  className?: string;
};

/**
 * Shared loading surface for onboarding routes.
 * Uses measured --site-header-height so copy never sits under the fixed Navbar.
 */
export function OnboardingLoading({
  label = "Loading…",
  className,
}: OnboardingLoadingProps) {
  return (
    <div
      className={cn(
        "relative z-0 bg-brand-black px-5 text-zinc-400",
        className,
      )}
      style={{
        paddingTop: "calc(var(--site-header-height, 6rem) + 2.5rem)",
        paddingBottom: "6rem",
      }}
      role="status"
      aria-live="polite"
    >
      {label}
    </div>
  );
}
