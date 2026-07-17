import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/mold" as const;
const CATEGORY = "mold" as const;
const GUIDE_SLUG = "mold-remediation-documentation-guide" as const;

export const MOLD_REMEDIATION_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Mold Remediation Documentation Guide for Contractors",
  excerpt:
    "Contractor operational standard for documenting mold remediation work on insurance claims — initial conditions, moisture source evidence, containment photos, removal quantities, cleaning verification, equipment logs, contents coordination, and carrier-ready submission packages.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Mold",
    "Mold remediation",
    "Containment documentation",
    "Remediation documentation",
    "Equipment logs",
    "Moisture source",
    "HEPA vacuum",
    "Negative air",
    "Contents pack-out",
    "Commercial mold",
    "Insurance claims",
    "Documentation",
    "Restoration contractors",
  ],
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  estimatedMinutes: 20,
  seoTitle:
    "Mold Remediation Documentation Guide for Contractors | Insurance Claim Documentation Standards",
  seoDescription:
    "Document mold remediation for insurance claims: containment photos, removal evidence, cleaning verification, equipment runtime logs, contents coordination, daily progress records, and carrier-ready submission packages for restoration contractors.",
  relatedGuideSlugs: [
    "mold-supplement-playbook-for-contractors",
    "commercial-mold-claims-guide",
    "post-remediation-verification-documentation-guide",
    "mold-damage-documentation-guide",
    "mold-protocol-documentation-guide",
    "indoor-air-quality-testing-documentation-guide",
    "commercial-water-loss-documentation-guide",
    "category-3-water-damage-documentation-guide",
    "contents-inventory-documentation-guide",
    "pack-out-documentation-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "daily-monitoring-guide",
    "dry-log-collection-guide",
    "commercial-fire-claims-guide",
  ],
  relatedBlogSlugs: [
    "why-mold-supplements-get-denied",
    "mold-claim-documentation-checklist",
    "mold-documentation-mistakes",
    "why-mold-insurance-claims-get-underpaid",
    "why-category-3-water-claims-get-underpaid",
    "documentation-gaps-that-trigger-water-claim-denials",
    "dry-log-documentation-guide-insurance-claims",
    "daily-monitoring-documentation-best-practices",
  ],
  faqIds: [
    "mold-remediation-work-documentation",
    "mold-remediation-photos-required",
    "mold-remediation-moisture-readings-support",
    "mold-remediation-insurance-documentation",
    "mold-remediation-containment-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["mold", "water-damage", "commercial"],
  purpose:
    "Mold remediation documentation is often more important than remediation itself on insurance review — carriers cannot approve work they cannot verify, and organized production evidence reduces supplement disputes line by line. This guide is the contractor operational standard for documenting mold remediation activities so carriers clearly understand why work was necessary, what remediation was performed, how scope was determined, and how documentation supports payment. This is an insurance documentation guide, not IICRC S520 training or protocol selection. For intake, causation, growth mapping, and hidden mold investigation standards, see the Mold Damage Documentation Guide — this guide picks up at production start and follows evidence through carrier submission. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Remediation production authorized and containment setup scheduled",
      signal:
        "Scope approved or carrier estimate received; crew mobilizing for barrier installation and negative air",
    },
    {
      condition: "Active mold removal, cleaning, or drying underway on an insurance file",
      signal:
        "Demolition started, HEPA vacuuming in progress, or equipment deployed in contained work areas",
    },
    {
      condition: "Daily progress documentation required for carrier or property manager reporting",
      signal:
        "Multi-day remediation with adjuster check-ins, tenant notifications, or phased scope submissions",
    },
    {
      condition: "Contents pack-out or on-site cleaning coordinated with structural remediation",
      signal:
        "Porous contents affected, storage facility engaged, or chain-of-custody forms in use",
    },
    {
      condition: "Supplement preparation for expanded remediation scope after production discoveries",
      signal:
        "Hidden growth found during removal, additional rooms added, or carrier estimate predates field conditions",
    },
    {
      condition: "Commercial or occupied-building remediation with heightened documentation requirements",
      signal:
        "Healthcare, hospitality, multifamily, retail, or industrial facility with limited access windows",
    },
  ],
  prerequisites: [
    "Intake and pre-remediation baseline documented per Mold Damage Documentation Guide — moisture source, visible growth, room map, and safety assessment on file",
    "Claim number, room naming convention, and photo folder structure established before production alters the scene",
    "Project manager or documentation lead assigned on multi-room or multi-day remediation losses",
    "Equipment inventory list and runtime log template ready before air scrubbers and dehumidifiers deploy",
    "Daily monitoring and moisture reading forms available when structural drying overlaps remediation scope",
    "Contents inventory and pack-out procedures aligned with Contents Inventory and Pack-Out documentation guides when contents scope exists",
  ],
  requiredDocumentation: [
    {
      id: "pre-remediation-baseline",
      label: "Pre-remediation baseline photo set and condition log",
      required: true,
      detail:
        "Wide and close-up photos of affected areas, moisture source, and site conditions immediately before containment or removal — establishes what existed before production changed the scene.",
    },
    {
      id: "moisture-source-production-log",
      label: "Moisture source documentation maintained through remediation",
      required: true,
      detail:
        "Photos and narrative confirming source repair status, active leak resolution, or ongoing moisture conditions — remediation without source documentation weakens claim support.",
    },
    {
      id: "containment-photo-set",
      label: "Containment setup and daily barrier condition photos",
      required: true,
      detail:
        "Work area boundaries, critical barriers, negative air machine placement, decontamination chamber layout, and protection of unaffected areas with dated images.",
    },
    {
      id: "removal-quantity-log",
      label: "Removal documentation with before, during, and after photos",
      required: true,
      detail:
        "Drywall, insulation, flooring, cabinets, trim, and framing exposure documented with quantity notes — square footage, linear feet, or material layers tied to room labels.",
    },
    {
      id: "cleaning-verification-set",
      label: "Structural cleaning and verification photos",
      required: true,
      detail:
        "HEPA vacuuming, damp wiping, wire-brush or media cleaning on framing, and substrate condition after cleaning — evidence that billed cleaning was performed.",
    },
    {
      id: "equipment-runtime-log",
      label: "Equipment placement photos and runtime logs",
      required: true,
      detail:
        "Air scrubbers, negative air machines, dehumidifiers, and air movers — placement photos, serial or asset numbers where used, and daily runtime hours supporting equipment lines.",
    },
    {
      id: "daily-progress-log",
      label: "Daily progress photos and field notes",
      required: true,
      detail:
        "At least one dated progress photo set per work day showing active remediation, crew activities, and changing site conditions in contained areas.",
    },
    {
      id: "moisture-readings-remediation",
      label: "Moisture readings during and after remediation",
      required: true,
      detail:
        "Pin or pinless readings on exposed substrates during removal and before close-in — supports dry-standard arguments and cleaning scope on carrier review.",
    },
    {
      id: "disposal-documentation",
      label: "Material disposal and haul-off records",
      required: true,
      detail:
        "Photos of bagged or contained waste, load manifests, dump receipts, or weight tickets where applicable — supports removal and disposal line items.",
    },
    {
      id: "contents-remediation-evidence",
      label: "Contents inventory, pack-out, and cleaning documentation when applicable",
      required: false,
      detail:
        "Room-located inventory, chain-of-custody forms, storage location records, and cleaning or disposal decisions for affected contents.",
    },
    {
      id: "remediation-narrative",
      label: "Written remediation narrative and scope justification",
      required: true,
      detail:
        "Plain-language summary of work performed by phase and room — ties photos, readings, and equipment logs to estimate line items.",
    },
    {
      id: "submission-package-index",
      label: "Insurance documentation package with attachment index",
      required: true,
      detail:
        "Organized packet: cover narrative, photos by room and phase, moisture readings, daily logs, equipment logs, estimate, and line-item exhibit mapping.",
    },
  ],
  steps: [
    {
      id: "why-remediation-documentation",
      title: "Why Remediation Documentation Matters for Insurance Claims",
      actions: [
        "Carriers evaluate mold remediation on evidence, not field reputation — undocumented containment, removal, and cleaning work faces line-by-line reduction regardless of quality performed on site.",
        "Remediation documentation proves three separate questions on every file: why work was necessary, what remediation was performed, and how billed scope connects to dated visual and instrumented evidence.",
        "Organized documentation reduces supplement disputes because desk reviewers can map exhibits to line items without requesting re-inspection or additional site visits.",
        "Production-phase evidence must be captured contemporaneously — once barriers come down, materials are hauled off, and surfaces are cleaned, the evidence window closes and supplements lose credibility.",
        "Mold remediation scope faces higher carrier scrutiny than general mitigation — containment hours, air scrubbing runtime, HEPA vacuuming, and removal depth are challenged when photos and logs do not precede billing.",
        "Daily documentation discipline separates contractors who get paid on first submission from those who fight three rounds of carrier requests for missing exhibits.",
        "This guide addresses what to document during remediation — not how to perform remediation. Protocol selection and technical procedures belong in field training; insurance documentation belongs in the claim file.",
        "Pair this guide with the Mold Damage Documentation Guide for complete mold claim evidence — intake and causation on the damage guide, production and submission on this guide.",
      ],
      notes:
        "See Claim Documentation Standards for company-wide file organization and photo labeling. Remediation documentation quality is a payment issue, not a field-quality issue alone.",
    },
    {
      id: "document-initial-conditions",
      title: "Document the Initial Conditions",
      owner: "field",
      actions: [
        "Capture pre-production baseline photos of every affected room before containment or removal alters surfaces — wide context and close-ups of visible growth, staining, and damaged materials.",
        "Document the moisture source status at remediation start: active leak repaired, repair pending, or historical source with drying in progress — photo and narrative update from intake assessment.",
        "Record building materials in each work area: drywall layers, insulation type, flooring assembly, cabinetry construction, and framing exposure expected during removal.",
        "Document occupancy conditions: occupants relocated, restricted zones, sensitive occupants, or active business operations affecting access and scheduling evidence.",
        "Log safety concerns at production start: PPE requirements, electrical hazards, compromised structural materials, and restricted entry points — safety documentation supports scope credibility.",
        "Note extent of contamination by room: approximate affected square footage, surface types, and whether growth appears active or historical based on substrate moisture and colony condition.",
        "Photograph HVAC status, window positions, and ventilation conditions before containment — establishes pre-remediation environmental baseline.",
        "Cross-reference intake documentation from the Mold Damage Documentation Guide — remediation evidence builds on, never replaces, causation and growth mapping from assessment phase.",
      ],
      notes:
        "See Mold Damage Documentation Guide for full intake, hidden mold investigation, and moisture source standards. Pre-remediation baseline photos are the anchor for every production photo set that follows.",
    },
    {
      id: "document-moisture-source",
      title: "Document the Moisture Source",
      owner: "field",
      actions: [
        "Plumbing failures — photograph repair completion, open walls exposing supply or drain lines, and moisture readings on adjacent materials showing source resolution or ongoing wet conditions.",
        "Roof leaks — document temporary or permanent repair status, ceiling cavity conditions after intrusion, and any active staining or wet insulation remaining at remediation start.",
        "Window and door intrusion — capture seal repairs, flashing conditions, and interior jamb dryness with meter readings before closing cavities.",
        "HVAC condensation — photograph drain line clearance, pan condition, coil status, and register-area substrates with system operation notes during remediation.",
        "Foundation intrusion — document seepage paths, sump operation, and wall-floor junction moisture readings in basements and crawlspaces.",
        "Appliance failures — record repair or replacement of failed dishwasher, washing machine, water heater, or refrigerator connections with spread-pattern photos tied to affected rooms.",
        "Remediation without documenting moisture source resolution weakens the claim — carriers question whether billed removal addresses symptom without fixing cause.",
        "Update moisture source narrative in the job file when field conditions change during production — new leaks, repair delays, or discovered secondary sources require contemporaneous documentation.",
      ],
      notes:
        "See Category 3 Water Damage Documentation Guide and Commercial Water Loss Documentation Guide when mold remediation follows a covered water loss. Source documentation connects remediation scope to causation chain.",
    },
    {
      id: "containment-documentation",
      title: "Containment Documentation",
      owner: "field",
      actions: [
        "Photograph work area boundaries before production — mark where remediation starts and stops relative to unaffected building areas.",
        "Document critical barrier installation: plastic sheeting placement, sealed edges, zipper doors, and floor protection in transition zones with wide and detail shots.",
        "Capture negative air machine setup: unit placement inside or outside containment, duct runs, exhaust location, and manometer or pressure differential readings where measured.",
        "Photograph air scrubber positions within containment — model context, filter status at install, and airflow direction supporting billed equipment lines.",
        "Document protection of unaffected areas: covered furniture, sealed HVAC registers, blocked doorways, and floor protection in adjacent rooms.",
        "Record decontamination chamber layout when used — entry/exit sequence, equipment staging, and worker transition areas with dated photos.",
        "Take daily containment condition photos on multi-day projects — barrier integrity, tape failures repaired, and negative air continuous operation evidence.",
        "Focus documentation on what was installed and maintained — this section documents containment evidence for insurance review, not containment construction training.",
      ],
      notes:
        "See Photo Documentation Standards for labeling conventions. Containment photos should answer: where barriers were, how negative air was configured, and how long containment remained active.",
    },
    {
      id: "removal-documentation",
      title: "Removal Documentation",
      owner: "field",
      actions: [
        "Drywall — before photos of affected walls, during photos showing removal depth and cavity exposure, after photos of cleaned framing or ready-for-rebuild condition.",
        "Insulation — document bagged or vacuumed insulation removal with cavity photos showing stud bay condition and any growth on framing behind facing.",
        "Flooring — capture carpet, pad, tack strip, hardwood, tile, and subfloor layers during lift — photograph growth on OSB, plywood, or concrete before covering or cleaning.",
        "Cabinets — document detached units, back-panel conditions, toe-kick voids, and wall substrates behind cabinetry in kitchens, baths, and laundry areas.",
        "Trim and baseboards — photograph linear removal with approximate feet affected; note whether trim removal exposed additional wall-cavity growth.",
        "Framing exposure — capture stud, joist, and plate conditions after finish removal — document media cleaning areas versus replacement recommendations.",
        "Record quantity documentation alongside photos: square footage of drywall removed, linear feet of trim, carpet yards, cabinet units, and insulation bags tied to room labels.",
        "Maintain before-during-after photo sequences for every major removal category — desk reviewers match quantities to visual evidence room by room.",
      ],
      notes:
        "Hidden growth discovered during removal requires immediate photos before closing access — see Mold Damage Documentation Guide hidden investigation standards for discovery log conventions.",
    },
    {
      id: "cleaning-documentation",
      title: "Cleaning Documentation",
      owner: "field",
      actions: [
        "Structural cleaning — photograph wire-brush, media blast, or sanding areas on framing and sheathing before and after treatment with substrate condition notes.",
        "HEPA vacuuming — document vacuum passes on exposed framing, subfloor, and cavity surfaces; note equipment used and areas completed per room.",
        "Damp wiping — capture wipe-down sequences on studs, plates, and sealed surfaces with cleaning agent context where policy allows photographic documentation.",
        "Equipment used — photograph HEPA vacuums, air scrubbers, and cleaning tools in work areas to support labor and equipment line items.",
        "Cleaning verification — after photos showing treated substrates ready for rebuild, clearance sampling locations when testing is performed, and visual clean standard achieved — then apply the Post-Remediation Verification (PRV) Documentation Guide for closeout and clearance documentation.",
        "Document areas where cleaning was performed versus removal-only — carriers distinguish between clean-in-place framing and removed-and-replaced assemblies.",
        "Record cleaning completion by room and date — multi-day cleaning schedules require daily evidence that work progressed as billed.",
        "Emphasize documenting completed work rather than procedural instruction — photos prove cleaning happened, narratives explain why depth was required.",
      ],
      notes:
        "See Claim Documentation Standards for estimate-to-evidence indexing. Cleaning lines reduce first when after photos do not show treated substrates.",
    },
    {
      id: "equipment-documentation",
      title: "Equipment Documentation",
      owner: "field",
      actions: [
        "Air scrubbers — placement photos inside containment, filter condition at install, and daily runtime log entries with asset or serial numbers where tracked.",
        "Negative air machines — document unit placement, exhaust routing, duct connections, and daily hours supporting negative air equipment lines.",
        "Dehumidifiers — photograph placement in work areas and adjacent zones, condensate production context, and daily runtime on structural drying overlaps.",
        "Air movers — capture placement patterns on wet substrates during drying phases with quantity per room supporting air mover line items.",
        "Runtime logs — maintain daily equipment utilization records: machine type, location, start/stop times, and total hours per unit per day.",
        "Equipment placement — wide room shots showing all active equipment in frame with room label and date — proves deployment matched estimate quantities.",
        "Daily monitoring — record ambient temperature, relative humidity, and moisture readings alongside equipment logs when drying overlaps remediation.",
        "Cross-reference equipment evidence to billed line items before submission — missing runtime logs are among the most common remediation documentation gaps on carrier review.",
      ],
      notes:
        "See Daily Monitoring Field Procedure and Dry Log Collection Procedure for moisture reading and equipment logging conventions shared with water mitigation files.",
    },
    {
      id: "contents-documentation",
      title: "Contents Documentation",
      owner: "field",
      actions: [
        "Pack-out coordination — photograph contents in place before move-out, loading procedures, and transport with chain-of-custody forms initiated at pickup.",
        "Cleaning — document on-site or off-site contents cleaning with before-and-after photos for porous items affected by mold exposure.",
        "Disposal — photograph non-salvageable contents before disposal with inventory notes justifying replacement versus cleaning.",
        "Storage — record storage facility location, vault numbers, and condition at intake for off-site stored contents.",
        "Inventory — maintain room-located item lists with photos, descriptions, and condition codes tied to claim number and room labels.",
        "Chain of custody — document transfer signatures, date/time stamps, and handler identity from site to storage to cleaning vendor.",
        "Separate contents evidence folders from structural remediation photos on commercial and multi-room files — adjusters review structure and contents on separate scope tracks.",
        "Cross-reference contents line items to inventory photos and pack-out records before estimate submission.",
      ],
      notes:
        "See Contents Inventory Documentation Guide and Pack-Out Documentation Guide for full contents evidence standards. Mold-affected porous contents require condition photos before any cleaning attempt alters evidence.",
    },
    {
      id: "insurance-documentation-package",
      title: "Insurance Documentation Package",
      owner: "office",
      actions: [
        "Photos — deliver labeled sets organized by room and phase: pre-remediation, containment, removal, cleaning, equipment, and completion.",
        "Moisture readings — attach logs with dates, locations, and dry-standard references from remediation start through close-in readiness.",
        "Daily logs — include field notes, progress photos, and crew activity summaries for each production day on multi-day projects.",
        "Equipment logs — attach runtime records with placement photos cross-referenced to equipment line items on the estimate.",
        "Estimates — organize line items by room and phase matching photo folder structure; group containment, removal, cleaning, equipment, contents, and rebuild separately.",
        "Narratives — write cover letter explaining moisture source, remediation scope performed, equipment deployed, and how exhibits support each major line category.",
        "Supporting reports — attach lab clearance results, industrial hygiene reports, or engineering documents when used, indexed to sample locations and scope boundaries.",
        "Build attachment index listing every exhibit, file name, date range, and the specific line items each exhibit supports — organized packages pay faster on desk review.",
      ],
      notes:
        "See Claim Documentation Standards and Supplement Submission Guide for carrier-ready packaging conventions. Separate causation exhibits (from damage assessment) from production exhibits (from this guide) on complex files.",
    },
    {
      id: "commercial-mold-remediation",
      title: "Commercial Mold Remediation",
      owner: "project-manager",
      actions: [
        "Occupied buildings — document after-hours access, tenant notifications, phased containment boundaries, and work schedules that explain production timing on the file.",
        "Healthcare — record infection-control protocols, restricted access zones, clearance standards, and coordination with facility staff with heightened documentation sensitivity.",
        "Hospitality — index by floor and room number, coordinate guest-occupancy constraints, and document back-of-house areas separately from guest rooms.",
        "Multifamily — index by building and unit number; separate common-area remediation from unit interiors with access logs and tenant communication records.",
        "Retail — capture stock area containment, cooler and walk-in conditions, and wide floor-plate growth documentation with inventory impact notes.",
        "Industrial — document production-area containment, equipment protection measures, safety officer coordination, and phased remediation boundaries across operational zones.",
        "Commercial documentation requirements scale with occupancy complexity — not just square footage — property-level indexing from day one prevents evidence confusion on supplement review.",
        "Apply commercial indexing patterns from Commercial Water Loss Documentation Guide and Commercial Fire Claims Guide when organizing multi-unit mold remediation files.",
      ],
      notes:
        "Commercial mold remediation fails on file organization before it fails on technical execution. Building-level naming conventions are mandatory from containment setup through final submission.",
    },
  ],
  qualityGates: [
    {
      id: "pre-remediation-baseline-complete",
      label: "Pre-remediation baseline photos captured before production",
      required: true,
      detail: "Wide and close-up photos on file for every work area before containment or removal.",
    },
    {
      id: "moisture-source-current",
      label: "Moisture source documented and updated through remediation",
      required: true,
      detail: "Source repair status, photos, and narrative current through production phase.",
    },
    {
      id: "room-labels-consistent",
      label: "Room labels consistent across photos, logs, and estimate",
      required: true,
      detail: "Every photo folder, daily log, and line item uses the same room naming convention.",
    },
    {
      id: "containment-photos-complete",
      label: "Containment setup and daily barrier photos on file",
      required: true,
      detail: "Barrier placement, negative air setup, and daily condition images documented.",
    },
    {
      id: "removal-before-during-after",
      label: "Removal documented with before, during, and after photos",
      required: true,
      detail: "Major material categories photographed through removal sequence by room.",
    },
    {
      id: "removal-quantities-recorded",
      label: "Removal quantities recorded and tied to photo evidence",
      required: true,
      detail: "Square footage, linear feet, or unit counts match visual documentation.",
    },
    {
      id: "cleaning-verification-photos",
      label: "Cleaning verification photos for treated substrates",
      required: true,
      detail: "After-cleaning images on file for framing, cavities, and structural surfaces.",
    },
    {
      id: "equipment-runtime-logged",
      label: "Equipment placement photos and runtime logs complete",
      required: true,
      detail: "Daily hours logged for air scrubbers, negative air, dehumidifiers, and air movers.",
    },
    {
      id: "daily-progress-documented",
      label: "Daily progress photos and field notes on multi-day projects",
      required: true,
      detail: "At least one dated progress photo set per production day.",
    },
    {
      id: "moisture-readings-remediation-logged",
      label: "Moisture readings logged during and after remediation",
      required: true,
      detail: "Dated readings on exposed substrates with location labels.",
    },
    {
      id: "disposal-records-attached",
      label: "Disposal and haul-off documentation attached",
      required: true,
      detail: "Waste photos, manifests, or receipts where removal and disposal lines billed.",
    },
    {
      id: "contents-evidence-separated",
      label: "Contents evidence indexed separately when contents scope exists",
      required: false,
      detail: "Inventory, pack-out, and chain-of-custody in dedicated contents folders.",
    },
    {
      id: "remediation-narrative-written",
      label: "Written remediation narrative tied to exhibit references",
      required: true,
      detail: "Cover narrative explaining work performed and scope justification.",
    },
    {
      id: "estimate-evidence-indexed",
      label: "Estimate cross-referenced to evidence index",
      required: true,
      detail: "Each major line item maps to photo folder, log, or report exhibit.",
    },
    {
      id: "commercial-indexed",
      label: "Commercial files indexed by building, unit, or zone",
      required: false,
      detail: "Property-level naming applied on multifamily and commercial losses.",
    },
    {
      id: "package-index-complete",
      label: "Submission package attachment index complete",
      required: true,
      detail: "Exhibit list with file names and line-item mapping ready for carrier submission.",
    },
    {
      id: "damage-guide-intake-linked",
      label: "Intake documentation from Mold Damage Documentation Guide linked",
      required: true,
      detail: "Causation and assessment exhibits attached to remediation submission package.",
    },
    {
      id: "supplement-discovery-ready",
      label: "Discovery log ready for phased supplement submission",
      required: true,
      detail: "Production discoveries documented contemporaneously for scope found after initial estimate.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Missing moisture readings during and after remediation",
      impact:
        "Carriers challenge removal and cleaning depth when meter evidence does not confirm substrate conditions before close-in or rebuild.",
      correction:
        "Log moisture readings on exposed framing, subfloor, and cavities at removal and before rebuild — pair with daily monitoring records.",
    },
    {
      mistake: "Missing containment setup photos",
      impact:
        "Containment and negative air labor lines reduce when barrier placement, negative air configuration, and work area boundaries are not visually documented.",
      correction:
        "Photograph full containment layout at install and daily barrier condition on multi-day projects before any barrier comes down.",
    },
    {
      mistake: "No equipment runtime logs",
      impact:
        "Air scrubber, negative air, and dehumidifier lines face proportional reduction when daily hours cannot be verified against deployment photos.",
      correction:
        "Maintain daily runtime logs with placement photos showing each unit in the work area — cross-reference to estimate quantities before submission.",
    },
    {
      mistake: "Missing daily progress photos on multi-day remediation",
      impact:
        "Carriers question whether billed labor spans actual production days when only before-and-after photos exist without interim evidence.",
      correction:
        "Capture at least one dated progress photo set per work day showing active remediation inside containment.",
    },
    {
      mistake: "Weak or missing remediation narratives",
      impact:
        "Desk reviewers cannot connect exhibits to scope without a written summary — undocumented packages trigger additional information requests and payment delays.",
      correction:
        "Write a cover narrative explaining moisture source, work performed by phase and room, and exhibit references for each major line category.",
    },
    {
      mistake: "Missing disposal documentation for removed materials",
      impact:
        "Removal and disposal line items lose support when haul-off, bagging, and waste handling are not photographed or receipted.",
      correction:
        "Photograph bagged waste, load-out, and attach dump receipts or manifests where disposal lines are billed.",
    },
    {
      mistake: "Poor estimate organization disconnected from photo folders",
      impact:
        "Line-item review slows and scope reduces when adjusters cannot match estimate rooms and phases to exhibit folder structure.",
      correction:
        "Organize estimate by room and phase matching photo folders — build attachment index mapping every major line to specific exhibits.",
    },
    {
      mistake: "Starting removal before pre-remediation baseline photos",
      impact:
        "Production alters the scene immediately — without baseline photos, carriers cannot verify initial conditions supported billed scope.",
      correction:
        "Complete pre-remediation photo set per Mold Damage Documentation Guide and this guide's baseline requirements before containment or demo.",
    },
    {
      mistake: "Remediation production without updated moisture source documentation",
      impact:
        "Carriers deny or reduce scope when remediation proceeds without evidence that the moisture source was identified and addressed.",
      correction:
        "Maintain moisture source photos and narrative through production — document repair completion or ongoing source conditions.",
    },
    {
      mistake: "Contents remediation without inventory or chain-of-custody records",
      impact:
        "Contents cleaning, storage, and replacement lines fail when items cannot be traced from site to vendor with condition photos.",
      correction:
        "Apply Contents Inventory and Pack-Out documentation standards — room-located photos, inventory lists, and signed chain-of-custody from first touch.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Hidden growth discovered during removal beyond initial scope",
      documentation:
        "Date-stamped cavity and framing photos during removal, discovery log entry, and moisture readings before access closes.",
      lineItemHint: "Additional demolition, cleaning, and containment lines by room",
    },
    {
      trigger: "Expanded containment required after initial barrier setup",
      documentation:
        "Photos showing original boundaries, expanded work area, and revised negative air configuration with narrative explaining scope change.",
      lineItemHint: "Additional containment labor, barrier materials, and negative air hours",
    },
    {
      trigger: "Additional equipment days beyond carrier initial allowance",
      documentation:
        "Daily runtime logs and placement photos proving extended air scrubbing, dehumidification, or negative air operation.",
      lineItemHint: "Extended equipment rental and monitoring lines",
    },
    {
      trigger: "Contents pack-out scope expands after on-site assessment",
      documentation:
        "Room inventory with condition photos, chain-of-custody, and justification for items requiring off-site cleaning or disposal.",
      lineItemHint: "Pack-out, storage, cleaning, and replacement contents lines",
    },
    {
      trigger: "Carrier estimate predates documented removal depth",
      documentation:
        "Before-during-after removal photos with quantity measurements exceeding carrier initial demolition scope.",
      lineItemHint: "Additional drywall, insulation, flooring, and cabinetry removal lines",
    },
    {
      trigger: "Commercial unit-by-unit remediation exceeds initial common-area scope",
      documentation:
        "Unit-indexed photo folders, access logs, and daily progress records showing per-unit production beyond original estimate.",
      lineItemHint: "Per-unit containment, removal, and cleaning lines",
    },
    {
      trigger: "Clearance testing or post-remediation verification required beyond initial scope",
      documentation:
        "Sample location photos, lab results, and narrative connecting clearance to completed remediation boundaries — see Post-Remediation Verification (PRV) Documentation Guide for full closeout standards.",
      lineItemHint: "Post-remediation testing and verification lines",
    },
    {
      trigger: "Carrier partial approval or denial on documented remediation scope",
      documentation:
        "Indexed resubmission packet with containment, removal, cleaning, and equipment exhibit references mapped to denied line items.",
      lineItemHint:
        "Supplement resubmission with line-item justification; Claims Ninja supports documentation review and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "How is mold remediation documentation different from mold damage documentation?",
      answer:
        "Mold damage documentation covers intake, causation, growth mapping, and hidden mold investigation — establishing why remediation is needed. Mold remediation documentation covers production-phase evidence: containment, removal, cleaning, equipment logs, contents coordination, and submission packaging — proving what work was performed and supporting payment. Both guides are required for complete mold claim files; start with the Mold Damage Documentation Guide at assessment, then apply this guide when production begins.",
    },
    {
      question: "When should daily progress documentation begin on mold remediation?",
      answer:
        "Daily progress photos and field notes should begin on the first production day — when containment is installed or removal starts — and continue through project completion on multi-day losses. At minimum, capture one dated photo set per work day showing active remediation. Pair daily photos with equipment runtime logs and moisture readings when drying overlaps remediation scope.",
    },
    {
      question: "What equipment documentation do carriers expect on mold remediation files?",
      answer:
        "Carriers expect placement photos and daily runtime logs for air scrubbers, negative air machines, dehumidifiers, and air movers billed on the estimate. Logs should include unit location, dates, and total hours per day. Wide room shots showing deployed equipment quantities support line-item verification on desk review.",
    },
  ],
  relatedResources: [
    {
      label: "Commercial Mold Claims Guide",
      href: "/resources/guides/mold/commercial-mold-claims-guide",
    },
    {
      label: "Post-Remediation Verification (PRV) Documentation Guide",
      href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
    },
    {
      label: "Mold Damage Documentation Guide",
      href: "/resources/guides/mold/mold-damage-documentation-guide",
    },
    {
      label: "Mold Protocol Documentation Guide",
      href: "/resources/guides/mold/mold-protocol-documentation-guide",
    },
    {
      label: "Commercial Water Loss Documentation Guide",
      href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
    },
    {
      label: "Category 3 Water Damage Documentation Guide",
      href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
    },
    {
      label: "Contents Inventory Documentation Guide",
      href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
    },
    {
      label: "Pack-Out Documentation Guide",
      href: "/resources/guides/fire-damage/pack-out-documentation-guide",
    },
    {
      label: "Claim Documentation Standards",
      href: "/resources/guides/general-claims/documentation-standards-guide",
    },
    {
      label: "Photo Documentation Standards",
      href: "/resources/guides/general-claims/photo-documentation-standards-guide",
    },
    {
      label: "Daily Monitoring Field Procedure",
      href: "/resources/guides/water-damage/daily-monitoring-guide",
    },
    {
      label: "Dry Log Collection Procedure",
      href: "/resources/guides/water-damage/dry-log-collection-guide",
    },
    {
      label: "Documentation Gaps That Trigger Water Claim Denials",
      href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
    },
    { label: "Mold solutions", href: SOLUTION_PATH },
    { label: "Water damage solutions", href: "/solutions/water-damage" },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});
