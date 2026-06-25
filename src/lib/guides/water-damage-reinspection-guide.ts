import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/water-damage" as const;
const CATEGORY = "water-damage" as const;
const GUIDE_SLUG = "water-damage-reinspection-guide" as const;

export const WATER_DAMAGE_REINSPECTION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Water Damage Reinspection Guide for Contractors",
  excerpt:
    "Learn when to request a water damage reinspection, what documentation to prepare, how to present additional damage, and how contractors can support accurate claim review.",
  category: CATEGORY,
  guideType: "workflow",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "supplement",
  tags: [
    "Water damage",
    "Reinspection",
    "Supplement",
    "Documentation",
    "Moisture mapping",
    "Dry logs",
    "Scope comparison",
    "Adjuster visit",
    "Claim recovery",
    "Restoration contractors",
  ],
  publishedAt: "2026-06-26",
  updatedAt: "2026-06-26",
  estimatedMinutes: 18,
  seoTitle: "Water Damage Reinspection Guide for Contractors",
  seoDescription:
    "Learn when to request a water damage reinspection, what documentation to prepare, how to present additional damage, and how contractors can support accurate claim review.",
  relatedGuideSlugs: [
    "moisture-mapping-guide",
    "daily-monitoring-guide",
    "dry-log-collection-guide",
  ],
  relatedBlogSlugs: [
    "water-damage-supplement-denial-recovery",
    "water-damage-documentation-for-apartment-complexes",
    "how-carriers-reduce-drying-days",
    "documentation-gaps-that-trigger-water-claim-denials",
  ],
  faqIds: [
    "water-reinspection-when-request",
    "water-reinspection-documentation-prep",
    "water-reinspection-additional-damage-documented",
    "water-reinspection-denial-reasons",
    "water-reinspection-organize-documentation",
    "water-mitigation-file-documentation",
    "water-defend-drying-day-charges",
    "water-claim-denied-documentation",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["water-damage", "mitigation"],
  purpose:
    "Reinspections become necessary when the original inspection or carrier estimate does not fully reflect documented field conditions. Common reasons include additional moisture discovered, hidden damage, expanded drying scope, equipment reductions, scope omissions, and incorrect material classification. This guide is the operational playbook for restoration contractors, project managers, and supplement coordinators preparing for a carrier reinspection after discovering additional damage, disputed scope, or underpaid mitigation work. Focus is on documentation and communication — not legal advice and not guaranteed claim outcomes. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Newly discovered moisture or hidden damage after initial carrier inspection",
      signal:
        "Map revisions, cavity readings, or demolition boundaries reveal scope beyond the carrier estimate",
    },
    {
      condition: "Carrier scope omits rooms, materials, equipment, or labor documented in the field",
      signal:
        "Estimate room list, drying days, or equipment counts do not match moisture maps, dry logs, or placement photos",
    },
    {
      condition: "Supplement or invoice partially denied; adjuster offers or agrees to site revisit",
      signal:
        "Denial letter cites need for on-site verification, or desk review cannot resolve scope from photos and logs alone",
    },
    {
      condition: "Multifamily or commercial loss with unit-level or zone-level scope expansion",
      signal:
        "Additional units, common areas, or vertical migration require field verification beyond initial walk-through",
    },
  ],
  prerequisites: [
    "Complete documentation package assembled before requesting reinspection — not after scheduling",
    "Scope comparison table linking carrier estimate lines to field evidence",
    "Moisture maps, dry logs, and monitoring records current through the reinspection request date",
    "Submitted supplement or resubmission package indexed with disputed line numbers highlighted",
  ],
  requiredDocumentation: [
    {
      id: "photos",
      label: "Photos",
      required: true,
      detail:
        "Labeled, timestamped wide and detail photos at intake, discovery of additional damage, equipment setup, and current conditions — tied to room or chamber names matching the moisture map and dry log.",
    },
    {
      id: "moisture-maps",
      label: "Moisture maps",
      required: true,
      detail:
        "Baseline map before equipment set, dated revisions when scope expands, and current readings at all active map points — same point IDs used through the reinspection date.",
    },
    {
      id: "dry-logs",
      label: "Dry logs",
      required: true,
      detail:
        "Chronological daily entries for every active drying day: atmospheric readings, material moisture at all map points, equipment rows, and progress narratives.",
    },
    {
      id: "monitoring-records",
      label: "Monitoring records",
      required: true,
      detail:
        "Documented visit records with technician name, date, readings at all active map points, and equipment operation verification.",
    },
    {
      id: "scope-comparison",
      label: "Scope comparison",
      required: true,
      detail:
        "Side-by-side table: carrier estimate lines versus field documentation — missing rooms, materials, equipment, labor, and demolition scope.",
    },
    {
      id: "narrative-summary",
      label: "Narrative summary",
      required: true,
      detail:
        "One-page objective summary of additional damage discovered, when it was found, and how contemporaneous documentation supports the requested scope.",
    },
    {
      id: "invoice-support",
      label: "Invoice support",
      required: true,
      detail:
        "Cross-reference table linking each disputed billed line to dated photos, maps, logs, and equipment proof.",
    },
  ],
  steps: [
    {
      id: "when-to-request",
      title: "When Should a Contractor Request a Reinspection?",
      actions: [
        "Newly discovered damage — hidden moisture in cavities, subfloors, or adjacent rooms found after initial inspection requires field verification when photos and maps alone cannot convey extent.",
        "Hidden moisture — readings at map points or demolition boundaries show wet conditions not reflected on the carrier sketch or estimate.",
        "Additional affected areas — chambers, units, or floors expand beyond the scope captured at first adjuster visit.",
        "Scope discrepancies — carrier estimate omits rooms, materials, equipment counts, labor hours, or demolition lines documented contemporaneously in the field.",
        "Incomplete carrier inspections — blocked access, occupied units, or limited time on first visit prevented accurate scope capture.",
        "Request reinspection when documentation supports additional scope — not as a substitute for building the indexed packet first.",
      ],
    },
    {
      id: "build-documentation-package",
      title: "Build the Documentation Package First",
      actions: [
        "Photos — labeled, timestamped sequences at intake, scope expansion discovery, equipment placement, and current conditions tied to map point IDs.",
        "Moisture maps — baseline before equipment set, dated revisions when migration expands scope, and current readings at every active point.",
        "Dry logs — one entry per active drying day with atmospheric readings, material moisture at all map points, and equipment rows.",
        "Monitoring records — visit logs with technician name, date, purpose, and readings at all active points per chamber.",
        "Daily notes — contemporaneous progress narratives when readings plateau, equipment changes, or additional damage is discovered.",
        "Assemble the package before requesting reinspection — reviewers and adjusters arrive with context when documentation is organized and indexed.",
      ],
      notes:
        "See the Moisture Mapping Guide, Daily Monitoring Guide, and Dry Log Collection Guide for field capture standards that support reinspection packages.",
    },
    {
      id: "compare-carrier-scope",
      title: "Compare Carrier Scope to Field Conditions",
      actions: [
        "Missing rooms — list every affected room or chamber on the moisture map and dry log that does not appear on the carrier estimate or sketch.",
        "Missing materials — identify affected assemblies — flooring, drywall, insulation, cabinetry — documented in photos and readings but absent from scope.",
        "Missing equipment — compare billed or field-deployed air movers, dehumidifiers, and specialty units to carrier-approved counts and days.",
        "Missing labor — tie setup, monitoring, demolition, contents manipulation, and relocation hours to contemporaneous photos and log entries not reflected in scope.",
        "Missing demolition — document removal boundaries with before-and-after photos and square footage tied to moisture map affected areas.",
        "Build a scope comparison table with estimate line number, field evidence reference, and discovery date for each gap.",
      ],
    },
    {
      id: "present-additional-damage",
      title: "Present Additional Damage Clearly",
      actions: [
        "Hidden moisture — cavity photos, map point readings, and discovery notes showing wet conditions found after initial inspection with dated revision history.",
        "Secondary migration — vertical and horizontal expansion documented with revised moisture maps and contemporaneous discovery photos.",
        "Multi-unit expansion — unit-by-unit maps, dry logs, and photo sequences on multifamily losses when additional occupancies are affected.",
        "Common areas — separate documentation for hallways, laundry rooms, mechanical spaces, and stack boundaries distinct from in-unit production.",
        "Organize presentation by zone or room — not as an undifferentiated photo dump — so reviewers can trace each additional scope item to evidence.",
      ],
      notes:
        "See the Commercial Water Loss Documentation Guide for large-loss and multifamily indexing standards and Water Damage Documentation for Apartment Complexes for unit-level scope patterns.",
    },
    {
      id: "support-equipment-drying",
      title: "Support Equipment and Drying Duration",
      actions: [
        "Equipment placement photos with unit counts visible, matching dry log equipment rows and moisture map chamber design.",
        "Peak deployment proof and dated records of equipment moves or partial releases when counts change mid-job.",
        "Daily readings at consistent map point IDs showing drying progression or justified plateau periods.",
        "Progress narratives explaining why additional drying days remain necessary when readings have not reached dry standard.",
        "Cross-reference equipment and drying duration lines to the indexed packet — reinspection supports facts; payment follows written estimate and documentation.",
      ],
      notes:
        "See the Equipment Documentation Guide, Water Mitigation Invoice Defense Guide, and Class 4 Drying Documentation Guide for equipment, duration, and low-permeance assembly defense standards.",
    },
    {
      id: "communicate-professionally",
      title: "Communicate Professionally During Reinspection",
      actions: [
        "Organized documentation — hand the adjuster a one-page summary, scope comparison table, current map, and dry log summary — not an unstructured file dump.",
        "Clear narratives — objective descriptions of what was found, when it was found, and how documentation supports each requested line.",
        "Objective presentation — stick to contemporaneous evidence; avoid argumentative language or unsupported scope claims.",
        "Avoid speculation — do not estimate damages beyond what photos, maps, and logs prove; distinguish observed conditions from hypothetical scope.",
        "Assign on-site roles — field lead walks affected areas with adjuster; project manager handles paperwork and homeowner coordination.",
        "Update the written estimate the same week as the visit — adjusters rarely approve lines discussed on site but not reflected in submitted scope.",
      ],
    },
    {
      id: "common-mistakes",
      title: "Common Reinspection Mistakes",
      actions: [
        "Missing documentation — requesting reinspection before moisture maps, dry logs, and photos are complete repeats the same desk review failure.",
        "Disorganized files — undifferentiated photo dumps and inconsistent room naming force reviewers to reconstruct scope manually.",
        "Unsupported requests — asking for scope lines without contemporaneous evidence tied to map points, log dates, or labeled photos.",
        "Invoice mismatch — billed quantities exceed logged and photographed production; reinspection does not fix pre-invoice reconciliation gaps.",
        "Weak narratives — open-ended site walks without a one-page summary, scope comparison, and line-item index waste adjuster time and adjuster goodwill.",
        "Requesting reinspection to avoid building logs — desk review still requires dry chronology after the visit; the site walk supports facts, not a substitute for documentation.",
      ],
    },
    {
      id: "reinspection-checklist",
      title: "Water Damage Reinspection Checklist",
      actions: [
        "Photos complete — labeled, timestamped, intake through current conditions, tied to map and log room names.",
        "Moisture maps complete — baseline, dated revisions, consistent point IDs, current readings at all active points.",
        "Dry logs complete — one entry per active drying day, no gaps between billed equipment days.",
        "Monitoring records complete — documented visits with readings at all active map points per chamber.",
        "Equipment logs reconciled — placement photos and dry log rows aligned to field deployment.",
        "Scope comparison complete — carrier estimate gaps indexed by line number with evidence references.",
        "Narrative summary prepared — one-page objective overview of additional damage and documentation support.",
        "Invoice support indexed — cross-reference table linking disputed lines to dated evidence.",
        "Final documentation package organized — attachments named and ordered for adjuster review before the visit.",
        "Written estimate updated and ready to submit the same week as the reinspection.",
      ],
      notes:
        "Successful reinspections depend on documentation, organization, and clearly demonstrating conditions that support the requested scope. Outcomes vary by carrier program, file specifics, and evidence quality.",
    },
  ],
  qualityGates: [
    {
      id: "package-before-request",
      label: "Documentation package complete before reinspection request",
      required: true,
      detail:
        "Moisture maps, dry logs, photos, and scope comparison assembled before scheduling — not assembled after adjuster confirms visit.",
    },
    {
      id: "scope-comparison-indexed",
      label: "Scope comparison table indexed to estimate lines",
      required: true,
      detail:
        "Each gap lists carrier line or omission, field evidence reference, and discovery date.",
    },
    {
      id: "maps-logs-current",
      label: "Maps and logs current through reinspection date",
      required: true,
      detail:
        "No gaps between last documented visit and reinspection request; point IDs consistent across artifacts.",
    },
    {
      id: "narrative-objective",
      label: "One-page narrative summary prepared",
      required: true,
      detail:
        "Objective description of additional damage with contemporaneous evidence references — no unsupported scope claims.",
    },
    {
      id: "estimate-ready",
      label: "Updated estimate ready for same-week submission",
      required: true,
      detail:
        "Written scope revision prepared to submit immediately after the visit — lines discussed on site reflected in estimate.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Requesting reinspection without complete documentation",
      impact:
        "Adjuster arrives to the same evidence gaps that triggered the dispute — visit produces no new scope approval.",
      correction:
        "Complete moisture maps, dry logs, photos, and scope comparison before requesting the visit.",
    },
    {
      mistake: "Disorganized file presentation on site",
      impact:
        "Reviewer cannot trace additional scope to evidence during limited visit time — disputed lines remain denied.",
      correction:
        "Prepare one-page summary, scope comparison table, and indexed attachments before the adjuster arrives.",
    },
    {
      mistake: "No updated estimate after the visit",
      impact:
        "Lines discussed on site are not reflected in written scope — desk review does not approve verbal agreements alone.",
      correction:
        "Submit updated estimate the same week as the reinspection with lines cross-referenced to visit evidence.",
    },
    {
      mistake: "Weak scope comparison without line-item mapping",
      impact:
        "Additional damage described narratively without estimate line references — reviewers cannot action specific gaps.",
      correction:
        "Build scope comparison table with line numbers, evidence references, and discovery dates for each gap.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Reinspection confirms additional rooms or chambers not on carrier estimate",
      documentation:
        "Revised moisture map, dry log entries from discovery date, labeled discovery photos, and scope comparison table cross-referenced to new estimate lines.",
      lineItemHint: "Additional chambers, monitoring visits, equipment deployment, demolition scope",
    },
    {
      trigger: "Hidden moisture or cavity damage verified on reinspection",
      documentation:
        "Contemporaneous discovery photos, map point readings at cavity locations, and demolition boundary photos tied to supplement lines.",
      lineItemHint: "Hidden moisture demolition, additional mapping, extended drying, specialty equipment",
    },
    {
      trigger: "Equipment count or drying duration disputed before reinspection",
      documentation:
        "Placement photos, dry log equipment rows, daily readings, and progress narratives supporting field deployment versus carrier template.",
      lineItemHint: "Air movers, dehumidifiers, specialty drying, additional drying days, monitoring visits",
    },
    {
      trigger: "Multifamily or commercial scope expansion confirmed on site",
      documentation:
        "Unit-level or zone-level maps, logs, and photo sequences with scope comparison indexed by occupancy or work area.",
      lineItemHint: "Additional units, common areas, tenant coordination, zone-level equipment and monitoring",
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
      label: "Dry Log Collection Guide",
      href: "/resources/guides/water-damage/dry-log-collection-guide",
    },
    {
      label: "Commercial Water Loss Documentation Guide",
      href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
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
      label: "Class 4 Drying Documentation Guide",
      href: "/resources/guides/water-damage/class-4-drying-documentation-guide",
    },
    {
      label: "Water damage documentation for apartment complexes",
      href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
    },
    {
      label: "Water damage supplement denial recovery",
      href: "/resources/blog/water-damage-supplement-denial-recovery",
    },
    {
      label: "Claims Ninja platform",
      href: "/platform",
    },
  ],
});
