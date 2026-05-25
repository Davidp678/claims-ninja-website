import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  INTELLIGENCE_CATEGORIES,
  RECOVERED_REVENUE_PROOFS,
  type IntelligenceCategoryId,
  type RecoveredRevenueProof,
} from "@/lib/homepage-proof-intelligence";
import { cn } from "@/lib/cn";

function RecoveredRevenueCard({
  proof,
  index,
}: {
  proof: RecoveredRevenueProof;
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
      <p className="font-display text-lg font-semibold tracking-tight text-brand-red-light sm:text-xl">
        {proof.amount}
      </p>
      <p className="mt-1 text-sm leading-snug text-zinc-400">{proof.detail}</p>
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
    case "code_gaps":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <path strokeLinecap="round" d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      );
    case "op":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "pricing_errors":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10M7 12h6M7 17h4" />
          <path strokeLinecap="round" d="M15 15l3 3m0-3l-3 3" />
        </svg>
      );
    case "missing_scope":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h6" />
          <path strokeLinecap="round" d="M18 10v8m-3-3h6" />
        </svg>
      );
    case "roofing_components":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-8 9 8v8H3v-8z" />
          <path strokeLinecap="round" d="M9 20v-6h6v6" />
        </svg>
      );
    case "labor_discrepancies":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <path strokeLinecap="round" d="M19 11v4m-2-2h4" />
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
        eyebrow="Supplement intelligence"
        title="Supplement Intelligence Built For Contractors"
        description="Identify overlooked revenue opportunities in scope, pricing, and code — without staffing an in-house claims department."
        align="left"
        className="max-w-2xl"
      />

      <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Recovered revenue
          </h3>
          <ul className="mt-4 space-y-3">
            {RECOVERED_REVENUE_PROOFS.map((proof, index) => (
              <RecoveredRevenueCard key={proof.amount} proof={proof} index={index} />
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
