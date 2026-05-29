"use client";

import { useReducedMotion } from "framer-motion";

import { PLATFORM_PILLARS, type PlatformPillarIcon } from "@/lib/platform-overview";
import { cn } from "@/lib/cn";

function PlatformPillarIcon({
  icon,
  className,
}: {
  icon: PlatformPillarIcon;
  className?: string;
}) {
  const base = cn("h-5 w-5 shrink-0 text-brand-red-light", className);

  switch (icon) {
    case "human":
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
    case "operations":
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
    case "intelligence":
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

function PulseNode({ animate }: { animate: boolean }) {
  return (
    <span
      className={cn(
        "relative flex h-2.5 w-2.5 shrink-0 items-center justify-center",
        animate && "animate-signal-pulse",
      )}
      aria-hidden
    >
      <span className="absolute inset-0 rounded-full bg-brand-red/40 blur-[2px]" />
      <span className="relative h-1.5 w-1.5 rounded-full bg-brand-red-light" />
    </span>
  );
}

function HorizontalConnector({ animate }: { animate: boolean }) {
  return (
    <div
      className="relative hidden h-full min-h-[8rem] w-10 flex-col items-center justify-center lg:flex"
      aria-hidden
    >
      <div className="h-px w-full bg-gradient-to-r from-brand-red/10 via-brand-red/50 to-brand-red/10" />
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-red/35 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <PulseNode animate={animate} />
      </div>
    </div>
  );
}

function VerticalConnector({ animate }: { animate: boolean }) {
  return (
    <div
      className="flex flex-col items-center py-2 lg:hidden"
      aria-hidden
    >
      <div className="h-8 w-px bg-gradient-to-b from-brand-red/20 via-brand-red/45 to-brand-red/20" />
      <PulseNode animate={animate} />
      <div className="h-8 w-px bg-gradient-to-b from-brand-red/20 via-brand-red/45 to-brand-red/20" />
    </div>
  );
}

function EcosystemModuleCard({
  pillar,
}: {
  pillar: (typeof PLATFORM_PILLARS)[number];
}) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/12",
        "bg-brand-surface/80 p-6 shadow-[0_0_32px_-20px_rgba(220,38,38,0.28)] ring-1 ring-white/5 backdrop-blur-sm",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-brand-red/45 hover:shadow-[0_0_40px_-16px_rgba(220,38,38,0.4)]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/15 ring-1 ring-brand-red/40"
            aria-hidden
          >
            <PlatformPillarIcon icon={pillar.icon} />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-red-light">
            {pillar.layerLabel}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full bg-emerald-500/90 shadow-[0_0_6px_rgba(16,185,129,0.6)]"
            aria-hidden
          />
          <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
            Active
          </span>
        </div>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-white">
        {pillar.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">
        {pillar.description}
      </p>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent"
        aria-hidden
      />
    </article>
  );
}

function PlatformHub({ animate }: { animate: boolean }) {
  return (
    <div className="relative mt-10 flex flex-col items-center lg:mt-12">
      <div
        className="pointer-events-none absolute left-1/2 top-0 hidden h-8 w-px -translate-x-1/2 bg-gradient-to-b from-brand-red/30 to-transparent lg:block"
        aria-hidden
      />
      <div
        className={cn(
          "relative flex items-center gap-3 rounded-full border border-brand-red/35 px-6 py-3",
          "bg-brand-surface/90 shadow-[0_0_40px_-12px_rgba(220,38,38,0.55)] ring-1 ring-inset ring-white/10 backdrop-blur-sm",
        )}
      >
        <PulseNode animate={animate} />
        <span className="font-display text-sm font-semibold tracking-tight text-white">
          Claims Ninja Platform
        </span>
      </div>
      <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
        Unified operating layer
      </p>
    </div>
  );
}

function EcosystemAmbientLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl"
      aria-hidden
    >
      <div
        className="animate-grid-shift absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="animate-ambient-drift absolute -left-1/4 top-0 h-48 w-48 rounded-full bg-brand-red/12 blur-3xl" />
      <div className="animate-ambient-drift-reverse absolute -right-1/4 bottom-0 h-40 w-40 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/8 blur-3xl" />
    </div>
  );
}

export function PlatformEcosystemPanel() {
  const reduceMotion = useReducedMotion();
  const animatePulse = !reduceMotion;
  const [first, second, third] = PLATFORM_PILLARS;

  return (
    <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/8 px-4 py-10 sm:px-8 sm:py-12 lg:px-10">
      <EcosystemAmbientLayer />

      <div className="relative z-10">
        {/* Desktop: three cards with horizontal connectors */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-0">
          <EcosystemModuleCard pillar={first} />
          <HorizontalConnector animate={animatePulse} />
          <EcosystemModuleCard pillar={second} />
          <HorizontalConnector animate={animatePulse} />
          <EcosystemModuleCard pillar={third} />
        </div>

        {/* Mobile: stacked cards with vertical connectors */}
        <div className="lg:hidden">
          <EcosystemModuleCard pillar={first} />
          <VerticalConnector animate={animatePulse} />
          <EcosystemModuleCard pillar={second} />
          <VerticalConnector animate={animatePulse} />
          <EcosystemModuleCard pillar={third} />
        </div>

        <PlatformHub animate={animatePulse} />
      </div>
    </div>
  );
}
