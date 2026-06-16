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
      "Pair with why-category-3-water-claims-get-underpaid blog and Category 3 documentation guide.",
  },
  "water-moisture-maps-required": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "water-damage/moisture-mapping-guide",
      "water-damage/category-3-water-damage-documentation-guide",
    ],
    relatedFaqIds: ["documentation-moisture-logs", "water-moisture-map-contents"],
    internalLinkNotes:
      "Link from moisture-mapping blog, dry-log guide prerequisites, and moisture-mapping-mistakes blog.",
  },
  "water-moisture-map-contents": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/moisture-mapping-guide"],
    relatedFaqIds: ["water-moisture-maps-required", "water-moisture-reading-frequency"],
    internalLinkNotes:
      "Link from moisture-mapping-mistakes-that-cost-contractors-money blog and moisture-mapping best practices blog.",
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
    internalLinkNotes:
      "Primary dry-log blog companion FAQ; how-carriers-reduce-drying-days is the primary drying-day authority companion.",
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
      "Supplement recovery angle — pair with mitigation supplement playbook and how-carriers-reduce-drying-days as primary drying-day authority.",
  },
  "water-air-mover-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/equipment-documentation-guide"],
    relatedFaqIds: ["help-equipment-drying-documentation", "water-dry-log-contents"],
    internalLinkNotes:
      "Equipment charges blog and equipment-charges-that-get-cut-from-water-claims blog should link to air mover FAQ.",
  },
  "water-dehumidifier-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/equipment-documentation-guide",
      "water-damage/moisture-mapping-guide",
    ],
    relatedFaqIds: ["water-air-mover-documentation", "water-moisture-map-contents"],
    internalLinkNotes:
      "Chamber design from moisture map supports dehumidifier count arguments; link equipment-charges-that-get-cut-from-water-claims blog.",
  },
  "water-equipment-charge-reductions": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: ["water-damage/equipment-documentation-guide"],
    relatedFaqIds: ["water-air-mover-documentation", "water-dehumidifier-documentation"],
    internalLinkNotes:
      "Pair with equipment-charges-water-damage-claims blog, equipment-charges-that-get-cut-from-water-claims blog, and underpayment blog.",
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
      "Distinguish from negative air FAQ opportunity; link Category 3 guide HEPA section and equipment-charges-that-get-cut-from-water-claims blog.",
  },
  "water-final-mitigation-package": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "water-damage/category-3-water-damage-documentation-guide",
      "water-damage/dry-log-collection-guide",
    ],
    relatedFaqIds: [
      "water-category-3-documentation-required",
      "water-dry-log-contents",
      "water-final-drying-verification",
      "water-mitigation-file-documentation",
    ],
    internalLinkNotes:
      "Closeout checklist; link from documentation-gaps-that-trigger-water-claim-denials blog, equipment-charges-that-get-cut-from-water-claims blog, and claim documentation approval blog.",
  },
  "water-claim-denied-documentation": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "water-damage/dry-log-collection-guide",
      "water-damage/moisture-mapping-guide",
      "water-damage/category-class-documentation-guide",
    ],
    relatedFaqIds: [
      "water-mitigation-file-documentation",
      "water-missing-daily-monitoring",
      "water-final-mitigation-package",
    ],
    internalLinkNotes:
      "Primary denial FAQ for documentation-gaps-that-trigger-water-claim-denials blog.",
  },
  "water-mitigation-file-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/category-class-documentation-guide",
      "water-damage/moisture-mapping-guide",
      "water-damage/dry-log-collection-guide",
      "water-damage/equipment-documentation-guide",
    ],
    relatedFaqIds: [
      "water-final-mitigation-package",
      "water-moisture-readings-importance",
      "resources-water-mitigation-documentation",
    ],
    internalLinkNotes:
      "Mitigation file checklist FAQ; link from documentation-gaps blog building-a-defensible-documentation-package section.",
  },
  "water-moisture-readings-importance": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/moisture-mapping-guide",
      "water-damage/daily-monitoring-guide",
    ],
    relatedFaqIds: [
      "water-moisture-reading-frequency",
      "water-moisture-maps-required",
      "water-missing-daily-monitoring",
    ],
    internalLinkNotes:
      "Why readings matter FAQ; distinct from frequency FAQ; link from documentation-gaps missing-initial-moisture-readings section.",
  },
  "water-missing-daily-monitoring": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "water-damage/daily-monitoring-guide",
      "water-damage/dry-log-collection-guide",
    ],
    relatedFaqIds: [
      "water-daily-monitoring-records-importance",
      "water-dry-log-update-frequency",
      "water-equipment-charge-reductions",
    ],
    internalLinkNotes:
      "Consequence FAQ for gapped monitoring; link from documentation-gaps weak-daily-monitoring-documentation section.",
  },
  "water-final-drying-verification": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "water-damage/dry-log-collection-guide",
      "water-damage/moisture-mapping-guide",
    ],
    relatedFaqIds: [
      "water-final-mitigation-package",
      "water-dry-log-additional-drying-days",
      "water-moisture-readings-importance",
    ],
    internalLinkNotes:
      "Closeout verification FAQ; link from documentation-gaps missing-final-drying-verification section.",
  },
  "water-daily-monitoring-records-importance": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/daily-monitoring-guide",
      "water-damage/dry-log-collection-guide",
    ],
    relatedFaqIds: [
      "water-dry-log-update-frequency",
      "water-moisture-reading-frequency",
      "water-equipment-charge-reductions",
    ],
    internalLinkNotes:
      "Link from equipment-charges-that-get-cut-from-water-claims blog weak monitoring section and daily monitoring guide.",
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
  "water-commercial-claims-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-commercial-mitigation-package",
      "water-mitigation-file-documentation",
      "water-multifamily-loss-documentation",
    ],
    internalLinkNotes:
      "Primary commercial documentation FAQ; anchor for commercial water loss documentation guide.",
  },
  "water-apartment-loss-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-multifamily-loss-documentation",
      "water-tenant-impact-documentation",
    ],
    internalLinkNotes: "Apartment unit-level documentation; link multifamily and tenant impact FAQs.",
  },
  "water-multifamily-loss-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/commercial-water-loss-documentation-guide",
      "water-damage/dry-log-collection-guide",
    ],
    relatedFaqIds: [
      "water-apartment-loss-documentation",
      "water-tenant-impact-documentation",
    ],
    internalLinkNotes:
      "Multifamily stack migration and unit-level indexing; moisture-mapping-mistakes blog companion.",
  },
  "water-commercial-claims-scrutiny": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-commercial-claims-underpaid",
      "water-equipment-charge-reductions",
    ],
    internalLinkNotes:
      "Commercial desk review scrutiny; pair with equipment-charges-that-get-cut-from-water-claims blog.",
  },
  "water-commercial-mitigation-package": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "water-damage/commercial-water-loss-documentation-guide",
      "water-damage/dry-log-collection-guide",
    ],
    relatedFaqIds: [
      "water-final-mitigation-package",
      "water-commercial-claims-documentation",
    ],
    internalLinkNotes:
      "Commercial closeout index; cross-link general final mitigation package FAQ.",
  },
  "water-tenant-impact-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-apartment-loss-documentation",
      "water-multifamily-loss-documentation",
    ],
    internalLinkNotes: "Tenant log and access records on occupied commercial and multifamily losses.",
  },
  "water-business-interruption-documentation": {
    searchIntent: "informational",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: ["water-commercial-claims-documentation"],
    internalLinkNotes:
      "BI support documentation; separate mitigation evidence from insured financial records.",
  },
  "water-commercial-claims-underpaid": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-commercial-claims-scrutiny",
      "water-claim-denied-documentation",
      "water-equipment-charge-reductions",
    ],
    internalLinkNotes:
      "Commercial underpayment bridge; link documentation-gaps and supplement denial recovery blogs.",
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
