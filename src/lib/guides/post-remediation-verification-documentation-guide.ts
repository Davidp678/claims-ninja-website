import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/mold" as const;
const CATEGORY = "mold" as const;
const GUIDE_SLUG = "post-remediation-verification-documentation-guide" as const;

export const POST_REMEDIATION_VERIFICATION_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Post-Remediation Verification (PRV) Documentation Guide for Contractors",
  excerpt:
    "Contractor operational standard for documenting post-remediation verification and mold project closeout on insurance claims — scope completion records, clearance documentation, final moisture readings, closeout photos, equipment logs, contents reconciliation, and carrier-ready project closeout packages.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Mold",
    "PRV",
    "Post-remediation verification",
    "Clearance documentation",
    "Moisture verification",
    "Project closeout",
    "Mold remediation",
    "Commercial mold",
    "Insurance claims",
    "Documentation",
    "Restoration contractors",
  ],
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  estimatedMinutes: 20,
  seoTitle:
    "Post-Remediation Verification (PRV) Documentation Guide for Contractors | Mold Claim Closeout Standards",
  seoDescription:
    "Document post-remediation verification for mold insurance claims: scope completion records, clearance documentation, final moisture readings, closeout photos, equipment logs, contents reconciliation, and carrier-ready project closeout packages for restoration contractors.",
  relatedGuideSlugs: [
    "mold-supplement-playbook-for-contractors",
    "commercial-mold-claims-guide",
    "mold-remediation-documentation-guide",
    "mold-damage-documentation-guide",
    "mold-protocol-documentation-guide",
    "commercial-water-loss-documentation-guide",
    "category-3-water-damage-documentation-guide",
    "contents-inventory-documentation-guide",
    "pack-out-documentation-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "daily-monitoring-guide",
    "dry-log-collection-guide",
  ],
  relatedBlogSlugs: [
    "mold-claim-documentation-checklist",
    "mold-documentation-mistakes",
    "why-mold-insurance-claims-get-underpaid",
    "documentation-gaps-that-trigger-water-claim-denials",
    "dry-log-documentation-guide-insurance-claims",
    "daily-monitoring-documentation-best-practices",
    "why-category-3-water-claims-get-underpaid",
  ],
  faqIds: [
    "mold-prv-definition",
    "mold-prv-documentation-insurance",
    "mold-prv-moisture-readings-required",
    "mold-prv-closeout-package",
    "mold-prv-clearance-documentation-required",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["mold", "water-damage", "commercial"],
  purpose:
    "Post-Remediation Verification (PRV) is the documentation phase that proves mold remediation work is complete, substrates are ready for rebuild, and the claim file supports final payment — carriers often withhold closeout approval until completion evidence is organized and indexed. This guide is the contractor operational standard for documenting PRV and mold project closeout on insurance claims: scope completion records, clearance documentation when applicable, final moisture verification, closeout photo sets, equipment and log closeout, contents reconciliation, and carrier-ready closeout packages. This is an insurance documentation guide, not environmental consulting certification, laboratory protocol training, or industrial hygiene credentialing. For intake and causation standards, see the Mold Damage Documentation Guide; for production-phase containment, removal, and cleaning evidence, see the Mold Remediation Documentation Guide — this guide picks up when remediation production nears completion and follows evidence through final claim closeout. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Remediation production complete or nearing completion and rebuild authorization pending",
      signal:
        "Containment down, cleaned substrates exposed, or carrier requesting completion documentation before final payment",
    },
    {
      condition: "Clearance testing, visual inspection, or third-party verification scheduled or required",
      signal:
        "Policy language, property manager requirement, or carrier request for post-remediation verification evidence",
    },
    {
      condition: "Final moisture readings and drying closeout required before close-in or rebuild",
      signal:
        "Structural drying overlapped remediation; dehumidifiers pulled; terminal readings needed per dry standard",
    },
    {
      condition: "Equipment demobilization and final invoice submission approaching",
      signal:
        "Last equipment day billed; office preparing final estimate, change orders, or completion certificate",
    },
    {
      condition: "Contents return, storage closeout, or inventory reconciliation on mold-affected files",
      signal:
        "Pack-out items returning to site; storage vault release; contents cleaning completion pending sign-off",
    },
    {
      condition: "Commercial or occupied-building mold loss requiring heightened closeout documentation",
      signal:
        "Healthcare, hospitality, multifamily, or industrial facility requiring zone release records before re-occupancy",
    },
  ],
  prerequisites: [
    "Intake and causation documented per Mold Damage Documentation Guide — moisture source, growth mapping, and assessment exhibits on file",
    "Production-phase evidence documented per Mold Remediation Documentation Guide — containment, removal, cleaning, equipment logs, and daily progress records complete",
    "Room naming convention consistent across photos, logs, estimates, and closeout exhibits",
    "Final moisture reading forms and dry standard references available before close-in or rebuild authorization",
    "Photo folder structure established with closeout phase ready: before, during, after, and completion sequences indexed by room",
    "Contents inventory and pack-out records aligned with Contents Inventory and Pack-Out documentation guides when contents scope exists",
  ],
  requiredDocumentation: [
    {
      id: "scope-completion-record",
      label: "Scope completion record with removed materials and cleaning confirmation",
      required: true,
      detail:
        "Written confirmation that billed remediation scope was performed — removal quantities, cleaned substrates, and any remaining work clearly identified by room.",
    },
    {
      id: "clearance-documentation",
      label: "Clearance documentation when testing or independent verification performed",
      required: false,
      detail:
        "Visual inspection records, clearance sample location photos, laboratory reports, and third-party verification documents indexed to remediation boundaries.",
    },
    {
      id: "final-moisture-verification",
      label: "Final moisture readings compared to dry standard",
      required: true,
      detail:
        "Terminal pin or pinless readings at all active map points, hygrometer ambient readings, and thermal imaging context where used — dated before close-in.",
    },
    {
      id: "closeout-photo-set",
      label: "Final photo documentation sequence",
      required: true,
      detail:
        "After photos of cleaned substrates, containment removal, equipment pull, reconstructed or ready-for-rebuild areas, and wide room context showing completion condition.",
    },
    {
      id: "equipment-log-closeout",
      label: "Equipment runtime logs and demobilization records",
      required: true,
      detail:
        "Final equipment pull dates, total runtime hours, and placement photos cross-referenced to billed equipment lines through last active day.",
    },
    {
      id: "daily-report-closeout",
      label: "Daily reports and monitoring logs through project end",
      required: true,
      detail:
        "Chronological field notes, progress photos, and drying records from remediation start through PRV — no gaps between last production day and closeout.",
    },
    {
      id: "contents-reconciliation",
      label: "Contents return, cleaning completion, and inventory reconciliation when applicable",
      required: false,
      detail:
        "Returned items photos, storage closeout records, disposal documentation, and inventory reconciliation matching pack-out records.",
    },
    {
      id: "closeout-narrative",
      label: "Written completion narrative and remaining work statement",
      required: true,
      detail:
        "Plain-language summary of work completed, verification performed, site condition at closeout, and any punch-list or rebuild scope deferred.",
    },
    {
      id: "closeout-package-index",
      label: "Insurance closeout package with attachment index",
      required: true,
      detail:
        "Organized packet: final estimate, change orders, moisture documentation, PRV reports, photos, lab results, narratives, and line-item exhibit mapping.",
    },
  ],
  steps: [
    {
      id: "why-prv-documentation",
      title: "Why Post-Remediation Verification Documentation Matters",
      actions: [
        "Post-Remediation Verification (PRV) is the documented proof that mold remediation work is complete and the site condition supports rebuild, re-occupancy, or final payment — it is not remediation itself, but the evidence package that closes the remediation chapter on the claim file.",
        "Carriers often request completion documentation before releasing final payment, approving rebuild scope, or closing the mold portion of a combined water-and-mold file — organized PRV evidence reduces additional information requests and payment delays.",
        "PRV documentation answers four separate questions on desk review: was the approved scope completed, are substrates dry and clean enough for close-in, was any required verification performed and documented, and does the closeout package connect exhibits to final line items.",
        "Remediation quality alone does not close claims — once containment is down and equipment is pulled, the evidence window for completion photos, terminal moisture readings, and clearance records closes quickly.",
        "Contractors who treat PRV as an afterthought lose payment on otherwise well-performed remediation when final photos, moisture verification, or clearance reports are missing or poorly indexed.",
        "PRV requirements vary by carrier, policy, property type, and jurisdiction — this guide teaches what to document and how to organize closeout evidence, not which environmental protocols to select.",
        "Complete mold claim files require three documentation phases: assessment (Mold Damage Documentation Guide), production (Mold Remediation Documentation Guide), and closeout (this guide).",
        "Daily closeout discipline on the last production day — not the week after demobilization — separates contractors who close files on first submission from those fighting carrier reopen requests.",
      ],
      notes:
        "See Claim Documentation Standards for company-wide file organization. PRV documentation is a payment and closeout issue — treat it with the same rigor as intake and production phases.",
    },
    {
      id: "confirm-remediation-completion",
      title: "Confirm Remediation Completion",
      owner: "field",
      actions: [
        "Document scope completion room by room — list every billed remediation activity performed: containment, removal, cleaning, HEPA vacuuming, and any antimicrobial application where documented photographically.",
        "Record removed materials with final quantities: drywall square footage, insulation bags, flooring yards, cabinet units, and trim linear feet — cross-reference to production photos from the Mold Remediation Documentation Guide.",
        "Confirm cleaning completion on exposed substrates — photograph framing, subfloor, and cavity surfaces showing treated condition ready for rebuild or encapsulation where applicable.",
        "Document drying completion when structural drying overlapped remediation — note last active drying day, equipment pull sequence, and whether substrates met dry standard before close-in authorization.",
        "Capture site condition at completion: wide room photos showing cleaned cavities, removed materials hauled, and transition zones returned to pre-containment layout where barriers are down.",
        "Identify and document remaining work explicitly — punch-list items, deferred rebuild scope, ongoing moisture source repairs, or areas excluded from current authorization prevent carrier assumptions about incomplete work.",
        "Write a scope completion memo or checklist signed by field lead or project manager — dated statement that billed remediation scope was performed as documented in production exhibits.",
        "Cross-reference completion record to estimate line items — every major remediation category should map to a closeout confirmation, not only to production-phase photos.",
      ],
      notes:
        "See Mold Remediation Documentation Guide for production-phase containment, removal, and cleaning evidence standards. PRV scope completion builds on production documentation — it does not replace missing production exhibits.",
    },
    {
      id: "clearance-documentation",
      title: "Clearance Documentation",
      owner: "field",
      actions: [
        "Visual inspection — document walk-through of remediated areas with dated photos showing clean substrates, no visible growth or debris, and containment fully removed; note inspector identity and inspection date.",
        "Clearance testing when applicable — photograph each sample location before collection, document sample type and chain-of-custody, and attach laboratory reports with narrative explaining how results relate to remediation boundaries.",
        "Independent verification — when third-party industrial hygienist, environmental consultant, or carrier-retained inspector performs clearance, obtain written report, scope boundary map, and sample location photos indexed to your remediation work areas.",
        "Laboratory reports — attach full lab certificates with sample IDs matching field location photos; write brief narrative connecting pass/fail results to specific rooms and remediation scope completed.",
        "Supporting documentation — include clearance criteria referenced on the report (if provided), comparison to pre-remediation conditions where relevant, and any conditional clearance notes requiring follow-up work.",
        "Clarify that testing requirements vary by project, jurisdiction, carrier, and property type — document what was performed on this file, not what every file requires.",
        "Do not substitute contractor self-certification for required third-party clearance when policy, contract, or carrier explicitly requires independent verification — document who performed verification and their credentials on the report, not in your narrative alone.",
        "Index clearance exhibits in the closeout package with sample location photos preceding lab results — desk reviewers match results to physical locations on the loss.",
      ],
      notes:
        "This section documents clearance evidence for insurance review, not environmental consulting procedures or laboratory certification standards. When no clearance testing was performed, document visual inspection completion instead.",
    },
    {
      id: "moisture-verification",
      title: "Moisture Verification",
      owner: "field",
      actions: [
        "Final moisture readings — record terminal pin or pinless meter readings at every active map point on exposed framing, subfloor, sill plates, and cavity surfaces before close-in or rebuild authorization.",
        "Dry standard comparisons — document established dry standard for each material type and show terminal readings at or below that standard; note meter type, depth setting, and calibration context where relevant.",
        "Thermal imaging — when used, capture images showing uniform temperature patterns on remediated substrates with visible reference points matching moisture map locations.",
        "Hygrometer readings — record ambient temperature and relative humidity in remediated rooms at closeout; pair with substrate readings to support drying completion arguments on combined mold-and-water files.",
        "Moisture maps — attach final moisture map revision showing all reading points, dates, and terminal values; highlight points that met dry standard on last reading day.",
        "Align terminal readings with equipment pull date — last dry log entry, final moisture reading, and equipment demobilization should occur on the same logical closeout sequence without unexplained gaps.",
        "Document any reading points that did not meet dry standard at closeout — note remaining drying scope, follow-up plan, or carrier notification before close-in proceeds.",
        "Cross-reference moisture verification to Mold Damage Documentation Guide baseline readings and Mold Remediation Documentation Guide production logs — closeout readings complete the moisture evidence chain.",
      ],
      notes:
        "See Daily Monitoring Field Procedure and Dry Log Collection Procedure for logging conventions. Terminal moisture documentation closes drying duration disputes and supports rebuild authorization on mold files with structural drying overlap.",
    },
    {
      id: "final-photo-documentation",
      title: "Final Photo Documentation",
      owner: "field",
      actions: [
        "Before photos — ensure intake and pre-remediation baseline sets from assessment and production phases are indexed and accessible; closeout package references them for comparison.",
        "During photos — confirm production-phase sequences from remediation are complete: containment, removal, and cleaning progress sets organized by room before closeout submission.",
        "After photos — capture cleaned substrates, exposed framing condition, and cavity readiness in every remediated room with wide context and detail shots on the completion date.",
        "Reconstructed areas — when partial rebuild occurred before closeout, photograph completed assemblies, paint, drywall install, or flooring replacement with date stamps showing post-remediation condition.",
        "Containment removal — document barrier takedown, negative air demobilization, and transition zones returned to normal occupancy layout with dated wide shots.",
        "Equipment removal — photograph empty rooms or work areas after all air scrubbers, dehumidifiers, negative air machines, and air movers are pulled — proves demobilization matched last billed equipment day.",
        "Clean surfaces — close-up photos of HEPA-vacuumed framing, wiped studs, cleaned subfloor, and treated cavities showing visual clean standard achieved before close-in.",
        "Maintain photo sequencing in folder structure: room label, phase (before/during/after/completion), and date — desk reviewers follow the story from loss condition through verified completion.",
      ],
      notes:
        "See Photo Documentation Standards for labeling conventions. Final photo sets are the most commonly missing PRV exhibit — capture completion photos on the last production day before crews leave the site.",
    },
    {
      id: "equipment-log-closeout",
      title: "Equipment & Log Closeout",
      owner: "field",
      actions: [
        "Runtime logs — finalize daily equipment utilization records through last active day: air scrubbers, negative air machines, dehumidifiers, and air movers with total hours per unit.",
        "Equipment removal — document pull dates with photos showing demobilized rooms; cross-reference pull date to last billed equipment day on estimate and invoice.",
        "Monitoring logs — attach complete daily monitoring records from remediation start through closeout with no gaps between last production entry and PRV completion date.",
        "Daily reports — include field notes, progress summaries, and crew activity logs for every production day; closeout package should show continuous documentation through project end.",
        "Drying records — when structural drying applied, attach dry log with terminal entry, equipment pull confirmation, and moisture reading alignment on last active chamber.",
        "Reconcile equipment evidence to final estimate — every billed equipment line should map to placement photo, runtime log entry, and pull date before closeout submission.",
        "Archive equipment serial or asset numbers where tracked — supports extended equipment disputes and supplement resubmissions on commercial files.",
        "Close equipment log with signed or initialed final entry noting all units off-site and monitoring complete.",
      ],
      notes:
        "See Mold Remediation Documentation Guide equipment documentation standards for production-phase logging. Equipment closeout gaps between last log entry and invoice date are a common carrier reduction trigger on mold files.",
    },
    {
      id: "contents-pack-out-closeout",
      title: "Contents & Pack-Out Closeout",
      owner: "office",
      actions: [
        "Returned contents — photograph items as they return to site with room placement context; document condition at return compared to pack-out intake photos.",
        "Cleaning completion — attach before-and-after photos for contents cleaned off-site or on-site; note cleaning vendor, completion date, and items released for return.",
        "Inventory reconciliation — compare final returned inventory to original pack-out list; document missing items, disposed items, and replacements with justification.",
        "Disposal documentation — photograph non-salvageable contents before disposal with inventory notes; attach disposal receipts or manifests where replacement lines are billed.",
        "Storage closeout — record vault release, final storage invoice, and storage facility sign-off with dates matching contents return schedule.",
        "Chain-of-custody closeout — final custody transfer signatures from storage vendor to site or policyholder with date and item count confirmation.",
        "Separate contents closeout exhibits from structural PRV folder on commercial files — adjusters review structure and contents on parallel scope tracks.",
        "Cross-reference contents line items to pack-out, cleaning, storage, and return documentation before final invoice submission.",
      ],
      notes:
        "See Contents Inventory Documentation Guide and Pack-Out Documentation Guide for full contents evidence standards. Contents reconciliation gaps at closeout trigger contents line reductions on mold files with pack-out scope.",
    },
    {
      id: "insurance-closeout-package",
      title: "Insurance Closeout Package",
      owner: "office",
      actions: [
        "Final estimate — submit updated estimate reflecting all approved scope, change orders, and closeout line items organized by room and phase matching exhibit folder structure.",
        "Change orders — attach signed or documented change orders with narrative explaining scope additions discovered during production; cross-reference to production discovery photos.",
        "Moisture documentation — include baseline, production, and terminal reading logs with moisture maps and dry standard references in dedicated moisture exhibit folder.",
        "PRV reports — attach visual inspection records, clearance testing reports, and third-party verification documents indexed to sample locations and remediation boundaries.",
        "Photos — deliver labeled closeout sets: completion photos, containment removal, equipment pull, and full before-during-after sequences by room.",
        "Laboratory reports — include chain-of-custody, sample location photos, and full lab certificates when clearance testing was performed.",
        "Narratives — write completion cover letter explaining work performed, verification completed, site condition at closeout, remaining work if any, and exhibit index references.",
        "Completion records — attach certificate of completion, property manager sign-off, or tenant release documents where contract or commercial lease requires formal closeout acknowledgment.",
        "Build attachment index listing every exhibit, file name, date range, and specific line items each exhibit supports — organized closeout packages close files faster on desk review.",
      ],
      notes:
        "See Claim Documentation Standards for carrier-ready packaging. Separate assessment exhibits (Mold Damage Documentation Guide), production exhibits (Mold Remediation Documentation Guide), and closeout exhibits (this guide) on complex multi-phase files.",
    },
    {
      id: "commercial-prv-documentation",
      title: "Commercial PRV Documentation",
      owner: "project-manager",
      actions: [
        "Multifamily — index PRV closeout by building and unit number; document unit-by-unit completion records, tenant notification of completion, and common-area verification separately from unit interiors.",
        "Healthcare — record infection-control clearance coordination, restricted zone release documentation, and facility staff sign-off with heightened sensitivity to verification report handling.",
        "Hospitality — document floor-and-room completion sequence, guest-room release records, and back-of-house PRV evidence separately from guest-facing areas.",
        "Office buildings — index by suite or floor; document phased closeout when remediation occurred in occupied zones with after-hours completion records and tenant communication logs.",
        "Industrial facilities — record production-area release documentation, safety officer clearance notes, and equipment restart authorization where remediation affected operational zones.",
        "Commercial closeout packages require property-level indexing from assessment through PRV — building name, zone, unit, or department labels consistent across all exhibit folders.",
        "Heightened documentation expectations on commercial files include formal completion certificates, third-party clearance reports, and property manager sign-off more often than residential losses.",
        "Apply commercial indexing patterns from Commercial Water Loss Documentation Guide when mold PRV follows large commercial water losses on the same claim number.",
      ],
      notes:
        "Commercial PRV documentation fails on file organization before it fails on verification quality. Property-level naming conventions are mandatory from closeout photo capture through final submission.",
    },
  ],
  qualityGates: [
    {
      id: "scope-completion-documented",
      label: "Scope completion record documented by room",
      required: true,
      detail: "Written confirmation that billed remediation scope was performed with remaining work identified.",
    },
    {
      id: "removal-cleaning-confirmed",
      label: "Removal and cleaning completion confirmed with after photos",
      required: true,
      detail: "Cleaned substrates photographed in every remediated room before close-in.",
    },
    {
      id: "drying-completion-confirmed",
      label: "Drying completion confirmed when structural drying applied",
      required: false,
      detail: "Terminal readings and equipment pull aligned on last active drying day.",
    },
    {
      id: "clearance-documented",
      label: "Clearance or visual inspection documentation on file",
      required: true,
      detail: "Visual walk-through photos dated; lab reports attached when testing performed.",
    },
    {
      id: "terminal-moisture-readings",
      label: "Final moisture readings compared to dry standard",
      required: true,
      detail: "Terminal readings at all active map points before close-in authorization.",
    },
    {
      id: "moisture-map-final",
      label: "Final moisture map revision attached",
      required: true,
      detail: "All reading points with terminal values and dates documented.",
    },
    {
      id: "closeout-photo-set-complete",
      label: "Final closeout photo set complete",
      required: true,
      detail: "After, containment removal, equipment pull, and clean surface photos captured.",
    },
    {
      id: "photo-sequencing-indexed",
      label: "Photo sequences indexed by room and phase",
      required: true,
      detail: "Before, during, after, and completion folders organized consistently.",
    },
    {
      id: "equipment-logs-closed",
      label: "Equipment runtime logs closed through last active day",
      required: true,
      detail: "Pull dates match last billed equipment day on estimate.",
    },
    {
      id: "monitoring-logs-complete",
      label: "Daily monitoring logs complete through project end",
      required: true,
      detail: "No gaps between last production entry and closeout date.",
    },
    {
      id: "daily-reports-through-closeout",
      label: "Daily reports filed through final production day",
      required: true,
      detail: "Field notes and progress photos for every production day on file.",
    },
    {
      id: "contents-reconciled",
      label: "Contents inventory reconciled when contents scope exists",
      required: false,
      detail: "Pack-out, return, and disposal records match final inventory.",
    },
    {
      id: "closeout-narrative-written",
      label: "Written completion narrative on file",
      required: true,
      detail: "Cover letter explaining work completed, verification performed, and site condition.",
    },
    {
      id: "final-estimate-indexed",
      label: "Final estimate cross-referenced to closeout exhibits",
      required: true,
      detail: "Line items map to photo folders, logs, and PRV reports.",
    },
    {
      id: "change-orders-attached",
      label: "Change orders attached with supporting discovery evidence",
      required: false,
      detail: "Scope additions documented with production photos and narrative.",
    },
    {
      id: "lab-reports-indexed",
      label: "Laboratory reports indexed to sample location photos",
      required: false,
      detail: "Chain-of-custody and location photos precede lab certificates.",
    },
    {
      id: "closeout-package-index",
      label: "Closeout package attachment index complete",
      required: true,
      detail: "Exhibit list with file names and line-item mapping ready for submission.",
    },
    {
      id: "production-exhibits-linked",
      label: "Production exhibits from remediation guide linked in closeout package",
      required: true,
      detail: "Assessment and production folders referenced in closeout index.",
    },
    {
      id: "commercial-indexed",
      label: "Commercial files indexed by building, unit, or zone at closeout",
      required: false,
      detail: "Property-level naming applied on multifamily and commercial PRV files.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Missing final completion photos after containment and equipment removal",
      impact:
        "Carriers cannot verify site condition at closeout when only production-phase photos exist — completion lines face reduction without dated after photos of cleaned substrates and demobilized rooms.",
      correction:
        "Capture closeout photo set on the last production day: cleaned cavities, containment down, equipment pulled, and wide room context before crews leave site.",
    },
    {
      mistake: "Missing terminal moisture verification before close-in or rebuild",
      impact:
        "Rebuild authorization and final payment stall when carriers cannot confirm substrates met dry standard — moisture disputes reopen after remediation appears complete.",
      correction:
        "Record terminal readings at all active map points compared to dry standard; align with equipment pull date and last dry log entry before close-in proceeds.",
    },
    {
      mistake: "Missing clearance reports when testing or third-party verification was performed",
      impact:
        "Clearance testing lines lose support when lab results are not indexed to sample location photos and remediation boundaries on desk review.",
      correction:
        "Photograph each sample location, attach chain-of-custody and full lab certificates, and write narrative connecting results to completed scope.",
    },
    {
      mistake: "Poor closeout document organization disconnected from estimate structure",
      impact:
        "Final payment delays when adjusters cannot match closeout exhibits to line items — disorganized packages trigger additional information requests.",
      correction:
        "Build attachment index mapping every exhibit to specific line items; organize folders by room and phase matching estimate structure.",
    },
    {
      mistake: "No completion narrative explaining work performed and verification completed",
      impact:
        "Desk reviewers cannot close files without written summary connecting production evidence to final scope and site condition at closeout.",
      correction:
        "Write completion cover letter referencing exhibit index — explain scope completed, verification performed, remaining work, and site readiness.",
    },
    {
      mistake: "Missing equipment log closeout through last billed day",
      impact:
        "Final equipment lines reduce when pull dates, runtime logs, and demobilization photos do not support last billed equipment day.",
      correction:
        "Close runtime logs with final entry noting all units off-site; photograph empty rooms on equipment pull date matching invoice.",
    },
    {
      mistake: "Gap between last daily report and closeout submission date",
      impact:
        "Carriers question whether billed labor and monitoring spanned actual production days when daily documentation stops before project end.",
      correction:
        "Maintain daily reports and progress photos through final production day — closeout package shows continuous documentation without gaps.",
    },
    {
      mistake: "Contents return without inventory reconciliation at closeout",
      impact:
        "Contents cleaning, storage, and replacement lines fail when returned items cannot be matched to original pack-out inventory with condition documentation.",
      correction:
        "Reconcile returned inventory to pack-out list with photos at return; document disposed and replacement items with justification.",
    },
    {
      mistake: "Submitting PRV closeout without linking production-phase exhibits",
      impact:
        "Closeout packages that omit remediation production evidence appear incomplete — carriers request production photos and logs already captured but not indexed.",
      correction:
        "Include assessment, production, and closeout exhibit folders in attachment index — reference Mold Damage and Mold Remediation guide evidence in closeout narrative.",
    },
    {
      mistake: "Proceeding to rebuild before documenting remaining work or failed moisture points",
      impact:
        "Covering substrates before terminal readings and completion photos eliminates the PRV evidence window — supplements and payment disputes follow.",
      correction:
        "Complete moisture verification and closeout photos before close-in; document any remaining work, failed reading points, or deferred scope explicitly in completion record.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Clearance retesting required after initial failed clearance sample",
      documentation:
        "Failed sample location photos, corrective cleaning or re-remediation evidence, and passed retest results with narrative explaining corrective action.",
      lineItemHint: "Additional cleaning, retesting, and verification lines",
    },
    {
      trigger: "Extended drying required before PRV moisture verification can pass",
      documentation:
        "Daily dry logs, equipment runtime records, and terminal reading progression showing additional drying days beyond initial allowance.",
      lineItemHint: "Extended dehumidification and monitoring lines",
    },
    {
      trigger: "Contents reconciliation disputes at closeout",
      documentation:
        "Pack-out intake photos, cleaning records, disposal documentation, and return condition photos supporting replacement versus cleaning decisions.",
      lineItemHint: "Contents cleaning, storage, and replacement lines",
    },
    {
      trigger: "Third-party clearance or PRV scope beyond initial remediation estimate",
      documentation:
        "Contract or carrier requirement for independent verification; sample location photos, consultant report, and narrative connecting to remediation boundaries.",
      lineItemHint: "Post-remediation verification and clearance testing lines",
    },
    {
      trigger: "Carrier partial approval on closeout submission requiring resubmission",
      documentation:
        "Indexed resubmission with missing exhibit additions: terminal readings, completion photos, clearance reports, or equipment log closeout mapped to denied lines.",
      lineItemHint:
        "Closeout resubmission with line-item justification; Claims Ninja supports documentation review and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "What is post-remediation verification (PRV) on a mold claim?",
      answer:
        "Post-Remediation Verification (PRV) is the documented proof that mold remediation work is complete and the site condition supports rebuild, re-occupancy, or final payment. On insurance files, PRV includes scope completion records, final moisture readings, closeout photos, clearance documentation when testing was performed, equipment log closeout, and organized closeout packages — not the remediation work itself, but the evidence that closes the remediation chapter. Requirements vary by carrier and project; this guide covers what contractors should document at closeout.",
    },
    {
      question: "What belongs in a mold project closeout package?",
      answer:
        "A mold project closeout package typically includes: final estimate and change orders, scope completion narrative, terminal moisture readings and moisture maps, final photo sets (completion, containment removal, equipment pull), equipment runtime logs through last active day, clearance or visual inspection records, laboratory reports when testing was performed, contents reconciliation when pack-out scope exists, and an attachment index mapping exhibits to line items. Organize assessment exhibits (Mold Damage Documentation Guide), production exhibits (Mold Remediation Documentation Guide), and closeout exhibits together for complete file review.",
    },
    {
      question: "When is clearance documentation required after mold remediation?",
      answer:
        "Clearance documentation requirements vary by carrier, policy, property type, and jurisdiction — there is no universal rule that every mold file requires laboratory clearance. When clearance testing, visual inspection by a third party, or independent verification is performed or required, document sample location photos, chain-of-custody, lab reports, and narrative connecting results to remediation boundaries. When no testing is performed, document visual walk-through completion with dated photos showing clean substrates and removed containment instead.",
    },
  ],
  relatedResources: [
    {
      label: "Commercial Mold Claims Guide",
      href: "/resources/guides/mold/commercial-mold-claims-guide",
    },
    {
      label: "Mold Remediation Documentation Guide",
      href: "/resources/guides/mold/mold-remediation-documentation-guide",
    },
    {
      label: "Mold Damage Documentation Guide",
      href: "/resources/guides/mold/mold-damage-documentation-guide",
    },
    {
      label: "Mold Protocol Documentation Guide",
      href: "/resources/guides/mold/mold-protocol-documentation-guide",
    },
    {
      label: "Commercial Water Loss Documentation Guide",
      href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
    },
    {
      label: "Category 3 Water Damage Documentation Guide",
      href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
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
      label: "Claim Documentation Standards",
      href: "/resources/guides/general-claims/documentation-standards-guide",
    },
    {
      label: "Photo Documentation Standards",
      href: "/resources/guides/general-claims/photo-documentation-standards-guide",
    },
    {
      label: "Daily Monitoring Field Procedure",
      href: "/resources/guides/water-damage/daily-monitoring-guide",
    },
    {
      label: "Dry Log Collection Procedure",
      href: "/resources/guides/water-damage/dry-log-collection-guide",
    },
    {
      label: "Documentation Gaps That Trigger Water Claim Denials",
      href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
    },
    { label: "Mold solutions", href: SOLUTION_PATH },
    { label: "Water damage solutions", href: "/solutions/water-damage" },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});
