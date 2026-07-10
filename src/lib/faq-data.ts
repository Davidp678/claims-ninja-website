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
      "Supplements need indexed photos by room, migration path narrative, demolition discovery logs, HVAC and contents evidence, engineering or testing reports where used, and a cover letter mapping attachments to line items. Phased supplements with contemporaneous evidence outperform end-of-job narrative assembled after production closes access.",
    relatedLinks: [
      {
        label: "Fire Damage Documentation Guide",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/blog/fire-damage-supplement-playbook-for-contractors",
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
        href: "/resources/blog/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Fire Damage Supplement Denial Recovery",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
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
        href: "/resources/blog/fire-damage-supplement-playbook-for-contractors",
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
        href: "/resources/blog/fire-damage-supplement-playbook-for-contractors",
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
        href: "/resources/blog/fire-damage-supplement-playbook-for-contractors",
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
      "Contractors support fire supplements by capturing contemporaneous evidence during demolition, migration review, and pack-out — then submitting phased packages with cover letters mapping attachments to line items. Assign a supplement owner, maintain a gap log from intake, compare carrier estimates within 48 hours, and resubmit hidden damage, smoke, HVAC, and contents scope with indexed photos before rebuild closes access.",
    relatedLinks: [
      {
        label: "Why fire damage claims get underpaid",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Fire Damage Supplement Playbook",
        href: "/resources/blog/fire-damage-supplement-playbook-for-contractors",
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
] as const;
