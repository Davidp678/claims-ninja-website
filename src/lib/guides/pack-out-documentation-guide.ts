import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/fire-damage" as const;
const CATEGORY = "fire-damage" as const;
const GUIDE_SLUG = "pack-out-documentation-guide" as const;

export const PACK_OUT_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Pack-Out Documentation Guide",
  excerpt:
    "Contractor operational standard for documenting pack-out operations on fire insurance claims — chain of custody, inventory accuracy, transportation, storage, cleaning coordination, return delivery, estimating support, supplements, and defensible claim files.",
  category: CATEGORY,
  guideType: "documentation-standard",
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Pack-Out",
    "Chain of Custody",
    "Contents",
    "Fire Damage",
    "Storage",
    "Transportation",
    "Inventory",
    "Supplement",
    "Documentation",
    "Restoration contractors",
  ],
  publishedAt: "2026-07-10",
  updatedAt: "2026-07-10",
  estimatedMinutes: 26,
  seoTitle:
    "Pack-Out Documentation Guide | Contractor Standards for Fire Claims",
  seoDescription:
    "Document pack-out operations for fire insurance claims: chain of custody, inventory tracking, transportation logs, storage documentation, cleaning coordination, return delivery, estimating support, and supplement recovery.",
  relatedGuideSlugs: [
    "commercial-fire-claims-guide",
    "fire-damage-documentation-guide",
    "fire-code-upgrade-documentation-guide",
    "smoke-soot-damage-documentation-guide",
    "contents-inventory-documentation-guide",
    "contents-documentation-guide",
    "fire-claim-intake-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "category-3-water-damage-documentation-guide",
    "commercial-water-loss-documentation-guide",
  ],
  relatedBlogSlugs: [
    "why-fire-damage-claims-get-underpaid",
    "fire-damage-claim-documentation-guide",
    "fire-damage-supplement-playbook-for-contractors",
    "claim-documentation-approval-rates",
  ],
  faqIds: [
    "pack-out-documentation-insurance",
    "pack-out-chain-of-custody-documentation",
    "pack-out-storage-tracking",
    "pack-out-charges-documentation",
    "pack-out-return-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["fire-damage", "smoke", "commercial"],
  purpose:
    "Pack-out operations move the largest volume of claim evidence off-site — and carriers deny manipulation, storage, transport, and cleaning lines when chain of custody breaks, inventory batches do not tie to estimate lines, transport logs are missing, or returned contents lack reset documentation. This guide is the contractor operational standard for documenting pack-out removal, tracking, transportation, storage, cleaning coordination, and return of contents during fire insurance claims — not pack-out restoration procedures. For full-file fire standards including structural and smoke scope, see the Fire Damage Documentation Guide. For room-by-room inventory, valuation, and clean-versus-replace evidence, see the Contents Inventory Documentation Guide. For field pack-out execution detail, see the Contents Documentation Procedure. For commercial pack-out, multi-unit indexing, and tenant suite chain of custody standards, see the Commercial Fire Claims Guide. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Pack-out or contents move-out scheduled on a fire loss",
      signal:
        "Soot-affected furniture, textiles, electronics, or personal property requiring off-site processing",
    },
    {
      condition: "Carrier adjuster requests chain-of-custody proof before approving pack-out lines",
      signal:
        "Adjuster email citing missing inventory batch references, transport logs, or storage documentation",
    },
    {
      condition: "Storage duration or vault charges disputed on contents scope",
      signal:
        "Carrier questions storage months, unit counts, or necessity of off-site holding",
    },
    {
      condition: "Supplement preparation when pack-out scope exceeds carrier estimate",
      signal:
        "Additional trips, specialty packing, extended storage, or return delivery lines missing from carrier sketch",
    },
    {
      condition: "Return delivery or reset of cleaned contents to the loss site",
      signal:
        "Contents processing complete and policyholder expects item-level return documentation",
    },
    {
      condition: "Lost item dispute or customer confidence concern during pack-out",
      signal:
        "Policyholder questions item location, condition change, or missing inventory rows",
    },
  ],
  prerequisites: [
    "Site safety clearance before interior entry; claim number and policyholder contact in job file",
    "Room-located inventory started or complete before first item movement — see Contents Inventory Documentation Guide",
    "Barcode or label system configured with unique item and box identifiers",
    "Chain-of-custody log template ready before pack-out start",
    "Customer acknowledgement form for pack-out scope, handling authorization, and high-value item review",
    "Inventory software or export format aligned to carrier sketch room naming",
  ],
  requiredDocumentation: [
    {
      id: "pre-packout-room-photos",
      label: "Room-by-room photography before pack-out",
      required: true,
      detail:
        "Wide room context plus close photos of high-value and questionable items in place before handling. Room labels visible in frame.",
    },
    {
      id: "video-walkthrough",
      label: "Video walkthrough of affected rooms before pack-out",
      required: false,
      detail:
        "Recommended on large losses — narrated room labels, visible damage, and item locations before production changes the scene.",
    },
    {
      id: "initial-inventory-batch",
      label: "Initial inventory batch tied to rooms before movement",
      required: true,
      detail:
        "Room-located inventory with description, quantity, condition, and unique item identifiers cross-referenced to photo folders.",
    },
    {
      id: "item-condition-notes",
      label: "Item condition documentation before handling",
      required: true,
      detail:
        "Pre-loss condition and damage type noted per item or group; photograph condition of high-value items before wrapping or boxing.",
    },
    {
      id: "customer-acknowledgement",
      label: "Customer acknowledgement of pack-out scope and authorization",
      required: true,
      detail:
        "Signed or documented approval for pack-out rooms, high-value item handling, and off-site storage destination.",
    },
    {
      id: "high-value-item-identification",
      label: "High-value item identification and separate handling notes",
      required: true,
      detail:
        "Electronics, art, antiques, jewelry, and business equipment flagged with individual photos and specialty handling instructions.",
    },
    {
      id: "labeling-barcode-prep",
      label: "Labeling strategy and barcode preparation log",
      required: true,
      detail:
        "Box numbers, tote numbers, and item tags assigned before loading; tag-to-inventory cross-reference documented.",
    },
    {
      id: "chain-of-custody-log",
      label: "Chain-of-custody log with continuous custody entries",
      required: true,
      detail:
        "Who handled items, when, batch numbers, transfer points, and signatures from site through storage and processing.",
    },
    {
      id: "loading-manifest",
      label: "Loading manifest with box and tote numbering",
      required: true,
      detail:
        "Vehicle load list mapping box/tote numbers to inventory batches, rooms packed, and destination facility.",
    },
    {
      id: "transport-log",
      label: "Transport log with vehicle, driver, and transfer documentation",
      required: true,
      detail:
        "Departure and arrival times, vehicle identifier, driver name, load manifest reference, and transfer signatures.",
    },
    {
      id: "storage-location-assignment",
      label: "Storage location assignment with vault or shelf documentation",
      required: true,
      detail:
        "Facility name, vault or shelf assignment, environmental conditions when applicable, and security measures noted.",
    },
    {
      id: "estimate-packout-crossref",
      label: "Estimate-to-pack-out cross-reference index",
      required: true,
      detail:
        "Map each pack-out labor, manipulation, transport, storage, cleaning coordination, and return delivery line to custody logs and inventory batches.",
    },
  ],
  steps: [
    {
      id: "why-pack-out-documentation-matters",
      title: "Why Pack-Out Documentation Matters",
      actions: [
        "Chain of custody — carriers and policyholders require continuous documentation from first item movement through storage, cleaning, and return. Broken custody triggers lost-item disputes and line reductions.",
        "Inventory accuracy — pack-out batches must tie to room-located inventories with unique item identifiers. Mismatched labels between boxes, software, and estimate lines are a top pack-out denial trigger.",
        "Carrier scrutiny — contents desk reviewers match manipulation, storage, and transport lines to inventory pages, loading manifests, and custody logs. Billing without substance fails review.",
        "Lost item disputes — policyholders and carriers question item location and condition when custody gaps exist between site, vehicle, storage, and processing facilities.",
        "Customer confidence — documented pack-out processes with signed acknowledgements and return verification reduce complaints and support referral relationships on contents-heavy losses.",
        "Estimating accuracy — pack-out labor, pad protection, box materials, transport, storage, and return delivery lines require contemporaneous logs tied to batch references — not end-of-job reconstruction.",
        "Supplement support — additional trips, extended storage, specialty packing, and discovered contents require indexed custody documentation from intake forward.",
        "Claim defensibility — complete pack-out files survive audit, re-inspection, and supplement resubmission when every movement is logged, photographed, and cross-referenced to estimate lines.",
      ],
      notes:
        "See Claim Documentation Standards for company-wide file organization. Pack-out documentation shares the contents claim file with inventory and valuation evidence — separate custody folders indexed to inventory batches.",
    },
    {
      id: "pre-pack-out-documentation",
      title: "Pre-Pack-Out Documentation",
      owner: "field",
      actions: [
        "Room-by-room photography — capture wide room context and item close-ups in every room scheduled for pack-out before any handling or wrapping.",
        "Video walkthrough — narrate room labels, visible damage, and item locations on large losses; index video file with timestamp references in room inventory.",
        "Initial inventory — complete or verify room-located inventory with description, quantity, condition, and unique item identifiers before first movement.",
        "Item condition — photograph pre-loss condition and damage type on high-value, questionable, and fragile items before wrapping or boxing.",
        "Customer acknowledgement — obtain signed or documented approval for pack-out scope, rooms affected, off-site storage destination, and high-value item handling.",
        "High-value item identification — flag electronics, art, antiques, jewelry, and business equipment with individual photos and specialty handling notes.",
        "Labeling strategy — assign box numbers, tote numbers, and item tags using a consistent scheme that matches inventory export and photo filenames.",
        "Barcode preparation — configure inventory software or barcode system before pack-out start; test scan-to-inventory linkage on first box before full production.",
      ],
      notes:
        "See Contents Inventory Documentation Guide for inventory and valuation standards. Pre-pack-out documentation must precede movement — inventories and photos created after pack-out without in-place proof fail contents desk review.",
    },
    {
      id: "chain-of-custody-standards",
      title: "Chain of Custody Standards",
      owner: "field",
      actions: [
        "Unique item identifiers — assign sequential IDs per item or group in inventory software; never reuse IDs across rooms, batches, or claim phases.",
        "Barcode systems — scan items and boxes at each custody transfer point; maintain barcode-to-inventory and barcode-to-photo cross-reference.",
        "Inventory software — export batch reports at pack-out completion, storage intake, and processing handoff; backup paper logs when connectivity is limited on site.",
        "Box numbering — assign sequential box numbers by room or batch; log box contents summary tied to inventory row references on loading manifest.",
        "Tote numbering — use numbered totes for soft goods, textiles, and grouped items; tote contents list cross-referenced to inventory export.",
        "Loading manifests — document every box and tote loaded per vehicle with room source, batch reference, and destination facility.",
        "Vehicle documentation — record vehicle identifier, load date, driver name, and manifest reference on each transport leg.",
        "Driver logs — log departure time, arrival time, route notes, and transfer signatures for each vehicle movement between site, storage, and processing.",
        "Transfer documentation — capture signatures or documented handoffs at site exit, storage intake, processing facility, and return delivery.",
        "Customer signatures — obtain acknowledgement at pack-out authorization, storage assignment notification, and return delivery completion when applicable.",
      ],
      notes:
        "Maintain continuous documentation throughout the process — no gaps between site pack-out, vehicle transport, storage intake, cleaning handoff, and return delivery. See Contents Documentation Procedure for field execution detail.",
    },
    {
      id: "transportation-storage-documentation",
      title: "Transportation & Storage Documentation",
      owner: "field",
      actions: [
        "Vehicle loading — photograph loaded vehicles with manifest visible; document pad protection, tie-down, and box stacking by load.",
        "Transport logs — record each trip with vehicle ID, driver, departure and arrival times, manifest reference, and transfer signatures.",
        "Storage locations — document facility name, address, contact, and intake date for vault, warehouse, pod, or container assignments.",
        "Environmental conditions — note climate-controlled vault usage, humidity-sensitive item handling, and environmental monitoring when specialty storage applies.",
        "Vault assignments — log vault number, unit size, contents batch reference, and assignment date for each vault or pod placement.",
        "Shelf locations — document shelf or rack assignments within processing facilities for items awaiting cleaning or evaluation.",
        "Security measures — note facility security features, access controls, and alarm status when carriers question storage necessity.",
        "Storage duration — log start date, monthly inspection dates, and duration justification when storage extends beyond initial estimate.",
        "Inspection logs — periodic storage inspections with date, inspector, condition notes, and photos when extended storage or carrier review requires ongoing proof.",
      ],
      notes:
        "Tie every storage and transport line to inventory batch references and custody logs. Carriers question storage duration without contemporaneous intake and inspection documentation.",
    },
    {
      id: "estimating-documentation",
      title: "Estimating Documentation",
      owner: "office",
      actions: [
        "Pack-out labor — document crew size, hours, rooms packed, and pad protection with batch references supporting manipulation lines.",
        "Manipulation — log in-structure contents movement separate from off-site pack-out when both scopes apply; tie to room and inventory references.",
        "Inventory labor — document hours for tagging, data entry, photo capture, and barcode assignment during pack-out phase.",
        "Transportation — log trip count, vehicle usage, distance, and manifest references supporting transport line items.",
        "Storage — document vault, pod, or warehouse usage with start date, unit count, monthly duration, and batch cross-reference.",
        "Cleaning coordination — log handoff dates to processing vendors with batch references linking cleaning lines to inventory groups.",
        "Repackaging — document materials, labor, and handling for items prepared for return delivery with inventory cross-reference.",
        "Return delivery — log delivery date, crew, placement rooms, and customer acknowledgement supporting reset lines.",
        "Specialty handling — document art crating, electronics transport, fine art handling, and fragile item packing with item-level photos and vendor notes.",
        "Additional labor — capture overtime, second-trip, and after-hours pack-out with contemporaneous crew logs and manifest proof.",
      ],
      notes:
        "Cross-reference each pack-out line to custody logs, loading manifests, or inventory batches before estimate submission. Align room names across inventory, photos, sketch, and estimate.",
    },
    {
      id: "supplement-opportunities",
      title: "Supplement Opportunities",
      owner: "supplement-coordinator",
      actions: [
        "Additional discovered contents — closets, garages, attics, and storage rooms omitted from carrier estimate; document with room-located inventory and custody batch before movement.",
        "Extended storage — vault or pod usage beyond initial estimate when processing delays or carrier approval lag extends duration; log monthly with inspection notes.",
        "Additional handling — fragile, oversized, or specialty items requiring extra pad protection, crating, or crew time beyond standard pack-out macros.",
        "Specialty packing — art crating, mirror boxes, electronics anti-static packaging, and custom containers with item photos and materials documentation.",
        "Electronics transport — climate-controlled or padded transport for sensitive equipment with specialist handling notes and serial number cross-reference.",
        "Fine art handling — crating, climate transport, and specialty vendor coordination with appraisal and condition photos indexed to inventory rows.",
        "Multiple trips — second or third pack-out trips when additional rooms or discovered contents require separate vehicle loads with manifest proof.",
        "Additional labor — overtime, weekend, or after-hours pack-out when emergency scope or carrier timeline requires extended crew documentation.",
        "Repack services — items requiring re-wrap or re-box after processing before return delivery; document materials and labor per batch.",
        "Return delivery — additional delivery trips, placement labor, or reset scope when carrier estimate omitted return-to-site handling.",
      ],
      notes:
        "See Fire Damage Supplement Playbook for submission workflow. Phased pack-out supplements with contemporaneous custody logs outperform end-of-job lump additions.",
    },
    {
      id: "common-documentation-mistakes",
      title: "Common Documentation Mistakes",
      actions: [
        "Missing inventory records — pack-out completed without room-located inventory or batch references tying boxes to item rows.",
        "Missing photographs — high-value items packed without in-place photos; carriers cannot verify condition at pack-out.",
        "Poor labeling — box numbers, tote numbers, or barcodes that do not match inventory export or photo filenames.",
        "Missing signatures — no customer acknowledgement at pack-out authorization, storage assignment, or return delivery.",
        "Broken chain of custody — gaps between site exit, vehicle transport, storage intake, and processing handoff without transfer documentation.",
        "Missing transport logs — vehicle movements without driver logs, manifest references, or departure and arrival timestamps.",
        "Incomplete storage documentation — storage lines without vault assignment, intake date, or batch cross-reference.",
        "Poor organization — custody logs, manifests, and inventory exports stored in separate systems without cross-reference index.",
      ],
      notes:
        "Audit pack-out files before carrier submission. Loading manifests without inventory batch ties look complete but fail contents desk review.",
    },
    {
      id: "pack-out-documentation-checklist",
      title: "Pack-Out Documentation Checklist",
      owner: "project-manager",
      actions: [
        "Initial documentation — room photos, video walkthrough, and inventory verification complete before first item movement.",
        "Inventory verification — room-located inventory cross-checked to sketch; unique item identifiers assigned and barcode system tested.",
        "Labeling — box numbers, tote numbers, and item tags applied with tag-to-inventory cross-reference documented.",
        "Photography — high-value and questionable items photographed in place; pre-handling condition captured.",
        "Transport — loading manifest complete; vehicle documented; driver log with departure, arrival, and transfer signatures.",
        "Storage — facility assigned; vault or shelf location logged; intake date and batch reference recorded.",
        "Estimate review — each pack-out labor, transport, storage, cleaning coordination, and return line cross-referenced to custody logs.",
        "Supplement preparation — gap narrative, attachment index, and cover letter mapping custody documentation to unpaid lines.",
        "Return documentation — delivery log, placement notes, and customer acknowledgement for reset scope.",
        "Final quality review — documentation lead confirms quality gates before invoice or supplement submission.",
      ],
      notes:
        "Run this checklist at pre-pack-out, post-loading, storage intake, return delivery, and before supplement resubmission. See Contents Documentation Procedure for field execution detail.",
    },
  ],
  qualityGates: [
    {
      id: "pre-packout-docs-complete",
      label: "Pre-pack-out documentation complete before first item movement",
      required: true,
      detail:
        "Room photos, inventory verification, and customer acknowledgement captured before handling.",
    },
    {
      id: "inventory-verified",
      label: "Inventory verified with unique item identifiers and batch references",
      required: true,
      detail:
        "Room-located inventory cross-checked to sketch; barcode or label system tested on first box.",
    },
    {
      id: "labeling-complete",
      label: "Box, tote, and item labeling cross-referenced to inventory export",
      required: true,
      detail:
        "Tag-to-photo and tag-to-inventory linkage documented on loading manifest.",
    },
    {
      id: "photography-complete",
      label: "High-value items photographed in place before pack-out",
      required: true,
      detail:
        "Wide room context and item close-ups captured before wrapping or boxing.",
    },
    {
      id: "transport-documented",
      label: "Transport log and loading manifest complete for each vehicle movement",
      required: true,
      detail:
        "Driver log, vehicle ID, manifest reference, and transfer signatures on file.",
    },
    {
      id: "storage-documented",
      label: "Storage location assigned with intake date and batch reference",
      required: true,
      detail:
        "Vault, shelf, or pod assignment logged with facility contact and security notes.",
    },
    {
      id: "estimate-cross-referenced",
      label: "Estimate reviewed and cross-referenced to custody and manifest index",
      required: true,
      detail:
        "Each pack-out line links to inventory batch, loading manifest, or custody log entry.",
    },
    {
      id: "supplement-package-ready",
      label: "Supplement preparation complete when pack-out scope exceeds carrier estimate",
      required: true,
      detail:
        "Gap narrative, attachment index, and cover letter prepared before resubmission.",
    },
    {
      id: "return-documented",
      label: "Return delivery documented with placement and customer acknowledgement",
      required: true,
      detail:
        "Delivery log, reset notes, and signatures when return scope applies.",
    },
    {
      id: "final-quality-review",
      label: "Final quality review passed by documentation lead",
      required: true,
      detail:
        "All quality gates confirmed before invoice submission or supplement resubmission.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Missing inventory records before pack-out",
      impact:
        "Manipulation and storage lines denied when desk reviewers cannot tie boxes to item-level inventory.",
      correction:
        "Complete room-located inventory with batch references before first item movement.",
    },
    {
      mistake: "Missing photographs of items before handling",
      impact:
        "Lost-item and condition disputes when carriers cannot verify pre-pack-out state.",
      correction:
        "Photograph high-value and questionable items in place; attach photo index to inventory batch.",
    },
    {
      mistake: "Poor labeling across boxes, inventory, and photos",
      impact:
        "Desk reviewers cannot map loaded contents to estimate lines; proportional cuts follow.",
      correction:
        "Adopt one labeling convention at intake; reconcile box numbers to inventory export before loading.",
    },
    {
      mistake: "Missing customer signatures on pack-out authorization",
      impact:
        "Scope disputes and complaint escalation when policyholder questions handling decisions.",
      correction:
        "Obtain signed acknowledgement for pack-out scope, storage destination, and high-value handling before production.",
    },
    {
      mistake: "Broken chain of custody between site, vehicle, and storage",
      impact:
        "Lost-item claims and line reductions when custody gaps cannot be explained.",
      correction:
        "Log every transfer with signatures, timestamps, and manifest references — no undocumented handoffs.",
    },
    {
      mistake: "Missing transport logs for vehicle movements",
      impact:
        "Transport lines cut as billing without trip proof or manifest substance.",
      correction:
        "Document driver, vehicle, departure, arrival, and manifest reference on every trip.",
    },
    {
      mistake: "Incomplete storage documentation",
      impact:
        "Storage duration and vault charges denied without intake date and batch cross-reference.",
      correction:
        "Log vault assignment, intake date, and inventory batch at storage intake before billing.",
    },
    {
      mistake: "Poor organization of custody logs and manifests",
      impact:
        "Supplement resubmission fails when reviewers cannot navigate pack-out evidence quickly.",
      correction:
        "Build cross-reference index linking estimate lines to manifests, custody logs, and inventory batches.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Additional contents discovered requiring second pack-out trip",
      documentation: "Room-located inventory with in-place photos and new loading manifest.",
      lineItemHint: "Additional pack-out labor, transport, and manipulation lines per omitted room",
    },
    {
      trigger: "Extended storage duration due to processing or carrier approval delays",
      documentation: "Storage start date, monthly inspection log, and batch cross-reference with duration narrative.",
      lineItemHint: "Additional storage months per vault, pod, or warehouse unit",
    },
    {
      trigger: "Specialty packing required for art, electronics, or fragile items",
      documentation: "Item photos, crating materials documentation, and specialist handling notes.",
      lineItemHint: "Specialty packing, crating, and handling labor lines",
    },
    {
      trigger: "Multiple trips when initial estimate assumed single load",
      documentation: "Separate loading manifests and driver logs per trip with batch references.",
      lineItemHint: "Additional transport and pack-out labor per trip",
    },
    {
      trigger: "Electronics or fine art requiring climate-controlled transport",
      documentation: "Specialist handling report, serial numbers, and transport condition documentation.",
      lineItemHint: "Specialty transport and handling lines",
    },
    {
      trigger: "Return delivery and reset scope omitted from carrier estimate",
      documentation: "Delivery log, placement photos, and customer acknowledgement.",
      lineItemHint: "Return delivery, repackaging, and reset labor lines",
    },
    {
      trigger: "Additional labor for overtime or after-hours pack-out",
      documentation: "Contemporaneous crew logs with room count and manifest proof.",
      lineItemHint: "Additional pack-out labor hours with time-stamped documentation",
    },
    {
      trigger: "Repack services after processing before return delivery",
      documentation: "Materials documentation and batch cross-reference for re-wrap scope.",
      lineItemHint: "Repackaging materials and labor lines",
    },
  ],
  faq: [
    {
      question: "How is pack-out documentation different from the Contents Inventory Documentation Guide?",
      answer:
        "The Contents Inventory Documentation Guide covers what items exist — room-by-room inventory, valuation, clean-versus-replace evidence, and replacement support. This guide covers how pack-out operations are documented — chain of custody, transportation, storage, cleaning coordination, and return delivery. Use the inventory guide for item-level proof; use this guide for logistics documentation that supports manipulation, storage, and transport lines.",
    },
    {
      question: "How is pack-out documentation different from the Contents Documentation Procedure?",
      answer:
        "This guide is the operational standard for documenting pack-out operations for insurance claim recovery — custody standards, transport logs, storage documentation, estimating support, and supplements. The Contents Documentation Procedure is the field execution guide for on-site pack-out, chain of custody capture, and salvageability documentation. Use this guide for file standards and claim strategy; use the procedure for on-site execution.",
    },
    {
      question: "When should pack-out documentation start relative to inventory?",
      answer:
        "Pre-pack-out documentation — room photos, inventory verification, and customer acknowledgement — must complete before first item movement. Chain-of-custody logging begins at first handling and continues through storage, processing, and return. See the Contents Inventory Documentation Guide for inventory standards that must precede pack-out.",
    },
  ],
  relatedResources: [
    {
      label: "Commercial Fire Claims Guide",
      href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
    },
    {
      label: "Fire Damage Documentation Guide",
      href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
    },
    {
      label: "Fire Code Upgrade Documentation Guide",
      href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
    },
    {
      label: "Smoke & Soot Damage Documentation Guide",
      href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
    },
    {
      label: "Contents Inventory Documentation Guide",
      href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
    },
    {
      label: "Contents Documentation Procedure",
      href: "/resources/guides/fire-damage/contents-documentation-guide",
    },
    {
      label: "Fire Claim Intake Checklist",
      href: "/resources/guides/fire-damage/fire-claim-intake-guide",
    },
    {
      label: "Claim Documentation Standards",
      href: "/resources/guides/general-claims/documentation-standards-guide",
    },
    {
      label: "Photo Documentation Field Procedure",
      href: "/resources/guides/general-claims/photo-documentation-standards-guide",
    },
    {
      label: "Category 3 Water Damage Documentation Guide",
      href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
    },
    {
      label: "Commercial Water Loss Documentation Guide",
      href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
    },
    {
      label: "Why Fire Damage Claims Get Underpaid",
      href: "/resources/blog/why-fire-damage-claims-get-underpaid",
    },
    {
      label: "Fire Damage Claim Documentation Guide (blog)",
      href: "/resources/blog/fire-damage-claim-documentation-guide",
    },
    {
      label: "Fire Damage Supplement Playbook",
      href: "/resources/blog/fire-damage-supplement-playbook-for-contractors",
    },
    { label: "Fire damage solutions", href: SOLUTION_PATH },
    { label: "Contents restoration solutions", href: "/solutions/contents" },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});
