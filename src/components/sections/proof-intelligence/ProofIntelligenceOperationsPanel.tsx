"use client";

import { motion, useReducedMotion } from "framer-motion";

import { NETWORK_MODULES, OPERATIONAL_METRICS, type OperationalMetric } from "@/lib/homepage-proof-intelligence";
import {
  VIEWPORT_ONCE,
  metricCardOuter,
  metricProgressBar,
  metricValueReveal,
  staggerContainer,
} from "@/lib/operations-motion";
import { cn } from "@/lib/cn";

import { OperationsAmbientLayer } from "./OperationsAmbientLayer";
import {
  MetricsTelemetryRailBackdrop,
  TelemetryRowConnector,
} from "./MetricsTelemetryRail";
import { OperationsIntelligenceNetwork } from "./OperationsIntelligenceNetwork";

function PerformanceMetricCard({ metric }: { metric: OperationalMetric }) {
  const reduceMotion = useReducedMotion();
  const valueVariants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : metricValueReveal;
  const progressVariants = reduceMotion
    ? { hidden: { scaleX: 1 }, visible: { scaleX: 1 } }
    : metricProgressBar;

  return (
    <div
      className={cn(
        "relative flex-1 overflow-hidden rounded-xl border border-white/12 bg-brand-surface/80 p-4",
        "shadow-[0_0_32px_-20px_rgba(220,38,38,0.28)] ring-1 ring-white/5 backdrop-blur-sm",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-brand-red/45 hover:shadow-[0_0_40px_-16px_rgba(220,38,38,0.4)]",
        "active:border-brand-red/35 lg:active:border-white/12",
        "lg:min-h-[7.5rem] lg:px-4 lg:py-3.5",
        "lg:shadow-[0_0_24px_-22px_rgba(220,38,38,0.22)]",
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
      <p className="mt-1.5 text-sm leading-snug text-zinc-300 lg:mt-1.5">{metric.detail}</p>
      <motion.div
        variants={progressVariants}
        className="absolute inset-x-4 bottom-0 h-px origin-left bg-gradient-to-r from-brand-red/60 via-brand-red-light/40 to-transparent"
        aria-hidden
      />
    </div>
  );
}

export function ProofIntelligenceOperationsPanel() {
  return (
    <div className="relative mt-10 overflow-x-hidden lg:mt-12">
      <OperationsAmbientLayer />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:items-stretch lg:gap-10 xl:gap-14">
        <div className="flex min-h-0 flex-col">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Operational performance
          </h3>
          <div className="relative mt-4 flex min-h-0 flex-1 flex-col lg:min-h-[560px]">
            <MetricsTelemetryRailBackdrop />
            <motion.ul
              className="relative flex flex-1 flex-col gap-3 lg:gap-5 lg:pl-1 lg:justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              variants={staggerContainer}
            >
              {OPERATIONAL_METRICS.map((metric, index) => (
                <motion.li
                  key={metric.id}
                  variants={metricCardOuter}
                  className="flex items-center gap-3"
                >
                  <TelemetryRowConnector index={index} />
                  <PerformanceMetricCard metric={metric} />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="flex min-h-0 flex-col">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Operations intelligence network
          </h3>
          <div className="mt-4 flex min-h-0 flex-1 flex-col">
            <OperationsIntelligenceNetwork modules={NETWORK_MODULES} />
          </div>
        </div>
      </div>
    </div>
  );
}
