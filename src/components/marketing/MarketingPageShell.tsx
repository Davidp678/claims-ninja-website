import type { MarketingPageConfig } from "@/lib/marketing-pages";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { MarketingCtaPanel } from "./MarketingCtaPanel";

type MarketingPageShellProps = Pick<
  MarketingPageConfig,
  "eyebrow" | "title" | "description" | "features"
>;

export function MarketingPageShell({
  eyebrow,
  title,
  description,
  features,
}: MarketingPageShellProps) {
  return (
    <>
      <Section className="pt-28 sm:pt-32 lg:pt-36">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="left"
          className="max-w-3xl"
        />
      </Section>

      <Section bordered className="py-16 sm:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45"
            >
              <h3 className="font-display text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <MarketingCtaPanel />
    </>
  );
}
