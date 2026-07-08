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
