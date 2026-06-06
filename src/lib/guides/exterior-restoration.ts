import { defineGuide, GUIDE_PUBLISHED_AT } from "@/lib/guides/guide-builder";
import type { Guide } from "@/lib/guide-types";

export const EXTERIOR_RESTORATION_GUIDES = [
  defineGuide({
    slug: "siding-envelope-documentation-guide",
    title: "Siding and Envelope Documentation Procedure",
    excerpt:
      "Field procedure for exterior siding and building envelope documentation: elevation photos, damage mapping, flashing and trim evidence, moisture barriers, and measurement support for supplement-ready exterior scope.",
    category: "exterior-restoration",
    guideType: "field-procedure",
    roles: ["field", "project-manager"],
    claimPhase: "documentation",
    tags: [
      "Siding",
      "Envelope",
      "Exterior",
      "Flashing",
      "Documentation",
      "Supplements",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 13,
    seoTitle: "Siding and Envelope Documentation for Insurance Claims",
    seoDescription:
      "Siding and building envelope documentation procedure for contractors: elevation photos, damage mapping, flashing proof, WRB continuity, and carrier-ready exterior files.",
    relatedGuideSlugs: ["window-door-documentation-guide"],
    relatedBlogSlugs: ["roofing-supplement-playbook"],
    purpose:
      "Document exterior siding and envelope conditions with elevation-level proof, accessory scope, and flashing continuity — so partial elevations, code-driven upgrades, and hidden damage behind cladding survive carrier review.",
    whenToUse: [
      {
        condition: "Wind, hail, or fire-adjacent loss affects exterior cladding or envelope assemblies",
        signal: "Damaged siding, soffit, fascia, or WRB visible on walkaround",
      },
      {
        condition: "Carrier estimate shows field siding only while accessories and labor modifiers are omitted",
        signal: "Missing J-channel, starter, house wrap, or detach-and-reset lines",
      },
      {
        condition: "Partial elevation replacement proposed with color or profile matching concerns",
        signal: "Discontinued profile or fade mismatch risk on adjacent walls",
      },
      {
        condition: "Supplement or re-inspection scheduled for exterior scope gaps",
        signal: "Sketch elevation count lower than field damage map",
      },
    ],
    requiredDocumentation: [
      {
        id: "elevation-overview",
        label: "Wide elevation photos for each affected wall plane",
        required: true,
        detail: "Include context for story height, corners, and adjacent materials.",
      },
      {
        id: "damage-mapping",
        label: "Damage map or annotated elevation showing affected panels and trim",
        required: true,
      },
      {
        id: "profile-label",
        label: "Siding profile, manufacturer, and color label photos",
        required: true,
        detail: "Photograph packaging remnants or course profile before removal when available.",
      },
      {
        id: "flashing-wrb",
        label: "Flashing, WRB, and penetration detail photos before concealment",
        required: true,
        detail: "Window heads, deck ledgers, utilities, and corner terminations.",
      },
      {
        id: "accessories",
        label: "Accessory and trim condition photos — J-channel, starter, soffit, fascia",
        required: true,
      },
      {
        id: "measurements",
        label: "Elevation measurements reconciled to sketch or scope report",
        required: true,
      },
    ],
    steps: [
      {
        id: "walk-elevations",
        title: "Walk elevations and photograph each affected plane",
        owner: "field",
        actions: [
          "Capture wide shots of each elevation with address-visible context when practical.",
          "Photograph close damage on panels, corners, soffit, fascia, and trim boards.",
          "Label photos by elevation — north, south, front, rear — matching estimate sketch.",
        ],
      },
      {
        id: "map-damage",
        title: "Map damage and partial replacement boundaries",
        owner: "field",
        actions: [
          "Mark affected courses, corners, and transitions on elevation diagram or annotated photo.",
          "Document fade, discontinued profile, or mismatch risk when partial elevation proposed.",
          "Note fire, heat, or smoke impact on exterior when loss is combined peril.",
        ],
        notes:
          "Carriers challenge partial elevations without profile and color proof — document early.",
      },
      {
        id: "capture-envelope",
        title: "Capture envelope layers before tear-off",
        owner: "field",
        actions: [
          "Photograph house wrap, flashing, and penetration seals as cladding comes off.",
          "Document compromised WRB or rotted sheathing behind damaged panels.",
          "Record fastener pattern and substrate condition supporting detach-and-reset scope.",
        ],
      },
      {
        id: "measure-reconcile",
        title: "Measure and reconcile to carrier sketch",
        owner: "project-manager",
        actions: [
          "Measure affected elevation square footage, openings, and linear trim.",
          "Compare sketch quantities to field measurements — flag variances over five percent.",
          "Export variance summary for supplement cover letter with elevation labels.",
        ],
      },
      {
        id: "package-supplement",
        title: "Package exterior supplement with indexed elevations",
        owner: "project-manager",
        actions: [
          "Build elevation index: wall plane, photo count, key line items, accessory scope.",
          "Attach manufacturer specs or code citations when upgrades triggered.",
          "Cross-link window and door documentation when openings are in scope.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "elevation-labels",
        label: "Every exterior photo labeled to elevation matching sketch",
        required: true,
      },
      {
        id: "pre-concealment",
        label: "Flashing and WRB photographed before new cladding covers details",
        required: true,
      },
      {
        id: "accessory-proof",
        label: "Accessory and trim lines supported by close photos, not field siding only",
        required: true,
      },
      {
        id: "measurement-variance",
        label: "Measurement variances over five percent documented with report or field notes",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Field siding quantity on estimate without accessory and labor modifier proof",
        impact: "J-channel, starter, house wrap, and detach-and-reset lines denied as duplicates.",
        correction: "Photograph accessories and envelope layers; separate lines in supplement index.",
      },
      {
        mistake: "Partial elevation replacement without profile and fade documentation",
        impact: "Matching supplements denied when carrier assumes patchable field panels suffice.",
        correction: "Photograph profile, color, and fade contrast before ordering materials.",
      },
      {
        mistake: "Hidden sheathing or WRB damage discovered but not photographed before cover",
        impact: "Sheathing and wrap lines look unsupported at desk review.",
        correction: "Stop production to photograph substrate damage when exposed.",
      },
      {
        mistake: "Exterior photos without elevation labels matching sketch",
        impact: "Desk reviewers cannot map damage to line items; approvals slow.",
        correction: "Use consistent elevation naming across photos, sketch, and estimate.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier estimate omits house wrap, flashing, or starter on siding replacement",
        documentation: "Tear-off photos showing compromised WRB and accessory removal.",
        lineItemHint: "House wrap, flashing, starter, J-channel, and detach-and-reset",
      },
      {
        trigger: "Discontinued profile or color fade requires full elevation replacement",
        documentation: "Profile photos, manufacturer correspondence, and elevation fade comparison.",
        lineItemHint: "Additional siding squares on elevation for uniform appearance",
      },
      {
        trigger: "Hidden sheathing damage found behind cladding",
        documentation: "Substrate photos during tear-off with damage boundary narrative.",
        lineItemHint: "Sheathing replacement and structural repair lines",
      },
    ],
    relatedResources: [
      {
        label: "Window and door documentation guide",
        href: "/resources/guides/exterior-restoration/window-door-documentation-guide",
      },
      {
        label: "Roofing supplement playbook",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
    faq: [
      {
        question: "When should full elevation replacement be documented instead of partial patch?",
        answer:
          "When profile is discontinued, color fade is visible across courses, or manufacturer warranty requires full elevation — document profile labels, fade photos, and manufacturer guidance before supplement submit.",
      },
      {
        question: "What envelope details must be photographed before new siding is installed?",
        answer:
          "House wrap continuity, flashing at openings and penetrations, corner terminations, and any compromised sheathing behind removed panels.",
      },
    ],
  }),

  defineGuide({
    slug: "window-door-documentation-guide",
    title: "Window and Door Documentation Procedure",
    excerpt:
      "Field procedure for window and door replacement documentation: unit measurements, damage photos, flashing and trim integration, code and egress notes, and estimate alignment carriers approve.",
    category: "exterior-restoration",
    guideType: "field-procedure",
    roles: ["field", "office"],
    claimPhase: "documentation",
    tags: [
      "Windows",
      "Doors",
      "Exterior",
      "Flashing",
      "Documentation",
      "Supplements",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 11,
    seoTitle: "Window and Door Documentation for Insurance Claims",
    seoDescription:
      "Window and door documentation procedure for contractors: unit photos, measurements, flashing proof, trim integration, and supplement-ready opening scope.",
    relatedGuideSlugs: ["siding-envelope-documentation-guide"],
    relatedBlogSlugs: ["claim-documentation-approval-rates"],
    purpose:
      "Document each window and door opening with unit-level photos, measurements, flashing integration, and trim scope — so replacement, detach-and-reset, and envelope lines survive desk review and re-inspection.",
    whenToUse: [
      {
        condition: "Wind, hail, impact, or fire loss damages windows, doors, or surrounding trim",
        signal: "Cracked glass, frame deformation, seal failure, or heat damage at openings",
      },
      {
        condition: "Carrier estimate lists units without trim, flashing, or finish restoration",
        signal: "Window count present but interior/exterior trim lines omitted",
      },
      {
        condition: "Full-frame replacement proposed versus sash-only carrier scope",
        signal: "Frame rot, seal failure, or code requires full unit replacement",
      },
      {
        condition: "Re-inspection scheduled for opening scope disputes",
        signal: "Denied window lines or quantity mismatch on sketch",
      },
    ],
    requiredDocumentation: [
      {
        id: "unit-photos",
        label: "Interior and exterior photos per opening",
        required: true,
        detail: "Wide context plus glass, frame, sill, and head close-ups.",
      },
      {
        id: "unit-measurements",
        label: "Rough opening and unit measurements per opening",
        required: true,
      },
      {
        id: "damage-type",
        label: "Damage type noted — glass, frame, seal, operation, surrounding trim",
        required: true,
      },
      {
        id: "flashing-trim",
        label: "Flashing and trim integration photos before unit removal",
        required: true,
      },
      {
        id: "label-spec",
        label: "Manufacturer label or spec when available",
        required: false,
        detail: "Helps match like-kind quality and supports full-frame versus sash decisions.",
      },
      {
        id: "opening-index",
        label: "Opening index tying photos to sketch labels",
        required: true,
        detail: "Window/door ID consistent across photos, sketch, and estimate.",
      },
    ],
    steps: [
      {
        id: "index-openings",
        title: "Index openings and match sketch labels",
        owner: "field",
        actions: [
          "Assign consistent opening IDs — W1, W2, D1 — matching carrier sketch when possible.",
          "Photograph interior and exterior of each unit with ID visible in notes or photo label.",
          "Record room location and elevation for each opening.",
        ],
      },
      {
        id: "document-damage",
        title: "Document damage type and operation failure",
        owner: "field",
        actions: [
          "Capture glass, frame, sill, head, and seal condition with close-ups.",
          "Note operation failure, lock damage, and surrounding trim or drywall impact.",
          "Photograph heat or smoke damage at openings on combined fire losses.",
        ],
      },
      {
        id: "measure-units",
        title: "Measure units and rough openings",
        owner: "field",
        actions: [
          "Record unit size and rough opening dimensions per indexed opening.",
          "Note full-frame versus sash replacement recommendation with visible damage proof.",
          "Document egress, tempered glass, or code-driven requirements when triggered.",
        ],
      },
      {
        id: "capture-integration",
        title: "Capture flashing and trim integration before removal",
        owner: "field",
        actions: [
          "Photograph exterior trim, siding interface, and head flashing before tear-out.",
          "Document interior casing, stool, and apron condition.",
          "Coordinate with siding envelope guide when wall cladding is removed around opening.",
        ],
        notes:
          "Detach-and-reset and finish carpentry lines need integration photos — not unit count alone.",
      },
      {
        id: "reconcile-submit",
        title: "Reconcile to estimate and package supplement",
        owner: "office",
        actions: [
          "Compare opening count and line items to carrier estimate window and door section.",
          "Queue supplement for omitted trim, flashing, detach-and-reset, or full-frame scope.",
          "Attach opening index to cover letter with photo-to-line-item map.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "opening-id-match",
        label: "Opening IDs consistent across photos, sketch, and estimate",
        required: true,
      },
      {
        id: "interior-exterior",
        label: "Each opening has interior and exterior photo set",
        required: true,
      },
      {
        id: "trim-flashing",
        label: "Trim and flashing integration photographed before removal",
        required: true,
      },
      {
        id: "frame-proof",
        label: "Full-frame replacement claims include frame damage close-ups",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Window count on estimate without per-opening photos",
        impact: "Quantity and replacement type disputes on re-inspection.",
        correction: "Index and photograph every opening interior and exterior.",
      },
      {
        mistake: "Sash replacement assumed when frame rot or seal failure requires full unit",
        impact: "Full-frame supplements denied without frame damage proof.",
        correction: "Close photos of frame, sill, and seal with full-unit recommendation note.",
      },
      {
        mistake: "Trim and finish restoration omitted from documentation",
        impact: "Interior casing and exterior trim lines denied as included in window line.",
        correction: "Photograph casing, stool, apron, and exterior trim before removal.",
      },
      {
        mistake: "Opening labels differ between field photos and carrier sketch",
        impact: "Desk reviewers cannot match evidence to line items.",
        correction: "Reconcile opening IDs at intake and annotate sketch variances in cover letter.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier lists sash replacement but frame damage requires full unit",
        documentation: "Frame and sill close-ups with opening index reference.",
        lineItemHint: "Full-frame window or door unit replacement",
      },
      {
        trigger: "Estimate omits detach-and-reset for siding and trim around openings",
        documentation: "Integration photos showing cladding and trim removal scope.",
        lineItemHint: "Detach and reset siding, trim, and flashing at openings",
      },
      {
        trigger: "Code or manufacturer spec requires upgraded unit type",
        documentation: "Code citation, permit note, or manufacturer requirement with opening photos.",
        lineItemHint: "Tempered glass, egress, or efficiency upgrade lines",
      },
    ],
    relatedResources: [
      {
        label: "Siding and envelope documentation guide",
        href: "/resources/guides/exterior-restoration/siding-envelope-documentation-guide",
      },
      {
        label: "How documentation improves approvals",
        href: "/resources/blog/claim-documentation-approval-rates",
      },
    ],
    faq: [
      {
        question: "What photos are required for each window or door opening?",
        answer:
          "Interior and exterior wide context, glass and frame close-ups, sill and head detail, trim integration, and manufacturer label when accessible — all tied to a consistent opening ID.",
      },
      {
        question: "When does full-frame replacement need separate documentation from sash swap?",
        answer:
          "When frame rot, seal failure, deformation, or code requires full unit — provide frame damage close-ups and rough opening measurements; sash-only macros will not suffice.",
      },
    ],
  }),
] as const satisfies readonly Guide[];
