import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { Container } from "@/components/ui/Container";
import { BLOG_HERO } from "@/lib/blog-page";

export function BlogHero() {
  return (
    <section
      aria-labelledby="blog-hero-heading"
      className="relative overflow-hidden bg-brand-black"
    >
      <HeroBackdrop />
      <Container className="relative z-10 max-w-3xl pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
          {BLOG_HERO.eyebrow}
        </p>
        <h1
          id="blog-hero-heading"
          className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {BLOG_HERO.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          {BLOG_HERO.description}
        </p>
      </Container>
    </section>
  );
}
