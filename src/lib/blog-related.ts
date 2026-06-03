import type { BlogPost } from "@/lib/blog-types";

import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getLatestPosts,
  getRecommendedPosts,
} from "@/lib/blog-registry";

export type RelatedPostsOptions = {
  limit?: number;
  excludeSlugs?: string[];
};

function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase();
}

function dedupeBySlug(posts: BlogPost[], seen: Set<string>, limit: number): BlogPost[] {
  const result: BlogPost[] = [];
  for (const post of posts) {
    if (seen.has(post.slug)) {
      continue;
    }
    seen.add(post.slug);
    result.push(post);
    if (result.length >= limit) {
      break;
    }
  }
  return result;
}

/** Manual related posts only — preserves current article UX. */
export function resolveRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return getManualRelatedPosts(post, limit);
}

export function getManualRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return post.relatedPostSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((entry): entry is BlogPost => entry !== undefined)
    .slice(0, limit);
}

export function getRelatedPostsByCategory(
  post: BlogPost,
  limit: number,
  excludeSlugs: string[] = [],
): BlogPost[] {
  const excluded = new Set([post.slug, ...excludeSlugs]);
  return getAllBlogPosts()
    .filter((candidate) => candidate.category === post.category && !excluded.has(candidate.slug))
    .slice(0, limit);
}

export function getRelatedPostsByTags(
  post: BlogPost,
  limit: number,
  excludeSlugs: string[] = [],
): BlogPost[] {
  const excluded = new Set([post.slug, ...excludeSlugs]);
  const postTags = new Set(post.tags.map(normalizeTag));

  if (postTags.size === 0) {
    return [];
  }

  const scored = getAllBlogPosts()
    .filter((candidate) => !excluded.has(candidate.slug))
    .map((candidate) => {
      const overlap = candidate.tags.filter((tag) =>
        postTags.has(normalizeTag(tag)),
      ).length;
      return { candidate, overlap };
    })
    .filter((entry) => entry.overlap > 0)
    .sort((a, b) => {
      if (b.overlap !== a.overlap) {
        return b.overlap - a.overlap;
      }
      return (
        new Date(b.candidate.publishedAt).getTime() -
        new Date(a.candidate.publishedAt).getTime()
      );
    });

  return scored.slice(0, limit).map((entry) => entry.candidate);
}

export function getFallbackRelatedPosts(
  limit: number,
  excludeSlugs: string[] = [],
): BlogPost[] {
  const excluded = new Set(excludeSlugs);
  const recommended = getRecommendedPosts(limit * 2).filter(
    (post) => !excluded.has(post.slug),
  );
  const latest = getLatestPosts(limit * 2).filter((post) => !excluded.has(post.slug));
  const seen = new Set<string>();
  return dedupeBySlug([...recommended, ...latest], seen, limit);
}

/** Merges manual, category, tag, and fallback sources for future hub/category use. */
export function getSuggestedRelatedPosts(
  post: BlogPost,
  options: RelatedPostsOptions = {},
): BlogPost[] {
  const limit = options.limit ?? 3;
  const seen = new Set<string>([post.slug, ...(options.excludeSlugs ?? [])]);
  const result: BlogPost[] = [];

  const append = (posts: BlogPost[]) => {
    for (const entry of posts) {
      if (result.length >= limit) {
        return;
      }
      if (seen.has(entry.slug)) {
        continue;
      }
      seen.add(entry.slug);
      result.push(entry);
    }
  };

  append(getManualRelatedPosts(post, limit));

  if (result.length < limit) {
    append(
      getRelatedPostsByCategory(post, limit - result.length, [...seen]),
    );
  }

  if (result.length < limit) {
    append(getRelatedPostsByTags(post, limit - result.length, [...seen]));
  }

  if (result.length < limit) {
    append(getFallbackRelatedPosts(limit - result.length, [...seen]));
  }

  return result;
}
