import Link from "next/link";

import { BLOG_BASE_PATH } from "@/lib/blog-page";

export function BlogCategoryEmptyState() {
  return (
    <div className="mt-10 rounded-2xl border border-white/15 bg-brand-surface p-8 text-center shadow-lg shadow-black/25 sm:p-10">
      <p className="font-display text-xl font-semibold text-white sm:text-2xl">
        New content is being added to this topic
      </p>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
        We are building out articles for this category. Explore the full blog for the latest
        guides on supplements, documentation, and contractor claim recovery.
      </p>
      <Link
        href={BLOG_BASE_PATH}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-red-light transition-colors hover:text-white"
      >
        Back to Blog
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
        </svg>
      </Link>
    </div>
  );
}
