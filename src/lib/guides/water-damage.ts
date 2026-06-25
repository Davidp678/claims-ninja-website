import { COMMERCIAL_WATER_LOSS_DOCUMENTATION_GUIDE } from "@/lib/guides/commercial-water-loss-documentation-guide";
import { WATER_MITIGATION_INVOICE_DEFENSE_GUIDE } from "@/lib/guides/water-mitigation-invoice-defense-guide";
import { defineGuide, GUIDE_PUBLISHED_AT } from "@/lib/guides/guide-builder";
import type { Guide } from "@/lib/guide-types";

const SOLUTION_PATH = "/solutions/water-damage" as const;
const CATEGORY = "water-damage" as const;

export const WATER_DAMAGE_GUIDES = [
  defineGuide({
    slug: "mitigation-intake-checklist",
    title: "Water Mitigation Intake Checklist",
    excerpt:
      "Field-ready intake checklist for water mitigation losses: source control, category/class capture, moisture baseline, equipment layout, and claim file setup before drying begins.",
    category: CATEGORY,
    guideType: "checklist",
    roles: ["field", "project-manager"],
    claimPhase: "intake",
    tags: [
      "Water Damage",
      "Mitigation",
      "Intake",
      "Moisture Mapping",
      "Category",
      "Documentation",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 12,
    recommended: true,
    seoTitle: "Water Mitigation Intake Checklist for Contractors",
    seoDescription:
      "Water mitigation intake checklist: source control, category/class documentation, moisture baseline, equipment layout, and claim file setup for supplement-ready files.",
    relatedGuideSlugs: [
      "moisture-mapping-guide",
      "dry-log-collection-guide",
      "category-class-documentation-guide",
      "equipment-documentation-guide",
    ],
    relatedBlogSlugs: ["water-damage-mitigation-supplement-playbook"],
    faqIds: [
      "water-mitigation-scope",
      "water-category-class",
      "resources-water-mitigation-documentation",
    ],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["water-damage", "mitigation"],
    purpose:
      "Establish a complete mitigation baseline on arrival so drying scope, category/class classification, and documentation align with carrier review from day one — before equipment days and monitoring charges become disputed.",
    whenToUse: [
      {
        condition: "Emergency water loss dispatch — first technician on site",
        signal: "Standing water, active leak, or saturated materials before equipment set",
      },
      {
        condition: "Carrier adjuster has not yet walked the property",
        signal: "You need intake evidence that defines extent before desk review sets a template scope",
      },
      {
        condition: "Project manager handoff from sales or after-hours dispatch",
        signal: "Field team must open a claim-ready file with consistent room names and reading points",
      },
      {
        condition: "Category or class upgrade is likely based on source or dwell time",
        signal: "Gray or black water, multi-day saturation, or HVAC involvement requires contemporaneous classification notes",
      },
    ],
    prerequisites: [
      "Signed authorization to perform emergency services",
      "Claim number or policyholder contact for file setup",
      "Moisture meter calibrated and charged",
      "Camera or mobile device with timestamp enabled",
    ],
    requiredDocumentation: [
      {
        id: "source-and-cause",
        label: "Source identification and stop-work photos",
        required: true,
        detail:
          "Document active or stopped source, supply line type, appliance tag, or exterior entry point. Photograph before extraction begins.",
      },
      {
        id: "category-class-notes",
        label: "Category and class of water classification",
        required: true,
        detail:
          "Record IICRC category (1/2/3) and class (1–4) with supporting observations: color, odor, dwell time, affected materials, and structural absorption.",
      },
      {
        id: "baseline-moisture-map",
        label: "Intake moisture map with reading points",
        required: true,
        detail:
          "Sketch or software map showing wet zones, reading point IDs, initial values, meter type, and material at each point.",
      },
      {
        id: "affected-room-inventory",
        label: "Affected room and material inventory",
        required: true,
        detail:
          "List every room, floor level, and assembly type (carpet, pad, drywall, cabinet toe-kick, subfloor) included in drying scope.",
      },
      {
        id: "equipment-layout-photos",
        label: "Initial equipment placement photos",
        required: true,
        detail:
          "Wide and detail photos of air movers, dehumidifiers, and containment before leaving site on day one.",
      },
      {
        id: "customer-and-carrier-contact",
        label: "Carrier and adjuster contact logged in job file",
        required: false,
        detail:
          "Record claim number, adjuster name, and any carrier-specific drying or documentation requirements communicated at intake.",
      },
    ],
    steps: [
      {
        id: "secure-and-extract",
        title: "Secure source and perform initial extraction",
        owner: "field",
        actions: [
          "Identify and document water source; photograph before stopping flow if safe to do so",
          "Perform emergency extraction on all standing water and saturated carpet or hard surfaces",
          "Remove unsalvageable pad or debris only after photos document pre-removal condition",
          "Note after-hours or emergency response conditions for line-item support",
        ],
        notes:
          "Extraction scope should match mapped wet areas — do not skip rooms that will appear on the moisture map later.",
      },
      {
        id: "classify-and-map",
        title: "Classify loss and complete moisture map",
        owner: "field",
        actions: [
          "Assign category and class with written justification tied to visible conditions",
          "Create moisture map with labeled reading points matching room names on the estimate sketch",
          "Record initial moisture content or relative readings at every map point with meter type and mode",
          "Mark wet/dry boundaries, migration paths, and planned chamber perimeters",
        ],
        notes:
          "Room names on the map must match photos, dry logs, and the carrier sketch — inconsistent labels trigger desk cuts.",
      },
      {
        id: "set-equipment",
        title: "Set equipment and document layout",
        owner: "field",
        actions: [
          "Calculate and deploy air movers and dehumidifiers per chamber design; photograph count and placement",
          "Install containment, floor protection, and content protection where required before billing those lines",
          "Apply antimicrobial only when category, material, or carrier procedure supports it — photograph application area",
          "Start dry log entry for day one with equipment rows, environmental readings, and technician signature",
        ],
      },
      {
        id: "open-claim-file",
        title: "Open claim file and notify office",
        owner: "project-manager",
        actions: [
          "Upload intake photos, moisture map, and category/class notes to job management within 24 hours",
          "Assign consistent room naming convention across map, photos, and estimate template",
          "Flag likely supplement gaps: hidden assemblies, multi-room migration, extended dry-out indicators",
          "Schedule first monitoring visit and communicate drying plan to policyholder in writing",
        ],
        notes:
          "PM review within 24 hours catches missing rooms before the carrier sketch locks in a two-room template.",
      },
    ],
    qualityGates: [
      {
        id: "map-matches-sketch",
        label: "Moisture map room count matches affected area inventory",
        required: true,
        detail:
          "Every wet room on the map appears in the job file room list before the first carrier contact.",
      },
      {
        id: "category-class-aligned",
        label: "Category/class notes align with photos and source documentation",
        required: true,
        detail:
          "A Category 3 classification includes visible contamination evidence or documented dwell time — not assumption alone.",
      },
      {
        id: "day-one-log-started",
        label: "Day-one dry log entry complete before crew leaves",
        required: true,
        detail:
          "Equipment count, initial readings, and environmental conditions logged same day — not backfilled at invoice.",
      },
      {
        id: "pm-intake-review",
        label: "Project manager intake review completed within 24 hours",
        required: true,
        detail:
          "PM confirms file is carrier-ready and assigns follow-up for estimate comparison when carrier scope arrives.",
      },
    ],
    commonMistakes: [
      {
        mistake: "Starting extraction without intake moisture readings",
        impact:
          "Carriers treat undocumented wet areas as late scope inflation when discovered on day three or four.",
        correction:
          "Complete baseline map and reading points before aggressive demolition or pad removal beyond photo evidence.",
      },
      {
        mistake: "Using different room names on photos, map, and estimate",
        impact:
          "Desk reviewers cannot match log entries to sketch rooms — equipment and monitoring lines get cut proportionally.",
        correction:
          "Lock room naming at intake and enforce across all documentation before the first dry log entry.",
      },
      {
        mistake: "Assigning Category 2 or 3 without contemporaneous notes",
        impact:
          "Category upgrades at invoice without intake evidence are commonly denied or downgraded to Category 1.",
        correction:
          "Document odor, color, source type, and dwell time at arrival with photos tied to classification notes.",
      },
      {
        mistake: "Deferring equipment photos until day two",
        impact:
          "Billed setup days without day-one placement photos invite utilization disputes on every air mover and dehu line.",
        correction:
          "Photograph full layout at initial set before leaving site on the emergency visit.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier sketch omits rooms documented on intake moisture map",
        documentation:
          "Intake map, labeled photos, and extraction scope showing all affected rooms at arrival.",
        lineItemHint: "Additional affected rooms, moisture mapping, extraction SF",
      },
      {
        trigger: "Category upgrade required based on source or dwell time at intake",
        documentation:
          "Source photos, contamination evidence, dwell time notes, and PPE or disposal requirements.",
        lineItemHint: "Category 2/3 line items, PPE, disposal, enhanced cleaning",
      },
      {
        trigger: "Hidden moisture in wall cavities or cabinet assemblies at intake",
        documentation:
          "Moisture readings at baseboards, toe-kicks, or thermal/invasive indicators with planned access notes.",
        lineItemHint: "Selective demolition, wall cavity drying, additional equipment",
      },
    ],
    relatedResources: [
      {
        label: "Water mitigation supplement playbook",
        href: "/resources/blog/water-damage-mitigation-supplement-playbook",
      },
      {
        label: "Water damage solutions",
        href: SOLUTION_PATH,
      },
    ],
    faq: [
      {
        question: "How long should intake documentation take on a typical residential loss?",
        answer:
          "Plan 45–90 minutes for a standard three-to-five-room loss including extraction, mapping, and equipment set. Rushing intake to move to the next job costs more in denied drying days than the time saved on site.",
      },
      {
        question: "Should intake happen before or after the adjuster visit?",
        answer:
          "Complete intake documentation before or independent of the adjuster walk. Your moisture map and category notes define field reality — the carrier sketch should match your intake, not the reverse.",
      },
    ],
  }),

  defineGuide({
    slug: "dry-log-collection-guide",
    title: "Dry Log Collection Field Procedure",
    excerpt:
      "Step-by-step dry log procedure for mitigation technicians: daily reading capture, equipment rows, environmental conditions, and log quality standards carriers expect at desk review.",
    category: CATEGORY,
    guideType: "field-procedure",
    roles: ["field"],
    claimPhase: "mitigation",
    tags: ["Dry Logs", "Water Damage", "Mitigation", "Moisture Readings", "Documentation"],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 10,
    seoTitle: "Dry Log Collection Field Procedure for Mitigation Teams",
    seoDescription:
      "Dry log field procedure for water mitigation: daily moisture readings, equipment documentation, environmental conditions, and carrier-ready log standards.",
    relatedGuideSlugs: [
      "water-mitigation-invoice-defense-guide",
      "mitigation-intake-checklist",
      "moisture-mapping-guide",
      "daily-monitoring-guide",
      "equipment-documentation-guide",
      "commercial-water-loss-documentation-guide",
    ],
    relatedBlogSlugs: [
      "dry-log-documentation-guide-insurance-claims",
      "how-carriers-reduce-drying-days",
      "equipment-charges-that-get-cut-from-water-claims",
      "documentation-gaps-that-trigger-water-claim-denials",
    ],
    faqIds: [
      "water-drying-documentation",
      "help-equipment-drying-documentation",
      "water-dry-log-update-frequency",
      "water-dry-log-contents",
      "water-dry-log-additional-drying-days",
      "water-missing-daily-monitoring",
      "water-mitigation-file-documentation",
    ],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["water-damage", "mitigation"],
    purpose:
      "Standardize daily dry log capture so every active drying day produces a carrier-defensible record linking moisture progress, equipment utilization, and technician decisions — the primary evidence for equipment days and monitoring charges.",
    whenToUse: [
      {
        condition: "Every active drying day while equipment is on site",
        signal: "Air movers or dehumidifiers running — log entry required before leaving property",
      },
      {
        condition: "Monitoring visit regardless of equipment changes",
        signal: "Technician on site to take readings, even if no equipment added or removed",
      },
      {
        condition: "Equipment added, relocated, or removed mid-job",
        signal: "Log must reflect count and location change with narrative explaining why",
      },
      {
        condition: "Dry standard approached in one zone but not others",
        signal: "Document partial release with readings proving which chambers remain active",
      },
    ],
    prerequisites: [
      "Intake moisture map with defined reading point IDs",
      "Calibrated moisture meter with documented type and mode",
      "Job management dry log template or carrier-approved form",
    ],
    requiredDocumentation: [
      {
        id: "visit-date-tech",
        label: "Visit date and technician name",
        required: true,
        detail: "Same calendar date as on-site visit — backdated entries weaken credibility on extensions.",
      },
      {
        id: "moisture-readings",
        label: "Moisture readings at all active map points",
        required: true,
        detail:
          "Meter type, mode, material, location ID, and value at each point. Use same point IDs as intake map.",
      },
      {
        id: "equipment-rows",
        label: "Equipment type and count by room or chamber",
        required: true,
        detail:
          "Air movers, dehumidifiers, air scrubbers, heaters, or specialty units on site this visit.",
      },
      {
        id: "environmental-readings",
        label: "Temperature and relative humidity",
        required: true,
        detail:
          "Record in each chamber or per carrier/program requirement — required on commercial and desiccant jobs.",
      },
      {
        id: "progress-narrative",
        label: "Progress or stall narrative",
        required: true,
        detail:
          "Note trend from prior visit, materials still above dry standard, and planned actions (continue, add equipment, demo).",
      },
      {
        id: "dry-standard-status",
        label: "Dry standard status by zone",
        required: true,
        detail:
          "Mark each chamber as active drying, approaching release, or released with final readings documented.",
      },
    ],
    steps: [
      {
        id: "verify-equipment",
        title: "Verify on-site equipment matches prior log",
        owner: "field",
        actions: [
          "Walk each chamber and count air movers, dehumidifiers, and specialty equipment",
          "Photograph layout if count or position changed since last visit",
          "Note any equipment removed by others or relocated by customer — document discrepancy",
        ],
      },
      {
        id: "capture-readings",
        title: "Capture moisture readings at map points",
        owner: "field",
        actions: [
          "Read every active map point using the same meter type and mode as intake",
          "Record values in dry log with point ID, material, and location description",
          "Note unreachable areas and alternative reading strategy if access is blocked",
          "Compare readings to prior visit and document trend direction in narrative field",
        ],
        notes:
          "Readings that do not trend toward dry standard require narrative — silent gaps invite proportional cuts.",
      },
      {
        id: "log-environmental",
        title: "Record environmental conditions",
        owner: "field",
        actions: [
          "Measure temperature and relative humidity in each active chamber",
          "Record outdoor conditions when relevant to HVAC or open-structure drying",
          "Note HVAC status, window/door position, or containment affecting chamber environment",
        ],
      },
      {
        id: "complete-and-sync",
        title: "Complete log entry and sync to job file",
        owner: "field",
        actions: [
          "Enter equipment rows, readings, environmental data, and progress narrative",
          "Mark dry standard status per zone; document equipment release with final readings",
          "Sign or authenticate entry same day before leaving property",
          "Confirm upload to job management so office can reconcile to estimate lines",
        ],
      },
    ],
    qualityGates: [
      {
        id: "one-log-per-billed-day",
        label: "One log entry for every billed equipment day",
        required: true,
        detail: "Billed air mover or dehu days without a matching log row are the top denial trigger.",
      },
      {
        id: "point-id-consistency",
        label: "Reading point IDs match intake moisture map",
        required: true,
        detail: "New points require map update and narrative explaining why scope expanded.",
      },
      {
        id: "same-day-entry",
        label: "Log entered same calendar day as visit",
        required: true,
        detail: "Backfilled logs after equipment pull are flagged in desk review.",
      },
      {
        id: "release-readings",
        label: "Final readings documented on equipment release",
        required: true,
        detail: "Release without final values invites cuts on the last one to two billed days.",
      },
    ],
    commonMistakes: [
      {
        mistake: "Logging equipment count without moisture readings",
        impact: "Carriers treat equipment-only rows as rental billing without proof drying was active.",
        correction: "Every log entry includes readings at all active map points — no exceptions.",
      },
      {
        mistake: "Skipping log entries on low-activity days",
        impact: "Gaps in chronology justify cutting equipment days between logged visits.",
        correction: "If equipment runs, log it — even if readings changed minimally.",
      },
      {
        mistake: "Changing meter type mid-job without notation",
        impact: "Inconsistent scales between visits look like data manipulation to reviewers.",
        correction: "Note meter change with conversion context or restart trend line with explanation.",
      },
      {
        mistake: "Using vague room names ('hall', 'back room')",
        impact: "Desk reviewers cannot match log to sketch — monitoring and equipment lines get reduced.",
        correction: "Use sketch-aligned room names identical to map, photos, and estimate.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Readings still above dry standard after carrier template end date",
        documentation: "Daily logs showing trend with last three visits and current values above goal.",
        lineItemHint: "Extended equipment days, additional monitoring visits",
      },
      {
        trigger: "Equipment added mid-job due to stall or hidden moisture",
        documentation: "Log entries showing stall narrative, new readings, and equipment change photos.",
        lineItemHint: "Additional air movers, dehumidifiers, or specialty drying equipment",
      },
      {
        trigger: "Dry log supports demolition timing not on carrier estimate",
        documentation: "Readings at baseboards or cavity points justifying selective demo before rebuild.",
        lineItemHint: "Selective demolition, cavity drying, anti-microbial after demo",
      },
    ],
    relatedResources: [
      {
        label: "Dry log documentation guide",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  }),

  defineGuide({
    slug: "moisture-mapping-guide",
    title: "Moisture Mapping Field Procedure",
    excerpt:
      "Intake moisture mapping procedure: reading point placement, boundary documentation, map updates on scope change, and integration with dry logs and carrier sketches.",
    category: CATEGORY,
    guideType: "field-procedure",
    roles: ["field"],
    claimPhase: "documentation",
    tags: ["Moisture Mapping", "Water Damage", "Intake", "Documentation", "Mitigation"],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 11,
    seoTitle: "Moisture Mapping Field Procedure for Insurance Claims",
    seoDescription:
      "Moisture mapping field procedure: reading points, wet boundaries, map updates, dry log integration, and carrier sketch alignment for water mitigation claims.",
    relatedGuideSlugs: [
      "water-mitigation-invoice-defense-guide",
      "mitigation-intake-checklist",
      "dry-log-collection-guide",
      "category-class-documentation-guide",
      "daily-monitoring-guide",
      "commercial-water-loss-documentation-guide",
    ],
    relatedBlogSlugs: [
      "moisture-mapping-best-practices-insurance-claims",
      "moisture-mapping-mistakes-that-cost-contractors-money",
      "how-carriers-reduce-drying-days",
      "equipment-charges-that-get-cut-from-water-claims",
      "documentation-gaps-that-trigger-water-claim-denials",
    ],
    faqIds: [
      "water-drying-documentation",
      "water-category-class",
      "water-moisture-maps-required",
      "water-moisture-map-contents",
      "water-moisture-reading-frequency",
      "water-moisture-readings-importance",
    ],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["water-damage", "mitigation"],
    purpose:
      "Document initial moisture extent and reading-point layout in a carrier-forward format so affected rooms, hidden assemblies, and chamber design are established before desk review sets a template scope.",
    whenToUse: [
      {
        condition: "Initial arrival before or during equipment set",
        signal: "Baseline map required before first dry log entry",
      },
      {
        condition: "Water migration discovered after initial map",
        signal: "Update map with new wet zones, reading points, and dated notation",
      },
      {
        condition: "Demolition exposes additional wet assemblies",
        signal: "Add reading points and photograph newly exposed materials before continuing drying",
      },
      {
        condition: "Carrier sketch omits rooms field team documented as wet",
        signal: "Updated map supports supplement for additional affected area",
      },
    ],
    prerequisites: [
      "Floor plan sketch capability (software, graph paper, or photo markup tool)",
      "Calibrated moisture meter",
      "Consistent room naming convention from intake checklist",
    ],
    requiredDocumentation: [
      {
        id: "floor-plan-base",
        label: "Floor plan or site diagram base",
        required: true,
        detail: "Room layout with labels matching estimate sketch naming convention.",
      },
      {
        id: "reading-points",
        label: "Numbered reading points with initial values",
        required: true,
        detail: "Point ID, material, meter type/mode, and value at each location.",
      },
      {
        id: "wet-dry-boundaries",
        label: "Wet/dry boundaries and migration paths",
        required: true,
        detail: "Show where water traveled — hallways, adjoining rooms, vertical migration.",
      },
      {
        id: "material-annotations",
        label: "Affected material types per zone",
        required: true,
        detail: "Carpet, pad, hardwood, tile, drywall, insulation, subfloor — drives class and equipment.",
      },
      {
        id: "chamber-design",
        label: "Planned drying chambers and containment",
        required: true,
        detail: "Chamber perimeters explain dehumidifier count and isolation strategy.",
      },
      {
        id: "map-photos",
        label: "Supporting photos at key map points",
        required: true,
        detail: "Photos labeled with point ID or room name matching map notation.",
      },
    ],
    steps: [
      {
        id: "sketch-layout",
        title: "Create floor plan with room labels",
        owner: "field",
        actions: [
          "Draw or import floor plan with room names aligned to how estimator will sketch",
          "Mark water entry point and direction of migration",
          "Identify vertical levels affected (main, basement, second floor)",
        ],
      },
      {
        id: "place-reading-points",
        title: "Place and number reading points",
        owner: "field",
        actions: [
          "Assign point IDs (e.g., KIT-1, LR-2) at representative wet locations per room",
          "Take initial readings with meter type, mode, material, and value recorded on map",
          "Add points at baseboards, center of room, and suspected hidden areas (toe-kicks, closets)",
          "Photograph each major zone with visible point ID reference where practical",
        ],
        notes: "Point IDs must appear identically in every subsequent dry log entry.",
      },
      {
        id: "define-boundaries",
        title: "Define wet boundaries and chambers",
        owner: "field",
        actions: [
          "Mark wet/dry transition lines with readings at boundary points",
          "Design drying chambers with noted containment requirements",
          "Document unreachable areas and planned access (baseboard removal, drill holes)",
        ],
      },
      {
        id: "update-on-change",
        title: "Update map when scope changes",
        owner: "field",
        actions: [
          "Add new points and initial values when migration or demolition reveals additional moisture",
          "Date and initial map revisions; retain original intake map in file",
          "Notify PM and estimator when room count exceeds carrier sketch",
          "Sync updated map to job file within 24 hours of discovery",
        ],
      },
    ],
    qualityGates: [
      {
        id: "intake-complete-before-log",
        label: "Baseline map complete before day-one dry log",
        required: true,
        detail: "Dry logs reference map point IDs — map must exist first.",
      },
      {
        id: "sketch-room-alignment",
        label: "Map room count aligns with affected area inventory",
        required: true,
        detail: "Every wet room on map appears in job file room list and photos.",
      },
      {
        id: "revision-dated",
        label: "Map revisions dated with reason for change",
        required: true,
        detail: "Undated maps drawn after invoice look retroactive to desk reviewers.",
      },
      {
        id: "photo-point-match",
        label: "Photos support map points and boundaries",
        required: true,
        detail: "At least one wide photo and one detail per affected room on intake.",
      },
    ],
    commonMistakes: [
      {
        mistake: "Relying on photos alone without a structured map",
        impact: "Desk adjusters cannot see all reading points and chamber logic in one view.",
        correction: "Photos supplement the map — they do not replace labeled reading-point layout.",
      },
      {
        mistake: "Creating map only at job completion",
        impact: "Reviewers reject maps that appear drawn to match invoice rather than intake conditions.",
        correction: "Baseline map at intake; date revisions when scope expands.",
      },
      {
        mistake: "Inconsistent point IDs between map and dry log",
        impact: "Reading trends become unreadable — extensions denied for lack of continuity.",
        correction: "Copy point IDs directly from map to log template; never renumber mid-job.",
      },
      {
        mistake: "Omitting boundary readings at wet/dry transitions",
        impact: "Extra rooms look unsubstantiated when added later in the job.",
        correction: "Document boundary point readings showing moisture transition into adjacent rooms.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Additional wet rooms discovered after carrier sketch issued",
        documentation: "Updated map with dated revision, boundary readings, and intake or discovery photos.",
        lineItemHint: "Moisture mapping, additional affected rooms, extraction SF",
      },
      {
        trigger: "Hidden moisture in assemblies requires map expansion",
        documentation: "New points at cavity locations with readings and demolition photos.",
        lineItemHint: "Selective demolition, wall cavity drying, containment",
      },
      {
        trigger: "Commercial or multi-chamber loss exceeds template equipment layout",
        documentation: "Chamber diagram with SF, class, and equipment count justification at intake.",
        lineItemHint: "Additional chambers, large-loss dehumidification, monitoring",
      },
    ],
    relatedResources: [
      {
        label: "Moisture mapping best practices",
        href: "/resources/blog/moisture-mapping-best-practices-insurance-claims",
      },
      {
        label: "Moisture mapping mistakes that cost contractors money",
        href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  }),

  defineGuide({
    slug: "equipment-documentation-guide",
    title: "Mitigation Equipment Documentation Procedure",
    excerpt:
      "Document air movers, dehumidifiers, and specialty equipment for carrier review: placement photos, utilization logs, change tracking, and billing reconciliation.",
    category: CATEGORY,
    guideType: "field-procedure",
    roles: ["field", "office"],
    claimPhase: "documentation",
    tags: ["Equipment", "Water Damage", "Mitigation", "Dry Logs", "Documentation"],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 10,
    seoTitle: "Mitigation Equipment Documentation Procedure",
    seoDescription:
      "Water mitigation equipment documentation: placement photos, utilization proof, change tracking, dry log alignment, and carrier billing reconciliation.",
    relatedGuideSlugs: [
      "water-mitigation-invoice-defense-guide",
      "dry-log-collection-guide",
      "daily-monitoring-guide",
      "moisture-mapping-guide",
      "mitigation-intake-checklist",
      "commercial-water-loss-documentation-guide",
    ],
    relatedBlogSlugs: [
      "equipment-charges-water-damage-claims",
      "how-carriers-reduce-drying-days",
      "equipment-charges-that-get-cut-from-water-claims",
      "documentation-gaps-that-trigger-water-claim-denials",
    ],
    faqIds: [
      "help-equipment-drying-documentation",
      "water-drying-documentation",
      "water-air-mover-documentation",
      "water-dehumidifier-documentation",
      "water-equipment-charge-reductions",
      "water-mitigation-file-documentation",
    ],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["water-damage", "mitigation"],
    purpose:
      "Link every billed equipment day and unit count to placement photos, dry log rows, and chamber design so desk reviewers can approve utilization without calling the field for counts.",
    whenToUse: [
      {
        condition: "Initial equipment set at intake",
        signal: "Photograph full layout before leaving site on day one",
      },
      {
        condition: "Equipment added, removed, or relocated",
        signal: "Update photos, dry log rows, and note reason in progress narrative",
      },
      {
        condition: "Office reconciling invoice to carrier estimate",
        signal: "Compare billed days and unit counts to log entries and photos before submission",
      },
      {
        condition: "Specialty equipment deployed (desiccant, injection, hardwood drying)",
        signal: "Document justification with readings, photos, and rental invoice if applicable",
      },
    ],
    prerequisites: [
      "Intake moisture map with chamber design",
      "Dry log template with equipment rows",
      "Asset tracking or numbered equipment tags for commercial losses",
    ],
    requiredDocumentation: [
      {
        id: "placement-photos",
        label: "Equipment placement photos at set and changes",
        required: true,
        detail: "Wide shots showing count per room; detail shots for specialty units.",
      },
      {
        id: "equipment-log-rows",
        label: "Daily equipment rows in dry log",
        required: true,
        detail: "Type, count, and room/chamber for every active drying day.",
      },
      {
        id: "start-end-dates",
        label: "Start and end dates per unit or chamber",
        required: true,
        detail: "Track when each piece was set and released with final readings.",
      },
      {
        id: "change-narrative",
        label: "Equipment change narrative",
        required: true,
        detail: "Why units were added, removed, or relocated — tied to readings or stall.",
      },
      {
        id: "specialty-justification",
        label: "Specialty equipment justification",
        required: false,
        detail: "Hardwood drying, desiccant, or injection systems require material and reading support.",
      },
      {
        id: "rental-invoices",
        label: "Third-party rental invoices",
        required: false,
        detail: "Attach when billing above price list or for specialty vendor equipment.",
      },
    ],
    steps: [
      {
        id: "document-initial-set",
        title: "Document initial equipment set",
        owner: "field",
        actions: [
          "Photograph each chamber showing all air movers and dehumidifiers in place",
          "Record count in day-one dry log equipment rows matching photo count",
          "Note equipment model or size class when carrier program requires it",
          "Align layout to moisture map chamber design",
        ],
      },
      {
        id: "track-changes",
        title: "Track equipment changes during drying",
        owner: "field",
        actions: [
          "Re-photograph when units added, removed, or relocated",
          "Update dry log equipment rows same visit with change narrative",
          "Document stall conditions when adding capacity (readings flat, high RH, dense materials)",
          "Record release with final readings proving dry standard before pull",
        ],
      },
      {
        id: "office-reconciliation",
        title: "Reconcile equipment billing to documentation",
        owner: "office",
        actions: [
          "Match billed air mover and dehu days to dry log entry count one-to-one",
          "Verify peak unit count in estimate matches highest photo-documented count",
          "Flag gaps where billed days exceed logged days before invoice or supplement",
          "Attach placement photos to supplement package indexed by day and room",
        ],
        notes: "Reconcile before invoice — not after carrier cuts.",
      },
      {
        id: "specialty-handling",
        title: "Document specialty equipment when deployed",
        owner: "field",
        actions: [
          "Photograph specialty system setup with affected material in frame",
          "Log environmental readings required for desiccant or commercial systems",
          "Attach vendor invoice or internal rate support for non-price-list items",
          "Narrate why standard LGR count was insufficient for assembly type",
        ],
      },
    ],
    qualityGates: [
      {
        id: "photo-count-match",
        label: "Photo-documented count matches peak billed units",
        required: true,
        detail: "Billing six air movers requires photos showing six — not four with assumed layout.",
      },
      {
        id: "log-day-match",
        label: "Billed equipment days match dry log entries",
        required: true,
        detail: "Each billed day has a log row with equipment and readings.",
      },
      {
        id: "release-documentation",
        label: "Equipment release documented with final readings",
        required: true,
        detail: "Pull photos and readings prove dry standard — avoids last-day cuts.",
      },
      {
        id: "pre-invoice-review",
        label: "Office reconciliation complete before invoice",
        required: true,
        detail: "PM or billing reviews log-to-invoice match on every mitigation file.",
      },
    ],
    commonMistakes: [
      {
        mistake: "Billing peak count without photos at peak deployment",
        impact: "Desk review reduces units to highest photo-verified count — often lower than billed.",
        correction: "Photograph every equipment change when count increases.",
      },
      {
        mistake: "Treating monitoring visits as implicit equipment documentation",
        impact: "Visits without equipment rows still leave rental days unsupported.",
        correction: "Equipment rows in dry log every active day — separate from monitoring narrative.",
      },
      {
        mistake: "Pulling equipment before final readings logged",
        impact: "Last one to two days cut when release readings missing.",
        correction: "Final log entry with release readings before physical pull.",
      },
      {
        mistake: "Office invoicing from template without log reconciliation",
        impact: "Invoice exceeds documentation — supplements become defensive instead of proactive.",
        correction: "Mandatory log-to-invoice check on every file before carrier submission.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier estimate undercounts air movers or dehumidifiers vs field layout",
        documentation: "Day-one placement photos, chamber map, and daily log equipment rows.",
        lineItemHint: "Additional air movers, dehumidifiers, specialty drying systems",
      },
      {
        trigger: "Extended equipment days beyond carrier template duration",
        documentation: "Dry logs showing readings above dry standard through template end date.",
        lineItemHint: "Extended rental days per unit type",
      },
      {
        trigger: "Specialty equipment required for hardwood, crawlspace, or commercial assemblies",
        documentation: "Material photos, readings, system setup photos, and vendor invoice.",
        lineItemHint: "Hardwood drying, desiccant dehumidification, injection drying",
      },
    ],
    relatedResources: [
      {
        label: "Equipment charges in water damage claims",
        href: "/resources/blog/equipment-charges-water-damage-claims",
      },
    ],
  }),

  defineGuide({
    slug: "daily-monitoring-guide",
    title: "Daily Monitoring Checklist",
    excerpt:
      "Checklist for daily monitoring visits on water losses: visit documentation, reading capture, equipment verification, and alignment with billed monitoring line items.",
    category: CATEGORY,
    guideType: "checklist",
    roles: ["field"],
    claimPhase: "mitigation",
    tags: ["Monitoring", "Water Damage", "Mitigation", "Dry Logs", "Documentation"],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 8,
    seoTitle: "Daily Monitoring Checklist for Water Mitigation",
    seoDescription:
      "Daily monitoring checklist for water mitigation: visit documentation, moisture readings, equipment checks, dry log alignment, and carrier billing support.",
    relatedGuideSlugs: [
      "water-mitigation-invoice-defense-guide",
      "dry-log-collection-guide",
      "equipment-documentation-guide",
      "moisture-mapping-guide",
      "commercial-water-loss-documentation-guide",
    ],
    relatedBlogSlugs: [
      "daily-monitoring-documentation-best-practices",
      "how-carriers-reduce-drying-days",
      "equipment-charges-that-get-cut-from-water-claims",
      "documentation-gaps-that-trigger-water-claim-denials",
    ],
    faqIds: [
      "help-equipment-drying-documentation",
      "water-drying-documentation",
      "water-moisture-reading-frequency",
      "water-dry-log-update-frequency",
      "water-daily-monitoring-records-importance",
      "water-missing-daily-monitoring",
    ],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["water-damage", "mitigation"],
    purpose:
      "Ensure each monitoring visit produces a complete, billable record separate from equipment rental — proving the technician performed analysis, not just passive drying days.",
    whenToUse: [
      {
        condition: "Scheduled monitoring visit on active drying job",
        signal: "Daily or every-other-day trip per procedure and carrier program",
      },
      {
        condition: "Equipment stall or unexpected reading trend",
        signal: "Document decision to add equipment, demo, or extend drying with visit narrative",
      },
      {
        condition: "Pre-release verification before equipment pull",
        signal: "Final monitoring visit with release readings at all map points",
      },
    ],
    prerequisites: [
      "Active moisture map with point IDs",
      "Dry log access on mobile device or paper form for same-day entry",
      "Monitoring line items on internal estimate matching visit frequency",
    ],
    requiredDocumentation: [
      {
        id: "visit-record",
        label: "Dated monitoring visit record",
        required: true,
        detail: "One entry per billed monitoring line — visits cannot be implied by equipment rental.",
      },
      {
        id: "point-readings",
        label: "Readings at all active map points",
        required: true,
        detail: "Same point IDs as map and prior logs; meter type and mode noted.",
      },
      {
        id: "equipment-check",
        label: "Equipment operation check",
        required: true,
        detail: "Verify units running, count matches log, note malfunctions or relocations.",
      },
      {
        id: "environmental-conditions",
        label: "Temperature and humidity readings",
        required: true,
        detail: "Per chamber on commercial losses; per carrier requirement on residential.",
      },
      {
        id: "visit-narrative",
        label: "Progress or action narrative",
        required: true,
        detail: "What changed since last visit, planned next steps, customer communication if needed.",
      },
    ],
    steps: [
      {
        id: "pre-visit-review",
        title: "Review prior log and map before arrival",
        owner: "field",
        actions: [
          "Check prior visit readings and trend direction at each point",
          "Note equipment count and any open stall issues from last entry",
          "Confirm visit date aligns with billed monitoring schedule",
        ],
      },
      {
        id: "on-site-monitoring",
        title: "Perform on-site monitoring",
        owner: "field",
        actions: [
          "Verify equipment count and operation in each chamber",
          "Take readings at all active map points; record values with point ID",
          "Capture environmental readings (temp/RH) per procedure",
          "Photograph equipment changes, demolition progress, or customer concerns",
        ],
      },
      {
        id: "document-visit",
        title: "Document visit in dry log same day",
        owner: "field",
        actions: [
          "Complete dry log entry with date, readings, equipment check, and narrative",
          "Note stall actions if readings plateau — add equipment, demo, or adjust airflow",
          "Mark zones approaching dry standard with target release date",
          "Authenticate entry before leaving property",
        ],
      },
      {
        id: "escalate-exceptions",
        title: "Escalate exceptions to project manager",
        owner: "field",
        actions: [
          "Notify PM when readings stall beyond two visits without trend improvement",
          "Flag when visit count will exceed carrier estimate monitoring allowance",
          "Document customer access issues or HVAC problems affecting drying",
        ],
      },
    ],
    qualityGates: [
      {
        id: "visit-log-parity",
        label: "Billed monitoring visits match log entries one-to-one",
        required: true,
        detail: "Five billed monitoring lines require five dated log entries with readings.",
      },
      {
        id: "reading-completeness",
        label: "All active map points read each visit",
        required: true,
        detail: "Partial point coverage invites proportional monitoring cuts.",
      },
      {
        id: "same-day-log",
        label: "Visit logged same calendar day",
        required: true,
        detail: "Backfilled monitoring entries after invoice lose credibility.",
      },
      {
        id: "release-visit",
        label: "Final monitoring visit documents release readings",
        required: true,
        detail: "Equipment pull follows release visit — not the reverse.",
      },
    ],
    commonMistakes: [
      {
        mistake: "Billing monitoring without a distinct log entry per visit",
        impact: "Carriers collapse monitoring into rental or cut visits lacking reading proof.",
        correction: "One log entry per trip with readings — monitoring is labor, not passive rental.",
      },
      {
        mistake: "Skipping visits on weekends or holidays while billing daily",
        impact: "Holiday gaps justify cutting all non-logged days in a billing period.",
        correction: "Match billing frequency to actual visit schedule or adjust estimate before billing.",
      },
      {
        mistake: "Repeating identical readings without narrative",
        impact: "Flat readings without stall explanation suggest checklist visits without analysis.",
        correction: "Narrate stall, planned action, and equipment response when trend flattens.",
      },
      {
        mistake: "Monitoring visit without equipment verification",
        impact: "Unplugged or removed units discovered late — billed days unsupported.",
        correction: "Equipment check is mandatory on every monitoring visit.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier estimate includes fewer monitoring visits than field schedule requires",
        documentation: "Visit logs showing daily trips with readings for Category 2/3 or commercial loss.",
        lineItemHint: "Additional monitoring visits",
      },
      {
        trigger: "Stall required extra visits beyond original allowance",
        documentation: "Logs showing plateau readings and corrective actions over extended period.",
        lineItemHint: "Extended monitoring, additional equipment after stall",
      },
      {
        trigger: "Partial approval paid some monitoring lines",
        documentation: "Target resubmission with denied visit dates, readings, and photos indexed.",
        lineItemHint: "Denied monitoring visit lines from partial approval",
      },
    ],
    relatedResources: [
      {
        label: "Daily monitoring documentation best practices",
        href: "/resources/blog/daily-monitoring-documentation-best-practices",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  }),

  defineGuide({
    slug: "category-class-documentation-guide",
    title: "Category & Class Documentation Standard",
    excerpt:
      "Documentation standard for IICRC category and class of water: field classification criteria, evidence requirements, line-item alignment, and carrier review expectations.",
    category: CATEGORY,
    guideType: "documentation-standard",
    roles: ["field", "office"],
    claimPhase: "documentation",
    tags: ["Category", "Class", "Water Damage", "IICRC", "Documentation", "Mitigation"],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 12,
    seoTitle: "Category & Class Documentation Standard for Water Claims",
    seoDescription:
      "IICRC category and class documentation for water claims: field classification, evidence requirements, line-item alignment, and carrier review standards.",
    relatedGuideSlugs: [
      "mitigation-intake-checklist",
      "moisture-mapping-guide",
      "dry-log-collection-guide",
      "contents-manipulation-documentation-guide",
      "commercial-water-loss-documentation-guide",
    ],
    relatedBlogSlugs: [
      "why-water-mitigation-claims-get-underpaid",
      "how-carriers-reduce-drying-days",
      "equipment-charges-that-get-cut-from-water-claims",
      "documentation-gaps-that-trigger-water-claim-denials",
    ],
    faqIds: [
      "water-category-class",
      "water-mitigation-scope",
      "water-category-3-qualifies",
      "water-claim-denied-documentation",
    ],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["water-damage", "mitigation"],
    purpose:
      "Align field classification of water category and class with photos, notes, and estimate line items so carriers approve appropriate scope — and category upgrades are supported by contemporaneous evidence, not retroactive narrative.",
    whenToUse: [
      {
        condition: "Initial arrival on any water loss",
        signal: "Classify before antimicrobial, PPE, or disposal line items are billed",
      },
      {
        condition: "Conditions change category (e.g., clean water degrades over time)",
        signal: "Document upgrade with dated notes and photos when category elevates",
      },
      {
        condition: "Office preparing estimate or supplement with category-driven line items",
        signal: "Verify field notes support every category/class-sensitive line",
      },
      {
        condition: "Carrier disputes Category 2 or 3 scope",
        signal: "Pull intake classification packet for resubmission",
      },
    ],
    prerequisites: [
      "IICRC category/class reference available to field team",
      "Intake photo capability with timestamps",
      "Estimate template with category-appropriate line items separated",
    ],
    requiredDocumentation: [
      {
        id: "category-assignment",
        label: "Category assignment with source type",
        required: true,
        detail: "Category 1 (clean), 2 (gray), or 3 (black) with source: supply, drain, toilet, flood, etc.",
      },
      {
        id: "class-assignment",
        label: "Class of water assignment",
        required: true,
        detail: "Class 1–4 based on absorption and evaporation load — drives equipment and duration.",
      },
      {
        id: "classification-photos",
        label: "Photos supporting classification",
        required: true,
        detail: "Contamination color, debris, odor indicators, or clean source at arrival.",
      },
      {
        id: "dwell-time-notes",
        label: "Dwell time and discovery notes",
        required: true,
        detail: "When loss occurred, when discovered, and visible degradation timeline.",
      },
      {
        id: "line-item-alignment",
        label: "Estimate lines aligned to classification",
        required: true,
        detail: "PPE, disposal, antimicrobial, and cleaning lines match assigned category.",
      },
      {
        id: "upgrade-documentation",
        label: "Category upgrade documentation if conditions change",
        required: false,
        detail: "Dated note and photo when Category 1 degrades to 2 or 3 during drying.",
      },
    ],
    steps: [
      {
        id: "classify-at-intake",
        title: "Classify at intake with written justification",
        owner: "field",
        actions: [
          "Identify water source type and contamination level at arrival",
          "Assign category per IICRC definitions with source-specific notes",
          "Assign class based on affected materials, volume, and absorption (Class 1 lowest, 4 highest)",
          "Photograph conditions that support classification before cleanup alters appearance",
        ],
      },
      {
        id: "align-scope",
        title: "Align mitigation scope to classification",
        owner: "field",
        actions: [
          "Apply PPE, disposal, and cleaning procedures appropriate to assigned category",
          "Set equipment count and chamber design appropriate to class level",
          "Document HVAC involvement or structural cavity saturation that elevates class",
          "Note any areas requiring Category 3 procedures within a mixed loss",
        ],
      },
      {
        id: "office-estimate-sync",
        title: "Sync estimate line items to field classification",
        owner: "office",
        actions: [
          "Verify antimicrobial, biocide, PPE, and disposal lines match category on file",
          "Confirm equipment count and drying duration assumptions match class level",
          "Remove category-sensitive lines that field notes do not support",
          "Flag classification gaps before supplement or invoice submission",
        ],
      },
      {
        id: "document-upgrades",
        title: "Document category changes during job",
        owner: "field",
        actions: [
          "Re-classify with dated note when clean water degrades due to dwell time",
          "Photograph changed conditions (color, odor, growth indicators)",
          "Notify PM and estimator to add appropriate scope lines",
          "Do not upgrade at invoice without mid-job documentation trail",
        ],
      },
    ],
    qualityGates: [
      {
        id: "intake-classification-complete",
        label: "Category and class assigned before day-one scope billing",
        required: true,
        detail: "Classification notes timestamped at or before first antimicrobial or PPE line.",
      },
      {
        id: "photo-evidence",
        label: "Photos support assigned category",
        required: true,
        detail: "Category 3 requires visible contamination or documented black water source.",
      },
      {
        id: "estimate-match",
        label: "Estimate category-sensitive lines match field assignment",
        required: true,
        detail: "Mismatch between Category 1 notes and Category 3 lines triggers denial.",
      },
      {
        id: "upgrade-trail",
        label: "Upgrades documented contemporaneously",
        required: true,
        detail: "Mid-job upgrades have dated photos and notes — not invoice-only narrative.",
      },
    ],
    commonMistakes: [
      {
        mistake: "Defaulting to Category 1 on all losses",
        impact: "Gray and black water scope underpaid; upgrades at invoice denied without intake evidence.",
        correction: "Classify based on source and conditions at arrival — document honestly with photos.",
      },
      {
        mistake: "Billing Category 3 disposal on Category 1 documentation",
        impact: "Entire category-sensitive scope section denied as unsupported.",
        correction: "Office verifies field notes before adding disposal, PPE, and enhanced cleaning lines.",
      },
      {
        mistake: "Ignoring class level when setting equipment",
        impact: "Under-equipment leads to extended drying; over-equipment without class support gets cut.",
        correction: "Class 3/4 losses document material density and cavity saturation driving equipment count.",
      },
      {
        mistake: "Retroactive category upgrade at supplement without mid-job evidence",
        impact: "Reviewers treat upgrade as scope inflation — downgrade to Category 1.",
        correction: "Document degradation when discovered with dated photos during active drying.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier estimate assumes Category 1 on documented Category 2 or 3 loss",
        documentation: "Intake classification notes, source photos, and appropriate line item list.",
        lineItemHint: "Category 2/3 cleaning, PPE, disposal, biocide application",
      },
      {
        trigger: "Class level supports higher equipment count than carrier template",
        documentation: "Material inventory, cavity saturation photos, and chamber design notes.",
        lineItemHint: "Additional equipment, extended drying, structural cavity drying",
      },
      {
        trigger: "Category upgraded during drying due to dwell time",
        documentation: "Dated upgrade note, condition photos, and revised scope lines.",
        lineItemHint: "Enhanced cleaning, disposal of contaminated materials, added PPE",
      },
    ],
    relatedResources: [
      {
        label: "Why water mitigation claims get underpaid",
        href: "/resources/blog/why-water-mitigation-claims-get-underpaid",
      },
    ],
    faq: [
      {
        question: "Can category change after the initial visit?",
        answer:
          "Yes — clean water can degrade to Category 2 or 3 with sufficient dwell time. Document the upgrade when conditions change with dated photos and notes. Upgrades documented only at invoice are commonly rejected.",
      },
      {
        question: "Does class affect equipment billing?",
        answer:
          "Class drives evaporation load and expected equipment count/duration. Class 3/4 losses with dense materials and cavity saturation justify higher air mover and dehumidifier counts than Class 1 — but field notes must support the assignment.",
      },
    ],
  }),

  defineGuide({
    slug: "contents-manipulation-documentation-guide",
    title: "Contents Manipulation Documentation Procedure",
    excerpt:
      "Field procedure for documenting contents manipulation on water losses: move-out scope, protection, reset billing support, and photo standards carriers expect.",
    category: CATEGORY,
    guideType: "field-procedure",
    roles: ["field"],
    claimPhase: "documentation",
    tags: ["Contents", "Water Damage", "Mitigation", "Documentation", "Manipulation"],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 9,
    seoTitle: "Contents Manipulation Documentation for Water Claims",
    seoDescription:
      "Contents manipulation documentation on water claims: move-out scope, furniture protection, reset billing, and photo standards for mitigation contractors.",
    relatedGuideSlugs: [
      "mitigation-intake-checklist",
      "category-class-documentation-guide",
      "equipment-documentation-guide",
    ],
    relatedBlogSlugs: ["water-damage-mitigation-supplement-playbook"],
    faqIds: ["water-mitigation-scope", "water-emergency-vs-rebuild"],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["water-damage", "mitigation"],
    purpose:
      "Document contents handling — furniture moves, protection, block-and-floating, and reset — with before/after photos and scope notes so manipulation line items survive desk review as legitimate access and protection work, not discretionary moving.",
    whenToUse: [
      {
        condition: "Furniture or contents block access to wet walls, floors, or equipment placement",
        signal: "Manipulation required before extraction, demo, or air mover setup",
      },
      {
        condition: "Contents at risk from wet floor or falling debris during drying",
        signal: "Block, foil, or move contents to protect from secondary damage",
      },
      {
        condition: "Contents move-out or pack-out scope on mitigation phase",
        signal: "Document inventory and reason before items leave structure",
      },
      {
        condition: "Reset after drying complete",
        signal: "Photograph reset position and note hours for billing support",
      },
    ],
    prerequisites: [
      "Customer authorization for contents manipulation or move-out",
      "Floor protection materials available before moving heavy items",
      "Camera with room labels matching sketch naming convention",
    ],
    requiredDocumentation: [
      {
        id: "before-photos",
        label: "Before photos showing contents blocking access",
        required: true,
        detail: "Wide shots showing why manipulation was necessary for mitigation scope.",
      },
      {
        id: "manipulation-scope",
        label: "Written scope of manipulation per room",
        required: true,
        detail: "What was moved, blocked, foiled, or floated — and why mitigation required it.",
      },
      {
        id: "protection-materials",
        label: "Floor and content protection documentation",
        required: true,
        detail: "Photos of floor protection, furniture foil, or blocking before and after setup.",
      },
      {
        id: "move-out-inventory",
        label: "Move-out inventory when contents leave structure",
        required: false,
        detail: "Item count, description, and destination for pack-out or off-site storage.",
      },
      {
        id: "after-reset-photos",
        label: "After/reset photos when contents returned",
        required: true,
        detail: "Document reset completion for billing manipulation hours on job closeout.",
      },
      {
        id: "time-and-labor",
        label: "Labor hours and technician count for manipulation",
        required: true,
        detail: "Record start/end or total hours per room for line-item quantity support.",
      },
    ],
    steps: [
      {
        id: "assess-contents",
        title: "Assess contents impact on mitigation scope",
        owner: "field",
        actions: [
          "Identify furniture, appliances, and personal property blocking wet areas or equipment",
          "Photograph pre-manipulation layout with wide angle showing access obstruction",
          "Determine manipulation type: move within room, block/float, foil, or move-out",
          "Obtain customer approval for move-out if contents leave the structure",
        ],
      },
      {
        id: "perform-manipulation",
        title: "Perform manipulation with protection",
        owner: "field",
        actions: [
          "Install floor protection before moving heavy items",
          "Move, block, or float contents to expose wet assemblies for extraction and drying",
          "Apply furniture foil or covers on items remaining in affected zones",
          "Photograph post-manipulation layout showing cleared access for equipment",
        ],
        notes:
          "Manipulation must tie to mitigation need — not general housekeeping.",
      },
      {
        id: "document-hours",
        title: "Document labor and scope",
        owner: "field",
        actions: [
          "Record technician count and hours per room for manipulation work",
          "Note item types moved (sofa, bed, dresser, appliance) for line-item detail",
          "Log manipulation in job notes linked to room names on sketch",
          "Flag pack-out scope separately from in-structure manipulation",
        ],
      },
      {
        id: "reset-and-close",
        title: "Reset contents and document completion",
        owner: "field",
        actions: [
          "Return contents to pre-loss position or customer-directed layout after dry standard",
          "Photograph reset completion in each affected room",
          "Record reset labor hours separately from initial manipulation",
          "Remove floor protection and document final room condition",
        ],
      },
    ],
    qualityGates: [
      {
        id: "before-after-photos",
        label: "Before and after photos for each manipulated room",
        required: true,
        detail: "Desk reviewers need visual proof manipulation was mitigation-driven.",
      },
      {
        id: "access-narrative",
        label: "Written narrative ties manipulation to mitigation access",
        required: true,
        detail: "Explain which wet assembly or equipment placement required the move.",
      },
      {
        id: "hours-logged",
        label: "Labor hours logged per room",
        required: true,
        detail: "Manipulation lines billed without hours invite quantity cuts.",
      },
      {
        id: "reset-documented",
        label: "Reset documented on job closeout",
        required: true,
        detail: "Reset hours billed separately require completion photos.",
      },
    ],
    commonMistakes: [
      {
        mistake: "Moving contents without before photos",
        impact: "Manipulation lines denied as unverifiable — adjuster cannot confirm necessity.",
        correction: "Always photograph obstruction before first move in each room.",
      },
      {
        mistake: "Billing manipulation without linking to mitigation access",
        impact: "Carriers treat unmotivated moves as homeowner convenience, not covered scope.",
        correction: "Narrate which wet wall, floor section, or equipment placement required access.",
      },
      {
        mistake: "Combining manipulation with contents pack-out without inventory",
        impact: "Pack-out scope disputed on item count and chain of custody.",
        correction: "Separate pack-out with inventory list from in-room block-and-float manipulation.",
      },
      {
        mistake: "Skipping reset documentation",
        impact: "Reset hours cut on closeout when only initial manipulation was photographed.",
        correction: "Photograph and log reset labor when contents return to position.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier estimate omits contents manipulation in affected rooms",
        documentation: "Before/after photos, access narrative, and labor hours per room.",
        lineItemHint: "Contents manipulation, furniture blocking, floor protection",
      },
      {
        trigger: "Additional rooms require manipulation discovered during drying",
        documentation: "Discovery photos showing newly accessed wet areas behind contents.",
        lineItemHint: "Additional manipulation hours, floor protection SF",
      },
      {
        trigger: "Pack-out required for Category 2/3 loss in living areas",
        documentation: "Category notes, contamination photos, inventory, and customer authorization.",
        lineItemHint: "Contents move-out, pack-out labor, storage, reset",
      },
    ],
    relatedResources: [
      {
        label: "Water mitigation supplement playbook",
        href: "/resources/blog/water-damage-mitigation-supplement-playbook",
      },
    ],
  }),

  defineGuide({
    slug: "category-3-water-damage-documentation-guide",
    title: "Category 3 Water Damage Documentation Guide",
    excerpt:
      "Learn how restoration contractors should document Category 3 water losses, including moisture maps, dry logs, equipment usage, demolition scope, photos, daily monitoring, and claim support.",
    category: CATEGORY,
    guideType: "documentation-standard",
    recommended: true,
    roles: ["field", "office", "project-manager"],
    claimPhase: "documentation",
    tags: [
      "Category 3 water damage",
      "water mitigation documentation",
      "water damage claims",
      "dry logs",
      "moisture mapping",
      "mitigation invoice defense",
      "restoration contractors",
    ],
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-11",
    estimatedMinutes: 18,
    seoTitle: "Category 3 Water Damage Documentation Guide",
    seoDescription:
      "Learn the documentation required to support Category 3 water damage claims, justify mitigation invoices, defend drying charges, and improve claim recovery.",
    relatedGuideSlugs: [
      "water-mitigation-invoice-defense-guide",
      "category-class-documentation-guide",
      "mitigation-intake-checklist",
      "moisture-mapping-guide",
      "dry-log-collection-guide",
      "equipment-documentation-guide",
      "daily-monitoring-guide",
      "commercial-water-loss-documentation-guide",
    ],
    relatedBlogSlugs: [
      "why-category-3-water-claims-get-underpaid",
      "why-water-mitigation-claims-get-underpaid",
      "water-damage-mitigation-supplement-playbook",
      "dry-log-documentation-guide-insurance-claims",
      "moisture-mapping-best-practices-insurance-claims",
      "moisture-mapping-mistakes-that-cost-contractors-money",
      "daily-monitoring-documentation-best-practices",
      "how-carriers-reduce-drying-days",
      "equipment-charges-that-get-cut-from-water-claims",
      "documentation-gaps-that-trigger-water-claim-denials",
    ],
    faqIds: [
      "water-category-3-qualifies",
      "water-category-3-documentation-required",
      "water-category-3-invoice-reductions",
      "water-moisture-maps-required",
      "water-moisture-map-contents",
      "water-moisture-reading-frequency",
      "water-dry-log-update-frequency",
      "water-dry-log-contents",
      "water-dry-log-additional-drying-days",
      "water-air-mover-documentation",
      "water-dehumidifier-documentation",
      "water-equipment-charge-reductions",
      "water-containment-documentation",
      "water-hepa-filtration-documentation",
      "water-final-mitigation-package",
      "help-equipment-drying-documentation",
      "resources-water-mitigation-documentation",
      "water-claim-denied-documentation",
      "water-final-drying-verification",
      "water-mitigation-invoice-reductions",
      "water-mitigation-invoice-documentation",
      "water-defend-drying-day-charges",
      "water-mitigation-invoice-review-failures",
    ],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["water-damage", "mitigation"],
    purpose:
      "This guide is built for restoration and mitigation contractors, project managers, and supplement coordinators who document Category 3 (black water) losses for carrier desk review. Strong field and office documentation defends mitigation invoices, drying charges, and supplement scope when carriers scrutinize PPE, disposal, and extended drying lines. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
    whenToUse: [
      {
        condition: "Loss is classified or suspected as Category 3 at intake",
        signal: "Sewage, flooding, or grossly contaminated water source documented on arrival",
      },
      {
        condition: "Demolition, PPE, disposal, or biocide scope is billed on the file",
        signal: "Category-sensitive line items appear on estimate or invoice",
      },
      {
        condition: "Drying and daily monitoring continue on a contaminated loss",
        signal: "Equipment days, visit logs, or monitoring charges are in scope",
      },
      {
        condition: "Carrier or desk reviewer requests mitigation documentation package",
        signal: "Documentation request, underpayment notice, or supplement denial on mitigation lines",
      },
    ],
    prerequisites: [
      "IICRC category and class reference available to field and office teams",
      "Intake photo workflow with timestamps and room labels",
      "Dry log and moisture map templates ready before mobilization",
    ],
    requiredDocumentation: [
      {
        id: "initial-inspection",
        label: "Initial inspection documentation",
        required: true,
        detail:
          "Document arrival conditions, site access, standing water extent, safety hazards, and PPE worn at intake. Record emergency scope performed on day one — extraction, source control, and initial stabilization. Contemporaneous inspection notes establish the file baseline carriers compare to later scope challenges.",
      },
      {
        id: "category-source-documentation",
        label: "Category and source documentation",
        required: true,
        detail:
          "Assign Category 3 with written source identification: sewage backup, toilet overflow, river or exterior flood intrusion, or other grossly contaminated source. Include dwell time, discovery date, and field observations supporting classification. Category-sensitive lines — PPE, disposal, antimicrobial — depend on this documentation at desk review.",
      },
      {
        id: "affected-area-documentation",
        label: "Affected area documentation",
        required: true,
        detail:
          "Inventory every affected room, floor level, and assembly type: carpet, pad, drywall, baseboard, cabinet toe-kicks, subfloor, and structural cavities. Note migration into adjacent rooms, HVAC pathways, or wall cavities. Carriers match billed scope to room count and assembly list — undocumented areas are commonly excluded from payment.",
      },
      {
        id: "photo-documentation",
        label: "Photo documentation",
        required: true,
        detail:
          "Capture a timestamped, labeled photo sequence: water source, contamination indicators, wide room elevations, damage detail, and demolition boundaries before and after removal. Photos are the evidence desk reviewers forward when scope is disputed — unlabeled or post-cleanup images weaken Category 3 arguments.",
      },
      {
        id: "moisture-mapping",
        label: "Moisture mapping",
        required: true,
        detail:
          "Produce a sketch or software map with reading point IDs, baseline moisture values, meter type, and material tested at each point. Tie reading locations to room names matching the carrier sketch. Strong intake maps support room count, hidden moisture scope, and equipment placement — not template drying macros.",
      },
      {
        id: "dry-logs-daily-monitoring",
        label: "Dry logs and daily monitoring",
        required: true,
        detail:
          "Record daily atmospheric readings, material moisture values, visit purpose, technician name, and drying goal status on every monitoring trip. Note plateaus, regressions, or equipment changes that extend drying duration. Dry logs are the primary evidence carriers use to evaluate monitoring visits and equipment days — gaps between entries are a common reason charges are reduced.",
      },
      {
        id: "equipment-documentation",
        label: "Equipment documentation",
        required: true,
        detail:
          "Photograph equipment placement in each affected room. Log unit types, counts per room, runtime, and any moves or additions during the drying project. Equipment documentation supports dehumidifier and air mover line items when carriers question utilization or billed days.",
      },
      {
        id: "demolition-removal-documentation",
        label: "Demolition and removal documentation",
        required: true,
        detail:
          "Document remove-and-dispose activities with before-and-after photos, bag-out quantities, and PPE usage on contaminated materials. Record linear or square footage of demolition and hazardous disposal where applicable. Use labeled bag-and-seal procedures — bags marked by room, quantities logged, and removal routed through a clean path without dragging contaminated materials through unaffected zones. Attach hauler receipt or waste manifest when billing hazardous or bio waste disposal lines. Category 3 demo and disposal lines require field proof — narrative without quantities is frequently challenged at invoice review.",
      },
      {
        id: "cleaning-contamination-control",
        label: "Cleaning and contamination-control documentation",
        required: true,
        detail:
          "Record antimicrobial or biocide application with product name, dwell time, and application method on affected surfaces. Document PPE worn during cleaning — gloves, eye protection, and respirator appropriate to contamination level. Photograph containment barrier type, zipper doors, negative air exhaust routing, and HEPA air scrubber placement. Log HEPA vacuuming areas and air scrubber runtime on the dry log. Contamination-control scope must align with field notes and estimate lines — undocumented cleaning is often stripped on Category 3 files.",
      },
      {
        id: "final-dry-standard-verification",
        label: "Final dry-standard verification",
        required: true,
        detail:
          "Capture terminal moisture readings against the established dry standard for each reading point. Record equipment pull date, clearance notes, and final condition photos. Terminal documentation closes drying duration arguments and supports final mitigation invoice submission when carriers audit project closeout.",
      },
    ],
    steps: [
      {
        id: "what-is-category-3-water-damage",
        title: "What Is Category 3 Water Damage?",
        actions: [
          "Category 3 water is grossly contaminated — common sources include sewage backups, toilet overflows, river or exterior flood intrusion, and standing water with unknown contaminant load.",
          "Category 3 losses drive contractor scope beyond standard drying: enhanced PPE, remove-and-dispose of porous materials, antimicrobial or biocide application, bag-out procedures, and hazardous disposal lines.",
          "Category 3 is not a retroactive label. Assign classification at intake with source notes and photos before demolition, cleaning, or drying alter conditions carriers need to review.",
          "Field classification should be based on source type, visible contamination, odor indicators, and affected material porosity — not homeowner descriptions alone.",
        ],
      },
      {
        id: "why-documentation-determines-claim-recovery",
        title: "Why Documentation Determines Claim Recovery",
        actions: [
          "Carriers approve scope they can forward internally. Contemporaneous photos, dry logs, moisture maps, and classification notes outperform narrative assembled after equipment pull.",
          "Category 3 line items — PPE, disposal, demolition, antimicrobial treatment, and extended drying — are frequent desk-review targets. Weak evidence leads to reduced equipment days, cut monitoring visits, and disputed mitigation charges.",
          "Documentation connects production to estimate line items. The organized claim file your office submits is the recovery mechanism — not the invoice total by itself.",
          "Structured claim packets support supplements and resubmission when carriers underpay, partially approve, or request additional evidence on contaminated losses.",
        ],
      },
      {
        id: "industry-standards-iicrc-considerations",
        title: "Industry Standards and IICRC Considerations",
        actions: [
          "ANSI/IICRC S500 is the recognized industry reference for water damage restoration categories, classes of water, and mitigation procedures used across the restoration trade.",
          "Use S500 terminology in field notes, dry logs, and estimate narratives so office staff and carrier reviewers reference the same classification language.",
          "Category and class assignments should align with documented water source, dwell time, material porosity, and the equipment and drying assumptions on the file.",
          "Coverage decisions and policy interpretation remain between the policyholder and carrier. The contractor's operational role is defensible documentation of field scope and production performed.",
        ],
        notes:
          "ANSI/IICRC S500 is an industry reference for restoration practice — not legal advice, coverage authority, or a guarantee of carrier approval.",
      },
      {
        id: "core-documentation-category-3-claims",
        title: "Core Documentation Required for Category 3 Water Claims",
        owner: "office",
        actions: [
          "Build a claim file index that ties intake inspection, Category 3 classification, moisture maps, dry logs, photos, demolition records, and closeout readings into one organized packet.",
          "Cross-reference every billed line item to supporting field evidence — PPE, disposal, antimicrobial, equipment days, and monitoring visits should each trace to a document in the file.",
          "Submit documentation while drying is active when carriers request evidence — waiting until rebuild weakens mitigation-only arguments on contaminated losses.",
          "A complete file supports invoice review, supplement filing, and resubmission when scope is challenged — organized documentation strengthens recovery arguments but does not guarantee carrier payment.",
        ],
        notes:
          "Sample claim file index: 01_Intake — source photos, classification memo, emergency scope; 02_Affected_Areas — room inventory and migration notes; 03_Moisture_Map — baseline map and dated revisions; 04_Daily_Logs — chronological entries through closeout; 05_Equipment — placement photos indexed by visit date; 06_Demo_Disposal — before/after demo, bag-out log, hauler ticket; 07_Contamination_Control — containment setup, biocide records, HEPA vac notes; 08_Closeout — terminal readings, equipment pull date, clearance photos. Use as a folder pattern your office can replicate — not a guarantee of carrier approval.",
      },
      {
        id: "photo-documentation-standards",
        title: "Photo Documentation Standards",
        owner: "field",
        actions: [
          "Label every photo with room name, date, and sequence position matching the carrier sketch and internal job file naming.",
          "Capture the required sequence at intake and during production: water source, contamination indicators, wide room elevations, damage detail, demolition boundaries, equipment placement, and closeout condition.",
          "Photograph daily during active mitigation — single end-of-job photo dumps are difficult for desk reviewers to reconcile with multi-day scope.",
          "Photos are the primary evidence carriers and third-party reviewers forward when Category 3 scope is disputed — unlabeled or post-cleanup images weaken invoice support.",
        ],
        notes:
          "Sample photo label convention: YYYY-MM-DD | ROOM | View/Detail | Phase — e.g. 2026-06-08 | Kitchen | Elevation-N | Pre-demo; 2026-06-10 | MBR | Equipment-layout | Day-3. Match room names to the carrier sketch and job-management export folders.",
      },
      {
        id: "moisture-mapping-requirements",
        title: "Moisture Mapping Requirements",
        owner: "field",
        actions: [
          "Assign reading point IDs at intake and use the same IDs on every subsequent visit through project closeout.",
          "Record baseline moisture values at each point before equipment is set — post-drying baselines cannot support initial scope arguments.",
          "Document hidden and cavity moisture: wall cavities, subfloor assemblies, cabinet voids, and HVAC pathways that expand room count beyond visible standing water.",
          "Reconcile the moisture map to the carrier sketch and estimate room list — maps help desk reviewers evaluate scope beyond template drying macros.",
        ],
      },
      {
        id: "dry-log-documentation-standards",
        title: "Dry Log Documentation Standards",
        owner: "field",
        actions: [
          "Complete a dry log entry on every active drying day while equipment is running — no gaps between monitoring visits.",
          "Record atmospheric readings, material moisture values at all active map points, and equipment type/count rows on each log entry.",
          "Add a progress narrative when readings plateau, regress, or require equipment changes — explain why drying duration extends beyond initial estimates.",
          "Dry logs are the primary evidence carriers use to evaluate equipment days and monitoring charges — incomplete logs are a common reason mitigation invoices are reduced at review.",
        ],
        notes:
          "Sample dry-log narrative: Visit 4 — MBR-1 drywall 18.2% MC (prior 19.1%), plateau noted at baseboard cavity. Added 1 air mover; containment and negative air maintained. Chamber active — continue drying.",
      },
      {
        id: "equipment-documentation-standards",
        title: "Equipment Documentation Standards",
        owner: "field",
        actions: [
          "Photograph equipment placement in each affected room on initial set and after every move, addition, or removal.",
          "Log unit types and counts per room on the dry log — air movers, dehumidifiers, air scrubbers, and specialty units should match billed quantities.",
          "Align runtime and on-site days to billed equipment lines — desiccant and commercial drying projects require additional environmental readings per carrier program.",
          "Equipment documentation defends dehumidifier and air mover charges when carriers or reviewers question utilization on Category 3 files.",
        ],
      },
      {
        id: "daily-monitoring-best-practices",
        title: "Daily Monitoring Best Practices",
        owner: "field",
        actions: [
          "Document visit purpose on every monitoring trip — routine reading, equipment adjustment, partial release, or closeout evaluation.",
          "Record technician name, date, and drying goal status for each active chamber before leaving the property.",
          "Note decisions to extend drying, add equipment, or release chambers with readings that support the change — contemporaneous notes beat retroactive explanations.",
          "Daily monitoring documentation supports billed visit lines and supplement scope when drying duration exceeds the carrier's initial template.",
        ],
      },
      {
        id: "documentation-category-3-demolition",
        title: "Documentation for Category 3 Demolition",
        owner: "field",
        actions: [
          "Photograph affected materials before and after remove-and-dispose — carpet, pad, drywall, baseboard, and cabinetry at Category 3 contamination boundaries.",
          "Record bag-out quantities, hazardous disposal volume, and PPE worn during removal — link quantities to estimate demo and disposal lines.",
          "Document which porous materials were deemed unsalvageable and removed per Category 3 protocol — narrative should reference intake classification evidence.",
          "Cross-reference bag-out log entries to hazardous disposal and detach-and-bag line items on the estimate — quantities in the file should match billed disposal lines.",
          "Demolition documentation supports hazardous disposal, detach-and-bag, and remove-and-dispose line items when carriers challenge Category 3 demo scope.",
        ],
      },
      {
        id: "category-3-contamination-ppe-hepa-disposal",
        title: "Category 3 Contamination, PPE, HEPA, and Disposal Documentation",
        owner: "field",
        actions: [
          "Photograph PPE worn during removal versus monitoring visits — gloves, eye protection, and respirator appropriate to contamination level at demo and cleaning phases.",
          "Document containment setup with dated photos: poly barriers, zipper doors, negative air exhaust routing, and isolation of affected chambers from clean zones.",
          "Log HEPA air scrubber placement, unit count, and runtime on the dry log — photograph scrubbers in frame with chamber boundaries visible.",
          "Record bag-and-seal procedures: labeled bags per room, quantity per bag-out, and removal path that avoids dragging contaminated materials through unaffected areas.",
          "Attach hauler receipt or waste manifest when billing hazardous or bio waste disposal — link ticket quantities to bag-out log and estimate disposal lines.",
          "On mixed losses, document Category 3 zone boundaries when adjacent rooms remain Category 1 or 2 — boundary readings and containment perimeters support protocol scope.",
        ],
      },
      {
        id: "defending-category-3-protocols",
        title: "Defending Category 3 Protocols",
        owner: "office",
        actions: [
          "When carriers or third-party reviewers challenge PPE, biocide, demolition, or drying protocols, resubmit the intake classification packet with photos, logs, and line-item cross-reference.",
          "Tie field procedures to S500-aligned terminology in the estimate narrative — reviewers evaluate whether production matches the documented category assignment.",
          "Package supplements when intake evidence proves scope gaps between field conditions and the carrier estimate — submit before production absorbs under-scoped work.",
          "Claims Ninja supports contractors with documentation review, supplement preparation, estimate comparison, and claim recovery workflows — not carrier representation, public adjusting, or legal counsel.",
        ],
        notes:
          "Strong documentation supports Category 3 protocol arguments at desk review — outcomes depend on carrier program, file specifics, and evidence quality.",
      },
    ],
    qualityGates: [
      {
        id: "intake-classification-locked",
        label: "Category 3 assigned with source photos before category-sensitive billing",
        required: true,
        detail:
          "Classification memo and source photos timestamped at or before first PPE, disposal, antimicrobial, or biocide line is billed.",
      },
      {
        id: "map-sketch-room-parity",
        label: "Moisture map room names and point IDs match sketch, logs, and estimate",
        required: true,
        detail:
          "Every wet room on the map appears on the carrier sketch and estimate room list; point IDs are identical across map and dry log entries.",
      },
      {
        id: "dry-log-day-parity",
        label: "One dry log entry per billed equipment or monitoring day",
        required: true,
        detail:
          "Each billed air mover, dehumidifier, or monitoring day has a same-calendar-date log entry with readings — no gaps across weekends or holidays.",
      },
      {
        id: "photo-label-sequence",
        label: "Timestamped, room-labeled photo sequence through production",
        required: true,
        detail:
          "Intake through closeout photos carry room name, date, and phase labels matching the carrier sketch naming convention.",
      },
      {
        id: "equipment-log-reconciled",
        label: "Peak photo count and log rows match billed units before invoice",
        required: true,
        detail:
          "Office reconciliation confirms peak equipment count in photos and dry log matches billed units and days before carrier submission.",
      },
      {
        id: "containment-ppe-filtration",
        label: "Containment, PPE, and HEPA or negative air setup documented with photos",
        required: true,
        detail:
          "Containment barriers, PPE during removal, and air scrubber or negative air placement appear in dated photos with procedural notes on the log or job file.",
      },
      {
        id: "disposal-records-complete",
        label: "Bag-out quantities, demo before/after, and hauler ticket when applicable",
        required: true,
        detail:
          "Bag-out log, demolition before/after photos, and hauler receipt or waste manifest attached when hazardous or bio waste disposal lines are billed.",
      },
      {
        id: "terminal-readings-before-pull",
        label: "Release readings and equipment pull date logged before final billing",
        required: true,
        detail:
          "Terminal moisture readings at all active map points, equipment pull date, and clearance photos captured before final mitigation invoice submission.",
      },
    ],
    commonMistakes: [
      {
        mistake: "Missing or inconsistent dry logs",
        impact:
          "Gaps between monitoring visits give desk reviewers reason to reduce equipment days and cut billed monitoring charges on Category 3 files.",
        correction:
          "Complete a dry log entry on every active drying day with atmospheric readings, material moisture values, and equipment rows using consistent point IDs from intake.",
      },
      {
        mistake: "Moisture maps that do not match the invoice",
        impact:
          "When map room names or reading points do not align with the carrier sketch and estimate, affected rooms and hidden moisture scope are commonly excluded from payment.",
        correction:
          "Reconcile the moisture map to the estimate room list at intake and update the map when new wet areas are discovered during demolition or drying.",
      },
      {
        mistake: "Photos that do not prove affected materials or equipment usage",
        impact:
          "Unlabeled, undated, or post-cleanup photos fail to support material removal scope and equipment utilization — both are frequent reduction targets on contaminated losses.",
        correction:
          "Capture a labeled, timestamped photo sequence at intake and daily during production: source, contamination, materials, equipment placement, and closeout condition.",
      },
      {
        mistake: "Unsupported drying days",
        impact:
          "When plateau or regression readings are not documented, carriers reduce drying duration and remove extended equipment charges without contemporaneous evidence to defend.",
        correction:
          "Add a progress narrative to the dry log whenever drying extends beyond initial estimates — explain readings, equipment changes, and why additional days are necessary.",
      },
      {
        mistake: "Equipment charges without placement, dates, or room justification",
        impact:
          "Dehumidifier and air mover lines billed without per-room placement proof are commonly removed proportionally at invoice review.",
        correction:
          "Photograph equipment placement on initial set and after every move. Log unit types, counts, and room assignments on the dry log for each billed day.",
      },
      {
        mistake: "Demolition scope without contamination or removal support",
        impact:
          "Remove-and-dispose and hazardous disposal lines on Category 3 files are denied when demo narrative lacks before/after photos and intake classification evidence.",
        correction:
          "Photograph materials before and after removal. Tie demo quantities to Category 3 classification notes and bag-out records from intake through closeout.",
      },
      {
        mistake: "Category 3 procedures without containment, PPE, or filtration documentation",
        impact:
          "PPE, containment barrier, HEPA filtration, and negative air lines are stripped when field procedures are billed without setup photos and procedural notes.",
        correction:
          "Document containment installation, PPE worn during removal, and air scrubber placement with dated photos and narrative on the dry log or job notes.",
      },
      {
        mistake: "Final dry-standard verification missing or incomplete",
        impact:
          "Terminal moisture readings and equipment pull dates omitted from the file invite closeout disputes and weaken final mitigation invoice submission.",
        correction:
          "Record terminal readings at all active map points against the dry standard, document equipment pull date, and capture clearance photos before final billing.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier estimate or initial approval under-scopes drying duration on a Category 3 loss",
        documentation:
          "Dry logs showing moisture plateau or regression, extended monitoring visit records, and progress narrative explaining why additional drying days beyond the carrier template are necessary.",
        lineItemHint: "Additional drying days, daily monitoring visits, extended equipment rental",
      },
      {
        trigger: "Field conditions require equipment additions mid-job not reflected on carrier estimate",
        documentation:
          "Updated moisture map, placement photos showing added units, and dry log equipment rows documenting the date and reason for each addition.",
        lineItemHint: "Additional air movers, dehumidifiers, air scrubbers, desiccant equipment",
      },
      {
        trigger: "Carrier estimate omits Category 3 demolition and porous material removal scope",
        documentation:
          "Intake Category 3 classification photos, before-and-after demolition images, bag-out quantities, and hazardous disposal records tied to remove-and-dispose line items.",
        lineItemHint: "Remove and dispose, hazardous material disposal, detach and bag contaminated materials",
      },
      {
        trigger: "Carrier estimate omits HEPA filtration, containment, or negative air on contaminated loss",
        documentation:
          "Containment barrier photos, air scrubber placement images, negative air setup notes, and drying log entries showing filtration equipment runtime.",
        lineItemHint: "HEPA air scrubber, containment barriers, negative air exhaust, equipment setup",
      },
      {
        trigger: "Carrier estimate omits cleaning and contamination-control labor on Category 3 scope",
        documentation:
          "Antimicrobial or biocide application records, HEPA vacuuming notes, detailed cleaning procedure narrative, and photos of treated surfaces before rebuild.",
        lineItemHint: "Antimicrobial treatment, HEPA vacuum, detailed cleaning, apply biocide",
      },
      {
        trigger: "Documentation is complete but carrier underpaid or partially approved mitigation scope",
        documentation:
          "Organized claim index cross-referencing photos, maps, logs, and demo records to each disputed line item — packaged for supplement submission and desk review resubmission.",
        lineItemHint:
          "Supplement submission with line-item justification narrative; Claims Ninja supports estimate review, documentation review, supplement preparation, and claim recovery workflows",
      },
    ],
    faq: [
      {
        question: "What photos should contractors take during Category 3 mitigation?",
        answer:
          "Capture a timestamped, room-labeled sequence at intake and daily during active production: water source, contamination indicators, wide room elevations, damage detail, demolition boundaries before and after removal, equipment placement, and closeout condition. Label every photo with room name and date matching the carrier sketch and internal job file naming. Single end-of-job photo dumps are difficult for desk reviewers to reconcile with multi-day Category 3 scope — daily labeled sequences outperform post-cleanup galleries.",
      },
      {
        question: "What documentation supports demolition scope?",
        answer:
          "Before-and-after photos at Category 3 contamination boundaries, bag-out quantities, PPE worn during removal, and linear or square footage of demolished assemblies. Tie porous material removal to intake classification notes — carpet, pad, drywall, baseboard, and cabinetry deemed unsalvageable per Category 3 protocol. Narrative without quantities or photos is frequently challenged on remove-and-dispose and hazardous disposal lines at invoice review.",
      },
      {
        question: "How do contractors justify Category 3 safety procedures?",
        answer:
          "Document containment installation, PPE worn during removal, HEPA filtration, and negative air setup with dated photos and procedural notes on the dry log or job file. Tie field procedures to intake Category 3 classification and S500-aligned terminology in the estimate narrative so reviewers can evaluate whether production matches the documented category assignment. When carriers challenge protocols, resubmit the intake classification packet with photos, logs, and line-item cross-reference rather than adding narrative only at invoice.",
      },
      {
        question: "Can better documentation help support supplement recovery?",
        answer:
          "Organized documentation strengthens supplement and resubmission arguments when field scope exceeds the carrier estimate — photos, maps, logs, and classification notes cross-referenced to disputed line items help desk reviewers evaluate gaps without treating scope as narrative inflation. File supplements when intake evidence proves under-scoped work before production absorbs unpaid labor. Claims Ninja supports contractors with documentation review, supplement preparation, and claim recovery workflows — outcomes still depend on carrier program, file specifics, and evidence quality.",
      },
    ],
    relatedResources: [
      { label: "Claims Ninja platform", href: "/platform" },
      { label: "Pricing", href: "/pricing" },
    ],
  }),

  COMMERCIAL_WATER_LOSS_DOCUMENTATION_GUIDE,
  WATER_MITIGATION_INVOICE_DEFENSE_GUIDE,
] as const satisfies readonly Guide[];
