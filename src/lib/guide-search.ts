import type { GuideCategorySlug } from "@/lib/guide-categories";
import type { ClaimPhase, Guide, GuideRole, GuideType } from "@/lib/guide-types";
import {
  CLAIM_PHASE_LABELS,
  getGuideCategoryName,
  GUIDE_ROLE_LABELS,
  GUIDE_TYPE_LABELS,
} from "@/lib/guide-page";

export function filterGuides(
  guides: readonly Guide[],
  query: string,
  category?: GuideCategorySlug | "all",
  guideType?: GuideType | "all",
  role?: GuideRole | "all",
): Guide[] {
  const normalized = query.trim().toLowerCase();

  return guides.filter((guide) => {
    if (category && category !== "all" && guide.category !== category) {
      return false;
    }
    if (guideType && guideType !== "all" && guide.guideType !== guideType) {
      return false;
    }
    if (role && role !== "all" && !guide.roles.includes(role)) {
      return false;
    }

    if (!normalized) {
      return true;
    }

    const categoryName = getGuideCategoryName(guide.category).toLowerCase();
    const typeLabel = GUIDE_TYPE_LABELS[guide.guideType].toLowerCase();
    const roleLabels = guide.roles.map((r) => GUIDE_ROLE_LABELS[r].toLowerCase()).join(" ");
    const phaseLabel = CLAIM_PHASE_LABELS[guide.claimPhase].toLowerCase();
    const checklistText = guide.requiredDocumentation
      .map((item) => `${item.label} ${item.detail ?? ""}`)
      .join(" ")
      .toLowerCase();

    return (
      guide.title.toLowerCase().includes(normalized) ||
      guide.excerpt.toLowerCase().includes(normalized) ||
      guide.purpose.toLowerCase().includes(normalized) ||
      categoryName.includes(normalized) ||
      typeLabel.includes(normalized) ||
      roleLabels.includes(normalized) ||
      phaseLabel.includes(normalized) ||
      guide.tags.some((tag) => tag.toLowerCase().includes(normalized)) ||
      checklistText.includes(normalized)
    );
  });
}

export function getGuidesByPhaseGrouped(
  guides: readonly Guide[],
  limitPerPhase = 3,
): Partial<Record<ClaimPhase, Guide[]>> {
  const phases: ClaimPhase[] = [
    "intake",
    "mitigation",
    "documentation",
    "supplement",
    "negotiation",
    "closeout",
  ];

  const grouped: Partial<Record<ClaimPhase, Guide[]>> = {};

  for (const phase of phases) {
    const phaseGuides = guides.filter((guide) => guide.claimPhase === phase).slice(0, limitPerPhase);
    if (phaseGuides.length > 0) {
      grouped[phase] = phaseGuides;
    }
  }

  return grouped;
}
