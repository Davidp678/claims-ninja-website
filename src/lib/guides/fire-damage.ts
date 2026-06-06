import { defineGuide, GUIDE_PUBLISHED_AT } from "@/lib/guides/guide-builder";
import type { Guide } from "@/lib/guide-types";

const SOLUTION_PATH = "/solutions/fire-damage" as const;

export const FIRE_DAMAGE_GUIDES = [
  defineGuide({
    slug: "fire-claim-intake-guide",
    title: "Fire Claim Intake Checklist",
    excerpt:
      "Field-ready fire claim intake checklist: secure the site, capture origin and migration evidence, flag HVAC and contents scope, and open a supplement-ready file before production locks in carrier assumptions.",
    category: "fire-damage",
    guideType: "checklist",
    roles: ["field", "project-manager", "office"],
    claimPhase: "intake",
    tags: [
      "Fire Damage",
      "Intake",
      "Smoke Migration",
      "HVAC",
      "Contents",
      "Documentation",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 12,
    recommended: true,
    seoTitle: "Fire Claim Intake Checklist for Contractors",
    seoDescription:
      "Fire claim intake checklist for restoration contractors: site security, origin and migration photos, HVAC inspection flags, contents inventory start, and file setup before production.",
    relatedGuideSlugs: [
      "smoke-documentation-guide",
      "hvac-contamination-guide",
      "contents-documentation-guide",
    ],
    relatedBlogSlugs: ["fire-damage-claim-documentation-guide"],
    relatedSolutionPath: SOLUTION_PATH,
    purpose:
      "Establish a complete fire claim file in the first site visit — before soot is wiped, contents are moved, or HVAC runs — so migration, HVAC, contents, and structural scope can be defended when the carrier estimate arrives.",
    whenToUse: [
      {
        condition: "New fire loss assigned and crew dispatched for initial assessment",
        signal: "Claim number issued, property accessible, emergency scope not yet complete",
      },
      {
        condition: "Carrier adjuster scheduled within 24–48 hours and field evidence must be captured first",
        signal: "Adjuster appointment on calendar; origin room still visible",
      },
      {
        condition: "Multi-room or multi-unit fire where migration scope is likely but not yet on any estimate",
        signal: "Smoke visible in halls, upper floors, or adjoining units",
      },
      {
        condition: "Contents pack-out or HVAC restart requested before documentation is complete",
        signal: "Homeowner or PM asking to move items or turn system on",
      },
    ],
    prerequisites: [
      "Claim number, policyholder contact, and carrier adjuster info in job file",
      "Camera or job-management photo workflow with room-label convention",
      "Contents inventory template or pack-out checklist ready",
    ],
    requiredDocumentation: [
      {
        id: "site-security",
        label: "Site security and emergency scope photos",
        required: true,
        detail:
          "Board-up, tarp, fencing, or shoring with wide and close shots; date-stamped notes on what was secured and why.",
      },
      {
        id: "origin-room",
        label: "Origin room pre-mitigation photo set",
        required: true,
        detail:
          "Wide context plus ceiling, wall, floor, and fixture close-ups before cleaning changes the scene.",
      },
      {
        id: "migration-walk",
        label: "Migration walk documentation",
        required: true,
        detail:
          "Photos in halls, closets, upper floors, utility spaces, and adjoining rooms — even when damage looks minor.",
      },
      {
        id: "hvac-status",
        label: "HVAC status and register photos",
        required: true,
        detail:
          "System off confirmation, filter condition, register staining, and note whether system ran during or after fire.",
      },
      {
        id: "contents-survey",
        label: "Contents survey and high-value item photos",
        required: true,
        detail:
          "Room-located inventory start; photograph questionable and high-value items before pack-out.",
      },
      {
        id: "file-setup",
        label: "File naming and room index started",
        required: true,
        detail:
          "Claim number plus room label plus date in filenames; one-page room list matching walk order.",
      },
    ],
    steps: [
      {
        id: "secure-and-stabilize",
        title: "Secure site and document emergency scope",
        owner: "field",
        actions: [
          "Confirm utilities status with homeowner and document HVAC off before restart.",
          "Photograph board-up, tarp, shoring, or fencing with wide and close shots.",
          "Log emergency scope narrative: what was secured, what remains exposed, and access restrictions.",
        ],
        notes:
          "Emergency lines need contemporaneous photos — board-up invoiced without contemporaneous intake photos often reduces credibility on emergency line review.",
      },
      {
        id: "document-origin",
        title: "Document fire origin before cleaning",
        owner: "field",
        actions: [
          "Capture wide and close photos of origin room ceilings, walls, floors, cabinets, and fixtures.",
          "Note suspected fire source area and burn pattern direction for path narrative later.",
          "Photograph matching finishes and profiles before removal decisions are made.",
        ],
      },
      {
        id: "walk-migration",
        title: "Walk migration path and photograph affected spaces",
        owner: "field",
        actions: [
          "Walk halls, stairwells, closets, upper floors, attic access, and crawlspace openings.",
          "Photograph soot, staining, and odor observations in each space with room labels.",
          "Flag rooms missing from adjuster sketch for supplement coordinator review.",
        ],
        notes:
          "Migration halls and closets drive supplement value — do not stop at the origin room.",
      },
      {
        id: "hvac-and-contents-flags",
        title: "Flag HVAC and contents scope at intake",
        owner: "project-manager",
        actions: [
          "Photograph registers, returns, filter, and equipment before any restart.",
          "Start room-located contents inventory; photo high-value items in place.",
          "Assign HVAC inspection and contents pack-out guides to field leads before next visit.",
        ],
      },
      {
        id: "open-file",
        title: "Open supplement-ready file structure",
        owner: "office",
        actions: [
          "Create folders or tags: origin, migration, HVAC, contents, structural, emergency.",
          "Enter room index with photo count and key observations per room.",
          "Schedule 48-hour estimate review and link smoke, HVAC, and contents guides to job.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "origin-before-clean",
        label: "Origin room photographed before any wipe-down",
        required: true,
        detail: "Initial fire conditions are irreplaceable after cleaning starts.",
      },
      {
        id: "migration-complete",
        label: "Migration walk includes halls, closets, and upper floors",
        required: true,
      },
      {
        id: "hvac-off",
        label: "HVAC status documented and restart deferred until inspection",
        required: true,
      },
      {
        id: "room-names",
        label: "Room names consistent across photos, inventory, and job notes",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Cleaning origin room before wide and close intake photos are captured",
        impact: "Desk reviewers cannot verify pre-mitigation damage; cleaning scope reduces.",
        correction: "Photograph origin and migration paths before any wipe-down or pack-out.",
      },
      {
        mistake: "Restarting HVAC before filter, register, and duct inspection are documented",
        impact: "Contamination spreads to unaffected rooms; HVAC supplement credibility drops.",
        correction: "Leave system off until HVAC contamination guide inspection is complete.",
      },
      {
        mistake: "Pack-out without room-located inventory and item photos",
        impact: "Contents cleaning and replacement lines lack proof; proportional cuts follow.",
        correction: "Inventory and photograph items in place before moving off-site.",
      },
      {
        mistake: "Origin-room-only documentation on multi-room smoke losses",
        impact: "Migration supplements look like late scope inflation without hall and upper-floor photos.",
        correction: "Walk the full migration path at intake and photograph every affected space.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier first estimate includes origin room only while migration photos exist",
        documentation: "Indexed migration folders with path narrative from origin to affected rooms.",
        lineItemHint: "Smoke wipe, seal, and cleaning lines in halls, bedrooms, and closets",
      },
      {
        trigger: "HVAC registers show staining distant from fire origin",
        documentation: "Register photos, filter condition, and system-off log at intake.",
        lineItemHint: "Duct cleaning, filter replacement, coil service, and system inspection",
      },
      {
        trigger: "Contents density and high-value items visible on walkthrough",
        documentation: "Room-located inventory with photos before pack-out.",
        lineItemHint: "Contents manipulation, pack-out, cleaning, and storage lines",
      },
    ],
    relatedResources: [
      {
        label: "Smoke and soot documentation guide",
        href: "/resources/guides/fire-damage/smoke-documentation-guide",
      },
      {
        label: "HVAC contamination guide",
        href: "/resources/guides/fire-damage/hvac-contamination-guide",
      },
      {
        label: "Fire damage solutions",
        href: SOLUTION_PATH,
      },
    ],
    faq: [
      {
        question: "Should HVAC stay off at fire claim intake?",
        answer:
          "Yes, until inspection is documented. Running the system before filter, register, and duct evidence is captured spreads contamination and weakens HVAC supplement files.",
      },
      {
        question: "What rooms must be photographed on intake beyond the fire origin?",
        answer:
          "Halls, closets, stairwells, upper floors, utility spaces, attic and crawlspace access points, and any adjoining unit or tenant space with visible soot, stain, or odor.",
      },
    ],
  }),

  defineGuide({
    slug: "smoke-documentation-guide",
    title: "Smoke and Soot Documentation Procedure",
    excerpt:
      "Field procedure for smoke and soot evidence: contamination types, migration path narrative, substrate photos, test-clean results, and room-indexed files carriers can map to sketch rooms.",
    category: "fire-damage",
    guideType: "field-procedure",
    roles: ["field", "project-manager"],
    claimPhase: "documentation",
    tags: [
      "Smoke Damage",
      "Soot",
      "Migration",
      "Documentation",
      "Fire Damage",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 14,
    seoTitle: "Smoke and Soot Documentation Procedure for Fire Claims",
    seoDescription:
      "Field procedure for smoke and soot documentation on fire claims: contamination types, migration paths, substrate photos, test cleaning, and carrier-ready room indexes.",
    relatedGuideSlugs: [
      "fire-claim-intake-guide",
      "hvac-contamination-guide",
      "odor-documentation-guide",
    ],
    relatedBlogSlugs: ["smoke-and-soot-damage-documentation-guide"],
    relatedSolutionPath: SOLUTION_PATH,
    purpose:
      "Capture defensible smoke and soot evidence room by room — including migration beyond the origin — so cleaning, sealing, and replacement lines survive desk review and supplement negotiation.",
    whenToUse: [
      {
        condition: "Soot or smoke visible in rooms beyond the fire origin",
        signal: "Staining in halls, upper floors, closets, or porous substrates",
      },
      {
        condition: "Carrier estimate omits rooms that smoked on walkthrough",
        signal: "Sketch room count lower than photographed spaces",
      },
      {
        condition: "Cleaning versus replacement decisions needed on trim, cabinetry, or drywall",
        signal: "Substrate test-clean results will determine scope",
      },
      {
        condition: "Supplement or re-inspection scheduled for smoke migration scope",
        signal: "Denied migration rooms or partial approval on origin only",
      },
    ],
    requiredDocumentation: [
      {
        id: "room-overview",
        label: "Wide room context photo per affected space",
        required: true,
      },
      {
        id: "substrate-closeups",
        label: "Close substrate photos showing soot type and extent",
        required: true,
        detail: "Ceiling, walls, trim, fixtures, and mechanical components as applicable.",
      },
      {
        id: "migration-narrative",
        label: "Migration path narrative from origin to affected rooms",
        required: true,
        detail: "Stairwells, chases, shared walls, and HVAC paths when relevant.",
      },
      {
        id: "test-clean",
        label: "Test-clean before-and-after photos where scope is disputed",
        required: false,
        detail: "Required when carrier may argue clean versus replace on visible substrates.",
      },
      {
        id: "cavity-inspection",
        label: "Attic, crawlspace, and cavity opening photos when migration claimed",
        required: false,
        detail: "Behind toe kicks, outlet openings, and attic hatches when smoke path is alleged.",
      },
      {
        id: "room-index",
        label: "Room index tying photos to sketch room names",
        required: true,
      },
    ],
    steps: [
      {
        id: "classify-contamination",
        title: "Classify soot and smoke contamination by area",
        owner: "field",
        actions: [
          "Note soot type where identifiable — dry, oily, protein — and affected substrates.",
          "Distinguish visible soot from smoke staining and odor-only impact.",
          "Record HVAC register condition in each room for correlation with duct paths.",
        ],
      },
      {
        id: "capture-per-room",
        title: "Capture per-room photo sets in consistent walk order",
        owner: "field",
        actions: [
          "Photograph wide context then close damage on ceilings, walls, floors, and trim.",
          "Document closets, halls, and utility spaces in the same sequence every job.",
          "Label filenames or job tags with claim number, room, date, and damage type.",
        ],
      },
      {
        id: "document-migration",
        title: "Document migration path and penetrations",
        owner: "field",
        actions: [
          "Photograph stairwells, chase walls, attic openings, and shared partitions on the smoke path.",
          "Write short path narrative: how smoke reached each documented room.",
          "Flag rooms on photos that do not appear on carrier sketch.",
        ],
        notes:
          "Submit migration supplements when discovery is documented — not after rebuild paints over evidence.",
      },
      {
        id: "test-and-decide",
        title: "Run test cleaning and document results",
        owner: "field",
        actions: [
          "Test-clean representative areas on disputable substrates before full production.",
          "Photograph before, during, and after test areas with substrate visible.",
          "Log clean versus replace recommendation per room in site notes.",
        ],
      },
      {
        id: "index-and-handoff",
        title: "Index files and hand off to supplement coordinator",
        owner: "project-manager",
        actions: [
          "Complete room index: room name, photo count, key line items, disposition.",
          "Separate smoke wipe folders from structural rebuild and HVAC folders.",
          "Cross-check sketch room list and queue migration supplement if gaps exist.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "sketch-alignment",
        label: "Every photographed room appears on room index with sketch-matching name",
        required: true,
      },
      {
        id: "path-narrative",
        label: "Migration supplements include written path narrative",
        required: true,
      },
      {
        id: "substrate-proof",
        label: "Cleaning lines have close substrate photos, not wide room shots only",
        required: true,
      },
      {
        id: "pre-demo",
        label: "Attic and cavity photos captured before concealment when migration claimed",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Unlabeled camera rolls without room index or cover letter map",
        impact: "Adjusters cannot match evidence to line items; approvals stall.",
        correction: "Maintain room index and filename convention from first visit.",
      },
      {
        mistake: "One-size smoke wipe documentation on mixed soot types",
        impact: "Carriers reject macros when protein or oily soot needs distinct procedures.",
        correction: "Document soot type, test-clean results, and procedure photos per substrate.",
      },
      {
        mistake: "Migration claimed without hall, closet, or upper-floor photos",
        impact: "Migration supplements denied as late scope inflation.",
        correction: "Photograph full path and write narrative before rebuild obscures routes.",
      },
      {
        mistake: "Smoke cleaning lines bundled with structural photos only",
        impact: "Desk reviewers apply cleaning macros to framing replacement or vice versa.",
        correction: "Separate smoke wipe folders from structural rebuild documentation.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier sketch omits halls, closets, or upper bedrooms with visible soot",
        documentation: "Room-indexed migration folders plus path narrative.",
        lineItemHint: "HWS, seal, and smoke wipe lines per omitted room",
      },
      {
        trigger: "Test-clean fails on porous substrates after visible soot removal attempt",
        documentation: "Before-and-after test photos and supervisor replace recommendation.",
        lineItemHint: "Remove and replace trim, cabinetry, drywall, or insulation",
      },
      {
        trigger: "Attic or crawlspace smoke found during inspection",
        documentation: "Opening photos and cavity soot evidence before insulation install.",
        lineItemHint: "Attic smoke cleaning, insulation removal, and seal lines",
      },
    ],
    relatedResources: [
      {
        label: "HVAC contamination guide",
        href: "/resources/guides/fire-damage/hvac-contamination-guide",
      },
      {
        label: "Odor documentation guide",
        href: "/resources/guides/fire-damage/odor-documentation-guide",
      },
    ],
  }),

  defineGuide({
    slug: "hvac-contamination-guide",
    title: "HVAC Contamination Documentation Procedure",
    excerpt:
      "Field procedure for HVAC inspection and documentation on fire claims: system status, register and duct evidence, component photos, specialist reports, and partial-system scope diagrams.",
    category: "fire-damage",
    guideType: "field-procedure",
    roles: ["field", "project-manager"],
    claimPhase: "documentation",
    tags: ["HVAC", "Fire Damage", "Smoke Damage", "Documentation", "Duct Cleaning"],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 12,
    seoTitle: "HVAC Contamination Documentation for Fire Damage Claims",
    seoDescription:
      "HVAC contamination documentation procedure for fire claims: inspection workflow, duct and component photos, partial-system scope, and supplement-ready HVAC files.",
    relatedGuideSlugs: [
      "smoke-documentation-guide",
      "odor-documentation-guide",
      "fire-claim-intake-guide",
    ],
    relatedBlogSlugs: ["hvac-contamination-in-fire-damage-claims"],
    relatedSolutionPath: SOLUTION_PATH,
    purpose:
      "Document HVAC system contamination before restart or cleaning — with component-level evidence and partial-system clarity — so duct, filter, coil, and equipment lines survive desk review.",
    whenToUse: [
      {
        condition: "HVAC system was running during or after the fire event",
        signal: "Homeowner reports system was on; registers show distant staining",
      },
      {
        condition: "Registers or returns show soot staining away from fire origin",
        signal: "Contrast between stained and unstained registers on same zone",
      },
      {
        condition: "Odor persists in rooms after surface cleaning",
        signal: "Technician notes odor at registers; ducts may still distribute particulate",
      },
      {
        condition: "Carrier estimate omits duct cleaning, filter, or coil lines",
        signal: "HVAC scope missing from first estimate despite visible register staining",
      },
    ],
    requiredDocumentation: [
      {
        id: "system-off-log",
        label: "System-off confirmation and restart deferral log",
        required: true,
      },
      {
        id: "equipment-photos",
        label: "Air handler, coil, blower, and filter photos",
        required: true,
      },
      {
        id: "register-returns",
        label: "Register and return staining photos by room",
        required: true,
      },
      {
        id: "accessible-duct",
        label: "Accessible duct interior or plenum photos",
        required: true,
        detail: "Where access exists — flex runs, plenum openings, and insulation facing.",
      },
      {
        id: "inspection-report",
        label: "HVAC inspection report or specialist scope summary",
        required: false,
        detail: "Required when carrier program or loss size expects third-party inspection.",
      },
      {
        id: "partial-diagram",
        label: "Partial-system diagram when only portions of duct layout are affected",
        required: false,
        detail: "Show included and excluded runs to avoid all-or-nothing desk denials.",
      },
    ],
    steps: [
      {
        id: "confirm-status",
        title: "Confirm system status and prevent redistribution",
        owner: "field",
        actions: [
          "Verify system is off and log who authorized status with date and time.",
          "Photograph thermostat setting and any homeowner instructions about restart.",
          "Note whether system ran post-fire before your inspection — affects contamination spread narrative.",
        ],
      },
      {
        id: "inspect-components",
        title: "Inspect and photograph components",
        owner: "field",
        actions: [
          "Photograph filter media, coil face, blower compartment, and equipment labels.",
          "Capture register and return staining in each room — include distant rooms from origin.",
          "Document accessible duct interior, plenum, and flex run condition where openings exist.",
        ],
      },
      {
        id: "correlate-migration",
        title: "Correlate HVAC evidence with smoke migration",
        owner: "field",
        actions: [
          "Map which rooms show register staining versus clean registers on same system.",
          "Cross-reference smoke documentation guide room index for path alignment.",
          "Flag odor-at-register rooms for odor documentation guide follow-up.",
        ],
      },
      {
        id: "scope-partial-system",
        title: "Define partial-system scope when applicable",
        owner: "project-manager",
        actions: [
          "Diagram affected duct runs, zones, and components included in scope.",
          "Separate cleaning, replacement, and testing lines in estimate notes.",
          "Attach specialist report excerpts to component-specific line items.",
        ],
        notes:
          "All-or-nothing system claims without partial proof are frequent partial denials.",
      },
      {
        id: "folder-and-submit",
        title: "Maintain dedicated HVAC folder and queue supplement",
        owner: "project-manager",
        actions: [
          "Store HVAC photos in a subfolder separate from general smoke wipe images.",
          "Summarize findings in supplement cover letter with attachment names.",
          "Submit HVAC supplement when inspection is complete — not only at final invoice.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "dedicated-folder",
        label: "HVAC evidence in dedicated subfolder, not mixed with room smoke wipe photos",
        required: true,
      },
      {
        id: "register-coverage",
        label: "Register photos include rooms distant from fire origin when migration exists",
        required: true,
      },
      {
        id: "line-separation",
        label: "HVAC lines separated from general structure cleaning in estimate",
        required: true,
      },
      {
        id: "report-tie-in",
        label: "Specialist conclusions referenced by line number in cover letter",
        required: false,
      },
    ],
    commonMistakes: [
      {
        mistake: "Restarting HVAC before inspection photos are captured",
        impact: "Contamination spreads; inspection conclusions weaken.",
        correction: "Keep system off until component and register documentation is complete.",
      },
      {
        mistake: "HVAC lines bundled with general smoke wipe without component photos",
        impact: "Among the most common partial denials on fire files.",
        correction: "Dedicated HVAC folder with equipment, duct, and register evidence.",
      },
      {
        mistake: "Claiming full-system replacement without partial-system proof",
        impact: "Desk reviewers reduce to clean-only macros or deny entirely.",
        correction: "Diagram affected runs and attach inspection report for each component.",
      },
      {
        mistake: "No correlation between register staining and room smoke documentation",
        impact: "HVAC scope appears disconnected from fire loss narrative.",
        correction: "Cross-link HVAC register photos to smoke migration room index.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier estimate omits duct cleaning after documented register staining",
        documentation: "Register photos, filter condition, and inspection report excerpts.",
        lineItemHint: "Duct cleaning, filter replacement, and coil service lines",
      },
      {
        trigger: "Inspection documents component replacement after failed test cleaning",
        documentation: "Close photos of charred or corroded components with report conclusion.",
        lineItemHint: "Blower, coil, duct section, or air handler replacement",
      },
      {
        trigger: "Post-restoration testing and balancing required after remediation",
        documentation: "Testing checklist or report excerpts — not only labor hours at invoice.",
        lineItemHint: "System testing, balancing, and verification lines",
      },
    ],
    relatedResources: [
      {
        label: "Smoke documentation guide",
        href: "/resources/guides/fire-damage/smoke-documentation-guide",
      },
      {
        label: "Odor documentation guide",
        href: "/resources/guides/fire-damage/odor-documentation-guide",
      },
    ],
  }),

  defineGuide({
    slug: "odor-documentation-guide",
    title: "Odor Mitigation Documentation Procedure",
    excerpt:
      "Field procedure for fire odor assessment and treatment documentation: pre-treatment logs, source-removal photos, equipment placement, duration records, and post-treatment verification.",
    category: "fire-damage",
    guideType: "field-procedure",
    roles: ["field", "project-manager"],
    claimPhase: "documentation",
    tags: ["Odor Mitigation", "Fire Damage", "Smoke Damage", "Documentation"],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 11,
    seoTitle: "Odor Mitigation Documentation Procedure for Fire Claims",
    seoDescription:
      "Odor mitigation documentation for fire claims: pre-treatment assessment, equipment logs, sealing evidence, HVAC correlation, and post-treatment verification carriers approve.",
    relatedGuideSlugs: [
      "smoke-documentation-guide",
      "hvac-contamination-guide",
      "contents-documentation-guide",
    ],
    relatedBlogSlugs: ["odor-mitigation-in-fire-damage-claims"],
    relatedSolutionPath: SOLUTION_PATH,
    purpose:
      "Document odor assessment, source removal, treatment procedures, and verification room by room — so odor lines are not reduced to invoice-only claims without field proof.",
    whenToUse: [
      {
        condition: "Occupant reports persistent smoke odor after visible cleaning",
        signal: "Odor in bedrooms, halls, or at HVAC registers",
      },
      {
        condition: "Odor treatment equipment deployed — hydroxyl, ozone, thermal fogging, or air scrubbers",
        signal: "Equipment on site with treatment dates scheduled",
      },
      {
        condition: "Sealer or encapsulant applied to porous substrates for odor control",
        signal: "Charred framing, duct board, or cabinetry backs targeted for seal",
      },
      {
        condition: "Carrier estimate omits odor treatment lines or denies procedure without logs",
        signal: "Odor lines missing or denied for insufficient documentation",
      },
    ],
    requiredDocumentation: [
      {
        id: "pre-treatment-log",
        label: "Pre-treatment odor log by room with dated technician notes",
        required: true,
      },
      {
        id: "source-removal",
        label: "Source-removal photos before deodorizing equipment obscures conditions",
        required: true,
        detail: "Char, soot, and porous materials that hold odor.",
      },
      {
        id: "equipment-placement",
        label: "Equipment placement and duration records by area",
        required: true,
      },
      {
        id: "procedure-photos",
        label: "Procedure photos for fogging, sealing, or specialty treatment",
        required: true,
      },
      {
        id: "hvac-correlation",
        label: "HVAC odor notes at registers when ducts may redistribute odor",
        required: false,
        detail: "Pair with HVAC contamination guide when system scope is billed.",
      },
      {
        id: "post-verification",
        label: "Post-treatment verification notes by room",
        required: true,
      },
    ],
    steps: [
      {
        id: "assess-pre-treatment",
        title: "Assess and log pre-treatment odor by room",
        owner: "field",
        actions: [
          "Record odor presence by room with dated technician observations — not only homeowner complaints.",
          "Photograph char, soot, and porous materials holding odor before equipment placement.",
          "Note HVAC status and register odor — flag HVAC guide follow-up when ducts are suspect.",
        ],
      },
      {
        id: "document-source-removal",
        title: "Document source removal before supplemental treatment",
        owner: "field",
        actions: [
          "Photograph demolition and cleaning progress that removes odor sources.",
          "Log why standard cleaning alone is insufficient when supplemental odor lines are billed.",
          "Capture before-and-after sets on porous substrates targeted for seal or replace.",
        ],
      },
      {
        id: "log-equipment",
        title: "Log equipment placement, protocol, and duration",
        owner: "field",
        actions: [
          "Photograph hydroxyl, ozone, fogging, or scrubber setup with room context.",
          "Record run duration by area, safety protocol, and re-entry timing for ozone when used.",
          "Separate fogging, ozone, and hydroxyl lines in notes — avoid duplicate equipment on same room without narrative.",
        ],
      },
      {
        id: "document-sealing",
        title: "Document sealing and encapsulation when applied",
        owner: "field",
        actions: [
          "Photograph substrates before and after sealer application.",
          "Record product and application notes with supervisor or specialist recommendation.",
          "Tie sealant lines to failed test-clean or inspection conclusions on porous materials.",
        ],
      },
      {
        id: "verify-and-close",
        title: "Verify post-treatment and close odor file",
        owner: "project-manager",
        actions: [
          "Complete dated revisit notes by room with technician observations.",
          "Attach occupant sign-off when contract uses it; summarize third-party clearance if required.",
          "Index odor folder for supplement cover letter with line-to-attachment map.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "pre-before-equipment",
        label: "Pre-treatment odor log completed before equipment obscures scene",
        required: true,
      },
      {
        id: "source-before-treatment",
        label: "Source-removal photos precede supplemental odor equipment billing",
        required: true,
      },
      {
        id: "duration-logged",
        label: "Equipment duration logged per treated area",
        required: true,
      },
      {
        id: "verification-dated",
        label: "Post-treatment verification notes dated per room",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Odor lines billed with invoice only — no procedure or placement photos",
        impact: "Frequent desk denials on hydroxyl, ozone, and fogging lines.",
        correction: "Log equipment placement, duration, and procedure photos contemporaneously.",
      },
      {
        mistake: "Treatment deployed before source-removal photos are captured",
        impact: "Carriers argue equipment ran without adequate cleaning first.",
        correction: "Document cleaning and demolition progress before supplemental odor billing.",
      },
      {
        mistake: "Room odor claimed without HVAC correlation when registers still smell",
        impact: "Room equipment lines denied while duct odor persists.",
        correction: "Cross-link odor logs with HVAC contamination documentation.",
      },
      {
        mistake: "Duplicate odor equipment on same room without narrative",
        impact: "Adjusters reduce duplicate lines as redundant billing.",
        correction: "Explain sequence: cleaning, then fogging, then hydroxyl — with dates per phase.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier estimate omits odor treatment for rooms with logged pre-treatment odor",
        documentation: "Pre-treatment logs, source-removal photos, and equipment placement records.",
        lineItemHint: "Hydroxyl, ozone, thermal fogging, and air scrubber lines",
      },
      {
        trigger: "Porous substrates require sealant after failed odor release from cleaning",
        documentation: "Before-and-after seal photos with supervisor recommendation.",
        lineItemHint: "Sealer and encapsulant application lines",
      },
      {
        trigger: "Odor persists at registers after room treatment",
        documentation: "Register odor logs plus HVAC inspection excerpts.",
        lineItemHint: "Duct cleaning and HVAC component service tied to odor pathway",
      },
    ],
    relatedResources: [
      {
        label: "HVAC contamination guide",
        href: "/resources/guides/fire-damage/hvac-contamination-guide",
      },
      {
        label: "Contents documentation guide",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
    ],
  }),

  defineGuide({
    slug: "contents-documentation-guide",
    title: "Contents Documentation Procedure",
    excerpt:
      "Field procedure for fire contents inventories, pack-out chain of custody, salvageability decisions, and photo proof that ties cleaning, storage, and replacement lines to item-level evidence.",
    category: "fire-damage",
    guideType: "field-procedure",
    roles: ["field", "office"],
    claimPhase: "documentation",
    tags: ["Contents", "Fire Damage", "Pack-Out", "Inventory", "Documentation"],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 13,
    seoTitle: "Fire Contents Documentation Procedure for Insurance Claims",
    seoDescription:
      "Contents documentation procedure for fire claims: room-located inventories, pack-out proof, salvageability photos, and carrier-ready contents files.",
    relatedGuideSlugs: [
      "fire-claim-intake-guide",
      "odor-documentation-guide",
      "structural-stabilization-documentation-guide",
    ],
    relatedBlogSlugs: ["fire-damage-claim-documentation-guide"],
    relatedSolutionPath: SOLUTION_PATH,
    purpose:
      "Build room-located contents inventories with photo proof and pack-out chain of custody — so manipulation, cleaning, storage, and replacement lines survive contents desk review.",
    whenToUse: [
      {
        condition: "Pack-out or on-site contents manipulation scheduled",
        signal: "Soot-affected furniture, textiles, or personal property in multiple rooms",
      },
      {
        condition: "Carrier requests inventory before approving contents lines",
        signal: "Adjuster email or estimate note requiring itemized proof",
      },
      {
        condition: "High-value or questionable salvageability items present",
        signal: "Electronics, art, antiques, or heavily soot-coated textiles",
      },
      {
        condition: "Contents odor or specialty cleaning tracks required",
        signal: "Ozone chamber, ultrasonic, or textile restoration planned",
      },
    ],
    requiredDocumentation: [
      {
        id: "room-inventory",
        label: "Room-located inventory with description, quantity, and condition",
        required: true,
      },
      {
        id: "item-photos",
        label: "Photos of high-value and questionable items before pack-out",
        required: true,
      },
      {
        id: "soot-impact",
        label: "Soot, smoke, and odor impact noted per item or group",
        required: true,
      },
      {
        id: "salvage-disposition",
        label: "Salvageability and disposition — clean, store, replace",
        required: true,
      },
      {
        id: "pack-out-log",
        label: "Pack-out date, rooms packed, storage location, and chain of custody",
        required: true,
      },
      {
        id: "non-salvage-proof",
        label: "Photos and narrative for non-salvageable items before disposal",
        required: false,
        detail: "Required when replacement lines may be disputed.",
      },
    ],
    steps: [
      {
        id: "inventory-in-place",
        title: "Inventory contents in place before movement",
        owner: "field",
        actions: [
          "Walk room by room using same naming convention as smoke documentation.",
          "Record description, quantity, pre-loss condition, and soot or odor impact.",
          "Photograph high-value, electronics, and questionable items before pack-out.",
        ],
        notes:
          "Inventories created after pack-out without item photos are a top contents denial trigger.",
      },
      {
        id: "classify-salvage",
        title: "Classify salvageability and disposition",
        owner: "field",
        actions: [
          "Mark each item or group: clean on-site, clean off-site, store, or replace.",
          "Photograph items that cannot be cleaned successfully before replacement lines.",
          "Note specialty tracks — ultrasonic, textile, electronics — in inventory comments.",
        ],
      },
      {
        id: "execute-pack-out",
        title: "Execute pack-out with chain of custody",
        owner: "field",
        actions: [
          "Log pack-out date, rooms packed, inventory reference, and storage location.",
          "Photograph loaded trucks or containers with inventory batch reference when practical.",
          "Maintain chain of custody notes for off-site processing facilities.",
        ],
      },
      {
        id: "document-processing",
        title: "Document cleaning and processing by track",
        owner: "office",
        actions: [
          "Tie processing invoices and procedure logs to inventory line references.",
          "Separate ultrasonic, textile, electronics, and general contents evidence folders.",
          "Log odor treatment for contents when ozone chamber or specialty deodorizing is used.",
        ],
      },
      {
        id: "reconcile-estimate",
        title: "Reconcile inventory to estimate and supplement gaps",
        owner: "office",
        actions: [
          "Match inventory lines to carrier estimate contents section room by room.",
          "Queue supplement for omitted manipulation, cleaning, storage, or replacement lines.",
          "Attach inventory index to supplement cover letter with page references.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "pre-pack-photos",
        label: "High-value items photographed before pack-out",
        required: true,
      },
      {
        id: "room-match",
        label: "Inventory room names match photo and sketch naming",
        required: true,
      },
      {
        id: "custody-log",
        label: "Pack-out chain of custody complete for off-site storage",
        required: true,
      },
      {
        id: "replace-proof",
        label: "Non-salvageable items have photos and narrative before disposal",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Inventory built after pack-out without in-place item photos",
        impact: "Contents cleaning and replacement lines lack proof; proportional cuts follow.",
        correction: "Inventory and photograph items in place before any movement.",
      },
      {
        mistake: "Bundling unlike contents tracks without method detail",
        impact: "Ultrasonic, textile, and electronics lines collapse under desk review.",
        correction: "Separate evidence folders and invoice references by processing track.",
      },
      {
        mistake: "Pack-out and storage lines without inventory pages attached",
        impact: "Storage looks like billing without substance.",
        correction: "Tie every pack-out line to inventory reference and custody log.",
      },
      {
        mistake: "Replacement lines without non-salvageable proof",
        impact: "Carriers assume cleanable until photos show otherwise.",
        correction: "Document failed cleaning tests and disposal justification per item group.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier estimate omits contents manipulation for soot-affected rooms",
        documentation: "Room inventory with photos and pack-out log.",
        lineItemHint: "Contents manipulation, packing, and pad protection lines",
      },
      {
        trigger: "Specialty cleaning required for electronics, textiles, or ultrasonics",
        documentation: "Item photos, processing invoices, and procedure logs by track.",
        lineItemHint: "Contents cleaning by specialty method",
      },
      {
        trigger: "Non-salvageable items documented after failed cleaning attempt",
        documentation: "Test-clean failure photos and disposal tickets.",
        lineItemHint: "Contents replacement and debris disposal lines",
      },
    ],
    relatedResources: [
      {
        label: "Fire claim intake checklist",
        href: "/resources/guides/fire-damage/fire-claim-intake-guide",
      },
      {
        label: "Odor documentation guide",
        href: "/resources/guides/fire-damage/odor-documentation-guide",
      },
    ],
  }),

  defineGuide({
    slug: "structural-stabilization-documentation-guide",
    title: "Structural Stabilization Documentation Procedure",
    excerpt:
      "Field procedure for emergency structural stabilization on fire claims: shoring, bracing, temporary protection, pre-demolition framing photos, and discovery documentation during tear-out.",
    category: "fire-damage",
    guideType: "field-procedure",
    roles: ["field", "project-manager"],
    claimPhase: "mitigation",
    tags: [
      "Structural",
      "Fire Damage",
      "Demolition",
      "Stabilization",
      "Documentation",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 12,
    seoTitle: "Structural Stabilization Documentation for Fire Claims",
    seoDescription:
      "Structural stabilization documentation for fire claims: shoring, bracing, board-up, pre-demolition photos, and discovery evidence during tear-out.",
    relatedGuideSlugs: [
      "fire-claim-intake-guide",
      "contents-documentation-guide",
      "smoke-documentation-guide",
    ],
    relatedBlogSlugs: ["fire-damage-claim-documentation-guide"],
    relatedSolutionPath: SOLUTION_PATH,
    purpose:
      "Document emergency stabilization, temporary protection, and structural conditions before and during demolition — so shoring, demo, and rebuild lines are supported by discovery-era evidence carriers can approve.",
    whenToUse: [
      {
        condition: "Fire compromised framing, trusses, or load-bearing assemblies",
        signal: "Char depth, sagging members, or engineer flag on site",
      },
      {
        condition: "Emergency shoring, bracing, or board-up required before safe access",
        signal: "Local AHJ or crew safety concern; unstable openings or roof deck",
      },
      {
        condition: "Selective demolition planned to expose concealed fire damage",
        signal: "Scope may expand when wall and ceiling cavities open",
      },
      {
        condition: "Carrier estimate separates emergency scope from demolition and rebuild",
        signal: "Board-up paid but demo or structural rebuild lines omitted",
      },
    ],
    requiredDocumentation: [
      {
        id: "pre-demo-structural",
        label: "Pre-demolition structural photos — framing, sheathing, connections",
        required: true,
      },
      {
        id: "stabilization-work",
        label: "Shoring, bracing, and temporary protection photos",
        required: true,
      },
      {
        id: "char-depth",
        label: "Char depth and compromised assembly close-ups",
        required: true,
      },
      {
        id: "demo-boundary",
        label: "Demolition boundary markers and justification notes",
        required: true,
      },
      {
        id: "discovery-during-demo",
        label: "Concealed damage photos during tear-out",
        required: true,
        detail: "Capture as assemblies are exposed — not only after rebuild framing.",
      },
      {
        id: "engineer-report",
        label: "Structural engineer report when required by scope or carrier",
        required: false,
      },
    ],
    steps: [
      {
        id: "assess-stability",
        title: "Assess stability and document emergency protection",
        owner: "field",
        actions: [
          "Photograph compromised members, sagging areas, and unsafe openings before stabilization.",
          "Document shoring, bracing, board-up, and tarp with wide and close shots.",
          "Log who ordered stabilization and tie to emergency line items in job notes.",
        ],
      },
      {
        id: "pre-demo-capture",
        title: "Capture pre-demolition structural conditions",
        owner: "field",
        actions: [
          "Photograph framing, sheathing, trusses, and connections in demo path.",
          "Mark demolition boundaries visible in photos — char lines, swelling, contamination limits.",
          "Separate structural photo folder from smoke cleaning images.",
        ],
        notes:
          "Discovery supplements need discovery-era photos — not rebuild-after photos only.",
      },
      {
        id: "demo-discovery",
        title: "Document concealed damage during demolition",
        owner: "field",
        actions: [
          "Photograph hidden char, compromised connections, and cavity smoke as exposed.",
          "Log daily demo notes with room and assembly labels matching estimate sketch.",
          "Stop and photograph before closing cavities when new damage appears.",
        ],
      },
      {
        id: "engineer-coordination",
        title: "Coordinate engineer scope when structural concerns exist",
        owner: "project-manager",
        actions: [
          "Order structural evaluation when char depth or load path is questionable.",
          "Attach engineer conclusions to rebuild line items in supplement index.",
          "Reference permit or inspector comments when available.",
        ],
      },
      {
        id: "handoff-rebuild",
        title: "Hand off structural file for rebuild estimate alignment",
        owner: "project-manager",
        actions: [
          "Reconcile demo photos to carrier sketch rooms and structural line items.",
          "Queue supplement for discovery scope not on first estimate.",
          "Cross-check that smoke cleaning lines are not applied to framing replacement scope.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "discovery-era",
        label: "Concealed damage photographed during tear-out, not after rebuild",
        required: true,
      },
      {
        id: "folder-separation",
        label: "Structural folder separate from smoke wipe documentation",
        required: true,
      },
      {
        id: "emergency-contemporaneous",
        label: "Stabilization photos captured when work performed",
        required: true,
      },
      {
        id: "demo-justification",
        label: "Demolition boundaries visible in photos with narrative",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Demolition without pre-demo framing photos",
        impact: "Demo and rebuild lines denied for insufficient justification.",
        correction: "Photograph assemblies and char depth before removal.",
      },
      {
        mistake: "Discovery supplements submitted after rebuild without tear-out photos",
        impact: "Scope looks like late inflation; supervisors cannot verify concealed damage.",
        correction: "Capture cavity and framing damage as exposed during demo.",
      },
      {
        mistake: "Structural rebuild lines mixed with smoke cleaning documentation",
        impact: "Desk reviewers apply cleaning macros to framing replacement.",
        correction: "Maintain separate structural and smoke documentation folders.",
      },
      {
        mistake: "Emergency stabilization billed without contemporaneous photos",
        impact: "Shoring and board-up lines reduce on desk review.",
        correction: "Photograph stabilization work when installed, not at invoice from memory.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Tear-out reveals charred framing beyond initial carrier scope",
        documentation: "Discovery-era framing photos with demo boundary narrative.",
        lineItemHint: "Framing removal, structural rebuild, and sheathing replacement",
      },
      {
        trigger: "Engineer recommends member replacement after inspection",
        documentation: "Engineer report excerpts with member labels matching photos.",
        lineItemHint: "Structural repair and engineered assembly replacement",
      },
      {
        trigger: "Ongoing temporary protection needed through cleaning and rebuild phases",
        documentation: "Phase-dated protection photos beyond initial board-up.",
        lineItemHint: "Temporary shrink wrap, floor protection, and fencing extensions",
      },
    ],
    relatedResources: [
      {
        label: "Fire claim intake checklist",
        href: "/resources/guides/fire-damage/fire-claim-intake-guide",
      },
      {
        label: "Contents documentation guide",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
    ],
  }),
] as const satisfies readonly Guide[];
