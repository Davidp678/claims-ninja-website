import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Container } from "@/components/ui/Container";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CONTENTS_RESTORATION_FEATURES,
  CONTENTS_RESTORATION_FEATURE_CARD_CLASS,
  CONTENTS_RESTORATION_HERO,
  CONTENTS_RESTORATION_HERO_IMAGE,
  CONTENTS_RESTORATION_MISSED_ITEMS,
  CONTENTS_RESTORATION_SEGMENTS,
  CONTENTS_RESTORATION_WORKFLOW,
} from "@/lib/contents-restoration-page";
import { SITE_FAQ } from "@/lib/site-faq-selections";

import { RoofingHeroImageCard } from "./RoofingHeroImageCard";

export function ContentsRestorationClaimsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 grid grid-cols-1 gap-8 pb-10 pt-24 sm:gap-10 sm:pb-12 sm:pt-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(620px,1.15fr)] lg:items-center lg:gap-x-16 lg:pb-14 lg:pt-24">
          <div className="max-w-2xl lg:col-start-1 lg:max-w-none">
            <SectionHeading
              eyebrow={CONTENTS_RESTORATION_HERO.eyebrow}
              title={CONTENTS_RESTORATION_HERO.title}
              description={CONTENTS_RESTORATION_HERO.description}
              align="left"
              className="max-w-none"
            />
            <ConversionCtaGroup
              className="mt-10 lg:mt-12"
              size="md"
              primaryLabel="Begin Claim Intake"
              secondaryLabel="Schedule Strategy Call"
            />
          </div>
          <div className="w-full lg:col-start-2 lg:mt-2">
            <RoofingHeroImageCard
              src={CONTENTS_RESTORATION_HERO_IMAGE.src}
              alt={CONTENTS_RESTORATION_HERO_IMAGE.alt}
            />
          </div>
        </Container>
      </section>

      <Section bordered>
        <SectionHeading
          eyebrow={CONTENTS_RESTORATION_SEGMENTS.eyebrow}
          title={CONTENTS_RESTORATION_SEGMENTS.title}
          description={CONTENTS_RESTORATION_SEGMENTS.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONTENTS_RESTORATION_SEGMENTS.items.map((segment) => (
            <li key={segment.title} className={CONTENTS_RESTORATION_FEATURE_CARD_CLASS}>
              <h3 className="font-display text-lg font-semibold text-white">
                {segment.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {segment.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={CONTENTS_RESTORATION_WORKFLOW.eyebrow}
          title={CONTENTS_RESTORATION_WORKFLOW.title}
          align="left"
          className="max-w-3xl"
        />
        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {CONTENTS_RESTORATION_WORKFLOW.steps.map((item) => (
            <li
              key={item.step}
              className={`group relative ${CONTENTS_RESTORATION_FEATURE_CARD_CLASS}`}
            >
              <span className="font-display text-4xl font-semibold text-brand-red/75 transition-colors group-hover:text-brand-red-light">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          eyebrow={CONTENTS_RESTORATION_FEATURES.eyebrow}
          title={CONTENTS_RESTORATION_FEATURES.title}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONTENTS_RESTORATION_FEATURES.items.map((feature) => (
            <li key={feature.title} className={CONTENTS_RESTORATION_FEATURE_CARD_CLASS}>
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

      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          title={CONTENTS_RESTORATION_MISSED_ITEMS.title}
          description={CONTENTS_RESTORATION_MISSED_ITEMS.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-10 grid gap-4 lg:grid-cols-2">
          {CONTENTS_RESTORATION_MISSED_ITEMS.items.map((item) => (
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

      <SiteFaqSection {...SITE_FAQ.contents} />
      <MarketingCtaPanel />
    </>
  );
}
