import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/commercial" as const;
const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "retail-office-insurance-claims-guide" as const;

export const RETAIL_OFFICE_INSURANCE_CLAIMS_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Retail & Office Commercial Insurance Claims Guide for Contractors",
  excerpt:
    "Contractor playbook for documenting, managing, estimating, and supplementing insurance claims on retail centers, storefronts, shopping centers, office buildings, professional offices, mixed-use properties, and multi-tenant commercial facilities — tenant spaces, leasehold improvements, common areas, occupied-business workflows, and indexed claim packages.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Retail insurance claims",
    "Office building insurance claims",
    "Retail property damage documentation",
    "Office restoration documentation",
    "Tenant improvement insurance claims",
    "Multi-tenant commercial property claims",
    "Commercial restoration documentation",
    "Shopping centers",
    "Mixed-use properties",
    "Leasehold improvements",
    "Large loss",
    "Restoration contractors",
    "Xactimate",
    "Supplements",
  ],
  publishedAt: "2026-07-21",
  updatedAt: "2026-07-21",
  estimatedMinutes: 30,
  seoTitle:
    "Retail & Office Commercial Insurance Claims Guide for Contractors | Documentation Playbook",
  seoDescription:
    "Document retail and office insurance claims for contractors: multi-tenant suites, tenant improvements, common areas, occupied businesses, after-hours restoration, roofing water fire mold considerations, code, supplements, and indexed claim packages.",
  relatedGuideSlugs: [
    "commercial-insurance-claims-documentation-guide",
    "multifamily-apartment-insurance-claims-guide",
    "industrial-warehouse-insurance-claims-guide",
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
    "commercial-retail-insurance-claims",
    "commercial-office-building-insurance-claims",
    "commercial-retail-office-tenant-improvements",
    "commercial-multi-tenant-damage-documentation",
    "commercial-occupied-business-restoration",
    "commercial-tenant-improvements-documentation",
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
    "Retail centers, storefronts, shopping centers, office buildings, professional offices, mixed-use properties, and multi-tenant commercial facilities generate insurance claims that fail when contractors apply residential photo dumps or single-suite templates to multi-tenant footprints. These properties combine demised tenant spaces, leasehold improvements, common areas, shared building systems, and often continuous business operations under property-management and security rules. Carriers, ownership, and property managers review evidence by building, floor, suite, and common-area ID — not as one unlabeled commercial gallery. This guide is the contractor operational playbook for documenting, managing, estimating, supplementing, and recovering retail and office insurance claims across water, fire, mold, roofing, and reconstruction scopes. For the parent commercial documentation framework, see the Commercial Insurance Claims Documentation Guide. For apartment multifamily ops, see the Multifamily & Apartment Insurance Claims Guide. For warehouse and industrial footprints, see the Industrial & Warehouse Insurance Claims Guide. For association governance focus, see the HOA Insurance Claims Guide. Claims Ninja supports contractors with documentation standards, large-loss estimating, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel. Obtain written direction from ownership, property management, tenants, consultants, or other appropriate parties on ownership boundaries, access, and approvals; do not interpret leases, policies, or business-income values.",
  whenToUse: [
    {
      condition:
        "Retail center, storefront, shopping center, office building, professional office, mixed-use, or multi-tenant commercial facility loss",
      signal:
        "Property manager or ownership controlling access; multiple suites or floors in scope; tenant improvements or common areas affected; residential documentation templates cannot organize the claim",
    },
    {
      condition: "Loss spanning tenant spaces plus common areas or shared building systems",
      signal:
        "Corridors, lobbies, restrooms, elevators, roofs, or HVAC risers require documentation separate from demised suite finishes",
    },
    {
      condition: "Leasehold or tenant improvement finishes and fixtures in scope",
      signal:
        "Suite-level TI, build-outs, or tenant-owned contents need indexed photo sets distinct from base-building packages",
    },
    {
      condition: "Occupied businesses requiring after-hours or phased mitigation while operations continue",
      signal:
        "Stores or offices remaining open in undamaged areas; security escorts, after-hours windows, or phased access required",
    },
    {
      condition: "Carrier underpayment or reinspection citing mixed multi-tenant documentation",
      signal:
        "Desk reviewer cites undifferentiated suite photos, missing floor/suite IDs, weak TI vs shell separation, or residential template on retail/office footprint",
    },
  ],
  prerequisites: [
    "Retail/office documentation plan with Property → Building → Floor / Suite / Tenant Space → Common Area / System → Chamber naming published within 24 hours of mobilization",
    "Ownership or property management contact, tenant coordination path, and site map or suite directory aligned to facility records",
    "Working inventory of affected suites, floors, common areas, and shared systems — update same day discoveries appear",
    "Tenant-space documentation template separating building-owned finishes, leasehold/TI, and tenant contents — not crew shorthand",
    "Stakeholder communication log template for ownership, property management, tenants, security, and carrier walkthrough events",
    "Separate folders for building systems, common areas, per-suite packs, mitigation, estimates, authorizations, and closeout",
    "Project manager or documentation lead assigned on multi-floor or multi-tenant retail/office losses",
  ],
  requiredDocumentation: [
    {
      id: "property-identification-package",
      label: "Property identification and stakeholder package",
      required: true,
      detail:
        "Document property type (retail center, storefront, shopping center, office, professional office, mixed-use, multi-tenant), ownership and property management contacts, preferred approval channels, security access rules, and known operating constraints (hours, after-hours windows, escort requirements).",
    },
    {
      id: "suite-floor-index",
      label: "Building, floor, and suite / tenant-space index",
      required: true,
      detail:
        "Master list of affected buildings, floors, suites, and common areas with IDs matching property management directories or site maps — never crew nicknames.",
    },
    {
      id: "tenant-space-documentation-sets",
      label: "Tenant-space documentation sets",
      required: true,
      detail:
        "Per-suite overview-to-detail photo packs and notes for demised spaces, with suite ID on every set — include undamaged boundary suites when they define scope limits.",
    },
    {
      id: "leasehold-ti-pack",
      label: "Leasehold and tenant improvement documentation pack",
      required: true,
      detail:
        "Indexed evidence for TI finishes and fixtures labeled by suite ID, with written direction from ownership/PM/tenant on shell versus leasehold boundaries when ownership differs — contractors document conditions, not lease interpretations.",
    },
    {
      id: "common-area-systems-pack",
      label: "Common areas and shared building systems pack",
      required: true,
      detail:
        "Lobbies, corridors, restrooms, elevators, stairs, roofs, HVAC risers, fire protection, and other shared systems documented as system- or area-level evidence tied to floor and suite IDs they serve.",
    },
    {
      id: "building-vs-tenant-ownership-notes",
      label: "Building-owned versus tenant-owned finishes and contents notes",
      required: true,
      detail:
        "Separate folders or labels for base-building finishes, leasehold/TI, and tenant contents/FF&E when ownership or responsible parties differ — obtain written direction; do not opine on coverage.",
    },
    {
      id: "occupied-business-log",
      label: "Occupied business and access communication log",
      required: true,
      detail:
        "Contemporaneous records of PM/ownership authorizations, tenant notifications, security clearances, entry windows, denials, and change-order approvals — keyed to suite and common-area IDs.",
    },
    {
      id: "emergency-mitigation-records",
      label: "Emergency mitigation documentation by suite and system",
      required: true,
      detail:
        "Day-one extraction, drying start, temporary protection, board-up, and safety actions indexed by location ID with dates and authorization source (ownership, PM, tenant, or emergency rule).",
    },
    {
      id: "retail-office-estimate-index",
      label: "Retail and office estimate index",
      required: true,
      detail:
        "Xactimate or estimate organization with building-system, common-area, and per-suite sections and quantity validation reconciled to indexed evidence.",
    },
    {
      id: "code-ordinance-file",
      label: "Code and ordinance supporting file",
      required: true,
      detail:
        "AHJ requirements, permits, inspection notes, and code citations that drive commercial upgrade scope — photograph non-compliant conditions before demolition removes evidence.",
    },
    {
      id: "final-retail-office-package",
      label: "Final indexed retail and office claim package",
      required: true,
      detail:
        "Carrier-ready closeout with property ID, suite/floor index, common-area and systems packs, per-suite and TI sets, mitigation logs, estimates, stakeholder logs, code file, and line-to-evidence cross-reference.",
    },
  ],
  steps: [
    {
      id: "how-retail-office-differ",
      title: "How Retail and Office Claims Differ from Residential Claims",
      actions: [
        "Residential claims often organize around rooms in a single dwelling; retail and office claims organize around Property → Building → Floor / Suite / Tenant Space → Common Area / System indexes.",
        "Multiple stakeholders control access and approvals: ownership, property management, tenants, and security — not a single homeowner decision path.",
        "Demising walls, leasehold improvements, and shared systems create ownership and documentation boundaries residential templates do not capture.",
        "Business operations often continue in undamaged suites while contractors mitigate elsewhere under after-hours and security rules.",
        "Evidence volume scales with suite count and common-area footprint; desk reviewers cannot navigate unlabeled commercial photo dumps.",
        "Carrier scrutiny scales with invoice total and multi-tenant complexity: specialist adjusters reconcile evidence by suite, floor, and system — not as a blended residential gallery.",
      ],
      notes:
        "See the Commercial Insurance Claims Documentation Guide for the parent commercial framework; see Multifamily and HOA guides for residential multifamily or association-governed properties; see Industrial & Warehouse for plant and distribution footprints.",
    },
    {
      id: "single-vs-multi-tenant",
      title: "Single-Tenant versus Multi-Tenant Properties",
      actions: [
        "Single-tenant retail or office losses may still require shell versus TI separation and landlord/tenant coordination — do not assume one folder equals one claim.",
        "Multi-tenant properties require a suite directory index matching property management labels before crews photograph; crew nicknames fail desk review.",
        "Mixed-use properties combine retail, office, and sometimes residential components — publish indexes that match how ownership labels the campus, not a single commercial finishes block.",
        "At intake, classify single-tenant versus multi-tenant footprint and whether common areas or shared systems are in scope.",
        "Estimate sections should mirror the footprint: per-suite blocks plus common-area and building-system sections.",
        "Obtain written direction from ownership or property management on which spaces are included in the contractor’s engagement before expanding into adjacent suites.",
      ],
    },
    {
      id: "ownership-pm-tenant-coordination",
      title: "Ownership, Property Management, and Tenant Coordination",
      actions: [
        "Confirm primary ownership or property management contact and preferred approval channel in writing on day one.",
        "Log tenant notifications and access requests keyed to suite IDs; do not rely on verbal hallway conversations as the record.",
        "Route change orders and scope expansions through the documented approval path before production expands into additional suites or common areas.",
        "Schedule carrier walkthroughs through property management or ownership — bring suite and common-area indexes, not unlabeled drives.",
        "Separate communication logs for ownership/PM decisions versus tenant operational requests so the file shows who authorized what.",
        "When ownership, PM, and tenant disagree on access or boundaries, pause and obtain written direction from the appropriate party — do not improvise lease or coverage positions.",
      ],
    },
    {
      id: "leasehold-ti-documentation",
      title: "Leasehold and Tenant Improvement Documentation",
      actions: [
        "Identify shell versus leasehold/TI boundaries at intake using property management or ownership direction — contractors document conditions; they do not interpret leases.",
        "Photograph TI finishes and fixtures with suite IDs before demolition; post-demo-only photos fail TI attribution.",
        "Keep leasehold/TI packs in suite-labeled folders separate from base-building packages when ownership or responsible parties differ.",
        "Record who provided written direction on TI versus shell boundaries (ownership, PM, tenant, or consultant) with date and scope.",
        "Cross-reference TI evidence to estimate sections and to common-area or system causation (e.g., roof leak into Suite 210).",
        "Update related commercial TI documentation standards when shell/TI separation applies; use this guide’s suite indexing for retail and office footprints.",
      ],
      notes:
        "See commercial tenant improvement documentation FAQ and Commercial Insurance Claims Documentation Guide for parent TI standards; keep Property → Suite indexing intact.",
    },
    {
      id: "common-areas-shared-systems",
      title: "Common Areas and Shared Building Systems",
      actions: [
        "Index lobbies, corridors, restrooms, elevators, stairs, loading docks, and parking structures as common-area packs with location IDs.",
        "Document roofs, HVAC risers, fire protection, electrical distribution, and life-safety systems as system packs labeled to floors and suites they serve.",
        "Tie system findings to affected suites: a roof or riser failure into Suites 110–114 must appear in both system and suite packs with reciprocal IDs.",
        "Capture undamaged comparison common areas when partial replacement or matching is disputed across floors.",
        "Do not bury common-area damage inside a representative suite folder — shared-space underpayment often starts with inseparable photos.",
        "Apply Commercial Roofing and Photo Documentation standards under this retail/office indexing — never drop floor/suite labels mid-claim.",
      ],
      notes:
        "Peril field standards for water, fire, and mold live in the corresponding commercial specialty guides; keep Property → Building → Floor / Suite indexing intact.",
    },
    {
      id: "occupied-business-considerations",
      title: "Occupied Business Considerations",
      actions: [
        "Map open versus closed suites and common areas on day one; update when tenants reclaim or release spaces.",
        "Coordinate security badges, escort rules, and business hours through property management; log access events keyed to suite IDs.",
        "Photograph temporary barriers, containment, and protection that separate operating businesses from loss zones.",
        "Document customer-facing or professional-office continuity constraints that force after-hours or phased mobilizations — attach written authorization.",
        "Keep daily status packets property managers can forward to ownership and tenants: suites worked, discoveries, and decisions needed.",
        "Do not improvise carrier walkthroughs into open retail floors without PM scheduling — unsafe or disruptive access destroys credibility and evidence quality.",
      ],
    },
    {
      id: "emergency-mitigation-operations",
      title: "Emergency Mitigation While Operations Continue",
      actions: [
        "Capture arrival conditions before extraction, drying, or temporary protection alters the retail/office scene.",
        "Confirm who authorized emergency stop-loss (ownership, PM, tenant, or written emergency rule) and log authorization with scope and date.",
        "Index emergency work by suite and system ID: extraction volumes, equipment set, temporary roof protection, and safety actions.",
        "Photograph mitigation equipment placement per suite/chamber with asset tags visible; property-level equipment photos do not defend per-suite lines.",
        "Separate emergency mitigation packages from reconstruction estimates so stakeholders can approve stop-loss while rebuild decisions continue.",
        "On water, fire, and mold emergencies, apply Commercial Water, Fire, and Mold indexing while keeping this guide’s suite/system structure intact.",
      ],
    },
    {
      id: "after-hours-phased-restoration",
      title: "After-Hours and Phased Restoration Workflows",
      actions: [
        "Publish a phase plan keyed to suite and common-area IDs: which spaces are released, held, or after-hours only.",
        "Log after-hours and weekend windows with PM/ownership authorization before billing shift differentials or remobilizations.",
        "Complete overview-to-detail photo packs and same-day labeling for each phase before opening the next block of footprint.",
        "Document temporary protection between phases that keeps open businesses operational.",
        "Reconcile crew counts and equipment to phase logs before invoice or supplement submission.",
        "On multi-floor buildings, keep per-floor indexes so reinspections can isolate one floor without reopening the entire office or center file.",
      ],
    },
    {
      id: "damage-docs-by-suite",
      title: "Damage Documentation by Tenant Space, Floor, or Suite",
      actions: [
        "Use Property → Building → Floor / Suite / Tenant Space naming on every photo, log row, and estimate section.",
        "Complete overview-to-detail sequencing in each suite before leaving; include ceiling, floor, and wall conditions separately.",
        "Document undamaged adjacent suites that define scope boundaries and support quantity disputes.",
        "Maintain a suite directory checklist so no affected space is omitted from the photo index.",
        "Cross-link moisture, smoke, or mold maps to suite IDs on water and fire losses using commercial peril standards.",
        "Never merge multiple suites into one unlabeled gallery — multi-tenant underpayment often starts with inseparable photos.",
      ],
    },
    {
      id: "estimating-multiple-tenant-spaces",
      title: "Estimating Multiple Tenant Spaces",
      actions: [
        "Structure Xactimate or estimates with per-suite sections plus distinct common-area and building-system sections.",
        "Validate quantities against suite-indexed photo packs and measurements — sample-suite estimating fails multi-tenant review.",
        "Keep leasehold/TI line blocks attributable to suite IDs when TI scope differs from shell.",
        "Separate general conditions and after-hours labor with authorization references keyed to location IDs.",
        "Reconcile materials and equipment to field logs by suite before supplement submission.",
        "Do not bury multi-suite scope inside a single commercial finishes block — desk reviewers cut what they cannot attribute.",
      ],
    },
    {
      id: "building-vs-tenant-owned",
      title: "Building-Owned versus Tenant-Owned Finishes and Contents",
      actions: [
        "Label base-building finishes, leasehold/TI, and tenant contents/FF&E in separate packs when ownership differs.",
        "Photograph tenant contents in place before relocation when safe; log tenant- or PM-directed moves with date and destination.",
        "Obtain written direction on ownership boundaries from ownership, PM, tenant, or consultant — do not invent coverage or lease conclusions.",
        "Keep contractor contents handling packs distinct from tenant inventory evidence when both exist on the file.",
        "Cross-reference contents and finish packs to suite IDs and to causation from common systems.",
        "Never bury tenant contents inside unlabeled building finish galleries.",
      ],
    },
    {
      id: "peril-considerations",
      title: "Roofing, Water, Fire, Smoke, and Mold Considerations",
      actions: [
        "Roof and envelope failures into multi-tenant interiors require reciprocal IDs between roof bays and affected suites.",
        "On water losses, apply Commercial Water Loss Documentation Guide procedures under suite/floor indexing — moisture maps must resolve to suite IDs.",
        "On fire and smoke losses, document migration paths through corridors, HVAC, and adjacent suites using Commercial Fire Claims Guide standards.",
        "On mold losses, keep chamber and suite labels consistent with Commercial Mold Claims Guide protocols.",
        "Capture temporary weatherization and board-up on storefronts and office entries with location IDs and authorization dates.",
        "Peril procedures never replace Property → Suite indexing — they nest under it.",
      ],
      notes:
        "Use Commercial Roofing Documentation Guide for roof-specific field standards on retail and office campuses.",
    },
    {
      id: "code-ordinance",
      title: "Code and Ordinance Documentation",
      actions: [
        "Identify AHJ jurisdiction early; commercial rebuilds frequently trigger fire protection, egress, accessibility, electrical, and restroom upgrades.",
        "Photograph non-compliant conditions before demolition removes evidence of why upgrades are required.",
        "Collect permits, inspection reports, and written AHJ directives that support ordinance or law line items.",
        "Separate code upgrade scope in the estimate and documentation index so reviewers evaluate ordinance lines independently of like-kind repairs.",
        "Track inspection milestones chronologically across suites and floors — code scope often expands mid-project on multi-tenant losses.",
        "Coordinate with the Code Upgrade Documentation Guide and peril-specific guides while keeping retail/office indexing consistent.",
      ],
    },
    {
      id: "access-security-restrictions",
      title: "Access, Security, and Operational Restrictions",
      actions: [
        "Complete property security orientation and record badge or escort requirements as production constraints documented in the file.",
        "Log delayed access and standby time with suite IDs when property management or tenants control entry — contemporaneous logs support general conditions lines.",
        "Photograph restricted areas, alarm zones, and after-hours entry points that limit crew and adjuster windows.",
        "Never bypass security protocols to 'save time' — unauthorized entry creates liability and destroys claim credibility.",
        "Include security-driven temporary barriers and protection in estimates with photo evidence of why they were required.",
        "Schedule adjuster access through the same PM/security path used for crews so walkthrough evidence matches production records.",
      ],
    },
    {
      id: "supplement-opportunities-section",
      title: "Supplement Opportunities",
      actions: [
        "Suite or floor scope omitted from a sample-suite carrier estimate — adjacent suites and common areas frequently appear only after indexed documentation.",
        "Leasehold/TI discoveries after initial walkthrough — finishes and fixtures expand beyond carrier-selected samples.",
        "Occupied-business production costs: after-hours labor, escorts, phased mobilizations, and temporary barriers authorized by ownership/PM.",
        "Shared-system discoveries that explain multi-suite damage patterns (roof, HVAC, fire protection).",
        "Code-driven upgrades documented with AHJ evidence after demolition or inspection.",
        "Package every supplement by suite/floor/system ID with discovery photos, revised sketches, and estimate deltas — multi-tenant supplements fail when evidence is blended.",
      ],
      notes:
        "See Supplement Submission Guide for package structure; use this section’s triggers with suite-indexed attachments.",
    },
    {
      id: "carrier-stakeholder-approvals",
      title: "Carrier Communication and Stakeholder Approvals",
      actions: [
        "Route carrier meetings through ownership or property management; confirm attendees and suite access in writing.",
        "Present suite and common-area indexes at every walkthrough — unlabeled photo dumps invite proportional reductions.",
        "Log adjuster requests and follow-ups keyed to location IDs the same day.",
        "Obtain written stakeholder approvals before expanding scope into additional suites, floors, or common areas.",
        "Separate stop-loss mitigation approvals from reconstruction authorizations when stakeholders approve phases independently.",
        "Close communication loops with a dated status packet: suites complete, pending decisions, and open supplement items.",
      ],
    },
    {
      id: "final-claim-package",
      title: "Final Claim Package Organization",
      actions: [
        "Front matter: property identification sheet, ownership/PM/tenant contacts, suite directory, and floor index.",
        "Building-systems and common-area evidence: roof, HVAC, fire protection, lobbies, corridors labeled to location IDs.",
        "Per-suite and TI packs with reciprocal cross-references to systems.",
        "Building-owned versus tenant-owned finishes and contents packs when ownership differs.",
        "Mitigation and production logs: emergency records, daily logs, equipment reconciliation, and change tracking.",
        "Estimate history: initial, revised, and supplement estimates with section headers matching the retail/office index.",
        "Coordination and code: stakeholder communication logs, authorizations, permits, AHJ notes, and communication chronology.",
        "Closeout: table of contents, line-to-evidence cross-reference, punch list with completion photos by location ID, and archive using the same folder structure used in production.",
      ],
    },
    {
      id: "retail-office-documentation-checklist",
      title: "Retail and Office Documentation Checklist",
      actions: [
        "Documentation plan and naming convention published within 24 hours.",
        "Property identification and stakeholder package on file.",
        "Building, floor, and suite / tenant-space index complete.",
        "Tenant-space documentation sets complete for each affected suite.",
        "Leasehold and TI pack labeled to suite IDs.",
        "Common areas and shared building systems pack labeled to location IDs.",
        "Building-owned versus tenant-owned finishes and contents notes on file.",
        "Occupied business access and authorization log contemporaneous.",
        "Emergency mitigation indexed by suite and system.",
        "Retail/office estimate index with quantity validation.",
        "Code/ordinance file with AHJ evidence when upgrades apply.",
        "Daily project logs by suite/floor/system ID.",
        "Supplement change log with discovery drivers.",
        "Final indexed claim package with line-to-evidence cross-reference.",
        "QC spot-check: random suites resolve photos, logs, and estimate lines to the same IDs.",
      ],
    },
    {
      id: "inspection-workflow",
      title: "Inspection Workflow",
      actions: [
        "Pre-inspect: obtain site map or suite directory, floor list, and common-area list from property management; publish naming convention before crews mobilize.",
        "Exterior and roof walk: document elevations, storefronts, roof areas when accessible, and drainage clues before opening interiors.",
        "Building-systems and common-area pass: complete roof, HVAC, fire protection, lobbies, and corridors with location labels.",
        "Suite sequence: work floor by floor or wing by wing; complete overview-to-detail photos before leaving each suite.",
        "TI and contents pass: document leasehold finishes and tenant contents with suite IDs and ownership labels.",
        "Adjacent-suite check: document undamaged boundary suites and shared-system paths that explain multi-suite patterns.",
        "Same-day office sync: upload and label all sets before the next shift.",
      ],
    },
    {
      id: "tenant-space-documentation-checklist",
      title: "Tenant-Space Documentation Checklist",
      actions: [
        "Suite ID matches property management directory on every photo and log row.",
        "Overview-to-detail photo sequence complete before leaving the suite.",
        "Ceiling, floor, and wall conditions captured separately.",
        "Leasehold/TI finishes photographed before demolition with suite label.",
        "Tenant contents/FF&E documented in place when present and safe.",
        "Building-owned versus tenant-owned items labeled per written stakeholder direction.",
        "Reciprocal cross-reference to common-area or system causation when applicable.",
        "Undamaged adjacent suite or demising-wall context captured when it defines scope.",
        "Mitigation equipment placement photos with asset tags for this suite.",
        "Estimate section header exists for this suite ID with quantity validation.",
      ],
    },
    {
      id: "qc-checklist-step",
      title: "Quality-Control Checklist",
      actions: [
        "Confirm Property → Building → Floor / Suite / Common Area / System naming is consistent across photos, logs, and estimate sections.",
        "Spot-check three random suites: each resolves overview-to-detail photos, daily log rows, and high-dollar lines to the same IDs.",
        "Verify TI packs are not merged into unlabeled building finish galleries.",
        "Confirm common-area and systems packs are distinct from suite folders.",
        "Validate occupied-business authorizations and access logs are contemporaneous for after-hours and escort lines.",
        "Reject packages that use crew nicknames, missing suite IDs, or end-of-job narratives in place of daily suite logs.",
      ],
    },
    {
      id: "common-documentation-mistakes",
      title: "Common Documentation Mistakes",
      actions: [
        "Treating retail and office losses like residential single-dwelling files.",
        "Merging multiple suites into one unlabeled commercial photo dump.",
        "Mixing leasehold/TI evidence into base-building folders without suite IDs.",
        "Using crew nicknames instead of property management suite and floor IDs.",
        "Ignoring occupied-business access logs and after-hours authorizations.",
        "Estimating multi-tenant scope as a single commercial finishes block.",
        "Burying common areas and shared systems inside a representative suite folder.",
        "Submitting supplements without suite-indexed discovery evidence.",
        "End-of-job narratives replacing contemporaneous daily suite logs.",
        "Skipping adjacent-suite and building-system checks that explain multi-suite patterns.",
      ],
    },
    {
      id: "stakeholder-communication-workflow",
      title: "Stakeholder Communication Workflow",
      actions: [
        "Day one: confirm primary ownership or PM contact, tenant notification path, and emergency authorization path in writing.",
        "Daily: send indexed status to the primary contact — suites worked, common areas documented, discoveries requiring decisions.",
        "Access events: log entry windows, escorts, denials, and security clearances keyed to suite and common-area IDs the same day.",
        "Change orders: route scope expansions through the documented approval path before production expands; attach discovery photos by location ID.",
        "Carrier meetings: schedule through ownership/PM; bring suite and common-area indexes, not unlabeled drives.",
        "Closeout: deliver the final indexed package in the folder structure ownership and risk managers can archive and forward.",
      ],
    },
    {
      id: "supplement-opportunity-checklist",
      title: "Supplement Opportunity Checklist",
      actions: [
        "Suites or floors omitted from sample-suite carrier estimate — separate suite photo packs and estimate sections ready.",
        "Leasehold/TI damage beyond initial carrier sample — suite-labeled discovery photos before demolition.",
        "Common-area or shared-system findings explaining multi-suite patterns — reciprocal IDs attached.",
        "After-hours or escorted mobilizations — written PM/ownership authorization and access logs keyed to location IDs.",
        "Phased releases creating remobilization or standby — contemporaneous phase logs by suite ID.",
        "AHJ or code inspection triggering upgrade scope — permits, photos of non-compliant conditions, ordinance citations.",
        "Equipment or drying duration exceeding initial assumption on multi-suite loss — per-suite equipment photos and daily logs.",
        "Storefront or entry temporary weatherization beyond initial board-up — location-indexed protection photos and authorization.",
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion",
      actions: [
        "Retail and office insurance claims are recovered through suite-indexed documentation, leasehold/TI discipline, common-area and systems separation, occupied-business coordination, and estimate organization that mirrors property management directories — not more unlabeled photos.",
        "Apply the Commercial Insurance Claims Documentation Guide as the parent standard; use Commercial Water, Fire, Mold, and Roofing guides for peril procedures; use Multifamily, HOA, and Industrial guides when those property types dominate.",
        "Claims Ninja supports contractors with documentation standards, large-loss estimating, supplement packaging, and claim recovery workflows on retail and office losses.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "retail-office-plan-published",
      label: "Retail/office documentation plan published within 24 hours",
      required: true,
      detail:
        "Folder index, Property → Building → Floor / Suite / Common Area / System naming, role assignments, and ownership/PM liaison documented before carrier walkthrough.",
    },
    {
      id: "suite-index-aligned",
      label: "Indexes aligned to property management suite directories and site maps",
      required: true,
      detail:
        "Every building, floor, suite, and common area uses facility IDs — no crew shorthand in submitted files.",
    },
    {
      id: "ti-common-separated",
      label: "TI, suite finishes, and common areas documented separately",
      required: true,
      detail:
        "Leasehold/TI packs, per-suite finish packs, and common-area/systems packs are distinct — not buried inside unlabeled commercial galleries.",
    },
    {
      id: "tenant-space-sets-complete",
      label: "Tenant-space documentation sets complete for affected suites",
      required: true,
      detail:
        "Each affected suite has overview-to-detail photos and notes under folders matching estimate sections.",
    },
    {
      id: "ops-log-current",
      label: "Occupied-business and access log current",
      required: true,
      detail:
        "Authorizations, escorts, security clearances, entry events, denials, and change orders logged contemporaneously by location ID.",
    },
    {
      id: "estimate-suite-organized",
      label: "Estimate organized by suite/common area/system",
      required: true,
      detail:
        "Xactimate sections mirror the documentation hierarchy with quantity validation per location.",
    },
    {
      id: "qc-spot-check-passed",
      label: "Pre-submission QC spot-check passed",
      required: true,
      detail:
        "Random suites confirm photos, logs, and high-dollar estimate lines resolve to the same location IDs.",
    },
    {
      id: "closeout-packet-ready",
      label: "Indexed retail/office closeout packet ready",
      required: true,
      detail:
        "Final package includes property ID, suite index, common areas/systems, TI packs, mitigation, estimates, stakeholder logs, and line-to-evidence cross-reference.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Treating retail and office claims like residential single-dwelling files",
      impact:
        "Carriers and property managers cannot navigate suite and common-area evidence; files invite proportional reductions.",
      correction:
        "Enforce Property → Building → Floor / Suite / Common Area / System indexing from day one with facility IDs.",
    },
    {
      mistake: "Merging multiple suites into one unlabeled commercial photo dump",
      impact:
        "Suite, TI, and common-area scope become inseparable; high-dollar lines are cut.",
      correction:
        "Maintain distinct per-suite, TI, and common-area packs with reciprocal cross-references.",
    },
    {
      mistake: "Mixing leasehold/TI evidence into base-building folders without suite IDs",
      impact:
        "TI lines lack attributable evidence; ownership and carrier audits fail.",
      correction:
        "Keep suite-labeled TI packs separate from shell packages; obtain written direction on boundaries.",
    },
    {
      mistake: "Using crew nicknames instead of property management suite and floor IDs",
      impact:
        "PM, ownership, and carrier indexes diverge; desk review treats the file as incomplete.",
      correction:
        "Adopt facility suite and floor IDs on every photo, log row, and estimate section.",
    },
    {
      mistake: "Missing occupied-business access and after-hours authorization logs",
      impact:
        "After-hours labor, escorts, and phased work fail without contemporaneous stakeholder records.",
      correction:
        "Log authorizations, escorts, security clearances, and denials keyed to location IDs throughout the claim.",
    },
    {
      mistake: "Estimating multi-tenant scope as a single commercial finishes block",
      impact:
        "Stakeholder audit cannot navigate suite or system scope; disputed lines lack evidence paths.",
      correction:
        "Structure estimates by suite/common area/system with separate TI sections when ownership differs.",
    },
    {
      mistake: "Burying common areas and shared systems inside a representative suite folder",
      impact:
        "Common-area and system lines are underpaid when evidence cannot be separated from suite files.",
      correction:
        "Keep common-area and systems packs aligned to the site map with reciprocal suite IDs.",
    },
    {
      mistake: "Supplements without suite-indexed discovery evidence",
      impact:
        "Expanded multi-tenant scope appears arbitrary and stalls or gets denied.",
      correction:
        "Package supplements by suite/floor/system ID with discovery photos, revised sketches, and estimate deltas.",
    },
    {
      mistake: "End-of-job narratives replacing contemporaneous daily suite logs",
      impact:
        "Multi-week retail/office production cannot be defended under large-loss scrutiny.",
      correction:
        "Require daily logs and photo batches by suite/floor/system ID for the full claim timeline.",
    },
    {
      mistake: "Skipping adjacent-suite and building-system checks",
      impact:
        "Migration and system-driven scope is underpaid; causation looks incomplete to PM and carrier reviewers.",
      correction:
        "Inspect and document adjacent suites and building systems; cross-index findings to the suite directory.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Suite or floor damage omitted from a sample-suite carrier estimate",
      documentation:
        "Separate suite photo packs, directory labels, and estimate sections distinct from sample areas.",
      lineItemHint:
        "Additional suite mitigation, finishes, flooring, roof dry-in, temporary protection",
    },
    {
      trigger: "Leasehold or TI damage beyond the carrier’s initial sample",
      documentation:
        "Suite-labeled discovery photos of TI finishes and fixtures before demolition or removal.",
      lineItemHint:
        "Additional TI R&R, specialty finishes, fixture protection, coordination",
    },
    {
      trigger: "Common areas or shared systems explain multi-suite damage patterns",
      documentation:
        "Roof, HVAC, corridor, or fire-protection inspection photos cross-referenced to suite IDs.",
      lineItemHint:
        "Roof repair, HVAC drying, corridor finishes, system repairs, engineering",
    },
    {
      trigger: "Occupied businesses require after-hours or escorted mobilizations",
      documentation:
        "Ownership/PM authorization, escort/access logs, and business-hour windows keyed to suite IDs.",
      lineItemHint:
        "After-hours labor, shift differential, escorts, temporary barriers, project management",
    },
    {
      trigger: "Phased releases create standby or remobilization between suites",
      documentation:
        "Phase logs, delayed-access notes, and daily logs by released vs held suites.",
      lineItemHint:
        "Standby labor, additional mobilizations, general conditions, temporary protection between phases",
    },
    {
      trigger: "AHJ or code inspection triggers commercial upgrade scope",
      documentation:
        "Permit notes, inspection reports, photos of non-compliant conditions, and ordinance citations.",
      lineItemHint:
        "Fire protection, egress, accessibility, electrical, restroom, life-safety upgrades",
    },
    {
      trigger: "Equipment or drying duration exceeds initial carrier assumption on multi-suite loss",
      documentation:
        "Per-suite equipment placement photos, asset tags, and daily logs matching billed counts and days.",
      lineItemHint:
        "Additional air movers, dehumidifiers, air scrubbers, extended equipment days",
    },
    {
      trigger: "Storefront or entry temporary weatherization beyond initial board-up",
      documentation:
        "Location-indexed protection photos, failure of temporary measures, and PM/ownership authorization for extended protection.",
      lineItemHint:
        "Additional board-up, temporary doors, weatherization, remobilization",
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
      label: "Industrial & Warehouse Insurance Claims Guide",
      href: "/resources/guides/general-claims/industrial-warehouse-insurance-claims-guide",
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
      question: "How do retail property insurance claims work for contractors?",
      answer:
        "Retail and shopping-center claims organize around suite and common-area indexes — storefronts, tenant spaces, corridors, and shared systems — not residential room folders. Contractors publish Property → Building → Suite naming, document TI and common areas separately, maintain occupied-business access logs, and submit estimates that mirror the same hierarchy so carriers can attribute scope.",
    },
    {
      question: "How do office building insurance claims work for contractors?",
      answer:
        "Office claims organize by floor and suite IDs matching property management directories, with separate packs for demised offices, common areas, and building systems. After-hours and security constraints become claim evidence when they drive phased labor and temporary protection.",
    },
    {
      question:
        "How should contractors document tenant improvements on retail and office claims?",
      answer:
        "Obtain written direction on shell versus leasehold boundaries, photograph TI finishes with suite IDs before demolition, keep TI packs separate from base-building folders, and avoid mixing leasehold evidence into unlabeled commercial galleries.",
    },
    {
      question: "How should multi-tenant commercial damage be documented?",
      answer:
        "Maintain a suite directory index, complete overview-to-detail packs per suite, document common areas and shared systems with reciprocal IDs, and structure estimates by suite so desk reviewers can attribute quantities.",
    },
    {
      question: "How should contractors restore occupied commercial businesses during a claim?",
      answer:
        "Map open versus closed spaces, coordinate after-hours and security access through ownership or property management, log authorizations by suite ID, and phase mitigation so operations can continue in undamaged areas without unlabeled evidence gaps.",
    },
  ],
});
