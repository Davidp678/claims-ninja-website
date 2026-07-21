import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/commercial" as const;
const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "large-loss-commercial-insurance-claims-guide" as const;

export const LARGE_LOSS_COMMERCIAL_INSURANCE_CLAIMS_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Large-Loss Commercial Insurance Claims Guide for Contractors",
  excerpt:
    "Contractor playbook for documenting, managing, estimating, and supplementing large commercial property losses — multi-building campuses, phased restoration, complex scopes, stakeholder coordination, and indexed claim packages across multifamily, HOA, retail, office, industrial, warehouse, hospitality, institutional, and mixed-use properties.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Large-loss commercial insurance claims",
    "Commercial large-loss documentation",
    "Large commercial property damage claims",
    "Large-loss restoration documentation",
    "Commercial claim supplement strategy",
    "Multi-building insurance claims",
    "Phased reconstruction",
    "Commercial restoration documentation",
    "Large loss",
    "Restoration contractors",
    "Xactimate",
    "Supplements",
  ],
  publishedAt: "2026-07-21",
  updatedAt: "2026-07-21",
  estimatedMinutes: 32,
  seoTitle:
    "Large-Loss Commercial Insurance Claims Guide for Contractors | Documentation Playbook",
  seoDescription:
    "Document large-loss commercial insurance claims for contractors: multi-building indexing, phased restoration, mitigation, complex estimates, reinspections, supplements, and indexed claim packages across commercial property types.",
  relatedGuideSlugs: [
    "commercial-insurance-claims-documentation-guide",
    "multifamily-apartment-insurance-claims-guide",
    "industrial-warehouse-insurance-claims-guide",
    "hoa-insurance-claims-guide",
    "retail-office-insurance-claims-guide",
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
    "commercial-large-loss-insurance-claims",
    "commercial-large-loss-multi-area-documentation",
    "commercial-large-loss-mitigation-documentation",
    "commercial-large-loss-estimate-organization",
    "commercial-large-loss-reinspection-supplements",
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
    "Large commercial property losses fail when contractors apply residential photo dumps or single-building templates to multi-building, multi-zone, and phased scopes. Large-loss files combine campus indexing, emergency mitigation at scale, complex estimating, specialty consultants, code triggers, and extended carrier scrutiny — across multifamily, HOA, retail, office, industrial, warehouse, hospitality, institutional, and mixed-use properties. Carriers, consultants, and ownership review evidence by property, building, floor, unit/suite, zone, and phase — not as one unlabeled gallery. This guide is the contractor operational playbook for documenting, managing, estimating, supplementing, and recovering large-loss commercial insurance claims. For the parent commercial documentation framework, see the Commercial Insurance Claims Documentation Guide. For property-type ops, see Multifamily, HOA, Industrial & Warehouse, and Retail & Office guides. For peril procedures, see Commercial Water, Fire, and Mold guides. Claims Ninja supports contractors with documentation standards, large-loss estimating, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel. Obtain written direction from ownership, property management, adjusters, consultants, or other appropriate parties on access, approvals, and boundaries; do not interpret policies, provide legal advice, offer engineering or environmental opinions, or value business income.",
  whenToUse: [
    {
      condition:
        "Large commercial property loss spanning multiple buildings, floors, zones, or locations",
      signal:
        "Campus or multi-structure footprint; residential or single-building templates cannot organize the claim; documentation lead and written plan required within 24 hours",
    },
    {
      condition: "High-scrutiny commercial loss with specialist adjusters or consultants",
      signal:
        "Independent adjusters, TPA reviewers, engineers, or hygienists requesting indexed evidence by building and area ID",
    },
    {
      condition: "Emergency mitigation and reconstruction running as phased programs",
      signal:
        "Stop-loss underway while rebuild decisions continue; remobilizations, temporary protection, and change orders across areas",
    },
    {
      condition: "Complex estimate spanning multiple structures, systems, and ownership boundaries",
      signal:
        "Xactimate or estimate cannot fit a single commercial finishes block; quantity validation required across buildings or zones",
    },
    {
      condition: "Carrier underpayment or reinspection citing blended large-loss documentation",
      signal:
        "Desk reviewer cites unlabeled photo dumps, missing building/area IDs, weak daily logs, or inseparable phase evidence",
    },
  ],
  prerequisites: [
    "Large-loss documentation plan with Property → Building → Floor / Unit / Suite / Zone → System / Chamber naming published within 24 hours of mobilization",
    "Documentation lead and project control contacts assigned; ownership/PM liaison and preferred approval channels confirmed in writing",
    "Master campus or multi-location index aligned to facility records — update same day discoveries appear",
    "Stakeholder map: ownership, PM, tenants/residents as applicable, carrier/adjuster, consultants, engineers, hygienists, and specialty vendors",
    "Daily report and photo labeling templates keyed to building and area IDs — not crew nicknames",
    "Separate folders for buildings, areas, mitigation, estimates by phase, authorizations, consultant exhibits, and closeout",
    "Equipment, labor, and logistics tracking templates for multi-zone deployments",
  ],
  requiredDocumentation: [
    {
      id: "large-loss-identification-package",
      label: "Large-loss property and stakeholder identification package",
      required: true,
      detail:
        "Document property types on the loss, ownership and PM contacts, preferred approval channels, campus/site maps, known operating constraints, and the documentation lead assignment.",
    },
    {
      id: "campus-building-area-index",
      label: "Campus, building, and area segmentation index",
      required: true,
      detail:
        "Master list of affected properties, buildings, floors, units/suites, zones, and systems with IDs matching facility records — never crew nicknames.",
    },
    {
      id: "initial-response-control-pack",
      label: "Initial response and project-control setup pack",
      required: true,
      detail:
        "Day-one command structure, documentation plan publication record, safety briefing notes, and temporary protection authorizations keyed to location IDs.",
    },
    {
      id: "stakeholder-communication-log",
      label: "Stakeholder communication and meeting log",
      required: true,
      detail:
        "Contemporaneous records of ownership/PM decisions, adjuster requests, consultant site visits, claim meetings, and change approvals — keyed to building and area IDs.",
    },
    {
      id: "emergency-mitigation-by-area",
      label: "Emergency mitigation documentation by building and area",
      required: true,
      detail:
        "Extraction, drying start, board-up, temporary roof protection, and safety actions indexed by location ID with dates and authorization source.",
    },
    {
      id: "scaled-photo-video-index",
      label: "Large-scale photo and video documentation index",
      required: true,
      detail:
        "Overview-to-detail photo sets and, when used, video walkthroughs labeled to building/area IDs with same-day upload discipline — not end-of-job dumps.",
    },
    {
      id: "moisture-environmental-support",
      label: "Moisture mapping and environmental support records (when applicable)",
      required: false,
      detail:
        "Contractor moisture maps, dry logs, and environmental vendor packet indexes nested under area IDs. Hygienists and engineers own their opinions; contractors document field conditions and coordination.",
    },
    {
      id: "large-loss-estimate-index",
      label: "Large-loss estimate organization index",
      required: true,
      detail:
        "Xactimate or estimate structure with building, area, system, and phase sections plus quantity validation reconciled to indexed evidence.",
    },
    {
      id: "logistics-supervision-file",
      label: "Equipment, labor, supervision, and logistics file",
      required: true,
      detail:
        "Equipment placement by area, crew counts, supervision logs, remobilizations, and temporary protection/access/safety costs with authorization references.",
    },
    {
      id: "code-consultant-change-file",
      label: "Code, consultant, and phased change documentation file",
      required: true,
      detail:
        "AHJ/permit notes, consultant/engineer/hygienist exhibit indexes (coordination only), and change-order photos keyed to discovery dates and location IDs.",
    },
    {
      id: "final-large-loss-package",
      label: "Final indexed large-loss claim package",
      required: true,
      detail:
        "Carrier-ready closeout with property ID, campus index, mitigation, photo/video indexes, estimates by phase, stakeholder logs, code/consultant exhibits, and line-to-evidence cross-reference.",
    },
  ],
  steps: [
    {
      id: "what-qualifies-large-loss",
      title: "What Qualifies as a Large-Loss Commercial Claim",
      actions: [
        "Large-loss commercial claims typically involve multi-building campuses, multi-floor or multi-zone footprints, high evidence volume, specialty consultants, or phased restoration that residential templates cannot organize.",
        "Dollar thresholds vary by carrier and program — treat operational complexity (indexing, stakeholders, phases, scrutiny) as the contractor trigger, not an internal dollar guess.",
        "Property types include multifamily, HOA, retail, office, industrial, warehouse, hospitality, institutional, and mixed-use — large-loss discipline applies across all of them.",
        "Signals include specialist adjusters, TPA or consultant review, multi-vendor mobilizations, and estimate sections that must mirror buildings and areas.",
        "If a single unlabeled commercial folder cannot support desk review, treat the file as large-loss documentation from day one.",
        "Do not invent coverage or severity conclusions; document conditions and obtain written direction from ownership, PM, or the carrier on engagement boundaries.",
      ],
      notes:
        "See the Commercial Insurance Claims Documentation Guide for the parent framework; use property-type guides when a single footprint dominates.",
    },
    {
      id: "why-different-documentation",
      title: "Why Large Losses Require a Different Documentation Strategy",
      actions: [
        "Evidence volume scales with buildings, floors, units, and zones — desk reviewers cannot navigate unlabeled photo dumps.",
        "Multiple stakeholders control access and approvals: ownership, PM, tenants/residents, adjusters, consultants, and specialty vendors.",
        "Phased stop-loss and reconstruction create change chronologies residential end-of-job narratives cannot defend.",
        "Quantity and equipment disputes multiply across areas; sample-area estimating fails large-loss review.",
        "Carrier scrutiny scales with invoice total and complexity — specialist adjusters reconcile evidence by location ID.",
        "Documentation leads, daily area logs, and written plans are non-negotiable — not optional admin after production.",
      ],
    },
    {
      id: "initial-response-project-control",
      title: "Initial Response and Project-Control Setup",
      actions: [
        "Assign a documentation lead and project manager before crews expand beyond emergency stop-loss.",
        "Publish the Property → Building → Floor / Unit / Suite / Zone → System naming convention within 24 hours.",
        "Confirm ownership/PM liaison, emergency authorization path, and preferred approval channel in writing.",
        "Establish folder structure: buildings, areas, mitigation, estimates, authorizations, consultants, closeout.",
        "Capture arrival conditions before mitigation alters the scene wherever safe and authorized.",
        "Brief crews on labeling rules and same-day upload — large-loss files fail when first-day evidence is unlabeled.",
      ],
    },
    {
      id: "stakeholder-identification-communication",
      title: "Stakeholder Identification and Communication Structure",
      actions: [
        "Map stakeholders: ownership, PM, tenants/residents as applicable, carrier/adjuster, consultants, engineers, hygienists, specialty trades, and security/ops.",
        "Distinguish contractor documentation duties from owner approvals, adjuster decisions, consultant opinions, and attorney/accountant work — do not blur roles.",
        "Log every material decision with date, party, location ID, and outcome the same day.",
        "Route change orders through the documented approval path before production expands into new buildings or zones.",
        "Schedule carrier and consultant walkthroughs through ownership/PM with indexed packets — not unlabeled drives.",
        "Send daily or cadence status packets ownership can forward: areas worked, discoveries, and decisions needed.",
      ],
    },
    {
      id: "building-campus-multi-location",
      title: "Building, Campus, and Multi-Location Documentation",
      actions: [
        "Treat each building as a top-level index node with its own photo sequences, daily reports, and estimate sections.",
        "Maintain a master campus or multi-location index; never merge buildings into a single residential-style folder.",
        "When the loss spans separate addresses or sites under one claim, keep location IDs explicit on every artifact.",
        "Cross-reference shared systems (roofs, utilities, central plants) to the buildings they serve with reciprocal IDs.",
        "Spot-check that random artifacts resolve to the same building and area IDs used on the estimate.",
        "Apply Multi-Building Roofing Claims Guide patterns for roof campuses under this large-loss index.",
      ],
      notes:
        "See commercial multi-building documentation FAQ for building-level rules; this guide extends campus and multi-area ops.",
    },
    {
      id: "zone-floor-unit-segmentation",
      title: "Zone, Floor, Unit, and Building Segmentation Workflow",
      actions: [
        "Publish segmentation before photography: Property → Building → Floor → Unit/Suite/Zone → Room/Chamber → System.",
        "Use facility IDs from site maps, directories, or WMS labels — never crew nicknames.",
        "Complete overview-to-detail sequencing in each segment before leaving; include undamaged boundary areas that define scope.",
        "Keep unit/suite packs distinct from common areas and building systems on multifamily, HOA, retail, and office footprints.",
        "On industrial and warehouse footprints, nest zone, racking, dock, and equipment IDs under building nodes.",
        "Update the master index the same day new areas are discovered — stale indexes create inseparable evidence.",
      ],
    },
    {
      id: "emergency-mitigation-documentation",
      title: "Emergency Mitigation Documentation",
      actions: [
        "Confirm who authorized emergency stop-loss (ownership, PM, written emergency rule) and log authorization with scope and date.",
        "Index extraction, drying start, temporary protection, board-up, and safety actions by building and area ID.",
        "Photograph equipment placement per chamber/area with asset tags visible — property-level equipment photos do not defend multi-area lines.",
        "Separate emergency mitigation packages from reconstruction estimates so stakeholders can approve stop-loss while rebuild decisions continue.",
        "Reconcile equipment counts and monitoring visits to area logs before invoice or supplement submission.",
        "On water, fire, and mold emergencies, apply Commercial Water, Fire, and Mold guides while keeping this large-loss index intact.",
      ],
      notes:
        "For water-specific large-loss mitigation depth, see Large-loss water mitigation documentation best practices and the Commercial Water Loss Documentation Guide.",
    },
    {
      id: "large-scale-photo-video",
      title: "Large-Scale Photo and Video Documentation",
      actions: [
        "Lead with labeled overview shots before detail close-ups in every building and area.",
        "Require same-day labeling and upload; end-of-week dumps destroy chronology on multi-week programs.",
        "Use video walkthroughs when they help stakeholders navigate campuses — still index clips by building/area ID and date.",
        "Capture undamaged comparison areas when partial replacement or matching is disputed across floors or buildings.",
        "Maintain a photo index that maps exhibit numbers to estimate sections and daily logs.",
        "Reject blurry, unlabeled, or post-demo-only sets that cannot support pre-disturbance conditions.",
      ],
    },
    {
      id: "moisture-environmental-documentation",
      title: "Moisture Mapping and Environmental Documentation Where Applicable",
      actions: [
        "Nest moisture maps and dry logs under building and area IDs — building-level release alone fails multi-zone review.",
        "Keep point IDs persistent from intake through equipment pull across every segmented work area.",
        "Index environmental, hygienist, and IAQ vendor packets to the same location IDs used on the contractor file.",
        "Contractors document field conditions and packet organization; hygienists and engineers own sampling opinions and clearance language.",
        "Do not provide environmental opinions or interpret lab results beyond recording what authorized professionals deliver to the file.",
        "Cross-link moisture or environmental findings to estimate drying, remediation, and reconstruction sections by area ID.",
      ],
    },
    {
      id: "estimating-large-complex-scopes",
      title: "Estimating Large and Complex Scopes",
      actions: [
        "Structure Xactimate or estimates with building, area, system, and phase sections that mirror the documentation index.",
        "Separate general conditions, temporary protection, access, and supervision with authorization references keyed to location IDs.",
        "Keep shell, TI, contents, and equipment attributable when ownership or responsible parties differ — obtain written direction.",
        "Do not bury multi-building scope inside a single commercial finishes block — desk reviewers cut what they cannot attribute.",
        "Version estimates (initial, revised, supplement) and never overwrite baselines needed for delta review.",
        "Coordinate with property-type guides for footprint-specific estimating patterns under this large-loss structure.",
      ],
    },
    {
      id: "quantity-validation",
      title: "Quantity Validation Across Multiple Structures or Areas",
      actions: [
        "Validate SF, LF, and unit counts against area-indexed measurements and photos — sample-area estimating fails large-loss review.",
        "Reconcile materials and equipment to field logs by building and area before supplement submission.",
        "Document undamaged boundary areas that define quantity limits for partial losses.",
        "Spot-check high-dollar lines: each must resolve to labeled photos and log rows with matching IDs.",
        "Track quantity changes discovered during phased demolition with dated discovery photos.",
        "Reject estimate sections that cannot map to the campus index.",
      ],
    },
    {
      id: "equipment-labor-logistics",
      title: "Equipment, Labor, Supervision, and Logistics Documentation",
      actions: [
        "Track equipment by area with placement photos, asset tags, set/pull dates, and daily counts.",
        "Log crew counts, shift windows, and remobilizations keyed to buildings and phases with authorization when after-hours or escorted work applies.",
        "Document supervision and project management activities that support multi-trade coordination — without inventing coverage conclusions.",
        "Record logistics: dumpsters, temporary power, material staging, and vendor mobilizations by location ID.",
        "Reconcile billed equipment and labor days to contemporaneous logs before invoice.",
        "Office pre-invoice QC catches count mismatches between estimate lines, logs, and placement photos.",
      ],
    },
    {
      id: "temporary-protection-access-safety",
      title: "Temporary Protection, Access, and Safety Costs",
      actions: [
        "Photograph temporary roof protection, board-up, barriers, and weatherization with location IDs and authorization dates.",
        "Log delayed access, standby, escorts, and security constraints that drive production costs — contemporaneous logs support general conditions.",
        "Document safety briefings, PPE zones, and facility rules that constrain crew windows without improvising liability opinions.",
        "Include temporary protection failures and remobilizations with dated evidence when scope expands.",
        "Never bypass security or safety protocols to 'save time' — unauthorized entry destroys credibility and creates liability.",
        "Schedule adjuster access through the same ownership/PM/security path used for crews.",
      ],
    },
    {
      id: "specialty-consultants",
      title: "Specialty Consultants, Engineers, Hygienists, and Other Experts",
      actions: [
        "Index consultant, engineer, and hygienist site visits, reports, and exhibits under the same building/area IDs as contractor evidence.",
        "Contractors coordinate and file exhibits; they do not issue engineering opinions, environmental clearance language, or coverage determinations.",
        "Log who retained each professional (ownership, carrier, or contractor direction) and what deliverable entered the claim file.",
        "Cross-reference consultant findings to estimate sections only when the finding is documented in an authorized report on file.",
        "Keep consultant packets distinct from contractor daily production logs so reviewers can separate roles.",
        "When professionals disagree, document the conflict and obtain written ownership/PM direction — do not improvise a technical opinion.",
      ],
    },
    {
      id: "code-ordinance-documentation",
      title: "Code and Ordinance Documentation",
      actions: [
        "Identify AHJ jurisdiction early; large commercial rebuilds frequently trigger fire protection, egress, accessibility, electrical, and life-safety upgrades.",
        "Photograph non-compliant conditions before demolition removes evidence of why upgrades are required.",
        "Collect permits, inspection reports, and written AHJ directives that support ordinance or law line items.",
        "Separate code upgrade scope in the estimate and documentation index so reviewers evaluate ordinance lines independently of like-kind repairs.",
        "Track inspection milestones chronologically across buildings and phases — code scope often expands mid-project on large losses.",
        "Coordinate with the Code Upgrade Documentation Guide while keeping large-loss indexing consistent.",
      ],
    },
    {
      id: "phased-reconstruction-changes",
      title: "Phased Reconstruction and Change Documentation",
      actions: [
        "Publish a phase plan keyed to building and area IDs: which spaces are released, held, or after-hours only.",
        "Complete overview-to-detail photo packs and same-day labeling for each phase before opening the next block of footprint.",
        "Document temporary protection between phases that keeps undamaged or operating areas functional.",
        "Record change orders with discovery photos, dates, location IDs, and written authorization before production expands.",
        "Reconcile crew counts and equipment to phase logs before invoice or supplement submission.",
        "Keep per-building indexes so reinspections can isolate one structure without reopening the entire campus file.",
      ],
    },
    {
      id: "contents-equipment-ti",
      title: "Commercial Contents, Equipment, and Tenant Improvements",
      actions: [
        "Label base-building finishes, leasehold/TI, tenant contents/FF&E, and fixed equipment in separate packs when ownership differs.",
        "Photograph contents and equipment in place before relocation when safe; log directed moves with date and destination.",
        "Obtain written direction on ownership boundaries from ownership, PM, tenant, or consultant — do not invent lease or coverage conclusions.",
        "On industrial footprints, keep asset-tagged equipment packs distinct from shell finishes.",
        "Cross-reference contents, TI, and equipment packs to building/area IDs and to causation from shared systems.",
        "Never bury tenant contents or equipment inside unlabeled building finish galleries.",
      ],
    },
    {
      id: "reinspection-preparation",
      title: "Reinspection Preparation",
      actions: [
        "Build a reinspection binder keyed to disputed buildings and areas: photo exhibits, measurements, daily logs, and estimate deltas.",
        "Pre-stage labeled stations at each disputed location so the adjuster can walk the same index used in the file.",
        "Confirm access windows, escorts, and safety rules with ownership/PM before the reinspection date.",
        "Bring quantity validation worksheets that map high-dollar lines to labeled photos and logs.",
        "Log reinspection attendees, areas walked, and verbal requests the same day — convert requests into written follow-ups.",
        "Do not improvise new unlabeled evidence during the walk; capture any new discovery with IDs immediately after.",
      ],
    },
    {
      id: "supplement-strategy",
      title: "Supplement Strategy",
      actions: [
        "Package every supplement by building/area/system/phase ID with discovery photos, revised sketches, and estimate deltas.",
        "Prioritize high-confidence gaps with strong contemporaneous evidence over speculative end-of-job add-ons.",
        "Separate mitigation duration, temporary protection, code, TI/contents, and reconstruction discoveries into attributable sections.",
        "Version supplements and never resubmit the entire unlabeled campus dump for a single-area dispute.",
        "Align supplement letters to the campus index so desk reviewers can jump to one building without reopening everything.",
        "Use the Supplement Submission Guide for package structure; use this guide’s triggers with large-loss attachments.",
      ],
    },
    {
      id: "carrier-communication-meetings",
      title: "Carrier Communication and Claim Meetings",
      actions: [
        "Route carrier meetings through ownership or property management; confirm attendees and building access in writing.",
        "Present campus and area indexes at every walkthrough — unlabeled photo dumps invite proportional reductions.",
        "Log adjuster and consultant requests keyed to location IDs the same day.",
        "Separate stop-loss mitigation approvals from reconstruction authorizations when stakeholders approve phases independently.",
        "Keep meeting notes factual: areas reviewed, evidence presented, open items — no policy interpretation or adversarial tone.",
        "Close communication loops with a dated status packet: areas complete, pending decisions, and open supplement items.",
      ],
    },
    {
      id: "final-claim-package",
      title: "Final Claim Package Organization",
      actions: [
        "Front matter: property identification, stakeholder contacts, campus/building/area index, and documentation plan.",
        "Mitigation section: emergency records, equipment reconciliation, moisture/environmental indexes when applicable.",
        "Building and area packs with reciprocal cross-references to systems and phases.",
        "Contents, TI, and equipment packs when ownership differs.",
        "Estimate history: initial, revised, and supplement estimates with section headers matching the large-loss index.",
        "Coordination and code: stakeholder logs, authorizations, consultant exhibit index, permits, AHJ notes.",
        "Closeout: table of contents, line-to-evidence cross-reference, punch list with completion photos by location ID, and archive using the production folder structure.",
      ],
    },
    {
      id: "final-settlement-review",
      title: "Final Settlement Review",
      actions: [
        "Reconcile approved lines against production scope and open supplement items before final invoice.",
        "Confirm every high-dollar paid line still maps to labeled evidence in the archive.",
        "Document unpaid or disputed items with location IDs and remaining evidence for ownership/PM decisions — do not negotiate coverage as counsel or PA.",
        "Verify equipment and labor billings match contemporaneous logs across all buildings and phases.",
        "Deliver the indexed closeout packet in a structure ownership and risk managers can archive and forward.",
        "Retain the file per company retention policy with versioned estimates and communication logs intact.",
      ],
    },
    {
      id: "large-loss-documentation-checklist",
      title: "Large-Loss Documentation Checklist",
      actions: [
        "Documentation plan and naming convention published within 24 hours.",
        "Documentation lead and project-control contacts assigned.",
        "Property identification and stakeholder package on file.",
        "Campus, building, and area segmentation index complete.",
        "Initial response and emergency mitigation indexed by location ID.",
        "Scaled photo/video index with same-day labeling discipline.",
        "Moisture/environmental support records nested under area IDs when applicable.",
        "Large-loss estimate index with quantity validation across structures.",
        "Equipment, labor, supervision, and logistics file reconciled.",
        "Temporary protection, access, and safety authorizations logged.",
        "Consultant/engineer/hygienist exhibit index (coordination only).",
        "Code/ordinance file with AHJ evidence when upgrades apply.",
        "Phased reconstruction and change log with discovery drivers.",
        "Contents, equipment, and TI packs when ownership differs.",
        "Final indexed claim package with line-to-evidence cross-reference.",
        "QC spot-check: random buildings/areas resolve photos, logs, and estimate lines to the same IDs.",
      ],
    },
    {
      id: "initial-response-checklist",
      title: "Initial Response Checklist",
      actions: [
        "Arrive and capture scene conditions before stop-loss alters evidence wherever safe.",
        "Confirm emergency authorization source and scope in writing.",
        "Assign documentation lead and field labeling owner.",
        "Publish Property → Building → Area naming within 24 hours.",
        "Obtain site maps, directories, or facility IDs from ownership/PM.",
        "Establish folder structure and stakeholder communication log.",
        "Brief crews on labeling and same-day upload requirements.",
        "Index day-one mitigation by building and area ID before expanding footprint.",
      ],
    },
    {
      id: "building-area-segmentation-workflow",
      title: "Building and Area Segmentation Workflow",
      actions: [
        "Pre-inspect: obtain campus maps and facility IDs; publish naming before crews photograph.",
        "Building pass: treat each building as a top-level node with its own photo and log folders.",
        "Area pass: complete floors, units/suites, zones, and common areas with overview-to-detail sequencing.",
        "Systems pass: roofs, HVAC, fire protection, and utilities labeled to buildings/areas they serve.",
        "Boundary pass: document undamaged adjacent areas that define scope limits.",
        "Same-day office sync: upload and label all sets; update the master index for new discoveries.",
        "QC: spot-check that random artifacts resolve to estimate section headers.",
      ],
    },
    {
      id: "daily-documentation-checklist",
      title: "Daily Documentation Checklist",
      actions: [
        "Photos labeled with building/area IDs uploaded same day.",
        "Daily report by active buildings and areas completed.",
        "Equipment counts reconciled to placement photos for active chambers.",
        "Access, escort, standby, and authorization events logged.",
        "Discoveries and change drivers photographed with location IDs before demolition expands.",
        "Stakeholder requests and decisions entered in the communication log.",
        "Moisture/environmental readings recorded under area IDs when monitoring is active.",
        "Office sync confirms no unlabeled dumps from the day’s crews.",
      ],
    },
    {
      id: "qc-checklist-step",
      title: "Quality-Control Gates",
      actions: [
        "Confirm Property → Building → Floor / Unit / Suite / Zone / System naming is consistent across photos, logs, and estimate sections.",
        "Spot-check three random buildings or areas: each resolves overview-to-detail photos, daily log rows, and high-dollar lines to the same IDs.",
        "Verify mitigation, reconstruction, TI/contents, and systems packs are not merged into unlabeled galleries.",
        "Validate authorizations for after-hours, escorts, temporary protection, and change orders are contemporaneous.",
        "Confirm estimate section headers mirror the campus index with quantity validation.",
        "Reject packages that use crew nicknames, missing location IDs, or end-of-job narratives in place of daily area logs.",
      ],
    },
    {
      id: "common-documentation-mistakes",
      title: "Common Documentation Mistakes",
      actions: [
        "Treating large commercial losses like residential single-dwelling files.",
        "Merging multiple buildings or areas into one unlabeled photo dump.",
        "Publishing no documentation plan or documentation lead within 24 hours.",
        "Using crew nicknames instead of facility building and area IDs.",
        "Sample-area estimating for multi-structure scopes.",
        "Missing daily area logs and replacing them with end-of-job narratives.",
        "Failing to separate mitigation, reconstruction, TI/contents, and systems evidence.",
        "Submitting supplements without building/area-indexed discovery evidence.",
        "Blurring contractor documentation with engineering, environmental, or coverage opinions.",
        "Skipping reinspection prep and arriving with unlabeled drives.",
      ],
    },
    {
      id: "supplement-opportunity-checklist",
      title: "Supplement Opportunity Checklist",
      actions: [
        "Buildings or areas omitted from a sample-area carrier estimate — separate packs and estimate sections ready.",
        "Mitigation duration or equipment counts exceeding initial assumption — per-area equipment photos and daily logs.",
        "Temporary protection, access, escort, or safety costs with written authorization and location IDs.",
        "Phased releases creating remobilization or standby — contemporaneous phase logs.",
        "AHJ or code inspection triggering upgrade scope — permits and photos of non-compliant conditions.",
        "TI, contents, or equipment discoveries beyond initial walkthrough — ownership-labeled packs.",
        "Consultant-driven scope changes supported by authorized reports indexed to area IDs.",
        "Hidden damage found during phased demolition — dated discovery photos before full tear-out.",
      ],
    },
    {
      id: "reinspection-prep-checklist",
      title: "Reinspection Preparation Checklist",
      actions: [
        "Disputed buildings and areas listed with estimate line references.",
        "Photo exhibits and measurements staged by location ID.",
        "Daily logs and equipment reconciliation for disputed periods printed or tablet-ready.",
        "Access, escort, and safety confirmations completed with ownership/PM.",
        "Quantity validation worksheets for high-dollar disputed lines prepared.",
        "Meeting note template ready to log attendees, areas walked, and requests same day.",
        "No unlabeled bulk drives — only indexed packets matching the campus file.",
      ],
    },
    {
      id: "final-submission-checklist",
      title: "Final Submission Checklist",
      actions: [
        "Table of contents and campus index match folder structure.",
        "Line-to-evidence cross-reference complete for high-dollar lines.",
        "Estimate versions archived (initial, revised, supplements) without overwrites.",
        "Mitigation, reconstruction, TI/contents, systems, and code sections separated.",
        "Stakeholder communication and authorization logs included.",
        "Consultant exhibit index included when professionals contributed to the file.",
        "QC spot-check passed on random buildings/areas.",
        "Settlement review reconciles approved vs open items before final invoice.",
        "Archive uses the same IDs used throughout production.",
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion",
      actions: [
        "Large-loss commercial insurance claims are recovered through campus indexing, day-one project control, area-level daily documentation, complex estimate organization, disciplined supplements, and indexed closeout — not more unlabeled photos.",
        "Apply the Commercial Insurance Claims Documentation Guide as the parent standard; use Multifamily, HOA, Industrial, and Retail & Office guides for property-type ops; use Commercial Water, Fire, Mold, and Roofing guides for peril procedures.",
        "Claims Ninja supports contractors with documentation standards, large-loss estimating, supplement packaging, and claim recovery workflows on large commercial losses.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "large-loss-plan-published",
      label: "Large-loss documentation plan published within 24 hours",
      required: true,
      detail:
        "Folder index, Property → Building → Area naming, documentation lead, and ownership/PM liaison documented before carrier walkthrough.",
    },
    {
      id: "campus-index-aligned",
      label: "Campus and area indexes aligned to facility records",
      required: true,
      detail:
        "Every building, floor, unit/suite, zone, and system uses facility IDs — no crew shorthand in submitted files.",
    },
    {
      id: "mitigation-reconstruction-separated",
      label: "Mitigation, reconstruction, and ownership packs separated",
      required: true,
      detail:
        "Emergency mitigation, phased reconstruction, TI/contents, and systems packs are distinct — not buried inside unlabeled galleries.",
    },
    {
      id: "daily-logs-current",
      label: "Daily building/area logs current for active production",
      required: true,
      detail:
        "Photos, equipment, access events, and discoveries logged contemporaneously by location ID.",
    },
    {
      id: "estimate-campus-organized",
      label: "Estimate organized by building/area/system/phase",
      required: true,
      detail:
        "Xactimate sections mirror the documentation hierarchy with quantity validation across structures.",
    },
    {
      id: "qc-spot-check-passed",
      label: "Pre-submission QC spot-check passed",
      required: true,
      detail:
        "Random buildings/areas confirm photos, logs, and high-dollar estimate lines resolve to the same location IDs.",
    },
    {
      id: "closeout-packet-ready",
      label: "Indexed large-loss closeout packet ready",
      required: true,
      detail:
        "Final package includes property ID, campus index, mitigation, estimates, stakeholder logs, consultant/code exhibits, and line-to-evidence cross-reference.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Treating large commercial losses like residential single-dwelling files",
      impact:
        "Carriers and consultants cannot navigate multi-building evidence; files invite proportional reductions.",
      correction:
        "Enforce Property → Building → Area indexing from day one with facility IDs and a documentation lead.",
    },
    {
      mistake: "Merging multiple buildings or areas into one unlabeled photo dump",
      impact:
        "Building, phase, and system scope become inseparable; high-dollar lines are cut.",
      correction:
        "Maintain distinct building and area packs with reciprocal cross-references and same-day labeling.",
    },
    {
      mistake: "No documentation plan or documentation lead within 24 hours",
      impact:
        "Crews produce inconsistent evidence that desk reviewers discount across the entire file.",
      correction:
        "Publish naming, folders, and role assignments before expanding beyond emergency stop-loss.",
    },
    {
      mistake: "Sample-area estimating for multi-structure scopes",
      impact:
        "Quantities cannot be attributed; supplements look inflated or incomplete.",
      correction:
        "Structure estimates by building/area/system/phase with measurement validation per location.",
    },
    {
      mistake: "End-of-job narratives replacing contemporaneous daily area logs",
      impact:
        "Multi-week large-loss production cannot be defended under specialist adjuster scrutiny.",
      correction:
        "Require daily logs and photo batches by building/area ID for the full claim timeline.",
    },
    {
      mistake: "Blurring contractor documentation with engineering or environmental opinions",
      impact:
        "File credibility drops; professionals and carriers reject improvised technical conclusions.",
      correction:
        "Index consultant exhibits; limit contractor packets to field conditions, measurements, and coordination records.",
    },
    {
      mistake: "Supplements without building/area-indexed discovery evidence",
      impact:
        "Expanded large-loss scope appears arbitrary and stalls or gets denied.",
      correction:
        "Package supplements by location ID with discovery photos, revised sketches, and estimate deltas.",
    },
    {
      mistake: "Arriving at reinspection with unlabeled drives",
      impact:
        "Adjusters cannot isolate disputed areas; the walk fails and disputes expand.",
      correction:
        "Pre-stage indexed reinspection packets and labeled stations matching the campus file.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Building or area damage omitted from a sample-area carrier estimate",
      documentation:
        "Separate building/area photo packs, directory labels, and estimate sections distinct from sample areas.",
      lineItemHint:
        "Additional building mitigation, finishes, roof dry-in, temporary protection, general conditions",
    },
    {
      trigger: "Mitigation duration or equipment counts exceed initial carrier assumption",
      documentation:
        "Per-area equipment placement photos, asset tags, and daily logs matching billed counts and days.",
      lineItemHint:
        "Additional air movers, dehumidifiers, air scrubbers, extended equipment days, monitoring visits",
    },
    {
      trigger: "Temporary protection, access, escort, or safety constraints drive production costs",
      documentation:
        "Ownership/PM authorization, access logs, and protection photos keyed to location IDs.",
      lineItemHint:
        "Board-up, temporary roofing, escorts, standby, after-hours labor, project management",
    },
    {
      trigger: "Phased releases create standby or remobilization between buildings or areas",
      documentation:
        "Phase logs, delayed-access notes, and daily logs by released vs held locations.",
      lineItemHint:
        "Standby labor, additional mobilizations, general conditions, temporary protection between phases",
    },
    {
      trigger: "AHJ or code inspection triggers commercial upgrade scope",
      documentation:
        "Permit notes, inspection reports, photos of non-compliant conditions, and ordinance citations.",
      lineItemHint:
        "Fire protection, egress, accessibility, electrical, life-safety upgrades",
    },
    {
      trigger: "TI, contents, or equipment discoveries beyond the initial walkthrough",
      documentation:
        "Ownership-labeled discovery photos before demolition or relocation; written boundary direction.",
      lineItemHint:
        "Additional TI R&R, contents handling, equipment protection, specialty finishes",
    },
    {
      trigger: "Authorized consultant or engineer findings expand documented scope",
      documentation:
        "Consultant report exhibits indexed to building/area IDs with contractor discovery photos.",
      lineItemHint:
        "Additional structural, envelope, or system repairs supported by the on-file report",
    },
    {
      trigger: "Hidden damage found during phased demolition",
      documentation:
        "Dated discovery sequence showing progressive findings before full tear-out.",
      lineItemHint:
        "Additional layers, system damage, or code-required work documented in real time",
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
      label: "HOA Insurance Claims Guide",
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
      label: "Photo Documentation Field Procedure",
      href: "/resources/guides/general-claims/photo-documentation-standards-guide",
    },
    {
      label: "Code Upgrade Documentation Guide",
      href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
    },
    {
      label: "Supplement Submission Guide",
      href: "/resources/guides/general-claims/supplement-submission-guide",
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
      question: "What qualifies as a large-loss commercial insurance claim for contractors?",
      answer:
        "Operationally, large-loss commercial claims involve multi-building or multi-zone footprints, high evidence volume, phased restoration, specialty consultants, or specialist adjuster scrutiny that residential templates cannot organize. Treat indexing complexity — not an internal dollar guess — as the contractor trigger to publish a documentation plan and assign a documentation lead within 24 hours.",
    },
    {
      question: "How should contractors document multiple buildings or areas on a large loss?",
      answer:
        "Publish a Property → Building → Floor / Unit / Suite / Zone index aligned to facility records, treat each building as a top-level node, complete overview-to-detail packs per area, and structure estimates so desk reviewers can attribute quantities without parsing an unlabeled campus dump.",
    },
    {
      question: "How should large-loss emergency mitigation be documented?",
      answer:
        "Log who authorized stop-loss, index extraction, drying, temporary protection, and safety actions by building and area ID, photograph equipment placement per chamber with asset tags, and keep mitigation packages separate from reconstruction estimates.",
    },
    {
      question: "How should contractors organize large-loss estimates?",
      answer:
        "Mirror the campus documentation index with building, area, system, and phase sections; validate quantities against area-indexed measurements; separate general conditions and temporary protection with authorization references; and never bury multi-structure scope in a single commercial finishes block.",
    },
    {
      question: "How should contractors prepare for large-loss reinspections and supplements?",
      answer:
        "Pre-stage indexed exhibits by disputed building and area, bring quantity validation worksheets, log the walk the same day, and package supplements by location ID with discovery photos and estimate deltas — not unlabeled campus dumps.",
    },
  ],
});
