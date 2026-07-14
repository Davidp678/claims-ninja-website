import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/fire-damage" as const;
const CATEGORY = "fire-damage" as const;
const GUIDE_SLUG = "fire-damage-supplement-playbook-for-contractors" as const;
const GUIDE_PATH = `/resources/guides/${CATEGORY}/${GUIDE_SLUG}` as const;

export const FIRE_DAMAGE_SUPPLEMENT_PLAYBOOK_FOR_CONTRACTORS = defineGuide({
  slug: GUIDE_SLUG,
  title: "Fire Damage Supplement Playbook for Contractors",
  excerpt:
    "The definitive contractor operational playbook for fire damage supplements — from carrier estimate review through site inspection, documentation packaging, supplement submission, reinspection, objection response, commercial coordination, and final settlement on fire insurance claims.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Fire Damage",
    "Smoke Damage",
    "Supplements",
    "Claim Recovery",
    "Documentation",
    "Xactimate",
    "Reinspection",
    "Contents",
    "HVAC",
    "Commercial fire",
    "Restoration contractors",
    "Carrier estimate review",
  ],
  publishedAt: "2026-07-13",
  updatedAt: "2026-07-13",
  estimatedMinutes: 22,
  seoTitle:
    "Fire Damage Supplement Playbook for Contractors | Complete Fire Claim Recovery Workflow",
  seoDescription:
    "Contractor fire damage supplement playbook: carrier estimate review, site inspection, documentation packages, supplement submission, reinspection prep, objection response, and settlement on fire insurance claims.",
  relatedGuideSlugs: [
    "fire-damage-documentation-guide",
    "smoke-soot-damage-documentation-guide",
    "fire-code-upgrade-documentation-guide",
    "contents-inventory-documentation-guide",
    "pack-out-documentation-guide",
    "commercial-fire-claims-guide",
    "fire-claim-intake-guide",
    "smoke-documentation-guide",
    "hvac-contamination-guide",
    "odor-documentation-guide",
    "contents-documentation-guide",
    "structural-stabilization-documentation-guide",
    "supplement-submission-guide",
    "carrier-estimate-review-guide",
  ],
  relatedBlogSlugs: [
    "why-fire-damage-supplements-get-denied",
    "why-fire-damage-claims-get-underpaid",
    "fire-claim-documentation-checklist",
    "fire-damage-supplement-denial-recovery",
    "insurance-supplementing-guide-contractors",
    "first-48-hours-after-carrier-estimate",
    "smoke-and-soot-damage-documentation-guide",
  ],
  faqIds: [
    "fire-supplement-included-items",
    "fire-supplement-when-to-submit",
    "fire-supplement-documentation-evidence",
    "fire-supplement-multiple-submissions",
    "fire-supplement-commonly-missed-items",
    "fire-supplement-documentation-support",
    "fire-supplement-contractor-documentation",
    "fire-claims-underpaid-why",
    "fire-hidden-damage-documentation",
    "fire-commercial-supplement-opportunities",
    "fire-supplement-checklist-documents",
    "fire-carrier-additional-documentation-why",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["fire-damage", "smoke", "commercial", "large-loss"],
  purpose:
    "Fire damage insurance claims rarely settle completely on the first carrier estimate. Adjusters approve what they can defend from an initial walk — often the origin room and a generic smoke wipe — while restoration crews clean migration halls, pack contents, treat HVAC, demolish charred assemblies, and rebuild to code. When supplements lag field scope, contractors absorb legitimate work. This playbook is the operational blueprint contractors follow after receiving the insurance estimate — not another documentation standard alone. It ties the complete Fire Damage guide ecosystem into one repeatable supplement workflow from estimate review through final settlement. For field capture standards on smoke, soot, HVAC, contents, pack-out, and code upgrades, see the specialty fire guides linked throughout. For cross-trade supplement submission mechanics, see the Supplement Submission Workflow. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Carrier estimate received and scope gaps visible against field walk",
      signal:
        "Sketch room count lower than photographed spaces; migration, HVAC, contents, or demolition lines missing",
    },
    {
      condition: "Demolition or tear-out reveals scope not on carrier estimate",
      signal:
        "Charred framing, cavity smoke, or compromised assemblies exposed after first estimate issued",
    },
    {
      condition: "Supplement package assembly before formal carrier submission",
      signal:
        "Gap list validated, documentation indexed, revised estimate drafted — ready for cover letter and routing",
    },
    {
      condition: "Carrier reinspection scheduled on disputed fire scope",
      signal:
        "Adjuster requests walkthrough on migration, HVAC, contents, or structural discovery lines",
    },
    {
      condition: "Partial approval or denial received on fire supplement",
      signal:
        "Desk reviewer cites documentation gaps, fire causation, cleaning sufficiency, or code applicability",
    },
    {
      condition: "Commercial or multi-unit fire loss requiring phased supplements",
      signal:
        "Building-indexed scope, tenant boundaries, or large-loss documentation volumes exceed residential templates",
    },
  ],
  prerequisites: [
    "Claim number, policyholder contact, and carrier adjuster info in job file",
    "Carrier estimate imported or PDF saved with version date logged",
    "Room index with naming convention aligned to sketch and photo folders",
    "Supplement owner assigned — estimator, PM, or supplement coordinator with CRM tracking",
    "Gap list template started at intake and updated after every site visit",
    "Specialty fire guides linked to job file for smoke, HVAC, contents, pack-out, and code upgrade evidence",
  ],
  requiredDocumentation: [
    {
      id: "carrier-estimate-baseline",
      label: "Carrier estimate baseline with version date",
      required: true,
      detail:
        "Original carrier sketch and line items saved as baseline for every supplement delta comparison.",
    },
    {
      id: "scope-comparison",
      label: "Room-by-room scope comparison worksheet",
      required: true,
      detail:
        "Side-by-side carrier versus field scope by room — missing rooms, quantities, and line categories flagged.",
    },
    {
      id: "indexed-photos",
      label: "Indexed photo exhibits by room and damage category",
      required: true,
      detail:
        "Separate folders for origin, migration, structural, HVAC, contents, and demolition discovery.",
    },
    {
      id: "migration-narrative",
      label: "Smoke migration path narrative",
      required: true,
      detail:
        "Written path from origin through halls, chases, upper floors, and HVAC distribution — see Smoke & Soot Damage Documentation Guide.",
    },
    {
      id: "contents-inventory",
      label: "Room-located contents inventory with pack-out chain of custody",
      required: true,
      detail:
        "Inventory pages tied to manipulation, cleaning, storage, and replacement lines — see Contents Inventory and Pack-Out Documentation Guides.",
    },
    {
      id: "hvac-evidence",
      label: "HVAC inspection evidence — registers, components, duct access",
      required: true,
      detail:
        "Dedicated HVAC subfolder with system-off log and partial-system diagram when applicable.",
    },
    {
      id: "demo-discovery",
      label: "Demolition discovery log with contemporaneous photos",
      required: true,
      detail:
        "Discovery-era framing and cavity photos captured during tear-out — not after rebuild.",
    },
    {
      id: "code-upgrade-pack",
      label: "Code upgrade permit and inspection evidence when rebuild scope applies",
      required: false,
      detail:
        "Permit applications, AHJ citations, and triggered-work photos — see Fire Code Upgrade Documentation Guide.",
    },
    {
      id: "revised-estimate",
      label: "Revised Xactimate estimate with line-to-exhibit mapping",
      required: true,
      detail:
        "Export in carrier-preferred format with narratives explaining each supplement category.",
    },
    {
      id: "cover-letter",
      label: "Supplement cover letter with summary table and attachment index",
      required: true,
      detail:
        "One paragraph per issue: problem, evidence exhibit, requested line item or quantity change.",
    },
    {
      id: "specialist-reports",
      label: "Engineering, IH, or HVAC specialist report excerpts when used",
      required: false,
      detail:
        "Report conclusions cross-referenced to estimate line numbers in cover letter.",
    },
    {
      id: "correspondence-log",
      label: "Carrier correspondence and submission log",
      required: true,
      detail:
        "Submission date, channel, recipient, package version, and follow-up dates at 3, 7, and 14 business days.",
    },
    {
      id: "reinspection-packet",
      label: "Reinspection briefing packet for disputed lines",
      required: false,
      detail:
        "One-page summary, scope comparison table, and photo stations staged at each disputed area.",
    },
    {
      id: "settlement-reconciliation",
      label: "Approved scope reconciliation worksheet at settlement",
      required: true,
      detail:
        "Compare approved lines to production scope; flag remaining omissions before claim closeout.",
    },
  ],
  steps: [
    {
      id: "introduction",
      title: "Introduction — Why Fire Supplements Require a Repeatable Workflow",
      actions: [
        "Fire claims combine structural damage, smoke migration, soot contamination, odor treatment, HVAC redistribution, contents handling, suppression water overlap, demolition discovery, and code-driven rebuild — each category scrutinized separately by desk reviewers.",
        "Initial carrier estimates commonly miss legitimate scope because adjusters snapshot the origin room, apply generic smoke wipe macros, and freeze the sketch before demolition, pack-out, and HVAC inspection complete.",
        "Documentation — not negotiation alone — wins fire supplements. Indexed photos, room-labeled inventories, migration narratives, and discovery-era tear-out evidence give adjusters defensible scope they cannot extract from invoice-only submissions.",
        "Contractors need a repeatable workflow that runs on every fire file: review the estimate, inspect thoroughly, build the documentation package, identify supplement opportunities, organize the estimate, submit cleanly, prepare for reinspection, respond to objections, and reconcile settlement.",
        "This playbook is the central hub of the Fire Damage guide cluster — linking documentation standards, field procedures, and commercial workflows into one operational supplement process from estimate receipt through final payment.",
      ],
      notes:
        "For cross-trade supplement fundamentals, see the Insurance Supplementing Guide blog and Supplement Submission Workflow. For field documentation standards, start with the Fire Damage Documentation Guide.",
    },
    {
      id: "phase-1-review-estimate",
      title: "Phase 1 — Review the Carrier Estimate",
      owner: "supplement-coordinator",
      actions: [
        "Scope comparison — export carrier sketch room list and compare to field walk room index; flag every photographed room missing from sketch.",
        "Quantity review — validate SF, LF, and EA quantities on cleaning, demo, and rebuild lines against measurements and photo evidence.",
        "Pricing review — note unit price variances on specialty procedures, equipment, and overhead lines; document market or program pricing disputes separately from scope gaps.",
        "Missing line items — list absent categories: migration smoke wipe, HVAC cleaning, contents manipulation, pack-out, odor treatment, demolition, debris removal, temporary protection, and code upgrades.",
        "Common omissions — prioritize migration halls and closets, upper-floor bedrooms, HVAC duct scope, contents pack-out, specialty soot procedures, and pre-demo structural lines.",
        "Documentation gaps — identify which missing lines lack contemporaneous evidence and assign field capture before supplement submit.",
        "Assign supplement owner and schedule 48-hour estimate review per the First 48 Hours After Carrier Estimate playbook.",
        "Log baseline carrier estimate version, adjuster name, and sketch date in CRM before any internal estimate comparison.",
      ],
      notes:
        "See the Carrier Estimate Review Workflow for systematic Xactimate comparison methods. Run Phase 1 within 48 hours of estimate receipt — production that commits to under-scoped work erodes supplement credibility.",
    },
    {
      id: "phase-2-site-inspection",
      title: "Phase 2 — Complete a Thorough Site Inspection",
      owner: "field",
      actions: [
        "Structural damage — photograph char depth, compromised framing, load-path concerns, and shoring before demo boundaries are negotiated.",
        "Smoke migration — walk full path from origin through halls, stairwells, closets, upper floors, attic access, and adjoining units.",
        "Hidden damage — open cavities, inspect attics and crawlspaces, and photograph concealed char or soot before insulation and drywall close access.",
        "HVAC contamination — confirm system status, photograph registers distant from origin, inspect filter, coil, and accessible duct — keep system off until documented.",
        "Contents — inventory items in place before pack-out; photograph density, soot impact, and high-value items per room.",
        "Exterior damage — document roof, siding, windows, and detached structures when fire or suppression affected exterior assemblies.",
        "Water mitigation overlap — separate fire residue evidence from suppression water damage; phase folders for drying versus soot scope.",
        "Safety concerns — log structural red-tags, utility shutoffs, hazmat flags, and restricted zones before crew entry expands scope.",
        "Update gap list with every new discovery and cross-reference to carrier sketch rooms by consistent naming convention.",
      ],
      notes:
        "See the Fire Claim Intake Checklist for first-visit capture standards. Structural discovery during tear-out requires the Structural Stabilization Documentation Procedure — discovery supplements need discovery-era photos.",
    },
    {
      id: "phase-3-documentation-package",
      title: "Phase 3 — Build the Documentation Package",
      owner: "project-manager",
      actions: [
        "Photos — maintain indexed folders by room and category; filename convention includes claim number, room label, and date.",
        "Room organization — align photo folders, sketch room names, inventory pages, and estimate sections to one naming standard.",
        "Odor documentation — log pre-treatment odor by room, equipment placement, duration, and post-treatment verification per Odor Mitigation Documentation Procedure.",
        "Inspection notes — contemporaneous site notes with dated technician observations tied to rooms and line categories.",
        "Narratives — write migration path narrative, demolition justification, and HVAC correlation summaries for cover letter attachment.",
        "Supporting reports — index engineering, IH, HVAC specialist, and environmental report excerpts to specific estimate lines.",
        "Fire Damage Documentation Guide — apply cornerstone standards for residential and commercial fire file structure.",
        "Smoke & Soot Damage Documentation Guide — capture contamination types, test-clean results, and substrate evidence for cleaning versus replace decisions.",
        "Contents Inventory Documentation Guide — room-located inventories with valuation support and clean-versus-replace proof.",
        "Pack-Out Documentation Guide — chain of custody, transport, storage, and return documentation for off-site contents.",
      ],
      notes:
        "Build the documentation package during the job — not at invoice. Phased supplements with contemporaneous evidence outperform end-of-job narrative assembled after production closes access.",
    },
    {
      id: "phase-4-supplement-opportunities",
      title: "Phase 4 — Identify Supplement Opportunities",
      owner: "supplement-coordinator",
      actions: [
        "Structural repairs — charred framing, sheathing, trusses, and connections discovered during demo beyond origin-area macros.",
        "Smoke cleaning — migration rooms, halls, closets, and upper floors omitted from carrier sketch.",
        "Soot removal — specialty procedures for dry, oily, or protein soot with test-clean documentation on disputable substrates.",
        "Contents — manipulation, cleaning, storage, and replacement lines tied to room-located inventory pages.",
        "Pack-outs — inventory, packing labor, transport, and storage with chain-of-custody logs referenced in cover letter.",
        "Temporary protection — board-up extensions, shrink wrap, floor protection, and fencing through cleaning and rebuild phases.",
        "Demolition — selective tear-out with pre-demo framing photos and boundary justification narrative.",
        "Debris removal — charred material, insulation, and hazmat disposal with manifest or ticket documentation.",
        "Equipment — hydroxyl, ozone, air scrubbers, HEPA vacuums, and negative air with placement and duration logs.",
        "HVAC cleaning — duct cleaning, coil service, filter replacement, and component replacement after documented inspection.",
        "Mechanical systems — water heater, boiler, or process equipment with soot load documented before assuming clean-only scope.",
        "Hidden damage — cavity char, attic smoke, and compromised connections photographed during tear-out.",
        "Code-required upgrades — permit-driven assembly changes on rebuild — see Fire Code Upgrade Documentation Guide.",
        "Commercial considerations — building-indexed scope, tenant boundaries, and phased supplements on multi-unit losses — see Commercial Fire Claims Guide.",
      ],
      notes:
        "Prioritize high-value gaps with strong contemporaneous evidence before fighting low-dollar consumables. Migration folders and HVAC component photos approve more often than unexplained quantity increases on generic smoke wipe lines.",
    },
    {
      id: "phase-5-organize-estimate",
      title: "Phase 5 — Organize the Estimate",
      owner: "supplement-coordinator",
      actions: [
        "Xactimate organization — separate folders or clearly indexed sections for emergency, cleaning, contents, HVAC, demolition, and rebuild phases.",
        "Scope grouping — group lines by room and trade; avoid unlabeled blocks that desk reviewers cannot map to photo exhibits.",
        "Estimate narratives — write line-level notes explaining cleaning versus replace, demo boundaries, and specialty procedure justification.",
        "Supporting documentation — reference exhibit numbers in estimate notes matching cover letter attachment index.",
        "Attachments — prepare photo index PDF, report excerpts, and inventory pages as named exhibits — not unlabeled camera rolls.",
        "Line-item organization — align smoke cleaning, HVAC, contents, structural, and code lines in separate estimate sections with distinct photo cross-references.",
        "Calculate total supplement delta and confirm dollar summary matches cover letter table before submission.",
        "Run claim file audit checklist — every requested line must map to at least one indexed exhibit.",
      ],
      notes:
        "Desk adjusters approve supplements they can navigate in one review session. Lead with a summary table; group exhibits by issue with clear labels.",
    },
    {
      id: "phase-6-submit-package",
      title: "Phase 6 — Submit the Supplement Package",
      owner: "supplement-coordinator",
      actions: [
        "Cover letter — one paragraph per issue: carrier omission, evidence exhibit reference, and exact line item or quantity requested.",
        "Estimate — submit revised Xactimate export or marked-up carrier PDF in carrier-preferred format.",
        "Photos — attach indexed photo exhibits grouped by room and issue; index maps exhibit number to line items.",
        "Reports — attach only reports referenced in cover letter — engineering, IH, HVAC inspection, environmental.",
        "Narratives — include migration path, demo justification, and HVAC correlation summaries as named attachments.",
        "Supporting documentation — inventories, pack-out logs, code permit applications, and specialist conclusions indexed by line.",
        "File organization — name files consistently: ClaimNumber_Supplement_v1_Date.pdf; single merged PDF when carrier requires one upload.",
        "Route through correct carrier channel — email, portal, or XactAnalysis — log submission date, method, and recipient in CRM.",
        "Set follow-up reminders at 3, 7, and 14 business days per Supplement Submission Workflow.",
      ],
      notes:
        "Never submit the same supplement through multiple channels simultaneously. Copy homeowner on confirmation unless carrier policy restricts it.",
    },
    {
      id: "phase-7-reinspection",
      title: "Phase 7 — Prepare for Reinspection",
      owner: "project-manager",
      actions: [
        "Walkthrough strategy — pre-walk disputed areas with field lead; confirm evidence still visible and accessible before adjuster arrival.",
        "Demonstrating hidden damage — stage photo stations at cavity openings, attic hatches, and demo boundaries where concealed damage is disputed.",
        "Presenting documentation — prepare one-page briefing summary and scope comparison table with estimate line references for adjuster handoff.",
        "Organizing evidence — assign field escort with indexed photo packet; separate binders or tablet folders by issue — migration, HVAC, contents, structural.",
        "Answering carrier questions — respond with exhibit references, not opinions; offer to pull additional photos by room name on site.",
        "Document reinspection outcomes in correspondence log — agreements, denials, and requests for additional information indexed by line.",
        "Update revised estimate within one week of visit so lines discussed on site appear in submitted scope.",
      ],
      notes:
        "Reinspections fail when adjusters cannot locate evidence quickly. Pre-stage stations at each disputed area with printed or tablet-indexed exhibits tied to line numbers.",
    },
    {
      id: "phase-8-objections",
      title: "Phase 8 — Respond to Carrier Objections",
      owner: "supplement-coordinator",
      actions: [
        "No documentation — respond with targeted exhibit resubmission mapping photos, inventories, or reports to denied line numbers; never resubmit entire unindexed package.",
        "Not fire related — tie migration narrative and path photos to fire origin; correlate HVAC register staining and contents soot to loss event timeline.",
        "Cleaning is sufficient — submit test-clean failure photos, substrate close-ups, and supervisor replace recommendations on porous materials.",
        "Pricing excessive — separate scope disputes from unit price disputes; provide program pricing references or comparable line documentation without adversarial tone.",
        "Scope unsupported — add room index, sketch alignment proof, and quantity calculations reconciled to photo narrative for each disputed line.",
        "Code not applicable — attach permit requirements, AHJ citations, and triggered-work photos showing non-compliant existing conditions — see Fire Code Upgrade Documentation Guide.",
        "Replacement unnecessary — document non-salvageable proof with failed cleaning tests, char depth measurements, and engineering conclusions before disposal.",
        "Process partial approvals surgically — resubmit denied lines individually with additional evidence rather than resubmitting entire approved package.",
      ],
      notes:
        "Write factually — issue, evidence, requested remedy. See Fire Damage Supplement Denial Recovery blog for denial pattern strategies. Save disputes for documented escalation — not cover letter ultimatums.",
    },
    {
      id: "phase-9-commercial",
      title: "Phase 9 — Commercial Fire Claims",
      owner: "project-manager",
      actions: [
        "Multi-unit buildings — index documentation by building, floor, and suite; separate photo folders and estimate sections per occupancy zone.",
        "Tenant improvements — label shell versus tenant improvement versus contents on every inventory entry and estimate line.",
        "Business interruption coordination — document mitigation timelines, access restrictions, and zone release schedules without preparing BI valuations.",
        "Large-loss organization — publish documentation plan within 24 hours with folder index, naming convention, and role assignments.",
        "Multiple trades — separate structural, MEP, fire suppression, contents, and general conditions with trade-specific photo indexes.",
        "Complex scheduling — log phased production, tenant escort requirements, and partial approvals by building or zone.",
        "Apply Commercial Fire Claims Guide for full large-loss workflow — this playbook's phases run within that commercial framework.",
        "Submit phased supplements as discovery completes per zone — do not wait for entire campus documentation before first migration or HVAC supplement.",
      ],
      notes:
        "Commercial fire supplements require building-indexed evidence residential templates cannot organize. See Commercial Fire Claims Guide for tenant coordination, engineering involvement, and BI documentation support.",
    },
    {
      id: "phase-10-settlement",
      title: "Phase 10 — Final Settlement Review",
      owner: "supplement-coordinator",
      actions: [
        "Comparing approved scope — reconcile every approved line against production scope and job budget; flag lines approved below documented quantities.",
        "Identifying remaining omissions — run final gap list against approved estimate; queue supplemental revisions for demo discovery or late specialist reports.",
        "Supplemental revisions — submit surgical amendments for remaining gaps with targeted evidence — not full package resubmission.",
        "Final documentation review — confirm indexed closeout packet includes all approved supplements, correspondence, and payment records.",
        "Claim closeout — archive room index, photo folders, inventories, and estimate versions; document any open disputed lines with status before production closeout.",
        "Notify PM and policyholder of settlement outcome within one business day of carrier final response.",
        "Do not close production on lines with open supplement status undocumented in CRM.",
      ],
      notes:
        "Settlement review catches remaining omissions before warranty and closeout eliminate reinspection access. Compare approved scope to field reality one final time — late discovery supplements still require contemporaneous tear-out photos.",
    },
  ],
  qualityGates: [
    {
      id: "estimate-reviewed-48h",
      label: "Carrier estimate reviewed within 48 hours of receipt",
      required: true,
      detail: "Gap list started before production commits to under-scoped work.",
    },
    {
      id: "room-name-consistency",
      label: "Room names consistent across photos, sketch, inventory, and estimate",
      required: true,
    },
    {
      id: "indexed-exhibits",
      label: "Every supplement line maps to at least one indexed photo or report exhibit",
      required: true,
    },
    {
      id: "cover-letter-delta",
      label: "Cover letter dollar summary matches revised estimate total delta",
      required: true,
    },
    {
      id: "migration-narrative",
      label: "Migration supplements include written path narrative with hall and upper-floor photos",
      required: true,
    },
    {
      id: "hvac-folder-separate",
      label: "HVAC evidence in dedicated subfolder with component and register photos",
      required: true,
    },
    {
      id: "contents-pre-packout",
      label: "Contents inventory and item photos captured before pack-out movement",
      required: true,
    },
    {
      id: "discovery-era-photos",
      label: "Demolition discovery photos captured during tear-out — not after rebuild",
      required: true,
    },
    {
      id: "audit-before-submit",
      label: "File audit completed with green disposition before supplement submission",
      required: true,
    },
    {
      id: "submission-logged",
      label: "Submission logged in CRM with date, channel, recipient, and follow-up schedule",
      required: true,
    },
  ],
  commonMistakes: [
    {
      mistake: "Submitting supplements before field documentation is complete",
      impact: "First submission gets denied; resubmission looks like fishing and slows all future items on the file.",
      correction: "Hold submission until every requested line maps to indexed contemporaneous evidence.",
    },
    {
      mistake: "Origin-room-only supplement strategy on multi-room smoke losses",
      impact: "Migration, HVAC, and contents value stays off the estimate while crews perform uncompensated work.",
      correction: "Walk full migration path at intake and queue supplements when discovery is documented — not after rebuild.",
    },
    {
      mistake: "Unlabeled photo dumps without room index or cover letter map",
      impact: "Desk adjusters approve nothing because they cannot match evidence to line items quickly.",
      correction: "Maintain room index and exhibit numbering from first visit through submission.",
    },
    {
      mistake: "HVAC lines bundled with general smoke wipe without component photos",
      impact: "Among the most common partial denials on fire files.",
      correction: "Dedicated HVAC subfolder with register, filter, coil, and duct access evidence.",
    },
    {
      mistake: "Contents pack-out without room-located inventory before movement",
      impact: "Manipulation, cleaning, storage, and replacement lines lack proof; proportional cuts follow.",
      correction: "Inventory and photograph items in place before any pack-out — see Contents Inventory Documentation Guide.",
    },
    {
      mistake: "Discovery supplements submitted after rebuild without tear-out photos",
      impact: "Scope looks like late inflation; supervisors cannot verify concealed structural or cavity damage.",
      correction: "Capture discovery-era photos as assemblies are exposed during demolition.",
    },
    {
      mistake: "Waiting until final invoice to submit all fire supplements at once",
      impact: "Evidence obscured by production; carriers treat late packages as billing disputes not discovery supplements.",
      correction: "Submit phased supplements when each category's documentation is complete — migration, HVAC, contents, demo.",
    },
    {
      mistake: "Aggressive tone or ultimatums in supplement cover letters",
      impact: "Adjusters dig in; file gets flagged for supervisor review and delays multiply.",
      correction: "Write factually — issue, evidence, requested remedy. Escalate through documented channels.",
    },
    {
      mistake: "No follow-up after supplement submission",
      impact: "Supplements sit in queue for weeks; production finishes before payment arrives.",
      correction: "Execute 3-7-14 follow-up cadence on every file without exception.",
    },
    {
      mistake: "Applying residential supplement templates to commercial multi-tenant losses",
      impact: "Building attribution fails; tenant scope boundaries collapse; audit reviewers reduce proportionally.",
      correction: "Use Commercial Fire Claims Guide indexing — building, suite, and trade separation on every artifact.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Carrier sketch omits migration rooms with visible soot on walkthrough",
      documentation: "Room-indexed migration folders with path narrative from origin to affected spaces.",
      lineItemHint: "Smoke wipe, seal, and cleaning lines per omitted room",
    },
    {
      trigger: "HVAC registers show staining distant from fire origin",
      documentation: "Register photos, filter condition, system-off log, and inspection report excerpts.",
      lineItemHint: "Duct cleaning, coil service, filter replacement, and component replacement",
    },
    {
      trigger: "Contents density and soot impact visible before pack-out",
      documentation: "Room-located inventory with item photos and chain-of-custody log.",
      lineItemHint: "Contents manipulation, pack-out, cleaning, storage, and replacement",
    },
    {
      trigger: "Tear-out reveals charred framing beyond initial carrier structural scope",
      documentation: "Discovery-era framing photos with demo boundary narrative and engineering report when used.",
      lineItemHint: "Framing removal, structural rebuild, and sheathing replacement",
    },
    {
      trigger: "Permit review triggers code-required assembly upgrades on rebuild",
      documentation: "Permit application, AHJ citations, and triggered-work photos — Fire Code Upgrade Documentation Guide.",
      lineItemHint: "Fire-rated assemblies, electrical panel upgrade, sprinkler modifications",
    },
    {
      trigger: "Odor persists after surface cleaning with logged pre-treatment readings",
      documentation: "Odor logs, equipment placement records, and post-treatment verification notes.",
      lineItemHint: "Hydroxyl, ozone, thermal fogging, sealer, and air scrubber lines",
    },
    {
      trigger: "Suppression water damage overlaps fire residue scope",
      documentation: "Separate phase folders — water mitigation logs for drying; fire evidence for soot and rebuild.",
      lineItemHint: "Mitigation equipment, monitoring, and demo lines phased separately from smoke cleaning",
    },
    {
      trigger: "Commercial multi-suite smoke migration beyond origin occupancy",
      documentation: "Building-indexed migration photos with tenant coordination log and suite-labeled estimate sections.",
      lineItemHint: "Phased cleaning and contents scope by suite — Commercial Fire Claims Guide",
    },
    {
      trigger: "Partial supplement approval with denied lines that have strong field evidence",
      documentation: "Targeted resubmission with additional photos or reports for denied items only.",
      lineItemHint: "Resubmit denied lines individually with exhibit references",
    },
    {
      trigger: "Documentation complete but carrier underpaid fire scope on desk review",
      documentation: "Indexed claim packet with line-to-exhibit map for supplement resubmission or escalation.",
      lineItemHint: "Supplement amendment; Claims Ninja supports documentation review and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "What should be included in a fire damage supplement?",
      answer:
        "A fire damage supplement package includes a cover letter with summary table, revised Xactimate estimate, indexed photo exhibits by room, migration path narrative, contents inventory pages, HVAC inspection evidence, demolition discovery photos, specialist report excerpts when used, and a correspondence log. Each requested line must map to at least one named exhibit — adjusters approve indexed packages they can navigate in one review session.",
    },
    {
      question: "When should contractors submit a fire supplement?",
      answer:
        "Submit when documented scope exceeds the carrier estimate and contemporaneous evidence exists — ideally within 48 hours on visible estimate gaps, after demolition discovery, when HVAC inspection returns, or when pack-out inventory is complete. Phased submission beats waiting for final invoice: migration and contents supplements approve more readily when evidence is captured before rebuild obscures conditions.",
    },
    {
      question: "Can multiple supplements be submitted on the same fire claim?",
      answer:
        "Yes. Fire claims commonly require phased supplements — migration and emergency scope first, then HVAC and contents after inspection, then demolition discovery and code upgrades during rebuild. Each phase should include its own cover letter, exhibit index, and estimate delta. Label supplement versions clearly in CRM so carrier reviewers track phased discovery without treating later submissions as duplicate billing.",
    },
  ],
  relatedResources: [
    {
      label: "Fire Damage Documentation Guide",
      href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
    },
    {
      label: "Smoke & Soot Damage Documentation Guide",
      href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
    },
    {
      label: "Fire Code Upgrade Documentation Guide",
      href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
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
      label: "Commercial Fire Claims Guide",
      href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
    },
    {
      label: "Fire Claim Intake Checklist",
      href: "/resources/guides/fire-damage/fire-claim-intake-guide",
    },
    {
      label: "Supplement Submission Workflow",
      href: "/resources/guides/general-claims/supplement-submission-guide",
    },
    {
      label: "Carrier Estimate Review Workflow",
      href: "/resources/guides/general-claims/carrier-estimate-review-guide",
    },
    {
      label: "Insurance supplementing guide (pillar)",
      href: "/resources/blog/insurance-supplementing-guide-contractors",
    },
    {
      label: "Why fire damage supplements get denied",
      href: "/resources/blog/why-fire-damage-supplements-get-denied",
    },
    {
      label: "Fire damage supplement denial recovery",
      href: "/resources/blog/fire-damage-supplement-denial-recovery",
    },
    {
      label: "Why fire damage claims get underpaid",
      href: "/resources/blog/why-fire-damage-claims-get-underpaid",
    },
    {
      label: "Fire supplement playbook FAQ hub",
      href: "/faq#faq-fire-supplement-included-items",
    },
    {
      label: "Fire damage solutions",
      href: SOLUTION_PATH,
    },
  ],
});

export { GUIDE_PATH as FIRE_DAMAGE_SUPPLEMENT_PLAYBOOK_PATH };
