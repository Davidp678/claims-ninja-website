import { FAQ_CARD_CLASS } from "@/lib/faq-page";
import { cn } from "@/lib/cn";

const PILLS = ["Supplements", "Roofing", "Documentation", "Pricing"] as const;

export function FaqHeroVisual() {
  return (
    <div
      aria-hidden
      className="relative mx-auto w-full max-w-md lg:max-w-none lg:mx-0"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.25)] shadow-lg shadow-black/30">
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-red/20 blur-3xl" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red-light">
          Knowledge topics
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {PILLS.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-white/12 bg-brand-elevated/80 px-3 py-1 text-xs font-medium text-zinc-300"
            >
              {pill}
            </span>
          ))}
        </div>
        <div className="mt-6 space-y-3">
          {[0.9, 0.75, 0.6].map((width, i) => (
            <div
              key={i}
              className={cn(
                "rounded-lg border border-white/8 bg-brand-elevated/60 p-3",
                i === 0 && "border-brand-red/20",
              )}
            >
              <div
                className="h-2 rounded-full bg-white/12"
                style={{ width: `${width * 100}%` }}
              />
              <div
                className="mt-2 h-1.5 rounded-full bg-white/8"
                style={{ width: `${(width - 0.15) * 100}%` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/15">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-brand-red-light"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M20 20l-3-3" />
            </svg>
          </div>
          <span className="text-sm text-zinc-400">Searchable FAQ library</span>
        </div>
      </div>
      <div
        className={cn(
          FAQ_CARD_CLASS,
          "absolute -bottom-4 -left-4 hidden max-w-[180px] p-4 sm:block lg:-left-6",
        )}
      >
        <p className="font-display text-2xl font-semibold text-brand-red-light">12+</p>
        <p className="mt-1 text-xs leading-relaxed text-zinc-400">Topic categories</p>
      </div>
    </div>
  );
}
