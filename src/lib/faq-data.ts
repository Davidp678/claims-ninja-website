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
        label: "Why Fire Damage Supplements Get Denied",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
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
        label: "Why Fire Damage Supplements Get Denied",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
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
    relatedLinks: [
      { label: "Roofing solutions", href: "/solutions/roofing" },
      {
        label: "Commercial roofing documentation guide",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
    ],
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

  // Roof Matching (5)
  {
    id: "roof-matching-insurance-claim",
    category: "roofing_claims",
    question: "What is roof matching in an insurance claim?",
    answer:
      "Roof matching refers to whether replacement materials reasonably align with existing roofing in color, profile, texture, and visible appearance when a carrier approves partial repair. Disputes arise when discontinued shingles, weathered materials, or partial slope replacement leave visible differences across roof planes. Matching concerns are evaluated against field documentation, material availability, and policy language — outcomes vary by carrier and claim circumstances.",
    relatedLinks: [
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Roofing supplement checklist",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
    ],
  },
  {
    id: "roof-matching-contractor-documentation",
    category: "roofing_claims",
    question: "How should contractors document roof matching issues?",
    answer:
      "Identify the existing shingle type, manufacturer, color, style, and age; capture wide elevation and slope-by-slope photos; research material availability with dated supplier or manufacturer confirmation; document repairability concerns on brittle or fragile existing material; and build a scope comparison table tying carrier repair boundaries to field conditions. A one-page contractor narrative should link each requested scope line to specific evidence — not legal arguments or guaranteed outcomes.",
    relatedLinks: [
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Roofing claim documentation standard",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-matching-dispute-photos",
    category: "roofing_claims",
    question: "What photos help support a roof matching dispute?",
    answer:
      "Wide roof elevations from primary viewing angles, slope-by-slope photos with consistent labeling, close-up material photos for identification, side-by-side comparisons of sample shingles against existing courses in consistent lighting, and photos of transitions between the approved repair area and adjacent slopes. Damage-only close-ups without elevation context rarely support matching scope arguments at desk review.",
    relatedLinks: [
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Roof measurement documentation",
        href: "/resources/guides/roofing-claims/roof-measurement-documentation-guide",
      },
    ],
  },
  {
    id: "roof-matching-supplement-denials",
    category: "roofing_claims",
    question: "Why do carriers deny roof matching supplements?",
    answer:
      "Common denial reasons include insufficient material identification, no availability research confirming discontinued or unavailable products, weak photo evidence without elevation context, cosmetic-only damage arguments, policy language limiting matching scope, and scope requests not tied to documented field conditions. Carriers also deny when repairability concerns are asserted without photos or when partial repair is deemed sufficient based on the evidence provided — outcomes vary by carrier program and file specifics.",
    relatedLinks: [
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Roofing supplement playbook",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
  },
  {
    id: "roof-matching-discontinued-shingles",
    category: "roofing_claims",
    question: "Can discontinued shingles support a roof matching supplement?",
    answer:
      "Discontinued or unavailable shingles can support a matching supplement when documentation confirms the exact product is no longer available and comparable replacements differ in color, profile, or dimensions. Save dated manufacturer discontinuation notices, distributor availability checks, and photos showing visible differences between existing material and available alternatives. Documentation should tie availability research to specific scope lines — approval is not guaranteed and depends on carrier policy and evidence quality.",
    relatedLinks: [
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "What is a roof supplement",
        href: "/resources/blog/what-is-a-roof-supplement",
      },
    ],
  },
  {
    id: "roof-repairability-insurance-claim",
    category: "roofing_claims",
    question: "What is roof repairability?",
    answer:
      "Roof repairability describes whether existing roofing material can be partially removed, lifted, or replaced without causing additional damage to adjacent courses or compromising the roof system. It depends on documented field conditions such as material age, brittleness, seal strip adhesion, manufacturer guidance, and collateral damage risk during repair. Repairability is separate from matching — it addresses physical feasibility, not whether replacement materials align with existing appearance. Outcomes vary by carrier, policy, and evidence quality.",
    relatedLinks: [
      {
        label: "Roof repairability documentation guide",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
    ],
  },
  {
    id: "roof-repairability-contractor-documentation",
    category: "roofing_claims",
    question: "How should contractors document roof repairability?",
    answer:
      "Capture roof overview and close-up material photos; perform and document repairability testing with field notes on brittle observations, seal strip adhesion, and removal behavior; photograph collateral damage such as broken tabs, torn shingles, and nail pull-through; review manufacturer repair recommendations; and build a scope comparison table tying carrier-approved repair areas to field conditions. A one-page contractor narrative should link each repair limitation to specific evidence — not legal arguments or guaranteed outcomes.",
    relatedLinks: [
      {
        label: "Roof repairability documentation guide",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Roofing claim documentation standard",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-brittle-test-roofing",
    category: "roofing_claims",
    question: "What is a brittle test on a roof?",
    answer:
      "A brittle test evaluates how existing shingles respond when lifted or disturbed during a proposed repair. Contractors typically select a representative test area within or adjacent to the approved repair boundary and observe whether tabs crack, break, fail to reseal, or cause collateral damage to adjacent courses. Results should be documented with dated field notes and photographs of before, during, and after observations. Testing approaches vary by contractor and carrier program — the goal is objective documentation of material behavior, not adherence to one mandatory method.",
    relatedLinks: [
      {
        label: "Roof repairability documentation guide",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Roofing supplement checklist",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
    ],
  },
  {
    id: "roof-repairability-documentation-evidence",
    category: "roofing_claims",
    question: "What documentation supports roof repairability concerns?",
    answer:
      "A complete repairability package includes roof overview photos, close-up material condition shots, test square documentation with brittle observations, collateral damage photos, manufacturer identification and repair guidance, dated field notes, a contractor narrative, and a scope comparison linking evidence to estimate lines. Each repair limitation should reference specific photos or test results — unsupported conclusions rarely survive desk review.",
    relatedLinks: [
      {
        label: "Roof repairability documentation guide",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Roof measurement documentation",
        href: "/resources/guides/roofing-claims/roof-measurement-documentation-guide",
      },
    ],
  },
  {
    id: "roof-repairability-carrier-disputes",
    category: "roofing_claims",
    question: "Why do carriers dispute roof repairability?",
    answer:
      "Carriers commonly dispute repairability when documentation lacks test observations, photos do not show collateral damage, material identification is missing, narratives assert brittleness without field evidence, or scope requests are not tied to documented repair limitations at the approved boundary. Adjusters may also argue partial repair is sufficient based on their own field assessment or policy language. Strong documentation with dated test results, indexed photos, and scope comparison tables improves communication during review — approval is not guaranteed.",
    relatedLinks: [
      {
        label: "Roof repairability documentation guide",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Roofing supplement playbook",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
  },
  {
    id: "roof-reinspection-when-request",
    category: "roofing_claims",
    question: "When should contractors request a roof reinspection?",
    answer:
      "Request a roof reinspection when the carrier estimate does not reflect documented field conditions — missed storm damage, additional affected slopes, matching or repairability concerns, code upgrade omissions, or scope gaps identified after the initial inspection. Build the complete documentation package before requesting the visit, not after scheduling. Reinspection is most effective when photos, scope comparison, and narrative are indexed and ready for adjuster review — outcomes vary by carrier and evidence quality.",
    relatedLinks: [
      {
        label: "Roof reinspection guide",
        href: "/resources/guides/roofing-claims/roof-reinspection-guide",
      },
      {
        label: "Roofing supplement checklist",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
    ],
  },
  {
    id: "roof-reinspection-documentation-prep",
    category: "roofing_claims",
    question: "What documentation should be prepared for a roof reinspection?",
    answer:
      "Assemble roof overview and slope-by-slope photos, close-up damage shots, soft metal documentation, material identification, matching and repairability records when applicable, a carrier estimate comparison table, a contractor narrative summary, and supplement support notes indexed to estimate lines. Complete the packet before requesting reinspection so the adjuster arrives with context — not legal arguments or guaranteed outcomes.",
    relatedLinks: [
      {
        label: "Roof reinspection guide",
        href: "/resources/guides/roofing-claims/roof-reinspection-guide",
      },
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
    ],
  },
  {
    id: "roof-reinspection-missed-damage",
    category: "roofing_claims",
    question: "Can missed roof damage be documented after the initial inspection?",
    answer:
      "Yes — contractors can document additional hail, wind, or impact damage discovered after the carrier's initial visit using dated slope-labeled photos, close-up damage shots, measurement data, and a scope comparison showing what was omitted from the carrier estimate. Documentation should be captured as soon as damage is identified and organized before requesting reinspection. Carriers evaluate post-inspection documentation against evidence quality and timing — approval is not guaranteed.",
    relatedLinks: [
      {
        label: "Roof reinspection guide",
        href: "/resources/guides/roofing-claims/roof-reinspection-guide",
      },
      {
        label: "Roof repairability documentation guide",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
    ],
  },
  {
    id: "roof-reinspection-denial-reasons",
    category: "roofing_claims",
    question: "Why do carriers deny roof reinspection requests?",
    answer:
      "Common denial reasons include incomplete documentation packages, unlabeled or disorganized photos, scope requests not tied to field evidence, unsupported matching or repairability claims, reinspection requested before building the indexed packet, or carrier determination that desk review is sufficient from existing photos. Carriers may also deny when damage appears cosmetic-only or when policy language limits the requested scope — outcomes vary by carrier program and file specifics.",
    relatedLinks: [
      {
        label: "Roof reinspection guide",
        href: "/resources/guides/roofing-claims/roof-reinspection-guide",
      },
      {
        label: "Roofing supplement playbook",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
  },
  {
    id: "roof-reinspection-organize-photos",
    category: "roofing_claims",
    question: "How should contractors organize photos for a roof reinspection?",
    answer:
      "Label every photo with slope name, elevation, and date in file metadata. Capture wide overview shots of each plane before close-up damage detail. Pair every close-up with a context photo showing location on the slope. Group photos by slope and damage type in the claim file index. Tie each photo reference to a specific line in the scope comparison table and contractor narrative — organized, objective documentation supports accurate claim review.",
    relatedLinks: [
      {
        label: "Roof reinspection guide",
        href: "/resources/guides/roofing-claims/roof-reinspection-guide",
      },
      {
        label: "Roofing claim documentation standard",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
    ],
  },

  // Hail, wind, and flashing (3)
  {
    id: "roof-hail-vs-wind-documentation",
    category: "roofing_claims",
    question: "How does hail damage documentation differ from wind damage documentation?",
    answer:
      "Hail documentation focuses on circular impacts, mat fracture, test square or impact survey results, and soft metal collateral dents on vents and flashings. Wind documentation focuses on creased tabs, lifted shingles, broken seal strips, ridge and starter displacement, and directional damage patterns on windward slopes. When both perils apply on the same file, document each mechanism in separate photo groups indexed to the same scope comparison — blending evidence weakens attribution at desk review.",
    relatedLinks: [
      {
        label: "Hail damage roof documentation guide",
        href: "/resources/guides/roofing-claims/roof-hail-damage-documentation-guide",
      },
      {
        label: "Wind damage roof documentation guide",
        href: "/resources/guides/roofing-claims/roof-wind-damage-documentation-guide",
      },
    ],
  },
  {
    id: "roof-layered-tear-off-discovery",
    category: "roofing_claims",
    question: "How should contractors document layered roofing during tear-off?",
    answer:
      "Photograph each layer progressively as tear-off proceeds — not in a single post-removal summary shot. Label each photo with slope name, date, layer count, and material type of the exposed course. Tie additional tear-off layer charges to the progressive photo sequence and field notes in the supplement narrative. Carriers deny layer discovery reported after tear-off when pre-removal and mid-removal evidence is missing.",
    relatedLinks: [
      {
        label: "Hail damage roof documentation guide",
        href: "/resources/guides/roofing-claims/roof-hail-damage-documentation-guide",
      },
      {
        label: "Roofing supplement checklist",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
    ],
  },
  {
    id: "roof-flashing-supplement-qualification",
    category: "roofing_claims",
    question: "When does flashing qualify for a roof supplement vs patch?",
    answer:
      "Flashing qualifies for replacement when storm damage bends, creases, or displaces metal beyond patch repair — step flashing pulled from walls, cracked pipe boots, bent drip edge, or valley metal with impact or wind deformation documented in close-up and context photos. Patch-only scope is harder to defend when photos show structural deformation, failed seal, or multiple damaged segments on the same elevation. Index each flashing photo to a specific supplement line item and slope label.",
    relatedLinks: [
      {
        label: "Hail damage roof documentation guide",
        href: "/resources/guides/roofing-claims/roof-hail-damage-documentation-guide",
      },
      {
        label: "Wind damage roof documentation guide",
        href: "/resources/guides/roofing-claims/roof-wind-damage-documentation-guide",
      },
    ],
  },

  // Commercial Roofing Documentation (5)
  {
    id: "roof-commercial-damage-documentation",
    category: "roofing_claims",
    question: "How do you document commercial roof damage for insurance?",
    answer:
      "Commercial roof damage documentation starts with a labeled roof plan and zone-indexed photos — overview and close-up pairs for membrane field damage, seams, flashings, coping, edge metal, drains, scuppers, and penetrations. Document the assembly type (TPO, EPDM, PVC, mod bit, BUR, metal, SPF, or coating), perform moisture surveys and core sampling when wet insulation is suspected, and correlate interior ceiling maps to roof zones. Reconcile measurements to the carrier sketch, attach manufacturer specs, and index every photo to estimate lines before supplement submission.",
    relatedLinks: [
      {
        label: "Commercial roofing documentation guide",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
      {
        label: "HOA roofing claims guide",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Roof measurement documentation guide",
        href: "/resources/guides/roofing-claims/roof-measurement-documentation-guide",
      },
    ],
  },
  {
    id: "roof-commercial-supplement-documentation",
    category: "roofing_claims",
    question: "What documentation is required for commercial roofing supplements?",
    answer:
      "Commercial roofing supplements require a scope comparison table linking carrier estimate lines to zone-indexed field evidence: roof plan, progressive tear-off photos, moisture survey maps, core sample results, equipment detach-reset inventory, and interior water migration maps. Include manufacturer guidance when disputing patch-only scope, code citations for upgrades, crane and staging photos for access constraints, and a contractor narrative indexed to each disputed line. Run the Roofing Supplement Checklist before submission — incomplete moisture proof and missing equipment documentation are the most common commercial supplement denials.",
    relatedLinks: [
      {
        label: "Commercial roofing documentation guide",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
      {
        label: "Roofing supplement checklist",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
      {
        label: "Roofing supplement playbook",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
  },
  {
    id: "roof-commercial-moisture-survey-payment",
    category: "roofing_claims",
    question: "Do insurance companies pay for moisture surveys?",
    answer:
      "Many carriers approve moisture survey and core sampling costs on commercial roofing claims when results justify wet insulation replacement — but payment depends on contemporaneous documentation linking scan results to specific roof zones and estimate lines. Perform surveys before tear-off when interior leaks, ponding, or storm openings suggest wet substrate. Document authorization requests, technician reports, and mapped readings indexed to the roof plan. Unsupported wet insulation claims without moisture proof are commonly excluded even when insulation replacement scope is otherwise defensible.",
    relatedLinks: [
      {
        label: "Commercial roofing documentation guide",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
      {
        label: "What documentation supports replacing a commercial roofing system?",
        href: "/faq#faq-roof-commercial-system-replacement-documentation",
      },
    ],
  },
  {
    id: "roof-commercial-inspection-photos",
    category: "roofing_claims",
    question: "What should be photographed during a commercial roof inspection?",
    answer:
      "Photograph roof overview from each corner and zone, then close-ups of membrane field damage, seams, flashings, coping, edge metal, expansion joints, drains, scuppers, HVAC curbs, skylights, and roof-mounted equipment. Capture drone and ground context when permitted. Document test squares or impact areas, moisture survey grids, core sample locations, interior ceiling conditions, and temporary emergency repairs. Every close-up needs an overview pair with zone label, date, and direction — desk reviewers cannot approve scope they cannot locate on the roof plan.",
    relatedLinks: [
      {
        label: "Commercial roofing documentation guide",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
      {
        label: "Roofing claim documentation standard",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-commercial-system-replacement-documentation",
    category: "roofing_claims",
    question: "What documentation supports replacing a commercial roofing system?",
    answer:
      "Full commercial system replacement requires evidence beyond surface membrane damage: moisture survey and core sample proof of wet insulation, manufacturer specs showing damage exceeds patch limits, repairability analysis when aged membrane cannot be resealed, matching documentation when product is discontinued, code upgrade citations, and photos of multiple impact areas or failed seams across sections. Document tear-off layer count, deck condition, cover board requirements, and equipment detach-reset scope. Cross-reference the Roof Repairability and Roof Matching Documentation Guides when carriers approve partial scope on low-slope assemblies.",
    relatedLinks: [
      {
        label: "Commercial roofing documentation guide",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
      {
        label: "Roof repairability documentation guide",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
    ],
  },

  // HOA and condominium roofing (5)
  {
    id: "roof-hoa-responsible-damage",
    category: "roofing_claims",
    question: "Who is responsible for roof damage in an HOA?",
    answer:
      "Roof damage responsibility in an HOA depends on governing documents — CC&Rs and bylaws define which roofs, elevations, and accessories are common elements maintained by the association versus unit-owner responsibilities. Contractors should document the management-provided responsibility summary, photograph association-owned areas separately from unit-owner boundaries, and index scope lines to the correct insured party. When boundaries are disputed, contemporaneous board and property management communications strengthen attribution at carrier review — not legal interpretation by the contractor.",
    relatedLinks: [
      {
        label: "HOA roofing claims guide",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Commercial roofing documentation guide",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-hoa-insurance-covers-replacement",
    category: "roofing_claims",
    question: "Does HOA insurance cover roof replacement?",
    answer:
      "HOA master insurance policies typically cover common-element roofs declared in the association's coverage, but payment depends on policy terms, deductibles, damage cause, and governing document allocation — not automatic full-community replacement. Contractors should document the master policy claim number, deductible handling per management guidance, and building-specific damage that supports replacement scope on affected structures. Board authorization records and building-level photo evidence strengthen approval when carriers question scope extent on partial-building losses.",
    relatedLinks: [
      {
        label: "HOA roofing claims guide",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
    ],
  },
  {
    id: "roof-hoa-damage-documentation",
    category: "roofing_claims",
    question: "How should HOA roof damage be documented?",
    answer:
      "HOA roof damage documentation starts with a building inventory and community site plan — every structure numbered consistently across photos, measurements, and estimates. Photograph every elevation on every building with overview and close-up pairs; index shared components (gutters, carports, clubhouses) separately. Attach governing document responsibility summaries, access coordination logs, and board communication records alongside field evidence. Per-building scope comparison tables tied to photo indexes are essential before supplement submission on community association files.",
    relatedLinks: [
      {
        label: "HOA roofing claims guide",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Roofing claim documentation standard",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
      {
        label: "Roofing supplement checklist",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
    ],
  },
  {
    id: "roof-hoa-partial-building-replacement",
    category: "roofing_claims",
    question: "Can every building be replaced if only some are damaged?",
    answer:
      "Full-community replacement when only some buildings are damaged depends on matching requirements, governing document standards, manufacturer repair limits, and functional damage attribution — not automatic approval. Document elevation comparisons showing color and profile mismatch between damaged and undamaged buildings, repairability analysis per structure, and governing document uniformity requirements cited by management. Carriers often approve full replacement on affected buildings while denying undamaged structures — building-level photo evidence and matching documentation support partial-community scope arguments.",
    relatedLinks: [
      {
        label: "HOA roofing claims guide",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Roof repairability documentation guide",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
    ],
  },
  {
    id: "roof-hoa-supplement-documentation",
    category: "roofing_claims",
    question: "What documentation helps HOA roofing supplements?",
    answer:
      "HOA roofing supplements require building-indexed scope comparison tables linking carrier estimate lines to per-building photo evidence, measurements, and governing doc context. Include mobilization logs for multi-building deployments, access delay records, board authorization documentation, and progressive tear-off photos for hidden damage discoveries. Run the Roofing Supplement Checklist before submission — missing building-level indexing and undocumented access delays are the most common HOA supplement denials.",
    relatedLinks: [
      {
        label: "HOA roofing claims guide",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Roofing supplement checklist",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
      {
        label: "Roofing supplement playbook",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
  },

  // Multi-Building Roofing Claims (5)
  {
    id: "roof-multi-building-carrier-handling",
    category: "roofing_claims",
    question: "How do insurance companies handle multi-building roof claims?",
    answer:
      "Carriers treat multi-building roof claims with higher scrutiny: specialist adjusters, engineer review, representative sampling on subsets of buildings, and aggregated scope tables that may omit building-level detail. Desk reviewers expect site maps, building inventories, per-structure photo indexes, and measurement reconciliation — not single-folder residential documentation. Document every building with identical standards so sampling disputes cannot exclude undamaged-looking structures with identical field conditions.",
    relatedLinks: [
      {
        label: "Multi-building roofing claims guide",
        href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
      },
      {
        label: "Commercial roofing documentation guide",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-multi-building-partial-replacement",
    category: "roofing_claims",
    question: "Can insurance replace every roof if only some buildings are damaged?",
    answer:
      "Carriers often approve replacement only on buildings with documented storm damage, but contractors may support broader scope when matching, repairability, manufacturer patch limits, or uniform appearance arguments apply across campus sightlines. Document elevation comparisons, supplier discontinued notices, and repairability test results per building — not only on carrier-selected samples. Partial replacement disputes on apartment complexes, office parks, and hotel campuses follow the same building-indexed evidence standards as single-structure matching claims.",
    relatedLinks: [
      {
        label: "Multi-building roofing claims guide",
        href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
      },
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Roof repairability documentation guide",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
    ],
  },
  {
    id: "roof-multi-building-apartment-documentation",
    category: "roofing_claims",
    question: "How should contractors document apartment complex roof damage?",
    answer:
      "Apartment complex roof documentation starts with a building inventory and labeled site map — every structure numbered consistently with property management records. Photograph overview and close-up pairs for every elevation on every building in separate indexed folders. Perform test squares per building on hail losses, correlate interior top-floor stains to roof zones, and log tenant access coordination contemporaneously. Reconcile measurements per building to the carrier sketch and tie every estimate line to building-specific photo evidence before supplement submission.",
    relatedLinks: [
      {
        label: "Multi-building roofing claims guide",
        href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
      },
      {
        label: "Roofing claim documentation standard",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-multi-building-matching",
    category: "roofing_claims",
    question: "What supports matching across multiple buildings?",
    answer:
      "Matching across multiple buildings requires elevation photos showing color, profile, and weathering differences between replaced and unreplaced structures; supplier letters confirming discontinued materials; and campus sightline comparisons showing visible mismatch from common areas. Document identical roof systems and ages across buildings to support uniform appearance arguments. When only damaged buildings are replaced, photograph the contrast from ground level and adjacent buildings — not only close-ups on the repaired structure.",
    relatedLinks: [
      {
        label: "Multi-building roofing claims guide",
        href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
      },
      {
        label: "Roof matching documentation guide",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
    ],
  },
  {
    id: "roof-multi-building-supplement-documentation",
    category: "roofing_claims",
    question: "What documentation helps large commercial roofing supplements?",
    answer:
      "Large multi-building roofing supplements require building-indexed scope comparison tables linking carrier estimate lines to per-building photo evidence, measurements, and mobilization logs. Include crane setup photos, material staging constraints, phased production schedules, progressive tear-off photos for hidden damage, and access delay records across occupied campuses. Run the Roofing Supplement Checklist before submission — missing building-level indexing and undocumented mobilizations are the most common multi-building supplement denials.",
    relatedLinks: [
      {
        label: "Multi-building roofing claims guide",
        href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
      },
      {
        label: "Roofing supplement checklist",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
      {
        label: "Roofing supplement playbook",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
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
        label: "Water damage documentation for apartment complexes",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
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
        label: "Water damage documentation for apartment complexes",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
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
        label: "Multifamily water claims that get underpaid",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
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
    id: "water-apartment-complex-documentation",
    category: "water_damage_claims",
    question: "How should water damage be documented in apartment complexes?",
    answer:
      "Document apartment complex water losses with unit-by-unit indexing from intake through closeout: unit-numbered photos, moisture maps per affected unit and common area, chronological dry logs per chamber, asset-tagged equipment records by unit, tenant impact logs aligned to access events, and terminal readings at persistent map point IDs. Separate in-unit scope from hallways, utility rooms, and shared amenities — merged residential-style files fail desk review on multifamily footprints.",
    relatedLinks: [
      {
        label: "Water damage documentation for apartment complexes",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
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
    id: "water-apartment-unit-separate-tracking",
    category: "water_damage_claims",
    question: "Should contractors track each affected apartment unit separately?",
    answer:
      "Yes. Treat each affected apartment unit as a separate drying chamber with consistent unit numbers on maps, dry logs, photos, and equipment records. Desk reviewers match billed scope to unit-level evidence — undifferentiated multifamily files invite proportional reductions across the entire complex when any unit lacks contemporaneous documentation.",
    relatedLinks: [
      {
        label: "Water damage documentation for apartment complexes",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "What documentation is required for apartment water losses?",
        href: "/faq#faq-water-apartment-loss-documentation",
      },
    ],
  },
  {
    id: "water-apartment-equipment-usage-documentation",
    category: "water_damage_claims",
    question: "What documentation supports equipment usage in apartment water losses?",
    answer:
      "Asset-tag photos at set and pull per unit, dry log equipment rows matching deployed counts, wide-angle placement photos with unit and room labels visible, and cross-reference to moisture map chamber boundaries. Equipment billed without unit-level placement proof invites proportional reductions — building-level photos do not defend per-unit air mover, dehumidifier, or air scrubber lines on multifamily files.",
    relatedLinks: [
      {
        label: "Water damage documentation for apartment complexes",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Equipment documentation guide",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Equipment charges that get cut from water claims",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-apartment-mitigation-claims-disputed",
    category: "water_damage_claims",
    question: "Why are apartment water mitigation claims frequently disputed?",
    answer:
      "Higher invoice totals trigger specialist desk review. Carriers dispute apartment files when residential documentation structure is applied to multifamily footprints — merged logs, undifferentiated maps, missing tenant access records, and equipment billed without per-unit placement proof. Vertical migration across stack boundaries and common-area scope merged into unit files add review layers that produce proportional reductions rather than isolated unit cuts.",
    relatedLinks: [
      {
        label: "Multifamily water claims that get underpaid",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Water damage documentation for apartment complexes",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "water-apartment-tenant-impact-required",
    category: "water_damage_claims",
    question: "Should tenant impacts be documented during apartment water losses?",
    answer:
      "Yes. Maintain a tenant impact log from mobilization: property management authorization, access restrictions, habitability notices, relocation coordination, and contents disruption with unit identifiers and timestamps. Production in occupied buildings must match access and coordination documentation at desk review — monitoring lines on restricted units without access logs invite visit-day cuts.",
    relatedLinks: [
      {
        label: "Water damage documentation for apartment complexes",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "How should tenant impacts be documented?",
        href: "/faq#faq-water-tenant-impact-documentation",
      },
    ],
  },
  {
    id: "water-multifamily-claims-underpaid",
    category: "water_damage_claims",
    question: "Why do multifamily water claims get underpaid?",
    answer:
      "Multifamily water claims get underpaid when documentation cannot support billed scope per unit and common area: merged residential-style files, missing unit-by-unit indexing, omitted common-area evidence, equipment billed without placement proof, gapped monitoring records, undocumented tenant impact, and invoice lines not cross-referenced to dated field records. Higher invoice totals trigger specialist desk review — proportional reductions follow when any chamber lacks contemporaneous evidence.",
    relatedLinks: [
      {
        label: "Multifamily water claims that get underpaid",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "What causes commercial water claims to be underpaid?",
        href: "/faq#faq-water-commercial-claims-underpaid",
      },
    ],
  },
  {
    id: "water-multifamily-units-documentation",
    category: "water_damage_claims",
    question: "How should contractors document affected units in multifamily water claims?",
    answer:
      "Treat each affected unit as a separate drying chamber with consistent unit numbers on moisture maps, dry logs, photos, and equipment records. Capture room-level conditions with unit-specific photos, baseline and terminal moisture readings at persistent map point IDs, and separate in-unit scope from common areas. Unit-by-unit indexing from intake through closeout prevents proportional reductions when desk reviewers cannot match billed lines to unit-level evidence.",
    relatedLinks: [
      {
        label: "Multifamily water claims that get underpaid",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Water damage documentation for apartment complexes",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Should contractors track each affected apartment unit separately?",
        href: "/faq#faq-water-apartment-unit-separate-tracking",
      },
    ],
  },
  {
    id: "water-multifamily-equipment-reductions",
    category: "water_damage_claims",
    question: "Why do carriers reduce equipment charges on multifamily water losses?",
    answer:
      "Carriers reduce equipment charges on multifamily losses when air movers, dehumidifiers, and specialty equipment are billed without unit-level or zone-level placement proof. Missing asset-tag photos, absent equipment maps tied to chamber boundaries, unsupported unit counts exceeding photo-verified peak deployment, and incomplete daily verification on dry logs trigger proportional cuts — building-level photos do not defend per-unit equipment lines on apartment, HOA, or condo files.",
    relatedLinks: [
      {
        label: "Multifamily water claims that get underpaid",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Equipment charges that get cut from water claims",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
      {
        label: "Equipment documentation guide",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
    ],
  },
  {
    id: "water-multifamily-tenant-impact-documentation",
    category: "water_damage_claims",
    question: "Should tenant impact be documented on multifamily water claims?",
    answer:
      "Yes. Maintain tenant impact logs from mobilization on occupied multifamily properties: property management authorization, access restrictions, habitability notices, temporary relocation coordination, contents manipulation, and scheduling limitations with unit identifiers and timestamps. Production and monitoring in occupied units without access records invite visit-day and labor cuts at desk review.",
    relatedLinks: [
      {
        label: "Multifamily water claims that get underpaid",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Water damage documentation for apartment complexes",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Should tenant impacts be documented during apartment water losses?",
        href: "/faq#faq-water-apartment-tenant-impact-required",
      },
    ],
  },
  {
    id: "water-multifamily-full-payment-support",
    category: "water_damage_claims",
    question: "How can contractors support full payment on multifamily water claims?",
    answer:
      "Build indexed closeout packets with unit-by-unit maps, logs, and photos; separate common-area documentation; asset-tag equipment records per chamber; daily monitoring with terminal release readings; tenant impact logs aligned to access events; and line-item cross-reference tying invoice charges to dated evidence. Submit while drying narrative is active or immediately after release — organized zone-level documentation strengthens initial approval and supplement recovery on apartment, HOA, and condo losses.",
    relatedLinks: [
      {
        label: "Multifamily water claims that get underpaid",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "water-commercial-documentation-missing",
    category: "water_damage_claims",
    question: "What documentation is commonly missing from commercial water claims?",
    answer:
      "The most commonly missing items on commercial water files are zone-level moisture maps with floor plans and migration paths, chronological dry logs for every active drying day, equipment placement photos with asset tags per chamber, tenant impact logs on occupied properties, common-area scope indexed separately from suites, daily monitoring records with psychrometric data, and terminal dry-standard verification before equipment pull. Residential file structure on multi-zone footprints produces proportional reductions across the entire invoice.",
    relatedLinks: [
      {
        label: "Common documentation mistakes on commercial water losses",
        href: "/resources/blog/common-documentation-mistakes-on-commercial-water-losses",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
    ],
  },
  {
    id: "water-commercial-invoice-reduced-why",
    category: "water_damage_claims",
    question: "Why are commercial water mitigation invoices reduced?",
    answer:
      "Commercial mitigation invoices are reduced when documentation cannot support billed scope at zone level — equipment counts exceed photo-verified deployment per chamber, dry logs have gaps between billed drying days, monitoring visits lack readings at active map point IDs, tenant access is undocumented on occupied properties, common-area scope is billed without indexed evidence, or labor hours lack contemporaneous scope proof. Higher invoice totals trigger specialist desk review and proportional trims rather than full denials on large commercial files.",
    relatedLinks: [
      {
        label: "Common documentation mistakes on commercial water losses",
        href: "/resources/blog/common-documentation-mistakes-on-commercial-water-losses",
      },
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Why do carriers reduce water mitigation invoices?",
        href: "/faq#faq-water-mitigation-invoice-reductions",
      },
    ],
  },
  {
    id: "water-commercial-tenant-impact-required",
    category: "water_damage_claims",
    question: "Should tenant impacts be documented on commercial water losses?",
    answer:
      "Yes. Maintain a tenant impact log from mobilization on occupied commercial properties: property management authorization, access restrictions, habitability notices, relocation coordination, scheduling limitations, and contents disruption with zone identifiers and timestamps. Production in occupied buildings must match access and coordination documentation at desk review — monitoring and labor lines on restricted zones without access logs invite proportional cuts.",
    relatedLinks: [
      {
        label: "Common documentation mistakes on commercial water losses",
        href: "/resources/blog/common-documentation-mistakes-on-commercial-water-losses",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "How should tenant impacts be documented?",
        href: "/faq#faq-water-tenant-impact-documentation",
      },
    ],
  },
  {
    id: "water-commercial-common-area-documentation",
    category: "water_damage_claims",
    question: "How should common areas be documented during commercial water mitigation?",
    answer:
      "Document common areas — hallways, utility rooms, mechanical spaces, shared amenities, and leasing offices — as named zones with independent moisture maps, dry logs, and photo narrative indexed separately from suite or unit scope. Map corridor moisture with point IDs independent of adjacent chambers. Source documentation for shared-system origin losses belongs in riser closets and mechanical spaces. Merged common-area scope into suite files produces proportional cuts when desk reviewers cannot reconcile billed lines.",
    relatedLinks: [
      {
        label: "Common documentation mistakes on commercial water losses",
        href: "/resources/blog/common-documentation-mistakes-on-commercial-water-losses",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Water damage documentation for apartment complexes",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
    ],
  },
  {
    id: "water-commercial-documentation-invoice-match",
    category: "water_damage_claims",
    question: "Why must commercial documentation match the mitigation invoice?",
    answer:
      "Desk reviewers approve commercial invoices line by line against dated evidence. When documentation does not match the invoice — unsupported labor hours, equipment counts exceeding photo-verified deployment, drying days exceeding terminal release readings, or scope billed without contemporaneous map revisions — carriers apply proportional reductions across the entire file. Indexed closeout packets where every billed line cross-references moisture maps, dry logs, equipment proof, and monitoring records prevent predictable trims at submission.",
    relatedLinks: [
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Common documentation mistakes on commercial water losses",
        href: "/resources/blog/common-documentation-mistakes-on-commercial-water-losses",
      },
      {
        label: "What documentation supports water mitigation invoices?",
        href: "/faq#faq-water-mitigation-invoice-documentation",
      },
    ],
  },
  {
    id: "water-mitigation-invoice-reductions",
    category: "water_damage_claims",
    question: "Why do carriers reduce water mitigation invoices?",
    answer:
      "Carriers reduce mitigation invoices when documentation cannot support billed scope — equipment counts exceed photo-verified deployment, dry logs have gaps between billed drying days, monitoring visits lack readings at active map points, labor hours lack contemporaneous scope proof, or Category 2 and 3 lines lack intake classification evidence. Reductions are often proportional rather than full denials — unsupported days, units, or rooms get trimmed while partially supported scope remains approved.",
    relatedLinks: [
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Why are water mitigation invoices reduced by carriers?",
        href: "/faq#faq-water-category-3-invoice-reductions",
      },
    ],
  },
  {
    id: "water-mitigation-invoice-documentation",
    category: "water_damage_claims",
    question: "What documentation supports water mitigation invoices?",
    answer:
      "Build an indexed packet that cross-references each billed line to dated evidence: labeled photos from intake through closeout, baseline moisture maps with consistent reading point IDs, chronological dry logs for every active drying day, equipment placement proof aligned to dry log rows, monitoring records for each billed visit day, category classification notes on contaminated losses, and terminal dry-standard verification before equipment pull. Office pre-invoice reconciliation catches gaps before submission.",
    relatedLinks: [
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "What documentation should be included in a water mitigation file?",
        href: "/faq#faq-water-mitigation-file-documentation",
      },
      {
        label: "Dry log collection guide",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
    ],
  },
  {
    id: "water-defend-drying-day-charges",
    category: "water_damage_claims",
    question: "How can contractors defend drying day charges?",
    answer:
      "Defend drying days with baseline moisture readings before equipment set, daily readings at the same map point IDs on every monitoring visit, progress narratives when readings plateau or regress, and terminal release readings compared to dry standard before equipment pull. Align equipment pull date, last dry log entry, and clearance photos — gaps between terminal readings and the last billed day invite last-day equipment cuts at desk review.",
    relatedLinks: [
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
      {
        label: "How do dry logs support additional drying days?",
        href: "/faq#faq-water-dry-log-additional-drying-days",
      },
    ],
  },
  {
    id: "water-equipment-invoice-documentation",
    category: "water_damage_claims",
    question: "How should equipment usage be documented for invoice review?",
    answer:
      "Document equipment with wide placement photos showing unit count per chamber, dry log equipment rows with type and room assignment on every active drying day, peak deployment photos matching billed maximum counts, and dated records of equipment moves or partial releases. Reconcile photo-verified counts and logged days to billed air movers, dehumidifiers, and specialty units before invoice submission — count mismatches are the primary trigger for proportional equipment cuts.",
    relatedLinks: [
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Equipment documentation guide",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Equipment charges that get cut from water claims",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-mitigation-invoice-review-failures",
    category: "water_damage_claims",
    question: "What causes water mitigation invoices to fail review?",
    answer:
      "Invoices fail desk review when dry logs have gaps between billed equipment days, monitoring reports are missing for billed visit days, equipment documentation lacks placement photos or shows fewer units than billed, moisture maps have no baseline readings or inconsistent point IDs, photos are unlabeled or post-cleanup only, or invoice narratives lack cross-referenced evidence. Weak files produce proportional reductions across multiple line items rather than one formal denial — contractors experience it as the carrier paid, but not what was billed.",
    relatedLinks: [
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Why do carriers reduce equipment charges?",
        href: "/faq#faq-water-equipment-charge-reductions",
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

  {
    id: "water-large-loss-qualifies",
    category: "water_damage_claims",
    question: "What qualifies as a large-loss water mitigation project?",
    answer:
      "Large-loss water mitigation typically involves enterprise-scale footprints where claim value, stakeholder count, and documentation volume exceed standard commercial templates — hospitals, schools, hotels, warehouses, manufacturing facilities, office buildings, large apartment complexes, and catastrophic water events affecting multiple floors, wings, or buildings. Qualification is operational: multi-zone drying programs, extended duration, consultant involvement, specialty equipment deployments, and invoice values that trigger specialist desk review and third-party audit.",
    relatedLinks: [
      {
        label: "Large-loss water mitigation documentation best practices",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Do you support commercial water losses?",
        href: "/faq#faq-water-commercial-losses",
      },
    ],
  },
  {
    id: "water-large-loss-documentation",
    category: "water_damage_claims",
    question: "How should large-loss water damage be documented?",
    answer:
      "Document large-loss water damage with a documentation command structure from mobilization: zone-level segmentation (floor, wing, building, or unit), baseline and progress moisture maps at persistent map point IDs, gap-free daily dry logs and monitoring reports per zone, asset-tagged equipment records, occupant and operational impact logs, vendor packet intake aligned to zone indexing, executive-level status summaries, and indexed closeout packets cross-referencing every billed line to dated evidence.",
    relatedLinks: [
      {
        label: "Large-loss water mitigation documentation best practices",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "How are commercial water claims documented?",
        href: "/faq#faq-water-commercial-claims-documentation",
      },
    ],
  },
  {
    id: "water-large-loss-scrutiny",
    category: "water_damage_claims",
    question: "Why are large-loss water claims heavily scrutinized?",
    answer:
      "Large-loss water claims receive heavy scrutiny because higher invoice values trigger specialist desk review, third-party audit, and consultant involvement before remittance. Multi-zone equipment deployments, extended drying duration, vendor subcontractor scope, and occupant impact documentation must align across an indexed packet — reviewers cannot approve enterprise scope they cannot trace to dated zone-level evidence. Proportional reductions across multiple line items are common when large-loss files lack command structure and segmentation.",
    relatedLinks: [
      {
        label: "Large-loss water mitigation documentation best practices",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
      {
        label: "Why do commercial water claims receive more scrutiny?",
        href: "/faq#faq-water-commercial-claims-scrutiny",
      },
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
    ],
  },
  {
    id: "water-large-loss-drying-zones",
    category: "water_damage_claims",
    question: "How should multiple drying zones be documented?",
    answer:
      "Document each drying zone separately with its own moisture map, dry log chronology, equipment records, and photo narrative — indexed by floor, wing, building, or unit identifier matching the carrier sketch. Use persistent map point IDs from intake through terminal release readings per zone. Equipment placement photos, dry log equipment rows, and monitoring entries must reference the same zone labels across the file. Merged zone documentation produces proportional reductions when desk reviewers cannot reconcile billed scope to indexed proof.",
    relatedLinks: [
      {
        label: "Large-loss water mitigation documentation best practices",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
      {
        label: "Moisture mapping field procedure",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "How should units be tracked separately in apartment water losses?",
        href: "/faq#faq-water-apartment-unit-separate-tracking",
      },
    ],
  },
  {
    id: "water-large-loss-invoice-documentation",
    category: "water_damage_claims",
    question: "What documentation supports large commercial water mitigation invoices?",
    answer:
      "Large commercial water mitigation invoices require indexed packets where every billed line cross-references dated zone-level evidence: intake and classification, moisture maps per zone with baseline and terminal readings, complete dry logs and monitoring reports, asset-tagged equipment placement proof, occupant and operational impact records, vendor subcontractor documentation, executive summaries with affected area status and milestones, and final dry verification before equipment pull. Office pre-invoice reconciliation catches count and chronology mismatches before specialist desk review.",
    relatedLinks: [
      {
        label: "Large-loss water mitigation documentation best practices",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Why must commercial documentation match the mitigation invoice?",
        href: "/faq#faq-water-commercial-documentation-invoice-match",
      },
    ],
  },

  // Class 4 Drying (5)
  {
    id: "water-class-4-drying-definition",
    category: "water_damage_claims",
    question: "What is Class 4 water damage drying?",
    answer:
      "Class 4 water damage drying addresses low-permeance materials where moisture is deeply held and surface evaporation is limited — including hardwood flooring, plaster, concrete, brick, dense framing, and saturated subfloors. Bound water in these assemblies requires extended drying time, specialty equipment such as injectidry systems, floor mats, desiccant dehumidifiers, and heat drying, plus consistent daily monitoring. Proper Class 4 documentation starts at intake with material identification, baseline moisture readings, and photos supporting the classification.",
    relatedLinks: [
      {
        label: "Class 4 drying documentation guide",
        href: "/resources/guides/water-damage/class-4-drying-documentation-guide",
      },
      {
        label: "Category and class documentation guide",
        href: "/resources/guides/water-damage/category-class-documentation-guide",
      },
      {
        label: "What is category and class of water documentation?",
        href: "/faq#faq-water-category-class",
      },
    ],
  },
  {
    id: "water-class-4-documentation-required",
    category: "water_damage_claims",
    question: "Why does Class 4 drying require additional documentation?",
    answer:
      "Class 4 drying involves longer duration, specialty equipment, and bound-water assemblies that carriers scrutinize more heavily than standard residential dry-outs. Desk reviewers reduce drying days, specialty equipment lines, and labor when documentation lacks baseline readings on low-permeance materials, material-specific moisture maps, daily monitoring records, specialty system placement proof, and contemporaneous progress narratives. Additional documentation demonstrates material conditions, drying progression, and equipment necessity from intake through final verification.",
    relatedLinks: [
      {
        label: "Class 4 drying documentation guide",
        href: "/resources/guides/water-damage/class-4-drying-documentation-guide",
      },
      {
        label: "Moisture mapping guide",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Daily monitoring guide",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
    ],
  },
  {
    id: "water-class-4-specialty-equipment-documentation",
    category: "water_damage_claims",
    question: "How should specialty drying equipment be documented?",
    answer:
      "Document specialty drying equipment with placement photos at setup and when configuration changes, dry log rows matching billed equipment days, and equipment logs cross-referenced to moisture map chambers. Injectidry systems require panel placement, hose routing, and injection point photos. Floor mat systems need layout photos on hardwood and subfloor assemblies. Desiccant dehumidifiers and heat drying systems require placement, ducting, and grain depression or temperature records. Containment isolation photos tie negative air setup to specialty chamber design.",
    relatedLinks: [
      {
        label: "Class 4 drying documentation guide",
        href: "/resources/guides/water-damage/class-4-drying-documentation-guide",
      },
      {
        label: "Equipment documentation guide",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Equipment charges that get cut from water claims",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-class-4-drying-duration",
    category: "water_damage_claims",
    question: "Why do Class 4 drying projects take longer?",
    answer:
      "Class 4 drying projects take longer because low-permeance materials hold bound water that releases slowly through limited surface evaporation. Hardwood, plaster, concrete, brick, dense framing, and saturated subfloors may show plateauing readings even when ambient conditions appear favorable. Assembly complexity, environmental conditions, and material density extend timelines beyond carrier residential templates. Daily logs with material-specific readings and progress narratives support extended duration when dry standard is not yet met at all active map points.",
    relatedLinks: [
      {
        label: "Class 4 drying documentation guide",
        href: "/resources/guides/water-damage/class-4-drying-documentation-guide",
      },
      {
        label: "How carriers reduce drying days",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
      {
        label: "How do I defend drying day charges?",
        href: "/faq#faq-water-defend-drying-day-charges",
      },
    ],
  },
  {
    id: "water-class-4-carrier-disputes",
    category: "water_damage_claims",
    question: "Why do carriers dispute Class 4 drying charges?",
    answer:
      "Carriers dispute Class 4 drying charges when documentation does not support extended duration, specialty equipment necessity, or the Class 4 classification itself. Common challenges include drying days reduced to shorter class templates, specialty equipment lines removed without placement proof, Class 4 downgraded when intake material evidence is weak, labor trimmed without photo and log cross-reference, and monitoring visits cut when readings are incomplete. Indexed documentation — moisture maps, dry logs, equipment photos, and daily narratives — addresses each dispute type at desk review.",
    relatedLinks: [
      {
        label: "Class 4 drying documentation guide",
        href: "/resources/guides/water-damage/class-4-drying-documentation-guide",
      },
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
    ],
  },

  // Water Damage Reinspection (5)
  {
    id: "water-reinspection-when-request",
    category: "water_damage_claims",
    question: "When should contractors request a water damage reinspection?",
    answer:
      "Request a water damage reinspection when newly discovered moisture, hidden damage, or expanded scope cannot be fully conveyed through photos, moisture maps, and dry logs alone — or when the adjuster offers or agrees to a site visit instead of desk review. Common triggers include additional affected rooms or units, cavity moisture found after demolition, scope discrepancies between the carrier estimate and field documentation, and incomplete initial inspections due to access limitations. Build the documentation package before requesting the visit — reinspection supports facts; it does not replace indexed evidence.",
    relatedLinks: [
      {
        label: "Water damage reinspection guide",
        href: "/resources/guides/water-damage/water-damage-reinspection-guide",
      },
      {
        label: "Water damage supplement denial recovery",
        href: "/resources/blog/water-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "water-reinspection-documentation-prep",
    category: "water_damage_claims",
    question: "What documentation should be prepared before a reinspection?",
    answer:
      "Prepare labeled photos, baseline and revised moisture maps with consistent point IDs, complete dry logs and monitoring records, a scope comparison table linking carrier estimate gaps to field evidence, a one-page narrative summary of additional damage discovered, and an indexed invoice support packet. Documentation should be organized and current through the reinspection request date — not assembled after the adjuster schedules the visit.",
    relatedLinks: [
      {
        label: "Water damage reinspection guide",
        href: "/resources/guides/water-damage/water-damage-reinspection-guide",
      },
      {
        label: "Moisture mapping guide",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Dry log collection guide",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
    ],
  },
  {
    id: "water-reinspection-additional-damage-documented",
    category: "water_damage_claims",
    question: "Can additional damage be documented after the initial inspection?",
    answer:
      "Yes — when additional moisture, hidden damage, or scope expansion is discovered after the initial carrier inspection, contemporaneous documentation supports reinspection and supplement requests. Capture discovery photos with timestamps, revise moisture maps with dated point additions, update dry log entries from the discovery date forward, and record when and how the additional scope was found. Carriers evaluate whether evidence was captured contemporaneously — retroactive narrative without dated photos and map revisions is discounted at desk review.",
    relatedLinks: [
      {
        label: "Water damage reinspection guide",
        href: "/resources/guides/water-damage/water-damage-reinspection-guide",
      },
      {
        label: "Daily monitoring guide",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
    ],
  },
  {
    id: "water-reinspection-denial-reasons",
    category: "water_damage_claims",
    question: "Why do carriers deny reinspection requests?",
    answer:
      "Carriers may decline reinspection requests when documentation does not justify a site visit — weak moisture maps, incomplete dry logs, or unsupported scope claims suggest desk review is sufficient. Other reasons include file age, prior reinspection without updated estimate submission, repeated requests without new evidence, and scope disputes that carriers believe are estimate revisions rather than field verification issues. Strengthen the request with an indexed documentation package and scope comparison table before asking for a revisit.",
    relatedLinks: [
      {
        label: "Water damage reinspection guide",
        href: "/resources/guides/water-damage/water-damage-reinspection-guide",
      },
      {
        label: "Documentation gaps that trigger water claim denials",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
    ],
  },
  {
    id: "water-reinspection-organize-documentation",
    category: "water_damage_claims",
    question: "How should contractors organize documentation for a reinspection?",
    answer:
      "Organize documentation in layers: one-page narrative summary, scope comparison table with estimate line references, current moisture map, dry log summary, indexed photo attachments by room or chamber, and equipment placement proof. Use consistent room names across maps, logs, photos, and estimates. Hand the adjuster a focused packet tied to disputed lines — not an unstructured file dump. Update the written estimate the same week as the visit so lines discussed on site appear in submitted scope.",
    relatedLinks: [
      {
        label: "Water damage reinspection guide",
        href: "/resources/guides/water-damage/water-damage-reinspection-guide",
      },
      {
        label: "Water mitigation invoice defense guide",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
    ],
  },

  // Fire Damage Claims (11)
  {
    id: "fire-damage-documentation-insurance",
    category: "fire_damage_claims",
    question: "How should fire damage be documented for insurance?",
    answer:
      "Document site safety clearance, exterior and origin-room photos, smoke migration by room, structural components, HVAC status, suppression water damage, contents inventory, and demolition discovery — with room labels consistent across photos, sketch, and estimate. Indexed evidence supports supplements when scope exceeds the carrier estimate.",
    relatedLinks: [
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Fire Claim Intake Checklist",
        href: "/resources/guides/fire-damage/fire-claim-intake-guide",
      },
      { label: "Fire damage solutions", href: "/solutions/fire-damage" },
    ],
  },
  {
    id: "fire-damage-photos-required",
    category: "fire_damage_claims",
    question: "What photos are required after a fire?",
    answer:
      "Carriers expect exterior elevations, origin room before mitigation, migration path through halls and upper floors, structural char and heat damage, HVAC registers and filters, water saturation from suppression, contents in place before pack-out, and demolition discovery during tear-out — all with room labels and dates in filenames.",
    relatedLinks: [
      {
        label: "Fire Claim Documentation Checklist",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Photo Documentation Field Procedure",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "fire-smoke-damage-insurance-coverage",
    category: "fire_damage_claims",
    question: "Does insurance pay for smoke damage?",
    answer:
      "Most property policies cover smoke and soot damage when documentation proves contamination beyond the fire origin — migration photos, test-clean results, and room-by-room scope. Carriers dispute localized versus systemic smoke; strong migration evidence and cleaning method notes support approval of smoke wipe, seal, and deodorization lines.",
    relatedLinks: [
      {
        label: "Smoke and Soot Documentation Procedure",
        href: "/resources/guides/fire-damage/smoke-documentation-guide",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
    ],
  },
  {
    id: "fire-hidden-damage-documentation",
    category: "fire_damage_claims",
    question: "How should hidden fire damage be documented?",
    answer:
      "Photograph hidden damage contemporaneously during demolition — char in wall cavities, compromised trusses, soot in attics and crawlspaces — before repairs close access. Maintain a demolition discovery log with date-stamped photos and measurements. Engineering reports strengthen structural scope when carriers approve patch-only repairs.",
    relatedLinks: [
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Structural Stabilization Documentation Procedure",
        href: "/resources/guides/fire-damage/structural-stabilization-documentation-guide",
      },
    ],
  },
  {
    id: "fire-supplement-documentation-support",
    category: "fire_damage_claims",
    question: "What documentation supports fire damage supplements?",
    answer:
      "Fire supplement packages need indexed photos by room, migration path narrative, demolition discovery logs, HVAC and contents evidence, engineering or testing reports where used, and a cover letter mapping each attachment to estimate line items. This is the evidence inventory desk reviewers verify — phased supplements with contemporaneous capture outperform end-of-job narrative assembled after production closes access.",
    relatedLinks: [
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
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
        label: "Fire Damage Supplement Denial Recovery",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "smoke-damage-documentation-insurance",
    category: "fire_damage_claims",
    question: "How should smoke damage be documented for insurance?",
    answer:
      "Document contamination by room with wide and close substrate photos, migration path narrative from origin through halls and upper floors, soot type notes, HVAC register and filter condition, odor logs, and test-clean results where clean-versus-replace is disputed — with room labels consistent across photos, sketch, and estimate. Indexed evidence supports supplements when smoke scope exceeds the carrier estimate.",
    relatedLinks: [
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Smoke and Soot Documentation Procedure",
        href: "/resources/guides/fire-damage/smoke-documentation-guide",
      },
      {
        label: "Smoke Damage Documentation Mistakes",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
      { label: "Fire damage solutions", href: "/solutions/fire-damage" },
    ],
  },
  {
    id: "soot-damage-insurance-coverage",
    category: "fire_damage_claims",
    question: "Does insurance cover soot damage?",
    answer:
      "Most property policies cover soot damage when documentation proves contamination beyond the fire origin — migration photos, substrate close-ups, test-clean results, and room-by-room scope. Carriers dispute localized versus systemic soot; strong migration evidence, soot type notes, and cleaning method documentation support approval of wipe, seal, and specialty cleaning lines.",
    relatedLinks: [
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
    ],
  },
  {
    id: "smoke-damage-photos-required",
    category: "fire_damage_claims",
    question: "What photographs should be taken after smoke damage?",
    answer:
      "Carriers expect wide room context plus close substrate photos showing soot color, texture, and extent on ceilings, walls, trim, and fixtures; migration path through halls, closets, and upper floors; HVAC registers and filters; cabinet interiors and cavities; test-clean before-and-after sets on disputed substrates; and attic or crawlspace access when migration is claimed — all with room labels and dates in filenames.",
    relatedLinks: [
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Photo Documentation Field Procedure",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "smoke-damage-clean-vs-replace",
    category: "fire_damage_claims",
    question: "When should smoke-damaged materials be replaced instead of cleaned?",
    answer:
      "Replace when test-clean fails on the substrate, soot type prevents restoration (protein residue on porous materials, fuel-oil soot on unfinished wood), manufacturer guidance prohibits cleaning, or char and heat damage compromise the assembly. Document test-clean before-and-after photos, substrate condition, and manufacturer bulletins supporting replacement over clean-only carrier macros.",
    relatedLinks: [
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Smoke and Soot Documentation Procedure",
        href: "/resources/guides/fire-damage/smoke-documentation-guide",
      },
    ],
  },
  {
    id: "smoke-damage-supplement-documentation",
    category: "fire_damage_claims",
    question: "What documentation supports smoke damage supplements?",
    answer:
      "Smoke supplements need indexed photos by room, migration path narrative, test-clean results, HVAC and odor evidence, cavity and attic photos from demo discovery, and a cover letter mapping attachments to line items. Phased supplements with contemporaneous migration evidence outperform end-of-job narrative assembled after cleaning obscures conditions.",
    relatedLinks: [
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
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
        label: "Fire Damage Supplement Denial Recovery",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "smoke-damage-contractor-documentation-insurance",
    category: "fire_damage_claims",
    question: "How do contractors document smoke damage for insurance claims?",
    answer:
      "Contractors document smoke damage with room-by-room contamination photos, migration path narrative from origin through halls and upper floors, odor intensity logs, HVAC register and filter inspection, test-clean results for clean-versus-replace decisions, and concealed-area photos from attics and cavities — all with room labels matching sketch and estimate. Indexed folders by room and phase support supplements when smoke scope exceeds the carrier estimate.",
    relatedLinks: [
      {
        label: "Smoke Damage Documentation Mistakes",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
    ],
  },
  {
    id: "smoke-damage-claim-photos-required",
    category: "fire_damage_claims",
    question: "What photos should be taken for smoke damage claims?",
    answer:
      "Smoke damage claims need wide room context, mid-range vertical spread shots, and close substrate photos on ceilings, walls, trim, cabinets, and flooring in every affected room; migration path through halls and chases; HVAC registers, filters, and accessible duct runs; attic and crawlspace inspection when migration is claimed; test-clean before-and-after sets; and contents in-place photos — all labeled consistently with sketch room names and dated at intake.",
    relatedLinks: [
      {
        label: "Smoke Damage Documentation Mistakes",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Photo Documentation Standards Procedure",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "smoke-damage-hvac-documentation-required",
    category: "fire_damage_claims",
    question: "Does smoke damage require HVAC documentation?",
    answer:
      "Yes — when HVAC ran after the fire or when migration claims include duct pathways, carriers expect register and grille photos, filter condition at intake, accessible duct and plenum inspection, air handler interior photos when unit cleaning is billed, system type notes, and post-clean verification. HVAC scope without field evidence is among the first smoke lines reduced on desk review.",
    relatedLinks: [
      {
        label: "HVAC contamination in fire damage claims",
        href: "/resources/blog/hvac-contamination-in-fire-damage-claims",
      },
      {
        label: "HVAC Contamination Documentation Procedure",
        href: "/resources/guides/fire-damage/hvac-contamination-guide",
      },
      {
        label: "Smoke Damage Documentation Mistakes",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
    ],
  },
  {
    id: "smoke-damage-claims-underpaid-why",
    category: "fire_damage_claims",
    question: "Why do smoke damage insurance claims get underpaid?",
    answer:
      "Smoke claims get underpaid when documentation treats contamination as cosmetic, omits odor mapping and HVAC evidence, skips concealed areas, delivers unlabeled photo rolls, fails to separate cleaning from replacement, and lacks written migration narrative. Carriers approve scope they can match to sketch rooms — incomplete smoke files produce proportional reductions rather than full denial.",
    relatedLinks: [
      {
        label: "Smoke Damage Documentation Mistakes",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
      {
        label: "Why fire damage claims get underpaid",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
    ],
  },
  {
    id: "smoke-damage-invisible-without-soot",
    category: "fire_damage_claims",
    question: "Can smoke damage exist without visible soot?",
    answer:
      "Yes. Smoke damage includes vapor-phase deposition, odor absorption in porous materials, particulate in wall cavities, and microscopic soot in HVAC media — often without obvious surface staining. Protein fires and slow-burn losses frequently produce persistent odor with minimal visible residue. Document odor logs, cavity inspection, test-clean results, and HVAC filter condition to prove impact carriers cannot see in wide photos alone.",
    relatedLinks: [
      {
        label: "Smoke Damage Documentation Mistakes",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
      {
        label: "Odor mitigation in fire damage claims",
        href: "/resources/blog/odor-mitigation-in-fire-damage-claims",
      },
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
    ],
  },

  // Fire Claim Documentation Checklist FAQs (5)
  {
    id: "fire-supplement-checklist-documents",
    category: "fire_damage_claims",
    question: "What documents should contractors include with a fire insurance supplement?",
    answer:
      "Include a cover letter with attachment index, revised Xactimate estimate, room-labeled photo exhibits, smoke migration narrative, demolition discovery log, HVAC inspection evidence, contents inventory pages, pack-out chain-of-custody records, code citations with permit support, specialty report excerpts when used, and a correspondence log. Each requested line must map to at least one named exhibit before submission.",
    relatedLinks: [
      {
        label: "Fire Claim Documentation Checklist",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "What should be included in a fire damage supplement?",
        href: "/faq#faq-fire-supplement-included-items",
      },
    ],
  },
  {
    id: "fire-claim-photo-volume",
    category: "fire_damage_claims",
    question: "How many photos should be taken during a fire claim?",
    answer:
      "Plan a minimum structured set per affected room: at least one wide shot, one mid-range ceiling-and-wall shot, and substrate close-ups for each billed surface — plus migration progression, exterior elevations, HVAC registers, demolition discovery, and contents in-place images. Complex fire files often exceed 200–400 labeled photos; volume matters less than complete room coverage and consistent labels across photos, sketch, and estimate.",
    relatedLinks: [
      {
        label: "Fire Claim Documentation Checklist",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "What photos are required after a fire?",
        href: "/faq#faq-fire-damage-photos-required",
      },
    ],
  },
  {
    id: "fire-smoke-documentation-support",
    category: "fire_damage_claims",
    question: "What documentation supports smoke damage on fire claims?",
    answer:
      "Smoke damage documentation includes migration path photos from origin through connected spaces, room-by-room odor intake logs, substrate close-ups with soot type notes, test-clean results where clean-versus-replace is disputed, HVAC register and filter condition, and cleaning method rationale tied to contamination type. Indexed evidence supports supplement lines when smoke scope exceeds the carrier estimate.",
    relatedLinks: [
      {
        label: "Fire Claim Documentation Checklist",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "How should smoke damage be documented for insurance?",
        href: "/faq#faq-smoke-damage-documentation-insurance",
      },
    ],
  },
  {
    id: "fire-hidden-damage-required",
    category: "fire_damage_claims",
    question: "Should contractors document hidden fire damage?",
    answer:
      "Yes — hidden fire damage must be documented contemporaneously during demolition before repairs close access. Char in wall cavities, compromised trusses, soot in attics, and wet insulation from suppression are common supplement scope carriers cannot verify from initial walks. Failing to photograph discovery during tear-out removes the evidence desk reviewers need to approve structural and smoke lines discovered after the first estimate.",
    relatedLinks: [
      {
        label: "Fire Claim Documentation Checklist",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "How should hidden fire damage be documented?",
        href: "/faq#faq-fire-hidden-damage-documentation",
      },
    ],
  },
  {
    id: "fire-carrier-additional-documentation-why",
    category: "fire_damage_claims",
    question: "Why do carriers request additional documentation during fire claims?",
    answer:
      "Carriers request additional documentation when files are not reviewer-ready — unlabeled photos, inconsistent room names across sketch and inventory, missing pack-out chain of custody, HVAC scope without register evidence, contents lists without in-place images, or supplement packages without attachment-to-line-item indexes. Each request for information adds days before payment; complete pre-submission documentation prevents iterative RFIs and proportional reductions on unsupported lines.",
    relatedLinks: [
      {
        label: "Fire Claim Documentation Checklist",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "What documentation mistakes delay fire claims?",
        href: "/faq#faq-fire-claim-documentation-delays",
      },
      {
        label: "How can contractors improve fire claim documentation?",
        href: "/faq#faq-fire-claim-documentation-improve",
      },
    ],
  },
  // Fire Supplement Denial FAQs (5)
  {
    id: "fire-supplement-denied-why",
    category: "fire_damage_claims",
    question: "Why are fire damage supplements denied?",
    answer:
      "Fire damage supplements are denied when documentation does not support billed scope — incomplete room photos, weak smoke and soot evidence, undocumented hidden damage, missing contents inventories, pack-out chain-of-custody gaps, unsupported code upgrades, disorganized estimates, or absent narratives. Desk reviewers approve scope they can verify; unverifiable lines get denied or reduced proportionally even when field work was legitimate.",
    relatedLinks: [
      {
        label: "Why Fire Damage Supplements Get Denied",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Fire Claim Documentation Checklist",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Fire damage supplement denial recovery",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "fire-supplement-denial-missing-documentation",
    category: "fire_damage_claims",
    question: "Can missing documentation cause a supplement denial?",
    answer:
      "Yes. Missing documentation is the leading cause of fire supplement denials and proportional reductions. Unlabeled photos, rooms without ceiling shots, absent migration narratives, incomplete HVAC evidence, contents lists without in-place images, and supplement packages without attachment-to-line-item indexes each give desk reviewers reason to deny unsupported scope — even when coverage exists for the damage type.",
    relatedLinks: [
      {
        label: "Why Fire Damage Supplements Get Denied",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Fire Claim Documentation Checklist",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "What documents should contractors include with a fire insurance supplement?",
        href: "/faq#faq-fire-supplement-checklist-documents",
      },
    ],
  },
  {
    id: "fire-supplement-denial-response",
    category: "fire_damage_claims",
    question: "How should contractors respond to a denied fire supplement?",
    answer:
      "Review the stated denial reasons line by line, identify the documentation gap for each denied item, and resubmit with targeted evidence — revised estimate, room-labeled photo index, smoke and soot support, HVAC attachments, contents inventories, and cover letter mapping exhibits to line numbers. Address every carrier question with named exhibits rather than resubmitting the same package. The fire damage supplement denial recovery guide covers resubmission workflow.",
    relatedLinks: [
      {
        label: "Fire damage supplement denial recovery",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
      {
        label: "Why Fire Damage Supplements Get Denied",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Supplement denial recovery guide",
        href: "/resources/blog/supplement-denial-recovery-guide",
      },
    ],
  },
  {
    id: "fire-supplement-denial-additional-docs",
    category: "fire_damage_claims",
    question: "Can contractors submit additional documentation after a denial?",
    answer:
      "Yes. Resubmission amends the same loss — it is not a new claim. Submit additional photos, discovery logs, HVAC reports, contents inventories, code citations, and revised estimate narratives addressing each stated denial reason. New evidence captured after repairs close access carries less weight than contemporaneous documentation; phased supplements submitted during investigation recover more scope than backfilled resubmissions.",
    relatedLinks: [
      {
        label: "Fire damage supplement denial recovery",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
      {
        label: "Why Fire Damage Supplements Get Denied",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Can contractors submit multiple fire supplements?",
        href: "/faq#faq-fire-supplement-multiple-submissions",
      },
    ],
  },
  {
    id: "fire-supplement-denial-common-reason",
    category: "fire_damage_claims",
    question: "What is the most common reason fire supplements fail?",
    answer:
      "Incomplete photo documentation is the most common preventable failure — missing rooms, absent ceiling and migration shots, unlabeled image dumps, and photo sets that do not match sketch and estimate room names. Weak smoke documentation and undocumented hidden damage during demolition are close second and third causes. Most failures are documentation problems, not coverage disputes — preventable with pre-submission checklists and repeatable workflow.",
    relatedLinks: [
      {
        label: "Why Fire Damage Supplements Get Denied",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Fire Claim Documentation Checklist",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "How many photos should be taken during a fire claim?",
        href: "/faq#faq-fire-claim-photo-volume",
      },
    ],
  },
  {
    id: "contents-inventory-documentation-insurance",
    category: "fire_damage_claims",
    question: "How should contents be documented after a fire?",
    answer:
      "Document room-by-room inventories with description, quantity, pre-loss condition, and damage type before pack-out. Photograph high-value and questionable items in place, capture serial and model numbers on appliances and electronics, and maintain chain-of-custody logs for off-site storage. Room labels must match across photos, inventory, sketch, and estimate.",
    relatedLinks: [
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Contents Documentation Procedure",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
      {
        label: "Pack-Out Documentation Guide",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
    ],
  },
  {
    id: "contents-inventory-insurance-required",
    category: "fire_damage_claims",
    question: "What inventory is required for insurance claims?",
    answer:
      "Carriers expect room-located inventories with item descriptions, quantities, condition notes, salvageability disposition, and photos for high-value items. Serial numbers, ownership documentation, and damage assessment notes support replacement lines. Pack-out and storage charges require inventory batch references and chain-of-custody logs.",
    relatedLinks: [
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Fire Damage Claim Documentation Guide (blog)",
        href: "/resources/blog/fire-damage-claim-documentation-guide",
      },
      {
        label: "Pack-Out Documentation Guide",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
    ],
  },
  {
    id: "contents-smoke-damage-documentation",
    category: "fire_damage_claims",
    question: "How do contractors document smoke-damaged personal property?",
    answer:
      "Photograph soot coating, odor penetration, and contamination on textiles, furniture, and electronics before handling. Note smoke versus heat damage separately, document failed cleaning tests when replacement is claimed, and separate contents evidence folders from structural smoke documentation. Specialty evaluations support electronics, art, and textile lines.",
    relatedLinks: [
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
    ],
  },
  {
    id: "contents-clean-vs-replace",
    category: "fire_damage_claims",
    question: "When should contents be replaced instead of cleaned?",
    answer:
      "Replace when heat damage, failed test-clean results, manufacturer guidance prohibiting restoration, or combined smoke-and-water exposure makes cleaning unreasonable. Document char, melt, or warping photos, specialty evaluation reports, and disposal justification before replacement lines. Carriers apply clean-only macros when disposition lacks supporting evidence.",
    relatedLinks: [
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Contents Documentation Procedure",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
    ],
  },
  {
    id: "contents-supplement-documentation",
    category: "fire_damage_claims",
    question: "What documentation supports contents supplements?",
    answer:
      "Contents supplements need room-located inventories with in-place photos, chain-of-custody logs, specialty cleaning reports, storage duration records, and a cover letter mapping inventory rows to unpaid lines. Additional discovered items, extended storage, electronics testing, and high-value replacement require contemporaneous documentation — not end-of-job lump additions.",
    relatedLinks: [
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Fire Damage Supplement Denial Recovery",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
      {
        label: "Pack-Out Documentation Guide",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
    ],
  },
  {
    id: "pack-out-documentation-insurance",
    category: "fire_damage_claims",
    question: "How should a pack-out be documented for insurance?",
    answer:
      "Document pre-pack-out room photos and inventory verification before first item movement. Maintain continuous chain-of-custody logs from site through transport, storage, and processing. Assign box and tote numbers tied to inventory batches, complete loading manifests and driver logs for each vehicle movement, and cross-reference every pack-out line to custody documentation before estimate submission.",
    relatedLinks: [
      {
        label: "Pack-Out Documentation Guide",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Contents Documentation Procedure",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
    ],
  },
  {
    id: "pack-out-chain-of-custody-documentation",
    category: "fire_damage_claims",
    question: "What chain of custody documentation is required?",
    answer:
      "Carriers expect unique item identifiers, barcode or label systems cross-referenced to inventory, box and tote numbering on loading manifests, vehicle and driver logs for each transfer, and customer or facility signatures at handoff points. Chain of custody must be continuous from first item movement through storage intake, processing, and return delivery — no undocumented gaps.",
    relatedLinks: [
      {
        label: "Pack-Out Documentation Guide",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      {
        label: "Contents Documentation Procedure",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
    ],
  },
  {
    id: "pack-out-storage-tracking",
    category: "fire_damage_claims",
    question: "How should contents be tracked during storage?",
    answer:
      "Log storage facility, vault or shelf assignment, intake date, and inventory batch reference at storage intake. Document environmental conditions for climate-sensitive items, periodic inspection logs when storage extends beyond initial estimate, and security measures when carriers question storage necessity. Tie every storage line to batch references and custody logs.",
    relatedLinks: [
      {
        label: "Pack-Out Documentation Guide",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
    ],
  },
  {
    id: "pack-out-charges-documentation",
    category: "fire_damage_claims",
    question: "What documentation supports pack-out charges?",
    answer:
      "Pack-out charges require room-located inventories with batch references, loading manifests tying boxes to inventory rows, driver and transport logs, storage intake documentation, and estimate cross-references mapping each manipulation, transport, and storage line to custody logs. Billing without inventory substance and manifest proof fails contents desk review.",
    relatedLinks: [
      {
        label: "Pack-Out Documentation Guide",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
    ],
  },
  {
    id: "pack-out-return-documentation",
    category: "fire_damage_claims",
    question: "How should returned contents be documented?",
    answer:
      "Document return delivery date, crew, vehicle manifest, and placement rooms with inventory batch cross-reference. Photograph reset placement for high-value items, obtain customer acknowledgement of return completion, and log any condition changes noted at delivery. Return delivery and repackaging lines require contemporaneous delivery logs — not end-of-job reconstruction.",
    relatedLinks: [
      {
        label: "Pack-Out Documentation Guide",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      {
        label: "Contents Documentation Procedure",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
    ],
  },
  {
    id: "fire-claims-underpaid-why",
    category: "fire_damage_claims",
    question: "Why are fire damage claims underpaid?",
    answer:
      "Fire damage claims get underpaid when documentation cannot support billed scope: incomplete structural evidence, weak smoke migration proof, missing contents photos and serial numbers, pack-out chain-of-custody gaps, and supplement packages assembled after production closes access. Desk reviewers reduce lines they cannot forward internally — proportional underpayment follows when photos, inventories, and logs lack room labels and contemporaneous timestamps.",
    relatedLinks: [
      {
        label: "Why fire damage claims get underpaid",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "What documentation do insurance companies require after a fire?",
        href: "/faq#faq-fire-claim-documentation-required",
      },
    ],
  },
  {
    id: "fire-claim-documentation-required",
    category: "fire_damage_claims",
    question: "What documentation do insurance companies require after a fire?",
    answer:
      "Carriers expect site safety clearance, exterior and origin-room photos, structural and demolition discovery evidence, smoke migration by room, HVAC status, suppression water damage, contents inventory with photos, pack-out chain of custody, and estimate narratives with room labels consistent across photos, sketch, and line items. Indexed evidence supports supplements when scope exceeds the carrier estimate.",
    relatedLinks: [
      {
        label: "Why fire damage claims get underpaid",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "How should fire damage be documented for insurance?",
        href: "/faq#faq-fire-damage-documentation-insurance",
      },
    ],
  },
  {
    id: "fire-supplement-contractor-documentation",
    category: "fire_damage_claims",
    question: "How do contractors support fire damage supplements?",
    answer:
      "Contractors support fire supplements by assigning a supplement owner, maintaining a gap log from intake, comparing carrier estimates within 48 hours, and submitting phased packages with cover letters that map contemporaneous evidence to line items. Field teams capture demolition, migration, HVAC, and pack-out proof during production — not after rebuild closes access — so resubmissions and reinspections have indexed exhibits ready.",
    relatedLinks: [
      {
        label: "Why fire damage claims get underpaid",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "What documentation supports fire damage supplements?",
        href: "/faq#faq-fire-supplement-documentation-support",
      },
    ],
  },
  {
    id: "fire-claim-documentation-delays",
    category: "fire_damage_claims",
    question: "What documentation mistakes delay fire claims?",
    answer:
      "Common delay triggers include unlabeled photos, inconsistent room names across sketch and inventory, missing pack-out chain of custody, HVAC scope without register photos, contents lists without in-place images, and supplement submissions without cover indexes. Carriers request additional information iteratively when files are not reviewer-ready — each round adds days before payment or partial approval.",
    relatedLinks: [
      {
        label: "Why fire damage claims get underpaid",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "How can contractors improve fire claim documentation?",
        href: "/faq#faq-fire-claim-documentation-improve",
      },
    ],
  },
  {
    id: "fire-claim-documentation-improve",
    category: "fire_damage_claims",
    question: "How can contractors improve fire claim documentation?",
    answer:
      "Improve fire claim documentation by indexing files by room and phase from intake, using consistent labels on every photo and log, capturing migration paths and demolition discovery contemporaneously, maintaining pack-out chain of custody, and submitting supplements with attachment-to-line-item cover indexes. Compare carrier estimates early, train field leads on smoke and contents capture standards, and hold rebuild until high-risk documentation gaps close.",
    relatedLinks: [
      {
        label: "Why fire damage claims get underpaid",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Documentation Standards Guide",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
    ],
  },
  {
    id: "fire-smoke-soot",
    category: "fire_damage_claims",
    question: "How are smoke and soot damage documented for carriers?",
    answer:
      "Effective files combine visual evidence, scope detail by room, cleaning method notes, and trade separation. Carriers scrutinize whether smoke damage is localized or systemic — documentation should match what your crew observed on site.",
    relatedLinks: [
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Smoke and Soot Damage Documentation Guide (blog)",
        href: "/resources/blog/smoke-and-soot-damage-documentation-guide",
      },
      { label: "Fire damage solutions", href: "/solutions/fire-damage" },
    ],
  },
  {
    id: "resources-fire-damage-documentation",
    category: "fire_damage_claims",
    question: "Do you have resources on fire damage claim documentation?",
    answer:
      "Yes. Our contractor resources library covers fire documentation, contents inventory standards, supplements, smoke and soot evidence, HVAC contamination, odor mitigation, and supplement denial recovery — organized for restoration and supplement teams.",
    relatedLinks: [
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
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
    relatedLinks: [
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      { label: "Contents restoration", href: "/solutions/contents" },
    ],
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
  {
    id: "fire-commercial-claims-documentation",
    category: "fire_damage_claims",
    question: "How are commercial fire claims documented?",
    answer:
      "Commercial fire claims require building- or suite-level indexing scaled to property footprint: documentation plan with folder index, building inventory, tenant coordination logs, separate structure and contents folders, engineering reports cross-referenced to estimate lines, and phased supplement submissions. Treat office, retail, industrial, and multi-tenant losses with indexed evidence per suite or zone — not residential single-file patterns.",
    relatedLinks: [
      {
        label: "Commercial Fire Claims Guide",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "fire-commercial-tenant-owner-responsibility",
    category: "fire_damage_claims",
    question: "How are owner and tenant responsibilities separated on commercial fire claims?",
    answer:
      "Review lease type before attributing scope. Building owners typically cover shell, common areas, and base building systems; tenants cover interior build-out, trade fixtures, and business personal property under triple-net or standard commercial leases. Label every inventory entry, photo folder, and estimate line as shell, tenant improvement, or contents to prevent coverage disputes on both policies.",
    relatedLinks: [
      {
        label: "Commercial Fire Claims Guide",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
      {
        label: "Contents Inventory Documentation Guide",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
    ],
  },
  {
    id: "fire-commercial-large-loss-scrutiny",
    category: "fire_damage_claims",
    question: "Why are commercial fire claims more heavily scrutinized?",
    answer:
      "Higher insured values trigger specialist adjusters, engineering review, and third-party audit. Carriers reconcile structural, smoke, HVAC, contents, and general conditions scope against building-indexed photos and engineering reports — not residential estimate macros. Tenant coordination, business interruption overlap, and phased supplements add review layers single-dwelling files rarely face. Weak building-level evidence invites proportional reductions across the entire commercial file.",
    relatedLinks: [
      {
        label: "Commercial Fire Claims Guide",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
      {
        label: "Why fire damage claims get underpaid",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
    ],
  },
  {
    id: "fire-commercial-business-interruption-role",
    category: "fire_damage_claims",
    question: "What documentation role do contractors play in business interruption on fire claims?",
    answer:
      "Mitigation contractors document contemporaneous operational facts: mitigation start and completion dates, zone release schedules, access restrictions, tenant displacement coordination, and phased production timelines. This supports insured BI narratives but does not replace coverage analysis or financial claim preparation. Share indexed timeline exports with the insured's BI preparer without preparing income projections or profit-and-loss valuations.",
    relatedLinks: [
      {
        label: "Commercial Fire Claims Guide",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
      {
        label: "Commercial water loss documentation guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "fire-commercial-supplement-opportunities",
    category: "fire_damage_claims",
    question: "What are common supplement opportunities on commercial fire claims?",
    answer:
      "Frequent gaps: hidden structural damage discovered during demolition, smoke migration beyond origin zones, HVAC contamination after system inspection, code upgrades on commercial rebuild, temporary facilities during extended mitigation, commercial contents pack-out and storage, environmental abatement, general conditions under-scoped on large-loss files, and engineering revisions expanding MEP scope. Submit phased supplements with contemporaneous photos and indexed reports before covering new assemblies.",
    relatedLinks: [
      {
        label: "Commercial Fire Claims Guide",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
      {
        label: "Fire damage supplement playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Fire supplement documentation support FAQ",
        href: "/faq#faq-fire-supplement-documentation-support",
      },
    ],
  },

  // Fire Code Upgrades (5)
  {
    id: "fire-code-upgrade-insurance-coverage",
    category: "fire_damage_claims",
    question: "Does insurance pay for fire code upgrades?",
    answer:
      "Fire code upgrades may be covered when ordinance and law endorsements apply and documentation proves the upgrade is required by the authority having jurisdiction — not contractor preference. Coverage depends on the individual policy, endorsement limits, and whether the carrier accepts permit records, inspection reports, and code citations tied to specific line items. Contractors document AHJ requirements and separate code scope from like-kind repair; carriers apply policy language. Outcomes vary by carrier and evidence quality.",
    relatedLinks: [
      {
        label: "Fire Code Upgrade Documentation Guide",
        href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
    ],
  },
  {
    id: "fire-ordinance-law-coverage",
    category: "fire_damage_claims",
    question: "What is Ordinance & Law coverage?",
    answer:
      "Ordinance and law coverage is a policy endorsement that may pay for costs associated with building code compliance during repair or rebuild — commonly structured as Coverage A (undamaged portion demolition), Coverage B (increased cost of construction), and Coverage C (contingent liability) where listed. Availability, limits, and sublimits vary by carrier and policy. Contractors document code triggers and AHJ evidence; they do not interpret policy language or guarantee coverage outcomes.",
    relatedLinks: [
      {
        label: "Fire Code Upgrade Documentation Guide",
        href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
      },
      {
        label: "Does insurance pay for fire code upgrades?",
        href: "/faq#faq-fire-code-upgrade-insurance-coverage",
      },
    ],
  },
  {
    id: "fire-code-upgrade-contractor-documentation",
    category: "fire_damage_claims",
    question: "How do contractors document required code upgrades?",
    answer:
      "Identify jurisdiction and adopted code edition early; obtain permit application and inspection records; assign one specific code citation or AHJ written requirement per upgrade line; capture tear-out photos showing prior non-compliant condition and install photos before close-in; separate code scope from like-kind repair in Xactimate; and write supplement narratives linking trigger, citation, photo reference, and quantity. Documentation wins code supplements — generic code lists trigger denials.",
    relatedLinks: [
      {
        label: "Fire Code Upgrade Documentation Guide",
        href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
      },
      {
        label: "Claim Documentation Standards",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "fire-code-upgrade-who-determines-required",
    category: "fire_damage_claims",
    question: "Who determines whether a code upgrade is required?",
    answer:
      "The authority having jurisdiction (AHJ) — typically the local building department, plan reviewer, or inspector — determines whether current code applies to repair or rebuild scope. Carriers evaluate whether documented requirements are tied to the loss and supported by permit and inspection evidence. Contractors research adopted code editions, submit permits, and log inspector communication; they do not unilaterally declare code requirements without AHJ or written code citation support.",
    relatedLinks: [
      {
        label: "Fire Code Upgrade Documentation Guide",
        href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
      },
      {
        label: "Fire damage supplement playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
    ],
  },
  {
    id: "fire-code-upgrade-supplement-denials",
    category: "fire_damage_claims",
    question: "Why are fire code upgrade supplements denied?",
    answer:
      "Common denial reasons: generic code lists without job-specific application, no permit or inspection documentation, missing tear-out photos of prior non-compliant condition, code lines buried in undifferentiated repair macros, owner preference upgrades argued as code requirements, no ordinance and law coverage on policy, and late supplements assembled after production closes access. Resubmit with indexed permit records, AHJ correction notices, and one citation per line — outcomes vary by carrier and file specifics.",
    relatedLinks: [
      {
        label: "Fire Code Upgrade Documentation Guide",
        href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
      },
      {
        label: "Why Fire Damage Supplements Get Denied",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Fire Damage Supplement Denial Recovery",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
    ],
  },

  // Fire Damage Supplement Playbook FAQs (5)
  {
    id: "fire-supplement-included-items",
    category: "fire_damage_claims",
    question: "What should be included in a fire damage supplement?",
    answer:
      "A complete fire damage supplement includes a cover letter with summary table, revised Xactimate estimate, indexed photo exhibits by room, migration path narrative, contents inventory pages, HVAC inspection evidence, demolition discovery photos, specialist report excerpts when used, and a correspondence log. Each requested line must map to at least one named exhibit.",
    relatedLinks: [
      {
        label: "Fire Claim Documentation Checklist",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Supplement Submission Workflow",
        href: "/resources/guides/general-claims/supplement-submission-guide",
      },
      { label: "Fire damage solutions", href: "/solutions/fire-damage" },
    ],
  },
  {
    id: "fire-supplement-when-to-submit",
    category: "fire_damage_claims",
    question: "When should contractors submit a fire supplement?",
    answer:
      "Submit when documented scope exceeds the carrier estimate and contemporaneous evidence exists — within 48 hours on visible estimate gaps, after demolition discovery, when HVAC inspection returns, or when pack-out inventory is complete. Phased submission beats waiting for final invoice: migration, HVAC, and contents supplements approve more readily when evidence is captured before rebuild obscures conditions.",
    relatedLinks: [
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "First 48 hours after a carrier estimate",
        href: "/resources/blog/first-48-hours-after-carrier-estimate",
      },
    ],
  },
  {
    id: "fire-supplement-documentation-evidence",
    category: "fire_damage_claims",
    question: "What documentation supports a fire damage supplement?",
    answer:
      "Fire supplement documentation includes indexed photos by room, migration path narrative, demolition discovery logs during tear-out, HVAC register and component photos, room-located contents inventories with pack-out chain of custody, engineering or IH report excerpts when used, and a cover letter mapping each attachment to estimate line numbers. Contemporaneous phased evidence outperforms end-of-job narrative assembled after production closes access.",
    relatedLinks: [
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "What documentation supports fire damage supplements?",
        href: "/faq#faq-fire-supplement-documentation-support",
      },
    ],
  },
  {
    id: "fire-supplement-multiple-submissions",
    category: "fire_damage_claims",
    question: "Can multiple supplements be submitted during a fire claim?",
    answer:
      "Yes. Fire claims commonly require phased supplements — migration and emergency scope first, then HVAC and contents after inspection, then demolition discovery and code upgrades during rebuild. Label each supplement version in CRM with phase and date so carrier reviewers track discovery without treating later submissions as duplicate billing.",
    relatedLinks: [
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Supplement Submission Workflow",
        href: "/resources/guides/general-claims/supplement-submission-guide",
      },
    ],
  },
  {
    id: "fire-supplement-commonly-missed-items",
    category: "fire_damage_claims",
    question: "What are the most commonly missed fire supplement items?",
    answer:
      "Commonly missed fire supplement items include smoke and soot cleaning in migration rooms, HVAC duct cleaning and component replacement, contents manipulation and pack-out, specialty soot cleaning procedures, odor mitigation equipment, selective demolition with pre-demo photos, temporary protection extensions, code-driven rebuild assemblies, and suppression water mitigation overlap documented separately from fire residue scope.",
    relatedLinks: [
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Why fire damage claims get underpaid",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Smoke & Soot Damage Documentation Guide",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
    ],
  },

  // Mold Claims (5)
  {
    id: "mold-remediation-docs",
    category: "mold_claims",
    question: "What documentation supports mold remediation claims?",
    answer:
      "Carriers typically review moisture source documentation, remediation protocol, containment detail, air scrubbing, and clearance testing where required. Photos, room-by-room scope, and alignment with IICRC-oriented practices strengthen the file.",
    relatedLinks: [
      { label: "Mold solutions", href: "/solutions/mold" },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
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
    relatedLinks: [
      { label: "Water damage solutions", href: "/solutions/water-damage" },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Category 3 Water Damage Documentation Guide",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
    ],
  },

  // Mold Documentation Cornerstone (5)
  {
    id: "mold-damage-documentation-insurance",
    category: "mold_claims",
    question: "How should contractors document mold damage for insurance claims?",
    answer:
      "Document the moisture source first, then visible and hidden growth with room-indexed photos, approximate affected area, moisture readings, and inspection narratives. Tie demolition, containment, cleaning, and removal scope to photo folders and readings before carrier submission. See the Mold Damage Documentation Guide for the full contractor standard.",
    relatedLinks: [
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      { label: "Mold solutions", href: "/solutions/mold" },
    ],
  },
  {
    id: "mold-claim-photos-required",
    category: "mold_claims",
    question: "What photos should be taken for mold claims?",
    answer:
      "Capture moisture source photos, wide room context, and close-ups of growth on each affected surface. Document hidden cavities, flooring layers, cabinet backs, crawlspaces, attics, and HVAC areas during access. Label every frame by room and date before cleaning or containment alters the scene.",
    relatedLinks: [
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Photo Documentation Standards",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-moisture-readings-support",
    category: "mold_claims",
    question: "Do moisture readings help support mold claims?",
    answer:
      "Yes. Pin and pinless meter readings on affected and reference materials support active moisture arguments, drying scope, and disputes over whether growth is historical versus current. Pair readings with thermal images when finishes conceal wet substrates.",
    relatedLinks: [
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Moisture Mapping Field Procedure",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
    ],
  },
  {
    id: "mold-insurance-documentation-required",
    category: "mold_claims",
    question: "What documentation do insurance companies request for mold damage?",
    answer:
      "Carriers typically request moisture source evidence, room-by-room growth photos, moisture readings, hidden cavity documentation, containment and removal photos, testing records when used, inspection narratives, and an estimate indexed to exhibits. Causation and scope are reviewed separately on mold files.",
    relatedLinks: [
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Claim Documentation Standards",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-hidden-damage-documentation",
    category: "mold_claims",
    question: "How should hidden mold be documented?",
    answer:
      "Photograph wall cavities, ceiling bays, subfloor, cabinet backs, crawlspaces, attics, and HVAC interiors during access with date-stamped images. Maintain a discovery log before repairs close openings — hidden mold supplements fail when cavity evidence is captured after remediation.",
    relatedLinks: [
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
    ],
  },

  // Mold Remediation Documentation Cornerstone (5)
  {
    id: "mold-remediation-work-documentation",
    category: "mold_claims",
    question: "How should contractors document mold remediation work?",
    answer:
      "Document pre-remediation baseline photos, containment setup, removal with before-during-after sequences, cleaning verification, equipment runtime logs, daily progress photos, and moisture readings through production. Tie every major line item to dated exhibits before carrier submission. See the Mold Remediation Documentation Guide for the full contractor standard.",
    relatedLinks: [
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      { label: "Mold solutions", href: "/solutions/mold" },
    ],
  },
  {
    id: "mold-remediation-photos-required",
    category: "mold_claims",
    question: "What photos should be taken during mold remediation?",
    answer:
      "Capture pre-remediation baseline, containment barriers and negative air setup, removal before-during-after sequences, cleaning verification on framing, equipment placement, daily progress, and disposal. Label every frame by room, phase, and date. Production photos prove billed scope — intake photos alone do not support remediation lines.",
    relatedLinks: [
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Photo Documentation Standards",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-remediation-moisture-readings-support",
    category: "mold_claims",
    question: "Should moisture readings be included with mold remediation documentation?",
    answer:
      "Yes. Log moisture readings on exposed substrates during removal and before close-in or rebuild. Readings support cleaning depth, dry-standard arguments, and disputes over whether materials were ready for rebuild. Pair with daily monitoring records when structural drying overlaps remediation scope.",
    relatedLinks: [
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Daily Monitoring Field Procedure",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
    ],
  },
  {
    id: "mold-remediation-insurance-documentation",
    category: "mold_claims",
    question: "What documentation supports mold remediation insurance claims?",
    answer:
      "Carriers review containment photos, removal quantity evidence, cleaning verification, equipment runtime logs, daily progress records, moisture readings, disposal records, contents inventory when applicable, remediation narratives, and estimates indexed to exhibits. Production evidence must be contemporaneous — undocumented remediation faces line-by-line reduction on review.",
    relatedLinks: [
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Claim Documentation Standards",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-remediation-containment-documentation",
    category: "mold_claims",
    question: "How should contractors document containment during mold remediation?",
    answer:
      "Photograph work area boundaries, critical barriers, negative air machine placement, air scrubber positions, decontamination chamber layout, and protection of unaffected areas at install. Take daily barrier condition photos on multi-day projects. Document pressure differential readings where measured. Containment photos support labor and equipment lines on carrier review.",
    relatedLinks: [
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      { label: "Mold solutions", href: "/solutions/mold" },
    ],
  },

  // Mold PRV Documentation Cornerstone (5)
  {
    id: "mold-prv-definition",
    category: "mold_claims",
    question: "What is Post-Remediation Verification (PRV)?",
    answer:
      "Post-Remediation Verification (PRV) is the documented proof that mold remediation work is complete and the site condition supports rebuild, re-occupancy, or final payment on an insurance claim. PRV includes scope completion records, final moisture readings, closeout photos, clearance documentation when testing was performed, equipment log closeout, and organized closeout packages — not the remediation work itself, but the evidence that closes the remediation chapter. Requirements vary by carrier, policy, and project type.",
    relatedLinks: [
      {
        label: "Post-Remediation Verification (PRV) Documentation Guide",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },
  {
    id: "mold-prv-documentation-insurance",
    category: "mold_claims",
    question: "How should contractors document PRV for insurance claims?",
    answer:
      "Document scope completion by room, final moisture readings compared to dry standard, closeout photo sets showing cleaned substrates and demobilized equipment, clearance or visual inspection records when applicable, equipment runtime logs through last active day, contents reconciliation when pack-out scope exists, and a written completion narrative with attachment index mapping exhibits to line items. Organize assessment, production, and closeout exhibits together for carrier desk review.",
    relatedLinks: [
      {
        label: "Post-Remediation Verification (PRV) Documentation Guide",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Claim Documentation Standards",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-prv-moisture-readings-required",
    category: "mold_claims",
    question: "Are moisture readings required during PRV?",
    answer:
      "Final moisture readings are among the most important PRV exhibits on mold files — carriers often withhold rebuild authorization or final payment when terminal readings against dry standard are missing. Record pin or pinless readings at all active map points on exposed framing, subfloor, and cavities before close-in. Align terminal readings with equipment pull date and last dry log entry. Requirements vary by carrier and whether structural drying overlapped remediation scope.",
    relatedLinks: [
      {
        label: "Post-Remediation Verification (PRV) Documentation Guide",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Daily Monitoring Field Procedure",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
      {
        label: "Dry Log Collection Procedure",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
    ],
  },
  {
    id: "mold-prv-closeout-package",
    category: "mold_claims",
    question: "What documentation belongs in a mold project closeout package?",
    answer:
      "A mold project closeout package typically includes: final estimate and change orders, scope completion narrative, terminal moisture readings and moisture maps, final photo sets, equipment runtime logs through last active day, clearance or visual inspection records, laboratory reports when testing was performed, contents reconciliation when pack-out scope exists, and an attachment index mapping exhibits to line items. Include assessment exhibits from the Mold Damage Documentation Guide and production exhibits from the Mold Remediation Documentation Guide alongside closeout records.",
    relatedLinks: [
      {
        label: "Post-Remediation Verification (PRV) Documentation Guide",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },
  {
    id: "mold-prv-clearance-documentation-required",
    category: "mold_claims",
    question: "Do insurance companies require clearance documentation after mold remediation?",
    answer:
      "Clearance documentation requirements vary by carrier, policy, property type, and jurisdiction — there is no universal rule that every mold file requires laboratory clearance. When clearance testing, visual inspection by a third party, or independent verification is performed or required, document sample location photos, chain-of-custody, lab reports, and narrative connecting results to remediation boundaries. When no testing is performed, document visual walk-through completion with dated photos showing clean substrates and removed containment instead.",
    relatedLinks: [
      {
        label: "Post-Remediation Verification (PRV) Documentation Guide",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },

  // Mold Protocol Documentation Cornerstone (5)
  {
    id: "mold-protocol-definition",
    category: "mold_claims",
    question: "What is a mold remediation protocol?",
    answer:
      "A mold remediation protocol is a written work plan — often prepared by an industrial hygienist or environmental consultant — that defines affected areas, project objectives, containment expectations, removal and cleaning methods, contents handling, and completion or verification criteria. On insurance claims, the protocol becomes a controlling exhibit that carriers compare to contractor photos, logs, and estimates. See the Mold Protocol Documentation Guide for how contractors document work performed under a protocol.",
    relatedLinks: [
      {
        label: "Mold Protocol Documentation Guide",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      { label: "Mold solutions", href: "/solutions/mold" },
    ],
  },
  {
    id: "mold-protocol-follow-exactly",
    category: "mold_claims",
    question: "Should contractors follow a mold protocol exactly?",
    answer:
      "Contractors should implement the written protocol and document compliance room by room. When field conditions differ — hidden mold, expanded contamination, moisture changes, or structural discoveries — document justified deviations with contemporaneous photos, a change log, and estimate updates rather than silently working outside the plan. Undocumented expansion is a common carrier reduction trigger even when the additional work was necessary.",
    relatedLinks: [
      {
        label: "Mold Protocol Documentation Guide",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
    ],
  },
  {
    id: "mold-protocol-change-documentation",
    category: "mold_claims",
    question: "How should protocol changes be documented?",
    answer:
      "Document every justified deviation the same day it appears: date-stamped discovery photos, a written deviation or change-log entry, moisture updates when relevant, notification records when required, and a change order or revised estimate page that cites the discovery exhibit. Pair change documentation with the original protocol PDF so desk reviewers can see what was written, what changed, and why.",
    relatedLinks: [
      {
        label: "Mold Protocol Documentation Guide",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Claim Documentation Standards",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-protocol-supporting-documentation",
    category: "mold_claims",
    question: "What documentation should accompany a mold protocol?",
    answer:
      "Include the written protocol with version date and author, protocol interpretation notes, field condition alignment logs, containment and scope photo sequences, moisture readings, daily logs, equipment runtime records, laboratory reports when applicable, estimate narratives cross-referenced to protocol sections, and change documentation for deviations. Link production evidence from the Mold Remediation Documentation Guide and closeout exhibits from the Post-Remediation Verification Documentation Guide when the protocol specifies completion criteria.",
    relatedLinks: [
      {
        label: "Mold Protocol Documentation Guide",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Post-Remediation Verification (PRV) Documentation Guide",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Claim Documentation Standards",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-protocol-field-conditions-differ",
    category: "mold_claims",
    question: "Can field conditions differ from the remediation protocol?",
    answer:
      "Yes. Field conditions often differ from a written protocol when hidden mold, expanded contamination, structural discoveries, or moisture changes appear during production. Document matches and differences in an alignment log with photo references, then issue change documentation for billed work outside the original plan. Differences are expected; undocumented differences are what carriers reduce.",
    relatedLinks: [
      {
        label: "Mold Protocol Documentation Guide",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "How should hidden mold be documented?",
        href: "/faq#faq-mold-hidden-damage-documentation",
      },
    ],
  },

  // Indoor Air Quality (IAQ) & Testing Documentation Cornerstone (5)
  {
    id: "mold-iaq-documentation",
    category: "mold_claims",
    question: "What is IAQ testing documentation on a mold insurance claim?",
    answer:
      "IAQ testing documentation is the organized evidence package that shows what was sampled, where and when, who collected and analyzed it, and how laboratory results connect to remediation rooms and billed testing lines. It typically includes sample location photos, sample-type logs, chain-of-custody forms, full lab reports, and a claim-facing narrative — not health advice or environmental consulting opinions. See the Indoor Air Quality (IAQ) & Testing Documentation Guide for contractor operational standards.",
    relatedLinks: [
      {
        label: "Indoor Air Quality (IAQ) & Testing Documentation Guide",
        href: "/resources/guides/mold/indoor-air-quality-testing-documentation-guide",
      },
      {
        label: "Mold Protocol Documentation Guide",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      { label: "Mold solutions", href: "/solutions/mold" },
    ],
  },
  {
    id: "mold-iaq-air-sampling",
    category: "mold_claims",
    question: "How should contractors document air sampling on mold claims?",
    answer:
      "Photograph sampler placement with room context, record sample IDs and collection date/time, note indoor versus outdoor or control samples when collected, and file chain-of-custody with the laboratory certificate. Keep air samples clearly separated from surface samples in the sample-type log so estimate lines and narratives do not conflate methods. Documentation proves what was collected for insurance review — it does not select which sampling method should be used.",
    relatedLinks: [
      {
        label: "Indoor Air Quality (IAQ) & Testing Documentation Guide",
        href: "/resources/guides/mold/indoor-air-quality-testing-documentation-guide",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Photo Documentation Standards",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-iaq-clearance-testing",
    category: "mold_claims",
    question: "How should clearance testing be documented after mold remediation?",
    answer:
      "When post-remediation clearance sampling is performed or required, photograph each clearance sample location in remediated rooms, complete chain-of-custody, attach full laboratory reports with sample ID crosswalks, and write a narrative connecting results to remediation boundaries. Include clearance exhibits in the PRV closeout package. Requirements vary by carrier, protocol, and project — when laboratory clearance is not performed, document visual verification instead and state that lab sampling was not part of the file.",
    relatedLinks: [
      {
        label: "Indoor Air Quality (IAQ) & Testing Documentation Guide",
        href: "/resources/guides/mold/indoor-air-quality-testing-documentation-guide",
      },
      {
        label: "Post-Remediation Verification (PRV) Documentation Guide",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },
  {
    id: "mold-iaq-lab-reports",
    category: "mold_claims",
    question: "How should laboratory reports be organized in a mold claim file?",
    answer:
      "File complete laboratory PDF certificates — not screenshots alone — with a sample ID crosswalk to location photos and chain-of-custody forms. Separate baseline and clearance reports into clearly labeled folders on multi-phase claims. Write a claim-facing narrative mapping results to rooms and estimate testing lines without health or medical conclusions. Resolve ID mismatches before carrier submission.",
    relatedLinks: [
      {
        label: "Indoor Air Quality (IAQ) & Testing Documentation Guide",
        href: "/resources/guides/mold/indoor-air-quality-testing-documentation-guide",
      },
      {
        label: "Claim Documentation Standards",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
      {
        label: "Mold Claim Documentation Checklist",
        href: "/resources/blog/mold-claim-documentation-checklist",
      },
    ],
  },
  {
    id: "mold-iaq-documentation-requirements",
    category: "mold_claims",
    question: "What documentation is typically required for IAQ and mold testing on insurance claims?",
    answer:
      "A carrier-ready testing package typically includes: sampling scope and request source, sample location photos, sample-type log, chain-of-custody, full laboratory reports with sample ID crosswalk, results narrative mapped to rooms and estimate lines, protocol crosswalk when a protocol applies, and an attachment index. Include the package in PRV closeout when clearance sampling supports project completion. Exact requirements vary by carrier and project — document what was performed on this file.",
    relatedLinks: [
      {
        label: "Indoor Air Quality (IAQ) & Testing Documentation Guide",
        href: "/resources/guides/mold/indoor-air-quality-testing-documentation-guide",
      },
      {
        label: "Mold Supplement Playbook for Contractors",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
    ],
  },

  // Commercial Mold Claims Guide (5)
  {
    id: "mold-commercial-claims-vs-residential",
    category: "mold_claims",
    question: "How do commercial mold claims differ from residential mold claims?",
    answer:
      "Commercial mold claims involve larger footprints, multi-unit indexing, tenant coordination, phased remediation under occupied conditions, protocol revisions by area, and PRV clearance packages that residential single-file patterns cannot organize. Contractors must scale documentation to a Building → Floor → Unit → Room hierarchy and maintain estimate change tracking — not simply take more photos of the same residential workflow.",
    relatedLinks: [
      {
        label: "Commercial Mold Claims Guide",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Commercial Water Loss Documentation Guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "mold-commercial-documentation-organization",
    category: "mold_claims",
    question: "How should contractors organize documentation for commercial mold claims?",
    answer:
      "Publish a commercial documentation plan within 24 hours using Building → Floor → Wing → Unit → Room → Work area naming on photos, moisture maps, equipment logs, protocol pages, PRV reports, and Xactimate sections. Spot-check that random artifacts resolve to the same area ID before any carrier package leaves the office. Separate moisture-source, remediation-production, protocol/PRV, contents, and estimate folders.",
    relatedLinks: [
      {
        label: "Commercial Mold Claims Guide",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Claim Documentation Standards",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
      {
        label: "How should multi-unit mold claims be documented?",
        href: "/faq#faq-mold-commercial-multi-unit-documentation",
      },
    ],
  },
  {
    id: "mold-commercial-multi-unit-documentation",
    category: "mold_claims",
    question: "How should multi-unit mold claims be documented?",
    answer:
      "Adopt property management unit numbers on every photo filename, moisture log row, inventory entry, and estimate section. Map moisture readings and growth by floor and unit, keep common-area scope separate from tenant-unit scope, and maintain tenant coordination logs for occupied buildings. Never mix photos or readings from different units in one unlabeled folder — mixed unit documentation is a top commercial mold denial driver.",
    relatedLinks: [
      {
        label: "Commercial Mold Claims Guide",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Commercial water apartment loss documentation",
        href: "/faq#faq-water-apartment-loss-documentation",
      },
    ],
  },
  {
    id: "mold-commercial-insurance-documentation",
    category: "mold_claims",
    question: "What documentation supports commercial mold insurance claims?",
    answer:
      "Moisture source investigation packs, floor-by-floor moisture and growth maps, containment and daily production records, protocol revisions, area-level PRV, contents and chain-of-custody records, building-indexed estimates with change tracking, commercial equipment logs by zone, and chronological carrier communication logs. Together these form a recoverable commercial mold claim package for desk review and reinspection.",
    relatedLinks: [
      {
        label: "Commercial Mold Claims Guide",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Mold Protocol Documentation Guide",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Post-Remediation Verification Documentation Guide",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
    ],
  },
  {
    id: "mold-commercial-phased-remediation",
    category: "mold_claims",
    question: "How should contractors document phased commercial mold remediation?",
    answer:
      "Document which floors, wings, or units are in active remediation versus held; photograph containment by work area; maintain daily production logs keyed to area IDs; index protocol revisions when discoveries expand scope; and clear PRV by area before re-occupancy — not as a single end-of-project event. Phased commercial work without area-indexed progress evidence fails large-loss desk review.",
    relatedLinks: [
      {
        label: "Commercial Mold Claims Guide",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Post-Remediation Verification Documentation Guide",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
    ],
  },

  // Mold Blog Bridge (5)
  {
    id: "mold-claims-underpaid-why",
    category: "mold_claims",
    question: "Why are mold insurance claims underpaid?",
    answer:
      "Mold claims get underpaid when documentation cannot support billed scope: missing moisture source evidence, unphotographed hidden growth, weak moisture readings, sparse remediation production records, absent PRV closeout, and disorganized supplement packages submitted before investigation completes. Desk reviewers reduce lines they cannot forward internally — proportional underpayment follows when causation, production, and verification evidence lack room labels and contemporaneous timestamps.",
    relatedLinks: [
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "How should contractors document mold damage for insurance claims?",
        href: "/faq#faq-mold-damage-documentation-insurance",
      },
    ],
  },
  {
    id: "mold-documentation-affects-claim-outcomes",
    category: "mold_claims",
    question: "How does documentation affect mold insurance claims?",
    answer:
      "Documentation quality drives mold claim outcomes because carriers evaluate moisture source causation, growth extent, remediation production, and post-remediation verification separately. Indexed photos, moisture logs, daily production records, and PRV closeout packages let desk reviewers approve scope without field visits — incomplete files produce proportional reductions even when work is legitimate.",
    relatedLinks: [
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Claim Documentation Standards",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-moisture-readings-settlement-support",
    category: "mold_claims",
    question: "Do moisture readings help support mold claim settlements?",
    answer:
      "Yes. Moisture readings support mold claim settlements by distinguishing active loss from historical conditions, documenting drying scope, and correlating growth to wet substrates. Pin and pinless readings paired with thermal imaging and moisture maps give carriers objective evidence for removal, cleaning, and rebuild lines — readings absent from the file are among the first scope groups reduced on review.",
    relatedLinks: [
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Do moisture readings help support mold claims?",
        href: "/faq#faq-mold-moisture-readings-support",
      },
    ],
  },
  {
    id: "mold-hidden-damage-affects-payment",
    category: "mold_claims",
    question: "Can hidden mold affect claim payments?",
    answer:
      "Hidden mold directly affects claim payments when cavity, assembly, and void contamination is documented during access — and reduces payments when investigation is skipped or reconstructed at supplement. Carriers approve hidden mold scope when contemporaneous cavity photos, moisture readings at substrate, and discovery logs exist before materials are removed; closed cavities without intake evidence rarely support full payment.",
    relatedLinks: [
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "How should hidden mold be documented?",
        href: "/faq#faq-mold-hidden-damage-documentation",
      },
    ],
  },
  {
    id: "mold-documentation-improves-settlement",
    category: "mold_claims",
    question: "What documentation improves mold insurance settlements?",
    answer:
      "Settlements improve when files include moisture source photos, room-indexed growth documentation, moisture maps and readings, remediation production logs with containment and removal evidence, PRV closeout with final readings and clearance records, and estimate narratives indexed to photo folders. Organized packages with consistent room labels across photos, sketch, and line items recover more legitimate scope than unlabeled photo rolls submitted without narrative.",
    relatedLinks: [
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Post-Remediation Verification (PRV) Documentation Guide",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
    ],
  },

  // Mold Documentation Mistakes Blog (5)
  {
    id: "mold-common-documentation-mistakes",
    category: "mold_claims",
    question: "What are the most common mold documentation mistakes?",
    answer:
      "The most common mold documentation mistakes are failing to document the moisture source, poor before/during/after photo sets, skipping moisture readings and mapping, ignoring hidden mold in cavities and assemblies, weak remediation production records, missing PRV closeout, undocumented protocol deviations, disorganized commercial building/floor/unit indexes, weak estimate narratives, and submitting incomplete packages too early. Each gap is preventable with contemporaneous, room-indexed evidence.",
    relatedLinks: [
      {
        label: "10 mold documentation mistakes that cost contractors money",
        href: "/resources/blog/mold-documentation-mistakes",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Can poor documentation reduce mold insurance payments?",
        href: "/faq#faq-mold-poor-documentation-reduces-payment",
      },
    ],
  },
  {
    id: "mold-poor-documentation-reduces-payment",
    category: "mold_claims",
    question: "Can poor documentation reduce mold insurance payments?",
    answer:
      "Yes. Poor documentation reduces mold insurance payments when carriers cannot verify causation, growth extent, remediation production, or post-remediation verification. Missing source photos, thin photo rolls, absent moisture readings, undocumented hidden mold, sparse daily logs, and incomplete PRV packages produce delayed review, disputed lines, and proportional reductions — even when the field work itself was legitimate.",
    relatedLinks: [
      {
        label: "10 mold documentation mistakes that cost contractors money",
        href: "/resources/blog/mold-documentation-mistakes",
      },
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
    ],
  },
  {
    id: "mold-moisture-readings-why-important",
    category: "mold_claims",
    question: "Why are moisture readings important on mold claims?",
    answer:
      "Moisture readings are important on mold claims because they separate active loss from historical conditions, support drying and removal scope, and correlate growth to wet substrates. Pin and pinless meter logs, confirmatory readings with thermal imaging, hygrometer data, and dated moisture maps give desk reviewers objective evidence — files without readings invite reductions and disputes on moisture-dependent line items.",
    relatedLinks: [
      {
        label: "10 mold documentation mistakes that cost contractors money",
        href: "/resources/blog/mold-documentation-mistakes",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Do moisture readings help support mold claim settlements?",
        href: "/faq#faq-mold-moisture-readings-settlement-support",
      },
    ],
  },
  {
    id: "mold-claim-documentation-organization",
    category: "mold_claims",
    question: "How should contractors organize mold claim documentation?",
    answer:
      "Organize mold claim documentation by room (or by building, floor, and unit on commercial losses) with naming conventions that match the sketch and estimate. Index photos by phase — before, during, after — keep moisture readings and maps in the same room folders, file daily production logs with remediation evidence, and assemble PRV closeout as a single indexed package. Consistent labels across photos, logs, protocol, and estimate narratives let desk reviewers approve scope without reconstructing the loss.",
    relatedLinks: [
      {
        label: "10 mold documentation mistakes that cost contractors money",
        href: "/resources/blog/mold-documentation-mistakes",
      },
      {
        label: "Commercial Mold Claims Guide",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Claim Documentation Standards",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-documentation-package-contents",
    category: "mold_claims",
    question: "What should be included in a mold documentation package?",
    answer:
      "A complete mold documentation package includes moisture source evidence, room-indexed before/during/after photos, moisture readings and maps, hidden mold investigation records when accessed, remediation production documentation (containment, removal, cleaning, equipment, daily logs), protocol and deviation notes when applicable, estimate narratives tied to evidence folders, and PRV closeout with final photos, clearance documentation, and moisture verification. Submit packages when the evidence set matches the phase being billed — not before.",
    relatedLinks: [
      {
        label: "10 mold documentation mistakes that cost contractors money",
        href: "/resources/blog/mold-documentation-mistakes",
      },
      {
        label: "Post-Remediation Verification Documentation Guide",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },

  // Mold Claim Documentation Checklist FAQs (5)
  {
    id: "mold-supplement-checklist-documents",
    category: "mold_claims",
    question:
      "What documents should contractors include with a mold insurance supplement?",
    answer:
      "Include a cover letter with attachment index, revised Xactimate estimate, moisture source package, room-labeled photo exhibits, moisture maps and reading logs, containment and equipment documentation, daily production and progress logs, protocol excerpts when used, PRV closeout evidence, and a correspondence log. Each requested line must map to at least one named exhibit before submission.",
    relatedLinks: [
      {
        label: "Mold Claim Documentation Checklist",
        href: "/resources/blog/mold-claim-documentation-checklist",
      },
      {
        label: "Mold Supplement Playbook for Contractors",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "What should be included in a mold damage supplement?",
        href: "/faq#faq-mold-supplement-included-items",
      },
    ],
  },
  {
    id: "mold-claim-photo-volume",
    category: "mold_claims",
    question: "How many photos should be taken during a mold claim?",
    answer:
      "Plan a minimum structured set per affected room: at least one wide shot, one mid-range wall-and-ceiling shot, and growth or substrate close-ups for each billed surface — plus moisture source and migration path images, containment setup, equipment in place, removal progress, and final PRV clearance photos. Complex mold files often exceed 150–300 labeled photos; volume matters less than complete room coverage and consistent labels across photos, moisture maps, sketch, and estimate.",
    relatedLinks: [
      {
        label: "Mold Claim Documentation Checklist",
        href: "/resources/blog/mold-claim-documentation-checklist",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "What photos should be taken for mold claims?",
        href: "/faq#faq-mold-claim-photos-required",
      },
    ],
  },
  {
    id: "mold-moisture-containment-documentation-support",
    category: "mold_claims",
    question:
      "What documentation supports moisture mapping and containment on mold claims?",
    answer:
      "Moisture mapping support includes a labeled floor plan or zone grid, dated meter readings with material type and values, initial and updated maps through drying, and reference readings when extent is disputed. Containment support includes pre-work barrier photos, HVAC isolation, negative air placement, pressure notes when measured, load-out path images, and protocol alignment or documented deviations. Indexed maps and containment exhibits defend drying, removal, and barrier line items on desk review.",
    relatedLinks: [
      {
        label: "Mold Claim Documentation Checklist",
        href: "/resources/blog/mold-claim-documentation-checklist",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },
  {
    id: "mold-daily-progress-documentation-required",
    category: "mold_claims",
    question:
      "Should contractors document daily drying and remediation progress on mold claims?",
    answer:
      "Yes — daily production logs and progress photos prove work happened on the days billed and connect initial conditions to dry standard. Record date, technician, rooms, tasks, equipment status, moisture updates, and discoveries the same day work occurs. Reconstructing a week of drying or removal at invoice time is how legitimate equipment and labor days disappear on desk review.",
    relatedLinks: [
      {
        label: "Mold Claim Documentation Checklist",
        href: "/resources/blog/mold-claim-documentation-checklist",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Daily monitoring documentation best practices",
        href: "/resources/blog/daily-monitoring-documentation-best-practices",
      },
    ],
  },
  {
    id: "mold-carrier-additional-documentation-why",
    category: "mold_claims",
    question:
      "Why do carriers request additional documentation during mold claims?",
    answer:
      "Carriers request additional documentation when files are not reviewer-ready — unlabeled photos, missing moisture source or map evidence, undocumented containment, equipment days without run logs, reconstructed daily notes, absent PRV closeout, or supplement packages without attachment-to-line-item indexes. Each request for information adds days before payment; complete pre-submission documentation prevents iterative RFIs and proportional reductions on unsupported lines.",
    relatedLinks: [
      {
        label: "Mold Claim Documentation Checklist",
        href: "/resources/blog/mold-claim-documentation-checklist",
      },
      {
        label: "10 mold documentation mistakes that cost contractors money",
        href: "/resources/blog/mold-documentation-mistakes",
      },
      {
        label: "What should be included in a mold documentation package?",
        href: "/faq#faq-mold-documentation-package-contents",
      },
    ],
  },

  // Why Mold Supplements Get Denied FAQs (5)
  {
    id: "mold-supplement-denied-why",
    category: "mold_claims",
    question: "Why are mold supplements denied?",
    answer:
      "Mold supplements are denied when documentation does not support billed scope — missing moisture source evidence, weak or unlabeled photos, absent protocol and containment records, unsupported remediation and equipment charges, incomplete PRV or IAQ closeout, disorganized estimates, or incomplete responses to carrier RFIs. Desk reviewers approve scope they can verify; unverifiable lines get denied or reduced proportionally even when field work was legitimate.",
    relatedLinks: [
      {
        label: "Why Mold Supplements Get Denied",
        href: "/resources/blog/why-mold-supplements-get-denied",
      },
      {
        label: "Mold Claim Documentation Checklist",
        href: "/resources/blog/mold-claim-documentation-checklist",
      },
      {
        label: "Mold Supplement Playbook for Contractors",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
    ],
  },
  {
    id: "mold-supplement-denial-documentation-gaps",
    category: "mold_claims",
    question: "Can documentation gaps cause a mold supplement denial?",
    answer:
      "Yes. Documentation gaps are the leading cause of mold supplement denials and proportional reductions. Missing moisture source packages, unlabeled photos, undocumented containment, equipment days without run logs, reconstructed daily notes, absent protocol excerpts, incomplete PRV or IAQ closeout, and packages without attachment-to-line-item indexes each give desk reviewers reason to deny unsupported scope — even when coverage exists for the damage type.",
    relatedLinks: [
      {
        label: "Why Mold Supplements Get Denied",
        href: "/resources/blog/why-mold-supplements-get-denied",
      },
      {
        label: "Mold Claim Documentation Checklist",
        href: "/resources/blog/mold-claim-documentation-checklist",
      },
      {
        label: "What documents should contractors include with a mold insurance supplement?",
        href: "/faq#faq-mold-supplement-checklist-documents",
      },
    ],
  },
  {
    id: "mold-supplement-denial-carrier-objections",
    category: "mold_claims",
    question:
      "How should contractors respond to carrier objections on mold supplements?",
    answer:
      "Review each stated objection or RFI line by line, identify the documentation gap, and resubmit with targeted evidence — revised estimate, room-labeled photo index, moisture source package, containment and equipment logs, protocol excerpts, PRV or IAQ exhibits, and a cover letter mapping new attachments to denied line numbers. Address every carrier question with named exhibits rather than resubmitting the same package. Professional tone and complete first responses recover more scope than volume of correspondence.",
    relatedLinks: [
      {
        label: "Why Mold Supplements Get Denied",
        href: "/resources/blog/why-mold-supplements-get-denied",
      },
      {
        label: "Mold Supplement Playbook for Contractors",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Why do carriers request additional documentation during mold claims?",
        href: "/faq#faq-mold-carrier-additional-documentation-why",
      },
    ],
  },
  {
    id: "mold-supplement-denial-estimate-support",
    category: "mold_claims",
    question: "How should estimate support be organized on mold supplements?",
    answer:
      "Organize the Xactimate estimate by phase and room — moisture investigation, containment, removal, cleaning, equipment, and PRV/IAQ closeout — with room-name parity across sketch, photos, moisture maps, and line items. Write narratives for protocol-driven and non-obvious methods, and include a cover letter indexing every attachment to specific estimate line numbers. Disorganized estimates cause reviewers to drop lines rather than reconcile gaps, even when field evidence exists.",
    relatedLinks: [
      {
        label: "Why Mold Supplements Get Denied",
        href: "/resources/blog/why-mold-supplements-get-denied",
      },
      {
        label: "Mold Supplement Playbook for Contractors",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "What should be included in a mold damage supplement?",
        href: "/faq#faq-mold-supplement-included-items",
      },
    ],
  },
  {
    id: "mold-supplement-denial-reinspection",
    category: "mold_claims",
    question: "When is reinspection appropriate on mold supplements?",
    answer:
      "Use reinspection when site facts still require verification — disputed moisture extent, cavity conditions photos cannot fully convey, containment or equipment placement questions, or clearance conditions the adjuster wants to confirm in person. Fix missing paperwork and index gaps with a documentation resubmission first. Prepare room lists, moisture maps, photo indexes, and open questions before the visit, and capture labeled supplemental photos the same day.",
    relatedLinks: [
      {
        label: "Why Mold Supplements Get Denied",
        href: "/resources/blog/why-mold-supplements-get-denied",
      },
      {
        label: "Mold Supplement Playbook for Contractors",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Mold Claim Documentation Checklist",
        href: "/resources/blog/mold-claim-documentation-checklist",
      },
    ],
  },

  // Mold Supplement Playbook FAQs (5)
  {
    id: "mold-supplement-included-items",
    category: "mold_claims",
    question: "What should be included in a mold damage supplement?",
    answer:
      "A complete mold damage supplement includes a cover letter with summary table, revised Xactimate estimate, indexed photo exhibits by room or zone, moisture source investigation package (map, readings, causation narrative), containment and equipment documentation, protocol excerpts when used, PRV closeout evidence, and a correspondence log. Each requested line must map to at least one named exhibit.",
    relatedLinks: [
      {
        label: "Mold Supplement Playbook for Contractors",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Supplement Submission Workflow",
        href: "/resources/guides/general-claims/supplement-submission-guide",
      },
      { label: "Mold solutions", href: "/solutions/mold" },
    ],
  },
  {
    id: "mold-supplement-when-to-submit",
    category: "mold_claims",
    question: "When should contractors submit a mold supplement?",
    answer:
      "Submit when documented scope exceeds the carrier estimate and contemporaneous evidence exists — within 48 hours on visible estimate gaps, after moisture investigation, when containment and equipment are documented, after protocol revisions, or when PRV clearance completes. Phased submission beats waiting for final invoice: moisture, containment, and PRV supplements approve more readily when evidence is captured before rebuild obscures conditions.",
    relatedLinks: [
      {
        label: "Mold Supplement Playbook for Contractors",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "First 48 hours after a carrier estimate",
        href: "/resources/blog/first-48-hours-after-carrier-estimate",
      },
    ],
  },
  {
    id: "mold-supplement-documentation-evidence",
    category: "mold_claims",
    question: "What documentation supports a mold damage supplement?",
    answer:
      "Mold supplement documentation includes indexed photos by room or zone, moisture source narrative with map and readings, containment build and negative-air photos, equipment day logs, protocol excerpts and revision photos when applicable, discovery-era cavity photos during openings, PRV clearance records, and a cover letter mapping each attachment to estimate line numbers. Contemporaneous phased evidence outperforms end-of-job narrative assembled after production closes access.",
    relatedLinks: [
      {
        label: "Mold Supplement Playbook for Contractors",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Mold Damage Documentation Guide",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Mold Remediation Documentation Guide",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },
  {
    id: "mold-supplement-multiple-submissions",
    category: "mold_claims",
    question: "Can multiple supplements be submitted during a mold claim?",
    answer:
      "Yes. Mold claims commonly require phased supplements — moisture investigation and damage scope first, then containment and equipment after production starts, then protocol revision and discovery during openings, then PRV and remaining rebuild at closeout. Label each supplement version in CRM with phase and date so carrier reviewers track discovery without treating later submissions as duplicate billing.",
    relatedLinks: [
      {
        label: "Mold Supplement Playbook for Contractors",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Supplement Submission Workflow",
        href: "/resources/guides/general-claims/supplement-submission-guide",
      },
    ],
  },
  {
    id: "mold-supplement-commonly-missed-items",
    category: "mold_claims",
    question: "What are the most commonly missed mold supplement items?",
    answer:
      "Commonly missed mold supplement items include moisture source investigation and mapping, containment build and airlocks, negative air and air scrubber equipment days, HEPA vacuuming beyond token quantities, selective demolition and cavity cleaning for hidden growth, protocol revision scope, contents protection or pack-out during remediation, and PRV or clearance documentation required before rebuild.",
    relatedLinks: [
      {
        label: "Mold Supplement Playbook for Contractors",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Why mold insurance claims get underpaid",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Mold documentation mistakes",
        href: "/resources/blog/mold-documentation-mistakes",
      },
    ],
  },

  // Contents Restoration (5)
  {
    id: "contents-pack-out",
    category: "contents_restoration",
    question: "How do you support contents pack-out and cleaning claims?",
    answer:
      "We review inventories, pack-out labor, storage, cleaning method codes, and specialty item handling. Contents files fail when inventories are incomplete or cleaning lines do not match item types — we help tighten that documentation.",
    relatedLinks: [
      { label: "Contents solutions", href: "/solutions/contents" },
      {
        label: "Pack-Out Documentation Guide",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
    ],
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
    relatedLinks: [
      {
        label: "Pack-Out Documentation Guide",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      { label: "Contents solutions", href: "/solutions/contents" },
    ],
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
  {
    id: "commercial-claims-handled",
    category: "insurance_supplements",
    question: "Does Claims Ninja handle commercial insurance claims?",
    answer:
      "Yes — commercial insurance claims are one of our specialties, not an occasional service. Claims Ninja supports restoration contractors on complex commercial and large-loss property claims nationwide with disciplined documentation, large-loss estimating, strategic supplementing, and carrier negotiation across roofing, water, fire, mold, contents, and reconstruction losses.",
    relatedLinks: [
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "Commercial Insurance Supplement Playbook",
        href: "/resources/guides/general-claims/commercial-insurance-supplement-playbook-for-contractors",
      },
    ],
  },
  {
    id: "commercial-apartment-complex-claims",
    category: "insurance_supplements",
    question: "Can Claims Ninja help with apartment complex insurance claims?",
    answer:
      "Yes. Claims Ninja supports apartment complex and multifamily claims with unit-by-unit documentation, common-area scope, tenant-impact tracking, and equipment records scaled to the property footprint. We help contractors organize multi-unit losses into indexed, defensible files that carriers review unit by unit — the standard commercial carriers expect on multifamily losses.",
    relatedLinks: [
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
      {
        label: "Multifamily & Apartment Insurance Claims Guide",
        href: "/resources/guides/general-claims/multifamily-apartment-insurance-claims-guide",
      },
      {
        label: "Water damage documentation for apartment complexes",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
    ],
  },
  {
    id: "commercial-apartment-insurance-claims",
    category: "insurance_supplements",
    question: "How do apartment insurance claims work for contractors?",
    answer:
      "Apartment insurance claims involve commercial-scale documentation across multiple units, common areas, and shared building systems under property manager access control. Contractors document damage unit by unit, separate common-element scope, coordinate entry through management, and submit indexed estimates that carriers reconcile by unit — not residential single-folder patterns applied to a complex.",
    relatedLinks: [
      {
        label: "Multifamily & Apartment Insurance Claims Guide",
        href: "/resources/guides/general-claims/multifamily-apartment-insurance-claims-guide",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
      {
        label: "Can Claims Ninja help with apartment complex insurance claims?",
        href: "/faq#faq-commercial-apartment-complex-claims",
      },
    ],
  },
  {
    id: "commercial-multifamily-documentation",
    category: "documentation",
    question: "How should contractors document multifamily insurance claims?",
    answer:
      "Publish a Building → Floor → Unit → Room index aligned to property management numbers within 24 hours. Document each affected unit in its own photo and estimate section, keep common areas and shared systems in separate packs, maintain property manager and tenant access logs, and submit a final package that cross-references billed lines to unit-indexed evidence.",
    relatedLinks: [
      {
        label: "Multifamily & Apartment Insurance Claims Guide",
        href: "/resources/guides/general-claims/multifamily-apartment-insurance-claims-guide",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "How should contractors document commercial insurance claims?",
        href: "/faq#faq-commercial-claim-documentation",
      },
    ],
  },
  {
    id: "commercial-unit-inspections",
    category: "documentation",
    question: "How should contractors organize unit inspections on apartment claims?",
    answer:
      "Work building by building and floor by floor using property management unit numbers. Complete overview-to-detail photos before leaving each unit, inspect adjacent units for migration, then document common areas and shared systems with cross-references to affected unit IDs. Same-day labeling prevents attribution failures at desk review.",
    relatedLinks: [
      {
        label: "Multifamily & Apartment Insurance Claims Guide",
        href: "/resources/guides/general-claims/multifamily-apartment-insurance-claims-guide",
      },
      {
        label: "How should contractors document multifamily insurance claims?",
        href: "/faq#faq-commercial-multifamily-documentation",
      },
      {
        label: "Photo Documentation Field Procedure",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "commercial-multifamily-common-areas",
    category: "documentation",
    question: "How should common areas be documented on multifamily claims?",
    answer:
      "Index corridors, lobbies, stairwells, laundry rooms, amenities, and exterior shared spaces separately from in-unit folders and estimates. Label locations to the site map so desk reviewers can attribute common-element scope without digging through unit galleries — burying common areas inside unit dumps is a primary multifamily underpayment driver.",
    relatedLinks: [
      {
        label: "Multifamily & Apartment Insurance Claims Guide",
        href: "/resources/guides/general-claims/multifamily-apartment-insurance-claims-guide",
      },
      {
        label: "How should common areas be documented on commercial water losses?",
        href: "/faq#faq-water-commercial-common-area-documentation",
      },
      {
        label: "Commercial Water Loss Documentation Guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "commercial-property-manager-coordination",
    category: "documentation",
    question: "How should contractors work with property managers on apartment insurance claims?",
    answer:
      "Establish a single property manager liaison, align unit numbering to management records on day one, log every authorization and unit entry event contemporaneously, and send unit-indexed status packages ownership groups can review. Verbal-only approvals and crew nickname unit lists fail commercial audits on multifamily files.",
    relatedLinks: [
      {
        label: "Multifamily & Apartment Insurance Claims Guide",
        href: "/resources/guides/general-claims/multifamily-apartment-insurance-claims-guide",
      },
      {
        label: "How do apartment insurance claims work for contractors?",
        href: "/faq#faq-commercial-apartment-insurance-claims",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-hoa-insurance-claims",
    category: "insurance_supplements",
    question: "How do HOA insurance claims work for contractors?",
    answer:
      "HOA and condominium association claims involve board and management authorization, master versus unit-owner policy boundaries, and documentation across common elements and units. Contractors index evidence by community, building, common element, and unit so carriers can attribute association versus individually owned scope — residential single-folder patterns invite reductions on association files.",
    relatedLinks: [
      {
        label: "HOA Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/hoa-insurance-claims-guide",
      },
      {
        label: "How should contractors document association insurance claims?",
        href: "/faq#faq-commercial-hoa-association-documentation",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-hoa-association-documentation",
    category: "documentation",
    question: "How should contractors document association insurance claims?",
    answer:
      "Publish a Community → Building → Common Element / Unit → Room index aligned to association records within 24 hours. Separate common-element packs from unit packs, maintain board and manager authorization logs, and submit estimates that mirror the same hierarchy with line-to-evidence cross-references.",
    relatedLinks: [
      {
        label: "HOA Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/hoa-insurance-claims-guide",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "How do HOA insurance claims work for contractors?",
        href: "/faq#faq-commercial-hoa-insurance-claims",
      },
    ],
  },
  {
    id: "commercial-hoa-master-policies",
    category: "documentation",
    question: "How do association master policies differ from homeowner policies on HOA claims?",
    answer:
      "Association master policies typically respond to common elements and association-owned property, while unit-owner policies (often HO-6 forms) may respond to individually owned interiors. Contractors should index common-element and unit evidence separately so desk reviewers can attribute scope — without treating the contractor as coverage counsel.",
    relatedLinks: [
      {
        label: "HOA Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/hoa-insurance-claims-guide",
      },
      {
        label: "How should common elements be documented on HOA claims?",
        href: "/faq#faq-commercial-hoa-common-elements",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-hoa-common-elements",
    category: "documentation",
    question: "How should common elements be documented on HOA claims?",
    answer:
      "Index roofs, exteriors, corridors, amenities, grounds, and shared systems separately from unit interiors. Label locations to the association site map and keep estimate sections distinct so desk reviewers can attribute common-element scope without digging through unit galleries — burying common elements inside unit dumps is a primary association underpayment driver.",
    relatedLinks: [
      {
        label: "HOA Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/hoa-insurance-claims-guide",
      },
      {
        label: "How do association master policies differ from homeowner policies?",
        href: "/faq#faq-commercial-hoa-master-policies",
      },
      {
        label: "HOA Roofing Claims Guide",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
    ],
  },
  {
    id: "commercial-hoa-claim-coordination",
    category: "documentation",
    question: "How should contractors coordinate HOA claims with boards and managers?",
    answer:
      "Establish a primary property manager contact and board liaison when needed, align building and unit numbering to association records on day one, log every authorization and unit entry event contemporaneously, and send area-indexed status packages the association can forward. Verbal-only approvals fail association and carrier audits.",
    relatedLinks: [
      {
        label: "HOA Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/hoa-insurance-claims-guide",
      },
      {
        label: "How do HOA insurance claims work for contractors?",
        href: "/faq#faq-commercial-hoa-insurance-claims",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-warehouse-insurance-claims",
    category: "insurance_supplements",
    question: "How do warehouse insurance claims work for contractors?",
    answer:
      "Warehouse and distribution claims organize around facility zone indexes — high-bay storage, racking aisles, docks, and building systems — not office suite folders. Contractors publish Facility → Building → Zone naming, document racking and docks separately, maintain occupied-facility access logs, and submit estimates that mirror the same hierarchy so carriers can attribute scope.",
    relatedLinks: [
      {
        label: "Industrial & Warehouse Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/industrial-warehouse-insurance-claims-guide",
      },
      {
        label: "How should contractors document industrial property insurance claims?",
        href: "/faq#faq-commercial-industrial-property-documentation",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-industrial-property-documentation",
    category: "documentation",
    question: "How should contractors document industrial property insurance claims?",
    answer:
      "Publish a Facility → Building → Zone / System / Equipment index aligned to facility site maps within 24 hours. Separate building-systems and equipment packs from finishes, maintain occupied-facility authorization logs, and submit estimates that mirror the same hierarchy with line-to-evidence cross-references.",
    relatedLinks: [
      {
        label: "Industrial & Warehouse Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/industrial-warehouse-insurance-claims-guide",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "How do warehouse insurance claims work for contractors?",
        href: "/faq#faq-commercial-warehouse-insurance-claims",
      },
    ],
  },
  {
    id: "commercial-equipment-documentation",
    category: "documentation",
    question: "How should equipment and machinery be documented on industrial insurance claims?",
    answer:
      "Treat each major asset as its own documentation chamber: overview, nameplate or serial when visible, pre-disturbance damage detail, and reciprocal zone IDs. Do not merge machinery into unlabeled warehouse finish galleries — equipment underpayment often starts with inseparable photos.",
    relatedLinks: [
      {
        label: "Industrial & Warehouse Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/industrial-warehouse-insurance-claims-guide",
      },
      {
        label: "How should contractors document industrial property insurance claims?",
        href: "/faq#faq-commercial-industrial-property-documentation",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-warehouse-inspections",
    category: "documentation",
    question: "How should warehouse inspections be structured for insurance claims?",
    answer:
      "Pre-inspect with facility maps, then sequence exterior and roof, building systems, zones, equipment, racking, and docks. Complete overview-to-detail photos and same-day labeling before opening the next footprint block — backlog labeling destroys aisle and dock attribution on large warehouse files.",
    relatedLinks: [
      {
        label: "Industrial & Warehouse Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/industrial-warehouse-insurance-claims-guide",
      },
      {
        label: "How do warehouse insurance claims work for contractors?",
        href: "/faq#faq-commercial-warehouse-insurance-claims",
      },
      {
        label: "Photo Documentation Field Procedure",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "commercial-industrial-restoration-claims",
    category: "documentation",
    question: "How do industrial restoration claims differ from other commercial restoration claims?",
    answer:
      "Industrial restoration adds high-bay volume, process equipment, racking, docks, and continuous-operations constraints under facility safety rules. Documentation and estimates must follow zone, system, and equipment indexes — office and retail patterns invite underpayment on industrial and warehouse files.",
    relatedLinks: [
      {
        label: "Industrial & Warehouse Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/industrial-warehouse-insurance-claims-guide",
      },
      {
        label: "How do warehouse insurance claims work for contractors?",
        href: "/faq#faq-commercial-warehouse-insurance-claims",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-retail-insurance-claims",
    category: "insurance_supplements",
    question: "How do retail property insurance claims work for contractors?",
    answer:
      "Retail and shopping-center claims organize around suite and common-area indexes — storefronts, tenant spaces, corridors, and shared systems — not residential room folders. Contractors publish Property → Building → Suite naming, document tenant improvements and common areas separately, maintain occupied-business access logs, and submit estimates that mirror the same hierarchy so carriers can attribute scope.",
    relatedLinks: [
      {
        label: "Retail & Office Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/retail-office-insurance-claims-guide",
      },
      {
        label: "How do office building insurance claims work for contractors?",
        href: "/faq#faq-commercial-office-building-insurance-claims",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-office-building-insurance-claims",
    category: "insurance_supplements",
    question: "How do office building insurance claims work for contractors?",
    answer:
      "Office building claims organize by floor and suite IDs matching property management directories, with separate packs for demised offices, common areas, and building systems. After-hours and security constraints become claim evidence when they drive phased labor and temporary protection — residential templates invite underpayment on multi-floor office files.",
    relatedLinks: [
      {
        label: "Retail & Office Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/retail-office-insurance-claims-guide",
      },
      {
        label: "How do retail property insurance claims work for contractors?",
        href: "/faq#faq-commercial-retail-insurance-claims",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-retail-office-tenant-improvements",
    category: "documentation",
    question:
      "How should contractors document leasehold and tenant improvements on retail and office claims?",
    answer:
      "Obtain written direction from ownership, property management, or tenants on shell versus leasehold boundaries — do not interpret leases. Photograph TI finishes and fixtures with suite IDs before demolition, keep suite-labeled TI packs separate from base-building folders, and avoid mixing leasehold evidence into unlabeled commercial galleries.",
    relatedLinks: [
      {
        label: "Retail & Office Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/retail-office-insurance-claims-guide",
      },
      {
        label: "How should contractors document tenant improvements on commercial claims?",
        href: "/faq#faq-commercial-tenant-improvements-documentation",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
    ],
  },
  {
    id: "commercial-multi-tenant-damage-documentation",
    category: "documentation",
    question: "How should multi-tenant commercial damage be documented?",
    answer:
      "Maintain a suite directory index matching property management labels, complete overview-to-detail packs per suite, document common areas and shared systems with reciprocal IDs to affected suites, and structure estimates by suite so desk reviewers can attribute quantities — sample-suite photo dumps fail multi-tenant review.",
    relatedLinks: [
      {
        label: "Retail & Office Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/retail-office-insurance-claims-guide",
      },
      {
        label: "How do retail property insurance claims work for contractors?",
        href: "/faq#faq-commercial-retail-insurance-claims",
      },
      {
        label: "How should contractors document multiple buildings on a commercial claim?",
        href: "/faq#faq-commercial-multi-building-documentation",
      },
    ],
  },
  {
    id: "commercial-occupied-business-restoration",
    category: "documentation",
    question: "How should contractors restore occupied commercial businesses during a claim?",
    answer:
      "Map open versus closed suites on day one, coordinate after-hours and security access through ownership or property management, log authorizations by suite ID, and phase mitigation so operations can continue in undamaged areas. Contemporaneous access logs defend after-hours labor and temporary barriers — end-of-job narratives do not.",
    relatedLinks: [
      {
        label: "Retail & Office Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/retail-office-insurance-claims-guide",
      },
      {
        label: "How do office building insurance claims work for contractors?",
        href: "/faq#faq-commercial-office-building-insurance-claims",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  // Large-loss commercial specialty (5)
  {
    id: "commercial-large-loss-insurance-claims",
    category: "insurance_supplements",
    question: "What qualifies as a large-loss commercial insurance claim for contractors?",
    answer:
      "Operationally, large-loss commercial claims involve multi-building or multi-zone footprints, high evidence volume, phased restoration, specialty consultants, or specialist adjuster scrutiny that residential templates cannot organize. Treat indexing complexity — not an internal dollar guess — as the contractor trigger to publish a documentation plan and assign a documentation lead within 24 hours. The same discipline applies across multifamily, HOA, retail, office, industrial, warehouse, hospitality, institutional, and mixed-use properties.",
    relatedLinks: [
      {
        label: "Large-Loss Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-large-loss-multi-area-documentation",
    category: "documentation",
    question: "How should contractors document multiple buildings or areas on a large commercial loss?",
    answer:
      "Publish a Property → Building → Floor / Unit / Suite / Zone index aligned to facility records, treat each building as a top-level node, complete overview-to-detail packs per area, nest shared systems under the buildings they serve with reciprocal IDs, and structure estimates so desk reviewers can attribute quantities without parsing an unlabeled campus dump. Update the master index the same day new areas are discovered.",
    relatedLinks: [
      {
        label: "Large-Loss Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
      },
      {
        label: "How should contractors document multiple buildings on a commercial claim?",
        href: "/faq#faq-commercial-multi-building-documentation",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-large-loss-mitigation-documentation",
    category: "documentation",
    question: "How should contractors document emergency mitigation on a large commercial loss?",
    answer:
      "Log who authorized stop-loss, index extraction, drying start, temporary protection, board-up, and safety actions by building and area ID, photograph equipment placement per chamber with asset tags visible, and keep mitigation packages separate from reconstruction estimates. Property-level equipment photos do not defend multi-area lines — reconcile counts to area logs before invoice or supplement submission.",
    relatedLinks: [
      {
        label: "Large-Loss Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
      },
      {
        label: "Commercial Water Loss Documentation Guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Large-loss water mitigation documentation best practices",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
    ],
  },
  {
    id: "commercial-large-loss-estimate-organization",
    category: "documentation",
    question: "How should contractors organize estimates on large commercial losses?",
    answer:
      "Mirror the campus documentation index with building, area, system, and phase sections; validate quantities against area-indexed measurements and photos; separate general conditions, temporary protection, and supervision with authorization references keyed to location IDs; and never bury multi-structure scope in a single commercial finishes block. Version estimates and never overwrite baselines needed for delta review.",
    relatedLinks: [
      {
        label: "Large-Loss Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
      },
      {
        label: "How should contractors document large-loss commercial projects?",
        href: "/faq#faq-commercial-large-loss-project-documentation",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-large-loss-reinspection-supplements",
    category: "documentation",
    question: "How should contractors prepare for large-loss reinspections and supplements?",
    answer:
      "Pre-stage indexed exhibits by disputed building and area, bring quantity validation worksheets that map high-dollar lines to labeled photos and logs, confirm access with ownership or property management, and log the walk the same day. Package supplements by location ID with discovery photos, revised sketches, and estimate deltas — not unlabeled campus dumps for a single-area dispute.",
    relatedLinks: [
      {
        label: "Large-Loss Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
      },
      {
        label: "Supplement Submission Guide",
        href: "/resources/guides/general-claims/supplement-submission-guide",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-national-restoration-programs",
    category: "insurance_supplements",
    question: "Do you support national restoration companies?",
    answer:
      "Yes. Claims Ninja supports national restoration companies and multi-market programs with standardized documentation and estimating support across the portfolio. Nationwide coverage, consistent claim workflows, and experienced commercial claims professionals help large operators keep documentation quality and supplement discipline consistent from market to market.",
    relatedLinks: [
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-large-loss-support",
    category: "insurance_supplements",
    question: "Can Claims Ninja assist with large-loss commercial claims?",
    answer:
      "Yes. Large-loss commercial claims are a core focus. Claims Ninja supports phased reconstruction scopes, general conditions, multiple mobilizations, engineering coordination, and code-driven upgrades — with the estimating discipline and evidence quality these higher-scrutiny claims require. We help contractors document and negotiate legitimate large-loss recovery without building an internal claims department.",
    relatedLinks: [
      {
        label: "Large-Loss Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
      {
        label: "Large-loss water mitigation documentation best practices",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
    ],
  },
  {
    id: "commercial-property-types-supported",
    category: "insurance_supplements",
    question: "What commercial property types does Claims Ninja support?",
    answer:
      "Claims Ninja supports the full range of commercial property losses — apartment communities, HOAs and condominiums, hotels and hospitality, office buildings, retail centers, industrial facilities, healthcare facilities, schools and municipal buildings, churches, and mixed-use developments. Each property type carries its own stakeholder, documentation, and estimating complexity, and our workflows are built for it.",
    relatedLinks: [
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-claim-documentation",
    category: "documentation",
    question: "How should contractors document commercial insurance claims?",
    answer:
      "Scale documentation to the commercial footprint: publish a Building → Floor → Suite/Unit → Room index within 24 hours, capture property identification and occupancy status, sequence damage photos by area, validate quantities against measurements, separate shell from tenant improvements when required, and submit an indexed claim package that cross-references billed lines to dated evidence. Residential single-folder patterns fail on multi-tenant and multi-building losses.",
    relatedLinks: [
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
      {
        label: "Claim Documentation Standards",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "commercial-large-loss-project-documentation",
    category: "documentation",
    question: "How should contractors document large-loss commercial projects?",
    answer:
      "Assign a documentation lead, publish a written documentation plan within 24 hours, maintain daily reports by area, reconcile equipment and materials to field logs, document change orders with contemporaneous discovery photos, and organize the final package by building or phase. Large-loss files without a plan produce inconsistent evidence that desk reviewers discount proportionally.",
    relatedLinks: [
      {
        label: "Large-Loss Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "How should contractors document commercial insurance claims?",
        href: "/faq#faq-commercial-claim-documentation",
      },
    ],
  },
  {
    id: "commercial-multi-building-documentation",
    category: "documentation",
    question: "How should contractors document multiple buildings on a commercial claim?",
    answer:
      "Treat each building as a top-level index node with its own photo sequences, daily reports, and estimate sections. Maintain a master campus index, assign documentation owners per major building or phase, and never merge buildings into a single residential-style folder. Spot-check that random artifacts resolve to the same building and area IDs used on the estimate.",
    relatedLinks: [
      {
        label: "Large-Loss Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "How should contractors document large-loss commercial projects?",
        href: "/faq#faq-commercial-large-loss-project-documentation",
      },
    ],
  },
  {
    id: "commercial-tenant-improvements-documentation",
    category: "documentation",
    question: "How should contractors document tenant improvements on commercial claims?",
    answer:
      "Identify shell versus tenant improvement (TI) boundaries at intake using lease summaries or property management direction. Photograph TI finishes and fixtures with suite IDs before demolition, separate TI scope and documentation from base-building packages when ownership or policies differ, and avoid mixing leasehold evidence into undifferentiated commercial folders.",
    relatedLinks: [
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "Retail & Office Commercial Insurance Claims Guide for Contractors",
        href: "/resources/guides/general-claims/retail-office-insurance-claims-guide",
      },
      {
        label:
          "How should contractors document leasehold and tenant improvements on retail and office claims?",
        href: "/faq#faq-commercial-retail-office-tenant-improvements",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-insurance-documentation-requirements",
    category: "documentation",
    question: "What documentation do commercial insurance claims require?",
    answer:
      "At minimum: property identification and building information, occupancy and use records, area-indexed damage photos, emergency mitigation logs, validated scope and quantities, code and ordinance support when upgrades apply, multi-area index, tenant improvement notes on multi-tenant losses, business interruption field support notes, equipment and material reconciliation, daily project reports, change documentation, and an indexed final claim package. Peril-specific commercial guides add water, fire, mold, and roofing procedures under these standards.",
    relatedLinks: [
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "Commercial Water Loss Documentation Guide",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Commercial Fire Claims Guide",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
    ],
  },
  {
    id: "commercial-property-claims-underpaid",
    category: "insurance_supplements",
    question: "Why do commercial property insurance claims get underpaid?",
    answer:
      "Commercial property claims get underpaid when documentation cannot defend the full footprint of work — incomplete building indexes, missing quantity validation, unlabeled photos, missed code and ordinance support, unclear tenant improvement boundaries, undocumented shared systems, incomplete mitigation logs, weak estimate organization, and communication gaps with carriers. Desk reviewers approve what they can forward without calling the field; proportional reductions follow when commercial files reuse residential documentation patterns.",
    relatedLinks: [
      {
        label: "Why Commercial Insurance Claims Get Underpaid",
        href: "/resources/blog/why-commercial-insurance-claims-get-underpaid",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
      {
        label: "How do documentation gaps cause commercial claim underpayment?",
        href: "/faq#faq-commercial-documentation-gaps-underpayment",
      },
    ],
  },
  {
    id: "commercial-documentation-gaps-underpayment",
    category: "documentation",
    question: "How do documentation gaps cause commercial claim underpayment?",
    answer:
      "Documentation gaps cause commercial underpayment when billed scope cannot be attributed to a labeled Building → Floor → Suite/Unit → Room index. Missing area labels on photos, merged multi-building folders, absent daily reports by zone, and reconstructed mitigation chronologies at invoice force desk reviewers to reduce lines proportionally — even when the field work was legitimate. Publish the commercial index within 24 hours and keep the same labels across photos, logs, sketches, and estimate sections.",
    relatedLinks: [
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "Why Commercial Insurance Claims Get Underpaid",
        href: "/resources/blog/why-commercial-insurance-claims-get-underpaid",
      },
      {
        label: "How should contractors document commercial insurance claims?",
        href: "/faq#faq-commercial-claim-documentation",
      },
      {
        label: "Why do commercial property insurance claims get underpaid?",
        href: "/faq#faq-commercial-property-claims-underpaid",
      },
    ],
  },
  {
    id: "commercial-estimate-accuracy",
    category: "documentation",
    question: "Why does estimate accuracy matter on commercial insurance claims?",
    answer:
      "Estimate accuracy matters on commercial claims because carriers reconcile room dimensions, roof squares, demolition quantities, and equipment days against labeled sketches and field measurements. Mismatched quantities are a primary underpayment vector — desk reviewers cut soft numbers before debating unit price. Validate quantities within 48 hours of carrier estimate receipt, photograph measurement references for large assemblies, and reconcile billed equipment and materials to contemporaneous field logs.",
    relatedLinks: [
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "Why Commercial Insurance Claims Get Underpaid",
        href: "/resources/blog/why-commercial-insurance-claims-get-underpaid",
      },
      {
        label: "Xactimate estimate review checklist for contractors",
        href: "/resources/blog/xactimate-estimate-review-checklist-contractors",
      },
      {
        label: "How does better documentation improve commercial claim settlements?",
        href: "/faq#faq-commercial-settlement-documentation",
      },
    ],
  },
  {
    id: "commercial-code-ordinance-upgrades",
    category: "documentation",
    question: "How should contractors document code and ordinance upgrades on commercial claims?",
    answer:
      "Document code and ordinance upgrades separately from like-kind repair: cite the applicable AHJ, permit, or inspection requirement per line, photograph the pre-upgrade non-compliant condition before covering it, and map each code item to the estimate. Generic code lists without job-specific application invite denial. Confirm ordinance and law endorsement applicability with the adjuster early — coverage depends on policy language and evidence quality.",
    relatedLinks: [
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "Fire Code Upgrade Documentation Guide",
        href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
      },
      {
        label: "Code Upgrade Documentation Guide",
        href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
      },
      {
        label: "Why Commercial Insurance Claims Get Underpaid",
        href: "/resources/blog/why-commercial-insurance-claims-get-underpaid",
      },
    ],
  },
  {
    id: "commercial-settlement-documentation",
    category: "documentation",
    question: "How does better documentation improve commercial claim settlements?",
    answer:
      "Better documentation improves commercial settlements by removing the primary excuse for proportional reduction: unverifiable scope. Indexed area labels, validated quantities, complete photo sets, code and TI separation, shared-system evidence, and mitigation logs make files easier for carriers to evaluate and forward without RFIs. That does not guarantee full payment on every line — policy limits still apply — but it turns desk review from a reduction exercise into an approval workflow.",
    relatedLinks: [
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "Why Commercial Insurance Claims Get Underpaid",
        href: "/resources/blog/why-commercial-insurance-claims-get-underpaid",
      },
      {
        label: "Claim documentation approval rates",
        href: "/resources/blog/claim-documentation-approval-rates",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-documentation-checklist",
    category: "documentation",
    question:
      "What should a commercial claims documentation checklist include?",
    answer:
      "A commercial claims documentation checklist should cover pre-site prep, a Building → Floor → Suite/Unit → Room master index, property and occupancy records, initial damage photos, emergency mitigation logs, multi-area folders, roof and envelope exhibits, interior and MEP documentation, shell versus TI separation, equipment and contents evidence, daily progress reports, code and ordinance support when upgrades apply, supplement attachment indexes, and a signed final submission package. Run the checklist from intake through submission so every billed line maps to a named, dated exhibit.",
    relatedLinks: [
      {
        label: "Commercial Claims Documentation Checklist",
        href: "/resources/blog/commercial-claims-documentation-checklist",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "How should contractors document commercial insurance claims?",
        href: "/faq#faq-commercial-claim-documentation",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-inspection-checklist",
    category: "documentation",
    question:
      "What should a commercial insurance inspection checklist cover?",
    answer:
      "A commercial insurance inspection checklist should confirm claim and contact data, lock area naming before photos, capture building identification and occupancy status, walk every affected suite and common area with wide/mid/close-up sequences, note envelope and MEP systems, flag shell versus TI boundaries, start a gap list against the carrier estimate, and stage daily report templates. Inspection without a locked index produces unlabeled evidence that desk reviewers cannot attribute across multi-tenant footprints.",
    relatedLinks: [
      {
        label: "Commercial Claims Documentation Checklist",
        href: "/resources/blog/commercial-claims-documentation-checklist",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "What should a commercial claims documentation checklist include?",
        href: "/faq#faq-commercial-documentation-checklist",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-photo-documentation",
    category: "documentation",
    question: "How should contractors handle commercial photo documentation?",
    answer:
      "Handle commercial photo documentation as an indexing workflow: enable date stamps, lock Building → Floor → Suite/Unit → Room labels before the first image, capture wide/mid/close-up sequences for every billed area, photograph origin points, envelope elevations, MEP status, TI finishes, and equipment in place, and upload to area folders the same day. Volume matters less than complete area coverage and labels that match the sketch and estimate — unlabeled photo dumps invite proportional cuts on commercial files.",
    relatedLinks: [
      {
        label: "Commercial Claims Documentation Checklist",
        href: "/resources/blog/commercial-claims-documentation-checklist",
      },
      {
        label: "Photo Documentation Field Procedure",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "How should contractors organize a commercial claim file?",
        href: "/faq#faq-commercial-claim-file-organization",
      },
    ],
  },
  {
    id: "commercial-claim-file-organization",
    category: "documentation",
    question: "How should contractors organize a commercial claim file?",
    answer:
      "Organize a commercial claim file around a master Building → Floor → Suite/Unit → Room index published within 24 hours. Keep separate folders for each major building or suite, store photos and daily logs under the same area IDs used on the estimate, separate shell from TI packages when ownership differs, cross-link shared MEP systems, and maintain a cover attachment index for supplements. Never merge multi-building or multi-tenant evidence into a single residential-style folder.",
    relatedLinks: [
      {
        label: "Commercial Claims Documentation Checklist",
        href: "/resources/blog/commercial-claims-documentation-checklist",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "How should contractors document multiple buildings on a commercial claim?",
        href: "/faq#faq-commercial-multi-building-documentation",
      },
      {
        label: "Large-Loss Commercial Insurance Claims Guide",
        href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
      },
    ],
  },
  {
    id: "commercial-final-submission",
    category: "documentation",
    question:
      "What belongs in a commercial claim final submission package?",
    answer:
      "A commercial claim final submission package should include a cover letter with attachment index, revised estimate with area labels matching photos and logs, the master area index, continuous emergency and daily mitigation logs, equipment and material reconciliation, TI/shell separation on multi-tenant losses, code and ordinance exhibits when upgrades are billed, quantity validation for large assemblies, correspondence notes, and package-owner sign-off with a versioned CRM upload. Delay submission or drop unsupported lines when checklist items are incomplete.",
    relatedLinks: [
      {
        label: "Commercial Claims Documentation Checklist",
        href: "/resources/blog/commercial-claims-documentation-checklist",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "What should a commercial claims documentation checklist include?",
        href: "/faq#faq-commercial-documentation-checklist",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  // Commercial Insurance Supplement Playbook FAQs (5)
  {
    id: "commercial-insurance-supplements",
    category: "insurance_supplements",
    question: "What are commercial insurance supplements for contractors?",
    answer:
      "Commercial insurance supplements are the contractor packages that document and request payment for legitimate scope beyond the carrier's initial estimate on commercial property losses — missing buildings or suites, quantity corrections, temporary protection, general conditions and supervision, equipment days, labor, materials, code and ordinance support, and multi-building organization. Unlike residential single-dwelling supplements, commercial workflows require Building → Floor → Suite/Unit → Room indexing, phased cycles, and navigable exhibit packages. This is an operational documentation workflow — not policy interpretation, public adjusting, legal advice, or claim negotiation.",
    relatedLinks: [
      {
        label: "Commercial Insurance Supplement Playbook for Contractors",
        href: "/resources/guides/general-claims/commercial-insurance-supplement-playbook-for-contractors",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
      {
        label: "What belongs in a commercial supplement package?",
        href: "/faq#faq-commercial-supplement-package",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-supplement-documentation",
    category: "insurance_supplements",
    question: "How should contractors document commercial insurance supplements?",
    answer:
      "Document commercial supplements with a locked master area index, contemporaneous photos labeled by building and area ID, scope and quantity validation worksheets, equipment/labor/material logs, temporary protection and general conditions exhibits, and code support when upgrades are billed. Every requested line must map to at least one named exhibit before submission. Build evidence during the job — not at invoice — and separate multi-building packages by location ID so desk reviewers can navigate in one session.",
    relatedLinks: [
      {
        label: "Commercial Insurance Supplement Playbook for Contractors",
        href: "/resources/guides/general-claims/commercial-insurance-supplement-playbook-for-contractors",
      },
      {
        label: "Commercial Claims Documentation Checklist",
        href: "/resources/blog/commercial-claims-documentation-checklist",
      },
      {
        label: "What are commercial insurance supplements for contractors?",
        href: "/faq#faq-commercial-insurance-supplements",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-supplement-package",
    category: "insurance_supplements",
    question: "What belongs in a commercial supplement package?",
    answer:
      "A commercial supplement package should include a cover letter with summary table and attachment index, a revised estimate with area-labeled sections, the master Building → Floor → Suite/Unit → Room index, indexed photo exhibits, equipment/labor/material logs, temporary protection and general conditions exhibits, code and ordinance support when upgrades are billed, and a correspondence log with submission and follow-up dates. Dollar totals on the cover letter must match the estimate delta, and every high-dollar line must reference a named exhibit.",
    relatedLinks: [
      {
        label: "Commercial Insurance Supplement Playbook for Contractors",
        href: "/resources/guides/general-claims/commercial-insurance-supplement-playbook-for-contractors",
      },
      {
        label: "Supplement Submission Workflow",
        href: "/resources/guides/general-claims/supplement-submission-guide",
      },
      {
        label: "How should contractors document commercial insurance supplements?",
        href: "/faq#faq-commercial-supplement-documentation",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-reinspection-support",
    category: "insurance_supplements",
    question: "How should contractors support commercial reinspections?",
    answer:
      "Support commercial reinspections by confirming access with ownership or property management, pre-walking disputed buildings and areas, staging photo stations and quantity worksheets by area ID, preparing a one-page briefing with estimate line references, assigning a field escort with indexed exhibits, answering with evidence rather than opinions, and logging outcomes in CRM the same day. Stage only disputed locations — not an unlabeled campus binder for a single-suite dispute. Update the revised estimate within one week of the visit.",
    relatedLinks: [
      {
        label: "Commercial Insurance Supplement Playbook for Contractors",
        href: "/resources/guides/general-claims/commercial-insurance-supplement-playbook-for-contractors",
      },
      {
        label: "Large-Loss Commercial Insurance Claims Guide",
        href: "/resources/guides/general-claims/large-loss-commercial-insurance-claims-guide",
      },
      {
        label: "How should contractors prepare for large-loss reinspections and supplements?",
        href: "/faq#faq-commercial-large-loss-reinspection-supplements",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-supplement-timelines",
    category: "insurance_supplements",
    question: "What timelines should contractors follow on commercial supplements?",
    answer:
      "Review the carrier estimate within 48 hours of receipt, submit when documented scope exceeds the estimate and contemporaneous evidence exists, follow up at 3, 7, and 14 business days, and expect multiple supplement cycles on commercial files — emergency/mitigation, demolition discovery, then rebuild and code. Track every version's status in CRM until settlement reconciliation. Phased submission beats waiting for final invoice, when production often obscures evidence and carriers treat late packages as billing disputes.",
    relatedLinks: [
      {
        label: "Commercial Insurance Supplement Playbook for Contractors",
        href: "/resources/guides/general-claims/commercial-insurance-supplement-playbook-for-contractors",
      },
      {
        label: "First 48 Hours After Carrier Estimate Checklist",
        href: "/resources/guides/general-claims/first-48-hours-checklist",
      },
      {
        label: "What belongs in a commercial supplement package?",
        href: "/faq#faq-commercial-supplement-package",
      },
      { label: "Commercial insurance claims", href: "/solutions/commercial" },
    ],
  },
  // Overlooked estimate line items FAQs (5)
  {
    id: "overlooked-insurance-estimate-items",
    category: "insurance_supplements",
    question: "What are the most overlooked line items in insurance estimates?",
    answer:
      "The most overlooked line items typically include temporary protection, general conditions (supervision, dumpsters, permits), equipment charges and monitoring, contents manipulation, detach and reset, code-related scope, access-driven labor or equipment, and moisture investigation beyond the first sketch. These gaps appear because first-pass estimates optimize for speed and templates — not because the work is optional. Contractors catch them with early estimate review and contemporaneous documentation.",
    relatedLinks: [
      {
        label: "The Most Overlooked Line Items in Insurance Estimates",
        href: "/resources/blog/most-overlooked-line-items-in-insurance-estimates",
      },
      {
        label: "Carrier Estimate Review Guide",
        href: "/resources/guides/general-claims/carrier-estimate-review-guide",
      },
      {
        label: "Why are line items missing from carrier insurance estimates?",
        href: "/faq#faq-missing-line-items-insurance-estimates",
      },
    ],
  },
  {
    id: "missing-line-items-insurance-estimates",
    category: "insurance_supplements",
    question: "Why are line items missing from carrier insurance estimates?",
    answer:
      "Line items are missing when templates, macros, remote inspections, and file-authority limits understate job-specific conditions — occupied access, protection, specialty equipment, code upgrades, and discovery after tear-out. Omissions are usually structural, not personal. Compare the carrier estimate to field conditions within 48 hours, keep a gap list, and capture labeled photos and logs while conditions remain visible.",
    relatedLinks: [
      {
        label: "The Most Overlooked Line Items in Insurance Estimates",
        href: "/resources/blog/most-overlooked-line-items-in-insurance-estimates",
      },
      {
        label: "Why carrier estimates miss line items",
        href: "/resources/blog/why-carrier-estimates-miss-line-items",
      },
      {
        label: "What are estimate review best practices for contractors?",
        href: "/faq#faq-estimate-review-best-practices",
      },
    ],
  },
  {
    id: "documentation-supporting-supplements",
    category: "documentation",
    question: "What documentation supports insurance estimate supplements?",
    answer:
      "Supplements are supported by labeled dated photos, measurement or quantity worksheets, dry logs and moisture maps, equipment placement proof, permit or AHJ references for code items, contents and detach/reset records, and a cover attachment index mapping each exhibit to estimate lines. Capture evidence during production — not at final invoice — so desk reviewers can approve without reconstructing the job from memory.",
    relatedLinks: [
      {
        label: "The Most Overlooked Line Items in Insurance Estimates",
        href: "/resources/blog/most-overlooked-line-items-in-insurance-estimates",
      },
      {
        label: "Documentation Standards Guide",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
      {
        label: "Commercial Insurance Claims Documentation Guide",
        href: "/resources/guides/general-claims/commercial-insurance-claims-documentation-guide",
      },
    ],
  },
  {
    id: "estimate-review-best-practices",
    category: "insurance_supplements",
    question: "What are estimate review best practices for contractors?",
    answer:
      "Best practices: assign a review owner within hours of estimate receipt, compare sketch and rooms to field conditions within 48 hours, start a written gap list, capture missing documentation the same day, classify gaps as supplement-ready or needs more evidence, and route supported items through your supplement workflow before full production absorbs unpaid scope. Use a checklist — not memory — across roofing, water, fire, and commercial files.",
    relatedLinks: [
      {
        label: "The Most Overlooked Line Items in Insurance Estimates",
        href: "/resources/blog/most-overlooked-line-items-in-insurance-estimates",
      },
      {
        label: "Xactimate estimate review checklist",
        href: "/resources/blog/xactimate-estimate-review-checklist-contractors",
      },
      {
        label: "First 48 hours after a carrier estimate",
        href: "/resources/blog/first-48-hours-after-carrier-estimate",
      },
      {
        label: "Carrier Estimate Review Guide",
        href: "/resources/guides/general-claims/carrier-estimate-review-guide",
      },
    ],
  },
  {
    id: "common-estimate-mistakes-contractors",
    category: "insurance_supplements",
    question: "What are common insurance estimate mistakes contractors make?",
    answer:
      "Common mistakes include treating the carrier estimate as final, mobilizing full production before comparison, skipping photos until supplement time, omitting general conditions and protection from gap lists, mixing pricing disputes with unsupported scope, and submitting supplements without an attachment-to-line-item index. Fix the process: early review, contemporaneous documentation, and organized packages improve clarity — outcomes still vary by carrier and file strength.",
    relatedLinks: [
      {
        label: "The Most Overlooked Line Items in Insurance Estimates",
        href: "/resources/blog/most-overlooked-line-items-in-insurance-estimates",
      },
      {
        label: "Insurance supplementing guide for contractors",
        href: "/resources/blog/insurance-supplementing-guide-contractors",
      },
      {
        label: "What are the most overlooked line items in insurance estimates?",
        href: "/faq#faq-overlooked-insurance-estimate-items",
      },
    ],
  },
] as const;
