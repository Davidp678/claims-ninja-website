import Link from "next/link";

import type { BlogPost } from "@/lib/blog-data";
import { BLOG_ANCHOR_SCROLL_CLASS } from "@/lib/blog-page";
import {
  getPracticeGuideIntro,
  getPracticeGuidesForBlog,
} from "@/lib/blog-guide-companions";
import { getGuidePathForGuide } from "@/lib/guide-page";
import { cn } from "@/lib/cn";

import { GuideTypeBadge } from "@/components/guides/GuideTypeBadge";

type BlogPutIntoPracticeProps = {
  post: BlogPost;
};

export function BlogPutIntoPractice({ post }: BlogPutIntoPracticeProps) {
  const guides = getPracticeGuidesForBlog(post.slug);

  if (guides.length === 0) {
    return null;
  }

  const intro =
    getPracticeGuideIntro(post.slug) ??
    "You've learned the strategy. Now follow our step-by-step operational guides:";

  return (
    <section
      id="put-this-into-practice"
      aria-labelledby="put-this-into-practice-heading"
      className={cn(BLOG_ANCHOR_SCROLL_CLASS, "my-12 scroll-mt-28")}
    >
      <div className="rounded-2xl border border-white/15 bg-brand-surface/60 p-6 sm:p-8">
        <h2
          id="put-this-into-practice-heading"
          className="font-display text-2xl font-semibold text-white sm:text-3xl"
        >
          Put This Into Practice
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">{intro}</p>
        <ul className="mt-6 space-y-4">
          {guides.map((guide) => (
            <li key={`${guide.category}-${guide.slug}`}>
              <Link
                href={getGuidePathForGuide(guide)}
                className="group flex flex-col gap-2 rounded-xl border border-white/10 bg-brand-black/30 p-4 transition-colors hover:border-brand-red/35 hover:bg-brand-black/50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <GuideTypeBadge type={guide.guideType} />
                  <p className="mt-2 font-display text-base font-semibold text-white transition-colors group-hover:text-brand-red-light sm:text-lg">
                    {guide.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {guide.estimatedMinutes} min execution
                  </p>
                </div>
                <span className="shrink-0 text-sm font-medium text-brand-red-light transition-colors group-hover:text-white">
                  Open guide →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
