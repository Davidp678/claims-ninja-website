import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/commercial" as const;
const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "industrial-warehouse-insurance-claims-guide" as const;

export const INDUSTRIAL_WAREHOUSE_INSURANCE_CLAIMS_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Industrial & Warehouse Insurance Claims Guide for Contractors",
  excerpt:
    "Contractor playbook for documenting, managing, estimating, and supplementing insurance claims on warehouses, manufacturing facilities, industrial buildings, distribution centers, and logistics properties — building systems, equipment, high-bay racking, inventory zones, loading docks, occupied-facility workflows, and indexed claim packages.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Industrial insurance claims",
    "Warehouse insurance claims",
    "Warehouse damage documentation",
    "Industrial restoration documentation",
    "Commercial warehouse insurance claims",
    "Manufacturing facilities",
    "Distribution centers",
    "High-bay racking",
    "Equipment documentation",
    "Loading docks",
    "Large loss",
    "Restoration contractors",
    "Xactimate",
    "Supplements",
  ],
  publishedAt: "2026-07-21",
  updatedAt: "2026-07-21",
  estimatedMinutes: 30,
  seoTitle:
    "Industrial & Warehouse Insurance Claims Guide for Contractors | Documentation Playbook",
  seoDescription:
    "Document industrial and warehouse insurance claims for contractors: manufacturing vs warehouse footprints, building systems, equipment and machinery, high-bay racking, inventory zones, loading docks, occupied facilities, mitigation, safety, large-loss strategies, code, supplements, and indexed claim packages.",
  relatedGuideSlugs: [
    "commercial-insurance-claims-documentation-guide",
    "retail-office-insurance-claims-guide",
    "multifamily-apartment-insurance-claims-guide",
    "hoa-insurance-claims-guide",
    "commercial-water-loss-documentation-guide",
    "commercial-fire-claims-guide",
    "commercial-mold-claims-guide",
    "commercial-roofing-documentation-guide",
    "multi-building-roofing-claims-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "moisture-mapping-guide",
    "dry-log-collection-guide",
    "equipment-documentation-guide",
    "fire-damage-documentation-guide",
    "mold-damage-documentation-guide",
    "roofing-documentation-guide",
    "code-upgrade-documentation-guide",
    "category-3-water-damage-documentation-guide",
    "supplement-submission-guide",
  ],
  relatedBlogSlugs: [
    "why-commercial-insurance-claims-get-underpaid",
    "large-loss-water-mitigation-documentation-best-practices",
    "common-documentation-mistakes-on-commercial-water-losses",
    "why-fire-damage-claims-get-underpaid",
    "why-mold-insurance-claims-get-underpaid",
    "documentation-gaps-that-trigger-water-claim-denials",
  ],
  faqIds: [
    "commercial-warehouse-insurance-claims",
    "commercial-industrial-property-documentation",
    "commercial-equipment-documentation",
    "commercial-warehouse-inspections",
    "commercial-industrial-restoration-claims",
    "commercial-claim-documentation",
    "commercial-large-loss-project-documentation",
    "commercial-multi-building-documentation",
    "water-commercial-claims-documentation",
    "fire-commercial-claims-documentation",
    "mold-commercial-insurance-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["commercial", "large-loss"],
  purpose:
    "Warehouses, manufacturing plants, industrial buildings, distribution centers, and logistics properties generate insurance claims that fail when contractors apply office, retail, or residential documentation patterns. Industrial footprints combine high-bay volumes, process equipment, racking systems, inventory zones, loading docks, and often continuous operations under facility safety rules. Carriers and risk managers review evidence by building, zone, system, and equipment ID — not as a single commercial photo dump. This guide is the contractor operational playbook for documenting, managing, estimating, supplementing, and recovering industrial and warehouse insurance claims across water, fire, mold, roofing, and reconstruction scopes. For the parent commercial documentation framework, see the Commercial Insurance Claims Documentation Guide. For apartment multifamily ops, see the Multifamily & Apartment Insurance Claims Guide. For association governance focus, see the HOA Insurance Claims Guide. Claims Ninja supports contractors with documentation standards, large-loss estimating, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition:
        "Warehouse, manufacturing facility, industrial building, distribution center, or logistics property loss",
      signal:
        "Facility manager or plant operations controlling access; high-bay or racking footprint; equipment/process areas in scope; residential or office documentation templates cannot organize the claim",
    },
    {
      condition: "Loss involving equipment, machinery, or process systems alongside building envelope",
      signal:
        "Production lines, conveyors, HVAC/MEP industrial systems, or fixed equipment require asset-tagged documentation separate from shell finishes",
    },
    {
      condition: "High-bay storage, racking, or inventory zone damage",
      signal:
        "Racking bays, mezzanines, or SKU/storage zones need indexed photo sets and quantity validation carriers can reconcile",
    },
    {
      condition: "Occupied or operating facility requiring phased mitigation and access control",
      signal:
        "Operations continuing in undamaged zones; lockout/tagout, escorts, or after-hours windows required for documentation and stop-loss",
    },
    {
      condition: "Carrier underpayment or reinspection citing mixed industrial documentation",
      signal:
        "Desk reviewer cites undifferentiated warehouse photos, missing equipment IDs, weak dock/zone indexes, or office/retail template on industrial footprint",
    },
  ],
  prerequisites: [
    "Industrial documentation plan with Facility → Building → Zone / System / Equipment → Chamber naming published within 24 hours of mobilization",
    "Facility manager or plant operations contact, safety/EHS liaison, and site map with zone, dock, and equipment IDs aligned to facility records",
    "Working inventory of affected zones: production, storage/racking, shipping/receiving, offices, mechanical, and exterior — update same day discoveries appear",
    "Equipment and machinery documentation template with asset tags, manufacturer plates, and condition photos — not crew shorthand",
    "Stakeholder communication log template for facility ops, safety, landlord/tenant (if applicable), and carrier walkthrough events",
    "Separate folders for building systems, equipment, racking/inventory, docks, mitigation, estimates, authorizations, and closeout",
    "Project manager or documentation lead assigned on large-footprint or multi-building industrial losses",
  ],
  requiredDocumentation: [
    {
      id: "facility-identification-package",
      label: "Facility identification and operations package",
      required: true,
      detail:
        "Document property type (warehouse, manufacturing, distribution, logistics, industrial), facility manager and ops contacts, safety/EHS contacts, preferred approval channels, and known operating constraints (shifts, lockout rules, escort requirements).",
    },
    {
      id: "zone-index",
      label: "Building and zone index",
      required: true,
      detail:
        "Master list of affected buildings and zones with IDs matching facility site maps — production floors, high-bay storage, shipping/receiving, docks, offices, mechanical rooms, and exteriors.",
    },
    {
      id: "building-systems-pack",
      label: "Building systems documentation pack",
      required: true,
      detail:
        "Roof, structural bays, fire protection, industrial HVAC/MEP, electrical distribution, and life-safety systems documented as system-level evidence tied to affected zones.",
    },
    {
      id: "equipment-machinery-index",
      label: "Equipment and machinery documentation index",
      required: true,
      detail:
        "Asset-tagged photo sets and notes for fixed equipment and machinery in scope — plates, serials when visible, pre-disturbance condition, and cross-references to zone IDs.",
    },
    {
      id: "racking-inventory-sets",
      label: "High-bay racking and inventory zone documentation sets",
      required: true,
      detail:
        "Indexed photo sets for racking bays, aisle IDs, mezzanines, and material storage zones with overview-to-detail sequencing — never merge unlabeled racking into a single warehouse dump.",
    },
    {
      id: "dock-shipping-sets",
      label: "Loading dock and shipping area documentation sets",
      required: true,
      detail:
        "Dock doors, levelers, seals, canopies, staging floors, and shipping/receiving chambers labeled to facility dock IDs with damage and temporary protection records.",
    },
    {
      id: "occupied-facility-log",
      label: "Occupied facility and access communication log",
      required: true,
      detail:
        "Contemporaneous records of ops authorizations, safety briefings, lockout/tagout coordination, entry windows, denials, and change-order approvals — keyed to zone and equipment IDs.",
    },
    {
      id: "emergency-mitigation-records",
      label: "Emergency mitigation documentation by zone and system",
      required: true,
      detail:
        "Day-one extraction, drying start, temporary protection, board-up, and safety actions indexed by location ID with dates and authorization source (facility ops, landlord, or emergency rule).",
    },
    {
      id: "industrial-estimate-index",
      label: "Industrial estimate index",
      required: true,
      detail:
        "Xactimate or estimate organization with building-system, zone, equipment, racking, and dock sections and quantity validation reconciled to indexed evidence.",
    },
    {
      id: "code-ordinance-file",
      label: "Code and ordinance supporting file",
      required: true,
      detail:
        "AHJ requirements, permits, inspection notes, and code citations that drive industrial upgrade scope — photograph non-compliant conditions before demolition removes evidence.",
    },
    {
      id: "final-industrial-package",
      label: "Final indexed industrial claim package",
      required: true,
      detail:
        "Carrier-ready closeout with facility ID, zone index, systems pack, equipment index, racking/inventory sets, docks, mitigation logs, estimates, stakeholder logs, code file, and line-to-evidence cross-reference.",
    },
  ],
  steps: [
    {
      id: "how-industrial-claims-differ",
      title: "How Industrial Claims Differ from Other Commercial Claims",
      actions: [
        "Office and retail commercial claims often organize around suites and tenant improvements; industrial claims organize around zones, systems, equipment IDs, and high-volume storage — not tenant demising walls alone.",
        "Scale and volume dominate: high-bay clear heights, long roof spans, racking acres, and process floors create evidence volume that desk reviewers cannot navigate without Facility → Building → Zone indexing.",
        "Equipment and machinery sit alongside building envelope scope; blending asset-tagged equipment into unlabeled finish photos destroys recoverability on both building and equipment lines.",
        "Operations continuity is common: facilities may keep shipping or production running in undamaged zones while contractors mitigate elsewhere under escort and lockout rules.",
        "Safety and access constraints (LOTO, confined space, forklift traffic, hot work permits) become claim evidence when they drive phased labor, escorts, and temporary protection.",
        "Carrier scrutiny scales with invoice total and industrial complexity: specialist adjusters reconcile evidence by zone, system, and equipment — not as a blended commercial dump.",
      ],
      notes:
        "See the Commercial Insurance Claims Documentation Guide for the parent commercial framework; see Multifamily and HOA guides when the property is residential multifamily or association-governed rather than industrial.",
    },
    {
      id: "manufacturing-vs-warehouse",
      title: "Manufacturing Facilities vs Warehouse Properties",
      actions: [
        "Manufacturing facilities emphasize process floors, production lines, utilities serving equipment, and contamination or downtime documentation tied to chambers and asset IDs.",
        "Warehouses and distribution centers emphasize high-bay storage, racking aisles, inventory zones, staging, and high-throughput dock operations.",
        "Logistics properties often combine both: cross-dock staging, sortation equipment, and cold or specialty storage with envelope and dock systems.",
        "At intake, classify the dominant footprint and publish folder indexes that match how the facility labels operations — do not force an office suite template onto a plant or DC.",
        "Document causation paths differently: process-water or equipment failures vs roof/envelope failures into storage aisles require reciprocal IDs between systems and zones.",
        "Estimate sections should mirror the footprint: production vs storage vs docks vs shell — burying manufacturing equipment inside a warehouse finishes block invites cuts.",
      ],
    },
    {
      id: "building-systems",
      title: "Building Systems Documentation",
      actions: [
        "Index roofs, structural bays, walls, floors, and fire protection as system packs labeled to facility grid or bay IDs.",
        "Document industrial HVAC, make-up air, exhaust, compressed air, process piping, and electrical distribution separately from office HVAC when both exist.",
        "Photograph life-safety impairments (sprinklers, fire pumps, alarms, egress) with dates and temporary impairment permits when known.",
        "Tie system findings to affected zones: a roof bay leak into Aisle 12 must appear in both roof and storage packs with reciprocal IDs.",
        "Capture undamaged comparison bays or elevations when partial replacement or matching is disputed across large footprints.",
        "Apply Commercial Roofing and Photo Documentation standards under this industrial indexing — never drop bay/zone labels mid-claim.",
      ],
      notes:
        "Peril field standards for water, fire, and mold live in the corresponding commercial specialty guides; keep Facility → Building → Zone indexing intact.",
    },
    {
      id: "equipment-machinery",
      title: "Equipment and Machinery Documentation",
      actions: [
        "Treat each major equipment asset as its own documentation chamber with overview, nameplate/serial when visible, damage detail, and surrounding zone context.",
        "Photograph equipment before disturbance, cleaning, or removal; post-cleaning-only photos fail carrier and facility audits.",
        "Separate contractor building restoration evidence from facility-owned process equipment packs when ownership or vendor scopes differ — label clearly without giving coverage opinions.",
        "Record who authorized equipment interaction (facility maintenance, OEM vendor, or contractor) with date and scope.",
        "Cross-reference equipment IDs to estimate sections and to building-system causation (e.g., sprinkler discharge onto Line 3).",
        "Use the Equipment Documentation Guide for placement and asset-tag discipline on mitigation equipment while keeping process machinery in this industrial index.",
      ],
    },
    {
      id: "high-bay-racking",
      title: "High-Bay Storage and Racking Systems",
      actions: [
        "Index racking by aisle, bay, and level IDs matching facility WMS or floor maps — crew nicknames fail large-loss review.",
        "Capture overview down-aisle photos, elevation of damaged uprights/beams, and detail with scale before load shifts or demolition.",
        "Document undamaged adjacent bays that define scope boundaries and support quantity disputes.",
        "Note forklift or aerial access constraints that drive labor and equipment line items for inspection and mitigation.",
        "Keep racking structural damage distinct from inventory/contents documentation so desk reviewers can attribute building versus contents scope.",
        "Do not merge multiple aisles into one unlabeled high-bay gallery — racking underpayment often starts with inseparable photos.",
      ],
    },
    {
      id: "inventory-material-storage",
      title: "Inventory and Material Storage Considerations",
      actions: [
        "Document storage zones and material types present (palletized goods, bulk materials, hazardous materials areas) with zone IDs — contractors document conditions, not inventory valuation opinions.",
        "Photograph wet, contaminated, or smoke-exposed stock in place before relocation when safe; log facility-directed moves with date and destination zone.",
        "Separate facility inventory evidence from contractor contents handling packs when both exist on the file.",
        "Record temporary relocation, disposal authorizations, and chain-of-custody notes keyed to zone IDs when materials leave the loss area.",
        "Cross-link moisture, smoke, or mold maps to inventory zones on water and fire losses using commercial peril standards.",
        "Never bury inventory chamber photos inside unlabeled equipment or dock folders.",
      ],
    },
    {
      id: "loading-docks-shipping",
      title: "Loading Docks and Shipping Areas",
      actions: [
        "Index each dock door and staging bay to facility dock numbers; photograph doors, levelers, seals, bumpers, canopies, and approach aprons.",
        "Document shipping/receiving floors, striping, drains, and temporary weather protection that affect operations continuity claims evidence.",
        "Capture trailer and traffic constraints that drive phased work or after-hours labor when authorized by facility ops.",
        "Tie dock roof or canopy failures to interior staging damage with reciprocal IDs.",
        "Keep dock temporary protection and board-up logs contemporaneous — end-of-week narratives fail operational audits.",
        "Estimate dock scope as its own section when multiple doors are affected; do not bury docks inside a generic warehouse finishes block.",
      ],
    },
    {
      id: "occupied-facility",
      title: "Occupied Facility Documentation",
      actions: [
        "Map live versus shut-down zones on day one; update the map when operations reclaim or release areas.",
        "Coordinate escorts, badges, and shift windows through facility ops; log access events keyed to zone IDs.",
        "Photograph temporary barriers, negative air, and protection that separate operating zones from loss zones.",
        "Document production or shipping continuity constraints that force phased mobilizations — attach ops authorization for after-hours or weekend work.",
        "Keep daily status packets facility managers can forward: zones worked, discoveries, and decisions needed.",
        "Do not improvise carrier walkthroughs into live production aisles without ops scheduling — unsafe access destroys credibility and evidence quality.",
      ],
    },
    {
      id: "emergency-mitigation",
      title: "Emergency Mitigation",
      actions: [
        "Capture arrival conditions before extraction, drying, or temporary protection alters the industrial scene.",
        "Confirm who authorized emergency stop-loss (facility ops, landlord, or written emergency rule) and log authorization with scope and date.",
        "Index emergency work by zone and system ID: extraction volumes, equipment set, temporary roof/dock protection, and safety actions.",
        "Photograph mitigation equipment placement per chamber with asset tags visible; facility-level equipment photos do not defend per-zone lines.",
        "Separate emergency mitigation packages from reconstruction estimates so facilities can approve stop-loss while rebuild decisions continue.",
        "On water, fire, and mold emergencies, apply Commercial Water, Fire, and Mold indexing while keeping this guide’s zone/system/equipment structure intact.",
      ],
    },
    {
      id: "safety-access",
      title: "Safety and Access Considerations",
      actions: [
        "Complete facility safety orientation and record briefing dates; treat required PPE and escort rules as production constraints documented in the file.",
        "Coordinate lockout/tagout, hot work, and confined-space entries with facility EHS before disturbing systems or equipment.",
        "Photograph and note forklift traffic, charging stations, and restricted aisles that limit crew and adjuster access windows.",
        "Log delayed access and standby time with zone IDs when facility operations control entry — contemporaneous logs support general conditions lines.",
        "Never enter energized or process areas without documented clearance; unsafe shortcuts create liability and destroy claim credibility.",
        "Include safety-driven temporary protection and barrier work in estimates with photo evidence of why they were required.",
      ],
    },
    {
      id: "large-loss-strategies",
      title: "Large-Loss Documentation Strategies",
      actions: [
        "Assign a documentation lead within 24 hours; publish the Facility → Building → Zone / System / Equipment plan before carrier walkthrough.",
        "Work zone by zone or bay by bay; complete packs and same-day labeling before opening the next block of footprint.",
        "Maintain daily reports by zone ID with crew counts, equipment on site, discoveries, and ops decisions.",
        "Reconcile materials and equipment to field logs before invoice or supplement submission.",
        "Stage area-indexed progress packages for facility and carrier review — unlabeled drives force rework on large industrial files.",
        "On multi-building campuses, keep per-building indexes so reinspections can isolate one building without reopening the entire DC or plant file.",
      ],
    },
    {
      id: "code-ordinance",
      title: "Code and Ordinance Considerations",
      actions: [
        "Identify AHJ jurisdiction early; industrial rebuilds frequently trigger fire protection, egress, electrical, accessibility, and hazardous-area upgrades.",
        "Photograph non-compliant conditions before demolition removes evidence of why upgrades are required.",
        "Collect permits, inspection reports, and written AHJ directives that support ordinance or law line items.",
        "Separate code upgrade scope in the estimate and documentation index so reviewers evaluate ordinance lines independently of like-kind repairs.",
        "Track inspection milestones chronologically across zones and buildings — code scope often expands mid-project on large industrial losses.",
        "Coordinate with the Code Upgrade Documentation Guide and peril-specific guides while keeping industrial indexing consistent.",
      ],
    },
    {
      id: "supplement-opportunities-section",
      title: "Supplement Opportunities",
      actions: [
        "Zone or racking scope omitted from a sample-aisle carrier estimate — high-bay and dock areas frequently appear only after indexed documentation.",
        "Equipment or system discoveries after initial walkthrough — plates, adjacent machines, and utility feeds expand beyond carrier-selected samples.",
        "Occupied-facility production costs: after-hours labor, escorts, phased mobilizations, and temporary barriers authorized by facility ops.",
        "Safety-driven access delays and standby documented with contemporaneous logs by zone ID.",
        "Code-driven upgrades documented with AHJ evidence after demolition or inspection on industrial systems.",
        "Package every supplement by zone/system/equipment ID with discovery photos, revised sketches, and estimate deltas — industrial supplements fail when evidence is blended.",
      ],
      notes:
        "See Supplement Submission Guide for package structure; use this section’s triggers with industrial-indexed attachments.",
    },
    {
      id: "final-claim-package",
      title: "Final Claim Package Organization",
      actions: [
        "Front matter: facility identification sheet, ops/safety contacts, site map, zone index, and equipment index.",
        "Building-systems evidence: roof, structure, fire protection, MEP packs labeled to bay/zone IDs.",
        "Equipment and machinery packs with asset tags and cross-references to zones.",
        "Racking, inventory, and dock evidence sets with facility IDs.",
        "Mitigation and production logs: emergency records, daily logs, equipment reconciliation, and change tracking.",
        "Estimate history: initial, revised, and supplement estimates with section headers matching the industrial index.",
        "Coordination and code: stakeholder communication logs, authorizations, permits, AHJ notes, and communication chronology.",
        "Closeout: table of contents, line-to-evidence cross-reference, punch list with completion photos by location ID, and archive using the same folder structure used in production.",
      ],
    },
    {
      id: "industrial-documentation-checklist",
      title: "Industrial Documentation Checklist",
      actions: [
        "Documentation plan and naming convention published within 24 hours.",
        "Facility identification and operations package on file.",
        "Building and zone index complete (production, storage, docks, offices, mechanical, exterior).",
        "Building systems pack labeled to bay/zone IDs.",
        "Equipment and machinery index with asset tags and pre-disturbance photos.",
        "High-bay racking sets labeled to aisle/bay/level IDs.",
        "Inventory and material storage documentation keyed to zones.",
        "Loading dock and shipping area sets labeled to dock IDs.",
        "Occupied facility access and authorization log contemporaneous.",
        "Emergency mitigation indexed by zone and system.",
        "Industrial estimate index with quantity validation.",
        "Code/ordinance file with AHJ evidence when upgrades apply.",
        "Daily project logs by zone/system/equipment ID.",
        "Supplement change log with discovery drivers.",
        "Final indexed claim package with line-to-evidence cross-reference.",
        "QC spot-check: random zones resolve photos, logs, and estimate lines to the same IDs.",
      ],
    },
    {
      id: "inspection-workflow",
      title: "Inspection Workflow",
      actions: [
        "Pre-inspect: obtain site map, zone list, dock list, and equipment list from facility ops; publish naming convention before crews mobilize.",
        "Exterior and roof walk: document elevations, roof bays when accessible, and drainage clues before opening high-bay interiors.",
        "Building-systems pass: complete roof, structure, fire protection, and MEP packs with site-map labels.",
        "Zone sequence: work production, storage, docks, and offices systematically; complete overview-to-detail photos before leaving each zone.",
        "Equipment pass: document in-scope machinery with plates and reciprocal zone IDs.",
        "Racking and inventory pass: aisle-by-aisle packs; note undamaged boundary bays.",
        "Dock pass: door-by-door documentation with temporary protection status.",
        "Same-day office sync: upload and label all sets before the next shift.",
      ],
    },
    {
      id: "qc-checklist-step",
      title: "Quality-Control Checklist",
      actions: [
        "Confirm Facility → Building → Zone / System / Equipment naming is consistent across photos, logs, and estimate sections.",
        "Spot-check three random zones: each resolves overview-to-detail photos, daily log rows, and high-dollar lines to the same IDs.",
        "Verify equipment packs include pre-disturbance condition and visible asset identification where available.",
        "Confirm racking and dock sets are not merged into unlabeled warehouse galleries.",
        "Validate occupied-facility authorizations and access logs are contemporaneous for after-hours and escort lines.",
        "Reject packages that use crew nicknames, missing bay IDs, or end-of-job narratives in place of daily zone logs.",
      ],
    },
    {
      id: "common-documentation-mistakes",
      title: "Common Documentation Mistakes",
      actions: [
        "Treating industrial losses like office, retail, or residential commercial files.",
        "Merging equipment, racking, and building photos into one unlabeled warehouse dump.",
        "Missing asset tags and nameplates on machinery documentation.",
        "Using crew nicknames instead of facility zone, aisle, and dock IDs.",
        "Ignoring occupied-facility access logs and safety authorizations.",
        "Estimating industrial scope as a single commercial finishes block.",
        "Burying docks and high-bay racking inside a representative aisle folder.",
        "Submitting supplements without zone-indexed discovery evidence.",
        "End-of-job narratives replacing contemporaneous daily industrial logs.",
        "Skipping adjacent-zone and building-system checks that explain multi-aisle patterns.",
      ],
    },
    {
      id: "stakeholder-communication-workflow",
      title: "Stakeholder Communication Workflow",
      actions: [
        "Day one: confirm primary facility ops contact, safety/EHS liaison, and emergency authorization path in writing.",
        "Daily: send indexed status to the primary contact — zones worked, equipment documented, discoveries requiring ops decisions.",
        "Access events: log entry windows, escorts, denials, and LOTO clearances keyed to zone and equipment IDs the same day.",
        "Change orders: route scope expansions through the documented approval path before production expands; attach discovery photos by location ID.",
        "Carrier meetings: schedule through facility ops; bring zone and equipment indexes, not unlabeled drives.",
        "Closeout: deliver the final indexed package in the folder structure facilities and risk managers can archive and forward.",
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion",
      actions: [
        "Industrial and warehouse insurance claims are recovered through zone-indexed documentation, equipment and racking discipline, occupied-facility coordination, and estimate organization that mirrors facility operations — not more unlabeled photos.",
        "Apply the Commercial Insurance Claims Documentation Guide as the parent standard; use Commercial Water, Fire, Mold, and Roofing guides for peril procedures; use Multifamily and HOA guides when those property types dominate.",
        "Claims Ninja supports contractors with documentation standards, large-loss estimating, supplement packaging, and claim recovery workflows on industrial and warehouse losses.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "industrial-plan-published",
      label: "Industrial documentation plan published within 24 hours",
      required: true,
      detail:
        "Folder index, Facility → Building → Zone / System / Equipment naming, role assignments, and facility ops liaison documented before carrier walkthrough.",
    },
    {
      id: "zone-index-aligned",
      label: "Indexes aligned to facility site maps and ops records",
      required: true,
      detail:
        "Every building, zone, dock, and equipment asset uses facility IDs — no crew shorthand in submitted files.",
    },
    {
      id: "systems-equipment-separated",
      label: "Building systems and equipment documented separately from finishes",
      required: true,
      detail:
        "Roof, MEP, fire protection, and machinery packs are distinct — not buried inside unlabeled warehouse galleries.",
    },
    {
      id: "racking-dock-sets-complete",
      label: "Racking and dock documentation sets complete when in scope",
      required: true,
      detail:
        "Aisle/bay and dock-door packs have overview-to-detail photos and notes under folders matching estimate sections.",
    },
    {
      id: "ops-log-current",
      label: "Facility ops and access log current",
      required: true,
      detail:
        "Authorizations, escorts, LOTO clearances, entry events, denials, and change orders logged contemporaneously by location ID.",
    },
    {
      id: "estimate-industrial-organized",
      label: "Estimate organized by zone/system/equipment",
      required: true,
      detail:
        "Xactimate sections mirror the documentation hierarchy with quantity validation per location.",
    },
    {
      id: "qc-spot-check-passed",
      label: "Pre-submission QC spot-check passed",
      required: true,
      detail:
        "Random zones confirm photos, logs, and high-dollar estimate lines resolve to the same location IDs.",
    },
    {
      id: "closeout-packet-ready",
      label: "Indexed industrial closeout packet ready",
      required: true,
      detail:
        "Final package includes facility ID, zone index, systems, equipment, racking/docks, mitigation, estimates, stakeholder logs, and line-to-evidence cross-reference.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Treating industrial claims like office or retail commercial files",
      impact:
        "Carriers and facility managers cannot navigate zone and equipment evidence; files invite proportional reductions.",
      correction:
        "Enforce Facility → Building → Zone / System / Equipment indexing from day one with facility IDs.",
    },
    {
      mistake: "Merging equipment, racking, and building photos into one unlabeled dump",
      impact:
        "Building, contents, and equipment scope become inseparable; high-dollar lines are cut.",
      correction:
        "Maintain distinct systems, equipment, racking, and dock packs with reciprocal cross-references.",
    },
    {
      mistake: "Missing asset tags and nameplates on machinery documentation",
      impact:
        "Equipment lines lack attributable evidence; facility and carrier audits fail.",
      correction:
        "Capture overview, plate/serial when visible, and pre-disturbance condition for each in-scope asset.",
    },
    {
      mistake: "Using crew nicknames instead of facility zone, aisle, and dock IDs",
      impact:
        "Ops, risk, and carrier indexes diverge; desk review treats the file as incomplete.",
      correction:
        "Adopt facility IDs on every photo, log row, and estimate section.",
    },
    {
      mistake: "Missing occupied-facility access and safety authorization logs",
      impact:
        "After-hours labor, escorts, and phased work fail without contemporaneous ops records.",
      correction:
        "Log authorizations, escorts, LOTO clearances, and denials keyed to location IDs throughout the claim.",
    },
    {
      mistake: "Estimating industrial scope as a single commercial finishes block",
      impact:
        "Facility audit cannot navigate zone or system scope; disputed lines lack evidence paths.",
      correction:
        "Structure estimates by zone/system/equipment with separate racking and dock sections.",
    },
    {
      mistake: "Burying docks and high-bay racking inside a representative aisle folder",
      impact:
        "Dock and racking lines are underpaid when evidence cannot be separated from general warehouse files.",
      correction:
        "Keep door-by-door and aisle-by-aisle packs aligned to the site map.",
    },
    {
      mistake: "Supplements without zone-indexed discovery evidence",
      impact:
        "Expanded industrial scope appears arbitrary and stalls or gets denied.",
      correction:
        "Package supplements by zone/system/equipment ID with discovery photos, revised sketches, and estimate deltas.",
    },
    {
      mistake: "End-of-job narratives replacing contemporaneous daily industrial logs",
      impact:
        "Multi-week industrial production cannot be defended under large-loss scrutiny.",
      correction:
        "Require daily logs and photo batches by zone/system/equipment ID for the full claim timeline.",
    },
    {
      mistake: "Skipping adjacent-zone and building-system checks",
      impact:
        "Migration and system-driven scope is underpaid; causation looks incomplete to facility and carrier reviewers.",
      correction:
        "Inspect and document adjacent zones and building systems; cross-index findings to the zone and equipment lists.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Zone or racking damage omitted from a sample-aisle carrier estimate",
      documentation:
        "Separate zone/aisle photo packs, site-map labels, and estimate sections distinct from sample areas.",
      lineItemHint:
        "Additional aisle mitigation, racking repair, flooring, roof dry-in, temporary protection",
    },
    {
      trigger: "Equipment or machinery damage beyond the carrier’s initial sample",
      documentation:
        "Asset-tagged discovery photos, nameplates, and updated equipment index before cleaning or removal.",
      lineItemHint:
        "Additional equipment cleaning, disconnection, protection, engineering coordination",
    },
    {
      trigger: "Building systems explain multi-aisle or multi-bay damage patterns",
      documentation:
        "Roof, fire protection, or MEP inspection photos cross-referenced to zone IDs.",
      lineItemHint:
        "Roof repair, sprinkler impairments, HVAC/MEP drying, system repairs, engineering",
    },
    {
      trigger: "Occupied facility requires after-hours or escorted mobilizations",
      documentation:
        "Facility ops authorization, escort/access logs, and production windows keyed to zone IDs.",
      lineItemHint:
        "After-hours labor, shift differential, escorts, temporary barriers, project management",
    },
    {
      trigger: "Safety-driven access delays create standby or phased releases",
      documentation:
        "LOTO/clearance logs, delayed-access notes, and daily logs by released vs held zones.",
      lineItemHint:
        "Standby labor, additional mobilizations, general conditions, temporary protection between phases",
    },
    {
      trigger: "AHJ or code inspection triggers industrial upgrade scope",
      documentation:
        "Permit notes, inspection reports, photos of non-compliant conditions, and ordinance citations.",
      lineItemHint:
        "Fire protection, egress, electrical, hazardous-area, life-safety upgrades",
    },
    {
      trigger: "Equipment or drying duration exceeds initial carrier assumption on multi-zone loss",
      documentation:
        "Per-zone equipment placement photos, asset tags, and daily logs matching billed counts and days.",
      lineItemHint:
        "Additional air movers, dehumidifiers, air scrubbers, extended equipment days",
    },
    {
      trigger: "Multiple dock doors require temporary weatherization beyond initial board-up",
      documentation:
        "Dock-indexed protection photos, failure of temporary measures, and ops authorization for extended protection.",
      lineItemHint:
        "Additional dock seals, temporary doors, canopy protection, remobilization",
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
      label: "Multifamily & Apartment Insurance Claims Guide",
      href: "/resources/guides/general-claims/multifamily-apartment-insurance-claims-guide",
    },
    {
      label: "Retail & Office Commercial Insurance Claims Guide",
      href: "/resources/guides/general-claims/retail-office-insurance-claims-guide",
    },
    {
      label: "HOA Insurance Claims Guide",
      href: "/resources/guides/general-claims/hoa-insurance-claims-guide",
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
      label: "Equipment Documentation Guide",
      href: "/resources/guides/water-damage/equipment-documentation-guide",
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
      label: "Why Commercial Insurance Claims Get Underpaid",
      href: "/resources/blog/why-commercial-insurance-claims-get-underpaid",
    },
    {
      label: "Large-loss water mitigation documentation best practices",
      href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
    },
  ],
  faq: [
    {
      question: "How do warehouse insurance claims work for contractors?",
      answer:
        "Warehouse and distribution claims organize around facility zone indexes — high-bay storage, racking aisles, docks, and building systems — not office suite folders. Contractors publish Facility → Building → Zone naming, document racking and docks separately, maintain ops access logs, and submit estimates that mirror the same hierarchy so carriers can attribute scope.",
    },
    {
      question: "How should contractors document industrial property insurance claims?",
      answer:
        "Publish indexes aligned to facility site maps, separate building-systems and equipment packs from finishes, maintain occupied-facility authorization logs, and submit estimates with line-to-evidence cross-references by zone and asset ID.",
    },
    {
      question: "How should equipment and machinery be documented on industrial claims?",
      answer:
        "Treat each major asset as its own chamber: overview, nameplate/serial when visible, pre-disturbance damage detail, and reciprocal zone IDs. Do not merge machinery into unlabeled warehouse finish galleries.",
    },
    {
      question: "How should warehouse inspections be structured for insurance claims?",
      answer:
        "Pre-inspect with facility maps, then sequence exterior/roof, building systems, zones, equipment, racking, and docks. Complete overview-to-detail photos and same-day labeling before opening the next footprint block.",
    },
    {
      question: "How do industrial restoration claims differ from other commercial restoration claims?",
      answer:
        "Industrial restoration adds high-bay volume, process equipment, racking, docks, and continuous-operations constraints under safety rules. Documentation and estimates must follow zone/system/equipment indexes; office and retail patterns invite underpayment on industrial files.",
    },
  ],
});
