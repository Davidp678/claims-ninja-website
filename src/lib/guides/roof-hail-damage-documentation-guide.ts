import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/roofing" as const;
const CATEGORY = "roofing-claims" as const;
const GUIDE_SLUG = "roof-hail-damage-documentation-guide" as const;

export const ROOF_HAIL_DAMAGE_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Hail Damage Roof Documentation Guide for Contractors",
  excerpt:
    "Learn how contractors document hail damage on roofing claims: impact patterns, test squares, soft metals, slope labeling, collateral evidence, and field documentation that supports accurate storm claim review.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Hail damage",
    "Storm claims",
    "Test square",
    "Soft metals",
    "Impact documentation",
    "Roofing claims",
    "Supplement",
    "Documentation",
  ],
  publishedAt: "2026-06-26",
  updatedAt: "2026-06-26",
  estimatedMinutes: 14,
  seoTitle: "Hail Damage Roof Documentation Guide for Contractors",
  seoDescription:
    "Document hail damage on roofing insurance claims: impact patterns, test squares, soft metals, slope photos, and field evidence that supports storm supplement review.",
  relatedGuideSlugs: [
    "hoa-roofing-claims-guide",
    "commercial-roofing-documentation-guide",
    "roof-wind-damage-documentation-guide",
    "roof-reinspection-guide",
    "roof-repairability-documentation-guide",
    "roof-matching-documentation-guide",
    "roofing-documentation-guide",
    "roof-measurement-documentation-guide",
    "roofing-supplement-checklist",
  ],
  relatedBlogSlugs: [
    "hail-damage-roof-claims-documentation-supplement",
    "roofing-supplement-playbook",
  ],
  faqIds: [
    "roof-hail-vs-wind-documentation",
    "roof-layered-tear-off-discovery",
    "roof-flashing-supplement-qualification",
    "roofing-carrier-documentation",
    "roofing-storm-vs-retail",
    "supplements-whats-included",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["hail", "wind", "replacement"],
  purpose:
    "Hail damage on roofing claims is evaluated through impact patterns, test square results, soft metal collateral, and slope-labeled photo evidence — not generic storm photos. This guide is the contractor playbook for documenting hail-specific roof damage for insurance claim review and supplement support. For wind creases, lifted tabs, and directional damage patterns, see the Wind Damage Roof Documentation Guide. This guide is not legal advice and not a guarantee of claim outcomes.",
  whenToUse: [
    {
      condition: "Storm event reported with hail at or near the property",
      signal: "Weather data, homeowner report, or neighborhood damage pattern documented",
    },
    {
      condition: "Carrier estimate shows repair-only scope on hail-affected slopes",
      signal: "Field inspection finds impact marks beyond carrier sketch boundaries",
    },
    {
      condition: "Test square or impact survey required by carrier program",
      signal: "Desk review requests hail count methodology or collateral metal documentation",
    },
    {
      condition: "Supplement or reinspection pending on hail-related scope gaps",
      signal: "Denied lines cite insufficient hail evidence or cosmetic-only determination",
    },
  ],
  prerequisites: [
    "Claim number and carrier estimate or inspection report on file",
    "Weather or storm date documented for the loss",
    "Slope naming convention agreed before photo capture begins",
    "Chalk, test square template, or carrier-approved impact survey method available on site",
  ],
  requiredDocumentation: [
    {
      id: "roof-overview-photos",
      label: "Roof overview photos by slope",
      required: true,
      detail:
        "Wide elevation shots of every plane before close-up hail documentation — establishes slope labels and damage boundaries.",
    },
    {
      id: "hail-impact-closeups",
      label: "Hail impact close-up photos",
      required: true,
      detail:
        "Chalk-circled or annotated impacts showing mat fracture, granule displacement, or exposed asphalt on shingle surfaces.",
    },
    {
      id: "test-square-results",
      label: "Test square or impact survey results",
      required: true,
      detail:
        "Documented test area location, impact count, methodology, and photos tied to slope label and date.",
    },
    {
      id: "soft-metal-photos",
      label: "Soft metal collateral photos",
      required: true,
      detail:
        "Dented vents, flashings, gutters, downspouts, and AC fins with overview context on each elevation.",
    },
    {
      id: "material-identification",
      label: "Material identification",
      required: true,
      detail:
        "Shingle manufacturer, product line, approximate age, and weathering condition supporting impact vs pre-existing wear analysis.",
    },
    {
      id: "scope-comparison",
      label: "Carrier scope comparison",
      required: true,
      detail:
        "Table linking carrier-approved slopes or repair areas to documented hail impacts and test square results.",
    },
    {
      id: "contractor-narrative",
      label: "Contractor narrative summary",
      required: true,
      detail:
        "One-page objective summary tying storm date, impact evidence, test results, and soft metals to requested scope — indexed to estimate lines.",
    },
  ],
  steps: [
    {
      id: "hail-vs-pre-existing",
      title: "Distinguish Hail Impacts from Pre-Existing Wear",
      actions: [
        "Document shingle age, sun exposure, and prior weathering before attributing damage to the reported storm.",
        "Photograph impact marks with chalk circles and adjacent unaffected courses for comparison.",
        "Note mat fracture, circular impact patterns, and fresh granule displacement distinct from uniform age-related loss.",
        "Record storm date and any available weather verification alongside field observations.",
      ],
    },
    {
      id: "slope-labeling",
      title: "Label Slopes and Capture Overview Photos",
      actions: [
        "Assign consistent slope names (front, rear, left, right, garage, dormer) before close-up work.",
        "Capture one wide overview per slope showing ridge, eave, and primary damage zones.",
        "Photograph all elevations including low-visibility planes carriers may omit from aerial review.",
        "Pair every subsequent close-up with a context photo showing location on the slope.",
      ],
    },
    {
      id: "test-square-documentation",
      title: "Document Test Squares and Impact Surveys",
      actions: [
        "Select test areas representative of each disputed slope — document location on sketch or aerial.",
        "Record impact count, test square dimensions, and methodology used on site.",
        "Photograph the test area before, during, and after chalk marking or template placement.",
        "Tie test results to carrier threshold language when known — without overstating conclusions.",
      ],
      notes:
        "Carriers apply different hail count thresholds. Document methodology objectively; let evidence support scope requests rather than assuming automatic replacement.",
    },
    {
      id: "soft-metals",
      title: "Document Soft Metal Collateral",
      actions: [
        "Photograph dented roof vents, pipe boots, valley metal, drip edge, gutters, and downspouts.",
        "Include HVAC condenser fins, window screens, and other collateral when accessible and relevant.",
        "Capture overview and close-up pairs so desk reviewers can locate each metal component.",
        "Index soft metal photos to supplement line items for vents, flashing, and detach-and-reset scope.",
      ],
    },
    {
      id: "layered-roofing-discovery",
      title: "Document Layered Roofing During Tear-Off",
      actions: [
        "Photograph each layer exposed during tear-off with date stamp and slope label.",
        "Record layer count, material type, and condition of underlying courses.",
        "Document discovery before overlay removal is complete — carriers dispute layers not visible in pre-tear-off photos.",
        "Tie additional tear-off squares to layer discovery photos and field notes in the supplement narrative.",
      ],
    },
    {
      id: "build-hail-package",
      title: "Build a Hail Documentation Package",
      actions: [
        "Organize photos by slope, then by damage type (impacts, test squares, soft metals).",
        "Include scope comparison table linking carrier estimate lines to field evidence.",
        "Add contractor narrative summarizing storm date, methodology, and requested scope revisions.",
        "Cross-reference matching or repairability guides when hail damage triggers partial-replacement disputes.",
      ],
      notes:
        "When hail documentation supports reinspection, complete the package before requesting a carrier revisit — see the Roof Reinspection Guide for Contractors.",
    },
    {
      id: "common-hail-mistakes",
      title: "Common Hail Documentation Mistakes",
      actions: [
        "Damage-only close-ups without slope context — reviewers cannot locate impacts on the roof.",
        "No test square methodology recorded — impact counts appear unsupported at desk review.",
        "Soft metals omitted — collateral evidence strengthens hail authentication on disputed files.",
        "Layer discovery documented after tear-off without progressive photos — additional layer charges denied.",
        "Storm date or weather reference missing — timeline disputes weaken supplement arguments.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "overview-complete",
      label: "Overview photos on every slope",
      required: true,
      detail: "Wide elevation shots captured before close-up hail documentation.",
    },
    {
      id: "test-square-documented",
      label: "Test square or impact survey documented",
      required: true,
      detail: "Location, methodology, count, and photos on file per disputed slope.",
    },
    {
      id: "soft-metals-captured",
      label: "Soft metal collateral photographed",
      required: true,
      detail: "Vents, flashings, and accessible collateral indexed to elevations.",
    },
    {
      id: "scope-indexed",
      label: "Scope comparison indexed to evidence",
      required: true,
      detail: "Carrier estimate lines tied to specific photos and test results.",
    },
  ],
  commonMistakes: [
    {
      mistake: "No slope labels on hail photos",
      impact: "Desk reviewers cannot verify which planes carry documented impacts.",
      correction: "Label every photo with slope name and date before supplement submission.",
    },
    {
      mistake: "Test square results not photographed",
      impact: "Impact counts treated as unsupported at carrier review.",
      correction: "Capture test area location, template, and counted impacts with overview context.",
    },
    {
      mistake: "Soft metals skipped on shingle-only inspections",
      impact: "Missed authentication evidence and accessory line items on hail files.",
      correction: "Walk every elevation for vent, flashing, and gutter collateral before leaving site.",
    },
    {
      mistake: "Layer count discovered without tear-off photo sequence",
      impact: "Additional tear-off layer charges denied as undocumented discovery.",
      correction: "Photograph each exposed layer progressively during tear-off with slope labels.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Test square impacts exceed carrier threshold on additional slopes",
      documentation: "Test square photos, impact counts, and slope-labeled overview shots.",
      lineItemHint: "Additional removal and replacement squares on affected slopes",
    },
    {
      trigger: "Soft metal damage supports hail authentication and accessory scope",
      documentation: "Dented vent, flashing, and gutter photos indexed to elevations.",
      lineItemHint: "Vent replacement, flashing, drip edge, detach and reset",
    },
    {
      trigger: "Layered roofing discovered during tear-off",
      documentation: "Progressive tear-off photos showing each layer and material type.",
      lineItemHint: "Additional tear-off layer charges per square",
    },
    {
      trigger: "Flashing damaged by hail impacts at walls and penetrations",
      documentation: "Close-up and context photos of bent, cracked, or displaced flashing.",
      lineItemHint: "Step flashing, pipe boot, valley metal replacement",
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
      label: "Wind Damage Roof Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-wind-damage-documentation-guide",
    },
    {
      label: "Roof Reinspection Guide",
      href: "/resources/guides/roofing-claims/roof-reinspection-guide",
    },
    {
      label: "Roof Repairability Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
    },
    {
      label: "Roof Matching Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
    },
    {
      label: "Roofing Supplement Checklist",
      href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
    },
    {
      label: "Hail damage roof claims blog",
      href: "/resources/blog/hail-damage-roof-claims-documentation-supplement",
    },
    {
      label: "Roofing supplement playbook",
      href: "/resources/blog/roofing-supplement-playbook",
    },
    {
      label: "Claims Ninja platform",
      href: "/platform",
    },
  ],
});
