"use client";

import { motion, useReducedMotion } from "framer-motion";

import { NETWORK_MODULES, OPERATIONAL_METRICS, type OperationalMetric } from "@/lib/homepage-proof-intelligence";
import {
  getMetricAnchorPositions,
  getMetricAnchorTopClass,
} from "@/lib/operations-section-composition";
import {
  VIEWPORT_ONCE,
  metricCardOuter,
  metricProgressBar,
  metricValueReveal,
  staggerContainer,
} from "@/lib/operations-motion";
import { cn } from "@/lib/cn";

import { OperationsAmbientLayer } from "./OperationsAmbientLayer";
import { MetricsTelemetryRail } from "./MetricsTelemetryRail";
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
    <motion.li
      variants={metricCardOuter}
      className={cn(
        "relative",
        "lg:absolute lg:left-0 lg:right-0 lg:-translate-y-1/2 lg:pl-5",
        getMetricAnchorTopClass(metric.id),
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-white/12 bg-brand-surface/80 p-4",
          "shadow-[0_0_32px_-20px_rgba(185,28,28,0.2)] ring-1 ring-white/5 backdrop-blur-sm",
          "transition-[border-color,box-shadow] duration-300",
          "hover:border-brand-red/45 hover:shadow-[0_0_40px_-16px_rgba(185,28,28,0.35)]",
          "active:border-brand-red/35 lg:active:border-white/12",
          "lg:px-3.5 lg:py-2.5 lg:shadow-[0_0_24px_-22px_rgba(185,28,28,0.15)]",
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
        <p className="mt-1.5 text-sm leading-snug text-zinc-400 lg:mt-1">{metric.detail}</p>
        <motion.div
          variants={progressVariants}
          className="absolute inset-x-4 bottom-0 h-px origin-left bg-gradient-to-r from-brand-red/60 via-brand-red-light/40 to-transparent"
          aria-hidden
        />
      </div>
    </motion.li>
  );
}

export function ProofIntelligenceOperationsPanel() {
  const metricAnchorPositions = getMetricAnchorPositions().map((p) => p.yPct);

  return (
    <div className="relative mt-10 overflow-x-hidden lg:mt-12">
      <OperationsAmbientLayer />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:items-stretch lg:gap-10 xl:gap-14">
        <div className="flex min-h-0 flex-col">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Operational performance
          </h3>
          <div className="relative mt-4 flex min-h-0 flex-1 flex-col lg:min-h-[560px]">
            <MetricsTelemetryRail anchorPositions={metricAnchorPositions} />
            <motion.ul
              className="relative flex flex-col gap-3 lg:h-full lg:w-full lg:gap-0"
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
        </div>

        <div className="flex min-h-0 flex-col">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
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
