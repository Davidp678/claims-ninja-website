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
      "water-apartment-complex-documentation",
      "water-apartment-unit-separate-tracking",
    ],
    internalLinkNotes:
      "Apartment unit-level documentation; link water-damage-documentation-for-apartment-complexes blog and multifamily FAQs.",
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
      "water-apartment-complex-documentation",
      "water-apartment-unit-separate-tracking",
    ],
    internalLinkNotes:
      "Multifamily stack migration and unit-level indexing; water-damage-documentation-for-apartment-complexes blog companion.",
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
      "water-apartment-mitigation-claims-disputed",
    ],
    internalLinkNotes:
      "Commercial underpayment bridge; link documentation-gaps and supplement denial recovery blogs.",
  },
  "water-apartment-complex-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/commercial-water-loss-documentation-guide",
      "water-damage/moisture-mapping-guide",
      "water-damage/dry-log-collection-guide",
    ],
    relatedFaqIds: [
      "water-apartment-loss-documentation",
      "water-multifamily-loss-documentation",
      "water-apartment-unit-separate-tracking",
      "water-apartment-tenant-impact-required",
    ],
    internalLinkNotes:
      "Primary apartment complex documentation FAQ; anchor for water-damage-documentation-for-apartment-complexes blog.",
  },
  "water-apartment-unit-separate-tracking": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-apartment-complex-documentation",
      "water-apartment-loss-documentation",
      "water-multifamily-loss-documentation",
    ],
    internalLinkNotes: "Unit-by-unit tracking standard; link apartment complex blog section 2.",
  },
  "water-apartment-equipment-usage-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/commercial-water-loss-documentation-guide",
      "water-damage/equipment-documentation-guide",
    ],
    relatedFaqIds: [
      "water-apartment-complex-documentation",
      "water-equipment-charge-reductions",
      "water-apartment-mitigation-claims-disputed",
    ],
    internalLinkNotes:
      "Per-unit equipment proof; link equipment-charges-that-get-cut-from-water-claims blog.",
  },
  "water-apartment-mitigation-claims-disputed": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-apartment-complex-documentation",
      "water-commercial-claims-underpaid",
      "water-commercial-claims-scrutiny",
    ],
    internalLinkNotes:
      "Apartment dispute drivers; link documentation-gaps blog and apartment complex blog section 9.",
  },
  "water-apartment-tenant-impact-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-tenant-impact-documentation",
      "water-apartment-complex-documentation",
      "water-apartment-unit-separate-tracking",
    ],
    internalLinkNotes:
      "Tenant impact requirement on apartment losses; link apartment complex blog section 6.",
  },
  "water-multifamily-claims-underpaid": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "water-damage/commercial-water-loss-documentation-guide",
      "water-damage/water-mitigation-invoice-defense-guide",
    ],
    relatedFaqIds: [
      "water-commercial-claims-underpaid",
      "water-apartment-mitigation-claims-disputed",
      "water-multifamily-units-documentation",
      "water-multifamily-full-payment-support",
    ],
    internalLinkNotes:
      "Primary multifamily underpayment FAQ; anchor for multifamily-water-claims-that-get-underpaid blog.",
  },
  "water-multifamily-units-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-apartment-unit-separate-tracking",
      "water-apartment-complex-documentation",
      "water-multifamily-loss-documentation",
    ],
    internalLinkNotes:
      "Unit-by-unit documentation on multifamily losses; link multifamily underpayment blog cause #1.",
  },
  "water-multifamily-equipment-reductions": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "water-damage/equipment-documentation-guide",
      "water-damage/water-mitigation-invoice-defense-guide",
    ],
    relatedFaqIds: [
      "water-apartment-equipment-usage-documentation",
      "water-equipment-charge-reductions",
      "water-multifamily-claims-underpaid",
    ],
    internalLinkNotes:
      "Multifamily equipment reductions; link equipment-charges-that-get-cut-from-water-claims blog.",
  },
  "water-multifamily-tenant-impact-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-apartment-tenant-impact-required",
      "water-tenant-impact-documentation",
      "water-multifamily-claims-underpaid",
    ],
    internalLinkNotes:
      "Tenant impact on multifamily underpayment; link multifamily underpayment blog cause #5.",
  },
  "water-multifamily-full-payment-support": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/commercial-water-loss-documentation-guide",
      "water-damage/water-mitigation-invoice-defense-guide",
    ],
    relatedFaqIds: [
      "water-multifamily-claims-underpaid",
      "water-commercial-documentation-invoice-match",
      "water-apartment-complex-documentation",
    ],
    internalLinkNotes:
      "Full payment support on multifamily losses; link invoice defense guide and underpayment blog.",
  },
  "water-commercial-documentation-missing": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-commercial-claims-documentation",
      "water-mitigation-file-documentation",
      "water-claim-denied-documentation",
    ],
    internalLinkNotes:
      "Primary missing-documentation FAQ for commercial losses; anchor for common-documentation-mistakes blog.",
  },
  "water-commercial-invoice-reduced-why": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: ["water-damage/water-mitigation-invoice-defense-guide"],
    relatedFaqIds: [
      "water-mitigation-invoice-reductions",
      "water-commercial-claims-underpaid",
      "water-commercial-documentation-invoice-match",
    ],
    internalLinkNotes:
      "Commercial-specific invoice reduction FAQ; cross-link invoice defense guide and mistakes blog.",
  },
  "water-commercial-tenant-impact-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-tenant-impact-documentation",
      "water-apartment-tenant-impact-required",
      "water-commercial-documentation-missing",
    ],
    internalLinkNotes:
      "Tenant impact requirement on commercial losses; link mistakes blog section 4.",
  },
  "water-commercial-common-area-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-apartment-complex-documentation",
      "water-multifamily-loss-documentation",
      "water-commercial-documentation-missing",
    ],
    internalLinkNotes:
      "Common area documentation standard for commercial losses; link mistakes blog section 5.",
  },
  "water-commercial-documentation-invoice-match": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: ["water-damage/water-mitigation-invoice-defense-guide"],
    relatedFaqIds: [
      "water-mitigation-invoice-documentation",
      "water-mitigation-invoice-review-failures",
      "water-commercial-invoice-reduced-why",
    ],
    internalLinkNotes:
      "Documentation-to-invoice alignment FAQ; anchor for mistakes blog section 8 and invoice defense guide.",
  },
  "water-mitigation-invoice-reductions": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: ["water-damage/water-mitigation-invoice-defense-guide"],
    relatedFaqIds: [
      "water-mitigation-invoice-documentation",
      "water-mitigation-invoice-review-failures",
      "water-equipment-charge-reductions",
      "water-category-3-invoice-reductions",
    ],
    internalLinkNotes:
      "Primary invoice reduction FAQ; anchor for invoice defense guide and documentation-gaps blog.",
  },
  "water-mitigation-invoice-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/water-mitigation-invoice-defense-guide",
      "water-damage/dry-log-collection-guide",
      "water-damage/equipment-documentation-guide",
    ],
    relatedFaqIds: [
      "water-mitigation-file-documentation",
      "water-final-mitigation-package",
      "water-mitigation-invoice-reductions",
    ],
    internalLinkNotes:
      "Indexed packet standard for mitigation invoice defense; cross-link dry logs and equipment guides.",
  },
  "water-defend-drying-day-charges": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "water-damage/water-mitigation-invoice-defense-guide",
      "water-damage/daily-monitoring-guide",
      "water-damage/dry-log-collection-guide",
    ],
    relatedFaqIds: [
      "water-dry-log-additional-drying-days",
      "water-final-drying-verification",
      "water-missing-daily-monitoring",
    ],
    internalLinkNotes:
      "Drying day defense FAQ; link how-carriers-reduce-drying-days blog.",
  },
  "water-equipment-invoice-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/water-mitigation-invoice-defense-guide",
      "water-damage/equipment-documentation-guide",
    ],
    relatedFaqIds: [
      "water-equipment-charge-reductions",
      "water-air-mover-documentation",
      "water-dehumidifier-documentation",
    ],
    internalLinkNotes:
      "Equipment invoice documentation FAQ; link equipment-charges-that-get-cut blog.",
  },
  "water-mitigation-invoice-review-failures": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: ["water-damage/water-mitigation-invoice-defense-guide"],
    relatedFaqIds: [
      "water-mitigation-invoice-reductions",
      "water-claim-denied-documentation",
      "water-missing-daily-monitoring",
    ],
    internalLinkNotes:
      "Invoice review failure patterns; bridge to documentation-gaps blog.",
  },
  "water-large-loss-qualifies": {
    searchIntent: "informational",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-large-loss-documentation",
      "water-large-loss-scrutiny",
      "water-commercial-losses",
    ],
    internalLinkNotes:
      "Large-loss qualification FAQ; anchor for large-loss blog intro and enterprise examples.",
  },
  "water-large-loss-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/commercial-water-loss-documentation-guide",
      "water-damage/water-mitigation-invoice-defense-guide",
      "water-damage/moisture-mapping-guide",
      "water-damage/daily-monitoring-guide",
    ],
    relatedFaqIds: [
      "water-large-loss-drying-zones",
      "water-large-loss-invoice-documentation",
      "water-commercial-claims-documentation",
    ],
    internalLinkNotes:
      "Primary large-loss documentation FAQ; anchor for blog command structure and checklist sections.",
  },
  "water-large-loss-scrutiny": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: ["water-damage/commercial-water-loss-documentation-guide"],
    relatedFaqIds: [
      "water-commercial-claims-scrutiny",
      "water-large-loss-invoice-documentation",
      "water-commercial-invoice-reduced-why",
    ],
    internalLinkNotes:
      "Large-loss scrutiny FAQ; bridge to section 1 and commercial scrutiny cluster.",
  },
  "water-large-loss-drying-zones": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/moisture-mapping-guide",
      "water-damage/dry-log-collection-guide",
      "water-damage/equipment-documentation-guide",
    ],
    relatedFaqIds: [
      "water-apartment-unit-separate-tracking",
      "water-large-loss-documentation",
    ],
    internalLinkNotes:
      "Multi-zone documentation FAQ; anchor for blog section 4 and apartment parallel.",
  },
  "water-large-loss-invoice-documentation": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: ["water-damage/water-mitigation-invoice-defense-guide"],
    relatedFaqIds: [
      "water-commercial-documentation-invoice-match",
      "water-mitigation-invoice-documentation",
      "water-large-loss-scrutiny",
    ],
    internalLinkNotes:
      "Large-loss invoice documentation FAQ; anchor for executive reporting and checklist sections.",
  },
  "water-class-4-drying-definition": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "water-damage/class-4-drying-documentation-guide",
      "water-damage/category-class-documentation-guide",
    ],
    relatedFaqIds: ["water-category-class", "water-class-4-drying-duration"],
    internalLinkNotes:
      "Anchor FAQ for Class 4 drying guide introduction and category-class cross-link.",
  },
  "water-class-4-documentation-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/class-4-drying-documentation-guide",
      "water-damage/moisture-mapping-guide",
      "water-damage/daily-monitoring-guide",
    ],
    relatedFaqIds: [
      "water-class-4-drying-definition",
      "water-moisture-maps-required",
      "water-daily-monitoring-records-importance",
    ],
    internalLinkNotes:
      "Class 4 documentation requirements FAQ; cross-link moisture mapping and monitoring guides.",
  },
  "water-class-4-specialty-equipment-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/class-4-drying-documentation-guide",
      "water-damage/equipment-documentation-guide",
    ],
    relatedFaqIds: [
      "water-equipment-invoice-documentation",
      "water-equipment-charge-reductions",
    ],
    internalLinkNotes:
      "Specialty equipment FAQ; pair with equipment-charges-that-get-cut blog.",
  },
  "water-class-4-drying-duration": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: ["water-damage/class-4-drying-documentation-guide"],
    relatedFaqIds: [
      "water-defend-drying-day-charges",
      "water-dry-log-additional-drying-days",
      "water-class-4-carrier-disputes",
    ],
    internalLinkNotes:
      "Extended drying duration FAQ; cross-link how-carriers-reduce-drying-days blog.",
  },
  "water-class-4-carrier-disputes": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "water-damage/class-4-drying-documentation-guide",
      "water-damage/water-mitigation-invoice-defense-guide",
    ],
    relatedFaqIds: [
      "water-class-4-drying-duration",
      "water-mitigation-invoice-reductions",
      "water-equipment-charge-reductions",
    ],
    internalLinkNotes:
      "Class 4 carrier dispute FAQ; anchor for carrier challenges section and invoice defense guide.",
  },
  "water-reinspection-when-request": {
    searchIntent: "informational",
    relatedGuideSlugs: ["water-damage/water-damage-reinspection-guide"],
    relatedFaqIds: [
      "water-reinspection-documentation-prep",
      "water-reinspection-denial-reasons",
      "carrier-reinspection",
    ],
    internalLinkNotes:
      "Anchor FAQ for reinspection guide; cross-link supplement denial recovery blog.",
  },
  "water-reinspection-documentation-prep": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/water-damage-reinspection-guide",
      "water-damage/moisture-mapping-guide",
      "water-damage/dry-log-collection-guide",
    ],
    relatedFaqIds: [
      "water-reinspection-when-request",
      "water-reinspection-organize-documentation",
      "water-mitigation-file-documentation",
    ],
    internalLinkNotes:
      "Documentation prep FAQ; cross-link moisture mapping and dry log guides.",
  },
  "water-reinspection-additional-damage-documented": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["water-damage/water-damage-reinspection-guide"],
    relatedFaqIds: [
      "water-reinspection-when-request",
      "water-moisture-maps-required",
      "water-daily-monitoring-records-importance",
    ],
    internalLinkNotes:
      "Post-inspection damage documentation FAQ; cross-link daily monitoring guide.",
  },
  "water-reinspection-denial-reasons": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: ["water-damage/water-damage-reinspection-guide"],
    relatedFaqIds: [
      "water-reinspection-when-request",
      "water-claim-denied-documentation",
      "carrier-reinspection",
    ],
    internalLinkNotes:
      "Reinspection denial FAQ; cross-link documentation gaps blog.",
  },
  "water-reinspection-organize-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "water-damage/water-damage-reinspection-guide",
      "water-damage/water-mitigation-invoice-defense-guide",
    ],
    relatedFaqIds: [
      "water-reinspection-documentation-prep",
      "water-mitigation-invoice-documentation",
    ],
    internalLinkNotes:
      "Organization FAQ; anchor for reinspection checklist section.",
  },
  "roof-matching-insurance-claim": {
    searchIntent: "informational",
    relatedGuideSlugs: ["roofing-claims/roof-matching-documentation-guide"],
    relatedFaqIds: [
      "roof-matching-contractor-documentation",
      "roof-matching-discontinued-shingles",
      "roofing-carrier-documentation",
    ],
    internalLinkNotes:
      "Anchor FAQ for roof matching guide; cross-link roofing supplement checklist.",
  },
  "roof-matching-contractor-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/roof-matching-documentation-guide",
      "roofing-claims/roofing-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-matching-insurance-claim",
      "roof-matching-dispute-photos",
      "roof-matching-supplement-denials",
    ],
    internalLinkNotes:
      "Documentation prep FAQ; cross-link roofing documentation standard.",
  },
  "roof-matching-dispute-photos": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/roof-matching-documentation-guide",
      "roofing-claims/roof-measurement-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-matching-contractor-documentation",
      "roof-matching-supplement-denials",
    ],
    internalLinkNotes:
      "Photo evidence FAQ; cross-link measurement documentation guide.",
  },
  "roof-matching-supplement-denials": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: ["roofing-claims/roof-matching-documentation-guide"],
    relatedFaqIds: [
      "roof-matching-insurance-claim",
      "roof-matching-discontinued-shingles",
      "supplements-whats-included",
    ],
    internalLinkNotes:
      "Matching denial FAQ; cross-link roofing supplement playbook blog.",
  },
  "roof-matching-discontinued-shingles": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["roofing-claims/roof-matching-documentation-guide"],
    relatedFaqIds: [
      "roof-matching-insurance-claim",
      "roof-matching-supplement-denials",
    ],
    internalLinkNotes:
      "Discontinued product FAQ; anchor for availability research section.",
  },
  "roof-repairability-insurance-claim": {
    searchIntent: "informational",
    relatedGuideSlugs: ["roofing-claims/roof-repairability-documentation-guide"],
    relatedFaqIds: [
      "roof-repairability-contractor-documentation",
      "roof-brittle-test-roofing",
      "roofing-carrier-documentation",
    ],
    internalLinkNotes:
      "Anchor FAQ for roof repairability guide; cross-link matching guide where relevant.",
  },
  "roof-repairability-contractor-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/roof-repairability-documentation-guide",
      "roofing-claims/roofing-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-repairability-insurance-claim",
      "roof-brittle-test-roofing",
      "roof-repairability-documentation-evidence",
    ],
    internalLinkNotes:
      "Documentation prep FAQ; cross-link roofing documentation standard.",
  },
  "roof-brittle-test-roofing": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/roof-repairability-documentation-guide",
      "roofing-claims/roofing-supplement-checklist",
    ],
    relatedFaqIds: [
      "roof-repairability-insurance-claim",
      "roof-repairability-contractor-documentation",
      "roof-repairability-documentation-evidence",
    ],
    internalLinkNotes:
      "Brittle test FAQ; anchor for repairability testing section.",
  },
  "roof-repairability-documentation-evidence": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/roof-repairability-documentation-guide",
      "roofing-claims/roof-measurement-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-repairability-contractor-documentation",
      "roof-brittle-test-roofing",
      "roof-repairability-carrier-disputes",
    ],
    internalLinkNotes:
      "Evidence package FAQ; cross-link measurement documentation guide.",
  },
  "roof-repairability-carrier-disputes": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: ["roofing-claims/roof-repairability-documentation-guide"],
    relatedFaqIds: [
      "roof-repairability-insurance-claim",
      "roof-repairability-documentation-evidence",
      "supplements-whats-included",
    ],
    internalLinkNotes:
      "Repairability denial FAQ; cross-link roofing supplement playbook blog.",
  },
  "roof-reinspection-when-request": {
    searchIntent: "informational",
    relatedGuideSlugs: ["roofing-claims/roof-reinspection-guide"],
    relatedFaqIds: [
      "roof-reinspection-documentation-prep",
      "roof-reinspection-missed-damage",
      "roofing-carrier-documentation",
    ],
    internalLinkNotes:
      "Anchor FAQ for roof reinspection guide; cross-link supplement checklist.",
  },
  "roof-reinspection-documentation-prep": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/roof-reinspection-guide",
      "roofing-claims/roof-matching-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-reinspection-when-request",
      "roof-reinspection-organize-photos",
      "roof-reinspection-missed-damage",
    ],
    internalLinkNotes:
      "Documentation prep FAQ; cross-link matching guide.",
  },
  "roof-reinspection-missed-damage": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/roof-reinspection-guide",
      "roofing-claims/roof-repairability-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-reinspection-when-request",
      "roof-reinspection-documentation-prep",
      "roof-reinspection-denial-reasons",
    ],
    internalLinkNotes:
      "Missed damage FAQ; cross-link repairability guide.",
  },
  "roof-reinspection-denial-reasons": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: ["roofing-claims/roof-reinspection-guide"],
    relatedFaqIds: [
      "roof-reinspection-when-request",
      "roof-reinspection-missed-damage",
      "supplements-whats-included",
    ],
    internalLinkNotes:
      "Reinspection denial FAQ; cross-link roofing supplement playbook blog.",
  },
  "roof-reinspection-organize-photos": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/roof-reinspection-guide",
      "roofing-claims/roofing-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-reinspection-documentation-prep",
      "roof-reinspection-denial-reasons",
    ],
    internalLinkNotes:
      "Photo organization FAQ; cross-link roofing documentation standard.",
  },
  "roof-hail-vs-wind-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/roof-hail-damage-documentation-guide",
      "roofing-claims/roof-wind-damage-documentation-guide",
    ],
    relatedFaqIds: ["roof-flashing-supplement-qualification", "roof-layered-tear-off-discovery"],
    internalLinkNotes:
      "Peril documentation FAQ; cross-link hail and wind blogs and guides.",
  },
  "roof-layered-tear-off-discovery": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["roofing-claims/roof-hail-damage-documentation-guide"],
    relatedFaqIds: ["roof-hail-vs-wind-documentation", "roof-flashing-supplement-qualification"],
    internalLinkNotes:
      "Layer discovery FAQ; cross-link roofing supplement checklist and hail blog.",
  },
  "roof-flashing-supplement-qualification": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "roofing-claims/roof-hail-damage-documentation-guide",
      "roofing-claims/roof-wind-damage-documentation-guide",
    ],
    relatedFaqIds: ["roof-hail-vs-wind-documentation", "roof-layered-tear-off-discovery"],
    internalLinkNotes:
      "Flashing supplement FAQ; cross-link hail and wind guides and xactimate checklist blog.",
  },
  "roof-commercial-damage-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["roofing-claims/commercial-roofing-documentation-guide"],
    relatedFaqIds: [
      "roof-commercial-inspection-photos",
      "roof-commercial-supplement-documentation",
      "roofing-commercial",
    ],
    internalLinkNotes:
      "Primary commercial roof documentation FAQ; anchor for commercial roofing documentation guide.",
  },
  "roof-commercial-supplement-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/commercial-roofing-documentation-guide",
      "roofing-claims/roofing-supplement-checklist",
    ],
    relatedFaqIds: [
      "roof-commercial-damage-documentation",
      "roof-commercial-system-replacement-documentation",
      "supplements-whats-included",
    ],
    internalLinkNotes:
      "Commercial supplement documentation FAQ; cross-link roofing supplement playbook blog.",
  },
  "roof-commercial-moisture-survey-payment": {
    searchIntent: "informational",
    relatedGuideSlugs: ["roofing-claims/commercial-roofing-documentation-guide"],
    relatedFaqIds: [
      "roof-commercial-system-replacement-documentation",
      "roof-commercial-damage-documentation",
    ],
    internalLinkNotes:
      "Moisture survey payment FAQ; cross-link wet insulation and system replacement FAQs.",
  },
  "roof-commercial-inspection-photos": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/commercial-roofing-documentation-guide",
      "roofing-claims/roofing-documentation-guide",
    ],
    relatedFaqIds: ["roof-commercial-damage-documentation", "roofing-carrier-documentation"],
    internalLinkNotes:
      "Commercial inspection photo FAQ; cross-link roofing documentation standard.",
  },
  "roof-commercial-system-replacement-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/commercial-roofing-documentation-guide",
      "roofing-claims/roof-repairability-documentation-guide",
      "roofing-claims/roof-matching-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-commercial-moisture-survey-payment",
      "roof-commercial-supplement-documentation",
      "roof-repairability-insurance-claim",
    ],
    internalLinkNotes:
      "Commercial system replacement FAQ; cross-link repairability and matching guides.",
  },
  "roof-hoa-responsible-damage": {
    searchIntent: "informational",
    relatedGuideSlugs: ["roofing-claims/hoa-roofing-claims-guide"],
    relatedFaqIds: [
      "roof-hoa-damage-documentation",
      "roof-hoa-insurance-covers-replacement",
      "roof-hoa-partial-building-replacement",
    ],
    internalLinkNotes:
      "Anchor FAQ for HOA responsibility; cross-link governing doc documentation FAQ.",
  },
  "roof-hoa-insurance-covers-replacement": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "roofing-claims/hoa-roofing-claims-guide",
      "roofing-claims/roof-matching-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-hoa-responsible-damage",
      "roof-hoa-partial-building-replacement",
      "roof-hoa-supplement-documentation",
    ],
    internalLinkNotes:
      "HOA insurance coverage FAQ; cross-link matching and partial replacement FAQs.",
  },
  "roof-hoa-damage-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/hoa-roofing-claims-guide",
      "roofing-claims/roofing-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-hoa-responsible-damage",
      "roof-hoa-supplement-documentation",
      "roof-commercial-damage-documentation",
    ],
    internalLinkNotes:
      "Anchor FAQ for HOA roofing guide; cross-link commercial multi-building documentation.",
  },
  "roof-hoa-partial-building-replacement": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "roofing-claims/hoa-roofing-claims-guide",
      "roofing-claims/roof-matching-documentation-guide",
      "roofing-claims/roof-repairability-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-hoa-insurance-covers-replacement",
      "roof-matching-insurance-claim",
      "roof-repairability-insurance-claim",
    ],
    internalLinkNotes:
      "Partial building replacement FAQ; cross-link matching and repairability guides.",
  },
  "roof-hoa-supplement-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/hoa-roofing-claims-guide",
      "roofing-claims/roofing-supplement-checklist",
    ],
    relatedFaqIds: [
      "roof-hoa-damage-documentation",
      "roof-commercial-supplement-documentation",
      "supplements-whats-included",
    ],
    internalLinkNotes:
      "HOA supplement documentation FAQ; cross-link roofing supplement checklist and playbook.",
  },
  "roof-multi-building-carrier-handling": {
    searchIntent: "informational",
    relatedGuideSlugs: ["roofing-claims/multi-building-roofing-claims-guide"],
    relatedFaqIds: [
      "roof-multi-building-apartment-documentation",
      "roof-multi-building-partial-replacement",
      "roof-commercial-damage-documentation",
    ],
    internalLinkNotes:
      "Anchor FAQ for multi-building carrier handling; cross-link commercial and apartment documentation.",
  },
  "roof-multi-building-partial-replacement": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "roofing-claims/multi-building-roofing-claims-guide",
      "roofing-claims/roof-matching-documentation-guide",
      "roofing-claims/roof-repairability-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-multi-building-matching",
      "roof-hoa-partial-building-replacement",
      "roof-matching-insurance-claim",
    ],
    internalLinkNotes:
      "Partial replacement across campus; cross-link HOA partial replacement and matching FAQs.",
  },
  "roof-multi-building-apartment-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/multi-building-roofing-claims-guide",
      "roofing-claims/roofing-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-multi-building-carrier-handling",
      "roof-multi-building-supplement-documentation",
      "roof-hoa-damage-documentation",
    ],
    internalLinkNotes:
      "Apartment complex documentation FAQ; cross-link HOA and supplement documentation.",
  },
  "roof-multi-building-matching": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/multi-building-roofing-claims-guide",
      "roofing-claims/roof-matching-documentation-guide",
    ],
    relatedFaqIds: [
      "roof-multi-building-partial-replacement",
      "roof-matching-insurance-claim",
      "roof-hoa-partial-building-replacement",
    ],
    internalLinkNotes:
      "Multi-building matching FAQ; cross-link matching guide and partial replacement FAQs.",
  },
  "roof-multi-building-supplement-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "roofing-claims/multi-building-roofing-claims-guide",
      "roofing-claims/roofing-supplement-checklist",
    ],
    relatedFaqIds: [
      "roof-multi-building-apartment-documentation",
      "roof-commercial-supplement-documentation",
      "roof-hoa-supplement-documentation",
      "supplements-whats-included",
    ],
    internalLinkNotes:
      "Multi-building supplement documentation FAQ; cross-link commercial and HOA supplement FAQs.",
  },

  // Fire Damage Claims
  "fire-damage-documentation-insurance": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["fire-damage/fire-damage-documentation-guide"],
    relatedFaqIds: [
      "fire-damage-photos-required",
      "fire-smoke-soot",
      "fire-hidden-damage-documentation",
      "fire-supplement-documentation-support",
    ],
    internalLinkNotes:
      "Primary cornerstone FAQ; anchor for fire damage documentation guide.",
  },
  "fire-damage-photos-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "general-claims/photo-documentation-standards-guide",
    ],
    relatedFaqIds: ["fire-damage-documentation-insurance", "fire-smoke-soot"],
    internalLinkNotes:
      "Photo requirements FAQ; cross-link photo documentation field procedure.",
  },
  "fire-smoke-damage-insurance-coverage": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "fire-damage/smoke-documentation-guide",
    ],
    relatedFaqIds: ["fire-smoke-soot", "fire-odor-deodorization"],
    internalLinkNotes:
      "Smoke coverage FAQ; cross-link smoke documentation procedure and odor FAQ.",
  },
  "fire-hidden-damage-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "fire-damage/structural-stabilization-documentation-guide",
    ],
    relatedFaqIds: ["fire-demo-rebuild", "fire-supplement-documentation-support"],
    internalLinkNotes:
      "Hidden damage FAQ; cross-link demo/rebuild and supplement documentation FAQs.",
  },
  "fire-supplement-documentation-support": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
      "fire-damage/fire-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-damage-documentation-insurance",
      "fire-hidden-damage-documentation",
      "fire-demo-rebuild",
      "help-denied-supplements",
      "smoke-damage-supplement-documentation",
      "contents-supplement-documentation",
    ],
    internalLinkNotes:
      "Evidence inventory FAQ — what files and exhibits support supplements. Pair with fire-supplement-contractor-documentation for workflow execution.",
  },
  "smoke-damage-documentation-insurance": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["fire-damage/smoke-soot-damage-documentation-guide"],
    relatedFaqIds: [
      "smoke-damage-photos-required",
      "soot-damage-insurance-coverage",
      "smoke-damage-clean-vs-replace",
      "fire-smoke-soot",
    ],
    internalLinkNotes:
      "Primary cornerstone FAQ; anchor for smoke and soot damage documentation guide.",
  },
  "soot-damage-insurance-coverage": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "fire-damage/smoke-soot-damage-documentation-guide",
      "fire-damage/smoke-documentation-guide",
    ],
    relatedFaqIds: [
      "smoke-damage-documentation-insurance",
      "fire-smoke-damage-insurance-coverage",
      "fire-smoke-soot",
    ],
    internalLinkNotes:
      "Soot coverage FAQ; cross-link smoke cornerstone guide and general smoke coverage FAQ.",
  },
  "smoke-damage-photos-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/smoke-soot-damage-documentation-guide",
      "general-claims/photo-documentation-standards-guide",
    ],
    relatedFaqIds: [
      "smoke-damage-documentation-insurance",
      "fire-damage-photos-required",
      "fire-smoke-soot",
    ],
    internalLinkNotes:
      "Smoke photo requirements FAQ; cross-link photo documentation field procedure.",
  },
  "smoke-damage-clean-vs-replace": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/smoke-soot-damage-documentation-guide",
      "fire-damage/smoke-documentation-guide",
    ],
    relatedFaqIds: [
      "smoke-damage-documentation-insurance",
      "soot-damage-insurance-coverage",
      "fire-smoke-soot",
    ],
    internalLinkNotes:
      "Clean versus replace FAQ; cross-link smoke field procedure and cornerstone guide.",
  },
  "smoke-damage-supplement-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["fire-damage/smoke-soot-damage-documentation-guide"],
    relatedFaqIds: [
      "smoke-damage-documentation-insurance",
      "fire-supplement-documentation-support",
      "contents-supplement-documentation",
      "fire-smoke-soot",
      "help-denied-supplements",
    ],
    internalLinkNotes:
      "Smoke supplement documentation FAQ; anchor for fire supplement playbook and denial recovery content.",
  },
  "smoke-damage-contractor-documentation-insurance": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/smoke-soot-damage-documentation-guide",
      "fire-damage/fire-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "smoke-damage-documentation-insurance",
      "smoke-damage-claim-photos-required",
      "smoke-damage-claims-underpaid-why",
    ],
    internalLinkNotes:
      "Contractor smoke documentation FAQ; anchor for smoke documentation mistakes blog.",
  },
  "smoke-damage-claim-photos-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/smoke-soot-damage-documentation-guide",
      "general-claims/photo-documentation-standards-guide",
    ],
    relatedFaqIds: [
      "smoke-damage-photos-required",
      "smoke-damage-contractor-documentation-insurance",
      "fire-smoke-soot",
    ],
    internalLinkNotes:
      "Smoke claim photo requirements FAQ; cross-link photo standards and mistakes blog.",
  },
  "smoke-damage-hvac-documentation-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/hvac-contamination-guide",
      "fire-damage/smoke-soot-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "smoke-damage-documentation-insurance",
      "fire-smoke-soot",
    ],
    internalLinkNotes:
      "HVAC documentation requirement FAQ for smoke claims; cross-link HVAC blog and guide.",
  },
  "smoke-damage-claims-underpaid-why": {
    searchIntent: "informational",
    relatedGuideSlugs: ["fire-damage/smoke-soot-damage-documentation-guide"],
    relatedFaqIds: [
      "fire-claims-underpaid-why",
      "smoke-damage-contractor-documentation-insurance",
      "smoke-damage-invisible-without-soot",
    ],
    internalLinkNotes:
      "Smoke underpayment FAQ; anchor for smoke documentation mistakes blog.",
  },
  "smoke-damage-invisible-without-soot": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "fire-damage/smoke-soot-damage-documentation-guide",
      "fire-damage/odor-documentation-guide",
    ],
    relatedFaqIds: [
      "smoke-damage-documentation-insurance",
      "smoke-damage-clean-vs-replace",
      "fire-odor-deodorization",
    ],
    internalLinkNotes:
      "Invisible smoke damage FAQ; cross-link odor documentation and mistakes blog.",
  },
  "contents-inventory-documentation-insurance": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/contents-inventory-documentation-guide",
      "fire-damage/pack-out-documentation-guide",
    ],
    relatedFaqIds: [
      "contents-inventory-insurance-required",
      "pack-out-documentation-insurance",
      "pack-out-chain-of-custody-documentation",
      "contents-smoke-damage-documentation",
      "contents-clean-vs-replace",
      "contents-supplement-documentation",
    ],
    internalLinkNotes:
      "Primary cornerstone FAQ; anchor for contents inventory documentation guide.",
  },
  "contents-inventory-insurance-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["fire-damage/contents-inventory-documentation-guide"],
    relatedFaqIds: [
      "contents-inventory-documentation-insurance",
      "contents-smoke-damage-documentation",
      "contents-clean-vs-replace",
    ],
    internalLinkNotes:
      "Inventory requirements FAQ; cross-link contents cornerstone guide and field procedure.",
  },
  "contents-smoke-damage-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/contents-inventory-documentation-guide",
      "fire-damage/smoke-soot-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "contents-inventory-documentation-insurance",
      "smoke-damage-documentation-insurance",
      "contents-clean-vs-replace",
    ],
    internalLinkNotes:
      "Smoke-damaged personal property FAQ; cross-link contents and smoke cornerstone guides.",
  },
  "contents-clean-vs-replace": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/contents-inventory-documentation-guide",
      "fire-damage/contents-documentation-guide",
    ],
    relatedFaqIds: [
      "contents-inventory-documentation-insurance",
      "contents-smoke-damage-documentation",
      "smoke-damage-clean-vs-replace",
    ],
    internalLinkNotes:
      "Contents clean versus replace FAQ; cross-link contents cornerstone and field procedure.",
  },
  "contents-supplement-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/contents-inventory-documentation-guide",
      "fire-damage/pack-out-documentation-guide",
    ],
    relatedFaqIds: [
      "contents-inventory-documentation-insurance",
      "pack-out-documentation-insurance",
      "pack-out-charges-documentation",
      "fire-supplement-documentation-support",
      "smoke-damage-supplement-documentation",
      "help-denied-supplements",
    ],
    internalLinkNotes:
      "Contents supplement documentation FAQ; anchor for fire supplement playbook and denial recovery content.",
  },
  "pack-out-documentation-insurance": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["fire-damage/pack-out-documentation-guide"],
    relatedFaqIds: [
      "pack-out-chain-of-custody-documentation",
      "pack-out-storage-tracking",
      "pack-out-charges-documentation",
      "pack-out-return-documentation",
      "contents-inventory-documentation-insurance",
    ],
    internalLinkNotes:
      "Primary cornerstone FAQ; anchor for pack-out documentation guide.",
  },
  "pack-out-chain-of-custody-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/pack-out-documentation-guide",
      "fire-damage/contents-documentation-guide",
    ],
    relatedFaqIds: [
      "pack-out-documentation-insurance",
      "pack-out-storage-tracking",
      "pack-out-charges-documentation",
      "contents-inventory-documentation-insurance",
    ],
    internalLinkNotes:
      "Chain of custody FAQ; cross-link pack-out cornerstone and contents field procedure.",
  },
  "pack-out-storage-tracking": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["fire-damage/pack-out-documentation-guide"],
    relatedFaqIds: [
      "pack-out-documentation-insurance",
      "pack-out-chain-of-custody-documentation",
      "pack-out-charges-documentation",
      "contents-inventory-insurance-required",
    ],
    internalLinkNotes:
      "Storage tracking FAQ; cross-link pack-out guide and supplement playbook content.",
  },
  "pack-out-charges-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/pack-out-documentation-guide",
      "fire-damage/contents-inventory-documentation-guide",
    ],
    relatedFaqIds: [
      "pack-out-documentation-insurance",
      "pack-out-chain-of-custody-documentation",
      "pack-out-storage-tracking",
      "contents-supplement-documentation",
    ],
    internalLinkNotes:
      "Pack-out charges FAQ; cross-link pack-out and contents inventory guides.",
  },
  "pack-out-return-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/pack-out-documentation-guide",
      "fire-damage/contents-documentation-guide",
    ],
    relatedFaqIds: [
      "pack-out-documentation-insurance",
      "pack-out-chain-of-custody-documentation",
      "pack-out-charges-documentation",
    ],
    internalLinkNotes:
      "Return delivery FAQ; cross-link pack-out cornerstone and contents field procedure.",
  },
  "fire-claims-underpaid-why": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "fire-damage/smoke-soot-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-damage-documentation-insurance",
      "fire-claim-documentation-required",
      "fire-supplement-contractor-documentation",
      "fire-claim-documentation-improve",
    ],
    internalLinkNotes:
      "Anchor FAQ for fire underpayment blog; cross-link cornerstone and supplement FAQs.",
  },
  "fire-claim-documentation-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "fire-damage-documentation-insurance",
      "fire-damage-photos-required",
      "fire-claims-underpaid-why",
      "fire-claim-documentation-delays",
    ],
    internalLinkNotes:
      "Carrier documentation requirements FAQ; link fire underpayment blog and cornerstone guide.",
  },
  "fire-supplement-contractor-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "fire-damage/pack-out-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-supplement-documentation-support",
      "fire-hidden-damage-documentation",
      "fire-claims-underpaid-why",
      "fire-claim-documentation-improve",
    ],
    internalLinkNotes:
      "Contractor supplement workflow FAQ; distinguish from fire-supplement-documentation-support evidence list.",
  },
  "fire-claim-documentation-delays": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "fire-damage/contents-inventory-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-claim-documentation-required",
      "fire-claim-documentation-improve",
      "pack-out-chain-of-custody-documentation",
      "fire-claims-underpaid-why",
    ],
    internalLinkNotes:
      "Documentation delay FAQ; link pack-out and contents gaps from underpayment blog.",
  },
  "fire-claim-documentation-improve": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "general-claims/documentation-standards-guide",
      "fire-damage/smoke-soot-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-damage-documentation-insurance",
      "fire-claims-underpaid-why",
      "fire-claim-documentation-delays",
      "fire-supplement-contractor-documentation",
    ],
    internalLinkNotes:
      "Improvement FAQ; link documentation standards guide and underpayment blog.",
  },
  "fire-commercial-claims-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["fire-damage/commercial-fire-claims-guide"],
    relatedFaqIds: [
      "fire-commercial-tenant-owner-responsibility",
      "fire-commercial-large-loss-scrutiny",
      "fire-damage-documentation-insurance",
      "water-commercial-claims-documentation",
    ],
    internalLinkNotes:
      "Commercial fire documentation FAQ; link commercial fire guide and commercial water indexing analogue.",
  },
  "fire-commercial-tenant-owner-responsibility": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "fire-damage/commercial-fire-claims-guide",
      "fire-damage/contents-inventory-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-commercial-claims-documentation",
      "contents-inventory-documentation-insurance",
    ],
    internalLinkNotes:
      "Tenant versus owner scope FAQ; link contents inventory guide for commercial labeling.",
  },
  "fire-commercial-large-loss-scrutiny": {
    searchIntent: "informational",
    relatedGuideSlugs: ["fire-damage/commercial-fire-claims-guide"],
    relatedFaqIds: [
      "fire-commercial-claims-documentation",
      "fire-claims-underpaid-why",
      "water-commercial-claims-scrutiny",
    ],
    internalLinkNotes:
      "Commercial fire scrutiny FAQ; cross-link underpayment blog and commercial water scrutiny analogue.",
  },
  "fire-commercial-business-interruption-role": {
    searchIntent: "informational",
    relatedGuideSlugs: ["fire-damage/commercial-fire-claims-guide"],
    relatedFaqIds: [
      "fire-commercial-claims-documentation",
      "water-business-interruption-documentation",
    ],
    internalLinkNotes:
      "Contractor BI documentation role FAQ; link commercial water BI documentation analogue.",
  },
  "fire-commercial-supplement-opportunities": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["fire-damage/commercial-fire-claims-guide"],
    relatedFaqIds: [
      "fire-commercial-claims-documentation",
      "fire-supplement-documentation-support",
      "fire-hidden-damage-documentation",
      "fire-code-upgrade-insurance-coverage",
    ],
    internalLinkNotes:
      "Commercial fire supplement FAQ; link fire supplement playbook blog and general supplement FAQ.",
  },
  "fire-code-upgrade-insurance-coverage": {
    searchIntent: "informational",
    relatedGuideSlugs: ["fire-damage/fire-code-upgrade-documentation-guide"],
    relatedFaqIds: [
      "fire-ordinance-law-coverage",
      "fire-code-upgrade-contractor-documentation",
      "fire-code-upgrade-who-determines-required",
    ],
    internalLinkNotes:
      "Primary fire code upgrade FAQ; anchor for ordinance and law cluster.",
  },
  "fire-ordinance-law-coverage": {
    searchIntent: "informational",
    relatedGuideSlugs: ["fire-damage/fire-code-upgrade-documentation-guide"],
    relatedFaqIds: [
      "fire-code-upgrade-insurance-coverage",
      "fire-code-upgrade-contractor-documentation",
      "fire-code-upgrade-supplement-denials",
    ],
    internalLinkNotes:
      "Ordinance and law explainer; policy-dependent disclaimer required.",
  },
  "fire-code-upgrade-contractor-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-code-upgrade-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "fire-code-upgrade-insurance-coverage",
      "fire-code-upgrade-who-determines-required",
      "fire-code-upgrade-supplement-denials",
    ],
    internalLinkNotes:
      "Documentation-standard FAQ for fire code upgrade evidence.",
  },
  "fire-code-upgrade-who-determines-required": {
    searchIntent: "informational",
    relatedGuideSlugs: ["fire-damage/fire-code-upgrade-documentation-guide"],
    relatedFaqIds: [
      "fire-code-upgrade-insurance-coverage",
      "fire-code-upgrade-contractor-documentation",
    ],
    internalLinkNotes:
      "AHJ authority FAQ; link supplement playbook for code strategy.",
  },
  "fire-code-upgrade-supplement-denials": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: ["fire-damage/fire-code-upgrade-documentation-guide"],
    relatedFaqIds: [
      "fire-code-upgrade-contractor-documentation",
      "fire-code-upgrade-insurance-coverage",
      "fire-supplement-documentation-support",
    ],
    internalLinkNotes:
      "Denial recovery FAQ; link supplement denial recovery blog.",
  },
  "fire-supplement-included-items": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
      "general-claims/supplement-submission-guide",
    ],
    relatedFaqIds: [
      "fire-supplement-when-to-submit",
      "fire-supplement-documentation-evidence",
      "fire-supplement-documentation-support",
    ],
    internalLinkNotes:
      "Primary playbook FAQ; anchor for fire damage supplement playbook guide package contents.",
  },
  "fire-supplement-when-to-submit": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
    ],
    relatedFaqIds: [
      "fire-supplement-included-items",
      "fire-supplement-multiple-submissions",
      "fire-supplement-contractor-documentation",
    ],
    internalLinkNotes:
      "Timing FAQ; link first 48 hours blog and phased submission guidance.",
  },
  "fire-supplement-documentation-evidence": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
      "fire-damage/fire-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-supplement-documentation-support",
      "fire-supplement-included-items",
      "fire-hidden-damage-documentation",
    ],
    internalLinkNotes:
      "Playbook documentation FAQ; complement fire-supplement-documentation-support evidence list.",
  },
  "fire-supplement-multiple-submissions": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
      "general-claims/supplement-submission-guide",
    ],
    relatedFaqIds: [
      "fire-supplement-when-to-submit",
      "fire-supplement-included-items",
      "supplements-process",
    ],
    internalLinkNotes:
      "Phased supplement FAQ; anchor for multiple submission workflow on fire files.",
  },
  "fire-supplement-commonly-missed-items": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
      "fire-damage/smoke-soot-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-claims-underpaid-why",
      "fire-supplement-included-items",
      "smoke-damage-supplement-documentation",
      "contents-supplement-documentation",
    ],
    internalLinkNotes:
      "Missed line items FAQ; link underpayment blog and specialty fire guides.",
  },
  "fire-supplement-checklist-documents": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
      "fire-damage/fire-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-supplement-included-items",
      "fire-supplement-documentation-evidence",
      "fire-supplement-documentation-support",
    ],
    internalLinkNotes:
      "Pre-submission document package FAQ; anchor for fire claim documentation checklist blog.",
  },
  "fire-claim-photo-volume": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "general-claims/photo-documentation-standards-guide",
    ],
    relatedFaqIds: [
      "fire-damage-photos-required",
      "fire-damage-documentation-insurance",
    ],
    internalLinkNotes:
      "Photo volume FAQ; complements fire-damage-photos-required with per-room minimum guidance.",
  },
  "fire-smoke-documentation-support": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/smoke-soot-damage-documentation-guide",
      "fire-damage/smoke-documentation-guide",
    ],
    relatedFaqIds: [
      "smoke-damage-documentation-insurance",
      "fire-smoke-soot",
      "smoke-damage-supplement-documentation",
    ],
    internalLinkNotes:
      "Smoke evidence categories FAQ for fire supplements; bridge to checklist blog section 2.",
  },
  "fire-hidden-damage-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "fire-damage/structural-stabilization-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-hidden-damage-documentation",
      "fire-supplement-documentation-support",
    ],
    internalLinkNotes:
      "Yes/no hidden damage rationale FAQ; complements how-to hidden damage FAQ.",
  },
  "fire-carrier-additional-documentation-why": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
      "fire-damage/fire-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-claim-documentation-delays",
      "fire-claim-documentation-improve",
      "fire-supplement-checklist-documents",
    ],
    internalLinkNotes:
      "Carrier RFI triggers FAQ; bridge to final submission checklist and delay prevention.",
  },
  "fire-supplement-denied-why": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
      "fire-damage/fire-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-supplement-denial-common-reason",
      "fire-supplement-denial-missing-documentation",
      "fire-code-upgrade-supplement-denials",
    ],
    internalLinkNotes:
      "Primary denial causes FAQ; anchor for why-fire-damage-supplements-get-denied blog.",
  },
  "fire-supplement-denial-missing-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
    ],
    relatedFaqIds: [
      "fire-supplement-checklist-documents",
      "fire-supplement-denied-why",
      "fire-supplement-denial-common-reason",
    ],
    internalLinkNotes:
      "Missing documentation denial FAQ; bridge to checklist blog.",
  },
  "fire-supplement-denial-response": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
      "general-claims/supplement-denial-recovery-guide",
    ],
    relatedFaqIds: [
      "fire-supplement-denied-why",
      "fire-supplement-denial-additional-docs",
      "help-denied-supplements",
    ],
    internalLinkNotes:
      "Denial response workflow FAQ; link denial recovery blog.",
  },
  "fire-supplement-denial-additional-docs": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-supplement-playbook-for-contractors",
    ],
    relatedFaqIds: [
      "fire-supplement-denial-response",
      "fire-supplement-multiple-submissions",
      "fire-supplement-denied-why",
    ],
    internalLinkNotes:
      "Post-denial resubmission FAQ; complements multiple submissions FAQ.",
  },
  "fire-supplement-denial-common-reason": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "fire-damage/fire-damage-documentation-guide",
      "fire-damage/smoke-soot-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "fire-claim-photo-volume",
      "fire-supplement-denied-why",
      "fire-supplement-denial-missing-documentation",
    ],
    internalLinkNotes:
      "Most common failure FAQ; photo documentation focus.",
  },
  "commercial-claims-handled": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "fire-damage/commercial-fire-claims-guide",
      "water-damage/commercial-water-loss-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-large-loss-support",
      "commercial-property-types-supported",
    ],
    internalLinkNotes:
      "Primary commercial capability FAQ; anchor for the /solutions/commercial hub page.",
  },
  "commercial-apartment-complex-claims": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "general-claims/multifamily-apartment-insurance-claims-guide",
    ],
    relatedFaqIds: [
      "commercial-apartment-insurance-claims",
      "water-apartment-complex-documentation",
      "water-multifamily-loss-documentation",
    ],
    internalLinkNotes:
      "Apartment complex commercial FAQ; cross-link multifamily guide, multifamily water documentation FAQs, and apartment blog.",
  },
  "commercial-apartment-insurance-claims": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "general-claims/multifamily-apartment-insurance-claims-guide",
      "general-claims/commercial-insurance-claims-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-apartment-complex-claims",
      "commercial-multifamily-documentation",
      "commercial-property-manager-coordination",
    ],
    internalLinkNotes:
      "Apartment insurance claims overview FAQ for contractors; anchors multifamily guide.",
  },
  "commercial-multifamily-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/multifamily-apartment-insurance-claims-guide",
      "general-claims/commercial-insurance-claims-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-unit-inspections",
      "commercial-multifamily-common-areas",
      "commercial-claim-documentation",
    ],
    internalLinkNotes:
      "Multifamily documentation standards FAQ; Building → Floor → Unit → Room indexing.",
  },
  "commercial-unit-inspections": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/multifamily-apartment-insurance-claims-guide",
      "general-claims/photo-documentation-standards-guide",
    ],
    relatedFaqIds: [
      "commercial-multifamily-documentation",
      "commercial-multifamily-common-areas",
      "commercial-property-manager-coordination",
    ],
    internalLinkNotes:
      "Unit inspection workflow FAQ for apartment and multifamily claims.",
  },
  "commercial-multifamily-common-areas": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/multifamily-apartment-insurance-claims-guide",
      "water-damage/commercial-water-loss-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-multifamily-documentation",
      "water-commercial-common-area-documentation",
      "commercial-unit-inspections",
    ],
    internalLinkNotes:
      "Common area documentation FAQ for multifamily claims; cross-link commercial water common-area FAQ.",
  },
  "commercial-property-manager-coordination": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/multifamily-apartment-insurance-claims-guide",
      "general-claims/commercial-insurance-claims-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-apartment-insurance-claims",
      "commercial-multifamily-documentation",
      "commercial-unit-inspections",
    ],
    internalLinkNotes:
      "Property manager coordination FAQ for apartment and multifamily insurance claims.",
  },
  "commercial-hoa-insurance-claims": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "general-claims/hoa-insurance-claims-guide",
      "general-claims/commercial-insurance-claims-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-hoa-association-documentation",
      "commercial-hoa-master-policies",
      "commercial-hoa-claim-coordination",
    ],
    internalLinkNotes:
      "HOA insurance claims overview FAQ for contractors; anchors HOA Insurance Claims Guide.",
  },
  "commercial-hoa-association-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/hoa-insurance-claims-guide",
      "general-claims/commercial-insurance-claims-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-hoa-insurance-claims",
      "commercial-hoa-common-elements",
      "commercial-hoa-claim-coordination",
    ],
    internalLinkNotes:
      "Association documentation standards FAQ; Community → Building → Common Element / Unit indexing.",
  },
  "commercial-hoa-master-policies": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "general-claims/hoa-insurance-claims-guide",
    ],
    relatedFaqIds: [
      "commercial-hoa-common-elements",
      "commercial-hoa-insurance-claims",
      "commercial-hoa-association-documentation",
    ],
    internalLinkNotes:
      "Master vs homeowner policy FAQ for HOA and condominium association claims.",
  },
  "commercial-hoa-common-elements": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/hoa-insurance-claims-guide",
      "roofing-claims/hoa-roofing-claims-guide",
    ],
    relatedFaqIds: [
      "commercial-hoa-master-policies",
      "commercial-hoa-association-documentation",
      "commercial-multifamily-common-areas",
    ],
    internalLinkNotes:
      "Common elements documentation FAQ for HOA claims; cross-link HOA roofing specialty.",
  },
  "commercial-hoa-claim-coordination": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/hoa-insurance-claims-guide",
      "general-claims/commercial-insurance-claims-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-hoa-insurance-claims",
      "commercial-hoa-association-documentation",
      "commercial-property-manager-coordination",
    ],
    internalLinkNotes:
      "Board and manager coordination FAQ for HOA and community association claims.",
  },
  "commercial-warehouse-insurance-claims": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "general-claims/industrial-warehouse-insurance-claims-guide",
      "general-claims/commercial-insurance-claims-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-industrial-property-documentation",
      "commercial-warehouse-inspections",
      "commercial-industrial-restoration-claims",
    ],
    internalLinkNotes:
      "Warehouse insurance claims overview FAQ for contractors; anchors Industrial & Warehouse Insurance Claims Guide.",
  },
  "commercial-industrial-property-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/industrial-warehouse-insurance-claims-guide",
      "general-claims/commercial-insurance-claims-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-warehouse-insurance-claims",
      "commercial-equipment-documentation",
      "commercial-industrial-restoration-claims",
    ],
    internalLinkNotes:
      "Industrial property documentation standards FAQ; Facility → Building → Zone / System / Equipment indexing.",
  },
  "commercial-equipment-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/industrial-warehouse-insurance-claims-guide",
    ],
    relatedFaqIds: [
      "commercial-industrial-property-documentation",
      "commercial-warehouse-insurance-claims",
      "commercial-warehouse-inspections",
    ],
    internalLinkNotes:
      "Equipment and machinery documentation FAQ for industrial and warehouse insurance claims.",
  },
  "commercial-warehouse-inspections": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/industrial-warehouse-insurance-claims-guide",
      "general-claims/photo-documentation-standards-guide",
    ],
    relatedFaqIds: [
      "commercial-warehouse-insurance-claims",
      "commercial-industrial-property-documentation",
      "commercial-equipment-documentation",
    ],
    internalLinkNotes:
      "Warehouse inspection workflow FAQ; zone, racking, dock, and systems sequencing.",
  },
  "commercial-industrial-restoration-claims": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "general-claims/industrial-warehouse-insurance-claims-guide",
      "general-claims/commercial-insurance-claims-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-warehouse-insurance-claims",
      "commercial-industrial-property-documentation",
      "commercial-equipment-documentation",
    ],
    internalLinkNotes:
      "Industrial restoration claims FAQ; contrasts industrial footprints with office/retail commercial patterns.",
  },
  "commercial-national-restoration-programs": {
    searchIntent: "informational",
    relatedFaqIds: [
      "commercial-claims-handled",
      "commercial-large-loss-support",
    ],
    internalLinkNotes:
      "National restoration program FAQ; reinforce nationwide commercial support on /solutions/commercial.",
  },
  "commercial-large-loss-support": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "water-damage/commercial-water-loss-documentation-guide",
    ],
    relatedFaqIds: [
      "water-large-loss-qualifies",
      "commercial-claims-handled",
    ],
    internalLinkNotes:
      "Large-loss commercial FAQ; link large-loss water documentation guide and blog.",
  },
  "commercial-property-types-supported": {
    searchIntent: "informational",
    relatedFaqIds: [
      "commercial-claims-handled",
      "commercial-apartment-complex-claims",
    ],
    internalLinkNotes:
      "Commercial property types FAQ; enumerates supported property segments for the commercial hub.",
  },
  "mold-remediation-docs": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-remediation-documentation-guide",
      "mold/mold-damage-documentation-guide",
      "mold/mold-supplement-playbook-for-contractors",
    ],
    relatedFaqIds: [
      "mold-remediation-insurance-documentation",
      "mold-containment-equipment",
      "mold-testing",
    ],
    internalLinkNotes:
      "Base mold FAQ; bridge to remediation documentation guide and solutions page.",
  },
  "mold-testing": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/indoor-air-quality-testing-documentation-guide",
      "mold/post-remediation-verification-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-iaq-documentation",
      "mold-iaq-clearance-testing",
      "mold-prv-clearance-documentation-required",
    ],
    internalLinkNotes:
      "Base mold testing FAQ; cross-link IAQ and PRV clearance documentation.",
  },
  "mold-carrier-pushback": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "mold/mold-supplement-playbook-for-contractors",
      "mold/mold-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-water-relationship",
      "mold-claims-underpaid-why",
      "mold-insurance-documentation-required",
    ],
    internalLinkNotes:
      "Base mold carrier pushback FAQ; link playbook and causation documentation.",
  },
  "mold-containment-equipment": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "mold/mold-remediation-documentation-guide",
      "mold/mold-supplement-playbook-for-contractors",
    ],
    relatedFaqIds: [
      "mold-remediation-containment-documentation",
      "mold-supplement-commonly-missed-items",
      "mold-remediation-docs",
    ],
    internalLinkNotes:
      "Base mold containment/equipment FAQ; link remediation production evidence.",
  },
  "mold-water-relationship": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "water-damage/category-3-water-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-carrier-pushback",
      "mold-damage-documentation-insurance",
      "mold-moisture-readings-support",
    ],
    internalLinkNotes:
      "Base mold-water relationship FAQ; cross-link Category 3 and damage documentation.",
  },
  "mold-damage-documentation-insurance": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["mold/mold-damage-documentation-guide"],
    relatedFaqIds: [
      "mold-claim-photos-required",
      "mold-moisture-readings-support",
      "mold-hidden-damage-documentation",
      "mold-insurance-documentation-required",
    ],
    internalLinkNotes:
      "Primary cornerstone FAQ; anchor for mold damage documentation guide.",
  },
  "mold-claim-photos-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "general-claims/photo-documentation-standards-guide",
    ],
    relatedFaqIds: ["mold-damage-documentation-insurance", "mold-hidden-damage-documentation"],
    internalLinkNotes:
      "Photo requirements FAQ; cross-link photo documentation standards guide.",
  },
  "mold-moisture-readings-support": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "water-damage/moisture-mapping-guide",
    ],
    relatedFaqIds: ["mold-damage-documentation-insurance", "mold-water-relationship"],
    internalLinkNotes:
      "Moisture readings FAQ; cross-link moisture mapping procedure and water-mold relationship FAQ.",
  },
  "mold-insurance-documentation-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "mold-damage-documentation-insurance",
      "mold-claim-photos-required",
      "mold-carrier-pushback",
    ],
    internalLinkNotes:
      "Carrier documentation requirements FAQ; link cornerstone guide and documentation standards.",
  },
  "mold-hidden-damage-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["mold/mold-damage-documentation-guide"],
    relatedFaqIds: [
      "mold-damage-documentation-insurance",
      "mold-claim-photos-required",
      "mold-remediation-docs",
      "mold-remediation-work-documentation",
    ],
    internalLinkNotes:
      "Hidden mold FAQ; cross-link cornerstone guide and remediation documentation FAQ.",
  },
  "mold-remediation-work-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["mold/mold-remediation-documentation-guide"],
    relatedFaqIds: [
      "mold-remediation-photos-required",
      "mold-remediation-moisture-readings-support",
      "mold-remediation-insurance-documentation",
      "mold-remediation-containment-documentation",
    ],
    internalLinkNotes:
      "Primary cornerstone FAQ; anchor for mold remediation documentation guide.",
  },
  "mold-remediation-photos-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-remediation-documentation-guide",
      "general-claims/photo-documentation-standards-guide",
    ],
    relatedFaqIds: [
      "mold-remediation-work-documentation",
      "mold-remediation-containment-documentation",
    ],
    internalLinkNotes:
      "Remediation photo requirements FAQ; cross-link photo documentation standards guide.",
  },
  "mold-remediation-moisture-readings-support": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-remediation-documentation-guide",
      "water-damage/daily-monitoring-guide",
    ],
    relatedFaqIds: [
      "mold-remediation-work-documentation",
      "mold-moisture-readings-support",
    ],
    internalLinkNotes:
      "Remediation moisture readings FAQ; cross-link daily monitoring procedure and mold damage moisture FAQ.",
  },
  "mold-remediation-insurance-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-remediation-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "mold-remediation-work-documentation",
      "mold-remediation-photos-required",
      "mold-remediation-docs",
    ],
    internalLinkNotes:
      "Carrier documentation requirements FAQ for remediation; link cornerstone guide and documentation standards.",
  },
  "mold-remediation-containment-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["mold/mold-remediation-documentation-guide"],
    relatedFaqIds: [
      "mold-remediation-work-documentation",
      "mold-remediation-photos-required",
      "mold-containment-equipment",
    ],
    internalLinkNotes:
      "Containment documentation FAQ; cross-link remediation guide and containment equipment FAQ.",
  },
  "mold-prv-definition": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/post-remediation-verification-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-prv-documentation-insurance",
      "mold-prv-closeout-package",
      "mold-prv-clearance-documentation-required",
    ],
    internalLinkNotes:
      "PRV definition FAQ; anchor for post-remediation verification documentation guide cluster.",
  },
  "mold-prv-documentation-insurance": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/post-remediation-verification-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "mold-prv-definition",
      "mold-prv-closeout-package",
      "mold-prv-moisture-readings-required",
      "mold-prv-clearance-documentation-required",
    ],
    internalLinkNotes:
      "Primary cornerstone FAQ; anchor for post-remediation verification documentation guide.",
  },
  "mold-prv-moisture-readings-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/post-remediation-verification-documentation-guide",
      "water-damage/daily-monitoring-guide",
      "water-damage/dry-log-collection-guide",
    ],
    relatedFaqIds: [
      "mold-prv-documentation-insurance",
      "mold-prv-closeout-package",
      "mold-moisture-readings-support",
    ],
    internalLinkNotes:
      "PRV moisture readings FAQ; cross-link daily monitoring and dry log guides.",
  },
  "mold-prv-closeout-package": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/post-remediation-verification-documentation-guide",
      "mold/mold-damage-documentation-guide",
      "mold/mold-remediation-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-prv-documentation-insurance",
      "mold-prv-definition",
      "mold-prv-clearance-documentation-required",
    ],
    internalLinkNotes:
      "Mold closeout package FAQ; cross-link full mold documentation lifecycle guides.",
  },
  "mold-prv-clearance-documentation-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/post-remediation-verification-documentation-guide",
      "mold/mold-remediation-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-prv-documentation-insurance",
      "mold-prv-definition",
      "mold-prv-closeout-package",
    ],
    internalLinkNotes:
      "Clearance documentation FAQ; cross-link PRV and remediation guides.",
  },
  "mold-protocol-definition": {
    searchIntent: "informational",
    relatedGuideSlugs: ["mold/mold-protocol-documentation-guide"],
    relatedFaqIds: [
      "mold-protocol-follow-exactly",
      "mold-protocol-supporting-documentation",
      "mold-protocol-field-conditions-differ",
    ],
    internalLinkNotes:
      "Protocol definition FAQ; anchor for mold protocol documentation guide cluster.",
  },
  "mold-protocol-follow-exactly": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-protocol-documentation-guide",
      "mold/mold-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-protocol-definition",
      "mold-protocol-change-documentation",
      "mold-protocol-field-conditions-differ",
    ],
    internalLinkNotes:
      "Protocol compliance FAQ; cross-link change documentation and field condition FAQs.",
  },
  "mold-protocol-change-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-protocol-documentation-guide",
      "mold/mold-remediation-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "mold-protocol-definition",
      "mold-protocol-follow-exactly",
      "mold-protocol-supporting-documentation",
    ],
    internalLinkNotes:
      "Protocol change documentation FAQ; cross-link remediation and documentation standards.",
  },
  "mold-protocol-supporting-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-protocol-documentation-guide",
      "mold/post-remediation-verification-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "mold-protocol-definition",
      "mold-protocol-change-documentation",
      "mold-prv-closeout-package",
    ],
    internalLinkNotes:
      "Primary cornerstone FAQ; supporting documentation package for mold protocols.",
  },
  "mold-protocol-field-conditions-differ": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-protocol-documentation-guide",
      "mold/mold-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-protocol-definition",
      "mold-protocol-change-documentation",
      "mold-hidden-damage-documentation",
    ],
    internalLinkNotes:
      "Field conditions vs protocol FAQ; cross-link hidden mold and change documentation FAQs.",
  },
  "mold-iaq-documentation": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/indoor-air-quality-testing-documentation-guide",
      "mold/mold-protocol-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-iaq-air-sampling",
      "mold-iaq-clearance-testing",
      "mold-iaq-documentation-requirements",
    ],
    internalLinkNotes:
      "IAQ documentation definition FAQ; anchor for indoor air quality testing documentation guide cluster.",
  },
  "mold-iaq-air-sampling": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/indoor-air-quality-testing-documentation-guide",
      "mold/mold-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-iaq-documentation",
      "mold-iaq-lab-reports",
      "mold-iaq-documentation-requirements",
    ],
    internalLinkNotes:
      "Air sampling documentation FAQ; cross-link IAQ package and lab report FAQs.",
  },
  "mold-iaq-clearance-testing": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/indoor-air-quality-testing-documentation-guide",
      "mold/post-remediation-verification-documentation-guide",
      "mold/mold-remediation-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-iaq-documentation",
      "mold-iaq-lab-reports",
      "mold-prv-clearance-documentation-required",
    ],
    internalLinkNotes:
      "Clearance testing documentation FAQ; cross-link PRV clearance and IAQ lab report FAQs.",
  },
  "mold-iaq-lab-reports": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/indoor-air-quality-testing-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "mold-iaq-documentation",
      "mold-iaq-air-sampling",
      "mold-iaq-documentation-requirements",
    ],
    internalLinkNotes:
      "Laboratory reports organization FAQ; cross-link IAQ documentation requirements.",
  },
  "mold-iaq-documentation-requirements": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/indoor-air-quality-testing-documentation-guide",
      "mold/mold-supplement-playbook-for-contractors",
    ],
    relatedFaqIds: [
      "mold-iaq-documentation",
      "mold-iaq-clearance-testing",
      "mold-iaq-lab-reports",
    ],
    internalLinkNotes:
      "Primary cornerstone FAQ; what documentation is typically required for IAQ and mold testing.",
  },
  "mold-commercial-claims-vs-residential": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/commercial-mold-claims-guide",
      "mold/mold-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-commercial-documentation-organization",
      "mold-commercial-multi-unit-documentation",
      "water-commercial-claims-documentation",
    ],
    internalLinkNotes:
      "Commercial vs residential mold FAQ; anchor for commercial mold claims guide.",
  },
  "mold-commercial-documentation-organization": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/commercial-mold-claims-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "mold-commercial-claims-vs-residential",
      "mold-commercial-multi-unit-documentation",
      "mold-commercial-insurance-documentation",
    ],
    internalLinkNotes:
      "Commercial mold documentation organization FAQ; cross-link multi-unit and insurance documentation FAQs.",
  },
  "mold-commercial-multi-unit-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/commercial-mold-claims-guide",
      "mold/mold-remediation-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-commercial-documentation-organization",
      "mold-commercial-phased-remediation",
      "water-apartment-loss-documentation",
    ],
    internalLinkNotes:
      "Multi-unit commercial mold documentation FAQ; cross-link apartment water documentation analogue.",
  },
  "mold-commercial-insurance-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/commercial-mold-claims-guide",
      "mold/mold-protocol-documentation-guide",
      "mold/post-remediation-verification-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-commercial-claims-vs-residential",
      "mold-commercial-phased-remediation",
      "mold-insurance-documentation-required",
    ],
    internalLinkNotes:
      "What documentation supports commercial mold insurance claims FAQ.",
  },
  "mold-commercial-phased-remediation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/commercial-mold-claims-guide",
      "mold/mold-remediation-documentation-guide",
      "mold/post-remediation-verification-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-commercial-multi-unit-documentation",
      "mold-commercial-insurance-documentation",
      "mold-remediation-work-documentation",
    ],
    internalLinkNotes:
      "Phased commercial mold remediation documentation FAQ; cross-link remediation and PRV guides.",
  },
  "mold-claims-underpaid-why": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "mold/mold-remediation-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-damage-documentation-insurance",
      "mold-documentation-affects-claim-outcomes",
      "mold-documentation-improves-settlement",
    ],
    internalLinkNotes:
      "Blog bridge FAQ; anchor for why mold insurance claims get underpaid article.",
  },
  "mold-documentation-affects-claim-outcomes": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "mold-claims-underpaid-why",
      "mold-insurance-documentation-required",
      "mold-documentation-improves-settlement",
    ],
    internalLinkNotes:
      "Blog bridge FAQ; documentation quality and mold claim outcomes.",
  },
  "mold-moisture-readings-settlement-support": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "water-damage/moisture-mapping-guide",
    ],
    relatedFaqIds: [
      "mold-moisture-readings-support",
      "mold-claims-underpaid-why",
      "mold-hidden-damage-affects-payment",
    ],
    internalLinkNotes:
      "Blog bridge FAQ; moisture readings and mold settlement support.",
  },
  "mold-hidden-damage-affects-payment": {
    searchIntent: "informational",
    relatedGuideSlugs: ["mold/mold-damage-documentation-guide"],
    relatedFaqIds: [
      "mold-hidden-damage-documentation",
      "mold-claims-underpaid-why",
      "mold-moisture-readings-settlement-support",
    ],
    internalLinkNotes:
      "Blog bridge FAQ; hidden mold and claim payment impact.",
  },
  "mold-documentation-improves-settlement": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "mold/mold-remediation-documentation-guide",
      "mold/post-remediation-verification-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-claims-underpaid-why",
      "mold-documentation-affects-claim-outcomes",
      "mold-insurance-documentation-required",
    ],
    internalLinkNotes:
      "Blog bridge FAQ; documentation that improves mold insurance settlements.",
  },
  "mold-common-documentation-mistakes": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "mold/mold-remediation-documentation-guide",
      "mold/post-remediation-verification-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-poor-documentation-reduces-payment",
      "mold-documentation-package-contents",
      "mold-claim-documentation-organization",
    ],
    internalLinkNotes:
      "Mold documentation mistakes blog bridge FAQ; common contractor documentation errors.",
  },
  "mold-poor-documentation-reduces-payment": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "mold/mold-remediation-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-common-documentation-mistakes",
      "mold-claims-underpaid-why",
      "mold-documentation-affects-claim-outcomes",
    ],
    internalLinkNotes:
      "Mold documentation mistakes blog bridge FAQ; payment impact of poor documentation.",
  },
  "mold-moisture-readings-why-important": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "water-damage/moisture-mapping-guide",
    ],
    relatedFaqIds: [
      "mold-moisture-readings-settlement-support",
      "mold-moisture-readings-support",
      "mold-common-documentation-mistakes",
    ],
    internalLinkNotes:
      "Mold documentation mistakes blog bridge FAQ; why moisture readings matter on mold claims.",
  },
  "mold-claim-documentation-organization": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/commercial-mold-claims-guide",
      "mold/mold-damage-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "mold-documentation-package-contents",
      "mold-commercial-documentation-organization",
      "mold-common-documentation-mistakes",
    ],
    internalLinkNotes:
      "Mold documentation mistakes blog bridge FAQ; organizing mold claim documentation.",
  },
  "mold-documentation-package-contents": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "mold/mold-remediation-documentation-guide",
      "mold/post-remediation-verification-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-claim-documentation-organization",
      "mold-prv-closeout-package",
      "mold-common-documentation-mistakes",
    ],
    internalLinkNotes:
      "Mold documentation mistakes blog bridge FAQ; what belongs in a mold documentation package.",
  },
  "mold-supplement-checklist-documents": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-supplement-playbook-for-contractors",
      "mold/mold-damage-documentation-guide",
      "mold/mold-remediation-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-supplement-included-items",
      "mold-documentation-package-contents",
      "mold-claim-photo-volume",
    ],
    internalLinkNotes:
      "Pre-submission document package FAQ; anchor for mold claim documentation checklist blog.",
  },
  "mold-claim-photo-volume": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "general-claims/photo-documentation-standards-guide",
    ],
    relatedFaqIds: [
      "mold-claim-photos-required",
      "mold-supplement-checklist-documents",
      "mold-damage-documentation-insurance",
    ],
    internalLinkNotes:
      "Photo volume FAQ; complements mold-claim-photos-required with per-room minimum guidance.",
  },
  "mold-moisture-containment-documentation-support": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "mold/mold-remediation-documentation-guide",
      "mold/mold-protocol-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-moisture-readings-support",
      "mold-remediation-containment-documentation",
      "mold-supplement-checklist-documents",
    ],
    internalLinkNotes:
      "Moisture mapping and containment FAQ; checklist bridge for map and barrier exhibits.",
  },
  "mold-daily-progress-documentation-required": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-remediation-documentation-guide",
      "mold/post-remediation-verification-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-remediation-work-documentation",
      "mold-supplement-checklist-documents",
      "mold-carrier-additional-documentation-why",
    ],
    internalLinkNotes:
      "Daily drying and remediation progress FAQ; checklist bridge for production logs.",
  },
  "mold-carrier-additional-documentation-why": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "mold/mold-supplement-playbook-for-contractors",
      "mold/mold-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-supplement-checklist-documents",
      "mold-common-documentation-mistakes",
      "mold-documentation-package-contents",
    ],
    internalLinkNotes:
      "Carrier RFI FAQ; explains incomplete mold packages that trigger additional documentation requests.",
  },
  "mold-supplement-denied-why": {
    searchIntent: "billing-dispute",
    relatedGuideSlugs: [
      "mold/mold-supplement-playbook-for-contractors",
      "mold/mold-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-supplement-denial-documentation-gaps",
      "mold-supplement-denial-carrier-objections",
      "mold-supplement-denial-estimate-support",
    ],
    internalLinkNotes:
      "Primary denial causes FAQ; anchor for why-mold-supplements-get-denied blog.",
  },
  "mold-supplement-denial-documentation-gaps": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-damage-documentation-guide",
      "mold/mold-supplement-playbook-for-contractors",
    ],
    relatedFaqIds: [
      "mold-supplement-checklist-documents",
      "mold-supplement-denied-why",
      "mold-common-documentation-mistakes",
    ],
    internalLinkNotes:
      "Documentation gaps denial FAQ; bridge to checklist and denial blog.",
  },
  "mold-supplement-denial-carrier-objections": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "mold/mold-supplement-playbook-for-contractors",
      "general-claims/supplement-submission-guide",
    ],
    relatedFaqIds: [
      "mold-supplement-denied-why",
      "mold-carrier-additional-documentation-why",
      "mold-supplement-denial-reinspection",
    ],
    internalLinkNotes:
      "Carrier objection response FAQ; professional RFI and resubmission guidance.",
  },
  "mold-supplement-denial-estimate-support": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-supplement-playbook-for-contractors",
    ],
    relatedFaqIds: [
      "mold-supplement-included-items",
      "mold-supplement-denied-why",
      "mold-supplement-documentation-evidence",
    ],
    internalLinkNotes:
      "Estimate organization FAQ; phase/room structure and cover-letter indexing.",
  },
  "mold-supplement-denial-reinspection": {
    searchIntent: "carrier-review",
    relatedGuideSlugs: [
      "mold/mold-supplement-playbook-for-contractors",
      "mold/mold-damage-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-supplement-denied-why",
      "mold-supplement-denial-carrier-objections",
      "mold-supplement-checklist-documents",
    ],
    internalLinkNotes:
      "Reinspection timing FAQ; when site verification helps vs documentation-only resubmission.",
  },
  "mold-supplement-included-items": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-supplement-playbook-for-contractors",
      "general-claims/supplement-submission-guide",
    ],
    relatedFaqIds: [
      "mold-supplement-when-to-submit",
      "mold-supplement-documentation-evidence",
      "mold-documentation-package-contents",
    ],
    internalLinkNotes:
      "Primary playbook FAQ; anchor for mold supplement playbook guide package contents.",
  },
  "mold-supplement-when-to-submit": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: ["mold/mold-supplement-playbook-for-contractors"],
    relatedFaqIds: [
      "mold-supplement-included-items",
      "mold-supplement-multiple-submissions",
      "mold-claims-underpaid-why",
    ],
    internalLinkNotes:
      "Timing FAQ; link first 48 hours blog and phased submission guidance.",
  },
  "mold-supplement-documentation-evidence": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-supplement-playbook-for-contractors",
      "mold/mold-damage-documentation-guide",
      "mold/mold-remediation-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-supplement-included-items",
      "mold-remediation-containment-documentation",
      "mold-prv-documentation-insurance",
    ],
    internalLinkNotes:
      "Playbook documentation FAQ; complement mold remediation and PRV evidence lists.",
  },
  "mold-supplement-multiple-submissions": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-supplement-playbook-for-contractors",
      "general-claims/supplement-submission-guide",
    ],
    relatedFaqIds: [
      "mold-supplement-when-to-submit",
      "mold-supplement-included-items",
      "mold-commercial-phased-remediation",
    ],
    internalLinkNotes:
      "Phased supplement FAQ; anchor for multiple submission workflow on mold files.",
  },
  "mold-supplement-commonly-missed-items": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "mold/mold-supplement-playbook-for-contractors",
      "mold/mold-remediation-documentation-guide",
    ],
    relatedFaqIds: [
      "mold-claims-underpaid-why",
      "mold-supplement-included-items",
      "mold-containment-equipment",
      "mold-common-documentation-mistakes",
    ],
    internalLinkNotes:
      "Missed line items FAQ; link underpayment blog and mold documentation mistakes.",
  },
  "commercial-claim-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/commercial-insurance-claims-documentation-guide",
      "general-claims/multifamily-apartment-insurance-claims-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "commercial-large-loss-project-documentation",
      "commercial-multi-building-documentation",
      "commercial-insurance-documentation-requirements",
      "commercial-multifamily-documentation",
    ],
    internalLinkNotes:
      "Cornerstone commercial claim documentation FAQ; anchor for commercial documentation guide.",
  },
  "commercial-large-loss-project-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/commercial-insurance-claims-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-claim-documentation",
      "commercial-multi-building-documentation",
      "commercial-large-loss-support",
    ],
    internalLinkNotes:
      "Large-loss commercial project documentation FAQ; cross-link multi-building and service FAQs.",
  },
  "commercial-multi-building-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/commercial-insurance-claims-documentation-guide",
      "roofing-claims/multi-building-roofing-claims-guide",
    ],
    relatedFaqIds: [
      "commercial-claim-documentation",
      "commercial-large-loss-project-documentation",
      "commercial-tenant-improvements-documentation",
    ],
    internalLinkNotes:
      "Multi-building commercial documentation FAQ; cross-link multi-building roofing guide.",
  },
  "commercial-tenant-improvements-documentation": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/commercial-insurance-claims-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-claim-documentation",
      "commercial-insurance-documentation-requirements",
      "commercial-multi-building-documentation",
    ],
    internalLinkNotes:
      "Tenant improvements / leasehold documentation FAQ for commercial claims.",
  },
  "commercial-insurance-documentation-requirements": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/commercial-insurance-claims-documentation-guide",
      "water-damage/commercial-water-loss-documentation-guide",
      "fire-damage/commercial-fire-claims-guide",
    ],
    relatedFaqIds: [
      "commercial-claim-documentation",
      "commercial-tenant-improvements-documentation",
      "commercial-large-loss-project-documentation",
      "commercial-property-claims-underpaid",
    ],
    internalLinkNotes:
      "Commercial insurance documentation requirements FAQ; links peril commercial guides.",
  },
  "commercial-property-claims-underpaid": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "general-claims/commercial-insurance-claims-documentation-guide",
      "general-claims/multifamily-apartment-insurance-claims-guide",
    ],
    relatedFaqIds: [
      "commercial-documentation-gaps-underpayment",
      "commercial-estimate-accuracy",
      "commercial-code-ordinance-upgrades",
      "commercial-settlement-documentation",
    ],
    internalLinkNotes:
      "Blog bridge FAQ; anchors Why Commercial Insurance Claims Get Underpaid article.",
  },
  "commercial-documentation-gaps-underpayment": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/commercial-insurance-claims-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "commercial-property-claims-underpaid",
      "commercial-claim-documentation",
      "commercial-settlement-documentation",
    ],
    internalLinkNotes:
      "How documentation gaps drive commercial underpayment; pairs with commercial docs guide.",
  },
  "commercial-estimate-accuracy": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/commercial-insurance-claims-documentation-guide",
      "roofing-claims/commercial-roofing-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-property-claims-underpaid",
      "commercial-settlement-documentation",
      "commercial-claim-documentation",
    ],
    internalLinkNotes:
      "Commercial estimate / quantity accuracy FAQ; supports underpayment article quantity section.",
  },
  "commercial-code-ordinance-upgrades": {
    searchIntent: "documentation-standard",
    relatedGuideSlugs: [
      "general-claims/commercial-insurance-claims-documentation-guide",
      "fire-damage/fire-code-upgrade-documentation-guide",
      "roofing-claims/code-upgrade-documentation-guide",
    ],
    relatedFaqIds: [
      "commercial-property-claims-underpaid",
      "commercial-settlement-documentation",
      "commercial-insurance-documentation-requirements",
    ],
    internalLinkNotes:
      "Commercial code and ordinance documentation FAQ; cross-links fire and roofing code guides.",
  },
  "commercial-settlement-documentation": {
    searchIntent: "informational",
    relatedGuideSlugs: [
      "general-claims/commercial-insurance-claims-documentation-guide",
      "general-claims/documentation-standards-guide",
    ],
    relatedFaqIds: [
      "commercial-property-claims-underpaid",
      "commercial-documentation-gaps-underpayment",
      "commercial-estimate-accuracy",
      "commercial-claim-documentation",
    ],
    internalLinkNotes:
      "How better documentation improves commercial settlements; CTA to commercial docs guide.",
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
