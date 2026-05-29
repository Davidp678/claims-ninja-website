import {
  PLATFORM_PILLARS,
  PLATFORM_PILLARS_FOOTER,
} from "@/lib/platform-overview";
import { cn } from "@/lib/cn";

type PillarId = (typeof PLATFORM_PILLARS)[number]["id"];

function PillarIcon({ id, className }: { id: PillarId; className?: string }) {
  const base = cn("h-6 w-6 shrink-0 text-brand-red-light", className);

  switch (id) {
    case "expert-support":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
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
          strokeWidth="1.75"
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
          strokeWidth="1.75"
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

function PillarPlus() {
  return (
    <span
      className="font-display text-2xl font-light text-zinc-600 lg:self-center"
      aria-hidden
    >
      +
    </span>
  );
}

function PillarCard({
  pillar,
}: {
  pillar: (typeof PLATFORM_PILLARS)[number];
}) {
  return (
    <article
      className={cn(
        "flex h-full max-w-md flex-1 flex-col rounded-2xl border border-white/15 bg-brand-surface p-8 lg:p-9",
        "shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-brand-red/45 hover:shadow-[0_0_56px_-20px_rgba(220,38,38,0.35)]",
      )}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/12 ring-1 ring-brand-red/35"
        aria-hidden
      >
        <PillarIcon id={pillar.id} />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white lg:text-2xl">
        {pillar.title}
      </h3>
      <p className="mt-4 flex-1 text-base leading-relaxed text-zinc-300">
        {pillar.description}
      </p>
    </article>
  );
}

export function PlatformEcosystemPanel() {
  const [first, second, third] = PLATFORM_PILLARS;

  return (
    <div className="mt-14">
      <div className="hidden items-stretch justify-center gap-6 lg:flex xl:gap-8">
        <PillarCard pillar={first} />
        <PillarPlus />
        <PillarCard pillar={second} />
        <PillarPlus />
        <PillarCard pillar={third} />
      </div>

      <div className="flex flex-col items-center gap-4 lg:hidden">
        <PillarCard pillar={first} />
        <PillarPlus />
        <PillarCard pillar={second} />
        <PillarPlus />
        <PillarCard pillar={third} />
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-zinc-500 sm:text-base lg:mt-14">
        {PLATFORM_PILLARS_FOOTER}
      </p>
    </div>
  );
}
