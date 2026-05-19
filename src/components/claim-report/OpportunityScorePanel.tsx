import type { ClaimAnalysisResult } from "@/lib/claim-analysis";
import {
  formatRevenueRange,
  getComplexityLabel,
  getOpportunityTier,
} from "@/lib/claim-report-display";

type OpportunityScorePanelProps = {
  analysis: ClaimAnalysisResult;
};

export function OpportunityScorePanel({ analysis }: OpportunityScorePanelProps) {
  const score = analysis.opportunityScore;
  const tier = getOpportunityTier(score);
  const complexity = getComplexityLabel(analysis.findings);
  const { low, high } = analysis.estimatedMissedRevenueRange;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <section
      aria-labelledby="opportunity-score-heading"
      className="relative overflow-hidden rounded-2xl border border-white/12 bg-brand-elevated/70 p-6 shadow-[0_24px_80px_-40px_rgba(185,28,28,0.35)] ring-1 ring-white/5 sm:p-10"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
        <div className="flex flex-col items-center lg:items-start">
          <h2
            id="opportunity-score-heading"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400"
          >
            Opportunity score
          </h2>
          <div className="relative mt-6">
            <svg
              className="h-40 w-40 -rotate-90 sm:h-44 sm:w-44"
              viewBox="0 0 120 120"
              aria-hidden
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="8"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="url(#scoreGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-[stroke-dashoffset] duration-700 ease-out"
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#b91c1c" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-5xl font-bold tabular-nums text-white sm:text-6xl">
                {score}
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                / 100
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-center lg:text-left">
          <div>
            <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {tier.label}
            </p>
            <p className="mt-1 text-sm font-medium text-brand-red-light">{tier.strength}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-300">
              {tier.description}
            </p>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-brand-black/50 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Est. missed revenue
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold text-white">
                {formatRevenueRange(low, high)}
              </dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-brand-black/50 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Claim complexity
              </dt>
              <dd className="mt-1 font-medium text-zinc-100">{complexity.label}</dd>
              <dd className="mt-1 text-xs text-zinc-400">{complexity.detail}</dd>
            </div>
          </dl>

          <p className="text-xs text-zinc-500">
            Range reflects AI-assisted triage based on uploaded scope and estimate documents — not
            a binding valuation.
          </p>
        </div>
      </div>
    </section>
  );
}
