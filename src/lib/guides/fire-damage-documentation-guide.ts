import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/fire-damage" as const;
const CATEGORY = "fire-damage" as const;
const GUIDE_SLUG = "fire-damage-documentation-guide" as const;

export const FIRE_DAMAGE_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Fire Damage Documentation Guide",
  excerpt:
    "Contractor operational standard for documenting residential and commercial fire damage insurance claims — inspections, structural evidence, smoke and soot migration, contents, estimating support, supplements, and claim recovery.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Fire Damage",
    "Smoke Damage",
    "Soot",
    "Structural Documentation",
    "Contents",
    "HVAC",
    "Supplement",
    "Documentation",
    "Commercial fire",
    "Restoration contractors",
  ],
  publishedAt: "2026-07-08",
  updatedAt: "2026-07-08",
  estimatedMinutes: 26,
  seoTitle:
    "Fire Damage Documentation Guide | Contractor Documentation Standards for Fire Claims",
  seoDescription:
    "Document residential and commercial fire damage insurance claims: structural inspections, smoke migration, soot contamination, contents, estimating support, supplements, and claim recovery.",
  relatedGuideSlugs: [
    "fire-claim-intake-guide",
    "smoke-soot-damage-documentation-guide",
    "contents-inventory-documentation-guide",
    "pack-out-documentation-guide",
    "smoke-documentation-guide",
    "hvac-contamination-guide",
    "odor-documentation-guide",
    "contents-documentation-guide",
    "structural-stabilization-documentation-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "category-3-water-damage-documentation-guide",
    "commercial-water-loss-documentation-guide",
    "commercial-roofing-documentation-guide",
  ],
  relatedBlogSlugs: [
    "fire-damage-claim-documentation-guide",
    "fire-damage-supplement-playbook-for-contractors",
    "smoke-and-soot-damage-documentation-guide",
    "fire-damage-supplement-denial-recovery",
  ],
  faqIds: [
    "fire-damage-documentation-insurance",
    "fire-damage-photos-required",
    "fire-smoke-damage-insurance-coverage",
    "fire-hidden-damage-documentation",
    "fire-supplement-documentation-support",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["fire-damage", "smoke", "commercial"],
  purpose:
    "Fire damage insurance claims require documentation across multiple damage categories — structural, smoke, soot, odor, water from suppression, contents, and HVAC — with scope that expands during demolition and carrier scrutiny that exceeds most other peril types. This guide is the contractor operational standard for documenting residential and commercial fire losses: inspections, structural evidence, secondary damage, estimating support, supplements, and claim recovery — not fire restoration procedures. For field capture detail on smoke, HVAC, odor, contents, and structural stabilization, see the specialty fire guides linked below. For extended contractor learning on fire claim strategy, see the Fire Damage Claim Documentation Guide blog. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "New fire loss assigned and initial site assessment scheduled",
      signal:
        "Claim number issued, property accessible, emergency scope or board-up in progress",
    },
    {
      condition: "Carrier adjuster walk scheduled within 24–72 hours",
      signal:
        "Adjuster appointment on calendar; origin room and migration path still visible",
    },
    {
      condition: "Demolition or tear-out phase where hidden structural damage may appear",
      signal:
        "Demo permits issued, framing exposed, or carrier estimate predates tear-out",
    },
    {
      condition: "Supplement preparation when documented scope exceeds carrier estimate",
      signal:
        "Smoke migration, HVAC, contents, or structural lines missing from carrier sketch",
    },
    {
      condition: "Commercial, multi-unit, or multi-building fire loss with complex scope",
      signal:
        "Property manager coordination, tenant displacement, or mixed occupancy requiring indexed documentation",
    },
  ],
  prerequisites: [
    "Site safety clearance from fire department or building official before interior entry",
    "Claim number, policyholder contact, and carrier adjuster info in job file",
    "Photo naming convention agreed: ClaimNumber_Room_Label_Date or equivalent",
    "Room index template and contents inventory form ready before pack-out",
    "Utility status log template — gas, electric, water, HVAC shutoff confirmation",
    "Project manager or documentation lead assigned on losses exceeding single-room scope",
  ],
  requiredDocumentation: [
    {
      id: "site-safety-clearance",
      label: "Site safety clearance and hazard identification log",
      required: true,
      detail:
        "Document fire department release, structural red-tag status, utility shutoffs, asbestos or lead concerns, and restricted zones before crew entry. Safety documentation supports emergency scope billing and limits liability on unstable structures.",
    },
    {
      id: "exterior-photo-set",
      label: "Exterior documentation — all elevations and roof overview",
      required: true,
      detail:
        "Wide shots of each elevation, roof plane overview, chimney and vent penetrations, board-up and tarp placement, and address identification visible in frame.",
    },
    {
      id: "origin-room-pre-mitigation",
      label: "Origin room pre-mitigation photo set",
      required: true,
      detail:
        "Wide context plus ceiling, wall, floor, and fixture close-ups before cleaning or demolition changes the scene. Label origin room on every frame.",
    },
    {
      id: "migration-walk-index",
      label: "Smoke migration walk with room-indexed photos",
      required: true,
      detail:
        "Photograph halls, closets, stairwells, upper floors, utility spaces, attic and crawlspace access, and adjoining units with visible soot, stain, or odor — even when damage looks minor.",
    },
    {
      id: "structural-component-photos",
      label: "Structural component documentation — framing, roof, walls, floors",
      required: true,
      detail:
        "Char depth, heat damage, truss or joist compromise, decking, sheathing, and load-bearing members with measurements and notes on repair versus replacement.",
    },
    {
      id: "hvac-status-and-registers",
      label: "HVAC status, filter condition, and register photos",
      required: true,
      detail:
        "System off confirmation, filter condition, register staining, equipment nameplate, and note whether system ran during or after fire event.",
    },
    {
      id: "water-suppression-damage",
      label: "Water damage from suppression efforts",
      required: true,
      detail:
        "Standing water extent, saturation lines, ceiling collapse from water weight, and moisture readings where structural drying overlaps fire scope.",
    },
    {
      id: "contents-room-inventory",
      label: "Contents survey and room-located inventory start",
      required: true,
      detail:
        "Photograph high-value and questionable items in place before pack-out. Room-located inventory with description, quantity, condition, and salvageability.",
    },
    {
      id: "measurements-and-sketch",
      label: "Room measurements reconciled to carrier sketch",
      required: true,
      detail:
        "Square footage, ceiling height, linear feet of affected assemblies, and room names matching estimate sketch and photo folders.",
    },
    {
      id: "demo-discovery-log",
      label: "Demolition discovery log with contemporaneous photos",
      required: true,
      detail:
        "Date-stamped photos of hidden damage found during tear-out — char in cavities, compromised members, code-triggered conditions — with narrative before repairs close access.",
    },
    {
      id: "estimate-evidence-index",
      label: "Estimate-to-evidence cross-reference index",
      required: true,
      detail:
        "Map each billed line to photo folder, report excerpt, or measurement note. Indexed evidence supports supplement submission and carrier meetings.",
    },
    {
      id: "supplement-package-ready",
      label: "Supplement package with cover letter and attachment index",
      required: true,
      detail:
        "Organized packet: denial or gap narrative, labeled photos by room, engineering or testing reports where used, and line-item justification before resubmission.",
    },
  ],
  steps: [
    {
      id: "why-extensive-documentation",
      title: "Why Fire Damage Claims Require Extensive Documentation",
      actions: [
        "Fire losses produce multiple simultaneous damage categories — structural char and heat damage, smoke and soot migration, odor contamination, water from suppression, contents damage, and HVAC system spread — each requiring separate evidence trails.",
        "Smoke and soot migrate through halls, cavities, HVAC ducts, and upper floors beyond the origin room. Carriers challenge migration scope when intake documentation covers only the fire room.",
        "Water from fire suppression creates secondary moisture damage on floors, ceilings, and assemblies already compromised by heat — scope overlaps with structural and contents lines.",
        "Hidden damage — char in wall cavities, compromised trusses, corroded mechanical connections — typically appears only during demolition, requiring contemporaneous discovery documentation.",
        "Fire claims face increased carrier scrutiny on cleaning versus replacement, contents salvageability, HVAC scope, code upgrades, and emergency line credibility compared to single-peril losses.",
        "Complex claim scopes span structure, contents pack-out, deodorization, temporary protection, board-up, engineering reports, and phased rebuild — documentation must stay indexed as scope evolves.",
      ],
      notes:
        "See Claim Documentation Standards for company-wide photo labeling and file organization. Fire losses amplify documentation gaps because multiple trades and damage types share one claim file.",
    },
    {
      id: "initial-fire-inspection",
      title: "Initial Fire Damage Inspection",
      owner: "field",
      actions: [
        "Confirm site safety with fire department release or building official clearance before entry. Document red-tag status, unstable zones, and required PPE.",
        "Verify utility status — gas, electric, water — and confirm HVAC is off until inspection is documented. Log shutoff timing and responsible party.",
        "Assess structural stability: sagging floors, compromised trusses, load-bearing wall damage, and roof deck integrity. Flag engineering referral when structural compromise is suspected.",
        "Coordinate with emergency services and property owner on access restrictions, board-up scope, and temporary protection requirements.",
        "Capture initial photography: exterior all elevations, address ID, board-up and tarp, then interior walkthrough from least to most affected areas.",
        "Conduct exterior documentation before interior when safe — roof overview, siding char, window failure, and detached structures.",
        "Perform interior walkthrough documenting origin room, migration path, and utility spaces. Identify hazards: exposed wiring, asbestos-suspect materials, standing water.",
        "Open room index and photo naming convention before second visit — claim number, room label, date on every frame.",
      ],
      notes:
        "See Fire Claim Intake Checklist for the first-visit execution checklist. Running HVAC before register, filter, and duct evidence is captured spreads contamination and weakens supplement files.",
    },
    {
      id: "structural-documentation",
      title: "Structural Documentation",
      owner: "field",
      actions: [
        "Framing — photograph char depth, heat discoloration, and member compromise with measurements. Note repair versus replacement criteria and engineer flags.",
        "Roof systems — document decking, trusses, rafters, sheathing, underlayment, and penetration flashings. Wide and close-up pairs for each damaged plane.",
        "Exterior walls — char patterns, siding melt or warp, sheathing exposure, and insulation condition behind opened assemblies.",
        "Interior walls and ceilings — document both sides of affected partitions, ceiling collapse areas, and fire-stop conditions in concealed spaces.",
        "Flooring — heat damage, char, water saturation, and subfloor exposure with removal depth notes.",
        "Windows and doors — frame warping, glass failure, hardware heat damage, and weather-seal compromise.",
        "Stairs and guardrails — structural integrity, char on stringers, and code-compliant replacement triggers.",
        "Attached garages and accessory structures — separate photo index; carriers often split scope by structure.",
        "Mechanical systems — furnace, water heater, electrical panel, and plumbing runs with heat or smoke exposure documentation.",
        "Support structural documentation with measurements, material notes, and third-party engineering reports when structural scope is disputed.",
      ],
      notes:
        "See Structural Stabilization Documentation Procedure for shoring and emergency structural scope. Photograph hidden cavities during demolition before repairs close access.",
    },
    {
      id: "smoke-soot-secondary-damage",
      title: "Smoke, Soot & Secondary Damage",
      owner: "field",
      actions: [
        "Document smoke migration path from origin through halls, stairwells, closets, upper floors, and utility chases — labeled photos in every affected space.",
        "Capture soot deposition by substrate: dry smoke, wet smoke, protein residue, and fuel-oil soot where applicable — each affects cleaning method and line items.",
        "HVAC contamination — registers, return plenums, filter condition, coil and blower compartment, and duct interior where accessible. Confirm system status log.",
        "Odor damage — document odor presence by room, porous material exposure, and treatment area boundaries before sealers or deodorization equipment deploy.",
        "Water damage from suppression — saturation lines, ceiling collapse from water weight, and overlap with structural demo scope.",
        "Corrosion risk — document metal surfaces, electronics, and mechanical components exposed to acidic soot and moisture combination.",
        "Electronics and equipment — photograph condition, location, and contamination before cleaning or disposal decisions.",
        "Contents contamination — room-located inventory with photos for high-value items; separate structural from contents evidence folders.",
        "Hidden damage — photograph soot in cavities, attic insulation, crawlspace, and interstitial spaces during demo when access exists.",
      ],
      notes:
        "See Smoke & Soot Damage Documentation Guide for the smoke and soot specialty standard. See Contents Inventory Documentation Guide for personal property and business contents inventory standards. See Smoke and Soot Documentation Procedure, HVAC Contamination Documentation Procedure, Odor Mitigation Documentation Procedure, and Contents Documentation Procedure for field capture detail on each specialty scope.",
    },
    {
      id: "estimating-documentation",
      title: "Estimating Documentation",
      owner: "office",
      actions: [
        "Demolition — document square footage, material types, hazmat considerations, and debris hauling with before photos tied to room labels.",
        "Cleaning — test-clean results, wipe versus wash versus blast methods, and substrate condition photos supporting line item selection.",
        "Sealing — document porous surfaces requiring sealant before finish, with product and application area notes.",
        "Deodorization — treatment method logs, equipment placement photos, and room boundaries for ozone, hydroxyl, thermal fog, or HEPA filtration.",
        "Structural repairs — tie framing, drywall, flooring, and finish lines to structural photo folders and measurement notes.",
        "Contents handling — pack-out inventory, storage location, cleaning method, and reset documentation aligned to contents line items.",
        "Temporary protection — board-up, tarp, fencing, and shoring with dated photos supporting emergency scope lines.",
        "Emergency mitigation — contemporaneous photos of emergency actions; board-up without intake photos reduces credibility on emergency line review.",
        "Equipment usage — log dehumidifiers, air scrubbers, hydroxyl or ozone units with placement photos and runtime where billed.",
      ],
      notes:
        "Align room names across photos, carrier sketch, and estimate. Cross-reference each billed line to a photo folder or report excerpt before submission.",
    },
  ],
  qualityGates: [
    {
      id: "safety-documented",
      label: "Site safety clearance and utility status documented before production",
      required: true,
      detail:
        "Fire department release or building official clearance on file; HVAC off confirmation logged.",
    },
    {
      id: "room-labels-consistent",
      label: "Room labels consistent across photos, sketch, and estimate",
      required: true,
      detail:
        "Every photo folder and line item maps to the same room naming convention.",
    },
    {
      id: "migration-documented",
      label: "Migration path documented beyond origin room",
      required: true,
      detail:
        "Halls, upper floors, and utility spaces photographed when soot, stain, or odor present.",
    },
    {
      id: "structural-demo-photos",
      label: "Demolition discovery photos captured contemporaneously",
      required: true,
      detail:
        "Hidden structural damage photographed during tear-out before repairs close access.",
    },
    {
      id: "hvac-evidence-complete",
      label: "HVAC evidence complete before system restart",
      required: true,
      detail:
        "Filter, register, and equipment photos on file; system status log documents shutoff timing.",
    },
    {
      id: "contents-pre-packout",
      label: "Contents inventory started before pack-out",
      required: true,
      detail:
        "High-value items photographed in place; room-located inventory aligned to contents lines.",
    },
    {
      id: "estimate-indexed",
      label: "Estimate cross-referenced to evidence index",
      required: true,
      detail:
        "Each major line item links to photo folder, report, or measurement note.",
    },
    {
      id: "supplement-ready",
      label: "Supplement package indexed before carrier submission",
      required: true,
      detail:
        "Cover letter, attachment index, and gap narrative prepared for supplement or reinspection.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Missing or undated photographs",
      impact:
        "Carriers deny cleaning, demolition, and emergency lines when contemporaneous visual evidence is absent or cannot be tied to date of loss conditions.",
      correction:
        "Capture wide and close-up photos at every visit with room labels and dates in filenames before cleaning or demo changes the scene.",
    },
    {
      mistake: "Poor room labeling across photos, sketch, and estimate",
      impact:
        "Desk reviewers cannot map evidence to line items — scope reduces proportionally when room names mismatch.",
      correction:
        "Adopt one room naming convention at intake and reconcile to carrier sketch before estimate submission.",
    },
    {
      mistake: "Incomplete moisture documentation on suppression water damage",
      impact:
        "Water overlap lines denied when saturation and drying scope lack readings, photos, or chamber documentation.",
      correction:
        "Document standing water extent, saturation lines, and moisture readings where suppression water affects structural assemblies.",
    },
    {
      mistake: "Missing smoke migration documentation beyond origin room",
      impact:
        "Migration supplements appear as late scope inflation without hall, upper-floor, and cavity photos at intake.",
      correction:
        "Walk the full migration path at first inspection and photograph every affected space — see Smoke and Soot Documentation Procedure.",
    },
    {
      mistake: "Inadequate demolition notes and discovery photos",
      impact:
        "Hidden structural and code-triggered scope denied when tear-out evidence is not captured before repairs close access.",
      correction:
        "Maintain a demolition discovery log with date-stamped photos of every unexpected condition found during tear-out.",
    },
    {
      mistake: "Missing engineering support on structural scope disputes",
      impact:
        "Carriers approve patch repairs when char depth, member compromise, or load-path concerns lack third-party documentation.",
      correction:
        "Refer structural evaluation when compromise is suspected; attach engineering reports to supplement packets with photo cross-references.",
    },
    {
      mistake: "Incomplete contents documentation before pack-out",
      impact:
        "Contents cleaning, manipulation, and replacement lines reduce when inventory and photos do not precede move-out.",
      correction:
        "Start room-located inventory and photograph high-value items in place before pack-out — see Contents Inventory Documentation Guide, Pack-Out Documentation Guide, and Contents Documentation Procedure.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Hidden structural damage discovered during demolition",
      documentation:
        "Date-stamped cavity photos, char depth measurements, engineer report if obtained, and narrative before repairs close access.",
      lineItemHint:
        "Additional framing, sheathing, truss replacement, and structural repair lines",
    },
    {
      trigger: "Carrier estimate scope smaller than documented demolition requirements",
      documentation:
        "Pre-demo photos, hazmat test results if applicable, and square footage measurements tied to room labels.",
      lineItemHint: "Additional demo, debris haul, hazmat handling, and disposal",
    },
    {
      trigger: "Code upgrades triggered at repair on fire rebuild",
      documentation:
        "Code edition, section citation, permit application, and inspector comments tied to triggered work — not generic code dumps.",
      lineItemHint: "Code upgrade lines for electrical, fire-stop, HVAC, and building envelope",
    },
    {
      trigger: "Smoke migration documented beyond origin room on carrier estimate",
      documentation:
        "Indexed migration folders with path narrative, test-clean results, and room-by-room contamination photos.",
      lineItemHint: "Smoke wipe, seal, and cleaning lines in halls, bedrooms, and closets",
    },
    {
      trigger: "HVAC registers show staining or system ran during fire event",
      documentation:
        "Register photos, filter condition, duct inspection excerpts, and system-off log at intake.",
      lineItemHint: "Duct cleaning, filter replacement, coil service, and system inspection",
    },
    {
      trigger: "Water damage from suppression overlaps fire structural scope",
      documentation:
        "Saturation photos, moisture readings, demo exposing wet assemblies, and drying equipment logs.",
      lineItemHint: "Additional demo, drying equipment, and structural drying lines",
    },
    {
      trigger: "Contents density and high-value items visible on walkthrough",
      documentation:
        "Room-located inventory with photos before pack-out; storage and cleaning method notes.",
      lineItemHint: "Contents manipulation, pack-out, cleaning, storage, and reset",
    },
    {
      trigger: "Specialty cleaning required for electronics, art, or documents",
      documentation:
        "Item photos, third-party restoration vendor reports, and condition notes supporting specialty line items.",
      lineItemHint: "Electronics cleaning, document recovery, and specialty contents handling",
    },
    {
      trigger: "Engineering or testing reports support expanded scope",
      documentation:
        "Structural engineer letter, air quality testing, asbestos or lead survey, and cross-reference to photo evidence.",
      lineItemHint: "Engineering fees, testing, and report-supported scope lines",
    },
    {
      trigger: "Carrier partial approval or denial on documented fire scope",
      documentation:
        "Indexed resubmission packet quoting denial language with attachment names — see Fire Damage Supplement Denial Recovery blog.",
      lineItemHint:
        "Supplement resubmission with line-item justification; Claims Ninja supports documentation review and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "How is fire damage documentation different from water damage documentation?",
      answer:
        "Water claims center on time-phased drying evidence — moisture maps, dry logs, and equipment utilization. Fire claims center on spatial contamination across multiple damage types — structural, smoke, soot, odor, contents, and HVAC — with scope that expands during demolition. Both require indexed photos and room labels; fire files add migration paths, contents inventory, and structural discovery logs.",
    },
    {
      question: "When should fire damage supplements be submitted?",
      answer:
        "Submit when documented scope exceeds the carrier estimate and evidence is organized — after initial scope review, after demolition discovery, or when specialty reports return. Phased supplements with contemporaneous photos beat end-of-job narrative assembled after production closes access.",
    },
    {
      question: "Should commercial fire losses use different documentation standards?",
      answer:
        "Commercial and multi-unit fire losses require scaled indexing — building or unit identifiers, tenant coordination logs, and separate structure versus contents folders — similar to commercial water loss documentation patterns. Apply the same evidence standards with property-level organization from intake.",
    },
  ],
  relatedResources: [
    {
      label: "Fire Claim Intake Checklist",
      href: "/resources/guides/fire-damage/fire-claim-intake-guide",
    },
    {
      label: "Smoke & Soot Damage Documentation Guide",
      href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
    },
    {
      label: "Smoke and Soot Documentation Procedure",
      href: "/resources/guides/fire-damage/smoke-documentation-guide",
    },
    {
      label: "HVAC Contamination Documentation Procedure",
      href: "/resources/guides/fire-damage/hvac-contamination-guide",
    },
    {
      label: "Odor Mitigation Documentation Procedure",
      href: "/resources/guides/fire-damage/odor-documentation-guide",
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
      label: "Contents Documentation Procedure",
      href: "/resources/guides/fire-damage/contents-documentation-guide",
    },
    {
      label: "Structural Stabilization Documentation Procedure",
      href: "/resources/guides/fire-damage/structural-stabilization-documentation-guide",
    },
    {
      label: "Claim Documentation Standards",
      href: "/resources/guides/general-claims/documentation-standards-guide",
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
      label: "Commercial Roofing Documentation Guide",
      href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
    },
    {
      label: "Fire Damage Claim Documentation Guide (blog)",
      href: "/resources/blog/fire-damage-claim-documentation-guide",
    },
    {
      label: "Fire Damage Supplement Playbook",
      href: "/resources/blog/fire-damage-supplement-playbook-for-contractors",
    },
    {
      label: "Smoke and Soot Damage Documentation Guide (blog)",
      href: "/resources/blog/smoke-and-soot-damage-documentation-guide",
    },
    {
      label: "Fire Damage Supplement Denial Recovery",
      href: "/resources/blog/fire-damage-supplement-denial-recovery",
    },
    { label: "Fire damage solutions", href: SOLUTION_PATH },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});
