import { reportDateFmt } from "@/lib/claim-report-display";
import type { ClaimReportContext } from "@/lib/claim-report-data";

type ClaimReportHeroProps = {
  shortRef: string;
  analyzedAt: string;
  aiModel?: string;
  context?: ClaimReportContext;
};

export function ClaimReportHero({
  shortRef,
  analyzedAt,
  aiModel,
  context,
}: ClaimReportHeroProps) {
  const analyzedLabel = reportDateFmt.format(new Date(analyzedAt));

  return (
    <header className="relative">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-red-light">
        Claims Ninja Intelligence
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        AI Claim Intelligence Report
      </h1>
      <div className="mt-5 h-px w-24 bg-gradient-to-r from-brand-red to-brand-red/20" />
      <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Report reference
          </dt>
          <dd className="mt-1 font-mono text-lg font-medium tracking-wide text-white">
            CN-{shortRef}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Analyzed
          </dt>
          <dd className="mt-1 text-zinc-200">{analyzedLabel}</dd>
        </div>
        {context?.claimType ? (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Claim type
            </dt>
            <dd className="mt-1">
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-zinc-100">
                {context.claimType}
              </span>
            </dd>
          </div>
        ) : null}
        {context?.carrierEstimate ? (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Carrier estimate
            </dt>
            <dd className="mt-1 text-zinc-200">{context.carrierEstimate}</dd>
          </div>
        ) : null}
        {context?.fileCount !== undefined && context.fileCount > 0 ? (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Documents reviewed
            </dt>
            <dd className="mt-1 text-zinc-200">
              {context.fileCount} file{context.fileCount === 1 ? "" : "s"}
            </dd>
          </div>
        ) : null}
        {aiModel ? (
          <div className="hidden sm:block">
            <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Engine
            </dt>
            <dd className="mt-1 text-zinc-400">{aiModel}</dd>
          </div>
        ) : null}
      </dl>
    </header>
  );
}
