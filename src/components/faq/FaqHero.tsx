import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/lib/i18n/config";
import { getFaqPageContent } from "@/lib/i18n/content/faq";

import { FaqHeroVisual } from "./FaqHeroVisual";

export function FaqHero({ locale = "en" }: { locale?: Locale }) {
  const hero = getFaqPageContent(locale).hero;

  return (
    <section
      aria-labelledby="faq-hero-heading"
      className="relative overflow-hidden bg-brand-black"
    >
      <HeroBackdrop />
      <Container className="relative z-10 grid grid-cols-1 gap-10 pb-14 pt-28 sm:gap-12 sm:pb-16 sm:pt-32 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:items-center lg:gap-x-16 lg:pb-20 lg:pt-36">
        <div className="max-w-2xl lg:max-w-none">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
            {hero.eyebrow}
          </p>
          <h1
            id="faq-hero-heading"
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {hero.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
            {hero.description}
          </p>
        </div>
        <FaqHeroVisual />
      </Container>
    </section>
  );
}
