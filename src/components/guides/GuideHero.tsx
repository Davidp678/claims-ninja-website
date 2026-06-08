import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { Container } from "@/components/ui/Container";
import { getGuideCount } from "@/lib/guide-page";
import type { Locale } from "@/lib/i18n/config";
import { getResourcesContent } from "@/lib/i18n/content/resources";

export function GuideHero({ locale = "en" }: { locale?: Locale }) {
  const hero = getResourcesContent(locale).guides.hero;
  const guideCount = getGuideCount();

  return (
    <section
      aria-labelledby="guide-hero-heading"
      className="relative overflow-hidden bg-brand-black"
    >
      <HeroBackdrop />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <Container className="relative z-10 max-w-3xl pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
          {hero.eyebrow}
        </p>
        <h1
          id="guide-hero-heading"
          className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {hero.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          {hero.description}
        </p>
        <p className="mt-6 text-sm font-medium text-zinc-500">
          {getResourcesContent(locale).guides.hubUi.heroCountLine(guideCount)}
        </p>
      </Container>
    </section>
  );
}
