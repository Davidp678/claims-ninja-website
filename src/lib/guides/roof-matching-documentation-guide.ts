import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/roofing" as const;
const CATEGORY = "roofing-claims" as const;
const GUIDE_SLUG = "roof-matching-documentation-guide" as const;

export const ROOF_MATCHING_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Roof Matching Documentation Guide for Contractors",
  excerpt:
    "Learn how contractors can document roof matching issues with photos, material identification, availability research, repairability notes, and scope support for roofing claims.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Roof matching",
    "Material matching",
    "Shingle matching",
    "Partial replacement",
    "Discontinued shingles",
    "Color mismatch",
    "Documentation",
    "Supplement",
    "Roofing claims",
  ],
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  estimatedMinutes: 16,
  seoTitle: "Roof Matching Documentation Guide for Contractors",
  seoDescription:
    "Learn how contractors can document roof matching issues with photos, material identification, availability research, repairability notes, and scope support for roofing claims.",
  relatedGuideSlugs: [
    "roof-repairability-documentation-guide",
    "roofing-supplement-checklist",
    "roofing-documentation-guide",
    "roof-measurement-documentation-guide",
    "reinspection-preparation-guide",
    "code-upgrade-documentation-guide",
  ],
  relatedBlogSlugs: ["roofing-supplement-playbook", "what-is-a-roof-supplement"],
  faqIds: [
    "roof-matching-insurance-claim",
    "roof-matching-contractor-documentation",
    "roof-matching-dispute-photos",
    "roof-matching-supplement-denials",
    "roof-matching-discontinued-shingles",
    "roofing-carrier-documentation",
    "roofing-measurements",
    "supplements-whats-included",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["hail", "wind", "replacement"],
  purpose:
    "Roof matching disputes are common when carriers approve partial repairs but the replacement materials do not reasonably match the existing roof. Contractors may face disputes involving discontinued shingles, color mismatch, profile mismatch, weathered materials, partial slope replacement, repairability issues, and inconsistent appearance across roof planes. Strong documentation helps support the contractor's position when matching becomes part of the claim review. This guide is a contractor-focused documentation playbook for roof matching disputes — not legal advice and not a guarantee of claim outcomes. Claims Ninja supports contractors with documentation standards and supplement packaging — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Carrier approves partial slope or elevation repair with different material than existing roof",
      signal:
        "Estimate shows repair squares on one slope; remaining slopes retain original shingles with visible color or profile differences anticipated",
    },
    {
      condition: "Existing shingle is discontinued, color-limited, or unavailable from supplier",
      signal:
        "Manufacturer or distributor confirms SKU unavailable; comparable product differs in color, profile, or dimensions",
    },
    {
      condition: "Weathered or aged roof makes patch repair visually inconsistent",
      signal:
        "Granule loss, fading, or oxidation documented; new material will not blend with adjacent planes",
    },
    {
      condition: "Repairability concerns on brittle or fragile existing shingles",
      signal:
        "Field notes document cracking, seal failure, or collateral damage risk during partial repair",
    },
    {
      condition: "Matching dispute raised during supplement review or reinspection",
      signal:
        "Adjuster cites cosmetic-only damage, patch sufficiency, or policy language limiting matching scope",
    },
  ],
  prerequisites: [
    "Pre-tear-off elevation and slope-labeled photo set on file before production",
    "Existing shingle identification attempted — manufacturer, product line, color, and style recorded",
    "Carrier estimate and approved repair area documented with sketch reference",
    "Supplier or manufacturer availability research initiated before supplement submission",
  ],
  requiredDocumentation: [
    {
      id: "material-identification",
      label: "Material identification record",
      required: true,
      detail:
        "Shingle type, manufacturer, color name or code, style, dimensions, approximate age, weathering condition, and installation pattern — from package labels, attic stock, or manufacturer database lookup.",
    },
    {
      id: "matching-photos",
      label: "Matching-focused photo set",
      required: true,
      detail:
        "Wide roof elevations, slope-by-slope photos, close-up material photos, side-by-side comparisons where possible, and photos showing transitions between repair area and adjacent slopes.",
    },
    {
      id: "availability-research",
      label: "Material availability research",
      required: true,
      detail:
        "Manufacturer discontinuation notices, distributor availability checks, color/style availability confirmation, and notes on comparable product differences.",
    },
    {
      id: "repairability-notes",
      label: "Repairability documentation",
      required: true,
      detail:
        "Field notes on brittle shingles, granule loss, seal failure, cracking, age-related fragility, and risk of collateral damage during partial repair — with supporting close-up photos.",
    },
    {
      id: "scope-comparison",
      label: "Carrier scope vs. field conditions comparison",
      required: true,
      detail:
        "Approved repair area, affected slope, adjacent slopes, visible elevations, repair limits, and documented mismatch concerns tied to estimate lines.",
    },
    {
      id: "contractor-narrative",
      label: "Contractor narrative summary",
      required: true,
      detail:
        "One-page objective summary linking material identification, availability research, repairability concerns, and requested scope to field conditions — no unsupported matching claims.",
    },
  ],
  steps: [
    {
      id: "what-is-roof-matching",
      title: "What Is Roof Matching?",
      actions: [
        "Material consistency — replacement shingles should align with existing material in type, manufacturer tier, and application method when partial repair is approved.",
        "Color — hue, blend, and weathering must be considered; new shingles on one slope often appear different from aged material on adjacent planes.",
        "Profile — tab shape, thickness, and exposure dimensions affect visible lines at slope transitions and ridge intersections.",
        "Size — shingle dimensions and exposure length determine whether patch rows align with existing courses.",
        "Texture — granule pattern, shadow lines, and surface finish contribute to visible mismatch even when color codes match on paper.",
        "Age and weathering — sun exposure, oxidation, and granule loss change appearance over years; documentation should capture current condition, not original install color.",
        "Visible roof planes — elevations visible from street, driveway, and primary viewing angles drive matching concerns beyond the repair square alone.",
        "Why matching affects scope — when reasonable matching is not achievable with partial repair, documentation may support expanded slope or elevation replacement — outcomes vary by carrier and policy.",
      ],
    },
    {
      id: "document-existing-material",
      title: "Document the Existing Roofing Material",
      actions: [
        "Shingle type — identify 3-tab, architectural, designer, or specialty product from field observation and any remaining packaging or attic stock.",
        "Manufacturer — record brand from labels, imprints on shingle back, or database lookup from known install date and region.",
        "Color — document color name, code, or blend description; photograph color sample against existing slope in consistent lighting.",
        "Style — note product line, profile name, and any regional or limited-run designation.",
        "Dimensions — record exposure width, tab width, and overall shingle length where measurable.",
        "Age — estimate from permit records, homeowner disclosure, or visual weathering indicators.",
        "Weathering — document granule loss, fading, algae staining, and oxidation with close-up and context photos.",
        "Installation pattern — note stagger, offset, and course alignment that affects patch integration.",
      ],
    },
    {
      id: "matching-focused-photos",
      title: "Take Matching-Focused Photos",
      actions: [
        "Wide roof elevations — capture each visible elevation showing all slopes and ridge lines from standard viewing angles.",
        "Slope-by-slope photos — label each plane (front, rear, left, right, garage, dormer) with consistent naming in file metadata.",
        "Close-up material photos — granule surface, butt edge, and back imprint for manufacturer identification.",
        "Side-by-side comparisons — place sample shingle or color chip against existing course when available; photograph at same angle and lighting.",
        "Lighting considerations — shoot comparison photos in consistent daylight; avoid shadow-heavy angles that distort color in review.",
        "Visible transitions — document ridge, valley, and slope intersections where repair boundary will be visible.",
        "Adjacent slopes — photograph planes that will remain original material adjacent to proposed repair area.",
      ],
    },
    {
      id: "research-availability",
      title: "Research Material Availability",
      actions: [
        "Discontinued products — check manufacturer website, product bulletins, and distributor systems for active SKU status.",
        "Manufacturer documentation — save discontinuation notices, product change bulletins, or customer service responses with date and reference number.",
        "Supplier availability checks — contact distributors for exact color and style availability in required quantity and timeline.",
        "Color and style availability — document when exact match is unavailable and list closest comparable product with noted differences.",
        "Comparable product differences — record profile, dimension, color blend, and warranty tier differences between original and available replacement.",
        "Why availability research matters — desk reviewers cannot verify matching feasibility without dated supplier or manufacturer confirmation on file.",
      ],
    },
    {
      id: "document-repairability",
      title: "Document Repairability Concerns",
      actions: [
        "Brittle shingles — note shingles that crack or break when lifted for repair; photograph failed lift attempts on test tabs.",
        "Granule loss — document exposed asphalt and loss depth on shingles that must be disturbed during partial repair.",
        "Seal failure — photograph lifted tabs that no longer reseal; note age and wind exposure on affected courses.",
        "Cracking — capture thermal or age-related splits in existing material adjacent to repair boundary.",
        "Age-related fragility — record install age and field observation that existing material cannot withstand targeted repair.",
        "Risk of collateral damage during repair — document adjacent courses, valleys, and flashings that may be damaged when isolating repair area.",
      ],
      notes:
        "See the Roof Repairability Documentation Guide for the full repairability testing and collateral damage playbook. See the Roofing Claim Documentation Standard for general photo and narrative practices.",
    },
    {
      id: "compare-carrier-scope",
      title: "Compare Carrier Scope to Field Conditions",
      actions: [
        "Approved repair area — highlight carrier sketch repair squares and compare to actual damage boundaries on each slope.",
        "Affected slope — document which plane carries approved repair and whether damage extends beyond approved boundary.",
        "Adjacent slopes — list slopes that remain original material and will be visible alongside repair area.",
        "Visible elevations — map street-facing and primary viewing angles where mismatch will be apparent.",
        "Repair limits — note carrier-defined repair boundaries versus field conditions at transitions and ridge lines.",
        "Mismatched material concerns — tie each concern to a specific photo, identification record, or availability research document.",
      ],
    },
    {
      id: "build-documentation-package",
      title: "Build a Matching Documentation Package",
      actions: [
        "Overview roof photos — wide elevations of all visible planes included and labeled.",
        "Slope-specific photos — each plane documented with consistent naming convention.",
        "Close-up material photos — identification-grade detail shots with manufacturer and color evidence.",
        "Material identification — complete record of type, manufacturer, color, style, dimensions, age, and weathering.",
        "Availability research — manufacturer and supplier confirmation with dates and reference numbers.",
        "Supplier and manufacturer notes — saved emails, PDFs, or call logs indexed in supplement file.",
        "Repairability notes — field observations with photos supporting partial repair risk.",
        "Carrier scope comparison — table linking estimate lines to field photos and mismatch concerns.",
        "Contractor narrative summary — one-page objective overview tying documentation to requested scope.",
      ],
      notes:
        "Roof matching disputes are easier to support when contractors clearly document the existing material, the proposed repair material, visible differences, repairability concerns, and why the requested scope is supported by field conditions. Outcomes vary by carrier program, policy language, and evidence quality.",
    },
    {
      id: "common-matching-mistakes",
      title: "Common Roof Matching Documentation Mistakes",
      actions: [
        "Only photographing damaged shingles — reviewers need full elevation context, not damage close-ups alone.",
        "No material identification — without manufacturer and color record, matching arguments lack foundation.",
        "No availability research — claiming discontinued product without dated supplier or manufacturer confirmation weakens the file.",
        "Weak side-by-side comparisons — sample photos taken in different lighting or angles fail to demonstrate visible difference.",
        "Missing slope or elevation context — partial repair impact on adjacent planes is invisible without labeled slope photos.",
        "Unsupported matching claims — requesting full elevation replacement without tying each concern to documented evidence.",
        "Documentation not tied to requested scope — photos and research must map to specific estimate lines and repair boundaries.",
      ],
    },
    {
      id: "matching-supplement-support",
      title: "When Roof Matching Supports a Supplement",
      actions: [
        "Expanded slope replacement — when partial repair leaves visible mismatch across a full slope, document why slope-wide replacement aligns with field conditions and availability research.",
        "Discontinued material issues — attach manufacturer discontinuation proof and comparable product difference notes to support alternate scope.",
        "Repairability concerns — link brittle or fragile existing material documentation to scope expansion when partial repair risks collateral damage.",
        "Uniform appearance concerns — tie street-visible elevation photos to requested scope that achieves consistent appearance across planes.",
        "Documentation-to-estimate alignment — each supplement line should reference specific photos, identification records, or availability documents — educational and documentation-focused, not a guarantee of approval.",
      ],
      notes:
        "Matching supplements succeed when documentation, availability research, and scope requests tell the same story. Carriers evaluate matching arguments against policy language, visible impact, and evidence quality — outcomes are never guaranteed.",
    },
  ],
  qualityGates: [
    {
      id: "material-identified",
      label: "Existing shingle identified with manufacturer and color record",
      required: true,
      detail:
        "Type, manufacturer, color, style, and age documented before supplement submission.",
    },
    {
      id: "elevation-photos",
      label: "Full elevation photo set on file",
      required: true,
      detail:
        "All visible slopes captured with consistent labeling before production start.",
    },
    {
      id: "availability-researched",
      label: "Availability research documented with dates",
      required: true,
      detail:
        "Supplier or manufacturer confirmation saved when exact match is unavailable or discontinued.",
    },
    {
      id: "scope-comparison-complete",
      label: "Carrier scope comparison indexed to evidence",
      required: true,
      detail:
        "Repair boundaries, adjacent slopes, and mismatch concerns tied to estimate lines.",
    },
    {
      id: "narrative-prepared",
      label: "Contractor narrative summary prepared",
      required: true,
      detail:
        "One-page objective summary linking documentation to requested scope without unsupported claims.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Only photographing damaged shingles",
      impact:
        "Reviewers cannot assess visible mismatch across elevations — matching argument lacks context.",
      correction:
        "Capture wide elevation and slope-by-slope photos before focusing on damage detail.",
    },
    {
      mistake: "No material identification on file",
      impact:
        "Matching dispute cannot be evaluated without knowing what existing material is.",
      correction:
        "Record manufacturer, color, style, and age from labels, imprints, or database lookup before supplement.",
    },
    {
      mistake: "No availability research documented",
      impact:
        "Discontinued or unavailable product claims fail desk review without supplier confirmation.",
      correction:
        "Save dated distributor or manufacturer responses with SKU status and comparable product notes.",
    },
    {
      mistake: "Weak side-by-side comparisons",
      impact:
        "Color or profile differences are not visible to remote reviewers — supplement denied for insufficient evidence.",
      correction:
        "Photograph sample against existing course in consistent lighting and angle.",
    },
    {
      mistake: "Missing slope or elevation context",
      impact:
        "Partial repair impact on adjacent planes is invisible — scope expansion request lacks support.",
      correction:
        "Label and photograph every slope that will remain original material adjacent to repair area.",
    },
    {
      mistake: "Unsupported matching claims",
      impact:
        "Full elevation replacement requested without evidence — carrier treats as cosmetic upgrade.",
      correction:
        "Tie each scope line to specific photos, availability research, or repairability documentation.",
    },
    {
      mistake: "Documentation not tied to requested scope",
      impact:
        "Strong photos exist but reviewers cannot map them to estimate lines — supplement stalls.",
      correction:
        "Build scope comparison table linking each concern to estimate line and evidence reference.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Partial repair leaves visible mismatch across full slope",
      documentation:
        "Slope-by-slope photos, material identification, availability research, and elevation context showing patch boundary visibility.",
      lineItemHint: "Expanded slope replacement squares, ridge cap, and accessory LF on affected plane",
    },
    {
      trigger: "Existing shingle discontinued or exact color unavailable",
      documentation:
        "Manufacturer discontinuation notice, distributor availability check, and comparable product difference notes with photos.",
      lineItemHint: "Alternate scope for slope or elevation achieving uniform appearance",
    },
    {
      trigger: "Brittle or fragile existing material cannot withstand partial repair",
      documentation:
        "Repairability photos, failed lift attempts, and field notes on collateral damage risk at repair boundary.",
      lineItemHint: "Expanded removal scope on adjacent courses or full slope when repair risks further damage",
    },
    {
      trigger: "Street-visible elevation requires uniform appearance",
      documentation:
        "Primary viewing angle photos, scope comparison table, and narrative tying visible planes to requested replacement scope.",
      lineItemHint: "Elevation-wide shingle replacement on visible planes with matching accessory lines",
    },
  ],
  relatedResources: [
    {
      label: "Roof Repairability Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
    },
    {
      label: "Roofing Claim Documentation Standard",
      href: "/resources/guides/roofing-claims/roofing-documentation-guide",
    },
    {
      label: "Roofing Supplement Checklist",
      href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
    },
    {
      label: "Roof Measurement Documentation",
      href: "/resources/guides/roofing-claims/roof-measurement-documentation-guide",
    },
    {
      label: "Roof Reinspection Preparation",
      href: "/resources/guides/roofing-claims/reinspection-preparation-guide",
    },
    {
      label: "Roofing supplement playbook",
      href: "/resources/blog/roofing-supplement-playbook",
    },
    {
      label: "What is a roof supplement",
      href: "/resources/blog/what-is-a-roof-supplement",
    },
    {
      label: "Claims Ninja platform",
      href: "/platform",
    },
  ],
});
