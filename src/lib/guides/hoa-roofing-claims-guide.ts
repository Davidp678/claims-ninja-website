import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/roofing" as const;
const CATEGORY = "roofing-claims" as const;
const GUIDE_SLUG = "hoa-roofing-claims-guide" as const;

export const HOA_ROOFING_CLAIMS_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "HOA Roofing Claims Guide",
  excerpt:
    "Contractor playbook for HOA and condominium roofing insurance claims: shared ownership, multi-building documentation, board communication, estimating, supplements, and field evidence that supports community association claim recovery.",
  category: CATEGORY,
  guideType: "workflow",
  recommended: true,
  roles: ["field", "office", "supplement-coordinator", "project-manager"],
  claimPhase: "documentation",
  tags: [
    "HOA roofing",
    "Condominium roofing",
    "Community association",
    "Common elements",
    "Master policy",
    "Multi-building",
    "Roofing claims",
    "Supplement",
    "Documentation",
    "Board approval",
  ],
  publishedAt: "2026-07-07",
  updatedAt: "2026-07-07",
  estimatedMinutes: 24,
  seoTitle:
    "HOA Roofing Claims Guide | Contractor Playbook for Community Association Roof Claims",
  seoDescription:
    "Contractor-focused playbook for HOA and condominium roofing insurance claims: shared ownership, multi-building documentation, board communication, estimating, and supplement recovery.",
  relatedGuideSlugs: [
    "commercial-roofing-documentation-guide",
    "multi-building-roofing-claims-guide",
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
    "roof-hoa-responsible-damage",
    "roof-hoa-insurance-covers-replacement",
    "roof-hoa-damage-documentation",
    "roof-hoa-partial-building-replacement",
    "roof-hoa-supplement-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["hail", "wind", "replacement", "commercial"],
  purpose:
    "HOA and condominium roofing insurance claims require documentation scaled to shared ownership, governing documents, master insurance policies, and multi-stakeholder approval — not single-home residential templates applied to community associations. This guide is the contractor playbook for claim strategy, inspections, documentation, estimating support, supplement recovery, and board communication on HOA roofing files. For peril-specific storm documentation, see the Hail and Wind Damage Roof Documentation Guides. For low-slope membrane assemblies on clubhouse or commercial-style buildings, see the Commercial Roofing Documentation Guide. This guide is not legal advice, not a guarantee of claim outcomes, and not a roofing installation manual. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Multi-building HOA, condominium, or townhome community roof loss",
      signal:
        "Property management or board requests contractor inspection across multiple structures with shared common elements",
    },
    {
      condition: "Board approval or scope review pending before production",
      signal:
        "Governing documents require board vote, engineering review, or owner notification before roof work proceeds",
    },
    {
      condition: "Master insurance policy claim on common-element roofing",
      signal:
        "Carrier estimate addresses association-owned roofs but responsibility boundaries with unit owners are disputed",
    },
    {
      condition: "Partial-building damage with full-community replacement question",
      signal:
        "Some buildings damaged while others appear intact — matching, repairability, or uniformity arguments pending",
    },
    {
      condition: "Supplement or reinspection on community association roofing file",
      signal:
        "Denied lines cite insufficient building-level documentation, undocumented access delays, or missing board authorization records",
    },
  ],
  prerequisites: [
    "Claim number, carrier estimate, and property management or board liaison contact on file",
    "Governing document summary identifying HOA vs unit owner roof responsibility boundaries",
    "Building inventory template with consistent numbering across the community",
    "Safety plan, fall protection, and roof access authorization documented before field mobilization",
    "Board communication protocol and documentation package template for scope review meetings",
    "Project manager or documentation lead assigned on multi-building community losses",
  ],
  requiredDocumentation: [
    {
      id: "building-inventory",
      label: "Building inventory with consistent numbering",
      required: true,
      detail:
        "Master list of every structure, building ID, roof type, square count, and elevation count indexed to the community site plan.",
    },
    {
      id: "governing-doc-summary",
      label: "Governing document responsibility summary",
      required: true,
      detail:
        "CC&R and bylaws excerpt or management letter identifying HOA-maintained vs unit-owner roof areas — not legal interpretation, but documented reference for scope attribution.",
    },
    {
      id: "roof-map",
      label: "Community roof map with building labels",
      required: true,
      detail:
        "Site plan or aerial overlay showing every building, elevation orientation, and common-area structures (clubhouse, carports, detached amenities).",
    },
    {
      id: "per-building-photos",
      label: "Per-building, per-elevation photo index",
      required: true,
      detail:
        "Separate photo folders or albums for each building and elevation — overview and close-up pairs with consistent naming.",
    },
    {
      id: "shared-components",
      label: "Shared component documentation",
      required: true,
      detail:
        "Gutters, downspouts, flashings, HVAC curbs, fencing, and common-area structures photographed and indexed separately from individual building roofs.",
    },
    {
      id: "access-coordination-log",
      label: "Access and resident coordination log",
      required: true,
      detail:
        "Property management authorization, resident notification records, access delays, and after-hours restrictions documented contemporaneously.",
    },
    {
      id: "board-communication-log",
      label: "Board communication and meeting records",
      required: true,
      detail:
        "Inspection summaries, scope presentations, engineering reports, and board decisions logged with dates and attendees.",
    },
    {
      id: "measurements-reconciled",
      label: "Building-by-building measurements reconciled",
      required: true,
      detail:
        "Per-building measurement reports reconciled to carrier sketch with variance tables for cut-up geometry and shared drainage components.",
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
        "Written summary linking governing doc context, damage findings, and line-item justification per building and shared component.",
    },
  ],
  steps: [
    {
      id: "why-hoa-claims-differ",
      title: "Why HOA Roofing Claims Are Different",
      actions: [
        "Shared ownership — roofs on common elements belong to the association, but governing documents may assign maintenance, insurance, and deductible responsibilities differently than desk reviewers assume.",
        "Common elements — clubhouses, carports, breezeways, detached garages, and shared drainage systems require separate documentation tracks from individual unit building roofs.",
        "Master insurance policies — association policies cover declared values across multiple buildings; carrier estimates may aggregate or split scope inconsistently with field conditions.",
        "Board approval processes — scope, contractor selection, and production timing often require board votes, owner notification, and documented meeting records before work proceeds.",
        "Multiple stakeholders — property managers, board members, unit owners, carriers, engineers, and restoration contractors each need different documentation formats from the same field evidence.",
        "Large claim values — multi-building communities multiply total insured values, triggering specialist adjusters, engineer review, and longer desk-review cycles.",
        "Increased documentation requirements — carriers expect building-level photo indexing, governing doc context, and per-structure measurements beyond single-home residential templates.",
        "Longer claim timelines — board meetings, access coordination across occupied units, and multi-phase production extend intake-to-closeout duration; contemporaneous logs protect timeline arguments.",
      ],
    },
    {
      id: "hoa-responsibility",
      title: "Understanding HOA Responsibility",
      actions: [
        "HOA responsibilities — document which roofs, elevations, and accessories the association maintains per CC&Rs; photograph association-owned areas separately from unit-owner boundaries.",
        "Unit owner responsibilities — when governing documents assign certain slopes, patios, or enclosed balconies to owners, label photos and scope lines accordingly to prevent attribution disputes.",
        "Governing documents — request CC&R and bylaws excerpts identifying roof maintenance and insurance obligations; attach management letters confirming responsibility interpretation for the claim file.",
        "CC&Rs — record declaration sections cited by property management regarding common-element roof definition, repair standards, and insurance deductible allocation.",
        "Bylaws — document board authority requirements for contractor engagement, scope approval thresholds, and emergency repair authorization.",
        "Insurance policy responsibilities — identify whether the master policy, unit-owner HO-6 policies, or both apply to specific roof sections; note deductible and coverage limits referenced by management.",
        "Maintenance obligations — photograph pre-existing maintenance conditions, prior repairs, and deferred maintenance separately from storm-created damage to support attribution at desk review.",
        "Index responsibility context on every building's photo set and estimate section — reviewers cannot approve scope they cannot attribute to the correct insured party.",
      ],
      notes:
        "This section supports claim documentation — not legal interpretation of governing documents. When responsibility boundaries are disputed, document management and board communications contemporaneously and defer legal questions to association counsel.",
    },
    {
      id: "inspection-planning",
      title: "Inspection Planning",
      actions: [
        "Multiple buildings — complete a building inventory before field work; assign consistent IDs that carry through photos, measurements, estimates, and board presentations.",
        "Building numbering — use property management's official numbering scheme; mismatched labels between contractor files and association records delay board and carrier review.",
        "Roof mapping — publish a community site plan with building labels, elevation orientations, and common-area structures before detailed close-up documentation.",
        "Drone documentation — capture aerial context for multi-building layouts, inaccessible slopes, and shared drainage paths when permitted and safe.",
        "Safety planning — document fall protection, roof access hazards, and crew safety plans before mobilizing across multiple structures with varying heights and pitches.",
        "Access coordination — log property management authorization, gate codes, escort requirements, and restricted areas before each inspection day.",
        "Occupied properties — plan inspections around resident schedules; document notification efforts and access windows when interior or balcony access is required.",
        "Resident communication — record management-approved resident notices, door tags, and coordination delays that affect inspection timelines or production scheduling.",
        "Common area documentation — inspect clubhouses, pool houses, carports, mail kiosks, and detached amenities as separate indexed structures — not merged into nearest building folders.",
      ],
      notes:
        "See the Commercial Roofing Documentation Guide for low-slope membrane assemblies on clubhouse or amenity buildings.",
    },
    {
      id: "documentation-standards",
      title: "Documentation Standards",
      actions: [
        "Every roof elevation — photograph north, south, east, and west (or labeled front/rear/left/right) on each building with overview shots before close-ups.",
        "Every building — maintain separate photo albums or folders per building ID; never mix Building 3 damage into Building 7 folders.",
        "Building-specific damage — index hail impacts, wind creases, and functional damage to the specific building and elevation where found.",
        "Shared components — document gutters, downspouts, and shared drainage runs as community infrastructure indexed to the site plan, not individual unit folders.",
        "Gutters and downspouts — photograph length, slope, separation, and impact damage with building-to-building continuity when shared systems span multiple structures.",
        "Flashings — capture wall, chimney, skylight, and parapet flashings per building with overview pairs showing location on the elevation.",
        "HVAC equipment — document roof-mounted units, curbs, and refrigerant lines per building; detach-reset requirements vary by equipment inventory.",
        "Carports and covered parking — inspect and photograph as separate structures with their own damage indexing and measurement sections.",
        "Clubhouses and amenity buildings — treat as distinct buildings with full elevation coverage; low-slope sections may require commercial-style documentation.",
        "Detached structures — garages, sheds, and mail structures each receive building IDs and independent photo sets.",
        "Fencing impacted by roofing work — photograph fence lines adjacent to staging areas, debris removal paths, and crane setup zones before production.",
        "Consistent photo organization — use naming convention: CommunityID_BuildingID_Elevation_Condition_Date; match labels across photos, maps, and estimate room labels.",
      ],
      notes:
        "See the Hail and Wind Damage Roof Documentation Guides for peril-specific field evidence standards on storm losses.",
    },
    {
      id: "estimating-hoa-claims",
      title: "Estimating HOA Roofing Claims",
      actions: [
        "Building-by-building estimates — create separate estimate sections or files per building when carrier templates allow; scope comparison tables must map lines to building IDs.",
        "Roof section measurements — reconcile aerial reports to field measurements per building; document cut-up geometry, dormers, and multi-level sections omitted from satellite data.",
        "Shared scopes — allocate gutter, downspout, and drainage line items to community infrastructure sections with site-plan references.",
        "Access costs — document narrow driveways, gated communities, limited staging, and parking restrictions that support access and logistics line items.",
        "Crane usage — photograph building height, setback constraints, and crane setup locations per building when hoisting is required on multi-story structures.",
        "Safety equipment — record parapet heights, steep-slope conditions, and warning-line requirements that vary across buildings in the same community.",
        "Multiple mobilizations — log separate mobilization dates per building or phase when production is sequenced around board approval or resident access.",
        "Temporary protection — document emergency tarping, dry-in, and temporary repairs per building with date-stamped photos before permanent scope is negotiated.",
        "Occupied property requirements — record resident coordination, debris containment, and noise restriction compliance that supports production line items on occupied communities.",
      ],
      notes:
        "See the Roof Measurement Documentation Guide for measurement file standards and the Roofing Supplement Checklist before submission.",
    },
    {
      id: "supplement-opportunities",
      title: "Common Supplement Opportunities",
      actions: [
        "Code upgrades — document permit requirements and non-compliant existing conditions per building; see Code Upgrade Documentation Guide for citation standards.",
        "Matching requirements — when discontinued shingles or color mismatch affects uniform appearance across buildings, document supplier letters and elevation comparisons — see Roof Matching Documentation Guide.",
        "Manufacturer requirements — attach spec sheets showing patch limits exceeded on specific buildings; manufacturer guidance often drives full-slope replacement on multi-building communities.",
        "Hidden damage — progressive tear-off photos per building with dated discovery notes; submit supplements before covering new assemblies on phased production.",
        "Additional steep charges — document pitch variances across buildings in the same community; steep-slope surcharges apply per structure, not community-wide averages.",
        "Multi-building mobilization — log separate mobilization and setup per building when carrier estimate assumes single mobilization for the entire community.",
        "Safety requirements — photograph varying parapet heights, tie-off limitations, and OSHA-driven protection setups that differ across buildings.",
        "Temporary repairs — date-stamped emergency mitigation photos per building before permanent production; timeline evidence supports emergency scope lines.",
        "Access limitations — document gate restrictions, escort delays, resident scheduling conflicts, and after-hours authorization that extend production duration.",
        "Weather delays — log lost production days per building with weather verification when phased scheduling across a multi-building community is interrupted.",
      ],
    },
    {
      id: "working-with-boards",
      title: "Working With HOA Boards",
      actions: [
        "Board meetings — prepare inspection summaries in plain language with building-level photos; board members approve scope based on visual evidence, not Xactimate line codes.",
        "Documentation packages — deliver indexed packets: building inventory, site plan, photo index, measurement summary, and scope comparison table before board votes.",
        "Inspection summaries — one-page per-building damage summaries with representative photos accelerate board review and create contemporaneous approval records.",
        "Engineering reports — when structural or repairability disputes arise, coordinate engineer findings with field photo evidence indexed to the same building IDs.",
        "Communication best practices — copy property management on all carrier correspondence; board members receive summaries, not raw estimate exports.",
        "Scope reviews — present building-by-building scope tables showing carrier lines, contractor findings, and recommended revisions before production authorization.",
        "Reinspection preparation — when carriers schedule community reinspections, prepare building-labeled photo packets and on-site escorts familiar with each structure's damage — see Roof Reinspection Guide.",
      ],
      notes:
        "Board approval records strengthen timeline arguments when production delays affect temporary repair exposure or interior damage progression.",
    },
    {
      id: "hoa-claims-checklist",
      title: "HOA Roofing Claims Checklist",
      actions: [
        "Initial inspection — safety plan, access authorization, and governing doc summary on file before stepping on any roof.",
        "Building inventory — every structure numbered and listed with roof type, square count, and elevation count.",
        "Photography — overview and close-up pairs for every elevation on every building; shared components and amenities indexed separately.",
        "Measurements — per-building measurements reconciled to carrier sketch with variance documentation.",
        "Board communication — inspection summary delivered to property management; board meeting scheduled or scope review completed.",
        "Estimate review — building-by-building scope comparison complete; carrier gaps identified before supplement drafting.",
        "Documentation package — indexed packet with site plan, photo index, measurements, governing doc summary, and contractor narrative.",
        "Supplement preparation — disputed lines tied to building-specific photos; Roofing Supplement Checklist complete.",
        "Carrier meetings — building-labeled evidence ready for adjuster walkthrough; escort assigned per building zone.",
        "Final approval — board authorization, carrier approval, and production schedule documented before mobilization.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "building-inventory-complete",
      label: "Building inventory complete with consistent numbering",
      required: true,
      detail: "Every structure, amenity building, and detached structure listed before field close-up work.",
    },
    {
      id: "every-elevation-photographed",
      label: "Every elevation photographed on every building",
      required: true,
      detail: "Overview and close-up pairs indexed to building ID and elevation orientation.",
    },
    {
      id: "governing-doc-referenced",
      label: "Governing document responsibility summary attached",
      required: true,
      detail: "CC&R or management letter identifying HOA vs unit owner roof boundaries documented in claim file.",
    },
    {
      id: "shared-components-indexed",
      label: "Shared components and amenities indexed separately",
      required: true,
      detail: "Gutters, carports, clubhouses, and common-area structures documented with site-plan labels.",
    },
    {
      id: "access-log-complete",
      label: "Access and resident coordination log complete",
      required: true,
      detail: "Property management authorization and scheduling delays documented contemporaneously.",
    },
    {
      id: "board-package-delivered",
      label: "Board documentation package delivered",
      required: true,
      detail: "Inspection summary and scope comparison presented before production authorization.",
    },
    {
      id: "measurements-reconciled-gate",
      label: "Per-building measurements reconciled to carrier sketch",
      required: true,
      detail: "Variance tables complete for each building before estimate submission.",
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
      mistake: "Single photo folder for entire community",
      impact:
        "Carriers and boards cannot attribute damage to specific buildings; scope lines denied as unverifiable.",
      correction:
        "Create separate photo albums per building ID with elevation subfolders before close-up documentation begins.",
    },
    {
      mistake: "Missing governing document responsibility context",
      impact:
        "Scope attribution disputes delay board approval and carrier review when HOA vs unit owner boundaries are unclear.",
      correction:
        "Attach CC&R excerpts or management letters identifying maintained roof areas before submitting scope for approval.",
    },
    {
      mistake: "Undocumented resident access delays",
      impact:
        "Production timeline arguments fail when scheduling conflicts are not logged contemporaneously.",
      correction:
        "Record every access denial, rescheduled inspection, and management coordination delay with date and building ID.",
    },
    {
      mistake: "Community-wide estimate without building breakdown",
      impact:
        "Desk reviewers cannot approve partial-building scope or matching arguments across undamaged structures.",
      correction:
        "Build per-building scope tables with photo cross-reference before supplement or board presentation.",
    },
    {
      mistake: "Common-area structures merged into nearest building folder",
      impact:
        "Clubhouse, carport, and amenity damage excluded when reviewers search building-specific evidence.",
      correction:
        "Assign separate building IDs to every detached and common-area structure on the site plan.",
    },
    {
      mistake: "Board approval assumed without written record",
      impact:
        "Production authorization disputes and timeline gaps weaken emergency mitigation and temporary repair arguments.",
      correction:
        "Document board meetings, email approvals, and management authorization with dates before mobilizing.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Partial-building damage with matching dispute across community",
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
      trigger: "Access limitations extend production across occupied community",
      documentation:
        "Gate restriction logs, resident scheduling conflicts, escort requirements, and after-hours authorization records.",
      lineItemHint: "Additional labor hours, supervision, debris handling in occupied settings",
    },
    {
      trigger: "Code upgrades required on multi-building replacement",
      documentation:
        "Permit requirements and non-compliant conditions per building — see Code Upgrade Documentation Guide.",
      lineItemHint: "Ice and water shield, drip edge, ventilation, attachment compliance per structure",
    },
    {
      trigger: "Undocumented steep-slope or safety conditions vary by building",
      documentation:
        "Pitch measurements and safety setup photos per building showing varying steep charges and fall protection requirements.",
      lineItemHint: "Steep charges, high roof surcharges, safety monitoring per structure",
    },
  ],
  relatedResources: [
    {
      label: "Commercial Roofing Documentation Guide",
      href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
    },
    {
      label: "Multi-Building Roofing Claims Guide",
      href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
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
