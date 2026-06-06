import { getBlogPostBySlug, getBlogPostPath } from "@/lib/blog-page";
import type { BlogPost } from "@/lib/blog-types";
import { getGuideBySlugOnly } from "@/lib/guide-registry";
import type { Guide } from "@/lib/guide-types";
import { getGuidePathForGuide } from "@/lib/guide-page";

export function getManualRelatedGuides(guide: Guide, limit = 3): Guide[] {
  const seen = new Set<string>();
  const results: Guide[] = [];

  for (const slug of guide.relatedGuideSlugs) {
    if (results.length >= limit) break;
    const related = getGuideBySlugOnly(slug);
    if (related && related.slug !== guide.slug && !seen.has(related.slug)) {
      seen.add(related.slug);
      results.push(related);
    }
  }

  return results;
}

export function resolveRelatedGuides(guide: Guide, limit = 3): Guide[] {
  return getManualRelatedGuides(guide, limit);
}

export function resolveRelatedBlogs(guide: Guide, limit = 3): BlogPost[] {
  const results: BlogPost[] = [];

  for (const slug of guide.relatedBlogSlugs) {
    if (results.length >= limit) break;
    const post = getBlogPostBySlug(slug);
    if (post) {
      results.push(post);
    }
  }

  return results;
}

export function buildGuideBlogLinks(guide: Guide): { label: string; href: string }[] {
  return resolveRelatedBlogs(guide).map((post) => ({
    label: post.title,
    href: getBlogPostPath(post.slug),
  }));
}

export function buildGuideGuideLinks(guide: Guide): { label: string; href: string }[] {
  return resolveRelatedGuides(guide).map((related) => ({
    label: related.title,
    href: getGuidePathForGuide(related),
  }));
}
