import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/roofing" as const;
const CATEGORY = "roofing-claims" as const;
const GUIDE_SLUG = "roof-wind-damage-documentation-guide" as const;

export const ROOF_WIND_DAMAGE_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Wind Damage Roof Documentation Guide for Contractors",
  excerpt:
    "Learn how contractors document wind damage on roofing claims: creased tabs, lifted seals, directional patterns, collateral evidence, slope labeling, and field documentation that supports storm supplement review.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Wind damage",
    "Storm claims",
    "Creased shingles",
    "Lifted tabs",
    "Directional damage",
    "Roofing claims",
    "Supplement",
    "Documentation",
  ],
  publishedAt: "2026-06-26",
  updatedAt: "2026-06-26",
  estimatedMinutes: 14,
  seoTitle: "Wind Damage Roof Documentation Guide for Contractors",
  seoDescription:
    "Document wind damage on roofing insurance claims: creased tabs, lifted seals, directional patterns, slope photos, and field evidence for storm supplement review.",
  relatedGuideSlugs: [
    "hoa-roofing-claims-guide",
    "multi-building-roofing-claims-guide",
    "commercial-roofing-documentation-guide",
    "roof-hail-damage-documentation-guide",
    "roof-reinspection-guide",
    "roof-repairability-documentation-guide",
    "roof-matching-documentation-guide",
    "roofing-documentation-guide",
    "roof-measurement-documentation-guide",
    "roofing-supplement-checklist",
  ],
  relatedBlogSlugs: [
    "wind-damage-roof-claims-what-carriers-miss",
    "roofing-supplement-playbook",
  ],
  faqIds: [
    "roof-hail-vs-wind-documentation",
    "roof-flashing-supplement-qualification",
    "roofing-carrier-documentation",
    "roofing-storm-vs-retail",
    "supplements-whats-included",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["hail", "wind", "replacement"],
  purpose:
    "Wind damage on roofing claims is evaluated through creased tabs, broken seals, directional patterns, and slope-labeled photo evidence — not generic storm photos. This guide is the contractor playbook for documenting wind-specific roof damage for insurance claim review and supplement support. For hail impacts, test squares, and soft metal collateral, see the Hail Damage Roof Documentation Guide. This guide is not legal advice and not a guarantee of claim outcomes.",
  whenToUse: [
    {
      condition: "Storm event reported with high winds at or near the property",
      signal: "Weather data, homeowner report, or directional damage pattern on multiple slopes",
    },
    {
      condition: "Carrier estimate shows isolated repair on wind-exposed slopes only",
      signal: "Field inspection finds creased or lifted tabs beyond carrier sketch boundaries",
    },
    {
      condition: "Desk review disputes wind-related scope as mechanical or pre-existing",
      signal: "Denial cites lack of directional pattern or seal failure evidence",
    },
    {
      condition: "Supplement or reinspection pending on wind-related scope gaps",
      signal: "Open lines for additional slopes, ridge, or starter courses omitted from estimate",
    },
  ],
  prerequisites: [
    "Claim number and carrier estimate or inspection report on file",
    "Storm date and prevailing wind direction documented when available",
    "Slope naming convention agreed before photo capture begins",
    "Field crew briefed on capturing creases, lifted tabs, and seal failures without disturbing evidence",
  ],
  requiredDocumentation: [
    {
      id: "roof-overview-photos",
      label: "Roof overview photos by slope",
      required: true,
      detail:
        "Wide elevation shots of every plane showing wind exposure and primary damage zones.",
    },
    {
      id: "wind-damage-closeups",
      label: "Wind damage close-up photos",
      required: true,
      detail:
        "Creased tabs, lifted shingles, broken seal strips, and missing tabs with slope context.",
    },
    {
      id: "directional-pattern",
      label: "Directional damage pattern documentation",
      required: true,
      detail:
        "Notes and photos showing damage concentration on windward ridges, eaves, and rakes when observable.",
    },
    {
      id: "ridge-starter-evidence",
      label: "Ridge and starter course evidence",
      required: true,
      detail:
        "Photos of displaced ridge caps, damaged starter, and hip lines when wind uplift is documented.",
    },
    {
      id: "material-identification",
      label: "Material identification",
      required: true,
      detail:
        "Shingle type, age, and condition supporting wind damage vs pre-existing wear analysis.",
    },
    {
      id: "scope-comparison",
      label: "Carrier scope comparison",
      required: true,
      detail:
        "Table linking carrier-approved slopes or repair areas to documented wind damage.",
    },
    {
      id: "contractor-narrative",
      label: "Contractor narrative summary",
      required: true,
      detail:
        "One-page objective summary tying storm date, wind pattern, and field evidence to requested scope.",
    },
  ],
  steps: [
    {
      id: "wind-vs-pre-existing",
      title: "Distinguish Wind Damage from Pre-Existing Wear",
      actions: [
        "Document shingle age and prior repairs before attributing damage to the reported storm.",
        "Photograph creases, lifted tabs, and broken seals with slope context and date stamp.",
        "Note directional patterns — damage concentrated on windward slopes supports storm attribution.",
        "Record storm date and available weather data alongside field observations.",
      ],
    },
    {
      id: "slope-labeling",
      title: "Label Slopes and Capture Overview Photos",
      actions: [
        "Assign consistent slope names before close-up documentation.",
        "Capture wide shots showing ridge, eave, and rake conditions on each plane.",
        "Document wind-exposed elevations carriers may under-scope from aerial review alone.",
        "Pair every close-up with a context photo showing location on the slope.",
      ],
    },
    {
      id: "creases-seals",
      title: "Document Creases, Lifts, and Seal Failures",
      actions: [
        "Photograph creased tabs at butt joints and along windward edges.",
        "Capture lifted shingles with visible seal strip separation.",
        "Document missing or displaced tabs with overview context.",
        "Record ridge cap displacement and hip line damage when present.",
      ],
    },
    {
      id: "directional-patterns",
      title: "Document Directional Damage Patterns",
      actions: [
        "Note prevailing wind direction from weather data or homeowner report when available.",
        "Photograph heavier damage concentration on windward ridges and eaves.",
        "Compare windward vs leeward slopes in the scope comparison table.",
        "Avoid overstating conclusions — document observable patterns objectively.",
      ],
    },
    {
      id: "flashing-accessories",
      title: "Document Flashing and Accessory Wind Damage",
      actions: [
        "Photograph displaced step flashing, bent drip edge, and lifted pipe boots.",
        "Capture detached gutters, fascia damage, and vent displacement when storm-related.",
        "Index accessory photos to supplement line items for flashing and detach-and-reset scope.",
        "See flashing supplement FAQ when carriers approve patch-only scope on bent or creased metal.",
      ],
    },
    {
      id: "build-wind-package",
      title: "Build a Wind Documentation Package",
      actions: [
        "Organize photos by slope, then by damage type (creases, lifts, ridge, accessories).",
        "Include scope comparison table linking carrier estimate lines to field evidence.",
        "Add contractor narrative summarizing storm date, directional pattern, and requested revisions.",
        "Cross-reference repairability guide when wind damage triggers partial-replacement disputes.",
      ],
    },
    {
      id: "common-wind-mistakes",
      title: "Common Wind Documentation Mistakes",
      actions: [
        "Generic storm photos without crease or seal failure detail.",
        "No directional pattern notes — damage appears random at desk review.",
        "Ridge and starter damage omitted from shingle-field-only photo sets.",
        "Flashing displacement not indexed to accessory line items.",
        "Wind and hail evidence blended without separating damage mechanisms.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "overview-complete",
      label: "Overview photos on every slope",
      required: true,
      detail: "Wide elevation shots captured before close-up wind documentation.",
    },
    {
      id: "creases-documented",
      label: "Creases and seal failures photographed",
      required: true,
      detail: "Close-up and context pairs on each disputed slope.",
    },
    {
      id: "directional-noted",
      label: "Directional pattern documented",
      required: true,
      detail: "Wind exposure and damage concentration recorded in field notes.",
    },
    {
      id: "scope-indexed",
      label: "Scope comparison indexed to evidence",
      required: true,
      detail: "Carrier estimate lines tied to specific photos and observations.",
    },
  ],
  commonMistakes: [
    {
      mistake: "No slope labels on wind damage photos",
      impact: "Desk reviewers cannot verify which planes carry documented creases or lifts.",
      correction: "Label every photo with slope name and date before supplement submission.",
    },
    {
      mistake: "Ridge and starter damage not photographed",
      impact: "Wind uplift scope on hips and eaves denied as unsupported.",
      correction: "Walk ridge lines and eaves specifically for displacement and crease evidence.",
    },
    {
      mistake: "Wind and hail evidence combined without separation",
      impact: "Carriers dispute attribution when damage mechanisms are unclear.",
      correction: "Document hail impacts and wind creases in separate photo groups per slope.",
    },
    {
      mistake: "Flashing damage noted but not photographed",
      impact: "Accessory supplement lines denied for lack of visual evidence.",
      correction: "Capture close-up and context pairs on every displaced or bent flashing component.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Creased or lifted tabs on slopes beyond carrier repair boundary",
      documentation: "Slope-labeled crease and seal failure photos with scope comparison.",
      lineItemHint: "Additional removal and replacement squares on affected slopes",
    },
    {
      trigger: "Ridge cap and starter damage from wind uplift",
      documentation: "Ridge line and eave photos showing displacement and broken seals.",
      lineItemHint: "Ridge cap, starter course, hip/ridge labor",
    },
    {
      trigger: "Flashing bent or displaced by wind at walls and penetrations",
      documentation: "Close-up and context photos of step flashing, pipe boots, and drip edge.",
      lineItemHint: "Flashing replacement, pipe boot, detach and reset",
    },
    {
      trigger: "Repairability limits after wind damage isolation attempt",
      documentation: "Test observations and collateral damage photos on brittle courses.",
      lineItemHint: "Expanded removal scope — cross-reference repairability guide",
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
      label: "Hail Damage Roof Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-hail-damage-documentation-guide",
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
      label: "Wind damage roof claims blog",
      href: "/resources/blog/wind-damage-roof-claims-what-carriers-miss",
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
