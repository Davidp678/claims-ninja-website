import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { Container } from "@/components/ui/Container";
import type { Guide } from "@/lib/guide-data";
import {
  getGuideDetailUi,
  getGuideHubUi,
  getGuideTypeLabels,
  getLocalizedGuideCategory,
} from "@/lib/guide-display";
import { formatGuideDate } from "@/lib/guide-page";
import type { Locale } from "@/lib/i18n/config";
import { getResourcesContent } from "@/lib/i18n/content/resources";

import { GuideTypeBadge } from "./GuideTypeBadge";

type GuideDetailHeroProps = {
  guide: Guide;
  locale?: Locale;
};

export function GuideDetailHero({ guide, locale = "en" }: GuideDetailHeroProps) {
  const detailUi = getGuideDetailUi(locale);
  const hubUi = getGuideHubUi(locale);
  const typeLabels = getGuideTypeLabels(locale);
  const guidesContent = getResourcesContent(locale).guides;
  const category = getLocalizedGuideCategory(guide.category, locale);

  return (
    <section
      aria-labelledby="guide-detail-heading"
      className="relative overflow-hidden border-b border-white/10 bg-brand-black"
    >
      <HeroBackdrop />
      <Container className="relative z-10 max-w-3xl pb-12 pt-24 sm:pb-14 sm:pt-28 lg:pb-16 lg:pt-32">
        <div className="flex flex-wrap items-center gap-2">
          <GuideTypeBadge type={guide.guideType} labels={typeLabels} />
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
            {category.name}
          </span>
          <span className="text-xs text-zinc-600">·</span>
          <span className="text-xs text-zinc-500">
            {guidesContent.phaseLabels[guide.claimPhase]} {detailUi.phaseSuffix}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500">
          <span>
            {guide.estimatedMinutes} {hubUi.minutesExecution}
          </span>
          <span aria-hidden>·</span>
          <time dateTime={guide.updatedAt ?? guide.publishedAt}>
            {hubUi.updatedPrefix}{" "}
            {formatGuideDate(guide.updatedAt ?? guide.publishedAt, locale)}
          </time>
        </div>
        <h1
          id="guide-detail-heading"
          className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {guide.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-300">{guide.excerpt}</p>
        <p className="mt-6 text-sm text-zinc-500">{detailUi.operationsLabel}</p>
      </Container>
    </section>
  );
}
