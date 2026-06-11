import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";
import { getGuideDetailUi } from "@/lib/guide-display";
import { localizePath } from "@/lib/i18n/paths";
import { cn } from "@/lib/cn";

type GuideBreadcrumbsProps = {
  categoryLabel?: string;
  categoryPath?: string;
  currentLabel?: string;
  locale?: Locale;
};

export function GuideBreadcrumbs({
  categoryLabel,
  categoryPath,
  currentLabel,
  locale = "en",
}: GuideBreadcrumbsProps) {
  const detailUi = getGuideDetailUi(locale);
  const guidesHubPath = localizePath(locale, "/resources/guides");
  const resolvedCategoryPath =
    locale === "es" ? guidesHubPath : (categoryPath ?? guidesHubPath);

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link
            href={guidesHubPath}
            className="transition-colors hover:text-brand-red-light"
          >
            {detailUi.breadcrumbsGuides}
          </Link>
        </li>
        {categoryLabel ? (
          <>
            <li aria-hidden className="text-zinc-600">
              /
            </li>
            <li>
              {currentLabel ? (
                <Link
                  href={resolvedCategoryPath}
                  className="transition-colors hover:text-brand-red-light"
                >
                  {categoryLabel}
                </Link>
              ) : (
                <span className={cn(currentLabel ? undefined : "text-zinc-300")}>
                  {categoryLabel}
                </span>
              )}
            </li>
          </>
        ) : null}
        {currentLabel ? (
          <>
            <li aria-hidden className="text-zinc-600">
              /
            </li>
            <li className="text-zinc-300">{currentLabel}</li>
          </>
        ) : null}
      </ol>
    </nav>
  );
}
