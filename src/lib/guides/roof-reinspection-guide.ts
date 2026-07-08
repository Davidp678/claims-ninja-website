import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/roofing" as const;
const CATEGORY = "roofing-claims" as const;
const GUIDE_SLUG = "roof-reinspection-guide" as const;

export const ROOF_REINSPECTION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Roof Reinspection Guide for Contractors",
  excerpt:
    "Learn when to request a roof reinspection, what documentation to prepare, how to present additional damage, and how contractors can support accurate roofing claim review.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Roof reinspection",
    "Reinspection",
    "Supplement",
    "Documentation",
    "Scope comparison",
    "Storm damage",
    "Hail damage",
    "Wind damage",
    "Matching",
    "Repairability",
    "Roofing claims",
  ],
  publishedAt: "2026-06-26",
  updatedAt: "2026-06-26",
  estimatedMinutes: 16,
  seoTitle: "Roof Reinspection Guide for Contractors",
  seoDescription:
    "Learn when to request a roof reinspection, what documentation to prepare, how to present additional damage, and how contractors can support accurate roofing claim review.",
  relatedGuideSlugs: [
    "hoa-roofing-claims-guide",
    "multi-building-roofing-claims-guide",
    "commercial-roofing-documentation-guide",
    "roof-hail-damage-documentation-guide",
    "roof-wind-damage-documentation-guide",
    "roof-matching-documentation-guide",
    "roof-repairability-documentation-guide",
    "roofing-supplement-checklist",
    "roofing-documentation-guide",
    "code-upgrade-documentation-guide",
    "roof-measurement-documentation-guide",
    "reinspection-preparation-guide",
  ],
  relatedBlogSlugs: [
    "hail-damage-roof-claims-documentation-supplement",
    "wind-damage-roof-claims-what-carriers-miss",
    "roofing-supplement-playbook",
    "what-is-a-roof-supplement",
  ],
  faqIds: [
    "roof-reinspection-when-request",
    "roof-reinspection-documentation-prep",
    "roof-reinspection-missed-damage",
    "roof-reinspection-denial-reasons",
    "roof-reinspection-organize-photos",
    "roofing-carrier-documentation",
    "supplements-whats-included",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["hail", "wind", "replacement"],
  purpose:
    "Roof reinspections are often needed when the original inspection or estimate does not fully reflect documented roof conditions. Common reasons include missed storm damage, additional affected slopes, matching disputes, repairability concerns, code upgrade issues, scope omissions, and material identification problems. This guide is the strategic roofing contractor playbook for when to request reinspections and how to prepare documentation before scheduling — not on-site day-of execution. For visit-day logistics and crew roles, see the Roof Reinspection Day-Of Checklist. This guide is not legal advice and not a guarantee of claim outcomes. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Carrier estimate omits documented storm damage on one or more slopes",
      signal:
        "Field photos show hail impacts, wind creases, or lifted shingles not reflected in carrier sketch or line items",
    },
    {
      condition: "Additional slopes or elevations affected beyond approved repair area",
      signal:
        "Damage boundaries extend past carrier-defined repair limits on sketch or measurement report",
    },
    {
      condition: "Matching or repairability concerns not addressed in carrier scope",
      signal:
        "Discontinued shingles, brittle material, or visible mismatch documented but absent from estimate",
    },
    {
      condition: "Code upgrade items or accessories missing from carrier estimate",
      signal:
        "Ice and water shield, drip edge, or ventilation items required by jurisdiction not on estimate",
    },
    {
      condition: "Adjuster offers or agrees to site revisit after supplement dispute",
      signal:
        "Denial letter cites need for on-site verification, or desk review cannot resolve scope from photos alone",
    },
  ],
  prerequisites: [
    "Carrier estimate and claim number on file with sketch reference",
    "Complete documentation package assembled before requesting reinspection — not after scheduling",
    "Slope-labeled photo set and material identification attempted before reinspection request",
    "Supplement coordinator or project manager assigned as reinspection point of contact",
  ],
  requiredDocumentation: [
    {
      id: "roof-overview-photos",
      label: "Roof overview photos",
      required: true,
      detail:
        "Wide elevation shots of all visible slopes and ridge lines — establishes baseline before reinspection request.",
    },
    {
      id: "slope-damage-photos",
      label: "Slope-by-slope damage photos",
      required: true,
      detail:
        "Each plane labeled consistently (front, rear, left, right, garage, dormer) with damage boundaries visible.",
    },
    {
      id: "close-up-damage-photos",
      label: "Close-up damage photos",
      required: true,
      detail:
        "Hail impacts, wind creases, lifted tabs, broken seals, and collateral damage with context shots.",
    },
    {
      id: "soft-metal-photos",
      label: "Soft metal photos",
      required: true,
      detail:
        "Dented or damaged vents, flashings, gutters, downspouts, and other soft metals indexed to estimate lines.",
    },
    {
      id: "material-identification",
      label: "Material identification",
      required: true,
      detail:
        "Shingle type, manufacturer, color, style, age, and weathering condition documented with supporting photos.",
    },
    {
      id: "matching-documentation",
      label: "Matching documentation",
      required: true,
      detail:
        "Availability research, elevation photos, and mismatch concerns when matching is part of the reinspection scope.",
    },
    {
      id: "repairability-documentation",
      label: "Repairability documentation",
      required: true,
      detail:
        "Test observations, brittle notes, seal strip failure, and collateral damage photos when repairability is in dispute.",
    },
    {
      id: "carrier-estimate-comparison",
      label: "Carrier estimate comparison",
      required: true,
      detail:
        "Table linking carrier sketch lines to field photos, missing slopes, accessories, and code items.",
    },
    {
      id: "contractor-narrative",
      label: "Contractor narrative summary",
      required: true,
      detail:
        "One-page objective summary of what was missed, where it was found, and how documentation supports requested scope.",
    },
    {
      id: "supplement-support-notes",
      label: "Supplement support notes",
      required: true,
      detail:
        "Indexed references tying each supplement line to specific photos, measurements, or field observations.",
    },
  ],
  steps: [
    {
      id: "when-to-request",
      title: "When Should a Contractor Request a Roof Reinspection?",
      actions: [
        "Missed damage — carrier estimate does not include hail, wind, or impact damage documented in field photos.",
        "Incorrect scope — repair boundaries, removal squares, or replacement areas do not match actual damage extent.",
        "Additional affected slopes — damage extends to planes not included in carrier sketch or line items.",
        "Repairability concerns — brittle material, seal strip failure, or collateral damage risk not addressed in approved scope.",
        "Matching concerns — discontinued shingles, color mismatch, or visible elevation differences not reflected in estimate.",
        "Code-related omissions — jurisdiction-required underlayment, ventilation, or fastening upgrades missing from carrier scope.",
        "New documentation after initial inspection — additional photos, measurements, or material identification gathered since carrier visit supports expanded scope.",
      ],
      notes:
        "Request reinspection when documentation supports additional scope — not as a substitute for building the indexed packet first.",
    },
    {
      id: "build-documentation-package",
      title: "Build the Documentation Package Before Requesting Reinspection",
      actions: [
        "Overview photos — wide elevations of all visible planes captured and labeled before reinspection request.",
        "Slope-specific photos — each plane documented with consistent naming in file metadata.",
        "Close-up damage photos — hail impacts, creases, lifted tabs, and seal failures with context shots.",
        "Material identification — manufacturer, color, style, age, and weathering recorded with supporting imagery.",
        "Repairability notes — test observations and collateral damage documentation when partial repair is in dispute.",
        "Matching documentation — availability research and elevation photos when matching concerns are part of the file.",
        "Scope comparison — carrier estimate lines indexed to field photos and measurement data.",
      ],
      notes:
        "See the Roof Matching Documentation Guide and Roof Repairability Documentation Guide for detailed standards on those documentation types.",
    },
    {
      id: "compare-carrier-scope",
      title: "Compare Carrier Scope to Field Conditions",
      actions: [
        "Missing slopes — identify planes with documented damage absent from carrier sketch or line items.",
        "Missing elevations — map street-visible and primary viewing angles where damage exists but scope omits replacement.",
        "Missing accessories — ridge cap, valley metal, drip edge, pipe boots, and ventilation items not on estimate.",
        "Missing code items — ice and water shield, starter strip, or ventilation upgrades required by jurisdiction.",
        "Missing labor — steep/high modifiers, detach-and-reset, or protection items documented but not charged.",
        "Incorrect repair assumptions — carrier approves partial repair where field conditions support expanded scope.",
      ],
    },
    {
      id: "document-additional-damage",
      title: "Document Additional Roof Damage Clearly",
      actions: [
        "Hail impacts — photograph impact marks with chalk or contrast aid; note density and test square results where applicable.",
        "Wind creases — capture creased or folded tabs along wind-exposed edges and ridge lines.",
        "Lifted shingles — document tabs with broken seal strips or uplift damage on affected courses.",
        "Broken seals — close-up photos of seal strip failure on shingles that must be disturbed during repair.",
        "Collateral damage — photograph adjacent courses, valleys, and flashings affected during damage assessment.",
        "Soft metals — dented vents, flashings, gutters, and downspouts with overview and detail shots.",
        "Gutters and accessories — document damage to drainage and roof-mounted components.",
        "Vents and flashing — capture pipe boots, chimney flashings, and penetration details.",
        "Interior damage if applicable — ceiling stains, attic decking, or insulation damage linked to roof penetration.",
      ],
    },
    {
      id: "support-matching-repairability",
      title: "Support Matching and Repairability Issues",
      actions: [
        "Discontinued shingles — attach manufacturer discontinuation proof and comparable product difference notes.",
        "Mismatched materials — elevation photos showing visible differences between repair area and adjacent slopes.",
        "Brittle shingles — test observations and failed lift photos supporting repair limitations.",
        "Seal strip failure — document lifted tabs that no longer reseal on aged or weathered courses.",
        "Granule loss — close-up photos of exposed asphalt on shingles that must be disturbed.",
        "Collateral damage from attempted repair — photograph broken tabs and torn courses at repair boundaries.",
      ],
      notes:
        "See the Roof Matching Documentation Guide and Roof Repairability Documentation Guide for complete documentation standards on matching and repairability disputes.",
    },
    {
      id: "prepare-reinspection-narrative",
      title: "Prepare a Clear Reinspection Narrative",
      actions: [
        "What was missed — list specific damage types, slopes, or line items absent from carrier estimate.",
        "Where it was found — reference slope labels, elevation names, and photo file identifiers.",
        "Why it matters — tie each omission to scope impact, code requirement, or repair feasibility.",
        "What documentation supports it — index photos, measurements, and material records to each claim.",
        "How it relates to requested scope — map narrative points to specific supplement or estimate lines.",
      ],
    },
    {
      id: "common-reinspection-mistakes",
      title: "Common Roof Reinspection Mistakes",
      actions: [
        "Requesting reinspection without documentation — desk review repeats the same failure when the packet is incomplete.",
        "Disorganized photos — unlabeled files without slope context make remote review impossible.",
        "No slope labeling — reviewers cannot locate damage without consistent plane naming.",
        "Unsupported matching claims — requesting full elevation replacement without availability research or elevation photos.",
        "Weak repairability notes — asserting brittleness without test observations or collateral damage photos.",
        "No scope comparison — strong photos exist but cannot be mapped to estimate lines.",
        "Emotional or speculative language — narratives with unsupported conclusions weaken professional credibility.",
      ],
    },
    {
      id: "reinspection-checklist",
      title: "Roof Reinspection Documentation Checklist",
      actions: [
        "Roof overview photos — wide elevations of all visible planes included and labeled.",
        "Slope-by-slope damage photos — each plane documented with consistent naming.",
        "Close-up damage photos — hail, wind, seal failure, and impact detail with context.",
        "Soft metal photos — vents, flashings, gutters indexed to estimate lines.",
        "Material identification — type, manufacturer, color, style, age on file.",
        "Matching documentation — availability research and elevation photos when applicable.",
        "Repairability documentation — test results and collateral damage photos when applicable.",
        "Carrier estimate comparison — table linking lines to field evidence.",
        "Contractor narrative summary — one-page objective overview indexed to scope.",
        "Supplement support notes — each line tied to specific documentation references.",
      ],
      notes:
        "Roof reinspections are strongest when contractors provide organized, objective documentation that clearly shows what was missed, where it exists, and how it supports the requested scope.",
    },
    {
      id: "reinspection-supplement-support",
      title: "When Roof Reinspection Supports a Supplement",
      actions: [
        "Missed damage — additional hail, wind, or impact damage documented on slopes omitted from carrier scope.",
        "Expanded scope — removal squares, accessory LF, or labor items supported by field photos and measurements.",
        "Matching issues — discontinued product, color mismatch, or elevation visibility concerns tied to documentation.",
        "Repairability concerns — brittle material or collateral damage supporting expanded removal scope.",
        "Code items — jurisdiction-required upgrades documented with permit or code reference.",
        "Additional materials — underlayment, ventilation, or fastening upgrades supported by field conditions.",
        "Estimate alignment — each supplement line references specific photos, measurements, or narrative points — educational and documentation-focused, not a guarantee of approval.",
      ],
      notes:
        "Reinspection supplements succeed when documentation, scope comparison, and narrative tell the same story. Carriers evaluate reinspection requests against evidence quality and field conditions — outcomes are never guaranteed.",
    },
  ],
  qualityGates: [
    {
      id: "package-complete",
      label: "Documentation package complete before reinspection request",
      required: true,
      detail:
        "Overview photos, slope photos, scope comparison, and narrative assembled before scheduling.",
    },
    {
      id: "slope-labeled",
      label: "All photos slope-labeled and indexed",
      required: true,
      detail:
        "Consistent naming convention across elevations and file metadata.",
    },
    {
      id: "scope-comparison-indexed",
      label: "Carrier scope comparison indexed to evidence",
      required: true,
      detail:
        "Missing slopes, accessories, and line items tied to specific photos.",
    },
    {
      id: "narrative-prepared",
      label: "Contractor narrative prepared",
      required: true,
      detail:
        "Objective summary linking omissions to documentation without speculative language.",
    },
    {
      id: "supplement-aligned",
      label: "Supplement lines aligned to documentation",
      required: true,
      detail:
        "Each requested line references specific photo, measurement, or field note.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Requesting reinspection without complete documentation",
      impact:
        "Adjuster arrives without context; same desk review failure repeats after the visit.",
      correction:
        "Assemble indexed packet with photos, scope comparison, and narrative before scheduling.",
    },
    {
      mistake: "Disorganized or unlabeled photos",
      impact:
        "Reviewers cannot locate damage on specific slopes — reinspection request lacks credibility.",
      correction:
        "Use consistent slope labels in filenames and pair close-ups with overview context shots.",
    },
    {
      mistake: "No slope labeling in file metadata",
      impact:
        "Remote reviewers cannot map damage to carrier sketch planes.",
      correction:
        "Label every photo with slope name and date before uploading to claim file.",
    },
    {
      mistake: "Unsupported matching or repairability claims",
      impact:
        "Scope expansion requests denied for insufficient evidence at reinspection.",
      correction:
        "Follow matching and repairability documentation guides before asserting scope changes.",
    },
    {
      mistake: "No scope comparison table",
      impact:
        "Strong photos exist but cannot be mapped to estimate lines — supplement stalls.",
      correction:
        "Build carrier-to-field comparison indexed to each missing line item.",
    },
    {
      mistake: "Emotional or speculative narrative language",
      impact:
        "Professional credibility weakened — adjuster treats file as advocacy rather than evidence.",
      correction:
        "Use objective language tied to specific photos, measurements, and field observations.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Carrier estimate omits documented slopes or elevations",
      documentation:
        "Slope-labeled photos, measurement report, and scope comparison table showing missing planes.",
      lineItemHint: "Additional removal and replacement squares on omitted slopes with accessories",
    },
    {
      trigger: "Accessories and soft metals damaged but not on estimate",
      documentation:
        "Close-up and overview photos of vents, flashings, gutters, and ridge cap indexed to lines.",
      lineItemHint: "Vent, flashing, gutter, and ridge cap LF or EA items with detach-and-reset",
    },
    {
      trigger: "Matching or repairability concerns support expanded scope",
      documentation:
        "Matching availability research, repairability test photos, and elevation context.",
      lineItemHint: "Expanded slope or elevation replacement when partial repair is not feasible",
    },
    {
      trigger: "Code upgrade items required but missing from carrier scope",
      documentation:
        "Permit requirements, code reference, and pre-tear-off photos showing existing conditions.",
      lineItemHint: "Ice and water shield, drip edge, ventilation, or fastening upgrades per jurisdiction",
    },
  ],
  relatedResources: [
    {
      label: "HOA Roofing Claims Guide",
      href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
    },
    {
      label: "Multi-Building Roofing Claims Guide",
      href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
    },
    {
      label: "Commercial Roofing Documentation Guide",
      href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
    },
    {
      label: "Roof Matching Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
    },
    {
      label: "Roof Repairability Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
    },
    {
      label: "Roofing Supplement Checklist",
      href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
    },
    {
      label: "Roofing Claim Documentation Standard",
      href: "/resources/guides/roofing-claims/roofing-documentation-guide",
    },
    {
      label: "Code Upgrade Documentation",
      href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
    },
    {
      label: "Roof Measurement Documentation",
      href: "/resources/guides/roofing-claims/roof-measurement-documentation-guide",
    },
    {
      label: "Roof Reinspection Day-Of Checklist",
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
