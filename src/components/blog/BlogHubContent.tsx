"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { BlogCategorySlug } from "@/lib/blog-categories";
import { getCategoryName, getCategoryPath } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";
import { getAllBlogPosts } from "@/lib/blog-page";
import type { Locale } from "@/lib/i18n/config";
import { getResourcesContent } from "@/lib/i18n/content/resources";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { BlogArticleGrid } from "./BlogArticleGrid";
import { BlogCategoryRail } from "./BlogCategoryRail";

type BlogHubContentProps = {
  latestPosts: readonly BlogPost[];
  recommendedPosts: readonly BlogPost[];
  locale?: Locale;
};

export function BlogHubContent({
  latestPosts,
  recommendedPosts,
  locale = "en",
}: BlogHubContentProps) {
  const blog = getResourcesContent(locale).blog;
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
          eyebrow={blog.categorySection.eyebrow}
          title={blog.categorySection.title}
          description={blog.categorySection.description}
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
              eyebrow={blog.latestSection.eyebrow}
              title={blog.latestSection.title}
              description={blog.latestSection.description}
              align="left"
            />
            <BlogArticleGrid posts={latestPosts} />
          </Section>

          <Section bordered compact>
            <SectionHeading
              eyebrow={blog.recommendedSection.eyebrow}
              title={blog.recommendedSection.title}
              description={blog.recommendedSection.description}
              align="left"
            />
            <BlogArticleGrid posts={recommendedPosts} compact />
          </Section>
        </>
      ) : null}
    </>
  );
}
