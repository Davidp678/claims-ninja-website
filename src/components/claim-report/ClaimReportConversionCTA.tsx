import { Button } from "@/components/ui/Button";
import type { ClaimAnalysisResult } from "@/lib/claim-analysis";
import {
  formatRevenueRange,
  getOpportunityTier,
} from "@/lib/claim-report-display";

const TRUST_INDICATORS = [
  "AI-assisted + expert-reviewed",
  "Contractor-focused supplement intelligence",
  "Rapid turnaround",
  "No in-house claims department needed",
] as const;

type ClaimReportConversionCTAProps = {
  analysis: ClaimAnalysisResult;
};

export function ClaimReportConversionCTA({ analysis }: ClaimReportConversionCTAProps) {
  const { low, high } = analysis.estimatedMissedRevenueRange;
  const findingsCount = analysis.findings.length;
  const tier = getOpportunityTier(analysis.opportunityScore);
  const revenueRange = formatRevenueRange(low, high);

  const findingsLabel =
    findingsCount === 1 ? "1 finding" : `${findingsCount} findings`;

  return (
    <section
      aria-labelledby="conversion-cta-heading"
      className="border-t border-white/10 pt-16 opacity-0 animate-[fadeSlideIn_0.6s_ease-out_forwards]"
      style={{ animationDelay: "120ms" }}
    >
      <div className="relative overflow-hidden rounded-3xl border border-brand-red/30 bg-gradient-to-br from-brand-red/15 via-brand-elevated/90 to-brand-black p-8 shadow-[0_0_80px_-24px_rgba(185,28,28,0.4)] ring-1 ring-white/5 backdrop-blur-sm sm:p-10 lg:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-red/8 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(239,68,68,0.1),transparent_55%)]"
        />

        <div className="relative max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red-light">
            Next step for your team
          </p>
          <h2
            id="conversion-cta-heading"
            className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Turn This Opportunity Into A Documented Supplement
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
            This report surfaced{" "}
            <span className="font-medium text-white">{findingsLabel}</span> with{" "}
            <span className="font-medium text-brand-red-light">{revenueRange}</span> in
            potential recovery — a{" "}
            <span className="font-medium text-zinc-200">{tier.label.toLowerCase()}</span>{" "}
            (score {analysis.opportunityScore}/100). There may still be money on the table
            in overlooked scope, pricing discrepancies, and code-driven line items.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Claims Ninja applies supplement intelligence built for contractors — not generic
            estimating software. Our team documents gaps, validates carrier scope, and
            prepares negotiation-ready supplements without you staffing an in-house claims
            department.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {TRUST_INDICATORS.map((indicator) => (
              <li
                key={indicator}
                className="rounded-full border border-white/12 bg-brand-black/40 px-3 py-1.5 text-xs text-zinc-400"
              >
                {indicator}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="/#calculator" size="lg" className="w-full sm:w-auto">
              Request Full Supplement Review
            </Button>
            <Button
              href="/#calculator"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Upload Another Claim
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
