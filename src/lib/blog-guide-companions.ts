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
      "You've learned the roofing supplement strategy. Now execute the checklists and documentation standards that turn scope gaps into paid line items.",
    guideSlugs: [
      "roofing-supplement-checklist",
      "roofing-documentation-guide",
      "reinspection-preparation-guide",
    ],
  },
  "what-is-a-roof-supplement": {
    intro:
      "You've learned what a roof supplement is and when it applies. Now follow the field documentation procedures that support supplement approvals.",
    guideSlugs: ["roofing-documentation-guide", "roof-measurement-documentation-guide"],
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
      "You've learned which moisture mapping mistakes cost money on insurance files. Now run the field procedures that prevent invoice reductions and defend drying scope from intake through closeout.",
    guideSlugs: [
      "moisture-mapping-guide",
      "dry-log-collection-guide",
      "daily-monitoring-guide",
      "category-class-documentation-guide",
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
      "You've learned how carriers reduce drying days when documentation fails. Now run the field procedures that defend equipment duration, monitoring visits, and log chronology from intake through closeout.",
    guideSlugs: [
      "dry-log-collection-guide",
      "daily-monitoring-guide",
      "equipment-documentation-guide",
      "moisture-mapping-guide",
    ],
  },
  "equipment-charges-that-get-cut-from-water-claims": {
    intro:
      "You've learned why equipment charges get cut and how to recover them. Now run the field procedures that defend air movers, dehumidifiers, and specialty drying equipment from desk review.",
    guideSlugs: [
      "equipment-documentation-guide",
      "dry-log-collection-guide",
      "daily-monitoring-guide",
      "moisture-mapping-guide",
    ],
  },
  "documentation-gaps-that-trigger-water-claim-denials": {
    intro:
      "You've learned which documentation gaps trigger denials and reductions. Now run the field procedures that close those gaps from intake through closeout.",
    guideSlugs: [
      "dry-log-collection-guide",
      "moisture-mapping-guide",
      "daily-monitoring-guide",
      "equipment-documentation-guide",
    ],
  },
  "fire-damage-claim-documentation-guide": {
    intro:
      "You've learned fire claim documentation fundamentals. Now execute the intake and specialty procedures that defend migration, HVAC, and contents scope.",
    guideSlugs: [
      "fire-claim-intake-guide",
      "smoke-documentation-guide",
      "hvac-contamination-guide",
      "contents-documentation-guide",
    ],
  },
  "smoke-and-soot-damage-documentation-guide": {
    intro:
      "You've learned smoke and soot documentation strategy. Now follow the field procedures for contamination evidence, odor scope, and HVAC review.",
    guideSlugs: [
      "smoke-documentation-guide",
      "odor-documentation-guide",
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
