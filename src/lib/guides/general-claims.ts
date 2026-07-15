import { defineGuide, GUIDE_PUBLISHED_AT } from "@/lib/guides/guide-builder";

export const GENERAL_CLAIMS_GUIDES = [
  defineGuide({
    slug: "first-48-hours-checklist",
    title: "First 48 Hours After Carrier Estimate Checklist",
    excerpt:
      "Hour-by-hour intake checklist for the first 48 hours after receiving a carrier estimate — catalog the file, validate scope against field conditions, assign owners, and open supplement gaps before production absorbs unpaid work.",
    category: "general-claims",
    guideType: "checklist",
    roles: ["field", "office", "project-manager"],
    claimPhase: "intake",
    tags: [
      "Intake",
      "Carrier Estimate",
      "Estimate Review",
      "Documentation",
      "Supplements",
      "Xactimate",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 12,
    featured: true,
    seoTitle: "First 48 Hours After Carrier Estimate Checklist for Contractors",
    seoDescription:
      "Contractor checklist for the first 48 hours after a carrier estimate: file setup, scope validation, documentation capture, and supplement gap identification before mobilizing production.",
    relatedBlogSlugs: ["first-48-hours-after-carrier-estimate"],
    relatedGuideSlugs: ["claim-file-audit-guide", "documentation-standards-guide"],
    purpose:
      "Establish a repeatable 48-hour intake window so every carrier estimate is reviewed, documented, and routed before crews commit to scope the carrier never approved. This checklist prevents silent margin loss on under-scoped files.",
    whenToUse: [
      {
        condition: "A carrier estimate arrives — PDF, Xactimate export, or adjuster email",
        signal: "Estimate received timestamp in CRM or email inbox",
      },
      {
        condition: "Production is scheduled within 72 hours of estimate receipt",
        signal: "Work order or mobilization date on calendar",
      },
      {
        condition: "The homeowner signed based on carrier numbers before field validation",
        signal: "Contract signed with carrier ACV or RCV as budget reference",
      },
      {
        condition: "Storm volume creates backlog and files sit unreviewed",
        signal: "Estimate age exceeds 24 hours without assigned review owner",
      },
    ],
    requiredDocumentation: [
      {
        id: "carrier-estimate",
        label: "Carrier estimate (PDF or Xactimate)",
        required: true,
        detail: "Confirm claim number, date of loss, price list date, and deductible on cover page.",
      },
      {
        id: "policy-declarations",
        label: "Policy declarations page or coverage summary",
        required: true,
        detail: "Verify RCV vs ACV, endorsements, and deductible type before scope discussions.",
      },
      {
        id: "field-photos-intake",
        label: "Intake photo set from site visit or pre-production walk",
        required: true,
        detail: "Minimum: four elevations, affected rooms, damage detail, and access conditions.",
      },
      {
        id: "scope-notes",
        label: "Field scope notes or internal estimate draft",
        required: true,
        detail: "Room list, measurements, material grades, and trade breakdown from PM or estimator.",
      },
      {
        id: "claim-contact-log",
        label: "Adjuster and homeowner contact log",
        required: true,
        detail: "Name, phone, email, and carrier file number for every party on the claim.",
      },
      {
        id: "gap-list",
        label: "Gap list started in CRM or shared tracker",
        required: false,
        detail: "Running list of missing line items, quantity disputes, and code-driven scope.",
      },
    ],
    steps: [
      {
        id: "hour-0-catalog",
        title: "Hour 0–4: Catalog and assign ownership",
        owner: "office",
        actions: [
          "Create or update the claim file in CRM with claim number, carrier, adjuster, and estimate receipt date.",
          "Assign an estimate review owner and a field documentation owner — both names visible in the file.",
          "Download the carrier estimate, note price list date, and flag if sketch or room list looks incomplete.",
          "Send internal notification that the 48-hour review clock has started.",
        ],
        notes: "Do not order long-lead materials or schedule full crew mobilization until Step 2 is complete.",
      },
      {
        id: "hour-4-compare",
        title: "Hour 4–24: Compare estimate to field conditions",
        owner: "project-manager",
        actions: [
          "Walk the carrier sketch or room list against actual site layout — note missing rooms, wrong dimensions, or omitted trades.",
          "Compare line items to field photos: materials, quantities, access, and general conditions.",
          "Document every gap with a photo reference and proposed line item or narrative note.",
          "Confirm deductible, depreciation holdback, and mortgagee requirements with the homeowner.",
        ],
      },
      {
        id: "hour-24-document",
        title: "Hour 24–36: Capture missing documentation",
        owner: "field",
        actions: [
          "Shoot labeled intake photos per documentation standards — room ID visible in every frame.",
          "Record moisture readings, material samples, or code observations that the carrier estimate ignored.",
          "Upload photos and notes to the shared claim folder the same business day.",
          "Flag any safety or stabilization work already performed without carrier authorization.",
        ],
      },
      {
        id: "hour-36-route",
        title: "Hour 36–48: Route gaps and set production guardrails",
        owner: "office",
        actions: [
          "Consolidate the gap list and classify each item: supplement-ready, needs re-inspection, or informational.",
          "Route to supplement workflow if total gap value exceeds your internal threshold or affects production sequence.",
          "Communicate scope boundaries to the homeowner in writing — what carrier approved vs. what is pending supplement.",
          "Set a production hold or phased mobilization plan for high-risk gap categories (structural, code, multi-trade).",
        ],
      },
    ],
    qualityGates: [
      {
        id: "owner-assigned",
        label: "Review owner and field owner assigned within 4 hours of estimate receipt",
        required: true,
      },
      {
        id: "gap-list-started",
        label: "Gap list exists with at least one validated item or explicit no-gap sign-off",
        required: true,
      },
      {
        id: "photos-uploaded",
        label: "Intake photo set uploaded and labeled before hour 36",
        required: true,
      },
      {
        id: "homeowner-scope-letter",
        label: "Homeowner informed of pending supplement items before full production start",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Mobilizing full production on carrier numbers without field comparison",
        impact: "Crews perform unpaid scope; supplement requests look retroactive and get denied.",
        correction: "Hold or phase production until gap list is reviewed and homeowner acknowledges pending items.",
      },
      {
        mistake: "Treating the carrier estimate as the contract budget",
        impact: "Sales and production teams absorb margin when scope gaps surface mid-job.",
        correction: "Use the carrier estimate as a draft — validate against field scope and internal estimate before commitment.",
      },
      {
        mistake: "Delaying photo capture until supplement submission",
        impact: "Evidence is stale, rooms are demoed, and adjusters cannot verify pre-existing conditions.",
        correction: "Capture labeled intake photos within the first 24 hours on every file.",
      },
      {
        mistake: "No written record of homeowner scope expectations",
        impact: "Disputes over what was promised vs. what carrier approved damage trust and collections.",
        correction: "Send a scope summary email listing carrier-approved work and items pending supplement review.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier sketch omits rooms or understates square footage",
        documentation: "Labeled room photos with tape measure or laser reading in frame; revised sketch overlay.",
        lineItemHint: "Additional area calculations for flooring, drywall, paint, or mitigation scope.",
      },
      {
        trigger: "General conditions missing — protection, debris, permits, supervision",
        documentation: "Site photos showing access constraints, occupied rooms, or permit-required work.",
        lineItemHint: "Project management, debris removal, temporary protection, permit fees.",
      },
      {
        trigger: "Material grade mismatch between field and carrier estimate",
        documentation: "Photos of existing materials with close-ups; manufacturer spec or like-kind justification.",
        lineItemHint: "Upgrade line items or R&R for premium finishes the carrier priced as standard.",
      },
    ],
    faq: [
      {
        question: "Can we start full production before the 48-hour review is complete?",
        answer:
          "Only phased or emergency work that is documented same-day. Hold full crew mobilization and long-lead material orders until the gap list is reviewed and the homeowner acknowledges items pending supplement.",
      },
      {
        question: "Who owns the 48-hour review on a typical file?",
        answer:
          "Office catalogs the file and assigns owners within four hours. The project manager compares the carrier sketch to field conditions by hour 24. Field captures missing photos by hour 36. Supplement routing happens by hour 48.",
      },
    ],
  }),

  defineGuide({
    slug: "claim-file-audit-guide",
    title: "Claim File Audit Workflow",
    excerpt:
      "Office workflow to audit an insurance claim file before supplement submission — verify documentation completeness, estimate alignment, carrier requirements, and approval readiness.",
    category: "general-claims",
    guideType: "workflow",
    roles: ["office", "supplement-coordinator"],
    claimPhase: "documentation",
    tags: [
      "File Audit",
      "Documentation",
      "Supplement Prep",
      "Quality Control",
      "Claim Administration",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 15,
    seoTitle: "Insurance Claim File Audit Workflow for Contractors",
    seoDescription:
      "Step-by-step claim file audit for contractors: documentation checklist, estimate alignment, carrier requirements, and supplement readiness before submission.",
    relatedBlogSlugs: ["claim-documentation-approval-rates"],
    relatedGuideSlugs: ["documentation-standards-guide", "supplement-submission-guide"],
    purpose:
      "Audit every claim file for documentation gaps, narrative inconsistencies, and estimate misalignment before it reaches an adjuster. A structured file audit reduces supplement denials, re-inspection delays, and back-and-forth that erodes margin.",
    whenToUse: [
      {
        condition: "A supplement package is drafted and ready for internal review",
        signal: "Supplement estimate exported from Xactimate or desk review complete",
      },
      {
        condition: "Carrier requests additional documentation before approval",
        signal: "Adjuster email citing missing photos, logs, or narrative gaps",
      },
      {
        condition: "A file returns from production and needs closeout documentation review",
        signal: "Certificate of completion or final walk scheduled",
      },
      {
        condition: "New supplement coordinator inherits a mid-production file",
        signal: "File transfer or staff change without documented handoff notes",
      },
    ],
    requiredDocumentation: [
      {
        id: "claim-summary",
        label: "Claim summary sheet (one-page file overview)",
        required: true,
        detail: "Claim number, parties, key dates, current estimate totals, and open supplement items.",
      },
      {
        id: "photo-index",
        label: "Photo index mapped to rooms and line items",
        required: true,
        detail: "Each photo labeled with date, room, and subject — cross-referenced to supplement letter.",
      },
      {
        id: "carrier-correspondence",
        label: "Carrier and adjuster correspondence log",
        required: true,
        detail: "Emails, letters, and phone notes in chronological order with dates and participants.",
      },
      {
        id: "estimate-comparison",
        label: "Carrier vs. contractor estimate comparison",
        required: true,
        detail: "Side-by side or marked-up PDF showing added, changed, and disputed line items.",
      },
      {
        id: "trade-invoices",
        label: "Trade invoices or subcontractor agreements (if applicable)",
        required: false,
        detail: "Required when supplement includes subcontractor scope or O&P qualification.",
      },
      {
        id: "code-citations",
        label: "Code or manufacturer citations for upgrade items",
        required: false,
        detail: "IRC, IBC, or local amendment references tied to specific line items.",
      },
    ],
    steps: [
      {
        id: "inventory",
        title: "Inventory the file and establish the audit baseline",
        owner: "office",
        actions: [
          "Open the claim folder and list every document type present vs. required per documentation standards.",
          "Confirm claim number, policy type, and current estimate version match across all documents.",
          "Note file age, last adjuster contact, and any pending re-inspection or denial history.",
          "Assign an audit score: green (ready), yellow (minor gaps), red (hold submission).",
        ],
      },
      {
        id: "photo-narrative",
        title: "Validate photo-to-narrative alignment",
        owner: "supplement-coordinator",
        actions: [
          "Walk the photo index against the supplement letter — every disputed line item needs visual proof.",
          "Reject blurry, unlabeled, or post-demo photos that cannot support pre-existing condition claims.",
          "Verify date stamps and chronological order for multi-visit losses (mitigation through rebuild).",
          "Flag missing elevation, detail, and overview shots required by carrier guidelines.",
        ],
      },
      {
        id: "estimate-audit",
        title: "Audit estimate math, codes, and price list alignment",
        owner: "supplement-coordinator",
        actions: [
          "Confirm supplement estimate uses the same price list date as the carrier file unless justified.",
          "Check quantity takeoffs against photos and field measurements — no orphan line items.",
          "Verify code-driven items include citations and jurisdiction on the supplement letter.",
          "Cross-check O&P, tax, and overhead lines against carrier policy and trade count documentation.",
        ],
      },
      {
        id: "narrative-review",
        title: "Review supplement narrative for adjuster readability",
        owner: "office",
        actions: [
          "Read the cover letter as an adjuster would — clear issue, evidence reference, and requested remedy per item.",
          "Remove emotional language, duplicate arguments, and unsupported dollar requests.",
          "Ensure homeowner communication records do not contradict the supplement narrative.",
          "Add a table of contents or exhibit list if the package exceeds 15 pages.",
        ],
      },
      {
        id: "sign-off",
        title: "Sign off and route for submission or rework",
        owner: "office",
        actions: [
          "Document audit findings in the file with date, auditor name, and disposition.",
          "Return yellow files to field or supplement team with specific rework items — not generic 'need more photos.'",
          "Release green files to supplement submission workflow with submission checklist attached.",
          "Schedule a 48-hour follow-up if no carrier response after submission.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "photo-line-mapping",
        label: "Every supplement line item maps to at least one labeled photo or log entry",
        required: true,
      },
      {
        id: "narrative-consistency",
        label: "Supplement letter, estimate, and field notes tell the same story without contradictions",
        required: true,
      },
      {
        id: "price-list-match",
        label: "Price list date and tax jurisdiction match carrier file or include written justification",
        required: true,
      },
      {
        id: "audit-record",
        label: "Audit sign-off recorded in CRM before submission",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Submitting supplements with photo dumps and no index",
        impact: "Adjusters skip review or deny items they cannot quickly verify.",
        correction: "Build a photo exhibit index with room, date, and line item cross-reference before submission.",
      },
      {
        mistake: "Auditing only the estimate, not the narrative",
        impact: "Math is correct but the story fails — approvals stall on confusion, not pricing.",
        correction: "Read the cover letter aloud; each paragraph should point to a specific exhibit.",
      },
      {
        mistake: "Using post-repair photos to prove pre-loss conditions",
        impact: "Carrier denies retroactive scope; file credibility drops on future supplements.",
        correction: "Reject photos taken after demo unless they document code-required upgrades in progress.",
      },
      {
        mistake: "Skipping audit on 'small' supplements under an internal dollar threshold",
        impact: "Bad habits scale; small denials accumulate and train carriers to push back.",
        correction: "Audit every supplement regardless of dollar value — consistency builds carrier trust.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Audit reveals missing general conditions on carrier estimate",
        documentation: "Site photos of protection, debris staging, and occupied-home constraints.",
        lineItemHint: "Supervision, temp protection, dumpster, permit fees.",
      },
      {
        trigger: "Photo set shows damage the carrier estimate never addressed",
        documentation: "Pre-demo labeled photos with measurement references.",
        lineItemHint: "Additional trade scope discovered during audit walk-through.",
      },
      {
        trigger: "Estimate comparison shows quantity gaps on multi-room losses",
        documentation: "Room-by-room photo index with SF calculations attached.",
        lineItemHint: "Flooring, drywall, paint, or mitigation quantity corrections.",
      },
    ],
  }),

  defineGuide({
    slug: "supplement-submission-guide",
    title: "Supplement Submission Workflow",
    excerpt:
      "End-to-end workflow for submitting an insurance supplement — package assembly, carrier routing, follow-up cadence, and denial response without damaging file credibility.",
    category: "general-claims",
    guideType: "workflow",
    roles: ["supplement-coordinator", "office"],
    claimPhase: "supplement",
    tags: [
      "Supplements",
      "Submission",
      "Carrier Communication",
      "Xactimate",
      "Claim Recovery",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 14,
    featured: true,
    seoTitle: "Insurance Supplement Submission Workflow for Contractors",
    seoDescription:
      "Contractor supplement submission workflow: package assembly, carrier routing, follow-up schedule, and documentation standards that improve approval rates.",
    relatedBlogSlugs: ["insurance-supplementing-guide-contractors"],
    relatedGuideSlugs: ["carrier-estimate-review-guide", "claim-file-audit-guide"],
    purpose:
      "Deliver supplement packages that adjusters can approve on first review — organized evidence, clear narrative, correct routing, and disciplined follow-up. This workflow turns estimate gaps into paid scope without adversarial carrier relationships.",
    whenToUse: [
      {
        condition: "File audit returns green and supplement estimate is finalized",
        signal: "Audit sign-off in CRM with no open rework items",
      },
      {
        condition: "Field documentation supports scope gaps identified during estimate review",
        signal: "Gap list validated with photos and measurements",
      },
      {
        condition: "Carrier adjuster requests a formal supplement in writing",
        signal: "Adjuster email or portal message citing supplement submission process",
      },
      {
        condition: "Re-inspection completed and revised scope needs formal estimate submission",
        signal: "Re-inspection report uploaded with new line items identified",
      },
    ],
    requiredDocumentation: [
      {
        id: "supplement-letter",
        label: "Supplement cover letter with itemized request summary",
        required: true,
        detail: "One paragraph per issue: problem, evidence exhibit, requested line item or quantity change.",
      },
      {
        id: "revised-estimate",
        label: "Revised Xactimate estimate or marked-up carrier PDF",
        required: true,
        detail: "Export in carrier-preferred format — ESX for Xactimate carriers, PDF for desk-review carriers.",
      },
      {
        id: "photo-exhibits",
        label: "Photo exhibits with index",
        required: true,
        detail: "Labeled photos grouped by room or issue; index maps exhibit number to line items.",
      },
      {
        id: "supporting-docs",
        label: "Supporting documents (invoices, code refs, manufacturer specs)",
        required: false,
        detail: "Attach only documents referenced in the cover letter — no unrelated attachments.",
      },
      {
        id: "prior-estimates",
        label: "Prior carrier estimate and any approved partial payments",
        required: true,
        detail: "Shows delta clearly — adjuster needs the baseline to process changes.",
      },
      {
        id: "contact-sheet",
        label: "Submission contact sheet with adjuster and desk examiner info",
        required: true,
        detail: "Name, email, fax, and portal upload instructions for the specific carrier.",
      },
    ],
    steps: [
      {
        id: "assemble",
        title: "Assemble the submission package",
        owner: "supplement-coordinator",
        actions: [
          "Compile cover letter, revised estimate, photo index, and exhibits in carrier-preferred order.",
          "Name files consistently: ClaimNumber_Supplement_v1_Date.pdf.",
          "Run the claim file audit checklist one final time before release.",
          "Calculate total supplement delta and confirm it matches the cover letter summary table.",
        ],
      },
      {
        id: "route",
        title: "Route through the correct carrier channel",
        owner: "office",
        actions: [
          "Submit via adjuster-directed channel — email, carrier portal, or XactAnalysis upload.",
          "Copy the homeowner on submission confirmation unless carrier policy restricts it.",
          "Log submission date, method, recipient, and package version in CRM.",
          "Set calendar reminders for follow-up at 3, 7, and 14 business days.",
        ],
        notes: "Never submit the same supplement through multiple channels simultaneously — it creates duplicate file confusion.",
      },
      {
        id: "follow-up",
        title: "Execute disciplined follow-up",
        owner: "supplement-coordinator",
        actions: [
          "Day 3: polite status inquiry referencing claim number and submission date.",
          "Day 7: request timeline if no response; offer re-inspection availability.",
          "Day 14: escalate to desk examiner or supervisor with submission receipt attached.",
          "Document every contact attempt in the correspondence log — dates, names, outcomes.",
        ],
      },
      {
        id: "respond",
        title: "Process carrier response — approval, partial, or denial",
        owner: "supplement-coordinator",
        actions: [
          "On approval: reconcile approved lines against production scope and update job budget.",
          "On partial approval: identify denied lines, gather targeted additional evidence, and resubmit surgically.",
          "On denial: read denial reason codes, route to denial recovery workflow if warranted.",
          "Notify PM and homeowner of outcome within one business day of carrier response.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "audit-green",
        label: "File audit completed with green disposition before submission",
        required: true,
      },
      {
        id: "delta-match",
        label: "Cover letter dollar summary matches revised estimate total delta",
        required: true,
      },
      {
        id: "submission-logged",
        label: "Submission logged in CRM with date, channel, and recipient",
        required: true,
      },
      {
        id: "follow-up-scheduled",
        label: "Follow-up reminders set at 3, 7, and 14 business days",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Submitting supplements before field documentation is complete",
        impact: "First submission gets denied; resubmission looks like fishing and slows all future items.",
        correction: "Hold submission until file audit confirms photo-to-line mapping for every requested item.",
      },
      {
        mistake: "Burying the request in a 40-page unindexed package",
        impact: "Desk adjusters approve nothing because they cannot find evidence quickly.",
        correction: "Lead with a one-page summary table; group exhibits by issue with clear labels.",
      },
      {
        mistake: "Aggressive tone or ultimatums in cover letters",
        impact: "Adjusters dig in; file gets flagged for supervisor review and delays multiply.",
        correction: "Write factually — issue, evidence, requested remedy. Save disputes for documented escalation.",
      },
      {
        mistake: "No follow-up after submission",
        impact: "Supplements sit in queue for weeks; production finishes before payment arrives.",
        correction: "Execute the 3-7-14 follow-up cadence on every file without exception.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Initial supplement approved partially — denied lines have strong field evidence",
        documentation: "Targeted resubmission with additional photos or code citations for denied items only.",
        lineItemHint: "Resubmit denied lines individually with exhibit references — not the entire package again.",
      },
      {
        trigger: "Carrier requests re-inspection after supplement submission",
        documentation: "Pre-stage photo stations at each disputed area; assign field escort for adjuster visit.",
        lineItemHint: "Use re-inspection to confirm quantities discovered during production.",
      },
      {
        trigger: "Production reveals scope not visible at estimate review",
        documentation: "Change-order photos during work; supplement amendment before closeout.",
        lineItemHint: "Hidden damage, additional layers, or code upgrades found during tear-off.",
      },
    ],
    faq: [
      {
        question: "How soon should we follow up after submitting a supplement?",
        answer:
          "Log the submission, then follow up at 3, 7, and 14 business days unless the carrier confirms a different review window. Production should not close out before open supplement lines have a documented status.",
      },
      {
        question: "What belongs in the supplement cover letter?",
        answer:
          "One short paragraph per issue: what the carrier missed, which exhibit proves it, and the exact line item or quantity change requested. Lead with a summary table — do not bury the request in a long narrative.",
      },
    ],
  }),

  defineGuide({
    slug: "carrier-estimate-review-guide",
    title: "Carrier Estimate Review Workflow",
    excerpt:
      "Systematic workflow for reviewing carrier Xactimate estimates — room list validation, line item gap analysis, quantity checks, and supplement routing before production commits to under-scoped work.",
    category: "general-claims",
    guideType: "workflow",
    roles: ["supplement-coordinator", "project-manager"],
    claimPhase: "supplement",
    tags: [
      "Carrier Estimate",
      "Xactimate",
      "Estimate Review",
      "Scope Gaps",
      "Line Items",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 13,
    seoTitle: "Carrier Estimate Review Workflow for Contractors",
    seoDescription:
      "How contractors review carrier Xactimate estimates: room list validation, line item gaps, quantity checks, and supplement routing before production starts.",
    relatedBlogSlugs: ["why-carrier-estimates-miss-line-items"],
    relatedGuideSlugs: ["supplement-submission-guide", "op-qualification-guide"],
    purpose:
      "Review every carrier estimate against field reality using a structured comparison method — not gut feel. Carriers build estimates for speed and standardization; this workflow catches the profitable line items and quantity gaps that templates routinely miss.",
    whenToUse: [
      {
        condition: "Carrier estimate received and assigned during intake",
        signal: "Estimate in inbox or XactAnalysis queue",
      },
      {
        condition: "Internal estimate differs from carrier by more than your threshold",
        signal: "Dollar delta flagged in comparison spreadsheet",
      },
      {
        condition: "Homeowner questions why your contract price exceeds the carrier estimate",
        signal: "Sales call or email referencing carrier ACV/RCV numbers",
      },
      {
        condition: "Revised carrier estimate arrives after re-inspection or partial approval",
        signal: "Estimate version increment or adjuster revision email",
      },
    ],
    requiredDocumentation: [
      {
        id: "carrier-estimate-file",
        label: "Current carrier estimate (latest version)",
        required: true,
        detail: "Note version number, price list, and whether sketch is included.",
      },
      {
        id: "internal-estimate",
        label: "Contractor field estimate or scope worksheet",
        required: true,
        detail: "Room list, SF counts, material grades, and trade breakdown.",
      },
      {
        id: "comparison-sheet",
        label: "Line-by-line comparison spreadsheet or marked-up PDF",
        required: true,
        detail: "Columns: carrier qty, field qty, delta, photo ref, supplement priority.",
      },
      {
        id: "field-photos-review",
        label: "Field photos supporting quantity and scope disputes",
        required: true,
        detail: "Measurements visible in frame for SF-dependent line items.",
      },
      {
        id: "code-research",
        label: "Applicable code research for upgrade line items",
        required: false,
        detail: "Local amendments for ice barrier, smoke sealing, AFCI, or similar.",
      },
    ],
    steps: [
      {
        id: "sketch-validation",
        title: "Validate sketch and room list against site",
        owner: "project-manager",
        actions: [
          "Compare carrier sketch room count and names to actual floor plan — flag missing rooms.",
          "Verify ceiling heights, openings, and attached structures (garages, porches, sheds).",
          "Check whether carrier grouped or split rooms in ways that reduce quantities.",
          "Document sketch errors with photos and revised room list.",
        ],
      },
      {
        id: "line-item-scan",
        title: "Scan line items for category gaps",
        owner: "supplement-coordinator",
        actions: [
          "Review each trade section: general conditions, demo, rough, finish, contents, exterior.",
          "Flag missing categories — no permit line, no debris, no supervision, no equipment.",
          "Compare material grades and line descriptions to field observations.",
          "Mark carrier macro assumptions that do not match job-specific conditions.",
        ],
      },
      {
        id: "quantity-check",
        title: "Verify quantities on high-value line items",
        owner: "supplement-coordinator",
        actions: [
          "Recalculate SF for flooring, roofing, drywall, paint, and mitigation from field measurements.",
          "Check unit counts: fixtures, windows, doors, LF of trim, and equipment days.",
          "Identify line items with zero quantity or bundled quantities that hide gaps.",
          "Prioritize quantity disputes by dollar impact and evidence strength.",
        ],
      },
      {
        id: "op-pricing-review",
        title: "Review O&P, tax, and pricing alignment",
        owner: "supplement-coordinator",
        actions: [
          "Assess O&P eligibility based on trade count and coordination documentation.",
          "Confirm tax jurisdiction and overhead/profit calculation method match carrier standards.",
          "Compare unit prices on disputed lines against price list — not market anecdotes.",
          "Route O&P questions to O&P qualification guide if multi-trade scope exists.",
        ],
      },
      {
        id: "route-gaps",
        title: "Route validated gaps to supplement workflow",
        owner: "project-manager",
        actions: [
          "Classify each gap: high-confidence supplement, needs more photos, or low priority.",
          "Set production guardrails for high-confidence gaps — do not absorb unpaid work.",
          "Hand off gap list and comparison sheet to supplement coordinator with photo refs.",
          "Update homeowner scope letter with items pending carrier review.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "room-list-match",
        label: "Carrier room list validated against site — discrepancies documented",
        required: true,
      },
      {
        id: "comparison-complete",
        label: "Line-by-line comparison completed for all trades on the job",
        required: true,
      },
      {
        id: "gap-prioritized",
        label: "Gap list prioritized by dollar impact with photo references",
        required: true,
      },
      {
        id: "production-guardrails",
        label: "PM acknowledges production guardrails for unresolved high-value gaps",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Reviewing only total dollar amount instead of line items",
        impact: "Missing line items hide inside a total that looks 'close enough.'",
        correction: "Compare line by line — totals lie when errors offset each other.",
      },
      {
        mistake: "Assuming carrier sketch dimensions are accurate",
        impact: "Quantity gaps on every SF-based line item; supplements look inflated.",
        correction: "Measure independently and document variances before arguing quantities.",
      },
      {
        mistake: "Adding line items without field photos",
        impact: "Supplement credibility drops; adjusters deny template-style requests.",
        correction: "Every added line item needs a photo or measurement reference before the gap list is final.",
      },
      {
        mistake: "Delaying estimate review until mid-production",
        impact: "Demo destroys evidence; supplements appear retroactive.",
        correction: "Complete review within 48 hours of estimate receipt per intake checklist.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Carrier estimate missing steep/high, equipment, or access charges",
        documentation: "Photos of roof pitch, story height, tight access, or occupied work areas.",
        lineItemHint: "Steep charge, high work, scaffolding, temp protection.",
      },
      {
        trigger: "Extended drying or monitoring beyond carrier template defaults",
        documentation: "Moisture logs, equipment placement photos, daily monitoring records.",
        lineItemHint: "Additional air mover days, dehu runtime, monitoring visits.",
      },
      {
        trigger: "Code-required upgrades not in carrier estimate",
        documentation: "Code citation, permit requirements, photos of non-compliant existing conditions.",
        lineItemHint: "Ice barrier, AFCI, smoke sealing, fire blocking.",
      },
    ],
  }),

  defineGuide({
    slug: "op-qualification-guide",
    title: "O&P Qualification Documentation Standard",
    excerpt:
      "Documentation standard for qualifying overhead and profit (O&P) on insurance claims — when O&P applies, what evidence carriers expect, and how to include O&P in supplements without isolated denial.",
    category: "general-claims",
    guideType: "documentation-standard",
    roles: ["supplement-coordinator", "office"],
    claimPhase: "supplement",
    tags: [
      "O&P",
      "Overhead and Profit",
      "Multi-Trade",
      "Documentation",
      "Supplements",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 10,
    seoTitle: "O&P Qualification Documentation Standard for Insurance Claims",
    seoDescription:
      "When overhead and profit applies on insurance claims: O&P documentation requirements, multi-trade evidence, and supplement inclusion standards for contractors.",
    relatedBlogSlugs: ["op-on-insurance-claims"],
    relatedGuideSlugs: ["carrier-estimate-review-guide", "supplement-submission-guide"],
    purpose:
      "Document O&P eligibility with evidence carriers can approve — not blanket requests on every file. O&P compensates general contractor coordination on complex multi-trade losses; this standard defines when to pursue it and what proof to assemble.",
    whenToUse: [
      {
        condition: "Claim involves three or more distinct trades under contractor coordination",
        signal: "Scope includes roofing plus interior, HVAC, electrical, or structural trades",
      },
      {
        condition: "Carrier estimate includes scope but omits O&P on a multi-trade loss",
        signal: "Xactimate estimate shows trades but no O&P calculation lines",
      },
      {
        condition: "Contractor functions as general contractor with subcontractor agreements",
        signal: "Signed sub contracts, permits in GC name, or multi-phase schedule",
      },
      {
        condition: "Prior O&P request denied for lack of documentation",
        signal: "Denial letter citing single-trade scope or insufficient coordination evidence",
      },
    ],
    requiredDocumentation: [
      {
        id: "trade-schedule",
        label: "Trade schedule or phasing plan showing sequenced work",
        required: true,
        detail: "Dates, trades, and dependencies — demonstrates coordination burden.",
      },
      {
        id: "sub-contracts",
        label: "Subcontractor agreements or work orders by trade",
        required: true,
        detail: "Signed agreements showing GC direction of distinct trades.",
      },
      {
        id: "scope-by-trade",
        label: "Scope breakdown by trade with responsible party noted",
        required: true,
        detail: "Table listing trade, scope description, sub or in-house, and estimate line refs.",
      },
      {
        id: "supervision-log",
        label: "Supervision or daily log entries showing GC oversight",
        required: true,
        detail: "PM visit records, safety meetings, and cross-trade coordination notes.",
      },
      {
        id: "permits",
        label: "Permits pulled in general contractor name (if applicable)",
        required: false,
        detail: "Building permit showing GC as responsible party strengthens O&P position.",
      },
      {
        id: "op-narrative",
        label: "O&P narrative paragraph for supplement letter",
        required: true,
        detail: "Explain trade count, sequencing, supervision, and why O&P fits this file specifically.",
      },
    ],
    steps: [
      {
        id: "assess-eligibility",
        title: "Assess O&P eligibility on the specific file",
        owner: "supplement-coordinator",
        actions: [
          "Count distinct trades with documented scope — not line item count, trade count.",
          "Determine whether contractor coordinates trades or performs single-trade work only.",
          "Review carrier and policy O&P guidelines if available in file notes.",
          "Document eligibility decision: pursue, defer pending scope, or not applicable — with reasoning.",
        ],
      },
      {
        id: "gather-evidence",
        title: "Gather coordination evidence before requesting O&P",
        owner: "office",
        actions: [
          "Collect subcontractor agreements, permits, and trade schedule for the file.",
          "Extract PM daily logs or site visit records showing cross-trade oversight.",
          "Build scope-by-trade table cross-referenced to estimate line items.",
          "Identify and remove duplicate supervision already billed in individual labor lines.",
        ],
      },
      {
        id: "draft-narrative",
        title: "Draft O&P narrative for supplement inclusion",
        owner: "supplement-coordinator",
        actions: [
          "Write a concise paragraph: number of trades, coordination activities, and timeline impact.",
          "Reference exhibits — trade schedule as Exhibit A, sub contracts as Exhibit B.",
          "Include O&P in the supplement estimate using carrier-standard calculation method.",
          "Do not submit O&P as a standalone request without supporting scope supplements.",
        ],
      },
      {
        id: "validate-package",
        title: "Validate O&P section within full supplement package",
        owner: "office",
        actions: [
          "Confirm O&P dollar amount calculates correctly against eligible scope subtotal.",
          "Verify narrative does not contradict scope letter or trade breakdown.",
          "Run file audit quality gate for O&P-specific evidence completeness.",
          "Route to supplement submission with O&P included in coherent package.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "trade-count-documented",
        label: "Three or more distinct trades documented with scope and responsible party",
        required: true,
      },
      {
        id: "coordination-evidence",
        label: "At least two coordination evidence types present (schedule, subs, logs, permits)",
        required: true,
      },
      {
        id: "no-duplicate-supervision",
        label: "O&P request does not duplicate supervision already billed in trade labor lines",
        required: true,
      },
      {
        id: "bundled-with-scope",
        label: "O&P included in supplement package with scope items — not isolated request",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Requesting O&P on single-trade roof or siding jobs",
        impact: "Automatic denial and file flagged for aggressive supplementing.",
        correction: "Assess trade count honestly — O&P is for multi-trade coordination, not margin padding.",
      },
      {
        mistake: "Submitting O&P without subcontractor or phasing documentation",
        impact: "Carrier treats contractor as single trade regardless of scope size.",
        correction: "Assemble trade schedule and sub agreements before O&P appears on the estimate.",
      },
      {
        mistake: "Adding O&P weeks after scope supplement was denied",
        impact: "Looks like a Hail Mary; adjusters deny without reviewing scope fixes.",
        correction: "Include O&P in the initial supplement when eligible — alongside scope documentation.",
      },
      {
        mistake: "Duplicate billing supervision in labor and O&P simultaneously",
        impact: "Credibility hit; carrier audits entire file and denies unrelated items.",
        correction: "Audit labor lines for embedded PM time before adding O&P calculation.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Multi-trade storm damage with carrier scope but no O&P",
        documentation: "Trade schedule, sub contracts, and scope-by-trade table in supplement package.",
        lineItemHint: "O&P calculated on eligible scope subtotal per carrier guidelines.",
      },
      {
        trigger: "O&P denied on first submission for insufficient documentation",
        documentation: "Targeted resubmission with added PM logs, permits, and phasing plan.",
        lineItemHint: "Re-argue O&P only after coordination evidence gap is closed.",
      },
      {
        trigger: "Additional trade scope added during production increases coordination burden",
        documentation: "Change-order documentation showing new trade introduction mid-project.",
        lineItemHint: "O&P amendment when trade count increases from initial supplement.",
      },
    ],
  }),

  defineGuide({
    slug: "documentation-standards-guide",
    title: "Claim Documentation Standards",
    excerpt:
      "Company-wide documentation standards for insurance claims — what to capture, when to capture it, how to label and store it, and how daily discipline improves supplement approval rates.",
    category: "general-claims",
    guideType: "documentation-standard",
    roles: ["field", "office"],
    claimPhase: "documentation",
    tags: [
      "Documentation",
      "Photos",
      "Claim Files",
      "Standards",
      "Approval Rates",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 11,
    featured: true,
    seoTitle: "Insurance Claim Documentation Standards for Contractors",
    seoDescription:
      "Claim documentation standards for contractors: photo requirements, labeling conventions, file organization, and daily capture habits that improve supplement approval rates.",
    relatedBlogSlugs: ["claim-documentation-approval-rates", "why-fire-damage-claims-get-underpaid"],
    relatedGuideSlugs: [
      "photo-documentation-standards-guide",
      "claim-file-audit-guide",
      "commercial-fire-claims-guide",
      "fire-damage-documentation-guide",
      "fire-code-upgrade-documentation-guide",
      "smoke-soot-damage-documentation-guide",
      "contents-inventory-documentation-guide",
      "pack-out-documentation-guide",
      "mold-damage-documentation-guide",
    ],
    purpose:
      "Define the minimum documentation standard for every insurance claim file — from intake through closeout. Carriers approve what they can defend; daily documentation discipline is the highest-leverage activity for claim recovery.",
    whenToUse: [
      {
        condition: "New claim file opened at intake",
        signal: "CRM claim created or contract signed on insurance job",
      },
      {
        condition: "Onboarding new field or office staff to claims workflow",
        signal: "New hire start date or role change to insurance division",
      },
      {
        condition: "Supplement denial cites insufficient or disorganized documentation",
        signal: "Denial letter referencing missing photos, logs, or narrative gaps",
      },
      {
        condition: "Auditing documentation quality across active claim portfolio",
        signal: "Quarterly review or denial rate spike triggers standards audit",
      },
    ],
    requiredDocumentation: [
      {
        id: "intake-record",
        label: "Intake record with date of loss, claim number, and parties",
        required: true,
        detail: "Single source of truth for claim identity — updated when adjuster changes.",
      },
      {
        id: "daily-photo-log",
        label: "Daily photo log with date and room labels",
        required: true,
        detail: "Minimum one upload per site visit; labeled before leaving the property.",
      },
      {
        id: "scope-narrative",
        label: "Running scope narrative updated at each production phase",
        required: true,
        detail: "What was found, what was done, and why — tied to dates and trade.",
      },
      {
        id: "carrier-docs-folder",
        label: "Carrier documents folder (estimates, letters, denials)",
        required: true,
        detail: "Version-controlled — v1, v2, v3 estimates never overwritten.",
      },
      {
        id: "moisture-equipment-logs",
        label: "Moisture and equipment logs (water losses)",
        required: false,
        detail: "Required on all water mitigation files — daily readings and equipment placement.",
      },
      {
        id: "correspondence-log",
        label: "Correspondence log for all carrier and homeowner communication",
        required: true,
        detail: "Date, party, method, and summary of every contact.",
      },
    ],
    steps: [
      {
        id: "setup",
        title: "Set up the claim file structure at intake",
        owner: "office",
        actions: [
          "Create standardized folder structure: Intake, Photos, Estimates, Correspondence, Supplements, Closeout.",
          "Enter claim metadata in CRM — claim number, carrier, adjuster, deductible, policy type.",
          "Assign documentation owner responsible for daily upload compliance.",
          "Share folder access with PM, supplement coordinator, and field lead.",
        ],
      },
      {
        id: "daily-capture",
        title: "Execute daily documentation capture in the field",
        owner: "field",
        actions: [
          "Capture labeled photos at every site visit per photo documentation standards.",
          "Record scope changes, hidden damage, and code observations in field notes same day.",
          "Upload photos and notes before leaving the job site or within 2 hours of visit end.",
          "Log moisture readings and equipment changes on water losses daily.",
        ],
      },
      {
        id: "office-sync",
        title: "Sync field documentation with office file weekly",
        owner: "office",
        actions: [
          "Review upload completeness — flag files with gaps in daily photo log.",
          "Match field notes to estimate line items and update scope narrative.",
          "File carrier correspondence in chronological order with read receipts noted.",
          "Alert supplement coordinator when documentation supports new gap items.",
        ],
      },
      {
        id: "closeout",
        title: "Close out documentation at job completion",
        owner: "office",
        actions: [
          "Compile final photo set: before, during, and after for every affected area.",
          "Archive complete file with audit checklist sign-off.",
          "Verify all supplement items have supporting documentation before final invoice.",
          "Store file per retention policy — minimum 7 years or state requirement.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "folder-structure",
        label: "Standard folder structure created within 24 hours of claim intake",
        required: true,
      },
      {
        id: "daily-upload",
        label: "Photos uploaded same day as site visit on active production files",
        required: true,
      },
      {
        id: "scope-narrative-current",
        label: "Scope narrative updated within 48 hours of any scope change",
        required: true,
      },
      {
        id: "closeout-complete",
        label: "Closeout documentation checklist signed before final invoice",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Batch-uploading photos at supplement time instead of daily",
        impact: "Missing dates, wrong sequence, and adjusters reject pre-existing condition claims.",
        correction: "Upload daily with labels at time of capture — supplements assemble evidence, not create it.",
      },
      {
        mistake: "Inconsistent file naming across team members",
        impact: "Office staff cannot find documents; audit fails on organization alone.",
        correction: "Use ClaimNumber_Room_Subject_Date naming convention on every upload.",
      },
      {
        mistake: "No written scope narrative — only photos exist",
        impact: "Adjusters cannot connect images to line items; approvals stall on interpretation.",
        correction: "Maintain a running scope narrative updated at each production phase.",
      },
      {
        mistake: "Overwriting prior estimate versions instead of versioning",
        impact: "Loss of baseline for supplement delta calculations and denial recovery.",
        correction: "Save every carrier and contractor estimate version with date suffix — never overwrite.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Daily documentation reveals scope not in carrier estimate",
        documentation: "Dated photos and narrative entry from discovery date — not retroactive notes.",
        lineItemHint: "Hidden damage, additional layers, or extended drying documented in real time.",
      },
      {
        trigger: "Organized file speeds supplement review and partial approval",
        documentation: "Indexed photo exhibits and scope narrative reduce adjuster processing time.",
        lineItemHint: "Complete documentation supports faster approval on all pending line items.",
      },
      {
        trigger: "Denial recovery requires proving conditions at specific dates",
        documentation: "Timestamped daily logs and photos provide irrefutable timeline evidence.",
        lineItemHint: "Resubmit denied items with dated exhibit references from daily capture.",
      },
    ],
    faq: [
      {
        question: "How often should field teams upload documentation?",
        answer:
          "Same business day as every site visit. Carriers and desk reviewers treat batch uploads at supplement time as weaker evidence than daily, labeled captures tied to production dates.",
      },
      {
        question: "What is the minimum photo standard on every insurance job?",
        answer:
          "Labeled room ID in frame, overview shots from each corner of affected areas, and detail shots with scale reference. Match filenames to claim number, room, subject, and date before upload.",
      },
    ],
  }),

  defineGuide({
    slug: "photo-documentation-standards-guide",
    title: "Photo Documentation Field Procedure",
    excerpt:
      "Field procedure for insurance claim photo documentation — shot list, labeling conventions, overview-to-detail sequencing, and upload requirements that hold up on supplement review.",
    category: "general-claims",
    guideType: "field-procedure",
    roles: ["field", "project-manager"],
    claimPhase: "documentation",
    tags: [
      "Photos",
      "Field Documentation",
      "Labeling",
      "Supplements",
      "Evidence",
    ],
    publishedAt: GUIDE_PUBLISHED_AT,
    estimatedMinutes: 8,
    seoTitle: "Insurance Claim Photo Documentation Standards for Field Teams",
    seoDescription:
      "Field photo documentation procedure for insurance claims: shot lists, room labeling, overview-to-detail sequencing, and upload standards for supplement approval.",
    relatedBlogSlugs: ["claim-documentation-approval-rates"],
    relatedGuideSlugs: ["documentation-standards-guide"],
    purpose:
      "Capture photos that adjusters approve on first review — labeled, sequenced, and tied to scope. Photos are the primary evidence in supplement disputes; this procedure ensures field teams produce adjuster-ready documentation every visit.",
    whenToUse: [
      {
        condition: "Initial site visit or intake walk on a new insurance claim",
        signal: "First appointment scheduled or contract signed",
      },
      {
        condition: "Daily production visit on active insurance job",
        signal: "Crew on site or PM walk scheduled",
      },
      {
        condition: "Hidden damage or scope change discovered during production",
        signal: "Unexpected conditions found during tear-off, demo, or mitigation",
      },
      {
        condition: "Preparing for carrier re-inspection or adjuster site visit",
        signal: "Re-inspection date scheduled or adjuster requests site access",
      },
    ],
    requiredDocumentation: [
      {
        id: "room-label",
        label: "Room identification visible in frame",
        required: true,
        detail: "Dry-erase board, printed label, or tape marker showing room name and date.",
      },
      {
        id: "overview-shots",
        label: "Overview shots from each corner of affected rooms",
        required: true,
        detail: "Four corners minimum — establishes room context before detail shots.",
      },
      {
        id: "damage-detail",
        label: "Damage detail close-ups with scale reference",
        required: true,
        detail: "Tape measure, ruler, or common object for size context.",
      },
      {
        id: "elevation-exterior",
        label: "Exterior elevation photos (all sides of structure)",
        required: true,
        detail: "Full frame of each elevation; include roof line and grade context.",
      },
      {
        id: "measurement-photos",
        label: "Measurement photos for quantity-dependent items",
        required: true,
        detail: "Laser or tape reading visible for SF, LF, or unit count disputes.",
      },
    ],
    steps: [
      {
        id: "prep",
        title: "Prepare labeling materials before arriving on site",
        owner: "field",
        actions: [
          "Print or prepare room labels with claim number and date for each affected area.",
          "Confirm phone camera date/time settings are accurate and geotag enabled if company policy allows.",
          "Review shot list for loss type — water, fire, roofing, or exterior have additional requirements.",
          "Coordinate with PM on priority rooms or supplement items needing extra documentation.",
        ],
      },
      {
        id: "overview-sequence",
        title: "Capture overview-to-detail sequence in each room",
        owner: "field",
        actions: [
          "Place room label in frame and shoot four corner overview photos.",
          "Photograph each damage area: wide context shot, then close-up with scale reference.",
          "Capture ceiling, floor, and wall conditions separately — not one shot for all.",
          "Document access constraints, protection in place, and occupied areas affecting work.",
        ],
      },
      {
        id: "exterior-structure",
        title: "Document exterior and structural context",
        owner: "field",
        actions: [
          "Shoot all four elevations with full structure in frame.",
          "Capture roof planes, pitch context, gutters, and flashing details on roofing losses.",
          "Photograph grade, drainage, and exterior damage with elevation label.",
          "Record any structural concerns with measurement references for engineering items.",
        ],
      },
      {
        id: "label-upload",
        title: "Label and upload before leaving the property",
        owner: "field",
        actions: [
          "Rename photos using ClaimNumber_Room_Subject_Date convention before upload.",
          "Upload to claim folder organized by room subfolder — not one bulk dump.",
          "Notify PM or office if photos reveal new supplement items requiring immediate review.",
          "Confirm upload success and note photo count in daily field report.",
        ],
      },
    ],
    qualityGates: [
      {
        id: "label-in-frame",
        label: "Room label visible in at least one photo per room per visit",
        required: true,
      },
      {
        id: "overview-before-detail",
        label: "Overview shots captured before detail close-ups in each room",
        required: true,
      },
      {
        id: "same-day-upload",
        label: "Photos uploaded same day as capture with correct naming convention",
        required: true,
      },
      {
        id: "measurement-on-quantity",
        label: "Measurement visible in photos supporting quantity-dependent supplement items",
        required: true,
      },
    ],
    commonMistakes: [
      {
        mistake: "Shooting only close-ups without room context",
        impact: "Adjusters cannot verify which room or pre-existing condition applies.",
        correction: "Always lead with labeled overview shots before detail close-ups.",
      },
      {
        mistake: "Blurry or dark photos from rushed captures",
        impact: "Evidence rejected; supplement items denied for lack of verifiable proof.",
        correction: "Tap to focus, use flash in dark areas, and review clarity before leaving the room.",
      },
      {
        mistake: "Photos taken after demo for pre-existing condition claims",
        impact: "Carrier denies scope that existed before work started.",
        correction: "Capture pre-demo photos at intake and before each phase of tear-out.",
      },
      {
        mistake: "Uploading unlabeled camera roll photos at end of week",
        impact: "Office cannot match photos to rooms or dates; audit fails.",
        correction: "Label and upload same day — treat photo documentation as part of the visit, not admin afterthought.",
      },
    ],
    supplementOpportunities: [
      {
        trigger: "Overview-to-detail sequence documents damage carrier estimate omitted",
        documentation: "Labeled room photos with wide and close-up frames from intake date.",
        lineItemHint: "Additional repair scope visible in detail shots but absent from carrier estimate.",
      },
      {
        trigger: "Measurement photos support quantity disputes on SF-based lines",
        documentation: "Tape or laser reading in frame with room label and date.",
        lineItemHint: "Flooring, drywall, roofing, or paint quantity corrections.",
      },
      {
        trigger: "Pre-demo photos prove hidden damage discovered during production",
        documentation: "Dated sequence showing progressive discovery before full tear-out.",
        lineItemHint: "Additional layers, mold, structural damage, or code violations found in place.",
      },
    ],
  }),
] as const;
