"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  CASE_STUDIES_PROOF_METRICS,
  type ProofMetric,
} from "@/lib/case-studies-page";
import {
  VIEWPORT_ONCE,
  metricCardOuter,
  metricProgressBar,
  metricValueReveal,
  staggerContainer,
} from "@/lib/operations-motion";
import { cn } from "@/lib/cn";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProofMetricCard({ metric }: { metric: ProofMetric }) {
  const reduceMotion = useReducedMotion();
  const valueVariants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : metricValueReveal;
  const progressVariants = reduceMotion
    ? { hidden: { scaleX: 1 }, visible: { scaleX: 1 } }
    : metricProgressBar;

  return (
    <motion.li variants={metricCardOuter} className="list-none">
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-white/12 bg-brand-surface/80 p-6",
          "shadow-[0_0_32px_-20px_rgba(220,38,38,0.28)] ring-1 ring-white/5 backdrop-blur-sm",
          "transition-[border-color,box-shadow] duration-300",
          "hover:border-brand-red/45 hover:shadow-[0_0_40px_-16px_rgba(220,38,38,0.4)]",
        )}
      >
        <motion.p
          variants={valueVariants}
          className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          {metric.value}
        </motion.p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-red-light">
          {metric.label}
        </p>
        <motion.div
          variants={progressVariants}
          className="absolute inset-x-4 bottom-0 h-px origin-left bg-gradient-to-r from-brand-red/60 via-brand-red-light/40 to-transparent"
          aria-hidden
        />
      </div>
    </motion.li>
  );
}

export function CaseStudiesProofMetricsSection() {
  return (
    <Section bordered className="bg-brand-elevated py-16 sm:py-20">
      <SectionHeading
        eyebrow="Claims Ninja by the numbers"
        title="Performance at portfolio scale"
        description="Aggregate outcomes across thousands of reviewed claims — representative of what expert supplement review and claims operations support can deliver."
        align="left"
        className="max-w-3xl"
      />
      <motion.ul
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        variants={staggerContainer}
      >
        {CASE_STUDIES_PROOF_METRICS.map((metric) => (
          <ProofMetricCard key={metric.id} metric={metric} />
        ))}
      </motion.ul>
    </Section>
  );
}
