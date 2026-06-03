import Link from "next/link";

import { BLOG_BASE_PATH } from "@/lib/blog-page";

type BlogBreadcrumbsProps = {
  currentLabel: string;
};

export function BlogBreadcrumbs({ currentLabel }: BlogBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href={BLOG_BASE_PATH}
            className="font-medium transition-colors hover:text-brand-red-light"
          >
            Blog
          </Link>
        </li>
        <li aria-hidden className="text-zinc-600">
          /
        </li>
        <li className="font-medium text-zinc-300" aria-current="page">
          {currentLabel}
        </li>
      </ol>
    </nav>
  );
}
