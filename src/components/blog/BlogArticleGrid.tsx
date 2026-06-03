import type { BlogPost } from "@/lib/blog-data";

import { BlogCard } from "./BlogCard";

type BlogArticleGridProps = {
  posts: readonly BlogPost[];
  compact?: boolean;
};

export function BlogArticleGrid({ posts, compact }: BlogArticleGridProps) {
  if (posts.length === 0) {
    return (
      <p className="mt-10 text-sm text-zinc-500">
        No articles in this category yet. Browse all topics or check back soon.
      </p>
    );
  }

  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {posts.map((post) => (
        <li key={post.slug} className="flex">
          <BlogCard post={post} compact={compact} />
        </li>
      ))}
    </ul>
  );
}
