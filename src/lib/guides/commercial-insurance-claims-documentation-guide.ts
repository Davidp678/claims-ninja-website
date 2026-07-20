import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/commercial" as const;
const CATEGORY = "general-claims" as const;
const GUIDE_SLUG = "commercial-insurance-claims-documentation-guide" as const;

export const COMMERCIAL_INSURANCE_CLAIMS_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Commercial Insurance Claims Documentation Guide for Contractors",
  excerpt:
    "Cornerstone documentation standards for commercial insurance claims — property identification, multi-area indexing, tenant improvements, code considerations, business interruption support, and final claim packages across multifamily, office, retail, industrial, hospitality, education, healthcare, and mixed-use properties.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Commercial insurance claim documentation",
    "Commercial property damage documentation",
    "Commercial restoration documentation",
    "Commercial insurance documentation",
    "Documentation for commercial insurance claims",
    "Large loss",
    "Multifamily",
    "Tenant improvements",
    "Business interruption",
    "Code and ordinance",
    "Restoration contractors",
  ],
  publishedAt: "2026-07-20",
  updatedAt: "2026-07-20",
  estimatedMinutes: 28,
  seoTitle:
    "Commercial Insurance Claims Documentation Guide | Contractor Standards",
  seoDescription:
    "Document commercial insurance claims for contractors: property identification, multi-area indexing, tenant improvements, code upgrades, equipment records, and indexed claim packages across commercial property types.",
  relatedGuideSlugs: [
    "multifamily-apartment-insurance-claims-guide",
    "hoa-insurance-claims-guide",
    "commercial-water-loss-documentation-guide",
    "commercial-fire-claims-guide",
    "commercial-mold-claims-guide",
    "commercial-roofing-documentation-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "fire-damage-documentation-guide",
    "mold-damage-documentation-guide",
    "roofing-documentation-guide",
    "category-3-water-damage-documentation-guide",
    "multi-building-roofing-claims-guide",
    "hoa-roofing-claims-guide",
    "supplement-submission-guide",
    "claim-file-audit-guide",
  ],
  relatedBlogSlugs: [
    "why-commercial-insurance-claims-get-underpaid",
    "water-damage-documentation-for-apartment-complexes",
    "large-loss-water-mitigation-documentation-best-practices",
    "multifamily-water-claims-that-get-underpaid",
    "common-documentation-mistakes-on-commercial-water-losses",
    "claim-documentation-approval-rates",
    "insurance-supplementing-guide-contractors",
    "why-fire-damage-claims-get-underpaid",
    "why-mold-insurance-claims-get-underpaid",
    "documentation-gaps-that-trigger-water-claim-denials",
  ],
  faqIds: [
    "commercial-property-claims-underpaid",
    "commercial-documentation-gaps-underpayment",
    "commercial-estimate-accuracy",
    "commercial-code-ordinance-upgrades",
    "commercial-settlement-documentation",
    "commercial-claim-documentation",
    "commercial-large-loss-project-documentation",
    "commercial-multi-building-documentation",
    "commercial-tenant-improvements-documentation",
    "commercial-insurance-documentation-requirements",
    "commercial-claims-handled",
    "commercial-large-loss-support",
    "commercial-property-types-supported",
    "water-commercial-claims-documentation",
    "fire-commercial-claims-documentation",
    "roof-commercial-damage-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["commercial", "large-loss"],
  purpose:
    "This guide is the cornerstone documentation standard for commercial insurance claims handled by restoration contractors, roofing contractors, reconstruction contractors, mitigation companies, and general contractors. It establishes documentation practices that apply across multifamily, office, retail, industrial, hospitality, education, healthcare, and mixed-use properties — and across water, fire, mold, roofing, and reconstruction scopes. Commercial files face higher carrier scrutiny, more stakeholders, and larger dollar amounts than residential single-dwelling claims. Residential photo folders and single-sketch patterns fail when applied to multi-building campuses, multi-tenant suites, and phased reconstruction. Use this guide as the parent documentation framework; peril-specific commercial guides (water, fire, mold, roofing) provide specialized field procedures under these standards. Claims Ninja supports contractors with documentation standards, large-loss estimating, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition:
        "Any commercial or large-loss property claim requiring scaled documentation beyond residential file patterns",
      signal:
        "Office, retail, industrial, multifamily, hospitality, school, healthcare, or mixed-use footprint; specialist adjuster or large-loss team assigned",
    },
    {
      condition: "Multi-building, multi-suite, or multi-unit loss with stakeholder complexity",
      signal:
        "Property management requesting building/floor/unit indexing, tenant coordination, or shell-versus-tenant scope separation",
    },
    {
      condition: "Phased reconstruction or mitigation under occupied or partially occupied conditions",
      signal:
        "Multiple mobilizations, after-hours production, or area-by-area release before full re-occupancy",
    },
    {
      condition:
        "Carrier underpayment, reinspection, or documentation request citing residential templates applied to commercial scope",
      signal:
        "Desk reviewer cites missing building index, undifferentiated photos, weak quantity support, or incomplete claim package",
    },
  ],
  prerequisites: [
    "Commercial documentation plan with folder index, building/floor/suite/unit naming convention, and role assignments published within 24 hours of mobilization",
    "Property identification package: address, building IDs, floor plans or as-builts when available, occupancy type, and key contacts",
    "Project manager or documentation lead assigned on losses exceeding single-dwelling scope",
    "Separate folders for property identification, damage evidence, mitigation, scope/estimate, change orders, daily reports, and closeout",
    "Tenant roster, lease summary, or TI boundary notes when multi-tenant or leasehold improvements apply",
  ],
  requiredDocumentation: [
    {
      id: "property-identification-package",
      label: "Property identification and building information package",
      required: true,
      detail:
        "Document legal address, building names or numbers, square footage affected, construction type, occupancy classification, year built when available, and key contacts — owner, property manager, building engineer, tenant coordinator. Attach floor plans or sketches with consistent area labels used throughout the file.",
    },
    {
      id: "occupancy-use-records",
      label: "Building occupancy and use documentation",
      required: true,
      detail:
        "Record occupancy status at intake and through production: fully occupied, partially occupied, vacant, or under renovation. Note hours of operation, after-hours access rules, life-safety constraints, and any restricted zones (healthcare, education, food service).",
    },
    {
      id: "damage-documentation-set",
      label: "Indexed damage documentation set",
      required: true,
      detail:
        "Capture overview-to-detail photos and notes by building, floor, suite, or unit with labels that match the estimate. Include cause indicators, migration paths, and pre-existing condition notes where relevant — never mix unlabeled residential-style dumps across commercial areas.",
    },
    {
      id: "emergency-mitigation-records",
      label: "Emergency mitigation documentation",
      required: true,
      detail:
        "Document day-one stabilization: temporary protection, extraction, board-up, drying start, contents protection, and safety actions with dates, locations, and authorization. Tie emergency work to area IDs before production expands.",
    },
    {
      id: "scope-and-quantity-support",
      label: "Scope documentation with quantity validation",
      required: true,
      detail:
        "Maintain room/area sketches, measurements, material grades, and quantity takeoffs that reconcile to Xactimate or estimate line items. Validate counts, square footage, and assemblies against field photos and plans before submission.",
    },
    {
      id: "code-ordinance-file",
      label: "Code and ordinance supporting documentation",
      required: true,
      detail:
        "Collect AHJ requirements, permits, inspection notes, and code citations that drive upgrade scope. Photograph non-compliant conditions and document which ordinance or law provisions apply — do not rely on narrative alone.",
    },
    {
      id: "multi-area-index",
      label: "Multi-area / multi-building documentation index",
      required: true,
      detail:
        "Publish a master index mapping Building → Floor → Suite/Unit → Room/Work area to photo folders, daily reports, and estimate sections. Spot-check that random artifacts resolve to the same area ID.",
    },
    {
      id: "ti-leasehold-records",
      label: "Tenant improvement and leasehold documentation",
      required: true,
      detail:
        "Separate shell/base building scope from tenant improvements where leases or ownership require it. Document TI finishes, fixtures, and responsibility boundaries with photos and notes tied to suite IDs.",
    },
    {
      id: "bi-support-notes",
      label: "Business interruption support documentation",
      required: true,
      detail:
        "Record operational impact contemporaneously: areas closed, phased reopening, after-hours work driven by occupancy, and access restrictions. Contractor BI support notes field conditions — not insured financial BI analysis.",
    },
    {
      id: "equipment-materials-log",
      label: "Equipment and material documentation",
      required: true,
      detail:
        "Log equipment placement, rental periods, material deliveries, and specialty products with area IDs, photos, and invoices. Reconcile field counts to billed lines before invoice or supplement submission.",
    },
    {
      id: "daily-project-logs",
      label: "Daily project documentation",
      required: true,
      detail:
        "Maintain daily reports covering crew counts, areas worked, weather/access constraints, progress, and open issues. Commercial files require chronological production records across phases — not end-of-job narratives.",
    },
    {
      id: "change-documentation",
      label: "Change documentation during reconstruction",
      required: true,
      detail:
        "Document scope changes with dated photos, revised sketches, change-order rationale, and estimate revisions. Link each change to discovery conditions and area IDs before work proceeds unpaid.",
    },
    {
      id: "final-claim-package",
      label: "Final indexed claim package",
      required: true,
      detail:
        "Assemble an indexed closeout packet: property ID, occupancy records, damage evidence, mitigation logs, scope/quantities, code file, TI notes, BI support, equipment/materials, daily reports, change orders, and terminal photos. Cross-reference billed lines to evidence.",
    },
  ],
  steps: [
    {
      id: "why-commercial-differs-from-residential",
      title: "Why Commercial Documentation Differs from Residential",
      actions: [
        "Residential claims typically involve a single dwelling, limited room count, one primary stakeholder, and a carrier sketch that maps directly to a simple photo set.",
        "Commercial claims expand footprint, occupancy, and review complexity: multiple buildings or suites, mixed-use assemblies, tenant coordination, after-hours access, and multi-trade phasing.",
        "Higher invoice totals trigger specialist desk review, third-party audit, and line-by-line reconciliation — weak documentation in any area can cascade into proportional reductions across the file.",
        "Carriers often apply residential documentation expectations to commercial files. Contractors who treat a multi-tenant office or multifamily campus like a single-family intake invite scope exclusions.",
        "The operational difference is organizational: same craft fundamentals, higher evidence volume, stricter reconciliation between field production and billed lines across areas and stakeholders.",
        "This guide sets the documentation standards that apply across all commercial property types; peril-specific commercial guides deepen water, fire, mold, and roofing procedures under this framework.",
      ],
    },
    {
      id: "building-occupancy-and-use",
      title: "Building Occupancy and Use Documentation",
      actions: [
        "Record occupancy type and use at intake: multifamily, office, retail, industrial, hospitality, education, healthcare, mixed-use, or other commercial classification.",
        "Document occupancy status — fully occupied, partially occupied, vacant, or under renovation — and update status when areas reopen during the project.",
        "Note hours of operation, after-hours access rules, life-safety constraints, and restricted zones that affect production sequencing and documentation cadence.",
        "Identify stakeholders who control access: property manager, building engineer, tenant coordinators, HOA/board contacts, or facility directors.",
        "Photograph and note occupied-versus-isolated areas so desk reviewers understand why phasing, containment, or after-hours labor appears on the estimate.",
        "Align occupancy records to daily reports and tenant logs — production timelines without occupancy context invite labor and monitoring challenges.",
      ],
    },
    {
      id: "property-identification-building-info",
      title: "Property Identification and Building Information",
      actions: [
        "Capture legal address, campus or complex name, and each building ID or number used by property management — use those IDs on every photo folder and estimate section.",
        "Record construction type, approximate year built, number of stories, and affected square footage by building or suite when available.",
        "Attach floor plans, as-builts, or field sketches with the same area labels that will appear on photos, moisture maps, and Xactimate rooms.",
        "Document roof type, envelope systems, and major mechanical zones when relevant to damage migration or reconstruction scope.",
        "List key contacts with roles and preferred communication channels — commercial files stall when adjusters cannot reach the right stakeholder.",
        "Publish a one-page property identification sheet at the front of every carrier package so reviewers orient before opening photo folders.",
      ],
    },
    {
      id: "damage-documentation-workflow",
      title: "Damage Documentation Workflow",
      actions: [
        "Follow overview-to-detail sequencing within each area: elevation or suite entry, room overview, damage detail with scale, and related assemblies.",
        "Label every photo set with Building → Floor → Suite/Unit → Room before leaving the area — retroactive labeling at scale fails.",
        "Document cause indicators, migration paths, and adjacent undamaged conditions that define scope boundaries for desk review.",
        "Separate pre-existing or wear conditions from storm or peril damage with contemporaneous notes — commercial reviewers scrutinize causation narratives.",
        "Index photos to the estimate room list the same day; backlog uploads lose area context on multi-crew jobs.",
        "For peril-specific capture standards, use the Fire, Mold, Roofing, and Commercial Water Loss documentation guides under this commercial indexing framework.",
      ],
      notes:
        "See Photo Documentation Field Procedure and Claim Documentation Standards for company-wide capture habits; commercial files add building/suite indexing on top of those standards.",
    },
    {
      id: "emergency-mitigation-documentation",
      title: "Emergency Mitigation Documentation",
      actions: [
        "Document arrival conditions before extraction, board-up, or drying alters the scene — commercial intake establishes the baseline carriers compare to later production.",
        "Record emergency scope by area: temporary roofing, boarding, extraction volumes, contents protection, and safety actions with dates and authorizations.",
        "Photograph temporary protection installation and removal; temporary work without proof is commonly reduced on commercial invoices.",
        "Start area-level logs on day one even if full documentation plans refine within 24 hours — early gaps multiply on large footprints.",
        "Separate emergency mitigation evidence from rebuild scope in the file index so carriers can approve emergency packages without waiting on reconstruction estimates.",
        "On water, fire, and mold emergency phases, follow the corresponding commercial peril guide while keeping this guide’s multi-area index intact.",
      ],
    },
    {
      id: "scope-documentation",
      title: "Scope Documentation",
      actions: [
        "Build scope by area using consistent naming: each suite, unit, wing, or common area maps to estimate sections and photo folders.",
        "Document material grades, assemblies, and finishes observed in the field — commercial matching and quality arguments fail without finish evidence.",
        "Separate shell/base building scope from tenant-controlled finishes when ownership or leases require split estimates.",
        "Capture general conditions drivers: site security, lifts, scaffolding, temporary utilities, multiple mobilizations, and phasing constraints.",
        "Align scope narratives to photos and measurements — desk reviewers reject commercial scope written as residential room lists without quantity support.",
        "Update scope documentation when openings reveal additional damage; link discoveries to change documentation rather than burying them in daily notes.",
      ],
    },
    {
      id: "quantity-validation",
      title: "Quantity Validation",
      actions: [
        "Validate square footage, linear feet, counts, and assembly quantities against field measurements and plans before estimate finalization.",
        "Reconcile Xactimate room dimensions to labeled sketches and photos — mismatched quantities are a primary commercial underpayment vector.",
        "Document how quantities were derived (laser, tape, plans, aerial) so reviewers can verify methodology on large footprints.",
        "Spot-check high-dollar lines: roof squares, drywall SF, flooring SF, fixture counts, and equipment days against indexed evidence.",
        "Run pre-submission quantity QC with a second reviewer on large-loss files — single-estimator blind spots multiply at commercial scale.",
        "When carriers dispute quantities, package measurement worksheets with photo references by area rather than end-of-job narratives.",
      ],
    },
    {
      id: "code-and-ordinance",
      title: "Code and Ordinance Considerations",
      actions: [
        "Identify AHJ jurisdiction and applicable code editions early; commercial rebuilds frequently trigger ordinance or law upgrades.",
        "Document non-compliant conditions with photos and notes before demolition removes evidence of why upgrades are required.",
        "Collect permits, inspection reports, engineer letters, and written AHJ directives that support code-driven line items.",
        "Separate code upgrade scope in the estimate and documentation index so reviewers can evaluate ordinance lines independently.",
        "Track inspection milestones and correction notices chronologically — code scope expands mid-project and must be tied to dated evidence.",
        "Coordinate with fire, roofing, and reconstruction code guides for peril-specific upgrade documentation while keeping commercial indexing consistent.",
      ],
    },
    {
      id: "multi-area-documentation-strategy",
      title: "Multi-Area Documentation Strategy",
      actions: [
        "Publish a master area index within 24 hours: Building → Floor → Wing/Suite/Unit → Room/Work area, used identically on photos, logs, estimates, and daily reports.",
        "Assign a documentation owner for each major building or phase on multi-building campuses — large losses without owners produce inconsistent folders.",
        "Maintain separate photo and log sequences per area; never merge multifamily units or retail suites into a single residential-style dump.",
        "Document common areas separately from in-suite or in-unit scope — hallways, lobbies, mechanical rooms, and exteriors need distinct indexing.",
        "Schedule carrier walkthroughs with pre-walk packets organized by area so adjusters verify boundaries before production exceeds visible conditions.",
        "Spot-check weekly that random photos and estimate lines resolve to the same area ID; fix naming drift immediately.",
      ],
    },
    {
      id: "tenant-improvements-leasehold",
      title: "Tenant Improvements and Leasehold Considerations",
      actions: [
        "Identify shell versus tenant improvement (TI) boundaries at intake using lease summaries, as-builts, or property management direction.",
        "Photograph TI finishes, fixtures, and millwork with suite IDs before demolition — TI valuation disputes fail without pre-loss or pre-demo evidence.",
        "Separate TI scope and documentation packages when owner and tenant policies or responsibilities differ.",
        "Log tenant access, contents ownership, and coordination separately from base-building production records.",
        "Document leasehold improvements that must be matched or replaced to like kind and quality within the suite — note material grades contemporaneously.",
        "Avoid conflating TI claims with base-building invoices; clear file separation prevents carrier coverage confusion on multi-tenant losses.",
      ],
    },
    {
      id: "business-interruption-overview",
      title: "Business Interruption Documentation Overview",
      actions: [
        "Record operational impact in the field: areas closed to business or occupancy, production downtime drivers, and phased reopening dates with photos.",
        "Document after-hours and overtime production required by occupancy constraints with authorization notes from property management or the insured.",
        "Separate contractor mitigation/reconstruction evidence from insured financial BI records — contractors document conditions; BI coverage analysis remains with insured and carrier.",
        "Provide chronological access and area-release logs that help insureds align BI narratives with restoration progress.",
        "Note hospitality, retail, healthcare, and education constraints that extend duration — contemporaneous notes beat retroactive explanations.",
        "Never overstate BI conclusions in contractor packages; strong field documentation supports the insured’s broader claim without overstepping role.",
      ],
    },
    {
      id: "equipment-and-material-documentation",
      title: "Equipment and Material Documentation",
      actions: [
        "Photograph equipment placement by area with IDs or asset tags visible; log type, count, location, and dates on daily records.",
        "Reconcile rental invoices and field deployment counts before billing — commercial equipment lines fail when office totals exceed documented placements.",
        "Document material deliveries, specialty products, and stored materials with delivery tickets and area allocation notes.",
        "Track equipment moves, additions, and demobilizations with dated photos — mid-job changes without records are commonly cut.",
        "Cross-reference equipment and materials to estimate line items and area IDs in the final package index.",
        "For water mitigation equipment at scale, follow the Commercial Water Loss and Equipment Documentation guides under this commercial indexing standard.",
      ],
    },
    {
      id: "daily-project-documentation",
      title: "Daily Project Documentation",
      actions: [
        "Complete a daily report for every production day: areas worked, crew composition, progress, delays, weather/access constraints, and open issues.",
        "Tie daily reports to area IDs and photo uploads from the same day — commercial chronology is the primary defense on extended timelines.",
        "Record visitor and adjuster site visits, engineer inspections, and AHJ inspections with dates and outcomes.",
        "Escalate discoveries and plateaus same day to project management with photo support — do not wait for weekly summaries on large losses.",
        "Maintain a communication log of material decisions with property management, tenants, and the carrier.",
        "Use daily reports as the backbone of change documentation and supplement phasing — end-of-job narratives rarely survive commercial desk review.",
      ],
    },
    {
      id: "change-documentation-reconstruction",
      title: "Change Documentation During Reconstruction",
      actions: [
        "Document every material scope change with dated discovery photos, revised sketches, and written rationale before unpaid work proceeds.",
        "Issue change orders or estimate revisions linked to area IDs and supporting evidence — verbal field changes vanish at commercial review.",
        "Photograph concealed conditions as openings occur; commercial reconstruction often reveals additional damage behind finishes.",
        "Track version history of estimates and drawings so reviewers can see what changed and why between submissions.",
        "Separate emergency, mitigation, and rebuild change packages when claim phases are billed independently.",
        "Package disputed changes with cross-references to daily reports and photos for supplement or reinspection support.",
      ],
    },
    {
      id: "final-claim-package-organization",
      title: "Final Claim Package Organization",
      actions: [
        "Assemble an indexed commercial claim package: property identification, occupancy records, damage evidence by area, mitigation logs, scope and quantities, code file, TI notes, BI support, equipment/materials, daily reports, change orders, and closeout photos.",
        "Include a master index and cross-reference table linking each major billed line or phase to supporting documents by area ID.",
        "Organize by building or phase for large losses — reviewers approve what they can navigate without reconstructing chronology from unsorted folders.",
        "Submit structured packages while relationships are active; waiting until rebuild closeout weakens emergency and mitigation-only arguments.",
        "Run a final QC checklist (quality gates below) before invoice or supplement submission.",
        "Partner with documentation review and supplement preparation workflows when carrier response underpays documented commercial scope.",
      ],
    },
    {
      id: "documentation-workflow-summary",
      title: "Documentation Workflow Summary",
      actions: [
        "Day 0–1: Property identification sheet, occupancy status, emergency mitigation photos, and draft area index published.",
        "Within 24 hours: Written commercial documentation plan with folder structure, naming convention, roles, and reporting cadence.",
        "Throughout production: Area-labeled damage photos, daily reports, equipment/material logs, and change documentation same day.",
        "Ongoing: Quantity validation against sketches and photos; code/AHJ file updates; TI and BI support notes as conditions change.",
        "Pre-submission: Cross-reference billed lines to evidence; reconcile equipment and material invoices; run QC checklist.",
        "Closeout: Indexed final package by building/phase with terminal photos and change-order history ready for carrier or reinspection.",
      ],
    },
    {
      id: "commercial-documentation-checklist",
      title: "Commercial Documentation Checklist",
      actions: [
        "Property identification package complete with building IDs and area labels matching the estimate.",
        "Occupancy and use status documented and updated through production.",
        "Master multi-area index published and spot-checked against photo folders.",
        "Damage documentation sequenced overview-to-detail by area with same-day indexing.",
        "Emergency mitigation records dated and separated from rebuild scope.",
        "Scope and quantity validation reconciled to measurements and photos.",
        "Code and ordinance file includes AHJ directives, permits, and supporting photos.",
        "Tenant improvement / leasehold boundaries documented where multi-tenant scope applies.",
        "Business interruption support notes recorded contemporaneously without overreaching into BI analysis.",
        "Equipment and material logs reconciled to invoices and area IDs.",
        "Daily project reports complete for every production day.",
        "Change documentation linked to discovery photos and estimate revisions.",
        "Final indexed claim package QC’d against quality gates before submission.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "documentation-plan-published",
      label: "Commercial documentation plan published within 24 hours and reviewed against production",
      required: true,
      detail:
        "Folder index, naming convention, roles, and reporting cadence must exist and be checked by project management on active commercial losses.",
    },
    {
      id: "area-naming-consistent",
      label: "Building/floor/suite/unit naming consistent across photos, logs, estimates, and daily reports",
      required: true,
      detail:
        "Mismatched area labels are a primary cause of commercial scope exclusions at desk review.",
    },
    {
      id: "property-id-complete",
      label: "Property identification package present at front of claim file",
      required: true,
      detail:
        "Address, building IDs, occupancy type, contacts, and area map or sketch must orient any reviewer in under two minutes.",
    },
    {
      id: "quantities-validated",
      label: "High-dollar quantities validated against field measurements and photos",
      required: true,
      detail:
        "Roof squares, SF finishes, fixture counts, and equipment days must reconcile before submission.",
    },
    {
      id: "ti-boundaries-clear",
      label: "Shell versus tenant improvement boundaries documented on multi-tenant losses",
      required: true,
      detail:
        "TI and base-building evidence must be separable when ownership or lease responsibility differs.",
    },
    {
      id: "changes-contemporaneous",
      label: "Scope changes documented with dated photos and estimate revisions before unpaid work",
      required: true,
      detail:
        "Verbal or end-of-job change narratives fail commercial reinspection and supplement review.",
    },
    {
      id: "equipment-materials-reconciled",
      label: "Equipment and material invoices reconciled to field logs by area",
      required: true,
      detail:
        "Office totals that exceed documented placements invite proportional commercial cuts.",
    },
    {
      id: "final-package-indexed",
      label: "Final claim package indexed with cross-references before invoice or supplement",
      required: true,
      detail:
        "Every major billed phase or line group must resolve to dated area-level evidence in the index.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Residential file structure on commercial footprint",
      impact:
        "Desk reviewers apply proportional reductions when multi-building or multi-suite evidence is undifferentiated — undocumented areas excluded from approved scope.",
      correction:
        "Adopt Building → Floor → Suite/Unit → Room indexing from intake through closeout across photos, logs, and estimates.",
    },
    {
      mistake: "No documentation plan on large-loss mobilization",
      impact:
        "Inconsistent naming and daily gaps multiply as crew count grows — office cannot reconcile quantities or equipment at invoice.",
      correction:
        "Publish a written commercial documentation plan within 24 hours with roles, folder index, and daily reporting cadence.",
    },
    {
      mistake: "Missing property identification and area map at package front",
      impact:
        "Reviewers cannot orient to the loss; commercial packages get bounced for ‘insufficient documentation’ despite photo volume.",
      correction:
        "Lead every package with property ID sheet, contacts, and master area index matching estimate sections.",
    },
    {
      mistake: "Quantities submitted without measurement validation",
      impact:
        "High-dollar SF and count lines cut when photos and sketches do not support Xactimate dimensions.",
      correction:
        "Validate quantities against field measurements and labeled sketches; document methodology on large footprints.",
    },
    {
      mistake: "Shell and tenant improvements mixed in one undifferentiated file",
      impact:
        "Coverage confusion and denials when owner and tenant responsibilities differ; TI finishes unpaid for lack of suite-level evidence.",
      correction:
        "Separate TI and base-building documentation with suite IDs and leasehold boundary notes.",
    },
    {
      mistake: "Business interruption conflated with contractor invoice narrative",
      impact:
        "Carrier confusion and credibility loss when contractor packages overreach into insured BI analysis.",
      correction:
        "Document field conditions and area closures contemporaneously; keep financial BI analysis with the insured and carrier.",
    },
    {
      mistake: "Change orders without contemporaneous discovery photos",
      impact:
        "Reconstruction supplements denied when openings and mid-job discoveries lack dated evidence chains.",
      correction:
        "Photograph concealed conditions as opened; issue change documentation before unpaid work proceeds.",
    },
    {
      mistake: "Unsorted closeout dump without cross-reference index",
      impact:
        "Terminal evidence buried in folders — carriers reopen quantity and duration disputes at final review.",
      correction:
        "Submit indexed final package linking billed lines to area-level evidence before invoice.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Scope expands across buildings, suites, or floors after intake",
      documentation:
        "Dated area-index revisions, discovery photos, daily reports, and measurement updates — phased supplement per area rather than end-of-job narrative.",
      lineItemHint:
        "Additional suites/units, common-area scope, vertical migration, extended general conditions",
    },
    {
      trigger: "Code or AHJ requirements drive upgrade scope mid-project",
      documentation:
        "Permit documents, inspection notes, engineer letters, and photos of non-compliant conditions tied to ordinance line items.",
      lineItemHint:
        "Code upgrades, permits, engineering, ordinance and law items",
    },
    {
      trigger: "Tenant improvement or leasehold scope separated from shell",
      documentation:
        "Suite-level TI photos, finish schedules, and leasehold boundary notes supporting separate estimate sections.",
      lineItemHint:
        "TI finishes, fixtures, millwork, suite-specific reconstruction",
    },
    {
      trigger: "After-hours or multi-mobilization production required by occupancy",
      documentation:
        "Occupancy records, access schedules, property management authorization, and daily reports documenting night/weekend or remobilization work.",
      lineItemHint:
        "After-hours labor, multiple mobilizations, temporary protection, site security",
    },
    {
      trigger: "Quantity disputes on large commercial assemblies",
      documentation:
        "Measurement worksheets, labeled sketches, and photo references by area supporting SF, squares, and counts.",
      lineItemHint:
        "Corrected quantities, additional assemblies, matching upgrades",
    },
    {
      trigger: "Documentation complete but carrier underpaid or partially approved commercial claim",
      documentation:
        "Indexed claim packet cross-referencing area-level evidence to each disputed line — packaged for supplement and denial recovery.",
      lineItemHint:
        "Supplement submission with line-item justification; Claims Ninja supports documentation review, estimating, and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "How is commercial claim documentation different from residential?",
      answer:
        "Commercial documentation scales evidence to property footprint and stakeholder complexity: building/floor/suite indexing, occupancy records, quantity validation, tenant improvement boundaries, code files, and indexed claim packages. Residential single-sketch and undifferentiated photo patterns fail when carriers reconcile large-dollar lines across multiple areas.",
    },
    {
      question: "What should a commercial documentation plan include?",
      answer:
        "Folder index, Building → Floor → Suite/Unit → Room naming convention, daily reporting cadence, roles for field capture and office reconciliation, TI/shell separation rules when applicable, and change-order documentation triggers. Publish within 24 hours of large-loss mobilization and review against production daily.",
    },
    {
      question: "How should contractors document multiple buildings on one claim?",
      answer:
        "Treat each building as a top-level index node with its own photo sequences, daily reports, and estimate sections. Maintain a master campus index, assign documentation owners per major building or phase, and never merge buildings into a single residential-style folder.",
    },
    {
      question: "What belongs in a final commercial claim package?",
      answer:
        "Property identification, occupancy records, area-indexed damage evidence, mitigation logs, validated scope and quantities, code/AHJ file, TI notes when applicable, BI support field notes, equipment and material reconciliation, daily reports, change documentation, and a cross-reference index to billed lines.",
    },
  ],
  relatedResources: [
    {
      label: "Commercial insurance claims",
      href: SOLUTION_PATH,
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
      label: "Claim Documentation Standards",
      href: "/resources/guides/general-claims/documentation-standards-guide",
    },
    {
      label: "Photo Documentation Field Procedure",
      href: "/resources/guides/general-claims/photo-documentation-standards-guide",
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
      label: "Roofing Claim Documentation Standard",
      href: "/resources/guides/roofing-claims/roofing-documentation-guide",
    },
    {
      label: "Category 3 Water Damage Documentation Guide",
      href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
    },
    {
      label: "Water Damage Documentation for Apartment Complexes",
      href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
    },
    {
      label: "Large-Loss Water Mitigation Documentation Best Practices",
      href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
    },
    {
      label: "Multifamily Water Claims That Get Underpaid",
      href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
    },
    {
      label: "Common Documentation Mistakes on Commercial Water Losses",
      href: "/resources/blog/common-documentation-mistakes-on-commercial-water-losses",
    },
    {
      label: "How Better Claim Documentation Improves Approval Rates",
      href: "/resources/blog/claim-documentation-approval-rates",
    },
    {
      label: "Insurance Supplementing Guide for Contractors",
      href: "/resources/blog/insurance-supplementing-guide-contractors",
    },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});
