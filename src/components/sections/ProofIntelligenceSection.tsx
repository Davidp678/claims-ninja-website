import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  OPERATIONAL_METRICS,
  PLATFORM_CAPABILITIES,
  type OperationalMetric,
  type PlatformCapabilityId,
} from "@/lib/homepage-proof-intelligence";
import { cn } from "@/lib/cn";

function PerformanceMetricCard({
  metric,
  index,
}: {
  metric: OperationalMetric;
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
      <p className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {metric.value}
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-red-light">
        {metric.label}
      </p>
      <p className="mt-1.5 text-sm leading-snug text-zinc-400">{metric.detail}</p>
    </li>
  );
}

function PlatformCapabilityIcon({
  id,
  className,
}: {
  id: PlatformCapabilityId;
  className?: string;
}) {
  const base = cn("h-5 w-5 shrink-0 text-brand-red-light/90", className);

  switch (id) {
    case "ai_intelligence":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L8 21l-1.5-4M14.25 17L16 21l1.5-4M12 3v2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11a4 4 0 118 0 4 4 0 01-8 0z" />
          <path strokeLinecap="round" d="M4 19h16" />
        </svg>
      );
    case "supplement_team":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "pa_support":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v6c0 3.5-2.5 6.5-7 8-4.5-1.5-7-4.5-7-8V7l7-4z" />
          <path strokeLinecap="round" d="M9 12l2 2 4-4" />
        </svg>
      );
    case "client_portal":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path strokeLinecap="round" d="M3 9h18M8 4v5M16 4v5" />
        </svg>
      );
    case "claim_coordination":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h6" />
          <path strokeLinecap="round" d="M15 15l4 4m0-4l-4 4" />
        </svg>
      );
    case "centralized_visibility":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}

function PlatformCapabilityTile({
  label,
  subline,
  id,
  index,
}: {
  label: string;
  subline: string;
  id: PlatformCapabilityId;
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
      <PlatformCapabilityIcon id={id} />
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
        eyebrow="High-speed claims operations"
        title="AI-Assisted Claims Operations For Restoration Contractors"
        description="Claims Ninja combines AI-assisted review, experienced supplement professionals, public adjuster support, and a centralized contractor platform to accelerate estimate delivery and supplement resolution — without an in-house estimator."
        align="left"
        className="max-w-2xl"
      />

      <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Operational performance
          </h3>
          <ul className="mt-4 space-y-3">
            {OPERATIONAL_METRICS.map((metric, index) => (
              <PerformanceMetricCard key={metric.id} metric={metric} index={index} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            How Claims Ninja works
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {PLATFORM_CAPABILITIES.map((item, index) => (
              <PlatformCapabilityTile
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
