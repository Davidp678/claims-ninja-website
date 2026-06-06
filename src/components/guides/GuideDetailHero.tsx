import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { Container } from "@/components/ui/Container";
import type { Guide } from "@/lib/guide-data";
import {
  CLAIM_PHASE_LABELS,
  formatGuideDate,
  getGuideCategoryName,
} from "@/lib/guide-page";

import { GuideTypeBadge } from "./GuideTypeBadge";

type GuideDetailHeroProps = {
  guide: Guide;
};

export function GuideDetailHero({ guide }: GuideDetailHeroProps) {
  return (
    <section
      aria-labelledby="guide-detail-heading"
      className="relative overflow-hidden border-b border-white/10 bg-brand-black"
    >
      <HeroBackdrop />
      <Container className="relative z-10 max-w-3xl pb-12 pt-24 sm:pb-14 sm:pt-28 lg:pb-16 lg:pt-32">
        <div className="flex flex-wrap items-center gap-2">
          <GuideTypeBadge type={guide.guideType} />
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
            {getGuideCategoryName(guide.category)}
          </span>
          <span className="text-xs text-zinc-600">·</span>
          <span className="text-xs text-zinc-500">{CLAIM_PHASE_LABELS[guide.claimPhase]} phase</span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500">
          <span>{guide.estimatedMinutes} min execution</span>
          <span aria-hidden>·</span>
          <time dateTime={guide.updatedAt ?? guide.publishedAt}>
            Updated {formatGuideDate(guide.updatedAt ?? guide.publishedAt)}
          </time>
        </div>
        <h1
          id="guide-detail-heading"
          className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {guide.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-300">{guide.excerpt}</p>
        <p className="mt-6 text-sm text-zinc-500">Claims Ninja Operations</p>
      </Container>
    </section>
  );
}
