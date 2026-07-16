import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/mold" as const;
const CATEGORY = "mold" as const;
const GUIDE_SLUG = "mold-damage-documentation-guide" as const;

export const MOLD_DAMAGE_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Mold Damage Documentation Guide for Contractors",
  excerpt:
    "Contractor operational standard for documenting residential and commercial mold damage insurance claims — moisture source evidence, growth mapping, hidden mold investigation, supporting readings, scope packaging, and claim recovery.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Mold",
    "Mold damage",
    "Moisture source",
    "Hidden mold",
    "Moisture readings",
    "Thermal imaging",
    "Containment",
    "Remediation documentation",
    "Commercial mold",
    "Insurance claims",
    "Documentation",
    "Restoration contractors",
  ],
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  estimatedMinutes: 22,
  seoTitle:
    "Mold Damage Documentation Guide for Contractors | Mold Claim Documentation Standards",
  seoDescription:
    "Document mold damage insurance claims: moisture source evidence, growth and hidden mold photos, moisture readings, testing support, scope packaging, and insurance submission for restoration contractors.",
  relatedGuideSlugs: [
    "mold-remediation-documentation-guide",
    "post-remediation-verification-documentation-guide",
    "mold-protocol-documentation-guide",
    "commercial-water-loss-documentation-guide",
    "category-3-water-damage-documentation-guide",
    "moisture-mapping-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "commercial-fire-claims-guide",
    "dry-log-collection-guide",
    "daily-monitoring-guide",
    "category-class-documentation-guide",
  ],
  relatedBlogSlugs: [
    "why-mold-insurance-claims-get-underpaid",
    "why-category-3-water-claims-get-underpaid",
    "documentation-gaps-that-trigger-water-claim-denials",
    "moisture-mapping-mistakes-that-cost-contractors-money",
    "dry-log-documentation-guide-insurance-claims",
  ],
  faqIds: [
    "mold-damage-documentation-insurance",
    "mold-claim-photos-required",
    "mold-moisture-readings-support",
    "mold-insurance-documentation-required",
    "mold-hidden-damage-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["mold", "water-damage", "commercial"],
  purpose:
    "Mold insurance claims are documentation-intensive because carriers evaluate causation, moisture history, and remediation scope separately — visible growth is only part of the loss. This guide is the contractor operational standard for documenting residential and commercial mold-related insurance claims: identifying moisture sources, mapping growth, investigating hidden damage, organizing supporting evidence, packaging scope for adjusters, and supporting supplements — not remediation procedures or protocol selection. Thorough documentation supports legitimate scope, remediation recommendations, and insurance claim recovery when carriers question whether damage resulted from a covered water event versus long-term conditions. For water-loss moisture mapping and drying evidence that often precedes mold scope, see the linked water damage guides. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "New mold loss assigned and initial site assessment scheduled",
      signal:
        "Claim number issued, property accessible, visible growth or moisture odor reported by occupant or adjuster",
    },
    {
      condition: "Mold scope follows or overlaps an underlying water loss on the same file",
      signal:
        "Prior mitigation claim number, drying history, or carrier estimate references water intrusion",
    },
    {
      condition: "Carrier adjuster walk scheduled and moisture source must be established first",
      signal:
        "Adjuster appointment on calendar; active leak or recent intrusion still traceable",
    },
    {
      condition: "Demolition or investigation phase where hidden mold may appear",
      signal:
        "Wall openings planned, cabinet removal scheduled, or carrier estimate predates cavity inspection",
    },
    {
      condition: "Commercial, multifamily, or multi-unit mold loss with indexed scope requirements",
      signal:
        "Property manager coordination, tenant displacement, or unit-level growth mapping required",
    },
  ],
  prerequisites: [
    "Site safety assessment complete — PPE requirements, electrical hazards, and occupant access restrictions documented",
    "Claim number, policyholder contact, and carrier adjuster info in job file",
    "Photo naming convention agreed: ClaimNumber_Room_Label_Date or equivalent",
    "Room index template and moisture source log ready before second visit",
    "Moisture meter, hygrometer, and thermal camera available when supporting readings are planned",
    "Project manager or documentation lead assigned on losses exceeding single-room scope",
  ],
  requiredDocumentation: [
    {
      id: "safety-and-occupant-log",
      label: "Safety assessment and occupant concern log",
      required: true,
      detail:
        "Document PPE requirements, restricted zones, occupant health concerns reported at intake, and access limitations. Safety and occupant documentation supports scope credibility and limits liability on active growth environments.",
    },
    {
      id: "moisture-source-evidence",
      label: "Moisture source identification and causation photos",
      required: true,
      detail:
        "Wide and close-up photos of the active or historical moisture source — plumbing failure, roof leak, window intrusion, HVAC condensation, appliance leak, or flood line — with narrative tying source to affected areas.",
    },
    {
      id: "visible-growth-photo-set",
      label: "Visible mold growth photo set with room context",
      required: true,
      detail:
        "Wide room context plus close-ups of growth on surfaces, with approximate affected area notes and substrate identification (drywall, wood, carpet, cabinetry).",
    },
    {
      id: "room-map-index",
      label: "Room map or floor plan with affected area indexing",
      required: true,
      detail:
        "Sketch or floor plan marking affected rooms, growth locations, and moisture source path. Room names must match photo folders and estimate sketch.",
    },
    {
      id: "moisture-readings-log",
      label: "Moisture content and ambient readings log",
      required: true,
      detail:
        "Pin or pinless meter readings on affected and unaffected materials, with dates, locations, and dry-standard references where applicable.",
    },
    {
      id: "hidden-cavity-photos",
      label: "Hidden mold investigation photos during access",
      required: true,
      detail:
        "Date-stamped cavity, ceiling, flooring, cabinet back, crawlspace, attic, and HVAC photos when investigation opens concealed spaces — before repairs close access.",
    },
    {
      id: "thermal-imaging-set",
      label: "Thermal imaging images where used",
      required: false,
      detail:
        "IR images showing suspected moisture pockets behind finishes, with corresponding moisture meter confirmation photos on the same visit.",
    },
    {
      id: "hygrometer-ambient-log",
      label: "Hygrometer ambient condition readings",
      required: false,
      detail:
        "Temperature and relative humidity readings by room or zone, supporting elevated moisture conditions and drying or containment scope.",
    },
    {
      id: "laboratory-testing-records",
      label: "Laboratory testing records when applicable",
      required: false,
      detail:
        "Sampling location photos, chain-of-custody, lab report excerpts, and narrative explaining why testing supports scope — not generic mold reports without claim context.",
    },
    {
      id: "inspection-notes-narrative",
      label: "Inspection notes and written narrative",
      required: true,
      detail:
        "Field notes describing progression, site conditions, occupant reports, and scope rationale — contemporaneous with visit dates.",
    },
    {
      id: "scope-evidence-index",
      label: "Scope-to-evidence cross-reference index",
      required: true,
      detail:
        "Map demolition, containment, cleaning, removal, reconstruction, contents, and drying lines to photo folders, readings, and reports before carrier submission.",
    },
    {
      id: "submission-package-index",
      label: "Insurance documentation package with attachment index",
      required: true,
      detail:
        "Organized packet: cover narrative, labeled photos by room, moisture reports, testing exhibits, estimate, and line-item justification index.",
    },
  ],
  steps: [
    {
      id: "why-extensive-documentation",
      title: "Why Mold Claims Require Extensive Documentation",
      actions: [
        "Mold claims require documentation across two separate carrier review tracks — causation (moisture source and covered event) and scope (growth extent, remediation requirements) — each with its own evidence standard.",
        "Visible mold on surfaces is only part of the loss. Carriers evaluate whether growth is symptomatic of an active leak, a past covered water event, or long-term humidity conditions that may fall outside coverage.",
        "Moisture source documentation is critical because without a traceable causation chain, remediation scope — regardless of field quality — faces coverage and payment challenges on review.",
        "Insurers rely heavily on supporting evidence: dated photos, moisture readings, thermal images, inspection narratives, occupant statements, and testing when used — not contractor conclusions alone.",
        "Hidden mold in wall cavities, under flooring, behind cabinetry, and inside HVAC systems often drives legitimate scope expansion but only supplements when cavity evidence is captured during access.",
        "Mold files overlap water mitigation history when growth follows intrusion — drying logs, moisture maps, and prior claim documentation become part of the mold evidence chain.",
        "Commercial and multifamily losses multiply documentation complexity through unit indexing, common-area scope, tenant coordination, and separate structure versus contents evidence folders.",
        "Carrier scrutiny on mold often exceeds single-peril water claims: containment hours, air scrubbing, testing, and removal depth are challenged when documentation does not precede production.",
      ],
      notes:
        "See Claim Documentation Standards for company-wide photo labeling and file organization. Mold losses amplify documentation gaps because causation and scope evidence must be built in parallel from the first visit.",
    },
    {
      id: "initial-inspection",
      title: "Initial Inspection",
      owner: "field",
      actions: [
        "Complete safety assessment before entry — identify electrical hazards, compromised materials, slip risks, and required PPE. Document restricted zones and whether occupants should remain out of affected areas.",
        "Record occupant concerns at intake: reported odors, visible growth locations, health complaints, and prior leak history. Occupant statements support timeline and moisture source narratives on carrier review.",
        "Identify and photograph the moisture source first — active leak, stain pattern, warped materials, or equipment failure — before growth photos. Source-first documentation establishes causation sequence.",
        "Document visible growth by room: wide context shots, then close-ups on walls, ceilings, floors, trim, cabinetry faces, and contents with porous material exposure.",
        "Assess hidden damage potential — note where cavities, subfloors, crawlspaces, attics, and HVAC plenums may harbor growth based on moisture path and construction type.",
        "Capture site conditions: ventilation status, HVAC operation, standing water, elevated humidity, exterior drainage, and recent weather if relevant to intrusion.",
        "Open room index and photo naming convention before leaving the site — claim number, room label, date on every frame.",
        "Flag investigation requirements for visit two: which walls open, which cabinets detach, whether crawlspace or attic access is needed, and whether supporting readings or thermal imaging are scheduled.",
      ],
      notes:
        "Do not begin remediation or aggressive cleaning before intake documentation is complete — altered surfaces weaken causation and scope evidence on adjuster walk and supplement review.",
    },
    {
      id: "moisture-source-documentation",
      title: "Moisture Source Documentation",
      owner: "field",
      actions: [
        "Plumbing failures — document supply line, drain, appliance connection, or fixture overflow with photos of the failure point, water path, and affected materials below or adjacent.",
        "Roof leaks — photograph penetration failures, flashing conditions, ceiling stain patterns tracing to entry point, and attic sheathing or insulation moisture where accessible.",
        "Window and door intrusion — document seal failure, sill damage, exterior cladding gaps, and interior jamb saturation with photos tying exterior defect to interior growth.",
        "HVAC condensation — capture drain pan overflow, clogged condensate lines, uninsulated duct sweating, and register-area growth with system nameplate and filter condition.",
        "Appliance failures — photograph dishwasher, washing machine, water heater, or refrigerator supply line failures with model context and spread pattern.",
        "Flooding — document flood line height on walls and contents, entry points, and duration indicators. Link to weather event date or external water source where known.",
        "Long-term moisture — document chronic humidity, inadequate ventilation, or repeated minor leaks when no sudden event exists. Note how this affects carrier causation review without omitting evidence.",
        "Write a moisture source narrative connecting the identified source to each affected room on the room map — causation documentation is as important as growth documentation on mold files.",
      ],
      notes:
        "See Category 3 Water Damage Documentation Guide and Commercial Water Loss Documentation Guide when mold follows a covered water loss. Link drying history and prior mitigation documentation to the mold causation chain.",
    },
    {
      id: "mold-growth-documentation",
      title: "Mold Growth Documentation",
      owner: "field",
      actions: [
        "Photographs — capture wide room context and macro close-ups of growth colonies, staining, and discolored substrates. Include a scale reference where helpful.",
        "Measurements — record approximate affected square footage per surface, ceiling height, linear feet of affected trim or cabinetry, and total affected area by room.",
        "Room mapping — mark growth locations on a sketch or floor plan; label each photo folder to match room names on the map and carrier sketch.",
        "Surface materials — identify substrate on every close-up: painted drywall, basecoat-only drywall, wood framing, OSB, carpet, pad, hardwood, tile assembly, or insulation facing.",
        "Approximate affected area — summarize per room and per building level; carriers compare documented area to billed removal and cleaning quantities.",
        "Progression — note whether growth appears active (wet substrates, fresh colonies) or historical (dry, powdery, paint-over attempts). Timeline notes support causation and scope arguments.",
        "Contents and porous materials — photograph upholstered items, drapery, cardboard storage, and built-in cabinetry with visible growth or musty conditions in place before move-out.",
        "Exterior and interstitial connections — document growth at wall-floor junctions, behind baseboards before removal, and at plumbing chases where moisture traveled between rooms.",
      ],
      notes:
        "See Photo Documentation Standards for labeling conventions. Mold growth photos should answer: what surface, how much area, and what material — not just that mold is present.",
    },
    {
      id: "hidden-mold-investigation",
      title: "Hidden Mold Investigation",
      owner: "field",
      actions: [
        "Wall cavities — photograph backside of drywall, stud bay conditions, and insulation facing when access opens. Capture before closing or reinstalling any temporary patch.",
        "Ceiling cavities — document growth on ceiling joists, top-plate areas, and upper wall cavities when ceiling drywall is removed or access panels open.",
        "Flooring — photograph subfloor, tack strip, and pad conditions when carpet or hardwood is lifted. Note growth on OSB, plywood, or concrete with moisture readings on the substrate.",
        "Cabinets — document back panels, toe-kick voids, and wall conditions behind detached cabinetry in kitchens, baths, and laundry areas.",
        "Crawlspaces — capture joist, subfloor, vapor barrier, and foundation wall conditions with adequate lighting. Index crawlspace photos separately from interior room folders.",
        "Attics — document sheathing, rafters, insulation, and ventilation conditions when roof leaks or condensation drive attic growth.",
        "HVAC systems — photograph plenum, coil, blower compartment, duct interior where accessible, and register areas with growth or heavy dust colonization.",
        "Maintain a hidden damage discovery log — date, location, photo file names, and narrative for each unexpected growth found during investigation before repairs close access.",
      ],
      notes:
        "Hidden mold scope supplements fail when discovery photos are taken after remediation closes cavities. Treat every opening as a one-time evidence opportunity.",
    },
    {
      id: "supporting-documentation",
      title: "Supporting Documentation",
      owner: "field",
      actions: [
        "Moisture readings — log pin and pinless meter readings on affected and unaffected materials with location labels, dates, and dry-standard references. Readings support active moisture arguments and drying scope.",
        "Thermal imaging — capture IR images of suspected wet areas behind walls, ceilings, and floors; pair each IR image with a moisture meter reading photo on the same substrate.",
        "Hygrometer readings — record ambient temperature and relative humidity by room or zone over the inspection period. Elevated RH supports ventilation, dehumidification, and containment scope.",
        "Laboratory testing — when sampling is performed, photograph each sample location, document chain-of-custody, and attach lab results with narrative explaining how results support remediation boundaries or clearance.",
        "Inspection notes — maintain written field notes contemporaneous with visits: odor presence, substrate conditions, investigation findings, and scope recommendations tied to observed evidence.",
        "Occupant reports — document occupant-provided timeline of leaks, odors, and visible growth in writing or signed statement where available. Third-party reports support causation when field evidence is limited.",
        "Use moisture readings and thermal imaging when carriers challenge whether substrates are wet versus merely stained — instrumented evidence outperforms visual opinion on desk review.",
        "Use testing selectively — pre-remediation sampling supports scope boundaries on large or disputed losses; post-remediation clearance supports completion when policy or carrier requires verification — see the Post-Remediation Verification (PRV) Documentation Guide for closeout standards.",
      ],
      notes:
        "See Moisture Mapping Field Procedure and Dry Log Collection Procedure when mold scope overlaps active or recent drying operations on the same file.",
    },
    {
      id: "scope-documentation",
      title: "Scope Documentation",
      owner: "office",
      actions: [
        "Demolition — document square footage, material types, multi-layer assemblies, and hazmat considerations with before photos tied to room labels and hidden cavity findings.",
        "Containment — photograph barrier placement, negative air setup, air scrubber positions, and decontamination chamber layout with dated images supporting labor and equipment lines.",
        "Cleaning — document HEPA vacuuming, antimicrobial application areas, wire-brush or media cleaning on framing, and wipe-down sequences with substrate condition photos.",
        "Removal — tie material removal depth to photos: carpet and pad, hardwood, drywall one-foot or full-wall, insulation, cabinetry, and HVAC components with justification notes.",
        "Reconstruction — cross-reference rebuild scope to demolition photos and moisture readings confirming materials reached dry standard before close-in.",
        "Contents — room-located inventory with photos for affected porous items; separate contents evidence from structural mold folders on commercial files.",
        "Drying — log dehumidifier and air mover placement, daily moisture readings, and dry-standard achievement when structural drying overlaps mold remediation scope.",
        "Align every billed line to a photo folder, reading log, report excerpt, or narrative note before estimate submission — scope documentation is the bridge between field evidence and carrier payment.",
      ],
      notes:
        "See Mold Remediation Documentation Guide for production-phase containment, removal, cleaning, and equipment documentation standards. See Claim Documentation Standards for estimate-to-evidence indexing. Mold scope without matching documentation reduces line by line on carrier review.",
    },
    {
      id: "insurance-documentation-package",
      title: "Insurance Documentation Package",
      owner: "office",
      actions: [
        "Estimate organization — group line items by room and phase (demo, containment, cleaning, removal, drying, rebuild) matching photo folder structure.",
        "Narratives — write a cover letter explaining moisture source, growth extent, investigation findings, and scope rationale in plain language tied to exhibit references.",
        "Photos — deliver labeled, indexed photo sets by room and phase; include wide and close-up pairs for major scope categories.",
        "Moisture reports — attach readings logs, thermal image summaries, and hygrometer data with date ranges and location keys.",
        "Testing — include lab reports with sample location photos and explanation of how results relate to billed remediation scope.",
        "Supporting documentation — attach inspection notes, occupant statements, prior water loss documentation, and engineering or industrial hygiene reports when used.",
        "Build an attachment index listing every exhibit, file name, and the line items each exhibit supports — desk reviewers pay faster when exhibits are mapped.",
        "Prepare supplement-ready gaps — if demolition has not started, note anticipated hidden scope and schedule phased submissions with contemporaneous discovery photos.",
      ],
      notes:
        "See Supplement Submission Guide for carrier-ready packaging conventions. Mold packages that separate causation exhibits from scope exhibits reduce adjuster confusion on complex files.",
    },
    {
      id: "commercial-mold-claims",
      title: "Commercial Mold Claims",
      owner: "project-manager",
      actions: [
        "Multifamily — index documentation by building, unit number, and common area. Separate tenant-occupied units with access logs and notification records.",
        "Offices — document affected suites, drop-ceiling cavities, HVAC zones, and after-hours access constraints. Business interruption context may affect scheduling evidence.",
        "Hotels — index by floor, room number, and back-of-house areas. Coordinate documentation around guest occupancy and limited access windows.",
        "Retail — capture growth in stock areas, cooler walls, and roof leak paths over wide floor plates. Contents and inventory photos support separate scope tracks.",
        "Industrial — document production area containment requirements, equipment protection, and phased remediation boundaries with safety officer coordination notes.",
        "Healthcare — heightened documentation sensitivity: note infection-control requirements, restricted access protocols, and clearance standards when applicable.",
        "Use building-level photo naming, separate structure and contents folders, and property manager sign-offs on access — commercial mold documentation complexity scales with occupancy, not just square footage.",
        "Cross-reference commercial indexing patterns from Commercial Water Loss Documentation Guide and Commercial Fire Claims Guide when organizing multi-unit mold files.",
      ],
      notes:
        "Commercial mold claims fail on organization before they fail on science. Property-level indexing from intake prevents unit-to-unit evidence confusion on supplement review.",
    },
  ],
  qualityGates: [
    {
      id: "safety-documented",
      label: "Safety assessment and occupant concerns documented before production",
      required: true,
      detail: "PPE requirements, restricted zones, and occupant-reported concerns on file.",
    },
    {
      id: "moisture-source-identified",
      label: "Moisture source identified and photographed",
      required: true,
      detail:
        "Active or historical source documented with photos and narrative before growth-only evidence stands alone.",
    },
    {
      id: "room-labels-consistent",
      label: "Room labels consistent across photos, map, sketch, and estimate",
      required: true,
      detail: "Every photo folder and line item maps to the same room naming convention.",
    },
    {
      id: "visible-growth-complete",
      label: "Visible growth documented with context and close-ups in every affected room",
      required: true,
      detail: "Wide and macro photos on file for each room with documented growth.",
    },
    {
      id: "affected-area-estimated",
      label: "Approximate affected area recorded per room",
      required: true,
      detail: "Square footage or surface-area notes support removal and cleaning line quantities.",
    },
    {
      id: "moisture-readings-logged",
      label: "Moisture readings logged on affected and reference materials",
      required: true,
      detail: "Dated readings with location labels on file where substrates remain wet or disputed.",
    },
    {
      id: "hidden-investigation-complete",
      label: "Hidden mold investigation documented during access",
      required: true,
      detail:
        "Cavity, flooring, cabinet, crawlspace, attic, or HVAC photos captured before access closes.",
    },
    {
      id: "thermal-hygro-where-used",
      label: "Thermal and hygrometer data indexed when used",
      required: false,
      detail: "IR and ambient readings paired with location and date references.",
    },
    {
      id: "testing-indexed",
      label: "Laboratory testing indexed to sample locations when used",
      required: false,
      detail: "Sample photos, chain-of-custody, and lab report tied to scope narrative.",
    },
    {
      id: "inspection-narrative-current",
      label: "Inspection narrative contemporaneous with field visits",
      required: true,
      detail: "Written notes dated to match photo and reading visit dates.",
    },
    {
      id: "occupant-timeline-recorded",
      label: "Occupant moisture and growth timeline recorded",
      required: true,
      detail: "Intake notes or statement documenting reported leak and odor history.",
    },
    {
      id: "scope-photos-aligned",
      label: "Containment, demo, and cleaning photos aligned to billed scope",
      required: true,
      detail: "Production photos support containment, removal, and cleaning line items.",
    },
    {
      id: "contents-separated",
      label: "Contents evidence separated on multi-room or commercial files",
      required: true,
      detail: "Contents photos and inventory in dedicated folders where contents scope exists.",
    },
    {
      id: "water-history-linked",
      label: "Prior water loss documentation linked when mold follows intrusion",
      required: false,
      detail: "Mitigation history, dry logs, or prior claim exhibits attached to causation section.",
    },
    {
      id: "estimate-indexed",
      label: "Estimate cross-referenced to evidence index",
      required: true,
      detail: "Each major line item links to photo folder, report, or measurement note.",
    },
    {
      id: "commercial-indexed",
      label: "Commercial files indexed by building, unit, or zone",
      required: false,
      detail: "Property-level naming convention applied on multifamily and commercial losses.",
    },
    {
      id: "package-index-complete",
      label: "Submission package attachment index complete",
      required: true,
      detail: "Cover narrative, exhibit list, and line-item mapping ready before carrier submission.",
    },
    {
      id: "supplement-discovery-ready",
      label: "Discovery log ready for phased supplement submission",
      required: true,
      detail: "Hidden damage log maintained for scope found after initial estimate submission.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Documenting visible mold without identifying the moisture source",
      impact:
        "Carriers deny or reduce scope when causation is unsupported — growth photos alone do not establish a covered event or traceable intrusion.",
      correction:
        "Photograph and narrate the moisture source first on every intake visit. Tie each affected room to the source path on the room map.",
    },
    {
      mistake: "Missing or undated photographs",
      impact:
        "Remediation and containment lines lose credibility when visual evidence cannot be tied to date-of-loss conditions or is captured after cleaning alters the scene.",
      correction:
        "Capture wide and close-up photos at every visit with room labels and dates in filenames before cleaning, containment, or demo changes the scene.",
    },
    {
      mistake: "Poor room labeling across photos, sketch, and estimate",
      impact:
        "Desk reviewers cannot map evidence to line items — scope reduces proportionally when room names mismatch across exhibits.",
      correction:
        "Adopt one room naming convention at intake and reconcile to carrier sketch before estimate submission.",
    },
    {
      mistake: "Skipping hidden cavity documentation during investigation",
      impact:
        "Wall, floor, and HVAC cavity scope is denied as late inflation when tear-out evidence is not captured before access closes.",
      correction:
        "Maintain a hidden damage discovery log with date-stamped cavity photos during every opening — treat access as a one-time evidence window.",
    },
    {
      mistake: "No moisture readings on disputed or wet substrates",
      impact:
        "Carriers classify growth as historical or cosmetic when meter evidence does not support active moisture conditions driving remediation scope.",
      correction:
        "Log moisture readings on affected and unaffected materials with dates and locations — pair with thermal images where finishes conceal wet substrates.",
    },
    {
      mistake: "Remediation started before intake documentation is complete",
      impact:
        "Altered surfaces, removed materials, and running HVAC destroy causation and scope evidence before adjuster walk and supplement review.",
      correction:
        "Complete source, growth, and site-condition documentation before containment or removal — emergency actions still require contemporaneous photos.",
    },
    {
      mistake: "Testing reports submitted without sample location photos or claim narrative",
      impact:
        "Lab results alone rarely justify scope — adjusters cannot connect sample points to billed remediation boundaries.",
      correction:
        "Photograph every sample location, attach chain-of-custody, and write narrative explaining how results support specific line items.",
    },
    {
      mistake: "Failing to link mold scope to prior water mitigation documentation",
      impact:
        "Causation chain breaks when mold follows a water loss but drying history, moisture maps, and prior claim exhibits are not in the file.",
      correction:
        "Attach prior mitigation dry logs, moisture maps, and water loss photos to the mold causation section — see Category 3 and commercial water guides.",
    },
    {
      mistake: "Commercial files without unit or building indexing",
      impact:
        "Multi-unit evidence confusion leads to scope denial per room — adjusters cannot verify which photos support which billed areas.",
      correction:
        "Index photos, folders, and estimate rooms by building and unit from intake. Apply commercial water and fire indexing patterns.",
    },
    {
      mistake: "Submitting estimates without an evidence cross-reference index",
      impact:
        "Mold line items — containment, air scrubbing, testing, removal depth — reduce line by line when exhibits are not mapped to billed scope.",
      correction:
        "Build an attachment index mapping each major line item to photo folders, readings, and reports before carrier submission.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Hidden mold discovered in wall, ceiling, or floor cavities during investigation",
      documentation:
        "Date-stamped cavity photos, discovery log entry, moisture readings on exposed substrates, and narrative before repairs close access.",
      lineItemHint:
        "Additional demolition, framing cleaning, insulation removal, and cavity treatment lines",
    },
    {
      trigger: "Carrier estimate scope smaller than documented growth area",
      documentation:
        "Room-indexed growth photos with approximate area measurements and substrate notes tied to room labels.",
      lineItemHint: "Additional removal, cleaning, and treatment lines by room",
    },
    {
      trigger: "Moisture source repair scope exceeds carrier initial water estimate",
      documentation:
        "Source photos, moisture readings, and narrative linking active leak to expanded affected areas beyond original water scope.",
      lineItemHint: "Additional demo and drying lines tied to newly identified spread",
    },
    {
      trigger: "HVAC system shows growth or heavy contamination in plenum or ducts",
      documentation:
        "Plenum, coil, duct, and register photos with system status log and filter condition at intake.",
      lineItemHint: "Duct cleaning, filter replacement, coil service, and system treatment",
    },
    {
      trigger: "Laboratory testing supports expanded remediation boundaries",
      documentation:
        "Sample location photos, lab report excerpts, and narrative mapping results to additional rooms or removal depth.",
      lineItemHint: "Expanded containment, cleaning, and testing lines",
    },
    {
      trigger: "Commercial unit-by-unit growth exceeds initial common-area-only scope",
      documentation:
        "Unit-indexed photo folders, access logs, and room maps showing per-unit growth beyond original estimate.",
      lineItemHint: "Per-unit demo, containment, and cleaning lines",
    },
    {
      trigger: "Contents with porous mold exposure documented before pack-out",
      documentation:
        "Room-located inventory with photos, condition notes, and cleaning or disposal justification.",
      lineItemHint: "Contents cleaning, manipulation, storage, and replacement lines",
    },
    {
      trigger: "Carrier partial approval or denial on documented mold scope",
      documentation:
        "Indexed resubmission packet quoting denial language with moisture source, growth, and cavity exhibit references.",
      lineItemHint:
        "Supplement resubmission with line-item justification; Claims Ninja supports documentation review and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "How is mold damage documentation different from water damage documentation?",
      answer:
        "Water claims center on time-phased drying evidence — moisture maps, dry logs, and equipment utilization proving materials reached dry standard. Mold claims center on causation plus growth extent — moisture source identification, visible and hidden growth mapping, cavity investigation, and remediation scope evidence. Both require indexed photos and room labels; mold files add causation narratives, hidden cavity discovery logs, and testing exhibits when used.",
    },
    {
      question: "When does laboratory testing support a mold insurance claim?",
      answer:
        "Testing supports claims when sample location photos, chain-of-custody, and narrative connect results to specific remediation boundaries, clearance verification, or disputed growth areas on large commercial losses. Testing without location context rarely justifies scope on desk review. Pre-remediation sampling can define boundaries; post-remediation clearance can support completion when required — see the Post-Remediation Verification (PRV) Documentation Guide for closeout documentation standards.",
    },
    {
      question: "Should commercial mold losses use different documentation standards?",
      answer:
        "Commercial, multifamily, and multi-unit mold losses require scaled indexing — building or unit identifiers, separate structure versus contents folders, and property manager access logs — similar to commercial water and fire documentation patterns. Apply the same evidence standards with property-level organization from intake. See the Commercial Water Loss Documentation Guide and Commercial Fire Claims Guide for indexing playbooks.",
    },
  ],
  relatedResources: [
    {
      label: "Mold Remediation Documentation Guide",
      href: "/resources/guides/mold/mold-remediation-documentation-guide",
    },
    {
      label: "Post-Remediation Verification (PRV) Documentation Guide",
      href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
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
      label: "Moisture Mapping Field Procedure",
      href: "/resources/guides/water-damage/moisture-mapping-guide",
    },
    {
      label: "Dry Log Collection Procedure",
      href: "/resources/guides/water-damage/dry-log-collection-guide",
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
      label: "Commercial Fire Claims Guide",
      href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
    },
    {
      label: "Why Category 3 Water Claims Get Underpaid",
      href: "/resources/blog/why-category-3-water-claims-get-underpaid",
    },
    {
      label: "Documentation Gaps That Trigger Water Claim Denials",
      href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
    },
    {
      label: "Moisture Mapping Mistakes That Cost Contractors Money",
      href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
    },
    { label: "Mold solutions", href: SOLUTION_PATH },
    { label: "Water damage solutions", href: "/solutions/water-damage" },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});
