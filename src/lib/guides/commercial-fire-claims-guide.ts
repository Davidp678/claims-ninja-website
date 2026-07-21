import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/fire-damage" as const;
const CATEGORY = "fire-damage" as const;
const GUIDE_SLUG = "commercial-fire-claims-guide" as const;

export const COMMERCIAL_FIRE_CLAIMS_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Commercial Fire Claims Guide",
  excerpt:
    "Contractor playbook for documenting, estimating, supplementing, and recovering commercial fire insurance claims — office, retail, industrial, hospitality, healthcare, and multi-tenant properties with large-loss documentation, tenant coordination, and phased reconstruction workflows.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Commercial fire",
    "Large loss",
    "Business interruption",
    "Tenant coordination",
    "Smoke migration",
    "HVAC contamination",
    "Pack-out",
    "Supplement",
    "Documentation",
    "Restoration contractors",
    "Multi-tenant",
    "Industrial fire",
    "Phased reconstruction",
    "Engineering",
  ],
  publishedAt: "2026-07-10",
  updatedAt: "2026-07-14",
  estimatedMinutes: 20,
  seoTitle:
    "Commercial Fire Claims Guide | Contractor Playbook for Large-Loss Fire Claims",
  seoDescription:
    "Document, estimate, and recover commercial fire insurance claims: tenant coordination, large-loss documentation, engineering scope, business interruption support, supplements, and phased reconstruction for contractors.",
  relatedGuideSlugs: [
    "commercial-insurance-claims-documentation-guide",
    "large-loss-commercial-insurance-claims-guide",
    "multifamily-apartment-insurance-claims-guide",
    "retail-office-insurance-claims-guide",
    "hoa-insurance-claims-guide",
    "industrial-warehouse-insurance-claims-guide",
    "fire-damage-supplement-playbook-for-contractors",
    "fire-damage-documentation-guide",
    "fire-code-upgrade-documentation-guide",
    "smoke-soot-damage-documentation-guide",
    "contents-inventory-documentation-guide",
    "pack-out-documentation-guide",
    "documentation-standards-guide",
    "commercial-water-loss-documentation-guide",
    "category-3-water-damage-documentation-guide",
    "commercial-mold-claims-guide",
    "hvac-contamination-guide",
    "structural-stabilization-documentation-guide",
    "fire-claim-intake-guide",
  ],
  relatedBlogSlugs: [
    "why-commercial-insurance-claims-get-underpaid",
    "why-fire-damage-supplements-get-denied",
    "why-fire-damage-claims-get-underpaid",
    "fire-damage-claim-documentation-guide",
    "fire-damage-supplement-playbook-for-contractors",
  ],
  faqIds: [
    "fire-commercial-claims-documentation",
    "fire-commercial-tenant-owner-responsibility",
    "fire-commercial-large-loss-scrutiny",
    "fire-commercial-business-interruption-role",
    "fire-commercial-supplement-opportunities",
    "fire-damage-documentation-insurance",
    "fire-claims-underpaid-why",
    "fire-supplement-documentation-support",
    "fire-hidden-damage-documentation",
    "contents-inventory-documentation-insurance",
    "pack-out-documentation-insurance",
    "water-commercial-claims-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["fire-damage", "commercial", "large-loss"],
  purpose:
    "Commercial fire insurance claims require documentation scaled to property footprint, occupancy complexity, and stakeholder count — not residential single-file templates applied to office towers, retail centers, industrial plants, or multi-tenant campuses. Higher dollar values, business interruption overlap, engineering involvement, tenant displacement, and extended claim timelines demand disciplined file organization from emergency response through settlement. This guide is the contractor operational playbook for documenting, managing, estimating, supplementing, and recovering commercial fire claims — not fire restoration procedures. For residential and general fire documentation standards, see the Fire Damage Documentation Guide. For smoke, soot, HVAC, contents, and pack-out field standards, see the specialty fire guides linked below. For commercial indexing patterns on water losses, see the Commercial Water Loss Documentation Guide. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Office, retail, industrial, hospitality, or healthcare fire loss with multi-zone damage",
      signal:
        "Multiple floors, suites, or production areas affected; smoke migration beyond origin room; carrier assigns specialist adjuster or large-loss team",
    },
    {
      condition: "Multi-tenant or mixed-use property with owner and tenant scope boundaries",
      signal:
        "Triple-net lease, tenant improvements, separate contents policies, or property management requesting shell versus tenant scope separation",
    },
    {
      condition: "Large-loss mobilization with engineering, environmental, or fire investigation involvement",
      signal:
        "Structural engineer, industrial hygienist, or fire investigator retained; demolition pending engineering clearance; extended claim timeline expected",
    },
    {
      condition: "Business interruption or extra expense documentation coordination required",
      signal:
        "Owner or CPA requests operational timeline data, mitigation duration logs, or access delay records — contractors document facts, not BI valuations",
    },
    {
      condition: "Carrier underpayment, supplement denial, or reinspection on commercial fire file",
      signal:
        "Desk reviewer cites insufficient building indexing, missing tenant logs, weak engineering tie-in, or residential template applied to commercial footprint",
    },
  ],
  prerequisites: [
    "Commercial documentation plan with folder index, building or suite naming convention, and role assignments published within 24 hours of mobilization",
    "Property management or owner liaison contact, lease summary, and tenant roster when multi-tenant occupancy applies",
    "Building or suite inventory template with consistent numbering aligned to property records",
    "Tenant coordination and access log template for occupied commercial properties",
    "Project manager or documentation lead assigned on losses exceeding single-dwelling scope",
    "Separate structure, contents, and engineering report folders indexed before carrier walkthrough",
  ],
  requiredDocumentation: [
    {
      id: "site-stabilization",
      label: "Site stabilization and emergency mitigation records",
      required: true,
      detail:
        "Board-up, tarp, shoring, fencing, and temporary protection with wide and close shots; date-stamped notes on what was secured, by whom, and authorization source.",
    },
    {
      id: "building-index",
      label: "Building or suite inventory with consistent numbering",
      required: true,
      detail:
        "Master list of every affected structure, floor, suite, or production zone indexed to site plan — aligned to property management numbering, not crew shorthand.",
    },
    {
      id: "tenant-coordination-log",
      label: "Tenant coordination and access log",
      required: true,
      detail:
        "Property authorization, tenant notification, escort requirements, displacement records, and access delays documented contemporaneously on occupied properties.",
    },
    {
      id: "structural-documentation",
      label: "Structural damage and stabilization documentation",
      required: true,
      detail:
        "Origin-area char patterns, load-path concerns, shoring installations, and progressive demolition photos with engineering clearance notes when structural scope is disputed.",
    },
    {
      id: "smoke-soot-pack",
      label: "Smoke and soot migration documentation pack",
      required: true,
      detail:
        "Migration path photos, residue-type evidence, HVAC zone mapping, and room-by-room contamination index — see Smoke & Soot Damage Documentation Guide for field standards.",
    },
    {
      id: "hvac-contamination",
      label: "HVAC contamination inspection and scope documentation",
      required: true,
      detail:
        "System inspection photos, filter and coil condition, duct access evidence, and zone-to-AHU mapping before restart — see HVAC Contamination Documentation Procedure.",
    },
    {
      id: "contents-inventory",
      label: "Commercial contents and tenant improvement inventory",
      required: true,
      detail:
        "Room-by-room or zone inventory with photos, serial numbers, and shell versus tenant improvement labeling — see Contents Inventory Documentation Guide.",
    },
    {
      id: "pack-out-custody",
      label: "Pack-out chain of custody and transport records",
      required: true,
      detail:
        "Barcoding, batch logs, transport manifests, storage receipts, and return delivery documentation when contents leave site — see Pack-Out Documentation Guide.",
    },
    {
      id: "engineering-reports",
      label: "Engineering and specialty consultant reports indexed to scope",
      required: true,
      detail:
        "Structural, electrical, mechanical, environmental, and fire investigation reports cross-referenced to estimate lines and photo evidence — not filed as unattached PDFs.",
    },
    {
      id: "mitigation-daily-logs",
      label: "Mitigation daily logs and production timeline",
      required: true,
      detail:
        "Date-stamped production records, crew mobilizations, equipment deployment, and scope changes tied to building or suite identifiers throughout the claim.",
    },
    {
      id: "estimate-index",
      label: "Estimate index with trade separation and phased scope tables",
      required: true,
      detail:
        "Xactimate organization with building-indexed scope comparison, general conditions, temporary repairs, and demolition phases mapped to field evidence.",
    },
    {
      id: "communication-log",
      label: "Carrier and stakeholder communication log",
      required: true,
      detail:
        "Adjuster meetings, email scope confirmations, reinspection dates, and authorization records indexed chronologically with attachment references.",
    },
  ],
  steps: [
    {
      id: "introduction",
      title: "Introduction — Why Commercial Fire Claims Are More Complex",
      actions: [
        "Higher dollar values — total insured values on commercial properties multiply across structure, tenant improvements, business personal property, equipment, and inventory lines, triggering specialist adjusters, audit review, and extended negotiation cycles.",
        "Multiple stakeholders — property owners, tenants, property managers, lenders, engineers, environmental consultants, and carrier large-loss teams each require indexed evidence aligned to their scope boundaries.",
        "Business interruption overlap — operational downtime, tenant displacement, and extra expense questions run parallel to property damage scope; contractors document mitigation timelines and access facts without preparing BI valuations.",
        "Large quantities of documentation — multi-floor footprints, HVAC zones, MEP systems, and tenant suites generate evidence volumes that residential file patterns cannot organize or defend at desk review.",
        "Engineering involvement — structural, electrical, mechanical, and environmental consultants shape demolition boundaries, code upgrade scope, and phased reconstruction — their findings must tie to estimate lines and photo indexes.",
        "Longer claim timelines — commercial fire claims span months from emergency stabilization through engineering, demolition discovery, phased supplements, reinspection, and settlement before permanent reconstruction authorizes.",
      ],
      notes:
        "See the Fire Damage Documentation Guide for residential and general fire documentation standards; this playbook extends those standards to commercial footprint and stakeholder complexity.",
    },
    {
      id: "understanding-commercial-fire-claims",
      title: "Understanding Commercial Fire Claims",
      actions: [
        "Property ownership structures — document whether the insured is the building owner, tenant, or both; ownership determines which policy lines apply to shell, tenant improvements, and contents.",
        "Owner versus tenant responsibilities — triple-net leases often assign interior build-out and contents to tenants while shell and common areas remain owner responsibility; mislabeled scope creates denial risk on both sides.",
        "Triple-net leases — confirm lease type before attributing drywall, flooring, fixtures, and specialty build-out to structure versus tenant betterment lines.",
        "Multi-tenant buildings — treat each suite as a separate documentation track with suite number on every photo, inventory entry, and estimate section when carrier templates allow.",
        "Mixed-use properties — retail ground floor with office or residential above requires floor-level and use-type indexing; smoke migration across use types expands scope beyond origin occupancy.",
        "Industrial facilities — production equipment, specialized machinery, hazmat considerations, and code-driven rebuild requirements demand equipment-specific inventory and engineering clearance before demolition.",
        "Office buildings — tenant improvement schedules, dropped ceilings, raised floors, and data infrastructure require pre-demo documentation before carriers assume standard office macro scope.",
        "Retail centers — anchor tenant versus inline suite boundaries, common-area smoke migration, and signage scope require property-management-confirmed attribution before production.",
        "Hospitality properties — guest room blocks, commercial kitchens, laundry operations, and brand-standard finish schedules multiply contents and TI lines beyond typical office losses.",
        "Healthcare facilities — infection control, medical equipment, regulatory compliance, and extended operational continuity requirements increase documentation and coordination burden beyond standard commercial scope.",
      ],
    },
    {
      id: "initial-emergency-response",
      title: "Initial Emergency Response",
      actions: [
        "Site stabilization — secure the property with board-up, tarp, fencing, or shoring before evidence degrades; photograph every emergency measure with authorization source noted.",
        "Emergency mitigation — document first-response scope contemporaneously: water extraction from suppression, debris removal, odor counteractant deployment, and temporary dry-in.",
        "Structural safety — flag load-path concerns, compromised assemblies, and collapse risk; do not proceed with demolition until engineering clearance when structural scope is in dispute.",
        "Temporary protection — date-stamped photos of roof tarps, window seals, and weatherproofing before permanent scope is negotiated; timeline evidence supports emergency line items.",
        "Environmental hazards — document asbestos, lead, mold, or chemical contamination flags; coordinate with environmental consultants before disturbing suspect materials.",
        "Utility coordination — log utility shutoff, lockout/tagout, and restoration authorization from qualified personnel; photograph electrical panels, gas meters, and mechanical isolation points.",
        "Scene documentation — capture origin area, suppression water paths, and visible migration before cleaning or contents movement alters the scene — see Fire Claim Intake Checklist.",
        "Access control — maintain sign-in logs, escort requirements, and restricted-zone documentation when fire investigators, engineers, or carriers access the site concurrently.",
      ],
      notes:
        "See the Structural Stabilization Documentation Procedure for shoring and emergency structural evidence standards.",
    },
    {
      id: "documentation-requirements",
      title: "Documentation Requirements",
      actions: [
        "Structural documentation — char depth, framing exposure, load-bearing removal, and progressive demolition photos with engineering clearance notes when structural lines are disputed.",
        "Smoke damage — migration path photography from origin through adjacent zones, vertical shafts, and remote areas; residue-type evidence per surface category.",
        "Soot migration — document plume paths, pressure differentials, and HVAC-driven distribution before systems restart — see Smoke & Soot Damage Documentation Guide.",
        "HVAC contamination — inspect every AHU, filter bank, coil, and accessible duct segment; map zones to equipment before carrier assumes single-system cleaning macro.",
        "Roof systems — membrane, decking, insulation, and penetration damage on low-slope commercial roofs; correlate interior ceiling stains to roof zones above.",
        "Mechanical systems — boilers, chillers, rooftop units, and process piping with equipment-specific photos and serial numbers before assuming standard replacement scope.",
        "Electrical systems — panel condition, conduit, wiring exposure, and equipment damage documented before demolition removes attribution evidence.",
        "Plumbing systems — suppression pipe, sprinkler heads, domestic lines, and grease interceptors with date-stamped condition photos tied to water damage from firefighting.",
        "Specialty equipment — production machinery, commercial kitchen equipment, medical devices, and data-center infrastructure inventoried with model and serial before movement.",
        "Fire suppression systems — sprinkler head replacement, pipe damage, FDC condition, and system testing documentation when suppression scope is a separate line category.",
      ],
      notes:
        "See the HVAC Contamination Documentation Procedure and Smoke & Soot Damage Documentation Guide for field capture detail on contamination-specific assemblies.",
    },
    {
      id: "commercial-contents",
      title: "Commercial Contents",
      actions: [
        "Tenant improvements — document built-in cabinetry, specialty flooring, wall treatments, and trade fixtures with pre-loss condition photos before conflating with owner shell scope.",
        "Business equipment — photograph workstations, POS systems, kitchen equipment, and production tools with serial numbers and model plates visible.",
        "Inventory — stock-on-hand counts with SKU references, purchase records, and pre-loss photos when retail or warehouse inventory lines apply.",
        "Machinery — industrial and production equipment requires manufacturer documentation, anchor points, and utility connections photographed before disconnection.",
        "Furniture — office systems furniture, hospitality FF&E, and healthcare furnishings inventoried by zone with condition grading for clean-versus-replace decisions.",
        "Electronics — servers, networking equipment, security systems, and AV infrastructure documented with asset tags and data-recovery scope when applicable.",
        "Specialized equipment — medical, laboratory, food-service, and clean-room equipment requires manufacturer restoration guidance before carriers default to replacement.",
        "Contents categorization — separate owner shell fixtures from tenant betterments and business personal property in inventory structure and estimate sections.",
        "Restoration versus replacement — document cleaning test results, odor retention, and functional impairment per category before carriers apply blanket replacement reductions.",
        "Inventory tracking — maintain batch-level inventory tied to pack-out barcodes, storage locations, and estimate line references throughout the claim.",
      ],
      notes:
        "See the Contents Inventory Documentation Guide for room-by-room inventory, valuation support, and supplement evidence standards.",
    },
    {
      id: "pack-out-operations",
      title: "Pack-Out Operations",
      actions: [
        "Documentation — photograph every item or batch in place before movement; room labels and suite identifiers on all pack-out photos before contents leave the property.",
        "Chain of custody — maintain batch logs linking inventory entries to transport manifests, storage receipts, and cleaning vendor assignments without gaps.",
        "Barcoding — apply scannable identifiers that tie to inventory software, estimate lines, and return delivery confirmations across multi-suite commercial losses.",
        "Storage — document climate-controlled versus standard storage assignments, vault usage, and monthly storage charges with authorization from property owner or tenant policyholder.",
        "Cleaning — coordinate contents cleaning scope with smoke residue type and material category; document test cleaning results before full-batch processing.",
        "Restoration — track restoration vendor assignments, turnaround times, and condition-on-return photos for each batch before carrier release.",
        "Return logistics — schedule return delivery with tenant access coordination; photograph reset condition and obtain sign-off per suite or zone.",
        "Inventory reconciliation — compare returned inventory to original batch logs and estimate lines; document missing, damaged, or non-restorable items before closeout.",
      ],
      notes:
        "See the Pack-Out Documentation Guide for chain of custody, transport, storage, and return documentation standards on commercial multi-unit losses.",
    },
    {
      id: "business-interruption-documentation",
      title: "Business Interruption Documentation",
      actions: [
        "Business interruption overview — BI coverage compensates lost income and extra expense during operational interruption; property damage scope and BI scope run on parallel tracks with overlapping timeline facts.",
        "Why contractors should understand it — carriers and insureds reconcile mitigation duration, access delays, and phased production schedules against BI periods; contractor logs supply contemporaneous operational facts.",
        "Supporting documentation — provide date-stamped mitigation start and completion records, access restriction logs, tenant displacement coordination, and phased release schedules indexed to building zones.",
        "Operational timelines — document when each zone or suite was released for occupancy, when production ceased access, and when environmental clearance authorized re-entry.",
        "Documentation coordination — share timeline exports with the insured's BI preparer (CPA, public adjuster, or owner representative) without preparing income projections or profit-and-loss valuations.",
      ],
      notes:
        "Contractors document operational facts and mitigation timelines — they do not prepare business interruption valuations. See the Commercial Water Loss Documentation Guide for parallel BI documentation patterns on water losses.",
    },
    {
      id: "engineering-specialty-consultants",
      title: "Engineering & Specialty Consultants",
      actions: [
        "Structural engineers — evaluate load-path integrity, demolition boundaries, shoring requirements, and rebuild specifications; index findings to structural estimate lines and progressive demo photos.",
        "Industrial hygienists — assess soot residue type, clearance criteria, and post-remediation verification; tie clearance reports to cleaning scope and HVAC restart authorization.",
        "Electrical engineers — evaluate panel damage, wiring exposure, and equipment replacement requirements; cross-reference findings to electrical trade sections.",
        "HVAC specialists — inspect system contamination extent, recommend cleaning or replacement scope, and document post-clean verification before restart.",
        "Fire investigators — origin and cause reports inform coverage questions; coordinate access without disturbing contractor documentation zones when investigation is concurrent.",
        "Environmental consultants — asbestos, lead, mold, and hazmat abatement scope requires clearance documentation before demolition proceeds on older commercial properties.",
      ],
      notes:
        "Engineering and consultant reports must cross-reference estimate lines and photo indexes — unattached PDFs fail desk review on large-loss commercial files.",
    },
    {
      id: "estimating-large-commercial-fire-losses",
      title: "Estimating Large Commercial Fire Losses",
      actions: [
        "Xactimate organization — separate estimates or clearly indexed sections by building, floor, suite, and trade; desk reviewers cannot navigate unlabeled commercial scope in single-block residential templates.",
        "Trade separation — structural, mechanical, electrical, plumbing, fire suppression, contents, and general conditions each receive distinct sections with photo cross-references.",
        "Scope sequencing — align estimate phases to production sequence: emergency, stabilization, demolition, abatement, rough-in, and finish — with dated photos per phase.",
        "Phased reconstruction — document partial approvals and building-by-building release schedules when carrier authorizes phased production across large campuses.",
        "Temporary repairs — emergency tarp, shrink-wrap, temporary power, and portable HVAC documented with date-stamped photos supporting temporary facility line items.",
        "Demolition — progressive tear-out photos with engineering clearance notes; scope expands as concealed damage is discovered — submit supplements before covering new assemblies.",
        "Code upgrades — document permit requirements, non-compliant existing conditions, and current code citations per jurisdiction; see Claim Documentation Standards for citation patterns.",
        "General conditions — project management, site supervision, dumpsters, portable toilets, temporary fencing, and security documented on commercial losses where residential macros under-scope overhead.",
        "Equipment — commercial dehumidification, air scrubbers, hydroxyl generators, and negative air systems deployed at scale require asset-tag and runtime documentation.",
        "Labor coordination — after-hours, overtime, and multi-shift production on occupied properties requires tenant impact log alignment and authorization documentation.",
      ],
      notes:
        "See the Fire Damage Supplement Playbook blog for supplement submission workflow and line-item structure on fire claims.",
    },
    {
      id: "common-supplement-opportunities",
      title: "Common Supplement Opportunities",
      actions: [
        "Hidden structural damage — progressive demolition reveals char depth, compromised connections, or water damage from suppression beyond origin-area macros.",
        "Smoke migration — remote zones, vertical shafts, and HVAC-driven distribution expand cleaning scope after initial carrier walkthrough underestimated migration.",
        "HVAC contamination — duct cleaning, coil replacement, filter banks, and system testing omitted from first estimates after documented inspection findings.",
        "Code upgrades — permit-driven assembly changes, fire-rated assembly requirements, and ADA compliance discovered during engineering review.",
        "Demolition changes — engineering revisions expand demolition boundaries after initial scope assumed partial removal.",
        "Temporary facilities — portable power, temporary HVAC, security fencing, and weatherproofing required during extended mitigation or phased production.",
        "Contents handling — pack-out, storage, cleaning, and manipulation lines under-scoped when carrier estimate assumes in-place cleaning only.",
        "Additional mitigation — extended odor treatment, multiple HEPA deployments, and supplemental air scrubbing when initial scope underestimated contamination extent.",
        "Specialty subcontractors — abatement, engineering, equipment rigging, and data-center recovery require documented vendor scope not in standard carrier templates.",
        "Engineering revisions — updated structural or MEP reports expand scope after initial estimate was based on preliminary findings.",
      ],
    },
    {
      id: "common-documentation-mistakes",
      title: "Common Documentation Mistakes",
      actions: [
        "Poor photographs — dark, unlabeled, or single-angle photos without suite identifiers fail desk review on multi-zone commercial losses where carriers cannot attribute scope.",
        "Weak narratives — generic scope descriptions without building index, migration path explanation, or engineering tie-in give adjusters grounds to reduce lines.",
        "Missing reports — engineering, environmental, and IH reports filed without cross-reference to estimate lines and photo evidence are treated as unattached opinions.",
        "Missing inventories — commercial contents and tenant improvement lines denied when room-by-room inventory, serial numbers, and pre-loss photos are absent.",
        "Weak scope descriptions — estimate lines without building, floor, or suite attribution on multi-tenant properties trigger proportional reductions at audit.",
        "Poor communication logs — adjuster agreements, scope confirmations, and reinspection outcomes not indexed chronologically create disputes about authorized scope.",
        "Missing mitigation documentation — daily production logs, equipment deployment records, and timeline evidence absent when carriers challenge mitigation duration or BI overlap.",
      ],
    },
    {
      id: "commercial-fire-claim-workflow",
      title: "Commercial Fire Claim Workflow",
      actions: [
        "Emergency response — stabilize site, secure property, document scene, and establish access control before evidence degrades or stakeholders alter conditions.",
        "Documentation — publish commercial documentation plan, building index, and tenant coordination workflow within 24 hours of mobilization.",
        "Mitigation — execute emergency scope with date-stamped photos, daily logs, and equipment records tied to building or suite identifiers.",
        "Engineering — retain and index structural, MEP, environmental, and IH reports; cross-reference findings to estimate lines before demolition proceeds.",
        "Estimating — organize Xactimate with trade separation, phased scope, and building-indexed scope comparison against carrier estimate.",
        "Supplementing — submit phased supplements with contemporaneous photos and reports when documented scope exceeds carrier approval — before covering new assemblies.",
        "Carrier review — prepare indexed claim packet for adjuster walkthrough, desk review, or audit with building-labeled evidence ready.",
        "Reinspection — escort carrier or specialist adjuster with building-indexed photo packets and on-site scope attribution prepared.",
        "Settlement — finalize scope agreement, document any partial approvals, and archive indexed closeout packet before permanent reconstruction authorizes.",
        "Reconstruction — release phased production by building or zone with authorization records tied to settled scope lines.",
      ],
    },
    {
      id: "best-practices-checklist",
      title: "Best Practices Checklist",
      actions: [
        "Documentation plan published within 24 hours with folder index, naming convention, and role assignments.",
        "Building or suite inventory complete and aligned to property management records before detailed field work.",
        "Tenant coordination log maintained contemporaneously on occupied multi-tenant properties.",
        "Structural, smoke, HVAC, and contents evidence indexed separately — no mixed unlabeled photo folders.",
        "Engineering and specialty reports cross-referenced to estimate lines and photo evidence.",
        "Progressive demolition photos with dated discovery notes submitted as supplements before covering assemblies.",
        "Pack-out chain of custody complete when contents leave site — batch logs tie to inventory and estimate lines.",
        "Mitigation daily logs and equipment records maintained throughout claim timeline for BI coordination support.",
        "Xactimate organized by building, trade, and phase with scope comparison against carrier estimate.",
        "Communication log indexed chronologically with adjuster agreements and reinspection outcomes.",
        "Indexed closeout packet prepared before final settlement negotiation or production authorization.",
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion",
      actions: [
        "Commercial fire claims are won through disciplined documentation, organization, and proactive claim management — not simply better estimating.",
        "Scaled indexing, tenant coordination, engineering tie-in, and phased supplement submission separate recovered commercial files from underpaid ones.",
        "Apply the specialty fire documentation guides for field capture detail; use this playbook for commercial footprint, stakeholder, and large-loss workflow coordination.",
        "Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows on commercial fire losses.",
      ],
    },
  ],
  qualityGates: [
    {
      id: "documentation-plan-published",
      label: "Commercial documentation plan published within 24 hours",
      required: true,
      detail:
        "Folder index, naming convention, building inventory, role assignments, and daily reporting cadence documented before carrier walkthrough.",
    },
    {
      id: "building-index-complete",
      label: "Building or suite inventory aligned to property records",
      required: true,
      detail:
        "Every affected structure, floor, and suite numbered consistently with property management records — no crew shorthand labels in submitted files.",
    },
    {
      id: "tenant-log-current",
      label: "Tenant coordination log current on occupied properties",
      required: true,
      detail:
        "Access authorizations, displacement records, and escort requirements logged contemporaneously — not reconstructed after carrier dispute.",
    },
    {
      id: "engineering-indexed",
      label: "Engineering reports cross-referenced to estimate and photos",
      required: true,
      detail:
        "Structural, MEP, environmental, and IH findings tied to specific estimate lines and photo evidence — not filed as standalone attachments.",
    },
    {
      id: "scope-comparison-complete",
      label: "Building-indexed scope comparison against carrier estimate",
      required: true,
      detail:
        "Every disputed line mapped to building, trade, and photo evidence before supplement submission or reinspection.",
    },
    {
      id: "contents-inventory-complete",
      label: "Commercial contents inventory complete before pack-out",
      required: true,
      detail:
        "Room-by-room or zone inventory with photos and serial numbers before contents movement — shell versus tenant labeling applied.",
    },
    {
      id: "communication-log-indexed",
      label: "Communication log indexed chronologically",
      required: true,
      detail:
        "Adjuster meetings, scope confirmations, supplement submissions, and reinspection outcomes logged with dates and attachment references.",
    },
    {
      id: "closeout-packet-ready",
      label: "Indexed closeout packet ready before settlement",
      required: true,
      detail:
        "Complete file organized by building, trade, and phase with scope comparison, supplement history, and authorization records archived.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Applying residential single-file patterns to commercial footprints",
      impact:
        "Carriers reduce scope proportionally when building, suite, and trade attribution is missing from photos and estimates.",
      correction:
        "Publish commercial documentation plan with building index and separate structure, contents, and engineering folders from day one.",
    },
    {
      mistake: "Mixing owner shell and tenant improvement scope in one inventory",
      impact:
        "Coverage disputes delay both owner and tenant claim lines when attribution is unclear at desk review.",
      correction:
        "Label every inventory entry and estimate line as shell, tenant improvement, or business personal property per lease summary.",
    },
    {
      mistake: "Proceeding with demolition before engineering clearance",
      impact:
        "Structural scope disputes and denied demolition lines when engineering reports arrive after assemblies are removed.",
      correction:
        "Document progressive demolition with engineering sign-off at each phase; submit supplements before covering new assemblies.",
    },
    {
      mistake: "Restarting HVAC before contamination inspection is documented",
      impact:
        "Soot redistribution expands scope and voids cleaning evidence when systems run before inspection photos are captured.",
      correction:
        "Inspect and photograph every AHU, filter, coil, and accessible duct segment before restart — see HVAC Contamination Documentation Procedure.",
    },
    {
      mistake: "Pack-out without in-place inventory and chain of custody setup",
      impact:
        "Contents manipulation, storage, and cleaning lines denied when batch logs do not tie to estimate lines.",
      correction:
        "Complete room-by-room inventory with barcoding and batch logs before contents leave site — see Pack-Out Documentation Guide.",
    },
    {
      mistake: "Submitting engineering reports without estimate cross-reference",
      impact:
        "Desk reviewers treat unattached consultant opinions as unsupported narrative rather than scope justification.",
      correction:
        "Index every engineering finding to specific estimate lines and photo evidence before submission.",
    },
    {
      mistake: "End-of-job narrative assembled after production closes access",
      impact:
        "Supplement and recovery arguments fail when contemporaneous daily logs and dated photos are absent.",
      correction:
        "Maintain mitigation daily logs, equipment records, and phased supplement submissions throughout the claim timeline.",
    },
    {
      mistake: "Ignoring business interruption timeline documentation",
      impact:
        "Insureds and carriers dispute mitigation duration when contractor logs do not support operational timeline facts.",
      correction:
        "Document zone release dates, access restrictions, and phased production schedules for BI coordination without preparing valuations.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Progressive demolition reveals structural damage beyond origin-area scope",
      documentation:
        "Dated demolition photos with engineering clearance notes and char-depth measurements tied to structural estimate lines.",
      lineItemHint:
        "Structural framing, sheathing, fire-rated assemblies, shoring, engineering review",
    },
    {
      trigger: "Smoke migration documented in remote zones after initial carrier walkthrough",
      documentation:
        "Migration path photos, residue-type evidence, and HVAC zone mapping supporting expanded cleaning scope.",
      lineItemHint:
        "Smoke/seal, HEPA vacuum, chemical sponge, dry ice blasting, encapsulation per zone",
    },
    {
      trigger: "HVAC inspection findings exceed carrier first-estimate cleaning scope",
      documentation:
        "System inspection photos, filter and coil condition, duct access evidence, and post-clean verification reports.",
      lineItemHint:
        "Duct cleaning, coil replacement, filter banks, blower service, system testing",
    },
    {
      trigger: "Code upgrades required on commercial rebuild per permit review",
      documentation:
        "Permit requirements, non-compliant existing conditions, and code citations indexed to affected assemblies.",
      lineItemHint:
        "Fire-rated assemblies, ADA compliance, electrical panel upgrade, sprinkler system modification",
    },
    {
      trigger: "Commercial contents pack-out scope exceeds in-place cleaning assumption",
      documentation:
        "Inventory batches, chain of custody logs, storage receipts, and cleaning vendor assignments tied to estimate lines.",
      lineItemHint:
        "Contents manipulation, pack-out labor, storage, cleaning, reset and return",
    },
    {
      trigger: "Temporary facilities required during extended mitigation or phased production",
      documentation:
        "Date-stamped photos of temporary power, portable HVAC, security fencing, and weatherproofing with authorization records.",
      lineItemHint:
        "Temporary power, portable heat/AC, security services, temporary fencing, weatherproofing",
    },
    {
      trigger: "Environmental abatement required before demolition on older commercial property",
      documentation:
        "Environmental survey, abatement clearance, and disposal manifests indexed to demolition phase.",
      lineItemHint:
        "Asbestos abatement, lead remediation, hazmat disposal, environmental monitoring",
    },
    {
      trigger: "General conditions under-scoped on large-loss commercial file",
      documentation:
        "Project management logs, site supervision records, dumpster rotations, and security documentation supporting overhead lines.",
      lineItemHint:
        "Project management, superintendent, dumpsters, portable toilets, temporary fencing, security",
    },
    {
      trigger: "Engineering revision expands MEP scope after initial estimate",
      documentation:
        "Updated engineering report cross-referenced to electrical, mechanical, and plumbing estimate sections with photo evidence.",
      lineItemHint:
        "Electrical panel replacement, mechanical equipment, process piping, fire suppression system",
    },
    {
      trigger: "Documentation complete but carrier underpaid commercial fire scope",
      documentation:
        "Indexed claim packet with building-labeled evidence cross-referenced to each disputed line for supplement resubmission.",
      lineItemHint:
        "Supplement submission with line-item justification; Claims Ninja supports documentation review and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "How are commercial fire claims different from residential fire claims?",
      answer:
        "Commercial fire claims involve higher dollar values, multiple stakeholders, tenant scope boundaries, engineering involvement, business interruption overlap, and documentation volumes that residential file patterns cannot organize. Contractors must scale indexing to building or suite level, maintain tenant coordination logs, and tie engineering reports to estimate lines — not simply apply the same photo count with larger square footage.",
    },
    {
      question: "How should shell scope and tenant improvement scope be separated?",
      answer:
        "Review lease type and property management records before attributing scope. Owner shell typically includes structure, common areas, and base building systems; tenant improvements include interior build-out, trade fixtures, and business personal property. Label every inventory entry, photo folder, and estimate line with shell, tenant improvement, or contents designation to prevent coverage disputes on both policies.",
    },
    {
      question: "What documentation role do contractors play in business interruption claims?",
      answer:
        "Contractors document operational facts — mitigation start and completion dates, zone release schedules, access restrictions, tenant displacement coordination, and phased production timelines. They do not prepare income projections, profit-and-loss valuations, or BI claim calculations. Share indexed timeline exports with the insured's BI preparer without crossing into financial claim preparation.",
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
      label: "Fire Damage Documentation Guide",
      href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
    },
    {
      label: "Fire Code Upgrade Documentation Guide",
      href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
    },
    {
      label: "Smoke & Soot Damage Documentation Guide",
      href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
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
      label: "Fire Claim Intake Checklist",
      href: "/resources/guides/fire-damage/fire-claim-intake-guide",
    },
    {
      label: "HVAC Contamination Documentation Procedure",
      href: "/resources/guides/fire-damage/hvac-contamination-guide",
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
      label: "Commercial Water Loss Documentation Guide",
      href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
    },
    {
      label: "Commercial Mold Claims Guide",
      href: "/resources/guides/mold/commercial-mold-claims-guide",
    },
    {
      label: "Category 3 Water Damage Documentation Guide",
      href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
    },
    {
      label: "Why Fire Damage Claims Get Underpaid",
      href: "/resources/blog/why-fire-damage-claims-get-underpaid",
    },
    {
      label: "Fire Damage Claim Documentation Guide (blog)",
      href: "/resources/blog/fire-damage-claim-documentation-guide",
    },
    {
      label: "Fire Damage Supplement Playbook",
      href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
    },
    {
      label: "Why Fire Damage Supplements Get Denied",
      href: "/resources/blog/why-fire-damage-supplements-get-denied",
    },
    {
      label: "Fire Claim Documentation Checklist",
      href: "/resources/blog/fire-claim-documentation-checklist",
    },
    {
      label: "Commercial fire claims documentation FAQ",
      href: "/faq#faq-fire-commercial-claims-documentation",
    },
    {
      label: "Commercial fire tenant responsibility FAQ",
      href: "/faq#faq-fire-commercial-tenant-owner-responsibility",
    },
    { label: "Fire damage solutions", href: SOLUTION_PATH },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});
