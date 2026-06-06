import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { Container } from "@/components/ui/Container";
import type { GuideCategory } from "@/lib/guide-categories";

type GuideCategoryHeroProps = {
  category: GuideCategory;
  guideCount: number;
};

export function GuideCategoryHero({ category, guideCount }: GuideCategoryHeroProps) {
  return (
    <section
      aria-labelledby="guide-category-heading"
      className="relative overflow-hidden border-b border-white/10 bg-brand-black"
    >
      <HeroBackdrop />
      <Container className="relative z-10 max-w-3xl pb-12 pt-24 sm:pb-14 sm:pt-28 lg:pb-16 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
          Operational Resources
        </p>
        <h1
          id="guide-category-heading"
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {category.name} Guides
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-300">{category.description}</p>
        <p className="mt-6 text-sm text-zinc-500">{guideCount} operational guides</p>
      </Container>
    </section>
  );
}
