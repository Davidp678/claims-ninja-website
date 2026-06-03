import Link from "next/link";

import { cn } from "@/lib/cn";
import type { BlogPost } from "@/lib/blog-data";
import {
  BLOG_FEATURED_SECTION,
  formatBlogDate,
  getBlogPostPath,
  getCategoryTitle,
} from "@/lib/blog-page";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { getBlogVisualClass } from "./blog-visual";

type BlogFeaturedArticleProps = {
  post: BlogPost;
};

export function BlogFeaturedArticle({ post }: BlogFeaturedArticleProps) {
  const href = getBlogPostPath(post.slug);

  return (
    <Section bordered compact>
      <SectionHeading
        eyebrow={BLOG_FEATURED_SECTION.eyebrow}
        title={BLOG_FEATURED_SECTION.title}
        description={BLOG_FEATURED_SECTION.description}
        align="left"
      />
      <Link
        href={href}
        className="group mt-10 grid overflow-hidden rounded-2xl border border-white/15 bg-brand-surface shadow-[0_0_48px_-28px_rgba(220,38,38,0.25)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
      >
        <div
          className={cn(
            getBlogVisualClass(post.visualVariant),
            "min-h-[200px] lg:min-h-[280px]",
          )}
          aria-hidden
        />
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <span className="inline-block w-fit rounded-full border border-brand-red/30 bg-brand-red/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-brand-red-light">
            Featured · {getCategoryTitle(post.category)}
          </span>
          <h3 className="mt-4 font-display text-2xl font-semibold text-white transition-colors group-hover:text-brand-red-light sm:text-3xl">
            {post.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-zinc-300">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 text-sm text-zinc-500">
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-red-light">
            Read article
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </div>
      </Link>
    </Section>
  );
}
