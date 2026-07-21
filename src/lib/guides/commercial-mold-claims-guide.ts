import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/mold" as const;
const CATEGORY = "mold" as const;
const GUIDE_SLUG = "commercial-mold-claims-guide" as const;

export const COMMERCIAL_MOLD_CLAIMS_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Commercial Mold Claims Guide for Contractors",
  excerpt:
    "Contractor playbook for documenting, organizing, estimating, and recovering commercial mold insurance claims — multi-unit indexing, moisture source investigation, phased remediation evidence, protocol and PRV coordination, and carrier packages on large-loss commercial properties.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Commercial mold",
    "Large loss",
    "Multi-unit",
    "Tenant coordination",
    "Moisture source",
    "Containment",
    "Protocol",
    "PRV",
    "Phased remediation",
    "Documentation",
    "Restoration contractors",
    "Xactimate",
    "Business continuity",
    "Estimate organization",
  ],
  publishedAt: "2026-07-16",
  updatedAt: "2026-07-16",
  estimatedMinutes: 25,
  seoTitle:
    "Commercial Mold Claims Guide | Contractor Playbook for Large-Loss Mold Claims",
  seoDescription:
    "Document, organize, estimate, and recover commercial mold insurance claims: multi-unit indexing, moisture source evidence, phased remediation documentation, protocol and PRV coordination, and carrier packages for contractors.",
  relatedGuideSlugs: [
    "commercial-insurance-claims-documentation-guide",
    "commercial-insurance-supplement-playbook-for-contractors",
    "mold-supplement-playbook-for-contractors",
    "large-loss-commercial-insurance-claims-guide",
    "multifamily-apartment-insurance-claims-guide",
    "retail-office-insurance-claims-guide",
    "hoa-insurance-claims-guide",
    "industrial-warehouse-insurance-claims-guide",
    "mold-damage-documentation-guide",
    "mold-remediation-documentation-guide",
    "mold-protocol-documentation-guide",
    "post-remediation-verification-documentation-guide",
    "indoor-air-quality-testing-documentation-guide",
    "commercial-water-loss-documentation-guide",
    "category-3-water-damage-documentation-guide",
    "contents-inventory-documentation-guide",
    "pack-out-documentation-guide",
    "documentation-standards-guide",
    "commercial-fire-claims-guide",
    "moisture-mapping-guide",
    "photo-documentation-standards-guide",
  ],
  relatedBlogSlugs: [
    "commercial-claims-documentation-checklist",
    "why-commercial-insurance-claims-get-underpaid",
    "why-mold-supplements-get-denied",
    "mold-claim-documentation-checklist",
    "mold-documentation-mistakes",
    "why-mold-insurance-claims-get-underpaid",
    "why-category-3-water-claims-get-underpaid",
    "documentation-gaps-that-trigger-water-claim-denials",
    "moisture-mapping-mistakes-that-cost-contractors-money",
  ],
  faqIds: [
    "mold-commercial-claims-vs-residential",
    "mold-commercial-documentation-organization",
    "mold-commercial-multi-unit-documentation",
    "mold-commercial-insurance-documentation",
    "mold-commercial-phased-remediation",
    "mold-damage-documentation-insurance",
    "mold-remediation-work-documentation",
    "mold-protocol-definition",
    "mold-prv-documentation-insurance",
    "water-commercial-claims-documentation",
    "contents-inventory-documentation-insurance",
    "pack-out-documentation-insurance",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["mold", "commercial", "large-loss"],
  purpose:
    "Commercial mold insurance claims require documentation scaled to building footprint, occupancy complexity, and stakeholder count — not residential single-file templates applied to office towers, multifamily campuses, retail centers, schools, healthcare, or industrial facilities. Moisture sources span roof, plumbing, HVAC, and envelope systems across floors and units; remediation often proceeds in phases under occupied conditions; protocols revise as field conditions change; and PRV must clear by area before tenants return. This guide is the contractor operational playbook for documenting, organizing, estimating, and recovering commercial mold claims — not mold remediation procedures. For residential and general mold damage, remediation, protocol, and PRV field standards, see the Mold pillar guides linked below. For commercial indexing patterns on water losses, see the Commercial Water Loss Documentation Guide. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Office, multifamily, retail, industrial, hospitality, school, or healthcare mold loss with multi-zone growth",
      signal:
        "Multiple floors, suites, or wings affected; carrier assigns specialist adjuster or large-loss team; residential photo folder pattern cannot organize the file",
    },
    {
      condition: "Multi-tenant or mixed-use property with owner and tenant scope boundaries",
      signal:
        "Property management requesting unit-level indexing, tenant displacement, separate contents policies, or shell versus tenant improvement separation",
    },
    {
      condition: "Phased commercial remediation under occupied or partially occupied conditions",
      signal:
        "Containment by wing or floor; tenant coordination required; protocol revisions expected as openings reveal additional growth",
    },
    {
      condition: "Protocol and PRV coordination across multiple work areas",
      signal:
        "Industrial hygienist retained; clearance required by area before re-occupancy; protocol revisions must track to estimate change orders",
    },
    {
      condition: "Carrier underpayment, supplement denial, or reinspection on commercial mold file",
      signal:
        "Desk reviewer cites mixed unit documentation, missing moisture maps, weak estimate organization, missing protocol revisions, or residential template applied to commercial footprint",
    },
  ],
  prerequisites: [
    "Commercial documentation plan with folder index, building/floor/unit naming convention, and role assignments published within 24 hours of mobilization",
    "Property management or owner liaison contact, lease summary, and tenant roster when multi-tenant occupancy applies",
    "Building, floor, and unit inventory template aligned to property records — not crew shorthand",
    "Tenant coordination and access log template for occupied commercial properties",
    "Project manager or documentation lead assigned on losses exceeding single-dwelling scope",
    "Separate moisture-source, remediation-production, protocol/PRV, contents, and estimate folders indexed before carrier walkthrough",
  ],
  requiredDocumentation: [
    {
      id: "commercial-assessment-pack",
      label: "Initial commercial assessment pack",
      required: true,
      detail:
        "Building type, occupancy, tenant operations, moisture source hypothesis, safety flags, and business continuity notes with date-stamped wide and close photos before production alters conditions.",
    },
    {
      id: "building-index",
      label: "Building-wide index with floor, wing, unit, and room numbering",
      required: true,
      detail:
        "Master list of every affected structure, floor, wing, unit, and room indexed to site plan — aligned to property management numbering on every photo, log, and estimate section.",
    },
    {
      id: "moisture-source-pack",
      label: "Moisture source investigation pack",
      required: true,
      detail:
        "Roof, plumbing, HVAC, envelope, window, and foundation findings with photos, readings, and causation narrative — see Mold Damage Documentation Guide and Commercial Water Loss Documentation Guide.",
    },
    {
      id: "moisture-maps",
      label: "Floor-by-floor moisture and growth maps",
      required: true,
      detail:
        "Mapped readings and visible growth by building, floor, and unit before and during remediation; maps must match photo folder labels and estimate sections.",
    },
    {
      id: "tenant-coordination-log",
      label: "Tenant coordination and access log",
      required: true,
      detail:
        "Property authorization, tenant notification, escort requirements, displacement records, and access delays documented contemporaneously on occupied properties.",
    },
    {
      id: "remediation-production-pack",
      label: "Commercial remediation production documentation",
      required: true,
      detail:
        "Containment, phasing, material removal, equipment logs, and daily production records by work area — see Mold Remediation Documentation Guide.",
    },
    {
      id: "protocol-revision-log",
      label: "Protocol and revision log indexed to work areas",
      required: true,
      detail:
        "Original protocol, each revision, field-condition drivers, and estimate change references — see Mold Protocol Documentation Guide.",
    },
    {
      id: "prv-by-area",
      label: "PRV and clearance documentation by area",
      required: true,
      detail:
        "Post-remediation verification reports, clearance criteria, and area release records indexed to building/floor/unit — see Post-Remediation Verification Documentation Guide.",
    },
    {
      id: "contents-inventory",
      label: "Commercial contents and tenant property inventory",
      required: true,
      detail:
        "Office furniture, electronics, inventory, equipment, and tenant property with photos, serial numbers, and chain of custody — see Contents Inventory and Pack-Out Documentation Guides.",
    },
    {
      id: "estimate-index",
      label: "Estimate index with building and trade separation",
      required: true,
      detail:
        "Xactimate organization with building/floor/unit sections, trade separation, narratives, supporting attachments, and change tracking mapped to field evidence.",
    },
    {
      id: "equipment-logs",
      label: "Commercial equipment and containment logs",
      required: true,
      detail:
        "Negative air, HEPA, dehumidification, and containment setup/runtime records tagged by work area and phase — not a single unlabeled equipment dump.",
    },
    {
      id: "communication-log",
      label: "Carrier and stakeholder communication log",
      required: true,
      detail:
        "Progress updates, supplemental requests, reinspection dates, and authorization records indexed chronologically with package references.",
    },
  ],
  steps: [
    {
      id: "introduction",
      title: "Introduction — Why Commercial Mold Claims Are Fundamentally Different",
      actions: [
        "Documentation complexity multiplies — commercial footprints generate moisture maps, growth photos, containment records, protocol revisions, PRV packages, and contents inventories across dozens of rooms and multiple stakeholders; residential single-folder patterns collapse under volume.",
        "Organization becomes critical — without a published building/floor/unit index, photos, readings, and estimate lines mix across units and carriers cannot attribute scope at desk review.",
        "Stakeholder count increases — property owners, tenants, property managers, industrial hygienists, engineers, and carrier large-loss teams each require indexed evidence aligned to their scope boundaries.",
        "Occupied work changes the file — phased containment, after-hours production, and tenant access logs become claim evidence, not just operations notes.",
        "Protocol and PRV scale by area — commercial losses rarely clear as a single event; revisions and clearance must track work area by work area with estimate change references.",
        "Large losses need repeatable workflows — inspection through closeout must follow the same naming, folder, and package standards on every phase so supplements and reinspections stay defensible months into the claim.",
      ],
      notes:
        "See the Mold Damage Documentation Guide for residential and general mold assessment standards; this playbook extends those standards to commercial footprint, multi-unit indexing, and large-loss claim organization.",
    },
    {
      id: "initial-commercial-assessment",
      title: "Section 1 — Initial Commercial Assessment",
      actions: [
        "Building type — record office, multifamily, retail, industrial, hospitality, school, healthcare, or mixed-use; building type drives HVAC zoning, contents categories, and occupancy constraints.",
        "Occupancy — document occupied, partially occupied, or vacant status by floor and wing; occupied areas require access logs and phased work plans before production starts.",
        "Tenant operations — note business hours, sensitive operations (food service, medical, data rooms), and displacement risk; operational constraints become timeline evidence for supplements and BI coordination.",
        "Moisture source — establish preliminary causation hypothesis (roof, plumbing, HVAC, envelope, long-term intrusion) with photos and readings before remediation obscures evidence — see Mold Damage Documentation Guide.",
        "Safety — document PPE requirements, electrical hazards, structural concerns, and restricted zones; safety flags belong in the claim file as production constraints, not only toolbox talks.",
        "Business continuity — log which areas must remain operational, temporary relocation plans, and production windows authorized by property management.",
        "Initial documentation priorities — capture wide establishing shots, affected-area close-ups, moisture readings, growth locations, and HVAC/roof/plumbing clues before any demolition or containment hides conditions.",
        "Role assignment — name the project manager, documentation lead, estimator, and field photographer within 24 hours; commercial files fail when nobody owns the index.",
      ],
      notes:
        "Publish the commercial documentation plan and naming convention before detailed field work. Carrier walkthroughs on commercial mold losses expect indexed packets, not ad-hoc photo dumps.",
    },
    {
      id: "building-wide-documentation",
      title: "Section 2 — Building-Wide Documentation",
      actions: [
        "Floor-by-floor mapping — create a master floor plan index showing every affected and adjacent floor; map moisture readings and growth locations to plan labels that match photo folders.",
        "Unit numbering — adopt property management unit numbers on every photo filename, moisture log row, inventory entry, and estimate section; never invent crew nicknames for submitted files.",
        "Room numbering — extend unit numbers with consistent room labels (e.g., Unit 412-Bath, Unit 412-Kitchen); room-level attribution prevents carrier disputes on multi-room suites.",
        "Elevations — document exterior elevations tied to interior moisture paths; correlate façade, window, and roof evidence to interior growth floors.",
        "Mechanical spaces — photograph and label mechanical rooms, AHUs, shafts, and risers separately; HVAC-driven mold often originates outside the visible tenant space.",
        "Roof systems — document low-slope membrane, penetrations, drains, and parapets with zone labels that match interior ceiling stains below — see Commercial Water Loss Documentation Guide for roof-to-interior indexing.",
        "Crawlspaces and attics — treat below-grade and attic voids as distinct documentation zones with their own photos, readings, and estimate sections when accessible.",
        "Common areas — corridors, lobbies, restrooms, and shared laundry require separate tracks so tenant-unit scope is not mixed with owner common-area scope.",
        "Consistent organization — one naming convention across photos, logs, protocol pages, PRV reports, and Xactimate prevents confusion when multiple crews and consultants work the same loss.",
      ],
      notes:
        "If removing a floor, wing, or unit label from a photo would make the image unusable at desk review, the label belongs in the filename and caption before upload.",
    },
    {
      id: "moisture-source-investigation",
      title: "Section 3 — Moisture Source Investigation",
      actions: [
        "Roof systems — inspect and photograph membrane failures, flashings, drains, and penetrations; tie each roof finding to interior floors and units below with matching zone labels.",
        "Plumbing — document supply leaks, drain backups, fixture failures, and riser issues with shutoff locations and repair authorization; plumbing sources often span multiple stacked units.",
        "HVAC — inspect AHUs, coils, drain pans, duct runs, and condensate lines; map contaminated zones to equipment before carriers assume a single-room cleaning macro.",
        "Exterior envelope — record wall assembly failures, cladding breaches, and sealant failure with elevation references that support long-term versus sudden intrusion narratives.",
        "Windows and doors — photograph sill, flashing, and interior reveal conditions; window leaks on commercial elevations frequently affect multiple floors of the same stack.",
        "Foundation — document below-grade moisture, hydrostatic staining, and crawlspace conditions when foundation intrusion is in play.",
        "Long-term moisture intrusion — separate sudden covered events from chronic conditions with dated evidence, historical stains, and occupant reports — carriers scrutinize duration on commercial mold files.",
        "Supporting readings — organize moisture meter and thermal imaging results by building/floor/unit with date stamps that align to photo folders — see Mold Damage Documentation Guide.",
        "Water-loss bridge — when mold follows commercial water intrusion, cross-index mitigation dry logs and moisture maps from the water claim into the mold file — see Commercial Water Loss Documentation Guide.",
      ],
      notes:
        "Moisture source investigation is claim evidence, not a side note. Incomplete causation packages are a primary reason commercial mold claims stall or get underpaid.",
    },
    {
      id: "commercial-remediation-documentation",
      title: "Section 4 — Commercial Remediation Documentation",
      actions: [
        "Containment — photograph containment setup by work area with negative air placement, pressure readings, and barrier extents before production; label each containment zone to the building index.",
        "Phasing — document which floors, wings, or units are in active remediation versus held; phase maps support estimate sequencing and tenant re-entry planning.",
        "Occupied work areas — log after-hours production, occupied-adjacent containment, and access restrictions; occupied commercial work generates documentation carriers expect on large losses.",
        "Tenant coordination — maintain contemporaneous notification, escort, and displacement records tied to unit numbers — not reconstructed after a dispute.",
        "Material removal — capture progressive demolition photos by assembly and location before disposal removes attribution; bagged waste manifests should reference work area IDs.",
        "Equipment — asset-tag HEPA, negative air, and dehumidification equipment with runtime logs by zone; commercial equipment logs must support duration and quantity lines.",
        "Daily documentation — production logs, crew counts, scope discoveries, and photo batches submitted daily by work area — end-of-job narratives fail desk review on multi-week commercial files.",
        "Hidden growth discoveries — when openings reveal additional mold, photograph in place, update moisture maps, revise protocol references, and queue supplements before covering assemblies.",
      ],
      notes:
        "See the Mold Remediation Documentation Guide for field production standards. This section scales those standards to multi-area commercial phasing and tenant-occupied conditions.",
    },
    {
      id: "documentation-by-area",
      title: "Section 5 — Documentation by Area",
      actions: [
        "Hierarchy — organize every artifact under Building → Floor → Wing → Unit → Room → Work area; never dump multi-unit photos into a single unlabeled folder.",
        "Naming conventions — use a fixed pattern such as BldgA_Fl3_Unit312_Bath_Before_001.jpg across photos, moisture logs, and inventory rows.",
        "Photo organization — separate Before, During, After, and Discovery batches per work area; mix-dated unlabeled galleries are a top commercial denial driver.",
        "Log organization — moisture readings, equipment runtime, and daily production rows must include the same building/floor/unit keys used in photo filenames.",
        "Estimate alignment — every Xactimate section header should mirror the documentation hierarchy so desk reviewers can jump from line to evidence without guessing.",
        "Consultant alignment — IH protocol pages, revisions, and PRV reports must use the same area IDs as contractor folders — mismatched labels look like incomplete files.",
        "Cross-references — claim narratives and supplement letters should cite area IDs, photo ranges, and attachment filenames rather than vague location descriptions.",
        "QA gate — before any carrier package leaves the office, spot-check that random photos, reading rows, and estimate lines resolve to the same area ID.",
      ],
      notes:
        "Consistent area organization is the commercial mold file's primary defense. If two teams cannot find the same unit evidence in under a minute, the index is not ready for submission.",
    },
    {
      id: "contents-documentation",
      title: "Section 6 — Contents Documentation",
      actions: [
        "Office furniture — inventory systems furniture, seating, and fixtures by unit or open-office zone with condition grading for clean-versus-replace decisions.",
        "Electronics — photograph workstations, servers, networking gear, and AV with asset tags and serial plates visible before movement or cleaning.",
        "Inventory — retail or warehouse stock requires SKU-level or batch-level counts with photos and storage location references when contents lines apply.",
        "Equipment — production, kitchen, medical, or lab equipment needs model/serial documentation and manufacturer guidance notes before carriers default to replacement macros.",
        "Tenant property — separate owner shell fixtures from tenant betterments and business personal property; mislabeled contents create dual-policy disputes.",
        "Storage — document on-site staging versus off-site storage assignments with authorization from owner or tenant policyholder.",
        "Chain of custody — barcode or batch-log every pack-out lot from in-place inventory through transport, cleaning, and return — see Pack-Out Documentation Guide.",
        "Reset documentation — photograph returned contents by unit before tenant sign-off; reconcile missing or non-restorable items against original inventory.",
      ],
      notes:
        "See the Contents Inventory Documentation Guide for room-by-room inventory standards and the Pack-Out Documentation Guide for chain-of-custody workflows on multi-unit commercial losses.",
    },
    {
      id: "estimate-organization",
      title: "Section 7 — Estimate Organization",
      actions: [
        "Xactimate structure — separate estimates or clearly indexed sections by building, floor, and unit; single-block residential templates fail on commercial mold scope.",
        "Building separation — when multiple structures or towers are affected, keep building-level estimate partitions that mirror the documentation plan.",
        "Trade separation — demolition, containment, remediation labor, equipment, contents, reconstruction, and general conditions each receive distinct sections with photo cross-references.",
        "Estimate narratives — write area-indexed narratives explaining moisture source, growth extent, protocol basis, and phase sequence — not generic mold macros without location context.",
        "Supporting documentation — attach moisture maps, protocol pages, PRV reports, equipment logs, and photo indexes referenced by filename in the estimate notes.",
        "Change tracking — log every scope change with date, area ID, driver (discovery, protocol revision, carrier direction), and supplement reference number.",
        "Phased approvals — when carriers authorize work by wing or floor, document partial approvals and hold remaining areas as separate pending sections.",
        "General conditions — commercial project management, site supervision, dumpsters, temporary facilities, and after-hours production require documented overhead support beyond residential macros.",
      ],
      notes:
        "Weak estimate organization is indistinguishable from incomplete scope at desk review. Area IDs and change tracking turn commercial mold estimates into recoverable claim packages.",
    },
    {
      id: "protocol-prv-coordination",
      title: "Section 8 — Protocol & PRV Coordination",
      actions: [
        "Protocol baseline — index the original industrial hygienist protocol to building/floor/unit work areas before production starts — see Mold Protocol Documentation Guide.",
        "Protocol revisions — when field conditions differ, document the revision, the discovery photos that drove it, and the estimate change order before expanding or reducing scope.",
        "Scope changes — never silently expand remediation beyond protocol; carriers treat undocumented expansions as unsupported extras on commercial files.",
        "PRV by area — schedule and document post-remediation verification per cleared zone, not as a single end-of-project event when phasing applies — see Post-Remediation Verification Documentation Guide.",
        "Clearance documentation — retain clearance criteria, sample results or visual clearance notes, and area release authorizations with matching area IDs.",
        "Occupied re-entry — coordinate tenant return only after area PRV is indexed; premature re-entry without clearance records creates liability and claim disputes.",
        "Project closeout handshake — confirm protocol revisions, PRV packages, and estimate change log are reconciled before final carrier package assembly.",
      ],
      notes:
        "Protocol and PRV are commercial claim pillars. Missing revisions or area-level clearance packages are among the most common large-loss mold documentation failures.",
    },
    {
      id: "carrier-communication",
      title: "Section 9 — Carrier Communication",
      actions: [
        "Progress updates — send periodic area-indexed status reports with photo samples, moisture map updates, and phase completion percentages — not vague weekly emails.",
        "Supplemental requests — package discovery photos, revised protocol pages, and estimate deltas by area ID when scope expands during production.",
        "Documentation packages — assemble building-indexed packets for adjuster walkthroughs: assessment, moisture source, remediation production, protocol/PRV, contents, and estimate comparison.",
        "Reinspection preparation — prepare on-site binders or digital indexes that let the adjuster open any unit and immediately see before/during/after evidence.",
        "Stakeholder coordination — keep property management, tenants, IH, and carrier contacts on a shared communication log with dates and attachment references.",
        "Authorization records — capture written direction for after-hours work, temporary facilities, and phased releases; verbal-only approvals fail on commercial audits.",
        "Dispute response — answer underpayment letters with area-indexed evidence tables mapping each disputed line to photos, readings, protocol cites, and PRV status.",
      ],
      notes:
        "Commercial mold recovery depends on communication that looks like a project control system — chronological, indexed, and attachment-backed.",
    },
    {
      id: "commercial-claim-closeout",
      title: "Section 10 — Commercial Claim Closeout",
      actions: [
        "Final documentation — assemble the complete indexed file: assessment, moisture source, maps, remediation production, equipment logs, protocol revisions, PRV by area, contents/custody, estimate history, and communication log.",
        "Remaining deficiencies — list open items by area ID with photos and responsible party; do not bury punch items inside unlabeled notes.",
        "Punch items — document completion photos and dates for every punch line before calling the claim closed.",
        "PRV confirmation — verify every remediated area has clearance documentation indexed; missing area PRV is not a closed commercial mold claim.",
        "Tenant sign-off — where applicable, obtain unit-level return/sign-off records after contents reset and clearance; archive with unit IDs.",
        "Final package submission — deliver a carrier-ready closeout package with table of contents, area index, and hyperlinked or clearly labeled attachments.",
        "Archive standard — retain the same folder structure used during production so future reinspections or audits can reopen the file without reconstruction.",
      ],
      notes:
        "Closeout is a documentation event. If the final package cannot answer moisture source, phased production, protocol revisions, and PRV by area, the commercial claim is not ready for settlement.",
    },
    {
      id: "common-documentation-mistakes",
      title: "Common Documentation Mistakes on Commercial Mold Claims",
      actions: [
        "Mixing documentation between units — photos and readings from Unit 312 and Unit 314 in one unlabeled folder destroy attribution at desk review.",
        "Poor photo naming — filenames without building/floor/unit/room keys force adjusters to guess and reduce scope.",
        "Missing tenant documentation — occupied commercial losses without access, displacement, and notification logs look incomplete under large-loss scrutiny.",
        "Missing protocol revisions — expanding scope after field discoveries without revised protocol pages and change tracking invites denial.",
        "Weak estimate organization — single residential-style estimate blocks without building/trade separation fail commercial audit.",
        "No progress narratives — end-of-job summaries without contemporaneous daily production logs cannot defend multi-week phased work.",
        "Missing moisture maps — growth photos without floor-by-floor moisture maps leave causation and extent unsupported.",
        "Poor PRV organization — a single clearance PDF without area IDs does not clear a multi-wing commercial remediation.",
        "Missing commercial equipment logs — equipment quantity and duration lines collapse without zone-tagged runtime records.",
        "Weak change tracking — undocumented scope changes mid-project look like padding rather than discovery-driven supplements.",
      ],
    },
    {
      id: "final-commercial-checklist",
      title: "Final Commercial Mold Claim Documentation Checklist",
      actions: [
        "Commercial documentation plan published with naming convention and role assignments.",
        "Building/floor/wing/unit/room index aligned to property management records.",
        "Initial assessment pack complete (building type, occupancy, safety, continuity).",
        "Moisture source investigation pack complete with roof/plumbing/HVAC/envelope evidence.",
        "Floor-by-floor moisture and growth maps match photo folder labels.",
        "Tenant coordination and access log current on occupied properties.",
        "Containment photos and pressure/setup records indexed by work area.",
        "Phased remediation production logs maintained contemporaneously.",
        "Material removal and progressive demolition photos labeled by area.",
        "Commercial equipment runtime logs tagged by zone and phase.",
        "Contents inventory complete with shell versus tenant labeling where applicable.",
        "Pack-out chain of custody complete when contents leave site.",
        "Xactimate organized by building/unit with trade separation and narratives.",
        "Estimate change log ties discoveries and protocol revisions to supplements.",
        "Original protocol and every revision indexed to work areas.",
        "PRV/clearance documentation complete for every remediated area.",
        "Carrier communication log chronological with package references.",
        "Reinspection packet prepared with area-indexed evidence.",
        "Punch list closed with completion photos by area ID.",
        "Final closeout package assembled with table of contents and area index.",
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion",
      actions: [
        "Commercial mold claims are recovered through disciplined documentation, area organization, estimate structure, and protocol/PRV coordination — not simply more remediation photos.",
        "Scaled indexing, tenant coordination, moisture source packages, and phased supplement submission separate paid commercial files from underpaid ones.",
        "Apply the Mold Damage, Remediation, Protocol, and PRV guides for field capture detail; use this playbook for commercial footprint, multi-unit organization, and large-loss claim workflow.",
        "Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows on commercial mold losses.",
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
      label: "Building/floor/unit index aligned to property records",
      required: true,
      detail:
        "Every affected structure, floor, wing, unit, and room numbered consistently with property management records — no crew shorthand in submitted files.",
    },
    {
      id: "moisture-source-complete",
      label: "Moisture source investigation pack complete",
      required: true,
      detail:
        "Roof, plumbing, HVAC, envelope, and foundation findings indexed with photos and readings before remediation obscures causation evidence.",
    },
    {
      id: "moisture-maps-aligned",
      label: "Moisture maps aligned to photo and estimate labels",
      required: true,
      detail:
        "Floor-by-floor maps use the same area IDs as photo folders and Xactimate sections.",
    },
    {
      id: "tenant-log-current",
      label: "Tenant coordination log current on occupied properties",
      required: true,
      detail:
        "Access authorizations, displacement records, and escort requirements logged contemporaneously — not reconstructed after carrier dispute.",
    },
    {
      id: "protocol-revisions-indexed",
      label: "Protocol revisions indexed to work areas and estimate changes",
      required: true,
      detail:
        "Original protocol plus every revision cross-referenced to discovery photos and change orders.",
    },
    {
      id: "prv-by-area-complete",
      label: "PRV/clearance complete for every remediated area",
      required: true,
      detail:
        "Area-level clearance documentation matches the remediation phase map — no single unlabeled closeout PDF for multi-area work.",
    },
    {
      id: "estimate-organized",
      label: "Estimate organized by building/unit with trade separation",
      required: true,
      detail:
        "Xactimate sections mirror the documentation hierarchy with narratives and supporting attachments referenced by filename.",
    },
    {
      id: "closeout-packet-ready",
      label: "Indexed closeout packet ready before settlement",
      required: true,
      detail:
        "Complete file organized by area and phase with moisture source, production, protocol/PRV, contents, estimate history, and communication log archived.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Mixing documentation between units",
      impact:
        "Carriers cannot attribute growth, readings, or remediation scope and reduce or deny multi-unit lines.",
      correction:
        "Enforce Building → Floor → Unit → Room naming on every photo, log row, and estimate section from day one.",
    },
    {
      mistake: "Poor photo naming without area identifiers",
      impact:
        "Desk reviewers treat unlabeled commercial galleries as incomplete evidence and cut scope proportionally.",
      correction:
        "Require fixed filename patterns with building/floor/unit/room keys before any upload to the claim file.",
    },
    {
      mistake: "Missing tenant documentation on occupied commercial losses",
      impact:
        "Access delays, after-hours labor, and displacement-related lines fail without contemporaneous coordination logs.",
      correction:
        "Maintain tenant notification, escort, and displacement records keyed to unit numbers throughout production.",
    },
    {
      mistake: "Missing protocol revisions after field discoveries",
      impact:
        "Expanded remediation looks unsupported; carriers deny change-order scope without revised protocol pages.",
      correction:
        "Index every protocol revision to discovery photos and estimate change tracking before expanding work.",
    },
    {
      mistake: "Weak estimate organization without building or trade separation",
      impact:
        "Commercial audit cannot navigate scope; disputed lines lack evidence paths and settle underpaid.",
      correction:
        "Structure Xactimate by building/unit with trade sections, narratives, and attachment cross-references.",
    },
    {
      mistake: "No progress narratives or contemporaneous daily logs",
      impact:
        "Multi-week phased remediation cannot be defended with an end-of-job summary alone.",
      correction:
        "Require daily production logs and photo batches by work area for the full claim timeline.",
    },
    {
      mistake: "Missing moisture maps on commercial mold files",
      impact:
        "Growth photos without mapped readings leave extent and causation unsupported at desk review.",
      correction:
        "Produce floor-by-floor moisture and growth maps that share area IDs with photos and estimates.",
    },
    {
      mistake: "Poor PRV organization across phased work areas",
      impact:
        "Premature re-occupancy and incomplete clearance packages create liability and settlement disputes.",
      correction:
        "Clear and document PRV by area ID matching the phase map — see Post-Remediation Verification Documentation Guide.",
    },
    {
      mistake: "Missing commercial equipment logs by zone",
      impact:
        "Equipment quantity and duration lines are reduced when runtime cannot be tied to work areas.",
      correction:
        "Asset-tag equipment and log runtime by containment zone and phase throughout production.",
    },
    {
      mistake: "Weak change tracking on commercial mold supplements",
      impact:
        "Mid-project scope changes appear arbitrary; supplements stall or get denied without discovery drivers.",
      correction:
        "Maintain a change log linking date, area ID, discovery evidence, protocol revision, and supplement number.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Openings reveal additional mold beyond initial carrier walkthrough scope",
      documentation:
        "In-place discovery photos, updated moisture maps, and protocol revision pages indexed to area ID before covering assemblies.",
      lineItemHint:
        "Additional demolition, containment expansion, remediation labor, waste handling, HEPA vacuum",
    },
    {
      trigger: "Moisture source investigation expands HVAC or roof scope after initial estimate",
      documentation:
        "System inspection photos, roof zone photos correlated to interior units, and readings supporting expanded causation/remediation scope.",
      lineItemHint:
        "HVAC cleaning/replacement, roof dry-in, envelope repairs, extended drying equipment",
    },
    {
      trigger: "Protocol revision increases remediation boundaries by wing or floor",
      documentation:
        "Revised protocol, discovery narrative, phase map update, and estimate change order cross-referenced to photos.",
      lineItemHint:
        "Expanded containment, additional material removal, extended equipment, IH revision fees",
    },
    {
      trigger: "Occupied commercial production requires after-hours or multi-shift work",
      documentation:
        "Tenant coordination logs, property authorization, and production windows keyed to unit/floor IDs.",
      lineItemHint:
        "After-hours labor, shift differential, temporary facilities, security, project management",
    },
    {
      trigger: "Contents pack-out required beyond in-place cleaning assumption",
      documentation:
        "In-place inventory, chain of custody, storage receipts, and return photos tied to unit estimate lines.",
      lineItemHint:
        "Contents manipulation, pack-out, storage, cleaning, reset",
    },
    {
      trigger: "PRV fails an area and additional remediation is required",
      documentation:
        "Failed clearance report, re-clean photos, second PRV package, and change tracking by area ID.",
      lineItemHint:
        "Re-clean labor, additional HEPA/negative air, second clearance sampling",
    },
    {
      trigger: "Long-term moisture intrusion requires separate documentation from sudden event scope",
      documentation:
        "Dated historical evidence, occupant reports, and envelope findings distinguishing chronic conditions from covered sudden events.",
      lineItemHint:
        "Investigation labor, envelope diagnostics, thermal imaging, moisture mapping",
    },
    {
      trigger: "General conditions under-scoped on multi-week commercial mold file",
      documentation:
        "Project management logs, dumpster rotations, temporary protection, and supervision records supporting overhead lines.",
      lineItemHint:
        "Project management, superintendent, dumpsters, temporary protection, security",
    },
    {
      trigger: "Multi-unit documentation complete but carrier underpaid commercial mold scope",
      documentation:
        "Area-indexed claim packet mapping each disputed line to photos, readings, protocol cites, and PRV status.",
      lineItemHint:
        "Supplement submission with line-item justification; Claims Ninja supports documentation review and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "How do commercial mold claims differ from residential mold claims?",
      answer:
        "Commercial mold claims involve larger footprints, multi-unit indexing, tenant coordination, phased remediation under occupied conditions, protocol revisions by area, and PRV clearance packages that residential single-file patterns cannot organize. Contractors must scale documentation to building/floor/unit hierarchy and maintain estimate change tracking — not simply take more photos of the same residential workflow.",
    },
    {
      question: "How should contractors organize documentation for commercial mold claims?",
      answer:
        "Publish a documentation plan within 24 hours using Building → Floor → Wing → Unit → Room → Work area naming on photos, moisture maps, equipment logs, protocol pages, PRV reports, and Xactimate sections. Spot-check that random artifacts resolve to the same area ID before any carrier package leaves the office.",
    },
    {
      question: "What documentation supports commercial mold insurance claims?",
      answer:
        "Moisture source investigation packs, floor-by-floor moisture/growth maps, containment and daily production records, protocol revisions, area-level PRV, contents/chain of custody, building-indexed estimates with change tracking, and chronological carrier communication logs. Together these form a recoverable commercial claim package.",
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
      label: "Large-Loss Commercial Insurance Claims Guide",
      href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
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
      label: "Mold Damage Documentation Guide",
      href: "/resources/guides/mold/mold-damage-documentation-guide",
    },
    {
      label: "Mold Remediation Documentation Guide",
      href: "/resources/guides/mold/mold-remediation-documentation-guide",
    },
    {
      label: "Mold Protocol Documentation Guide",
      href: "/resources/guides/mold/mold-protocol-documentation-guide",
    },
    {
      label: "Post-Remediation Verification Documentation Guide",
      href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
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
      label: "Contents Inventory Documentation Guide",
      href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
    },
    {
      label: "Pack-Out Documentation Guide",
      href: "/resources/guides/fire-damage/pack-out-documentation-guide",
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
      label: "Moisture Mapping Guide",
      href: "/resources/guides/water-damage/moisture-mapping-guide",
    },
    {
      label: "10 Mold Documentation Mistakes That Cost Contractors Money",
      href: "/resources/blog/mold-documentation-mistakes",
    },
    {
      label: "Why Mold Insurance Claims Get Underpaid",
      href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
    },
    {
      label: "Commercial mold vs residential FAQ",
      href: "/faq#faq-mold-commercial-claims-vs-residential",
    },
    {
      label: "Commercial mold documentation organization FAQ",
      href: "/faq#faq-mold-commercial-documentation-organization",
    },
    { label: "Mold solutions", href: SOLUTION_PATH },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});
