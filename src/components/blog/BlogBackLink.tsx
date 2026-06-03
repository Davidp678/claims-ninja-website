import Link from "next/link";

import { BLOG_BASE_PATH } from "@/lib/blog-page";

export function BlogBackLink() {
  return (
    <Link
      href={BLOG_BASE_PATH}
      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-brand-red-light"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
      </svg>
      Back to Blog
    </Link>
  );
}
