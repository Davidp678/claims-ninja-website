import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/fire-damage" as const;
const CATEGORY = "fire-damage" as const;
const GUIDE_SLUG = "contents-inventory-documentation-guide" as const;

export const CONTENTS_INVENTORY_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Contents Inventory Documentation Guide",
  excerpt:
    "Contractor operational standard for documenting personal property and business contents on fire insurance claims — room-by-room inventory, photography, valuation support, clean-versus-replace evidence, estimating documentation, supplements, and claim recovery.",
  category: CATEGORY,
  guideType: "documentation-standard",
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Contents",
    "Inventory",
    "Fire Damage",
    "Pack-Out",
    "Personal Property",
    "Business Contents",
    "Supplement",
    "Documentation",
    "Restoration contractors",
    "Smoke Damage",
  ],
  publishedAt: "2026-07-09",
  updatedAt: "2026-07-09",
  estimatedMinutes: 24,
  seoTitle:
    "Contents Inventory Documentation Guide | Contractor Standards for Fire Claims",
  seoDescription:
    "Document personal property and business contents for fire insurance claims: room-by-room inventory, photography, serial numbers, clean-versus-replace evidence, pack-out support, supplements, and claim recovery.",
  relatedGuideSlugs: [
    "fire-damage-documentation-guide",
    "smoke-soot-damage-documentation-guide",
    "contents-documentation-guide",
    "fire-claim-intake-guide",
    "smoke-documentation-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "category-3-water-damage-documentation-guide",
    "commercial-water-loss-documentation-guide",
  ],
  relatedBlogSlugs: [
    "fire-damage-claim-documentation-guide",
    "fire-damage-supplement-playbook-for-contractors",
    "smoke-and-soot-damage-documentation-guide",
    "claim-documentation-approval-rates",
  ],
  faqIds: [
    "contents-inventory-documentation-insurance",
    "contents-inventory-insurance-required",
    "contents-smoke-damage-documentation",
    "contents-clean-vs-replace",
    "contents-supplement-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["fire-damage", "smoke", "commercial"],
  purpose:
    "Contents losses represent the largest undocumented financial exposure on many fire claims — carriers approve structure and smoke cleaning while reducing or denying personal property lines when inventories are incomplete, photos are missing, serial numbers are absent, or pack-out precedes in-place documentation. This guide is the contractor operational standard for documenting, organizing, valuing, photographing, inventorying, and supporting insurance recovery for contents losses during fire claims — not contents restoration procedures. For full-file fire standards including structural and smoke scope, see the Fire Damage Documentation Guide. For smoke and soot contamination evidence on contents-adjacent assemblies, see the Smoke & Soot Damage Documentation Guide. For field pack-out execution and chain of custody, see the Contents Documentation Procedure. Future Pack-Out Documentation Guide and Commercial Fire Claims Guide will extend pack-out and commercial contents indexing standards. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Pack-out or on-site contents manipulation scheduled on a fire loss",
      signal:
        "Soot-affected furniture, textiles, electronics, or personal property in multiple rooms",
    },
    {
      condition: "Carrier adjuster requests itemized inventory before approving contents lines",
      signal:
        "Adjuster email or estimate note requiring room-located inventory and photos",
    },
    {
      condition: "High-value, specialty, or questionable salvageability items present",
      signal:
        "Electronics, art, antiques, collectibles, business equipment, or heavily smoke-coated textiles",
    },
    {
      condition: "Commercial or business contents loss with inventory and equipment scope",
      signal:
        "Office furniture, machinery, stock, or tenant personal property requiring indexed documentation",
    },
    {
      condition: "Supplement preparation when contents scope exceeds carrier estimate",
      signal:
        "Additional rooms, specialty cleaning, storage, or replacement lines missing from carrier sketch",
    },
    {
      condition: "Smoke-damaged personal property requiring clean-versus-replace documentation",
      signal:
        "Carrier may argue clean-only scope on textiles, electronics, or porous furnishings",
    },
  ],
  prerequisites: [
    "Site safety clearance before interior entry; claim number and policyholder contact in job file",
    "Photo naming convention agreed: ClaimNumber_Room_ItemLabel_Date or equivalent",
    "Room index template aligned to carrier sketch naming before inventory start",
    "Contents inventory form or software configured with unique item identifiers",
    "Chain-of-custody log template ready before pack-out or off-site processing",
    "High-value item checklist — electronics, art, antiques, jewelry, business equipment",
  ],
  requiredDocumentation: [
    {
      id: "room-located-inventory",
      label: "Room-located inventory with description, quantity, and condition",
      required: true,
      detail:
        "Walk room by room using sketch-matching names. Record description, quantity, pre-loss condition, and damage type per item or logical group.",
    },
    {
      id: "pre-packout-photos",
      label: "Photographs of items in place before handling or pack-out",
      required: true,
      detail:
        "Wide room context plus close photos of high-value, questionable, and smoke-affected items before movement. Video walkthrough optional but valuable on large losses.",
    },
    {
      id: "serial-model-capture",
      label: "Manufacturer, model, and serial number documentation",
      required: true,
      detail:
        "Capture nameplates on appliances, electronics, machinery, and business equipment. Note approximate age and purchase year when visible or provided.",
    },
    {
      id: "ownership-records",
      label: "Ownership and purchase documentation when available",
      required: false,
      detail:
        "Receipts, appraisals, warranty cards, or policyholder statements for high-value items. Required when replacement valuation may be disputed.",
    },
    {
      id: "damage-assessment-notes",
      label: "Heat, smoke, soot, odor, and water damage notes per item",
      required: true,
      detail:
        "Document contamination type and extent — heat char, smoke residue, soot coating, odor penetration, suppression water — separate from structural evidence folders.",
    },
    {
      id: "salvageability-disposition",
      label: "Salvageability and disposition — clean, store, replace, dispose",
      required: true,
      detail:
        "Mark each item or group with disposition and supporting rationale. Failed test-clean or specialty evaluation results attached when replacement is claimed.",
    },
    {
      id: "area-numbering-labels",
      label: "Area numbering and item labeling system",
      required: true,
      detail:
        "Assign room numbers and item tags that match inventory export, photo filenames, and estimate line references.",
    },
    {
      id: "packout-chain-custody",
      label: "Pack-out log with chain of custody and storage location",
      required: true,
      detail:
        "Log pack-out date, rooms packed, inventory batch reference, storage facility, and custody transfer notes for off-site processing.",
    },
    {
      id: "video-walkthrough",
      label: "Video walkthrough of affected rooms before pack-out",
      required: false,
      detail:
        "Recommended on large losses — narrated room labels, visible damage, and item locations before production changes the scene.",
    },
    {
      id: "business-contents-index",
      label: "Business contents and equipment inventory index",
      required: false,
      detail:
        "Separate index for office furniture, machinery, stock, and specialty equipment on commercial losses — tied to unit or department identifiers.",
    },
    {
      id: "specialty-evaluation-reports",
      label: "Specialty evaluation reports for art, electronics, textiles, or antiques",
      required: false,
      detail:
        "Attach vendor or specialist reports supporting cleaning versus replacement on high-value or non-standard items.",
    },
    {
      id: "estimate-contents-crossref",
      label: "Estimate-to-inventory cross-reference index",
      required: true,
      detail:
        "Map each contents manipulation, cleaning, storage, disposal, and replacement line to inventory pages, photo folders, or custody logs.",
    },
  ],
  steps: [
    {
      id: "why-contents-documentation-matters",
      title: "Why Contents Documentation Matters",
      actions: [
        "Personal property valuation — carriers pay what inventories prove. Vague descriptions, missing photos, and absent serial numbers trigger proportional reductions on replacement and cleaning lines.",
        "Business contents exposure — commercial losses add office furniture, inventory stock, machinery, and specialty equipment with higher per-item scrutiny and separate desk review tracks.",
        "Large financial exposure — contents totals often exceed structural cleaning scope on residential fires; undocumented items disappear from carrier estimates entirely.",
        "Carrier scrutiny — contents desk reviewers match inventory lines to photos, receipts, and disposition logic. Generic lump-sum contents macros fail without item-level proof.",
        "Supporting replacement decisions — replacement lines require non-salvageable documentation: failed cleaning tests, heat damage photos, manufacturer guidance, and disposal justification.",
        "Inventory accuracy — room labels must match across photos, inventory export, carrier sketch, and estimate. Inconsistent naming is the top contents denial trigger.",
        "Hidden losses — items in closets, garages, attics, and storage rooms are omitted when walkthroughs skip non-living spaces or pack-out precedes documentation.",
        "Complete documentation — indexed contents files support supplements when additional items, specialty cleaning, storage duration, or replacement scope exceeds the carrier estimate.",
      ],
      notes:
        "See Claim Documentation Standards for company-wide photo labeling. Contents scope shares the fire claim file with structure and smoke evidence — separate folders so desk reviewers apply correct logic per line.",
    },
    {
      id: "initial-contents-inventory",
      title: "Initial Contents Inventory",
      owner: "field",
      actions: [
        "Room-by-room inventory — walk affected spaces in consistent order using the same naming convention as structural and smoke documentation.",
        "Area numbering — assign room numbers or zone codes that match sketch, photos, and estimate; reconcile to carrier sketch before submission.",
        "Photograph before handling — capture wide room context and item close-ups before any wipe-down, movement, or pack-out.",
        "Video walkthroughs — narrate room labels and visible damage on large losses; index video file in room inventory with timestamp references.",
        "Labeling systems — apply physical tags or barcode labels linking items to inventory rows; maintain tag-to-photo cross-reference.",
        "Unique item identifiers — assign sequential IDs per item or group in inventory software; never reuse IDs across rooms or claim phases.",
        "Inventory software — export formats compatible with carrier portals; maintain backup paper logs when connectivity is limited on site.",
        "Chain of custody — log who handled items, pack-out batch numbers, transport dates, and storage locations from first movement through processing.",
      ],
      notes:
        "See Contents Documentation Procedure for pack-out execution detail. Inventories created after pack-out without in-place item photos are the leading contents denial trigger on fire claims.",
    },
    {
      id: "documentation-standards",
      title: "Documentation Standards",
      owner: "field",
      actions: [
        "Furniture — photograph upholstery staining, heat damage, and frame condition; note material type, dimensions, and pre-loss condition.",
        "Appliances — capture nameplate with manufacturer, model, serial number; document heat, smoke, and water exposure separately.",
        "Electronics — photograph exterior contamination, model labels, and connection ports; note age and functional status before testing.",
        "Clothing and textiles — document soot coating, odor penetration, and quantity by category; separate everyday apparel from designer or specialty garments.",
        "Artwork and collectibles — wide and detail photos; attach appraisals or provenance when available; flag for specialty evaluation before cleaning decisions.",
        "Business equipment — document office furniture, computers, printers, and point-of-sale systems with serial numbers and workstation location.",
        "Office furniture — cubicle systems, filing cabinets, and conference furniture indexed by department or floor zone on commercial losses.",
        "Stock and inventory — shelf photos, SKU lists, and quantity counts for retail or warehouse contents; tie to business interruption documentation when applicable.",
        "Machinery and specialty equipment — nameplate photos, operational context, and contamination notes; separate from general household contents tracks.",
        "Personal valuables — jewelry, watches, firearms, and heirlooms with individual photos and ownership documentation when policy limits apply.",
        "Manufacturer, model, and serial numbers — required on electronics, appliances, and equipment; approximate age and purchase records when available.",
        "Condition and quantity — pre-loss condition separate from damage assessment; quantity verified by count, not estimate assumption.",
        "Ownership documentation — receipts, appraisals, credit card statements, or policyholder affidavits for high-value replacement lines.",
      ],
      notes:
        "See Photo Documentation Field Procedure for capture standards. Every replacement line needs item photos and disposition rationale — not inventory description alone.",
    },
    {
      id: "cleaning-vs-replacement-documentation",
      title: "Cleaning vs. Replacement Documentation",
      owner: "field",
      actions: [
        "Heat damage — photograph char, melt, or warping on plastics, electronics housings, and furnishings; heat damage typically supports replacement over cleaning.",
        "Smoke contamination — document residue type, coverage percentage, and porous material exposure on upholstery, mattresses, and soft goods.",
        "Soot contamination — close photos showing soot depth on surfaces; note smear behavior on textiles and whether HEPA vacuuming alone is insufficient.",
        "Odor penetration — record odor assessment on porous items before ozone or hydroxyl treatment; failed deodorization supports replacement lines.",
        "Water damage — document suppression water exposure on contents already affected by smoke; combined damage often supports replacement.",
        "Salvageability — mark clean on-site, clean off-site, store, replace, or dispose with supporting photos per disposition.",
        "Manufacturer recommendations — attach product bulletins prohibiting restoration on specific items after smoke or heat exposure.",
        "Specialty evaluations — obtain textile, electronics, art, or document recovery assessments before replacement lines on high-value items.",
        "Electronics testing — document power-on test results, corrosion, or specialist evaluation reports supporting clean versus replace.",
        "Textile evaluations — dry cleaner or textile restoration vendor assessments with before photos and failed cleaning documentation.",
      ],
      notes:
        "Document evidence supporting cleaning or replacement — not the cleaning procedure itself. Carriers apply clean-only macros when disposition lacks photos and test results.",
    },
    {
      id: "estimating-documentation",
      title: "Estimating Documentation",
      owner: "office",
      actions: [
        "Inventory labor — document hours for room walkthrough, item tagging, data entry, and photo capture; tie to room count and item volume.",
        "Pack-out — log rooms packed, crew size, pad protection, and inventory batch references supporting manipulation lines.",
        "Storage — document vault, pod, or warehouse usage with start date, unit count, and contents batch cross-reference.",
        "Cleaning — separate general contents, ultrasonic, textile, electronics, and document recovery tracks with method notes per inventory group.",
        "Electronics restoration — item photos, evaluation reports, and processing invoices tied to inventory line references.",
        "Textile restoration — quantity by category, cleaning method, and vendor invoices aligned to inventory rows.",
        "Specialty cleaning — art, antiques, musical instruments, and firearms with specialist reports and before-and-after photos.",
        "Disposal — photos and narrative for non-salvageable items before disposal; disposal tickets attached when replacement is claimed.",
        "Replacement — inventory lines with replacement cost support, age, condition, and ownership documentation for high-value items.",
        "Repackaging — document return-to-site handling, pad protection, and reset placement with inventory cross-reference.",
        "Transportation — log transport dates, destinations, and batch references between site, storage, and processing facilities.",
      ],
      notes:
        "Align room names across inventory, photos, carrier sketch, and estimate. Cross-reference each contents line to inventory pages or photo folders before submission.",
    },
    {
      id: "supplement-opportunities",
      title: "Supplement Opportunities",
      owner: "supplement-coordinator",
      actions: [
        "Additional discovered contents — closets, garages, attics, and storage rooms omitted from carrier estimate with room-located inventory and photos.",
        "Hidden contamination — items with odor or soot damage not visible on initial walkthrough; document upon unpacking or specialty evaluation.",
        "Specialty cleaning — ultrasonic, textile, electronics, and document recovery tracks omitted from carrier estimate with item photos and vendor reports.",
        "Additional storage — extended storage duration when processing delays or carrier approval lag extends vault or pod usage.",
        "Electronics testing — specialist evaluation fees and replacement lines when testing confirms non-restorable equipment.",
        "Fine art and antiques — appraisal-supported replacement or specialty restoration lines with provenance and condition documentation.",
        "Commercial contents — business equipment, stock, and tenant personal property indexed by unit or department omitted from carrier scope.",
        "Specialty equipment — machinery, medical equipment, or restaurant fixtures requiring vendor evaluation and non-standard line items.",
        "High-value property — items above carrier per-item thresholds requiring receipts, appraisals, or scheduled personal property documentation.",
      ],
      notes:
        "See Fire Damage Supplement Playbook for submission workflow. Phased contents supplements with contemporaneous inventory updates outperform end-of-job lump additions.",
    },
    {
      id: "common-documentation-mistakes",
      title: "Common Documentation Mistakes",
      actions: [
        "Missing photographs — inventory rows without item photos; high-value items described but not visually documented.",
        "Poor room labeling — inventory room names that do not match carrier sketch, photos, or estimate room labels.",
        "Missing serial numbers — electronics and appliances without nameplate photos; carriers substitute lower replacement values.",
        "Missing ownership documentation — replacement lines on high-value items without receipts, appraisals, or policyholder support.",
        "Incomplete inventories — closets, garages, attics, and storage areas skipped; discovered items appear as late supplements without intake proof.",
        "Missing condition notes — pre-loss condition omitted; carriers assume average wear and reduce replacement calculations.",
        "Missing replacement justification — dispose or replace lines without failed cleaning photos, heat damage proof, or manufacturer guidance.",
        "Inadequate supporting evidence — pack-out and storage lines without inventory pages, custody logs, or batch cross-references attached.",
      ],
      notes:
        "Audit contents files before carrier submission. Dense inventory spreadsheets without photo indexes look complete but fail contents desk review.",
    },
    {
      id: "contents-inventory-checklist",
      title: "Contents Inventory Checklist",
      owner: "project-manager",
      actions: [
        "Initial walkthrough — all affected rooms, closets, garages, and storage areas identified and added to room index.",
        "Photography — high-value and questionable items photographed in place; wide room context captured before pack-out.",
        "Video — narrated walkthrough indexed on large losses before production changes the scene.",
        "Room inventory — room-located inventory complete with sketch-matching names, quantities, and condition notes.",
        "Labeling — item tags or IDs assigned and cross-referenced to photos and inventory export.",
        "Documentation — serial numbers, ownership records, and damage assessment notes captured on applicable items.",
        "Estimate review — each contents manipulation, cleaning, storage, disposal, and replacement line cross-referenced to inventory.",
        "Supporting documentation — specialty evaluations, test results, and manufacturer guidance indexed to line items.",
        "Supplement preparation — gap narrative, attachment index, and cover letter mapping inventory to unpaid lines.",
        "Final quality review — documentation lead confirms quality gates before invoice or supplement submission.",
      ],
      notes:
        "See Contents Documentation Procedure for field execution detail. Run this checklist at intake, pre-pack-out, pre-submission, and before supplement resubmission.",
    },
  ],
  qualityGates: [
    {
      id: "pre-packout-photos-complete",
      label: "High-value and questionable items photographed before pack-out",
      required: true,
      detail:
        "Wide room context and item close-ups captured in place before any movement or handling.",
    },
    {
      id: "room-label-parity",
      label: "Room labels match across inventory, photos, sketch, and estimate",
      required: true,
      detail:
        "One naming convention from intake through submission; reconciled to carrier sketch.",
    },
    {
      id: "serial-numbers-captured",
      label: "Serial and model numbers documented on applicable items",
      required: true,
      detail:
        "Electronics, appliances, machinery, and business equipment nameplates photographed.",
    },
    {
      id: "inventory-complete",
      label: "Room-by-room inventory complete including storage areas",
      required: true,
      detail:
        "Closets, garages, attics, and basements included; no rooms skipped before pack-out.",
    },
    {
      id: "disposition-documented",
      label: "Salvageability and disposition noted with supporting evidence",
      required: true,
      detail:
        "Clean, store, replace, or dispose marked per item with photos supporting replacement claims.",
    },
    {
      id: "custody-log-complete",
      label: "Pack-out chain of custody and storage location documented",
      required: true,
      detail:
        "Batch references tie manipulation, storage, and cleaning lines to inventory pages.",
    },
    {
      id: "estimate-cross-referenced",
      label: "Estimate reviewed and cross-referenced to inventory index",
      required: true,
      detail:
        "Each contents line links to inventory row, photo folder, or custody log entry.",
    },
    {
      id: "replacement-justified",
      label: "Replacement lines supported by damage photos and disposition rationale",
      required: true,
      detail:
        "Failed cleaning tests, heat damage, or manufacturer guidance attached where replacement claimed.",
    },
    {
      id: "supplement-package-ready",
      label: "Supplement preparation complete when contents scope exceeds carrier estimate",
      required: true,
      detail:
        "Gap narrative, attachment index, and cover letter prepared before resubmission.",
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
      mistake: "Missing photographs for inventoried items",
      impact:
        "Contents cleaning and replacement lines reduce when desk reviewers cannot verify item condition or existence.",
      correction:
        "Photograph every high-value and questionable item in place; attach photo index to inventory export.",
    },
    {
      mistake: "Poor room labeling across inventory, photos, and estimate",
      impact:
        "Desk reviewers cannot map items to carrier sketch rooms; proportional cuts follow.",
      correction:
        "Adopt one room naming convention at intake; reconcile to carrier sketch before estimate submission.",
    },
    {
      mistake: "Missing serial numbers on electronics and appliances",
      impact:
        "Carriers substitute generic replacement values or deny lines lacking identification proof.",
      correction:
        "Photograph nameplates before pack-out; record manufacturer, model, and serial in inventory row.",
    },
    {
      mistake: "Missing ownership documentation on high-value replacement lines",
      impact:
        "Replacement amounts reduced to generic pricing without receipt or appraisal support.",
      correction:
        "Collect receipts, appraisals, or policyholder affidavits before replacement lines are submitted.",
    },
    {
      mistake: "Incomplete inventories omitting storage areas and closets",
      impact:
        "Discovered items trigger late supplements denied as scope inflation without intake proof.",
      correction:
        "Walk every affected space including closets, garage, attic, and basement before pack-out.",
    },
    {
      mistake: "Missing condition notes on inventory rows",
      impact:
        "Carriers assume excessive wear and apply depreciation beyond policy terms.",
      correction:
        "Record pre-loss condition separate from damage assessment on every item row.",
    },
    {
      mistake: "Missing replacement justification before disposal",
      impact:
        "Replacement lines denied when carriers assume items were cleanable.",
      correction:
        "Document failed cleaning tests, heat damage photos, and manufacturer guidance before disposal.",
    },
    {
      mistake: "Inadequate supporting evidence for pack-out and storage lines",
      impact:
        "Manipulation and storage charges cut as billing without inventory substance.",
      correction:
        "Tie every pack-out and storage line to inventory batch reference and custody log.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Additional contents discovered in closets, garage, attic, or storage after carrier estimate",
      documentation: "Room-located inventory with in-place photos and updated room index.",
      lineItemHint: "Contents manipulation, cleaning, storage, and replacement lines per omitted room",
    },
    {
      trigger: "Hidden smoke or odor contamination on contents upon unpacking or evaluation",
      documentation: "Specialty evaluation reports and contamination photos indexed to inventory rows.",
      lineItemHint: "Additional specialty cleaning, deodorization, or replacement lines",
    },
    {
      trigger: "Specialty cleaning required for electronics, textiles, art, or ultrasonics",
      documentation: "Item photos, vendor reports, and processing invoices by specialty track.",
      lineItemHint: "Contents cleaning by specialty method — ultrasonic, textile, electronics",
    },
    {
      trigger: "Extended storage duration due to processing delays or carrier approval lag",
      documentation: "Storage start date, unit count, and batch cross-reference with duration log.",
      lineItemHint: "Additional storage months per vault, pod, or warehouse unit",
    },
    {
      trigger: "Electronics testing confirms non-restorable equipment after soot exposure",
      documentation: "Specialist evaluation report with item photos and serial numbers.",
      lineItemHint: "Electronics replacement and testing fee lines",
    },
    {
      trigger: "Fine art, antiques, or collectibles require appraisal-supported replacement",
      documentation: "Appraisal, provenance, condition photos, and specialty vendor assessment.",
      lineItemHint: "Fine art restoration or replacement with appraisal support",
    },
    {
      trigger: "Commercial contents omitted from carrier estimate — equipment, stock, or tenant property",
      documentation: "Business contents index by department or unit with serial and quantity proof.",
      lineItemHint: "Commercial contents manipulation, cleaning, and replacement lines",
    },
    {
      trigger: "High-value items above carrier per-item threshold without initial documentation",
      documentation: "Receipts, appraisals, and ownership proof with item photos and inventory rows.",
      lineItemHint: "Scheduled personal property or high-value replacement lines",
    },
  ],
  faq: [
    {
      question: "How is contents inventory documentation different from the Contents Documentation Procedure?",
      answer:
        "This guide is the operational standard for documenting personal property and business contents for insurance claim recovery — inventory standards, valuation support, clean-versus-replace evidence, estimating documentation, and supplements. The Contents Documentation Procedure is the field execution guide for pack-out, chain of custody, and salvageability capture. Use this guide for file standards and claim strategy; use the procedure for on-site pack-out execution.",
    },
    {
      question: "Should structure and contents documentation use separate folders?",
      answer:
        "Yes. Separate structural smoke evidence from contents inventory folders so desk reviewers apply correct logic per line. Contents photos, inventory exports, and custody logs belong in a dedicated contents section cross-referenced to but not mixed with structural or HVAC evidence.",
    },
    {
      question: "When should contents be inventoried relative to pack-out?",
      answer:
        "Always before pack-out. Room-located inventory and in-place photos must precede any movement. Inventories built after pack-out without item photos are the leading contents denial trigger. See the Contents Documentation Procedure for pack-out execution after inventory is complete.",
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
