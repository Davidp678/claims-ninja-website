type NextStepsListProps = {
  steps: string[];
};

export function NextStepsList({ steps }: NextStepsListProps) {
  if (steps.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="next-steps-heading">
      <h2
        id="next-steps-heading"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400"
      >
        Recommended next steps
      </h2>
      <p className="mt-2 text-sm text-zinc-500">
        Contractor-ready actions to move this claim toward maximum recovery.
      </p>
      <ol className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <li
            key={`${index}-${step.slice(0, 32)}`}
            className="flex gap-4 rounded-xl border border-white/10 bg-brand-elevated/40 p-5 ring-1 ring-white/5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red/20 font-display text-sm font-bold text-brand-red-light ring-1 ring-brand-red/40">
              {index + 1}
            </span>
            <p className="pt-1.5 text-sm leading-relaxed text-zinc-200 sm:text-base">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
