import { cn } from "@/lib/cn";
import { PROGRESS_STEPS } from "@/lib/start-here/content";

export function StartHereProgressIndicator() {
  return (
    <div className="border-b border-white/10 bg-brand-black/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 sm:text-left">
          Onboarding progress
        </p>

        <ol className="hidden items-center gap-2 lg:flex">
          {PROGRESS_STEPS.map((item, index) => (
            <li key={item.step} className="flex min-w-0 flex-1 items-center gap-2">
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-display text-sm font-semibold",
                  item.emphasized
                    ? "border-brand-red/60 bg-brand-red/15 text-brand-red-light shadow-[0_0_20px_-6px_rgba(220,38,38,0.6)]"
                    : "border-white/20 bg-brand-surface text-zinc-300",
                )}
              >
                {item.step}
              </div>
              <span
                className={cn(
                  "truncate text-xs font-medium",
                  item.emphasized ? "text-brand-red-light" : "text-zinc-400",
                )}
              >
                {item.label}
              </span>
              {index < PROGRESS_STEPS.length - 1 ? (
                <div
                  aria-hidden
                  className="mx-1 h-px min-w-[1rem] flex-1 bg-gradient-to-r from-brand-red/30 to-white/10"
                />
              ) : null}
            </li>
          ))}
        </ol>

        <ol className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {PROGRESS_STEPS.map((item) => (
            <li
              key={item.step}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5",
                item.emphasized
                  ? "border-brand-red/50 bg-brand-red/10"
                  : "border-white/15 bg-brand-surface/80",
              )}
            >
              <span
                className={cn(
                  "font-display text-xs font-semibold",
                  item.emphasized ? "text-brand-red-light" : "text-zinc-400",
                )}
              >
                {item.step}
              </span>
              <span
                className={cn(
                  "whitespace-nowrap text-xs font-medium",
                  item.emphasized ? "text-brand-red-light" : "text-zinc-300",
                )}
              >
                {item.shortLabel}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
