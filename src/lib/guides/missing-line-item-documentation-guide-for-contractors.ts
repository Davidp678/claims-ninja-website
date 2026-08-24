import { defineGuide } from "@/lib/guides/guide-builder";

const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "missing-line-item-documentation-guide-for-contractors" as const;
const GUIDE_PATH = `/resources/guides/${CATEGORY}/${GUIDE_SLUG}` as const;

export const MISSING_LINE_ITEM_DOCUMENTATION_GUIDE_FOR_CONTRACTORS = defineGuide({
  slug: GUIDE_SLUG,
  title: "Missing Line Item Documentation Guide for Contractors",
  excerpt:
    "Operational guide for documenting omitted work after a scope audit — supporting missing demolition, reconstruction, labor, materials, detach/reset, access, trade sequencing, temporary protection, equipment, and code-related line items with measurements, photographs, field notes, and organized exhibits for contractor supplement review.",
  category: CATEGORY,
  guideType: "documentation-standard",
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Missing line item documentation",
    "Insurance estimate missing line items",
    "Documenting omitted work",
    "Missing scope documentation",
    "Contractor supplement documentation",
    "Insurance estimate omissions",
    "Estimate review",
    "Scope validation",
    "Carrier estimate",
    "Restoration contractors",
    "Roofing contractors",
    "Water mitigation",
    "Fire restoration",
    "Mold remediation",
    "Commercial contractors",
  ],
  publishedAt: "2026-08-10",
  updatedAt: "2026-08-10",
  estimatedMinutes: 28,
  seoTitle: "Missing Line Item Documentation Guide for Contractors",
  seoDescription:
    "Document omitted insurance estimate work after a scope audit: demolition, reconstruction, labor, materials, detach/reset, sequencing, protection, equipment, and code omissions — with photo, measurement, field-note, and QC checklists for contractors.",
  relatedGuideSlugs: [
    "scope-audit-guide-for-contractors",
    "insurance-estimate-review-playbook-for-contractors",
    "insurance-estimate-review-scope-validation-guide",
    "quantity-validation-guide-for-contractors",
    "general-conditions-documentation-guide-for-contractors",
    "documentation-standards-guide",
    "carrier-estimate-review-guide",
    "claim-file-audit-guide",
    "supplement-submission-guide",
    "commercial-insurance-supplement-playbook-for-contractors",
    "code-upgrade-documentation-guide",
    "op-qualification-guide",
    "photo-documentation-standards-guide",
    "first-48-hours-checklist",
    "commercial-insurance-claims-documentation-guide",
    "fire-code-upgrade-documentation-guide",
    "roofing-documentation-guide",
    "category-3-water-damage-documentation-guide",
    "fire-damage-documentation-guide",
    "mold-damage-documentation-guide",
    "commercial-roofing-documentation-guide",
    "commercial-water-loss-documentation-guide",
    "commercial-fire-claims-guide",
    "commercial-mold-claims-guide",
    "large-loss-commercial-insurance-claims-guide",
  ],
  relatedBlogSlugs: [
    "why-carrier-estimates-miss-required-trades",
    "most-overlooked-line-items-in-insurance-estimates",
    "five-red-flags-that-an-insurance-estimate-is-missing-scope",
    "how-contractors-find-quantity-errors-in-insurance-estimates",
    "why-carrier-estimates-miss-line-items",
    "first-48-hours-after-carrier-estimate",
    "xactimate-estimate-review-checklist-contractors",
    "commercial-claims-documentation-checklist",
    "why-commercial-insurance-claims-get-underpaid",
    "insurance-supplementing-guide-contractors",
    "what-makes-a-contractor-claim-file-easy-to-review",
  ],
  faqIds: [
    "documenting-omitted-work-insurance-estimates",
    "documentation-supporting-missing-scope",
    "documenting-detach-reset-missing-line-items",
    "documenting-trade-sequencing-omitted-work",
    "why-missing-line-items-remain-unsupported",
  ],
  claimTypes: ["roofing", "water", "fire", "mold", "commercial", "large-loss"],
  purpose:
    "This guide is the specialty authority for documenting missing line items inside the Estimate Review & Scope Validation cluster. The Scope Audit Guide determines whether required work is missing from a carrier insurance estimate. The Quantity Validation Guide verifies whether quantities match the field. The Insurance Estimate Review & Scope Validation Guide teaches estimate anatomy and what to validate. The Insurance Estimate Review Playbook is the operational hub for the full receive-to-settlement workflow. This resource goes deep on how contractors support omitted work with documentation — so demolition, reconstruction, labor, materials, detach/reset, access, trade sequencing, temporary protection, equipment, and code-related omissions become reviewable exhibits after a scope audit identifies them. Use it when gap lists already show missing assemblies and the file needs photo, measurement, field-note, and attachment discipline before packaging. Pair it with Documentation Standards for evidence capture, Claim File Audit and Supplement Submission for packaging, Code Upgrade Documentation when AHJ-driven assemblies are omitted, the O&P Qualification Documentation Standard when multi-trade coordination must be evidenced, and the Commercial Insurance Supplement Playbook on multi-building files. Claims Ninja supports contractors with documentation standards, estimate review workflows, supplement packaging, and claim recovery operations — we are not a public adjuster, carrier representative, or legal counsel. This guide does not provide estimating software instruction, legal advice, policy interpretation, engineering opinions, or public-adjusting guidance.",
  whenToUse: [
    {
      condition:
        "Scope audit identified omitted or incomplete work that still lacks supporting exhibits",
      signal:
        "Gap list exists but photos, notes, measurements, or attachment index are missing or unlabeled",
    },
    {
      condition:
        "Detach/reset, sequencing, access, or temporary protection lines are absent and need field proof",
      signal:
        "Occupied spaces, trade order, or protection work documented on site but not evidenced for review",
    },
    {
      condition:
        "Omitted labor, materials, equipment, or code-related assemblies need measurement and photo support",
      signal:
        "Worksheet names the gap without SF/LF/counts, placement photos, or AHJ exhibits",
    },
    {
      condition:
        "Commercial or multi-area omissions require location-indexed documentation packages",
      signal:
        "Building/floor/suite IDs exist but exhibits are not mapped to omitted estimate sections",
    },
    {
      condition:
        "Final QC is required before routing omitted-work gaps to Supplement Submission",
      signal:
        "Packet nearly ready but labels, versioning, or exhibit mapping still fail desk-review standards",
    },
  ],
  prerequisites: [
    "Completed or in-progress scope audit with a gap list tied to the latest estimate version",
    "Current carrier estimate (latest version) with sketch when available and version noted",
    "Area index matching estimate sections to photo folders and field notes",
    "Labeled photos meeting Documentation Standards for every omitted item under documentation",
    "Field notes or daily reports documenting conditions, discovery, access limits, and trade needs",
  ],
  requiredDocumentation: [
    {
      id: "carrier-estimate-latest",
      label: "Current carrier estimate (latest version)",
      required: true,
      detail:
        "Cite claim number, risk address, price list, sketch attachment, and estimate version on every omitted-item exhibit set.",
    },
    {
      id: "scope-gap-list",
      label: "Scope audit gap list or comparison worksheet",
      required: true,
      detail:
        "Each omitted or incomplete item with field condition, estimate absence, area ID, and classification before documentation packaging.",
    },
    {
      id: "field-condition-photos",
      label: "Labeled field-condition photographs",
      required: true,
      detail:
        "Overview-to-detail sequences that show the omitted work condition — not unlabeled dumps or stock images.",
    },
    {
      id: "area-index",
      label: "Area or location index",
      required: true,
      detail:
        "Room, elevation, roof plane, or building/floor/suite IDs consistent across estimate, photos, notes, and exhibits.",
    },
    {
      id: "field-notes",
      label: "Supporting field notes and job records",
      required: true,
      detail:
        "Contemporaneous notes on damage extent, discovery, detach/reset, sequencing, access, equipment, and assumptions that differ from the estimate.",
    },
    {
      id: "measurement-support",
      label: "Measurement or quantity support when the omitted item has a measurable extent",
      required: false,
      detail:
        "SF, LF, squares, counts, or days with methodology notes — pair with Quantity Validation when numbers are the primary dispute.",
    },
    {
      id: "specialty-logs",
      label: "Specialty logs when omitted scope depends on mitigation, contents, or protocol",
      required: false,
      detail:
        "Moisture maps, equipment logs, contents inventories, mold protocols, or daily reports when those artifacts define the omitted work.",
    },
    {
      id: "code-exhibits",
      label: "Code or AHJ exhibits when upgrades drive omitted assemblies",
      required: false,
      detail:
        "Written AHJ direction, permit notes, or citations tied to photographed conditions — not contractor opinions as coverage advice.",
    },
    {
      id: "attachment-index",
      label: "Cover attachment index mapping exhibits to each omitted line",
      required: true,
      detail:
        "One index row per supplement-ready omission: estimate gap, area ID, photo IDs, note IDs, and optional measurement or log refs.",
    },
  ],
  steps: [
    {
      id: "what-a-missing-line-item-is",
      title: "What a Missing Line Item Is",
      actions: [
        "A missing line item is required work that documented field conditions show must occur, but the carrier estimate does not list — or lists so incompletely that a required assembly, trade, or phase is effectively absent.",
        "Missing line items include omitted demolition, reconstruction, labor, materials, detach/reset, access work, trade sequencing steps, temporary protection, equipment-related scope, and code-driven assemblies.",
        "They are not the same as quantity shortfalls: a line can exist with the wrong SF, or the line can be missing entirely. Quantity Validation handles the first; this guide documents the second.",
        "Treat each omission as a documentation unit: field condition, estimate gap, area ID, evidence refs, and classification (supplement-ready / needs more evidence).",
        "Missing-line-item documentation supports accurate claim files and estimate review; it is not estimating software instruction or public-adjusting guidance.",
      ],
    },
    {
      id: "why-valid-scope-is-omitted",
      title: "Why Valid Scope Can Be Omitted from Carrier Estimates",
      actions: [
        "Limited inspection time produces room-level summaries that skip detach/reset, temporary protection, access labor, and adjacent affected finishes.",
        "Template macros and bundled scopes hide omitted accessories, prep work, and specialty trades behind a single finish line.",
        "Assumptions about repairability, match, access, or sequencing replace documented conditions — especially before open-wall or open-ceiling discovery.",
        "Trade sequencing is ignored: finishes appear without demolition, drying, substrate repair, or protection that field conditions require.",
        "Peril-specific work — containment, pack-out, HVAC cleaning, mold protocol steps, equipment days — drops when the estimate was written as a light cosmetic repair.",
        "Commercial multi-area files omit zones, shared systems, or tenant spaces when the estimate follows a residential single-area pattern.",
      ],
    },
    {
      id: "identify-vs-document",
      title: "Difference Between Identifying an Omission and Documenting It",
      actions: [
        "Identification (Scope Audit) answers: Is the required work present on the estimate? Is it complete through demo and rebuild? Are supporting trades listed?",
        "Documentation (this guide) answers: Can a desk reviewer see why the omitted item belongs, where it applies, and which exhibits prove the field condition?",
        "A gap on a comparison worksheet is not yet supplement-ready. Supplement-ready means labeled photos, notes, measurements when needed, and an attachment index reconcile to the current estimate version.",
        "Do not re-run a full scope audit inside this workflow — inherit the gap list, then upgrade evidence quality and packaging discipline.",
        "Route weak evidence to field recapture; route only supported omissions through Claim File Audit and Supplement Submission.",
      ],
    },
    {
      id: "document-omitted-demolition",
      title: "How to Document Omitted Demolition",
      actions: [
        "Photograph the assembly or finish that must be removed — overview, detail, and adjacent protected areas — with area IDs matching the estimate section.",
        "Record field notes describing what is being removed, why removal is required by site conditions, and what remains after tear-out.",
        "When extent matters, measure SF/LF/counts and note methodology; pair large takeoffs with Quantity Validation.",
        "Capture before and during demolition when discovery expands scope; log discovery the same day with photos before cover-up.",
        "On the attachment index, map each omitted demo gap to photo IDs, note IDs, and the estimate version that lacks the line.",
      ],
    },
    {
      id: "document-omitted-reconstruction",
      title: "How to Document Omitted Reconstruction",
      actions: [
        "Trace demolition and reconstruction as a pair: if tear-out is documented, show the rebuild finishes, substrates, trim, and fixtures that must return.",
        "Photograph open-wall or open-ceiling conditions that define reconstruction, then photograph matching or replacement requirements by area ID.",
        "Use field notes to separate mitigation or demo phases from rebuild phases so desk review can follow trade order.",
        "Link moisture maps, soot zones, or protocol completion when rebuild cannot begin until those steps are complete.",
        "Never package orphan finishes without prep or orphan tear-out without rebuild support — both fail review.",
      ],
    },
    {
      id: "document-omitted-labor",
      title: "How to Document Omitted Labor",
      actions: [
        "Identify the labor activity missing from the estimate: additional handling, multi-trade coordination steps, occupied-space work, or phase-specific labor not covered by a single finish line.",
        "Support labor with contemporaneous daily reports, crew notes, and photos that show the condition requiring the labor — not generic productivity claims.",
        "When O&P or multi-trade coordination is relevant, pair this packet with the O&P Qualification Documentation Standard for coordination evidence — do not invent coverage outcomes.",
        "Keep labels consistent: area ID, date, activity description, and estimate gap on the same exhibit set.",
        "Classify labor gaps as needs-more-evidence until notes and photos reconcile; do not mark speculative hours supplement-ready.",
      ],
    },
    {
      id: "document-omitted-materials",
      title: "How to Document Omitted Materials",
      actions: [
        "Photograph material conditions that drive omitted lines: damaged substrates, matching requirements, accessories, underlayment, sealants, or specialty materials visible on site.",
        "Record product-relevant field notes (material type observed, location, and reason the estimate line is absent) without providing coverage or pricing advice.",
        "When quantities of materials are the dispute, measure and photograph measurement context; hand measurement depth to Quantity Validation.",
        "Index each omitted material gap to photos and notes by area ID and estimate version.",
        "Avoid unlabeled close-ups that cannot be tied to a room, plane, or elevation.",
      ],
    },
    {
      id: "document-detach-reset",
      title: "How to Document Detach/Reset Work",
      actions: [
        "Inventory items that must be detached and reset to perform repairs: fixtures, cabinets, equipment, contents in the work path, or finishes that block access.",
        "Photograph items in place before detach, during protected storage when relevant, and the repair area that required removal.",
        "Use a detach/reset log with item description, area ID, date, reason for removal, and photo refs.",
        "Tie each log row to the estimate gap — missing detach/reset lines are a common overlooked omission after limited inspections.",
        "Do not rely on a single overview photo of a cluttered room; reviewers need item-level clarity.",
      ],
    },
    {
      id: "document-access-related-work",
      title: "How to Document Access-Related Work",
      actions: [
        "Document site constraints that create omitted access work: occupied interiors, limited roof access, elevated work, protected finishes along the path of travel, or commercial after-hours constraints.",
        "Photograph access paths, protection already installed, and conditions that require additional labor or materials to reach the repair.",
        "Record field notes on access limits the same day they affect the job — delayed notes look reconstructed.",
        "Map access exhibits to the omitted estimate lines they support (protection, scaffolding-related handling, occupied-space handling, etc.).",
        "Stay operational: document conditions and required work steps — do not interpret policy for access coverage.",
      ],
    },
    {
      id: "document-trade-sequencing",
      title: "How to Document Trade Sequencing",
      actions: [
        "Build a phase checklist from protection through demolition, drying or cleaning, substrate repair, and finishes — then mark which phases the estimate skips.",
        "Photograph evidence of required predecessor work that is missing from the estimate (e.g., finishes without prep, rebuild without mitigation completion).",
        "Use daily reports and field notes to show chronological order: what was done, what remains, and what the estimate omits between phases.",
        "For water, fire, and mold, attach specialty logs that prove sequencing dependencies (moisture maps, equipment days, protocol steps).",
        "Package sequencing omissions as phase gaps with exhibit refs — not as a narrative dispute without dates and area IDs.",
      ],
    },
    {
      id: "document-temporary-protection",
      title: "How to Document Temporary Protection",
      actions: [
        "Photograph temporary protection in place: roof coverings, floor/wall protection, containment, and contents protection — with date and area labels.",
        "Note when protection was installed, why site conditions required it, and which omitted estimate lines correspond.",
        "Capture overview and detail shots so reviewers see both coverage extent and construction of the protection.",
        "Update exhibits if protection is maintained across multiple days; stale single-day photos understate ongoing protection scope.",
        "Index protection photos to the gap list before routing to Supplement Submission.",
      ],
    },
    {
      id: "document-equipment-related-scope",
      title: "How to Document Equipment-Related Scope",
      actions: [
        "Photograph equipment placement by area ID: air movers, dehumidifiers, air scrubbers, heaters, or other specialty equipment required by site conditions.",
        "Attach equipment logs with start/stop, locations, and monitoring notes when equipment days or monitoring visits are omitted.",
        "Reconcile moisture maps or contamination zones to equipment placement so omitted equipment scope is not presented as an orphan claim.",
        "When equipment quantities or days are the primary issue, pair exhibits with Quantity Validation measurement standards.",
        "Keep commercial multi-area equipment indexed by building/floor/suite — unindexed logs fail desk review.",
      ],
    },
    {
      id: "document-code-related-omissions",
      title: "How to Document Code-Related Omissions",
      actions: [
        "Attach written AHJ direction, permit notes, or citations that identify required assemblies not on the estimate — photograph the field conditions those documents reference.",
        "Use the Code Upgrade Documentation Guide for roofing/code packaging depth; keep this guide focused on mapping code exhibits to omitted line items.",
        "Never substitute contractor opinions or engineering conclusions as coverage advice — stay with documented AHJ direction and photographed conditions.",
        "Index each code-driven omission to the estimate gap, area ID, and exhibit set.",
        "Classify as needs-more-evidence until AHJ documentation and photos reconcile.",
      ],
    },
    {
      id: "support-with-measurements",
      title: "How to Support Omitted Work with Measurements",
      actions: [
        "Measure omitted assemblies when extent affects review: SF finishes, LF trim, squares, fixture counts, equipment days, or opening counts.",
        "Photograph measurement context (tape, laser reference, plane edges) with the same area IDs used on the gap list.",
        "Record methodology briefly in field notes: what was measured, how, and who measured it.",
        "If the line exists but the number is wrong, hand primary ownership to Quantity Validation; if the line is absent, keep documentation ownership here and attach measurements as support.",
        "Do not submit bare takeoff numbers without visual and note context.",
      ],
    },
    {
      id: "support-with-photographs",
      title: "How to Support Omitted Work with Photographs",
      actions: [
        "Follow Documentation Standards and Photo Documentation Standards: overview → mid-range → detail, labeled by area ID and date.",
        "Shoot the omitted condition while it remains visible — before demo, dry-in, or cleaning removes proof.",
        "For each supplement-ready omission, ensure at least one photo set clearly shows the field condition that the estimate does not address.",
        "Avoid dumping hundreds of unlabeled images; reviewers need mapped exhibits, not volume.",
        "Cross-reference photo IDs on the attachment index and scope gap worksheet.",
      ],
    },
    {
      id: "field-notes-and-job-records",
      title: "How to Use Field Notes and Job Records",
      actions: [
        "Write contemporaneous notes: date, area ID, condition observed, omitted work implied, and evidence refs (photo IDs).",
        "Use daily reports for multi-day jobs — especially sequencing, equipment, protection, and discovery after tear-out.",
        "Keep detach/reset logs, contents notes, and access constraints in the same labeling system as photos and the estimate.",
        "Update notes within 24 hours after reinspection or a revised carrier estimate so the packet tracks the active version.",
        "Park narrative-only notes without photos as needs-more-evidence until visual support exists.",
      ],
    },
    {
      id: "organize-supporting-documents",
      title: "How to Organize Supporting Documents",
      actions: [
        "Build folders by area ID and by omission type when helpful (demo, rebuild, detach/reset, protection, equipment, code).",
        "Create a cover attachment index: gap ID → estimate version → area ID → photo IDs → note IDs → measurement/log/code refs.",
        "Cite the latest estimate version on every worksheet page and index page — never mix versions in one packet.",
        "Run Claim File Audit before packaging material omitted-work dollars; then route through Supplement Submission.",
        "On commercial files, enforce Building → Floor → Suite/Zone indexing across every exhibit.",
      ],
    },
    {
      id: "why-items-remain-unsupported",
      title: "Common Reasons Missing Line Items Remain Unsupported",
      actions: [
        "Gap identified but never photographed before cover-up — evidence destroyed.",
        "Photos exist but lack area labels, dates, or mapping to the estimate gap.",
        "Notes are reconstructed days later without contemporaneous detail.",
        "Detach/reset, sequencing, or protection treated as ‘obvious’ and left without item-level exhibits.",
        "Estimate versions mixed so exhibits cite a superseded file.",
        "Commercial omissions lack location IDs, so reviewers cannot place the work.",
        "Weak evidence marked supplement-ready too early, inviting denial and slowing the rest of the file.",
      ],
    },
    {
      id: "final-qc-before-submission",
      title: "Final Quality-Control Review Before Supplement Submission",
      actions: [
        "Confirm documentation owner, active estimate version, and gap list classifications.",
        "Verify every supplement-ready omission has photo refs, note refs, and attachment-index rows.",
        "Confirm area labels match across estimate, photos, notes, and worksheets.",
        "Complete specialty exhibit checks for roofing, water, fire, mold, commercial, and code when applicable.",
        "Acknowledge production guardrails for unpaid omitted work still awaiting packaging.",
        "Pass Claim File Audit, then submit through Supplement Submission — do not skip the audit gate on material dollars.",
      ],
    },
    {
      id: "documentation-workflow-asset",
      title: "Operational Asset — Missing Line Item Documentation Workflow",
      actions: [
        "Step 1 — Inherit: lock the latest estimate version and import the scope audit gap list (or create one if gaps are already known).",
        "Step 2 — Index: publish area IDs and open an attachment index for every omitted item.",
        "Step 3 — Capture: collect labeled photos, field notes, measurements, specialty logs, and code exhibits while conditions remain visible.",
        "Step 4 — Map: link each gap to exhibits; classify supplement-ready vs needs more evidence.",
        "Step 5 — Specialize: complete detach/reset, sequencing, protection, equipment, and code documentation passes as applicable.",
        "Step 6 — Organize: folders by area ID; cover index complete; estimate version cited everywhere.",
        "Step 7 — Gate: run QC checklist and Claim File Audit; route only supported items to Supplement Submission.",
        "Gate: no high-value omitted item marked complete until photo, note, and estimate section reconcile.",
      ],
    },
    {
      id: "photo-documentation-checklist-asset",
      title: "Operational Asset — Photo Documentation Checklist",
      actions: [
        "Overview, mid-range, and detail photos for each omitted area.",
        "Area ID and date labels consistent with Documentation Standards.",
        "Detach/reset items photographed before removal when possible.",
        "Temporary protection and equipment placement photographed in situ.",
        "Open-wall / discovery photos captured same day before cover-up.",
        "Measurement-context photos attached when extents matter.",
        "Commercial photos organized by building/floor/suite.",
        "Photo IDs listed on the attachment index for every supplement-ready gap.",
      ],
    },
    {
      id: "measurement-checklist-asset",
      title: "Operational Asset — Measurement Checklist",
      actions: [
        "High-value omitted assemblies measured independently when SF/LF/counts/days apply.",
        "Methodology noted (what, how, who, date).",
        "Measurement-context photos labeled to the same area IDs.",
        "Carrier estimate version cited next to field quantities.",
        "Quantity Validation engaged when the line exists but numbers disagree.",
        "Commercial quantities mapped to location IDs.",
        "Weak or incomplete measurements kept as needs-more-evidence.",
        "Takeoffs never submitted without visual and note support.",
      ],
    },
    {
      id: "field-note-checklist-asset",
      title: "Operational Asset — Field-Note Checklist",
      actions: [
        "Contemporaneous notes with date and area ID for each omission.",
        "Field condition and estimate gap stated in plain operational language.",
        "Detach/reset log rows complete when contents or fixtures are moved.",
        "Sequencing and access constraints recorded the day they affect work.",
        "Photo IDs cross-referenced in notes.",
        "Daily reports cover multi-day protection, equipment, and discovery.",
        "Notes updated within 24 hours after reinspection or revised estimate.",
        "Narrative-only notes without photos held for recapture.",
      ],
    },
    {
      id: "supporting-document-checklist-asset",
      title: "Operational Asset — Supporting-Document Checklist",
      actions: [
        "Latest carrier estimate version filed and cited.",
        "Scope audit gap list or comparison worksheet attached.",
        "Attachment index complete for every supplement-ready omission.",
        "Specialty logs attached when mitigation, contents, or protocol define omitted work.",
        "Code/AHJ exhibits linked when upgrades drive omissions.",
        "Folders organized by area ID (and omission type when helpful).",
        "Commercial master index present for multi-area files.",
        "Packet ready for Claim File Audit or Supplement Submission.",
      ],
    },
    {
      id: "quality-control-checklist-asset",
      title: "Operational Asset — Quality-Control Checklist",
      actions: [
        "Documentation owner assigned; packet version matches active estimate.",
        "Every supplement-ready omission has photo and note refs.",
        "Area labels consistent across estimate, photos, notes, and index.",
        "Detach/reset, sequencing, protection, equipment, and code passes complete when applicable.",
        "Measurements attached where extents matter; Quantity Validation paired when needed.",
        "Unsupported items not marked supplement-ready.",
        "Production guardrails acknowledged for unpaid omitted work.",
        "Peer or Claim File Audit gate passed before packaging material omitted-work supplements.",
      ],
    },
    {
      id: "common-mistakes-checklist-asset",
      title: "Operational Asset — Common Documentation Mistakes",
      actions: [
        "Do not stop at identifying an omission — document it with mapped exhibits.",
        "Do not confuse quantity errors with missing lines — use Quantity Validation for measurements.",
        "Do not mix estimate versions across photos, notes, and indexes.",
        "Do not use inconsistent area labels across artifacts.",
        "Do not mark weak evidence as supplement-ready.",
        "Do not skip detach/reset, sequencing, or protection documentation because it seems obvious.",
        "Do not delay field capture until after demo or dry-in removes proof.",
        "Do not treat missing-line-item documentation as coverage advice or public adjusting.",
      ],
    },
    {
      id: "final-submission-checklist-asset",
      title: "Operational Asset — Final Submission Checklist",
      actions: [
        "Gap list classifications finalized for the active estimate version.",
        "Attachment index maps every supplement-ready omission to exhibits.",
        "Photos, notes, measurements, logs, and code exhibits filed and labeled.",
        "Claim File Audit completed for material omitted-work dollars.",
        "Supplement Submission package assembled with cover index first.",
        "Needs-more-evidence items parked with field recapture owners — not buried in the packet.",
        "Commercial location IDs verified on multi-area files.",
        "Production teams notified which omitted items remain unpaid pending review.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "doc-owner-assigned",
      label: "Documentation owner assigned and packet tied to the latest estimate version",
      required: true,
      detail:
        "Unowned omitted-work documentation drifts into production without reconciled exhibits.",
    },
    {
      id: "gap-list-inherited",
      label: "Scope audit gap list inherited with classifications for every omitted item under packaging",
      required: true,
      detail:
        "Documentation without a clear gap list cannot map exhibits to estimate sections.",
    },
    {
      id: "photo-note-mapped",
      label: "Every supplement-ready omission has labeled photo and field-note refs on the attachment index",
      required: true,
      detail:
        "Unmapped photo dumps fail desk review even when volume looks high.",
    },
    {
      id: "labels-consistent",
      label: "Area labels consistent across estimate, photos, notes, worksheets, and index",
      required: true,
      detail:
        "Inconsistent IDs prevent reviewers from reconciling evidence to lines.",
    },
    {
      id: "specialty-doc-passes",
      label: "Applicable detach/reset, sequencing, protection, equipment, commercial, and code documentation passes complete",
      required: true,
      detail:
        "Skipping specialty documentation passes leaves common overlooked omissions unsupported.",
    },
    {
      id: "production-guardrails-missing-lines",
      label: "Production guardrails acknowledged for unpaid omitted work",
      required: true,
      detail:
        "PM must acknowledge under-scoped omissions before crews absorb unpaid assemblies.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Stopping after the scope audit without building exhibit packages",
      impact:
        "Gaps are known internally but remain unsupported at desk review; production absorbs unpaid work.",
      correction:
        "Run the missing line item documentation workflow: map each gap to photos, notes, and an attachment index.",
    },
    {
      mistake: "Treating quantity shortfalls as missing line item documentation",
      impact:
        "Measurement disputes get the wrong exhibits; omitted trades stay undocumented.",
      correction:
        "Use Quantity Validation for numbers; use this guide when the work is absent or incomplete as a line.",
    },
    {
      mistake: "Mixing estimate versions across the documentation packet",
      impact:
        "Exhibits become untraceable after a revised carrier estimate.",
      correction:
        "Cite the active estimate version on worksheets, indexes, and notes; archive prior packets.",
    },
    {
      mistake: "Inconsistent area labels across estimate, photos, and notes",
      impact:
        "Desk reviewers cannot reconcile evidence to lines despite photo volume.",
      correction:
        "Enforce Documentation Standards naming so every artifact resolves to the same area ID.",
    },
    {
      mistake: "Delaying field capture until after demolition or dry-in",
      impact:
        "Evidence is destroyed; omitted-work claims appear reconstructed and speculative.",
      correction:
        "Photograph and note high-risk omissions before cover-up; log discovery the same day it appears.",
    },
    {
      mistake: "Skipping detach/reset, sequencing, or temporary protection exhibits",
      impact:
        "Common overlooked omissions remain unsupported even when the rest of the file looks complete.",
      correction:
        "Complete specialty documentation passes with item-level photos, logs, and phase checklists.",
    },
    {
      mistake: "Marking omissions supplement-ready with weak evidence",
      impact:
        "Premature packaging invites denial and slows legitimate gaps on the same file.",
      correction:
        "Use the QC checklist gate; upgrade photos and notes before routing to Supplement Submission.",
    },
    {
      mistake: "Treating missing-line-item documentation as coverage advice or public adjusting",
      impact:
        "Compliance and credibility risk; operational focus is lost.",
      correction:
        "Stay in documentation and workflow: support omitted estimate lines with mapped exhibits and route through supplement packaging.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Scope audit gap list shows required work absent from the carrier estimate with field proof available",
      documentation:
        "Attachment index with field condition, estimate absence, photo/note refs, and current estimate version.",
      lineItemHint: "Omitted demo, rebuild, protection, detach/reset, labor, materials, or specialty trade lines",
    },
    {
      trigger: "Detach/reset inventory and photos show items that must be moved for repairs but are not listed",
      documentation:
        "Detach/reset log with item descriptions, area IDs, dates, and before/after photo refs.",
      lineItemHint: "Missing detach/reset and contents-handling lines",
    },
    {
      trigger: "Phase checklist shows sequencing gaps between protection, demo, drying/cleaning, and finishes",
      documentation:
        "Sequencing checklist, dated daily reports, and photos proving predecessor work the estimate skips.",
      lineItemHint: "Missing prep, mitigation completion, substrate, or phase labor lines",
    },
    {
      trigger: "Temporary protection or equipment placement documented but not listed",
      documentation:
        "In-situ protection/equipment photos, equipment logs, and area-indexed notes.",
      lineItemHint: "Temporary protection, equipment days, monitoring, containment",
    },
    {
      trigger: "Code or AHJ requirements add assemblies not on the estimate",
      documentation:
        "AHJ notes, citations, photos of conditions, and index links — no engineering opinions as coverage advice.",
      lineItemHint: "Code-driven assemblies, devices, sealing, blocking, permits",
    },
    {
      trigger: "Commercial multi-area omissions documented but not indexed by location",
      documentation:
        "Master area index, per-location exhibit sets, and photos organized by building/floor/suite.",
      lineItemHint: "Location-indexed omitted zones and shared-system work",
    },
    {
      trigger: "Documentation packet complete and evidence indexed but carrier estimate still omits documented work",
      documentation:
        "Indexed omitted-work packet cross-referencing each gap to photos and notes — routed through Supplement Submission.",
      lineItemHint:
        "Missing line item supplement package with exhibit justification; Claims Ninja supports documentation review, estimating, and claim recovery workflows",
    },
  ],
  faq: [
    {
      question:
        "How is this guide different from the Scope Audit Guide for Contractors?",
      answer:
        "The Scope Audit Guide determines whether required work is missing — completeness of trades, phases, and assemblies. This guide documents and supports omitted work after those gaps are identified, so photos, notes, measurements, and attachment indexes make each missing line item reviewable. Identify first; document second.",
    },
    {
      question:
        "How is this guide different from the Quantity Validation Guide for Contractors?",
      answer:
        "Quantity Validation focuses on measurement accuracy — whether SF, squares, counts, and days match the field. This guide focuses on documenting work that is omitted or incomplete as a line item. Use measurements here as supporting evidence; use Quantity Validation when the primary issue is a wrong quantity on an existing line.",
    },
    {
      question:
        "How is this guide different from the Insurance Estimate Review & Scope Validation Guide?",
      answer:
        "The Scope Validation Guide is the cluster cornerstone for estimate anatomy and an overview of what to validate. This guide is the specialty deep-dive on documenting missing line items — exhibit mapping, specialty documentation passes, and QC gates before supplement packaging.",
    },
    {
      question: "How is this guide different from the Insurance Estimate Review Playbook?",
      answer:
        "The Playbook is the operational hub for the full estimate review lifecycle. This guide focuses on the missing-line-item documentation specialty so omitted-work exhibits can enter the playbook’s packaging and settlement steps with evidence.",
    },
    {
      question: "When should a missing line item be marked supplement-ready?",
      answer:
        "When labeled photos, field notes, and attachment-index entries reconcile to the current estimate version with a clear field-condition-vs-estimate gap. Weak or unlabeled evidence keeps the item in needs-more-evidence until upgraded.",
    },
    {
      question: "Does this guide teach estimating software or provide legal advice?",
      answer:
        "No. It teaches contractor documentation and operational workflows for supporting omitted estimate work. It does not provide estimating software instruction, legal advice, policy interpretation, engineering opinions, or public-adjusting guidance.",
    },
  ],
  relatedResources: [
    {
      label: "Scope Audit Guide for Contractors",
      href: "/resources/guides/general-claims/scope-audit-guide-for-contractors",
    },
    {
      label: "Insurance Estimate Review Playbook for Contractors",
      href: "/resources/guides/general-claims/insurance-estimate-review-playbook-for-contractors",
    },
    {
      label: "Insurance Estimate Review & Scope Validation Guide",
      href: "/resources/guides/general-claims/insurance-estimate-review-scope-validation-guide",
    },
    {
      label: "Quantity Validation Guide for Contractors",
      href: "/resources/guides/general-claims/quantity-validation-guide-for-contractors",
    },
    {
      label: "General Conditions Documentation Guide for Contractors",
      href: "/resources/guides/general-claims/general-conditions-documentation-guide-for-contractors",
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
      label: "Code Upgrade Documentation Guide",
      href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
    },
    {
      label: "O&P Qualification Documentation Standard",
      href: "/resources/guides/general-claims/op-qualification-guide",
    },
    {
      label: "Photo Documentation Standards",
      href: "/resources/guides/general-claims/photo-documentation-standards-guide",
    },
    {
      label: "First 48 Hours After Carrier Estimate Checklist",
      href: "/resources/guides/general-claims/first-48-hours-checklist",
    },
    {
      label: "Commercial Insurance Claims Documentation Guide",
      href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
    },
    {
      label: "Fire Code Upgrade Documentation Guide",
      href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
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
      label: "Commercial Roofing Documentation Guide",
      href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
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
    {
      label: "Multi-Family Water Loss Recovery Review",
      href: "/case-studies/multi-family-water-loss",
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
      label: "Why Carrier Estimates Miss Line Items",
      href: "/resources/blog/why-carrier-estimates-miss-line-items",
    },
    {
      label: "Why Commercial Insurance Claims Get Underpaid",
      href: "/resources/blog/why-commercial-insurance-claims-get-underpaid",
    },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});

export { GUIDE_PATH as MISSING_LINE_ITEM_DOCUMENTATION_GUIDE_FOR_CONTRACTORS_PATH };
