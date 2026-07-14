import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/fire-damage" as const;
const CATEGORY = "fire-damage" as const;
const GUIDE_SLUG = "fire-code-upgrade-documentation-guide" as const;

export const FIRE_CODE_UPGRADE_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Fire Code Upgrade Documentation Guide",
  excerpt:
    "Contractor playbook for identifying, documenting, justifying, and recovering code-required building upgrades during fire insurance claims — ordinance and law, AHJ coordination, permit evidence, Xactimate organization, and supplement support.",
  category: CATEGORY,
  guideType: "documentation-standard",
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Fire code upgrades",
    "Ordinance and law",
    "Building code",
    "AHJ",
    "Permits",
    "Inspections",
    "Electrical",
    "Fire blocking",
    "Supplements",
    "Documentation",
    "Commercial fire",
    "Restoration contractors",
  ],
  publishedAt: "2026-07-13",
  updatedAt: "2026-07-13",
  estimatedMinutes: 20,
  seoTitle:
    "Fire Code Upgrade Documentation Guide | Contractor Playbook for Fire Rebuild Claims",
  seoDescription:
    "Document and recover fire code upgrades on insurance claims: ordinance and law coverage, AHJ permits, code citations, inspection evidence, Xactimate line items, carrier objections, and commercial rebuild considerations.",
  relatedGuideSlugs: [
    "fire-damage-supplement-playbook-for-contractors",
    "fire-damage-documentation-guide",
    "commercial-fire-claims-guide",
    "documentation-standards-guide",
    "smoke-soot-damage-documentation-guide",
    "contents-inventory-documentation-guide",
    "pack-out-documentation-guide",
    "structural-stabilization-documentation-guide",
    "commercial-water-loss-documentation-guide",
    "category-3-water-damage-documentation-guide",
  ],
  relatedBlogSlugs: [
    "why-fire-damage-claims-get-underpaid",
    "smoke-damage-documentation-mistakes",
    "fire-claim-documentation-checklist",
    "fire-damage-supplement-playbook-for-contractors",
    "fire-damage-claim-documentation-guide",
    "fire-damage-supplement-denial-recovery",
  ],
  faqIds: [
    "fire-code-upgrade-insurance-coverage",
    "fire-ordinance-law-coverage",
    "fire-code-upgrade-contractor-documentation",
    "fire-code-upgrade-who-determines-required",
    "fire-code-upgrade-supplement-denials",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["fire-damage", "commercial", "rebuild"],
  purpose:
    "Code-driven upgrades are one of the most frequently overlooked sources of legitimate supplemental value after fire losses — and one of the most aggressively scrutinized by carriers. When demolition exposes non-compliant assemblies, permit applications trigger current-code requirements, or the authority having jurisdiction (AHJ) mandates safety improvements on rebuild, contractors who lack permit records, code citations, and inspection evidence lose scope that policy language may otherwise support. Increased carrier desk review, local jurisdiction variation, and permit-driven scope changes make documentation the difference between approved code lines and blanket denials. This guide is the contractor operational playbook for identifying, documenting, justifying, and recovering code-required upgrades during fire insurance claims — not a building code textbook. Coverage availability depends on the individual insurance policy; ordinance and law provisions vary by carrier and endorsement. For full-file fire documentation standards, see the Fire Damage Documentation Guide. For commercial large-loss code complexity on multi-tenant and industrial rebuilds, see the Commercial Fire Claims Guide. For general citation and file organization patterns, see the Claim Documentation Standards Guide. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Fire rebuild or partial reconstruction triggers current building code",
      signal:
        "Permit application requires upgrades beyond pre-loss assembly; plan review returns correction notices for fire-rated assemblies, electrical, or life-safety systems",
    },
    {
      condition: "Demolition exposes non-compliant framing, electrical, or MEP assemblies",
      signal:
        "Tear-out reveals missing fire blocking, outdated wiring, inadequate connectors, or assemblies that cannot be repaired to prior condition under adopted code",
    },
    {
      condition: "Carrier estimate omits code-required lines on fire rebuild scope",
      signal:
        "Desk reviewer applies like-kind repair macros without ordinance and law review; permit fees, AFCI/GFCI, smoke alarms, or fire-rated drywall absent from carrier sketch",
    },
    {
      condition: "AHJ inspector issues correction notice or fails inspection on code items",
      signal:
        "Written inspector comments, failed inspection report, or stop-work notice citing specific code sections",
    },
    {
      condition: "Policy includes ordinance and law coverage and owner asks about code upgrade payment",
      signal:
        "Declarations page or endorsement listing Coverage A, B, or C limits; owner or adjuster questions whether code lines are covered",
    },
    {
      condition: "Commercial fire rebuild with ADA, fire alarm, sprinkler, or multi-occupancy code triggers",
      signal:
        "Multi-family, hotel, retail, healthcare, or office occupancy with stricter life-safety and accessibility requirements than residential single-family rebuilds",
    },
  ],
  prerequisites: [
    "Property address and jurisdiction identified (city, county, state adopted code edition)",
    "Scope of repair defined: partial repair, room rebuild, elevation replacement, or full structure rebuild",
    "Policy declarations or endorsement summary reviewed for ordinance and law limits when available",
    "Permit application started or plan review contact established with AHJ before code lines are finalized",
    "Separate code-upgrade folder indexed in claim file — distinct from smoke, contents, and general repair documentation",
  ],
  requiredDocumentation: [
    {
      id: "jurisdiction-code-edition",
      label: "Adopted code edition and local amendments documented",
      required: true,
      detail:
        "Record IRC/IBC/NEC edition year, local amendment references, and property jurisdiction — not generic national code lists.",
    },
    {
      id: "permit-application",
      label: "Permit application, approved plans, or permit receipt",
      required: true,
      detail:
        "Building permit number, application date, scope description, and plan review approval when available.",
    },
    {
      id: "inspection-reports",
      label: "Inspection reports and correction notices",
      required: true,
      detail:
        "Rough-in, framing, electrical, and final inspection sign-offs; failed inspection reports with cited code sections.",
    },
    {
      id: "code-citations",
      label: "Specific code section citation per upgrade line",
      required: true,
      detail:
        "One operative citation per line item — IRC R302, NEC 210.12, local amendment — not multi-page code PDFs without application.",
    },
    {
      id: "pre-loss-photos",
      label: "Pre-loss or tear-out photos showing non-compliant prior condition",
      required: true,
      detail:
        "Missing fire blocking, outdated panel, absent AFCI protection, non-rated assemblies — before new work covers evidence.",
    },
    {
      id: "upgrade-install-photos",
      label: "Photos of compliant upgrade during or after installation",
      required: true,
      detail:
        "Fire-rated assembly layers, new panel and breakers, smoke alarm locations, draft stopping — before close-in.",
    },
    {
      id: "engineering-reports",
      label: "Engineering or structural reports when code triggers structural scope",
      required: false,
      detail:
        "Required when connectors, load paths, stair geometry, or egress modifications need engineer stamp or calculation.",
    },
    {
      id: "manufacturer-specs",
      label: "Manufacturer specifications for rated assemblies and equipment",
      required: false,
      detail:
        "Fire-rated drywall systems, door assemblies, HVAC equipment specs when manufacturer mandate overlaps code requirement.",
    },
    {
      id: "municipal-requirements",
      label: "Municipal or AHJ written requirements beyond model code",
      required: false,
      detail:
        "City-specific fire sprinkler ordinances, hardwired detector mandates, or energy code amendments in writing.",
    },
    {
      id: "scope-revision-log",
      label: "Scope revision log tying code discoveries to estimate changes",
      required: true,
      detail:
        "Date-stamped narrative when demolition or inspection expands code scope; cross-reference to photo folders and line numbers.",
    },
  ],
  steps: [
    {
      id: "research-code-triggers",
      title: "Research local code triggers early",
      owner: "office",
      actions: [
        "Confirm adopted building, fire, electrical, plumbing, mechanical, and energy code editions for the property address.",
        "Determine repair scope trigger: spot repair, room rebuild, elevation replacement, or substantial reconstruction.",
        "Identify common fire-rebuild triggers: electrical replacement, fire blocking, draft stopping, rated assemblies, life-safety alarms.",
        "Research local amendments and municipal ordinances that exceed model code — especially on commercial and multi-family occupancy.",
        "Document code research before carrier estimate lock-in so code scope is anticipated, not discovered only at supplement.",
      ],
      notes:
        "Code research at intake prevents under-scoped original estimates that carriers treat as baseline.",
    },
    {
      id: "review-ordinance-law",
      title: "Review ordinance and law coverage",
      owner: "office",
      actions: [
        "Review policy declarations and endorsements for ordinance and law limits when owner provides policy documents.",
        "Understand Coverage A (undamaged portion demolition), Coverage B (increased cost of construction), and Coverage C (contingent liability) where listed — availability varies by policy.",
        "Separate code-required upgrade scope from like-kind repair scope in estimate organization.",
        "Do not assume coverage exists; document code requirements regardless and let carrier apply policy language.",
        "Note policy limits and sublimits in supplement cover letter when ordinance and law endorsement is confirmed.",
      ],
      notes:
        "Coverage availability depends on the individual insurance policy. This guide addresses documentation, not policy interpretation or legal advice.",
    },
    {
      id: "coordinate-ahj",
      title: "Coordinate with the authority having jurisdiction",
      owner: "office",
      actions: [
        "Submit permit application with scope aligned to insurance claim rebuild — not cash-bid scope that omits code items.",
        "Track plan review comments and correction notices; save all written AHJ communication in code folder.",
        "Schedule inspections at rough-in, framing, electrical, and final phases; photograph conditions inspectors will verify.",
        "Log inspector name, date, inspection type, pass/fail status, and cited code sections for each visit.",
        "Obtain written approval or correction notice before proceeding when inspector disputes scope — verbal-only guidance is weak supplement support.",
      ],
      notes:
        "AHJ documentation is primary evidence carriers accept over contractor code opinions alone.",
    },
    {
      id: "build-code-file",
      title: "Build the code documentation file",
      owner: "office",
      actions: [
        "Create indexed code-upgrade folder: permits, inspections, citations, photos, engineering, manufacturer specs.",
        "Assign one citation document or cover-sheet row per upgrade line with photo cross-references.",
        "Capture tear-out and pre-install photos before new assemblies close access.",
        "Attach municipal requirement letters or inspector emails when they exceed model code citations.",
        "Update scope revision log when each code discovery changes estimate lines.",
      ],
    },
    {
      id: "identify-upgrade-opportunities",
      title: "Identify common fire code upgrade opportunities",
      owner: "field",
      actions: [
        "Electrical: full circuit replacement, AFCI/GFCI protection, panel upgrade, service capacity, smoke/CO detector interconnect.",
        "Framing: fire blocking, draft stopping, fire-rated wall and ceiling assemblies, structural connectors at rebuilt joints.",
        "Envelope: roof ventilation rebalance, fire-rated doors, garage separation, tempered glazing at code locations.",
        "Life safety: hardwired smoke alarms, CO detectors, fire alarm panels, sprinkler systems where ordinance requires.",
        "Egress and stairs: handrail height, tread/run geometry, emergency egress windows where triggered by rebuild scope.",
        "MEP: HVAC replacement triggering efficiency code, duct sealing, mechanical ventilation, plumbing fixture upgrades.",
        "Accessibility: ADA-compliant routes, fixtures, and parking where commercial or multi-family rebuild triggers compliance.",
        "Separate legitimate code items from owner preference upgrades — finish upgrades are not code arguments.",
      ],
    },
    {
      id: "organize-xactimate",
      title: "Organize code upgrades in Xactimate",
      owner: "office",
      actions: [
        "Create separate estimate section or grouping for code-required upgrades — distinct from fire damage repair lines.",
        "Assign line items with supporting notes referencing code section, permit number, and photo folder.",
        "Include permit fees, plan review fees, and engineering costs as separate lines when receipts exist.",
        "Cross-reference demolition scope that triggered code requirement — partial repair versus full room rebuild.",
        "Avoid burying code lines inside general repair macros that desk reviewers cannot audit line by line.",
      ],
    },
    {
      id: "package-supplement",
      title: "Package the code supplement narrative",
      owner: "office",
      actions: [
        "Write one paragraph per line: trigger → code citation → photo reference → quantity.",
        "State repair scope that activated the requirement — what was demolished or opened.",
        "Quote operative code sentence; do not attach entire code chapters without job-specific application.",
        "Include attachment index mapping filenames to line numbers for desk reviewer navigation.",
        "Submit phased code supplements when demolition discovers additional triggers — contemporaneous evidence beats end-of-job dumps.",
      ],
    },
    {
      id: "respond-objections",
      title: "Respond to carrier objections with documentation",
      owner: "office",
      actions: [
        "\"Not required\" — attach AHJ correction notice, failed inspection, or plan review comment citing section.",
        "\"Pre-existing\" — tear-out photos showing prior non-compliant condition before upgrade install.",
        "\"Betterment\" — separate code mandate from finish upgrades; cite inspector requirement versus owner selection.",
        "\"Maintenance\" — document that code triggered at repair/rebuild event, not deferred maintenance argument.",
        "\"Not covered\" — reference ordinance and law endorsement when confirmed; document code requirement regardless for file completeness.",
        "Resubmit with indexed evidence quoting denial language — see Fire Damage Supplement Denial Recovery blog.",
      ],
    },
    {
      id: "commercial-complexity",
      title: "Handle commercial fire code complexity",
      owner: "office",
      actions: [
        "Multi-family and hotel: common-area fire alarms, sprinkler retrofits, rated corridor assemblies, egress signage.",
        "Retail and office: ADA path of travel, accessible fixtures, fire separation between tenants, commercial electrical loads.",
        "Industrial and healthcare: specialized fire suppression, clean-room or hood systems, occupancy-specific life-safety mandates.",
        "Coordinate code scope with tenant versus owner responsibility on shell-and-tenant improvements.",
        "Index engineering and fire marshal reports separately from residential-style photo packages.",
      ],
      notes:
        "Commercial code upgrades are often more complex than single-family fire rebuilds — see the Commercial Fire Claims Guide for large-loss workflow.",
    },
  ],
  qualityGates: [
    {
      id: "per-line-citation",
      label: "Each code upgrade line has its own citation or AHJ written requirement",
      required: true,
      detail:
        "No generic code dump; every line maps to specific section, inspector comment, or permit condition.",
    },
    {
      id: "permit-on-file",
      label: "Permit application or approved plan on file before code supplement submission",
      required: true,
      detail:
        "Permit number, scope description, and plan review status documented in code folder.",
    },
    {
      id: "before-after-photos",
      label: "Before (tear-out) and after (install) photos for each upgrade category",
      required: true,
      detail:
        "Prior non-compliance and compliant install documented before close-in.",
    },
    {
      id: "scope-separation",
      label: "Code scope separated from like-kind repair in estimate and file index",
      required: true,
      detail:
        "Desk reviewers can audit code lines without parsing mixed repair macros.",
    },
    {
      id: "ahj-communication-logged",
      label: "Inspector communication logged with dates and outcomes",
      required: true,
      detail:
        "Pass/fail inspections, correction notices, and written AHJ requirements indexed.",
    },
    {
      id: "no-preference-upgrades",
      label: "Owner preference upgrades separated from code-required scope",
      required: true,
      detail:
        "Finish, layout, or material upgrades not argued under code supplement package.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Submitting generic code lists without job-specific application",
      impact:
        "Desk reviewers dismiss entire code package as template supplement; all lines denied.",
      correction:
        "One citation and trigger narrative per line tied to this property's permit and photos.",
    },
    {
      mistake: "No tear-out photos of prior non-compliant condition",
      impact:
        "Carrier assumes upgrade is contractor preference or betterment; lines reduced or denied.",
      correction:
        "Mandatory photo gate before close-in — missing fire blocking, outdated panel, absent rated assembly.",
    },
    {
      mistake: "Verbal inspector guidance without written correction notice",
      impact:
        "Carrier rejects code argument as unsupported opinion when AHJ requirement is disputed.",
      correction:
        "Request written inspection report, email confirmation, or correction notice citing code section.",
    },
    {
      mistake: "Code lines buried in undifferentiated repair macros",
      impact:
        "Desk reviewer cannot audit individual requirements; proportional reductions applied.",
      correction:
        "Separate code section in Xactimate with notes, citations, and photo cross-references per line.",
    },
    {
      mistake: "Arguing owner finish upgrades under code supplement",
      impact:
        "Undermines legitimate code lines in same package; carrier denies entire code section.",
      correction:
        "Separate preference upgrades to owner-directed change order; code package contains AHJ-mandated items only.",
    },
    {
      mistake: "Late code supplement assembled after production closes access",
      impact:
        "Missing before photos; carrier treats code scope as post-hoc inflation.",
      correction:
        "Phase code supplements at permit, rough-in, and demolition discovery with contemporaneous evidence.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Electrical replacement triggers AFCI/GFCI and panel upgrade on fire rebuild",
      documentation:
        "Tear-out photos of outdated panel and wiring; NEC citation; permit electrical inspection sign-off.",
      lineItemHint: "Panel upgrade, AFCI/GFCI breakers, circuit replacement, permit fees",
    },
    {
      trigger: "Framing rebuild requires fire blocking and draft stopping at penetrations",
      documentation:
        "Cavity photos showing missing or damaged blocking; IRC citation; framing inspection report.",
      lineItemHint: "Fire blocking, draft stopping, rated cavity treatment labor and material",
    },
    {
      trigger: "Wall or ceiling rebuild triggers fire-rated assembly requirements",
      documentation:
        "Assembly specification, layer photos during install, code section for rating and separation.",
      lineItemHint: "Fire-rated drywall, joint treatment, rated door assemblies",
    },
    {
      trigger: "Roof replacement on fire rebuild triggers ventilation code rebalance",
      documentation:
        "Prior vent layout photos; calculation or prescriptive code cite; new vent install photos.",
      lineItemHint: "Ridge vent, soffit vents, baffles, ventilation balance labor",
    },
    {
      trigger: "Structural connectors required at rebuilt framing joints",
      documentation:
        "Engineer report or code citation; photo of connector install before sheath cover.",
      lineItemHint: "Hurricane ties, hold-downs, engineered connector hardware",
    },
    {
      trigger: "Stair or guardrail rebuild triggers current egress code geometry",
      documentation:
        "Prior stair photos; code section for tread, riser, handrail height; inspection sign-off.",
      lineItemHint: "Stair rebuild, guardrail replacement, egress modification labor",
    },
    {
      trigger: "Life-safety ordinance requires hardwired smoke and CO detectors on rebuild",
      documentation:
        "Municipal ordinance or IRC citation; device location photos; electrical inspection record.",
      lineItemHint: "Smoke alarms, CO detectors, interconnect wiring, combination units",
    },
    {
      trigger: "Commercial occupancy triggers fire alarm or sprinkler upgrade",
      documentation:
        "Fire marshal report, permit conditions, equipment specs, and rough-in inspection photos.",
      lineItemHint: "Fire alarm panel, sprinkler heads, monitoring, commercial life-safety lines",
    },
    {
      trigger: "Energy code triggered on HVAC or envelope replacement after fire",
      documentation:
        "Equipment efficiency specs, duct sealing photos, insulation R-value documentation, code edition cite.",
      lineItemHint: "Mechanical upgrade, insulation, air sealing, efficiency compliance lines",
    },
    {
      trigger: "Permit and plan review fees required for fire rebuild scope",
      documentation:
        "Permit receipt, plan review invoice, scope description matching code supplement lines.",
      lineItemHint: "Building permit fees, plan review, engineering review costs",
    },
  ],
  faq: [
    {
      question: "When should fire code upgrade supplements be submitted?",
      answer:
        "Submit when permit requirements, inspection findings, or demolition discoveries document specific code triggers — ideally at plan review approval, rough-in inspection, or phased demolition before access closes. Phased code supplements with contemporaneous permit and photo evidence outperform end-of-job code lists assembled after production completes.",
    },
    {
      question: "What AHJ documentation do carriers most often accept for code upgrades?",
      answer:
        "Permit applications, approved plans, inspection reports with pass/fail status, correction notices citing specific code sections, and written inspector communication. Verbal inspector guidance alone is weak; request email confirmation or formal correction notice when scope is disputed.",
    },
    {
      question: "How are fire code upgrades different from roofing code upgrades?",
      answer:
        "Fire rebuild code upgrades span electrical, framing, life-safety, MEP, accessibility, and commercial occupancy systems — not just envelope assemblies. The documentation pattern is the same: one citation per line, permit evidence, before-and-after photos, and scope trigger narrative. See the Roof Code Upgrade Documentation Guide for slope-specific triggers.",
    },
    {
      question: "Does ordinance and law coverage guarantee code upgrade payment?",
      answer:
        "No. Coverage availability, limits, and sublimits depend on the individual policy and endorsements. Contractors document code requirements and AHJ evidence; carriers apply policy language. Outcomes vary by carrier, policy, and evidence quality.",
    },
  ],
  relatedResources: [
    {
      label: "Fire Damage Documentation Guide",
      href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
    },
    {
      label: "Commercial Fire Claims Guide",
      href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
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
      label: "Category 3 Water Damage Documentation Guide",
      href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
    },
    {
      label: "Roof Code Upgrade Documentation Guide",
      href: "/resources/guides/roofing-claims/code-upgrade-documentation-guide",
    },
    {
      label: "Why Fire Damage Claims Get Underpaid",
      href: "/resources/blog/why-fire-damage-claims-get-underpaid",
    },
    {
      label: "Fire Damage Supplement Playbook",
      href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
    },
    {
      label: "Fire Damage Supplement Playbook (blog)",
      href: "/resources/blog/fire-damage-supplement-playbook-for-contractors",
    },
    {
      label: "Fire Damage Supplement Denial Recovery",
      href: "/resources/blog/fire-damage-supplement-denial-recovery",
    },
    { label: "Fire damage solutions", href: SOLUTION_PATH },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});
