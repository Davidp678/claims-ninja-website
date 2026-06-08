import { BLOG_CATEGORY_REGISTRY } from "@/lib/blog-categories";
import type { Locale } from "@/lib/i18n/config";
import { getResourcesContent } from "@/lib/i18n/content/resources";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { BlogCategoryCard } from "./BlogCategoryCard";

export function BlogExploreTopics({ locale = "en" }: { locale?: Locale }) {
  const section = getResourcesContent(locale).blog.exploreTopicsSection;

  return (
    <Section bordered compact>
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
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
