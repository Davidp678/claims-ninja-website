import Link from "next/link";

import { GUIDE_BASE_PATH } from "@/lib/guide-page";
import { cn } from "@/lib/cn";

type GuideBreadcrumbsProps = {
  categoryLabel?: string;
  categoryPath?: string;
  currentLabel?: string;
};

export function GuideBreadcrumbs({
  categoryLabel,
  categoryPath,
  currentLabel,
}: GuideBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link
            href={GUIDE_BASE_PATH}
            className="transition-colors hover:text-brand-red-light"
          >
            Guides
          </Link>
        </li>
        {categoryLabel && categoryPath ? (
          <>
            <li aria-hidden className="text-zinc-600">
              /
            </li>
            <li>
              {currentLabel ? (
                <Link
                  href={categoryPath}
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
