import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/water-damage" as const;
const CATEGORY = "water-damage" as const;
const GUIDE_SLUG = "class-4-drying-documentation-guide" as const;

export const CLASS_4_DRYING_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Class 4 Drying Documentation Guide for Contractors",
  excerpt:
    "Learn how to document Class 4 water damage drying using moisture mapping, daily monitoring, specialty drying equipment records, and documentation strategies that support full claim recovery.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Class 4",
    "Water damage",
    "Drying",
    "Low-permeance materials",
    "Bound water",
    "Specialty drying",
    "Moisture mapping",
    "Dry logs",
    "Equipment documentation",
    "Hardwood",
    "Plaster",
    "Concrete",
    "Claim recovery",
    "Restoration contractors",
  ],
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  estimatedMinutes: 20,
  seoTitle: "Class 4 Drying Documentation Guide for Contractors",
  seoDescription:
    "Learn how to document Class 4 water damage drying using moisture mapping, daily monitoring, specialty drying equipment records, and documentation strategies that support full claim recovery.",
  relatedGuideSlugs: [
    "moisture-mapping-guide",
    "daily-monitoring-guide",
    "equipment-documentation-guide",
  ],
  relatedBlogSlugs: [
    "large-loss-water-mitigation-documentation-best-practices",
    "multifamily-water-claims-that-get-underpaid",
    "how-carriers-reduce-drying-days",
    "equipment-charges-that-get-cut-from-water-claims",
    "documentation-gaps-that-trigger-water-claim-denials",
  ],
  faqIds: [
    "water-class-4-drying-definition",
    "water-class-4-documentation-required",
    "water-class-4-specialty-equipment-documentation",
    "water-class-4-drying-duration",
    "water-class-4-carrier-disputes",
    "water-category-class",
    "water-defend-drying-day-charges",
    "water-equipment-charge-reductions",
    "water-dry-log-additional-drying-days",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["water-damage", "mitigation"],
  purpose:
    "Class 4 drying projects are among the most documentation-intensive water mitigation claims. Because these losses involve dense, low-permeance materials and deeply held moisture, contractors often experience disputes involving extended drying duration, additional equipment, specialty drying systems, monitoring visits, labor, and invoice reductions. Strong documentation is the key to supporting these claims. This guide is for restoration contractors, field technicians, project managers, and supplement coordinators documenting Class 4 drying on hardwood flooring, plaster, concrete, brick, dense framing, low-permeance assemblies, and saturated subfloors. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Intake identifies low-permeance or bound-water assemblies",
      signal:
        "Hardwood over subfloor, plaster walls, concrete slabs, brick veneer, dense framing, or multi-layer assemblies with limited surface evaporation",
    },
    {
      condition: "Class 4 assigned at intake or during drying progression",
      signal:
        "Moisture readings remain elevated in low-permeance materials after standard residential drying templates would expect release",
    },
    {
      condition: "Specialty drying equipment deployed",
      signal:
        "Injectidry systems, floor mat systems, desiccant dehumidifiers, heat drying, or containment required to address bound water",
    },
    {
      condition: "Carrier questions Class 4 classification or extended drying",
      signal:
        "Desk review reduces drying days, removes specialty equipment lines, or downgrades class assignment at invoice",
    },
  ],
  prerequisites: [
    "Category and class assignment documented at intake with photos supporting low-permeance material identification",
    "Moisture map with reading point IDs assigned before equipment set on all affected low-permeance assemblies",
    "Dry log collection and daily monitoring procedures active from day one",
    "Equipment documentation workflow aligned to specialty drying system deployment",
  ],
  requiredDocumentation: [
    {
      id: "material-identification",
      label: "Material identification and initial conditions",
      required: true,
      detail:
        "Material type, room/location, assembly description, initial moisture readings, and intake photos for each affected low-permeance surface — hardwood, plaster, concrete, brick, dense framing, saturated subfloor.",
    },
    {
      id: "moisture-maps",
      label: "Moisture maps with material-specific readings",
      required: true,
      detail:
        "Baseline map before equipment set, daily updates at consistent point IDs, area segmentation by assembly type, and final verification readings compared to dry standard.",
    },
    {
      id: "daily-monitoring",
      label: "Daily monitoring records",
      required: true,
      detail:
        "Daily moisture readings at all active map points, environmental conditions, equipment adjustments, drying progression narratives, and final dry standard verification.",
    },
    {
      id: "specialty-equipment",
      label: "Specialty drying equipment documentation",
      required: true,
      detail:
        "Injectidry systems, floor mat systems, desiccant dehumidifiers, heat drying systems, containment — placement photos, equipment logs, and dry log rows matching billed quantities.",
    },
    {
      id: "extended-drying-support",
      label: "Extended drying justification",
      required: true,
      detail:
        "Contemporaneous notes explaining material density, limited evaporation, environmental conditions, and assembly complexity when readings plateau above dry standard.",
    },
    {
      id: "labor-records",
      label: "Labor documentation",
      required: true,
      detail:
        "Setup, specialty equipment installation, monitoring, equipment relocation, containment, access challenges, and material-specific handling tied to photos and log entries.",
    },
    {
      id: "final-verification",
      label: "Final dry verification",
      required: true,
      detail:
        "Terminal moisture readings at all active map points on low-permeance materials, equipment pull date, clearance photos, and closeout notes matching the last dry log entry.",
    },
    {
      id: "invoice-alignment",
      label: "Invoice support narrative",
      required: true,
      detail:
        "Cross-reference table linking each billed line — equipment days, specialty systems, monitoring visits, labor — to dated evidence before submission.",
    },
  ],
  steps: [
    {
      id: "understanding-class-4-drying",
      title: "Understanding Class 4 Drying",
      actions: [
        "Class 4 means low evaporation potential — moisture is held in low-permeance materials where surface drying alone cannot release bound water at residential template rates.",
        "Low-permeance materials include hardwood flooring, plaster, concrete, brick, dense framing, multi-layer assemblies, and saturated subfloors beneath finished surfaces.",
        "Bound water is moisture trapped inside the material matrix — it requires extended drying time, specialty equipment, and consistent monitoring rather than standard air mover and LGR deployment alone.",
        "Drying takes longer because evaporation is limited at the material surface — readings at depth or in the assembly core plateau while ambient conditions appear favorable.",
        "Proper classification at intake matters — Class 4 assigned with contemporaneous material photos and baseline readings supports extended duration and specialty equipment at desk review; retroactive classification is discounted.",
      ],
      notes:
        "See the Category & Class Documentation Standard for intake classification procedures. On Category 3 losses with Class 4 assemblies, also reference the Category 3 Water Damage Documentation Guide for contamination-specific requirements.",
    },
    {
      id: "identify-document-materials",
      title: "Identify and Document Affected Materials",
      actions: [
        "Record material type at every affected location — hardwood species and finish, plaster over lath, concrete slab or overlay, brick or masonry veneer, dense framing members, low-permeance paneling, saturated subfloor type.",
        "Document room and location with labels matching moisture map point IDs, dry log headers, and estimate room names.",
        "Capture initial moisture readings at each material-specific point before equipment set — baseline values establish starting conditions for duration arguments.",
        "Photograph wide and detail sequences at intake — material surface, assembly transitions, and visible water intrusion paths before demolition or equipment obscures conditions.",
        "Add material-specific notes — assembly layers, vapor barriers, adhesive systems, and access limitations that affect drying strategy and labor requirements.",
        "Record initial conditions including dwell time, discovery notes, and pre-existing damage boundaries separate from loss-related moisture.",
      ],
    },
    {
      id: "build-moisture-maps",
      title: "Build Detailed Moisture Maps",
      actions: [
        "Produce initial maps before equipment set — assign reading point IDs at every low-permeance assembly with baseline moisture values and wet-dry boundaries.",
        "Update maps daily or when scope expands — add point IDs when migration is discovered in cavities, subfloors, or adjacent assemblies.",
        "Record final verification readings at all active points — compare terminal values to established dry standard for each material type before equipment pull.",
        "Capture material-specific readings — hardwood surface and subfloor, plaster at multiple depths where meter type allows, concrete at slab and overlay, framing at stud and plate.",
        "Segment areas by assembly type and chamber — separate hardwood zones from plaster zones when equipment strategy and dry standards differ.",
      ],
      notes:
        "See the Moisture Mapping Guide for field capture standards and Moisture Mapping Mistakes That Cost Contractors Money for how weak maps drive Class 4 duration disputes.",
    },
    {
      id: "daily-monitoring-documentation",
      title: "Maintain Daily Monitoring Documentation",
      actions: [
        "Record daily moisture readings at the same point IDs on every monitoring visit — consistent tracking supports extended drying arguments through closeout.",
        "Log environmental conditions — temperature, relative humidity, grain depression, and outdoor conditions affecting low-permeance drying rates.",
        "Document equipment adjustments — additions, relocations, specialty system changes, and containment modifications with dated photos and dry log rows.",
        "Track drying progression with contemporaneous narratives — when readings plateau in bound assemblies, explain why additional days remain necessary.",
        "Verify final dry standard at all active map points on low-permeance materials before equipment pull — terminal readings close duration disputes at invoice review.",
      ],
      notes:
        "See the Daily Monitoring Guide for visit workflow, the Dry Log Collection Guide for log structure, and How Carriers Reduce Drying Days for common reduction patterns on extended dry-outs.",
    },
    {
      id: "specialty-equipment-documentation",
      title: "Document Specialty Drying Equipment",
      actions: [
        "Injectidry systems — photograph panel placement, hose routing, injection points, and chamber isolation; log unit count and runtime on the dry log.",
        "Floor mat systems — document mat layout on hardwood and subfloor assemblies with wide photos showing coverage and extraction connection.",
        "Desiccant dehumidifiers — record unit placement, ducting, and grain depression achieved when LGR capacity is insufficient for low-permeance loads.",
        "Heat drying systems — log temperature targets, affected material limits, and monitoring readings demonstrating controlled elevation without damage.",
        "Containment systems — photograph isolation perimeters separating Class 4 chambers from unaffected areas; tie negative air and HEPA setup to equipment logs.",
        "Capture placement photos at setup and when configuration changes — peak deployment proof supports billed specialty equipment days at desk review.",
        "Maintain equipment logs cross-referenced to dry log rows and billed quantities before invoice submission.",
      ],
      notes:
        "See the Equipment Documentation Guide for field procedure detail and Equipment Charges That Get Cut From Water Claims for how carriers review specialty drying lines.",
    },
    {
      id: "extended-drying-times",
      title: "Support Extended Drying Times",
      actions: [
        "Document material density — contemporaneous notes and photos identifying low-permeance assemblies that limit evaporation at the material surface.",
        "Explain limited evaporation — progress narratives when ambient conditions improve but material readings at depth remain above dry standard.",
        "Record environmental conditions affecting drying rate — humidity, temperature, and seasonal factors that extend bound-water release timelines.",
        "Describe assembly complexity — multi-layer floors, plaster over masonry, brick veneer cavities, and insulated assemblies requiring longer duration.",
        "Build daily documentation supporting continued drying — each active day requires log entries, readings at all active points, and narrative explaining why dry standard is not yet met.",
      ],
      notes:
        "See the Water Mitigation Invoice Defense Guide for indexed packet structure and pre-invoice reconciliation when extended Class 4 duration is disputed.",
    },
    {
      id: "labor-requirements",
      title: "Document Labor Requirements",
      actions: [
        "Setup — equipment and specialty system installation photos with timestamps matching dry log setup rows and chamber design on the moisture map.",
        "Specialty equipment installation — injectidry panel mounting, floor mat layout, desiccant ducting, and heat system configuration with dated proof.",
        "Monitoring — one log entry per billed visit day with technician name, readings at all active low-permeance points, and equipment operation verification.",
        "Equipment relocation — photos and log entries when mats, injectidry points, or dehumidifiers move mid-job with scope justification.",
        "Containment — installation and modification photos tied to labor hours and negative air setup on isolated Class 4 chambers.",
        "Access challenges — document occupied-property coordination, furniture moves, and restricted access that extend monitoring and setup labor.",
        "Material-specific handling — hardwood pad removal, plaster probe access, concrete surface prep, and subfloor exposure with before-and-after photos.",
      ],
    },
    {
      id: "carrier-challenges",
      title: "Common Carrier Challenges",
      actions: [
        "Drying days reduced — carriers apply Class 1–2 templates when logs lack daily readings, progress narratives, or terminal verification at low-permeance points; indexed chronology defends extended duration.",
        "Equipment removed — specialty system lines cut when placement photos, dry log rows, and peak deployment proof are absent; reconcile billed quantities to photo-verified counts before submission.",
        "Class 4 questioned — classification downgraded when intake material photos and baseline readings do not support low-permeance assignment; contemporaneous intake evidence prevents template downgrade.",
        "Labor reduced — setup, specialty installation, and monitoring hours trimmed when production cannot be traced to dated photos and log entries tied to map references.",
        "Specialty equipment denied — injectidry, desiccant, heat, and floor mat lines challenged without placement proof and dry log cross-reference; equipment documentation closes these disputes.",
      ],
    },
    {
      id: "documentation-mistakes",
      title: "Common Documentation Mistakes",
      actions: [
        "Missing initial readings — no baseline moisture values on low-permeance materials before equipment set; carriers apply shorter templates without intake proof.",
        "Weak moisture maps — point IDs absent, inconsistent between visits, or missing material-specific segmentation for hardwood, plaster, and concrete zones.",
        "Missing daily monitoring — gaps between billed visit days and log entries; partial readings at some points but not all active low-permeance assemblies.",
        "Missing equipment documentation — specialty system placement photos absent or undated; dry log rows do not match billed injectidry, desiccant, or mat days.",
        "Weak narratives — extended drying explained only at invoice without contemporaneous plateau notes in daily logs.",
        "Missing final verification — equipment pulled before terminal readings at all active map points on bound assemblies; last-day cuts follow.",
        "Documentation not matching invoice — billed specialty equipment days, monitoring visits, or labor hours exceed logged and photographed production.",
      ],
    },
    {
      id: "complete-documentation-package",
      title: "Build a Complete Class 4 Documentation Package",
      actions: [
        "Initial inspection — category/class assignment, source control, and material identification with intake photos.",
        "Photos — labeled, timestamped sequences at intake, specialty equipment setup, daily progress, and closeout clearance.",
        "Material identification — type, location, assembly notes, and initial conditions for every low-permeance surface.",
        "Moisture maps — baseline before equipment set, daily updates, material-specific readings, and final verification.",
        "Daily monitoring — one documented visit per billed day with readings at all active map points and environmental conditions.",
        "Dry logs — chronological entries for every active drying day with equipment rows and progress narratives.",
        "Equipment logs — placement photos, specialty system proof, and dry log cross-reference to billed quantities.",
        "Specialty equipment documentation — injectidry, floor mats, desiccant, heat, and containment with dated setup and change photos.",
        "Labor notes — setup, installation, monitoring, relocation, containment, and material-specific handling tied to evidence.",
        "Final dry verification — terminal readings, equipment pull date, and clearance photos matching last log entry.",
        "Invoice support narrative — cross-reference table linking each billed line to dated evidence before submission.",
      ],
      notes:
        "Class 4 drying claims are won through documentation. When contractors can demonstrate material conditions, drying progression, equipment necessity, and complete monitoring records, they place themselves in the strongest position to recover appropriate payment.",
    },
    {
      id: "supplement-support",
      title: "When Class 4 Drying Supports a Supplement",
      actions: [
        "Extended drying duration — resubmit daily logs and progress narratives showing readings above dry standard through disputed days on low-permeance assemblies.",
        "Additional monitoring — indexed visit records with readings at all active map points when billed days exceed carrier-approved template.",
        "Specialty drying systems — placement photos, equipment logs, and dry log rows defending injectidry, desiccant, heat, and floor mat lines removed at desk review.",
        "Additional labor — photos and time notes tying setup, specialty installation, relocation, and access labor to documented production scope.",
        "Equipment justification — moisture map chamber design, material-specific readings, and peak deployment proof supporting supplemental air mover, dehumidifier, and specialty unit counts.",
      ],
      notes:
        "Supplement arguments require indexed evidence cross-referenced to disputed lines — not narrative alone. Claims Ninja supports contractors with documentation review and supplement preparation; outcomes depend on carrier program, file specifics, and evidence quality.",
    },
  ],
  qualityGates: [
    {
      id: "intake-class-supported",
      label: "Class 4 classification supported at intake",
      required: true,
      detail:
        "Material photos, assembly notes, and baseline moisture readings on low-permeance surfaces documented before equipment set.",
    },
    {
      id: "maps-material-specific",
      label: "Moisture maps include material-specific point IDs",
      required: true,
      detail:
        "Reading points assigned to hardwood, plaster, concrete, and subfloor assemblies with consistent IDs through terminal readings.",
    },
    {
      id: "daily-logs-complete",
      label: "Daily monitoring and dry logs complete for every active day",
      required: true,
      detail:
        "No gaps between billed drying days and log entries; readings at all active map points on each visit.",
    },
    {
      id: "specialty-equipment-documented",
      label: "Specialty equipment placement documented",
      required: true,
      detail:
        "Photos and dry log rows for injectidry, floor mats, desiccant, heat, and containment matching billed quantities.",
    },
    {
      id: "extended-drying-narrated",
      label: "Extended drying supported by contemporaneous narratives",
      required: true,
      detail:
        "Progress notes when readings plateau in bound assemblies explain why additional days remain necessary.",
    },
    {
      id: "terminal-verification",
      label: "Final dry verification on all low-permeance points",
      required: true,
      detail:
        "Terminal readings compared to dry standard before equipment pull; clearance photos match last log entry.",
    },
    {
      id: "invoice-reconciled",
      label: "Documentation reconciled to invoice before submission",
      required: true,
      detail:
        "Cross-reference table links each billed line to dated photos, maps, logs, and equipment proof.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Missing initial readings on low-permeance materials",
      impact:
        "Carriers apply shorter drying templates when baseline moisture on hardwood, plaster, or concrete is undocumented at intake.",
      correction:
        "Capture material-specific baseline readings and photos before equipment set; assign map point IDs used through closeout.",
    },
    {
      mistake: "Weak moisture maps without material segmentation",
      impact:
        "Extended duration and specialty equipment lines challenged when maps do not distinguish assembly types and reading points.",
      correction:
        "Segment chambers by material type; maintain dated map revisions when scope expands to hidden cavities or subfloors.",
    },
    {
      mistake: "Missing daily monitoring on active drying days",
      impact:
        "Drying days and visit charges cut proportionally when log gaps exist between billed equipment or monitoring days.",
      correction:
        "Complete one dry log entry and monitoring record per active day with readings at every active low-permeance point.",
    },
    {
      mistake: "Undocumented specialty drying equipment",
      impact:
        "Injectidry, desiccant, heat, and floor mat lines removed when placement photos and dry log rows are absent.",
      correction:
        "Photograph specialty system setup and configuration changes; reconcile equipment logs to billed quantities before invoice.",
    },
    {
      mistake: "Weak narratives without daily progress notes",
      impact:
        "Extended Class 4 duration disputed when plateau periods lack contemporaneous explanation in daily logs.",
      correction:
        "Document drying progression narratives on every visit when readings remain above dry standard on bound assemblies.",
    },
    {
      mistake: "Documentation not matching invoice",
      impact:
        "Proportional reductions on equipment, monitoring, labor, and specialty lines when billed quantities exceed logged proof.",
      correction:
        "Office pre-invoice reconciliation cross-references each line to dated evidence before submission.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Carrier reduces Class 4 drying days below logged duration",
      documentation:
        "Resubmit daily logs with material-specific readings, progress narratives on plateaus, and terminal verification showing dry standard not met until disputed last day.",
      lineItemHint: "Additional drying days, extended equipment rental, daily monitoring visits",
    },
    {
      trigger: "Specialty drying equipment lines removed at desk review",
      documentation:
        "Placement photos, equipment logs, dry log rows, and moisture map chamber design cross-referenced to injectidry, desiccant, heat, and floor mat lines.",
      lineItemHint: "Injectidry, desiccant dehumidifiers, heat drying, floor mat systems",
    },
    {
      trigger: "Class 4 classification downgraded at invoice review",
      documentation:
        "Intake material photos, assembly notes, baseline readings on low-permeance surfaces, and daily logs supporting original classification.",
      lineItemHint: "Extended duration, specialty equipment, additional monitoring",
    },
    {
      trigger: "Labor for specialty setup and monitoring reduced",
      documentation:
        "Timestamped photos, access logs, and dry log entries tying setup, installation, relocation, and monitoring hours to documented scope.",
      lineItemHint: "Setup labor, specialty equipment installation, monitoring visits, containment",
    },
    {
      trigger: "Hidden bound water discovered mid-job requiring scope expansion",
      documentation:
        "Contemporaneous discovery photos, revised moisture map with new point IDs, and supplemental dry log entries from discovery date forward.",
      lineItemHint: "Supplemental mapping, additional equipment, extended monitoring, demolition access",
    },
  ],
  relatedResources: [
    {
      label: "Moisture Mapping Guide",
      href: "/resources/guides/water-damage/moisture-mapping-guide",
    },
    {
      label: "Daily Monitoring Guide",
      href: "/resources/guides/water-damage/daily-monitoring-guide",
    },
    {
      label: "Equipment Documentation Guide",
      href: "/resources/guides/water-damage/equipment-documentation-guide",
    },
    {
      label: "Water Mitigation Invoice Defense Guide",
      href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
    },
    {
      label: "Dry Log Collection Guide",
      href: "/resources/guides/water-damage/dry-log-collection-guide",
    },
    {
      label: "Category 3 Water Damage Documentation Guide",
      href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
    },
    {
      label: "Moisture mapping mistakes that cost contractors money",
      href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
    },
    {
      label: "How carriers reduce drying days",
      href: "/resources/blog/how-carriers-reduce-drying-days",
    },
    {
      label: "Claims Ninja platform",
      href: "/platform",
    },
  ],
});
