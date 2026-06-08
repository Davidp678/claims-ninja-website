import type { Locale } from "@/lib/i18n/config";
import { getCommonContent } from "@/lib/i18n/content/common";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";

type MarketingCtaPanelProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  locale?: Locale;
};

export function MarketingCtaPanel({
  eyebrow,
  title,
  description,
  locale = "en",
}: MarketingCtaPanelProps) {
  const common = getCommonContent(locale).marketingCta;
  const resolvedEyebrow = eyebrow ?? common.eyebrow;
  const resolvedTitle = title ?? common.title;
  const resolvedDescription = description ?? common.description;

  return (
    <Section bordered className="pb-20 sm:pb-24">
      <div className="relative overflow-hidden rounded-2xl border border-brand-red/40 bg-gradient-to-br from-brand-red/20 via-brand-surface to-brand-black p-8 shadow-[0_0_48px_-18px_rgba(220,38,38,0.45)] sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-red/30 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
            {resolvedEyebrow}
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {resolvedTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-300">
            {resolvedDescription}
          </p>
          <ConversionCtaGroup
            className="mt-6"
            primaryLabel={common.primaryCta}
            secondaryLabel={common.secondaryCta}
            size="md"
          />
        </div>
      </div>
    </Section>
  );
}
