import { BLOG_CATEGORY_REGISTRY } from "@/lib/blog-categories";
import { BLOG_EXPLORE_TOPICS_SECTION } from "@/lib/blog-page";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { BlogCategoryCard } from "./BlogCategoryCard";

export function BlogExploreTopics() {
  return (
    <Section bordered compact>
      <SectionHeading
        eyebrow={BLOG_EXPLORE_TOPICS_SECTION.eyebrow}
        title={BLOG_EXPLORE_TOPICS_SECTION.title}
        description={BLOG_EXPLORE_TOPICS_SECTION.description}
        align="left"
      />
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_CATEGORY_REGISTRY.map((category) => (
          <li key={category.slug} className="flex">
            <BlogCategoryCard category={category} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
