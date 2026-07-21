import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/commercial" as const;
const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "hoa-insurance-claims-guide" as const;

export const HOA_INSURANCE_CLAIMS_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "HOA Insurance Claims Guide for Contractors",
  excerpt:
    "Contractor playbook for documenting, managing, estimating, and supplementing insurance claims on HOA, condominium association, townhome, and community association properties — governance workflows, master vs homeowner policies, common elements, board and management coordination, and indexed claim packages.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "HOA insurance claims",
    "Condominium association insurance claims",
    "HOA property damage documentation",
    "HOA restoration claims",
    "HOA insurance documentation",
    "Common elements",
    "Master policy",
    "Board coordination",
    "Property managers",
    "Large loss",
    "Restoration contractors",
    "Xactimate",
    "Supplements",
  ],
  publishedAt: "2026-07-20",
  updatedAt: "2026-07-20",
  estimatedMinutes: 28,
  seoTitle:
    "HOA Insurance Claims Guide for Contractors | Association Documentation Playbook",
  seoDescription:
    "Document HOA and condominium association insurance claims for contractors: governance and board workflows, master vs homeowner policies, common elements vs unit property, building-wide and unit documentation, mitigation, roofing, water, fire, mold, supplements, and indexed claim packages.",
  relatedGuideSlugs: [
    "commercial-insurance-claims-documentation-guide",
    "commercial-insurance-supplement-playbook-for-contractors",
    "large-loss-commercial-insurance-claims-guide",
    "multifamily-apartment-insurance-claims-guide",
    "retail-office-insurance-claims-guide",
    "industrial-warehouse-insurance-claims-guide",
    "commercial-water-loss-documentation-guide",
    "commercial-fire-claims-guide",
    "commercial-mold-claims-guide",
    "commercial-roofing-documentation-guide",
    "hoa-roofing-claims-guide",
    "multi-building-roofing-claims-guide",
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
    "commercial-hoa-insurance-claims",
    "commercial-hoa-association-documentation",
    "commercial-hoa-master-policies",
    "commercial-hoa-common-elements",
    "commercial-hoa-claim-coordination",
    "commercial-claim-documentation",
    "commercial-multi-building-documentation",
    "commercial-apartment-insurance-claims",
    "commercial-multifamily-common-areas",
    "roof-hoa-responsible-damage",
    "roof-hoa-damage-documentation",
    "water-commercial-claims-documentation",
    "fire-commercial-claims-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["commercial", "large-loss"],
  purpose:
    "Homeowners associations, condominium associations, townhome communities, and community associations generate insurance claims that look residential at the unit level but behave commercially at the association level. Boards and management companies control authorization; master policies and unit-owner policies split responsibility; common elements span buildings while individually owned interiors sit on different coverage; and carriers review association files by building, common-element zone, and unit — not as a single-family dump. This guide is the contractor operational playbook for documenting, managing, estimating, supplementing, and recovering HOA and association insurance claims across water, fire, mold, roofing, and reconstruction scopes. For the parent commercial documentation framework, see the Commercial Insurance Claims Documentation Guide. For apartment multifamily ops without association governance focus, see the Multifamily & Apartment Insurance Claims Guide. For roof-only association workflows, see the HOA Roofing Claims Guide. Claims Ninja supports contractors with documentation standards, large-loss estimating, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition:
        "HOA, condominium association, townhome community, or community association loss",
      signal:
        "Board, property manager, or management company controlling access and approvals; association requesting indexed documentation; residential single-file pattern cannot organize the claim",
    },
    {
      condition: "Loss involving common elements and individually owned unit property",
      signal:
        "Roofs, exteriors, corridors, or shared systems on the master policy alongside unit interiors with ownership or HO-6 boundary questions",
    },
    {
      condition: "Master policy claim with unit-owner coordination requirements",
      signal:
        "Association claims contact plus unit-owner notifications, access windows, or dual-policy documentation requests",
    },
    {
      condition: "Board or management company requiring phased approvals",
      signal:
        "Emergency mitigation authorized but reconstruction held for board vote, reserve review, or management change-order process",
    },
    {
      condition: "Carrier underpayment or reinspection citing mixed association documentation",
      signal:
        "Desk reviewer cites undifferentiated HOA photos, missing common-element separation, weak board/manager logs, or residential template on association footprint",
    },
  ],
  prerequisites: [
    "HOA documentation plan with Community → Building → Common Element / Unit → Room naming published within 24 hours of mobilization",
    "Board liaison or property manager contact, management company claims contact, and site map with building and unit IDs aligned to association records",
    "Master versus unit-owner responsibility matrix draft (common elements vs individually owned property) — update as association confirms boundaries",
    "Unit inventory template covering affected, adjacent, and owner-occupied units — not crew shorthand",
    "Stakeholder communication log template for board, manager, management company, and unit-owner access events",
    "Separate folders for common elements, units, shared systems, mitigation, estimates, authorizations, and closeout",
    "Project manager or documentation lead assigned on multi-building or multi-unit association losses",
  ],
  requiredDocumentation: [
    {
      id: "association-governance-package",
      label: "Association governance and management package",
      required: true,
      detail:
        "Document association type (HOA, condominium, townhome, community association), board contacts, property manager and management company contacts, preferred approval channels, and any written emergency-authorization rules known at intake.",
    },
    {
      id: "master-vs-unit-policy-notes",
      label: "Master policy versus homeowner policy notes",
      required: true,
      detail:
        "Record which policy is expected to respond for common elements versus unit interiors when known; note dual-claim or HO-6 coordination without giving coverage opinions.",
    },
    {
      id: "common-element-inventory",
      label: "Common element and building index",
      required: true,
      detail:
        "Master list of affected common elements and buildings with IDs matching association/management records — roofs, exteriors, corridors, amenities, grounds, and shared systems.",
    },
    {
      id: "unit-inventory-index",
      label: "Unit inventory and ownership status index",
      required: true,
      detail:
        "List of every affected and adjacent unit with building and unit numbers matching association records — include owner-occupied, tenant-occupied, and vacant units when known.",
    },
    {
      id: "common-element-damage-sets",
      label: "Common-element damage documentation sets",
      required: true,
      detail:
        "Indexed photo sets and notes for association-owned or common-element scope with overview-to-detail sequencing and consistent location IDs — never merge common elements into unlabeled unit galleries.",
    },
    {
      id: "unit-damage-sets",
      label: "Unit documentation coordination sets",
      required: true,
      detail:
        "Per-unit photo sets and notes when unit interiors are in scope, labeled to association unit numbers and cross-referenced to related common-element findings.",
    },
    {
      id: "stakeholder-communication-log",
      label: "Board, manager, and management company communication log",
      required: true,
      detail:
        "Contemporaneous records of board/manager authorizations, unit-owner notices, entry events, access denials, and change-order approvals — keyed to building, common-element, or unit IDs.",
    },
    {
      id: "emergency-mitigation-records",
      label: "Emergency mitigation documentation by common element and unit",
      required: true,
      detail:
        "Day-one extraction, drying start, board-up, temporary protection, and safety actions indexed by location ID with dates and authorization source (board, manager, or emergency rule).",
    },
    {
      id: "shared-systems-pack",
      label: "Shared building systems documentation",
      required: true,
      detail:
        "Roof, plumbing stacks/risers, HVAC zones, life-safety systems, and mechanical rooms documented as system-level evidence tied to affected common elements and units.",
    },
    {
      id: "association-estimate-index",
      label: "Association estimate index",
      required: true,
      detail:
        "Xactimate or estimate organization with common-element sections, building/unit sections, shared-system scope, and quantity validation reconciled to indexed evidence.",
    },
    {
      id: "code-ordinance-file",
      label: "Code and ordinance supporting file",
      required: true,
      detail:
        "AHJ requirements, permits, inspection notes, and code citations that drive association upgrade scope — photograph non-compliant conditions before demolition removes evidence.",
    },
    {
      id: "final-hoa-package",
      label: "Final indexed HOA claim package",
      required: true,
      detail:
        "Carrier-ready closeout with association ID, common-element index, unit index, shared systems, mitigation logs, estimates, stakeholder logs, code file, and line-to-evidence cross-reference.",
    },
  ],
  steps: [
    {
      id: "how-hoa-claims-differ",
      title: "How HOA Insurance Claims Differ from Residential Claims",
      actions: [
        "Residential claims typically involve one dwelling, one homeowner decision-maker, and a photo set that maps to a single sketch — HOA claims multiply that footprint across buildings, common elements, and unit owners under association control.",
        "Authorization is governance-driven: boards, property managers, and management companies — not a homeowner handshake — control emergency scope, access, and reconstruction approvals.",
        "Coverage splits between association master policies and unit-owner (often HO-6) policies; contractors must index evidence so desk reviewers can attribute common-element versus unit scope.",
        "Common elements create association-scale scope that does not exist on single-family files: roofs, exteriors, corridors, amenities, and shared systems must be documented separately from unit interiors.",
        "Carrier scrutiny scales with invoice total and association complexity: specialist adjusters reconcile evidence by building, common-element zone, and unit — not as a blended residential dump.",
        "Operational difference: same craft fundamentals, higher evidence volume, stricter Community → Building → Common Element / Unit indexing, and continuous board/manager coordination.",
      ],
      notes:
        "See the Commercial Insurance Claims Documentation Guide for the parent commercial framework; see the Multifamily & Apartment Insurance Claims Guide when the property is rental multifamily without association governance focus.",
    },
    {
      id: "hoa-governance-decision-making",
      title: "HOA Governance and Decision-Making",
      actions: [
        "Identify the association type and governing documents in play at intake: CC&Rs, bylaws, rules, and any emergency repair provisions the manager can confirm.",
        "Map the decision path: who can authorize emergency mitigation today versus who must approve reconstruction, roof replacement, or change orders later.",
        "Expect phased decisions — day-one stop-loss may be manager-authorized while board votes, reserve reviews, or special assessments control later phases.",
        "Document written approvals with date, name, role, and scope; verbal board hallway agreements fail association audits and carrier reinspection.",
        "Align documentation packages to how boards review files: building summaries, common-element indexes, and unit lists they can forward to carriers and counsel.",
        "Do not opine on coverage, reserves, or special assessments in field notes — document conditions and authorization sources only.",
      ],
      notes:
        "Governing documents and responsibility matrices vary by state and association; capture what the association confirms and photograph conditions that support the work performed.",
    },
    {
      id: "boards-managers-management-companies",
      title: "Board Members, Property Managers, and Management Companies",
      actions: [
        "Establish a single contractor liaison and a primary association contact (often the property manager) for documentation packages — dual channels create conflicting unit lists and missed notices.",
        "Record board president/claims liaison separately from day-to-day management when both exist; know who receives weekly status packets versus who signs emergency authorizations.",
        "Request official building directories, unit numbering, common-element labels, and access protocols from management — every claim artifact must use those IDs.",
        "Log every manager or board authorization (emergency work, after-hours access, unit entry, temporary relocation, change orders) with date, name, role, and scope.",
        "Coordinate carrier walkthroughs through management so unit access, common-path staging, and board observers are scheduled — not improvised on inspection day.",
        "Treat management company reporting cadence as claim evidence: area-indexed packets support large-loss scrutiny and association timeline questions.",
      ],
    },
    {
      id: "master-vs-homeowner-policies",
      title: "Association Master Policies vs Homeowner Policies",
      actions: [
        "At intake, note whether the loss is being handled primarily as an association master-policy claim, a unit-owner claim, or a dual-policy coordination file — as confirmed by the association or unit owner, not as contractor coverage advice.",
        "Index common-element damage under association claim identifiers and unit interior damage under unit IDs so carriers can reconcile master versus HO-6 (or similar) boundaries.",
        "Photograph and label finishes and assemblies that sit on responsibility boundaries (e.g., exterior sheathing vs interior drywall, roof vs attic, corridor vs unit entry door) without declaring coverage.",
        "When unit owners retain separate contractors, keep association-authorized common-element packs distinct from unit-owner packs to avoid blended evidence disputes.",
        "Record who authorized each scope segment — association, manager, or unit owner — so supplements and change orders map to the correct decision path.",
        "Never merge master-policy common-element galleries with unlabeled unit interiors; dual-policy underpayment often starts with inseparable photos.",
      ],
      notes:
        "Policy forms and responsibility charts vary; contractors document conditions and authorization, while coverage determinations belong to the insured, association, and carrier.",
    },
    {
      id: "common-elements-vs-owned-property",
      title: "Common Elements vs Individually Owned Property",
      actions: [
        "Build a working responsibility matrix from association guidance: association common elements, limited common elements, and individually owned unit property.",
        "Document common elements (roofs, exteriors, structural components, corridors, amenities, grounds, shared systems) in dedicated folders and estimate sections.",
        "Document individually owned interiors, fixtures, and contents separately when in contractor scope — label to unit numbers matching association records.",
        "Treat limited common elements (balconies, patios, assigned storage) as their own index entries when association records identify them separately.",
        "Cross-reference causation paths: roof or stack damage on common elements that drives unit interior damage must appear in both packs with reciprocal IDs.",
        "Do not bury common-element scope inside a representative unit folder — carriers cut association lines when evidence is inseparable from unit dumps.",
      ],
    },
    {
      id: "building-wide-documentation",
      title: "Building-Wide Documentation Strategies",
      actions: [
        "Publish Community → Building → Common Element / Unit → Room naming within 24 hours and enforce it on every crew.",
        "Pre-inspect with site map and building list from management; photograph elevations, roofs when accessible, and common paths before opening units.",
        "Work building by building: complete common-element and exterior packs for a building before or in parallel with its unit block — never leave building IDs ambiguous.",
        "On multi-building associations, keep per-building indexes so carriers can approve or reinspect one building without reopening the entire community file.",
        "Same-day office sync: upload and label all building and common-element sets before the next shift; backlog labeling destroys association attribution.",
        "For multi-building roof campuses, apply the Multi-Building Roofing Claims Guide under this association indexing framework.",
      ],
      notes:
        "This building-wide workflow is the operational backbone for water, fire, mold, and roofing HOA losses — peril field standards live in the corresponding commercial and specialty guides.",
    },
    {
      id: "unit-documentation-coordination",
      title: "Unit Documentation Coordination",
      actions: [
        "Treat each affected unit as its own documentation chamber with a dedicated photo folder, note set, and estimate section when unit interiors are in scope.",
        "Use fixed naming: Building_Unit_Room_Stage aligned to association unit numbers (e.g., Bldg4_Unit412_Bath_Before_001).",
        "Capture entry overview, each affected room overview, damage detail with scale, and undamaged adjacent rooms that define scope boundaries.",
        "Inspect adjacent and stacked units for migration on water and smoke losses; update the unit inventory the same day discoveries appear.",
        "Coordinate unit entry through management: notice timing, entry windows, and access denials keyed to unit IDs become claim evidence.",
        "Never merge Unit 412 and Unit 414 into one gallery — mixed unit dumps are a primary association underpayment driver.",
      ],
      notes:
        "For apartment-style unit chamber depth on rental multifamily, see the Multifamily & Apartment Insurance Claims Guide; keep association governance and common-element separation from this guide.",
    },
    {
      id: "emergency-mitigation",
      title: "Emergency Mitigation on HOA Properties",
      actions: [
        "Capture arrival conditions before extraction, drying, or board-up alters the scene — association baselines establish what carriers and boards compare to later production.",
        "Confirm who authorized emergency stop-loss (manager emergency authority, board directive, or written emergency rule) and log that authorization with scope and date.",
        "Index emergency work by common-element and unit ID: extraction volumes, equipment set, temporary protection, and safety actions.",
        "Photograph equipment placement per chamber with asset tags visible; community-level equipment photos do not defend per-unit or per-zone lines.",
        "Separate emergency mitigation packages from reconstruction estimates so associations can approve emergency scope while boards deliberate rebuild decisions.",
        "On water, fire, and mold emergencies, apply Commercial Water, Fire, and Mold indexing while keeping this guide’s common-element/unit structure intact.",
      ],
    },
    {
      id: "roofing-considerations",
      title: "Roofing Considerations for HOA Claims",
      actions: [
        "Index roofs by building and elevation with labels that match association site maps — community-wide unlabeled roof galleries fail multi-building review.",
        "Document matching, slope transitions, and undamaged comparison elevations when partial replacement is disputed across a campus.",
        "Tie roof findings to interior top-floor and corridor stains with reciprocal IDs in common-element and unit packs.",
        "Coordinate board and manager roof walkthroughs with photo indexes ready — association decision-makers need building-level summaries, not raw dumps.",
        "Estimate roof scope by building section; do not bury multi-building roofs inside a single residential roof block.",
        "Follow the HOA Roofing Claims Guide and Multi-Building Roofing Claims Guide for roof specialty procedures under this association framework.",
      ],
    },
    {
      id: "water-fire-mold-considerations",
      title: "Water, Fire, and Mold Considerations",
      actions: [
        "Water: start chamber-level moisture maps and dry logs on day one; separate common-path drying from unit drying; see Commercial Water Loss Documentation Guide.",
        "Fire: index soot/smoke by common element and unit; document corridors, HVAC, and life-safety impairments as association-scale systems; see Commercial Fire Claims Guide.",
        "Mold: separate source, amplification, and migration zones; keep containment and clearance evidence labeled to association location IDs; see Commercial Mold Claims Guide.",
        "Cross-peril: never drop Community → Building → Common Element / Unit indexing when the loss phases from mitigation into reconstruction or from water into mold.",
        "Link shared-system causation (roof, stack, HVAC) to both association common-element packs and affected unit packs.",
        "Apply peril specialty photo and log standards under this HOA indexing framework — do not revert to single-family templates mid-claim.",
      ],
    },
    {
      id: "code-and-ordinance",
      title: "Code and Ordinance Considerations",
      actions: [
        "Identify AHJ jurisdiction early; association rebuilds frequently trigger corridor, egress, fire-rating, accessibility, and electrical upgrades across common elements.",
        "Photograph non-compliant conditions before demolition removes evidence of why upgrades are required.",
        "Collect permits, inspection reports, and written AHJ directives that support ordinance or law line items on association scope.",
        "Separate code upgrade scope in the estimate and documentation index so reviewers evaluate ordinance lines independently of like-kind repairs.",
        "Track inspection milestones chronologically across buildings — code scope often expands mid-project on multi-building associations.",
        "Coordinate with the Code Upgrade Documentation Guide and peril-specific guides while keeping association indexing consistent.",
      ],
    },
    {
      id: "documentation-best-practices",
      title: "Documentation Best Practices for HOA Claims",
      actions: [
        "Publish the Community → Building → Common Element / Unit → Room index within 24 hours and enforce it on every crew.",
        "Separate common elements, units, and shared systems in folders, estimates, and carrier packets.",
        "Maintain contemporaneous board/manager authorization and unit access logs — reconstruct them after a dispute and carriers discount the file.",
        "Reconcile equipment, materials, and labor to location IDs before invoice or supplement submission.",
        "Send area-indexed progress packages boards and management companies can review — unlabeled photo dumps force rework.",
        "Apply peril specialty guides under this indexing framework — never drop association organization when switching from water to fire or mold phases.",
      ],
    },
    {
      id: "supplement-opportunities-section",
      title: "Supplement Opportunities on HOA Claims",
      actions: [
        "Common-element scope omitted from unit-only carrier estimates — roofs, exteriors, corridors, and amenities frequently appear only after indexed association documentation.",
        "Adjacent or stacked unit discoveries after initial walkthrough — openings and moisture/smoke migration expand beyond carrier-selected sample units.",
        "Shared-system repairs (roof, stack, HVAC) revealed by multi-unit or multi-building pattern evidence.",
        "Association production costs: after-hours labor, phased mobilizations, escorts, and temporary facilities authorized by board or manager.",
        "Code-driven upgrades documented with AHJ evidence after demolition or inspection on common elements.",
        "Package every supplement by building/common-element/unit ID with discovery photos, revised sketches, and estimate deltas — HOA supplements fail when evidence is blended.",
      ],
      notes:
        "See Supplement Submission Guide for package structure; use this section’s triggers with association-indexed attachments.",
    },
    {
      id: "final-claim-package",
      title: "Final Claim Package Organization",
      actions: [
        "Front matter: association identification sheet, board/manager/management contacts, site map, common-element index, and unit index.",
        "Common-element evidence: photo sets, notes, and sketches labeled to association location IDs.",
        "Unit evidence: per-unit photo sets, notes, moisture/smoke maps as applicable, and ownership/status notes.",
        "Shared-systems packs with cross-references to affected common elements and units.",
        "Mitigation and production logs: emergency records, daily logs, equipment reconciliation, and change tracking.",
        "Estimate history: initial, revised, and supplement estimates with section headers matching the association index.",
        "Coordination and code: stakeholder communication logs, authorizations, permits, AHJ notes, and communication chronology.",
        "Closeout: table of contents, line-to-evidence cross-reference, punch list with completion photos by location ID, and archive using the same folder structure used in production.",
      ],
    },
    {
      id: "hoa-documentation-checklist",
      title: "HOA Documentation Checklist",
      actions: [
        "Documentation plan and naming convention published within 24 hours.",
        "Association governance and management package on file.",
        "Master vs homeowner policy notes recorded as confirmed by association/unit owner.",
        "Common-element inventory complete (buildings, roofs, exteriors, corridors, amenities, grounds).",
        "Unit inventory complete (affected, adjacent, status notes).",
        "Common-element photo and note sets labeled to association IDs.",
        "Unit documentation sets labeled to association unit numbers when interiors are in scope.",
        "Stakeholder communication/access log contemporaneous (board, manager, management company, unit owners).",
        "Emergency mitigation indexed by common element and unit.",
        "Shared building systems pack cross-referenced to locations.",
        "Association estimate index with quantity validation.",
        "Code/ordinance file with AHJ evidence when upgrades apply.",
        "Daily project logs by building/common-element/unit ID.",
        "Supplement change log with discovery drivers.",
        "Final indexed claim package with line-to-evidence cross-reference.",
        "QC spot-check: random locations resolve photos, logs, and estimate lines to the same IDs.",
      ],
    },
    {
      id: "inspection-workflow",
      title: "HOA Inspection Workflow",
      actions: [
        "Pre-inspect: obtain site map, building list, common-element list, and affected-unit list from management; publish naming convention before crews mobilize.",
        "Exterior and common-path walk: document elevations, roofs when accessible, corridors, amenities, and migration clues before opening units.",
        "Common-element pass: complete association-owned scope packs with site-map labels before or in parallel with unit work.",
        "Unit sequence: work building by building using association unit numbers; complete overview-to-detail photos before leaving each unit.",
        "Adjacent-unit check: inspect and document units above, below, and beside known damage for migration.",
        "Shared-systems pass: inspect roof, stacks, HVAC, and life-safety interfaces; cross-index findings to common elements and units.",
        "Same-day office sync: upload and label all sets before the next shift.",
      ],
    },
    {
      id: "stakeholder-communication-workflow",
      title: "Stakeholder Communication Workflow",
      actions: [
        "Day one: confirm primary manager contact, board claims liaison (if any), and emergency authorization path in writing.",
        "Daily: send indexed status to the primary contact — buildings worked, common elements documented, units entered, discoveries requiring board/manager decisions.",
        "Access events: log unit-owner notices, entry windows, denials, and escorts keyed to unit IDs the same day.",
        "Change orders: route scope expansions through the documented approval path before production expands; attach discovery photos by location ID.",
        "Carrier meetings: schedule through management; bring building and common-element indexes, not unlabeled drives.",
        "Closeout: deliver the final indexed package in the folder structure boards and management companies can archive and forward.",
      ],
    },
    {
      id: "common-documentation-mistakes",
      title: "Common Documentation Mistakes on HOA Claims",
      actions: [
        "Treating association losses like single-family residential files.",
        "Merging common-element and unit photos into one unlabeled dump.",
        "Ignoring master vs homeowner policy documentation boundaries.",
        "Using crew nicknames instead of association building/unit numbers.",
        "Missing board/manager authorization and unit access logs.",
        "Estimating HOA scope as a single residential block.",
        "Burying roofs and exteriors inside a representative unit folder.",
        "Submitting supplements without location-indexed discovery evidence.",
        "End-of-job narratives replacing contemporaneous daily association logs.",
        "Skipping adjacent-unit and shared-system checks that explain multi-unit patterns.",
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion",
      actions: [
        "HOA and association insurance claims are recovered through governance-aware coordination, master vs unit evidence separation, common-element indexing, and disciplined estimate organization — not more unlabeled photos.",
        "Apply the Commercial Insurance Claims Documentation Guide as the parent standard; use Commercial Water, Fire, Mold, and Roofing guides for peril procedures; use the HOA Roofing Claims Guide for roof specialty association workflows; use the Multifamily & Apartment guide when rental multifamily ops dominate.",
        "Claims Ninja supports contractors with documentation standards, large-loss estimating, supplement packaging, and claim recovery workflows on HOA and community association losses.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "hoa-plan-published",
      label: "HOA documentation plan published within 24 hours",
      required: true,
      detail:
        "Folder index, Community → Building → Common Element / Unit → Room naming, role assignments, and board/manager liaison documented before carrier walkthrough.",
    },
    {
      id: "association-index-aligned",
      label: "Indexes aligned to association and management records",
      required: true,
      detail:
        "Every building, common element, and unit uses association IDs — no crew shorthand in submitted files.",
    },
    {
      id: "common-elements-separated",
      label: "Common elements documented separately from units",
      required: true,
      detail:
        "Roofs, exteriors, corridors, amenities, and grounds have distinct packs — not buried inside unit galleries.",
    },
    {
      id: "unit-sets-complete",
      label: "Unit documentation sets complete when interiors are in scope",
      required: true,
      detail:
        "Each affected unit has overview-to-detail photos and notes under its own folder matching estimate sections.",
    },
    {
      id: "stakeholder-log-current",
      label: "Board/manager communication and access log current",
      required: true,
      detail:
        "Authorizations, notices, entry events, denials, and change orders logged contemporaneously by location ID.",
    },
    {
      id: "policy-boundary-indexed",
      label: "Master vs unit scope boundaries indexed in evidence",
      required: true,
      detail:
        "Common-element and unit packs are separable so desk reviewers can attribute association versus unit-owner scope.",
    },
    {
      id: "estimate-association-organized",
      label: "Estimate organized by building/common element/unit",
      required: true,
      detail:
        "Xactimate sections mirror the documentation hierarchy with quantity validation per location.",
    },
    {
      id: "qc-spot-check-passed",
      label: "Pre-submission QC spot-check passed",
      required: true,
      detail:
        "Random buildings/units confirm photos, logs, and high-dollar estimate lines resolve to the same location IDs.",
    },
    {
      id: "closeout-packet-ready",
      label: "Indexed HOA closeout packet ready",
      required: true,
      detail:
        "Final package includes association ID, common-element index, unit index, shared systems, mitigation, estimates, stakeholder logs, and line-to-evidence cross-reference.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Treating HOA claims like single-family residential files",
      impact:
        "Carriers and associations cannot navigate multi-building evidence; files invite proportional reductions.",
      correction:
        "Enforce Community → Building → Common Element / Unit indexing from day one with association IDs.",
    },
    {
      mistake: "Merging common-element and unit photos into one unlabeled dump",
      impact:
        "Master-policy and unit-owner scope become inseparable; common-element lines are cut.",
      correction:
        "Maintain distinct common-element and unit packs with reciprocal cross-references.",
    },
    {
      mistake: "Ignoring master vs homeowner policy documentation boundaries",
      impact:
        "Dual-policy reviews stall; supplements lack attributable evidence paths.",
      correction:
        "Index association common-element scope separately from unit interiors and record authorization sources.",
    },
    {
      mistake: "Using crew nicknames instead of association building/unit numbers",
      impact:
        "Board, manager, and carrier indexes diverge; desk review treats the file as incomplete.",
      correction:
        "Adopt association IDs on every photo, log row, and estimate section.",
    },
    {
      mistake: "Missing board/manager authorization and unit access logs",
      impact:
        "After-hours labor, phased work, and access delays fail without contemporaneous governance records.",
      correction:
        "Log authorizations, notices, entries, and denials keyed to location IDs throughout the claim.",
    },
    {
      mistake: "Estimating HOA scope as a single residential block",
      impact:
        "Association audit cannot navigate building or common-element scope; disputed lines lack evidence paths.",
      correction:
        "Structure estimates by building/common element/unit with separate shared-system sections.",
    },
    {
      mistake: "Burying roofs and exteriors inside a representative unit folder",
      impact:
        "Association roof and exterior lines are underpaid when evidence cannot be separated from unit files.",
      correction:
        "Keep building-level roof and exterior packs aligned to the site map and HOA roofing specialty standards.",
    },
    {
      mistake: "Supplements without location-indexed discovery evidence",
      impact:
        "Expanded association scope appears arbitrary and stalls or gets denied.",
      correction:
        "Package supplements by building/common-element/unit ID with discovery photos, revised sketches, and estimate deltas.",
    },
    {
      mistake: "End-of-job narratives replacing contemporaneous daily association logs",
      impact:
        "Multi-week HOA production cannot be defended under large-loss and board scrutiny.",
      correction:
        "Require daily logs and photo batches by building/common-element/unit ID for the full claim timeline.",
    },
    {
      mistake: "Skipping adjacent-unit and shared-system checks",
      impact:
        "Migration and stack-driven scope is underpaid; causation looks incomplete to association and carrier reviewers.",
      correction:
        "Inspect and document adjacent units and shared systems; cross-index findings to common-element and unit lists.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Common-element damage omitted from a unit-only carrier estimate",
      documentation:
        "Separate common-element photo pack, site-map labels, and estimate section distinct from unit scope.",
      lineItemHint:
        "Roof, exterior, corridor/lobby flooring, drywall, ceiling, cleaning, temporary protection",
    },
    {
      trigger: "Adjacent or stacked units show damage beyond the carrier’s initial unit sample",
      documentation:
        "Unit-indexed discovery photos, migration path evidence, and updated unit inventory before covering assemblies.",
      lineItemHint:
        "Additional unit mitigation, demolition, drying, contents protection, reconstruction",
    },
    {
      trigger: "Shared building systems explain multi-unit or multi-building damage patterns",
      documentation:
        "Roof, stack, HVAC, or life-safety inspection photos cross-referenced to common-element and unit IDs.",
      lineItemHint:
        "Roof dry-in/repair, stack repair, HVAC cleaning, system drying, engineering",
    },
    {
      trigger: "Association production requires after-hours or phased mobilizations",
      documentation:
        "Board/manager authorization, unit notice/access logs, and production windows keyed to location IDs.",
      lineItemHint:
        "After-hours labor, shift differential, escorts, temporary facilities, project management",
    },
    {
      trigger: "Board-phased releases require separate mobilizations across buildings",
      documentation:
        "Phase maps, written approvals for staged work, and daily logs by released vs held buildings/units.",
      lineItemHint:
        "Additional mobilizations, general conditions, temporary protection between phases",
    },
    {
      trigger: "AHJ or code inspection triggers association upgrade scope",
      documentation:
        "Permit notes, inspection reports, photos of non-compliant conditions, and ordinance citations.",
      lineItemHint:
        "Fire-rating, egress, accessibility, electrical, life-safety upgrades",
    },
    {
      trigger: "Equipment or drying duration exceeds initial carrier assumption on multi-chamber loss",
      documentation:
        "Per-chamber equipment placement photos, asset tags, and daily logs matching billed counts and days.",
      lineItemHint:
        "Additional air movers, dehumidifiers, air scrubbers, extended equipment days",
    },
    {
      trigger: "Matching or partial community roof replacement disputed across buildings",
      documentation:
        "Per-building elevation comparisons, slope notes, and board walkthrough photo indexes.",
      lineItemHint:
        "Additional roof squares, matching, detach-reset, flashing, and multi-building mobilization",
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
      label: "Multifamily & Apartment Insurance Claims Guide",
      href: "/resources/guides/general-claims/multifamily-apartment-insurance-claims-guide",
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
      label: "HOA Roofing Claims Guide",
      href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
    },
    {
      label: "Multi-Building Roofing Claims Guide",
      href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
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
      question: "How do HOA insurance claims differ from residential single-family claims?",
      answer:
        "HOA and association claims involve board and management authorization, master versus unit-owner policy boundaries, and documentation across common elements and units. Carriers review evidence by building, common-element zone, and unit — residential single-folder patterns invite reductions. Use Community → Building → Common Element / Unit indexing from intake through closeout.",
    },
    {
      question: "How should contractors document association insurance claims?",
      answer:
        "Publish indexes aligned to association records, separate common-element packs from unit packs, maintain board/manager authorization and access logs, and submit estimates that mirror the same hierarchy with line-to-evidence cross-references.",
    },
    {
      question: "What is the difference between master policies and homeowner policies on HOA claims?",
      answer:
        "Association master policies typically respond to common elements and association-owned property, while unit-owner policies (often HO-6 forms) may respond to individually owned interiors. Contractors should index evidence so reviewers can attribute scope without treating the contractor as coverage counsel.",
    },
    {
      question: "How should common elements be documented on HOA claims?",
      answer:
        "Index roofs, exteriors, corridors, amenities, grounds, and shared systems separately from unit interiors. Label locations to the association site map and keep estimate sections distinct so desk reviewers can attribute common-element scope.",
    },
    {
      question: "How should contractors coordinate HOA claims with boards and managers?",
      answer:
        "Establish a primary manager contact and board liaison when needed, log every authorization and unit access event by location ID, and send area-indexed status packages the association can forward. Verbal-only approvals fail association and carrier audits.",
    },
  ],
});
