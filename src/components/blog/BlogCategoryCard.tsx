import Link from "next/link";

import type { BlogCategory } from "@/lib/blog-categories";
import { getCategoryPath, getCategoryPostCount } from "@/lib/blog-categories";
import { BLOG_CARD_CLASS } from "@/lib/blog-page";
import { cn } from "@/lib/cn";

type BlogCategoryCardProps = {
  category: BlogCategory;
};

export function BlogCategoryCard({ category }: BlogCategoryCardProps) {
  const postCount = getCategoryPostCount(category.slug);
  const countLabel =
    postCount === 1 ? "1 article" : postCount === 0 ? "Coming soon" : `${postCount} articles`;

  return (
    <Link
      href={getCategoryPath(category.slug)}
      className={cn("group flex h-full flex-col", BLOG_CARD_CLASS)}
    >
      <span className="inline-block w-fit rounded-full border border-white/10 bg-brand-elevated/80 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400">
        Topic hub
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-red-light sm:text-xl">
        {category.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
        {category.description}
      </p>
      <span className="mt-5 flex items-center justify-between gap-3 text-sm">
        <span className="text-zinc-500">{countLabel}</span>
        <span className="font-medium text-brand-red-light transition-transform group-hover:translate-x-0.5">
          Explore →
        </span>
      </span>
    </Link>
  );
}
