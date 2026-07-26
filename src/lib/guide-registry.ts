import { CLAIM_GUIDES } from "@/lib/guides";
import {
  FEATURED_GUIDE_SLUGS,
  FIRE_DAMAGE_HUB_ORDER,
  GENERAL_CLAIMS_HUB_ORDER,
  MOLD_HUB_ORDER,
  RECOMMENDED_GUIDE_SLUGS,
  type GuideCategorySlug,
} from "@/lib/guide-categories";
import type { ClaimPhase, Guide, GuideRole, GuideType } from "@/lib/guide-types";

function sortGuidesByHubOrder(guides: Guide[], hubOrder: readonly string[]): Guide[] {
  const orderIndex = new Map(hubOrder.map((slug, index) => [slug, index]));
  return [...guides].sort((a, b) => {
    const aIndex = orderIndex.get(a.slug);
    const bIndex = orderIndex.get(b.slug);
    if (aIndex === undefined && bIndex === undefined) {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    }
    if (aIndex === undefined) return 1;
    if (bIndex === undefined) return -1;
    return aIndex - bIndex;
  });
}

function resolveGuidesBySlugOrder(slugs: readonly string[]): Guide[] {
  const guides: Guide[] = [];
  for (const slug of slugs) {
    const guide = getGuideBySlugOnly(slug);
    if (guide) {
      guides.push(guide);
    }
  }
  return guides;
}

export function getAllGuides(): readonly Guide[] {
  return [...CLAIM_GUIDES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getGuideBySlug(category: GuideCategorySlug, slug: string): Guide | undefined {
  return CLAIM_GUIDES.find((guide) => guide.category === category && guide.slug === slug);
}

export function getGuideBySlugOnly(slug: string): Guide | undefined {
  return CLAIM_GUIDES.find((guide) => guide.slug === slug);
}

export type GuidePathParams = {
  category: GuideCategorySlug;
  slug: string;
};

export function getAllGuidePathParams(): GuidePathParams[] {
  return CLAIM_GUIDES.map((guide) => ({
    category: guide.category,
    slug: guide.slug,
  }));
}

export function getFeaturedGuides(limit = 3): Guide[] {
  return resolveGuidesBySlugOrder(FEATURED_GUIDE_SLUGS).slice(0, limit);
}

export function getRecommendedGuides(limit = 4): Guide[] {
  return resolveGuidesBySlugOrder(RECOMMENDED_GUIDE_SLUGS).slice(0, limit);
}

export function getGuidesByCategory(category: GuideCategorySlug): Guide[] {
  const guides = getAllGuides().filter((guide) => guide.category === category);
  if (category === "general-claims") {
    return sortGuidesByHubOrder(guides, GENERAL_CLAIMS_HUB_ORDER);
  }
  if (category === "fire-damage") {
    return sortGuidesByHubOrder(guides, FIRE_DAMAGE_HUB_ORDER);
  }
  if (category === "mold") {
    return sortGuidesByHubOrder(guides, MOLD_HUB_ORDER);
  }
  return guides;
}

export function getGuidesByRole(role: GuideRole): Guide[] {
  return getAllGuides().filter((guide) => guide.roles.includes(role));
}

export function getGuidesByPhase(phase: ClaimPhase): Guide[] {
  return getAllGuides().filter((guide) => guide.claimPhase === phase);
}

export function getGuidesByType(type: GuideType): Guide[] {
  return getAllGuides().filter((guide) => guide.guideType === type);
}

export function getGuideCount(): number {
  return CLAIM_GUIDES.length;
}

export function getGuidesForCategoryPreview(
  category: GuideCategorySlug,
  limit = 4,
): Guide[] {
  return getGuidesByCategory(category).slice(0, limit);
}
