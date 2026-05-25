"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  OPERATIONAL_METRICS,
  PLATFORM_CAPABILITIES,
  type OperationalMetric,
  type PlatformCapabilityId,
} from "@/lib/homepage-proof-intelligence";
import {
  VIEWPORT_ONCE,
  metricCardOuter,
  metricProgressBar,
  metricValueReveal,
  staggerContainer,
  tileItem,
  tileStaggerContainer,
} from "@/lib/operations-motion";
import { cn } from "@/lib/cn";

import { OperationsAmbientLayer } from "./OperationsAmbientLayer";
import { PlatformOrchestrationOverlay } from "./PlatformOrchestrationOverlay";

function PlatformCapabilityIcon({
  id,
  className,
}: {
  id: PlatformCapabilityId;
  className?: string;
}) {
  const base = cn(
    "h-5 w-5 shrink-0 text-brand-red-light/90 transition-all duration-200 group-hover:text-brand-red-light group-hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.45)]",
    className,
  );

  switch (id) {
    case "ai_intelligence":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L8 21l-1.5-4M14.25 17L16 21l1.5-4M12 3v2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11a4 4 0 118 0 4 4 0 01-8 0z" />
          <path strokeLinecap="round" d="M4 19h16" />
        </svg>
      );
    case "supplement_team":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "pa_support":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v6c0 3.5-2.5 6.5-7 8-4.5-1.5-7-4.5-7-8V7l7-4z" />
          <path strokeLinecap="round" d="M9 12l2 2 4-4" />
        </svg>
      );
    case "client_portal":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path strokeLinecap="round" d="M3 9h18M8 4v5M16 4v5" />
        </svg>
      );
    case "claim_coordination":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h6" />
          <path strokeLinecap="round" d="M15 15l4 4m0-4l-4 4" />
        </svg>
      );
    case "centralized_visibility":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}

function PerformanceMetricCard({ metric }: { metric: OperationalMetric }) {
  const reduceMotion = useReducedMotion();
  const valueVariants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : metricValueReveal;
  const progressVariants = reduceMotion
    ? { hidden: { scaleX: 1 }, visible: { scaleX: 1 } }
    : metricProgressBar;

  return (
    <motion.li
      variants={metricCardOuter}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/12 bg-brand-surface/80 p-4",
        "shadow-[0_0_32px_-20px_rgba(185,28,28,0.2)] ring-1 ring-white/5 backdrop-blur-sm",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-brand-red/40 hover:shadow-[0_0_40px_-16px_rgba(185,28,28,0.35)]",
        "active:border-brand-red/35 lg:active:border-white/12",
      )}
    >
      <motion.p
        variants={valueVariants}
        className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl"
      >
        {metric.value}
      </motion.p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-red-light">
        {metric.label}
      </p>
      <p className="mt-1.5 text-sm leading-snug text-zinc-400">{metric.detail}</p>
      <motion.div
        variants={progressVariants}
        className="absolute inset-x-4 bottom-0 h-px origin-left bg-gradient-to-r from-brand-red/60 via-brand-red-light/40 to-transparent"
        aria-hidden
      />
    </motion.li>
  );
}

function PlatformCapabilityTile({
  label,
  subline,
  id,
}: {
  label: string;
  subline: string;
  id: PlatformCapabilityId;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      variants={tileItem}
      whileHover={reduceMotion ? undefined : { y: -1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "operations-tile-scan group relative flex flex-col gap-2 overflow-hidden rounded-lg",
        "border border-white/10 bg-brand-black/50 p-3.5",
        "transition-[border-color,background-color,box-shadow] duration-300",
        "hover:border-brand-red/40 hover:bg-brand-elevated/60 hover:shadow-[0_0_24px_-12px_rgba(185,28,28,0.3)]",
        "active:border-brand-red/35 active:bg-brand-elevated/50",
        "focus-within:border-brand-red/40",
      )}
    >
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(185,28,28,0.12),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <span
        className="animate-signal-pulse absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-brand-red-light"
        aria-hidden
      />
      <PlatformCapabilityIcon id={id} className="relative z-10" />
      <div className="relative z-10">
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="mt-0.5 text-xs text-zinc-500">{subline}</p>
      </div>
    </motion.li>
  );
}

export function ProofIntelligenceOperationsPanel() {
  return (
    <div className="relative mt-10 overflow-hidden lg:mt-12">
      <OperationsAmbientLayer />

      <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Operational performance
          </h3>
          <motion.ul
            className="mt-4 space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={staggerContainer}
          >
            {OPERATIONAL_METRICS.map((metric) => (
              <PerformanceMetricCard key={metric.id} metric={metric} />
            ))}
          </motion.ul>
        </div>

        <div className="relative">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            How Claims Ninja works
          </h3>
          <div className="relative mt-4 min-h-[280px] lg:min-h-[320px]">
            <PlatformOrchestrationOverlay />
            <motion.ul
              className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              variants={tileStaggerContainer}
            >
              {PLATFORM_CAPABILITIES.map((item) => (
                <PlatformCapabilityTile
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  subline={item.subline}
                />
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}
