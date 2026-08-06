import { defineGuide } from "@/lib/guides/guide-builder";

const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "quantity-validation-guide-for-contractors" as const;
const GUIDE_PATH = `/resources/guides/${CATEGORY}/${GUIDE_SLUG}` as const;

export const QUANTITY_VALIDATION_GUIDE_FOR_CONTRACTORS = defineGuide({
  slug: GUIDE_SLUG,
  title: "Quantity Validation Guide for Contractors",
  excerpt:
    "Operational guide for validating insurance estimate quantities against field conditions — roofing, interior, water, fire, and commercial quantity review, measurement documentation, supporting photos and field notes, code-related quantity impacts, and documentation that supports revised quantities.",
  category: CATEGORY,
  guideType: "documentation-standard",
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Quantity validation",
    "Insurance estimate quantities",
    "Estimate quantity review",
    "Scope validation",
    "Contractor estimate review",
    "Field measurements",
    "Quantity discrepancies",
    "Carrier estimate",
    "Supplement documentation",
    "Restoration contractors",
    "Roofing contractors",
    "Water mitigation",
    "Fire restoration",
    "Mold remediation",
    "Commercial contractors",
  ],
  publishedAt: "2026-08-06",
  updatedAt: "2026-08-06",
  estimatedMinutes: 28,
  seoTitle: "Quantity Validation Guide for Contractors | Estimate Quantities",
  seoDescription:
    "Validate insurance estimate quantities against field conditions: roofing and interior takeoffs, water and fire quantity review, commercial considerations, measurement documentation, photos, field notes, and QC checklists for contractors.",
  relatedGuideSlugs: [
    "insurance-estimate-review-playbook-for-contractors",
    "insurance-estimate-review-scope-validation-guide",
    "documentation-standards-guide",
    "carrier-estimate-review-guide",
    "commercial-insurance-supplement-playbook-for-contractors",
    "claim-file-audit-guide",
    "supplement-submission-guide",
    "code-upgrade-documentation-guide",
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
    "most-overlooked-line-items-in-insurance-estimates",
    "five-red-flags-that-an-insurance-estimate-is-missing-scope",
    "why-carrier-estimates-miss-line-items",
    "first-48-hours-after-carrier-estimate",
    "xactimate-estimate-review-checklist-contractors",
    "commercial-claims-documentation-checklist",
    "why-commercial-insurance-claims-get-underpaid",
    "insurance-supplementing-guide-contractors",
  ],
  faqIds: [
    "quantity-validation-for-contractors",
    "quantity-discrepancies-insurance-estimates",
    "field-measurements-estimate-quantities",
    "estimate-quantities-contractor-review",
    "documenting-quantity-changes-insurance-estimates",
    "quantity-validation-insurance-estimates",
  ],
  claimTypes: ["roofing", "water", "fire", "mold", "commercial", "large-loss"],
  purpose:
    "This guide is the specialty authority for quantity validation inside the Estimate Review & Scope Validation cluster. The Insurance Estimate Review & Scope Validation Guide teaches estimate anatomy and what to validate across scope and quantity. The Insurance Estimate Review Playbook is the operational hub for the full receive-to-settlement workflow. This resource goes deep on how contractors evaluate, verify, and document quantity discrepancies in carrier insurance estimates — roofing squares, interior SF and counts, water and fire quantity review, commercial area indexing, measurement documentation, supporting photographs, field notes, and code-related quantity impacts. Use it when high-value quantities must reconcile to independent field measurements before production absorbs under-scoped work or before a quantity delta is marked supplement-ready. Pair it with Documentation Standards for evidence capture, Carrier Estimate Review for day-one intake sequencing, Claim File Audit and Supplement Submission for packaging, and the Commercial Insurance Supplement Playbook on multi-building files. Claims Ninja supports contractors with documentation standards, estimate review workflows, supplement packaging, and claim recovery operations — we are not a public adjuster, carrier representative, or legal counsel. This guide does not provide estimating software instruction, legal advice, policy interpretation, engineering opinions, or public-adjusting guidance.",
  whenToUse: [
    {
      condition:
        "Carrier estimate received and high-value SF or count lines must be checked against field measurements",
      signal:
        "Roofing squares, flooring, drywall, paint, openings, fixtures, or equipment days flagged for review",
    },
    {
      condition:
        "Sketch dimensions or bundled macros appear inconsistent with site conditions",
      signal:
        "Independent measurements disagree with carrier sketch or zero-quantity / rounded lines hide assemblies",
    },
    {
      condition:
        "Quantity deltas need photos, methodology notes, and a comparison worksheet before supplement packaging",
      signal:
        "Gap list has quantity candidates without measurement context or evidence refs",
    },
    {
      condition:
        "Commercial or multi-area loss requires quantity reconciliation by building, floor, or suite ID",
      signal:
        "Area index exists but estimate quantities are not mapped to location IDs",
    },
    {
      condition:
        "Code-driven or discovery quantities change after initial estimate review",
      signal:
        "AHJ notes, decking, ice barrier, or demolition discovery expands measured scope",
    },
  ],
  prerequisites: [
    "Current carrier estimate (latest version) with sketch when available and version noted",
    "Independent field measurements for high-value assemblies (tape, laser, or documented takeoff)",
    "Labeled photos meeting Documentation Standards, including measurement-context shots",
    "Area index matching estimate sections to photo folders and field notes",
    "Comparison worksheet tied to the active estimate version",
  ],
  requiredDocumentation: [
    {
      id: "carrier-estimate-latest",
      label: "Current carrier estimate (latest version)",
      required: true,
      detail:
        "Confirm claim number, risk address, price list, sketch attachment, and estimate version before recording any quantity delta.",
    },
    {
      id: "independent-measurements",
      label: "Independent field measurements and takeoff notes",
      required: true,
      detail:
        "Record methodology for large assemblies — planes, rooms, openings, LF trim — separate from carrier sketch totals.",
    },
    {
      id: "measurement-photos",
      label: "Measurement-context photographs",
      required: true,
      detail:
        "Photos showing tape, laser, labeled dimensions, or takeoff context that a desk reviewer can reconcile to the worksheet.",
    },
    {
      id: "comparison-worksheet",
      label: "Quantity comparison worksheet",
      required: true,
      detail:
        "Carrier qty, field qty, delta, evidence refs, and classification (supplement-ready / needs more evidence) by line or assembly.",
    },
    {
      id: "area-index",
      label: "Area or location index",
      required: true,
      detail:
        "Room, elevation, roof plane, or building/floor/suite IDs consistent across estimate, photos, and notes.",
    },
    {
      id: "field-notes",
      label: "Supporting field notes",
      required: true,
      detail:
        "Contemporaneous notes on access limits, waste factors, discovery, and measurement assumptions.",
    },
    {
      id: "specialty-logs",
      label: "Specialty logs when quantity depends on duration or equipment",
      required: false,
      detail:
        "Moisture/equipment logs, daily reports, or contents counts when days and unit counts drive quantity lines.",
    },
  ],
  steps: [
    {
      id: "what-quantity-validation-is",
      title: "What Quantity Validation Is",
      actions: [
        "Quantity validation is the disciplined comparison of carrier estimate quantities — SF, squares, LF, counts, and days — to independent field measurements and documented conditions.",
        "It answers whether the estimate’s numbers match what is on site, not whether a line code or price list entry is preferred.",
        "Treat quantity validation as a documentation workflow: measure, photograph context, record methodology, reconcile to the estimate version, and classify deltas.",
        "Quantity validation supports accurate claim documentation and estimate review; it is not estimating software instruction or public-adjusting guidance.",
        "Use this specialty guide when the Scope Validation cornerstone’s quantity pass needs depth across roofing, interior, water, fire, and commercial files.",
        "Hand finished quantity deltas to the Insurance Estimate Review Playbook workflow for packaging, communication, and settlement reconciliation.",
      ],
    },
    {
      id: "why-quantity-errors-occur",
      title: "Why Quantity Errors Occur",
      actions: [
        "Desk or field inspections under time pressure produce rounded dimensions, combined rooms, and skipped elevations.",
        "Template macros and bundled quantities hide missing assemblies or understate openings, accessories, and waste.",
        "Sketch errors cascade into every SF- and count-based line; trusting the sketch without independent measurement multiplies the miss.",
        "Zero-quantity placeholders, default ceiling heights, and incomplete attached-structure takeoffs create silent undercounts.",
        "Production discovery after drywall open-up, decking replacement, or demolition expands quantities that the initial estimate never measured.",
        "Commercial multi-building and multi-suite files fail when quantities are not indexed by location ID — residential single-sketch habits do not scale.",
      ],
    },
    {
      id: "comparing-field-to-estimate-quantities",
      title: "Comparing Field Conditions to Estimate Quantities",
      actions: [
        "Assemble the quantity set before arguing dollars: latest estimate, sketch, independent measurements, measurement photos, and comparison worksheet.",
        "Walk area-by-area or plane-by-plane — do not start with the estimate total.",
        "For each high-value assembly, record carrier qty, field qty, unit of measure, delta, and evidence refs.",
        "Classify each discrepancy: supported as written, quantity wrong but scope present, or documented quantity with no estimate line.",
        "Prioritize by dollar impact and evidence strength; upgrade weak measurement photos before marking a delta supplement-ready.",
        "Version the worksheet to the active estimate; never mix deltas across revised carrier estimates.",
      ],
    },
    {
      id: "roofing-quantity-validation",
      title: "Roofing Quantity Validation",
      actions: [
        "Measure roof planes independently and reconcile squares to carrier sketch and line totals.",
        "Document steep/high, valleys, hips, ridges, eaves, and penetrations that change waste and accessory quantities.",
        "Validate underlayment, ice/water barrier, drip edge, flashing, and ventilation quantities against measured edges and details — not against a single roof SF alone.",
        "Photograph measurement context on each major plane and on details that drive accessory counts.",
        "Route code-driven roofing quantity increases through the Code Upgrade Documentation Guide with AHJ or citation support — do not invent engineering opinions.",
        "Apply Roofing Claim Documentation Standard labeling so plane IDs match estimate sections and photo folders.",
      ],
    },
    {
      id: "interior-quantity-validation",
      title: "Interior Quantity Validation",
      actions: [
        "Recalculate flooring, drywall, paint, insulation, and ceiling SF from field measurements by room or area ID.",
        "Count openings, fixtures, LF trim, cabinets, and specialty finishes with labeled photos.",
        "Separate remove, replace, and seal/prime quantities when field conditions require phased work the estimate bundled incorrectly.",
        "Document ceiling heights, openings, and built-ins that change wall and paint takeoffs from default macros.",
        "Reconcile matching and continuity quantities where partial replacement creates documented appearance or performance mismatches.",
        "Keep room labels consistent with Documentation Standards so desk reviewers can open evidence without renaming folders.",
      ],
    },
    {
      id: "water-damage-quantity-review",
      title: "Water Damage Quantity Review",
      actions: [
        "Reconcile demolition and affected-finish SF to moisture maps and labeled photos — not to a single room total alone.",
        "Validate equipment counts and days against placement photos, moisture logs, and daily reports.",
        "Confirm containment, anti-microbial, and specialty drying quantities where Category or Class documentation supports them; route Cat-3 detail to the Category 3 Water Damage Documentation Guide.",
        "Record monitoring visits and equipment moves as countable events when duration lines depend on them.",
        "Flag early pull or extended dry-out with contemporaneous logs before disputing carrier day counts.",
        "On commercial water losses, tie quantities to building/floor/suite IDs per the Commercial Water Loss Documentation Guide.",
      ],
    },
    {
      id: "fire-damage-quantity-review",
      title: "Fire Damage Quantity Review",
      actions: [
        "Reconcile structural and finish SF by smoke/soot extent documented in photos — not by assumption that adjacent rooms share the same quantity.",
        "Validate contents protection, pack-out counts, and cleaning quantities against inventories and labeled photos.",
        "Check HVAC cleaning or sealing quantities against documented contamination pathways and specialty notes.",
        "Separate emergency board-up and temporary protection quantities from rebuild finish quantities.",
        "Route fire code quantity impacts through the Fire Code Upgrade Documentation Guide with AHJ support.",
        "Apply Fire Damage Documentation Guide area labeling so quantity worksheets resolve to the same zones as photo sets.",
      ],
    },
    {
      id: "commercial-quantity-considerations",
      title: "Commercial Quantity Considerations",
      actions: [
        "Lock a master area index (Building → Floor → Suite/Unit/Zone) before recording commercial quantity deltas.",
        "Reconcile high-dollar assemblies per location ID so proportional cuts cannot dismiss undocumented zones.",
        "Scale measurement documentation to footprint: multi-building campuses need plane/room indexes, not a single residential sketch pattern.",
        "Document shared systems and common areas separately from tenant improvement quantities when both appear on the loss.",
        "Use the Commercial Insurance Claims Documentation Guide and Commercial Insurance Supplement Playbook for packaging multi-area quantity worksheets.",
        "On large-loss files, prioritize quantity validation by dollar impact and reinspection accessibility — capture evidence before production removes it.",
      ],
    },
    {
      id: "measurement-documentation",
      title: "Measurement Documentation",
      actions: [
        "Record who measured, when, tools used (tape, laser, wheel), and the methodology for large assemblies.",
        "Note waste factors, openings deducted or added, and assumptions that differ from carrier sketch defaults.",
        "Store takeoff notes with the comparison worksheet and link each major assembly to photo refs.",
        "Re-measure when discovery changes the assembly — decking, substrate, or open-wall conditions — and version the note.",
        "Prefer contemporaneous measurements over reconstructed takeoffs after finishes are installed.",
        "Never rely on memory or verbal walkthroughs; written measurement records survive reinspection.",
      ],
    },
    {
      id: "supporting-photographs",
      title: "Supporting Photographs",
      actions: [
        "Capture overview-to-detail sequences that show the assembly being measured, then the measurement context (tape/laser in frame or labeled dimension).",
        "Label photos with area IDs matching the estimate and comparison worksheet.",
        "Photograph conditions that explain quantity deltas: missing planes, extra elevations, openings, damage extent, and access constraints.",
        "Preserve pre-demo and pre-dry-in measurement photos — production destroys the visual proof.",
        "Apply Photo Documentation Standards so folders resolve in under two minutes during desk review or reinspection.",
        "Weak or unlabeled photos keep the delta in needs-more-evidence — do not mark supplement-ready without visual support.",
      ],
    },
    {
      id: "supporting-field-notes",
      title: "Supporting Field Notes",
      actions: [
        "Write same-day notes on access limits, occupied conditions, safety constraints, and why a measurement differs from the sketch.",
        "Log discovery that expands quantities: wet insulation behind finishes, damaged decking, hidden soot paths, or mold-affected assemblies.",
        "Cross-reference notes to photo filenames or IDs and to the comparison worksheet line.",
        "Keep notes factual and observational — document conditions, not coverage conclusions or policy interpretations.",
        "On multi-day jobs, chronological notes beat end-of-job narratives for duration- and quantity-dependent lines.",
        "Hand note packs with the quantity worksheet to Claim File Audit before supplement packaging.",
      ],
    },
    {
      id: "code-related-quantity-impacts",
      title: "Code-Related Quantity Impacts",
      actions: [
        "Document code-driven quantity increases with AHJ notes, permit requirements, and photos of the condition addressed — not contractor opinions as coverage advice.",
        "Common quantity impacts include ice/water barrier extents, decking replacement, underlayment upgrades, AFCI/GFCI counts, smoke sealing, and fire blocking LF.",
        "Tie each upgraded quantity to a citation or written AHJ direction and a measurement or count.",
        "Route roofing code packages to the Code Upgrade Documentation Guide and fire code packages to the Fire Code Upgrade Documentation Guide.",
        "Keep code exhibits in a dedicated folder linked from the quantity worksheet for reinspection.",
        "If applicability is unclear, capture the condition and AHJ communication; do not present contractor interpretation as policy coverage advice.",
      ],
    },
    {
      id: "common-quantity-validation-mistakes-narrative",
      title: "Common Quantity Validation Mistakes",
      actions: [
        "Trusting carrier sketch dimensions without independent measurement.",
        "Disputing quantities with dollar arguments instead of measurement photos and methodology notes.",
        "Mixing estimate versions on one comparison worksheet.",
        "Using inconsistent area labels across estimate, photos, and notes.",
        "Marking quantity deltas supplement-ready before evidence is strong enough for desk review.",
        "Skipping commercial location indexing so high-dollar quantities cannot be reconciled by zone.",
      ],
    },
    {
      id: "documentation-supporting-revised-quantities",
      title: "Building Documentation That Supports Revised Quantities",
      actions: [
        "Package each revised quantity with carrier qty, field qty, delta, methodology note, photo refs, and current estimate version.",
        "Index the packet so a reviewer can open the assembly evidence in one session without renaming folders.",
        "Route supplement-ready quantity gaps through Supplement Submission with line hints — park unsupported items in recapture.",
        "Update the worksheet within 24 hours after reinspection or a revised carrier estimate.",
        "Align production guardrails so unpaid high-value quantity gaps are not absorbed silently.",
        "Use Claim File Audit as the peer gate before CRM upload when quantity dollars are material to the file.",
      ],
    },
    {
      id: "quantity-validation-workflow-asset",
      title: "Operational Asset — Quantity Validation Workflow",
      actions: [
        "Step 1 — Intake: assign quantity review owner; file latest estimate and sketch; confirm measurement tools and photo standards.",
        "Step 2 — Index: publish area/plane/location IDs matching estimate sections to photo folders.",
        "Step 3 — Measure: complete independent takeoffs for high-value assemblies; record methodology.",
        "Step 4 — Photograph: capture measurement-context and condition photos the same day.",
        "Step 5 — Reconcile: fill comparison worksheet (carrier qty / field qty / delta / refs); classify each line.",
        "Step 6 — Specialty: run roofing, interior, water, fire, commercial, and code quantity passes as applicable.",
        "Step 7 — Route: send supplement-ready deltas to packaging; send weak evidence to field recapture; set production guardrails.",
        "Gate: no high-value quantity marked complete until measurement, photo, and estimate section reconcile.",
      ],
    },
    {
      id: "field-measurement-checklist-asset",
      title: "Operational Asset — Field Measurement Checklist",
      actions: [
        "Roofing planes measured; squares and edges recorded with plane IDs.",
        "Interior SF (flooring, drywall, paint, insulation, ceilings) recalculated by room/area.",
        "Openings, fixtures, and LF trim counted with labeled photos.",
        "Mitigation equipment counts and days reconciled to logs when claimed.",
        "Debris, dumpster, and disposal quantities supported by production records when claimed.",
        "Commercial quantities mapped to building/floor/suite or zone IDs.",
        "Methodology and waste assumptions noted for large assemblies.",
        "Re-measure logged when discovery changes the assembly.",
      ],
    },
    {
      id: "documentation-checklist-asset",
      title: "Operational Asset — Documentation Checklist",
      actions: [
        "Latest carrier estimate version filed and cited on the worksheet.",
        "Independent measurements and takeoff notes stored with the file.",
        "Comparison worksheet complete with classifications and evidence refs.",
        "Area index consistent across estimate, photos, and notes.",
        "Field notes contemporaneous and cross-referenced to photo IDs.",
        "Code/AHJ exhibits linked when quantity impacts are code-driven.",
        "Specialty logs attached when days or equipment counts drive quantities.",
        "Packet ready for Claim File Audit or Supplement Submission.",
      ],
    },
    {
      id: "photo-checklist-asset",
      title: "Operational Asset — Photo Checklist",
      actions: [
        "Overview photo of each measured assembly or area.",
        "Measurement-context photo (tape, laser, or labeled dimension in frame).",
        "Detail photos explaining why field qty differs from carrier qty.",
        "Labels match area/plane IDs on the comparison worksheet.",
        "Pre-demo / pre-cover shots preserved for hidden assemblies.",
        "Commercial photos organized by location ID.",
        "Weak or unlabeled sets flagged for recapture before supplement-ready status.",
      ],
    },
    {
      id: "quality-control-checklist-asset",
      title: "Operational Asset — Quality-Control Checklist",
      actions: [
        "Quantity review owner assigned; worksheet version matches active estimate.",
        "High-value assemblies independently measured with methodology notes.",
        "Every supplement-ready quantity delta has photo and measurement refs.",
        "Area labels consistent across estimate, photos, notes, and worksheet.",
        "Roofing, interior, water, fire, commercial, and code passes completed when applicable.",
        "Production guardrails acknowledged for unpaid high-value quantity gaps.",
        "Revised estimate triggers a fresh quantity reconciliation — prior deltas archived.",
        "Peer or Claim File Audit gate passed before packaging material quantity supplements.",
      ],
    },
    {
      id: "common-mistakes-checklist-asset",
      title: "Operational Asset — Common Quantity Validation Mistakes",
      actions: [
        "Do not trust the carrier sketch without independent measurement.",
        "Do not dispute quantities without measurement-context photos.",
        "Do not mix estimate versions on one worksheet.",
        "Do not use inconsistent area labels across artifacts.",
        "Do not mark weak evidence as supplement-ready.",
        "Do not skip commercial location indexing on multi-area losses.",
        "Do not delay measurement until after demo removes proof.",
        "Do not treat quantity validation as coverage advice or public adjusting.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "qty-owner-assigned",
      label: "Quantity review owner assigned and worksheet tied to the latest estimate version",
      required: true,
      detail:
        "Unowned quantity review drifts into production without reconciled takeoffs.",
    },
    {
      id: "independent-measure-complete",
      label: "High-value assemblies independently measured with methodology documented",
      required: true,
      detail:
        "Sketch-only quantities fail when desk review asks for field proof.",
    },
    {
      id: "photo-context-present",
      label: "Measurement-context photos labeled to the same area IDs as the worksheet",
      required: true,
      detail:
        "Totals without visual context are treated as speculative at desk review.",
    },
    {
      id: "worksheet-classified",
      label: "Comparison worksheet complete with classifications and evidence refs",
      required: true,
      detail:
        "Unclassified deltas cannot route cleanly to supplement packaging or recapture.",
    },
    {
      id: "specialty-qty-passes",
      label: "Applicable roofing, interior, water, fire, commercial, and code quantity passes complete",
      required: true,
      detail:
        "Skipping specialty passes leaves the highest-dollar quantity misses undocumented.",
    },
    {
      id: "production-guardrails-qty",
      label: "Production guardrails acknowledged for unpaid high-value quantity gaps",
      required: true,
      detail:
        "PM must acknowledge under-scoped quantities before crews absorb unpaid assemblies.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Trusting carrier sketch dimensions without independent measurement",
      impact:
        "Every SF- and square-based line is wrong; supplements look inflated when field proof arrives late.",
      correction:
        "Measure independently, photograph measurement context, and document variances before quantity disputes.",
    },
    {
      mistake: "Arguing quantity dollars without photos or methodology notes",
      impact:
        "Desk reviewers deny unsupported takeoffs; file credibility drops for the entire supplement.",
      correction:
        "Attach measurement-context photos and written methodology; classify weak items as needs more evidence.",
    },
    {
      mistake: "Mixing estimate versions on one quantity worksheet",
      impact:
        "Deltas and approvals become untraceable after a revised carrier estimate.",
      correction:
        "Version the worksheet to the active estimate; archive prior quantity comparisons.",
    },
    {
      mistake: "Inconsistent area labels across estimate, photos, and notes",
      impact:
        "Desk reviewers cannot reconcile evidence to lines despite photo volume.",
      correction:
        "Enforce Documentation Standards naming so every artifact resolves to the same area ID.",
    },
    {
      mistake: "Delaying measurements until after demolition or dry-in",
      impact:
        "Evidence is destroyed; quantity changes appear reconstructed and speculative.",
      correction:
        "Measure and photograph high-value assemblies before cover-up; re-measure discovery the same day it appears.",
    },
    {
      mistake: "Skipping commercial location indexing",
      impact:
        "Proportional cuts dismiss undocumented zones; high-dollar assemblies cannot be defended by building or suite.",
      correction:
        "Map quantities to Building → Floor → Suite/Zone IDs before marking commercial deltas supplement-ready.",
    },
    {
      mistake: "Marking quantity deltas supplement-ready with weak evidence",
      impact:
        "Premature packaging invites denial and slows legitimate gaps on the same file.",
      correction:
        "Use the QC checklist gate; upgrade photos and notes before routing to Supplement Submission.",
    },
    {
      mistake: "Treating quantity validation as coverage advice or public adjusting",
      impact:
        "Compliance and credibility risk; operational focus is lost.",
      correction:
        "Stay in documentation and workflow: measure, photograph, reconcile to estimate lines, and route supported deltas through supplement packaging.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Independent measurements show higher SF, squares, LF, or counts than the carrier estimate",
      documentation:
        "Comparison worksheet with carrier qty, field qty, methodology notes, and measurement-context photos on the current estimate version.",
      lineItemHint: "Corrected squares, SF finishes, LF trim, fixture and opening counts",
    },
    {
      trigger: "Roofing plane or accessory quantities understated relative to measured edges and details",
      documentation:
        "Plane takeoffs, edge measurements, detail photos, and roofing documentation labels; code exhibits when upgrades apply.",
      lineItemHint: "Additional squares, underlayment, ice barrier, drip edge, flashing, ventilation",
    },
    {
      trigger: "Water mitigation equipment days or demolition SF exceed estimate quantities with log support",
      documentation:
        "Moisture maps, placement photos, equipment logs, and daily reports by area ID.",
      lineItemHint: "Additional demo SF, equipment days, monitoring visits, containment",
    },
    {
      trigger: "Fire or smoke extent documented beyond estimate finish quantities",
      documentation:
        "Labeled zone photos, contents counts, HVAC notes, and area-indexed quantity worksheet.",
      lineItemHint: "Additional clean/seal SF, contents protection, HVAC cleaning quantities",
    },
    {
      trigger: "Commercial multi-area quantities missing or not indexed by location",
      documentation:
        "Master area index, per-location takeoffs, and photos organized by building/floor/suite.",
      lineItemHint: "Location-indexed quantity corrections and previously omitted zones",
    },
    {
      trigger: "Code or AHJ requirements increase measured quantities",
      documentation:
        "AHJ notes, citations, photos of conditions, and measured extents — no engineering opinions as coverage advice.",
      lineItemHint: "Ice barrier extents, decking, sealing, blocking, device counts, permits",
    },
    {
      trigger: "Quantity worksheet complete and evidence indexed but carrier estimate still understates documented quantities",
      documentation:
        "Indexed quantity packet cross-referencing each delta to photos, measurements, and notes — routed through Supplement Submission.",
      lineItemHint:
        "Quantity supplement package with line-item justification; Claims Ninja supports documentation review, estimating, and claim recovery workflows",
    },
  ],
  faq: [
    {
      question:
        "How is this guide different from the Insurance Estimate Review & Scope Validation Guide?",
      answer:
        "The Scope Validation Guide is the cluster cornerstone for estimate anatomy, scope validation, and an overview of quantity checks. This guide is the specialty deep-dive on quantity validation — measurement workflows, peril-specific quantity review, documentation checklists, and QC gates for revised quantities.",
    },
    {
      question: "How is this guide different from the Insurance Estimate Review Playbook?",
      answer:
        "The Playbook is the operational hub for the full estimate review lifecycle. This guide focuses on the quantity validation specialty: how to measure, photograph, document, and classify quantity discrepancies so they can enter the playbook’s packaging and settlement steps with evidence.",
    },
    {
      question: "When should a quantity discrepancy be marked supplement-ready?",
      answer:
        "When independent measurements, measurement-context photos, and worksheet entries reconcile to the current estimate version with a clear carrier-vs-field delta. Weak photos or missing methodology keep the item in needs-more-evidence until upgraded.",
    },
    {
      question: "Does this guide teach estimating software or Xactimate entry?",
      answer:
        "No. It teaches contractor documentation and operational workflows for validating estimate quantities against field conditions. It does not provide estimating software instruction.",
    },
    {
      question: "Does this guide provide coverage or legal advice?",
      answer:
        "No. It is an operational documentation standard for quantity validation. It does not provide legal advice, policy interpretation, engineering opinions, or public-adjusting guidance.",
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
      label: "Claim Documentation Standards",
      href: "/resources/guides/general-claims/documentation-standards-guide",
    },
    {
      label: "Carrier Estimate Review Workflow",
      href: "/resources/guides/general-claims/carrier-estimate-review-guide",
    },
    {
      label: "Commercial Insurance Supplement Playbook for Contractors",
      href: "/resources/guides/general-claims/commercial-insurance-supplement-playbook-for-contractors",
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
      label: "Code Upgrade Documentation Guide",
      href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
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
      label: "The Most Overlooked Line Items in Insurance Estimates",
      href: "/resources/blog/most-overlooked-line-items-in-insurance-estimates",
    },
    {
      label: "Five Red Flags That an Insurance Estimate Is Missing Scope",
      href: "/resources/blog/five-red-flags-that-an-insurance-estimate-is-missing-scope",
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

export { GUIDE_PATH as QUANTITY_VALIDATION_GUIDE_FOR_CONTRACTORS_PATH };
