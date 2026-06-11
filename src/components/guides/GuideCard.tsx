import Link from "next/link";

import type { Guide } from "@/lib/guide-data";
import {
  getLocalizedGuideCategory,
  getLocalizedGuideSummary,
  getGuideHubUi,
  getGuideTypeLabels,
} from "@/lib/guide-display";
import { getLocalizedGuidePath } from "@/lib/guide-localization";
import {
  GUIDE_CARD_CLASS,
  formatGuideDate,
} from "@/lib/guide-page";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/cn";

import { GuideTypeBadge } from "./GuideTypeBadge";

type GuideCardProps = {
  guide: Guide;
  compact?: boolean;
  showCategory?: boolean;
  locale?: Locale;
};

export function GuideCard({
  guide,
  compact = false,
  showCategory = false,
  locale = "en",
}: GuideCardProps) {
  const href = getLocalizedGuidePath(guide, locale);
  const summary = getLocalizedGuideSummary(guide, locale);
  const hubUi = getGuideHubUi(locale);
  const typeLabels = getGuideTypeLabels(locale);
  const category = getLocalizedGuideCategory(guide.category, locale);

  return (
    <Link href={href} className={cn("group flex h-full flex-col", GUIDE_CARD_CLASS)}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <GuideTypeBadge type={guide.guideType} labels={typeLabels} />
        {showCategory ? (
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500">
            {category.name}
          </span>
        ) : null}
      </div>
      <h3
        className={cn(
          "font-display font-semibold text-white transition-colors group-hover:text-brand-red-light",
          compact ? "text-base sm:text-lg" : "text-lg sm:text-xl",
        )}
      >
        {summary.title}
      </h3>
      <p
        className={cn(
          "mt-2 flex-1 leading-relaxed text-zinc-400",
          compact ? "text-sm line-clamp-2" : "text-sm line-clamp-3",
        )}
      >
        {summary.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-500">
        <span>
          {guide.estimatedMinutes} {hubUi.minutesShort}
        </span>
        <span aria-hidden>·</span>
        <time dateTime={guide.updatedAt ?? guide.publishedAt}>
          {hubUi.updatedPrefix}{" "}
          {formatGuideDate(guide.updatedAt ?? guide.publishedAt, locale)}
        </time>
      </div>
      <p className="mt-4 text-sm font-medium text-brand-red-light transition-colors group-hover:text-white">
        {hubUi.openGuide}
      </p>
    </Link>
  );
}
