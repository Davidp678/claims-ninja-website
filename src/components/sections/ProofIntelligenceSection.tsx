import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CLAIM_INTELLIGENCE_SNAPSHOTS,
  INTELLIGENCE_CATEGORIES,
  type ClaimIntelligenceSnapshot,
  type IntelligenceCategoryId,
} from "@/lib/homepage-proof-intelligence";
import { cn } from "@/lib/cn";

function IntelligenceSnapshotCard({
  snapshot,
  index,
}: {
  snapshot: ClaimIntelligenceSnapshot;
  index: number;
}) {
  return (
    <li
      className={cn(
        "rounded-xl border border-white/12 bg-brand-surface/80 p-4 shadow-[0_0_32px_-20px_rgba(185,28,28,0.2)] ring-1 ring-white/5 backdrop-blur-sm",
        "opacity-0 animate-[fadeSlideIn_0.5s_ease-out_forwards]",
        "transition-colors hover:border-brand-red/30",
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-red-light">
        {snapshot.tradeLabel}
      </p>
      <ul className="mt-2.5 space-y-1">
        {snapshot.insights.map((insight) => (
          <li key={insight} className="flex gap-2 text-sm leading-snug text-zinc-400">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" aria-hidden />
            <span>{insight}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

function IntelligenceIcon({
  id,
  className,
}: {
  id: IntelligenceCategoryId;
  className?: string;
}) {
  const base = cn("h-5 w-5 shrink-0 text-brand-red-light/90", className);

  switch (id) {
    case "code_compliance":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <path strokeLinecap="round" d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      );
    case "scope_gaps":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h6" />
          <path strokeLinecap="round" d="M18 10v8m-3-3h6" />
        </svg>
      );
    case "pricing_discrepancies":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10M7 12h6M7 17h4" />
          <path strokeLinecap="round" d="M15 15l3 3m0-3l-3 3" />
        </svg>
      );
    case "moisture_mitigation":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2 4-6 5-6 11a6 6 0 1012 0c0-6-4-7-6-11z" />
        </svg>
      );
    case "op_opportunities":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "interior_reconstruction":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V8l8-4 8 4v12" />
          <path strokeLinecap="round" d="M9 20v-5h6v5" />
        </svg>
      );
  }
}

function IntelligenceTile({
  label,
  subline,
  id,
  index,
}: {
  label: string;
  subline: string;
  id: IntelligenceCategoryId;
  index: number;
}) {
  return (
    <li
      className={cn(
        "group flex flex-col gap-2 rounded-lg border border-white/10 bg-brand-black/50 p-3.5",
        "transition-all duration-200 hover:border-brand-red/35 hover:bg-brand-elevated/60",
        "opacity-0 animate-[fadeSlideIn_0.45s_ease-out_forwards]",
      )}
      style={{ animationDelay: `${120 + index * 60}ms` }}
    >
      <IntelligenceIcon id={id} />
      <div>
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="mt-0.5 text-xs text-zinc-500">{subline}</p>
      </div>
    </li>
  );
}

export function ProofIntelligenceSection() {
  return (
    <Section bordered className="py-14 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Restoration claim intelligence"
        title="AI Claim Intelligence Across Restoration Losses"
        description="Identify overlooked scope, pricing, and documentation opportunities across water, fire, reconstruction, and commercial claims — without staffing an in-house department."
        align="left"
        className="max-w-2xl"
      />

      <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Claim intelligence snapshots
          </h3>
          <ul className="mt-4 space-y-3">
            {CLAIM_INTELLIGENCE_SNAPSHOTS.map((snapshot, index) => (
              <IntelligenceSnapshotCard
                key={snapshot.id}
                snapshot={snapshot}
                index={index}
              />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            What Claims Ninja identifies
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {INTELLIGENCE_CATEGORIES.map((item, index) => (
              <IntelligenceTile
                key={item.id}
                id={item.id}
                label={item.label}
                subline={item.subline}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
