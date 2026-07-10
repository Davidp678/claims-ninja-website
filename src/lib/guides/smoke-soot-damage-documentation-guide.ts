import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/fire-damage" as const;
const CATEGORY = "fire-damage" as const;
const GUIDE_SLUG = "smoke-soot-damage-documentation-guide" as const;

export const SMOKE_SOOT_DAMAGE_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Smoke & Soot Damage Documentation Guide",
  excerpt:
    "Contractor operational standard for documenting smoke and soot contamination on fire insurance claims — contamination types, inspection workflows, migration evidence, HVAC scope, estimating support, supplements, and claim recovery.",
  category: CATEGORY,
  guideType: "documentation-standard",
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Smoke Damage",
    "Soot",
    "Fire Damage",
    "HVAC",
    "Odor",
    "Migration",
    "Supplement",
    "Documentation",
    "Restoration contractors",
    "Contents",
  ],
  publishedAt: "2026-07-09",
  updatedAt: "2026-07-09",
  estimatedMinutes: 24,
  seoTitle:
    "Smoke & Soot Damage Documentation Guide | Contractor Standards for Fire Claims",
  seoDescription:
    "Document smoke and soot damage for insurance claims: contamination types, room-by-room inspection, migration evidence, HVAC scope, clean-versus-replace support, supplements, and claim recovery.",
  relatedGuideSlugs: [
    "fire-damage-documentation-guide",
    "contents-inventory-documentation-guide",
    "pack-out-documentation-guide",
    "fire-claim-intake-guide",
    "smoke-documentation-guide",
    "hvac-contamination-guide",
    "odor-documentation-guide",
    "contents-documentation-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "category-3-water-damage-documentation-guide",
    "commercial-water-loss-documentation-guide",
  ],
  relatedBlogSlugs: [
    "why-fire-damage-claims-get-underpaid",
    "smoke-and-soot-damage-documentation-guide",
    "fire-damage-claim-documentation-guide",
    "fire-damage-supplement-playbook-for-contractors",
    "hvac-contamination-in-fire-damage-claims",
    "odor-mitigation-in-fire-damage-claims",
  ],
  faqIds: [
    "smoke-damage-documentation-insurance",
    "soot-damage-insurance-coverage",
    "smoke-damage-photos-required",
    "smoke-damage-clean-vs-replace",
    "smoke-damage-supplement-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["fire-damage", "smoke"],
  purpose:
    "Smoke and soot contamination is the highest-value documentation gap on most fire claims — carriers approve origin-room cleaning while denying migration, HVAC spread, odor, and replacement scope when evidence is unlabeled, incomplete, or captured after production changes the scene. This guide is the contractor operational standard for documenting smoke and soot damage during insurance claims: contamination types, inspection workflows, evidence collection, estimating support, supplements, and claim recovery — not restoration procedures. For full-file fire standards including structural and contents scope, see the Fire Damage Documentation Guide. For field capture execution, see the Smoke and Soot Documentation Procedure and linked specialty guides. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Soot or smoke visible in rooms beyond the fire origin",
      signal:
        "Staining in halls, upper floors, closets, or porous substrates; odor present where walls appear intact",
    },
    {
      condition: "Carrier adjuster walk scheduled and migration path still visible",
      signal:
        "Adjuster appointment on calendar; pre-cleaning conditions intact in non-origin rooms",
    },
    {
      condition: "Cleaning versus replacement decisions needed on trim, cabinetry, or drywall",
      signal:
        "Substrate test-clean results will determine scope; carrier may apply wrong cleaning macro",
    },
    {
      condition: "HVAC system ran during or after fire event",
      signal:
        "Register staining, filter contamination, or duct spread suspected before system restart",
    },
    {
      condition: "Supplement preparation when smoke scope exceeds carrier estimate",
      signal:
        "Migration rooms, HVAC lines, or specialty cleaning missing from carrier sketch",
    },
    {
      condition: "Wildfire or fuel-oil soot loss with distinct contamination profile",
      signal:
        "Protein, oily, or fine particulate residue requiring distinct documentation and line items",
    },
  ],
  prerequisites: [
    "Site safety clearance before interior entry; HVAC off until inspection documented",
    "Claim number, policyholder contact, and carrier adjuster info in job file",
    "Photo naming convention agreed: ClaimNumber_Room_Label_Date or equivalent",
    "Room index template ready before second visit or pack-out",
    "HVAC status log template — system off confirmation, filter condition, register photos",
    "Test-clean kit or procedure ready when clean-versus-replace scope is disputed",
  ],
  requiredDocumentation: [
    {
      id: "surface-contamination",
      label: "Surface contamination photos — wide context and substrate close-ups",
      required: true,
      detail:
        "Wide room context plus close photos showing soot color, texture, and extent on ceilings, walls, trim, and fixtures. Label soot type where identifiable.",
    },
    {
      id: "ceiling-staining",
      label: "Ceiling staining and vertical spread documentation",
      required: true,
      detail:
        "Document ceiling discoloration, soot deposition patterns, and vertical spread at wall-ceiling intersections with room labels.",
    },
    {
      id: "wall-staining",
      label: "Wall staining and porous substrate exposure",
      required: true,
      detail:
        "Close photos at outlets, corners, and behind removed trim showing stain depth. Note drywall, plaster, or panel substrate type.",
    },
    {
      id: "flooring-contamination",
      label: "Flooring contamination and subfloor exposure",
      required: true,
      detail:
        "Document soot on carpet, hardwood, tile, and exposed subfloor during demo. Note heat versus smoke-only impact.",
    },
    {
      id: "cabinet-interiors",
      label: "Cabinet interiors, toe kicks, and built-in cavities",
      required: true,
      detail:
        "Open cabinet doors, photograph interior shelves and back panels, and document toe-kick and void spaces where smoke migrates unseen.",
    },
    {
      id: "hvac-registers",
      label: "HVAC register, return, and filter condition photos",
      required: true,
      detail:
        "Register staining, return plenum condition, filter contamination, and system-off confirmation before restart.",
    },
    {
      id: "ductwork-evidence",
      label: "Ductwork and equipment compartment evidence",
      required: false,
      detail:
        "Accessible duct interior photos, coil and blower compartment condition, and nameplate. Attach specialist inspection excerpts when obtained.",
    },
    {
      id: "appliances-electronics",
      label: "Appliances and electronics contamination documentation",
      required: true,
      detail:
        "Photograph condition, location, and contamination on mechanical and electronic components before cleaning or disposal decisions.",
    },
    {
      id: "contents-soft-goods",
      label: "Contents and soft goods room-located inventory",
      required: true,
      detail:
        "Photograph high-value and questionable items in place. Separate structural smoke folders from contents evidence.",
    },
    {
      id: "insulation-cavities",
      label: "Insulation and cavity contamination during accessible inspection",
      required: false,
      detail:
        "Attic insulation, crawlspace, and interstitial cavity photos when migration is claimed — capture before concealment.",
    },
    {
      id: "migration-path-narrative",
      label: "Migration path narrative with room-indexed photos",
      required: true,
      detail:
        "Written path from origin through halls, stairwells, chases, and upper floors. Every photographed room on room index with sketch-matching name.",
    },
    {
      id: "test-clean-results",
      label: "Test-clean before-and-after photos on disputed substrates",
      required: false,
      detail:
        "Required when carrier may argue clean versus replace. Document procedure, substrate, and outcome per room.",
    },
    {
      id: "odor-assessment-log",
      label: "Odor assessment log by room",
      required: true,
      detail:
        "Pre-treatment odor notes by room, porous material exposure, and treatment boundaries before sealers deploy.",
    },
    {
      id: "estimate-evidence-index",
      label: "Estimate-to-evidence cross-reference index",
      required: true,
      detail:
        "Map each smoke, soot, seal, deodorization, and HVAC line to photo folder, test report, or measurement note.",
    },
  ],
  steps: [
    {
      id: "why-smoke-soot-documentation-matters",
      title: "Why Smoke & Soot Documentation Matters",
      actions: [
        "Hidden contamination — soot and odor migrate through cavities, HVAC ducts, and upper floors beyond visible origin damage. Carriers deny scope they cannot map to labeled photos.",
        "Carrier scrutiny — desk reviewers test whether migration is localized or systemic. Unlabeled camera rolls and origin-only photo sets fail supervisor review even when field conditions warrant full-house cleaning.",
        "Cleaning versus replacement disputes — carriers apply generic smoke wipe macros when substrate photos, soot type notes, and test-clean results are absent.",
        "Secondary damage — acidic soot combined with suppression moisture accelerates corrosion on metal, electronics, and mechanical components. Document exposure before cleaning obscures condition.",
        "Long-term odor issues — odor claims without contemporaneous room logs and treatment boundaries reduce when sealers and finishes conceal porous contamination.",
        "Documentation requirements — room labels must match across photos, carrier sketch, and estimate. Indexed evidence supports supplements when scope exceeds the carrier estimate.",
      ],
      notes:
        "See Claim Documentation Standards for company-wide photo labeling. Smoke losses amplify documentation gaps because cleaning, HVAC, odor, and contents scope share one claim file.",
    },
    {
      id: "understanding-smoke-soot-damage",
      title: "Understanding Smoke & Soot Damage",
      owner: "field",
      actions: [
        "Wet soot — sticky, smeary residue from low-heat, smoldering fires. Document smear behavior on substrates; test-clean results support specialty cleaning lines.",
        "Dry soot — fine, powdery particulate from fast-burning fires. Document distribution on ceilings and porous surfaces; HEPA vacuuming and wipe methods need substrate close-ups.",
        "Protein residue — nearly invisible, greasy film from kitchen or protein fires. Document by touch-stain indicators, cabinet interiors, and odor — not visible soot alone.",
        "Fuel oil soot — heavy, sticky residue from furnace puff-back or fuel fires. Document distinct texture and distribution; carriers may dispute without source-type notes.",
        "Wildfire smoke — fine particulate infiltration through envelope gaps, attic vents, and HVAC. Document exterior entry points and interior deposition by room.",
        "HVAC contamination — system spread amplifies room count. Document register staining, filter condition, duct paths, and system-off log before restart.",
        "Odor migration — vapor-phase contamination follows duct runs, chases, and stairwells. Document odor by room with path narrative linking to physical spread.",
        "Airborne contamination — document particulate in attics, crawlspaces, and interstitial spaces when migration path logic requires cavity evidence.",
      ],
      notes:
        "Document contamination type and substrate — not remediation method. Soot type drives line item selection and clean-versus-replace decisions on carrier review.",
    },
    {
      id: "inspection-workflow",
      title: "Inspection Workflow",
      owner: "field",
      actions: [
        "Exterior documentation — address ID, soot on siding, soffit staining, vent penetrations, and envelope entry points for wildfire or exterior smoke sources.",
        "Interior room-by-room inspection — walk from origin through migration path in consistent order. Wide context then substrate close-ups in every affected space.",
        "HVAC system documentation — confirm system off, photograph registers and returns in each room, filter condition, equipment nameplate, and accessible duct runs.",
        "Attic inspections — pull-down or access hatch photos showing insulation staining, soot on decking, and penetration paths from origin or HVAC.",
        "Crawlspace inspections — document soot on subfloor, insulation, and mechanical runs when migration path or HVAC spread is alleged.",
        "Cabinet interiors — open doors, photograph shelves, back panels, and void spaces. Document toe kicks and outlet openings where smoke concentrates.",
        "Hidden cavities — photograph behind removed trim, outlet openings, and opened assemblies during demo when migration scope is claimed.",
        "Electronics — document location, model, and contamination on TVs, appliances, panels, and equipment before cleaning or disposal.",
        "Mechanical systems — furnace, water heater, electrical panel, and plumbing with heat or smoke exposure documentation separate from general wipe photos.",
      ],
      notes:
        "See Fire Claim Intake Checklist for first-visit execution. Running HVAC before register, filter, and duct evidence is captured spreads contamination and weakens supplement files.",
    },
    {
      id: "documentation-standards",
      title: "Documentation Standards",
      owner: "field",
      actions: [
        "Photographs — wide room context plus close substrate photos in every affected space. Filenames or job tags with claim number, room, date, and damage type.",
        "Notes — short path narrative explaining how smoke reached each documented room. Soot type, substrate, and clean-versus-replace recommendation per room.",
        "Measurements — square footage of affected assemblies, linear feet of trim, and ceiling height where scope lines require quantity support.",
        "Room labeling — one naming convention across photos, sketch, and estimate. Reconcile to carrier sketch before submission.",
        "Supporting evidence — test-clean results, HVAC inspection excerpts, air quality or wipe test reports, and manufacturer guidance on non-restorable items.",
        "Trade separation — separate smoke wipe folders from structural rebuild, HVAC, odor, and contents evidence so desk reviewers apply correct logic per line.",
      ],
      notes:
        "See Photo Documentation Field Procedure for company-wide capture standards. Every cleaning line needs close substrate photos — not wide room shots alone.",
    },
    {
      id: "estimating-documentation",
      title: "Estimating Documentation",
      owner: "office",
      actions: [
        "Cleaning — test-clean results, wipe versus wash versus blast methods, and substrate photos supporting HWS and specialty cleaning lines.",
        "Sealing — document porous surfaces requiring sealant before finish, with product and application area notes tied to room labels.",
        "Deodorization — treatment method logs, equipment placement photos, and room boundaries for hydroxyl, ozone, thermal fog, or HEPA filtration.",
        "Thermal fogging — document affected volume, access points sealed, and pre/post treatment notes with room index.",
        "HEPA vacuuming — document affected surfaces, filter changes, and area boundaries supporting equipment and labor lines.",
        "HVAC cleaning — register photos, filter condition, duct inspection excerpts, and partial-system diagrams when only portions are affected.",
        "Duct cleaning — tie scope to contamination evidence on registers and inspection reports; separate from general smoke wipe folders.",
        "Insulation removal — attic and cavity photos showing soot-impregnated insulation with square footage and removal depth notes.",
        "Contents handling — pack-out inventory, storage location, cleaning method, and reset documentation aligned to contents line items.",
        "Specialty cleaning — electronics, documents, art, and textiles with item photos and vendor reports supporting specialty lines.",
        "Replacement — when test-clean fails or manufacturer guidance prohibits restoration, document substrate condition, test results, and non-restorable determination.",
      ],
      notes:
        "Align room names across photos, carrier sketch, and estimate. Cross-reference each billed line to a photo folder or report excerpt before submission.",
    },
    {
      id: "supplement-opportunities",
      title: "Supplement Opportunities",
      owner: "supplement-coordinator",
      actions: [
        "Hidden contamination — cavity, attic, and crawlspace photos discovered during demo with date-stamped narrative before repairs close access.",
        "Odor migration — room odor logs plus path narrative linking duct runs, chases, and stairwells to affected spaces omitted from carrier estimate.",
        "HVAC cleaning — register staining, filter contamination, and inspection report excerpts when carrier estimate omits duct or equipment scope.",
        "Electronics evaluation — item photos and specialist evaluation reports supporting cleaning versus replacement on contaminated equipment.",
        "Specialty testing — air quality, wipe test, or surface sampling reports with cross-reference to photo evidence and affected rooms.",
        "Laboratory reports — attach when carrier disputes contamination severity or scope; index report conclusions to room labels and line items.",
        "Additional cleaning — migration rooms omitted from carrier sketch with indexed folders and path narrative.",
        "Additional demolition — porous assemblies requiring removal when test-clean fails; document before-and-after test areas.",
        "Replacement versus cleaning — manufacturer guidance, test-clean failure photos, and substrate condition supporting replace over clean.",
        "Manufacturer guidance — attach product bulletins prohibiting restoration on specific materials when carrier argues clean-only scope.",
      ],
      notes:
        "See Fire Damage Supplement Playbook for submission workflow. Phased supplements with contemporaneous evidence outperform end-of-job narrative assembled after production.",
    },
    {
      id: "common-documentation-mistakes",
      title: "Common Documentation Mistakes",
      actions: [
        "Missing room photographs — origin-room-only documentation when migration rooms have visible soot, stain, or odor.",
        "Poor labeling — unlabeled camera rolls without room index or cover letter map; desk reviewers cannot match evidence to line items.",
        "Missing HVAC documentation — system restarted before register, filter, and duct evidence captured; spread scope becomes unprovable.",
        "Failure to document odor — odor lines submitted without pre-treatment room logs or treatment boundary photos.",
        "Incomplete contents documentation — pack-out before room-located inventory and high-value item photos.",
        "Missing testing reports — contamination severity disputed without contemporaneous test results indexed to rooms.",
        "Inadequate supporting notes — migration claimed without written path narrative from origin to affected spaces.",
        "One-size smoke wipe documentation — mixed soot types documented with generic photos; carriers reject specialty cleaning lines.",
      ],
      notes:
        "Audit files before carrier submission. Busy photo folders without index look defensible but fail supervisor review.",
    },
    {
      id: "smoke-soot-documentation-checklist",
      title: "Smoke & Soot Documentation Checklist",
      owner: "project-manager",
      actions: [
        "Photography — wide and close substrate photos in every affected room with consistent filename convention.",
        "Room inventory — room index complete with sketch-matching names, photo counts, and key line items per room.",
        "Smoke mapping — migration path narrative written and photos captured at stairwells, chases, and penetrations.",
        "HVAC documentation — system-off log, register photos, filter condition, and inspection attachments before restart.",
        "Contents documentation — high-value items photographed in place; inventory started before pack-out.",
        "Estimate review — each smoke, soot, seal, deodorization, and HVAC line cross-referenced to evidence folder.",
        "Supporting documentation — test-clean results, reports, and manufacturer guidance indexed to line items.",
        "Supplement preparation — gap narrative, attachment index, and cover letter mapping photos to unpaid lines.",
        "Carrier meetings — evidence organized by room for walkthrough; sketch parity confirmed before adjuster visit.",
        "Final quality review — documentation lead confirms quality gates before invoice or supplement submission.",
      ],
      notes:
        "See Smoke and Soot Documentation Procedure for field execution detail. Run this checklist at intake, pre-submission, and before supplement resubmission.",
    },
  ],
  qualityGates: [
    {
      id: "photography-complete",
      label: "Wide and close substrate photos captured in every affected room",
      required: true,
      detail:
        "Not origin-room-only. Halls, closets, upper floors, and utility spaces included when soot, stain, or odor present.",
    },
    {
      id: "room-inventory-indexed",
      label: "Room inventory index complete with sketch-matching names",
      required: true,
      detail:
        "Every photographed room on index with photo count, key line items, and disposition.",
    },
    {
      id: "smoke-mapping-documented",
      label: "Smoke mapping — migration path narrative and path photos on file",
      required: true,
      detail:
        "Written path from origin to each affected room; stairwell and chase photos when migration claimed.",
    },
    {
      id: "hvac-evidence-before-restart",
      label: "HVAC documentation complete before system restart",
      required: true,
      detail:
        "System-off log, register photos, filter condition, and equipment photos on file.",
    },
    {
      id: "contents-pre-packout",
      label: "Contents documentation started before pack-out",
      required: true,
      detail:
        "High-value items photographed in place; room-located inventory aligned to contents lines.",
    },
    {
      id: "estimate-cross-referenced",
      label: "Estimate reviewed and cross-referenced to evidence index",
      required: true,
      detail:
        "Each smoke, soot, seal, deodorization, and HVAC line links to photo folder or report.",
    },
    {
      id: "supporting-docs-indexed",
      label: "Supporting documentation indexed — test-clean, reports, manufacturer guidance",
      required: true,
      detail:
        "Reports and test results attached with conclusions mapped to room labels and line items.",
    },
    {
      id: "supplement-package-ready",
      label: "Supplement preparation complete when scope exceeds carrier estimate",
      required: true,
      detail:
        "Gap narrative, attachment index, and cover letter prepared before resubmission.",
    },
    {
      id: "carrier-meeting-ready",
      label: "Carrier meeting evidence organized by room",
      required: true,
      detail:
        "Sketch parity confirmed; folders navigable for adjuster walkthrough or desk review.",
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
      mistake: "Missing room photographs beyond origin",
      impact:
        "Migration supplements denied as late scope inflation; cleaning lines cut on unaffected-room assumptions.",
      correction:
        "Walk full migration path at first inspection; photograph every space with visible soot, stain, or odor.",
    },
    {
      mistake: "Poor labeling across photos, sketch, and estimate",
      impact:
        "Desk reviewers cannot map evidence to line items; approvals stall or reduce proportionally.",
      correction:
        "Adopt one room naming convention at intake; reconcile to carrier sketch before estimate submission.",
    },
    {
      mistake: "Missing HVAC documentation before system restart",
      impact:
        "Duct and equipment scope denied; running system spreads contamination and destroys evidence.",
      correction:
        "Confirm HVAC off at intake; capture register, filter, and equipment photos before restart.",
    },
    {
      mistake: "Failure to document odor by room",
      impact:
        "Deodorization and seal lines reduced when treatment scope lacks pre-treatment room logs.",
      correction:
        "Record odor by room before treatment; document porous material exposure and treatment boundaries.",
    },
    {
      mistake: "Incomplete contents documentation before pack-out",
      impact:
        "Contents cleaning and manipulation lines reduce when inventory does not precede move-out.",
      correction:
        "Start room-located inventory and photograph high-value items in place before pack-out — see Contents Inventory Documentation Guide.",
    },
    {
      mistake: "Missing testing reports when contamination severity disputed",
      impact:
        "Carrier applies clean-only macros when severity lacks third-party or lab support.",
      correction:
        "Obtain wipe tests, air quality reports, or specialist inspections; index to rooms and line items.",
    },
    {
      mistake: "Inadequate supporting notes on migration path",
      impact:
        "Migration claims fail desk review without logic connecting origin to affected rooms.",
      correction:
        "Write short path narrative with stairwell, chase, and HVAC correlation for every migration room.",
    },
    {
      mistake: "Smoke evidence bundled with structural photos only",
      impact:
        "Desk reviewers apply demolition logic to cleaning lines or vice versa.",
      correction:
        "Separate smoke wipe folders from structural rebuild, HVAC, odor, and contents evidence.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Carrier sketch omits halls, closets, or upper bedrooms with visible soot",
      documentation: "Room-indexed migration folders plus path narrative and substrate close-ups.",
      lineItemHint: "HWS, seal, and smoke wipe lines per omitted room",
    },
    {
      trigger: "Hidden contamination found in cavities, attic, or crawlspace during demo",
      documentation:
        "Date-stamped cavity photos with narrative before repairs close access.",
      lineItemHint: "Additional cleaning, insulation removal, and cavity treatment lines",
    },
    {
      trigger: "Odor migration documented beyond rooms on carrier estimate",
      documentation:
        "Room odor logs, path narrative, and duct or chase correlation photos.",
      lineItemHint: "Deodorization, seal, and thermal fog lines in affected rooms",
    },
    {
      trigger: "HVAC registers show staining or system ran during fire event",
      documentation:
        "Register photos, filter condition, duct inspection excerpts, and system-off log.",
      lineItemHint: "Duct cleaning, filter replacement, coil service, and system inspection",
    },
    {
      trigger: "Electronics or appliances require evaluation after soot exposure",
      documentation: "Item photos, location notes, and specialist evaluation reports.",
      lineItemHint: "Electronics cleaning, replacement, or specialty restoration lines",
    },
    {
      trigger: "Carrier disputes contamination severity without field test support",
      documentation: "Wipe test, air quality, or surface sampling reports indexed to rooms.",
      lineItemHint: "Testing fees and report-supported cleaning or removal scope",
    },
    {
      trigger: "Laboratory report confirms non-restorable porous materials",
      documentation: "Lab report excerpt cross-referenced to substrate photos and room labels.",
      lineItemHint: "Replacement lines for insulation, cabinetry, or porous assemblies",
    },
    {
      trigger: "Additional cleaning required after initial carrier-approved scope",
      documentation:
        "Before-and-after test-clean photos showing incomplete restoration on first pass.",
      lineItemHint: "Supplemental cleaning, seal, and specialty procedure lines",
    },
    {
      trigger: "Test-clean fails on trim, cabinetry, or drywall — replacement warranted",
      documentation:
        "Test area photos, substrate condition notes, and manufacturer non-restoration guidance.",
      lineItemHint: "Remove and replace lines instead of clean-only macros",
    },
    {
      trigger: "Manufacturer guidance prohibits restoration on specific smoke-damaged materials",
      documentation: "Product bulletin or manufacturer letter attached to supplement packet.",
      lineItemHint: "Replacement lines with manufacturer documentation support",
    },
  ],
  faq: [
    {
      question: "How is smoke documentation different from general fire damage documentation?",
      answer:
        "General fire documentation covers structural, contents, suppression water, and multi-trade scope across the full loss. Smoke and soot documentation focuses on contamination evidence — migration paths, soot types, substrate photos, HVAC spread, odor logs, and clean-versus-replace decisions. Use the Fire Damage Documentation Guide for full-file standards; use this guide when smoke and soot scope is the primary supplement or dispute driver.",
    },
    {
      question: "When should I run test cleaning before documenting replacement scope?",
      answer:
        "Run test cleaning on any substrate where the carrier may argue clean-only scope — trim, cabinetry, drywall, and porous finishes. Photograph before, during, and after test areas with substrate visible. Failed test-clean results support replacement lines; successful results support cleaning lines with procedure photos.",
    },
    {
      question: "Should wildfire smoke losses use different documentation than structure fires?",
      answer:
        "Wildfire losses often show fine particulate infiltration through envelope gaps, attic vents, and HVAC rather than origin-room char. Document exterior entry points, attic insulation staining, and room-by-room deposition. Path narrative should explain infiltration routes, not just interior migration from a fire room.",
    },
  ],
  relatedResources: [
    {
      label: "Fire Damage Documentation Guide",
      href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
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
      label: "Fire Claim Intake Checklist",
      href: "/resources/guides/fire-damage/fire-claim-intake-guide",
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
      label: "Why Fire Damage Claims Get Underpaid",
      href: "/resources/blog/why-fire-damage-claims-get-underpaid",
    },
    {
      label: "Smoke and Soot Damage Documentation Guide (blog)",
      href: "/resources/blog/smoke-and-soot-damage-documentation-guide",
    },
    {
      label: "Fire Damage Supplement Playbook",
      href: "/resources/blog/fire-damage-supplement-playbook-for-contractors",
    },
    { label: "Fire damage solutions", href: SOLUTION_PATH },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});
