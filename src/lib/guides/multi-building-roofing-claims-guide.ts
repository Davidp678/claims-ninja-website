import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/roofing" as const;
const CATEGORY = "roofing-claims" as const;
const GUIDE_SLUG = "multi-building-roofing-claims-guide" as const;

export const MULTI_BUILDING_ROOFING_CLAIMS_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Multi-Building Roofing Claims Guide",
  excerpt:
    "Contractor playbook for documenting, estimating, and managing insurance claims across apartment complexes, condominium communities, townhome developments, hotels, office parks, industrial campuses, schools, churches, and other multi-structure properties.",
  category: CATEGORY,
  guideType: "workflow",
  recommended: true,
  roles: ["field", "office", "supplement-coordinator", "project-manager"],
  claimPhase: "documentation",
  tags: [
    "Multi-building roofing",
    "Apartment complex",
    "Campus roofing",
    "Portfolio claims",
    "Sampling disputes",
    "Roof mapping",
    "Commercial roofing",
    "Roofing claims",
    "Supplement",
    "Documentation",
    "Phased claims",
  ],
  publishedAt: "2026-07-08",
  updatedAt: "2026-07-08",
  estimatedMinutes: 26,
  seoTitle:
    "Multi-Building Roofing Claims Guide | Contractor Playbook for Campus & Portfolio Roof Claims",
  seoDescription:
    "Document, estimate, and manage multi-building roofing insurance claims on apartments, campuses, and commercial portfolios — inspections, sampling disputes, supplements, and phased production.",
  relatedGuideSlugs: [
    "commercial-roofing-documentation-guide",
    "hoa-roofing-claims-guide",
    "roof-matching-documentation-guide",
    "roof-repairability-documentation-guide",
    "roof-hail-damage-documentation-guide",
    "roof-wind-damage-documentation-guide",
    "roofing-documentation-guide",
    "roofing-supplement-checklist",
    "code-upgrade-documentation-guide",
    "roof-reinspection-guide",
  ],
  relatedBlogSlugs: [
    "roofing-supplement-playbook",
    "what-is-a-roof-supplement",
    "hail-damage-roof-claims-documentation-supplement",
    "wind-damage-roof-claims-what-carriers-miss",
    "roof-matching-vs-repairability-when-to-supplement",
  ],
  faqIds: [
    "roof-multi-building-carrier-handling",
    "roof-multi-building-partial-replacement",
    "roof-multi-building-apartment-documentation",
    "roof-multi-building-matching",
    "roof-multi-building-supplement-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["commercial", "hail", "wind", "replacement"],
  purpose:
    "Multi-building roofing insurance claims require documentation scaled to portfolio size, construction variety, carrier sampling protocols, and phased production logistics — not single-structure residential templates applied to apartment complexes, hotel campuses, or office parks. This guide is the contractor playbook for site inventory, inspections, standardized damage documentation, estimating support, supplement recovery, and project coordination across multiple roofing structures. For HOA and condominium governance, board approval, and common-element responsibility boundaries, see the HOA Roofing Claims Guide. For low-slope membrane assemblies on commercial-style buildings, see the Commercial Roofing Documentation Guide. For peril-specific storm documentation, see the Hail and Wind Damage Roof Documentation Guides. This guide is not legal advice, not a guarantee of claim outcomes, and not a roofing installation manual. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Apartment, hotel, office park, industrial campus, school, or church roof loss spanning multiple structures",
      signal:
        "Property manager or owner requests inspection across a portfolio with varying roof types, heights, and construction vintages",
    },
    {
      condition: "Carrier proposes representative sampling or spot repairs instead of full-building scope",
      signal:
        "Desk reviewer cites statistical sampling, partial replacement, or repairability arguments without building-level photo support",
    },
    {
      condition: "Partial-building damage with full-campus replacement or matching question",
      signal:
        "Some buildings damaged while others appear intact — uniformity, repairability, or discontinued material arguments pending",
    },
    {
      condition: "Large-value supplement or specialist adjuster review on multi-structure roofing file",
      signal:
        "Denied lines cite insufficient building indexing, undocumented mobilizations, or missing site inventory before production",
    },
    {
      condition: "Phased production across occupied multi-building property",
      signal:
        "Access coordination, staging constraints, or partial approvals require building-by-building claim handling and documentation",
    },
  ],
  prerequisites: [
    "Claim number, carrier estimate, and property management or owner liaison contact on file",
    "Building inventory template with consistent numbering across the entire site",
    "Safety plan, fall protection, and roof access authorization documented before field mobilization",
    "Site map or aerial overview with building labels before detailed close-up documentation",
    "Documentation naming convention agreed: PropertyID_BuildingID_Elevation_Condition_Date",
    "Project manager or documentation lead assigned on multi-building portfolio losses",
  ],
  requiredDocumentation: [
    {
      id: "building-inventory",
      label: "Building inventory with consistent numbering",
      required: true,
      detail:
        "Master list of every structure, building ID, roof type, square count, elevation count, and construction vintage indexed to the site plan.",
    },
    {
      id: "site-map",
      label: "Site map with building labels and roof identification",
      required: true,
      detail:
        "Site plan, GIS overlay, or aerial map showing every building, elevation orientation, detached structures, and accessory buildings.",
    },
    {
      id: "roof-system-inventory",
      label: "Roofing system inventory per building",
      required: true,
      detail:
        "Assembly type (shingle, tile, metal, TPO, EPDM, mod bit, etc.), manufacturer, approximate age, and layer count documented per structure.",
    },
    {
      id: "per-building-photos",
      label: "Per-building, per-elevation photo index",
      required: true,
      detail:
        "Separate photo folders or albums for each building and elevation — overview and close-up pairs with consistent naming.",
    },
    {
      id: "access-coordination-log",
      label: "Access and coordination log",
      required: true,
      detail:
        "Property authorization, tenant or occupant notification records, access delays, escort requirements, and after-hours restrictions documented contemporaneously.",
    },
    {
      id: "inspection-sequence-log",
      label: "Inspection sequence and completion log",
      required: true,
      detail:
        "Date-stamped record of which buildings were inspected, by whom, and any structures deferred due to access or safety constraints.",
    },
    {
      id: "measurements-reconciled",
      label: "Building-by-building measurements reconciled",
      required: true,
      detail:
        "Per-building measurement reports reconciled to carrier sketch with variance tables for cut-up geometry and multi-level sections.",
    },
    {
      id: "scope-comparison",
      label: "Scope comparison indexed to buildings",
      required: true,
      detail:
        "Carrier estimate lines tied to specific buildings, elevations, and photo evidence before supplement submission.",
    },
    {
      id: "contractor-narrative",
      label: "Contractor narrative indexed to estimate",
      required: true,
      detail:
        "Written summary linking site inventory, damage findings, sampling methodology, and line-item justification per building.",
    },
  ],
  steps: [
    {
      id: "why-multi-building-unique",
      title: "Why Multi-Building Roofing Claims Are Unique",
      actions: [
        "Multiple structures — apartment complexes, hotels, office parks, industrial campuses, schools, and churches each contain distinct buildings requiring separate documentation tracks, not one aggregated photo folder.",
        "Large claim values — total insured values multiply across structures, triggering specialist adjusters, engineer review, statistical sampling protocols, and extended desk-review cycles.",
        "Increased carrier scrutiny — carriers apply representative sampling, spot-repair arguments, and partial-replacement limits more aggressively when claim values exceed single-structure thresholds.",
        "Sampling disputes — desk reviewers may approve scope on sampled buildings while denying identical damage on unsampled structures; building-level indexing defeats statistical shortcuts.",
        "Consistency challenges — construction differences, roof system variety, and varying ages across buildings require standardized documentation formats applied uniformly despite field variation.",
        "Extensive documentation requirements — carriers expect site maps, building inventories, per-structure photo indexes, and measurement reconciliation beyond single-home residential templates.",
        "Project logistics — staging, crane setup, material delivery, debris removal, and tenant coordination vary by building and must be documented to support estimate line items.",
        "Phased claim handling — partial approvals, building-by-building production, and progressive supplements require contemporaneous logs that tie each phase to indexed field evidence.",
      ],
    },
    {
      id: "property-inventory-site-planning",
      title: "Property Inventory & Site Planning",
      actions: [
        "Building numbering — adopt property management's official numbering scheme; mismatched labels between contractor files and owner records delay carrier and production review.",
        "Site maps — publish a labeled site plan showing every building, elevation orientation, parking structures, and detached amenities before detailed close-up documentation.",
        "Roof identification — assign each roof plane a unique identifier tied to building ID and elevation; multi-level and cut-up geometry requires slope-level labels on the site map.",
        "Building classifications — categorize structures by use (residential units, amenity, office, warehouse, parking) and construction type to support scope attribution and carrier review.",
        "Construction differences — document varying roof pitches, heights, access points, and assembly types across buildings; carriers cannot apply single-structure assumptions to mixed portfolios.",
        "Roofing system inventory — record assembly type, manufacturer, approximate age, and layer count per building before peril-specific documentation begins.",
        "Drone overviews — capture aerial context for campus layouts, inaccessible slopes, shared drainage paths, and building-to-building relationships when permitted and safe.",
        "GIS and site plans — attach property-provided GIS exports, as-built drawings, or survey plans when available; reconcile field findings to official site geometry.",
      ],
      notes:
        "See the HOA Roofing Claims Guide when the property is a community association with governing documents and board approval requirements.",
    },
    {
      id: "inspection-workflow",
      title: "Inspection Workflow",
      actions: [
        "Inspection sequencing — complete building inventory before field work; schedule inspections in logical campus zones to maintain consistent crew documentation standards.",
        "Drone documentation — capture campus overviews, roof plane relationships, and inaccessible areas before ground and roof-level close-ups.",
        "Ground photography — photograph every building elevation from ground level with overview shots showing building ID labels before ascending to roof level.",
        "Roof photography — overview and close-up pairs for every elevation on every building; never mix Building 3 damage into Building 7 folders.",
        "Test squares — perform hail test squares per building on storm losses; record square location, impact count, and functional damage findings indexed to building ID.",
        "Moisture surveys — conduct infrared or nuclear moisture scans on low-slope assemblies per building when wet insulation is suspected; see Commercial Roofing Documentation Guide for membrane protocols.",
        "Interior inspections — correlate ceiling stains, attic decking, and top-floor unit damage to roof zones above; interior maps support water intrusion documentation.",
        "Safety planning — document fall protection, roof access hazards, and crew safety plans before mobilizing across structures with varying heights and pitches.",
        "Access coordination — log property authorization, tenant notification, escort requirements, gate codes, and restricted areas before each inspection day.",
        "Consistent documentation standards — apply the same naming convention, photo pairing rules, and elevation labeling across every structure regardless of roof type or damage severity.",
      ],
      notes:
        "See the Hail and Wind Damage Roof Documentation Guides for peril-specific field evidence standards on storm losses.",
    },
    {
      id: "damage-documentation",
      title: "Damage Documentation",
      actions: [
        "Wind damage — document creased tabs, broken seals, lifted edges, and directional patterns per building and elevation; see Wind Damage Roof Documentation Guide.",
        "Hail damage — record impact patterns, test square results, soft metal collateral, and functional damage per building; see Hail Damage Roof Documentation Guide.",
        "Mechanical damage — photograph HVAC maintenance damage, foot traffic wear, and equipment impact separate from storm-created conditions to support attribution.",
        "Water intrusion — correlate interior ceiling maps to roof zones; document ponding, drain blockages, and membrane breaches on low-slope sections.",
        "Flashings — capture wall, chimney, skylight, parapet, and penetration flashings per building with overview pairs showing location on the elevation.",
        "Ridge components — photograph ridge caps, hips, and ridge ventilation per building with damage indexed to specific linear footage.",
        "Valleys — document open and closed valley conditions, debris accumulation, and impact damage with building-specific measurement references.",
        "Gutters and downspouts — photograph length, slope, separation, and impact damage; document shared drainage runs spanning multiple buildings on the site map.",
        "Roof penetrations — pipe boots, vents, skylights, and exhaust fans photographed per building with overview and close-up pairs.",
        "HVAC equipment — document roof-mounted units, curbs, refrigerant lines, and detach-reset requirements per building; equipment inventory varies across campuses.",
        "Detached structures — garages, sheds, carports, mail kiosks, and storage buildings each receive building IDs and independent photo sets.",
        "Accessory buildings — pool houses, clubhouses, maintenance buildings, and gate structures treated as distinct indexed structures, not merged into nearest building folders.",
        "Standardized documentation — apply identical photo organization, naming convention, and elevation coverage rules to every structure regardless of damage severity or roof type.",
      ],
    },
    {
      id: "carrier-challenges",
      title: "Carrier Challenges",
      actions: [
        "Representative sampling disputes — when carriers sample a subset of buildings, document identical damage on unsampled structures with the same photo standards and test square methodology.",
        "Spot repair arguments — photograph repairability test results, collateral damage potential, and manufacturer patch limits per building; see Roof Repairability Documentation Guide.",
        "Partial replacement disputes — build per-building scope tables showing why partial repairs fail matching, repairability, or code compliance on specific structures.",
        "Matching across buildings — document color, profile, and weathering differences between damaged and undamaged buildings; attach supplier discontinued notices — see Roof Matching Documentation Guide.",
        "Uniform appearance — photograph elevation comparisons showing visible mismatch when only damaged buildings are replaced; uniform appearance arguments apply across campus sightlines.",
        "Functional damage — record creased tabs, broken seals, granule loss exposing mat, and bruising that affects water-shedding performance per building and elevation.",
        "Repairability — perform and photograph repairability tests per building; document brittleness, seal failure, and collateral damage risk — see Roof Repairability Documentation Guide.",
        "Manufacturer guidance — attach spec sheets showing patch limits exceeded on specific buildings; manufacturer requirements often drive full-slope replacement on multi-building campuses.",
      ],
    },
    {
      id: "estimating-multi-building",
      title: "Estimating Multi-Building Projects",
      actions: [
        "Separate building estimates — create distinct estimate sections or files per building when carrier templates allow; scope comparison tables must map every line to building IDs.",
        "Combined estimates — when carriers require single-file submission, include building-indexed scope tables and photo cross-reference sheets so desk reviewers can navigate multi-structure scope.",
        "Mobilization — log separate mobilization dates per building or phase when production is sequenced; photograph setup and teardown at each deployment.",
        "Crane costs — document building height, setback constraints, and crane setup locations per structure when hoisting is required on multi-story buildings.",
        "Safety equipment — record parapet heights, steep-slope conditions, warning-line requirements, and tie-off limitations that vary across buildings on the same campus.",
        "Material staging — photograph staging areas, delivery paths, and storage constraints per building zone; narrow campuses and occupied properties require documented logistics.",
        "Waste factors — document cut-up geometry, multi-level sections, and layer counts per building that affect waste calculations beyond single-structure averages.",
        "Access costs — record gated entry, escort requirements, parking restrictions, and narrow driveways that support access and logistics line items.",
        "Temporary protection — document emergency tarping, dry-in, and temporary repairs per building with date-stamped photos before permanent scope is negotiated.",
        "Scheduling impacts — log phased production schedules, tenant coordination delays, and weather interruptions per building with contemporaneous date stamps.",
      ],
      notes:
        "See the Roof Measurement Documentation Guide for measurement file standards and the Roofing Supplement Checklist before submission.",
    },
    {
      id: "supplement-opportunities",
      title: "Supplement Opportunities",
      actions: [
        "Code upgrades — document permit requirements and non-compliant existing conditions per building; see Code Upgrade Documentation Guide for citation standards.",
        "Matching — when discontinued materials or color mismatch affects uniform appearance across buildings, document supplier letters and elevation comparisons — see Roof Matching Documentation Guide.",
        "Hidden damage — progressive tear-off photos per building with dated discovery notes; submit supplements before covering new assemblies on phased production.",
        "Wet decking — photograph saturated decking, mold, and substrate deterioration discovered during tear-off; correlate to moisture survey findings on low-slope sections.",
        "Material availability — attach supplier letters confirming discontinued profiles, back-order delays, or minimum order quantities that prevent partial repair.",
        "Safety requirements — photograph varying parapet heights, tie-off limitations, and OSHA-driven protection setups that differ across buildings.",
        "Multiple mobilizations — log separate mobilization and setup per building when carrier estimate assumes single mobilization for the entire campus.",
        "Temporary repairs — date-stamped emergency mitigation photos per building before permanent production; timeline evidence supports emergency scope lines.",
        "Manufacturer requirements — attach spec sheets showing patch limits exceeded on specific buildings; manufacturer guidance drives full-slope replacement arguments.",
        "Building-specific conditions — document unique access, staging, or production constraints per structure that support building-specific line items omitted from carrier templates.",
      ],
    },
    {
      id: "multi-building-claims-checklist",
      title: "Multi-Building Claims Checklist",
      actions: [
        "Site inventory — building inventory complete with roof types, square counts, and construction classifications before field close-up work.",
        "Roof mapping — site plan published with building labels, elevation orientations, and detached structures indexed.",
        "Photography — overview and close-up pairs for every elevation on every building; accessory and detached structures indexed separately.",
        "Measurements — per-building measurements reconciled to carrier sketch with variance documentation.",
        "Documentation organization — consistent naming convention applied across all buildings; no mixed folders or unlabeled photo sets.",
        "Estimate review — building-by-building scope comparison complete; carrier gaps identified before supplement drafting.",
        "Supplement preparation — disputed lines tied to building-specific photos; Roofing Supplement Checklist complete.",
        "Carrier meetings — building-labeled evidence ready for adjuster walkthrough; escort assigned per campus zone.",
        "Reinspection preparation — building-indexed photo packets and on-site escorts prepared when carriers schedule campus reinspections — see Roof Reinspection Guide.",
        "Final quality review — every building represented in photo index, scope comparison, and contractor narrative before submission or production authorization.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "building-inventory-complete",
      label: "Building inventory complete with consistent numbering",
      required: true,
      detail: "Every structure, accessory building, and detached structure listed before field close-up work.",
    },
    {
      id: "every-elevation-photographed",
      label: "Every elevation photographed on every building",
      required: true,
      detail: "Overview and close-up pairs indexed to building ID and elevation orientation.",
    },
    {
      id: "site-map-published",
      label: "Site map published with building labels",
      required: true,
      detail: "Aerial or plan view showing every structure before supplement or carrier meeting.",
    },
    {
      id: "consistent-naming",
      label: "Consistent photo naming across all buildings",
      required: true,
      detail: "PropertyID_BuildingID_Elevation_Condition_Date applied uniformly — no mixed or unlabeled folders.",
    },
    {
      id: "scope-indexed-to-buildings",
      label: "Scope comparison indexed to buildings",
      required: true,
      detail: "Carrier estimate lines tied to specific buildings and photo evidence before submission.",
    },
    {
      id: "supplement-ready-gate",
      label: "Supplement package reviewed against checklist",
      required: true,
      detail: "Building-indexed scope comparison and Roofing Supplement Checklist complete before submission.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Single photo folder for entire campus or portfolio",
      impact:
        "Carriers cannot attribute damage to specific buildings; sampling disputes and scope lines denied as unverifiable.",
      correction:
        "Create separate photo albums per building ID with elevation subfolders before close-up documentation begins.",
    },
    {
      mistake: "Single mobilization assumed for multi-building production",
      impact:
        "General conditions and setup lines denied when phased deployments across campus are not documented.",
      correction:
        "Log mobilization dates, setup photos, and teardown per building or phase with contemporaneous records.",
    },
    {
      mistake: "Inconsistent building numbering between contractor and owner records",
      impact:
        "Scope comparison tables, carrier walkthroughs, and production schedules reference mismatched structures.",
      correction:
        "Confirm official building IDs with property management before field work and use them in every file component.",
    },
    {
      mistake: "Sampling documentation without representative building coverage",
      impact:
        "Carriers approve sampled buildings while denying identical damage on unsampled structures.",
      correction:
        "Apply identical test square methodology and photo standards to every building, not only carrier-selected samples.",
    },
    {
      mistake: "Merged estimate without building breakdown",
      impact:
        "Desk reviewers cannot approve partial-building scope, matching arguments, or phased production plans.",
      correction:
        "Build per-building scope tables with photo cross-reference before supplement or carrier presentation.",
    },
    {
      mistake: "Accessory buildings merged into nearest building folder",
      impact:
        "Carport, clubhouse, and detached structure damage excluded when reviewers search building-specific evidence.",
      correction:
        "Assign separate building IDs to every detached and accessory structure on the site plan.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Partial-building damage with matching dispute across campus",
      documentation:
        "Elevation photos showing color and profile mismatch between damaged and undamaged buildings; supplier discontinued notices — see Roof Matching Documentation Guide.",
      lineItemHint: "Full slope or full building replacement on affected structures; uniform appearance argument",
    },
    {
      trigger: "Hidden damage discovered on one building during phased tear-off",
      documentation:
        "Progressive tear-off photos with building ID, dated discovery notes, and deck or substrate exposure before covering.",
      lineItemHint: "Additional tear-off, deck repair, underlayment upgrade on affected building",
    },
    {
      trigger: "Multi-building mobilization omitted from carrier estimate",
      documentation:
        "Mobilization logs per building, setup photos, and phased production schedule showing separate deployments.",
      lineItemHint: "Additional mobilization, setup, and general conditions per building",
    },
    {
      trigger: "Carrier sampling approved subset while identical damage exists on unsampled buildings",
      documentation:
        "Side-by-side photo comparisons and test square results from sampled and unsampled buildings with identical damage profiles.",
      lineItemHint: "Full building scope on unsampled structures matching sampled building findings",
    },
    {
      trigger: "Code upgrades required on multi-building replacement",
      documentation:
        "Permit requirements and non-compliant conditions per building — see Code Upgrade Documentation Guide.",
      lineItemHint: "Ice and water shield, drip edge, ventilation, attachment compliance per structure",
    },
    {
      trigger: "Access limitations extend production across occupied campus",
      documentation:
        "Tenant notification logs, escort requirements, staging constraints, and after-hours authorization records.",
      lineItemHint: "Additional labor hours, supervision, debris handling in occupied settings",
    },
  ],
  relatedResources: [
    {
      label: "Commercial Roofing Documentation Guide",
      href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
    },
    {
      label: "HOA Roofing Claims Guide",
      href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
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
      label: "Hail Damage Roof Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-hail-damage-documentation-guide",
    },
    {
      label: "Wind Damage Roof Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-wind-damage-documentation-guide",
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
      label: "Code Upgrade Documentation Guide",
      href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
    },
    {
      label: "Roof Reinspection Guide",
      href: "/resources/guides/roofing-claims/roof-reinspection-guide",
    },
    {
      label: "Roofing supplement playbook",
      href: "/resources/blog/roofing-supplement-playbook",
    },
    {
      label: "What is a roof supplement?",
      href: "/resources/blog/what-is-a-roof-supplement",
    },
    {
      label: "Hail damage roof claims blog",
      href: "/resources/blog/hail-damage-roof-claims-documentation-supplement",
    },
    {
      label: "Wind damage roof claims blog",
      href: "/resources/blog/wind-damage-roof-claims-what-carriers-miss",
    },
    {
      label: "Roof matching vs repairability blog",
      href: "/resources/blog/roof-matching-vs-repairability-when-to-supplement",
    },
    {
      label: "Claims Ninja platform",
      href: "/platform",
    },
  ],
});
