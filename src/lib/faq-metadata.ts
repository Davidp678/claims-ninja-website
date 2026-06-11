import { FAQ_ITEMS } from "@/lib/faq-data";

export type FaqSearchIntent =
  | "informational"
  | "documentation-standard"
  | "billing-dispute"
  | "carrier-review";

export type FaqMetadataEntry = {
  searchIntent: FaqSearchIntent;
  relatedGuideSlugs?: readonly string[];
  relatedFaqIds?: readonly string[];
  internalLinkNotes?: string;
};

const FAQ_ID_SET = new Set(FAQ_ITEMS.map((item) => item.id));

export const FAQ_METADATA: Partial<Record<string, FaqMetadataEntry>> = {
  "water-category-3-qualifies": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "water-damage/category-3-water-damage-documentation-guide",
      "water-damage/category-class-documentation-guide",
    ],
    relatedFaqIds: ["water-category-class"],
    internalLinkNotes:
      "Link from category-class guide and future Category 3 classification blog posts.",
  },
  "water-category-3-documentation-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/category-3-water-damage-documentation-guide",
      "water-damage/mitigation-intake-checklist",
    ],
    relatedFaqIds: ["water-category-3-qualifies", "water-mitigation-scope"],
    internalLinkNotes:
      "Anchor FAQ for Category 3 guide; cross-link mitigation intake checklist.",
  },
  "water-category-3-invoice-reductions": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: ["water-damage/category-3-water-damage-documentation-guide"],
    relatedFaqIds: ["water-equipment-charge-reductions", "water-dry-log-update-frequency"],
    internalLinkNotes:
      "Pair with why-water-mitigation-claims-get-underpaid blog and supplement playbook.",
  },
  "water-moisture-maps-required": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "water-damage/moisture-mapping-guide",
      "water-damage/category-3-water-damage-documentation-guide",
    ],
    relatedFaqIds: ["documentation-moisture-logs", "water-moisture-map-contents"],
    internalLinkNotes:
      "Link from moisture-mapping blog and dry-log guide prerequisites.",
  },
  "water-moisture-map-contents": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/moisture-mapping-guide"],
    relatedFaqIds: ["water-moisture-maps-required", "water-moisture-reading-frequency"],
    internalLinkNotes:
      "Future moisture-mapping field checklist blog should link here.",
  },
  "water-moisture-reading-frequency": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/moisture-mapping-guide",
      "water-damage/daily-monitoring-guide",
    ],
    relatedFaqIds: ["water-dry-log-update-frequency", "documentation-moisture-logs"],
    internalLinkNotes:
      "Cross-link daily monitoring blog and dry-log collection guide.",
  },
  "water-dry-log-update-frequency": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/dry-log-collection-guide",
      "water-damage/daily-monitoring-guide",
    ],
    relatedFaqIds: ["water-moisture-reading-frequency", "water-drying-documentation"],
    internalLinkNotes: "Primary dry-log blog companion FAQ.",
  },
  "water-dry-log-contents": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/dry-log-collection-guide"],
    relatedFaqIds: ["water-dry-log-update-frequency", "water-drying-documentation"],
    internalLinkNotes:
      "Link from dry-log documentation blog and equipment documentation guide.",
  },
  "water-dry-log-additional-drying-days": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "water-damage/dry-log-collection-guide",
      "water-damage/category-3-water-damage-documentation-guide",
    ],
    relatedFaqIds: ["water-dry-log-contents", "help-equipment-drying-documentation"],
    internalLinkNotes:
      "Supplement recovery angle — pair with mitigation supplement playbook.",
  },
  "water-air-mover-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/equipment-documentation-guide"],
    relatedFaqIds: ["help-equipment-drying-documentation", "water-dry-log-contents"],
    internalLinkNotes:
      "Equipment charges blog should link to air mover and dehumidifier FAQs separately.",
  },
  "water-dehumidifier-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/equipment-documentation-guide",
      "water-damage/moisture-mapping-guide",
    ],
    relatedFaqIds: ["water-air-mover-documentation", "water-moisture-map-contents"],
    internalLinkNotes:
      "Chamber design from moisture map supports dehumidifier count arguments.",
  },
  "water-equipment-charge-reductions": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: ["water-damage/equipment-documentation-guide"],
    relatedFaqIds: ["water-air-mover-documentation", "water-dehumidifier-documentation"],
    internalLinkNotes:
      "Pair with equipment-charges-water-damage-claims blog and underpayment blog.",
  },
  "water-containment-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/category-3-water-damage-documentation-guide",
      "water-damage/equipment-documentation-guide",
    ],
    relatedFaqIds: ["mold-containment-equipment", "water-hepa-filtration-documentation"],
    internalLinkNotes:
      "Category 3 contamination-control section; future containment setup blog.",
  },
  "water-hepa-filtration-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/category-3-water-damage-documentation-guide"],
    relatedFaqIds: ["water-containment-documentation", "mold-containment-equipment"],
    internalLinkNotes:
      "Distinguish from negative air FAQ opportunity; link Category 3 guide HEPA section.",
  },
  "water-final-mitigation-package": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "water-damage/category-3-water-damage-documentation-guide",
      "water-damage/dry-log-collection-guide",
    ],
    relatedFaqIds: ["water-category-3-documentation-required", "water-dry-log-contents"],
    internalLinkNotes:
      "Closeout checklist blog opportunity; link from claim documentation approval blog.",
  },
  "water-mitigation-scope": {
    searchIntent: "informational",
    relatedGuideSlugs: ["water-damage/category-3-water-damage-documentation-guide"],
    relatedFaqIds: ["water-category-3-documentation-required"],
  },
  "water-drying-documentation": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: ["water-damage/dry-log-collection-guide"],
    relatedFaqIds: ["water-dry-log-contents", "water-dry-log-update-frequency"],
  },
  "resources-water-mitigation-documentation": {
    searchIntent: "informational",
    relatedGuideSlugs: ["water-damage/category-3-water-damage-documentation-guide"],
    relatedFaqIds: ["water-category-3-documentation-required"],
  },
  "help-equipment-drying-documentation": {
    searchIntent: "informational",
    relatedGuideSlugs: ["water-damage/equipment-documentation-guide"],
    relatedFaqIds: ["water-equipment-charge-reductions"],
  },
  "water-category-class": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/category-class-documentation-guide",
      "water-damage/category-3-water-damage-documentation-guide",
    ],
    relatedFaqIds: ["water-category-3-qualifies"],
  },
  "documentation-moisture-logs": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/moisture-mapping-guide"],
    relatedFaqIds: ["water-moisture-maps-required", "water-dry-log-contents"],
  },
};

export function assertFaqMetadataValid(): void {
  for (const [id, entry] of Object.entries(FAQ_METADATA)) {
    if (!entry) continue;
    if (entry.relatedFaqIds) {
      for (const relatedId of entry.relatedFaqIds) {
        if (!FAQ_ID_SET.has(relatedId)) {
          throw new Error(`FAQ metadata "${id}" references unknown FAQ id: ${relatedId}`);
        }
      }
    }
  }
}
