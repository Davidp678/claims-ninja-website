import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { Container } from "@/components/ui/Container";
import type { BlogCategory } from "@/lib/blog-categories";

type BlogCategoryHeroProps = {
  category: BlogCategory;
  articleCount: number;
};

export function BlogCategoryHero({ category, articleCount }: BlogCategoryHeroProps) {
  const countLabel =
    articleCount === 1 ? "1 article" : `${articleCount} articles`;

  return (
    <section
      aria-labelledby="blog-category-hero-heading"
      className="relative overflow-hidden bg-brand-black"
    >
      <HeroBackdrop />
      <Container className="relative z-10 max-w-3xl pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
          Resources · Topic hub
        </p>
        <h1
          id="blog-category-hero-heading"
          className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {category.name}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          {category.description}
        </p>
        <p className="mt-5 text-sm font-medium text-zinc-500">{countLabel}</p>
      </Container>
    </section>
  );
}
