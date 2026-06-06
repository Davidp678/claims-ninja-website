import type { GuideSupplementOpportunity } from "@/lib/guide-types";

type GuideSupplementCalloutProps = {
  opportunities: readonly GuideSupplementOpportunity[];
};

export function GuideSupplementCallout({ opportunities }: GuideSupplementCalloutProps) {
  if (opportunities.length === 0) return null;

  return (
    <div className="rounded-2xl border border-brand-red/25 bg-gradient-to-br from-brand-red/10 via-brand-surface/50 to-brand-black p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
        Supplement opportunities
      </p>
      <ul className="mt-4 space-y-4">
        {opportunities.map((item) => (
          <li key={item.trigger} className="border-t border-white/8 pt-4 first:border-0 first:pt-0">
            <p className="font-medium text-white">{item.trigger}</p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.documentation}</p>
            {item.lineItemHint ? (
              <p className="mt-2 text-xs text-zinc-500">Line item hint: {item.lineItemHint}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
