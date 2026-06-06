import Link from "next/link";

import type { Guide } from "@/lib/guide-data";
import {
  GUIDE_CARD_CLASS,
  formatGuideDate,
  getGuideCategoryName,
  getGuidePathForGuide,
} from "@/lib/guide-page";
import { cn } from "@/lib/cn";

import { GuideTypeBadge } from "./GuideTypeBadge";

type GuideCardProps = {
  guide: Guide;
  compact?: boolean;
  showCategory?: boolean;
};

export function GuideCard({ guide, compact = false, showCategory = false }: GuideCardProps) {
  const href = getGuidePathForGuide(guide);

  return (
    <Link href={href} className={cn("group flex h-full flex-col", GUIDE_CARD_CLASS)}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <GuideTypeBadge type={guide.guideType} />
        {showCategory ? (
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500">
            {getGuideCategoryName(guide.category)}
          </span>
        ) : null}
      </div>
      <h3
        className={cn(
          "font-display font-semibold text-white transition-colors group-hover:text-brand-red-light",
          compact ? "text-base sm:text-lg" : "text-lg sm:text-xl",
        )}
      >
        {guide.title}
      </h3>
      <p
        className={cn(
          "mt-2 flex-1 leading-relaxed text-zinc-400",
          compact ? "text-sm line-clamp-2" : "text-sm line-clamp-3",
        )}
      >
        {guide.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-500">
        <span>{guide.estimatedMinutes} min</span>
        <span aria-hidden>·</span>
        <time dateTime={guide.updatedAt ?? guide.publishedAt}>
          Updated {formatGuideDate(guide.updatedAt ?? guide.publishedAt)}
        </time>
      </div>
      <p className="mt-4 text-sm font-medium text-brand-red-light transition-colors group-hover:text-white">
        Open guide →
      </p>
    </Link>
  );
}
