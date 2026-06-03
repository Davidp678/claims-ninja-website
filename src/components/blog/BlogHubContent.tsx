"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { BlogCategorySlug } from "@/lib/blog-categories";
import { getCategoryName, getCategoryPath } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";
import {
  BLOG_CATEGORY_SECTION,
  BLOG_LATEST_SECTION,
  BLOG_RECOMMENDED_SECTION,
  getAllBlogPosts,
} from "@/lib/blog-page";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { BlogArticleGrid } from "./BlogArticleGrid";
import { BlogCategoryRail } from "./BlogCategoryRail";

type BlogHubContentProps = {
  latestPosts: readonly BlogPost[];
  recommendedPosts: readonly BlogPost[];
};

export function BlogHubContent({ latestPosts, recommendedPosts }: BlogHubContentProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategorySlug | "all">("all");
  const allPosts = getAllBlogPosts();

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") {
      return allPosts;
    }
    return allPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory, allPosts]);

  return (
    <>
      <Section bordered compact>
        <SectionHeading
          eyebrow={BLOG_CATEGORY_SECTION.eyebrow}
          title={BLOG_CATEGORY_SECTION.title}
          description={BLOG_CATEGORY_SECTION.description}
          align="left"
        />
        <BlogCategoryRail
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        {activeCategory !== "all" ? (
          <p className="mt-4 text-sm text-zinc-500">
            View the full{" "}
            <Link
              href={getCategoryPath(activeCategory)}
              className="font-medium text-brand-red-light transition-colors hover:text-white"
            >
              {getCategoryName(activeCategory)} topic hub
            </Link>{" "}
            for curated articles and related topics.
          </p>
        ) : null}
        <BlogArticleGrid posts={filteredPosts} />
      </Section>

      {activeCategory === "all" ? (
        <>
          <Section bordered compact>
            <SectionHeading
              eyebrow={BLOG_LATEST_SECTION.eyebrow}
              title={BLOG_LATEST_SECTION.title}
              description={BLOG_LATEST_SECTION.description}
              align="left"
            />
            <BlogArticleGrid posts={latestPosts} />
          </Section>

          <Section bordered compact>
            <SectionHeading
              eyebrow={BLOG_RECOMMENDED_SECTION.eyebrow}
              title={BLOG_RECOMMENDED_SECTION.title}
              description={BLOG_RECOMMENDED_SECTION.description}
              align="left"
            />
            <BlogArticleGrid posts={recommendedPosts} compact />
          </Section>
        </>
      ) : null}
    </>
  );
}
