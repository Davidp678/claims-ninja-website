import { getBlogPostBySlug } from "@/lib/blog-registry";
import { getGuideBySlugOnly } from "@/lib/guide-registry";
import type { Guide } from "@/lib/guide-types";

export type BlogGuideCompanionEntry = {
  intro?: string;
  guideSlugs: readonly string[];
};

/** Curated blog → guide companions for "Put This Into Practice" sections. */
export const BLOG_GUIDE_COMPANIONS = {
  "first-48-hours-after-carrier-estimate": {
    intro:
      "You've learned what to prioritize in the first 48 hours after a carrier estimate. Now run the intake checklist your office and field teams can execute on every file.",
    guideSlugs: ["first-48-hours-checklist"],
  },
  "claim-documentation-approval-rates": {
    intro:
      "You've learned why documentation drives approval rates. Now apply the standards and audit workflows that keep claim files carrier-ready.",
    guideSlugs: [
      "documentation-standards-guide",
      "claim-file-audit-guide",
      "photo-documentation-standards-guide",
    ],
  },
  "insurance-supplementing-guide-contractors": {
    intro:
      "You've learned how supplementing works strategically. Now follow the submission workflow that packages evidence adjusters can approve on first review.",
    guideSlugs: ["supplement-submission-guide"],
  },
  "why-carrier-estimates-miss-line-items": {
    intro:
      "You've learned why carrier estimates miss scope. Now use the estimate review workflow to catch gaps before production commits to under-scoped work.",
    guideSlugs: ["carrier-estimate-review-guide"],
  },
  "op-on-insurance-claims": {
    intro:
      "You've learned when O&P applies on insurance claims. Now document coordination and trade count the way desk reviewers expect before submission.",
    guideSlugs: ["op-qualification-guide"],
  },
  "roofing-supplement-playbook": {
    intro:
      "You've learned the roofing supplement strategy. Now execute the checklists and documentation standards that turn scope gaps into paid line items — including multi-building campuses, apartment complexes, and community association files.",
    guideSlugs: [
      "multi-building-roofing-claims-guide",
      "roofing-supplement-checklist",
      "roofing-documentation-guide",
      "commercial-roofing-documentation-guide",
    ],
  },
  "what-is-a-roof-supplement": {
    intro:
      "You've learned what a roof supplement is and when it applies. Now follow the field documentation procedures that support supplement approvals — including multi-building and campus roofing files.",
    guideSlugs: [
      "roofing-documentation-guide",
      "roof-measurement-documentation-guide",
      "roof-matching-documentation-guide",
      "multi-building-roofing-claims-guide",
    ],
  },
  "hail-damage-roof-claims-documentation-supplement": {
    intro:
      "You've learned how to document hail damage on roofing claims. Now execute the field documentation standard that turns impact evidence into supplement-ready files — including multi-building properties.",
    guideSlugs: [
      "roof-hail-damage-documentation-guide",
      "roofing-supplement-checklist",
      "roof-reinspection-guide",
      "multi-building-roofing-claims-guide",
    ],
  },
  "wind-damage-roof-claims-what-carriers-miss": {
    intro:
      "You've learned what carriers miss on wind damage roof claims. Now follow the documentation procedures that capture creases, seal failures, and accessory scope — including multi-building campuses.",
    guideSlugs: [
      "roof-wind-damage-documentation-guide",
      "multi-building-roofing-claims-guide",
      "roofing-supplement-checklist",
      "roof-reinspection-guide",
    ],
  },
  "roof-matching-vs-repairability-when-to-supplement": {
    intro:
      "You've learned when matching and repairability disputes apply. Now execute the documentation standards that support partial-replacement supplement arguments — including multi-building properties and HOA communities.",
    guideSlugs: [
      "roof-matching-documentation-guide",
      "roof-repairability-documentation-guide",
      "roof-reinspection-guide",
      "multi-building-roofing-claims-guide",
    ],
  },
  "water-damage-mitigation-supplement-playbook": {
    intro:
      "You've learned the mitigation supplement playbook. Now run the intake and documentation procedures that protect drying scope from day one.",
    guideSlugs: [
      "mitigation-intake-checklist",
      "dry-log-collection-guide",
      "moisture-mapping-guide",
      "contents-manipulation-documentation-guide",
    ],
  },
  "dry-log-documentation-guide-insurance-claims": {
    intro:
      "You've learned why dry logs matter on insurance claims. Now follow the field procedure for daily collection and the monitoring checklist that supports billed drying days.",
    guideSlugs: ["dry-log-collection-guide", "daily-monitoring-guide"],
  },
  "moisture-mapping-best-practices-insurance-claims": {
    intro:
      "You've learned moisture mapping best practices. Now execute the field procedure that ties reading points to rooms, photos, and carrier sketches.",
    guideSlugs: ["moisture-mapping-guide"],
  },
  "moisture-mapping-mistakes-that-cost-contractors-money": {
    intro:
      "You've learned which moisture mapping mistakes cost money on insurance files — including multi-unit and large-footprint losses. Now run the invoice defense and field procedures that prevent invoice reductions and defend drying scope from intake through closeout.",
    guideSlugs: [
      "water-mitigation-invoice-defense-guide",
      "moisture-mapping-guide",
      "dry-log-collection-guide",
      "daily-monitoring-guide",
    ],
  },
  "equipment-charges-water-damage-claims": {
    intro:
      "You've learned how carriers review equipment charges. Now document placement, counts, and utilization the way desk reviewers approve.",
    guideSlugs: ["equipment-documentation-guide"],
  },
  "daily-monitoring-documentation-best-practices": {
    intro:
      "You've learned why daily monitoring documentation matters. Now run the monitoring checklist and dry log procedures that defend billed visit days.",
    guideSlugs: ["daily-monitoring-guide", "dry-log-collection-guide"],
  },
  "why-water-mitigation-claims-get-underpaid": {
    intro:
      "You've learned why mitigation files get underpaid. Now run the field procedures that protect category classification, drying, monitoring, and equipment lines.",
    guideSlugs: [
      "category-class-documentation-guide",
      "dry-log-collection-guide",
      "daily-monitoring-guide",
      "equipment-documentation-guide",
    ],
  },
  "why-category-3-water-claims-get-underpaid": {
    intro:
      "You've learned why Category 3 invoices get reduced. Now run the documentation procedures that defend contaminated-loss scope from intake through closeout.",
    guideSlugs: [
      "category-3-water-damage-documentation-guide",
      "category-class-documentation-guide",
      "dry-log-collection-guide",
      "moisture-mapping-guide",
    ],
  },
  "how-carriers-reduce-drying-days": {
    intro:
      "You've learned how carriers reduce drying days when documentation fails — on residential and commercial losses. Now run the invoice defense and field procedures that defend equipment duration, monitoring visits, and log chronology from intake through closeout.",
    guideSlugs: [
      "water-mitigation-invoice-defense-guide",
      "dry-log-collection-guide",
      "daily-monitoring-guide",
      "equipment-documentation-guide",
    ],
  },
  "equipment-charges-that-get-cut-from-water-claims": {
    intro:
      "You've learned why equipment charges get cut and how to recover them — including large-loss deployments. Now run the invoice defense procedures that defend air movers, dehumidifiers, and specialty drying equipment from desk review.",
    guideSlugs: [
      "water-mitigation-invoice-defense-guide",
      "equipment-documentation-guide",
      "dry-log-collection-guide",
      "daily-monitoring-guide",
    ],
  },
  "documentation-gaps-that-trigger-water-claim-denials": {
    intro:
      "You've learned which documentation gaps trigger denials and reductions — gaps that multiply on commercial and multifamily losses. Now run the invoice defense procedures that close those gaps from intake through closeout.",
    guideSlugs: [
      "water-mitigation-invoice-defense-guide",
      "dry-log-collection-guide",
      "moisture-mapping-guide",
      "daily-monitoring-guide",
    ],
  },
  "water-damage-documentation-for-apartment-complexes": {
    intro:
      "You've learned how to document apartment and multifamily water losses. Now run the invoice defense and field procedures that defend unit-level scope, stack migration, and tenant coordination from intake through closeout.",
    guideSlugs: [
      "water-mitigation-invoice-defense-guide",
      "commercial-water-loss-documentation-guide",
      "moisture-mapping-guide",
      "daily-monitoring-guide",
    ],
  },
  "common-documentation-mistakes-on-commercial-water-losses": {
    intro:
      "You've learned which documentation mistakes trigger reductions on commercial water losses. Now run the field procedures and invoice defense workflows that build indexed packets from intake through closeout.",
    guideSlugs: [
      "commercial-water-loss-documentation-guide",
      "water-mitigation-invoice-defense-guide",
      "moisture-mapping-guide",
      "daily-monitoring-guide",
    ],
  },
  "large-loss-water-mitigation-documentation-best-practices": {
    intro:
      "You've learned how to document large-loss water mitigation at enterprise scale. Now run the commercial field procedures and invoice defense workflows that support multi-zone scope, executive reporting, and indexed closeout packets.",
    guideSlugs: [
      "commercial-water-loss-documentation-guide",
      "water-mitigation-invoice-defense-guide",
      "moisture-mapping-guide",
      "daily-monitoring-guide",
    ],
  },
  "multifamily-water-claims-that-get-underpaid": {
    intro:
      "You've learned why multifamily water claims get underpaid and which documentation gaps trigger reductions. Now run the commercial field procedures and invoice defense workflows that defend unit-level scope, common areas, equipment, and drying duration from intake through closeout.",
    guideSlugs: [
      "commercial-water-loss-documentation-guide",
      "water-mitigation-invoice-defense-guide",
      "moisture-mapping-guide",
      "daily-monitoring-guide",
    ],
  },
  "fire-damage-claim-documentation-guide": {
    intro:
      "You've learned fire claim documentation fundamentals. Now execute the cornerstone documentation standard and specialty procedures that defend migration, HVAC, and contents scope.",
    guideSlugs: [
      "fire-damage-documentation-guide",
      "fire-claim-intake-guide",
      "smoke-documentation-guide",
      "hvac-contamination-guide",
    ],
  },
  "smoke-and-soot-damage-documentation-guide": {
    intro:
      "You've learned smoke and soot documentation strategy. Now follow the cornerstone fire guide and field procedures for contamination evidence, odor scope, and HVAC review.",
    guideSlugs: [
      "fire-damage-documentation-guide",
      "smoke-documentation-guide",
      "odor-documentation-guide",
      "hvac-contamination-guide",
    ],
  },
  "fire-damage-supplement-playbook-for-contractors": {
    intro:
      "You've learned fire supplement strategy. Now apply the documentation standard and field procedures that support supplement submission and scope recovery.",
    guideSlugs: [
      "fire-damage-documentation-guide",
      "fire-claim-intake-guide",
      "structural-stabilization-documentation-guide",
      "contents-documentation-guide",
    ],
  },
  "fire-damage-supplement-denial-recovery": {
    intro:
      "You've learned denial recovery workflow. Now rebuild your file with the documentation standard and specialty procedures adjusters expect on resubmission.",
    guideSlugs: [
      "fire-damage-documentation-guide",
      "fire-claim-intake-guide",
      "smoke-documentation-guide",
      "hvac-contamination-guide",
    ],
  },
  "hvac-contamination-in-fire-damage-claims": {
    intro:
      "You've learned why HVAC scope gets disputed on fire losses. Now document system status, contamination, and cleaning scope with the field procedure adjusters expect.",
    guideSlugs: ["hvac-contamination-guide"],
  },
  "odor-mitigation-in-fire-damage-claims": {
    intro:
      "You've learned odor mitigation documentation requirements. Now capture treatment scope and results with the procedure that supports deodorization line items.",
    guideSlugs: ["odor-documentation-guide"],
  },
} as const satisfies Record<string, BlogGuideCompanionEntry>;

export type BlogGuideCompanionSlug = keyof typeof BLOG_GUIDE_COMPANIONS;

export function getBlogGuideCompanionEntry(
  blogSlug: string,
): BlogGuideCompanionEntry | undefined {
  if (!(blogSlug in BLOG_GUIDE_COMPANIONS)) {
    return undefined;
  }
  return BLOG_GUIDE_COMPANIONS[blogSlug as BlogGuideCompanionSlug];
}

export function getPracticeGuidesForBlog(blogSlug: string): Guide[] {
  const entry = getBlogGuideCompanionEntry(blogSlug);
  if (!entry) {
    return [];
  }

  const guides: Guide[] = [];
  const seen = new Set<string>();

  for (const guideSlug of entry.guideSlugs) {
    if (seen.has(guideSlug)) {
      continue;
    }
    const guide = getGuideBySlugOnly(guideSlug);
    if (guide) {
      seen.add(guideSlug);
      guides.push(guide);
    }
  }

  return guides;
}

export function getPracticeGuideIntro(blogSlug: string): string | undefined {
  const entry = getBlogGuideCompanionEntry(blogSlug);
  return entry?.intro;
}

export function getAllBlogGuideCompanionBlogSlugs(): BlogGuideCompanionSlug[] {
  return Object.keys(BLOG_GUIDE_COMPANIONS) as BlogGuideCompanionSlug[];
}

export function validateBlogGuideCompanions(): { ok: boolean; errors: string[] } {
  const errors: string[] = [];

  for (const blogSlug of getAllBlogGuideCompanionBlogSlugs()) {
    if (!getBlogPostBySlug(blogSlug)) {
      errors.push(`Unknown blog slug in registry: ${blogSlug}`);
    }

    const entry = BLOG_GUIDE_COMPANIONS[blogSlug];
    const seenGuides = new Set<string>();

    for (const guideSlug of entry.guideSlugs) {
      if (seenGuides.has(guideSlug)) {
        errors.push(`Duplicate guide slug "${guideSlug}" on blog "${blogSlug}"`);
      }
      seenGuides.add(guideSlug);

      const guide = getGuideBySlugOnly(guideSlug);
      if (!guide) {
        errors.push(`Unknown guide slug "${guideSlug}" on blog "${blogSlug}"`);
        continue;
      }

      if (entry.guideSlugs.length > 4) {
        errors.push(`Blog "${blogSlug}" exceeds 4 companion guides`);
      }
    }
  }

  return { ok: errors.length === 0, errors };
}

export function formatPracticeGuidesForChatbot(blogSlug: string): string {
  const guides = getPracticeGuidesForBlog(blogSlug);
  if (guides.length === 0) {
    return "";
  }

  const lines = guides.map(
    (guide) =>
      `${guide.title} (/resources/guides/${guide.category}/${guide.slug})`,
  );

  return `Practice guides: ${lines.join("; ")}`;
}
