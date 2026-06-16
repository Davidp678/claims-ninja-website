import type { FaqItem } from "@/lib/faq-page";

export const FAQ_ITEMS: readonly FaqItem[] = [
  // Getting Started (6)
  {
    id: "getting-started-onboarding",
    category: "getting_started",
    question: "How does Claims Ninja onboarding work?",
    answer:
      "Onboarding starts with intake — we review your operation, claim volume, and current workflow. Your team gets platform access, documentation standards, and a clear handoff process for first claim submissions. Most contractors are submitting claims within the first week, depending on claim type and scope.",
    featured: true,
    relatedLinks: [{ label: "Contact us", href: "/contact" }],
  },
  {
    id: "getting-started-field-vs-support",
    category: "getting_started",
    question: "What stays with my field team versus Claims Ninja?",
    answer:
      "Your crew handles production — mitigation, repairs, roofing, contents handling, and customer communication on site. Claims Ninja supports estimate review, supplement strategy, documentation organization, and carrier communication. You stay in control of the job; we strengthen the claim file behind you.",
    featured: true,
  },
  {
    id: "getting-started-who-for",
    category: "getting_started",
    question: "Who is Claims Ninja built for?",
    answer:
      "Claims Ninja is built for contractors, restoration companies, and property claim professionals managing insurance work at volume. If your team handles storm, water, fire, mold, or contents losses and needs stronger documentation and supplement support without building an internal claims department, the platform is designed for you.",
  },
  {
    id: "getting-started-first-claim",
    category: "getting_started",
    question: "How quickly can we submit our first claim?",
    answer:
      "After intake and workflow setup, most teams submit their first claim within a few business days. Timing depends on how quickly you can provide photos, estimates, and policy details. We walk through your first file so the process is repeatable across your book.",
    relatedLinks: [{ label: "Platform overview", href: "/platform" }],
  },
  {
    id: "getting-started-intake-info",
    category: "getting_started",
    question: "What information do you need to start a claim file?",
    answer:
      "Typical intake includes the carrier estimate or scope (if available), site photos, your contractor estimate, policyholder details, claim number, and loss type. Additional items like moisture logs, testing reports, or contents inventories may apply depending on claim type and scope.",
  },
  {
    id: "contact-response-time",
    category: "getting_started",
    question: "How quickly will someone respond?",
    answer:
      "Most inquiries submitted through our contact form or email receive a response within one business day. Complex claim reviews or partnership evaluations may take slightly longer while we review your details — we'll confirm timing when we reply.",
    relatedLinks: [{ label: "Contact us", href: "/contact" }],
  },
  {
    id: "contact-multiple-claims",
    category: "getting_started",
    question: "Can I submit multiple claims?",
    answer:
      "Yes. Contractors and partners routinely work with Claims Ninja across multiple active files. Use the contact form to describe your situation, or begin claim intake for individual files through our standard onboarding process.",
    relatedLinks: [{ label: "Contact us", href: "/contact" }],
  },
  {
    id: "contact-carrier-estimate",
    category: "getting_started",
    question: "Do I need a carrier estimate before contacting Claims Ninja?",
    answer:
      "No. You can reach out before a carrier estimate exists — we'll help you understand next steps based on your claim type and documentation. If an estimate is available, sharing it accelerates review, but it is not required to start a conversation.",
    relatedLinks: [{ label: "Contact us", href: "/contact" }],
  },
  {
    id: "getting-started-estimating-tools",
    category: "getting_started",
    question: "Can we keep using our existing estimating software?",
    answer:
      "Yes. Most partners continue using Xactimate, Symbility, or internal estimating workflows. Claims Ninja reviews and organizes what you produce — we do not require you to abandon your field tools or rewrite estimates from scratch.",
  },
  {
    id: "partner-network-strategic-partners",
    category: "getting_started",
    question: "Who are Claims Ninja's strategic partners?",
    answer:
      "Claims Ninja's strategic partner network includes ProfileGorilla (contractor reputation and review management), CORE Group (restoration industry leadership network), 911 Restoration Corporate (preferred claims settlement vendor relationship), Daylit (authorized contractor financing partner), and Morgan & Morgan (exclusive legal partner). Each partner supports a different operational need — from claim recovery and cash flow to legal escalation and business growth. Learn more at /partner-network.",
    relatedLinks: [{ label: "Partner network", href: "/partner-network" }],
  },
  {
    id: "partner-network-financing",
    category: "getting_started",
    question: "Can Claims Ninja connect contractors with financing resources?",
    answer:
      "Claims Ninja is an authorized partner with Daylit, which offers short-term financing assistance for contractor partners. When project timing, material needs, payroll, or working capital require additional support, Claims Ninja may help connect qualified contractor partners with Daylit financing resources — subject to partner approval and qualification. Financing is not guaranteed and depends on individual circumstances.",
    relatedLinks: [{ label: "Partner network", href: "/partner-network" }],
  },
  {
    id: "partner-network-legal-partner",
    category: "getting_started",
    question: "Does Claims Ninja have a legal partner?",
    answer:
      "Yes. Morgan & Morgan is Claims Ninja's exclusive legal partner. When a claim escalates beyond traditional supplement negotiation, legal support may become appropriate. Qualified clients may access preferred partner-rate legal resources when a claim requires legal escalation — such as bad faith disputes, coverage disagreements, or significant underpayment situations. Legal outcomes are not guaranteed.",
    relatedLinks: [{ label: "Partner network", href: "/partner-network" }],
  },
  {
    id: "partner-network-911-restoration",
    category: "getting_started",
    question: "What does the 911 Restoration partnership mean?",
    answer:
      "Claims Ninja serves as a preferred claims settlement resource for 911 Restoration Corporate, franchise directors, national leadership, and participating franchise operators. This relationship supports supplement strategy, documentation quality, carrier communication, and claim recovery opportunities across the 911 Restoration system.",
    relatedLinks: [{ label: "Partner network", href: "/partner-network" }],
  },
  {
    id: "partner-network-services-required",
    category: "getting_started",
    question: "Are partner network services required to work with Claims Ninja?",
    answer:
      "No. Core Claims Ninja services — documentation, supplements, carrier communication support, and claim workflow strategy — stand on their own. The partner network provides optional resources for financing, legal escalation, reputation growth, and operational support when they may add value to your operation.",
    relatedLinks: [{ label: "Partner network", href: "/partner-network" }],
  },
  {
    id: "partner-network-how-selected",
    category: "getting_started",
    question: "How does Claims Ninja select strategic partners?",
    answer:
      "Every partner in the network is selected because they solve real problems contractors face — across financing, legal escalation, reputation management, franchise operations, and restoration industry leadership. Claims Ninja prioritizes quality, fit, and measurable contractor value over partner volume.",
    relatedLinks: [{ label: "Partner network", href: "/partner-network" }],
  },
  {
    id: "partner-network-request-introduction",
    category: "getting_started",
    question: "Can contractors request an introduction to a network partner?",
    answer:
      "Yes, when appropriate. Contractors working with Claims Ninja may request an introduction to a network partner. Claims Ninja may facilitate introductions for qualified contractor partners — subject to partner approval and qualification. Using a network partner is optional and separate from your Claims Ninja fee agreement.",
    relatedLinks: [{ label: "Partner network", href: "/partner-network" }],
  },
  {
    id: "partner-network-who-eligible",
    category: "getting_started",
    question: "Do network partners work with all contractors or only Claims Ninja clients?",
    answer:
      "Network partner resources are primarily positioned for Claims Ninja contractor partners. Access varies by partner, engagement, and qualification — financing, legal, and other partner services are not automatically available to every contractor.",
    relatedLinks: [{ label: "Partner network", href: "/partner-network" }],
  },
  {
    id: "partner-network-become-partner",
    category: "getting_started",
    question: "Can my company become a Claims Ninja strategic partner?",
    answer:
      "Claims Ninja is open to exploring strategic relationships with organizations that support contractor growth, claim outcomes, financing, legal resources, technology, or operational excellence. If your company serves restoration companies, roofing operators, or insurance claim professionals, reach out through /contact to discuss partnership opportunities.",
    relatedLinks: [
      { label: "Partner network", href: "/partner-network" },
      { label: "Contact us", href: "/contact" },
    ],
  },

  // Pricing (18)
  {
    id: "pricing-fee-structure",
    category: "pricing",
    question: "How are partnership fees structured?",
    answer:
      "Fees are structured by service type — not a single flat rate on every file. Estimate writing uses tiered rates by estimate value. Insurance negotiation uses a $150 minimum plus 15% of documented settlement increase when a carrier estimate exists, or 4% of final RCV when no carrier estimate has been provided. Supplement support is 15% of the documented increase approved from submitted supplemental scope. Additional services such as appraisal support or EagleView reports are quoted based on claim complexity.",
    featured: true,
    relatedLinks: [{ label: "Pricing", href: "/pricing" }],
  },
  {
    id: "pricing-estimate-writing",
    category: "pricing",
    question: "How are estimate writing fees calculated?",
    answer:
      "Estimate writing rates are tiered by estimate value: $100 minimum for estimate value under $12,500; 1.25% for $12,500–$100,000; 0.75% for $100,001–$200,000; and 0.50% for estimate value over $200,000. Estimate invoices are issued upon completion and client approval through the Client Portal.",
    relatedLinks: [{ label: "Pricing", href: "/pricing" }],
  },
  {
    id: "pricing-minimum-fees",
    category: "pricing",
    question: "Are there minimum fees?",
    answer:
      "Yes. Estimate writing has a $100 minimum for estimate value under $12,500. Insurance negotiation has a $150 minimum fee. These minimums apply before percentage-based calculations on larger scopes.",
    relatedLinks: [{ label: "Pricing", href: "/pricing" }],
  },
  {
    id: "pricing-15-percent",
    category: "pricing",
    question: "When does the 15% documented increase fee apply?",
    answer:
      "The 15% fee applies to the documented settlement increase above the carrier's original estimate when a carrier estimate is available — through insurance negotiation. It also applies to supplement support: 15% of the documented increase approved by the insurance carrier from submitted supplemental scope. The fee is tied to carrier-approved increases, not gross invoice totals.",
    relatedLinks: [{ label: "Pricing", href: "/pricing" }],
  },
  {
    id: "pricing-4-percent-rcv",
    category: "pricing",
    question: "When does the 4% of RCV fee apply?",
    answer:
      "The 4% of final RCV settlement fee applies to insurance negotiation when no carrier estimate has been provided by the carrier. This structure is used in qualifying no-estimate scenarios so your team understands the fee basis before work proceeds.",
    relatedLinks: [{ label: "Pricing", href: "/pricing" }],
  },
  {
    id: "pricing-when-charged",
    category: "pricing",
    question: "When are fees invoiced?",
    answer:
      "Estimate invoices are issued upon completion and client approval through the Client Portal. Negotiation and supplement invoices are issued after successful negotiation and final approval. Invoices are due immediately once approved.",
    relatedLinks: [{ label: "Pricing", href: "/pricing" }],
  },
  {
    id: "pricing-payment-processing",
    category: "pricing",
    question: "Are there payment processing fees?",
    answer:
      "ACH is available as a free payment processing option — no processing fee. Credit card payments include a 3% convenience fee. Payment is processed through the method on file after invoice approval.",
    relatedLinks: [
      { label: "Pricing", href: "/pricing" },
      { label: "Billing & Payments", href: "/platform/billing-payments" },
    ],
  },
  {
    id: "pricing-additional-services",
    category: "pricing",
    question: "What additional service fees may apply?",
    answer:
      "Appraisal services are typically $500–$1,200 depending on claim complexity and scope. EagleView reports, when required for roofing documentation, are $60 per project. These are quoted or pass-through fees separate from core estimate, negotiation, and supplement rates.",
    relatedLinks: [{ label: "Pricing", href: "/pricing" }],
  },
  {
    id: "pricing-volume",
    category: "pricing",
    question: "Do you offer volume-based partnership tiers?",
    answer:
      "Pricing is structured by service type and claim scope rather than generic volume tiers. Your team selects estimate writing, supplement support, negotiation, or advanced services as needed — with rates defined before work begins. Contact us to discuss how pricing applies across your book of business.",
    relatedLinks: [{ label: "Pricing", href: "/pricing" }],
  },
  {
    id: "pricing-hidden-fees",
    category: "pricing",
    question: "Are there hidden markups or pass-through charges?",
    answer:
      "No hidden markups on line items. Fees are defined in your partnership terms — tied to documented recovery or agreed RCV basis depending on claim type and scope. Your team sees what was pursued, what was approved, and what was billed.",
  },
  {
    id: "billing-how-paid",
    category: "pricing",
    question: "How does Claims Ninja get paid?",
    answer:
      "Fees depend on the service performed — tiered estimate writing rates, negotiation percentages, or supplement recovery fees. Invoices are issued after work is completed and approved, then paid via ACH (no processing fee) or credit card (3% convenience fee).",
    relatedLinks: [
      { label: "Pricing", href: "/pricing" },
      { label: "Billing & Payments", href: "/platform/billing-payments" },
    ],
  },
  {
    id: "billing-percentage-charged",
    category: "pricing",
    question: "What percentage does Claims Ninja charge?",
    answer:
      "Percentages vary by service: estimate writing uses tiered rates from 0.50% to 1.25% by estimate value (with a $100 minimum on smaller files). Negotiation is 15% of documented settlement increase when a carrier estimate exists, or 4% of final RCV when none has been provided. Supplements are 15% of the carrier-approved increase from submitted supplemental scope.",
    relatedLinks: [{ label: "Pricing", href: "/pricing" }],
  },
  {
    id: "billing-upfront-fees",
    category: "pricing",
    question: "Do I pay anything upfront?",
    answer:
      "In most cases, no upfront fees are required. Our compensation is typically tied to successful claim outcomes.",
  },
  {
    id: "billing-fee-calculated",
    category: "pricing",
    question: "How is the fee calculated?",
    answer:
      "Estimate writing fees use tiered percentages by estimate value or a $100 minimum on smaller scopes. Negotiation fees use a $150 minimum plus 15% of documented settlement increase above the carrier's original estimate, or 4% of final RCV when no carrier estimate exists. Supplement fees are 15% of the increase approved from submitted supplemental scope.",
    relatedLinks: [{ label: "Pricing", href: "/pricing" }],
  },
  {
    id: "billing-payment-due",
    category: "pricing",
    question: "When is payment due?",
    answer:
      "Invoices are due immediately once approved. Estimate invoices are issued upon completion and client approval. Negotiation and supplement invoices are issued after successful negotiation and final approval.",
    relatedLinks: [{ label: "Pricing", href: "/pricing" }],
  },
  {
    id: "billing-long-term-contracts",
    category: "pricing",
    question: "Are there long-term contracts?",
    answer:
      "No. Contractors engage Claims Ninja on a claim-by-claim basis or through ongoing partnership arrangements depending on their operational needs.",
  },
  {
    id: "billing-selective-claims",
    category: "pricing",
    question: "Can I use Claims Ninja for only certain claims?",
    answer:
      "Yes. Many contractors use Claims Ninja selectively on complex, high-value, or resource-intensive claims.",
  },
  {
    id: "billing-replace-estimator",
    category: "pricing",
    question: "Does Claims Ninja replace my internal estimator?",
    answer:
      "No. Claims Ninja can supplement existing teams, act as an overflow resource, or function as a complete outsourced claims department.",
  },

  // Insurance Supplements (7)
  {
    id: "supplements-whats-included",
    category: "insurance_supplements",
    question: "What is included in supplement support?",
    answer:
      "Supplement support includes scope review, line-item analysis, documentation guidance, and carrier-ready supplement submissions. Expert teams identify missing items, pricing gaps, and code-related opportunities — then organize the file so adjusters can review efficiently.",
    featured: true,
    relatedLinks: [{ label: "Roofing claims", href: "/solutions/roofing" }],
  },
  {
    id: "supplements-process",
    category: "insurance_supplements",
    question: "What does the supplement process look like?",
    answer:
      "We compare carrier scope to field conditions and your estimate, flag defensible line items, and build organized supplement packages with photos and notes. After your review, submissions go to the carrier with clear change summaries. Follow-up continues through adjuster responses.",
  },
  {
    id: "supplements-turnaround",
    category: "insurance_supplements",
    question: "How long does supplement preparation take?",
    answer:
      "Turnaround depends on documentation completeness and claim complexity. Straightforward scope gaps may move quickly; large commercial or multi-trade files take longer. We prioritize files based on your production schedule and carrier deadlines.",
  },
  {
    id: "supplements-who-submits",
    category: "insurance_supplements",
    question: "Who submits supplements to the carrier?",
    answer:
      "Claims Ninja prepares and submits supplement packages on your behalf, aligned to your authorization and partnership terms. Your team retains visibility through the platform — you see what went out, when, and how the carrier responded.",
    relatedLinks: [{ label: "Claim tracking", href: "/platform/claim-tracking" }],
  },
  {
    id: "supplements-documentation",
    category: "insurance_supplements",
    question: "What documentation strengthens a supplement?",
    answer:
      "Strong supplements pair line-item detail with photos, measurements, code references, manufacturer specs, and moisture or testing data where relevant. Organized narratives help adjusters understand why each item belongs on the scope — not just that it was missed.",
    relatedLinks: [
      { label: "Documentation guidance", href: "/faq#faq-category-documentation" },
      {
        label: "Insurance supplementing guide",
        href: "/resources/blog/insurance-supplementing-guide-contractors",
      },
      {
        label: "Claim documentation approval rates",
        href: "/resources/blog/claim-documentation-approval-rates",
      },
    ],
  },
  {
    id: "supplements-multiple",
    category: "insurance_supplements",
    question: "Can we submit multiple supplements on one claim?",
    answer:
      "Yes. Many claims require sequential supplements as demolition reveals additional damage or as trades complete work. We track prior submissions and carrier responses so each round stays organized and defensible.",
  },
  {
    id: "supplements-denied",
    category: "insurance_supplements",
    question: "What happens if a supplement is denied or partially approved?",
    answer:
      "We document the carrier's position, identify gaps in their reasoning, and advise on next steps — revised documentation, re-inspection requests, or escalation when appropriate. Outcomes vary by carrier and file; we focus on building the strongest record possible.",
    relatedLinks: [
      {
        label: "Supplement denial recovery guide",
        href: "/resources/blog/supplement-denial-recovery-guide",
      },
    ],
  },
  {
    id: "help-denied-supplements",
    category: "insurance_supplements",
    question: "Can Claims Ninja help with denied supplements?",
    answer:
      "Yes. We review denial language, identify documentation gaps, organize resubmission packages, and advise on re-inspection when site conditions require it. Recovery varies by carrier and file — we focus on building the strongest record possible.",
    relatedLinks: [
      {
        label: "Supplement denial recovery guide",
        href: "/resources/blog/supplement-denial-recovery-guide",
      },
      {
        label: "Insurance supplementing guide",
        href: "/resources/blog/insurance-supplementing-guide-contractors",
      },
    ],
  },
  {
    id: "help-missed-line-items",
    category: "insurance_supplements",
    question: "Can Claims Ninja help contractors identify missed line items?",
    answer:
      "Yes. We compare carrier estimates to field scope and your documentation to flag defensible gaps — quantities, trade separation, code items, and documentation-supported scope. AI-assisted review can accelerate first-pass triage; expert teams validate before carrier submission.",
    relatedLinks: [
      {
        label: "Xactimate estimate review checklist",
        href: "/resources/blog/xactimate-estimate-review-checklist-contractors",
      },
      {
        label: "Why carrier estimates miss line items",
        href: "/resources/blog/why-carrier-estimates-miss-line-items",
      },
      { label: "AI claim analysis", href: "/platform/ai-claim-analysis" },
    ],
  },

  // Roofing Claims (6)
  {
    id: "roofing-carrier-documentation",
    category: "roofing_claims",
    question: "What documentation do carriers expect on roofing claims?",
    answer:
      "Carriers expect photos of all slopes and damage, accurate measurements, line items aligned to how the roof was built, and code-related accessories where applicable. Supplement opportunities often hinge on drip edge, ice and water shield, ventilation, steep charges, and waste factors documented clearly.",
    featured: true,
    relatedLinks: [{ label: "Roofing solutions", href: "/solutions/roofing" }],
  },
  {
    id: "roofing-storm-vs-retail",
    category: "roofing_claims",
    question: "Do you support both storm restoration and retail roofing claims?",
    answer:
      "Yes. Storm books need consistency across high volume; retail jobs need precision on scope and code items. We adapt documentation and supplement strategy to how your roofing operation actually runs — residential, commercial, or both.",
    relatedLinks: [{ label: "Roofing solutions", href: "/solutions/roofing" }],
  },
  {
    id: "roofing-code-items",
    category: "roofing_claims",
    question: "How do code and compliance items get handled on roof supplements?",
    answer:
      "We review jurisdiction requirements, manufacturer specs, and field conditions to identify code-driven line items carriers often omit. Items like drip edge, starter course, ice barrier, and ventilation are evaluated based on what the job requires — not automatically added to every file.",
  },
  {
    id: "roofing-commercial",
    category: "roofing_claims",
    question: "Can you support commercial roofing claims?",
    answer:
      "Yes. Commercial roofing often involves membranes, coatings, metal systems, and larger scopes with heavier documentation requirements. We organize complex estimates and trade coordination so carrier review stays manageable.",
    relatedLinks: [{ label: "Roofing solutions", href: "/solutions/roofing" }],
  },
  {
    id: "roofing-measurements",
    category: "roofing_claims",
    question: "How important are roof measurements and waste factors?",
    answer:
      "Accurate measurements anchor defensible quantity arguments. Waste, pitch, and cut-up factors should reflect actual roof geometry — not generic defaults. We compare carrier quantities to field documentation and flag gaps worth pursuing.",
  },
  {
    id: "roofing-op",
    category: "roofing_claims",
    question: "When is overhead and profit relevant on roofing claims?",
    answer:
      "O&P depends on carrier guidelines, number of trades, and how the claim is structured. We evaluate whether O&P applies to your file and document the basis when pursuing it — outcomes vary by carrier and claim circumstances.",
  },

  // Water Damage Claims (23)
  {
    id: "water-mitigation-scope",
    category: "water_damage_claims",
    question: "How do you support water mitigation and reconstruction claims?",
    answer:
      "We review mitigation invoices, drying logs, moisture readings, and rebuild scopes for completeness. Common gaps include equipment days, containment, antimicrobial treatment, demolition, and rebuild line items carriers trim on first pass.",
    relatedLinks: [{ label: "Water damage solutions", href: "/solutions/water-damage" }],
  },
  {
    id: "water-drying-documentation",
    category: "water_damage_claims",
    question: "What drying documentation do carriers review most closely?",
    answer:
      "Daily moisture logs, equipment placement photos, atmospheric readings, and clear drying goals carry weight in review. Gaps in documentation often lead to reduced equipment days or disputed mitigation charges.",
    relatedLinks: [
      {
        label: "Dry log documentation guide",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      { label: "Water damage solutions", href: "/solutions/water-damage" },
    ],
  },
  {
    id: "resources-water-mitigation-documentation",
    category: "water_damage_claims",
    question: "Do you have resources on water mitigation claim documentation?",
    answer:
      "Yes. Our contractor resources library covers water mitigation supplements, dry logs, moisture mapping, equipment charges, monitoring visits, and denial recovery — written for field and supplement teams.",
    relatedLinks: [
      {
        label: "Water mitigation supplement playbook",
        href: "/resources/blog/water-damage-mitigation-supplement-playbook",
      },
      {
        label: "Dry log documentation guide",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      {
        label: "Category 3 water damage documentation guide",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      { label: "Contractor resources", href: "/resources/blog" },
    ],
  },
  {
    id: "help-equipment-drying-documentation",
    category: "water_damage_claims",
    question: "Can Claims Ninja review equipment charges or drying documentation?",
    answer:
      "Yes. We review dry logs, moisture maps, equipment utilization, and monitoring records against carrier line items — common dispute areas on water mitigation files. Strong field documentation supports equipment days and monitoring visits at desk review.",
    relatedLinks: [
      {
        label: "Equipment charges in water damage claims",
        href: "/resources/blog/equipment-charges-water-damage-claims",
      },
      {
        label: "Dry log documentation guide",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      {
        label: "Daily monitoring documentation",
        href: "/resources/blog/daily-monitoring-documentation-best-practices",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-category-class",
    category: "water_damage_claims",
    question: "Do you help with category and class of water documentation?",
    answer:
      "Yes. We ensure field notes, photos, and line items align with how the loss was classified. Misalignment between mitigation narrative and billed scope is a common reason carriers reduce payment.",
    relatedLinks: [
      {
        label: "Category and class documentation guide",
        href: "/resources/guides/water-damage/category-class-documentation-guide",
      },
      {
        label: "Category 3 water damage documentation guide",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      { label: "Water damage solutions", href: "/solutions/water-damage" },
    ],
  },
  {
    id: "water-rebuild-supplements",
    category: "water_damage_claims",
    question: "Can supplements cover both mitigation and reconstruction?",
    answer:
      "Absolutely. Many water claims span emergency services and rebuild. We track both phases, compare carrier scopes to field conditions, and pursue missing items across mitigation and construction line items.",
  },
  {
    id: "water-emergency-vs-rebuild",
    category: "water_damage_claims",
    question: "How do you handle emergency service vs. rebuild on the same claim?",
    answer:
      "We separate mitigation documentation from rebuild estimating so carriers can follow the timeline. Clear phase separation reduces confusion when adjusters review equipment charges alongside finished reconstruction scope.",
  },
  {
    id: "water-commercial-losses",
    category: "water_damage_claims",
    question: "Do you support commercial water losses?",
    answer:
      "Yes. Commercial water claims often involve larger drying footprints, business interruption considerations, and multi-trade rebuild scopes. Documentation organization becomes critical at that scale.",
    relatedLinks: [
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Water damage solutions",
        href: "/solutions/water-damage",
      },
    ],
  },
  {
    id: "water-commercial-claims-documentation",
    category: "water_damage_claims",
    question: "How are commercial water claims documented?",
    answer:
      "Commercial water claims require zone-level documentation scaled to property footprint: intake and documentation plan, moisture maps per chamber, asset-tagged equipment records, daily dry logs, tenant impact logs on occupied properties, containment and HEPA proof, and indexed closeout packets. Treat retail, office, and multifamily losses with separate indexing per suite or unit — not residential single-file patterns.",
    relatedLinks: [
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Moisture mapping guide",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
    ],
  },
  {
    id: "water-apartment-loss-documentation",
    category: "water_damage_claims",
    question: "What documentation is required for apartment water losses?",
    answer:
      "Document each affected unit with unit number, floor, and stack position on photos, moisture maps, and dry logs. Separate in-unit scope from common areas. Maintain tenant access and impact logs aligned to monitoring visits. Capture baseline readings per unit before equipment set and terminal readings at closeout — unit-level evidence prevents proportional reductions when carriers cannot verify scope per billed unit.",
    relatedLinks: [
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Daily monitoring guide",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
    ],
  },
  {
    id: "water-multifamily-loss-documentation",
    category: "water_damage_claims",
    question: "How should multifamily water damage be documented?",
    answer:
      "Treat each affected unit as a separate drying chamber with consistent naming through maps, logs, and photos. Document vertical migration at stack boundaries and common-area scope separately from units. Coordinate access with property management and log every entry event. Phased supplements with dated map revisions when scope expands across floors or units — merged multifamily files fail desk review when unit evidence is undifferentiated.",
    relatedLinks: [
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Dry log collection guide",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
    ],
  },
  {
    id: "water-commercial-claims-scrutiny",
    category: "water_damage_claims",
    question: "Why are commercial water claims more heavily scrutinized?",
    answer:
      "Higher invoice totals trigger specialist desk review and third-party audit. Carriers reconcile equipment utilization, monitoring visits, and multi-chamber drying scope against asset-tag photos and daily logs — not estimate macros. Tenant coordination, business interruption overlap, and phased supplements add review layers residential files rarely face. Weak zone-level evidence invites proportional reductions across the entire commercial file.",
    relatedLinks: [
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Equipment charges that get cut from water claims",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-commercial-mitigation-package",
    category: "water_damage_claims",
    question: "What should be included in a commercial mitigation package?",
    answer:
      "An indexed commercial closeout packet: documentation plan, intake records, zone-level moisture maps, chronological dry logs per chamber, asset-tagged equipment proof, containment and HEPA records, tenant impact log, contents notes where applicable, terminal readings, and equipment pull documentation. Cross-reference each billed line to dated evidence by zone — not a single residential-style photo dump.",
    relatedLinks: [
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Final mitigation package FAQ",
        href: "/faq#faq-water-final-mitigation-package",
      },
    ],
  },
  {
    id: "water-tenant-impact-documentation",
    category: "water_damage_claims",
    question: "How should tenant impacts be documented?",
    answer:
      "Maintain a tenant impact log from mobilization: relocation or habitability notices, access restrictions, property management coordination, contents disruption, and communication timestamps. Photograph tenant-affected areas with unit identifiers and document authorization for access. Align log entries to unit-level mitigation records — production in occupied buildings must match access and coordination documentation at desk review.",
    relatedLinks: [
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "water-business-interruption-documentation",
    category: "water_damage_claims",
    question: "What documentation supports business interruption claims?",
    answer:
      "Mitigation contractors document contemporaneous operational impact: areas closed to business, production downtime, after-hours requirements, and phased zone release with dated photos and access logs. This supports insured BI narratives but does not replace coverage analysis between insured and carrier. Separate mitigation evidence from insured financial records — strong field documentation helps align drying timelines with business continuity without conflating claim types.",
    relatedLinks: [
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Water damage solutions",
        href: "/solutions/water-damage",
      },
    ],
  },
  {
    id: "water-commercial-claims-underpaid",
    category: "water_damage_claims",
    question: "What causes commercial water claims to be underpaid?",
    answer:
      "Common drivers: residential file structure on multi-zone footprints, equipment billed without asset-tag placement proof, monitoring gaps between chambers, multifamily units merged into single logs, missing tenant access records, and unsorted closeout packages without indexed line-item cross-reference. Carriers apply proportional reductions when any zone lacks contemporaneous evidence — organized zone-level documentation strengthens recovery and supplement arguments.",
    relatedLinks: [
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Water damage supplement denial recovery",
        href: "/resources/blog/water-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "water-category-3-qualifies",
    category: "water_damage_claims",
    question: "What qualifies as Category 3 water?",
    answer:
      "Category 3 water is grossly contaminated per IICRC definitions — common sources include sewage backup, toilet overflow, river or exterior flood intrusion, and standing water with unknown contaminant load. Assign classification at intake with source type, visible contamination, odor indicators, dwell time, and affected material porosity documented in contemporaneous notes and photos. Category 3 is not a label applied retroactively at invoice without intake evidence — desk reviewers downgrade unsupported upgrades.",
    relatedLinks: [
      {
        label: "Category 3 water damage documentation guide",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Category and class documentation guide",
        href: "/resources/guides/water-damage/category-class-documentation-guide",
      },
    ],
  },
  {
    id: "water-category-3-documentation-required",
    category: "water_damage_claims",
    question: "What documentation is required for a Category 3 water claim?",
    answer:
      "Build a file that ties production to billed scope: intake inspection notes, Category 3 source classification, affected-area inventory, labeled timestamped photos, baseline moisture map, daily dry logs, equipment placement proof, demolition and disposal records, contamination-control notes, and terminal dry-standard readings. Cross-reference each category-sensitive line item — PPE, disposal, antimicrobial, equipment days, and monitoring visits — to a document in the packet. An indexed claim file helps desk reviewers evaluate scope without requesting piecemeal follow-ups.",
    relatedLinks: [
      {
        label: "Category 3 water damage documentation guide",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Mitigation intake checklist",
        href: "/resources/guides/water-damage/mitigation-intake-checklist",
      },
    ],
  },
  {
    id: "water-category-3-invoice-reductions",
    category: "water_damage_claims",
    question: "Why are Category 3 mitigation invoices reduced by carriers?",
    answer:
      "Desk reviewers commonly cut Category 3 charges when dry logs have gaps, moisture maps do not match the carrier sketch, photos are unlabeled or post-cleanup, equipment days lack placement proof, category-sensitive lines lack intake classification evidence, or demolition scope lacks before-and-after photos. Reductions are often proportional — unsupported days or rooms get trimmed rather than fully denied. Weak documentation forces defensive supplements instead of proactive recovery on contaminated losses.",
    relatedLinks: [
      {
        label: "Category 3 water damage documentation guide",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Why Category 3 water claims get underpaid",
        href: "/resources/blog/why-category-3-water-claims-get-underpaid",
      },
    ],
  },
  {
    id: "water-moisture-maps-required",
    category: "water_damage_claims",
    question: "Are moisture maps required for water damage claims?",
    answer:
      "Carriers expect a baseline moisture map on water mitigation files — it establishes affected room count, hidden cavity moisture, and chamber design before desk review sets a template scope. Produce a sketch or software map with reading point IDs, baseline values, meter type, and room labels matching the carrier sketch and estimate. Maps drawn only at job completion or with room names inconsistent with dry logs weaken room-count and hidden-moisture arguments at supplement review.",
    relatedLinks: [
      {
        label: "Moisture mapping field procedure",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Moisture mapping best practices",
        href: "/resources/blog/moisture-mapping-best-practices-insurance-claims",
      },
      {
        label: "Moisture mapping mistakes that cost contractors money",
        href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-moisture-map-contents",
    category: "water_damage_claims",
    question: "What should a moisture map include?",
    answer:
      "Include a floor plan or site diagram with room labels matching the estimate sketch, numbered reading points with initial moisture values and meter type at each location, wet/dry boundaries and migration paths, affected material types per zone, and planned drying chambers with containment perimeters. Assign reading point IDs at intake and use the same IDs on every subsequent visit through closeout. Maps that omit hidden cavity moisture or chamber design leave dehumidifier count and extended drying arguments unsupported at desk review.",
    relatedLinks: [
      {
        label: "Moisture mapping field procedure",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Moisture mapping best practices",
        href: "/resources/blog/moisture-mapping-best-practices-insurance-claims",
      },
      {
        label: "Moisture mapping mistakes that cost contractors money",
        href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
      },
    ],
  },
  {
    id: "water-moisture-reading-frequency",
    category: "water_damage_claims",
    question: "How often should moisture readings be documented?",
    answer:
      "Capture moisture readings on every monitoring visit while equipment is running — typically once per active drying day at all active map points. Baseline readings belong on the intake map before equipment is set; subsequent visits should use the same point IDs through terminal release readings. Skipping readings on billed monitoring days or changing point IDs mid-job gives desk reviewers reason to reduce equipment days and cut monitoring charges.",
    relatedLinks: [
      {
        label: "Moisture mapping field procedure",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Daily monitoring field procedure",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
      {
        label: "Moisture mapping mistakes that cost contractors money",
        href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-dry-log-update-frequency",
    category: "water_damage_claims",
    question: "How often should dry logs be updated?",
    answer:
      "Complete a dry log entry on every active drying day while equipment is running — one entry per billed equipment day, entered on the same calendar date as the on-site visit. Gaps between monitoring trips are a common reason carriers reduce equipment days and cut monitoring charges on contaminated losses. If equipment runs on weekends or holidays, log it — silent gaps justify proportional cuts across the billing period.",
    relatedLinks: [
      {
        label: "Dry log collection field procedure",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Dry log documentation guide",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-dry-log-contents",
    category: "water_damage_claims",
    question: "What information belongs in a drying log?",
    answer:
      "Each dry log entry should include the visit date, technician name, atmospheric readings, material moisture values at all active map points, equipment type and count rows per room or chamber, drying goal status, and a progress narrative when readings plateau or regress. Document release readings at every active point before equipment pull — last-day cuts are common when terminal values are missing. Consistent point IDs from intake through closeout tie log entries to the moisture map and carrier sketch.",
    relatedLinks: [
      {
        label: "Dry log collection field procedure",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Dry log documentation guide",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-dry-log-additional-drying-days",
    category: "water_damage_claims",
    question: "How do dry logs support additional drying days?",
    answer:
      "Dry logs defend extended drying when the chronology shows materials trending toward dry standard with contemporaneous stall notes — plateau or regression readings, equipment changes, and a narrative explaining why additional days remain necessary. Document release readings at every active point before equipment pull. Carriers reduce drying duration when plateau readings are absent or gaps exist between billed days and log entries.",
    relatedLinks: [
      {
        label: "Dry log collection field procedure",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Category 3 water damage documentation guide",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-air-mover-documentation",
    category: "water_damage_claims",
    question: "How should air movers be documented?",
    answer:
      "Photograph air mover placement at initial set and after every count change or relocation — wide shots showing count per room with room labels matching the carrier sketch. Log unit counts and room assignments on the dry log for each billed day. Photograph peak deployment when unit count increases — desk reviewers reduce billed units to the highest photo-verified count. Start and end dates should tie to release readings before equipment pull.",
    relatedLinks: [
      {
        label: "Mitigation equipment documentation procedure",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Equipment charges in water damage claims",
        href: "/resources/blog/equipment-charges-water-damage-claims",
      },
      {
        label: "Equipment charges that get cut from water claims",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-dehumidifier-documentation",
    category: "water_damage_claims",
    question: "What supports dehumidifier charges?",
    answer:
      "Document dehumidifier placement with wide photos showing unit count per chamber, dry log equipment rows with type and room or chamber assignment, and chamber design from the moisture map that justifies unit count. Log runtime and environmental readings on each monitoring visit — grain depression and relative humidity trends support utilization arguments. Reconcile peak photo-verified counts and logged days to billed quantities before invoice submission.",
    relatedLinks: [
      {
        label: "Mitigation equipment documentation procedure",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Moisture mapping field procedure",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
      {
        label: "Equipment charges that get cut from water claims",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-equipment-charge-reductions",
    category: "water_damage_claims",
    question: "Why do insurance carriers reduce equipment charges?",
    answer:
      "Desk reviewers cut equipment lines when placement photos are missing or undated, dry log rows do not match billed unit counts, peak deployment is not photographed, or billed days exceed logged days. Reductions are often proportional — unsupported units or days get trimmed rather than fully denied. Office reconciliation before invoice submission catches gaps where field documentation does not support air mover, dehumidifier, or air scrubber lines.",
    relatedLinks: [
      {
        label: "Mitigation equipment documentation procedure",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Equipment charges in water damage claims",
        href: "/resources/blog/equipment-charges-water-damage-claims",
      },
      {
        label: "Equipment charges that get cut from water claims",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-containment-documentation",
    category: "water_damage_claims",
    question: "What documentation supports containment charges?",
    answer:
      "Photograph containment installation with dated images showing poly barriers, zipper doors, and chamber perimeters isolating affected zones from clean areas. Log containment setup on the dry log or job notes with chamber boundaries matching the moisture map. On Category 3 losses, tie containment scope to intake classification evidence — undocumented barriers are commonly stripped when contamination-control lines are billed without field proof.",
    relatedLinks: [
      {
        label: "Category 3 water damage documentation guide",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Daily monitoring documentation",
        href: "/resources/blog/daily-monitoring-documentation-best-practices",
      },
    ],
  },
  {
    id: "water-hepa-filtration-documentation",
    category: "water_damage_claims",
    question: "What documentation supports HEPA filtration equipment?",
    answer:
      "Photograph HEPA air scrubber placement with chamber boundaries visible in frame — unit count, exhaust routing, and negative air setup should appear in dated photos. Log scrubber runtime on the dry log for each billed day and note HEPA vacuuming areas when applicable. On Category 3 files, link filtration scope to intake classification and contamination-control notes — HEPA lines billed without setup photos and runtime logs are frequent reduction targets at desk review.",
    relatedLinks: [
      {
        label: "Category 3 water damage documentation guide",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Daily monitoring documentation",
        href: "/resources/blog/daily-monitoring-documentation-best-practices",
      },
      {
        label: "Equipment charges that get cut from water claims",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-final-mitigation-package",
    category: "water_damage_claims",
    question: "What should be included in a final mitigation documentation package?",
    answer:
      "Submit an indexed packet: intake inspection and classification, moisture maps with dated revisions, complete dry logs, labeled photo narrative, equipment placement proof, demolition and disposal records, contamination-control notes, terminal moisture readings against the dry standard, equipment pull date, and clearance photos. Cross-reference each disputed or billed line item to supporting evidence in the file. Terminal documentation closes drying duration arguments and supports final mitigation invoice submission at project closeout.",
    relatedLinks: [
      {
        label: "Category 3 water damage documentation guide",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Dry log collection field procedure",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
      {
        label: "Equipment charges that get cut from water claims",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-claim-denied-documentation",
    category: "water_damage_claims",
    question: "Why are water damage claims denied for documentation issues?",
    answer:
      "Water damage claims are denied or reduced for documentation issues when files cannot prove that covered mitigation occurred, that scope matched field conditions, or that billed lines connect to contemporaneous evidence. Missing moisture readings, incomplete maps, gapped dry logs, absent equipment photos, weak monitoring entries, unsupported Category classification, and closeout without terminal verification give desk reviewers reason to deny supplements, downgrade scope, or reject resubmission — even when field work was legitimate.",
    relatedLinks: [
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Dry log collection field procedure",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Water damage supplement denial recovery",
        href: "/resources/blog/water-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "water-mitigation-file-documentation",
    category: "water_damage_claims",
    question: "What documentation should be included in a water mitigation file?",
    answer:
      "A complete water mitigation file includes intake inspection and Category/Class classification, baseline and ongoing moisture readings at map point IDs, dated moisture maps, daily dry logs with equipment rows and atmospheric data, labeled equipment placement photos, monitoring visit entries, containment and HEPA documentation on contaminated losses, demolition and disposal records, terminal moisture readings against dry standard, equipment pull date, and clearance photos — indexed so each billed line cross-references supporting evidence.",
    relatedLinks: [
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Category/Class documentation procedure",
        href: "/resources/guides/water-damage/category-class-documentation-guide",
      },
      {
        label: "Moisture mapping field procedure",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
    ],
  },
  {
    id: "water-moisture-readings-importance",
    category: "water_damage_claims",
    question: "Why are moisture readings important for insurance claims?",
    answer:
      "Moisture readings prove wet extent at intake, track drying progress at map point IDs, and establish dry standard at closeout — without them, carriers apply template assumptions for scope, equipment duration, and room count. Baseline readings before equipment set defend affected area; ongoing readings on each monitoring visit defend equipment days; terminal release readings close duration arguments at pull. Skipping readings on billed days invites proportional cuts to drying duration and equipment utilization.",
    relatedLinks: [
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Moisture mapping field procedure",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "How often should moisture readings be documented?",
        href: "/faq#faq-water-moisture-reading-frequency",
      },
    ],
  },
  {
    id: "water-missing-daily-monitoring",
    category: "water_damage_claims",
    question: "What happens if daily monitoring records are missing?",
    answer:
      "Missing daily monitoring records produce visit-day cuts, equipment duration reductions, and supplement denials when billed monitoring lines cannot tie to technician analysis. Carriers cut equipment days when logs cannot prove continued drying need on each billed day — monitoring is labor plus interpretation, not implied in rental. Gapped chronology between visits invites proportional trimming to logged days or template dry-out duration, and resubmission with backfilled visit notes weakens supplement credibility.",
    relatedLinks: [
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Daily monitoring field procedure",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-final-drying-verification",
    category: "water_damage_claims",
    question: "Why do carriers request final drying verification?",
    answer:
      "Carriers request final drying verification because terminal moisture readings at active map point IDs — compared to dry standard for each assembly — prove the structure was dry before equipment pull and close duration arguments at closeout. Without release readings, reviewers assume dry standard was met earlier than billed, producing last-day equipment cuts. Final verification paired with pull date, clearance photos, and indexed log cross-references supports final mitigation invoice submission and defends against early dry-out disputes.",
    relatedLinks: [
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Dry log collection field procedure",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "What should be included in a final mitigation documentation package?",
        href: "/faq#faq-water-final-mitigation-package",
      },
    ],
  },
  {
    id: "water-daily-monitoring-records-importance",
    category: "water_damage_claims",
    question: "Why are daily monitoring records important?",
    answer:
      "Daily monitoring records prove a technician performed analysis on each billed visit — moisture readings at map point IDs, atmospheric data, equipment verification, and progress or stall narrative when materials plateau. Monitoring is labor plus interpretation, not implied inside equipment rental. Weak or gapped monitoring records weaken both visit labor lines and equipment duration arguments — carriers cut equipment days when logs cannot prove continued drying need on each billed day.",
    relatedLinks: [
      {
        label: "Daily monitoring field procedure",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
      {
        label: "Dry log collection field procedure",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Equipment charges that get cut from water claims",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },

  // Fire Damage Claims (5)
  {
    id: "fire-smoke-soot",
    category: "fire_damage_claims",
    question: "How are smoke and soot damage documented for carriers?",
    answer:
      "Effective files combine visual evidence, scope detail by room, cleaning method notes, and trade separation. Carriers scrutinize whether smoke damage is localized or systemic — documentation should match what your crew observed on site.",
    relatedLinks: [
      { label: "Fire damage solutions", href: "/solutions/fire-damage" },
      {
        label: "Fire damage claim documentation guide",
        href: "/resources/blog/fire-damage-claim-documentation-guide",
      },
    ],
  },
  {
    id: "resources-fire-damage-documentation",
    category: "fire_damage_claims",
    question: "Do you have resources on fire damage claim documentation?",
    answer:
      "Yes. Our contractor resources library covers fire documentation, supplements, smoke and soot evidence, HVAC contamination, odor mitigation, and supplement denial recovery — organized for restoration and supplement teams.",
    relatedLinks: [
      {
        label: "Fire damage claim documentation guide",
        href: "/resources/blog/fire-damage-claim-documentation-guide",
      },
      { label: "Contractor resources", href: "/resources/blog" },
    ],
  },
  {
    id: "fire-structural-vs-contents",
    category: "fire_damage_claims",
    question: "Do you handle structural fire damage and contents on the same file?",
    answer:
      "Yes. Fire losses often span structure, contents pack-out, and deodorization. We organize scopes so carriers can review building and contents separately while keeping the overall claim narrative coherent.",
    relatedLinks: [{ label: "Contents restoration", href: "/solutions/contents" }],
  },
  {
    id: "fire-demo-rebuild",
    category: "fire_damage_claims",
    question: "How do demolition and rebuild scopes get supplemented on fire claims?",
    answer:
      "Fire claims frequently evolve after demo reveals hidden damage. We track change orders and revised scopes so supplements reflect conditions discovered during tear-out — not just the initial adjuster walkthrough.",
  },
  {
    id: "fire-odor-deodorization",
    category: "fire_damage_claims",
    question: "Are deodorization and air quality items commonly missed?",
    answer:
      "They can be. HEPA filtration, ozone or hydroxyl treatment, sealers, and content cleaning lines are often under-scoped on first carrier estimates. We evaluate whether your documentation supports pursuing those items.",
  },
  {
    id: "fire-total-loss-partial",
    category: "fire_damage_claims",
    question: "Do you support partial fire losses and major rebuilds?",
    answer:
      "Yes. From localized kitchen fires to major structural rebuilds, supplement strategy adapts to loss severity. Larger files benefit from organized trade breakdowns and phased documentation as work progresses.",
    relatedLinks: [{ label: "Fire damage solutions", href: "/solutions/fire-damage" }],
  },

  // Mold Claims (5)
  {
    id: "mold-remediation-docs",
    category: "mold_claims",
    question: "What documentation supports mold remediation claims?",
    answer:
      "Carriers typically review moisture source documentation, remediation protocol, containment detail, air scrubbing, and clearance testing where required. Photos, room-by-room scope, and alignment with IICRC-oriented practices strengthen the file.",
    relatedLinks: [{ label: "Mold solutions", href: "/solutions/mold" }],
  },
  {
    id: "mold-testing",
    category: "mold_claims",
    question: "How do testing and clearance reports factor into mold claims?",
    answer:
      "Pre- and post-remediation testing can support scope justification and clearance verification. We help organize lab results and tie them to billed line items so adjusters understand why testing was necessary.",
  },
  {
    id: "mold-carrier-pushback",
    category: "mold_claims",
    question: "Why do carriers often push back on mold line items?",
    answer:
      "Mold coverage varies by policy and causation. Carriers question whether damage resulted from a covered water event versus long-term conditions. Strong documentation on sudden water intrusion and timely mitigation helps address those reviews.",
  },
  {
    id: "mold-containment-equipment",
    category: "mold_claims",
    question: "Are containment and air scrubbing commonly underpaid?",
    answer:
      "They can be. Negative air, HEPA filtration, and containment labor are frequently trimmed on initial scopes. We compare your field setup to carrier line items and pursue gaps when documentation supports the work performed.",
  },
  {
    id: "mold-water-relationship",
    category: "mold_claims",
    question: "Can mold supplements tie back to a water loss claim?",
    answer:
      "Yes. Mold often follows an underlying water event. Linking moisture source documentation, drying history, and remediation scope helps carriers follow the causal chain on the file.",
    relatedLinks: [{ label: "Water damage solutions", href: "/solutions/water-damage" }],
  },

  // Contents Restoration (5)
  {
    id: "contents-pack-out",
    category: "contents_restoration",
    question: "How do you support contents pack-out and cleaning claims?",
    answer:
      "We review inventories, pack-out labor, storage, cleaning method codes, and specialty item handling. Contents files fail when inventories are incomplete or cleaning lines do not match item types — we help tighten that documentation.",
    relatedLinks: [{ label: "Contents solutions", href: "/solutions/contents" }],
  },
  {
    id: "contents-inventory",
    category: "contents_restoration",
    question: "What makes a contents inventory carrier-ready?",
    answer:
      "Detailed descriptions, condition notes, photos, and consistent room labeling matter. High-value items need supporting detail. Organized inventories speed adjuster review and reduce back-and-forth on line counts.",
  },
  {
    id: "contents-storage",
    category: "contents_restoration",
    question: "Are storage and handling charges commonly disputed?",
    answer:
      "Yes. Carriers question duration, unit counts, and whether storage was necessary. Documenting pack-out timing, vault or pod usage, and return-to-site logistics helps defend those charges.",
  },
  {
    id: "contents-specialty-items",
    category: "contents_restoration",
    question: "Can you help with specialty contents like electronics or art?",
    answer:
      "We organize specialty line items with vendor quotes and handling notes where available. Specialty contents often require separate justification — generic cleaning codes rarely suffice.",
    relatedLinks: [{ label: "Contents solutions", href: "/solutions/contents" }],
  },
  {
    id: "contents-fire-water",
    category: "contents_restoration",
    question: "Do contents claims differ between fire and water losses?",
    answer:
      "Yes. Fire contents emphasize smoke residue, deodorization, and replacement vs. restore decisions. Water contents focus on contamination category, drying timelines, and salvageability. Documentation should match the loss type.",
  },

  // Carrier Negotiations (6)
  {
    id: "carrier-how-handled",
    category: "carrier_negotiations",
    question: "How does Claims Ninja handle carrier negotiations?",
    answer:
      "Expert teams engage adjusters with organized documentation, clear change summaries, and scope support backed by photos and estimates. We track responses, revise submissions when needed, and escalate through appropriate channels — always aligned to your authorization.",
    featured: true,
    relatedLinks: [{ label: "Communication hub", href: "/platform/communication-hub" }],
  },
  {
    id: "carrier-who-talks",
    category: "carrier_negotiations",
    question: "Who communicates with the adjuster on our behalf?",
    answer:
      "Claims Ninja supplement and negotiation specialists handle carrier communication within your partnership terms. Your team stays informed through the platform — you see correspondence history and status without managing every adjuster call yourself.",
    relatedLinks: [{ label: "Communication hub", href: "/platform/communication-hub" }],
  },
  {
    id: "carrier-disputes",
    category: "carrier_negotiations",
    question: "What happens when carriers dispute line items?",
    answer:
      "We document the dispute, gather supporting evidence, and respond with organized rebuttals or revised scopes. Outcomes depend on carrier guidelines and file strength — we focus on building the clearest record rather than promising specific results.",
  },
  {
    id: "carrier-reinspection",
    category: "carrier_negotiations",
    question: "Can you request re-inspections or desk reviews?",
    answer:
      "Yes, when documentation supports it. Re-inspections help when field conditions differ from the adjuster's initial scope. We coordinate requests and prepare the file so reviewers arrive with context.",
  },
  {
    id: "carrier-public-adjuster",
    category: "carrier_negotiations",
    question: "Is Claims Ninja a public adjuster?",
    answer:
      "Claims Ninja is a contractor-focused claims support platform that includes access to licensed public adjusters, estimators, supplement specialists, and other claims professionals when needed. We help contractors maximize claim recovery through documentation, estimate review, supplements, and carrier communication while supporting the overall claims process.",
  },
  {
    id: "carrier-timeline",
    category: "carrier_negotiations",
    question: "How long do carrier negotiations typically take?",
    answer:
      "Timelines vary widely by carrier, adjuster workload, and claim complexity. Simple supplement responses may resolve in days; contested commercial files can take weeks. We keep your team updated on status throughout.",
    relatedLinks: [{ label: "Claim tracking", href: "/platform/claim-tracking" }],
  },

  // Documentation (6)
  {
    id: "documentation-essentials",
    category: "documentation",
    question: "What claim documentation should our field teams capture?",
    answer:
      "At minimum: dated photos of damage and repairs, moisture readings where applicable, scope notes, and estimate detail aligned to field conditions. Strong files tell the story of what happened, what you found, and what was required to restore the property.",
  },
  {
    id: "documentation-photos",
    category: "documentation",
    question: "How should photos be organized for carrier review?",
    answer:
      "Group photos by room, elevation, or trade with clear labels and dates. Before-and-after sequences help adjusters follow the work. Random photo dumps slow review and invite scope reductions.",
  },
  {
    id: "documentation-estimates",
    category: "documentation",
    question: "Should our estimates match carrier format?",
    answer:
      "Your estimates should reflect actual field conditions and local pricing — not mirror carrier omissions. We compare your scope to the carrier file and identify defensible differences worth pursuing.",
  },
  {
    id: "documentation-moisture-logs",
    category: "documentation",
    question: "When are moisture logs required?",
    answer:
      "Moisture logs are standard on water mitigation jobs and often expected on mold-related work. Daily readings, equipment notes, and dry-standard documentation support equipment day charges and rebuild timing.",
    relatedLinks: [
      { label: "Water damage solutions", href: "/solutions/water-damage" },
      {
        label: "Moisture mapping field procedure",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Dry log documentation guide",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      {
        label: "Moisture mapping mistakes that cost contractors money",
        href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
      },
    ],
  },
  {
    id: "documentation-policyholder",
    category: "documentation",
    question: "What policyholder information should we collect early?",
    answer:
      "Claim number, policy details, contact information, date of loss, and authorization signatures when required. Early collection prevents delays when supplements or payments need carrier verification.",
  },
  {
    id: "documentation-platform-upload",
    category: "documentation",
    question: "How do we upload documentation to the platform?",
    answer:
      "Partners upload photos, estimates, and supporting files through the client portal or intake workflow established during onboarding. Organized uploads speed review — your team can batch by claim phase or trade.",
    relatedLinks: [{ label: "Client portal", href: "/platform/client-portal" }],
  },

  // Platform & Security (5)
  {
    id: "platform-data-secure",
    category: "platform_security",
    question: "Is my claim data secure on the platform?",
    answer:
      "Claim files are stored with encrypted access controls and role-based permissions. Document handling follows practices aligned to contractor and carrier workflows. Your team controls who sees what within your organization.",
    featured: true,
    relatedLinks: [{ label: "Platform overview", href: "/platform" }],
  },
  {
    id: "platform-access-controls",
    category: "platform_security",
    question: "Can we control who on our team accesses claim files?",
    answer:
      "Yes. Role-based access lets you limit visibility by user, office, or function. Owners and managers typically see full claim history; field users may see only assigned files.",
    relatedLinks: [{ label: "Client portal", href: "/platform/client-portal" }],
  },
  {
    id: "platform-claim-tracking",
    category: "platform_security",
    question: "How do we track claim status in the platform?",
    answer:
      "The claim tracking module shows file status, supplement history, carrier responses, and next steps. Your office gets visibility without chasing email threads or spreadsheet updates.",
    relatedLinks: [{ label: "Claim tracking", href: "/platform/claim-tracking" }],
  },
  {
    id: "platform-communication",
    category: "platform_security",
    question: "Does the platform centralize carrier and internal communication?",
    answer:
      "Yes. The communication hub keeps correspondence, notes, and status updates tied to each claim. Centralized history reduces miscommunication when multiple team members touch the same file.",
    relatedLinks: [{ label: "Communication hub", href: "/platform/communication-hub" }],
  },
  {
    id: "platform-data-retention",
    category: "platform_security",
    question: "How long is claim data retained?",
    answer:
      "Retention follows partnership terms and applicable data handling practices. Archived files remain accessible for reference and audit — contact us for specifics on your partnership agreement.",
    relatedLinks: [{ label: "Contact us", href: "/contact" }],
  },

  // AI Claim Analysis (5)
  {
    id: "ai-how-helps",
    category: "ai_claim_analysis",
    question: "How does AI claim analysis help my operation?",
    answer:
      "AI-assisted review scans estimates and documentation for scope gaps, pricing inconsistencies, and supplement opportunities. Expert teams validate findings before anything goes to a carrier — AI accelerates review, humans make the call.",
    featured: true,
    relatedLinks: [{ label: "AI claim analysis", href: "/platform/ai-claim-analysis" }],
  },
  {
    id: "ai-replace-experts",
    category: "ai_claim_analysis",
    question: "Does AI replace your supplement team?",
    answer:
      "No. AI is assistive — it flags items worth a closer look. Experienced supplement specialists interpret results, apply carrier context, and decide what belongs on the file. Technology speeds the process; expertise drives outcomes.",
    relatedLinks: [{ label: "AI claim analysis", href: "/platform/ai-claim-analysis" }],
  },
  {
    id: "ai-accuracy",
    category: "ai_claim_analysis",
    question: "How accurate is AI claim analysis?",
    answer:
      "AI is effective at pattern recognition across large scopes — missing line items, quantity gaps, and inconsistent pricing. It is not infallible. Every flagged item is reviewed by your Claims Ninja team before submission.",
  },
  {
    id: "ai-what-analyzed",
    category: "ai_claim_analysis",
    question: "What files can AI analyze?",
    answer:
      "Estimates, carrier scopes, photos, and structured claim documentation can feed AI review depending on claim type and scope. The system works best when intake documentation is complete and organized.",
  },
  {
    id: "ai-data-privacy",
    category: "ai_claim_analysis",
    question: "Is our claim data used to train AI models?",
    answer:
      "Your claim files are handled under partnership data practices. AI analysis runs within controlled workflows — we do not treat your proprietary claim data as public training material. Ask us for details on your agreement.",
    relatedLinks: [{ label: "Platform overview", href: "/platform" }],
  },

  // Results & Insights
  {
    id: "results-insights-what-is-page",
    category: "results_insights",
    question: "What is the Results & Insights page?",
    answer:
      "Results & Insights at /case-studies is Claims Ninja's industry intelligence hub — insights gathered from thousands of insurance claims across roofing, restoration, mitigation, reconstruction, and commercial projects. It covers recovery results by trade, common scope and pricing gaps we find, portfolio recovery reviews, and representative recovery benchmarks — not fabricated customer stories.",
    relatedLinks: [{ label: "Results & Insights", href: "/case-studies" }],
  },
  {
    id: "results-insights-real-examples",
    category: "results_insights",
    question: "Are the recovery examples based on real claims?",
    answer:
      "The recovery examples on Results & Insights are representative benchmarks drawn from aggregate claim review patterns — not fabricated customer stories with invented names or addresses. They illustrate typical recovery ranges and findings we see across reviewed files. Outcomes vary by claim type, documentation quality, carrier environment, and scope.",
    relatedLinks: [{ label: "Results & Insights", href: "/case-studies" }],
  },
  {
    id: "results-insights-recovery-increase",
    category: "results_insights",
    question: "How much can supplementing improve claim recovery?",
    answer:
      "Recovery increases vary by trade, scope, and carrier environment. Across thousands of reviewed claims, contractors partnering with Claims Ninja have seen average recovery increases of approximately 40%. Trade-specific typical improvement ranges on Results & Insights include roofing at 25%–50%, water mitigation at 20%–45%, fire restoration at 20%–40%, mold remediation at 15%–35%, reconstruction at 20%–45%, and contents restoration at 15%–35%.",
    relatedLinks: [{ label: "Results & Insights", href: "/case-studies" }],
  },
  {
    id: "results-insights-trade-opportunities",
    category: "results_insights",
    question: "Which trades see the largest recovery opportunities?",
    answer:
      "Roofing often shows the widest typical recovery improvement range at 25%–50%, driven by missing accessories, waste factors, code compliance gaps, and material pricing discrepancies. Water mitigation, fire restoration, and reconstruction commonly fall in the 20%–45% range. Mold remediation and contents restoration typically range from 15%–35%. The largest opportunity on any file depends on documentation quality, carrier scope gaps, and trade complexity — not trade alone.",
    relatedLinks: [{ label: "Results & Insights", href: "/case-studies" }],
  },
  {
    id: "results-insights-portfolio-review",
    category: "results_insights",
    question: "What is a portfolio recovery review?",
    answer:
      "A portfolio recovery review is a book-of-business analysis where Claims Ninja reviews active, closed, and underpaid claims across a contractor's operation. We evaluate estimate quality, supplement frequency, recovery percentages, carrier trends, trade-specific deficiencies, and revenue leakage opportunities. Contractors often discover systematic revenue left behind across dozens or hundreds of claims — not just one file.",
    relatedLinks: [{ label: "Results & Insights", href: "/case-studies" }],
  },
  {
    id: "results-insights-common-issues",
    category: "results_insights",
    question: "What issues does Claims Ninja commonly uncover?",
    answer:
      "Across thousands of reviewed claims, recurring deficiency categories include scope omissions (missing line items, accessory gaps, debris removal), code compliance gaps (ice and water barrier, ventilation, upgrades), pricing discrepancies (material and labor rates below market), documentation opportunities (incomplete photos, dry logs, weak narratives), O&P eligibility on multi-trade losses, and coordination costs (equipment reimbursement, supervision, general conditions).",
    relatedLinks: [{ label: "Results & Insights", href: "/case-studies" }],
  },
  {
    id: "results-insights-commercial-portfolios",
    category: "results_insights",
    question: "Do you review commercial claims portfolios?",
    answer:
      "Yes. Claims Ninja reviews commercial roofing, water, fire, mold, reconstruction, and contents portfolios — including multi-trade books with larger scopes and heavier documentation requirements. Portfolio-level review helps identify recurring estimate deficiencies, carrier-specific trends, and recovery opportunities that compound across a commercial book of business.",
    relatedLinks: [{ label: "Results & Insights", href: "/case-studies" }],
  },
  {
    id: "results-insights-book-of-business",
    category: "results_insights",
    question: "Can Claims Ninja review an entire book of business?",
    answer:
      "Yes. Claims Ninja conducts portfolio-level reviews of entire books of business — active, closed, and underpaid claims — to identify recurring scope gaps, supplement workflow issues, and aggregate recovery potential. Leadership gains visibility into patterns invisible when claims are evaluated one at a time, including revenue leakage across dozens or hundreds of files.",
    relatedLinks: [{ label: "Results & Insights", href: "/case-studies" }],
  },
] as const;
