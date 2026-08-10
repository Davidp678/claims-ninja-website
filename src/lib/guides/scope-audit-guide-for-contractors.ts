import { defineGuide } from "@/lib/guides/guide-builder";

const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "scope-audit-guide-for-contractors" as const;
const GUIDE_PATH = `/resources/guides/${CATEGORY}/${GUIDE_SLUG}` as const;

export const SCOPE_AUDIT_GUIDE_FOR_CONTRACTORS = defineGuide({
  slug: GUIDE_SLUG,
  title: "Scope Audit Guide for Contractors",
  excerpt:
    "Operational guide for auditing insurance estimate scope against documented field conditions — missing work, incomplete demolition and reconstruction, omitted trades, roofing, water, fire, and mold scope audits, commercial considerations, code impacts, unsupported assumptions, and documentation that supports revised scope.",
  category: CATEGORY,
  guideType: "documentation-standard",
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Scope audit",
    "Insurance estimate scope review",
    "Contractor scope audit",
    "Estimate review",
    "Missing scope",
    "Scope validation",
    "Omitted work",
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
  seoTitle: "Scope Audit Guide for Contractors | Estimate Scope Review",
  seoDescription:
    "Audit insurance estimate scope against field conditions: missing work, incomplete demos and rebuilds, omitted trades, roofing, water, fire, and mold scope audits, commercial and code considerations, assumption review, and QC checklists for contractors.",
  relatedGuideSlugs: [
    "insurance-estimate-review-playbook-for-contractors",
    "insurance-estimate-review-scope-validation-guide",
    "missing-line-item-documentation-guide-for-contractors",
    "quantity-validation-guide-for-contractors",
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
    "why-carrier-estimates-miss-required-trades",
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
    "scope-audit-for-contractors",
    "auditing-insurance-estimates-for-contractors",
    "missing-scope-contractor-audit",
    "reviewing-insurance-estimate-scope",
    "documenting-omitted-work-insurance-estimates",
    "scope-audit-workflow",
  ],
  claimTypes: ["roofing", "water", "fire", "mold", "commercial", "large-loss"],
  purpose:
    "This guide is the specialty authority for scope audits inside the Estimate Review & Scope Validation cluster. The Insurance Estimate Review & Scope Validation Guide teaches estimate anatomy and what to validate across scope and quantity. The Insurance Estimate Review Playbook is the operational hub for the full receive-to-settlement workflow. The Quantity Validation Guide focuses on measurement accuracy — whether SF, squares, counts, and days match the field. The Missing Line Item Documentation Guide documents and supports omitted work after gaps are identified so exhibits are reviewable. This resource goes deep on completeness of work: how contractors systematically audit a carrier insurance estimate against documented field conditions to find missing work, incomplete demolition and reconstruction, omitted trades, unsupported assumptions, and peril-specific scope gaps across roofing, water, fire, mold, and commercial files. Use it when the estimate’s line list must be tested for omitted assemblies before production absorbs unpaid scope or before a scope gap is marked supplement-ready. Hand identified gaps to the Missing Line Item Documentation Guide for exhibit mapping, pair with Quantity Validation when numbers also need independent measurement, Documentation Standards for evidence capture, Carrier Estimate Review for day-one intake sequencing, Claim File Audit and Supplement Submission for packaging, and the Commercial Insurance Supplement Playbook on multi-building files. Claims Ninja supports contractors with documentation standards, estimate review workflows, supplement packaging, and claim recovery operations — we are not a public adjuster, carrier representative, or legal counsel. This guide does not provide estimating software instruction, legal advice, policy interpretation, engineering opinions, or public-adjusting guidance.",
  whenToUse: [
    {
      condition:
        "Carrier estimate received and field conditions suggest missing trades, assemblies, or phases",
      signal:
        "Photos or notes show work the estimate never lists — demo, rebuild, temporary protection, or specialty trades",
    },
    {
      condition:
        "Estimate includes rooms or planes but skips sequencing, detach/reset, or adjacent affected areas",
      signal:
        "Trade order broken, finishes without prep, or damage documented beyond written scope",
    },
    {
      condition:
        "Scope gaps need a comparison worksheet, evidence refs, and classification before supplement packaging",
      signal:
        "Gap list has omitted-work candidates without area labels or photo support",
    },
    {
      condition:
        "Commercial or multi-area loss requires scope reconciliation by building, floor, or suite ID",
      signal:
        "Area index exists but estimate sections omit documented zones or shared systems",
    },
    {
      condition:
        "Code, ordinance, or discovery expands required work after the initial estimate",
      signal:
        "AHJ notes, open-wall findings, or moisture/smoke migration add assemblies not on the estimate",
    },
  ],
  prerequisites: [
    "Current carrier estimate (latest version) with sketch when available and version noted",
    "Labeled photos meeting Documentation Standards for every area under review",
    "Area index matching estimate sections to photo folders and field notes",
    "Scope comparison worksheet tied to the active estimate version",
    "Field notes or daily reports documenting conditions, discovery, and access limits",
  ],
  requiredDocumentation: [
    {
      id: "carrier-estimate-latest",
      label: "Current carrier estimate (latest version)",
      required: true,
      detail:
        "Confirm claim number, risk address, price list, sketch attachment, and estimate version before recording any scope gap.",
    },
    {
      id: "field-condition-photos",
      label: "Labeled field-condition photographs",
      required: true,
      detail:
        "Overview-to-detail sequences that show documented conditions the estimate must address — not stock or unlabeled dumps.",
    },
    {
      id: "scope-comparison-worksheet",
      label: "Scope comparison worksheet",
      required: true,
      detail:
        "Field condition, estimate presence/absence, omitted or incomplete work, evidence refs, and classification (supplement-ready / needs more evidence) by area or assembly.",
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
        "Contemporaneous notes on damage extent, discovery, trade needs, sequencing constraints, and assumptions that differ from the estimate.",
    },
    {
      id: "specialty-logs",
      label: "Specialty logs when scope depends on mitigation, contents, or protocol",
      required: false,
      detail:
        "Moisture maps, equipment logs, contents inventories, mold protocols, or daily reports when those artifacts define required work.",
    },
    {
      id: "code-exhibits",
      label: "Code or AHJ exhibits when upgrades drive added scope",
      required: false,
      detail:
        "Written AHJ direction, permit notes, or citations tied to photographed conditions — not contractor opinions as coverage advice.",
    },
  ],
  steps: [
    {
      id: "what-a-scope-audit-is",
      title: "What a Scope Audit Is",
      actions: [
        "A scope audit is the disciplined comparison of documented field conditions to the carrier estimate’s written scope of work — line by line and area by area.",
        "It answers whether the estimate includes the work required by site conditions: trades, phases, assemblies, and sequencing — not whether a measurement is accurate.",
        "Quantity Validation asks whether the numbers match the field. Scope audit asks whether the work is present at all, complete through demolition and reconstruction, and free of unsupported assumptions.",
        "Treat the audit as a documentation workflow: assemble evidence, walk areas against estimate sections, record omissions and incompleteness, classify gaps, and route supplement-ready items.",
        "Scope audits support accurate claim documentation and estimate review; they are not estimating software instruction or public-adjusting guidance.",
        "Use this specialty guide when the Scope Validation cornerstone’s completeness pass needs depth across roofing, water, fire, mold, and commercial files. Hand identified gaps to the Missing Line Item Documentation Guide for exhibit mapping, then to the Insurance Estimate Review Playbook for packaging and settlement.",
      ],
    },
    {
      id: "why-scope-gaps-occur",
      title: "Why Scope Gaps Occur",
      actions: [
        "Limited inspection time produces room-level summaries that skip detach/reset, temporary protection, and adjacent affected finishes.",
        "Template macros and bundled scopes hide omitted accessories, prep work, and specialty trades behind a single finish line.",
        "Assumptions about repairability, match, access, or ‘like kind’ replace documented conditions — especially when open-wall or open-ceiling discovery has not happened yet.",
        "Trade sequencing is ignored: finishes appear without demolition, drying, or substrate repair that field conditions require.",
        "Peril-specific work — containment, pack-out, HVAC cleaning, mold protocol steps — is dropped when the estimate was written as a light cosmetic repair.",
        "Commercial multi-area files omit zones, shared systems, or tenant spaces when the estimate follows a residential single-area pattern.",
      ],
    },
    {
      id: "preparing-for-a-scope-audit",
      title: "Preparing for a Scope Audit",
      actions: [
        "Assign a scope audit owner and lock the latest carrier estimate version before any gap is recorded.",
        "Publish the area index (rooms, planes, elevations, or Building → Floor → Suite) so photos, notes, and estimate sections share one labeling system.",
        "Pull Documentation Standards folders: labeled photos, field notes, specialty logs, and any code/AHJ exhibits already on file.",
        "Open a blank scope comparison worksheet tied to the active estimate version — never mix gaps across revised estimates.",
        "Identify applicable specialty passes early: roofing, water, fire, mold, commercial, and code — so field recapture is scheduled before production covers conditions.",
        "Set production guardrails: unpaid or incomplete scope must not be absorbed silently while the audit runs.",
      ],
    },
    {
      id: "comparing-field-to-estimate-scope",
      title: "Comparing Documented Field Conditions to Estimate Scope",
      actions: [
        "Assemble the audit set before arguing dollars: latest estimate, sketch, labeled photos, field notes, specialty logs, and comparison worksheet.",
        "Walk area-by-area or plane-by-plane — do not start with the estimate grand total.",
        "For each documented condition, ask: Is the required work present? Is it complete through demo and rebuild? Are supporting trades listed? Are assumptions stated or silent?",
        "Record field condition, estimate line or ‘none,’ gap type (omitted / incomplete / sequencing / assumption), evidence refs, and classification.",
        "Prioritize by dollar impact, reinspection risk, and evidence strength; upgrade weak photos before marking a gap supplement-ready.",
        "Version the worksheet to the active estimate; archive prior comparisons when a revised carrier estimate arrives.",
      ],
    },
    {
      id: "reviewing-trade-sequencing",
      title: "Reviewing Trade Sequencing",
      actions: [
        "Map the logical work order required by field conditions: temporary protection → demolition → drying/abatement → substrate → rough trades → finishes → cleanup.",
        "Flag finish lines that appear without required prep, drying, or substrate repair documented in photos or logs.",
        "Confirm detach/reset, contents protection, and access work appear when occupied conditions or built-ins block production.",
        "Check that specialty trades (electrical, plumbing, HVAC, abatement) are listed when photos show systems disturbed or contaminated.",
        "Note sequencing gaps as incomplete scope even when a finish line exists — presence of a paint line does not prove prep was scoped.",
        "Hand sequencing findings to the comparison worksheet with photo refs that show why the order matters on this loss.",
      ],
    },
    {
      id: "reviewing-demolition-scope",
      title: "Reviewing Demolition Scope",
      actions: [
        "Compare demolition lines to moisture maps, soot boundaries, impact zones, and labeled damage photos — not to a single room name alone.",
        "Confirm remove vs. clean decisions match documented conditions; cleaning-only scope fails when photos show failed or saturated finishes.",
        "Check for missing tear-out of wet insulation, damaged drywall, flooring systems, cabinets, and substrates behind finishes.",
        "Document height, layers, and assemblies (e.g., wet drywall to X inches, insulation behind) so demo scope is specific.",
        "Preserve pre-demo photos; once tear-out starts, omitted demo becomes harder to prove at desk review.",
        "On water and mold files, reconcile demo extents to Category/Class or protocol documentation before closing an area.",
      ],
    },
    {
      id: "reviewing-reconstruction-scope",
      title: "Reviewing Reconstruction Scope",
      actions: [
        "Trace each demolished or damaged assembly forward: if it was removed or failed, is replace/repair scoped through finish?",
        "Flag orphan demolitions — tear-out with no corresponding rebuild — and orphan finishes — rebuild without matching demo or substrate repair.",
        "Validate trim, openings, fixtures, cabinets, and specialty finishes that must return after demo.",
        "Confirm matching and continuity work where partial replacement creates documented appearance or performance issues — capture conditions, not coverage conclusions.",
        "Separate temporary repairs from permanent reconstruction so emergency work is not mistaken for full rebuild scope.",
        "Keep reconstruction lines indexed to the same area IDs as demo and photo folders.",
      ],
    },
    {
      id: "roofing-scope-audits",
      title: "Roofing Scope Audits",
      actions: [
        "Audit plane-by-plane: covering, underlayment, ice/water barrier, drip edge, flashing, ventilation, and penetrations against documented damage and details.",
        "Flag missing steep/high, valley metal, pipe jacks, ridge vent, or detach/reset of solar/satellite when photos show those conditions.",
        "Check temporary protection and interior protection when active leaks or open decks are documented.",
        "Route code-driven roofing additions through the Code Upgrade Documentation Guide with AHJ or citation support — do not invent engineering opinions.",
        "Apply Roofing Claim Documentation Standard labeling so plane IDs match estimate sections and photo folders.",
        "When quantities also look wrong, pair this audit with the Quantity Validation Guide; here the question is missing assemblies, not only wrong squares.",
      ],
    },
    {
      id: "water-damage-scope-audits",
      title: "Water Damage Scope Audits",
      actions: [
        "Reconcile mitigation scope to moisture maps and placement photos: extraction, demo, containment, equipment, monitoring, and anti-microbial where documented.",
        "Confirm Category and Class documentation supports specialty steps; route Cat-3 detail to the Category 3 Water Damage Documentation Guide.",
        "Audit rebuild scope after dry-out — cabinets, flooring systems, base, drywall, insulation, and content manipulation often drop from light cosmetic estimates.",
        "Flag early equipment pull or incomplete drying when logs show elevated readings at close of mitigation.",
        "On commercial water losses, tie omitted zones to building/floor/suite IDs per the Commercial Water Loss Documentation Guide.",
        "Separate mitigation invoice defense issues from permanent repair omissions; both need evidence, but different packets.",
      ],
    },
    {
      id: "fire-damage-scope-audits",
      title: "Fire Damage Scope Audits",
      actions: [
        "Audit by smoke/soot zone: structural repair, clean/seal, finish replacement, and contents work must match labeled photo extent — not adjacent-room assumptions.",
        "Confirm emergency board-up, temporary power, and contents protection appear when those conditions are documented.",
        "Check pack-out, inventory, and cleaning scope against contents photos and inventories.",
        "Flag HVAC cleaning or sealing when contamination pathways are photographed; missing mechanical scope is a common fire gap.",
        "Route fire code additions through the Fire Code Upgrade Documentation Guide with AHJ support.",
        "Apply Fire Damage Documentation Guide area labeling so the comparison worksheet resolves to the same zones as photo sets.",
      ],
    },
    {
      id: "mold-remediation-scope-audits",
      title: "Mold Remediation Scope Audits",
      actions: [
        "Compare estimate lines to the written remediation protocol and containment plan — protocol steps without estimate lines are omitted scope.",
        "Confirm containment, negative air, PPE, HEPA vacuuming, antimicrobial, and disposal appear when protocol requires them.",
        "Audit tear-out extents against moisture and visible growth documentation; incomplete demo understates rebuild.",
        "Check post-remediation verification and clearance-related documentation pathways when the protocol calls for them — capture process evidence, not lab opinions as coverage advice.",
        "Route commercial mold files through the Commercial Mold Claims Guide for multi-area indexing.",
        "Apply Mold Damage Documentation Guide labeling so protocol areas match estimate sections and photos.",
      ],
    },
    {
      id: "commercial-scope-considerations",
      title: "Commercial Scope Considerations",
      actions: [
        "Lock a master area index (Building → Floor → Suite/Unit/Zone) before recording commercial scope gaps.",
        "Audit common areas, shared systems, and tenant improvements separately so proportional cuts cannot dismiss undocumented zones.",
        "Scale the audit to footprint: multi-building campuses need per-location worksheets, not a single residential room list.",
        "Document after-hours, occupied-operations, and access constraints that create additional protection or phasing work shown in notes.",
        "Use the Commercial Insurance Claims Documentation Guide and Commercial Insurance Supplement Playbook for packaging multi-area scope packets.",
        "On large-loss files, prioritize by dollar impact and reinspection accessibility — capture omitted-work evidence before production removes it.",
      ],
    },
    {
      id: "code-and-ordinance-impacts",
      title: "Code and Ordinance Impacts",
      actions: [
        "Document code-driven scope additions with AHJ notes, permit requirements, and photos of the condition addressed — not contractor opinions as coverage advice.",
        "Common scope impacts include ice/water barrier extents, decking replacement, underlayment upgrades, AFCI/GFCI devices, smoke sealing, fire blocking, and accessibility-related work when directed in writing.",
        "Tie each added assembly to a citation or written AHJ direction and to the area ID on the comparison worksheet.",
        "Route roofing code packages to the Code Upgrade Documentation Guide and fire code packages to the Fire Code Upgrade Documentation Guide.",
        "Keep code exhibits in a dedicated folder linked from the scope worksheet for reinspection.",
        "If applicability is unclear, capture the condition and AHJ communication; do not present contractor interpretation as policy coverage advice.",
      ],
    },
    {
      id: "reviewing-assumptions",
      title: "Reviewing Assumptions",
      actions: [
        "List silent estimate assumptions: repair vs. replace, clean vs. remove, match available, access unrestricted, systems unaffected, adjacent rooms clean.",
        "Test each assumption against labeled photos and field notes — unsupported assumptions are scope risks even when a line exists.",
        "Flag ‘allowance’ or generic repair language that does not describe the documented assembly.",
        "Document discovery that invalidates an assumption the same day (open wall, hidden moisture, failed substrate).",
        "Keep assumption challenges observational and evidence-tied — do not convert them into coverage conclusions.",
        "Classify assumption gaps as needs-more-evidence until photos and notes clearly show why the written scope is incomplete.",
      ],
    },
    {
      id: "identifying-omitted-work",
      title: "Identifying Omitted Work",
      actions: [
        "Build an omitted-work list from the comparison worksheet: condition present in field evidence, absent or incomplete in the estimate.",
        "Group omissions by trade and area so packaging stays readable for desk review.",
        "Cross-check against common miss lists: temporary protection, detach/reset, containment, pack-out, HVAC, matching, waste/haul, general conditions, and specialty protocol steps.",
        "Use blog patterns from The Most Overlooked Line Items in Insurance Estimates and Five Red Flags That an Insurance Estimate Is Missing Scope as reminder prompts — still require file-specific evidence.",
        "Do not invent lines from memory; every omission needs a photo or note ref before supplement-ready status.",
        "Separate omitted work (completeness) from quantity errors (measurement) so Quantity Validation and Scope Audit packets stay distinct when both apply.",
      ],
    },
    {
      id: "documentation-supporting-revised-scope",
      title: "Building Documentation That Supports Revised Scope",
      actions: [
        "Package each revised scope item with field condition summary, estimate gap, evidence refs, area ID, and current estimate version.",
        "Index the packet so a reviewer can open the assembly evidence in one session without renaming folders.",
        "Route supplement-ready scope gaps through Supplement Submission with line hints — park unsupported items in field recapture.",
        "Update the worksheet within 24 hours after reinspection or a revised carrier estimate.",
        "Align production guardrails so unpaid omitted work is not absorbed silently.",
        "Use Claim File Audit as the peer gate before CRM upload when scope dollars are material to the file.",
      ],
    },
    {
      id: "final-quality-control-review",
      title: "Final Quality-Control Review",
      actions: [
        "Confirm scope audit owner, estimate version, and area index consistency across all artifacts.",
        "Re-walk high-dollar areas: every supplement-ready omission has photo and note support.",
        "Verify specialty passes completed when applicable — roofing, water, fire, mold, commercial, and code.",
        "Confirm sequencing, demo, and reconstruction reconcile — no orphan tear-out or orphan finish.",
        "Acknowledge production guardrails for unpaid incomplete scope.",
        "Pass Claim File Audit (or peer QC) before packaging; then hand the packet to the Insurance Estimate Review Playbook settlement path.",
      ],
    },
    {
      id: "common-scope-audit-mistakes-narrative",
      title: "Common Scope Audit Mistakes",
      actions: [
        "Arguing missing scope with dollar totals instead of area-indexed photos and comparison worksheets.",
        "Confusing quantity errors with omitted work — fixing squares without adding missing assemblies.",
        "Mixing estimate versions on one scope worksheet.",
        "Using inconsistent area labels across estimate, photos, and notes.",
        "Marking omissions supplement-ready before evidence is strong enough for desk review.",
        "Skipping commercial location indexing so omitted zones cannot be defended by building or suite.",
      ],
    },
    {
      id: "scope-audit-workflow-asset",
      title: "Operational Asset — Scope Audit Workflow",
      actions: [
        "Step 1 — Intake: assign scope audit owner; file latest estimate and sketch; confirm photo and note standards.",
        "Step 2 — Index: publish area/plane/location IDs matching estimate sections to photo folders.",
        "Step 3 — Field review: walk documented conditions against estimate sections; capture missing photo gaps same day.",
        "Step 4 — Compare: fill scope comparison worksheet (condition / estimate presence / gap type / refs); classify each item.",
        "Step 5 — Specialty: run sequencing, demo, reconstruction, roofing, water, fire, mold, commercial, and code passes as applicable.",
        "Step 6 — Assumptions: list and test silent assumptions against evidence; upgrade weak items to needs-more-evidence.",
        "Step 7 — Route: send supplement-ready gaps to Missing Line Item Documentation for exhibit packages, then packaging; send weak evidence to field recapture; set production guardrails.",
        "Gate: no high-value omitted or incomplete scope marked complete until photo, note, and estimate section reconcile.",
      ],
    },
    {
      id: "scope-comparison-checklist-asset",
      title: "Operational Asset — Scope Comparison Checklist",
      actions: [
        "Latest estimate version cited on every worksheet page.",
        "Each area walked against estimate section — not skipped for ‘obvious’ rooms.",
        "Omitted, incomplete, sequencing, and assumption gaps tagged separately.",
        "Evidence refs present for every supplement-ready item.",
        "Demo and reconstruction traced as a pair where tear-out occurred.",
        "Specialty trades checked when systems are disturbed or contaminated.",
        "Commercial items mapped to building/floor/suite or zone IDs.",
        "Classifications complete: supplement-ready vs needs more evidence.",
      ],
    },
    {
      id: "documentation-checklist-asset",
      title: "Operational Asset — Documentation Checklist",
      actions: [
        "Latest carrier estimate version filed and cited on the worksheet.",
        "Labeled photos organized by area ID for every audited zone.",
        "Scope comparison worksheet complete with classifications and evidence refs.",
        "Area index consistent across estimate, photos, and notes.",
        "Field notes contemporaneous and cross-referenced to photo IDs.",
        "Specialty logs attached when mitigation, contents, or protocol define scope.",
        "Code/AHJ exhibits linked when upgrades drive added work.",
        "Packet ready for Claim File Audit or Supplement Submission.",
      ],
    },
    {
      id: "field-review-checklist-asset",
      title: "Operational Asset — Field Review Checklist",
      actions: [
        "Exterior and roof planes reviewed for missing assemblies and temporary protection.",
        "Interior rooms reviewed for demo, rebuild, detach/reset, and matching needs.",
        "Water: moisture map vs mitigation and rebuild scope.",
        "Fire: smoke/soot zones vs clean/seal, contents, and HVAC scope.",
        "Mold: protocol steps vs estimate lines and containment.",
        "Trade sequencing checked from protection through finishes.",
        "Commercial shared systems and common areas reviewed by location ID.",
        "Discovery logged same day with photos before cover-up.",
      ],
    },
    {
      id: "quality-control-checklist-asset",
      title: "Operational Asset — Quality-Control Checklist",
      actions: [
        "Scope audit owner assigned; worksheet version matches active estimate.",
        "Every supplement-ready omission has photo and note refs.",
        "Area labels consistent across estimate, photos, notes, and worksheet.",
        "Sequencing, demolition, and reconstruction passes complete.",
        "Roofing, water, fire, mold, commercial, and code passes completed when applicable.",
        "Assumptions tested; unsupported items not marked supplement-ready.",
        "Production guardrails acknowledged for unpaid incomplete scope.",
        "Peer or Claim File Audit gate passed before packaging material scope supplements.",
      ],
    },
    {
      id: "common-mistakes-checklist-asset",
      title: "Operational Asset — Common Scope Audit Mistakes",
      actions: [
        "Do not dispute missing scope without area-indexed photos and a comparison worksheet.",
        "Do not confuse quantity errors with omitted work — use Quantity Validation for measurements.",
        "Do not mix estimate versions on one worksheet.",
        "Do not use inconsistent area labels across artifacts.",
        "Do not mark weak evidence as supplement-ready.",
        "Do not skip commercial location indexing on multi-area losses.",
        "Do not delay field capture until after demo or dry-in removes proof.",
        "Do not treat scope audit as coverage advice or public adjusting.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "scope-owner-assigned",
      label: "Scope audit owner assigned and worksheet tied to the latest estimate version",
      required: true,
      detail:
        "Unowned scope review drifts into production without reconciled gap lists.",
    },
    {
      id: "field-evidence-present",
      label: "Labeled photos and field notes cover every area marked for omitted or incomplete scope",
      required: true,
      detail:
        "Scope disputes without visual and written context fail at desk review.",
    },
    {
      id: "worksheet-classified",
      label: "Scope comparison worksheet complete with classifications and evidence refs",
      required: true,
      detail:
        "Unclassified gaps cannot route cleanly to supplement packaging or recapture.",
    },
    {
      id: "demo-rebuild-reconciled",
      label: "Demolition and reconstruction reconciled — no orphan tear-out or orphan finish on audited areas",
      required: true,
      detail:
        "Incomplete phase pairs are a primary source of unpaid production.",
    },
    {
      id: "specialty-scope-passes",
      label: "Applicable sequencing, roofing, water, fire, mold, commercial, and code scope passes complete",
      required: true,
      detail:
        "Skipping specialty passes leaves the highest-dollar completeness misses undocumented.",
    },
    {
      id: "production-guardrails-scope",
      label: "Production guardrails acknowledged for unpaid incomplete or omitted scope",
      required: true,
      detail:
        "PM must acknowledge under-scoped work before crews absorb unpaid assemblies.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Arguing missing scope with dollars instead of evidence-indexed worksheets",
      impact:
        "Desk reviewers deny unsupported additions; file credibility drops for the entire supplement.",
      correction:
        "Attach labeled photos, field notes, and a scope comparison worksheet before packaging.",
    },
    {
      mistake: "Treating quantity errors as a substitute for a scope audit",
      impact:
        "Numbers get fixed while omitted trades and incomplete phases remain unpaid.",
      correction:
        "Run Scope Audit for completeness and Quantity Validation for measurements — both when needed.",
    },
    {
      mistake: "Mixing estimate versions on one scope worksheet",
      impact:
        "Gaps and approvals become untraceable after a revised carrier estimate.",
      correction:
        "Version the worksheet to the active estimate; archive prior scope comparisons.",
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
        "Photograph and note high-risk areas before cover-up; log discovery the same day it appears.",
    },
    {
      mistake: "Skipping commercial location indexing",
      impact:
        "Proportional cuts dismiss undocumented zones; high-dollar omissions cannot be defended by building or suite.",
      correction:
        "Map scope gaps to Building → Floor → Suite/Zone IDs before marking commercial items supplement-ready.",
    },
    {
      mistake: "Marking omissions supplement-ready with weak evidence",
      impact:
        "Premature packaging invites denial and slows legitimate gaps on the same file.",
      correction:
        "Use the QC checklist gate; upgrade photos and notes before routing to Supplement Submission.",
    },
    {
      mistake: "Treating scope audit as coverage advice or public adjusting",
      impact:
        "Compliance and credibility risk; operational focus is lost.",
      correction:
        "Stay in documentation and workflow: compare field conditions to estimate lines, classify gaps, and route supported items through supplement packaging.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Documented field conditions show required work absent from the carrier estimate",
      documentation:
        "Scope comparison worksheet with field condition, estimate absence, photo/note refs, and current estimate version.",
      lineItemHint: "Omitted demo, rebuild, protection, detach/reset, or specialty trade lines",
    },
    {
      trigger: "Demolition scoped without matching reconstruction, or finishes without required prep",
      documentation:
        "Paired demo/rebuild worksheet entries with before/after or open-wall photos by area ID.",
      lineItemHint: "Missing replace/repair finishes, substrate, trim, fixtures, or prep lines",
    },
    {
      trigger: "Roofing details or temporary protection documented but not listed",
      documentation:
        "Plane-labeled photos, detail shots, and roofing documentation labels; code exhibits when upgrades apply.",
      lineItemHint: "Flashing, ventilation, ice barrier, steep/high, temporary protection",
    },
    {
      trigger: "Water, fire, or mold specialty steps required by maps, zones, or protocol but missing from the estimate",
      documentation:
        "Moisture maps, soot zone photos, protocol excerpts, equipment/contents logs indexed by area.",
      lineItemHint: "Containment, equipment, pack-out, HVAC cleaning, protocol steps, rebuild after mitigation",
    },
    {
      trigger: "Commercial multi-area scope missing or not indexed by location",
      documentation:
        "Master area index, per-location gap lists, and photos organized by building/floor/suite.",
      lineItemHint: "Location-indexed omitted zones and shared-system work",
    },
    {
      trigger: "Code or AHJ requirements add assemblies not on the estimate",
      documentation:
        "AHJ notes, citations, photos of conditions, and worksheet links — no engineering opinions as coverage advice.",
      lineItemHint: "Code-driven assemblies, devices, sealing, blocking, permits",
    },
    {
      trigger: "Scope worksheet complete and evidence indexed but carrier estimate still omits documented work",
      documentation:
        "Indexed scope packet cross-referencing each gap to photos and notes — routed through Supplement Submission.",
      lineItemHint:
        "Scope supplement package with line-item justification; Claims Ninja supports documentation review, estimating, and claim recovery workflows",
    },
  ],
  faq: [
    {
      question:
        "How is this guide different from the Quantity Validation Guide for Contractors?",
      answer:
        "Quantity Validation focuses on measurement accuracy — whether SF, squares, counts, and days match the field. This Scope Audit Guide focuses on completeness of work — missing trades, incomplete demolition and reconstruction, omitted assemblies, sequencing gaps, and unsupported assumptions. Use both when a file has measurement and completeness issues.",
    },
    {
      question:
        "How is this guide different from the Insurance Estimate Review & Scope Validation Guide?",
      answer:
        "The Scope Validation Guide is the cluster cornerstone for estimate anatomy and an overview of what to validate. This guide is the specialty deep-dive on running a scope audit — comparison worksheets, peril-specific completeness passes, assumption review, omitted-work identification, and QC gates.",
    },
    {
      question: "How is this guide different from the Insurance Estimate Review Playbook?",
      answer:
        "The Playbook is the operational hub for the full estimate review lifecycle. This guide focuses on the scope audit specialty: how to compare field conditions to written scope, classify omissions, and prepare evidence so gaps can enter the playbook’s packaging and settlement steps.",
    },
    {
      question: "When should omitted work be marked supplement-ready?",
      answer:
        "When labeled photos, field notes, and worksheet entries reconcile to the current estimate version with a clear field-condition-vs-estimate gap. Weak or unlabeled evidence keeps the item in needs-more-evidence until upgraded.",
    },
    {
      question: "Does this guide teach estimating software or provide legal advice?",
      answer:
        "No. It teaches contractor documentation and operational workflows for auditing estimate scope against field conditions. It does not provide estimating software instruction, legal advice, policy interpretation, engineering opinions, or public-adjusting guidance.",
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
      label: "Missing Line Item Documentation Guide for Contractors",
      href: "/resources/guides/general-claims/missing-line-item-documentation-guide-for-contractors",
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

export { GUIDE_PATH as SCOPE_AUDIT_GUIDE_FOR_CONTRACTORS_PATH };
