import type { Locale } from "@/lib/i18n/config";
import { getHomeContent } from "@/lib/i18n/content/home";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { ProofIntelligenceOperationsPanel } from "./proof-intelligence/ProofIntelligenceOperationsPanel";

export function ProofIntelligenceSection({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const content = getHomeContent(locale).proof;

  return (
    <Section bordered className="py-14 sm:py-16 lg:py-20" containerClassName="max-w-[90rem]">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        align="left"
        className="max-w-2xl"
      />

      <ConversionCtaGroup
        className="mt-8 lg:mt-10"
        size="md"
        primaryLabel={content.primaryCta}
        secondaryLabel={content.secondaryCta}
      />

      <ProofIntelligenceOperationsPanel
        performanceHeading={content.performanceHeading}
        networkHeading={content.networkHeading}
        metrics={content.metrics}
        modules={content.modules}
      />
    </Section>
  );
}
