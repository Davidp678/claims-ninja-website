type ExecutiveSummaryPanelProps = {
  summary: string;
};

export function ExecutiveSummaryPanel({ summary }: ExecutiveSummaryPanelProps) {
  return (
    <section aria-labelledby="executive-summary-heading">
      <h2
        id="executive-summary-heading"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300"
      >
        Executive summary
      </h2>
      <div className="mt-5 rounded-2xl border border-white/12 bg-brand-elevated/60 p-6 ring-1 ring-white/5 sm:p-8">
        <p className="text-base leading-relaxed text-zinc-200 sm:text-lg sm:leading-8">
          {summary}
        </p>
        <p className="mt-6 border-t border-white/8 pt-5 text-sm text-zinc-400">
          This assessment synthesizes scope, pricing, and documentation signals from your uploaded
          claim materials. Use it to prioritize supplement and negotiation actions with your team.
        </p>
      </div>
    </section>
  );
}
