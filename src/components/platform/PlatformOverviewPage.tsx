import Link from "next/link";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { HeroVideoCard } from "@/components/sections/HeroVideoCard";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  PLATFORM_AI,
  PLATFORM_HERO,
  PLATFORM_PILLARS,
  PLATFORM_VISION,
} from "@/lib/platform-overview";
import { PLATFORM_HERO_VIDEO_URL } from "@/lib/constants";

import { PlatformModulesSection } from "./PlatformModulesSection";

export function PlatformOverviewPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        <HeroBackdrop />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <SectionHeading
            eyebrow={PLATFORM_HERO.eyebrow}
            title={PLATFORM_HERO.title}
            description={PLATFORM_HERO.description}
            align="left"
            className="max-w-3xl"
          />
          <HeroVideoCard
            src={PLATFORM_HERO_VIDEO_URL}
            className="mx-auto mt-8 w-full max-w-[1000px] lg:mt-10"
          />
          <ConversionCtaGroup
            className="mt-8 lg:mt-10"
            size="md"
            primaryLabel="Start Claim Review"
            secondaryLabel="Schedule Strategy Call"
          />
        </div>
      </section>

      <Section bordered>
        <SectionHeading
          eyebrow="How it works"
          title="Human expertise plus platform power"
          description="Claims Ninja is not a tool waiting for adoption—it is the operational backbone contractors use today, backed by people who know carrier negotiation and supplement strategy."
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_PILLARS.map((pillar) => (
            <li
              key={pillar.title}
              className="rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45"
            >
              <h3 className="font-display text-xl font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <PlatformModulesSection />

      <Section bordered className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={PLATFORM_AI.eyebrow}
          title={PLATFORM_AI.title}
          description={PLATFORM_AI.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {PLATFORM_AI.capabilities.map((capability) => (
            <li
              key={capability.title}
              className="rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25"
            >
              <h3 className="font-display text-lg font-semibold text-white">
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
            Explore AI Claim Analysis →
          </Link>
        </p>
      </Section>

      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          eyebrow={PLATFORM_VISION.eyebrow}
          title={PLATFORM_VISION.title}
          description={PLATFORM_VISION.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-10 space-y-4">
          {PLATFORM_VISION.items.map((item) => (
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
