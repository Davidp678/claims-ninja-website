type ReportDisclaimersProps = {
  disclaimers: string[];
};

export function ReportDisclaimers({ disclaimers }: ReportDisclaimersProps) {
  if (disclaimers.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="disclaimers-heading"
      className="rounded-2xl border border-white/8 bg-brand-black/40 px-6 py-8 sm:px-8"
    >
      <h2
        id="disclaimers-heading"
        className="font-display text-lg font-semibold text-zinc-200"
      >
        AI-assisted professional review
      </h2>
      <p className="mt-2 text-sm text-zinc-300">
        This report supports your decision-making. It does not replace licensed adjuster judgment,
        engineering, or carrier negotiations.
      </p>
      <ul className="mt-5 space-y-3">
        {disclaimers.map((disclaimer) => (
          <li key={disclaimer} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" aria-hidden />
            {disclaimer}
          </li>
        ))}
      </ul>
    </section>
  );
}
