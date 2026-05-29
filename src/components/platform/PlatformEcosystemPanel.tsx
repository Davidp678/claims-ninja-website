import {
  PLATFORM_PILLARS,
  PLATFORM_PILLARS_FOOTER,
} from "@/lib/platform-overview";
import { cn } from "@/lib/cn";

type PillarId = (typeof PLATFORM_PILLARS)[number]["id"];

function PillarIcon({ id, className }: { id: PillarId; className?: string }) {
  const base = cn("h-[18px] w-[18px] shrink-0 text-brand-red-light", className);

  switch (id) {
    case "expert-support":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
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
          strokeWidth="1.5"
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
          strokeWidth="1.5"
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
        "group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 lg:p-8",
        "border border-white/15 bg-gradient-to-b from-white/[0.09] via-white/[0.05] to-white/[0.02]",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset,0_30px_60px_-32px_rgba(0,0,0,0.9)]",
        "transition-[border-color,box-shadow,transform] duration-300",
        "hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_40px_70px_-30px_rgba(0,0,0,0.9),0_0_50px_-24px_rgba(220,38,38,0.45)]",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.1] to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-red/15 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />

      <div className="relative">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]"
          aria-hidden
        >
          <PillarIcon id={pillar.id} />
        </div>
        <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-white lg:text-xl">
          {pillar.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">
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

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-zinc-500 sm:text-base">
        {PLATFORM_PILLARS_FOOTER}
      </p>
    </div>
  );
}
