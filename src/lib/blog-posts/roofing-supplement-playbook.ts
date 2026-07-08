import type { BlogPost } from "@/lib/blog-types";

export const roofingSupplementPlaybook: BlogPost = {
  slug: "roofing-supplement-playbook",
  title: "Roofing Supplement Playbook for Contractors",
  excerpt:
    "The contractor playbook for roofing supplements: how roof claims are under-scoped, line items carriers miss, documentation that wins approvals, the supplement process, denials, and performance-aligned recovery.",
  category: "roofing-claims",
  tags: [
    "Roofing Supplements",
    "Storm Claims",
    "Xactimate",
    "Documentation",
    "Roof Replacement",
    "Insurance Claims",
  ],
  publishedAt: "2026-06-04",
  readingTimeMinutes: 21,
  visualVariant: "redGlow",
  recommended: true,
  authorId: "claims-ninja-editorial",
  seoTitle: "Roofing Supplement Playbook for Contractors",
  seoDescription:
    "Roofing supplement playbook for contractors: identify missed roof line items, document storm and replacement claims, submit supplements, and improve carrier approval rates.",
  relatedPostSlugs: [
    "what-is-a-roof-supplement",
    "insurance-supplementing-guide-contractors",
    "xactimate-estimate-review-checklist-contractors",
    "claim-documentation-approval-rates",
  ],
  faq: [
    {
      question: "What is a roofing supplement?",
      answer:
        "A roofing supplement is a formal request to revise a carrier's roof estimate when documented scope, quantities, code requirements, or unit pricing do not match the work required for a proper install. It adds or corrects line items — steep charges, ice barrier, ventilation, flashing, and similar — rather than opening a new claim.",
    },
    {
      question: "How long do roofing supplements take?",
      answer:
        "Well-documented residential roof supplements often resolve in one to three weeks after submission, depending on carrier, adjuster workload, and whether a re-inspection is required. Incomplete photo sets, sketch mismatches, or missing code citations are the most common causes of delay — not carrier hostility alone.",
    },
    {
      question: "Can contractors submit roofing supplements?",
      answer:
        "Yes. Roofing contractors routinely submit supplements directly when they have estimate literacy, consistent documentation, and capacity for adjuster follow-up. Many storm operators partner with supplement specialists when volume spikes or denial rates threaten margin on high-square-count jobs.",
    },
    {
      question: "What line items are most often missed on roof claims?",
      answer:
        "Steep and high charges, drip edge, starter strip, ridge cap, ice and water shield in valleys and eaves, balanced ventilation, valley metal, flashing at walls and penetrations, detach and reset for HVAC or solar, and waste factors on complex cut-up roofs. Field shingle quantity can look complete while accessories erode margin.",
    },
    {
      question: "Why are roofing supplements denied?",
      answer:
        "Denials cluster around weak documentation, preference upgrades without policy support, blanket code arguments without jurisdiction proof, O&P claimed without trade coordination basis, and tone that sounds positional instead of factual. Partial approvals are common — track accepted lines and resubmit only what remains defensible.",
    },
    {
      question: "What documentation improves roofing supplement approvals?",
      answer:
        "Elevation and tear-off photos, labeled pitch documentation, third-party measurement reports reconciled to the carrier sketch, manufacturer specs, permit requirements, and a revised estimate that mirrors the photo narrative. Daily capture during production beats assembling evidence after install.",
    },
    {
      question: "How much revenue is commonly missed on roofing claims?",
      answer:
        "There is no fixed percentage — it varies by carrier, roof complexity, and review discipline. Teams that skip estimate review within 48 hours of receipt routinely leave accessories, waste, and code-driven items unpaid. Across a storm book, those gaps compound into material annual margin loss.",
    },
    {
      question: "When should a roofing supplement be submitted?",
      answer:
        "Submit when you can document a gap between the carrier estimate and required scope — ideally before tear-off completes unpaid work. Compare the estimate to measurements and field conditions in the first few business days. Waiting until final invoice usually means labor and material are already sunk.",
    },
    {
      question: "What is the difference between a roof supplement and a re-inspection?",
      answer:
        "A re-inspection is a site visit that may produce new observations; a supplement is the formal estimate revision with line-item justification. Photos from a re-inspection support a supplement, but payment follows the written estimate and documentation package — not the visit alone.",
    },
  ],
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      paragraphs: [
        "Storm season and everyday replacement work share the same financial risk: the carrier's roof estimate sets payment, but your crew installs to code, manufacturer specs, and local market reality. When those versions diverge, margin leaves on accessories, waste, steep labor, and documentation gaps — not because the carrier refused every line, but because the approved scope never included the work.",
        "This roofing supplement playbook is built for owners, estimators, and supplement leads who want a repeatable process — from first estimate review through submission, re-inspection, and approval. It complements the insurance supplementing pillar and the Xactimate checklist: this guide is roofing-trade and workflow authority; those resources cover cross-trade fundamentals and line-by-line estimate review.",
        "The standard throughout is documentation-first supplementing roofing claims. You are aligning payment with provable work, not inflating losses.",
        "Whether you run a few storm crews or a multi-state roofing operation, the playbook sections below follow the same order your supplement lead should use on every file: understand the estimate, verify line items, document during tear-off, submit cleanly, and follow up until scope matches the roof you installed.",
      ],
      links: [
        {
          label: "Complete insurance supplementing guide",
          href: "/resources/blog/insurance-supplementing-guide-contractors",
        },
        { label: "Claims FAQ", href: "/faq" },
      ],
    },
    {
      id: "what-is-a-roofing-supplement",
      heading: "What is a roofing supplement?",
      paragraphs: [
        "A roofing supplement amends an existing property claim estimate when the carrier's roof scope, quantities, unit prices, or code-driven items do not match documented field conditions. It is the same supplement mechanism used on water and fire losses, applied to steep-slope systems, ventilation, flashing, matching rules, and storm-related damage patterns.",
        "Roof supplements are not change orders in the construction sense — they are insurance claim revisions supported by photos, measurements, code references, and typically a revised Xactimate or comparable estimate. Carriers approve supplements they can explain internally; your job is to make each line item easy to defend.",
        "For a concise definition and common scope gaps, see the short primer on roof supplements. This playbook goes deep on process, line items, denials, and recovery economics.",
      ],
      links: [
        {
          label: "What is a roof supplement?",
          href: "/resources/blog/what-is-a-roof-supplement",
        },
      ],
    },
    {
      id: "why-roofing-under-scoped",
      heading: "Why roofing claims are commonly under-scoped",
      paragraphs: [
        "Roof claims are high-volume after weather events. Carriers and independent adjusters optimize for throughput: template macros, satellite or aerial sketches, and desk review when ladder access is limited. That produces consistent estimates across thousands of files but understates job-specific pitch, cut-up complexity, and regional material markets.",
        "Under-scoping is structural, not necessarily adversarial. Junior adjusters may omit uncertain line items rather than exceed payment authority. Remote estimating misses layered assemblies — multiple courses, hidden decking damage, or specialty underlayment — until tear-off, which is exactly when contractors need supplements filed early.",
        "Roofing contractors who treat the carrier estimate as final absorb steep charges, ice barrier, ventilation upgrades, and detach-and-reset work as unpaid labor. Teams that review within 48 hours and document during production convert the same jobs into defensible supplementing roofing claims.",
        "After hail and wind events, supplement volume spikes while adjuster staffing does not. Files reviewed in batch a week later lose the best evidence window. Build storm playbooks into your CRM: estimate received date, review owner, supplement submitted date, and approval outcome — so you can measure which carriers and line items return margin.",
      ],
      callout: {
        title: "Revenue recovery opportunities",
        body: "The highest-return habit on roof files is comparing sketch squares and accessory lines to your measurement report before ordering materials. One corrected steep charge or ice-barrier run on a busy storm season pays for review discipline across dozens of jobs.",
      },
    },
    {
      id: "how-carrier-roof-estimates-created",
      heading: "How carrier roof estimates are created",
      paragraphs: [
        "Adjusters build roof estimates in Xactimate from inspection notes, photos, and sketch dimensions — sometimes aerial-only. Price list date, macro assemblies, and default waste percentages drive quantities. F9 notes explain narrative but do not replace missing line items.",
        "Sketch errors cascade: understated squares reduce field shingles, ridge, starter, and waste simultaneously. Carriers may collapse hips, valleys, and ridges into simplified geometry that does not match your report. Insurance roofing estimate review means reconciling their model to yours before production commits.",
        "File authority tiers affect which lines appear on first submission. Lines an adjuster is unsure about may be omitted pending documentation — your supplement package supplies that documentation.",
      ],
      links: [
        {
          label: "Xactimate estimate review checklist",
          href: "/resources/blog/xactimate-estimate-review-checklist-contractors",
        },
      ],
    },
    {
      id: "commonly-missed-roofing-line-items",
      heading: "Most commonly missed roofing line items",
      paragraphs: [
        "Carrier roof estimates often include field shingles while omitting accessories and labor modifiers that complete a code-compliant, manufacturer-warranted install. Walk the items below against every file; for cross-trade Xactimate checks, use the dedicated checklist.",
      ],
      callout: {
        title: "Commonly missed line items",
        body: "On most residential storm and replacement files, verify steep/high, drip edge, starter, ridge cap, ice and water shield, and ventilation before debating exotic scope. Those six categories account for a disproportionate share of unpaid roofing labor.",
      },
      links: [
        {
          label: "Xactimate estimate review checklist",
          href: "/resources/blog/xactimate-estimate-review-checklist-contractors",
        },
      ],
    },
    {
      id: "missed-starter",
      heading: "Starter strip",
      level: 3,
      paragraphs: [
        "Starter courses at eaves and rakes are separate from field shingles on architectural systems. Verify linear feet against measurement — not implied inside shingle quantity.",
        "Carriers often omit starter on partial slope repairs when macros assume a minimal replace area. Document perimeter requirements for the full affected elevation.",
      ],
    },
    {
      id: "missed-drip-edge",
      heading: "Drip edge",
      level: 3,
      paragraphs: [
        "Drip edge at eaves and rakes is required by many codes and manufacturer specs on full replacements. Match eave and rake linear feet to the sketch; missing drip edge is a recurring roof insurance supplement miss.",
        "On tie-in repairs, document why drip edge must be replaced or integrated at transitions — not reused from damaged sections.",
      ],
    },
    {
      id: "missed-ridge-cap",
      heading: "Ridge cap",
      level: 3,
      paragraphs: [
        "Ridge cap quantity should equal hip and ridge length from the measurement report. Miscategorized hips can understate cap when the sketch treats complex geometry as simple ridge.",
        "Confirm cap profile matches the specified shingle line — architectural systems need matching cap products, not three-tab defaults.",
      ],
    },
    {
      id: "missed-ice-water",
      heading: "Ice and water barrier",
      level: 3,
      paragraphs: [
        "Ice and water shield belongs in valleys, eaves, and penetration zones where code or manufacturer requirements apply — not only where a macro adds a token line. Document valley length and eave depth requirements for your jurisdiction.",
        "In northern climates, supplements for ice barrier are among the most defensible when permit or manufacturer specs are cited with photos of eave and valley conditions.",
      ],
    },
    {
      id: "missed-valley-metal",
      heading: "Valley metal",
      level: 3,
      paragraphs: [
        "Open valleys, closed-cut valleys, and woven valleys carry different material and labor lines. Verify valley type on site matches the estimate — switching types mid-job without estimate revision creates unpaid work.",
        "Long valley runs on complex roofs need quantity cross-checks against aerial or on-roof measurement, not rounded sketch defaults.",
      ],
    },
    {
      id: "missed-flashing",
      heading: "Flashing",
      level: 3,
      paragraphs: [
        "Step flashing, counter flashing, chimney saddles, wall head flashing, and pipe boots should match penetration and wall intersection counts. Tear-off photos showing deteriorated flashing support replacement, not reuse.",
        "Skylight and chimney details are frequent denial points without close-up photos before and after flashing work.",
      ],
    },
    {
      id: "missed-ventilation",
      heading: "Ventilation",
      level: 3,
      paragraphs: [
        "Balanced intake and exhaust may be required when decking is replaced or when code triggers full re-roof scope. Count turbines, ridge vent, soffit vents, and powered vents against manufacturer and code minimums — not a generic allowance line.",
        "Supplement ventilation as a system: intake without exhaust (or reverse) fails inspection even when a single vent line appears on the estimate.",
      ],
    },
    {
      id: "missed-steep-high",
      heading: "Steep and high charges",
      level: 3,
      paragraphs: [
        "Pitch breakpoints must match field slope. Steep and high work modifiers exist because labor, staging, and safety costs increase — they are omitted when adjusters never accessed the roof or relied on outdated aerial pitch.",
        "Label pitch on photos and align with measurement report excerpts. Pair with access constraints for multi-story or zero-lot-line jobs.",
      ],
    },
    {
      id: "missed-detach-reset",
      heading: "Detach and reset items",
      level: 3,
      paragraphs: [
        "HVAC curbs, satellite mounts, solar attachments, skylights, and specialty penetrations need detach and reset or removal lines when tear-off affects them. Storm jobs with widespread accessory counts accumulate significant unpaid labor when these are ignored.",
        "Document each unit before tear-off and note reset requirements in the supplement narrative line by line.",
      ],
    },
    {
      id: "code-upgrade-opportunities",
      heading: "Code upgrade opportunities",
      paragraphs: [
        "Building codes evolve. Repairs may trigger ice barrier in valleys, ventilation balances, underlayment upgrades, or fastening patterns not present on the pre-loss roof. Carriers may omit upgrades unless you tie each item to jurisdiction, permit expectations, and the specific assembly being replaced.",
        "Avoid blanket code arguments. Cite the amendment, inspector note, or manufacturer requirement for the opening you created during tear-off. Photos of exposed decking and prior non-compliant conditions strengthen approval.",
        "Permit and inspection fees belong in scope when documented. On roofing claim supplements, code items are among the most defensible when evidence is local and specific.",
      ],
    },
    {
      id: "waste-and-measurement",
      heading: "Waste factors and measurement issues",
      paragraphs: [
        "Waste percentage should reflect cut-up factor, valleys, hips, and material type. Complex designer shingles and multi-plane roofs need higher waste than macro defaults on simple gables.",
        "Reconcile carrier sketch squares to your measurement report — EagleView, Hover, or field measure. A five percent square gap can remove thousands in legitimate scope across shingles, felt, ice barrier, and labor.",
        "When sketch and report diverge, lead with measurement documentation in the supplement letter. Quantity disputes should be isolated from unit price disputes in adjuster communication.",
      ],
    },
    {
      id: "material-pricing-discrepancies",
      heading: "Material pricing discrepancies",
      paragraphs: [
        "Xactimate unit prices lag market spikes on lumber, plywood, and specialty shingles. Matching rules may require SKUs above generic carrier lines. Support unit price supplements with dated supplier invoices tied to specific estimate lines.",
        "Separate quantity revisions from unit price challenges in your narrative. Mixing them slows adjuster review and increases denial risk on otherwise valid roof claim documentation.",
      ],
      links: [
        {
          label: "Xactimate vs market pricing",
          href: "/resources/blog/xactimate-vs-market-pricing",
        },
      ],
    },
    {
      id: "documentation-requirements",
      heading: "Documentation requirements",
      paragraphs: [
        "Roof supplements fail or stall when evidence does not map to line items. Treat documentation as part of install scope — not paperwork after the fact. The sections below are minimum standards for carrier-ready files.",
      ],
      callout: {
        title: "Documentation tips",
        body: "Capture elevation photos, pitch labels, and wide shots of each plane before tear-off. After tear-off, photograph decking damage, flashing conditions, and ventilation before dry-in. Name files by elevation and date so adjusters can follow without a phone call.",
      },
    },
    {
      id: "photo-documentation",
      heading: "Photo documentation",
      paragraphs: [
        "Wide and close photos per elevation: slope label, eave, valley, ridge, penetrations, and prior damage. Include hail or wind indicators when relevant to covered peril arguments.",
        "Tear-off sequence photos prove decking replacement, rot, or structural issues discovered after initial estimate. Without them, post-discovery supplements face skepticism.",
        "Finished photos showing installed accessories — drip edge, ice barrier, ridge vent — close the loop between estimate lines and completed work.",
        "For hail claims, include close-ups of impact on soft metals, vents, and shingle bruising alongside test-square documentation where your process uses it. Peril-specific photos reduce debates about whether damage is cosmetic or functional.",
      ],
    },
    {
      id: "measurements-and-reports",
      heading: "Measurements and reports",
      paragraphs: [
        "Third-party roof reports strengthen supplements when carrier sketches are simplified or dated. Attach the report summary table and highlight variances in squares, ridges, hips, and valleys.",
        "Field measurements for commercial or unusual geometry should note access, parapets, and crickets omitted from aerial models. Reconciliation tables in your cover letter save adjuster time. For low-slope membrane assemblies, moisture surveys, and equipment detach-reset scope, follow the Commercial Roofing Documentation Guide. For apartment complexes, hotel campuses, office parks, and other multi-building properties, follow the Multi-Building Roofing Claims Guide. For HOA and condominium communities with governing documents and board approval requirements, follow the HOA Roofing Claims Guide.",
      ],
      links: [
        {
          label: "Commercial roofing documentation guide",
          href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
        },
        {
          label: "Multi-building roofing claims guide",
          href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
        },
        {
          label: "HOA roofing claims guide",
          href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
        },
        {
          label: "Claim documentation and approval rates",
          href: "/resources/blog/claim-documentation-approval-rates",
        },
      ],
    },
    {
      id: "code-references",
      heading: "Code references",
      paragraphs: [
        "Attach jurisdiction-specific citations only when triggered by scope of repair — not as a generic add-on list. Inspector comments, permit applications, and manufacturer installation manuals count as supporting references.",
        "On partial repairs, explain why code requires upgrades at the boundary between new and existing materials. Matching policies and code are different arguments; keep them separate in writing.",
      ],
    },
    {
      id: "roofing-supplement-process",
      heading: "The roofing supplement process",
      paragraphs: [
        "Intake: receive carrier estimate, policy context, and contact path. Assign reviewer within 24 hours on storm volume — align with the first 48 hours carrier estimate playbook for Day 1 and Day 2 standards.",
        "Review: reconcile sketch to measurement report; walk missed line items checklist; flag code and pricing gaps.",
        "Document: complete photo set and narrative before major tear-off where possible; capture discovery during tear-off immediately.",
        "Package: revised estimate aligned to photos; cover letter mapping each requested line to evidence; invoices for unit price challenges.",
        "Submit: carrier portal or adjuster email per preference; confirm receipt.",
        "Follow up: track partial approvals; resubmit remaining lines with added evidence; schedule re-inspection only when access or discovery requires it.",
        "On multi-building commercial roofs, phase supplements by section so partial approvals fund progress without stopping the entire job. Keep a living deficiency list shared between PM and supplement lead so field discovery during tear-off routes to the estimate the same day. Index commercial files with annotated roof plans, core sample results, and HVAC inventory per the Commercial Roofing Documentation Guide.",
      ],
      links: [
        {
          label: "Commercial roofing documentation guide",
          href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
        },
        {
          label: "Insurance supplementing guide",
          href: "/resources/blog/insurance-supplementing-guide-contractors",
        },
        {
          label: "First 48 hours after a carrier estimate",
          href: "/resources/blog/first-48-hours-after-carrier-estimate",
        },
      ],
    },
    {
      id: "how-re-inspections-work",
      heading: "How re-inspections work",
      paragraphs: [
        "A re-inspection sends the adjuster or IA back to site when initial inspection missed scope, access was blocked, or tear-off revealed hidden damage. It is a tool to gather facts — not a substitute for a written supplement with line items.",
        "Request re-inspection when photos alone cannot show attic decking, multi-layer tear-off, or interior water paths from roof failures. Combine visit results with an updated estimate the same week to avoid file drift.",
        "When the carrier offers re-inspection instead of desk review, prepare the property: safe access, marked damage, and comparison photos from first inspection to present.",
        "If re-inspection results differ from your supplement, update the written estimate immediately. Adjusters rarely approve lines discussed on site but not reflected in the submitted Xactimate revision.",
      ],
    },
    {
      id: "common-denial-reasons",
      heading: "Common reasons roofing supplements are denied",
      bullets: [
        "Photos do not show the damage or assembly referenced in the supplement.",
        "Sketch quantities accepted by adjuster; no third-party measurement reconciliation provided.",
        "Preference upgrades — cosmetic shingle grade, optional accessories — without policy support.",
        "Blanket code citations without jurisdiction or triggered assembly.",
        "O&P requested on single-trade roof replacements without coordination documentation.",
        "Aggressive tone or inflated lines that damage long-term adjuster relationships.",
        "Supplement submitted after install with no pre-tear-off evidence for discovery items.",
        "Matching arguments conflated with repair scope arguments.",
      ],
      paragraphs: [
        "Treat denials as feedback on evidence gaps. Revise the package — do not resubmit the same PDF with a louder email.",
      ],
      links: [
        {
          label: "O&P on insurance claims",
          href: "/resources/blog/op-on-insurance-claims",
        },
        {
          label: "Supplement denial recovery guide",
          href: "/resources/blog/supplement-denial-recovery-guide",
        },
      ],
    },
    {
      id: "improve-approval-rates",
      heading: "How to improve approval rates",
      paragraphs: [
        "Standardize review timing: no material order on insurance work until estimate comparison is logged. Train every estimator on the same missed-line checklist, not one hero negotiator.",
        "Mirror line items to photo labels in the cover letter. Adjusters approve what they can forward to supervisors without explanation gaps.",
        "Accept partial approvals quickly and document pending lines separately. Fighting accepted scope delays the remaining valid items.",
        "Build carrier-specific notes: which adjusters want EagleView summaries, which require permit copies, which respond faster to portal uploads vs email.",
      ],
      callout: {
        title: "Approval-rate improvements",
        body: "Companies that raise approval rates fastest usually fix process — 48-hour review, labeled photos, and quantity/price arguments split — before hiring more supplement staff. Documentation discipline multiplies every negotiator you have.",
      },
      links: [
        {
          label: "How documentation improves approvals",
          href: "/resources/blog/claim-documentation-approval-rates",
        },
      ],
    },
    {
      id: "claims-ninja-roofing",
      heading: "How Claims Ninja assists roofing contractors",
      paragraphs: [
        "Claims Ninja supports roofing contractors with estimate review, supplement preparation, carrier follow-up, and documentation coaching aligned to storm volume and replacement workflows. Your crews stay on the roof; supplement strategy scales with specialists who read Xactimate daily.",
        "The platform gives visibility into claim status, communication history, and recovery progress. We integrate with how roofing operators already run jobs — photos from the field, measurements from your preferred vendor, supplements routed through adjusters professionally.",
        "We focus on defensible line items carriers can approve: steep charges, ice barrier, ventilation, flashing, and market pricing supported by invoices — not conflict for its own sake.",
      ],
      links: [
        { label: "Claims Ninja platform", href: "/platform" },
        { label: "Roofing claims solutions", href: "/solutions/roofing" },
      ],
    },
    {
      id: "performance-fee-model",
      heading: "Performance-based fee model",
      paragraphs: [
        "Claims Ninja uses performance-aligned fees so supplement economics track results. When a carrier estimate already exists, our fee is typically 15% of the documented increase we help secure — you pay on recovery, not on effort alone.",
        "In qualifying no-estimate scenarios, a 4% of RCV structure may apply depending on file type and partnership scope. Exact terms are outlined on pricing; review engagement details before your first storm deployment.",
        "For roofing contractors, this model keeps variable cost tied to storm surges instead of fixed overhead for an internal claims department that may sit idle between events.",
      ],
      links: [{ label: "View pricing", href: "/pricing" }],
    },
    {
      id: "ai-roofing-estimate-review",
      heading: "Future of AI-assisted roofing estimate review",
      paragraphs: [
        "AI will accelerate first-pass review on roof files: flagging sketch-to-measurement variance, missing accessory patterns carriers repeat, and files with highest supplement potential before estimators open Xactimate.",
        "Judgment stays human — matching rules, code interpretation, adjuster relationships, and client communication. AI screening plus estimator sign-off shortens time-to-supplement on high-volume storm books without submitting raw machine output to carriers.",
        "Claims Ninja invests in AI-assisted claim analysis to surface scope gaps early while keeping carrier-facing strategy with experienced supplement professionals.",
      ],
      callout: {
        title: "AI review insights",
        body: "Use AI to prioritize which roof files get deep review first — complex pitch, high square count, or repeated carrier omission patterns — then apply this playbook and the Xactimate checklist before submission. Never send carrier supplements without human review.",
      },
      links: [
        { label: "AI claim analysis", href: "/platform/ai-claim-analysis" },
      ],
    },
    {
      id: "final-takeaway",
      heading: "Final takeaway",
      paragraphs: [
        "Roofing supplements are a discipline: compare estimates early, document like an installer, submit line items you can prove, and follow up professionally. The playbook line items — starter through detach and reset — are where margin hides on otherwise approved shingle quantities.",
        "Use the insurance supplementing guide as your cluster pillar, the Xactimate checklist for estimate literacy, and the documentation article for approval tactics. This roofing supplement playbook ties them into a storm-ready workflow.",
        "When volume exceeds internal capacity or denial rates climb, Claims Ninja is built to help roofing contractors recover documented scope with performance-aligned economics — not unnecessary fights with adjusters.",
      ],
      links: [
        {
          label: "Complete insurance supplementing guide",
          href: "/resources/blog/insurance-supplementing-guide-contractors",
        },
        { label: "Full FAQ library", href: "/faq" },
      ],
    },
  ],
};
