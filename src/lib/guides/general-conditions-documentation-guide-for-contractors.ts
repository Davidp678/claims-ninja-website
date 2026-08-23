import { defineGuide } from "@/lib/guides/guide-builder";

const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "general-conditions-documentation-guide-for-contractors" as const;
const GUIDE_PATH = `/resources/guides/${CATEGORY}/${GUIDE_SLUG}` as const;

export const GENERAL_CONDITIONS_DOCUMENTATION_GUIDE_FOR_CONTRACTORS = defineGuide({
  slug: GUIDE_SLUG,
  title: "General Conditions Documentation Guide for Contractors",
  excerpt:
    "Operational guide for documenting project-level general conditions on restoration and insurance-related construction work — supervision, trade coordination, temporary protection, site logistics, temporary facilities, and project duration — with records that connect actual site conditions to the estimate under review.",
  category: CATEGORY,
  guideType: "documentation-standard",
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "General conditions documentation",
    "Restoration general conditions",
    "Construction general conditions documentation",
    "Insurance estimate general conditions",
    "Contractor project supervision documentation",
    "Restoration project coordination",
    "Commercial restoration general conditions",
    "Site logistics documentation",
    "Project duration records",
    "Estimate review",
    "Restoration contractors",
    "Commercial contractors",
  ],
  publishedAt: "2026-08-23",
  updatedAt: "2026-08-23",
  estimatedMinutes: 28,
  seoTitle: "General Conditions Documentation Guide for Contractors",
  seoDescription:
    "Document project-level general conditions on restoration work: supervision, trade coordination, temporary protection, site logistics, temporary facilities, and duration — with checklists that connect actual conditions to the estimate under review.",
  relatedGuideSlugs: [
    "insurance-estimate-review-playbook-for-contractors",
    "insurance-estimate-review-scope-validation-guide",
    "op-qualification-guide",
    "missing-line-item-documentation-guide-for-contractors",
    "scope-audit-guide-for-contractors",
    "quantity-validation-guide-for-contractors",
    "documentation-standards-guide",
    "carrier-estimate-review-guide",
    "claim-file-audit-guide",
    "supplement-submission-guide",
    "commercial-insurance-supplement-playbook-for-contractors",
    "commercial-insurance-claims-documentation-guide",
    "large-loss-commercial-insurance-claims-guide",
    "photo-documentation-standards-guide",
    "first-48-hours-checklist",
    "multifamily-apartment-insurance-claims-guide",
    "hoa-insurance-claims-guide",
    "retail-office-insurance-claims-guide",
    "industrial-warehouse-insurance-claims-guide",
    "roofing-documentation-guide",
    "category-3-water-damage-documentation-guide",
    "fire-damage-documentation-guide",
    "mold-damage-documentation-guide",
    "commercial-roofing-documentation-guide",
    "commercial-water-loss-documentation-guide",
    "commercial-fire-claims-guide",
    "commercial-mold-claims-guide",
  ],
  relatedBlogSlugs: [
    "most-overlooked-line-items-in-insurance-estimates",
    "five-red-flags-that-an-insurance-estimate-is-missing-scope",
    "how-contractors-find-quantity-errors-in-insurance-estimates",
    "why-carrier-estimates-miss-required-trades",
    "op-on-insurance-claims",
    "commercial-claims-documentation-checklist",
    "why-commercial-insurance-claims-get-underpaid",
    "first-48-hours-after-carrier-estimate",
    "xactimate-estimate-review-checklist-contractors",
    "insurance-supplementing-guide-contractors",
  ],
  faqIds: [
    "general-conditions-documentation",
    "documenting-project-supervision",
    "documenting-trade-coordination",
    "documenting-project-duration",
  ],
  claimTypes: ["roofing", "water", "fire", "mold", "commercial", "large-loss"],
  purpose:
    "This guide is the specialty authority for documenting project-level general conditions inside the Estimate Review & Scope Validation cluster. The Insurance Estimate Review & Scope Validation Guide teaches estimate anatomy and what to validate. The Insurance Estimate Review Playbook is the operational hub for the full receive-to-settlement workflow. Quantity Validation verifies measurement accuracy. The Scope Audit Guide tests completeness of work. The Missing Line Item Documentation Guide packages omitted direct-repair exhibits after gaps are identified. This resource goes deep on a different question: when project-level general conditions are legitimately required by actual site conditions, what records should a contractor maintain so supervision, trade coordination, temporary protection, logistics, temporary facilities, and duration can be traced to the estimate under review. General conditions do not apply automatically to every claim, and projects do not share a universal general-conditions list. General conditions and overhead & profit are not interchangeable — use the O&P Qualification Documentation Standard when the question is O&P eligibility, not project-level operational records. Pair this guide with Documentation Standards for evidence capture, Claim File Audit and Supplement Submission for packaging, the Commercial Insurance Supplement Playbook and Commercial Insurance Claims Documentation Guide on commercial files, and the Large-Loss Commercial Insurance Claims Guide on multi-building or campus work. Claims Ninja supports contractors with documentation standards, estimate review workflows, supplement packaging, and claim recovery operations — we are not a public adjuster, carrier representative, or legal counsel. This guide does not provide estimating software instruction, legal advice, policy interpretation, coverage determinations, payment-entitlement statements, engineering opinions, or public-adjusting guidance.",
  whenToUse: [
    {
      condition:
        "Field conditions show project-level operational work that is not the same as a direct repair line",
      signal:
        "Supervision, coordination, protection, logistics, or temporary facilities appear in daily reports but are not organized against the estimate version under review",
    },
    {
      condition:
        "Multi-trade restoration requires documented coordination, sequencing, or site meetings",
      signal:
        "Mitigation, demolition, roofing, mechanical, or finish trades overlap on the same site without a coordination record",
    },
    {
      condition:
        "Occupied, restricted, or commercial sites create logistics that affect how work is performed",
      signal:
        "Access windows, staging limits, elevators, loading, parking, or tenant constraints are known on site but not recorded",
    },
    {
      condition:
        "Project duration, phases, or temporary support must be tied to contemporaneous records",
      signal:
        "Start/end dates, phase changes, or temporary facilities exist without logs, photos, or duration notes",
    },
    {
      condition:
        "Final QC is required before general-conditions records enter an estimate or supplement workflow",
      signal:
        "Packet nearly ready but boilerplate language, missing duration, or weak condition-to-activity mapping still fail desk-review standards",
    },
  ],
  prerequisites: [
    "Current estimate version under review, with claim number and risk address noted on the file",
    "Area or location index that can be reused on photos, logs, and project-level exhibits",
    "Contemporaneous project records — daily reports, photos, or schedules — for the period being documented",
    "Clear separation between project-level operational activities and direct repair assemblies already on the estimate",
    "Documentation Standards labeling so names and dates match across folders and the estimate",
  ],
  requiredDocumentation: [
    {
      id: "estimate-version-under-review",
      label: "Estimate version under review",
      required: true,
      detail:
        "Cite claim number, risk address, and estimate version on every general-conditions exhibit set so records stay traceable if the estimate is revised.",
    },
    {
      id: "project-conditions-notes",
      label: "Project-conditions notes reflecting actual site conditions",
      required: true,
      detail:
        "Size, occupancy, access, trades, safety, protection, and logistics as observed — not a copied boilerplate list from another job.",
    },
    {
      id: "project-logs-daily-reports",
      label: "Project logs or daily reports",
      required: true,
      detail:
        "Dated entries for supervision, coordination, protection, logistics, and duration. Same-day notes outperform reconstructed narratives.",
    },
    {
      id: "labeled-site-photographs",
      label: "Labeled site photographs",
      required: true,
      detail:
        "Overview and detail photos of protection in place, staging, access constraints, temporary facilities, and site conditions — with date and location labels.",
    },
    {
      id: "schedule-or-timeline",
      label: "Schedule, phase plan, or project timeline",
      required: true,
      detail:
        "Start/end dates, phases, and trade order sufficient to explain duration and coordination. Update when sequencing changes.",
    },
    {
      id: "supervision-records",
      label: "Supervision records when supervision actually occurred",
      required: false,
      detail:
        "PM or superintendent logs, site-meeting notes, and scheduling records tied to dates and areas — not a generic supervision assumption.",
    },
    {
      id: "trade-coordination-records",
      label: "Trade coordination records on multi-trade files",
      required: false,
      detail:
        "Meeting notes, trade schedules, subcontractor records, and sequencing notes that show what coordination actually occurred.",
    },
    {
      id: "logistics-and-access-records",
      label: "Site logistics and access records when constraints exist",
      required: false,
      detail:
        "Photos and notes of restricted access, staging, elevators, loading, parking, occupied-building rules, and material-handling paths.",
    },
    {
      id: "temporary-facilities-records",
      label: "Temporary facilities or project-support records when used",
      required: false,
      detail:
        "What was required, why, duration, location, and supporting invoices, tickets, or photos — only for infrastructure that actually existed.",
    },
    {
      id: "invoices-receipts-subs",
      label: "Invoices, receipts, and subcontractor records when they support a documented activity",
      required: false,
      detail:
        "Tickets and invoices should reconcile to dated logs and photos. Office totals without placement or duration notes are weak support.",
    },
    {
      id: "correspondence-and-changes",
      label: "Correspondence and change documentation when conditions changed",
      required: false,
      detail:
        "Owner, property-manager, or trade communications and change notes that explain duration, access, or sequencing shifts.",
    },
    {
      id: "condition-activity-index",
      label: "Condition → activity → documentation → estimate index",
      required: true,
      detail:
        "One index row per documented project-level activity: site condition, activity performed, record refs, duration, and the estimate section it supports.",
    },
  ],
  steps: [
    {
      id: "what-general-conditions-are",
      title: "What General Conditions Are",
      actions: [
        "General conditions are project-level operational requirements that make restoration or insurance-related construction runnable — they are not the same as the direct repair activities that restore a damaged assembly.",
        "Direct repair is the work on the damaged component: tear-out, drying, roofing, electrical, drywall, flooring, paint. General conditions are the surrounding operational layer: supervision, coordination, temporary protection, logistics, temporary facilities, and the time those activities occupy.",
        "Speak in contractor language: what the site required to mobilize, protect, sequence trades, move materials, and stay on the job — not a universal list of insurance-payable items.",
        "Do not treat general conditions as automatic on every claim. A short single-trade visit may have little project-level operational record to keep. A multi-week, multi-trade, occupied, or commercial file often has more.",
        "This guide documents activities that actually occurred. It does not decide coverage, entitlement, or what any policy must pay.",
      ],
      notes:
        "Keep general conditions and direct repair scope in separate documentation tracks so the same activity is not described twice as both a finish line and a project-level charge.",
    },
    {
      id: "why-general-conditions-vary",
      title: "Why General Conditions Vary by Project — Project Conditions Checklist",
      actions: [
        "Record project size and footprint: single room, whole dwelling, multi-unit, multi-building, or campus. Size changes how much coordination, protection, and logistics the file should show.",
        "Record project duration: start date, expected phases, and actual calendar. Duration is a documentation variable, not a coverage conclusion.",
        "Record occupancy: vacant, owner-occupied, tenant-occupied, after-hours only, or mixed. Occupied work creates different supervision, protection, and access records than vacant work.",
        "Record the number of trades and whether they overlap: mitigation, demolition, roofing, electrical, plumbing, HVAC, drywall, flooring, painting, and specialty trades.",
        "Record site constraints and access: tight lots, limited staging, restricted parking, elevator rules, loading docks, and path-of-travel protection.",
        "Record safety, temporary protection, and project-coordination requirements that actually applied — then write what you observed, not a copied conditions paragraph from another job.",
        "Commercial and multifamily complexity, sequencing, and logistics belong on this checklist only when they existed on this project.",
      ],
      notes:
        "Documentation should reflect actual project conditions. A boilerplate general-conditions narrative that could apply to any job is a common credibility failure.",
    },
    {
      id: "project-supervision",
      title: "Project Supervision — Supervision Documentation Checklist",
      owner: "project-manager",
      actions: [
        "Document supervision only where supervision actually occurred. Do not imply that a supervision record automatically supports a particular charge.",
        "Keep project logs with date, person or role on site, areas visited, and decisions made that day.",
        "Record scheduling activity: trade start dates, hold points, inspection windows, and changes to the plan.",
        "Record trade coordination performed by the supervisor: who was sequenced, what conflict was resolved, and which area was affected.",
        "Keep site-meeting notes when meetings happened — attendees, topics, and follow-ups — rather than a generic “weekly meeting” claim without dates.",
        "Maintain progress records and daily documentation that show the job moving through phases, not a single end-of-job summary.",
        "Tie supervision records to project duration so reviewers can see when oversight was active and when it was not.",
      ],
      notes:
        "Supervision documentation is a record of activity. It is not a coverage argument and it is not a substitute for O&P qualification evidence.",
    },
    {
      id: "trade-coordination",
      title: "Trade Coordination — Trade Coordination Checklist",
      owner: "project-manager",
      actions: [
        "Multi-trade restoration creates coordination requirements when trades must share access, wait on predecessors, or protect each other’s work. Document the coordination that occurred — not a theoretical trade list.",
        "Walk the actual sequence among mitigation, demolition, roofing, electrical, plumbing, HVAC, drywall, flooring, painting, and specialty trades when those trades were on this job.",
        "Record who was on site, which area they occupied, what they waited on, and what they handed off. Meeting notes and daily reports beat a narrative written after closeout.",
        "Photograph or note protection and access changes that exist only because another trade is working — for example, floor protection while roofing is open, or isolation while mitigation equipment is running.",
        "Keep subcontractor records and schedules aligned to the same area IDs as photos and the estimate.",
        "If the question is whether required trades are missing from the estimate, use the Scope Audit Guide and Missing Line Item Documentation Guide. This checklist documents coordination activity that occurred, not omitted-repair exhibits.",
      ],
      notes:
        "Trade sequencing used to find omitted work is a different task from documenting coordination that already happened. Keep those files labeled separately.",
    },
    {
      id: "temporary-protection",
      title: "Temporary Protection",
      owner: "field",
      actions: [
        "Document legitimate project-protection activities that actually occurred: containment, temporary coverings, protection of unaffected areas, weather protection, and access-path protection.",
        "Photograph protection in place — overview and detail — with date and location labels before it is removed.",
        "Note when protection was installed, why site conditions required it, how long it remained, and when it was removed.",
        "Describe activities generically and operationally. Do not present a universal list of compensable protection items.",
        "Update photos if protection is maintained across multiple days; a single first-day photo understates ongoing protection.",
        "Index protection records to the estimate section they support. Temporary protection that is itself omitted as a repair line still uses the Missing Line Item Documentation Guide for exhibit packaging.",
      ],
    },
    {
      id: "site-logistics-and-access",
      title: "Site Logistics and Access — Site Logistics Checklist",
      owner: "project-manager",
      actions: [
        "Record restricted access: locked hours, escort requirements, occupied corridors, or limited roof and yard access.",
        "Record staging constraints: where materials and debris could sit, and where they could not.",
        "Record occupied-building conditions: tenant operations, after-hours windows, noise or dust limits, and protection of public or common paths.",
        "Record multi-story movement: stairs, elevators, hoist rules, and floor-by-floor material handling.",
        "Record loading areas, parking, and access restrictions that changed how crews and materials arrived.",
        "On commercial files, record tenant considerations that affected logistics — without turning this step into a commercial-supplement playbook. Use the Commercial Insurance Claims Documentation Guide and Commercial Insurance Supplement Playbook for commercial workflow depth.",
        "Photograph the constraint and write the operational effect the same day. A logistics claim without a photo or dated note is weak support.",
      ],
    },
    {
      id: "temporary-facilities",
      title: "Temporary Facilities / Project Support",
      actions: [
        "Some projects require project-support infrastructure. Document only what was required on this job — not a universal facilities checklist treated as automatically payable.",
        "For each facility or support item that existed, record what it was, why site conditions required it, how long it remained, and where it sat.",
        "Keep supporting records: photos in place, tickets, invoices, or daily presence notes that reconcile to the same dates and location IDs.",
        "Do not bundle undocumented facilities into a single unexplained lump. Reviewers cut unsupported blocks first.",
        "If a facility was never used, do not document it as if it was.",
      ],
    },
    {
      id: "project-duration",
      title: "Project Duration — Duration Documentation Checklist",
      actions: [
        "Record start and end dates for the project and for each documented phase.",
        "Record sequencing and trade schedules so duration can be understood as calendar time plus trade order — not a single unexplained total.",
        "When duration changed because of documented project conditions — access limits, occupancy, weather protection, or trade holds — write the condition, the date, and the operational effect.",
        "Keep daily or project logs that show presence and activity across the calendar. Gaps in the log should remain gaps; do not backfill fictional days.",
        "Do not interpret delay coverage, extra-expense coverage, or policy time limits. Duration records support operational review of project-level activities.",
        "If the dispute is equipment days or measured quantities, hand measurement depth to the Quantity Validation Guide. This checklist is for project-level duration of operational activities.",
      ],
      notes:
        "Duration documentation explains when project-level activities occurred. It is not an argument that a policy owes delay damages.",
    },
    {
      id: "commercial-and-large-loss",
      title: "Commercial and Large-Loss Considerations",
      actions: [
        "General-conditions documentation becomes more complex when the site is multifamily, HOA, retail, office, industrial, warehouse, large-loss, occupied commercial, or spread across multiple buildings and trades.",
        "Index every project-level record by building, floor, suite, or zone so logistics, supervision, and protection cannot be dismissed as a single undifferentiated block.",
        "Occupied commercial and multifamily files usually need access windows, tenant or property-manager notes, elevator and loading rules, and after-hours records.",
        "Large-loss and multi-building files need a master location index, per-area logs, and a timeline that can be read by phase and by building.",
        "Use the Commercial Insurance Supplement Playbook for commercial supplement workflow, the Commercial Insurance Claims Documentation Guide for commercial evidence standards, and the Large-Loss Commercial Insurance Claims Guide for campus and multi-building operations.",
        "Property-type depth lives in the multifamily, HOA, retail/office, and industrial/warehouse guides — link those files instead of duplicating them here.",
      ],
    },
    {
      id: "supporting-records",
      title: "Documentation Supporting General Conditions",
      actions: [
        "Assemble the records that actually exist: photographs, project logs, schedules, daily reports, invoices, receipts, subcontractor records, meeting notes, site-condition notes, correspondence, project timelines, and change documentation.",
        "Prefer contemporaneous evidence. Same-day photos and logs outperform reconstructed packages after production.",
        "Label every artifact with date, location ID, and the activity it supports.",
        "Invoices and receipts support a documented activity only when they reconcile to logs and photos. A stack of tickets with no site context is disconnected support.",
        "Do not invent records for activities that did not occur. Missing evidence stays missing until recaptured, or the activity stays off the supplement-ready list.",
      ],
    },
    {
      id: "estimate-organization",
      title: "Estimate Organization — Condition to Estimate Traceability",
      actions: [
        "Connect project-level documentation to the estimate or scope being reviewed. The goal is traceability: Condition → Activity → Documentation → Estimate.",
        "For each documented general-conditions activity, write the site condition that required it, the activity performed, the record IDs that prove it, and the estimate section or line family it supports.",
        "Keep project-level rows out of the direct-repair gap list used by the Scope Audit and Missing Line Item guides, unless the same fact is being used for two different questions — then label both uses.",
        "Cite the active estimate version on the index. Mixed versions make duration and activity rows untraceable after a revision.",
        "When the file later enters Claim File Audit or Supplement Submission, the index should let a reviewer open the condition, the activity, and the exhibit without reconstructing the story.",
      ],
    },
    {
      id: "gc-vs-op-distinction",
      title: "General Conditions vs Overhead & Profit",
      actions: [
        "General conditions relate to project-specific operational requirements and the records that show those activities occurred — supervision performed, protection installed, logistics constrained, facilities used, duration lived.",
        "Overhead & profit is a separate estimating and business concept. It is not a second name for dumpsters, temporary protection, or daily supervision logs.",
        "Do not treat general conditions and O&P as interchangeable. Do not use this file to argue O&P eligibility.",
        "When the question is whether O&P belongs on a multi-trade file, leave this guide and use the O&P Qualification Documentation Standard and the O&P on Insurance Claims article.",
        "If supervision or coordination records appear in both files, label the use: operational general-conditions support here; O&P qualification evidence there. Do not double-count the same hours as both without a clear file note.",
      ],
      notes:
        "Protect search-intent ownership: this guide documents project-level general conditions. The O&P Qualification Documentation Standard owns O&P eligibility documentation.",
    },
    {
      id: "common-documentation-mistakes-step",
      title: "Common Documentation Mistakes",
      actions: [
        "Avoid generic boilerplate that could be pasted onto any project. Reviewers discount language that does not name this site’s conditions.",
        "Avoid unsupported assumptions — “a job this size always needs” is not documentation.",
        "Do not document activities that did not occur.",
        "Do not leave duration unclear: missing start/end dates, missing phases, or a single unexplained total.",
        "Do not omit project logs when supervision, coordination, or protection spanned more than a single visit.",
        "Do not leave a weak connection between site conditions and the activities claimed in the file.",
        "Do not duplicate direct repair scope as general conditions without explaining the project-level activity.",
        "Do not confuse general conditions with O&P.",
        "Do not submit disconnected supporting documents — tickets, photos, or emails that cannot be mapped to a condition, activity, date, and estimate section.",
      ],
    },
    {
      id: "final-quality-control-review",
      title: "Final Quality-Control Review — File Review Checklist",
      owner: "office",
      actions: [
        "Confirm every supplement-ready general-conditions row traces Condition → Activity → Documentation → Estimate on the current estimate version.",
        "Confirm records match actual project conditions and that unused boilerplate was removed.",
        "Confirm duration is dated: start, end, and phases, with logs that cover the claimed calendar.",
        "Confirm supervision, coordination, protection, logistics, and facilities rows exist only where those activities occurred.",
        "Confirm general conditions are not being used as a stand-in for O&P, and that O&P questions are routed to the O&P Qualification Documentation Standard.",
        "Confirm direct-repair omissions are not mixed into this packet without a label pointing to the Missing Line Item Documentation Guide.",
        "Confirm photos, logs, invoices, and correspondence share location IDs and dates.",
        "Route only QC-passed packets to Claim File Audit and Supplement Submission. Send weak rows back to the field for recapture.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "actual-conditions-recorded",
      label: "Project-conditions checklist reflects this site — not reused boilerplate",
      required: true,
      detail:
        "Size, occupancy, trades, access, protection, and logistics are written from observed conditions.",
    },
    {
      id: "traceability-index-complete",
      label: "Condition → Activity → Documentation → Estimate index is complete for every supplement-ready row",
      required: true,
      detail:
        "Each row cites the current estimate version and record IDs a reviewer can open.",
    },
    {
      id: "duration-dated",
      label: "Project duration is dated with start/end and phase or daily-log support",
      required: true,
      detail: "Unexplained duration totals fail this gate.",
    },
    {
      id: "activities-that-occurred-only",
      label: "Supervision, coordination, protection, logistics, and facilities are documented only where they occurred",
      required: true,
    },
    {
      id: "gc-not-op",
      label: "General conditions are not treated as interchangeable with O&P",
      required: true,
      detail:
        "O&P questions are routed to the O&P Qualification Documentation Standard.",
    },
    {
      id: "no-direct-repair-duplication",
      label: "Project-level rows do not silently duplicate direct repair scope",
      required: true,
    },
    {
      id: "records-reconcile",
      label: "Photos, logs, invoices, and correspondence share dates and location IDs",
      required: true,
    },
    {
      id: "final-file-review-complete",
      label: "Final file review checklist complete before estimate or supplement routing",
      required: true,
    },
  ],
  commonMistakes: [
    {
      mistake: "Using generic general-conditions boilerplate that does not name this project",
      impact:
        "Desk review treats the file as assumed rather than observed; credibility drops on related rows.",
      correction:
        "Rewrite from the project-conditions checklist: size, occupancy, access, trades, and logistics as they existed.",
    },
    {
      mistake: "Documenting activities that did not occur or assuming a universal GC list",
      impact:
        "Unsupported rows invite cuts and put legitimate project-level records under the same suspicion.",
      correction:
        "Record only activities that occurred. Leave unused categories off the index.",
    },
    {
      mistake: "Leaving duration unclear or reconstructing a calendar after the fact",
      impact:
        "Supervision, facilities, and protection cannot be tied to dates; the packet looks speculative.",
      correction:
        "Keep start/end dates, phases, and contemporaneous daily or project logs.",
    },
    {
      mistake: "Missing project logs on multi-day or multi-trade work",
      impact:
        "Coordination and supervision become narrative-only and fail review.",
      correction:
        "Maintain dated logs, meeting notes, and schedules while the job is running.",
    },
    {
      mistake: "Weak connection between site conditions and documented activities",
      impact:
        "Reviewers see tickets or photos without knowing why the activity was required.",
      correction:
        "Use the Condition → Activity → Documentation → Estimate index on every row.",
    },
    {
      mistake: "Duplicating direct repair scope as general conditions",
      impact:
        "The same work appears twice and both rows lose clarity.",
      correction:
        "Keep project-level operational activities separate from demolition, rebuild, and finish lines.",
    },
    {
      mistake: "Confusing general conditions with overhead & profit",
      impact:
        "The file argues the wrong concept; O&P and GC both become harder to review.",
      correction:
        "Use this guide for project-level operational records. Use the O&P Qualification Documentation Standard for O&P eligibility.",
    },
    {
      mistake: "Submitting disconnected invoices, photos, or emails",
      impact:
        "Volume without mapping does not support the activity.",
      correction:
        "Map every artifact to a date, location ID, activity, and estimate section before routing.",
    },
  ],
  supplementOpportunities: [
    {
      trigger:
        "Daily reports show active site protection, logistics, or temporary facilities not organized against the estimate version under review",
      documentation:
        "In-place photos, dated logs, and a Condition → Activity → Documentation → Estimate index row — not an entitlement claim.",
      lineItemHint:
        "Project-level protection, logistics, or temporary-support records for review against the current estimate",
    },
    {
      trigger:
        "Multi-trade production has supervision and coordination records that are not indexed to the estimate",
      documentation:
        "Supervision logs, meeting notes, trade schedule, and duration dates. Route O&P eligibility questions to the O&P Qualification Documentation Standard.",
      lineItemHint: "Documented supervision and coordination activity — separate from O&P",
    },
    {
      trigger:
        "Occupied, commercial, or restricted-access conditions affected how the job was run but have no logistics file",
      documentation:
        "Access, staging, elevator, loading, parking, and tenant-constraint photos and notes indexed by location.",
      lineItemHint: "Site-logistics and access records for commercial or occupied files",
    },
    {
      trigger:
        "Project duration or phase changes are known internally but not supported by a timeline and logs",
      documentation:
        "Start/end dates, phase notes, and contemporaneous daily or project logs. Do not interpret delay coverage.",
      lineItemHint: "Duration and phase records for project-level activities",
    },
    {
      trigger:
        "General-conditions packet is complete and QC-passed but still needs packaging",
      documentation:
        "Indexed packet routed through Claim File Audit and Supplement Submission. Claims Ninja supports documentation review, estimating, and claim recovery workflows.",
      lineItemHint: "QC-passed general-conditions documentation package",
    },
  ],
  faq: [
    {
      question:
        "How is this guide different from the Insurance Estimate Review Playbook?",
      answer:
        "The Playbook is the operational hub for the full estimate-review lifecycle, including a general-conditions review phase. This guide is the specialty documentation standard for project-level general conditions — what records to keep, how they vary by project, and how they connect to the estimate.",
    },
    {
      question:
        "How is this guide different from the Insurance Estimate Review & Scope Validation Guide?",
      answer:
        "The Scope Validation Guide is the cluster cornerstone for estimate anatomy and an overview of what to validate, including a general-conditions review step. This guide is the deep-dive on documenting those project-level activities with checklists and traceability.",
    },
    {
      question:
        "How is this guide different from the Missing Line Item Documentation Guide?",
      answer:
        "The Missing Line Item Documentation Guide packages omitted or incomplete direct-repair work after a scope audit. This guide documents project-level operational requirements — supervision, coordination, protection, logistics, facilities, and duration — when those activities actually occurred.",
    },
    {
      question: "How is this guide different from the O&P Qualification Documentation Standard?",
      answer:
        "General conditions are project-specific operational requirements and their records. Overhead & profit is a separate estimating and business concept. Use this guide for GC documentation. Use the O&P Qualification Documentation Standard when the question is O&P eligibility. They are not interchangeable.",
    },
    {
      question: "Do general conditions apply automatically to every claim?",
      answer:
        "No. General conditions vary with actual project conditions — size, duration, occupancy, trades, access, safety, and logistics. This guide does not say every project requires the same items, and it does not determine what a policy covers or pays.",
    },
    {
      question: "Does this guide teach estimating software or provide legal advice?",
      answer:
        "No. It teaches contractor documentation and operational workflows for project-level general conditions. It does not provide estimating software instruction, legal advice, policy interpretation, coverage determinations, payment-entitlement statements, engineering opinions, or public-adjusting guidance.",
    },
  ],
  relatedResources: [
    {
      label: "Insurance Estimate Review Playbook for Contractors",
      href: "/resources/guides/general-claims/insurance-estimate-review-playbook-for-contractors",
    },
    {
      label: "Insurance Estimate Review & Scope Validation Guide",
      href: "/resources/guides/general-claims/insurance-estimate-review-scope-validation-guide",
    },
    {
      label: "O&P Qualification Documentation Standard",
      href: "/resources/guides/general-claims/op-qualification-guide",
    },
    {
      label: "Missing Line Item Documentation Guide for Contractors",
      href: "/resources/guides/general-claims/missing-line-item-documentation-guide-for-contractors",
    },
    {
      label: "Scope Audit Guide for Contractors",
      href: "/resources/guides/general-claims/scope-audit-guide-for-contractors",
    },
    {
      label: "Quantity Validation Guide for Contractors",
      href: "/resources/guides/general-claims/quantity-validation-guide-for-contractors",
    },
    {
      label: "Claim Documentation Standards",
      href: "/resources/guides/general-claims/documentation-standards-guide",
    },
    {
      label: "Carrier Estimate Review Workflow",
      href: "/resources/guides/general-claims/carrier-estimate-review-guide",
    },
    {
      label: "Claim File Audit Workflow",
      href: "/resources/guides/general-claims/claim-file-audit-guide",
    },
    {
      label: "Supplement Submission Workflow",
      href: "/resources/guides/general-claims/supplement-submission-guide",
    },
    {
      label: "Commercial Insurance Supplement Playbook for Contractors",
      href: "/resources/guides/general-claims/commercial-insurance-supplement-playbook-for-contractors",
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
      label: "Photo Documentation Standards",
      href: "/resources/guides/general-claims/photo-documentation-standards-guide",
    },
    {
      label: "Multifamily Apartment Insurance Claims Guide",
      href: "/resources/guides/general-claims/multifamily-apartment-insurance-claims-guide",
    },
    {
      label: "HOA Insurance Claims Guide",
      href: "/resources/guides/general-claims/hoa-insurance-claims-guide",
    },
    {
      label: "Retail & Office Insurance Claims Guide",
      href: "/resources/guides/general-claims/retail-office-insurance-claims-guide",
    },
    {
      label: "Industrial & Warehouse Insurance Claims Guide",
      href: "/resources/guides/general-claims/industrial-warehouse-insurance-claims-guide",
    },
    {
      label: "Roofing Claim Documentation Standard",
      href: "/resources/guides/roofing-claims/roofing-documentation-guide",
    },
    {
      label: "Category 3 Water Damage Documentation Guide",
      href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
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
      label: "The Most Overlooked Line Items in Insurance Estimates",
      href: "/resources/blog/most-overlooked-line-items-in-insurance-estimates",
    },
    {
      label: "Five Red Flags That an Insurance Estimate Is Missing Scope",
      href: "/resources/blog/five-red-flags-that-an-insurance-estimate-is-missing-scope",
    },
    {
      label: "How Contractors Find Quantity Errors in Insurance Estimates",
      href: "/resources/blog/how-contractors-find-quantity-errors-in-insurance-estimates",
    },
    {
      label: "Why Carrier Estimates Miss Required Trades",
      href: "/resources/blog/why-carrier-estimates-miss-required-trades",
    },
    {
      label: "O&P on Insurance Claims",
      href: "/resources/blog/op-on-insurance-claims",
    },
    {
      label: "Roofing claims",
      href: "/solutions/roofing",
    },
    {
      label: "Water damage claims",
      href: "/solutions/water-damage",
    },
    {
      label: "Fire damage claims",
      href: "/solutions/fire-damage",
    },
    {
      label: "Mold claims",
      href: "/solutions/mold",
    },
    {
      label: "Commercial claims",
      href: "/solutions/commercial",
    },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});

export { GUIDE_PATH as GENERAL_CONDITIONS_DOCUMENTATION_GUIDE_FOR_CONTRACTORS_PATH };
