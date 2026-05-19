import type { ClaimFinding } from "@/lib/claim-analysis";
import {
  CATEGORY_LABELS,
  SEVERITY_STYLES,
  formatConfidencePercent,
} from "@/lib/claim-report-display";
import { cn } from "@/lib/cn";

type FindingsGridProps = {
  findings: ClaimFinding[];
};

export function FindingsGrid({ findings }: FindingsGridProps) {
  if (findings.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="findings-heading">
      <h2
        id="findings-heading"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400"
      >
        Key findings
      </h2>
      <p className="mt-2 text-sm text-zinc-500">
        Prioritized gaps and recovery opportunities identified in your claim file.
      </p>
      <ul className="mt-8 grid gap-5 md:grid-cols-2">
        {findings.map((finding, index) => {
          const severity = SEVERITY_STYLES[finding.severity];
          const confidencePct = formatConfidencePercent(finding.confidence);

          return (
            <li
              key={`${finding.title}-${finding.category}-${index}`}
              className={cn(
                "group rounded-2xl border border-white/12 bg-brand-black/55 p-6 ring-1 ring-white/5",
                "opacity-0 animate-[fadeSlideIn_0.5s_ease-out_forwards]",
              )}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-white">{finding.title}</h3>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
                    severity.badge,
                  )}
                >
                  <span className={cn("h-1.5 w-1.5 rounded-full", severity.dot)} />
                  {severity.label}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-zinc-300">
                  {CATEGORY_LABELS[finding.category]}
                </span>
                <span className="rounded-md bg-white/5 px-2 py-1 text-xs text-zinc-400">
                  {confidencePct}% confidence
                </span>
              </div>
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-red to-brand-red-light transition-all duration-500"
                  style={{ width: `${confidencePct}%` }}
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">{finding.explanation}</p>
              <div className="mt-5 rounded-lg border border-brand-red/25 bg-brand-red/8 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-red-light">
                  Recommended action
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-200">
                  {finding.recommendedAction}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
