import type { BlogCategorySlug } from "@/lib/blog-categories";
import { getGuidesByCategory } from "@/lib/guide-registry";

export type GuideCategorySlug =
  | "general-claims"
  | "roofing-claims"
  | "water-damage"
  | "fire-damage"
  | "exterior-restoration"
  | "mold";

export type GuideCategory = {
  slug: GuideCategorySlug;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  relatedBlogCategories: readonly BlogCategorySlug[];
  relatedBlogPostSlugs?: readonly string[];
  relatedSolutionPath?: string;
};

/** Editorial hub order for /resources/guides/general-claims (commercial learning path first). */
export const GENERAL_CLAIMS_HUB_ORDER = [
  "commercial-insurance-claims-documentation-guide",
  "commercial-insurance-supplement-playbook-for-contractors",
  "large-loss-commercial-insurance-claims-guide",
  "multifamily-apartment-insurance-claims-guide",
  "hoa-insurance-claims-guide",
  "retail-office-insurance-claims-guide",
  "industrial-warehouse-insurance-claims-guide",
  "first-48-hours-checklist",
  "claim-file-audit-guide",
  "supplement-submission-guide",
  "carrier-estimate-review-guide",
  "op-qualification-guide",
  "documentation-standards-guide",
  "photo-documentation-standards-guide",
] as const;

/** Editorial hub order for /resources/guides/fire-damage (matches FIRE_DAMAGE_GUIDES bundle). */
export const FIRE_DAMAGE_HUB_ORDER = [
  "fire-damage-supplement-playbook-for-contractors",
  "commercial-fire-claims-guide",
  "fire-damage-documentation-guide",
  "fire-code-upgrade-documentation-guide",
  "smoke-soot-damage-documentation-guide",
  "contents-inventory-documentation-guide",
  "pack-out-documentation-guide",
  "fire-claim-intake-guide",
  "smoke-documentation-guide",
  "hvac-contamination-guide",
  "odor-documentation-guide",
  "contents-documentation-guide",
  "structural-stabilization-documentation-guide",
] as const;

/** Editorial hub order for /resources/guides/mold (matches MOLD_GUIDES bundle). */
export const MOLD_HUB_ORDER = [
  "mold-supplement-playbook-for-contractors",
  "commercial-mold-claims-guide",
  "mold-damage-documentation-guide",
  "mold-remediation-documentation-guide",
  "post-remediation-verification-documentation-guide",
  "mold-protocol-documentation-guide",
  "indoor-air-quality-testing-documentation-guide",
] as const;

export const GUIDE_CATEGORY_BASE_PATH = "/resources/guides" as const;

export const GUIDE_CATEGORY_REGISTRY: readonly GuideCategory[] = [
  {
    slug: "general-claims",
    name: "General Claims",
    description:
      "Cross-loss operational workflows: intake, file audit, supplement submission, carrier review, O&P, and documentation standards.",
    metaTitle: "General Claims Guides",
    metaDescription:
      "Operational claim guides for contractors: intake checklists, supplement submission, carrier estimate review, O&P qualification, and documentation standards.",
    relatedBlogCategories: [
      "insurance-supplementing",
      "claim-documentation",
      "insurance-estimating",
      "claim-recovery",
    ],
  },
  {
    slug: "roofing-claims",
    name: "Roofing Claims",
    description:
      "Roof-specific field and office procedures: supplements, documentation, reinspection, code upgrades, and steep/high work.",
    metaTitle: "Roofing Claims Guides",
    metaDescription:
      "Roofing claim operation guides: supplement checklists, documentation standards, reinspection prep, code upgrades, and steep/high documentation.",
    relatedBlogCategories: ["roofing-claims", "claim-documentation"],
    relatedSolutionPath: "/solutions/roofing",
  },
  {
    slug: "water-damage",
    name: "Water Damage",
    description:
      "Mitigation and drying operations: dry logs, moisture mapping, equipment, monitoring, and IICRC category/class documentation.",
    metaTitle: "Water Damage Guides",
    metaDescription:
      "Water damage mitigation guides: intake checklists, dry logs, moisture mapping, equipment documentation, daily monitoring, and category/class standards.",
    relatedBlogCategories: ["water-damage-claims", "claim-documentation"],
    relatedSolutionPath: "/solutions/water-damage",
  },
  {
    slug: "fire-damage",
    name: "Fire Damage",
    description:
      "Start with the supplement playbook, then documentation standards for smoke, contents, pack-out, and code upgrades. Field procedures cover intake through structural stabilization on residential and commercial fire losses.",
    metaTitle: "Fire Damage Guides",
    metaDescription:
      "Fire damage claim guides: supplement playbook, documentation standards, code upgrades, smoke and soot, contents inventory, pack-out, commercial fire claims, intake, HVAC, odor, and structural stabilization.",
    relatedBlogCategories: ["fire-damage-claims", "claim-documentation"],
    relatedBlogPostSlugs: [
      "why-fire-damage-claims-get-underpaid",
      "smoke-damage-documentation-mistakes",
      "fire-claim-documentation-checklist",
      "why-fire-damage-supplements-get-denied",
    ],
    relatedSolutionPath: "/solutions/fire-damage",
  },
  {
    slug: "exterior-restoration",
    name: "Exterior Restoration",
    description:
      "Non-roof exterior scope: siding, envelope, and window and door replacement documentation.",
    metaTitle: "Exterior Restoration Guides",
    metaDescription:
      "Exterior restoration claim guides: siding and envelope documentation and window and door replacement procedures for supplement-ready files.",
    relatedBlogCategories: ["roofing-claims", "claim-recovery"],
  },
  {
    slug: "mold",
    name: "Mold",
    description:
      "Start with the Mold Supplement Playbook, then follow the mold documentation lifecycle and commercial large-loss workflows: moisture source evidence and growth mapping at assessment, production documentation during remediation, post-remediation verification closeout packages, protocol documentation, indoor air quality and testing documentation, and multi-unit commercial mold claim organization for insurance submission.",
    metaTitle: "Mold Claims Guides",
    metaDescription:
      "Mold claim documentation guides for restoration contractors: start with the Mold Supplement Playbook, then moisture source evidence, remediation production documentation, post-remediation verification closeout, protocol documentation, IAQ and testing documentation, and commercial mold claim organization.",
    relatedBlogCategories: ["mold", "claim-documentation", "water-damage-claims"],
    relatedBlogPostSlugs: [
      "why-mold-supplements-get-denied",
      "mold-claim-documentation-checklist",
      "mold-documentation-mistakes",
      "why-mold-insurance-claims-get-underpaid",
    ],
    relatedSolutionPath: "/solutions/mold",
  },
] as const;

export function getGuideCategoryBySlug(slug: GuideCategorySlug): GuideCategory {
  const category = GUIDE_CATEGORY_REGISTRY.find((entry) => entry.slug === slug);
  if (!category) {
    throw new Error(`Unknown guide category: ${slug}`);
  }
  return category;
}

export function getGuideCategoryName(slug: GuideCategorySlug): string {
  return getGuideCategoryBySlug(slug).name;
}

export function getAllGuideCategorySlugs(): GuideCategorySlug[] {
  return GUIDE_CATEGORY_REGISTRY.map((category) => category.slug);
}

export function getGuideCategoryPath(slug: GuideCategorySlug): string {
  return `${GUIDE_CATEGORY_BASE_PATH}/${slug}`;
}

export function getGuideCategoryMeta(slug: GuideCategorySlug) {
  const category = getGuideCategoryBySlug(slug);
  return {
    path: getGuideCategoryPath(slug),
    metaTitle: category.metaTitle,
    metaDescription: category.metaDescription,
  };
}

export function isGuideCategorySlug(slug: string): slug is GuideCategorySlug {
  return GUIDE_CATEGORY_REGISTRY.some((category) => category.slug === slug);
}

export function getGuideCategoryBySlugParam(slug: string): GuideCategory | undefined {
  if (!isGuideCategorySlug(slug)) {
    return undefined;
  }
  return getGuideCategoryBySlug(slug);
}

export function getGuideCategoryGuideCount(slug: GuideCategorySlug): number {
  return getGuidesByCategory(slug).length;
}

export function getRelatedGuideCategories(
  currentSlug: GuideCategorySlug,
  limit = 4,
): GuideCategory[] {
  return GUIDE_CATEGORY_REGISTRY.filter((category) => category.slug !== currentSlug)
    .map((category) => ({
      category,
      guideCount: getGuideCategoryGuideCount(category.slug),
    }))
    .sort((a, b) => {
      if (b.guideCount !== a.guideCount) {
        return b.guideCount - a.guideCount;
      }
      return a.category.name.localeCompare(b.category.name);
    })
    .slice(0, limit)
    .map((entry) => entry.category);
}
