import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTA_LINKS } from "@/lib/constants";
import { START_HERE_HERO } from "@/lib/start-here/content";

import { WelcomeVideoPlaceholder } from "./WelcomeVideoPlaceholder";

export function StartHereHero() {
  return (
    <section className="relative overflow-hidden bg-brand-black">
      <HeroBackdrop />
      <Container className="relative z-10 grid grid-cols-1 gap-10 pb-14 pt-[4.5rem] sm:gap-12 sm:pb-16 sm:pt-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-x-14 lg:pb-20 lg:pt-24">
        <div className="min-w-0 max-w-2xl lg:max-w-none">
          <span className="inline-flex items-center rounded-full border border-brand-red/40 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
            {START_HERE_HERO.badge}
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {START_HERE_HERO.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {START_HERE_HERO.subheadline}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-brand-surface/80 px-4 py-1.5 text-sm text-zinc-300">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-4 w-4 text-brand-red-light"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Estimated time: {START_HERE_HERO.timeEstimate}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-red/40 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red-light">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 5 6 9H2v6h4l5 4V5z" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              {START_HERE_HERO.audioBadge}
            </span>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={CTA_LINKS.onboardingForm} size="lg" external className="whitespace-nowrap">
              {START_HERE_HERO.primaryCta}
            </Button>
            <Button
              href={CTA_LINKS.schedule}
              variant="secondary"
              size="lg"
              external
              className="whitespace-nowrap"
            >
              {START_HERE_HERO.secondaryCta}
            </Button>
          </div>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-500">
            {START_HERE_HERO.ctaHelper}
          </p>
        </div>
        <div className="w-full lg:justify-self-end">
          <WelcomeVideoPlaceholder className="mx-auto lg:ml-auto lg:mr-0" />
        </div>
      </Container>
    </section>
  );
}
