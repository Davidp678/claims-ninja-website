import type { Guide } from "@/lib/guide-types";
import { defineGuide, GUIDE_PUBLISHED_AT } from "@/lib/guides/guide-builder";
import { COMMERCIAL_ROOFING_DOCUMENTATION_GUIDE } from "@/lib/guides/commercial-roofing-documentation-guide";
import { HOA_ROOFING_CLAIMS_GUIDE } from "@/lib/guides/hoa-roofing-claims-guide";
import { MULTI_BUILDING_ROOFING_CLAIMS_GUIDE } from "@/lib/guides/multi-building-roofing-claims-guide";
import { ROOF_HAIL_DAMAGE_DOCUMENTATION_GUIDE } from "@/lib/guides/roof-hail-damage-documentation-guide";
import { ROOF_MATCHING_DOCUMENTATION_GUIDE } from "@/lib/guides/roof-matching-documentation-guide";
import { ROOF_REPAIRABILITY_DOCUMENTATION_GUIDE } from "@/lib/guides/roof-repairability-documentation-guide";
import { ROOF_REINSPECTION_GUIDE } from "@/lib/guides/roof-reinspection-guide";
import { ROOF_WIND_DAMAGE_DOCUMENTATION_GUIDE } from "@/lib/guides/roof-wind-damage-documentation-guide";

const CATEGORY = "roofing-claims" as const;
const SOLUTION_PATH = "/solutions/roofing" as const;

export const ROOFING_CLAIMS_GUIDES = [
  ROOF_HAIL_DAMAGE_DOCUMENTATION_GUIDE,
  ROOF_WIND_DAMAGE_DOCUMENTATION_GUIDE,
  ROOF_REINSPECTION_GUIDE,
  ROOF_REPAIRABILITY_DOCUMENTATION_GUIDE,
  ROOF_MATCHING_DOCUMENTATION_GUIDE,
  COMMERCIAL_ROOFING_DOCUMENTATION_GUIDE,
  HOA_ROOFING_CLAIMS_GUIDE,
  MULTI_BUILDING_ROOFING_CLAIMS_GUIDE,
  defineGuide({
    slug: "roofing-supplement-checklist",
    title: "Roofing Supplement Checklist",
    excerpt:
      "Pre-submission checklist for roofing supplements: reconcile measurements, verify accessory line items, confirm documentation, and package a carrier-ready estimate revision.",
    category: CATEGORY,
    guideType: "checklist",
    roles: ["supplement-coordinator", "field"],
    claimPhase: "supplement",
    tags: [
      "roofing supplements",
      "xactimate",
      "line items",
      "storm claims",
      "estimate review",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 12,
    recommended: true,
    seoTitle: "Roofing Supplement Checklist for Contractors",
    seoDescription:
      "Pre-submission roofing supplement checklist: measurement reconciliation, missed line items, documentation gates, and carrier-ready package standards for storm and replacement claims.",
    relatedGuideSlugs: [
    "hoa-roofing-claims-guide",
    "multi-building-roofing-claims-guide",
    "commercial-roofing-documentation-guide",
      "roof-reinspection-guide",
      "roof-repairability-documentation-guide",
      "roof-matching-documentation-guide",
      "roofing-documentation-guide",
      "reinspection-preparation-guide",
      "code-upgrade-documentation-guide",
      "steep-high-documentation-guide",
      "roof-measurement-documentation-guide",
    ],
    relatedBlogSlugs: ["roofing-supplement-playbook"],
    faqIds: [
      "supplements-whats-included",
      "roofing-measurements",
      "roofing-carrier-documentation",
    ],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["hail", "wind", "replacement"],
    purpose:
      "Ensure every roofing supplement is complete, evidence-backed, and aligned to field scope before submission — reducing denials, re-inspection delays, and unpaid accessory labor on storm and replacement files.",
    whenToUse: [
      {
        condition: "Carrier roof estimate received and initial review complete",
        signal: "Estimate date logged; measurement report on file",
      },
      {
        condition: "Tear-off or dry-in underway with scope gaps identified",
        signal: "Field photos show accessories, pitch, or code items not on estimate",
      },
      {
        condition: "Revised Xactimate draft ready for office review",
        signal: "Supplement coordinator assigned; adjuster contact confirmed",
      },
      {
        condition: "Within 48 hours of carrier estimate on high-square storm jobs",
        signal: "Priority flag in CRM; material order not yet committed to short estimate",
      },
    ],
    prerequisites: [
      "Carrier estimate and claim number on file",
      "Third-party or field measurement report reconciled to sketch",
      "Pre-tear-off elevation photo set uploaded",
      "Supplement owner and adjuster email/fax path confirmed",
    ],
    requiredDocumentation: [
      {
        id: "carrier-estimate",
        label: "Carrier estimate with sketch and F9 notes",
        required: true,
        detail: "Highlight missing accessory rows and quantity variances before revising.",
      },
      {
        id: "measurement-report",
        label: "Measurement report reconciled to carrier sketch",
        required: true,
        detail: "Document square, ridge, hip, valley, and eave/rake variances in a comparison table.",
      },
      {
        id: "photo-set",
        label: "Elevation and pitch-labeled photo set",
        required: true,
        detail: "Minimum one wide and one close per affected elevation; pitch visible or annotated.",
      },
      {
        id: "revised-estimate",
        label: "Revised estimate aligned to photo narrative",
        required: true,
        detail: "Each added line maps to a photo, measurement variance, or code citation.",
      },
      {
        id: "cover-letter",
        label: "Supplement cover letter with line-item index",
        required: true,
        detail: "Separate quantity revisions from unit price challenges in the narrative.",
      },
      {
        id: "code-support",
        label: "Code or manufacturer citations for upgrade lines",
        required: false,
        detail: "Required when requesting ice barrier, ventilation balance, or fastening upgrades.",
      },
    ],
    steps: [
      {
        id: "reconcile-quantities",
        title: "Reconcile sketch to measurement report",
        owner: "supplement-coordinator",
        actions: [
          "Compare carrier squares to EagleView, Hover, or field measure — flag variances above 2%.",
          "Verify ridge, hip, valley, and eave/rake linear feet against report tables.",
          "Note sketch geometry simplifications (collapsed hips, omitted crickets, parapets).",
          "Record reconciliation table in supplement file for adjuster reference.",
        ],
        notes:
          "Quantity gaps cascade into shingle, felt, ice barrier, and waste underpayment — fix squares first.",
      },
      {
        id: "walk-line-items",
        title: "Walk missed line items checklist",
        owner: "supplement-coordinator",
        actions: [
          "Verify steep/high charges against measured pitch on every plane.",
          "Confirm drip edge, starter strip, and ridge cap linear feet.",
          "Check ice and water shield in valleys and eaves per jurisdiction.",
          "Count ventilation intake and exhaust as a balanced system.",
          "List detach and reset for HVAC, solar, satellite, and skylight units.",
          "Apply waste factor appropriate to cut-up factor and shingle type.",
        ],
      },
      {
        id: "field-confirm",
        title: "Confirm field conditions with crew lead",
        owner: "field",
        actions: [
          "Validate pitch labels and access constraints match photos.",
          "Confirm valley type (open, closed-cut, woven) and flashing conditions.",
          "Identify decking damage or rot visible only after tear-off.",
          "Flag penetrations, chimneys, and wall intersections needing flashing lines.",
        ],
        notes: "Call or site visit if estimate was desk-reviewed without roof access.",
      },
      {
        id: "document-gaps",
        title: "Close documentation gaps before submission",
        owner: "field",
        actions: [
          "Upload missing elevation, tear-off, and accessory photos.",
          "Attach permit requirements or inspector notes for code-driven lines.",
          "Add supplier invoices only for unit price challenges — date-matched to estimate.",
        ],
      },
      {
        id: "build-package",
        title: "Build carrier-ready supplement package",
        owner: "supplement-coordinator",
        actions: [
          "Finalize revised estimate with F9 notes mirroring cover letter.",
          "Index each requested line to photo filename or report page.",
          "Submit via carrier portal, email, or fax per adjuster preference.",
          "Log submission date and start follow-up clock in CRM.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "squares-match",
        label: "Squares reconciled or variance explained",
        required: true,
        detail: "Unexplained square gaps are the top cause of partial approvals.",
      },
      {
        id: "accessories-verified",
        label: "Accessory checklist complete (drip edge, starter, ridge, ice barrier)",
        required: true,
      },
      {
        id: "pitch-documented",
        label: "Steep/high modifiers match documented pitch",
        required: true,
      },
      {
        id: "photo-line-map",
        label: "Every new line item has traceable photo or report reference",
        required: true,
      },
      {
        id: "separate-arguments",
        label: "Quantity, code, and unit price arguments separated in narrative",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Submitting supplement before reconciling squares to measurement report",
        impact: "Carrier denies shingle and accessory quantities; weeks of rework.",
        correction: "Lead with measurement variance table; revise estimate to report first.",
      },
      {
        mistake: "Bundling code upgrades without jurisdiction-specific citations",
        impact: "Blanket code arguments trigger denials on otherwise valid lines.",
        correction: "Cite local amendment, permit, or manufacturer spec per line item.",
      },
      {
        mistake: "Omitting steep/high because adjuster never accessed the roof",
        impact: "Labor margin lost on 8/12+ pitches and multi-story staging.",
        correction: "Label pitch on photos; pair with access photos from ground and roof.",
      },
      {
        mistake: "Waiting until install complete to submit",
        impact: "Labor and material sunk; weaker negotiating position.",
        correction: "Submit within first week when tear-off evidence is fresh.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier sketch understates squares or linear feet",
        documentation: "Measurement report comparison table with highlighted variances",
        lineItemHint: "Field shingles, felt, ice barrier, waste factor",
      },
      {
        trigger: "Accessory rows missing from macro assembly",
        documentation: "Perimeter photos showing eaves, rakes, ridges, valleys",
        lineItemHint: "Drip edge, starter strip, ridge cap, valley metal",
      },
      {
        trigger: "Pitch 7/12 or greater without steep/high modifier",
        documentation: "Pitch-labeled elevation photos and measurement pitch table",
        lineItemHint: "Steep charge, high charge, staging labor",
      },
      {
        trigger: "Ice barrier omitted in northern or coastal jurisdictions",
        documentation: "Code citation, eave depth photos, valley condition shots",
        lineItemHint: "Ice and water shield at eaves and valleys",
      },
      {
        trigger: "HVAC, solar, or satellite on affected slopes",
        documentation: "Pre-tear-off unit photos with count and location labels",
        lineItemHint: "Detach and reset per unit",
      },
    ],
    faq: [
      {
        question: "When should a roofing supplement be submitted?",
        answer:
          "Within the first week after carrier estimate receipt or tear-off, while measurement variances and accessory photos are fresh. Waiting until install is complete weakens quantity disputes and labor arguments.",
      },
      {
        question: "What is the first check before adding roofing line items?",
        answer:
          "Reconcile carrier squares and linear feet to your measurement report. Fix square variances before arguing accessories, steep charges, or code upgrades — quantity gaps cascade through every shingle-related line.",
      },
    ],
  }),

  defineGuide({
    slug: "roofing-documentation-guide",
    title: "Roofing Claim Documentation Standard",
    excerpt:
      "Minimum photo, measurement, and narrative standards for roofing claim files — from pre-tear-off through dry-in and final install — built for supplement approval.",
    category: CATEGORY,
    guideType: "documentation-standard",
    roles: ["field", "office"],
    claimPhase: "documentation",
    tags: [
      "roof documentation",
      "photos",
      "claim file",
      "storm damage",
      "supplement evidence",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 10,
    seoTitle: "Roofing Claim Documentation Standard",
    seoDescription:
      "Roofing claim documentation standard for contractors: elevation photos, tear-off sequences, pitch labels, measurement files, and narrative practices that improve supplement approvals.",
    relatedGuideSlugs: [
    "hoa-roofing-claims-guide",
    "multi-building-roofing-claims-guide",
    "commercial-roofing-documentation-guide",
      "roof-reinspection-guide",
      "roof-repairability-documentation-guide",
      "roof-matching-documentation-guide",
      "roofing-supplement-checklist",
      "roof-measurement-documentation-guide",
      "steep-high-documentation-guide",
      "code-upgrade-documentation-guide",
    ],
    relatedBlogSlugs: ["what-is-a-roof-supplement", "roofing-supplement-playbook"],
    faqIds: ["roofing-carrier-documentation", "roofing-storm-vs-retail"],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["hail", "wind", "replacement"],
    purpose:
      "Establish a consistent documentation standard so every roofing file — storm or everyday replacement — carries evidence adjusters can trace to line items without site revisits or phone clarification.",
    whenToUse: [
      {
        condition: "New roofing claim assigned before first site visit",
        signal: "Claim number issued; production date scheduled",
      },
      {
        condition: "Pre-production documentation review",
        signal: "Office audit flags missing elevations or pitch labels",
      },
      {
        condition: "Supplement denied for insufficient evidence",
        signal: "Adjuster requests additional photos or narrative",
      },
      {
        condition: "Training new field supers or sales inspectors",
        signal: "Onboarding to company claim documentation standards",
      },
    ],
    requiredDocumentation: [
      {
        id: "pre-tearoff-elevations",
        label: "Pre-tear-off elevation photos (wide + close per plane)",
        required: true,
        detail: "Include eave, ridge, valley, and penetration zones on each elevation.",
      },
      {
        id: "pitch-labels",
        label: "Pitch measurement or labeled photos per slope",
        required: true,
        detail: "Digital pitch gauge reading or annotated wide shot with pitch noted.",
      },
      {
        id: "peril-evidence",
        label: "Peril-specific damage photos (hail, wind, age)",
        required: true,
        detail: "Soft metal impacts, shingle bruising, lifted tabs, or creased ridges as applicable.",
      },
      {
        id: "tearoff-sequence",
        label: "Tear-off sequence showing decking and flashing exposure",
        required: true,
        detail: "Capture before dry-in: rot, delamination, non-compliant underlayment.",
      },
      {
        id: "accessory-install",
        label: "Installed accessory photos (drip edge, ice barrier, ridge vent)",
        required: true,
        detail: "Close-ups that prove code-compliant install, not just finished wide shots.",
      },
      {
        id: "measurement-file",
        label: "Measurement report or field sketch on file",
        required: true,
        detail: "Squares, ridges, hips, valleys, and eave/rake dimensions labeled.",
      },
      {
        id: "narrative-log",
        label: "Dated field narrative or CRM activity log",
        required: false,
        detail: "Notes discovery items found during tear-off for supplement narrative.",
      },
    ],
    steps: [
      {
        id: "pre-production",
        title: "Document before tear-off",
        owner: "field",
        actions: [
          "Capture four-corner wide shots of structure for context.",
          "Photograph each affected elevation: wide slope view and close damage detail.",
          "Record pitch per plane; photograph gauge reading at eave or ridge.",
          "Document penetrations, chimneys, skylights, and wall intersections.",
          "Photograph soft metals, vents, and gutters for hail/wind indicators.",
        ],
        notes: "This set supports both coverage arguments and supplement line items.",
      },
      {
        id: "during-tearoff",
        title: "Capture discovery during tear-off",
        owner: "field",
        actions: [
          "Photo sequence: shingles removed → underlayment → decking exposed.",
          "Document rotted decking, delaminated OSB, and skipped sheathing clips.",
          "Photograph deteriorated step flashing, pipe boots, and valley metal.",
          "Note ventilation intake/exhaust before covering soffit or ridge.",
        ],
      },
      {
        id: "dry-in-install",
        title: "Document dry-in and accessory install",
        owner: "field",
        actions: [
          "Photograph ice and water shield at eaves and valleys before shingle cover.",
          "Capture drip edge and starter course before field shingle install.",
          "Document balanced ventilation: soffit vents, ridge vent, turbines.",
          "Record flashing details at walls, chimneys, and skylights.",
        ],
      },
      {
        id: "file-organization",
        title: "Organize and upload to claim file",
        owner: "office",
        actions: [
          "Name files by elevation, date, and subject (e.g., north-elevation-pitch-2026-06-06).",
          "Upload to carrier portal, CRM, or shared drive within 24 hours of capture.",
          "Cross-check photo set against estimate line items before supplement build.",
          "Flag gaps to field lead same day — do not wait until submission.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "all-elevations",
        label: "Every affected elevation has wide and close photos",
        required: true,
      },
      {
        id: "pitch-on-file",
        label: "Pitch documented for each plane on estimate",
        required: true,
      },
      {
        id: "tearoff-proof",
        label: "Tear-off photos prove decking and flashing conditions",
        required: true,
      },
      {
        id: "accessory-proof",
        label: "Installed accessories photographed before cover-up",
        required: true,
      },
      {
        id: "naming-convention",
        label: "Files follow naming convention for adjuster navigation",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Only finished wide shots — no tear-off or accessory close-ups",
        impact: "Adjusters cannot verify decking replacement or ice barrier scope.",
        correction: "Require tear-off and dry-in photos in production checklist.",
      },
      {
        mistake: "Photos taken from ground only on steep or high roofs",
        impact: "Pitch and slope-specific line items denied for lack of proof.",
        correction: "Use pitch gauge at eave plus roof-level slope photos where safe.",
      },
      {
        mistake: "Uploading undated, unlabeled camera roll batches",
        impact: "Adjuster cannot match evidence to production timeline.",
        correction: "Rename and organize before upload; include date in filename.",
      },
      {
        mistake: "Mixing coverage arguments with supplement evidence in one narrative",
        impact: "Confuses desk review; slows both coverage and scope decisions.",
        correction: "Separate peril documentation from scope revision cover letter.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Tear-off reveals rotted decking not visible pre-production",
        documentation: "Sequential tear-off photos with chalked damage boundaries",
        lineItemHint: "Decking replacement SF, labor to remove and replace",
      },
      {
        trigger: "Deteriorated flashing at chimney or wall intersection",
        documentation: "Before and after flashing photos with close-up of prior condition",
        lineItemHint: "Step flashing, counter flashing, chimney saddle",
      },
      {
        trigger: "Non-compliant ventilation discovered during tear-off",
        documentation: "Photos of prior vent layout vs. new balanced system",
        lineItemHint: "Ridge vent, soffit vents, turbine units",
      },
      {
        trigger: "Prior roof lacked drip edge or ice barrier",
        documentation: "Exposed eave photos showing missing or damaged drip edge",
        lineItemHint: "Drip edge, ice and water shield",
      },
    ],
  }),

  defineGuide({
    slug: "reinspection-preparation-guide",
    title: "Roof Reinspection Day-Of Checklist",
    excerpt:
      "On-site checklist for carrier re-inspection day: confirm visit logistics, stage evidence, assign crew roles, walk the roof with the adjuster, and close out with supplement-ready documentation within 24 hours.",
    category: CATEGORY,
    guideType: "checklist",
    roles: ["field", "project-manager"],
    claimPhase: "supplement",
    tags: [
      "reinspection",
      "adjuster visit",
      "supplement",
      "storm claims",
      "roof inspection",
      "day-of checklist",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 8,
    seoTitle: "Roof Reinspection Day-Of Checklist for Contractors",
    seoDescription:
      "On-site checklist for roofing claim re-inspections: visit confirmation, evidence staging, crew roles, adjuster walk-through, and 24-hour closeout for supplement approval.",
    relatedGuideSlugs: [
    "hoa-roofing-claims-guide",
    "multi-building-roofing-claims-guide",
    "commercial-roofing-documentation-guide",
      "roof-reinspection-guide",
      "roof-repairability-documentation-guide",
      "roof-matching-documentation-guide",
      "roofing-supplement-checklist",
      "roofing-documentation-guide",
      "roof-measurement-documentation-guide",
      "steep-high-documentation-guide",
    ],
    relatedBlogSlugs: ["roofing-supplement-playbook"],
    faqIds: [
      "roof-reinspection-documentation-prep",
      "roof-reinspection-organize-photos",
      "roof-reinspection-when-request",
    ],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["hail", "wind", "replacement"],
    purpose:
      "Execute carrier re-inspection day with a controlled on-site checklist — visit confirmation, evidence staging, role assignment, roof walk-through, and 24-hour closeout. For when to request a reinspection and how to prepare documentation before scheduling, see the Roof Reinspection Guide for Contractors.",
    whenToUse: [
      {
        condition: "Carrier schedules re-inspection after supplement submission",
        signal: "Adjuster email or portal notice with date/time window",
      },
      {
        condition: "Initial inspection disputed — desk review only",
        signal: "Adjuster requests ladder assist or contractor presence on roof",
      },
      {
        condition: "Supplement partially approved; remaining lines need field verification",
        signal: "Denial letter cites need for on-site confirmation",
      },
      {
        condition: "Complex cut-up roof where aerial sketch is unreliable",
        signal: "Measurement variance exceeds 5%; carrier agrees to revisit",
      },
    ],
    prerequisites: [
      "Submitted supplement package on file with line-item index",
      "Pre-tear-off and current-condition photo set organized by elevation",
      "Measurement report and revised estimate available on tablet or print",
      "Homeowner notified of visit and access confirmed",
    ],
    requiredDocumentation: [
      {
        id: "supplement-copy",
        label: "Submitted supplement with highlighted open lines",
        required: true,
        detail: "Mark denied, pending, and approved lines for focused walk-through.",
      },
      {
        id: "walk-sheet",
        label: "Reinspection walk sheet with line-item prompts",
        required: true,
        detail: "One row per disputed line: location, photo needed, talking point.",
      },
      {
        id: "pitch-tools",
        label: "Pitch gauge, tape, and chalk for on-roof labeling",
        required: true,
      },
      {
        id: "photo-device",
        label: "Dedicated camera or phone for adjuster-present captures",
        required: true,
        detail: "Duplicate adjuster photos when permitted; upload same day.",
      },
      {
        id: "code-folder",
        label: "Printed code citations for upgrade lines in dispute",
        required: false,
        detail: "Only for lines under denial — avoid overwhelming visit with paper.",
      },
    ],
    steps: [
      {
        id: "pre-call",
        title: "Confirm visit scope with adjuster",
        owner: "project-manager",
        actions: [
          "Confirm date, time, access, and whether roof access is expected.",
          "Ask which lines remain in dispute — align walk sheet to those items.",
          "Confirm who will be on site: adjuster, independent, or engineer.",
          "Notify homeowner; ensure dogs, gates, and ladder access are ready.",
        ],
      },
      {
        id: "stage-evidence",
        title: "Stage evidence and walk route",
        owner: "field",
        actions: [
          "Print or load walk sheet with one prompt per open line item.",
          "Organize photos on tablet in elevation order for quick reference.",
          "If tear-off complete, expose sample areas adjuster needs (flashing, ice barrier).",
          "Stage pitch gauge and measurement report at job trailer or truck.",
        ],
      },
      {
        id: "assign-roles",
        title: "Assign on-site roles",
        owner: "project-manager",
        actions: [
          "Field lead walks roof with adjuster; PM handles homeowner and paperwork.",
          "Supplement coordinator on standby for estimate questions via phone.",
          "Crew avoids disruptive work during visit — no blowers over conversation.",
        ],
        notes: "One voice on technical arguments; avoid multiple people debating adjuster.",
      },
      {
        id: "roof-walk",
        title: "Execute focused roof walk-through",
        owner: "field",
        actions: [
          "Start at disputed elevations; label pitch at each plane.",
          "Point to physical evidence: valley type, penetration count, decking damage.",
          "Photograph adjuster observations when appropriate — duplicate their angles.",
          "Avoid arguing unit prices on roof; stick to scope and field conditions.",
          "Note any new damage or scope adjuster agrees to verbally.",
        ],
      },
      {
        id: "post-visit",
        title: "Close out within 24 hours",
        owner: "project-manager",
        actions: [
          "Upload new photos with reinspection date in filename.",
          "Email adjuster summary: agreed items, open items, photos attached.",
          "Update CRM: visit date, attendees, outcome, follow-up date.",
          "Revise supplement or submit addendum if new scope confirmed on site.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "walk-sheet-complete",
        label: "Walk sheet covers every open supplement line",
        required: true,
      },
      {
        id: "homeowner-ready",
        label: "Homeowner access confirmed 24 hours before visit",
        required: true,
      },
      {
        id: "single-technical-lead",
        label: "One field lead designated for roof conversation",
        required: true,
      },
      {
        id: "same-day-photos",
        label: "Reinspection photos uploaded same day",
        required: true,
      },
      {
        id: "written-followup",
        label: "Written follow-up email sent within 24 hours",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Sending sales rep instead of technical field lead",
        impact: "Adjuster questions unanswered; scope walk incomplete.",
        correction: "Field super or experienced installer leads roof portion.",
      },
      {
        mistake: "Arguing price or policy on the roof instead of scope",
        impact: "Visit becomes adversarial; adjuster retreats to desk denial.",
        correction: "Document conditions; save price arguments for written follow-up.",
      },
      {
        mistake: "No written summary after verbal agreements on site",
        impact: "Agreed lines disappear in desk review.",
        correction: "Same-day email listing agreed scope with photo attachments.",
      },
      {
        mistake: "Active tear-off during reinspection without exposing dispute areas",
        impact: "Adjuster cannot verify flashing, decking, or ice barrier conditions.",
        correction: "Pause or stage exposed sections before visit.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Adjuster agrees on site that pitch exceeds steep threshold",
        documentation: "Pitch gauge photo with adjuster-present timestamp",
        lineItemHint: "Steep charge per affected square",
      },
      {
        trigger: "Adjuster confirms additional penetration count",
        documentation: "Walk-through photos of each pipe boot, vent, chimney",
        lineItemHint: "Pipe flashing, detach and reset",
      },
      {
        trigger: "Decking damage visible during reinspection",
        documentation: "Chalked boundaries and thickness measurement photos",
        lineItemHint: "Decking replacement, labor minimums",
      },
      {
        trigger: "Adjuster notes valley type differs from estimate",
        documentation: "Valley photos with type labeled in follow-up email",
        lineItemHint: "Valley metal, ice barrier in valley",
      },
    ],
  }),

  defineGuide({
    slug: "code-upgrade-documentation-guide",
    title: "Roof Code Upgrade Documentation",
    excerpt:
      "Document code-driven roofing upgrades with jurisdiction citations, permit records, and tear-off evidence — without blanket arguments that trigger denials.",
    category: CATEGORY,
    guideType: "documentation-standard",
    roles: ["field", "office"],
    claimPhase: "documentation",
    tags: [
      "code upgrades",
      "building code",
      "ice barrier",
      "ventilation",
      "permit",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 11,
    seoTitle: "Roof Code Upgrade Documentation Guide",
    seoDescription:
      "Document roofing code upgrades for insurance supplements: ice barrier, ventilation, underlayment, and fastening requirements with local citations and tear-off proof.",
    relatedGuideSlugs: [
    "hoa-roofing-claims-guide",
    "multi-building-roofing-claims-guide",
    "commercial-roofing-documentation-guide",
      "roof-reinspection-guide",
      "roof-repairability-documentation-guide",
      "roof-matching-documentation-guide",
      "roofing-documentation-guide",
      "roofing-supplement-checklist",
      "roof-measurement-documentation-guide",
    ],
    relatedBlogSlugs: ["roofing-supplement-playbook"],
    faqIds: ["roofing-code-items", "roofing-carrier-documentation"],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["hail", "wind", "replacement"],
    purpose:
      "Build defensible code-upgrade supplements by tying each line item to a specific jurisdiction requirement, permit condition, or manufacturer mandate — not generic code lists that carriers reject.",
    whenToUse: [
      {
        condition: "Full slope or full roof replacement triggers current code",
        signal: "Permit application requires upgrades beyond pre-loss assembly",
      },
      {
        condition: "Tear-off exposes non-compliant underlayment or fastening",
        signal: "Prior roof lacked ice barrier, drip edge, or balanced ventilation",
      },
      {
        condition: "Carrier estimate omits code-required items",
        signal: "Macro assembly predates local amendment adoption",
      },
      {
        condition: "Partial repair at code boundary between old and new materials",
        signal: "Inspector requires upgrade at tie-in or full slope trigger",
      },
    ],
    prerequisites: [
      "Jurisdiction identified (city/county and adopted code year)",
      "Scope of repair defined: partial slope vs. full elevation vs. full roof",
      "Manufacturer spec sheet for specified shingle system",
    ],
    requiredDocumentation: [
      {
        id: "code-citation",
        label: "Specific code section citation per upgrade line",
        required: true,
        detail: "IRC R905.x, local amendment, or AHJ written requirement — not a generic list.",
      },
      {
        id: "permit-record",
        label: "Permit application or inspector notes",
        required: false,
        detail: "Required when AHJ mandates upgrades; attach inspection checklist if available.",
      },
      {
        id: "pre-loss-condition",
        label: "Tear-off photos showing prior non-compliant assembly",
        required: true,
        detail: "Missing drip edge, no ice barrier, inadequate ventilation — before new install covers.",
      },
      {
        id: "manufacturer-spec",
        label: "Manufacturer installation requirements for warranty",
        required: true,
        detail: "Underlayment type, fastening pattern, starter, and ventilation minimums.",
      },
      {
        id: "upgrade-install",
        label: "Photos of upgraded assembly during install",
        required: true,
        detail: "Ice barrier lap widths, drip edge, ventilation intake/exhaust balance.",
      },
    ],
    steps: [
      {
        id: "identify-triggers",
        title: "Identify code triggers for this job",
        owner: "office",
        actions: [
          "Confirm adopted code year and local amendments for the property address.",
          "Determine repair scope trigger: full reroof, structural opening, or slope replacement.",
          "List upgrades commonly triggered: ice barrier depth, drip edge, ventilation, fastening.",
          "Separate true code items from preference upgrades (designer shingle, copper flashing).",
        ],
      },
      {
        id: "cite-per-line",
        title: "Assign one citation per supplement line",
        owner: "office",
        actions: [
          "Map ice barrier line to specific eave depth and valley requirement.",
          "Map ventilation lines to net free area calculation or prescriptive method.",
          "Map underlayment upgrade to manufacturer and code overlap — cite both if applicable.",
          "Avoid attaching ten-page code PDFs; quote the operative sentence in cover letter.",
        ],
      },
      {
        id: "capture-tearoff",
        title: "Photograph pre-loss non-compliance during tear-off",
        owner: "field",
        actions: [
          "Photo missing or damaged drip edge at eaves and rakes.",
          "Photo valleys and eaves showing absence or deterioration of ice barrier.",
          "Photo prior ventilation layout showing imbalance or insufficiency.",
          "Photo exposed decking for fastening pattern upgrade justification.",
        ],
        notes: "Before photos prove why upgrade is required, not just preferred.",
      },
      {
        id: "capture-install",
        title: "Document compliant install before cover-up",
        owner: "field",
        actions: [
          "Ice barrier: photograph courses, laps, and valley integration.",
          "Drip edge: photograph eave and rake install before shingle overlay.",
          "Ventilation: photograph soffit intake and ridge exhaust in same visit.",
          "Record permit inspection sign-off if inspector visits mid-job.",
        ],
      },
      {
        id: "package-narrative",
        title: "Write code supplement narrative",
        owner: "office",
        actions: [
          "One paragraph per line: trigger → citation → photo reference → quantity.",
          "State repair scope that activated the requirement.",
          "Do not conflate matching policy arguments with code arguments.",
          "Submit permit fees as separate line when receipt is available.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "per-line-citation",
        label: "Each upgrade line has its own code or manufacturer citation",
        required: true,
      },
      {
        id: "before-after",
        label: "Before (tear-off) and after (install) photos for each upgrade",
        required: true,
      },
      {
        id: "scope-trigger-stated",
        label: "Narrative states repair scope that triggered upgrade",
        required: true,
      },
      {
        id: "no-blanket-list",
        label: "No generic code dump without job-specific application",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Attaching entire IRC chapter without job-specific application",
        impact: "Desk reviewer dismisses as template supplement; lines denied.",
        correction: "Quote operative sentence and explain how this roof triggered it.",
      },
      {
        mistake: "Claiming code upgrade on partial repair without trigger analysis",
        impact: "Carrier applies repair vs. replace policy and denies all upgrades.",
        correction: "Document inspector or code trigger for full slope or opening.",
      },
      {
        mistake: "Requesting designer shingle under code upgrade argument",
        impact: "Undermines legitimate code lines in same package.",
        correction: "Separate matching or material upgrade to policy argument.",
      },
      {
        mistake: "No tear-off photos of prior condition",
        impact: "Adjuster assumes upgrade is contractor preference.",
        correction: "Mandatory tear-off photo gate before ice barrier and drip edge lines.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Eaves in climate zone requiring ice barrier — prior roof had none",
        documentation: "Tear-off eave photos + code section + install lap photos",
        lineItemHint: "Ice and water shield at eaves (LF or SF per local method)",
      },
      {
        trigger: "Full replacement triggers drip edge at eaves and rakes",
        documentation: "Missing drip edge tear-off photos + IRC/manufacturer citation",
        lineItemHint: "Drip edge eave and rake linear feet",
      },
      {
        trigger: "Decking replacement requires ventilation rebalance",
        documentation: "Prior vent layout photos + calculation or prescriptive code cite",
        lineItemHint: "Ridge vent, soffit vents, baffles",
      },
      {
        trigger: "Valley treatment upgrade from woven to ice-barrier-backed open valley",
        documentation: "Valley tear-off and new assembly photos with code cite",
        lineItemHint: "Ice barrier in valley, valley metal",
      },
    ],
  }),

  defineGuide({
    slug: "steep-high-documentation-guide",
    title: "Steep & High Roof Documentation",
    excerpt:
      "Field procedure for documenting steep-slope and high-access roofing work: pitch verification, safety staging evidence, and line items that carriers omit on desk-reviewed estimates.",
    category: CATEGORY,
    guideType: "field-procedure",
    roles: ["field"],
    claimPhase: "documentation",
    tags: [
      "steep charge",
      "high charge",
      "pitch",
      "roof access",
      "safety staging",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 7,
    seoTitle: "Steep & High Roof Documentation Procedure",
    seoDescription:
      "Document steep and high roofing charges for insurance supplements: pitch measurement, elevation photos, staging evidence, and Xactimate modifier alignment.",
    relatedGuideSlugs: [
    "hoa-roofing-claims-guide",
    "multi-building-roofing-claims-guide",
    "commercial-roofing-documentation-guide",
      "roof-reinspection-guide",
      "roof-repairability-documentation-guide",
      "roof-matching-documentation-guide",
      "roofing-documentation-guide",
      "roof-measurement-documentation-guide",
      "roofing-supplement-checklist",
      "reinspection-preparation-guide",
    ],
    relatedBlogSlugs: ["roofing-supplement-playbook"],
    faqIds: ["roofing-carrier-documentation", "roofing-measurements"],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["hail", "wind", "replacement"],
    purpose:
      "Capture pitch and access evidence on site so steep and high labor modifiers survive desk review — the most commonly omitted roofing line items on aerial and remote estimates.",
    whenToUse: [
      {
        condition: "Any plane measures 7/12 pitch or greater",
        signal: "Pitch gauge reading or measurement report steep flag",
      },
      {
        condition: "Two-story or greater eave height on affected slopes",
        signal: "Ground-to-eave measurement exceeds one-story threshold",
      },
      {
        condition: "Carrier estimate lacks steep/high modifiers",
        signal: "Estimate review flags pitch without corresponding charges",
      },
      {
        condition: "Zero-lot-line or limited staging access",
        signal: "Dump location, ladder setup, or equipment requires extra labor",
      },
    ],
    requiredDocumentation: [
      {
        id: "pitch-reading",
        label: "Pitch gauge photo per steep plane",
        required: true,
        detail: "Readable gauge at eave or ridge; include date and elevation in filename.",
      },
      {
        id: "elevation-wide",
        label: "Wide elevation showing roof height and slope",
        required: true,
        detail: "Ground-level shot showing full wall height to ridge.",
      },
      {
        id: "access-constraints",
        label: "Photos of staging, ladder setup, or equipment constraints",
        required: false,
        detail: "Support high charge and labor difficulty on multi-story or tight lots.",
      },
      {
        id: "measurement-pitch",
        label: "Measurement report pitch table excerpt",
        required: true,
        detail: "Highlight planes where report pitch exceeds carrier sketch defaults.",
      },
    ],
    steps: [
      {
        id: "measure-pitch",
        title: "Measure and record pitch on every plane",
        owner: "field",
        actions: [
          "Use digital pitch gauge at eave on each slope — not guess from ground.",
          "Record pitch as rise/run (e.g., 9/12) on field sketch or CRM form.",
          "Photograph gauge reading with elevation context in frame.",
          "Flag any plane at 7/12+ for steep charge and 10/12+ for second steep tier per pricelist.",
        ],
      },
      {
        id: "measure-height",
        title: "Document eave height for high charges",
        owner: "field",
        actions: [
          "Measure eave height from grade on two-story and multi-story elevations.",
          "Photograph wide shot showing full height with reference (ladder, story count).",
          "Note zero-lot-line, fence, or pool constraints affecting staging.",
        ],
      },
      {
        id: "align-estimate",
        title: "Align documentation to Xactimate modifiers",
        owner: "field",
        actions: [
          "Cross-check pitch breakpoints in current pricelist (typically 7/12 and 10/12).",
          "Confirm which squares fall in steep vs. super-steep categories.",
          "Match high charge to story count thresholds in estimate software.",
          "Hand off pitch table and photos to supplement coordinator same day.",
        ],
        notes: "Misaligned pitch tiers are an easy partial-approval fix if documented early.",
      },
      {
        id: "reinspection-ready",
        title: "Stage for adjuster or reinspection",
        owner: "field",
        actions: [
          "Leave pitch gauge available for adjuster demonstration on visit.",
          "Prepare one-page pitch summary by elevation for roof walk.",
          "Duplicate adjuster angle if they photograph pitch during visit.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "every-plane",
        label: "Pitch recorded for every plane on scope — not sample only",
        required: true,
      },
      {
        id: "gauge-photos",
        label: "Gauge photos readable without enhancement",
        required: true,
      },
      {
        id: "height-documented",
        label: "Eave height documented on multi-story affected elevations",
        required: true,
      },
      {
        id: "same-day-upload",
        label: "Pitch evidence uploaded before shingle install completes",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Relying on aerial pitch without field verification",
        impact: "Aerial models smooth pitch; steep charges denied on 8/12+ planes.",
        correction: "Field gauge reading required on every steep supplement file.",
      },
      {
        mistake: "Applying steep charge to entire roof when only one plane qualifies",
        impact: "Overreach triggers credibility loss; entire steep request denied.",
        correction: "Allocate steep squares per plane using measurement report facets.",
      },
      {
        mistake: "No height evidence on two-story jobs",
        impact: "High charge omitted when adjuster never accessed site.",
        correction: "Wide elevation photo plus eave height measurement.",
      },
      {
        mistake: "Pitch photos taken after install — gauge not visible",
        impact: "Cannot prove slope at supplement review.",
        correction: "Capture during inspection or tear-off before coverage.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Planes at 7/12 to 9/12 without steep modifier",
        documentation: "Gauge photos + measurement facet pitch table",
        lineItemHint: "Steep charge per qualifying square",
      },
      {
        trigger: "Planes at 10/12+ without super-steep tier",
        documentation: "Gauge photos at steepest plane; safety staging photos",
        lineItemHint: "Super-steep or second steep breakpoint per pricelist",
      },
      {
        trigger: "Two-story eave height without high charge",
        documentation: "Elevation wide shot + height measurement from grade",
        lineItemHint: "High charge per story threshold",
      },
      {
        trigger: "Tight access requiring extra labor for tear-off and haul-off",
        documentation: "Staging constraint photos with narrative in supplement",
        lineItemHint: "Additional labor hours or equipment line per local pricelist",
      },
    ],
  }),

  defineGuide({
    slug: "roof-measurement-documentation-guide",
    title: "Roof Measurement Documentation",
    excerpt:
      "Field procedure for ordering, verifying, and filing roof measurement reports — and reconciling them to carrier sketches for supplement-ready quantity arguments.",
    category: CATEGORY,
    guideType: "field-procedure",
    roles: ["field"],
    claimPhase: "documentation",
    tags: [
      "measurements",
      "eagleview",
      "hover",
      "squares",
      "sketch reconciliation",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 9,
    seoTitle: "Roof Measurement Documentation Procedure",
    seoDescription:
      "Document roof measurements for insurance claims: order reports, verify accuracy, reconcile to carrier sketches, and support supplement quantity revisions.",
    relatedGuideSlugs: [
    "hoa-roofing-claims-guide",
    "multi-building-roofing-claims-guide",
    "commercial-roofing-documentation-guide",
      "roof-reinspection-guide",
      "roof-repairability-documentation-guide",
      "roof-matching-documentation-guide",
      "roofing-documentation-guide",
      "roofing-supplement-checklist",
      "steep-high-documentation-guide",
      "code-upgrade-documentation-guide",
    ],
    relatedBlogSlugs: ["what-is-a-roof-supplement", "roofing-supplement-playbook"],
    faqIds: ["roofing-measurements", "roofing-carrier-documentation"],
    relatedSolutionPath: SOLUTION_PATH,
    claimTypes: ["hail", "wind", "replacement"],
    purpose:
      "Produce measurement documentation that carriers accept as quantity authority — and reconciliation records that isolate square, ridge, and valley variances from carrier sketches.",
    whenToUse: [
      {
        condition: "New roofing claim before estimate review",
        signal: "Property address confirmed; carrier sketch pending or received",
      },
      {
        condition: "Carrier sketch squares differ from field observation",
        signal: "Material order feels short; accessory LF does not match site",
      },
      {
        condition: "Complex cut-up roof with unreliable aerial geometry",
        signal: "Multiple hips, valleys, crickets, or dormers on scope",
      },
      {
        condition: "Supplement quantity dispute on squares or linear feet",
        signal: "Adjuster cites carrier sketch as final quantity authority",
      },
    ],
    requiredDocumentation: [
      {
        id: "measurement-order",
        label: "Third-party measurement report (EagleView, Hover, or equivalent)",
        required: true,
        detail: "Premium or full report with facets, pitch, ridges, hips, valleys, eaves, rakes.",
      },
      {
        id: "order-confirmation",
        label: "Report order date and property match confirmation",
        required: true,
        detail: "Verify correct structure on multi-building parcels.",
      },
      {
        id: "reconciliation-table",
        label: "Carrier sketch vs. report comparison table",
        required: true,
        detail: "Squares, ridges, hips, valleys, eaves, rakes — variance column highlighted.",
      },
      {
        id: "field-verify",
        label: "Field verification notes for report anomalies",
        required: false,
        detail: "Required when report omits parapets, crickets, or recent additions.",
      },
      {
        id: "waste-calc",
        label: "Waste factor worksheet with cut-up factor noted",
        required: true,
        detail: "Document waste percentage rationale for complex roofs above macro default.",
      },
    ],
    steps: [
      {
        id: "order-report",
        title: "Order measurement report early",
        owner: "field",
        actions: [
          "Order within 24 hours of claim assignment — before carrier estimate arrives.",
          "Confirm correct address, structure, and report level (premium for supplements).",
          "Flag commercial, turret, or flat/low-slope sections needing field supplement.",
          "Store PDF in claim folder with order date in filename.",
        ],
        notes: "Early order beats carrier sketch to file; sets your quantity baseline.",
      },
      {
        id: "verify-report",
        title: "Verify report against field observation",
        owner: "field",
        actions: [
          "Compare facet count and major geometry to ground and ladder observation.",
          "Check pitch table against gauge readings on steep planes.",
          "Note additions, sunrooms, or detached structures excluded from report.",
          "Document anomalies: parapets, crickets, unusual dormers not in aerial model.",
        ],
      },
      {
        id: "reconcile-sketch",
        title: "Reconcile carrier sketch to report",
        owner: "field",
        actions: [
          "Build comparison table: carrier vs. report for squares and LF items.",
          "Highlight variances above 2% on squares or 5 LF on linear items.",
          "Photograph sketch page and report summary side by side for supplement.",
          "Escalate large variances to supplement coordinator before material order.",
        ],
      },
      {
        id: "waste-factor",
        title: "Document waste factor rationale",
        owner: "field",
        actions: [
          "Score cut-up factor: valleys, hips, dormers, turrets, designer shingle.",
          "Apply waste percentage per company standard (typically 10–18% on complex roofs).",
          "Record rationale in supplement file — not just a rounded number.",
          "Cross-check waste against shingle bundle count on delivery ticket.",
        ],
      },
      {
        id: "handoff",
        title: "Hand off to office for estimate revision",
        owner: "field",
        actions: [
          "Upload report, reconciliation table, and field notes to CRM.",
          "Flag planes needing steep/high modifiers from report pitch table.",
          "Confirm material order matches report quantities before production start.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "report-on-file",
        label: "Premium measurement report on file before estimate review",
        required: true,
      },
      {
        id: "address-verified",
        label: "Report structure matches insured property",
        required: true,
      },
      {
        id: "reconciliation-complete",
        label: "Reconciliation table complete when carrier estimate received",
        required: true,
      },
      {
        id: "waste-documented",
        label: "Waste factor documented for cut-up roofs above 10%",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Using carrier sketch as material order basis without report",
        impact: "Short orders mid-job; accessory LF wrong; margin erodes.",
        correction: "Mandatory report order before production scheduling.",
      },
      {
        mistake: "Ordering basic report without pitch and facet detail",
        impact: "Cannot support steep charges or waste arguments in supplement.",
        correction: "Premium report with pitch table and full linear dimensions.",
      },
      {
        mistake: "Ignoring report-to-sketch variance under 5% as immaterial",
        impact: "5% square gap removes thousands across shingles, felt, and labor.",
        correction: "Reconcile every variance; supplement quantity lines individually.",
      },
      {
        mistake: "Default 10% waste on complex designer shingle roofs",
        impact: "Material shortage; weak supplement if waste challenged.",
        correction: "Document cut-up score; apply 15–18% where justified.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier squares below measurement report",
        documentation: "Reconciliation table + report summary PDF highlighted",
        lineItemHint: "Field shingles, underlayment, labor per corrected square",
      },
      {
        trigger: "Ridge or hip LF understated in carrier sketch",
        documentation: "Report ridge/hip table vs. sketch with photo of ridge line",
        lineItemHint: "Ridge cap, hip shingles, ridge vent LF",
      },
      {
        trigger: "Valley LF missing or simplified in sketch",
        documentation: "Report valley table + valley photos from roof",
        lineItemHint: "Valley metal, ice barrier in valley",
      },
      {
        trigger: "Waste factor below job complexity",
        documentation: "Cut-up factor worksheet + facet diagram from report",
        lineItemHint: "Waste percentage adjustment on shingle quantity",
      },
    ],
  }),
] as const satisfies readonly Guide[];
