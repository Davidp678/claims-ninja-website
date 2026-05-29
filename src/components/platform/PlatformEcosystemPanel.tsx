import {
  PLATFORM_PILLARS,
  PLATFORM_PILLARS_FOOTER,
} from "@/lib/platform-overview";
import { cn } from "@/lib/cn";

type PillarId = (typeof PLATFORM_PILLARS)[number]["id"];

function PillarIcon({ id, className }: { id: PillarId; className?: string }) {
  const base = cn("h-[18px] w-[18px] shrink-0 text-brand-red-light/95", className);

  switch (id) {
    case "expert-support":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          />
          <circle cx="9" cy="7" r="4" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          />
        </svg>
      );
    case "claims-technology":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "ai-intelligence":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 11a4 4 0 118 0 4 4 0 01-8 0z"
          />
          <path strokeLinecap="round" d="M4 19h16" />
          <path strokeLinecap="round" d="M9 17l1.5 4M15 17l-1.5 4" />
        </svg>
      );
  }
}

function PillarCard({
  pillar,
}: {
  pillar: (typeof PLATFORM_PILLARS)[number];
}) {
  return (
    <article
      className={cn(
        "group relative isolate flex h-full flex-col overflow-hidden rounded-2xl p-7 lg:p-8",
        "border border-white/20 bg-gradient-to-b from-white/[0.12] via-white/[0.07] to-white/[0.03]",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.14)_inset,0_22px_42px_-28px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.05)]",
        "transition-[border-color,box-shadow,transform] duration-300",
        "hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.16)_inset,0_28px_50px_-26px_rgba(0,0,0,0.9),0_0_58px_-28px_rgba(220,38,38,0.54)]",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.18] via-white/[0.06] to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-8 h-32 w-32 rounded-full bg-brand-red/22 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 right-10 h-20 w-24 rotate-12 bg-gradient-to-b from-white/[0.14] to-transparent blur-md"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/25 to-transparent"
      />

      <div className="relative">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-md border border-white/25 bg-white/[0.08] shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_6px_14px_-10px_rgba(220,38,38,0.55)]"
          aria-hidden
        >
          <PillarIcon id={pillar.id} />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white lg:text-xl">
          {pillar.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-200">
          {pillar.description}
        </p>
      </div>
    </article>
  );
}

export function PlatformEcosystemPanel() {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:items-stretch">
        {PLATFORM_PILLARS.map((pillar) => (
          <PillarCard key={pillar.id} pillar={pillar} />
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-zinc-500 sm:text-base">
        {PLATFORM_PILLARS_FOOTER}
      </p>
    </div>
  );
}
