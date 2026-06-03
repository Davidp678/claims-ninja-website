import type { BlogPost } from "@/lib/blog-data";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { BlogArticleGrid } from "./BlogArticleGrid";

type BlogRelatedPostsProps = {
  posts: readonly BlogPost[];
};

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <Section bordered compact>
      <SectionHeading
        eyebrow="Related"
        title="Continue reading"
        description="More articles on supplements, documentation, and contractor recovery."
        align="left"
      />
      <BlogArticleGrid posts={posts} compact />
    </Section>
  );
}
