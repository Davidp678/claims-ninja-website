import type { GuideStep } from "@/lib/guide-types";
import type { Locale } from "@/lib/i18n/config";
import { getResourcesContent } from "@/lib/i18n/content/resources";

type GuideStepBlockProps = {
  steps: readonly GuideStep[];
  locale?: Locale;
};

export function GuideStepBlock({ steps, locale = "en" }: GuideStepBlockProps) {
  const roleLabels = getResourcesContent(locale).guides.roleLabels;

  return (
    <ol className="space-y-8">
      {steps.map((step, index) => (
        <li key={step.id} className="relative pl-0">
          <div className="flex flex-wrap items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-red/40 bg-brand-red/10 text-sm font-semibold text-brand-red-light">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                {step.owner ? (
                  <span className="rounded-full border border-white/10 bg-brand-black/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                    {roleLabels[step.owner]}
                  </span>
                ) : null}
              </div>
              <ul className="mt-3 space-y-2">
                {step.actions.map((action) => (
                  <li key={action} className="flex gap-2 text-sm leading-relaxed text-zinc-300">
                    <span className="text-brand-red-light" aria-hidden>
                      →
                    </span>
                    {action}
                  </li>
                ))}
              </ul>
              {step.notes ? (
                <p className="mt-3 rounded-lg border border-white/8 bg-brand-black/40 p-3 text-sm text-zinc-400">
                  {step.notes}
                </p>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
