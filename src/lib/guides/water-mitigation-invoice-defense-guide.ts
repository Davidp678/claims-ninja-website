import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/water-damage" as const;
const CATEGORY = "water-damage" as const;
const GUIDE_SLUG = "water-mitigation-invoice-defense-guide" as const;

export const WATER_MITIGATION_INVOICE_DEFENSE_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Water Mitigation Invoice Defense Guide for Contractors",
  excerpt:
    "Learn how to defend water mitigation invoices using documentation, moisture maps, dry logs, monitoring records, equipment tracking, and scope validation strategies that support full claim recovery.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Water mitigation",
    "Invoice defense",
    "Documentation",
    "Dry logs",
    "Moisture mapping",
    "Equipment charges",
    "Drying days",
    "Monitoring visits",
    "Claim recovery",
    "Restoration contractors",
  ],
  publishedAt: "2026-06-22",
  updatedAt: "2026-06-22",
  estimatedMinutes: 20,
  seoTitle: "Water Mitigation Invoice Defense Guide for Contractors",
  seoDescription:
    "Learn how to defend water mitigation invoices using documentation, moisture maps, dry logs, monitoring records, equipment tracking, and scope validation strategies that support full claim recovery.",
  relatedGuideSlugs: [
    "commercial-water-loss-documentation-guide",
    "moisture-mapping-guide",
    "equipment-documentation-guide",
    "daily-monitoring-guide",
    "dry-log-collection-guide",
    "category-3-water-damage-documentation-guide",
  ],
  relatedBlogSlugs: [
    "equipment-charges-that-get-cut-from-water-claims",
    "how-carriers-reduce-drying-days",
    "documentation-gaps-that-trigger-water-claim-denials",
    "water-damage-documentation-for-apartment-complexes",
    "multifamily-water-claims-that-get-underpaid",
    "moisture-mapping-mistakes-that-cost-contractors-money",
  ],
  faqIds: [
    "water-mitigation-invoice-reductions",
    "water-mitigation-invoice-documentation",
    "water-defend-drying-day-charges",
    "water-equipment-invoice-documentation",
    "water-mitigation-invoice-review-failures",
    "water-equipment-charge-reductions",
    "water-dry-log-additional-drying-days",
    "water-final-mitigation-package",
    "water-mitigation-file-documentation",
    "water-commercial-invoice-reduced-why",
    "water-commercial-documentation-invoice-match",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["water-damage", "mitigation"],
  purpose:
    "Many water mitigation invoices are reduced after work has already been completed. Common reductions include drying days, equipment charges, monitoring visits, labor, containment, contents manipulation, and Category 3 procedures. The strongest invoice defense is documentation — built proactively from day one, not assembled after denial. This guide is for restoration contractors, field technicians, office billing teams, and supplement coordinators who defend mitigation invoices at carrier desk review. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Carrier or third-party reviewer reduces mitigation invoice after work is complete",
      signal:
        "Remittance detail shows equipment day cuts, monitoring visit reductions, labor trims, or proportional scope adjustments without full denial",
    },
    {
      condition: "Preparing final mitigation invoice before submission",
      signal:
        "Office reconciliation identifies gaps between billed lines and field documentation — dry logs, maps, photos, or equipment proof missing for active chambers",
    },
    {
      condition: "Supplement or resubmission after partial approval on water mitigation scope",
      signal:
        "Disputed lines require indexed evidence cross-referenced to moisture maps, dry logs, and placement photos rather than narrative-only arguments",
    },
    {
      condition: "Commercial, multifamily, or Category 3 loss with higher invoice scrutiny",
      signal:
        "Specialist desk review, third-party audit, or template residential scope applied to complex footprint requiring zone-level defense",
    },
  ],
  prerequisites: [
    "Mitigation intake checklist completed with category/class assignment and baseline moisture readings",
    "Moisture map with reading point IDs assigned before equipment set",
    "Dry log and equipment documentation procedures active from day one of drying",
    "Daily monitoring workflow aligned to billed visit days per active chamber",
    "Office pre-invoice reconciliation checklist before final submission",
  ],
  requiredDocumentation: [
    {
      id: "photos",
      label: "Photos",
      required: true,
      detail:
        "Labeled, timestamped wide and detail photos at intake, equipment setup, daily progress, containment installation, demolition boundaries, and closeout clearance — tied to room or chamber names matching the moisture map and dry log.",
    },
    {
      id: "moisture-maps",
      label: "Moisture maps",
      required: true,
      detail:
        "Baseline map before equipment set with reading point IDs, wet-dry boundaries, and dated revisions when scope expands — same point IDs used through terminal release readings.",
    },
    {
      id: "dry-logs",
      label: "Dry logs",
      required: true,
      detail:
        "Chronological daily entries for every active drying day: atmospheric readings, material moisture at all map points, equipment rows, progress narratives, and environmental conditions.",
    },
    {
      id: "equipment-logs",
      label: "Equipment logs",
      required: true,
      detail:
        "Placement photos with unit counts visible, dry log equipment rows matching billed quantities, peak deployment proof, and dated records of equipment moves or partial releases.",
    },
    {
      id: "monitoring-records",
      label: "Monitoring records",
      required: true,
      detail:
        "One documented visit per billed monitoring day per active chamber — technician name, date, purpose, readings at all active map points, and equipment operation verification.",
    },
    {
      id: "category-documentation",
      label: "Category documentation",
      required: true,
      detail:
        "Intake classification evidence for Category 2 or 3 losses — source identification, contamination photos, safety procedures, and material impact notes tied to category-sensitive line items.",
    },
    {
      id: "daily-notes",
      label: "Daily notes",
      required: true,
      detail:
        "Contemporaneous progress narratives when readings plateau, regress, or require equipment changes — explain why additional drying days beyond carrier templates are necessary.",
    },
    {
      id: "final-verification",
      label: "Final verification",
      required: true,
      detail:
        "Terminal moisture readings at all active map points compared to dry standard, equipment pull date, clearance photos, and closeout notes matching the last dry log entry.",
    },
    {
      id: "commercial-documentation",
      label: "Commercial documentation",
      required: false,
      detail:
        "On multifamily, apartment, or large-loss files: zone-level indexing, tenant impact logs, unit-by-unit maps and logs, and common-area scope separated from in-unit production.",
    },
  ],
  steps: [
    {
      id: "why-invoices-get-reduced",
      title: "Why Water Mitigation Invoices Get Reduced",
      actions: [
        "Equipment quantity disputes — billed air movers, dehumidifiers, or specialty units exceed photo-verified peak deployment or dry log rows.",
        "Drying duration disputes — billed equipment days exceed logged days, or terminal readings suggest dry standard was met before last billed day.",
        "Labor challenges — demolition, setup, relocation, monitoring, and contents manipulation hours lack contemporaneous scope proof tied to documented conditions.",
        "Monitoring frequency disputes — billed visit days exceed documented trips, or visits lack readings at all active map points.",
        "Scope necessity challenges — containment, antimicrobial, demolition, or specialty procedures lack intake photos and procedural notes supporting production.",
        "Category designation disputes — Category 2 or 3 lines challenged when intake classification evidence is absent or applied retroactively at invoice.",
      ],
    },
    {
      id: "build-documentation-before-review",
      title: "Build Documentation Before Invoice Review Begins",
      actions: [
        "Invoice defense starts on day one — every drying day, monitoring visit, and equipment deployment is either documented contemporaneously or vulnerable at desk review.",
        "Documentation is proactive — field teams capture evidence during production; office reconciles before billing rather than reconstructing after reduction.",
        "Waiting until denial occurs is too late — carriers evaluate chronological evidence chains; retroactive maps, relabeled photos, and backfilled logs are discounted at proportional rates.",
        "Assign documentation ownership at intake — field capture, daily log review, and pre-invoice reconciliation roles prevent gaps that multiply through the drying period.",
        "Treat each billed line item as a documentation requirement — equipment days, monitoring visits, labor hours, and category-sensitive procedures each need dated proof before submission.",
      ],
    },
    {
      id: "defending-equipment-charges",
      title: "Defending Equipment Charges",
      actions: [
        "Maintain placement logs — record equipment type, count, chamber assignment, and setup date on the dry log for every active drying day.",
        "Produce equipment maps or wide placement photos — show unit count per chamber with boundaries visible, matching moisture map chamber design.",
        "Capture daily photos when counts change — additions, moves, partial releases, and peak deployment require dated proof before billing reconciliation.",
        "Document equipment justification — tie dehumidifier count to chamber cubic footage and isolation perimeters; tie air mover count to affected surface area on the moisture map.",
        "Reconcile peak photo-verified counts and logged days to billed quantities before invoice submission — mismatches are the primary trigger for proportional equipment cuts.",
      ],
      notes:
        "See the Equipment Documentation Guide for field procedure detail and Equipment Charges That Get Cut From Water Claims for carrier desk review patterns.",
    },
    {
      id: "defending-drying-days",
      title: "Defending Drying Days",
      actions: [
        "Capture initial readings at every active map point before equipment set — baseline values on the intake map establish starting moisture conditions.",
        "Record daily readings at the same point IDs on every monitoring visit — consistent point tracking supports duration arguments through closeout.",
        "Document drying progression with progress narratives — when readings plateau or regress, contemporaneous notes explain why additional days are necessary.",
        "Verify final dry standard at all active map points before equipment pull — terminal readings compared to established dry standard close duration disputes at invoice review.",
        "Align equipment pull date, last dry log entry, and clearance photos — gaps between terminal readings and billed last day invite last-day equipment cuts.",
      ],
      notes:
        "See the Daily Monitoring Guide for visit workflow and How Carriers Reduce Drying Days for common reduction patterns and recovery strategies.",
    },
    {
      id: "defending-labor-charges",
      title: "Defending Labor Charges",
      actions: [
        "Demolition — before-and-after photos at removal boundaries, material type notes, and square footage tied to moisture map affected areas.",
        "Setup — equipment placement photos with timestamp matching dry log setup rows and chamber isolation documented on the moisture map.",
        "Relocation — dated photos and log entries when contents, furniture, or equipment moves occur mid-job with scope justification.",
        "Monitoring — one log entry per billed visit day with technician name, readings at all active points, and equipment operation verification.",
        "Contents manipulation — separate photo sequences and time notes for contents work; tie labor hours directly to documented wet conditions and access records.",
      ],
      notes:
        "Tie every labor line directly to documented conditions — desk reviewers reduce hours when production cannot be traced to contemporaneous photos, maps, and log entries.",
    },
    {
      id: "defending-moisture-mapping-costs",
      title: "Defending Moisture Mapping Costs",
      actions: [
        "Track migration with dated map revisions — vertical and horizontal expansion requires updated reading points before carriers authorize additional scope.",
        "Validate scope with wet-dry boundaries at assembly transitions — unaffected-area readings support chamber design and equipment justification.",
        "Justify map expansion when hidden moisture is discovered — contemporaneous discovery photos and revised point IDs defend supplemental mapping and monitoring lines.",
        "Align map labels to carrier sketches and estimate room names — mismatched naming triggers scope exclusions at desk review.",
        "Cross-reference map point IDs to dry log readings on every visit — mapping costs are defensible when readings prove ongoing drying need at documented points.",
      ],
      notes:
        "See the Moisture Mapping Guide for field capture standards and Moisture Mapping Mistakes That Cost Contractors Money for how weak maps drive invoice reductions.",
    },
    {
      id: "defending-category-3-procedures",
      title: "Defending Category 3 Procedures",
      actions: [
        "Document source identification at intake — sewage, flood intrusion, or unknown contaminant load with photos and contemporaneous classification notes.",
        "Record contamination concerns with wide and detail photos before demolition — visible contamination, odor indicators, and affected material porosity support Category 3 assignment.",
        "Log safety procedures — PPE worn during removal, containment installation, HEPA filtration, and negative air setup with dated photos and procedural notes.",
        "Document material impacts — demolition boundaries, disposal records, and antimicrobial application tied to contaminated assemblies on the moisture map.",
        "Cross-reference category-sensitive line items to intake evidence — PPE, disposal, containment, and equipment days each trace to classification proof, not invoice narrative alone.",
      ],
      notes:
        "See the Category 3 Water Damage Documentation Guide for contamination-specific field procedures and indexed packet structure.",
    },
    {
      id: "commercial-invoice-defense",
      title: "Commercial Water Loss Invoice Defense",
      actions: [
        "Multifamily losses — treat each affected unit as a separate chamber with unit number on every photo, map point, and dry log header.",
        "Apartment complexes — separate in-unit scope from common-area production; document vertical migration at stack boundaries with dated map revisions.",
        "Tenant impacts — maintain access and coordination logs aligned to monitoring visit dates on occupied properties.",
        "Common areas — distinct photo sequences and map zones for hallways, laundry rooms, and mechanical spaces separate from tenant units.",
        "Large-loss operations — zone-level indexing, asset-tagged equipment inventories, and daily file review prevent proportional reductions when any chamber lacks evidence.",
      ],
      notes:
        "See the Commercial Water Loss Documentation Guide for large-loss standards and Water Damage Documentation for Apartment Complexes for multifamily-specific patterns.",
    },
    {
      id: "common-invoice-failures",
      title: "Common Reasons Mitigation Invoices Fail Review",
      actions: [
        "Missing dry logs — gaps between billed equipment days and documented entries; silent weekends or holidays without log rows.",
        "Missing monitoring reports — billed visit days without contemporaneous readings at all active map points.",
        "Weak equipment documentation — placement photos absent, undated, or showing fewer units than billed.",
        "Missing moisture maps — no baseline readings before equipment set, or point IDs changed mid-job without revision history.",
        "Incomplete photos — unlabeled images, post-cleanup-only sequences, or missing before-and-after demolition boundaries.",
        "Weak narratives — invoice explanations without cross-referenced evidence; desk reviewers discount narrative-only arguments.",
      ],
    },
    {
      id: "invoice-defense-checklist",
      title: "Water Mitigation Invoice Defense Checklist",
      actions: [
        "Photos complete — labeled, timestamped, intake through closeout, tied to map and log room names.",
        "Moisture maps complete — baseline before equipment set, dated revisions, consistent point IDs through terminal readings.",
        "Dry logs complete — one entry per active drying day, no gaps between billed equipment days.",
        "Equipment logs reconciled — placement photos, dry log rows, and billed counts aligned before submission.",
        "Monitoring records complete — one documented visit per billed day per active chamber.",
        "Category documentation indexed — intake classification proof for Category 2 or 3 sensitive lines.",
        "Daily notes current — progress narratives on plateaus, regressions, and equipment changes.",
        "Final verification recorded — terminal readings, equipment pull date, and clearance photos matching last log entry.",
        "Commercial documentation indexed — unit-level or zone-level evidence on multifamily and large-loss files.",
        "Office pre-invoice reconciliation complete — cross-reference table links each billed line to dated evidence before submission.",
      ],
      notes:
        "Strong invoices are supported by strong documentation. Contractors who consistently recover full payment are typically the contractors who consistently document the work.",
    },
  ],
  qualityGates: [
    {
      id: "logs-no-gaps",
      label: "No gaps between billed drying days and dry log entries",
      required: true,
      detail:
        "Every billed equipment day requires a contemporaneous dry log entry with readings at all active map points.",
    },
    {
      id: "equipment-reconciled",
      label: "Equipment photos and log rows reconciled to billed counts",
      required: true,
      detail:
        "Peak photo-verified deployment and daily log rows must match billed air mover, dehumidifier, and specialty equipment quantities.",
    },
    {
      id: "maps-baseline-complete",
      label: "Baseline moisture map complete before equipment set",
      required: true,
      detail:
        "Reading point IDs assigned at intake and used consistently through terminal release readings.",
    },
    {
      id: "monitoring-aligned",
      label: "Monitoring visits aligned to billed visit days",
      required: true,
      detail:
        "Each billed monitoring day has a documented trip with readings at every active map point in that chamber.",
    },
    {
      id: "closeout-verified",
      label: "Terminal verification complete before final invoice",
      required: true,
      detail:
        "Release readings, equipment pull date, and clearance photos match the last dry log entry in each active chamber.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Missing dry logs on active drying days",
      impact:
        "Carriers reduce equipment days and monitoring charges proportionally — gaps between billed days and logged entries are the most common drying-day cut trigger.",
      correction:
        "Complete one dry log entry per active equipment day on the same calendar date as the on-site visit, including weekends and holidays.",
    },
    {
      mistake: "Missing monitoring reports for billed visit days",
      impact:
        "Monitoring lines cut when billed trips lack contemporaneous readings at all active map points — partial visits do not support full visit-day billing.",
      correction:
        "Document technician name, date, purpose, and readings at every active point on each billed monitoring day per chamber.",
    },
    {
      mistake: "Weak equipment documentation",
      impact:
        "Air mover, dehumidifier, and specialty equipment lines trimmed to photo-verified peak counts — unsupported units or days removed proportionally.",
      correction:
        "Photograph peak deployment and daily counts with wide chamber photos; reconcile dry log rows to billed quantities before invoice submission.",
    },
    {
      mistake: "Missing or incomplete moisture maps",
      impact:
        "Scope, equipment, and mapping line items excluded when maps lack baseline readings, consistent point IDs, or dated revisions at scope expansion.",
      correction:
        "Produce baseline map before equipment set; revise maps with dated point additions when migration expands scope mid-job.",
    },
    {
      mistake: "Incomplete or unlabeled photos",
      impact:
        "Labor, demolition, and containment lines challenged when production cannot be traced to contemporaneous labeled images tied to map and log references.",
      correction:
        "Label photos with room or chamber name, date, and scope description; capture wide and detail sequences at intake, production, and closeout.",
    },
    {
      mistake: "Weak narratives without evidence cross-reference",
      impact:
        "Invoice explanations alone do not survive desk review — carriers discount narrative-only arguments when indexed evidence is absent.",
      correction:
        "Build an indexed packet cross-referencing each billed line to photos, map points, dry log dates, and equipment proof before submission.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Carrier reduces equipment days or unit counts after documentation review",
      documentation:
        "Resubmit indexed packet with placement photos, dry log equipment rows, peak deployment proof, and moisture map chamber design cross-referenced to disputed lines.",
      lineItemHint:
        "Air movers, dehumidifiers, HEPA units, specialty drying equipment — per chamber",
    },
    {
      trigger: "Drying days cut when logs show plateau but dry standard not yet met",
      documentation:
        "Progress narratives with daily readings at all active map points showing moisture above dry standard through last billed day; terminal release readings at closeout.",
      lineItemHint: "Additional drying days, extended equipment rental, daily monitoring visits",
    },
    {
      trigger: "Labor or contents manipulation lines reduced without scope proof",
      documentation:
        "Before-and-after photos, access logs, time notes, and map cross-references tying labor hours to documented wet conditions and production scope.",
      lineItemHint: "Demolition labor, contents manipulation, setup, relocation hours",
    },
    {
      trigger: "Category 3 or containment lines challenged at invoice review",
      documentation:
        "Intake classification packet with source photos, containment setup images, HEPA runtime logs, and procedural notes cross-referenced to category-sensitive lines.",
      lineItemHint: "PPE, disposal, containment, HEPA filtration, antimicrobial application",
    },
    {
      trigger: "Documentation complete but carrier underpaid mitigation invoice",
      documentation:
        "Organized resubmission with cross-reference table linking each disputed line to dated evidence — supplement or denial recovery packaging.",
      lineItemHint:
        "Supplement submission; Claims Ninja supports documentation review, supplement preparation, and claim recovery workflows",
    },
  ],
  relatedResources: [
    {
      label: "Equipment Documentation Guide",
      href: "/resources/guides/water-damage/equipment-documentation-guide",
    },
    {
      label: "Equipment charges that get cut from water claims",
      href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
    },
    {
      label: "How carriers reduce drying days",
      href: "/resources/blog/how-carriers-reduce-drying-days",
    },
    {
      label: "Documentation gaps that trigger water claim denials",
      href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
    },
    {
      label: "Claims Ninja platform",
      href: "/platform",
    },
  ],
});
