import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/water-damage" as const;
const CATEGORY = "water-damage" as const;
const GUIDE_SLUG = "commercial-water-loss-documentation-guide" as const;

export const COMMERCIAL_WATER_LOSS_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Commercial Water Loss Documentation Guide",
  excerpt:
    "Learn how restoration contractors document commercial water losses, multifamily projects, apartment losses, retail properties, office buildings, and large-loss mitigation jobs to support insurance recovery and claim success.",
  category: CATEGORY,
  guideType: "documentation-standard",
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Commercial water loss",
    "Multifamily",
    "Apartment",
    "Large loss",
    "Tenant impact",
    "Business interruption",
    "Moisture mapping",
    "Dry logs",
    "Water mitigation documentation",
    "Restoration contractors",
  ],
  publishedAt: "2026-06-16",
  updatedAt: "2026-06-16",
  estimatedMinutes: 24,
  seoTitle:
    "Commercial Water Loss Documentation Guide | Contractor Documentation Standards",
  seoDescription:
    "Learn how to document commercial water losses, multifamily projects, apartment losses, retail properties, and large-loss mitigation jobs to support insurance recovery and claim success.",
  relatedGuideSlugs: [
    "commercial-insurance-claims-documentation-guide",
    "large-loss-commercial-insurance-claims-guide",
    "multifamily-apartment-insurance-claims-guide",
    "retail-office-insurance-claims-guide",
    "hoa-insurance-claims-guide",
    "industrial-warehouse-insurance-claims-guide",
    "water-mitigation-invoice-defense-guide",
    "category-3-water-damage-documentation-guide",
    "commercial-fire-claims-guide",
    "fire-code-upgrade-documentation-guide",
    "moisture-mapping-guide",
    "dry-log-collection-guide",
    "daily-monitoring-guide",
    "equipment-documentation-guide",
    "category-class-documentation-guide",
    "fire-damage-documentation-guide",
    "smoke-soot-damage-documentation-guide",
    "contents-inventory-documentation-guide",
    "pack-out-documentation-guide",
    "mold-damage-documentation-guide",
    "mold-remediation-documentation-guide",
    "post-remediation-verification-documentation-guide",
    "commercial-mold-claims-guide",
  ],
  relatedBlogSlugs: [
    "commercial-claims-documentation-checklist",
    "why-commercial-insurance-claims-get-underpaid",
    "why-category-3-water-claims-get-underpaid",
    "moisture-mapping-mistakes-that-cost-contractors-money",
    "how-carriers-reduce-drying-days",
    "equipment-charges-that-get-cut-from-water-claims",
    "documentation-gaps-that-trigger-water-claim-denials",
    "water-damage-supplement-denial-recovery",
    "water-damage-documentation-for-apartment-complexes",
    "multifamily-water-claims-that-get-underpaid",
  ],
  faqIds: [
    "water-commercial-claims-documentation",
    "water-apartment-loss-documentation",
    "water-multifamily-loss-documentation",
    "water-commercial-claims-scrutiny",
    "water-commercial-mitigation-package",
    "water-tenant-impact-documentation",
    "water-business-interruption-documentation",
    "water-commercial-claims-underpaid",
    "water-final-mitigation-package",
    "water-mitigation-file-documentation",
    "water-claim-denied-documentation",
    "water-equipment-charge-reductions",
    "water-apartment-complex-documentation",
    "water-apartment-unit-separate-tracking",
    "water-apartment-equipment-usage-documentation",
    "water-apartment-mitigation-claims-disputed",
    "water-apartment-tenant-impact-required",
    "water-mitigation-invoice-reductions",
    "water-mitigation-invoice-documentation",
    "water-mitigation-invoice-review-failures",
    "water-commercial-documentation-missing",
    "water-commercial-invoice-reduced-why",
    "water-commercial-tenant-impact-required",
    "water-commercial-common-area-documentation",
    "water-commercial-documentation-invoice-match",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["water-damage", "mitigation", "commercial"],
  purpose:
    "This guide is built for commercial restoration contractors, water mitigation teams, large-loss project managers, and supplement coordinators who document office, retail, industrial, multifamily, and apartment water losses for carrier desk review. Commercial and large-loss files face higher scrutiny on equipment utilization, tenant coordination, business interruption overlap, and multi-chamber drying scope. Strong documentation defends mitigation invoices, supports phased supplements, and improves recovery when carriers apply residential templates to commercial footprints. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Retail, office, or industrial water loss with multi-zone drying",
      signal:
        "Multiple chambers, large square footage, or after-hours production requiring asset-tag tracking and phased documentation",
    },
    {
      condition: "Multifamily or apartment complex with vertical or horizontal migration",
      signal:
        "Multiple units affected, tenant access constraints, or property management coordination required from day one",
    },
    {
      condition: "Large-loss mitigation mobilization with dedicated project management",
      signal:
        "Documentation plan, daily reporting cadence, and equipment inventory at scale before carrier walkthrough",
    },
    {
      condition: "Carrier or third-party reviewer requests commercial mitigation documentation package",
      signal:
        "Documentation request, underpayment notice, business interruption overlap review, or supplement denial on commercial lines",
    },
  ],
  prerequisites: [
    "Commercial documentation plan template with folder index and naming convention",
    "Asset-tag or equipment-ID workflow for large equipment deployments",
    "Tenant impact log template for multifamily and occupied commercial properties",
    "Multi-chamber moisture map standards aligned with dry log and equipment documentation guides",
    "Project manager assigned for daily file review on losses exceeding single-dwelling scope",
  ],
  requiredDocumentation: [
    {
      id: "initial-loss-intake",
      label: "Initial loss documentation and site control",
      required: true,
      detail:
        "Document arrival conditions, site access protocols, standing water extent, safety hazards, and emergency scope performed on day one. Record property type, occupancy status, after-hours access requirements, and key contacts — property manager, building engineer, tenant coordinator. Commercial intake establishes the file baseline carriers compare to template residential scopes.",
    },
    {
      id: "building-documentation-plan",
      label: "Building documentation plan for large losses",
      required: true,
      detail:
        "Publish a written documentation plan before mobilization scales: folder structure, photo naming convention, map revision schedule, daily reporting cadence, equipment asset-tag protocol, and responsible roles for field, office, and supplement coordination. Large-loss files without a plan produce inconsistent evidence that desk reviewers discount at proportional rates.",
    },
    {
      id: "moisture-mapping-large-facility",
      label: "Moisture mapping for large facilities",
      required: true,
      detail:
        "Produce zone- or floor-level maps with reading point IDs, baseline moisture values, wet-dry boundaries, and chamber design for each drying zone. Reconcile map room and zone labels to the carrier sketch, property management floor plans, and estimate line items. Large facilities require map revisions when scope expands across suites, units, or vertical assemblies.",
    },
    {
      id: "multifamily-unit-documentation",
      label: "Apartment and multifamily unit documentation",
      required: true,
      detail:
        "Document each affected unit with unique identifier — unit number, floor, stack position — and separate photo sequences, moisture maps, and dry logs where units are isolated chambers. Record common-area versus in-unit scope separately. Multifamily losses fail desk review when unit-level evidence is merged into a single residential-style file.",
    },
    {
      id: "tenant-impact-log",
      label: "Tenant impact documentation",
      required: true,
      detail:
        "Maintain a tenant impact log: relocation or habitability notices, access restrictions, coordination with property management, contents disruption, and communication timestamps. Photograph unit entry conditions and tenant-affected areas with consent protocols documented. Tenant impact records support habitability, relocation, and business interruption overlap arguments when carriers separate mitigation from occupancy claims.",
    },
    {
      id: "equipment-at-scale",
      label: "Equipment documentation at scale",
      required: true,
      detail:
        "Photograph equipment placement by zone with asset tags or unit IDs visible. Log equipment type, count, and location on dry logs indexed to chambers — desiccant, LGR, air movers, air scrubbers, and temporary power where billed. Large deployments require reconciliation between field photos, rental invoices, and daily utilization rows before invoice submission.",
    },
    {
      id: "daily-monitoring-records",
      label: "Daily monitoring and dry log records",
      required: true,
      detail:
        "Complete dry log entries on every active drying day for each chamber with atmospheric readings, material moisture values, equipment rows, visit purpose, and technician identification. Add progress narratives when readings plateau or equipment changes extend duration. Commercial files with monitoring gaps between zones are commonly reduced proportionally at desk review.",
    },
    {
      id: "containment-hepa-records",
      label: "Containment and HEPA filtration documentation",
      required: true,
      detail:
        "Document containment barriers, negative air setup, and HEPA air scrubber placement with dated photos per chamber or unit. Log scrubber runtime on dry logs and note isolation from occupied zones in multifamily or partially operational commercial buildings. Containment scope on mixed-occupancy losses requires boundary photos tied to reading points at isolation perimeters.",
    },
    {
      id: "contents-commercial",
      label: "Contents documentation considerations",
      required: true,
      detail:
        "Inventory commercial contents, tenant personal property, and stock affected by water or manipulation separately from structural mitigation. Document before-and-after conditions, move-out or protection scope, and hours for contents manipulation where billed. Retail and office losses often combine structural drying with contents disruption — file separation prevents carrier confusion at review.",
    },
    {
      id: "business-interruption-support",
      label: "Business interruption documentation support",
      required: true,
      detail:
        "Record operational impact contemporaneously: areas closed to business, production downtime, after-hours mitigation requirements, and coordination with insured operations. Mitigation documentation does not replace BI coverage analysis, but dated photos, access logs, and phased release notes help insureds and adjusters align drying scope with business continuity timelines.",
    },
    {
      id: "final-mitigation-package",
      label: "Final commercial mitigation documentation package",
      required: true,
      detail:
        "Assemble an indexed packet: documentation plan, intake records, maps, chronological dry logs, equipment proof, containment records, tenant log, contents notes, terminal readings, and equipment pull documentation. Cross-reference each billed line to supporting evidence. Commercial closeout packages require zone-level indexing — not a single residential-style photo dump.",
    },
  ],
  steps: [
    {
      id: "commercial-vs-residential-water-claims",
      title: "Commercial vs Residential Water Claims",
      actions: [
        "Residential water claims typically involve single-dwelling scope — limited room count, one drying chamber, and a carrier sketch that maps directly to field photos and dry logs.",
        "Commercial water claims expand footprint, occupancy, and review complexity: multiple suites or units, mixed-use assemblies, after-hours access, tenant coordination, and equipment deployments that exceed residential drying macros.",
        "Carriers and third-party reviewers often apply residential documentation expectations to commercial files — contractors who treat a 40,000-square-foot retail loss like a single-family intake invite proportional scope reductions.",
        "Commercial documentation must scale evidence to property type: zone-level maps, asset-tagged equipment, tenant logs, and phased reporting that desk reviewers can forward without reconstructing the job from narrative.",
        "The operational difference is organizational — same IICRC fundamentals, higher evidence volume, stricter reconciliation between field production and billed lines across multiple chambers and stakeholders.",
      ],
    },
    {
      id: "why-commercial-documentation-standards-are-higher",
      title: "Why Commercial Documentation Standards Are Higher",
      actions: [
        "Higher invoice totals trigger specialist desk review, third-party audit, and line-by-line reconciliation — weak documentation on any zone can cascade into proportional reductions across the file.",
        "Multiple stakeholders — property managers, tenants, building engineers, carrier large-loss adjusters — require contemporaneous records that survive handoffs and delayed walkthroughs.",
        "Equipment utilization at scale is a primary dispute vector: desiccant, temporary power, commercial dehumidification, and monitoring visits are scrutinized against placement photos and daily logs, not estimate assumptions alone.",
        "Business interruption, habitability, and contents overlap create coverage boundaries — mitigation documentation must clearly separate structural drying evidence from insured operational impact without conflating claim types.",
        "Phased supplements and multi-trade coordination are common on commercial losses — documentation organized by zone and date supports incremental submission when carriers cap initial approvals.",
      ],
    },
    {
      id: "initial-loss-documentation-requirements",
      title: "Initial Loss Documentation Requirements",
      actions: [
        "Document property type, occupancy, square footage affected, and access constraints before extraction alters conditions — retail after hours, office during business, multifamily with tenant schedules.",
        "Capture source identification, stop-work evidence, and initial water category and class assignment with photos tied to the carrier sketch or property management floor plan.",
        "Record emergency scope on day one: extraction volume, initial demolition boundaries, contents protection, and stabilization actions performed before equipment mobilization scales.",
        "Identify key contacts and communication log entries — property manager authorization, tenant notification, building engineer shutoffs — contemporaneous notes beat retroactive coordination narratives.",
        "Open the claim file with consistent zone or unit naming that will carry through maps, dry logs, photos, and estimate line items through closeout.",
      ],
    },
    {
      id: "building-documentation-plans-for-large-losses",
      title: "Building Documentation Plans for Large Losses",
      actions: [
        "Assign a project manager or documentation lead before field teams multiply — large losses without a documentation owner produce inconsistent folder structures and missed daily entries.",
        "Publish a written plan within the first 24 hours: folder index, photo naming convention, map revision triggers, daily reporting schedule, and roles for field capture versus office reconciliation.",
        "Define chamber or zone boundaries in the plan — how suites, units, or floor levels map to separate dry logs, equipment inventories, and supplement phases.",
        "Schedule carrier and property management walkthrough documentation — pre-mobilization baseline photos and scope boundaries before production exceeds what adjusters can verify on delayed inspections.",
        "Review the plan daily against actual production — update when scope expands vertically, horizontally, or into common areas not captured at intake.",
      ],
    },
    {
      id: "moisture-mapping-large-facilities",
      title: "Moisture Mapping Large Facilities",
      actions: [
        "Produce floor- or zone-level maps with reading point IDs assigned at intake — use the same IDs on every visit through terminal readings for each chamber.",
        "Document wet-dry boundaries at corridor transitions, demising walls, and vertical assemblies — commercial migration often spans multiple suites before standing water is visible in adjacent zones.",
        "Record baseline moisture values before equipment set in every active chamber — post-drying baselines cannot support initial scope arguments on large footprints.",
        "Revise maps when scope expands — new units, ceiling cavities, or HVAC pathways require dated map updates cross-referenced to supplement triggers and daily log narratives.",
        "Align map labels to property management floor plans and carrier sketches — mismatched room names are a common reason desk reviewers exclude undocumented zones from approved scope.",
      ],
      notes:
        "See the Moisture Mapping Guide for field procedure detail; commercial losses require zone-level map indexing beyond single-dwelling intake patterns.",
    },
    {
      id: "apartment-and-multifamily-documentation-standards",
      title: "Apartment and Multifamily Documentation Standards",
      actions: [
        "Treat each affected unit as a documentable chamber — unit number, floor, and stack position on every photo label, map point, and dry log header.",
        "Separate in-unit scope from common-area scope — hallways, laundry rooms, and mechanical closets require distinct photo sequences and map zones from tenant units.",
        "Document vertical migration with ceiling, floor, and wall cavity readings at stack boundaries — multifamily losses commonly expand across floors before carriers authorize additional units.",
        "Coordinate with property management on access schedules — log entry times, units accessed, and units deferred with reason codes to support monitoring visit billing.",
        "Maintain unit-level closeout readings and equipment pull dates — merging multifamily evidence into one residential-style log invites proportional reductions across all billed units.",
      ],
    },
    {
      id: "tenant-impact-documentation",
      title: "Tenant Impact Documentation",
      actions: [
        "Open a tenant impact log at mobilization — record notices delivered, relocation coordination, habitability assessments, and access restrictions with dates and responsible parties.",
        "Photograph tenant-affected areas with unit identifiers and entry conditions — document consent or property-management authorization for access where required.",
        "Record contents disruption, move-out scope, and protection measures separately from structural mitigation — tenant personal property lines require distinct before-and-after evidence.",
        "Log communication with tenants and property management — timestamps, scope explained, and follow-up actions support habitability and relocation overlap discussions without replacing coverage analysis.",
        "Align tenant log entries to unit-level mitigation documentation — desk reviewers evaluate whether production in occupied buildings matches access and coordination records.",
      ],
    },
    {
      id: "equipment-documentation-at-scale",
      title: "Equipment Documentation at Scale",
      actions: [
        "Deploy asset tags or unit IDs on commercial equipment — photograph each placement with tag visible, zone labeled, and date stamped matching dry log entries.",
        "Log equipment type, count, and chamber assignment on every active drying day — desiccant, LGR, axial fans, air scrubbers, and temporary power require utilization proof at commercial scale.",
        "Document equipment moves, additions, and partial releases with dated photos and dry log rows — mid-job changes without contemporaneous records are commonly cut at invoice review.",
        "Reconcile rental invoices and deployment logs before billing — large-loss equipment lines fail when office totals exceed field-documented counts in any zone.",
        "Cross-reference equipment documentation to moisture map chamber design — dehumidifier count arguments depend on documented cubic footage and isolation perimeters, not estimate macros alone.",
      ],
    },
    {
      id: "daily-monitoring-procedures",
      title: "Daily Monitoring Procedures",
      actions: [
        "Complete monitoring visits for each active chamber on schedule — commercial files with selective zone logging invite proportional monitoring charge reductions.",
        "Record visit purpose, technician name, date, and drying goal status on every trip — routine reading, equipment adjustment, partial release, or closeout evaluation.",
        "Verify equipment operation during each visit — photograph anomalies, adjust counts, and note decisions to extend drying with readings that support the change.",
        "Escalate plateaus and regressions to project management same day — commercial losses with extended duration require progress narratives on the dry log, not explanations at invoice.",
        "Align billed monitoring visits to documented trips — one log entry per billed visit day per active chamber unless carrier program allows consolidated reporting with clear indexing.",
      ],
    },
    {
      id: "dry-logs-and-environmental-tracking",
      title: "Dry Logs and Environmental Tracking",
      actions: [
        "Maintain chronological dry logs for each active chamber — atmospheric readings, material moisture at all map points, equipment rows, and environmental conditions on every drying day.",
        "Use consistent point IDs from the moisture map through terminal readings — commercial files with renamed or missing points weaken extended drying arguments across multiple zones.",
        "Add progress narratives when readings plateau, regress, or require equipment changes — explain why additional days beyond the carrier template are necessary with contemporaneous data.",
        "Track grain depression, relative humidity, and temperature in commercial and desiccant deployments — environmental rows support specialty drying line items at desk review.",
        "Close logs with terminal readings against established dry standards per point — equipment pull dates and clearance notes must match the last active log entry in each chamber.",
      ],
    },
    {
      id: "containment-documentation-requirements",
      title: "Containment Documentation Requirements",
      actions: [
        "Photograph containment installation at chamber boundaries — poly barriers, zipper doors, negative air exhaust routing, and isolation from occupied zones in multifamily or partial-operations commercial buildings.",
        "Document demising wall and corridor isolation where migration risk affects adjacent suites or units — boundary readings at containment perimeters support scope beyond visible standing water.",
        "Record containment moves and expansions with dated photos when scope grows — static intake photos cannot defend mid-job barrier additions at review.",
        "Log containment labor and material on the dry log or job notes with chamber reference — billed containment lines require setup proof tied to documented isolation perimeters.",
        "On mixed Category losses, document zone boundaries where adjacent areas remain lower category — boundary photos and reading points support protocol scope without cross-contamination disputes.",
      ],
    },
    {
      id: "hepa-filtration-and-air-quality-documentation",
      title: "HEPA Filtration and Air Quality Documentation",
      actions: [
        "Photograph HEPA air scrubber placement with chamber boundaries visible — unit count, location, and exhaust routing documented at setup and after any move.",
        "Log scrubber runtime on the dry log for each billed day — filtration lines require utilization proof aligned to containment and Category-sensitive scope.",
        "Document negative air setup where required — exhaust path, pressure differential notes, and isolation from occupied tenant or retail zones on partially operational properties.",
        "Record HEPA vacuuming areas and post-cleaning condition photos where billed — tie air quality procedures to contamination-control narrative and estimate lines.",
        "Align filtration documentation to Category 3 or contaminated-loss protocols where applicable — see Category 3 Water Damage Documentation Guide for contamination-specific requirements on commercial mixed-use losses.",
      ],
    },
    {
      id: "contents-documentation-considerations",
      title: "Contents Documentation Considerations",
      actions: [
        "Separate structural mitigation documentation from contents manipulation, move-out, and protection scope — retail stock, office equipment, and tenant personal property require distinct inventories.",
        "Photograph contents conditions before and after manipulation with zone or unit labels — wide room photos plus detail shots of high-value or high-quantity items at dispute risk.",
        "Document hours, labor, and materials for contents work with contemporaneous job notes — billed contents lines without time and scope records are commonly reduced on commercial files.",
        "Coordinate contents scope with tenant impact log entries — move-outs, packing, and storage require access records aligned to mitigation timeline.",
        "Index contents photos and inventories in the final package separately from structural drying evidence — carriers forward structural and contents sections to different reviewers on large commercial claims.",
      ],
    },
    {
      id: "business-interruption-documentation-considerations",
      title: "Business Interruption Documentation Considerations",
      actions: [
        "Record operational impact contemporaneously — areas closed to business, production lines stopped, retail sections roped off, and after-hours mitigation requirements driven by occupancy.",
        "Document phased release of zones back to operations with dated photos and log entries — partial reopening timelines help insureds align BI narratives with mitigation progress.",
        "Separate mitigation production evidence from insured financial records — contractors document field scope and access; BI coverage analysis remains between insured and carrier.",
        "Log after-hours and overtime production with authorization notes — commercial losses often require night work that must be documented to support labor premiums at review.",
        "Coordinate with project management on insured communication — avoid conflating mitigation invoices with BI settlements; strong mitigation files support the insured's broader claim without overstepping contractor role.",
      ],
    },
    {
      id: "final-documentation-packages",
      title: "Final Documentation Packages",
      actions: [
        "Assemble an indexed commercial mitigation packet: documentation plan, intake records, zone maps, chronological dry logs, equipment proof, containment and HEPA records, tenant log, contents notes, and terminal readings.",
        "Cross-reference each billed line item to supporting documents — equipment days, monitoring visits, containment, demolition, and specialty drying lines each trace to dated evidence in the index.",
        "Organize by zone or phase for large losses — reviewers approve scope they can navigate without reconstructing chronology from unsorted photo folders.",
        "Include equipment pull dates, clearance photos, and final moisture readings per chamber — closeout gaps invite reopening of drying duration disputes on commercial invoices.",
        "Submit structured packages while relationships are active — waiting until rebuild or BI settlement weakens mitigation-only arguments when carriers cap initial approvals.",
      ],
    },
    {
      id: "common-documentation-failures-in-commercial-claims",
      title: "Common Documentation Failures in Commercial Claims",
      actions: [
        "Treating commercial losses with residential file structure — single sketch, one log, undifferentiated photos when multiple zones or units require separate indexing.",
        "Missing documentation plan on large-loss mobilization — inconsistent naming and daily gaps multiply as crew count increases without a documentation owner.",
        "Equipment billed at scale without asset-tag photos and daily utilization rows — proportional cuts across all zones when any chamber lacks placement proof.",
        "Multifamily unit scope merged into common-area logs — desk reviewers exclude undocumented units from approved scope while approving partially supported totals.",
        "Tenant and access records absent on occupied properties — monitoring and habitability lines challenged when production timeline does not match coordination log.",
        "Closeout packages submitted as unsorted photo dumps — terminal readings and equipment pull dates buried in folders carriers will not reconstruct at invoice review.",
      ],
    },
    {
      id: "commercial-claim-recovery-opportunities",
      title: "Commercial Claim Recovery Opportunities",
      actions: [
        "Phased supplements when scope expands across suites, units, or vertical assemblies — submit map revisions, tenant log entries, and daily narratives with each phase rather than one end-of-job narrative.",
        "Equipment additions mid-job — updated maps, placement photos, and dry log rows documenting desiccant, LGR, or air scrubber increases support line-item recovery when carriers cap initial templates.",
        "Extended drying duration — progress narratives with plateau readings across multiple chambers defend monitoring visits and equipment days when carriers apply residential drying macros.",
        "Containment and HEPA scope on mixed-occupancy losses — boundary documentation supports isolation lines when carriers challenge production in partially operational buildings.",
        "Organized resubmission after partial approval — indexed packets cross-referencing disputed lines to zone-level evidence strengthen supplement and denial recovery workflows without guarantee of payment.",
      ],
    },
    {
      id: "large-loss-documentation-best-practices",
      title: "Large-Loss Documentation Best Practices",
      actions: [
        "Assign dedicated project management for documentation quality — daily file review against the documentation plan before office submits to carrier or supplement partner.",
        "Use consistent zone naming from intake through closeout across photos, maps, logs, estimates, and tenant records — one naming convention prevents reconciliation failures at scale.",
        "Report daily to office with structured field uploads — large crews produce volume that must be indexed same day, not batch-processed at invoice.",
        "Schedule adjuster and property management walkthroughs with pre-walk documentation packets — contemporaneous scope boundaries before production exceeds verifiable conditions.",
        "Leverage supplement coordination early when carrier templates under-scope commercial footprints — documentation organized for phased submission recovers faster than end-of-job assembly.",
        "Partner with documentation review and supplement preparation workflows — Claims Ninja supports commercial file organization, estimate review, and recovery packaging for contractor operations.",
      ],
    },
    {
      id: "documentation-checklist",
      title: "Documentation Checklist",
      actions: [
        "Documentation plan published with folder index, naming convention, and role assignments — verified against actual production daily.",
        "Initial intake complete: source, category/class, property type, access constraints, emergency scope, and key contacts logged.",
        "Zone- or unit-level moisture maps with baseline readings before equipment set — map revisions dated when scope expands.",
        "Tenant impact log active on occupied multifamily or commercial properties — access and communication entries current.",
        "Equipment asset tags photographed per zone — daily dry log equipment rows match field deployment counts.",
        "Daily monitoring entries complete for every active chamber — no gaps between billed visit days.",
        "Containment and HEPA setup documented with runtime logs where billed — boundary photos at isolation perimeters.",
        "Contents and BI-support notes separated from structural drying index — phased where scope spans multiple claim elements.",
        "Terminal readings and equipment pull dates recorded per chamber — final index cross-references each billed line to evidence.",
        "Office pre-invoice reconciliation complete — rental invoices, log totals, and photo counts aligned before submission.",
      ],
    },
    {
      id: "when-supplementing-becomes-necessary",
      title: "When Supplementing Becomes Necessary",
      actions: [
        "File supplements when documented field scope exceeds the carrier estimate or initial approval — zone expansion, additional units, vertical migration, or equipment increases supported by contemporaneous maps and logs.",
        "Submit phased supplements on large losses as scope is discovered — waiting until equipment pull risks carrier caps and weakens chronological evidence chains.",
        "Include tenant log entries, access records, and business continuity notes when supplements involve occupied zones or after-hours production — context supports labor and monitoring lines beyond template scope.",
        "Cross-reference supplement line items to indexed documentation — each disputed line should trace to photos, map points, dry log dates, and equipment proof in the packet.",
        "Engage supplement preparation and denial recovery workflows when documentation is complete but carrier response underpays or partially approves — organized evidence strengthens resubmission; outcomes depend on carrier program and file specifics.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "documentation-plan-active",
      label: "Documentation plan published and reviewed daily against production",
      required: true,
      detail:
        "Large-loss mobilization requires a written plan reviewed by project management against actual field production daily.",
    },
    {
      id: "zone-naming-consistent",
      label: "Zone or unit naming consistent across photos, maps, logs, and estimate",
      required: true,
      detail:
        "Suite, unit, or floor labels must match on every document through closeout — mismatched names trigger scope exclusions.",
    },
    {
      id: "maps-baseline-complete",
      label: "Baseline moisture maps complete for every active chamber before equipment set",
      required: true,
      detail:
        "Each zone or unit requires baseline readings before equipment deployment — post-drying baselines cannot support initial scope.",
    },
    {
      id: "tenant-log-current",
      label: "Tenant impact log current on occupied multifamily or commercial properties",
      required: true,
      detail:
        "Access and coordination entries must align with monitoring visit dates on occupied properties.",
    },
    {
      id: "equipment-reconciled",
      label: "Equipment photos and dry log rows reconciled to deployment counts daily",
      required: true,
      detail:
        "Asset-tag photos and log rows must match billed equipment counts in every active zone before invoice submission.",
    },
    {
      id: "monitoring-no-gaps",
      label: "No gaps between billed monitoring days and documented visits per chamber",
      required: true,
      detail:
        "Each billed monitoring day requires a dated log entry with readings for every active map point in that chamber.",
    },
    {
      id: "containment-hepa-documented",
      label: "Containment and HEPA scope documented with setup photos and runtime logs",
      required: true,
      detail:
        "Barrier setup and scrubber runtime must be documented where containment and filtration lines are billed.",
    },
    {
      id: "closeout-indexed",
      label: "Terminal readings and indexed closeout packet complete before final invoice",
      required: true,
      detail:
        "Cross-reference table links each billed line to dated zone-level evidence before final mitigation invoice submission.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Residential file structure on commercial footprint",
      impact:
        "Desk reviewers apply proportional reductions when multi-zone or multi-unit evidence is undifferentiated — undocumented suites and units excluded from approved scope.",
      correction:
        "Adopt zone-level indexing from intake: separate maps, logs, and photo folders per chamber with consistent naming through closeout.",
    },
    {
      mistake: "No documentation plan on large-loss mobilization",
      impact:
        "Inconsistent daily entries and folder chaos multiply as crew count grows — office cannot reconcile equipment or monitoring totals at invoice.",
      correction:
        "Publish a written documentation plan within 24 hours with roles, naming conventions, and daily reporting cadence reviewed by project management.",
    },
    {
      mistake: "Equipment billed without asset-tag placement proof",
      impact:
        "Commercial equipment lines cut proportionally when any zone lacks dated photos and dry log rows matching billed counts.",
      correction:
        "Photograph every deployment with asset tag and zone label; reconcile rental invoices to field logs before billing.",
    },
    {
      mistake: "Multifamily units merged into single log",
      impact:
        "Carriers approve partial unit scope while disputing billed totals — unit-level evidence gaps trigger denials on unaffected-unit lines.",
      correction:
        "Maintain separate dry logs, maps, and photo sequences per unit with unit number on every label.",
    },
    {
      mistake: "Missing tenant and access records on occupied properties",
      impact:
        "Monitoring, habitability, and after-hours labor lines challenged when production timeline does not match coordination documentation.",
      correction:
        "Open tenant impact log at mobilization; log every access event with date, unit, and authorization source.",
    },
    {
      mistake: "Unsorted closeout photo dump without index",
      impact:
        "Terminal readings and equipment pull dates buried in folders — carriers reopen drying duration disputes at final invoice review.",
      correction:
        "Submit indexed closeout packet with cross-reference table linking each billed line to dated evidence by zone.",
    },
    {
      mistake: "Supplement narrative without zone-level evidence",
      impact:
        "Phased scope additions denied when maps, logs, and photos do not contemporaneously support expansion beyond initial approval.",
      correction:
        "File supplements with dated map revisions, daily narratives, and equipment proof tied to each new zone or unit.",
    },
    {
      mistake: "Business interruption conflated with mitigation invoice",
      impact:
        "Carrier confusion and coverage disputes when contractor documentation overreaches into insured BI analysis.",
      correction:
        "Document field scope and operational impact contemporaneously; separate mitigation packet from insured financial BI records.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Scope expands across suites, units, or vertical assemblies after intake",
      documentation:
        "Dated map revisions, unit-level photos, tenant log entries, and daily narratives documenting discovery timeline — phased supplement per zone rather than end-of-job narrative.",
      lineItemHint:
        "Additional units, vertical migration demo, common-area scope, extended monitoring per chamber",
    },
    {
      trigger: "Carrier template under-scopes commercial equipment deployment",
      documentation:
        "Asset-tag placement photos, dry log equipment rows, rental invoices, and chamber design from moisture maps supporting desiccant, LGR, and air scrubber counts.",
      lineItemHint:
        "Commercial dehumidification, desiccant, air scrubbers, temporary power, equipment setup",
    },
    {
      trigger: "Extended drying duration across multiple chambers",
      documentation:
        "Progress narratives with plateau readings, equipment change records, and environmental logs per zone — defend monitoring visits beyond residential drying macros.",
      lineItemHint:
        "Additional drying days, daily monitoring visits, extended equipment rental per chamber",
    },
    {
      trigger: "Containment and HEPA scope on partially occupied commercial or multifamily property",
      documentation:
        "Barrier setup photos, negative air notes, scrubber runtime logs, and boundary readings at isolation perimeters tied to mixed-occupancy conditions.",
      lineItemHint:
        "Containment barriers, HEPA air scrubber, negative air exhaust, after-hours labor",
    },
    {
      trigger: "After-hours or overtime production required by occupancy constraints",
      documentation:
        "Tenant impact log, property management authorization, access schedules, and dated photos documenting night or weekend production tied to operational requirements.",
      lineItemHint: "After-hours labor premium, overtime monitoring, phased release coordination",
    },
    {
      trigger: "Documentation complete but carrier underpaid or partially approved commercial mitigation",
      documentation:
        "Indexed claim packet cross-referencing zone-level evidence to each disputed line — packaged for supplement submission and denial recovery resubmission.",
      lineItemHint:
        "Supplement submission with line-item justification; Claims Ninja supports documentation review, supplement preparation, and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "How is commercial water loss documentation different from residential?",
      answer:
        "Commercial documentation scales evidence to property footprint and occupancy: zone-level moisture maps, asset-tagged equipment inventories, tenant impact logs, multi-chamber dry logs, and indexed closeout packages. Residential file patterns — single sketch, one log, undifferentiated photos — fail desk review on retail, office, and multifamily losses where carriers reconcile equipment and monitoring lines across multiple chambers.",
    },
    {
      question: "What should a commercial mitigation documentation plan include?",
      answer:
        "Folder index, photo naming convention, map revision schedule, daily reporting cadence, equipment asset-tag protocol, zone or unit naming standards, tenant log workflow, and assigned roles for field capture, office reconciliation, and supplement coordination. Publish the plan within 24 hours of large-loss mobilization and review it daily against actual production.",
    },
    {
      question: "How should contractors document multifamily water losses?",
      answer:
        "Treat each affected unit as a separate chamber with unit number on every photo, map point, and dry log entry. Separate common-area scope from in-unit production. Maintain tenant impact and access logs aligned to monitoring visits. Unit-level closeout readings and equipment pull dates prevent proportional reductions when carriers cannot verify scope per billed unit.",
    },
    {
      question: "When should commercial water claims be supplemented?",
      answer:
        "Supplement when documented field scope exceeds carrier estimate or initial approval — zone expansion, additional units, equipment increases, extended drying, or containment scope on occupied properties. Submit phased supplements with contemporaneous maps, logs, and photos rather than narrative assembled after equipment pull. Organized evidence strengthens recovery arguments; outcomes depend on carrier program and file specifics.",
    },
  ],
  relatedResources: [
    {
      label: "Large-Loss Commercial Insurance Claims Guide",
      href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
    },
    {
      label: "Multifamily & Apartment Insurance Claims Guide",
      href: "/resources/guides/general-claims/multifamily-apartment-insurance-claims-guide",
    },
    {
      label: "HOA Insurance Claims Guide for Contractors",
      href: "/resources/guides/general-claims/hoa-insurance-claims-guide",
    },
    {
      label: "Industrial & Warehouse Insurance Claims Guide",
      href: "/resources/guides/general-claims/industrial-warehouse-insurance-claims-guide",
    },
    {
      label: "Retail & Office Commercial Insurance Claims Guide",
      href: "/resources/guides/general-claims/retail-office-insurance-claims-guide",
    },
    {
      label: "Commercial Fire Claims Guide",
      href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
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
      label: "Moisture Mapping Guide",
      href: "/resources/guides/water-damage/moisture-mapping-guide",
    },
    {
      label: "Dry Log Collection Guide",
      href: "/resources/guides/water-damage/dry-log-collection-guide",
    },
    {
      label: "Daily Monitoring Guide",
      href: "/resources/guides/water-damage/daily-monitoring-guide",
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
      label: "Equipment Documentation Guide",
      href: "/resources/guides/water-damage/equipment-documentation-guide",
    },
    {
      label: "Category/Class Documentation Guide",
      href: "/resources/guides/water-damage/category-class-documentation-guide",
    },
    {
      label: "Why Category 3 Water Claims Get Underpaid",
      href: "/resources/blog/why-category-3-water-claims-get-underpaid",
    },
    {
      label: "Moisture Mapping Mistakes That Cost Contractors Money",
      href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
    },
    {
      label: "How Carriers Reduce Drying Days",
      href: "/resources/blog/how-carriers-reduce-drying-days",
    },
    {
      label: "Equipment Charges That Get Cut From Water Claims",
      href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
    },
    {
      label: "Documentation Gaps That Trigger Water Claim Denials",
      href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
    },
    {
      label: "Water Damage Supplement Denial Recovery",
      href: "/resources/blog/water-damage-supplement-denial-recovery",
    },
    { label: "Water damage solutions", href: SOLUTION_PATH },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "AI claim analysis", href: "/platform/ai-claim-analysis" },
    { label: "Contact", href: "/contact" },
  ],
});
