import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/commercial" as const;
const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "multifamily-apartment-insurance-claims-guide" as const;

export const MULTIFAMILY_APARTMENT_INSURANCE_CLAIMS_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Multifamily & Apartment Insurance Claims Guide for Contractors",
  excerpt:
    "Contractor playbook for documenting, managing, estimating, and supplementing insurance claims on apartment complexes, multifamily housing, condominiums, and similar residential commercial properties — unit-by-unit indexing, common areas, property manager coordination, and indexed claim packages.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Apartment insurance claims",
    "Multifamily insurance claims",
    "Apartment damage documentation",
    "Multifamily restoration documentation",
    "Commercial apartment claims",
    "Unit documentation",
    "Common areas",
    "Property managers",
    "Tenant coordination",
    "Large loss",
    "Restoration contractors",
    "Xactimate",
    "Supplements",
  ],
  publishedAt: "2026-07-20",
  updatedAt: "2026-07-20",
  estimatedMinutes: 26,
  seoTitle:
    "Multifamily & Apartment Insurance Claims Guide | Contractor Documentation Playbook",
  seoDescription:
    "Document apartment and multifamily insurance claims for contractors: unit-by-unit inspections, common areas, property manager coordination, occupied vs vacant units, shared systems, code upgrades, supplements, and indexed claim packages.",
  relatedGuideSlugs: [
    "commercial-insurance-claims-documentation-guide",
    "commercial-insurance-supplement-playbook-for-contractors",
    "large-loss-commercial-insurance-claims-guide",
    "hoa-insurance-claims-guide",
    "retail-office-insurance-claims-guide",
    "industrial-warehouse-insurance-claims-guide",
    "commercial-water-loss-documentation-guide",
    "commercial-fire-claims-guide",
    "commercial-mold-claims-guide",
    "commercial-roofing-documentation-guide",
    "multi-building-roofing-claims-guide",
    "hoa-roofing-claims-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "moisture-mapping-guide",
    "dry-log-collection-guide",
    "fire-damage-documentation-guide",
    "mold-damage-documentation-guide",
    "roofing-documentation-guide",
    "code-upgrade-documentation-guide",
    "category-3-water-damage-documentation-guide",
    "supplement-submission-guide",
  ],
  relatedBlogSlugs: [
    "commercial-claims-documentation-checklist",
    "why-commercial-insurance-claims-get-underpaid",
    "water-damage-documentation-for-apartment-complexes",
    "multifamily-water-claims-that-get-underpaid",
    "large-loss-water-mitigation-documentation-best-practices",
    "common-documentation-mistakes-on-commercial-water-losses",
    "why-fire-damage-claims-get-underpaid",
    "why-mold-insurance-claims-get-underpaid",
    "documentation-gaps-that-trigger-water-claim-denials",
  ],
  faqIds: [
    "commercial-apartment-insurance-claims",
    "commercial-multifamily-documentation",
    "commercial-unit-inspections",
    "commercial-multifamily-common-areas",
    "commercial-property-manager-coordination",
    "commercial-apartment-complex-claims",
    "commercial-claim-documentation",
    "commercial-multi-building-documentation",
    "water-apartment-complex-documentation",
    "water-multifamily-loss-documentation",
    "water-commercial-claims-documentation",
    "fire-commercial-claims-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["commercial", "large-loss"],
  purpose:
    "Apartment complexes, multifamily housing, condominiums, and similar residential commercial properties generate insurance claims that look residential at the unit level but behave commercially at the property level. Unit counts multiply photo folders, estimates, and access events; property managers and ownership groups control entry; common areas and shared building systems span dozens of units; and carriers review files building by building — not as a single-family dump. This guide is the contractor operational playbook for documenting, managing, estimating, supplementing, and recovering multifamily and apartment insurance claims across water, fire, mold, roofing, and reconstruction scopes. For the parent commercial documentation framework, see the Commercial Insurance Claims Documentation Guide. For peril-specific commercial procedures, see the Commercial Water, Fire, Mold, and Roofing guides. Claims Ninja supports contractors with documentation standards, large-loss estimating, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition:
        "Apartment complex, multifamily campus, condominium, townhome community, or similar residential commercial loss",
      signal:
        "Multiple units, buildings, or common areas affected; property management requesting unit-indexed documentation; residential single-file pattern cannot organize the claim",
    },
    {
      condition: "Occupied multifamily loss requiring tenant access coordination",
      signal:
        "Unit entry notices, escort requirements, displacement, or after-hours production windows controlled by property management",
    },
    {
      condition: "Loss spanning units plus common areas and shared building systems",
      signal:
        "Corridors, lobbies, laundry, mechanical rooms, roof, plumbing stacks, or HVAC zones affected alongside in-unit scope",
    },
    {
      condition: "Ownership or management structure with master policy and unit-owner boundaries",
      signal:
        "Condo/HOA master policy, REIT or ownership group claims contact, or shell-versus-unit responsibility disputes",
    },
    {
      condition: "Carrier underpayment or reinspection citing mixed unit documentation",
      signal:
        "Desk reviewer cites undifferentiated multifamily photos, missing common-area separation, weak property manager logs, or residential template on apartment footprint",
    },
  ],
  prerequisites: [
    "Multifamily documentation plan with Building → Floor → Unit → Room naming published within 24 hours of mobilization",
    "Property management liaison contact, ownership group contact, and site map with unit numbers aligned to property records",
    "Unit inventory template covering affected, adjacent, and vacant units — not crew shorthand",
    "Tenant notification and access log template for occupied properties",
    "Separate folders for units, common areas, shared systems, mitigation, estimates, and closeout",
    "Project manager or documentation lead assigned on losses exceeding a handful of units",
  ],
  requiredDocumentation: [
    {
      id: "property-ownership-package",
      label: "Property ownership and management package",
      required: true,
      detail:
        "Document ownership type (private owner, ownership group, REIT, condo/HOA), property manager contacts, master versus unit policy notes when known, and site map with building and unit IDs used by management.",
    },
    {
      id: "unit-inventory-index",
      label: "Unit inventory and building index",
      required: true,
      detail:
        "Master list of every affected and adjacent unit with building, floor, and unit numbers matching property management records — include occupied, vacant, and model/show units.",
    },
    {
      id: "unit-damage-sets",
      label: "Unit-by-unit damage documentation sets",
      required: true,
      detail:
        "Per-unit photo sets and notes with overview-to-detail sequencing, room labels, and consistent unit IDs on every filename — never merge multiple units into one unlabeled gallery.",
    },
    {
      id: "common-area-pack",
      label: "Common area documentation pack",
      required: true,
      detail:
        "Separate indexed evidence for corridors, lobbies, stairwells, elevators, laundry, amenities, exterior grounds, and other shared spaces — distinct from in-unit folders.",
    },
    {
      id: "occupancy-status-log",
      label: "Occupied versus vacant unit status log",
      required: true,
      detail:
        "Record occupancy status per unit at intake and through production; vacant, occupied, and temporarily displaced units drive access, contents, and mitigation documentation differently.",
    },
    {
      id: "tenant-pm-coordination-log",
      label: "Tenant and property manager coordination log",
      required: true,
      detail:
        "Contemporaneous records of PM authorizations, tenant notices, entry events, escort requirements, access denials, and displacement — keyed to unit numbers.",
    },
    {
      id: "emergency-mitigation-records",
      label: "Emergency mitigation documentation by unit and common area",
      required: true,
      detail:
        "Day-one extraction, drying start, board-up, temporary protection, and safety actions indexed by unit or common-area ID with dates and authorization source.",
    },
    {
      id: "shared-systems-pack",
      label: "Shared building systems documentation",
      required: true,
      detail:
        "Roof, plumbing stacks/risers, HVAC zones, life-safety systems, elevators, and mechanical rooms documented as system-level evidence tied to affected units below or adjacent.",
    },
    {
      id: "multi-unit-estimate-index",
      label: "Multi-unit estimate index",
      required: true,
      detail:
        "Xactimate or estimate organization with building/unit sections, common-area sections, shared-system scope, and quantity validation reconciled to unit-level evidence.",
    },
    {
      id: "code-ordinance-file",
      label: "Code and ordinance supporting file",
      required: true,
      detail:
        "AHJ requirements, permits, inspection notes, and code citations that drive multifamily upgrade scope — photograph non-compliant conditions before demolition removes evidence.",
    },
    {
      id: "daily-project-logs",
      label: "Daily project and access logs",
      required: true,
      detail:
        "Crew counts, units worked, access events, discoveries, and equipment moves logged daily by unit/common-area ID — not end-of-job narratives.",
    },
    {
      id: "final-multifamily-package",
      label: "Final indexed multifamily claim package",
      required: true,
      detail:
        "Carrier-ready closeout with property ID, unit index, common-area pack, shared systems, mitigation logs, estimates, PM/tenant logs, code file, and line-to-evidence cross-reference.",
    },
  ],
  steps: [
    {
      id: "how-multifamily-differs",
      title: "How Multifamily Claims Differ from Residential Claims",
      actions: [
        "Residential claims typically involve one dwelling, one primary stakeholder, and a photo set that maps to a single sketch — multifamily claims multiply that footprint across dozens or hundreds of units.",
        "Carrier scrutiny scales with invoice total and unit count: specialist adjusters and desk reviewers reconcile evidence unit by unit, not as a blended residential dump.",
        "Access is controlled by property management — contractors cannot treat unit entry like a homeowner handshake; notices, escorts, and denial logs become claim evidence.",
        "Common areas and shared systems create scope that does not exist on single-family files: corridors, stacks, roofs, and mechanical rooms must be indexed separately from units.",
        "Ownership structures (owner, REIT, condo/HOA master policy) change who authorizes work and which policy responds — documentation must track responsibility boundaries.",
        "Operational difference: same craft fundamentals, higher evidence volume, stricter Building → Floor → Unit → Room indexing, and continuous property manager coordination.",
      ],
      notes:
        "See the Commercial Insurance Claims Documentation Guide for the parent commercial framework; this playbook specializes that framework for apartment and multifamily footprints.",
    },
    {
      id: "ownership-management-structures",
      title: "Property Ownership and Management Structures",
      actions: [
        "Identify ownership type at intake: private owner, ownership group, REIT/institutional owner, condo association, HOA, or mixed condominium with rental units.",
        "Document who controls day-to-day access — on-site property manager, regional manager, building engineer, board, or owner representative — and capture preferred communication channels.",
        "Note master policy versus unit-owner policy boundaries when condominiums or HOAs apply; association-owned common elements often sit on different coverage than unit interiors.",
        "Record lease versus owner-occupied status per building or community when it affects contents ownership and tenant coordination.",
        "Photograph and file site maps, building directories, and unit numbering schemes from management — every claim artifact must use those IDs.",
        "Clarify authorization chain for emergency mitigation, after-hours work, and change orders before production expands beyond day-one emergency scope.",
      ],
      notes:
        "For HOA and condominium roofing-specific ownership and board workflows, see the HOA Roofing Claims Guide and Multi-Building Roofing Claims Guide.",
    },
    {
      id: "working-with-property-managers",
      title: "Working with Property Managers and Ownership Groups",
      actions: [
        "Establish a single contractor liaison and a single PM contact for documentation packages — dual channels create conflicting unit lists and missed notices.",
        "Request the official unit roster, vacancy list, and keys/access protocol before detailed inspections; align your index to management records on day one.",
        "Send unit-indexed status updates that PMs can forward to ownership groups — building summaries without unit IDs force rework.",
        "Log every PM authorization (emergency work, after-hours access, unit entry, temporary relocation) with date, name, and scope — verbal-only approvals fail commercial audits.",
        "Coordinate carrier walkthroughs through the PM so unit access, elevator holds, and common-area staging are scheduled — not improvised on inspection day.",
        "Treat ownership group reporting cadence as claim evidence: weekly area-indexed packets support large-loss scrutiny and BI-related timeline questions.",
      ],
    },
    {
      id: "inspection-workflow",
      title: "Multifamily Inspection Workflow",
      actions: [
        "Pre-inspect: obtain site map, building list, affected-unit list from PM, and publish naming convention before crews enter units.",
        "Exterior and common-path walk: document building elevations, roof overview when accessible, lobby/corridor conditions, and migration clues before opening units.",
        "Unit sequence: work building by building, floor by floor, using management unit numbers; complete overview-to-detail photos before leaving each unit.",
        "Adjacent-unit check: inspect and document units above, below, and beside known damage for migration — especially on water and smoke losses.",
        "Common-area pass: after unit blocks, document corridors, laundry, amenities, and mechanical spaces with separate folder IDs.",
        "Shared-systems pass: inspect roof, stacks, HVAC, and life-safety interfaces that explain multi-unit patterns; cross-index findings to affected units.",
        "Same-day office sync: upload and label all unit sets before the next shift; backlog labeling destroys multifamily attribution.",
      ],
      notes:
        "This inspection workflow is the operational backbone for water, fire, mold, and roofing multifamily losses — peril field standards live in the corresponding commercial and specialty guides.",
    },
    {
      id: "unit-by-unit-documentation",
      title: "Unit-by-Unit Damage Documentation",
      actions: [
        "Treat each affected unit as its own documentation chamber with a dedicated photo folder, note set, and estimate section.",
        "Use fixed naming: Building_Floor_Unit_Room_Stage (e.g., Bldg2_Fl3_Unit312_Bath_Before_001).",
        "Capture entry overview, each affected room overview, damage detail with scale, and undamaged adjacent rooms that define scope boundaries.",
        "Record contents ownership notes (tenant vs owner fixtures) when contents or TI-like finishes appear in units.",
        "Never merge Unit 312 and Unit 314 into one gallery — mixed unit dumps are a primary multifamily underpayment driver.",
        "Spot-check daily that random photos resolve to the correct unit ID before carrier packages leave the office.",
      ],
      notes:
        "For apartment water-specific unit chamber standards, see the Commercial Water Loss Documentation Guide and Water Damage Documentation for Apartment Complexes blog.",
    },
    {
      id: "common-area-documentation",
      title: "Common Area Documentation",
      actions: [
        "Index common areas separately from units: corridors, lobbies, stairwells, elevators, laundry rooms, fitness/amenities, mailrooms, and exterior shared spaces.",
        "Photograph common-area damage with location labels that match the site map — hallway between Units 310–318 needs a label desk reviewers can find.",
        "Separate owner/association common-element scope from in-unit scope in both photos and estimates.",
        "Document temporary protection in common paths (floor coverings, containment, signage) as production evidence and life-safety context.",
        "Do not bury corridor or lobby scope inside a single unit folder — carriers cut common-area lines when evidence is inseparable from unit dumps.",
        "On condo/HOA files, align common-area labels to association records used for master-policy claims.",
      ],
    },
    {
      id: "occupied-versus-vacant",
      title: "Occupied Versus Vacant Units",
      actions: [
        "Status every unit at intake: occupied, vacant, model/show, under renovation, or temporarily displaced — update when status changes.",
        "Occupied units require access logs, tenant notices, and contents care documentation; vacant units still need full damage indexing but different contents and access evidence.",
        "Document why vacant units were entered and who authorized entry — unauthorized vacant-unit work creates disputes with ownership groups.",
        "Displaced tenants: log temporary relocation dates, unit release criteria, and return photos when units are cleared for re-occupancy.",
        "Avoid applying occupied-unit labor assumptions to vacant blocks without authorization notes — and vice versa.",
        "Reflect occupancy status in estimate narratives so after-hours or multi-entry labor is explainable at desk review.",
      ],
    },
    {
      id: "tenant-communication",
      title: "Tenant Communication Considerations",
      actions: [
        "Route tenant communications through property management unless the PM authorizes direct contractor contact — dual messaging creates claim and liability risk.",
        "Document notice timing for unit entry: date notice posted/sent, entry window, and actual entry time keyed to unit ID.",
        "Record tenant-reported damage separately from contractor findings; verify and photograph reported conditions rather than accepting narrative alone.",
        "Protect tenant privacy in photo sets — avoid capturing personal documents, faces of minors, or unrelated personal effects when possible; crop or retake when needed.",
        "Log access denials and reschedules — missed drying or inspection windows become duration and labor evidence when documented contemporaneously.",
        "Keep tenant communication factual and operational; coverage opinions belong with the insured, PM, and carrier — not contractor field notes.",
      ],
    },
    {
      id: "emergency-mitigation-documentation",
      title: "Emergency Mitigation Documentation",
      actions: [
        "Capture arrival conditions before extraction, drying, or board-up alters the scene — multifamily baselines establish what carriers compare to later production.",
        "Index emergency work by unit and common-area ID: extraction volumes, equipment set, temporary protection, and safety actions with dates and PM authorization.",
        "Photograph equipment placement per unit with asset tags visible; building-level equipment photos do not defend per-unit lines.",
        "Start unit-level dry logs and moisture maps on day one for water losses — see Commercial Water Loss Documentation Guide and Dry Log Collection Guide.",
        "Separate emergency mitigation packages from reconstruction estimates so carriers can approve emergency scope without waiting on full rebuild pricing.",
        "On fire and mold emergencies, apply Commercial Fire and Commercial Mold indexing while keeping this guide’s unit/common-area structure intact.",
      ],
    },
    {
      id: "estimating-multiple-units",
      title: "Estimating Multiple Units",
      actions: [
        "Structure Xactimate with building and unit section headers that mirror the documentation index — single residential blocks fail multifamily audit.",
        "Estimate common areas and shared systems in dedicated sections, not buried inside a representative unit.",
        "Validate quantities per unit: flooring SF, drywall SF, fixture counts, and equipment days must reconcile to that unit’s photos and sketches.",
        "Use consistent material grades across similar units when finishes match; document exceptions when upgrades or TI-like finishes differ by unit.",
        "Track phased approvals when carriers authorize work building-by-building or floor-by-floor — hold pending units as separate sections.",
        "Run pre-submission QC: pick random units and confirm every high-dollar line has photo and measurement support under the same unit ID.",
      ],
    },
    {
      id: "shared-building-systems",
      title: "Shared Building Systems",
      actions: [
        "Document roof systems with zone labels that correlate to interior top-floor units and corridor stains — see Commercial Roofing and Multi-Building Roofing guides.",
        "Map plumbing stacks and risers to stacked unit damage; shutoff locations and repair authorizations belong in the shared-systems pack.",
        "Inspect HVAC zones, corridors, and mechanical rooms that distribute smoke, humidity, or contaminants across multiple units.",
        "Photograph life-safety impairments (alarms, sprinklers, egress) and temporary protections — multifamily AHJs scrutinize these during reconstruction.",
        "Document elevators, trash chutes, and vertical shafts as distinct systems when they drive access costs or contamination paths.",
        "Cross-reference every shared-system finding to the list of affected unit IDs so desk reviewers see why multi-unit scope is connected.",
      ],
    },
    {
      id: "code-and-ordinance",
      title: "Code and Ordinance Considerations",
      actions: [
        "Identify AHJ jurisdiction early; multifamily rebuilds frequently trigger corridor, egress, fire-rating, accessibility, and electrical upgrades.",
        "Photograph non-compliant conditions before demolition removes evidence of why upgrades are required.",
        "Collect permits, inspection reports, and written AHJ directives that support ordinance or law line items.",
        "Separate code upgrade scope in the estimate and documentation index so reviewers evaluate ordinance lines independently of like-kind repairs.",
        "Track inspection milestones chronologically across buildings — code scope often expands mid-project on multifamily campuses.",
        "Coordinate with the Code Upgrade Documentation Guide and peril-specific code guides while keeping multifamily unit indexing consistent.",
      ],
    },
    {
      id: "supplement-opportunities-section",
      title: "Supplement Opportunities on Multifamily Claims",
      actions: [
        "Adjacent-unit discoveries after initial walkthrough — openings and moisture/smoke migration often expand beyond carrier-selected sample units.",
        "Common-area scope omitted from unit-only carrier estimates — corridors, laundry, and lobbies frequently appear only after indexed documentation.",
        "Shared-system repairs (roof, stack, HVAC) revealed by multi-unit pattern evidence.",
        "Occupied-property production costs: after-hours labor, multiple mobilizations, escorts, and temporary facilities authorized by PM.",
        "Code-driven upgrades documented with AHJ evidence after demolition or inspection.",
        "Package every supplement by unit/common-area ID with discovery photos, revised sketches, and estimate deltas — multifamily supplements fail when evidence is blended.",
      ],
      notes:
        "See Supplement Submission Guide for package structure; use this section’s triggers with unit-indexed attachments.",
    },
    {
      id: "commercial-doc-best-practices",
      title: "Commercial Claim Documentation Best Practices for Multifamily",
      actions: [
        "Publish the Building → Floor → Unit → Room index within 24 hours and enforce it on every crew.",
        "Separate units, common areas, and shared systems in folders, estimates, and carrier packets.",
        "Maintain contemporaneous PM and tenant access logs — reconstruct them after a dispute and carriers discount the file.",
        "Reconcile equipment, materials, and labor to unit IDs before invoice or supplement submission.",
        "Send area-indexed progress packages rather than unlabeled photo dumps when ownership groups request updates.",
        "Apply peril specialty guides under this indexing framework — never drop multifamily organization when switching from water to fire or mold phases.",
      ],
    },
    {
      id: "final-claim-package",
      title: "Final Claim Package Organization",
      actions: [
        "Front matter: property identification sheet, ownership/PM contacts, site map, and master unit index.",
        "Unit evidence: per-unit photo sets, notes, moisture/smoke maps as applicable, and contents notes.",
        "Common-area and shared-systems packs with cross-references to affected units.",
        "Mitigation and production logs: emergency records, daily logs, equipment reconciliation, and change tracking.",
        "Estimate history: initial, revised, and supplement estimates with section headers matching the unit index.",
        "Coordination and code: PM/tenant logs, authorizations, permits, AHJ notes, and communication chronology.",
        "Closeout: table of contents, line-to-evidence cross-reference, punch list with completion photos by unit ID, and archive using the same folder structure used in production.",
      ],
    },
    {
      id: "common-documentation-mistakes",
      title: "Common Documentation Mistakes on Multifamily Claims",
      actions: [
        "Merging multiple units into one unlabeled photo dump.",
        "Documenting common areas inside unit folders.",
        "Using crew nicknames instead of property management unit numbers.",
        "Missing property manager authorization and tenant access logs.",
        "Building-level equipment photos defending per-unit equipment lines.",
        "Estimating multifamily scope as a single residential block.",
        "Ignoring adjacent units and shared systems that explain multi-unit patterns.",
        "Treating vacant and occupied units with identical undocumented assumptions.",
        "Submitting supplements without unit-indexed discovery evidence.",
        "End-of-job narratives replacing contemporaneous daily unit logs.",
      ],
    },
    {
      id: "final-multifamily-checklist",
      title: "Multifamily Documentation Checklist",
      actions: [
        "Documentation plan and naming convention published within 24 hours.",
        "Ownership/management package and site map on file.",
        "Unit inventory complete (affected, adjacent, vacant, displaced).",
        "Unit-by-unit photo and note sets labeled to management unit numbers.",
        "Common-area pack separated from unit folders.",
        "Occupied vs vacant status log current.",
        "PM and tenant coordination/access log contemporaneous.",
        "Emergency mitigation indexed by unit and common area.",
        "Shared building systems pack cross-referenced to units.",
        "Multi-unit estimate index with quantity validation.",
        "Code/ordinance file with AHJ evidence when upgrades apply.",
        "Daily project logs by unit/common-area ID.",
        "Supplement change log with discovery drivers.",
        "Final indexed claim package with line-to-evidence cross-reference.",
        "QC spot-check: random units resolve photos, logs, and estimate lines to the same IDs.",
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion",
      actions: [
        "Multifamily and apartment insurance claims are recovered through unit-indexed documentation, common-area separation, property manager coordination, and disciplined estimate organization — not more unlabeled photos.",
        "Apply the Commercial Insurance Claims Documentation Guide as the parent standard; use Commercial Water, Fire, Mold, and Roofing guides for peril procedures under this multifamily framework.",
        "Claims Ninja supports contractors with documentation standards, large-loss estimating, supplement packaging, and claim recovery workflows on apartment and multifamily losses.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "multifamily-plan-published",
      label: "Multifamily documentation plan published within 24 hours",
      required: true,
      detail:
        "Folder index, Building → Floor → Unit → Room naming, role assignments, and PM liaison documented before carrier walkthrough.",
    },
    {
      id: "unit-index-aligned",
      label: "Unit index aligned to property management records",
      required: true,
      detail:
        "Every affected and adjacent unit uses management building/unit numbers — no crew shorthand in submitted files.",
    },
    {
      id: "unit-sets-complete",
      label: "Unit-by-unit documentation sets complete",
      required: true,
      detail:
        "Each affected unit has overview-to-detail photos and notes under its own folder matching estimate sections.",
    },
    {
      id: "common-areas-separated",
      label: "Common areas documented separately from units",
      required: true,
      detail:
        "Corridors, lobbies, laundry, amenities, and exteriors have distinct packs — not buried inside unit galleries.",
    },
    {
      id: "pm-tenant-log-current",
      label: "Property manager and tenant access log current",
      required: true,
      detail:
        "Authorizations, notices, entry events, denials, and displacement logged contemporaneously by unit ID.",
    },
    {
      id: "shared-systems-indexed",
      label: "Shared building systems indexed to affected units",
      required: true,
      detail:
        "Roof, stacks, HVAC, life safety, and mechanical findings cross-referenced to unit lists.",
    },
    {
      id: "estimate-unit-organized",
      label: "Estimate organized by building/unit with common-area sections",
      required: true,
      detail:
        "Xactimate sections mirror the documentation hierarchy with quantity validation per unit.",
    },
    {
      id: "qc-spot-check-passed",
      label: "Pre-submission QC spot-check passed",
      required: true,
      detail:
        "Random units confirm photos, logs, and high-dollar estimate lines resolve to the same unit IDs.",
    },
    {
      id: "closeout-packet-ready",
      label: "Indexed multifamily closeout packet ready",
      required: true,
      detail:
        "Final package includes property ID, unit index, common areas, shared systems, mitigation, estimates, PM/tenant logs, and line-to-evidence cross-reference.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Merging multiple units into one unlabeled photo dump",
      impact:
        "Carriers cannot attribute damage by unit and apply proportional reductions across the complex.",
      correction:
        "Enforce per-unit folders with Building → Floor → Unit → Room naming from day one.",
    },
    {
      mistake: "Burying common-area scope inside unit documentation",
      impact:
        "Corridor, lobby, and amenity lines are cut when evidence cannot be separated from unit files.",
      correction:
        "Maintain distinct common-area packs and estimate sections aligned to the site map.",
    },
    {
      mistake: "Using crew nicknames instead of property management unit numbers",
      impact:
        "PM, ownership, and carrier indexes diverge; desk review treats the file as incomplete.",
      correction:
        "Adopt management unit numbers on every photo, log row, and estimate section.",
    },
    {
      mistake: "Missing property manager authorization and tenant access logs",
      impact:
        "After-hours labor, multiple entries, and access delays fail without contemporaneous coordination records.",
      correction:
        "Log PM authorizations, notices, entries, and denials keyed to unit IDs throughout the claim.",
    },
    {
      mistake: "Building-level equipment photos defending per-unit equipment lines",
      impact:
        "Carriers reduce equipment quantity and duration when placement cannot be tied to units.",
      correction:
        "Photograph asset-tagged equipment in each unit and reconcile counts to unit dry logs or production records.",
    },
    {
      mistake: "Estimating multifamily scope as a single residential block",
      impact:
        "Commercial audit cannot navigate unit scope; disputed lines lack evidence paths.",
      correction:
        "Structure estimates by building/unit with separate common-area and shared-system sections.",
    },
    {
      mistake: "Ignoring adjacent units and shared systems",
      impact:
        "Migration and stack-driven scope is underpaid; causation looks incomplete.",
      correction:
        "Inspect and document adjacent units and shared systems; cross-index findings to affected unit lists.",
    },
    {
      mistake: "Identical undocumented assumptions for vacant and occupied units",
      impact:
        "Labor, contents, and access lines are challenged when occupancy status is unclear.",
      correction:
        "Maintain an occupancy status log and reflect occupied vs vacant conditions in narratives and access evidence.",
    },
    {
      mistake: "Supplements without unit-indexed discovery evidence",
      impact:
        "Expanded multifamily scope appears arbitrary and stalls or gets denied.",
      correction:
        "Package supplements by unit/common-area ID with discovery photos, revised sketches, and estimate deltas.",
    },
    {
      mistake: "End-of-job narratives replacing contemporaneous daily unit logs",
      impact:
        "Multi-week multifamily production cannot be defended under large-loss scrutiny.",
      correction:
        "Require daily logs and photo batches by unit and common-area ID for the full claim timeline.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Adjacent or stacked units show damage beyond the carrier’s initial unit sample",
      documentation:
        "Unit-indexed discovery photos, migration path evidence, and updated unit inventory before covering assemblies.",
      lineItemHint:
        "Additional unit mitigation, demolition, drying, contents protection, reconstruction",
    },
    {
      trigger: "Common-area damage omitted from a unit-only carrier estimate",
      documentation:
        "Separate common-area photo pack, site-map labels, and estimate section distinct from unit scope.",
      lineItemHint:
        "Corridor/lobby flooring, drywall, ceiling, cleaning, temporary protection",
    },
    {
      trigger: "Shared building systems explain multi-unit damage patterns",
      documentation:
        "Roof, stack, HVAC, or life-safety inspection photos cross-referenced to affected unit IDs.",
      lineItemHint:
        "Roof dry-in/repair, stack repair, HVAC cleaning, system drying, engineering",
    },
    {
      trigger: "Occupied multifamily production requires after-hours or multi-entry work",
      documentation:
        "PM authorization, tenant notice/access logs, and production windows keyed to unit IDs.",
      lineItemHint:
        "After-hours labor, shift differential, escorts, temporary facilities, project management",
    },
    {
      trigger: "Vacant-to-occupied status changes or tenant displacement extends duration",
      documentation:
        "Occupancy status log, displacement dates, and unit release/return photos.",
      lineItemHint:
        "Extended monitoring, additional mobilizations, contents reset, re-entry cleaning",
    },
    {
      trigger: "AHJ or code inspection triggers multifamily upgrade scope",
      documentation:
        "Permit notes, inspection reports, photos of non-compliant conditions, and ordinance citations.",
      lineItemHint:
        "Fire-rating, egress, accessibility, electrical, life-safety upgrades",
    },
    {
      trigger: "Equipment or drying duration exceeds initial carrier assumption on multi-unit loss",
      documentation:
        "Per-unit equipment placement photos, asset tags, and daily logs matching billed counts and days.",
      lineItemHint:
        "Additional air movers, dehumidifiers, air scrubbers, extended equipment days",
    },
    {
      trigger: "Phased building or floor releases require separate mobilizations",
      documentation:
        "Phase maps, PM authorization for staged work, and daily logs by released vs held units.",
      lineItemHint:
        "Additional mobilizations, general conditions, temporary protection between phases",
    },
  ],
  relatedResources: [
    {
      label: "Commercial insurance claims",
      href: SOLUTION_PATH,
    },
    {
      label: "Commercial Insurance Claims Documentation Guide",
      href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
    },
    {
      label: "Large-Loss Commercial Insurance Claims Guide",
      href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
    },
    {
      label: "HOA Insurance Claims Guide for Contractors",
      href: "/resources/guides/general-claims/hoa-insurance-claims-guide",
    },
    {
      label: "Industrial & Warehouse Insurance Claims Guide",
      href: "/resources/guides/general-claims/industrial-warehouse-insurance-claims-guide",
    },
    {
      label: "Retail & Office Commercial Insurance Claims Guide",
      href: "/resources/guides/general-claims/retail-office-insurance-claims-guide",
    },
    {
      label: "Commercial Water Loss Documentation Guide",
      href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
    },
    {
      label: "Commercial Fire Claims Guide",
      href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
    },
    {
      label: "Commercial Mold Claims Guide",
      href: "/resources/guides/mold/commercial-mold-claims-guide",
    },
    {
      label: "Commercial Roofing Documentation Guide",
      href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
    },
    {
      label: "Multi-Building Roofing Claims Guide",
      href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
    },
    {
      label: "HOA Roofing Claims Guide",
      href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
    },
    {
      label: "Moisture Mapping Guide",
      href: "/resources/guides/water-damage/moisture-mapping-guide",
    },
    {
      label: "Dry Log Collection Guide",
      href: "/resources/guides/water-damage/dry-log-collection-guide",
    },
    {
      label: "Fire Damage Documentation Guide",
      href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
    },
    {
      label: "Mold Damage Documentation Guide",
      href: "/resources/guides/mold/mold-damage-documentation-guide",
    },
    {
      label: "Roofing Documentation Guide",
      href: "/resources/guides/roofing-claims/roofing-documentation-guide",
    },
    {
      label: "Photo Documentation Field Procedure",
      href: "/resources/guides/general-claims/photo-documentation-standards-guide",
    },
    {
      label: "Code Upgrade Documentation Guide",
      href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
    },
    {
      label: "Water damage documentation for apartment complexes",
      href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
    },
    {
      label: "Multifamily water claims that get underpaid",
      href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
    },
  ],
  faq: [
    {
      question: "How do apartment insurance claims differ from residential single-family claims?",
      answer:
        "Apartment and multifamily claims multiply documentation across units, common areas, and shared building systems under property manager access control. Carriers review evidence unit by unit — residential single-folder patterns invite proportional reductions. Use Building → Floor → Unit → Room indexing from intake through closeout.",
    },
    {
      question: "How should contractors document multifamily insurance claims?",
      answer:
        "Publish a unit inventory aligned to property management numbers, document each affected unit separately, keep common areas and shared systems in distinct packs, maintain PM/tenant access logs, and submit an indexed estimate that mirrors the same hierarchy.",
    },
    {
      question: "How should unit inspections be organized on apartment losses?",
      answer:
        "Work building by building and floor by floor using management unit numbers. Complete overview-to-detail photos before leaving each unit, check adjacent units for migration, then document common areas and shared systems with cross-references to affected units.",
    },
    {
      question: "How should common areas be documented on multifamily claims?",
      answer:
        "Index corridors, lobbies, laundry, amenities, and exteriors separately from in-unit folders and estimates. Label locations to the site map so desk reviewers can attribute common-element scope without digging through unit galleries.",
    },
    {
      question: "How should contractors work with property managers on apartment claims?",
      answer:
        "Establish a single PM liaison, align unit numbering to management records, log every authorization and access event by unit ID, and send unit-indexed status packages ownership groups can review. Verbal-only approvals fail commercial audits.",
    },
  ],
});
