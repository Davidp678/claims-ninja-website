import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/mold" as const;
const CATEGORY = "mold" as const;
const GUIDE_SLUG = "mold-supplement-playbook-for-contractors" as const;
const GUIDE_PATH = `/resources/guides/${CATEGORY}/${GUIDE_SLUG}` as const;

export const MOLD_SUPPLEMENT_PLAYBOOK_FOR_CONTRACTORS = defineGuide({
  slug: GUIDE_SLUG,
  title: "Mold Supplement Playbook for Contractors",
  excerpt:
    "The definitive contractor operational playbook for mold supplements — from carrier estimate review through moisture source investigation, damage and remediation documentation, protocol and PRV packaging, estimate organization, carrier communication, reinspection, commercial coordination, and final settlement on mold insurance claims.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Mold",
    "Mold remediation",
    "Supplements",
    "Claim Recovery",
    "Documentation",
    "Xactimate",
    "Reinspection",
    "Containment",
    "PRV",
    "Protocol",
    "Moisture source",
    "Commercial mold",
    "Restoration contractors",
    "Carrier estimate review",
  ],
  publishedAt: "2026-07-17",
  updatedAt: "2026-07-17",
  estimatedMinutes: 22,
  seoTitle:
    "Mold Supplement Playbook for Contractors | Complete Mold Claim Recovery Workflow",
  seoDescription:
    "Contractor mold supplement playbook: carrier estimate review, moisture source investigation, remediation and containment documentation, protocol and PRV packaging, reinspection prep, and settlement on mold insurance claims.",
  relatedGuideSlugs: [
    "mold-damage-documentation-guide",
    "mold-remediation-documentation-guide",
    "mold-protocol-documentation-guide",
    "post-remediation-verification-documentation-guide",
    "indoor-air-quality-testing-documentation-guide",
    "commercial-mold-claims-guide",
    "moisture-mapping-guide",
    "category-3-water-damage-documentation-guide",
    "commercial-water-loss-documentation-guide",
    "contents-inventory-documentation-guide",
    "pack-out-documentation-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "supplement-submission-guide",
    "carrier-estimate-review-guide",
  ],
  relatedBlogSlugs: [
    "mold-claim-documentation-checklist",
    "why-mold-insurance-claims-get-underpaid",
    "mold-documentation-mistakes",
    "why-category-3-water-claims-get-underpaid",
    "documentation-gaps-that-trigger-water-claim-denials",
    "moisture-mapping-mistakes-that-cost-contractors-money",
    "insurance-supplementing-guide-contractors",
    "first-48-hours-after-carrier-estimate",
  ],
  faqIds: [
    "mold-supplement-included-items",
    "mold-supplement-when-to-submit",
    "mold-supplement-documentation-evidence",
    "mold-supplement-multiple-submissions",
    "mold-supplement-commonly-missed-items",
    "mold-claims-underpaid-why",
    "mold-containment-equipment",
    "mold-carrier-pushback",
    "mold-commercial-phased-remediation",
    "mold-water-relationship",
    "mold-remediation-containment-documentation",
    "mold-prv-documentation-insurance",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["mold", "water", "commercial", "large-loss"],
  purpose:
    "Mold insurance claims rarely settle completely on the first carrier estimate. Adjusters approve what they can defend from an initial walk — often a limited growth area and generic HEPA wipe — while remediation crews investigate moisture sources, build containment, run equipment for documented days, follow industrial hygienist protocols, remove hidden growth behind finishes, and clear PRV before rebuild. When supplements lag field scope, contractors absorb legitimate work. This playbook is the operational blueprint contractors follow after receiving the insurance estimate — not another documentation standard alone. It ties the complete Mold guide ecosystem into one repeatable supplement workflow from estimate review through final settlement. For field capture standards on damage assessment, remediation production, protocol alignment, and PRV closeout, see the specialty mold guides linked throughout. For commercial multi-unit indexing, see the Commercial Mold Claims Guide. For cross-trade supplement submission mechanics, see the Supplement Submission Workflow. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Carrier estimate received and scope gaps visible against field walk",
      signal:
        "Sketch room count lower than photographed growth areas; containment, equipment days, protocol, or PRV lines missing",
    },
    {
      condition: "Moisture source investigation or tear-out reveals scope not on carrier estimate",
      signal:
        "Hidden cavity growth, additional wet assemblies, or source path evidence exposed after first estimate issued",
    },
    {
      condition: "Supplement package assembly before formal carrier submission",
      signal:
        "Gap list validated, moisture and remediation documentation indexed, revised estimate drafted — ready for cover letter and routing",
    },
    {
      condition: "Carrier reinspection scheduled on disputed mold scope",
      signal:
        "Adjuster requests walkthrough on containment, equipment, hidden growth, protocol variance, or PRV clearance lines",
    },
    {
      condition: "Partial approval or denial received on mold supplement",
      signal:
        "Desk reviewer cites documentation gaps, causation, containment necessity, equipment duration, or PRV requirements",
    },
    {
      condition: "Commercial or multi-unit mold loss requiring phased supplements",
      signal:
        "Building-indexed scope, tenant boundaries, or large-loss documentation volumes exceed residential templates",
    },
  ],
  prerequisites: [
    "Claim number, policyholder contact, and carrier adjuster info in job file",
    "Carrier estimate imported or PDF saved with version date logged",
    "Room / zone index with naming convention aligned to sketch, moisture map, and photo folders",
    "Supplement owner assigned — estimator, PM, or supplement coordinator with CRM tracking",
    "Gap list template started at intake and updated after every site visit",
    "Mold pillar guides linked to job file for damage, remediation, protocol, and PRV evidence standards",
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
      label: "Room-by-room / zone scope comparison worksheet",
      required: true,
      detail:
        "Side-by-side carrier versus field scope by room — missing growth areas, quantities, containment, and equipment categories flagged.",
    },
    {
      id: "moisture-source-pack",
      label: "Moisture source investigation package",
      required: true,
      detail:
        "Source narrative, moisture map, readings log, and causation photos tying growth to water intrusion timeline — see Moisture Mapping Guide.",
    },
    {
      id: "indexed-photos",
      label: "Indexed photo exhibits by room and damage category",
      required: true,
      detail:
        "Separate folders for growth extent, moisture source, containment, demolition discovery, equipment placement, and PRV conditions.",
    },
    {
      id: "damage-assessment",
      label: "Mold damage assessment documentation",
      required: true,
      detail:
        "Pre-remediation growth photos, substrate notes, and hidden-damage openings — see Mold Damage Documentation Guide.",
    },
    {
      id: "protocol-pack",
      label: "Mold protocol and change documentation",
      required: true,
      detail:
        "IH or protocol document version, field alignment log, and documented deviations with photos — see Mold Protocol Documentation Guide.",
    },
    {
      id: "remediation-production",
      label: "Remediation production documentation — containment, removal, equipment",
      required: true,
      detail:
        "Containment build photos, negative air setup, removal sequence, and equipment day logs — see Mold Remediation Documentation Guide.",
    },
    {
      id: "prv-closeout",
      label: "Post-remediation verification (PRV) closeout package",
      required: true,
      detail:
        "Clearance criteria, sampling or visual verification records, and moisture clearance readings — see Post-Remediation Verification Documentation Guide.",
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
      label: "IH, protocol, or specialist report excerpts when used",
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
        "Compare approved lines to production scope and PRV closeout; flag remaining omissions before claim closeout.",
    },
  ],
  steps: [
    {
      id: "introduction",
      title: "Introduction — Why Mold Claims Become Underpaid",
      actions: [
        "Mold claims combine moisture source investigation, growth extent assessment, containment construction, HEPA and negative-air equipment days, selective demolition, protocol-driven removal, contents protection or pack-out, and PRV clearance — each category scrutinized separately by desk reviewers.",
        "Initial carrier estimates commonly miss legitimate scope because adjusters snapshot visible growth, apply generic cleaning macros, and freeze the sketch before moisture investigation, tear-out discovery, equipment duration, and protocol revisions complete.",
        "Documentation — not negotiation alone — wins mold supplements. Indexed photos, moisture maps with readings, containment build evidence, equipment day logs, protocol alignment records, and PRV clearance packages give adjusters defensible scope they cannot extract from invoice-only submissions.",
        "Contractors need a repeatable workflow that runs on every mold file: review the estimate, investigate moisture source, document damage, implement protocol, document remediation/containment/equipment, package PRV, organize the estimate, communicate with the carrier, prepare for reinspection, and reconcile settlement.",
        "This playbook is the central hub of the Mold guide cluster — linking damage, remediation, protocol, PRV, and commercial workflows into one operational supplement process from estimate receipt through final payment.",
      ],
      notes:
        "For why mold files lose money on documentation gaps, see Why Mold Insurance Claims Get Underpaid and Mold Documentation Mistakes. For field documentation standards, start with the Mold Damage Documentation Guide.",
    },
    {
      id: "phase-1-review-estimate",
      title: "Phase 1 — Initial Carrier Estimate Review",
      owner: "supplement-coordinator",
      actions: [
        "Scope comparison — export carrier sketch room/zone list and compare to field walk growth index; flag every photographed area missing from sketch.",
        "Quantity review — validate SF, LF, and EA quantities on removal, cleaning, containment, and rebuild lines against measurements and photo evidence.",
        "Pricing review — note unit price variances on specialty remediation procedures, equipment, and overhead lines; document program pricing disputes separately from scope gaps.",
        "Missing line items — list absent categories: moisture investigation, containment build, negative air / air scrubbers, HEPA vacuuming, selective demo, cavity cleaning, protocol-driven removal, equipment days, contents protection, and PRV / clearance.",
        "Common omissions — prioritize hidden growth behind finishes, containment labor and materials, equipment duration beyond a token day count, protocol revision scope, and PRV sampling or visual clearance.",
        "Documentation gaps — identify which missing lines lack contemporaneous evidence and assign field capture before supplement submit.",
        "Assign supplement owner and schedule 48-hour estimate review per the First 48 Hours After Carrier Estimate playbook.",
        "Log baseline carrier estimate version, adjuster name, and sketch date in CRM before any internal estimate comparison.",
      ],
      notes:
        "See the Carrier Estimate Review Workflow for systematic Xactimate comparison methods. Run Phase 1 within 48 hours of estimate receipt — production that commits to under-scoped work erodes supplement credibility.",
    },
    {
      id: "phase-2-moisture-source",
      title: "Phase 2 — Moisture Source Investigation",
      owner: "field",
      actions: [
        "Source identification — photograph and narrate the moisture intrusion path: roof, plumbing, HVAC condensate, envelope, appliance, or prior water loss residual.",
        "Moisture mapping — produce a labeled moisture map with room/zone names matching sketch and photo folders — see Moisture Mapping Guide.",
        "Readings log — record meter type, substrate, reading values, date/time, and technician; update after drying milestones.",
        "Causation narrative — write a short timeline tying water event → elevated moisture → visible or hidden growth; attach to cover letter when causation is disputed.",
        "Category / water relationship — when mold follows a water claim, index water mitigation logs separately and cross-reference residual moisture that drove mold scope.",
        "Hidden moisture — open cavities, inspect behind baseboards and cabinets, and photograph concealed wet assemblies before finishes close access.",
        "Update gap list with every new moisture discovery and cross-reference to carrier sketch rooms by consistent naming convention.",
      ],
      notes:
        "Carriers push back hardest when growth is documented without a defensible moisture source. Moisture maps and readings logs are not optional exhibits on mold supplements — they are causation support.",
    },
    {
      id: "phase-3-damage-documentation",
      title: "Phase 3 — Damage Documentation Workflow",
      owner: "field",
      actions: [
        "Pre-remediation photos — capture growth extent with wide, mid-range, and substrate close-ups before containment or removal begins.",
        "Room organization — align photo folders, moisture map zones, sketch room names, and estimate sections to one naming standard.",
        "Hidden damage — document cavity openings, attic/crawlspace growth, and compromised assemblies during controlled openings — discovery-era photos only.",
        "Contents impact — photograph contents density and contamination in place before pack-out or protection; inventory when contents lines will be billed.",
        "Inspection notes — contemporaneous site notes with dated technician observations tied to rooms and line categories.",
        "Apply Mold Damage Documentation Guide cornerstone standards for residential and commercial mold file structure.",
        "Apply Photo Documentation Standards Guide labeling conventions so desk reviewers can match exhibits to estimate lines in one pass.",
      ],
      notes:
        "Build damage documentation during assessment — not at invoice. Once remediation removes growth, carriers cannot verify extent without pre-remediation indexed photos.",
    },
    {
      id: "phase-4-protocol",
      title: "Phase 4 — Mold Protocol Implementation",
      owner: "project-manager",
      actions: [
        "Protocol intake — file the current IH or written protocol version with date, author, and work-area boundaries in the claim packet.",
        "Field alignment — brief crews on containment class, PPE, removal methods, and clearance criteria before production starts.",
        "Change documentation — when openings reveal additional growth or conditions differ from protocol assumptions, photograph conditions, log the deviation, and obtain written protocol revision before expanding billed scope.",
        "Estimate correlation — map every protocol requirement (containment level, equipment, clearance) to estimate line categories so supplements track protocol language.",
        "Supporting exhibits — attach protocol excerpts referenced in cover letter to specific line numbers — not the entire unbound report without an index.",
        "Apply Mold Protocol Documentation Guide for change-order and field-condition documentation standards.",
      ],
      notes:
        "Protocol without field alignment photos fails at reinspection. Protocol revisions without contemporaneous condition photos look like scope inflation. Document both.",
    },
    {
      id: "phase-5-remediation-containment-equipment",
      title: "Phase 5 — Remediation, Containment & Equipment Documentation",
      owner: "project-manager",
      actions: [
        "Containment documentation — photograph containment build (poly, zip walls, airlocks), negative-air setup, and pressure verification before and during remediation.",
        "Remediation production — document removal sequence by zone: pre-demo growth, selective demo boundaries, bagging, HEPA vacuuming, and wipe-down stages.",
        "Equipment documentation — log equipment type, serial or unit ID, placement photos, start/stop dates, and daily run status for air scrubbers, negative air, dehumidifiers, and HEPA vacuums.",
        "Equipment day justification — reconcile billed equipment days to moisture readings and production logs; carriers cut unexplained day counts first.",
        "Contents protection / pack-out — when contents are moved or protected, capture chain-of-custody or protection photos before remediation expands.",
        "Apply Mold Remediation Documentation Guide for production, containment, and equipment evidence standards.",
        "Update gap list as tear-out reveals additional growth; queue discovery supplements with discovery-era photos before rebuild.",
      ],
      notes:
        "Containment and equipment are among the most commonly underpaid mold line items. Dedicated subfolders with build photos and day logs outperform narrative-only invoices.",
    },
    {
      id: "phase-6-prv",
      title: "Phase 6 — PRV Documentation",
      owner: "project-manager",
      actions: [
        "Clearance criteria — file the PRV standard used (visual, moisture, sampling) and the work areas covered before sampling or visual clearance begins.",
        "Pre-PRV conditions — photograph cleaned cavities and surfaces ready for verification; keep moisture clearance readings current.",
        "PRV results — index clearance reports, lab results when used, and visual verification notes by zone with date and technician or IH.",
        "Failed clearance response — if PRV fails, document residual conditions, corrective work photos, and re-clearance results before billing rebuild.",
        "Closeout package — assemble PRV exhibits with moisture clearance, photo index, and protocol cross-reference for carrier package.",
        "Apply Post-Remediation Verification Documentation Guide for clearance and closeout packaging standards.",
      ],
      notes:
        "PRV is both a production gate and a payment defense. Carriers challenge rebuild and remaining remediation when clearance is missing, unlabeled, or not mapped to the areas billed.",
    },
    {
      id: "phase-7-estimate-supplement-strategy",
      title: "Phase 7 — Estimate Organization & Supplement Strategy",
      owner: "supplement-coordinator",
      actions: [
        "Xactimate organization — separate folders or clearly indexed sections for investigation, containment, remediation, equipment, contents, PRV, and rebuild phases.",
        "Scope grouping — group lines by room/zone and trade; avoid unlabeled blocks that desk reviewers cannot map to photo exhibits.",
        "Estimate narratives — write line-level notes explaining containment class, equipment duration, demo boundaries, and protocol justification.",
        "Supporting documentation — reference exhibit numbers in estimate notes matching cover letter attachment index.",
        "Attachments — prepare photo index PDF, moisture map, protocol excerpts, equipment logs, and PRV results as named exhibits — not unlabeled camera rolls.",
        "Supplement strategy — prioritize high-value gaps with strong contemporaneous evidence: moisture source pack, containment, equipment days, hidden growth, protocol revisions, and PRV.",
        "Calculate total supplement delta and confirm dollar summary matches cover letter table before submission.",
        "Run claim file audit checklist — every requested line must map to at least one indexed exhibit.",
      ],
      notes:
        "Desk adjusters approve supplements they can navigate in one review session. Lead with a summary table; group exhibits by issue with clear labels. Phased supplements beat end-of-job dumps.",
    },
    {
      id: "phase-8-carrier-communication",
      title: "Phase 8 — Carrier Communication",
      owner: "supplement-coordinator",
      actions: [
        "Cover letter — one paragraph per issue: carrier omission, evidence exhibit reference, and exact line item or quantity requested.",
        "Estimate — submit revised Xactimate export or marked-up carrier PDF in carrier-preferred format.",
        "Photos and logs — attach indexed photo exhibits, moisture map, equipment day logs, containment build photos, and PRV results grouped by issue.",
        "Reports — attach only protocol/IH excerpts referenced in cover letter.",
        "File organization — name files consistently: ClaimNumber_MoldSupplement_v1_Date.pdf; single merged PDF when carrier requires one upload.",
        "Route through correct carrier channel — email, portal, or XactAnalysis — log submission date, method, and recipient in CRM.",
        "Set follow-up reminders at 3, 7, and 14 business days per Supplement Submission Workflow.",
        "Respond to RFIs surgically — resubmit only the requested exhibits mapped to denied or questioned lines.",
      ],
      notes:
        "Never submit the same supplement through multiple channels simultaneously. Write factually — issue, evidence, requested remedy. Copy homeowner on confirmation unless carrier policy restricts it.",
    },
    {
      id: "phase-9-reinspection",
      title: "Phase 9 — Reinspection Preparation",
      owner: "project-manager",
      actions: [
        "Walkthrough strategy — pre-walk disputed areas with field lead; confirm evidence still visible and accessible before adjuster arrival.",
        "Demonstrating hidden damage — stage photo stations at cavity openings and demo boundaries where concealed growth is disputed.",
        "Presenting documentation — prepare one-page briefing summary and scope comparison table with estimate line references for adjuster handoff.",
        "Organizing evidence — assign field escort with indexed photo packet; separate binders or tablet folders by issue — moisture source, containment, equipment, protocol, PRV.",
        "Answering carrier questions — respond with exhibit references, not opinions; offer to pull additional photos by room/zone name on site.",
        "Document reinspection outcomes in correspondence log — agreements, denials, and requests for additional information indexed by line.",
        "Update revised estimate within one week of visit so lines discussed on site appear in submitted scope.",
      ],
      notes:
        "Reinspections fail when adjusters cannot locate evidence quickly. Pre-stage stations at each disputed area with printed or tablet-indexed exhibits tied to line numbers.",
    },
    {
      id: "phase-10-commercial",
      title: "Phase 10 — Commercial Mold Claim Considerations",
      owner: "project-manager",
      actions: [
        "Multi-unit buildings — index documentation by building, floor, and suite; separate photo folders and estimate sections per occupancy zone.",
        "Tenant improvements — label shell versus tenant improvement versus contents on every inventory entry and estimate line.",
        "Phased remediation — submit phased supplements as each wing or floor completes containment, remediation, and PRV — do not wait for entire campus closeout.",
        "Large-loss organization — publish documentation plan within 24 hours with folder index, naming convention, and role assignments.",
        "Protocol and PRV by area — clear and document by zone before re-occupancy; map clearance packages to estimate sections.",
        "Business continuity coordination — document access restrictions and zone release schedules without preparing BI valuations.",
        "Apply Commercial Mold Claims Guide for full large-loss workflow — this playbook's phases run within that commercial framework.",
      ],
      notes:
        "Commercial mold supplements require building-indexed evidence residential templates cannot organize. See Commercial Mold Claims Guide for tenant coordination and multi-unit documentation.",
    },
    {
      id: "phase-11-settlement",
      title: "Phase 11 — Final Settlement Review",
      owner: "supplement-coordinator",
      actions: [
        "Comparing approved scope — reconcile every approved line against production scope, equipment logs, and PRV closeout; flag lines approved below documented quantities.",
        "Identifying remaining omissions — run final gap list against approved estimate; queue supplemental revisions for late discovery or protocol revisions.",
        "Supplemental revisions — submit surgical amendments for remaining gaps with targeted evidence — not full package resubmission.",
        "Final documentation review — confirm indexed closeout packet includes all approved supplements, PRV clearance, correspondence, and payment records.",
        "Claim closeout — archive room/zone index, photo folders, moisture maps, protocol versions, and estimate versions; document any open disputed lines with status before production closeout.",
        "Notify PM and policyholder of settlement outcome within one business day of carrier final response.",
        "Do not close production on lines with open supplement status undocumented in CRM.",
      ],
      notes:
        "Settlement review catches remaining omissions before rebuild and warranty eliminate reinspection access. Compare approved scope to field reality one final time — late discovery supplements still require contemporaneous tear-out photos.",
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
      id: "zone-name-consistency",
      label: "Room/zone names consistent across photos, moisture map, sketch, and estimate",
      required: true,
    },
    {
      id: "moisture-source-pack",
      label: "Moisture source narrative, map, and readings attached when growth scope is billed",
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
      id: "containment-folder",
      label: "Containment build and negative-air setup photos in dedicated subfolder",
      required: true,
    },
    {
      id: "equipment-day-log",
      label: "Equipment day log reconciles billed days to placement photos and readings",
      required: true,
    },
    {
      id: "protocol-version-filed",
      label: "Current protocol version and any revisions filed with field alignment photos",
      required: true,
    },
    {
      id: "prv-before-rebuild",
      label: "PRV clearance package indexed before rebuild or re-occupancy billing",
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
      mistake: "Growth photos without moisture source investigation package",
      impact: "Carriers challenge causation and cut remediation scope that cannot be tied to a documented water event.",
      correction: "Attach moisture map, readings log, and source narrative on every mold supplement with significant removal scope.",
    },
    {
      mistake: "Unlabeled photo dumps without room/zone index or cover letter map",
      impact: "Desk adjusters approve nothing because they cannot match evidence to line items quickly.",
      correction: "Maintain zone index and exhibit numbering from first visit through submission.",
    },
    {
      mistake: "Containment and equipment lines without build photos or day logs",
      impact: "Among the most common partial denials on mold files.",
      correction: "Dedicated containment and equipment subfolders with placement photos and reconciled day counts.",
    },
    {
      mistake: "Protocol revisions billed without contemporaneous field-condition photos",
      impact: "Scope looks like late inflation; supervisors cannot verify why protocol changed.",
      correction: "Photograph conditions that drove the revision and file the written protocol change before expanding estimate.",
    },
    {
      mistake: "Discovery supplements submitted after rebuild without tear-out photos",
      impact: "Hidden growth scope looks unsupported; carriers deny cavity and selective demo lines.",
      correction: "Capture discovery-era photos as assemblies are exposed during remediation openings.",
    },
    {
      mistake: "Waiting until final invoice to submit all mold supplements at once",
      impact: "Evidence obscured by rebuild; carriers treat late packages as billing disputes not discovery supplements.",
      correction: "Submit phased supplements when each category's documentation is complete — moisture/damage, containment/equipment, protocol revision, PRV.",
    },
    {
      mistake: "Billing rebuild without indexed PRV clearance",
      impact: "Carriers hold remaining payment and challenge whether remediation was complete.",
      correction: "File PRV closeout package by zone before rebuild or re-occupancy lines are finalized.",
    },
    {
      mistake: "No follow-up after supplement submission",
      impact: "Supplements sit in queue for weeks; production finishes before payment arrives.",
      correction: "Execute 3-7-14 follow-up cadence on every file without exception.",
    },
    {
      mistake: "Applying residential supplement templates to commercial multi-tenant mold losses",
      impact: "Building attribution fails; tenant scope boundaries collapse; audit reviewers reduce proportionally.",
      correction: "Use Commercial Mold Claims Guide indexing — building, suite, and trade separation on every artifact.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Carrier sketch omits growth rooms/zones with visible mold on walkthrough",
      documentation: "Room-indexed pre-remediation photos with moisture map and source narrative.",
      lineItemHint: "Removal, HEPA, and cleaning lines per omitted zone",
    },
    {
      trigger: "Containment and negative air required by protocol but missing from carrier estimate",
      documentation: "Containment build photos, pressure verification, and protocol excerpts requiring containment class.",
      lineItemHint: "Containment labor/materials, airlocks, and negative-air setup",
    },
    {
      trigger: "Equipment days exceed carrier token day count with documented moisture and production",
      documentation: "Equipment placement photos, daily run log, and moisture readings justifying duration.",
      lineItemHint: "Air scrubber, dehumidifier, and HEPA equipment days",
    },
    {
      trigger: "Tear-out reveals cavity or concealed growth beyond initial carrier scope",
      documentation: "Discovery-era cavity photos with demo boundary narrative and updated moisture readings.",
      lineItemHint: "Selective demolition, cavity cleaning, and additional containment",
    },
    {
      trigger: "Protocol revision expands work area after openings reveal additional growth",
      documentation: "Field-condition photos, written protocol revision, and revised estimate section by zone.",
      lineItemHint: "Additional removal SF and protocol-driven procedures",
    },
    {
      trigger: "PRV required for clearance but sampling or visual verification not on estimate",
      documentation: "Clearance criteria, PRV results by zone, and moisture clearance readings.",
      lineItemHint: "PRV / clearance inspection and sampling lines",
    },
    {
      trigger: "Mold follows water loss with residual moisture driving remediation scope",
      documentation: "Water mitigation logs cross-referenced to mold moisture map and causation timeline.",
      lineItemHint: "Phased mold remediation lines tied to residual Category water conditions",
    },
    {
      trigger: "Commercial multi-suite growth beyond origin occupancy",
      documentation: "Building-indexed photos with tenant coordination log and suite-labeled estimate sections.",
      lineItemHint: "Phased containment and remediation by suite — Commercial Mold Claims Guide",
    },
    {
      trigger: "Partial supplement approval with denied lines that have strong field evidence",
      documentation: "Targeted resubmission with additional photos, logs, or protocol excerpts for denied items only.",
      lineItemHint: "Resubmit denied lines individually with exhibit references",
    },
    {
      trigger: "Documentation complete but carrier underpaid mold scope on desk review",
      documentation: "Indexed claim packet with line-to-exhibit map for supplement resubmission or escalation.",
      lineItemHint: "Supplement amendment; Claims Ninja supports documentation review and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "What should be included in a mold damage supplement?",
      answer:
        "A mold damage supplement package includes a cover letter with summary table, revised Xactimate estimate, indexed photo exhibits by room/zone, moisture source investigation package (map, readings, causation narrative), containment and equipment documentation, protocol excerpts when used, PRV closeout evidence, and a correspondence log. Each requested line must map to at least one named exhibit — adjusters approve indexed packages they can navigate in one review session.",
    },
    {
      question: "When should contractors submit a mold supplement?",
      answer:
        "Submit when documented scope exceeds the carrier estimate and contemporaneous evidence exists — ideally within 48 hours on visible estimate gaps, after moisture investigation, when containment and equipment are documented, after protocol revisions, or when PRV clearance completes. Phased submission beats waiting for final invoice: moisture/damage and containment supplements approve more readily when evidence is captured before rebuild obscures conditions.",
    },
    {
      question: "Can multiple supplements be submitted on the same mold claim?",
      answer:
        "Yes. Mold claims commonly require phased supplements — moisture investigation and damage scope first, then containment and equipment after production starts, then protocol revision and discovery during openings, then PRV and remaining rebuild at closeout. Each phase should include its own cover letter, exhibit index, and estimate delta. Label supplement versions clearly in CRM so carrier reviewers track phased discovery without treating later submissions as duplicate billing.",
    },
  ],
  relatedResources: [
    {
      label: "Mold Damage Documentation Guide",
      href: "/resources/guides/mold/mold-damage-documentation-guide",
    },
    {
      label: "Mold Remediation Documentation Guide",
      href: "/resources/guides/mold/mold-remediation-documentation-guide",
    },
    {
      label: "Mold Protocol Documentation Guide",
      href: "/resources/guides/mold/mold-protocol-documentation-guide",
    },
    {
      label: "Post-Remediation Verification (PRV) Documentation Guide",
      href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
    },
    {
      label: "Commercial Mold Claims Guide",
      href: "/resources/guides/mold/commercial-mold-claims-guide",
    },
    {
      label: "Moisture Mapping Guide",
      href: "/resources/guides/water-damage/moisture-mapping-guide",
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
      label: "Why mold insurance claims get underpaid",
      href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
    },
    {
      label: "Mold documentation mistakes",
      href: "/resources/blog/mold-documentation-mistakes",
    },
    {
      label: "Insurance supplementing guide (pillar)",
      href: "/resources/blog/insurance-supplementing-guide-contractors",
    },
    {
      label: "Mold supplement playbook FAQ hub",
      href: "/faq#faq-mold-supplement-included-items",
    },
    {
      label: "Mold solutions",
      href: SOLUTION_PATH,
    },
  ],
});

export { GUIDE_PATH as MOLD_SUPPLEMENT_PLAYBOOK_PATH };
