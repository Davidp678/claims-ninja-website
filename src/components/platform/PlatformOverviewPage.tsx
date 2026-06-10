import Link from "next/link";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { HeroVideoCard } from "@/components/sections/HeroVideoCard";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Container } from "@/components/ui/Container";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/lib/i18n/config";
import { getPlatformContent } from "@/lib/i18n/content/platform";
import { SITE_FAQ } from "@/lib/site-faq-selections";
import { PLATFORM_HERO_VIDEO } from "@/lib/constants";

import { PlatformModulesSection } from "./PlatformModulesSection";

export function PlatformOverviewPage({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const content = getPlatformContent(locale);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 grid grid-cols-1 gap-8 pb-10 pt-24 sm:gap-10 sm:pb-12 sm:pt-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(620px,1.15fr)] lg:items-center lg:gap-x-16 lg:pb-14 lg:pt-24">
          <div className="max-w-2xl lg:col-start-1 lg:max-w-none">
            <SectionHeading
              as="h1"
              eyebrow={content.hero.eyebrow}
              title={content.hero.title}
              description={content.hero.description}
              align="left"
              className="max-w-none"
            />
            <ConversionCtaGroup
              className="mt-10 lg:mt-12"
              size="md"
              primaryLabel={content.hero.primaryCta}
              secondaryLabel={content.hero.secondaryCta}
            />
          </div>
          <div className="w-full lg:col-start-2 lg:mt-2">
            <HeroVideoCard
              embedSrc={PLATFORM_HERO_VIDEO.embedUrl}
              title="Platform overview demo"
              embedFit={PLATFORM_HERO_VIDEO.embedFit}
              sourceAspect={PLATFORM_HERO_VIDEO.sourceAspect}
            />
          </div>
        </Container>
      </section>

      <Section bordered>
        <SectionHeading
          eyebrow={content.howItWorks.eyebrow}
          title={content.howItWorks.title}
          description={content.howItWorks.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.howItWorks.pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="group rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45"
            >
              <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-brand-red-light">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <PlatformModulesSection locale={locale} />

      <Section bordered className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={content.ai.eyebrow}
          title={content.ai.title}
          description={content.ai.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {content.ai.capabilities.map((capability) => (
            <li
              key={capability.title}
              className="group rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25"
            >
              <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-red-light">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {capability.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <Link
            href="/platform/ai-claim-analysis"
            className="text-sm font-medium text-brand-red-light transition-colors hover:text-white"
          >
            {content.ai.exploreLink}
          </Link>
        </p>
      </Section>

      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          eyebrow={content.vision.eyebrow}
          title={content.vision.title}
          description={content.vision.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-10 space-y-4">
          {content.vision.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-white/12 bg-brand-surface/60 px-5 py-4 text-sm leading-relaxed text-zinc-300"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red-light"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <SiteFaqSection {...SITE_FAQ.platform} locale={locale} />
      <MarketingCtaPanel locale={locale} />
    </>
  );
}
