import type { EstimatedMissedRevenueRange } from "@/lib/claim-analysis";
import { currencyFmt } from "@/lib/claim-report-display";

type RevenueOpportunityBandProps = {
  range: EstimatedMissedRevenueRange;
};

export function RevenueOpportunityBand({ range }: RevenueOpportunityBandProps) {
  return (
    <section
      aria-labelledby="revenue-opportunity-heading"
      className="relative overflow-hidden rounded-2xl border border-brand-red/30 bg-gradient-to-br from-brand-red/20 via-brand-elevated/80 to-brand-black px-6 py-10 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(239,68,68,0.12),transparent_60%)]" />
      <div className="relative text-center">
        <h2
          id="revenue-opportunity-heading"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red-light"
        >
          Estimated revenue opportunity
        </h2>
        <p className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {currencyFmt.format(range.low)}
          <span className="mx-3 text-2xl font-normal text-zinc-500 sm:text-3xl">to</span>
          {currencyFmt.format(range.high)}
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300">
          Potential additional recovery identified through AI-assisted scope and pricing review.
          Actual results depend on carrier response, policy terms, and documented damages.
        </p>
      </div>
    </section>
  );
}
