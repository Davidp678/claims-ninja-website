import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/commercial" as const;
const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "commercial-insurance-supplement-playbook-for-contractors" as const;
const GUIDE_PATH = `/resources/guides/${CATEGORY}/${GUIDE_SLUG}` as const;

export const COMMERCIAL_INSURANCE_SUPPLEMENT_PLAYBOOK_FOR_CONTRACTORS = defineGuide({
  slug: GUIDE_SLUG,
  title: "Commercial Insurance Supplement Playbook for Contractors",
  excerpt:
    "The definitive contractor operational playbook for commercial insurance supplements — from identifying underpaid scope through documenting, organizing, submitting, tracking, reinspection support, and closing out commercial restoration claims across multifamily, HOA, retail, office, industrial, and large-loss properties.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Commercial insurance supplement",
    "Commercial supplement playbook",
    "Commercial claim supplement process",
    "Commercial restoration supplement",
    "Commercial supplement documentation",
    "Large loss",
    "Multi-building",
    "Supplements",
    "Reinspection",
    "Xactimate",
    "Claim Recovery",
    "Restoration contractors",
  ],
  publishedAt: "2026-07-21",
  updatedAt: "2026-07-21",
  estimatedMinutes: 26,
  seoTitle:
    "Commercial Insurance Supplement Playbook for Contractors | Claim Recovery Workflow",
  seoDescription:
    "Contractor commercial insurance supplement playbook: scope and quantity validation, missing line items, documentation packages, multi-building organization, carrier communication, reinspection prep, and claim closeout.",
  relatedGuideSlugs: [
    "commercial-insurance-claims-documentation-guide",
    "large-loss-commercial-insurance-claims-guide",
    "multifamily-apartment-insurance-claims-guide",
    "hoa-insurance-claims-guide",
    "retail-office-insurance-claims-guide",
    "industrial-warehouse-insurance-claims-guide",
    "commercial-water-loss-documentation-guide",
    "commercial-fire-claims-guide",
    "commercial-mold-claims-guide",
    "commercial-roofing-documentation-guide",
    "multi-building-roofing-claims-guide",
    "supplement-submission-guide",
    "carrier-estimate-review-guide",
    "code-upgrade-documentation-guide",
    "equipment-documentation-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "claim-file-audit-guide",
  ],
  relatedBlogSlugs: [
    "commercial-claims-documentation-checklist",
    "why-commercial-insurance-claims-get-underpaid",
    "insurance-supplementing-guide-contractors",
    "first-48-hours-after-carrier-estimate",
    "large-loss-water-mitigation-documentation-best-practices",
    "common-documentation-mistakes-on-commercial-water-losses",
    "multifamily-water-claims-that-get-underpaid",
    "water-damage-documentation-for-apartment-complexes",
    "why-fire-damage-claims-get-underpaid",
    "why-mold-insurance-claims-get-underpaid",
  ],
  faqIds: [
    "commercial-insurance-supplements",
    "commercial-supplement-documentation",
    "commercial-supplement-package",
    "commercial-reinspection-support",
    "commercial-supplement-timelines",
    "commercial-property-claims-underpaid",
    "commercial-documentation-gaps-underpayment",
    "commercial-final-submission",
    "commercial-large-loss-reinspection-supplements",
    "commercial-claim-documentation",
    "commercial-large-loss-estimate-organization",
    "commercial-multi-building-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["commercial", "large-loss"],
  purpose:
    "Commercial insurance claims rarely settle completely on the first carrier estimate. Adjusters approve what they can defend from an initial walk — often a single building, a partial floor plan, or a residential-scale sketch — while restoration, roofing, reconstruction, and mitigation contractors work multi-building campuses, multi-tenant suites, temporary protection, general conditions, equipment fleets, code upgrades, and phased reconstruction. When commercial supplements lag field scope, contractors absorb legitimate work. This playbook is the operational blueprint contractors follow after receiving the insurance estimate — not another documentation standard alone. It explains the commercial claim supplement process: identify, document, organize, submit, track, support reinspection, and close out. For documentation standards, see the Commercial Insurance Claims Documentation Guide. For large-loss campus ops, see the Large-Loss Commercial Insurance Claims Guide. For property-type and peril procedures, see Multifamily, HOA, Retail & Office, Industrial, Commercial Water, Fire, Mold, and Roofing guides. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel. Do not interpret policies, provide legal advice, offer engineering or accounting opinions, or negotiate claim outcomes on behalf of insureds.",
  whenToUse: [
    {
      condition: "Carrier estimate received and commercial scope gaps visible against field walk",
      signal:
        "Building or suite count lower than photographed areas; temporary protection, general conditions, equipment, or code lines missing",
    },
    {
      condition: "Production or demolition reveals scope not on the carrier estimate",
      signal:
        "Hidden damage, additional wet or fire-affected zones, or quantity shortfalls exposed after first estimate issued",
    },
    {
      condition: "Commercial supplement package assembly before formal carrier submission",
      signal:
        "Gap list validated, building-indexed documentation ready, revised estimate drafted — ready for cover letter and routing",
    },
    {
      condition: "Carrier reinspection scheduled on disputed commercial scope",
      signal:
        "Adjuster or consultant requests walkthrough on multi-area quantities, missing lines, or large-loss package organization",
    },
    {
      condition: "Partial approval or denial received on a commercial supplement",
      signal:
        "Desk reviewer cites documentation gaps, quantity support, general conditions, equipment days, or multi-building attribution",
    },
    {
      condition: "Large-loss or multi-building commercial file requiring phased supplements",
      signal:
        "Campus indexing, tenant boundaries, or documentation volumes exceed residential supplement templates",
    },
  ],
  prerequisites: [
    "Claim number, property identification, ownership/property-management contacts, and carrier adjuster info in job file",
    "Carrier estimate imported or PDF saved with version date logged",
    "Building → Floor → Suite/Unit → Room index published and aligned to photo folders and estimate sections",
    "Supplement owner assigned — estimator, PM, or supplement coordinator with CRM tracking",
    "Gap list template started at intake and updated after every site visit",
    "Commercial documentation standards linked to job file — Commercial Insurance Claims Documentation Guide as parent framework",
  ],
  requiredDocumentation: [
    {
      id: "carrier-estimate-baseline",
      label: "Carrier estimate baseline with version date",
      required: true,
      detail:
        "Original carrier sketch and line items saved as baseline for every commercial supplement delta comparison.",
    },
    {
      id: "master-area-index",
      label: "Master Building → Floor → Suite/Unit → Room index",
      required: true,
      detail:
        "Published within 24 hours and locked as the naming standard for photos, sketches, logs, and estimate sections.",
    },
    {
      id: "scope-quantity-worksheet",
      label: "Scope and quantity validation worksheet by area ID",
      required: true,
      detail:
        "Side-by-side carrier versus field scope by building and area — missing rooms, SF/LF/EA shortfalls, and absent line categories flagged.",
    },
    {
      id: "indexed-photos",
      label: "Indexed photo exhibits by building, area, and damage category",
      required: true,
      detail:
        "Separate folders for emergency, mitigation, demolition discovery, rebuild, temporary protection, and specialty trades — never unlabeled campus dumps.",
    },
    {
      id: "equipment-labor-material-logs",
      label: "Equipment, labor, and material documentation logs",
      required: true,
      detail:
        "Placement maps, daily equipment counts, labor by trade and area, and material tickets reconciled to billed lines.",
    },
    {
      id: "temporary-protection-gc",
      label: "Temporary protection and general conditions exhibits",
      required: true,
      detail:
        "Board-up, shrink wrap, fencing, floor protection, temporary power, supervision, and site logistics with dated photos and duration logs.",
    },
    {
      id: "code-ordinance-pack",
      label: "Code and ordinance support pack when upgrades are billed",
      required: false,
      detail:
        "Permit applications, AHJ citations, and triggered-work photos — see Code Upgrade Documentation Guide.",
    },
    {
      id: "revised-estimate",
      label: "Revised Xactimate estimate with area-labeled sections and line-to-exhibit mapping",
      required: true,
      detail:
        "Export in carrier-preferred format; every supplement line references a named exhibit and area ID.",
    },
    {
      id: "cover-letter",
      label: "Supplement cover letter with summary table and attachment index",
      required: true,
      detail:
        "One paragraph per issue: omission, evidence exhibit, requested line or quantity change — dollar summary matches estimate delta.",
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
        "One-page summary, quantity comparison table, and photo stations staged by building and disputed area ID.",
    },
    {
      id: "settlement-reconciliation",
      label: "Approved scope reconciliation worksheet at settlement",
      required: true,
      detail:
        "Compare approved lines to production scope by area ID; flag remaining omissions before claim closeout.",
    },
  ],
  steps: [
    {
      id: "introduction",
      title: "Introduction — What Commercial Supplementing Is",
      actions: [
        "Commercial insurance supplementing is the contractor workflow for identifying, documenting, organizing, submitting, tracking, and supporting scope that exceeds the carrier's initial estimate on commercial property losses.",
        "Unlike residential single-dwelling supplements, commercial files demand building-indexed evidence, multi-tenant boundaries, temporary protection and general conditions support, equipment fleets, supervision, and often multiple supplement cycles across phases.",
        "Commercial claims are commonly underpaid because adjusters snapshot limited areas, apply residential-scale sketches, undercount quantities across large footprints, omit temporary protection and general conditions, and freeze the estimate before demolition discovery and code reviews complete.",
        "Common supplement opportunities include missing areas, quantity shortfalls, temporary protection, general conditions and supervision, equipment days, labor by trade, materials, code and ordinance upgrades, and large-loss multi-building organization gaps.",
        "This playbook is the operational capstone of the Commercial Claims pillar — pairing with the Commercial Insurance Claims Documentation Guide (documentation standards) and connecting Multifamily, HOA, Retail & Office, Industrial, Large-Loss, and commercial water/fire/mold/roofing guides into one commercial claim supplement process.",
        "Focus on documentation and operational best practices — not policy interpretation, legal advice, public adjusting, engineering opinions, accounting guidance, or claim negotiation advice.",
      ],
      notes:
        "For why commercial claims get underpaid, see the companion blog. For field capture standards, start with the Commercial Insurance Claims Documentation Guide. For cross-trade submission mechanics, see the Supplement Submission Workflow.",
    },
    {
      id: "phase-1-scope-quantity",
      title: "Phase 1 — Scope and Quantity Validation",
      owner: "supplement-coordinator",
      actions: [
        "Publish or confirm the master Building → Floor → Suite/Unit → Room index before comparing the carrier estimate to field conditions.",
        "Scope validation — export carrier sketch area list and compare to photographed and measured areas; flag every area ID missing from the sketch.",
        "Quantity validation — validate SF, LF, and EA quantities on cleaning, mitigation, demo, and rebuild lines against measurements, takeoffs, and photo evidence by area ID.",
        "Missing line items — list absent categories: temporary protection, general conditions, supervision, equipment, labor burden, materials, debris, code upgrades, and multi-area mitigation or cleaning.",
        "Run Carrier Estimate Review Workflow methods within 48 hours of estimate receipt — production that commits to under-scoped commercial work erodes supplement credibility.",
        "Log baseline carrier estimate version, adjuster name, consultant names, and sketch date in CRM before any internal estimate comparison.",
        "Assign supplement owner and update the gap list after every site visit with area ID, category, evidence status, and estimated dollar impact.",
      ],
      notes:
        "Quantity fights without indexed photos and takeoffs fail on commercial files. Lead with missing areas and documented shortfalls before disputing unit prices.",
    },
    {
      id: "phase-2-protection-gc",
      title: "Phase 2 — Temporary Protection, General Conditions, and Supervision",
      owner: "project-manager",
      actions: [
        "Temporary protection — document board-up, roof tarps, shrink wrap, fencing, floor and finish protection, and weather barriers with install date, duration, and removal photos.",
        "General conditions — capture site logistics, temporary power, toilets, dumpsters, scaffolding, and safety measures with tickets and daily presence logs.",
        "Supervision — log superintendent or PM hours by date and area when commercial occupied-property or multi-trade coordination requires documented oversight.",
        "Photograph protection and GC items in place — not only on invoices — and label by building and zone.",
        "Reconcile billed protection and GC lines to dated photos and tickets before supplement submission.",
        "Do not bundle undocumented general conditions into a single unexplained lump sum — adjusters cut unsupported GC blocks first.",
      ],
      notes:
        "Temporary protection and general conditions are among the most commonly missed commercial supplement opportunities. Contemporaneous photos beat end-of-job narrative.",
    },
    {
      id: "phase-3-equipment-labor-material",
      title: "Phase 3 — Equipment, Labor, and Material Documentation",
      owner: "field",
      actions: [
        "Equipment documentation — maintain placement maps, daily equipment counts, serial or unit IDs when used, and on/off dates by building and zone — see Equipment Documentation Guide.",
        "Labor documentation — track crew counts by trade, area ID, and date; separate emergency, mitigation, demolition, and rebuild labor phases.",
        "Material documentation — retain delivery tickets, invoices, and waste manifests; map high-dollar materials to area IDs and estimate lines.",
        "Reconcile equipment days and labor hours to moisture logs, dry logs, or production reports so billed duration matches field records.",
        "Flag carrier estimate gaps where equipment fleets or multi-trade labor were required but omitted or undercounted.",
        "Keep equipment and labor evidence in dedicated subfolders — not mixed into unlabeled photo dumps.",
      ],
      notes:
        "Commercial equipment and labor supplements fail when counts cannot be tied to area IDs and dates. Daily logs during the job outperform reconstructed spreadsheets at invoice.",
    },
    {
      id: "phase-4-code-large-loss",
      title: "Phase 4 — Code Support and Large-Loss / Multi-Building Strategy",
      owner: "supplement-coordinator",
      actions: [
        "Code and ordinance support — when rebuild triggers upgrades, attach permit applications, AHJ citations, and triggered-work photos — see Code Upgrade Documentation Guide.",
        "Do not bill code upgrades without contemporaneous trigger evidence; separate code lines from like-kind rebuild in estimate sections.",
        "Large-loss supplement strategy — publish a documentation and supplement plan within 24 hours with folder index, naming convention, role assignments, and phased submission schedule.",
        "Multi-building supplement organization — separate photo folders, estimate sections, and cover-letter issues by building ID; never submit one unlabeled campus package for a single-building dispute.",
        "Apply Large-Loss Commercial Insurance Claims Guide for campus indexing, stakeholder coordination, and phased restoration ops.",
        "Route property-type nuances through Multifamily, HOA, Retail & Office, or Industrial guides; route peril procedures through Commercial Water, Fire, Mold, or Roofing guides.",
        "Submit phased supplements as discovery completes by building or zone — do not wait for entire campus documentation before the first emergency or mitigation supplement.",
      ],
      notes:
        "Large-loss and multi-building supplements succeed when reviewers can navigate by location ID in one session. Phased packages beat end-of-job megadumps.",
    },
    {
      id: "phase-5-package",
      title: "Phase 5 — Supporting Documentation Packages",
      owner: "supplement-coordinator",
      actions: [
        "Assemble the commercial supplement package: cover letter with summary table, revised estimate, master area index, indexed photo exhibits, equipment/labor/material logs, temporary protection and GC exhibits, code pack when applicable, and correspondence log.",
        "Map every requested line to at least one named exhibit and area ID — desk adjusters approve indexed packages they can navigate quickly.",
        "Name files consistently: ClaimNumber_BuildingID_Supplement_vN_Date; single merged PDF when the carrier requires one upload.",
        "Group exhibits by issue (missing area, quantity, temporary protection, equipment, code) with clear labels matching cover-letter paragraphs.",
        "Run a file audit before submit — green disposition only when every high-dollar line has contemporaneous evidence.",
        "Use the Commercial Claims Documentation Checklist blog as a package QC companion to this playbook.",
      ],
      notes:
        "Build the documentation package during the job — not at invoice. Phased supplements with contemporaneous evidence outperform end-of-job narrative assembled after production closes access.",
    },
    {
      id: "phase-6-communication",
      title: "Phase 6 — Carrier Communication",
      owner: "supplement-coordinator",
      actions: [
        "Write cover letters factually — issue, evidence exhibit, requested remedy — without ultimatums or adversarial tone.",
        "Route through the correct carrier channel — email, portal, or XactAnalysis — and never submit the same package through multiple channels simultaneously.",
        "Log submission date, method, recipient, package version, and attachment list in CRM the same day.",
        "Copy ownership or property management on confirmation when appropriate and permitted; keep stakeholder lists current on multi-tenant losses.",
        "Set follow-up reminders at 3, 7, and 14 business days per Supplement Submission Workflow.",
        "Respond to RFIs with targeted exhibits mapped to line numbers — not full unindexed resubmissions.",
        "Communication checklist: confirm recipient, channel, version label, attachment index, follow-up schedule, and stakeholder copy before send.",
      ],
      notes:
        "Clear, indexed communication shortens commercial review cycles. Aggressive tone flags files for supervisor delay; missing version labels confuse phased supplements.",
    },
    {
      id: "phase-7-reinspection",
      title: "Phase 7 — Reinspection Preparation",
      owner: "project-manager",
      actions: [
        "Pre-walk disputed buildings and areas with the field lead; confirm evidence is still visible and accessible before adjuster or consultant arrival.",
        "Stage photo stations and quantity worksheets at each disputed area ID — not one campus binder for a single-suite dispute.",
        "Prepare a one-page briefing summary and scope/quantity comparison table with estimate line references for adjuster handoff.",
        "Assign a field escort with indexed tablet or printed exhibits separated by issue and building.",
        "Answer carrier questions with exhibit references and measurements — not opinions or policy arguments.",
        "Document reinspection outcomes in the correspondence log — agreements, denials, and RFI items indexed by line and area ID.",
        "Update the revised estimate within one week of the visit so lines discussed on site appear in submitted scope.",
        "Reinspection checklist: access confirmed, stations staged, briefing packet ready, quantity worksheets printed, escort assigned, CRM outcome logged same day.",
      ],
      notes:
        "Commercial reinspections fail when adjusters cannot locate evidence by building and area quickly. For large-loss-specific staging, also see the Large-Loss guide and commercial-large-loss-reinspection FAQ.",
    },
    {
      id: "phase-8-tracking-cycles",
      title: "Phase 8 — Tracking Status and Multiple Supplement Cycles",
      owner: "supplement-coordinator",
      actions: [
        "Track every supplement version in CRM: date submitted, dollar delta, status (submitted, RFI, partial, approved, denied), and next follow-up date.",
        "Expect multiple supplement cycles on commercial claims — emergency/mitigation first, then demolition discovery, then rebuild and code — each with its own cover letter and exhibit index.",
        "Label versions clearly (v1, v2, building-phase tags) so reviewers do not treat later discovery packages as duplicate billing.",
        "Process partial approvals surgically — resubmit denied lines individually with additional evidence rather than resubmitting the entire approved package.",
        "Keep the gap list live until settlement: close items when approved; queue discovery items when tear-out or specialist reports land.",
        "Do not wait until final invoice to submit all commercial supplements at once — evidence gets obscured and carriers treat late packages as billing disputes.",
      ],
      notes:
        "Phased commercial supplements with contemporaneous evidence approve more readily than one end-of-job package. Version discipline prevents duplicate-billing objections.",
    },
    {
      id: "phase-9-closeout",
      title: "Phase 9 — Closing Out the Claim",
      owner: "supplement-coordinator",
      actions: [
        "Reconcile every approved line against production scope and job budget by area ID; flag lines approved below documented quantities.",
        "Run final gap list against approved estimate; queue surgical amendments for remaining documented omissions.",
        "Confirm indexed closeout packet includes all approved supplements, correspondence, payment records, and master area index.",
        "Archive photo folders, logs, estimates, and package versions; document any open disputed lines with status before production closeout.",
        "Notify PM and ownership/property management of settlement outcome within one business day of carrier final response.",
        "Final submission checklist: cover letter delta matches estimate, every line has an exhibit, area names consistent, CRM logged, stakeholder notified, open disputes documented.",
        "Do not close production on lines with open supplement status undocumented in CRM.",
      ],
      notes:
        "Closeout catches remaining omissions before warranty and access loss eliminate reinspection. Compare approved scope to field reality one final time.",
    },
  ],
  qualityGates: [
    {
      id: "estimate-reviewed-48h",
      label: "Carrier estimate reviewed within 48 hours of receipt",
      required: true,
      detail: "Commercial gap list started before production commits to under-scoped work.",
    },
    {
      id: "master-index-published",
      label: "Master Building → Floor → Suite/Unit → Room index published and used consistently",
      required: true,
    },
    {
      id: "area-name-consistency",
      label: "Area IDs consistent across photos, sketches, logs, and estimate sections",
      required: true,
    },
    {
      id: "indexed-exhibits",
      label: "Every supplement line maps to at least one indexed photo, log, or report exhibit",
      required: true,
    },
    {
      id: "cover-letter-delta",
      label: "Cover letter dollar summary matches revised estimate total delta",
      required: true,
    },
    {
      id: "protection-gc-photos",
      label: "Temporary protection and general conditions lines supported by dated in-place photos",
      required: true,
    },
    {
      id: "equipment-labor-reconciled",
      label: "Equipment days and labor hours reconciled to daily logs by area ID",
      required: true,
    },
    {
      id: "multi-building-separation",
      label: "Multi-building packages separated by building ID — no unlabeled campus dumps",
      required: true,
    },
    {
      id: "audit-before-submit",
      label: "File audit completed with green disposition before supplement submission",
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
      mistake: "Applying residential supplement templates to commercial multi-building losses",
      impact: "Building attribution fails; reviewers reduce proportionally or deny for lack of navigable evidence.",
      correction:
        "Use commercial indexing — Building → Floor → Suite/Unit → Room — on every photo, log, and estimate section.",
    },
    {
      mistake: "Submitting supplements before commercial documentation is complete",
      impact: "First submission gets denied; resubmission looks like fishing and slows all future items on the file.",
      correction: "Hold submission until every requested line maps to indexed contemporaneous evidence by area ID.",
    },
    {
      mistake: "Unlabeled campus photo dumps without area index or cover-letter map",
      impact: "Desk adjusters approve nothing because they cannot match evidence to line items quickly.",
      correction: "Maintain master area index and exhibit numbering from first visit through submission.",
    },
    {
      mistake: "Omitting temporary protection and general conditions from the gap list",
      impact: "High-dollar site logistics and protection run uncompensated while crews perform documented work.",
      correction: "Photograph protection and GC in place daily and queue those lines in Phase 2.",
    },
    {
      mistake: "Equipment and labor billed without daily logs tied to area IDs",
      impact: "Carriers cut duration and crew counts; reinspection cannot verify placement.",
      correction: "Reconcile equipment maps and labor by trade/area before supplement submit.",
    },
    {
      mistake: "Waiting until final invoice to submit all commercial supplements at once",
      impact: "Evidence obscured by production; carriers treat late packages as billing disputes.",
      correction: "Submit phased supplements when each category's documentation is complete by building or zone.",
    },
    {
      mistake: "One megapackage for a single-building dispute on a multi-building claim",
      impact: "Reviewers cannot isolate disputed scope; partial denials expand to unrelated areas.",
      correction: "Organize and submit by building ID; stage reinspections only at disputed areas.",
    },
    {
      mistake: "Aggressive tone or ultimatums in commercial supplement cover letters",
      impact: "Adjusters dig in; files get flagged for supervisor review and delays multiply.",
      correction: "Write factually — issue, evidence, requested remedy. Escalate through documented channels.",
    },
    {
      mistake: "No CRM follow-up after commercial supplement submission",
      impact: "Supplements sit in queue for weeks; production finishes before payment arrives.",
      correction: "Execute 3-7-14 follow-up cadence on every file without exception.",
    },
    {
      mistake: "Closing out while open supplement lines lack documented status",
      impact: "Remaining omissions disappear when access and warranty windows close.",
      correction: "Reconcile approved scope to production and document open disputes before closeout.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Carrier sketch omits buildings, floors, or suites with photographed damage",
      documentation: "Master area index plus area-labeled photo folders for every omitted location ID.",
      lineItemHint: "Mitigation, cleaning, demo, and rebuild lines per omitted area",
    },
    {
      trigger: "Measured SF/LF/EA quantities exceed carrier estimate takeoffs",
      documentation: "Quantity validation worksheet with measurements mapped to labeled photos.",
      lineItemHint: "Quantity corrections on cleaning, flooring, drywall, and roofing assemblies",
    },
    {
      trigger: "Temporary protection installed and maintained through production",
      documentation: "Dated in-place photos, duration log, and removal photos by building.",
      lineItemHint: "Board-up, tarps, shrink wrap, fencing, and floor protection",
    },
    {
      trigger: "General conditions and supervision required on occupied commercial sites",
      documentation: "Daily GC tickets, site photos, and PM/superintendent hour logs by date.",
      lineItemHint: "Temporary power, facilities, dumpsters, scaffolding, and supervision",
    },
    {
      trigger: "Equipment fleets run across multiple zones with daily placement maps",
      documentation: "Equipment Documentation Guide logs reconciled to dry logs or production reports.",
      lineItemHint: "Air movers, dehumidifiers, scrubbers, and specialty equipment days",
    },
    {
      trigger: "Permit review triggers code-required upgrades on commercial rebuild",
      documentation: "Permit applications, AHJ citations, and triggered-work photos — Code Upgrade Documentation Guide.",
      lineItemHint: "Fire-rated assemblies, accessibility, electrical, and life-safety upgrades",
    },
    {
      trigger: "Demolition or tear-out reveals scope beyond the initial carrier estimate",
      documentation: "Discovery-era photos with area ID and boundary narrative captured during exposure.",
      lineItemHint: "Additional demo, rebuild, and specialty trade lines by discovery zone",
    },
    {
      trigger: "Multi-building campus with phased mitigation and rebuild",
      documentation: "Building-separated packages and Large-Loss guide indexing with phased cover letters.",
      lineItemHint: "Phased supplements by building and phase — emergency, mitigation, rebuild",
    },
    {
      trigger: "Partial supplement approval with denied lines that have strong field evidence",
      documentation: "Targeted resubmission with additional photos or logs for denied items only.",
      lineItemHint: "Resubmit denied lines individually with exhibit references",
    },
    {
      trigger: "Documentation complete but commercial scope still underpaid on desk review",
      documentation: "Indexed claim packet with line-to-exhibit map for supplement resubmission.",
      lineItemHint: "Supplement amendment; Claims Ninja supports documentation review and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "What is a commercial insurance supplement for contractors?",
      answer:
        "A commercial insurance supplement is the contractor package that documents and requests payment for legitimate scope beyond the carrier's initial estimate on a commercial property loss — missing areas, quantity corrections, temporary protection, general conditions, equipment, labor, materials, code support, and multi-building organization. It is an operational documentation workflow, not policy interpretation or claim negotiation advice.",
    },
    {
      question: "What belongs in a commercial supplement package?",
      answer:
        "A commercial supplement package includes a cover letter with summary table, revised estimate with area-labeled sections, master area index, indexed photo exhibits, equipment/labor/material logs, temporary protection and general conditions exhibits, code support when billed, and a correspondence log. Every requested line must map to at least one named exhibit and area ID.",
    },
    {
      question: "How should contractors prepare for a commercial reinspection?",
      answer:
        "Pre-walk disputed buildings and areas, stage photo stations and quantity worksheets by area ID, prepare a one-page briefing with estimate line references, assign a field escort with indexed exhibits, answer with evidence not opinions, and log outcomes in CRM the same day. Commercial reinspections fail when reviewers cannot locate evidence by building quickly.",
    },
    {
      question: "Can contractors submit multiple supplements on a commercial claim?",
      answer:
        "Yes. Commercial claims commonly require multiple cycles — emergency and mitigation first, then demolition discovery, then rebuild and code. Each phase needs its own cover letter, exhibit index, and estimate delta with clear version labels so reviewers track phased discovery without treating later packages as duplicate billing.",
    },
    {
      question: "How should contractors track commercial supplement timelines?",
      answer:
        "Review the carrier estimate within 48 hours, submit when documented scope exceeds the estimate and contemporaneous evidence exists, follow up at 3, 7, and 14 business days, and track every version's status in CRM until settlement reconciliation. Phased submission beats waiting for final invoice on commercial restoration supplements.",
    },
  ],
  relatedResources: [
    {
      label: "Commercial Insurance Claims Documentation Guide",
      href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
    },
    {
      label: "Large-Loss Commercial Insurance Claims Guide",
      href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
    },
    {
      label: "Multifamily & Apartment Insurance Claims Guide",
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
      label: "Commercial Roofing Documentation Guide",
      href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
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
      label: "Code Upgrade Documentation Guide",
      href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
    },
    {
      label: "Commercial Claims Documentation Checklist",
      href: "/resources/blog/commercial-claims-documentation-checklist",
    },
    {
      label: "Why commercial insurance claims get underpaid",
      href: "/resources/blog/why-commercial-insurance-claims-get-underpaid",
    },
    {
      label: "Insurance supplementing guide (pillar)",
      href: "/resources/blog/insurance-supplementing-guide-contractors",
    },
    {
      label: "Commercial insurance supplements FAQ",
      href: "/faq#faq-commercial-insurance-supplements",
    },
    {
      label: "Commercial insurance claims",
      href: SOLUTION_PATH,
    },
  ],
});

export { GUIDE_PATH as COMMERCIAL_INSURANCE_SUPPLEMENT_PLAYBOOK_PATH };
