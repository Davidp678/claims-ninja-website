import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/roofing" as const;
const CATEGORY = "roofing-claims" as const;
const GUIDE_SLUG = "roof-repairability-documentation-guide" as const;

export const ROOF_REPAIRABILITY_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Roof Repairability Documentation Guide for Contractors",
  excerpt:
    "Learn how to document roof repairability using brittle test results, material condition, collateral damage observations, manufacturer guidance, and field documentation that supports accurate claim review.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Roof repairability",
    "Brittle shingles",
    "Brittle test",
    "Collateral damage",
    "Seal strip adhesion",
    "Material condition",
    "Partial repair",
    "Documentation",
    "Supplement",
    "Roofing claims",
  ],
  publishedAt: "2026-06-26",
  updatedAt: "2026-06-26",
  estimatedMinutes: 15,
  seoTitle: "Roof Repairability Documentation Guide for Contractors",
  seoDescription:
    "Learn how to document roof repairability using brittle test results, material condition, collateral damage observations, manufacturer guidance, and field documentation that supports accurate claim review.",
  relatedGuideSlugs: [
    "hoa-roofing-claims-guide",
    "commercial-roofing-documentation-guide",
    "roof-hail-damage-documentation-guide",
    "roof-wind-damage-documentation-guide",
    "roof-reinspection-guide",
    "roof-matching-documentation-guide",
    "code-upgrade-documentation-guide",
    "roofing-documentation-guide",
    "roof-measurement-documentation-guide",
  ],
  relatedBlogSlugs: [
    "roof-matching-vs-repairability-when-to-supplement",
    "roofing-supplement-playbook",
    "what-is-a-roof-supplement",
  ],
  faqIds: [
    "roof-repairability-insurance-claim",
    "roof-repairability-contractor-documentation",
    "roof-brittle-test-roofing",
    "roof-repairability-documentation-evidence",
    "roof-repairability-carrier-disputes",
    "roofing-carrier-documentation",
    "supplements-whats-included",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["hail", "wind", "replacement"],
  purpose:
    "Not every damaged roof can be repaired without creating additional damage. Roof repairability depends on multiple documented field conditions, including material age, brittleness, seal strip adhesion, manufacturer information, and the potential for collateral damage during repair. Well-organized documentation helps explain why repair may or may not be appropriate. This guide is the definitive contractor playbook for documenting roof repairability — not legal advice and not a guarantee of claim outcomes. Claims Ninja supports contractors with documentation standards and supplement packaging — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Carrier approves partial repair on aged or weathered shingles",
      signal:
        "Estimate shows targeted repair squares; existing material shows granule loss, curling, or age-related fragility",
    },
    {
      condition: "Field observation suggests shingles may crack or break during repair",
      signal:
        "Preliminary lift attempts, visible brittleness, or seal strip failure documented on adjacent courses",
    },
    {
      condition: "Collateral damage risk during isolated repair",
      signal:
        "Adjacent tabs, valleys, or flashings may be disturbed when isolating the approved repair area",
    },
    {
      condition: "Repairability dispute raised during supplement review or reinspection",
      signal:
        "Adjuster asserts partial repair is sufficient; contractor documentation must support repair limitations",
    },
    {
      condition: "Manufacturer guidance limits repair on existing product",
      signal:
        "Published installation or repair recommendations conflict with carrier-approved partial scope",
    },
  ],
  prerequisites: [
    "Carrier estimate and approved repair area documented with sketch reference",
    "Roof overview photos captured before any repairability testing or production",
    "Existing shingle identification attempted — manufacturer, product line, and approximate age recorded",
    "Field crew briefed on documenting observations without disturbing more material than necessary for testing",
  ],
  requiredDocumentation: [
    {
      id: "roof-overview-photos",
      label: "Roof overview photos",
      required: true,
      detail:
        "Wide elevation shots of all visible slopes and ridge lines before testing — establishes baseline roof condition and repair boundaries.",
    },
    {
      id: "close-up-material-photos",
      label: "Close-up material photos",
      required: true,
      detail:
        "Granule surface, butt edges, seal strips, cracking, curling, and weathering detail on shingles within and adjacent to the proposed repair area.",
    },
    {
      id: "test-square-documentation",
      label: "Test square documentation",
      required: true,
      detail:
        "Location, date, and observations from repairability testing — test area boundaries, number of tabs tested, and results recorded in field notes.",
    },
    {
      id: "brittle-observations",
      label: "Brittle test observations",
      required: true,
      detail:
        "Field notes and photos on shingle fragility, failed lift attempts, cracking during handling, and seal strip adhesion failure — tied to specific courses and slopes.",
    },
    {
      id: "collateral-damage-photos",
      label: "Collateral damage photos",
      required: true,
      detail:
        "Broken tabs, torn shingles, granule displacement, nail pull-through, and adjacent material damage from testing or attempted repair — close-up and overview context.",
    },
    {
      id: "manufacturer-information",
      label: "Manufacturer information",
      required: true,
      detail:
        "Product identification, published repair recommendations, installation requirements, and product availability or discontinuation status with dated references.",
    },
    {
      id: "field-notes",
      label: "Field notes",
      required: true,
      detail:
        "Date-stamped observations on material condition, test methodology used, removal observations, and repair limitations discovered during field evaluation.",
    },
    {
      id: "contractor-narrative",
      label: "Contractor narrative",
      required: true,
      detail:
        "One-page objective summary linking material condition, test results, collateral damage observations, and repair limitations to requested scope — no unsupported conclusions.",
    },
    {
      id: "scope-comparison",
      label: "Scope comparison",
      required: true,
      detail:
        "Carrier-approved repair area compared to actual field conditions, repair limitations, and documentation supporting scope differences — indexed to estimate lines.",
    },
  ],
  steps: [
    {
      id: "what-is-roof-repairability",
      title: "What Is Roof Repairability?",
      actions: [
        "Definition — repairability describes whether existing roofing material can be partially removed, lifted, or replaced without causing additional damage to adjacent courses or compromising the roof system.",
        "Repair versus matching — repairability addresses whether repair is physically feasible; matching addresses whether replacement materials align with existing appearance. Both may affect scope but are separate documentation concerns.",
        "Why repairability affects claim scope — when partial repair risks collateral damage or violates manufacturer guidance, documentation may support expanded removal or slope replacement — outcomes vary by carrier and policy.",
        "Why documentation matters — desk reviewers and field adjusters cannot evaluate repair limitations without dated photos, test observations, and objective field notes tied to the approved repair boundary.",
      ],
    },
    {
      id: "document-material-condition",
      title: "Document Roofing Material Condition",
      actions: [
        "Shingle age — estimate from permit records, homeowner disclosure, or visual weathering indicators; record approximate install year.",
        "Weathering — document sun exposure, oxidation, algae staining, and overall surface deterioration with context photos.",
        "Granule loss — photograph exposed asphalt and loss depth on courses that must be disturbed during repair.",
        "Curling — capture lifted or cupped tabs, especially along repair boundaries and wind-exposed edges.",
        "Cracking — document thermal splits, age-related fractures, and impact-related breaks in existing material.",
        "Existing repairs — note prior patch work, mismatched courses, or compromised seal strips from earlier repairs.",
        "General roof condition — record overall slope condition, ventilation evidence, and underlayment exposure where visible.",
      ],
    },
    {
      id: "perform-repairability-testing",
      title: "Perform and Document Repairability Testing",
      actions: [
        "Test square methodology — select a representative test area within or adjacent to the proposed repair boundary; document location on sketch or aerial with slope label.",
        "Brittle test observations — note whether shingles crack, break, or crumble when lifted; photograph failed lift attempts on test tabs.",
        "Seal strip adhesion — document whether lifted tabs reseal or remain separated; note age and exposure on affected courses.",
        "Removal observations — record how existing material behaves during attempted isolation of the repair area.",
        "Field notes — date-stamp all observations, identify crew member or inspector, and describe methodology without overstating conclusions.",
        "Photographic documentation — capture before, during, and after test observations with close-up and overview context shots.",
      ],
      notes:
        "This section is educational. Contractors may use different field approaches; the goal is objective documentation of how existing material responds to repair attempts — not adherence to one mandatory testing method.",
    },
    {
      id: "photograph-collateral-damage",
      title: "Photograph Potential Collateral Damage",
      actions: [
        "Broken tabs — photograph tabs that cracked or separated during testing or attempted repair.",
        "Torn shingles — capture tears at nail lines, butt joints, or along repair boundaries.",
        "Granule displacement — document granule loss on adjacent courses disturbed during testing.",
        "Nail pull-through — photograph fastener pull-through where brittle material could not withstand lifting.",
        "Adjacent material damage — capture valleys, flashings, ridge caps, and courses outside the approved repair area affected during evaluation.",
        "Close-up and overview photographs — pair detail shots with wide context so reviewers can locate damage on the slope.",
      ],
    },
    {
      id: "review-manufacturer-information",
      title: "Review Manufacturer Information",
      actions: [
        "Manufacturer identification — confirm brand and product line from labels, imprints, or database lookup.",
        "Product availability — check whether the exact product remains available or has been discontinued.",
        "Installation requirements — review published guidance on minimum repair boundaries, overlap, and fastening.",
        "Published repair recommendations — save manufacturer bulletins on partial repair, tab lifting, or cold-weather handling.",
        "Product discontinuation considerations — document when replacement product differs and whether repair guidance still applies to existing material.",
      ],
    },
    {
      id: "compare-carrier-scope",
      title: "Compare Carrier Scope to Field Conditions",
      actions: [
        "Proposed repair areas — highlight carrier sketch repair squares and compare to actual damage and material condition boundaries.",
        "Actual field conditions — document material age, brittleness, and collateral damage observed within and adjacent to approved repair area.",
        "Repair limitations — tie each limitation to specific photos, test observations, or manufacturer guidance.",
        "Documentation supporting differences — build a comparison table linking estimate lines to field evidence and repairability concerns.",
      ],
      notes:
        "When repairability concerns overlap with matching disputes, see the Roof Matching Documentation Guide for material identification and availability research standards.",
    },
    {
      id: "build-documentation-package",
      title: "Build a Roof Repairability Documentation Package",
      actions: [
        "Roof overview photos — wide elevations of all visible planes included and labeled.",
        "Close-up material photos — identification-grade detail on condition within and adjacent to repair boundary.",
        "Test square documentation — location, date, methodology, and results indexed in the file.",
        "Brittle observations — field notes and photos supporting fragility conclusions.",
        "Collateral damage photos — detail and context shots of adjacent material affected during evaluation.",
        "Manufacturer information — product identification and published repair guidance with dates.",
        "Field notes — complete dated observation log from evaluation through testing.",
        "Contractor narrative — one-page objective summary tying evidence to repair limitations.",
        "Scope comparison — table linking carrier-approved scope to field conditions and requested revisions.",
      ],
      notes:
        "Roof repairability decisions should be supported by clear field observations, organized documentation, and objective evidence. The stronger the documentation package, the easier it is to communicate repair limitations during claim review.",
    },
    {
      id: "common-repairability-mistakes",
      title: "Common Roof Repairability Documentation Mistakes",
      actions: [
        "No repairability testing — asserting brittleness without field observations or photos weakens the file at desk review.",
        "Poor photo documentation — damage-only close-ups without slope context make it hard to locate observations.",
        "Weak narratives — subjective conclusions without tying each claim to specific test results or photos.",
        "Missing material identification — repairability arguments lack foundation without manufacturer and product record.",
        "Unsupported conclusions — requesting full slope replacement without documenting repair limitations at the approved boundary.",
        "Documentation not matching estimate — photos and notes must map to specific estimate lines and repair areas.",
      ],
    },
    {
      id: "repairability-supplement-support",
      title: "When Repairability Documentation Supports a Supplement",
      actions: [
        "Additional roof slopes — when collateral damage or brittle material extends beyond the approved repair area, document why adjacent slopes require expanded scope.",
        "Expanded repair scope — tie test results and removal observations to specific additional squares or courses.",
        "Material limitations — link manufacturer guidance and product condition to scope that aligns with field feasibility.",
        "Repair concerns — document why partial repair creates further damage risk with photos and field notes.",
        "Documentation-to-estimate alignment — each supplement line should reference specific test observations, photos, or manufacturer documents — educational and documentation-focused, not a guarantee of approval.",
      ],
      notes:
        "Repairability supplements succeed when field observations, test documentation, and scope requests tell the same story. Carriers evaluate repairability arguments against policy language, evidence quality, and field conditions — outcomes are never guaranteed.",
    },
  ],
  qualityGates: [
    {
      id: "overview-photos-complete",
      label: "Roof overview photos on file before testing",
      required: true,
      detail:
        "All visible slopes captured with consistent labeling before repairability evaluation.",
    },
    {
      id: "testing-documented",
      label: "Repairability testing documented with photos",
      required: true,
      detail:
        "Test location, methodology, and results recorded with supporting imagery.",
    },
    {
      id: "collateral-damage-captured",
      label: "Collateral damage photographed",
      required: true,
      detail:
        "Adjacent material impact documented with close-up and context shots.",
    },
    {
      id: "manufacturer-reviewed",
      label: "Manufacturer information reviewed and saved",
      required: true,
      detail:
        "Product identification and published repair guidance on file with dates.",
    },
    {
      id: "scope-comparison-indexed",
      label: "Scope comparison indexed to evidence",
      required: true,
      detail:
        "Carrier repair boundaries compared to field conditions and tied to estimate lines.",
    },
  ],
  commonMistakes: [
    {
      mistake: "No repairability testing performed",
      impact:
        "Brittleness claims fail desk review without field observations or photos supporting repair limitations.",
      correction:
        "Document test area location, methodology, and results with before-and-after photos before supplement submission.",
    },
    {
      mistake: "Poor photo documentation",
      impact:
        "Reviewers cannot locate observations on the slope — repairability argument lacks context.",
      correction:
        "Pair every close-up with an overview shot showing slope label and repair boundary.",
    },
    {
      mistake: "Weak or subjective narratives",
      impact:
        "Unsupported conclusions treated as opinion — supplement denied for insufficient evidence.",
      correction:
        "Tie each repair limitation statement to a specific photo, test result, or manufacturer reference.",
    },
    {
      mistake: "Missing material identification",
      impact:
        "Repairability evaluation lacks foundation without knowing product type, age, and manufacturer.",
      correction:
        "Record manufacturer, product line, and approximate age before testing and supplement submission.",
    },
    {
      mistake: "Unsupported conclusions",
      impact:
        "Full slope replacement requested without documenting why partial repair fails at the approved boundary.",
      correction:
        "Build scope comparison table linking each requested line to test observations and collateral damage photos.",
    },
    {
      mistake: "Documentation not matching estimate",
      impact:
        "Strong field photos exist but reviewers cannot map them to estimate lines — supplement stalls.",
      correction:
        "Index every photo and field note to a specific repair area and estimate line reference.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Brittle material cannot withstand partial repair at approved boundary",
      documentation:
        "Test square results, failed lift photos, and field notes on cracking during handling.",
      lineItemHint: "Expanded removal squares on adjacent courses or full slope when repair risks further damage",
    },
    {
      trigger: "Collateral damage extends beyond carrier-approved repair area",
      documentation:
        "Photos of broken tabs, torn shingles, and nail pull-through on courses outside approved scope.",
      lineItemHint: "Additional removal and replacement on slopes affected during repairability evaluation",
    },
    {
      trigger: "Manufacturer guidance limits repair on existing aged product",
      documentation:
        "Published repair recommendations, product bulletins, and material condition photos.",
      lineItemHint: "Scope aligned with manufacturer minimum repair boundaries or full slope replacement",
    },
    {
      trigger: "Seal strip failure prevents resealing disturbed courses",
      documentation:
        "Lift attempt photos, seal strip close-ups, and notes on age-related adhesion loss.",
      lineItemHint: "Expanded replacement scope on courses that cannot be resealed after repair attempt",
    },
  ],
  relatedResources: [
    {
      label: "HOA Roofing Claims Guide",
      href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
    },
    {
      label: "Commercial Roofing Documentation Guide",
      href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
    },
    {
      label: "Roof Reinspection Guide",
      href: "/resources/guides/roofing-claims/roof-reinspection-guide",
    },
    {
      label: "Roof Matching Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
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
      label: "Roof Reinspection Day-Of Checklist",
      href: "/resources/guides/roofing-claims/reinspection-preparation-guide",
    },
    {
      label: "Code Upgrade Documentation",
      href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
    },
    {
      label: "Roof matching vs repairability",
      href: "/resources/blog/roof-matching-vs-repairability-when-to-supplement",
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
