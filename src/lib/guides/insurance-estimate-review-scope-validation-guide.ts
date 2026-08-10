import { defineGuide } from "@/lib/guides/guide-builder";

const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "insurance-estimate-review-scope-validation-guide" as const;
const GUIDE_PATH =
  `/resources/guides/${CATEGORY}/${GUIDE_SLUG}` as const;

export const INSURANCE_ESTIMATE_REVIEW_SCOPE_VALIDATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Insurance Estimate Review & Scope Validation Guide for Contractors",
  excerpt:
    "Cornerstone guide for evaluating carrier estimates against documented field conditions — anatomy of an estimate, quantity and scope validation, missing line items, code and temporary protection gaps, equipment and labor review, supporting documentation, scope audit workflow, reinspection prep, and quality-control gates.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Insurance estimate review",
    "Scope validation",
    "Quantity validation",
    "Carrier estimate",
    "Estimate documentation",
    "Missing line items",
    "Xactimate",
    "Supplement preparation",
    "Reinspection",
    "Restoration contractors",
    "Roofing contractors",
    "Mitigation companies",
    "Commercial contractors",
  ],
  publishedAt: "2026-08-03",
  updatedAt: "2026-08-03",
  estimatedMinutes: 30,
  seoTitle:
    "Insurance Estimate Review & Scope Validation Guide | Contractors",
  seoDescription:
    "Evaluate carrier estimates against field documentation: quantity and scope validation, missing line items, code and temporary protection gaps, equipment and labor review, and QC gates before production absorbs unpaid scope.",
  relatedGuideSlugs: [
    "insurance-estimate-review-playbook-for-contractors",
    "quantity-validation-guide-for-contractors",
    "scope-audit-guide-for-contractors",
    "missing-line-item-documentation-guide-for-contractors",
    "carrier-estimate-review-guide",
    "documentation-standards-guide",
    "commercial-insurance-claims-documentation-guide",
    "commercial-insurance-supplement-playbook-for-contractors",
    "claim-file-audit-guide",
    "supplement-submission-guide",
    "op-qualification-guide",
    "first-48-hours-checklist",
    "photo-documentation-standards-guide",
    "code-upgrade-documentation-guide",
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
    "estimate-review-for-contractors",
    "scope-validation-carrier-estimates",
    "quantity-validation-insurance-estimates",
    "carrier-estimate-anatomy-contractors",
    "estimate-documentation-requirements",
  ],
  claimTypes: ["roofing", "water", "fire", "mold", "commercial", "large-loss"],
  purpose:
    "This guide is the cornerstone authority for insurance estimate review and scope validation concepts for restoration contractors, roofing contractors, mitigation companies, reconstruction contractors, and commercial contractors. Unlike documentation standards — which define how to capture field evidence — this resource focuses on evaluating carrier estimates against documented field conditions to identify omissions, quantity discrepancies, scope gaps, and opportunities for accurate supplemental documentation. Use it as the parent framework for estimate anatomy, quantity and scope validation, missing line items, code and temporary protection review, equipment and labor reconciliation, supporting documentation, scope audit workflow, reinspection preparation, and final quality-control gates. For the complete operational workflow — receive, validate, package, communicate, reinspect, and settle — use the Insurance Estimate Review Playbook for Contractors. For the specialty deep-dive on measuring, documenting, and classifying quantity discrepancies across roofing, interior, water, fire, and commercial files, use the Quantity Validation Guide for Contractors. For completeness audits, use the Scope Audit Guide; for documenting omitted work after gaps are identified, use the Missing Line Item Documentation Guide for Contractors. Pair it with the shorter Carrier Estimate Review Workflow for day-one intake sequencing, Documentation Standards for evidence capture, and Supplement Submission for packaging validated gaps. Claims Ninja supports contractors with documentation standards, estimate review workflows, supplement packaging, and claim recovery operations — we are not a public adjuster, carrier representative, or legal counsel. This guide does not provide legal advice, policy interpretation, engineering opinions, or public-adjusting guidance.",
  whenToUse: [
    {
      condition: "Carrier estimate received and must be compared to field conditions before production commits",
      signal:
        "Estimate in inbox or XactAnalysis queue; PM or supplement coordinator assigned within hours of receipt",
    },
    {
      condition: "Internal field scope or measurements differ from carrier rooms, quantities, or trade sections",
      signal:
        "Sketch mismatch, SF/count delta, missing trade categories, or material grade conflicts flagged in comparison",
    },
    {
      condition: "Production risk of absorbing unpaid scope while gaps remain undocumented",
      signal:
        "Demo, dry-in, or rebuild scheduling ahead of completed gap list and photo-backed comparison sheet",
    },
    {
      condition: "Reinspection, desk review, or revised carrier estimate requires organized gap evidence",
      signal:
        "Adjuster reinspection scheduled, versioned estimate revision, or request for additional documentation",
    },
    {
      condition: "Roofing, water, fire, mold, or commercial file needs a consistent estimate-review method across trades",
      signal:
        "Multi-trade loss, commercial multi-area estimate, or specialty peril with high omission risk",
    },
  ],
  prerequisites: [
    "Current carrier estimate (latest version) with price list, sketch when available, and version noted",
    "Field documentation set meeting Documentation Standards: labeled photos, measurements, moisture or specialty logs as applicable",
    "Contractor field estimate, scope worksheet, or room/area list independent of the carrier sketch",
    "Assigned review owner (PM or supplement coordinator) within hours of estimate receipt",
    "Comparison worksheet or marked-up PDF with columns for carrier qty, field qty, delta, photo ref, and priority",
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
      id: "temp-protection-records",
      label: "Temporary protection and emergency work records",
      required: false,
      detail:
        "Board-up, tarp, temporary roof, contents protection, and safety actions with dates, locations, photos, and authorization before rebuild scope expands.",
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
  ],
  steps: [
    {
      id: "why-estimate-review-matters",
      title: "Why Estimate Review Matters",
      actions: [
        "Carrier estimates are built for speed and standardization. Templates, macros, and limited site time routinely omit job-specific conditions that field crews see every day.",
        "Reviewing totals alone hides offsetting errors: missing rooms can cancel overstated finishes, leaving a dollar amount that looks close while scope remains incomplete.",
        "Production that starts before a structured review absorbs unpaid work — demo destroys evidence, drying resets moisture proof, and rebuild hides openings that supported quantities.",
        "A disciplined estimate review converts field documentation into a defensible gap list: omissions, quantity discrepancies, scope gaps, and documentation still needed before supplement packaging.",
        "Estimate review is an operational control, not a negotiation script. Assign an owner, use a checklist, document deltas with photo refs, and route supported items through your supplement workflow.",
        "This cornerstone connects Documentation Standards (capture), Carrier Estimate Review Workflow (intake sequence), Claim File Audit, and Supplement Submission into one field-to-estimate validation method across roofing, water, fire, mold, and commercial losses.",
      ],
    },
    {
      id: "anatomy-of-carrier-estimate",
      title: "Anatomy of a Carrier Estimate",
      actions: [
        "Read the cover and administrative block first: claim number, risk address, price list, tax jurisdiction, estimate version, and whether a sketch is attached.",
        "Map the room or area list to your field floor plan. Note missing rooms, combined spaces, attached structures, and naming that will not match photo folders.",
        "Scan trade sections in order: general conditions, temporary protection / emergency, demolition, mitigation equipment, rough trades, finishes, exterior/roofing, and contents when present.",
        "Identify macros and template assumptions — default ceiling heights, standard material grades, bundled quantities, and zero-quantity placeholders that hide gaps.",
        "Locate O&P, tax, and overhead treatments. Flag multi-trade coordination questions for the O&P Qualification Guide rather than arguing them inside the first gap list.",
        "Note sketch dimensions, openings, and attached structures separately from line-item totals so quantity validation has an independent baseline.",
      ],
    },
    {
      id: "comparing-field-docs-to-estimate",
      title: "Comparing Field Documentation to Estimate Scope",
      actions: [
        "Assemble the comparison set before arguing dollars: latest carrier estimate, field photos, measurements, specialty logs, and your independent scope worksheet.",
        "Walk room-by-room or area-by-area: does every damaged area appear in the estimate with matching labels and a photo sequence?",
        "Mark three outcome classes per discrepancy: in estimate and supported, in estimate but quantity/grade wrong, or documented in field but absent from the estimate.",
        "Cross-walk photo folders and daily logs to estimate sections — unlabeled evidence does not defend a gap list at desk review.",
        "Capture missing documentation the same day you find a gap; do not wait until supplement packaging to recreate openings or moisture conditions.",
        "Record the comparison on a written worksheet with photo refs — memory and verbal walkthroughs fail reinspection.",
      ],
    },
    {
      id: "quantity-validation",
      title: "Quantity Validation",
      actions: [
        "Recalculate high-value SF and count lines from field measurements: roofing squares, flooring, drywall, paint, insulation, openings, LF trim, and fixture counts.",
        "Compare carrier sketch dimensions to independent measurements. Document variances with photos showing tape, laser, or labeled takeoff context.",
        "Check unit counts and days: air movers, dehumidifiers, scaffolding, dumpsters, supervision days, and monitoring visits.",
        "Flag zero-quantity lines, bundled macros, and rounded quantities that understate assemblies visible on site.",
        "Prioritize quantity disputes by dollar impact and evidence strength — weak photos should be upgraded before the gap is marked supplement-ready.",
        "Use the Quantity Verification Checklist (below) as a gate before production or supplement packaging.",
        "For the specialty deep-dive — roofing, interior, water, fire, and commercial quantity workflows, measurement documentation, photo and field-note standards, and QC checklists — use the Quantity Validation Guide for Contractors.",
      ],
    },
    {
      id: "scope-validation",
      title: "Scope Validation",
      actions: [
        "Validate that the estimate includes every trade and phase required by documented conditions — not only the lines that appear under a single macro.",
        "Confirm demolition, removal, and disposal accompany replacement lines where field conditions require them.",
        "Check that mitigation, temporary protection, and rebuild phases are separated and each supported by dated evidence.",
        "On commercial or multi-area losses, confirm building/floor/suite indexing in the estimate matches the documentation index.",
        "Identify scope that is documented but truncated: partial room finishes, missing elevations, omitted attached structures, or incomplete systems (HVAC, contents, matching).",
        "Classify each scope gap as supplement-ready or needs more evidence before routing to Supplement Submission.",
      ],
    },
    {
      id: "missing-line-items",
      title: "Missing Line Items",
      actions: [
        "Scan systematically for categories carriers omit under time pressure: temporary protection, debris, permits, supervision, equipment, matching, and access charges.",
        "Use peril-specific checklists — steep/high and drip edge on roofing; equipment days and containment on water/mold; contents protection and HVAC on fire — without treating any list as exhaustive.",
        "Require a photo or measurement reference for every candidate addition before it enters the gap list as supplement-ready.",
        "Separate true omissions from items that exist under different line codes or bundled descriptions — avoid duplicate requests that damage credibility.",
        "Cross-reference The Most Overlooked Line Items in Insurance Estimates for common patterns, then validate each against this file’s field conditions.",
        "Hand high-confidence omissions to the supplement workflow with line hints and evidence refs; park low-confidence items until documentation improves.",
        "For exhibit mapping after omissions are identified — detach/reset, sequencing, protection, equipment, and code support — use the Missing Line Item Documentation Guide for Contractors.",
      ],
    },
    {
      id: "code-and-ordinance",
      title: "Code and Ordinance Considerations",
      actions: [
        "Document code-driven scope with AHJ notes, permit requirements, and photos of non-compliant existing conditions — do not invent engineering opinions in the estimate file.",
        "Tie each upgrade candidate to a citation or written AHJ direction and a photo of the condition it addresses.",
        "Common documentation targets include ice/water barrier, decking requirements, AFCI/GFCI, smoke sealing, fire blocking, and matching requirements where locally enforced.",
        "Route roofing code packages through the Code Upgrade Documentation Guide and fire code packages through the Fire Code Upgrade Documentation Guide.",
        "Keep ordinance documentation in a dedicated folder linked from the comparison worksheet so reinspection can open evidence in seconds.",
        "If code applicability is unclear, capture the condition and AHJ communication; do not present contractor interpretation as policy coverage advice.",
      ],
    },
    {
      id: "temporary-protection",
      title: "Temporary Protection",
      actions: [
        "Inventory temporary protection performed or still required: board-up, tarp, temporary roof, contents protection, site security, and weatherization.",
        "Match each action to dated photos, location labels, and authorization notes before comparing to the carrier estimate.",
        "Flag missing temporary protection lines when field evidence shows emergency work already completed or still necessary to protect the risk.",
        "Separate emergency/temporary lines from rebuild finishes so desk reviewers can approve stabilization without conflating reconstruction.",
        "Document duration when protection remains in place across multiple days or mobilizations — single-day macros often understate commercial or large-loss needs.",
        "Ensure temporary protection evidence is in the file before demo or dry-in removes the visual proof.",
      ],
    },
    {
      id: "equipment-and-labor-review",
      title: "Equipment and Labor Review",
      actions: [
        "Reconcile mitigation equipment counts and days to moisture logs, placement photos, and daily reports — not to template defaults alone.",
        "Review labor assumptions for after-hours, occupied conditions, multiple mobilizations, supervision, and specialty access (steep, high, confined).",
        "Compare crew counts and trade coordination notes to O&P eligibility documentation when multi-trade scope applies.",
        "Flag equipment pulled early or left longer than carrier days with contemporaneous logs; duration disputes fail without daily evidence.",
        "On commercial losses, tie equipment and labor to area IDs so proportional cuts cannot dismiss undocumented zones.",
        "Send unresolved labor/equipment gaps to the comparison worksheet with photo and log refs before production absorbs unpaid days.",
      ],
    },
    {
      id: "material-quantity-verification",
      title: "Material Quantity Verification",
      actions: [
        "Verify material grades and product lines against field observations and specifications — upgraded finishes need photos and notes, not verbal claims.",
        "Reconcile material quantities to takeoffs and waste factors documented in the field worksheet; unexplained waste invites cuts.",
        "Check matching and continuity lines where partial replacement creates appearance or performance mismatches documented on site.",
        "Confirm roofing accessories, underlayment, and flashings quantities against measured roof planes and detail photos.",
        "For water and fire rebuilds, reconcile finish SF and fixture counts room-by-room to the estimate sections.",
        "Attach invoices or delivery tickets only when they reconcile to field logs — office totals without placement photos weaken review.",
      ],
    },
    {
      id: "general-conditions-review",
      title: "General Conditions Review",
      actions: [
        "Review general conditions for permits, project supervision, temporary facilities, debris handling, dumpsters, and site protection.",
        "Confirm that commercial or multi-phase jobs document supervision and logistics proportional to footprint and duration.",
        "Flag missing general conditions when field daily reports show active coordination, waste removal, or temporary facilities not reflected in the estimate.",
        "Keep general conditions evidence chronological — daily reports and photos beat end-of-job narratives.",
        "Do not inflate general conditions without production records; unsupported GC lines are a common credibility failure at desk review.",
        "Link each GC gap to a daily report date and photo when marking it supplement-ready.",
      ],
    },
    {
      id: "supporting-documentation",
      title: "Supporting Documentation",
      actions: [
        "Every gap on the comparison worksheet needs a supporting artifact: photo, measurement, log entry, AHJ note, or daily report.",
        "Apply Documentation Standards labeling so area names match estimate sections and photo folders resolve in under two minutes.",
        "Prefer contemporaneous evidence — same-day photos and logs — over reconstructed packages after production.",
        "Bundle supporting docs by gap ID or estimate section for reinspection and supplement packaging.",
        "When evidence is incomplete, classify the gap as needs more evidence and assign a capture task before supplement routing.",
        "Use the Commercial Claims Documentation Checklist and peril cornerstones when the loss type demands specialized proof.",
      ],
    },
    {
      id: "estimate-organization",
      title: "Estimate Organization",
      actions: [
        "Organize the working file so any reviewer can open: carrier estimate versions, field worksheet, comparison sheet, gap list, and evidence folders.",
        "Keep naming consistent across estimate rooms, photo folders, and daily reports — mismatched labels are a primary cause of desk exclusions.",
        "Version the comparison worksheet whenever a revised carrier estimate arrives; never mix deltas across estimate versions.",
        "On commercial files, maintain Building → Floor → Suite/Unit indexing aligned to the Commercial Insurance Claims Documentation Guide.",
        "Store code, temporary protection, and equipment subfolders as first-class sections — not buried inside unsorted photo dumps.",
        "Hand organized packets to Claim File Audit and Supplement Submission without requiring the next owner to rebuild the narrative.",
      ],
    },
    {
      id: "scope-audit-workflow",
      title: "Scope Audit Workflow",
      actions: [
        "Step 1 — Intake: assign review owner, file latest estimate, confirm field documentation completeness within hours of receipt.",
        "Step 2 — Anatomy pass: validate sketch/room list, trade sections, macros, and administrative fields.",
        "Step 3 — Field comparison: room/area walk against photos and measurements; start the written gap list the same day.",
        "Step 4 — Quantity and scope validation: complete quantity and scope checklists; classify each gap.",
        "Step 5 — Specialty passes: temporary protection, code, equipment/labor, materials, and general conditions.",
        "Step 6 — Route: send supplement-ready gaps to Supplement Submission; send documentation defects to field recapture; set production guardrails for unpaid high-value scope.",
      ],
    },
    {
      id: "reinspection-preparation",
      title: "Reinspection Preparation",
      actions: [
        "Build a reinspection packet from the comparison worksheet: prioritized gaps, photo refs, measurements, and specialty logs — not a unsorted folder dump.",
        "Confirm site access, areas still available to view, and which openings or moisture conditions must be preserved until the visit.",
        "Assign roles: who walks the adjuster, who holds the gap list, who photographs new discoveries live.",
        "Pre-stage printed or tablet views of sketch variances, quantity takeoffs, and code/temporary protection evidence.",
        "After reinspection, update the gap list within 24 hours with adjuster notes, new photos, and revised priorities.",
        "Route confirmed items immediately into supplement packaging; do not wait for a second verbal follow-up cycle.",
      ],
    },
    {
      id: "final-quality-control-review",
      title: "Final Quality-Control Review",
      actions: [
        "Run quality gates before production absorbs high-value unpaid scope and again before supplement submission.",
        "Confirm every supplement-ready gap has a photo or measurement ref and matches the current estimate version.",
        "Spot-check that room/area labels are consistent across estimate, photos, and comparison sheet.",
        "Verify temporary protection, code, equipment, and general conditions passes were completed — not skipped for schedule pressure.",
        "PM acknowledges production guardrails for unresolved high-value gaps.",
        "Only then hand the packet to Supplement Submission or Claim File Audit for packaging and peer review.",
      ],
    },
    {
      id: "estimate-review-checklist",
      title: "Estimate Review Checklist",
      actions: [
        "Review owner assigned within hours of estimate receipt; latest estimate version filed.",
        "Sketch and room/area list validated against field conditions; discrepancies documented.",
        "Trade sections scanned for category gaps (GC, temp protection, demo, mitigation, finishes, exterior, contents).",
        "High-value quantities recalculated from field measurements with photo support.",
        "Scope validated for missing phases, truncated rooms, and multi-area indexing mismatches.",
        "Temporary protection, code, equipment/labor, materials, and general conditions passes complete.",
        "Written gap list classified (supplement-ready / needs more evidence / low priority) with evidence refs.",
        "Production guardrails set for unpaid high-value gaps; packet ready for supplement or reinspection.",
      ],
    },
    {
      id: "scope-validation-workflow-asset",
      title: "Scope Validation Workflow",
      actions: [
        "Publish area index matching estimate sections to photo folders.",
        "For each area: confirm damage documented, estimate section present, quantities supportable, and phase coverage complete.",
        "Mark truncated or missing scope with evidence refs; assign recapture tasks the same day.",
        "Reconcile commercial multi-building or multi-suite indexes before closing the scope pass.",
        "Classify gaps and update the master comparison worksheet.",
        "Gate: no area marked complete until photos, quantities, and estimate section reconcile.",
      ],
    },
    {
      id: "quantity-verification-checklist",
      title: "Quantity Verification Checklist",
      actions: [
        "Roofing squares / planes measured and tied to photos.",
        "Interior SF (flooring, drywall, paint, insulation) recalculated from field measurements.",
        "Openings, fixtures, and LF trim counted with labeled photos.",
        "Mitigation equipment counts and days reconciled to logs and placement photos.",
        "Debris, dumpster, and disposal quantities supported by production records when claimed.",
        "Material grades and matching quantities documented where partial replacement applies.",
        "Deltas recorded on comparison worksheet with methodology notes for large assemblies.",
      ],
    },
    {
      id: "documentation-requirements-summary",
      title: "Documentation Requirements Summary",
      actions: [
        "Latest carrier estimate and version history.",
        "Independent field scope worksheet and measurements.",
        "Labeled photos (overview-to-detail) matching estimate areas.",
        "Specialty logs by peril (moisture, contents, mold protocol, roof access).",
        "Comparison worksheet and prioritized gap list.",
        "Code/AHJ and temporary protection files when applicable.",
        "Equipment, labor, and daily report support for duration and GC lines.",
        "Reinspection or supplement packet index linking each gap to evidence.",
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
      id: "sketch-validated",
      label: "Sketch and room/area list validated against field conditions with discrepancies documented",
      required: true,
      detail:
        "Sketch errors cascade into every SF- and count-based line item.",
    },
    {
      id: "comparison-complete",
      label: "Line-by-line comparison completed across trades with photo or measurement refs",
      required: true,
      detail:
        "Totals-only review misses omissions hidden by offsetting quantity errors.",
    },
    {
      id: "quantity-scope-gates",
      label: "Quantity verification and scope validation checklists completed",
      required: true,
      detail:
        "High-dollar assemblies and truncated rooms must reconcile before supplement-ready classification.",
    },
    {
      id: "specialty-passes-done",
      label: "Temporary protection, code, equipment/labor, materials, and general conditions passes complete",
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
      id: "packet-ready",
      label: "Reinspection or supplement packet indexed to current estimate version",
      required: true,
      detail:
        "Unindexed dumps fail desk review even when individual photos are strong.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Reviewing only the estimate total instead of line items and rooms",
      impact:
        "Omissions and quantity errors offset each other; production absorbs unpaid scope that looked 'close enough.'",
      correction:
        "Complete a room-by-room and trade-section comparison with a written gap list and photo refs.",
    },
    {
      mistake: "Trusting carrier sketch dimensions without independent measurement",
      impact:
        "Every SF-based line is wrong; supplements look inflated when field proof arrives late.",
      correction:
        "Measure independently, photograph measurement context, and document variances before quantity disputes.",
    },
    {
      mistake: "Adding line items without field photos or measurements",
      impact:
        "Desk reviewers deny template-style requests; file credibility drops for the entire supplement.",
      correction:
        "Classify gaps as needs more evidence until each candidate has a photo or measurement reference.",
    },
    {
      mistake: "Delaying estimate review until mid-production",
      impact:
        "Demo and drying destroy evidence; supplements appear retroactive and speculative.",
      correction:
        "Start review within hours of receipt and finish the core comparison within 48 hours per intake checklist.",
    },
    {
      mistake: "Skipping temporary protection, code, and general conditions passes",
      impact:
        "High-frequency overlooked categories never enter the gap list.",
      correction:
        "Run specialty passes from the Estimate Review Checklist on every file — not only large losses.",
    },
    {
      mistake: "Mixing estimate versions on one comparison worksheet",
      impact:
        "Deltas and approvals become untraceable after a revised carrier estimate.",
      correction:
        "Version the comparison sheet to the active estimate; archive prior comparisons.",
    },
    {
      mistake: "Inconsistent area labels across estimate, photos, and logs",
      impact:
        "Desk reviewers cannot reconcile evidence to lines; scope is excluded despite photo volume.",
      correction:
        "Enforce Documentation Standards naming so every artifact resolves to the same area ID.",
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
      trigger: "Gap list complete and evidence indexed but carrier estimate still under-scopes documented work",
      documentation:
        "Indexed comparison packet cross-referencing each disputed line to photos, measurements, and logs — routed through Supplement Submission.",
      lineItemHint:
        "Supplement package with line-item justification; Claims Ninja supports documentation review, estimating, and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "How is this guide different from the Insurance Estimate Review Playbook?",
      answer:
        "This guide teaches concepts — estimate anatomy, what to validate, and why gaps appear. The Insurance Estimate Review Playbook is the operational hub: the complete 15-phase workflow from receiving the carrier estimate through settlement reconciliation, with checklists and packaging steps your teams execute on every file.",
    },
    {
      question: "How is this guide different from the Carrier Estimate Review Workflow?",
      answer:
        "The Carrier Estimate Review Workflow is a shorter day-one intake sequence for sketch validation, line-item scanning, quantity checks, and routing. This cornerstone is the full authority resource for estimate anatomy, scope and quantity validation, specialty passes (temporary protection, code, equipment, general conditions), supporting documentation, reinspection prep, and QC gates across roofing, water, fire, mold, and commercial files.",
    },
    {
      question: "What should contractors compare first when a carrier estimate arrives?",
      answer:
        "File the latest estimate version, assign a review owner, validate the sketch and room list against field conditions, then build a written comparison worksheet with photo refs. Do not start with the dollar total — start with rooms, trades, and quantities against documented field conditions.",
    },
    {
      question: "When is a gap ready for supplement packaging?",
      answer:
        "When it is classified supplement-ready: documented field condition, clear estimate omission or quantity/scope delta, and a photo or measurement reference on the current estimate version. Gaps that still need evidence stay in recapture — do not package unsupported additions.",
    },
    {
      question: "Does this guide provide coverage or legal advice?",
      answer:
        "No. It is an operational documentation and workflow standard for comparing field conditions to carrier estimates. It does not provide legal advice, policy interpretation, engineering opinions, or public-adjusting guidance.",
    },
  ],
  relatedResources: [
    {
      label: "Insurance Estimate Review Playbook for Contractors",
      href: "/resources/guides/general-claims/insurance-estimate-review-playbook-for-contractors",
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
      label: "Carrier Estimate Review Workflow",
      href: "/resources/guides/general-claims/carrier-estimate-review-guide",
    },
    {
      label: "Claim Documentation Standards",
      href: "/resources/guides/general-claims/documentation-standards-guide",
    },
    {
      label: "Commercial Insurance Claims Documentation Guide",
      href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
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
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});

export { GUIDE_PATH as INSURANCE_ESTIMATE_REVIEW_SCOPE_VALIDATION_GUIDE_PATH };
