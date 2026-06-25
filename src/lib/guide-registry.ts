import { CLAIM_GUIDES } from "@/lib/guides";
import type { GuideCategorySlug } from "@/lib/guide-categories";
import type { ClaimPhase, Guide, GuideRole, GuideType } from "@/lib/guide-types";

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
  return CLAIM_GUIDES.filter((guide) => guide.featured)
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}

export function getRecommendedGuides(limit = 4): Guide[] {
  return CLAIM_GUIDES.filter((guide) => guide.recommended)
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}

export function getGuidesByCategory(category: GuideCategorySlug): Guide[] {
  return getAllGuides().filter((guide) => guide.category === category);
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
