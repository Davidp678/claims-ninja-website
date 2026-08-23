import { defineGuide } from "@/lib/guides/guide-builder";

const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "insurance-estimate-review-playbook-for-contractors" as const;
const GUIDE_PATH = `/resources/guides/${CATEGORY}/${GUIDE_SLUG}` as const;

export const INSURANCE_ESTIMATE_REVIEW_PLAYBOOK_FOR_CONTRACTORS = defineGuide({
  slug: GUIDE_SLUG,
  title: "Insurance Estimate Review Playbook for Contractors",
  excerpt:
    "The definitive contractor operational playbook for reviewing insurance estimates — from receiving the carrier estimate through structure review, field comparison, scope and quantity validation, code and general conditions passes, documentation packaging, supplement preparation, carrier communication, reinspection support, revision review, and final settlement reconciliation.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Insurance estimate review",
    "Estimate review playbook",
    "Estimate review workflow",
    "Scope validation",
    "Quantity validation",
    "Scope audit",
    "Supplement preparation",
    "Reinspection preparation",
    "Carrier estimate",
    "Xactimate",
    "Claim Recovery",
    "Restoration contractors",
    "Roofing contractors",
    "Water mitigation",
    "Fire restoration",
    "Mold remediation",
    "Commercial contractors",
  ],
  publishedAt: "2026-08-03",
  updatedAt: "2026-08-03",
  estimatedMinutes: 32,
  seoTitle:
    "Insurance Estimate Review Playbook for Contractors | Operational Workflow",
  seoDescription:
    "Contractor insurance estimate review playbook: receive and structure-check the carrier estimate, validate scope and quantities, run code/GC/equipment passes, assemble documentation, prepare supplements, support reinspection, and reconcile settlement.",
  relatedGuideSlugs: [
    "insurance-estimate-review-scope-validation-guide",
    "quantity-validation-guide-for-contractors",
    "scope-audit-guide-for-contractors",
    "missing-line-item-documentation-guide-for-contractors",
    "general-conditions-documentation-guide-for-contractors",
    "carrier-estimate-review-guide",
    "commercial-insurance-supplement-playbook-for-contractors",
    "commercial-insurance-claims-documentation-guide",
    "documentation-standards-guide",
    "claim-file-audit-guide",
    "supplement-submission-guide",
    "op-qualification-guide",
    "first-48-hours-checklist",
    "photo-documentation-standards-guide",
    "code-upgrade-documentation-guide",
    "equipment-documentation-guide",
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
    "how-contractors-find-quantity-errors-in-insurance-estimates",
    "five-red-flags-that-an-insurance-estimate-is-missing-scope",
    "most-overlooked-line-items-in-insurance-estimates",
    "why-carrier-estimates-miss-line-items",
    "xactimate-estimate-review-checklist-contractors",
    "first-48-hours-after-carrier-estimate",
    "commercial-claims-documentation-checklist",
    "insurance-supplementing-guide-contractors",
    "why-commercial-insurance-claims-get-underpaid",
  ],
  faqIds: [
    "estimate-review-workflow",
    "scope-audit-workflow",
    "supplement-preparation",
    "estimate-organization",
    "reinspection-preparation",
    "estimate-review-for-contractors",
    "scope-validation-carrier-estimates",
    "quantity-validation-insurance-estimates",
  ],
  claimTypes: ["roofing", "water", "fire", "mold", "commercial", "large-loss"],
  purpose:
    "This playbook is the operational capstone of the Estimate Review & Scope Validation authority cluster. The Insurance Estimate Review & Scope Validation Guide teaches concepts — estimate anatomy, what to validate, and why gaps appear. This playbook walks contractors through the complete operational workflow used to review insurance estimates, validate scope, organize documentation, prepare supplements, support reinspections, and improve claim outcomes. Use it as the day-to-day execution standard for restoration contractors, roofing contractors, water mitigation contractors, fire restoration contractors, mold remediation contractors, and commercial contractors. Pair it with the Carrier Estimate Review Workflow for day-one intake sequencing, Documentation Standards for evidence capture, the Scope Audit Guide and Missing Line Item Documentation Guide when omitted work must be identified and supported with exhibits, Supplement Submission for packaging, and the Commercial Insurance Supplement Playbook when the file is commercial or multi-building. Claims Ninja supports contractors with documentation standards, estimate review workflows, supplement packaging, and claim recovery operations — we are not a public adjuster, carrier representative, or legal counsel. This playbook does not provide legal advice, policy interpretation, engineering opinions, or public-adjusting guidance.",
  whenToUse: [
    {
      condition: "Carrier estimate received and must be reviewed before production commits",
      signal:
        "Estimate in inbox or XactAnalysis queue; review owner assigned within hours of receipt",
    },
    {
      condition: "Field documentation must be compared line-by-line to the carrier estimate",
      signal:
        "Photos, measurements, and specialty logs ready; comparison worksheet not yet started or incomplete",
    },
    {
      condition: "Scope, quantity, code, GC, or equipment gaps need a structured validation pass",
      signal:
        "Sketch mismatches, SF/count deltas, missing trade categories, or overlooked line-item patterns flagged",
    },
    {
      condition: "Validated gap list ready for documentation packaging and supplement preparation",
      signal:
        "Supplement-ready gaps classified with evidence refs; packet assembly and cover letter pending",
    },
    {
      condition: "Carrier reinspection, revised estimate, or settlement reconciliation requires organized evidence",
      signal:
        "Reinspection scheduled, versioned revision arrived, or final approval needs production reconciliation",
    },
  ],
  prerequisites: [
    "Current carrier estimate (latest version) with price list, sketch when available, and version noted",
    "Field documentation set meeting Documentation Standards: labeled photos, measurements, moisture or specialty logs as applicable",
    "Contractor field estimate, scope worksheet, or room/area list independent of the carrier sketch",
    "Assigned review owner (PM or supplement coordinator) within hours of estimate receipt",
    "Comparison worksheet or marked-up PDF with columns for carrier qty, field qty, delta, photo ref, and priority",
    "CRM or job-file tracking for estimate versions, gap status, and follow-up dates",
  ],
  requiredDocumentation: [
    {
      id: "carrier-estimate-latest",
      label: "Current carrier estimate (latest version)",
      required: true,
      detail:
        "Note version number, price list date, sketch inclusion, room list, and any prior revisions. Archive superseded versions so comparisons always reference the active estimate.",
    },
    {
      id: "field-scope-worksheet",
      label: "Contractor field estimate or scope worksheet",
      required: true,
      detail:
        "Independent room/area list, measurements, material grades, trade breakdown, and equipment or labor notes captured from the site — not copied from the carrier sketch alone.",
    },
    {
      id: "labeled-field-photos",
      label: "Labeled field photos supporting scope and quantities",
      required: true,
      detail:
        "Overview-to-detail sequences with area labels matching the estimate. Include measurement context in frame for SF- and count-dependent lines.",
    },
    {
      id: "measurement-support",
      label: "Measurement worksheets, sketches, or takeoffs",
      required: true,
      detail:
        "Field measurements for high-dollar assemblies: roofing squares, flooring SF, drywall, paint, openings, LF trim, fixture counts, and mitigation equipment days.",
    },
    {
      id: "comparison-worksheet",
      label: "Line-by-line comparison worksheet or marked-up PDF",
      required: true,
      detail:
        "Columns: carrier qty, field qty, delta, photo/document ref, classification (supplement-ready / needs more evidence / low priority), and owner.",
    },
    {
      id: "specialty-logs",
      label: "Specialty logs when peril applies",
      required: true,
      detail:
        "Moisture maps and equipment logs for water; content/pack-out notes for fire; protocol and containment notes for mold; pitch/access photos for steep roofing — tied to estimate sections.",
    },
    {
      id: "code-ordinance-support",
      label: "Code and ordinance support file when upgrades apply",
      required: false,
      detail:
        "AHJ notes, permit requirements, photos of non-compliant conditions, and citations that support upgrade line items — documentation only, not engineering opinions.",
    },
    {
      id: "temp-protection-gc-records",
      label: "Temporary protection and general conditions records",
      required: false,
      detail:
        "Board-up, tarp, temporary roof, contents protection, dumpsters, supervision, and site logistics with dates, locations, photos, and authorization.",
    },
    {
      id: "equipment-labor-records",
      label: "Equipment and labor duration records",
      required: false,
      detail:
        "Equipment placement photos, rental periods, crew counts, after-hours notes, and access constraints that support duration and labor multipliers.",
    },
    {
      id: "gap-list-packet",
      label: "Prioritized gap list ready for supplement routing",
      required: true,
      detail:
        "Written list of omissions, quantity deltas, and scope gaps with evidence refs — classified and handed to supplement workflow before unpaid production absorbs them.",
    },
    {
      id: "supplement-package",
      label: "Supplement package with cover letter and exhibit index",
      required: true,
      detail:
        "Cover letter mapping each issue to exhibits, revised estimate, comparison worksheet, and indexed attachments — see Supplement Submission Workflow.",
    },
    {
      id: "reinspection-packet",
      label: "Reinspection briefing packet for disputed lines",
      required: false,
      detail:
        "One-page summary, quantity comparison table, photo stations staged by disputed area, and roles assigned before adjuster arrival.",
    },
    {
      id: "settlement-reconciliation",
      label: "Approved scope reconciliation worksheet at settlement",
      required: true,
      detail:
        "Compare approved lines to production scope by area; flag remaining omissions before claim closeout.",
    },
  ],
  steps: [
    {
      id: "introduction",
      title: "Introduction — Operational Estimate Review",
      actions: [
        "Insurance estimate review is the contractor workflow for receiving a carrier estimate, comparing it to field documentation, validating scope and quantities, organizing evidence, preparing supplements, supporting reinspections, and reconciling settlement — before production absorbs unpaid work.",
        "The Insurance Estimate Review & Scope Validation Guide is the conceptual cornerstone: anatomy of an estimate, what to validate, and common gap patterns. This playbook is the operational hub: the complete phase-by-phase workflow your office and field teams execute on every file.",
        "Carrier estimates are built for speed and standardization. Templates, macros, and limited site time routinely omit job-specific conditions that field crews see every day. Totals-only review hides offsetting errors.",
        "This playbook applies across restoration, roofing, water mitigation, fire restoration, mold remediation, and commercial losses. Route peril-specific capture to Documentation Standards and trade cornerstones; route commercial multi-building packaging to the Commercial Insurance Supplement Playbook.",
        "Operational assets in this playbook include the complete estimate review workflow, scope and quantity validation checklists, documentation checklist, supplement preparation checklist, reinspection checklist, quality-control gates, and common estimate review mistakes.",
        "Focus entirely on contractor operational workflows — not policy interpretation, legal advice, public adjusting, engineering opinions, or claim negotiation advice.",
      ],
      notes:
        "For concepts and validation standards, open the Insurance Estimate Review & Scope Validation Guide. For day-one intake sequencing, use the Carrier Estimate Review Workflow and First 48 Hours checklist.",
    },
    {
      id: "phase-1-receive",
      title: "Phase 1 — Receive the Carrier Estimate",
      owner: "supplement-coordinator",
      actions: [
        "File the estimate the same day it arrives — PDF and/or XactAnalysis import — with claim number, version, price list date, and receipt timestamp logged in CRM.",
        "Assign a review owner (PM or supplement coordinator) within hours of receipt; unowned estimates drift into production without a comparison worksheet.",
        "Confirm sketch inclusion, room/area list, and whether prior revisions exist; archive superseded versions so the active estimate is unambiguous.",
        "Kick off the First 48 Hours checklist: catalog the file, confirm field documentation completeness, and open a blank comparison worksheet.",
        "Notify field lead if critical openings, moisture conditions, or temporary protection must be preserved until review and possible reinspection.",
        "Do not start production on high-value unpaid scope until the core comparison is underway and production guardrails are set.",
      ],
      notes:
        "Receipt discipline prevents version confusion later. Every later phase depends on a locked baseline estimate version.",
    },
    {
      id: "phase-2-structure",
      title: "Phase 2 — Review Estimate Structure",
      owner: "supplement-coordinator",
      actions: [
        "Read the cover and administrative block first: claim number, risk address, price list, tax jurisdiction, estimate version, and sketch presence.",
        "Map the room or area list to your field floor plan. Note missing rooms, combined spaces, attached structures, and naming that will not match photo folders.",
        "Scan trade sections in order: general conditions, temporary protection / emergency, demolition, mitigation equipment, rough trades, finishes, exterior/roofing, and contents when present.",
        "Identify macros and template assumptions — default ceiling heights, standard material grades, bundled quantities, and zero-quantity placeholders that hide gaps.",
        "Locate O&P, tax, and overhead treatments. Flag multi-trade coordination questions for the O&P Qualification Guide rather than arguing them inside the first gap list.",
        "Note sketch dimensions, openings, and attached structures separately from line-item totals so quantity validation has an independent baseline.",
      ],
      notes:
        "Structure review catches systematic omissions before dollar totals distract the team. Pair with the conceptual guide's estimate anatomy section.",
    },
    {
      id: "phase-3-compare",
      title: "Phase 3 — Compare Estimate to Field Documentation",
      owner: "project-manager",
      actions: [
        "Assemble the comparison set: latest carrier estimate, field photos, measurements, specialty logs, and your independent scope worksheet.",
        "Walk room-by-room or area-by-area: does every damaged area appear in the estimate with matching labels and a photo sequence?",
        "Mark three outcome classes per discrepancy: in estimate and supported, in estimate but quantity/grade wrong, or documented in field but absent from the estimate.",
        "Cross-walk photo folders and daily logs to estimate sections — unlabeled evidence does not defend a gap list at desk review.",
        "Capture missing documentation the same day you find a gap; do not wait until supplement packaging to recreate openings or moisture conditions.",
        "Record the comparison on a written worksheet with photo refs — memory and verbal walkthroughs fail reinspection.",
      ],
      notes:
        "Comparison without a written worksheet collapses under reinspection. Documentation Standards labeling is a prerequisite for fast reconciliation.",
    },
    {
      id: "phase-4-scope",
      title: "Phase 4 — Scope Validation",
      owner: "supplement-coordinator",
      actions: [
        "Validate that the estimate includes every trade and phase required by documented conditions — not only the lines that appear under a single macro.",
        "Confirm demolition, removal, and disposal accompany replacement lines where field conditions require them.",
        "Check that mitigation, temporary protection, and rebuild phases are separated and each supported by dated evidence.",
        "On commercial or multi-area losses, confirm building/floor/suite indexing in the estimate matches the documentation index.",
        "Identify scope that is documented but truncated: partial room finishes, missing elevations, omitted attached structures, or incomplete systems.",
        "Run the Scope Validation Checklist (asset below); classify each scope gap as supplement-ready or needs more evidence before routing.",
      ],
      notes:
        "Scope validation is not a price fight — it confirms every damaged area and required phase appears with supportable lines.",
    },
    {
      id: "phase-5-quantity",
      title: "Phase 5 — Quantity Validation",
      owner: "supplement-coordinator",
      actions: [
        "Recalculate high-value SF and count lines from field measurements: roofing squares, flooring, drywall, paint, insulation, openings, LF trim, and fixture counts.",
        "Compare carrier sketch dimensions to independent measurements. Document variances with photos showing tape, laser, or labeled takeoff context.",
        "Check unit counts and days: air movers, dehumidifiers, scaffolding, dumpsters, supervision days, and monitoring visits.",
        "Flag zero-quantity lines, bundled macros, and rounded quantities that understate assemblies visible on site.",
        "Prioritize quantity disputes by dollar impact and evidence strength — weak photos should be upgraded before the gap is marked supplement-ready.",
        "Run the Quantity Validation Checklist (asset below) as a gate before production or supplement packaging.",
        "For the specialty deep-dive on roofing, interior, water, fire, and commercial quantity workflows — plus measurement, photo, and QC checklists — use the Quantity Validation Guide for Contractors.",
      ],
      notes:
        "Quantity fights without measurement photos and takeoffs fail at desk review. Lead with documented shortfalls before disputing unit prices. Pair with the Quantity Validation Guide when high-value assemblies need a full specialty pass.",
    },
    {
      id: "phase-6-code",
      title: "Phase 6 — Code and Ordinance Review",
      owner: "project-manager",
      actions: [
        "Document code-driven scope with AHJ notes, permit requirements, and photos of non-compliant existing conditions — do not invent engineering opinions in the estimate file.",
        "Tie each upgrade candidate to a citation or written AHJ direction and a photo of the condition it addresses.",
        "Common documentation targets include ice/water barrier, decking requirements, AFCI/GFCI, smoke sealing, fire blocking, and matching requirements where locally enforced.",
        "Route roofing code packages through the Code Upgrade Documentation Guide and fire code packages through the Fire Code Upgrade Documentation Guide.",
        "Keep ordinance documentation in a dedicated folder linked from the comparison worksheet so reinspection can open evidence in seconds.",
        "If code applicability is unclear, capture the condition and AHJ communication; do not present contractor interpretation as policy coverage advice.",
      ],
      notes:
        "Code review is a documentation pass. Capture triggers and AHJ direction; do not draft legal or engineering opinions.",
    },
    {
      id: "phase-7-general-conditions",
      title: "Phase 7 — General Conditions Review",
      owner: "project-manager",
      actions: [
        "Review general conditions for permits, project supervision, temporary facilities, debris handling, dumpsters, and site protection.",
        "Confirm that commercial or multi-phase jobs document supervision and logistics proportional to footprint and duration.",
        "Flag missing general conditions when field daily reports show active coordination, waste removal, or temporary facilities not reflected in the estimate.",
        "Inventory temporary protection performed or still required: board-up, tarp, temporary roof, contents protection, site security, and weatherization — with dated photos and location labels.",
        "Keep general conditions and temporary protection evidence chronological — daily reports and in-place photos beat end-of-job narratives.",
        "Do not inflate general conditions without production records; unsupported GC lines are a common credibility failure at desk review.",
        "For project-level documentation depth — supervision, trade coordination, logistics, temporary facilities, and duration — use the General Conditions Documentation Guide for Contractors. Keep O&P eligibility on the O&P Qualification Documentation Standard.",
      ],
      notes:
        "Temporary protection and general conditions are among the most overlooked categories. Photograph them in place before removal.",
    },
    {
      id: "phase-8-equipment-labor",
      title: "Phase 8 — Equipment and Labor Review",
      owner: "field",
      actions: [
        "Reconcile mitigation equipment counts and days to moisture logs, placement photos, and daily reports — not to template defaults alone.",
        "Review labor assumptions for after-hours, occupied conditions, multiple mobilizations, supervision, and specialty access (steep, high, confined).",
        "Compare crew counts and trade coordination notes to O&P eligibility documentation when multi-trade scope applies — see O&P Qualification Guide.",
        "Flag equipment pulled early or left longer than carrier days with contemporaneous logs; duration disputes fail without daily evidence.",
        "On commercial losses, tie equipment and labor to area IDs so proportional cuts cannot dismiss undocumented zones — see Equipment Documentation Guide.",
        "Send unresolved labor/equipment gaps to the comparison worksheet with photo and log refs before production absorbs unpaid days.",
      ],
      notes:
        "Equipment and labor supplements fail when counts cannot be tied to dates and areas. Daily logs during the job outperform reconstructed spreadsheets at invoice.",
    },
    {
      id: "phase-9-missing-lines",
      title: "Phase 9 — Missing Line Item Review",
      owner: "supplement-coordinator",
      actions: [
        "Scan systematically for categories carriers omit under time pressure: temporary protection, debris, permits, supervision, equipment, matching, and access charges.",
        "Use peril-specific checklists — steep/high and drip edge on roofing; equipment days and containment on water/mold; contents protection and HVAC on fire — without treating any list as exhaustive.",
        "Require a photo or measurement reference for every candidate addition before it enters the gap list as supplement-ready.",
        "Separate true omissions from items that exist under different line codes or bundled descriptions — avoid duplicate requests that damage credibility.",
        "Cross-reference The Most Overlooked Line Items in Insurance Estimates for common patterns, then validate each against this file's field conditions.",
        "Hand high-confidence omissions to the supplement workflow with line hints and evidence refs; park low-confidence items until documentation improves.",
      ],
      notes:
        "Missing-line review is a specialty pass after scope and quantity validation — not a substitute for them.",
    },
    {
      id: "phase-10-documentation-package",
      title: "Phase 10 — Documentation Package Assembly",
      owner: "supplement-coordinator",
      actions: [
        "Assemble the review package: comparison worksheet, prioritized gap list, labeled photos by area, measurements/takeoffs, specialty logs, code/GC/equipment subfolders when applicable, and estimate version history.",
        "Enforce Documentation Standards labeling so area names match estimate sections and photo folders resolve in under two minutes.",
        "Prefer contemporaneous evidence — same-day photos and logs — over reconstructed packages after production.",
        "Bundle supporting docs by gap ID or estimate section for reinspection and supplement packaging.",
        "Run the Documentation Checklist (asset below); when evidence is incomplete, classify the gap as needs more evidence and assign a capture task before supplement routing.",
        "Use Claim File Audit as a peer-review gate on high-dollar packages before submission.",
      ],
      notes:
        "Build the documentation package during the job — not at invoice. Indexed packages outperform volume dumps.",
    },
    {
      id: "phase-11-supplement-prep",
      title: "Phase 11 — Supplement Preparation",
      owner: "supplement-coordinator",
      actions: [
        "Convert only supplement-ready gaps into revised estimate lines — each with an exhibit reference and area label.",
        "Draft a cover letter: one short paragraph per issue (omission or quantity delta, evidence exhibit, requested line or quantity change) plus a summary table that matches the estimate dollar delta.",
        "Export the revised estimate in the carrier-preferred format; name files ClaimNumber_Supplement_vN_Date.",
        "Run the Supplement Preparation Checklist (asset below) before routing to Supplement Submission Workflow.",
        "On commercial or multi-building files, separate sections by building/area ID and follow the Commercial Insurance Supplement Playbook for packaging cadence.",
        "Do not package unsupported additions — needs-more-evidence gaps stay in recapture, not in the first submission.",
      ],
      notes:
        "Supplement preparation is packaging validated gaps, not inventing scope. Credibility depends on evidence density per requested dollar.",
    },
    {
      id: "phase-12-carrier-communication",
      title: "Phase 12 — Carrier Communication",
      owner: "supplement-coordinator",
      actions: [
        "Write cover letters factually — issue, evidence exhibit, requested remedy — without ultimatums or adversarial tone.",
        "Route through the correct carrier channel — email, portal, or XactAnalysis — and never submit the same package through multiple channels simultaneously.",
        "Log submission date, method, recipient, package version, and attachment list in CRM the same day.",
        "Set follow-up reminders at 3, 7, and 14 business days per Supplement Submission Workflow.",
        "Respond to RFIs with targeted exhibits mapped to line numbers — not full unindexed resubmissions.",
        "Communication checklist: confirm recipient, channel, version label, attachment index, follow-up schedule, and stakeholder copy when appropriate before send.",
      ],
      notes:
        "Clear, indexed communication shortens review cycles. Aggressive tone flags files for supervisor delay.",
    },
    {
      id: "phase-13-reinspection",
      title: "Phase 13 — Reinspection Preparation",
      owner: "project-manager",
      actions: [
        "Build a reinspection packet from the comparison worksheet: prioritized gaps, photo refs, measurements, and specialty logs — not an unsorted folder dump.",
        "Confirm site access, areas still available to view, and which openings or moisture conditions must be preserved until the visit.",
        "Assign roles: who walks the adjuster, who holds the gap list, who photographs new discoveries live.",
        "Pre-stage printed or tablet views of sketch variances, quantity takeoffs, and code/temporary protection evidence.",
        "Run the Reinspection Checklist (asset below); answer carrier questions with exhibit references and measurements — not opinions or policy arguments.",
        "After reinspection, update the gap list within 24 hours and revise the estimate within one week so lines discussed on site appear in submitted scope.",
      ],
      notes:
        "Reinspections fail when adjusters cannot locate evidence by area quickly. Stage disputed locations — not the entire job binder for a single-room dispute.",
    },
    {
      id: "phase-14-revision-review",
      title: "Phase 14 — Estimate Revision Review",
      owner: "supplement-coordinator",
      actions: [
        "When a revised carrier estimate arrives, file it as a new version and start a fresh comparison worksheet — never mix deltas across estimate versions.",
        "Reconcile prior gap list items: approved, partially approved, denied, or still open; update CRM status the same day.",
        "Re-run scope and quantity passes only on changed sections and still-open gaps — do not re-litigate fully approved lines without new field discovery.",
        "For partial approvals, resubmit denied lines surgically with additional evidence rather than resubmitting the entire approved package.",
        "Capture demolition or production discovery as new gaps with dated photos; label the supplement version so reviewers track phased discovery.",
        "Keep the live gap list open until settlement — close items when approved; queue discovery items when tear-out or specialist reports land.",
      ],
      notes:
        "Version discipline prevents duplicate-billing objections and untraceable approvals. Archive prior comparison worksheets.",
    },
    {
      id: "phase-15-settlement",
      title: "Phase 15 — Final Settlement Review",
      owner: "supplement-coordinator",
      actions: [
        "Reconcile every approved line against production scope and job budget by area; flag lines approved below documented quantities.",
        "Run the final gap list against the approved estimate; queue surgical amendments for remaining documented omissions before access is lost.",
        "Confirm the closeout packet includes approved supplements, correspondence, payment records, comparison worksheets, and estimate version history.",
        "Archive photo folders, logs, estimates, and package versions; document any open disputed lines with status before production closeout.",
        "Notify PM and ownership/property management of settlement outcome within one business day of carrier final response when appropriate.",
        "Do not close production on lines with open supplement status undocumented in CRM.",
      ],
      notes:
        "Settlement review catches remaining omissions before warranty and access loss eliminate reinspection. Compare approved scope to field reality one final time.",
    },
    {
      id: "asset-complete-workflow",
      title: "Operational Asset — Complete Estimate Review Workflow",
      actions: [
        "Phase 1 — Receive and assign owner; lock baseline estimate version.",
        "Phase 2 — Review estimate structure (admin block, rooms, trades, macros).",
        "Phase 3 — Compare to field documentation with a written worksheet.",
        "Phase 4–5 — Complete scope and quantity validation checklists.",
        "Phase 6–9 — Specialty passes: code, general conditions/temporary protection, equipment/labor, missing line items.",
        "Phase 10–12 — Assemble documentation, prepare supplement, communicate with carrier.",
        "Phase 13–15 — Reinspection prep, revision review, final settlement reconciliation.",
      ],
    },
    {
      id: "asset-scope-validation-checklist",
      title: "Operational Asset — Scope Validation Checklist",
      actions: [
        "Publish area index matching estimate sections to photo folders.",
        "For each area: confirm damage documented, estimate section present, quantities supportable, and phase coverage complete.",
        "Confirm demo/removal/disposal accompany replacement where field conditions require them.",
        "Confirm mitigation, temporary protection, and rebuild phases are separated with dated evidence.",
        "On commercial files, reconcile building/floor/suite indexing before closing the scope pass.",
        "Mark truncated or missing scope with evidence refs; assign recapture tasks the same day.",
        "Classify gaps (supplement-ready / needs more evidence / low priority) and update the master comparison worksheet.",
        "Gate: no area marked complete until photos, quantities, and estimate section reconcile.",
      ],
    },
    {
      id: "asset-quantity-validation-checklist",
      title: "Operational Asset — Quantity Validation Checklist",
      actions: [
        "Roofing squares / planes measured and tied to photos.",
        "Interior SF (flooring, drywall, paint, insulation) recalculated from field measurements.",
        "Openings, fixtures, and LF trim counted with labeled photos.",
        "Mitigation equipment counts and days reconciled to logs and placement photos.",
        "Debris, dumpster, and disposal quantities supported by production records when claimed.",
        "Material grades and matching quantities documented where partial replacement applies.",
        "Zero-quantity and bundled macro lines reviewed for hidden shortfalls.",
        "Deltas recorded on comparison worksheet with methodology notes for large assemblies.",
      ],
    },
    {
      id: "asset-documentation-checklist",
      title: "Operational Asset — Documentation Checklist",
      actions: [
        "Latest carrier estimate and version history filed.",
        "Independent field scope worksheet and measurements present.",
        "Labeled photos (overview-to-detail) matching estimate areas.",
        "Specialty logs by peril (moisture, contents, mold protocol, roof access).",
        "Comparison worksheet and prioritized gap list with evidence refs.",
        "Code/AHJ and temporary protection files when applicable.",
        "Equipment, labor, and daily report support for duration and GC lines.",
        "Reinspection or supplement packet index linking each gap to evidence.",
      ],
    },
    {
      id: "asset-supplement-prep-checklist",
      title: "Operational Asset — Supplement Preparation Checklist",
      actions: [
        "Only supplement-ready gaps included; needs-more-evidence items parked for recapture.",
        "Revised estimate lines map to named exhibits and area labels.",
        "Cover letter summary table matches estimate dollar delta.",
        "Attachment index lists every exhibit; file names include claim number, version, and date.",
        "Carrier-preferred export format verified.",
        "Claim File Audit or peer QC completed on high-dollar packages.",
        "CRM ready to log submission channel, recipient, version, and follow-up schedule.",
        "Commercial multi-building packages separated by building/area ID when applicable.",
      ],
    },
    {
      id: "asset-reinspection-checklist",
      title: "Operational Asset — Reinspection Checklist",
      actions: [
        "Access confirmed with owner/PM; disputed areas still viewable.",
        "One-page briefing summary and scope/quantity comparison table printed or on tablet.",
        "Photo stations staged at disputed areas — not one unlabeled binder for the whole job.",
        "Measurement worksheets and specialty logs ready for handoff.",
        "Field escort assigned; roles for walk, gap list, and live photos defined.",
        "Questions answered with exhibit references — not opinions or policy arguments.",
        "Outcomes logged in CRM same day; revised estimate queued within one week.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "review-owner-assigned",
      label: "Review owner assigned and latest estimate version filed within hours of receipt",
      required: true,
      detail:
        "Unowned estimates drift into production without a comparison worksheet or gap list.",
    },
    {
      id: "structure-and-comparison",
      label: "Estimate structure reviewed and line-by-line field comparison completed with photo or measurement refs",
      required: true,
      detail:
        "Totals-only review misses omissions hidden by offsetting quantity errors.",
    },
    {
      id: "scope-quantity-gates",
      label: "Scope validation and quantity validation checklists completed",
      required: true,
      detail:
        "High-dollar assemblies and truncated rooms must reconcile before supplement-ready classification.",
    },
    {
      id: "specialty-passes-done",
      label: "Code, general conditions/temporary protection, equipment/labor, and missing line item passes complete",
      required: true,
      detail:
        "Skipping specialty passes is a primary source of overlooked line items.",
    },
    {
      id: "gap-list-classified",
      label: "Gap list classified with evidence refs and production guardrails acknowledged",
      required: true,
      detail:
        "PM must acknowledge unpaid high-value gaps before production absorbs them.",
    },
    {
      id: "documentation-package-indexed",
      label: "Documentation package indexed to current estimate version with consistent area labels",
      required: true,
      detail:
        "Unindexed dumps fail desk review even when individual photos are strong.",
    },
    {
      id: "supplement-prep-complete",
      label: "Supplement preparation checklist complete — cover letter delta matches estimate; every line has an exhibit",
      required: true,
    },
    {
      id: "submission-logged",
      label: "Submission logged in CRM with date, channel, recipient, version, and follow-up schedule",
      required: true,
    },
    {
      id: "reinspection-staged",
      label: "Reinspection stations and briefing packet ready when a walk is scheduled",
      required: false,
    },
    {
      id: "settlement-reconciled",
      label: "Approved scope reconciled to production before claim closeout",
      required: true,
    },
  ],
  commonMistakes: [
    {
      mistake: "Reviewing only the estimate total instead of line items and rooms",
      impact:
        "Omissions and quantity errors offset each other; production absorbs unpaid scope that looked 'close enough.'",
      correction:
        "Complete Phases 2–5 with a written gap list and photo refs before committing production.",
    },
    {
      mistake: "Delaying estimate review until mid-production",
      impact:
        "Demo and drying destroy evidence; supplements appear retroactive and speculative.",
      correction:
        "Start Phase 1 within hours of receipt and finish the core comparison within 48 hours.",
    },
    {
      mistake: "Trusting carrier sketch dimensions without independent measurement",
      impact:
        "Every SF-based line is wrong; supplements look inflated when field proof arrives late.",
      correction:
        "Measure independently, photograph measurement context, and document variances in Phase 5.",
    },
    {
      mistake: "Adding line items without field photos or measurements",
      impact:
        "Desk reviewers deny template-style requests; file credibility drops for the entire supplement.",
      correction:
        "Classify gaps as needs more evidence until each candidate has a photo or measurement reference.",
    },
    {
      mistake: "Skipping code, general conditions, equipment, and missing-line specialty passes",
      impact:
        "High-frequency overlooked categories never enter the gap list.",
      correction:
        "Run Phases 6–9 on every file — not only large losses.",
    },
    {
      mistake: "Mixing estimate versions on one comparison worksheet",
      impact:
        "Deltas and approvals become untraceable after a revised carrier estimate.",
      correction:
        "Version the comparison sheet to the active estimate in Phase 14; archive prior comparisons.",
    },
    {
      mistake: "Submitting supplements before documentation is indexed",
      impact:
        "First submission gets denied; resubmission looks like fishing and slows all future items on the file.",
      correction:
        "Hold submission until every requested line maps to indexed contemporaneous evidence (Phases 10–11).",
    },
    {
      mistake: "Inconsistent area labels across estimate, photos, and logs",
      impact:
        "Desk reviewers cannot reconcile evidence to lines; scope is excluded despite photo volume.",
      correction:
        "Enforce Documentation Standards naming so every artifact resolves to the same area ID.",
    },
    {
      mistake: "No CRM follow-up after supplement submission",
      impact:
        "Supplements sit in queue for weeks; production finishes before payment arrives.",
      correction:
        "Execute 3-7-14 follow-up cadence on every file without exception (Phase 12).",
    },
    {
      mistake: "Treating estimate review as coverage advice or public adjusting",
      impact:
        "Compliance and credibility risk; operational focus is lost.",
      correction:
        "Stay in documentation and workflow: compare field conditions to estimate lines, document gaps, and route supported items through supplement packaging.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Documented rooms, elevations, or attached structures missing from the carrier estimate",
      documentation:
        "Labeled photos, revised room list, and comparison worksheet entries tied to the current estimate version.",
      lineItemHint: "Additional rooms/areas, attached structures, truncated finish scopes",
    },
    {
      trigger: "Quantity discrepancies on high-value SF or count assemblies",
      documentation:
        "Independent measurements, photo context, and takeoff notes reconciling field qty to carrier qty.",
      lineItemHint: "Corrected squares, SF finishes, fixture counts, LF trim",
    },
    {
      trigger: "Temporary protection or emergency work performed but absent from the estimate",
      documentation:
        "Dated photos, location labels, authorization notes, and duration records.",
      lineItemHint: "Board-up, tarp, temporary roof, contents protection, site security",
    },
    {
      trigger: "Code or AHJ requirements documented but not reflected in estimate lines",
      documentation:
        "AHJ notes, permit requirements, photos of non-compliant conditions, and citations — no engineering opinions.",
      lineItemHint: "Ice barrier, decking, AFCI, smoke sealing, fire blocking, permits",
    },
    {
      trigger: "Equipment days or labor conditions exceed carrier template defaults",
      documentation:
        "Moisture/equipment logs, placement photos, daily reports, after-hours or access notes by area.",
      lineItemHint: "Additional equipment days, monitoring, steep/high, after-hours labor",
    },
    {
      trigger: "General conditions and logistics unsupported by estimate but proven in daily production records",
      documentation:
        "Daily reports, debris/dumpster photos, supervision notes, and multi-mobilization records.",
      lineItemHint: "Supervision, dumpsters, temporary facilities, multiple mobilizations",
    },
    {
      trigger: "Common overlooked categories present in field but missing from estimate",
      documentation:
        "Photo-backed candidates validated against Most Overlooked Line Items patterns for this peril.",
      lineItemHint: "Matching, access, debris, permits, and peril-specific accessories",
    },
    {
      trigger: "Gap list complete and evidence indexed but carrier estimate still under-scopes documented work",
      documentation:
        "Indexed comparison packet cross-referencing each disputed line to photos, measurements, and logs — routed through Supplement Submission.",
      lineItemHint:
        "Supplement package with line-item justification; Claims Ninja supports documentation review, estimating, and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "How is this playbook different from the Insurance Estimate Review & Scope Validation Guide?",
      answer:
        "The Scope Validation Guide is the conceptual cornerstone — estimate anatomy, what to validate, and why gaps appear. This playbook is the operational hub: the complete 15-phase workflow from receiving the carrier estimate through settlement reconciliation, with checklists, QC gates, and packaging steps your teams execute on every file.",
    },
    {
      question: "What is the complete estimate review workflow for contractors?",
      answer:
        "Receive and version the estimate, review structure, compare to field documentation, validate scope and quantities, run code/GC/equipment/missing-line passes, assemble documentation, prepare and submit the supplement, support reinspection, review revisions, and reconcile final settlement — with production guardrails until unpaid high-value gaps are documented.",
    },
    {
      question: "When is a gap ready for supplement packaging?",
      answer:
        "When it is classified supplement-ready: documented field condition, clear estimate omission or quantity/scope delta, and a photo or measurement reference on the current estimate version. Gaps that still need evidence stay in recapture — do not package unsupported additions.",
    },
    {
      question: "Does this playbook provide coverage or legal advice?",
      answer:
        "No. It is an operational workflow for comparing field conditions to carrier estimates, organizing documentation, and preparing supplements. It does not provide legal advice, policy interpretation, engineering opinions, or public-adjusting guidance.",
    },
  ],
  relatedResources: [
    {
      label: "Insurance Estimate Review & Scope Validation Guide",
      href: "/resources/guides/general-claims/insurance-estimate-review-scope-validation-guide",
    },
    {
      label: "Quantity Validation Guide for Contractors",
      href: "/resources/guides/general-claims/quantity-validation-guide-for-contractors",
    },
    {
      label: "Scope Audit Guide for Contractors",
      href: "/resources/guides/general-claims/scope-audit-guide-for-contractors",
    },
    {
      label: "Missing Line Item Documentation Guide for Contractors",
      href: "/resources/guides/general-claims/missing-line-item-documentation-guide-for-contractors",
    },
    {
      label: "General Conditions Documentation Guide for Contractors",
      href: "/resources/guides/general-claims/general-conditions-documentation-guide-for-contractors",
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
      label: "Commercial Insurance Claims Documentation Guide",
      href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
    },
    {
      label: "Claim Documentation Standards",
      href: "/resources/guides/general-claims/documentation-standards-guide",
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
      label: "O&P Qualification Documentation Standard",
      href: "/resources/guides/general-claims/op-qualification-guide",
    },
    {
      label: "First 48 Hours After Carrier Estimate Checklist",
      href: "/resources/guides/general-claims/first-48-hours-checklist",
    },
    {
      label: "Code Upgrade Documentation Guide",
      href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
    },
    {
      label: "Equipment Documentation Guide",
      href: "/resources/guides/water-damage/equipment-documentation-guide",
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
      label: "Large-Loss Commercial Insurance Claims Guide",
      href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
    },
    {
      label: "Five Red Flags That an Insurance Estimate Is Missing Scope",
      href: "/resources/blog/five-red-flags-that-an-insurance-estimate-is-missing-scope",
    },
    {
      label: "The Most Overlooked Line Items in Insurance Estimates",
      href: "/resources/blog/most-overlooked-line-items-in-insurance-estimates",
    },
    {
      label: "Commercial Claims Documentation Checklist for Contractors",
      href: "/resources/blog/commercial-claims-documentation-checklist",
    },
    {
      label: "Why Carrier Estimates Miss Line Items",
      href: "/resources/blog/why-carrier-estimates-miss-line-items",
    },
    {
      label: "Xactimate Estimate Review Checklist for Contractors",
      href: "/resources/blog/xactimate-estimate-review-checklist-contractors",
    },
    {
      label: "Estimate review workflow FAQ",
      href: "/faq#faq-estimate-review-workflow",
    },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});

export { GUIDE_PATH as INSURANCE_ESTIMATE_REVIEW_PLAYBOOK_PATH };
