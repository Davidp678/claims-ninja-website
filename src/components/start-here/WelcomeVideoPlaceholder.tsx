import { cn } from "@/lib/cn";

export function WelcomeVideoPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[760px] rounded-2xl p-px shadow-[0_0_80px_-4px_rgba(220,38,38,0.72)] ring-1 ring-brand-red/60 bg-gradient-to-br from-brand-red/30 via-brand-red/10 to-white/5 lg:rounded-3xl",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[calc(1rem-1px)] bg-brand-black ring-1 ring-inset ring-white/12 lg:rounded-[calc(1.5rem-1px)]">
        <div className="relative aspect-[27/20] bg-gradient-to-br from-brand-black via-brand-surface to-brand-black">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.12)_0%,transparent_70%)]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
            <div
              aria-hidden
              className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-red/50 bg-brand-red/15 shadow-[0_0_32px_-8px_rgba(220,38,38,0.6)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-7 w-7 text-brand-red-light"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
                Welcome Video
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400">
                Coming soon: a quick walkthrough from the Claims Ninja team.
              </p>
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
