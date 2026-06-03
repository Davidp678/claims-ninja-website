import Link from "next/link";

import type { BlogPost } from "@/lib/blog-data";
import {
  BLOG_CARD_CLASS,
  formatBlogDate,
  getBlogPostPath,
  getCategoryTitle,
} from "@/lib/blog-page";
import { cn } from "@/lib/cn";

import { getBlogVisualClass } from "./blog-visual";

type BlogCardProps = {
  post: BlogPost;
  compact?: boolean;
};

export function BlogCard({ post, compact = false }: BlogCardProps) {
  const href = getBlogPostPath(post.slug);

  return (
    <Link href={href} className={cn("group flex h-full flex-col", BLOG_CARD_CLASS)}>
      <div
        className={cn(
          getBlogVisualClass(post.visualVariant),
          compact ? "mb-4 h-20 rounded-lg" : "mb-5 h-28 rounded-xl",
        )}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/90 to-transparent" />
      </div>
      <span className="inline-block w-fit rounded-full border border-white/10 bg-brand-elevated/80 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400">
        {getCategoryTitle(post.category)}
      </span>
      <h3
        className={cn(
          "mt-3 font-display font-semibold text-white transition-colors group-hover:text-brand-red-light",
          compact ? "text-base sm:text-lg" : "text-lg sm:text-xl",
        )}
      >
        {post.title}
      </h3>
      <p
        className={cn(
          "mt-2 flex-1 leading-relaxed text-zinc-400",
          compact ? "text-sm line-clamp-2" : "text-sm line-clamp-3",
        )}
      >
        {post.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-500">
        <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTimeMinutes} min read</span>
      </div>
      {post.tags.length > 0 && !compact ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-white/8 bg-brand-black/50 px-2 py-0.5 text-[11px] text-zinc-500"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </Link>
  );
}
