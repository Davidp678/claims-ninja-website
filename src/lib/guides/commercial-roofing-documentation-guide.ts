import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/roofing" as const;
const CATEGORY = "roofing-claims" as const;
const GUIDE_SLUG = "commercial-roofing-documentation-guide" as const;

export const COMMERCIAL_ROOFING_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Commercial Roofing Documentation Guide",
  excerpt:
    "Learn how commercial roofing contractors document insurance claims on low-slope and steep-slope assemblies: membrane systems, moisture surveys, core sampling, equipment detach-reset, interior water migration, and field evidence that supports estimate review and supplement recovery.",
  category: CATEGORY,
  guideType: "documentation-standard",
  recommended: true,
  roles: ["field", "office", "supplement-coordinator", "project-manager"],
  claimPhase: "documentation",
  tags: [
    "Commercial roofing",
    "Low-slope roofing",
    "TPO",
    "EPDM",
    "PVC",
    "Modified bitumen",
    "Built-up roofing",
    "Metal roofing",
    "Spray foam",
    "Roof coatings",
    "Moisture survey",
    "Core sampling",
    "Roofing claims",
    "Supplement",
    "Documentation",
  ],
  publishedAt: "2026-07-07",
  updatedAt: "2026-07-07",
  estimatedMinutes: 22,
  seoTitle:
    "Commercial Roofing Documentation Guide | Contractor Claim Documentation Standards",
  seoDescription:
    "Document commercial roofing insurance claims: membrane systems, moisture surveys, core samples, equipment detach-reset, interior water migration, and field evidence for supplement recovery.",
  relatedGuideSlugs: [
    "commercial-insurance-claims-documentation-guide",
    "retail-office-insurance-claims-guide",
    "multifamily-apartment-insurance-claims-guide",
    "hoa-insurance-claims-guide",
    "industrial-warehouse-insurance-claims-guide",
    "hoa-roofing-claims-guide",
    "multi-building-roofing-claims-guide",
    "fire-damage-documentation-guide",
    "roof-matching-documentation-guide",
    "roof-repairability-documentation-guide",
    "roof-hail-damage-documentation-guide",
    "roof-wind-damage-documentation-guide",
    "roof-measurement-documentation-guide",
    "roofing-documentation-guide",
    "roofing-supplement-checklist",
    "code-upgrade-documentation-guide",
    "roof-reinspection-guide",
    "reinspection-preparation-guide",
  ],
  relatedBlogSlugs: [
    "why-commercial-insurance-claims-get-underpaid",
    "roofing-supplement-playbook",
    "what-is-a-roof-supplement",
    "hail-damage-roof-claims-documentation-supplement",
    "wind-damage-roof-claims-what-carriers-miss",
    "roof-matching-vs-repairability-when-to-supplement",
  ],
  faqIds: [
    "roof-commercial-damage-documentation",
    "roof-commercial-supplement-documentation",
    "roof-commercial-moisture-survey-payment",
    "roof-commercial-inspection-photos",
    "roof-commercial-system-replacement-documentation",
    "roofing-commercial",
    "roofing-carrier-documentation",
    "supplements-whats-included",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["commercial", "hail", "wind", "replacement"],
  purpose:
    "Commercial roofing insurance claims require documentation scaled to assembly complexity, multi-trade coordination, and higher carrier scrutiny — not residential shingle templates applied to low-slope membranes. This guide is the contractor playbook for documenting commercial roof damage, inspections, estimating support, and supplement recovery on TPO, EPDM, PVC, modified bitumen, BUR, metal, spray foam, and coating systems. For residential storm peril documentation, see the Hail and Wind Damage Roof Documentation Guides. This guide is not legal advice and not a guarantee of claim outcomes. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Commercial, industrial, or institutional roof loss with membrane or metal assembly",
      signal:
        "Property type requires low-slope documentation, core sampling, moisture surveys, or equipment detach-reset beyond residential scope",
    },
    {
      condition: "Carrier estimate applies residential macros to commercial footprint",
      signal:
        "Missing insulation, cover board, crane, staging, or multi-trade lines on large square-count or parapet-heavy roofs",
    },
    {
      condition: "Interior water intrusion documented below commercial roof deck",
      signal:
        "Ceiling mapping, wet insulation discovery, or mechanical equipment damage requires interior-roof correlation",
    },
    {
      condition: "Supplement or reinspection pending on commercial scope gaps",
      signal:
        "Denied lines cite insufficient moisture proof, repairability-only scope, or undocumented equipment coordination",
    },
    {
      condition: "Business interruption or operational constraints affect production documentation",
      signal:
        "After-hours access, phased sections, or occupied building requirements need contemporaneous access logs",
    },
  ],
  prerequisites: [
    "Claim number, carrier estimate, and property management or building engineer contact on file",
    "Safety plan, fall protection, and roof access authorization documented before field mobilization",
    "Manufacturer system specifications and warranty requirements for the existing assembly",
    "Moisture survey equipment, core sampling tools, and roof plan template available when wet insulation is suspected",
    "Project manager or documentation lead assigned on multi-section or multi-building commercial roofs",
  ],
  requiredDocumentation: [
    {
      id: "roof-field-damage",
      label: "Roof field damage documentation",
      required: true,
      detail:
        "Wide and close-up photos of membrane punctures, hail impacts, wind uplift, ponding damage, and delamination indexed to roof plan zones.",
    },
    {
      id: "seam-documentation",
      label: "Seam and lap documentation",
      required: true,
      detail:
        "Photos of failed heat-welds, open laps, seam splits, and adhesive failures with overview context on each roof section.",
    },
    {
      id: "flashing-coping-edge",
      label: "Flashings, coping, and edge metal",
      required: true,
      detail:
        "Document wall flashings, parapet coping, gravel stop, drip edge, and termination bars with damage and pre-existing condition notes.",
    },
    {
      id: "expansion-joints",
      label: "Expansion joints and control joints",
      required: true,
      detail:
        "Photos of joint covers, sealant failure, and displaced expansion assemblies tied to roof plan locations.",
    },
    {
      id: "drains-scuppers",
      label: "Drains and scuppers",
      required: true,
      detail:
        "Document clogged, displaced, or damaged drain bowls, strainers, scupper boxes, and overflow conditions with interior correlation when water intrusion is reported.",
    },
    {
      id: "penetrations-equipment",
      label: "HVAC penetrations and roof-mounted equipment",
      required: true,
      detail:
        "Photograph curbs, pipe boots, skylights, satellite mounts, and mechanical units with detach-reset condition and storm-related displacement.",
    },
    {
      id: "interior-water-migration",
      label: "Interior damage and water migration",
      required: true,
      detail:
        "Ceiling maps, moisture readings, and photo sequences linking interior stains to roof zones, drains, or penetration paths.",
    },
    {
      id: "temporary-repairs",
      label: "Temporary repairs and emergency dry-in",
      required: true,
      detail:
        "Document emergency tarp, cut-and-patch, or flood-coat work with date, location, and materials before permanent scope is finalized.",
    },
    {
      id: "measurements-roof-plan",
      label: "Measurements and annotated roof plan",
      required: true,
      detail:
        "Field measurements, aerial or drone dimensions reconciled to carrier sketch; annotated plan showing zones, slopes, and equipment locations.",
    },
    {
      id: "moisture-core-results",
      label: "Moisture survey and core sampling results",
      required: false,
      detail:
        "Required when wet insulation is suspected — moisture scan maps, core sample photos, and lab or field test results indexed to roof zones.",
    },
    {
      id: "contractor-narrative",
      label: "Contractor narrative summary",
      required: true,
      detail:
        "One-page objective summary tying peril, assembly type, field findings, moisture results, and requested scope — indexed to estimate lines.",
    },
  ],
  steps: [
    {
      id: "why-commercial-claims-differ",
      title: "Why Commercial Roofing Claims Are Different",
      actions: [
        "Commercial roof claims carry higher total values — membrane replacement, insulation, cover board, and equipment coordination multiply line-item scrutiny at desk review.",
        "Roofing assemblies are complex — multi-layer systems with cover board, insulation, vapor barriers, and attachment methods require documentation beyond surface membrane photos.",
        "Multiple trades intersect on commercial roofs — HVAC, electrical, sheet metal, and structural work must be documented for detach-reset, crane, and staging line items.",
        "Documentation requirements exceed residential templates — roof plans, moisture surveys, core samples, and manufacturer compliance records are commonly expected on low-slope files.",
        "Carrier scrutiny increases with claim size — specialist adjusters, engineer review, and third-party consultants evaluate moisture proof, repairability, and code arguments more aggressively.",
        "Business interruption and operational constraints affect production — after-hours access, phased sections, and occupied buildings require contemporaneous access and coordination logs alongside roof evidence.",
      ],
    },
    {
      id: "commercial-roofing-systems",
      title: "Commercial Roofing Systems and Documentation Impact",
      actions: [
        "TPO — document heat-weld seam failures, hail punctures, UV chalking vs functional damage, and manufacturer weld requirements; estimating must address insulation and cover board beneath single-ply scope.",
        "EPDM — photograph seam adhesive failures, ballast displacement, membrane shrinkage pulls at parapets, and patch history; black membrane hail impacts require close-ups showing substrate exposure.",
        "PVC — document heat-welded seams, plasticizer migration, chemical exposure, and color-matching constraints; manufacturer specs often restrict patch size and require full-section replacement.",
        "Modified bitumen — capture granule loss, ply separation, hail fractures in cap sheet, and torch-applied repair history; multi-ply systems require layer documentation during core sampling.",
        "Built-up roofing (BUR) — photograph blisters, gravel displacement, felts exposure, and flood coat conditions; estimating must address surfacing, insulation, and structural deck condition when wet.",
        "Metal roofing — document seam separation, clip damage, hail dents affecting water-shedding, and fastener back-out; standing seam and R-panel systems require profile identification and manufacturer repair limits.",
        "Spray polyurethane foam (SPF) — photograph hail impacts showing foam exposure, coating failure, and moisture intrusion at penetrations; recoating requirements and substrate condition drive replacement vs repair disputes.",
        "Roof coating systems — document base membrane condition beneath coating, adhesion failures, and whether storm damage affects substrate or coating only; carriers often dispute full system replacement when coating alone is damaged.",
        "Index assembly type on every photo label and the roof plan — desk reviewers apply different repairability thresholds by system, and mismatched system identification triggers scope exclusions.",
      ],
      notes:
        "See the Roof Repairability Documentation Guide when carriers approve patch-only scope on systems where manufacturer guidance requires section replacement.",
    },
    {
      id: "inspection-workflow-safety-access",
      title: "Inspection Workflow: Safety, Access, and Overview Capture",
      actions: [
        "Complete safety planning before roof access — fall protection, parapet heights, skylight hazards, and written job hazard analysis documented for crew and carrier review.",
        "Confirm roof access authorization with property management or building engineer — log access times, escorts, and after-hours restrictions contemporaneously.",
        "Capture drone imagery and ground photography when safe and permitted — establish building context, elevation overview, and areas inaccessible by foot traffic.",
        "Photograph roof overview from each corner and mid-field — wide shots showing drainage paths, equipment layout, and primary damage zones before close-up work.",
        "Assign consistent zone labels on the roof plan before detailed documentation — section names carry through photos, moisture maps, cores, and estimate lines.",
      ],
    },
    {
      id: "inspection-workflow-field-testing",
      title: "Inspection Workflow: Test Areas, Moisture, Cores, and Interior",
      actions: [
        "Document test squares or sample areas on membranes when hail or impact surveys are required — location, dimensions, and impact counts tied to roof plan zones.",
        "Perform moisture surveys when interior leaks, ponding, or storm openings suggest wet insulation — scan grids mapped to roof plan with readings and anomaly flags.",
        "Core sample when moisture survey or visual evidence indicates wet substrate — photograph each core location, layer stack, and wet insulation before closing; retain samples per manufacturer protocol when testing.",
        "Conduct interior inspections below affected zones — ceiling tiles, deck underside, and mechanical rooms with moisture readings tied to roof plan coordinates.",
        "Create ceiling maps linking interior stains and readings to roof zones, drains, and penetrations — water migration paths support scope beyond visible roof surface damage.",
        "Document roof-mounted mechanical equipment — HVAC curbs, duct openings, refrigerant lines, and electrical disconnects with detach-reset condition and storm displacement.",
      ],
      notes:
        "Moisture survey and core sampling costs are recoverable on many commercial files when contemporaneous results justify wet insulation replacement — document authorization requests and results in the claim file.",
    },
    {
      id: "required-documentation-standards",
      title: "Required Documentation: Photos, Annotations, and Measurements",
      actions: [
        "Photograph every documented condition with overview and close-up pairs — desk reviewers cannot approve scope they cannot locate on the roof plan.",
        "Annotate photos with zone labels, direction, and date — use consistent naming that matches the carrier sketch and estimate room or section labels.",
        "Record field measurements for parapets, crickets, saddles, and cut-up geometry omitted from aerial reports — reconciliation tables save adjuster time at review.",
        "Document seams, flashings, coping, edge metal, expansion joints, drains, and scuppers as separate indexed categories — not merged into generic roof damage folders.",
        "Capture interior water migration with ceiling maps and moisture readings correlated to roof zones — interior evidence supports insulation and deck scope carriers omit from exterior-only inspections.",
        "Photograph temporary repairs and emergency dry-in before permanent work — date-stamped mitigation records support emergency scope lines and timeline arguments.",
        "Attach manufacturer specifications, warranty requirements, and code citations as supporting documents — not as substitutes for contemporaneous field photos.",
      ],
    },
    {
      id: "carrier-documentation-requirements",
      title: "Carrier Documentation Requirements",
      actions: [
        "Functional damage — document loss of water-shedding integrity, open seams, punctures through membrane, and displaced flashings; distinguish from cosmetic surface marks that do not affect performance.",
        "Cosmetic damage — record hail dents, coating scuffs, and minor discoloration separately; carriers deny replacement when only cosmetic conditions are documented without functional impairment.",
        "Repairability — photograph conditions exceeding manufacturer patch limits, saturated insulation, and multiple impact areas per section; cross-reference the Roof Repairability Documentation Guide for brittle or aged membrane disputes.",
        "Moisture intrusion — moisture survey maps, core sample photos, and interior readings must align on wet insulation scope — unsupported wet claims are commonly excluded at desk review.",
        "Manufacturer guidance — attach spec sheets showing maximum patch size, compatible materials, and required replacement triggers when disputing carrier patch-only scope.",
        "Testing results — include core sample moisture content, adhesion tests, and thermographic survey reports indexed to roof plan zones with date and technician identification.",
        "Prior repairs — document existing patches, overlays, and maintenance history before attributing conditions to the reported storm — carriers separate pre-existing from storm-created damage.",
        "Storm-created openings — photograph displaced metal, punctured membranes, and broken skylights with storm date context and weather verification when available.",
        "Emergency mitigation — record temporary dry-in, flood coats, and tarp installations with materials, labor, and location before permanent scope is negotiated.",
      ],
    },
    {
      id: "estimating-documentation-support",
      title: "Estimating Considerations: Documentation That Justifies Line Items",
      actions: [
        "Roof measurements — field dimensions, drone reports, and cut-up geometry reconciled to carrier sketch with variance table for crickets, parapets, and multi-level sections.",
        "Waste factors — document cut-up complexity, irregular perimeters, and equipment obstructions that increase material waste beyond standard macros.",
        "Tear-off — progressive photos showing existing layers, insulation condition, and deck exposure; layered systems require layer count documentation during removal.",
        "Insulation replacement — moisture survey maps and core samples indexed to wet zones; photograph removed wet insulation with thickness and type labels.",
        "Cover board — document existing cover board type, damage, and manufacturer requirement for replacement when insulation is removed on single-ply systems.",
        "Fasteners and adhesives — record attachment method, pull-off conditions, and code-driven reattachment requirements when re-cover is not permitted.",
        "Flashings and sheet metal — index bent, cracked, or displaced metal to specific wall, curb, and edge locations; photograph custom-fabricated conditions beyond standard flashing macros.",
        "Crane and material staging — document building height, access constraints, street closure needs, and rooftop staging limitations with photos and site logistics notes.",
        "HVAC detach and reset — photograph each unit, curb, and disconnect before removal; document refrigerant recovery, rigging, and reset requirements with equipment inventory.",
        "Electrical disconnects — record units requiring licensed disconnect and reconnect with panel locations and permit requirements where applicable.",
        "Safety requirements — document parapet heights, tie-off points, warning line setups, and OSHA-driven protection that supports safety line items on commercial production.",
      ],
      notes:
        "See the Roof Measurement Documentation Guide for measurement file standards and the Roofing Supplement Checklist before submission.",
    },
    {
      id: "common-commercial-mistakes",
      title: "Common Commercial Roofing Documentation Mistakes",
      actions: [
        "Residential shingle photo templates applied to low-slope membrane claims — missing seam, flashing, and insulation documentation.",
        "No roof plan or zone labels — reviewers cannot correlate photos, moisture maps, and estimate sections.",
        "Moisture survey performed without mapped results tied to insulation scope — wet insulation charges denied as unsupported.",
        "Core samples taken without location photos and layer documentation — sample results disconnected from estimate quantities.",
        "HVAC and equipment detach-reset omitted from photo index — mechanical lines cut at carrier review despite field requirements.",
        "Interior ceiling damage not mapped to roof zones — water migration scope excluded when exterior photos alone are submitted.",
        "Temporary emergency repairs not documented before permanent scope — mitigation timeline disputes weaken emergency line items.",
      ],
    },
    {
      id: "documentation-checklist",
      title: "Commercial Roofing Documentation Checklist",
      actions: [
        "Safety plan and roof access authorization on file before inspection begins.",
        "Roof plan with zone labels consistent across photos, moisture maps, cores, and estimate.",
        "Overview and close-up photo pairs for field damage, seams, flashings, coping, edge metal, joints, drains, and penetrations.",
        "Drone and ground photography captured when permitted — building context and inaccessible areas documented.",
        "Moisture survey and core sampling complete where wet insulation is suspected — results mapped to zones.",
        "Interior inspection and ceiling mapping correlated to roof zones and water migration paths.",
        "Mechanical equipment inventory with detach-reset photos and disconnect documentation.",
        "Measurements reconciled to carrier sketch — cut-up geometry and parapet dimensions recorded.",
        "Manufacturer specs, test results, and code citations attached as supporting documents.",
        "Contractor narrative indexed to estimate lines — scope comparison table complete.",
        "Supplement package reviewed against Roofing Supplement Checklist before submission.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "safety-access-documented",
      label: "Safety plan and roof access authorization documented",
      required: true,
      detail: "Fall protection and access logs complete before field inspection begins.",
    },
    {
      id: "roof-plan-active",
      label: "Annotated roof plan with consistent zone labels",
      required: true,
      detail: "Zone names match photos, moisture maps, cores, interior maps, and estimate sections.",
    },
    {
      id: "overview-closeups-complete",
      label: "Overview and close-up pairs for all documented conditions",
      required: true,
      detail: "Field damage, seams, flashings, drains, penetrations, and equipment indexed to plan zones.",
    },
    {
      id: "moisture-cores-indexed",
      label: "Moisture survey and core results mapped to insulation scope",
      required: false,
      detail: "Required when wet insulation is claimed — scan grids and core photos tied to replacement zones.",
    },
    {
      id: "interior-correlation",
      label: "Interior ceiling maps correlated to roof zones",
      required: true,
      detail: "Water migration paths documented when interior damage or leaks are reported.",
    },
    {
      id: "equipment-inventory",
      label: "Roof-mounted equipment inventory with detach-reset documentation",
      required: true,
      detail: "HVAC, skylights, and mechanical units photographed with disconnect and rigging requirements.",
    },
    {
      id: "measurements-reconciled",
      label: "Measurements reconciled to carrier sketch",
      required: true,
      detail: "Field dimensions, cut-up geometry, and aerial variance table complete before estimate submission.",
    },
    {
      id: "supplement-ready",
      label: "Scope comparison indexed and supplement checklist complete",
      required: true,
      detail: "Carrier lines tied to specific photos and supporting documents before supplement submission.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Residential documentation templates on commercial membrane roofs",
      impact:
        "Carriers exclude seam, insulation, and equipment scope when photos lack low-slope assembly evidence.",
      correction:
        "Use commercial roof plan indexing and document seams, flashings, cores, and equipment per zone from intake.",
    },
    {
      mistake: "No annotated roof plan or zone labels",
      impact:
        "Desk reviewers cannot locate documented conditions or correlate moisture results to estimate sections.",
      correction:
        "Publish a labeled roof plan before close-up work; carry zone names through every photo, map, and estimate line.",
    },
    {
      mistake: "Wet insulation claimed without moisture survey or core proof",
      impact:
        "Insulation replacement lines denied as unsupported at commercial desk review.",
      correction:
        "Perform moisture scans and core samples with mapped results before billing wet insulation removal.",
    },
    {
      mistake: "HVAC detach-reset scope without equipment inventory photos",
      impact:
        "Mechanical line items cut when carriers cannot verify unit count, curb conditions, or disconnect requirements.",
      correction:
        "Photograph every roof-mounted unit with curb, disconnect, and rigging context indexed to the equipment schedule.",
    },
    {
      mistake: "Interior water damage not mapped to roof zones",
      impact:
        "Migration scope and deck replacement arguments fail when interior and exterior evidence are disconnected.",
      correction:
        "Create ceiling maps with moisture readings tied to roof plan coordinates, drains, and penetrations.",
    },
    {
      mistake: "Temporary emergency repairs not documented contemporaneously",
      impact:
        "Emergency mitigation and dry-in lines disputed when permanent scope photos replace mitigation timeline evidence.",
      correction:
        "Photograph all temporary repairs with date, material, and location before permanent production begins.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Hidden damage discovered during tear-off or core sampling",
      documentation:
        "Progressive tear-off photos, core sample locations, and dated discovery notes tied to roof plan zones — submit supplement before covering new assembly.",
      lineItemHint: "Additional tear-off, deck repair, insulation replacement in undiscovered zones",
    },
    {
      trigger: "Wet insulation documented by moisture survey or core sample",
      documentation:
        "Moisture scan maps, core photos showing wet layers, and removed insulation photos with thickness and type labels.",
      lineItemHint: "Insulation removal and replacement, cover board, vapor barrier",
    },
    {
      trigger: "Code upgrades required on re-cover or replacement",
      documentation:
        "Permit requirements, code citations, and photo proof of non-compliant existing conditions — see Code Upgrade Documentation Guide.",
      lineItemHint: "Insulation R-value upgrade, attachment compliance, edge metal, fire classification",
    },
    {
      trigger: "Manufacturer requirements exceed carrier patch-only scope",
      documentation:
        "Manufacturer spec sheets, warranty requirements, and field photos showing damage beyond maximum repair size.",
      lineItemHint: "Full section replacement, compatible membrane, manufacturer-approved assembly",
    },
    {
      trigger: "Material availability or discontinued membrane color",
      documentation:
        "Supplier letters, discontinued product notices, and matching analysis — see Roof Matching Documentation Guide for overlay disputes.",
      lineItemHint: "Full replacement, upgraded system, compatible alternative assembly",
    },
    {
      trigger: "Safety regulations require enhanced fall protection or warning lines",
      documentation:
        "Site photos showing parapet heights, tie-off limitations, and OSHA-driven protection setup during production.",
      lineItemHint: "Safety monitoring, warning line systems, swing stage, anchor points",
    },
    {
      trigger: "Access limitations require crane, hoisting, or after-hours production",
      documentation:
        "Photos of staging constraints, street access, building height, and property management after-hours authorization logs.",
      lineItemHint: "Crane mobilization, material hoisting, after-hours labor, street closure",
    },
    {
      trigger: "Multiple roofing systems on complex campus or multi-building loss",
      documentation:
        "System identification per section, phased photo indexing, and separate scope tables for each assembly type.",
      lineItemHint: "Phased supplements by building or section; system-specific line items",
    },
    {
      trigger: "Flashing or roof edge assemblies damaged beyond repair limits",
      documentation:
        "Close-up and context photos of coping, gravel stop, parapet walls, and custom sheet metal with damage measurements.",
      lineItemHint: "Coping replacement, edge metal, counter-flashings, custom fabrication",
    },
  ],
  relatedResources: [
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
      label: "Fire Damage Documentation Guide",
      href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
    },
    {
      label: "HOA Roofing Claims Guide",
      href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
    },
    {
      label: "Multi-Building Roofing Claims Guide",
      href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
    },
    {
      label: "Roof Matching Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
    },
    {
      label: "Roof Repairability Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
    },
    {
      label: "Hail Damage Roof Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-hail-damage-documentation-guide",
    },
    {
      label: "Wind Damage Roof Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-wind-damage-documentation-guide",
    },
    {
      label: "Roof Measurement Documentation Guide",
      href: "/resources/guides/roofing-claims/roof-measurement-documentation-guide",
    },
    {
      label: "Roofing Claim Documentation Standard",
      href: "/resources/guides/roofing-claims/roofing-documentation-guide",
    },
    {
      label: "Roofing Supplement Checklist",
      href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
    },
    {
      label: "Code Upgrade Documentation Guide",
      href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
    },
    {
      label: "Roof Reinspection Guide",
      href: "/resources/guides/roofing-claims/roof-reinspection-guide",
    },
    {
      label: "Roof Reinspection Day-Of Checklist",
      href: "/resources/guides/roofing-claims/reinspection-preparation-guide",
    },
    {
      label: "Roofing supplement playbook",
      href: "/resources/blog/roofing-supplement-playbook",
    },
    {
      label: "What is a roof supplement?",
      href: "/resources/blog/what-is-a-roof-supplement",
    },
    {
      label: "Hail damage roof claims blog",
      href: "/resources/blog/hail-damage-roof-claims-documentation-supplement",
    },
    {
      label: "Wind damage roof claims blog",
      href: "/resources/blog/wind-damage-roof-claims-what-carriers-miss",
    },
    {
      label: "Roof matching vs repairability blog",
      href: "/resources/blog/roof-matching-vs-repairability-when-to-supplement",
    },
    {
      label: "Claims Ninja platform",
      href: "/platform",
    },
  ],
});
