import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { Container } from "@/components/ui/Container";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ROOFING_FEATURES,
  ROOFING_FEATURE_CARD_CLASS,
  ROOFING_HERO,
  ROOFING_HERO_IMAGE,
  ROOFING_MISSED_ITEMS,
  ROOFING_SEGMENTS,
  ROOFING_WORKFLOW,
} from "@/lib/roofing-page";

import { RoofingHeroImageCard } from "./RoofingHeroImageCard";

export function RoofingClaimsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 grid grid-cols-1 gap-8 pb-10 pt-24 sm:gap-10 sm:pb-12 sm:pt-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(620px,1.15fr)] lg:items-center lg:gap-x-16 lg:pb-14 lg:pt-24">
          <div className="max-w-2xl lg:col-start-1 lg:max-w-none">
            <SectionHeading
              eyebrow={ROOFING_HERO.eyebrow}
              title={ROOFING_HERO.title}
              description={ROOFING_HERO.description}
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
              src={ROOFING_HERO_IMAGE.src}
              alt={ROOFING_HERO_IMAGE.alt}
            />
          </div>
        </Container>
      </section>

      <Section bordered>
        <SectionHeading
          eyebrow={ROOFING_SEGMENTS.eyebrow}
          title={ROOFING_SEGMENTS.title}
          description={ROOFING_SEGMENTS.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROOFING_SEGMENTS.items.map((segment) => (
            <li key={segment.title} className={ROOFING_FEATURE_CARD_CLASS}>
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
          eyebrow={ROOFING_WORKFLOW.eyebrow}
          title={ROOFING_WORKFLOW.title}
          align="left"
          className="max-w-3xl"
        />
        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {ROOFING_WORKFLOW.steps.map((item) => (
            <li key={item.step} className={`group relative ${ROOFING_FEATURE_CARD_CLASS}`}>
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
          eyebrow={ROOFING_FEATURES.eyebrow}
          title={ROOFING_FEATURES.title}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROOFING_FEATURES.items.map((feature) => (
            <li key={feature.title} className={ROOFING_FEATURE_CARD_CLASS}>
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
          title={ROOFING_MISSED_ITEMS.title}
          description={ROOFING_MISSED_ITEMS.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-10 grid gap-4 lg:grid-cols-2">
          {ROOFING_MISSED_ITEMS.items.map((item) => (
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

      <MarketingCtaPanel />
    </>
  );
}
