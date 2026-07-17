import { defineGuide } from "@/lib/guides/guide-builder";

const SOLUTION_PATH = "/solutions/mold" as const;
const CATEGORY = "mold" as const;
const GUIDE_SLUG = "indoor-air-quality-testing-documentation-guide" as const;

export const INDOOR_AIR_QUALITY_TESTING_DOCUMENTATION_GUIDE = defineGuide({
  slug: GUIDE_SLUG,
  title: "Indoor Air Quality (IAQ) & Testing Documentation Guide for Contractors",
  excerpt:
    "Contractor operational standard for documenting indoor air quality testing, clearance testing, and related laboratory evidence on mold insurance claims — pre- and post-remediation sampling records, chain of documentation, lab report indexing, protocol alignment, PRV coordination, and carrier-ready testing packages.",
  category: CATEGORY,
  guideType: "documentation-standard",
  featured: true,
  recommended: true,
  roles: ["field", "office", "project-manager", "supplement-coordinator"],
  claimPhase: "documentation",
  tags: [
    "Mold",
    "IAQ",
    "Indoor air quality",
    "Air sampling",
    "Surface sampling",
    "Clearance testing",
    "Laboratory reports",
    "Chain of custody",
    "Mold remediation",
    "Commercial mold",
    "Insurance claims",
    "Documentation",
    "Restoration contractors",
  ],
  publishedAt: "2026-07-17",
  updatedAt: "2026-07-17",
  estimatedMinutes: 20,
  seoTitle:
    "Indoor Air Quality (IAQ) & Testing Documentation Guide for Contractors | Mold Claim Testing Standards",
  seoDescription:
    "Document IAQ and mold testing for insurance claims: air and surface sampling records, pre- and post-remediation clearance documentation, chain of custody, laboratory reports, protocol alignment, and PRV coordination for restoration contractors.",
  relatedGuideSlugs: [
    "mold-supplement-playbook-for-contractors",
    "commercial-mold-claims-guide",
    "mold-damage-documentation-guide",
    "mold-remediation-documentation-guide",
    "mold-protocol-documentation-guide",
    "post-remediation-verification-documentation-guide",
    "commercial-water-loss-documentation-guide",
    "category-3-water-damage-documentation-guide",
    "contents-inventory-documentation-guide",
    "pack-out-documentation-guide",
    "documentation-standards-guide",
    "photo-documentation-standards-guide",
    "daily-monitoring-guide",
    "dry-log-collection-guide",
  ],
  relatedBlogSlugs: [
    "mold-claim-documentation-checklist",
    "mold-documentation-mistakes",
    "why-mold-insurance-claims-get-underpaid",
    "documentation-gaps-that-trigger-water-claim-denials",
    "dry-log-documentation-guide-insurance-claims",
    "daily-monitoring-documentation-best-practices",
  ],
  faqIds: [
    "mold-iaq-documentation",
    "mold-iaq-air-sampling",
    "mold-iaq-clearance-testing",
    "mold-iaq-lab-reports",
    "mold-iaq-documentation-requirements",
  ],
  relatedSolutionPath: SOLUTION_PATH,
  claimTypes: ["mold", "water-damage", "commercial"],
  purpose:
    "Indoor air quality (IAQ) testing and related sampling documentation prove what was sampled, where, when, and how results connect to remediation boundaries and billed line items on mold insurance claims — carriers often request lab exhibits, sample location photos, and chain-of-custody records when testing appears on the estimate or protocol. This guide is the contractor operational standard for documenting IAQ testing, clearance testing, and laboratory evidence: pre-remediation baseline records, post-remediation clearance packages, air versus surface sampling exhibits, protocol alignment, and PRV coordination. This is an insurance documentation guide, not environmental consulting, industrial hygiene credentialing, laboratory method training, or health advice. Testing requirements vary by carrier, policy, property type, and jurisdiction — document what was performed on this file when testing is performed or required; do not treat any method as universally mandatory. Pair this guide with the Mold Protocol Documentation Guide when sampling criteria appear in a written protocol, the Mold Remediation Documentation Guide for production-phase evidence, and the Post-Remediation Verification (PRV) Documentation Guide for closeout packaging of clearance results. Claims Ninja supports contractors with documentation standards, supplement packaging, and claim recovery workflows — we are not a public adjuster, carrier representative, or legal counsel.",
  whenToUse: [
    {
      condition: "Pre-remediation air or surface sampling scheduled or completed on a mold claim",
      signal:
        "Industrial hygienist, environmental consultant, or carrier-directed sampler collecting baseline samples before containment or removal",
    },
    {
      condition: "Post-remediation clearance or verification sampling required or performed",
      signal:
        "Protocol, property manager, or carrier requesting clearance results before rebuild authorization or final payment",
    },
    {
      condition: "Laboratory reports must be indexed to rooms, sample IDs, and estimate line items",
      signal:
        "Lab certificates on file without matching location photos, chain-of-custody, or narrative crosswalk",
    },
    {
      condition: "Written protocol specifies sampling methods, locations, or clearance criteria",
      signal:
        "Protocol PDF names air, surface, or clearance sampling that must map to field exhibits and billed testing lines",
    },
    {
      condition: "PRV closeout package must include clearance or IAQ testing exhibits",
      signal:
        "Closeout submission pending lab results, sample location photos, and clearance narrative",
    },
    {
      condition: "Commercial or multi-zone mold loss with heightened testing documentation expectations",
      signal:
        "Multifamily, healthcare, hospitality, or industrial facility requiring zone-indexed sampling records",
    },
  ],
  prerequisites: [
    "Intake and causation documented per Mold Damage Documentation Guide — moisture source, growth mapping, and assessment exhibits on file",
    "Room naming convention consistent across photos, protocol areas, sample labels, estimates, and closeout exhibits",
    "When a written protocol exists, protocol PDF version date and author on file per Mold Protocol Documentation Guide",
    "Photo folder structure ready for sampling phases: location setup, sample collection, chain-of-custody, and post-sample site condition",
    "Assigned contact for receiving lab reports and indexing them to claim folders the same day they arrive",
    "Estimate and narrative process ready to reference testing line items with exhibit crosswalks when sampling is billed",
  ],
  requiredDocumentation: [
    {
      id: "sampling-scope-record",
      label: "Sampling scope record: who sampled, why testing was performed, and areas covered",
      required: true,
      detail:
        "Written note identifying sampler role (IH, consultant, contractor-coordinated vendor), request source (protocol, carrier, property manager), and rooms or zones included.",
    },
    {
      id: "sample-location-photos",
      label: "Sample location photos with room labels before or during collection",
      required: true,
      detail:
        "Dated photos showing each sample point with visible room context — desk reviewers match lab sample IDs to physical locations on the loss.",
    },
    {
      id: "sample-type-log",
      label: "Sample type log distinguishing air, surface, bulk, or other methods used",
      required: true,
      detail:
        "Field log listing sample ID, method, media, indoor/outdoor or control comparison when collected, and date/time of collection.",
    },
    {
      id: "chain-of-custody",
      label: "Chain-of-custody forms from collection through laboratory receipt",
      required: true,
      detail:
        "Signed custody records with sample IDs matching location photos and lab certificates — unbroken documentation trail.",
    },
    {
      id: "laboratory-reports",
      label: "Full laboratory reports and certificates with sample ID crosswalk",
      required: true,
      detail:
        "Complete lab PDFs, not summary screenshots alone — sample IDs, methods, results, and lab identity indexed to field exhibits.",
    },
    {
      id: "results-narrative",
      label: "Written narrative connecting results to remediation boundaries and estimate lines",
      required: true,
      detail:
        "Plain-language summary explaining how results relate to rooms remediated, protocol criteria, or clearance decision — without health or medical conclusions.",
    },
    {
      id: "pre-remediation-baseline",
      label: "Pre-remediation baseline testing package when sampling occurred before production",
      required: false,
      detail:
        "Baseline sample set, location photos, and narrative establishing pre-work conditions for later comparison when applicable.",
    },
    {
      id: "clearance-testing-package",
      label: "Post-remediation clearance testing package when clearance sampling performed",
      required: false,
      detail:
        "Clearance sample locations, lab results, pass/fail or conditional notes from the report author, and corrective-action exhibits if retesting occurred.",
    },
    {
      id: "protocol-sampling-crosswalk",
      label: "Protocol sampling crosswalk when protocol specifies testing criteria",
      required: false,
      detail:
        "Map protocol-named areas and methods to actual samples collected, deviations logged, and estimate testing lines.",
    },
    {
      id: "testing-submission-index",
      label: "Insurance testing package with attachment index",
      required: true,
      detail:
        "Organized packet: scope record, location photos, chain-of-custody, lab reports, narratives, and line-item exhibit mapping for carrier review.",
    },
  ],
  steps: [
    {
      id: "why-iaq-documentation",
      title: "What IAQ Testing Is (and Why Documentation Matters)",
      actions: [
        "Indoor air quality (IAQ) testing in the mold claim context means documented sampling of indoor environments — often air, surface, or related media — performed to support assessment, remediation planning, or post-remediation verification on an insurance file.",
        "IAQ and mold testing documentation answers four desk-review questions: what was sampled, where and when, who collected and analyzed it, and how results connect to remediation scope and billed testing lines.",
        "Carriers frequently challenge testing line items when sample locations are unlabeled, chain-of-custody is missing, lab reports are incomplete, or narratives do not map results to rooms on the estimate.",
        "Documentation quality — not sampling method selection — is the contractor's insurance-facing job when testing is coordinated or performed on the claim.",
        "This guide covers how to organize and submit testing evidence for claim support; it does not teach environmental sampling methods, interpret health risk, or prescribe when testing must occur.",
        "Testing may be appropriate on some files and unnecessary on others — requirements vary by carrier, policy, protocol, property type, and jurisdiction.",
        "Complete mold claim files often combine assessment (Mold Damage Documentation Guide), production (Mold Remediation Documentation Guide), protocol alignment (Mold Protocol Documentation Guide), testing documentation (this guide), and closeout (Post-Remediation Verification Documentation Guide).",
        "Same-day indexing of sample photos and custody forms separates contractors who clear testing lines on first submission from those fighting additional information requests weeks later.",
      ],
      notes:
        "See Claim Documentation Standards for company-wide file organization. Treat IAQ and clearance exhibits with the same indexing rigor as moisture maps and containment photos.",
    },
    {
      id: "when-iaq-appropriate",
      title: "When IAQ Testing May Be Appropriate",
      owner: "project-manager",
      actions: [
        "Document the reason testing was requested or performed on this file: protocol requirement, carrier request, property manager specification, consultant recommendation, or clearance gate before rebuild — record the source in job notes.",
        "Pre-remediation sampling may support baseline conditions, scope justification, or protocol planning when those activities are part of the claim file — photograph locations and file the request source.",
        "Post-remediation or clearance sampling may support verification that remediated areas meet criteria written in a protocol, contract, or carrier directive — document criteria referenced, not contractor-invented standards.",
        "Commercial, healthcare, multifamily, or sensitive-occupancy projects may carry heightened testing documentation expectations even when residential files do not — index by building, unit, or zone.",
        "Do not claim that every mold insurance file requires laboratory testing — when no testing is performed, document visual inspection or other verification used instead per the Post-Remediation Verification Documentation Guide.",
        "When testing is declined, deferred, or limited by the carrier or property owner, record that decision in writing so missing lab exhibits are explained on desk review.",
        "Align testing timing with production phases: baseline before disturbance when baseline sampling is part of the plan; clearance after cleaning and before close-in when clearance is required.",
        "Coordinate with the Mold Supplement Playbook when testing lines appear on the carrier estimate or need supplement support with exhibits.",
      ],
      notes:
        "Appropriateness is a claim-file documentation question here — not a medical, legal, or environmental consulting determination. Record who requested testing and what criteria were cited.",
    },
    {
      id: "air-vs-surface-sampling",
      title: "Air Sampling vs Surface Sampling",
      owner: "field",
      actions: [
        "Air sampling documentation — photograph sampler placement in the room, note indoor versus outdoor or control samples when collected, record sample ID, duration or volume if noted on field forms, and HVAC status if recorded by the sampler.",
        "Surface sampling documentation — photograph the exact surface or material sampled, note media type if listed on custody forms, and capture wide context so the surface location is identifiable on desk review.",
        "Bulk or other media — when collected, photograph the material before removal of the sample portion and label the sample ID against room and material type.",
        "Never rely on lab report text alone — without location photos, air and surface results look interchangeable and unsupported to adjusters.",
        "Maintain a sample-type log that clearly separates air, surface, and other methods so estimate lines and narratives do not conflate them.",
        "When both air and surface samples are collected on the same day, index them in separate exhibit folders or clearly labeled sequences within the same room folder.",
        "Document comparison samples (outdoor air, non-affected room) when they appear on the lab report — missing comparison context is a common carrier question.",
        "Focus documentation on what was collected and how exhibits prove it — do not advise which sampling method should be selected for a given loss.",
      ],
      notes:
        "Method selection belongs to the qualified sampler or protocol author when required. Contractors document execution evidence for insurance review.",
    },
    {
      id: "pre-remediation-documentation",
      title: "Pre-Remediation Testing Documentation",
      owner: "field",
      actions: [
        "Capture site condition photos of each planned sample area before sampling alters the scene — growth, water staining, and room context from the Mold Damage Documentation Guide should already be indexed.",
        "Photograph each sample location at collection with room label, sample ID card or written ID in frame when practical, and date stamp.",
        "Complete chain-of-custody at collection — sampler identity, date/time, sample IDs, and destination laboratory matching later certificates.",
        "File the written request or protocol section that drove baseline sampling so carriers see why pre-remediation testing lines were billed.",
        "Store baseline lab reports in a dedicated pre-remediation testing folder separate from clearance results to prevent mix-ups on multi-phase files.",
        "Write a short baseline narrative: areas sampled, methods used, and how results will be referenced during remediation or supplement packaging — avoid health interpretations.",
        "Cross-reference baseline sample rooms to moisture maps and growth mapping exhibits so assessment and testing tell one story.",
        "If production starts before lab results return, note pending results in daily reports so the claim file shows intentional sequencing rather than missing exhibits.",
      ],
      notes:
        "See Mold Damage Documentation Guide for intake photo and moisture standards that should precede or accompany baseline sampling exhibits.",
    },
    {
      id: "post-remediation-clearance",
      title: "Post-Remediation / Clearance Testing Documentation",
      owner: "field",
      actions: [
        "Confirm remediation production evidence is complete per Mold Remediation Documentation Guide before clearance sampling — cleaned substrates and containment status should be photographable.",
        "Photograph clearance sample locations in remediated rooms with the same room naming used on production and estimate exhibits.",
        "Document pre-clearance site condition: containment status, cleaned cavities, and equipment still on site or demobilized as relevant to the sampling event.",
        "Attach clearance criteria referenced by protocol, consultant, or carrier when provided — cite the written source rather than inventing pass/fail language in contractor narratives.",
        "Index clearance lab reports with sample ID crosswalk to location photos; note pass, fail, or conditional language exactly as stated on the report.",
        "If clearance fails or is conditional, document corrective cleaning or re-remediation photos, then retest exhibits, before billing rebuild or final closeout.",
        "Coordinate clearance exhibits into the PRV closeout package — see Post-Remediation Verification Documentation Guide for closeout indexing standards.",
        "Clarify on every file whether clearance sampling was performed, deferred, or not required — silence looks like a missing exhibit on desk review.",
      ],
      notes:
        "Clearance documentation supports payment and rebuild authorization; it is not a substitute for production-phase remediation evidence.",
    },
    {
      id: "chain-of-documentation",
      title: "Chain of Documentation",
      owner: "office",
      actions: [
        "Build an unbroken exhibit chain: sampling request or protocol reference → location photos → field sample log → chain-of-custody → laboratory receipt → lab certificate → results narrative → estimate line crosswalk.",
        "Use consistent sample IDs across every document in the chain — mismatches between custody forms and lab certificates are a primary carrier rejection trigger.",
        "Date-stamp or date-label every photo and form; unexplained gaps between collection date and lab report date should be explained in the narrative when known.",
        "Store originals as PDFs in the claim folder; avoid relying on email attachments alone without filing into the indexed package.",
        "Assign ownership: field captures location photos and custody at collection; office indexes lab reports the day they arrive and updates the exhibit index.",
        "On multi-day or multi-zone sampling, maintain a master sample register listing every ID, room, method, and current status (collected, in transit, reported).",
        "When vendors handle sampling, obtain copies of their custody and lab packages immediately — do not wait until invoice submission.",
        "Include the chain summary in the testing attachment index so desk reviewers can follow the file without reconstructing it from scattered emails.",
      ],
      notes:
        "See Claim Documentation Standards for indexing conventions. Broken custody or ID mismatches undo otherwise strong lab results on insurance review.",
    },
    {
      id: "laboratory-reports",
      title: "Laboratory Reports",
      owner: "office",
      actions: [
        "File the complete laboratory report PDF — certificates, methods pages, and result tables — not cropped screenshots or verbal summaries.",
        "Create a sample ID crosswalk table: field ID, room/zone, sample type, collection date, lab ID if different, and result reference page.",
        "Photograph or scan any handwritten field forms that accompany the lab package so custody and certificates stay paired.",
        "Write a claim-facing narrative that maps results to remediated rooms and estimate testing lines without medical or toxicology conclusions.",
        "Flag incomplete reports immediately: missing pages, unmatched IDs, or illegible scans — request corrected lab packages before carrier submission.",
        "Separate baseline and clearance lab reports into clearly labeled folders on multi-phase claims.",
        "When retesting occurs, keep failed and passed report sets both on file with corrective-action photos between them.",
        "Cross-reference lab report dates to billed testing and consulting lines so invoice timing matches documented work.",
      ],
      notes:
        "Laboratory reports are payment exhibits. Index them like moisture logs — by room, date, and line item — not as a single unlabeled PDF dump.",
    },
    {
      id: "protocol-alignment",
      title: "Protocol Alignment",
      owner: "project-manager",
      actions: [
        "Extract sampling and clearance language from the written protocol: rooms, methods, number of samples, comparison samples, and completion criteria.",
        "Build a protocol-to-sample crosswalk showing which protocol areas were sampled, which methods were used, and which exhibits prove compliance.",
        "When field sampling differs from protocol language, log a justified deviation with photos and change documentation per Mold Protocol Documentation Guide — do not silently substitute methods.",
        "Attach the protocol PDF version used in the field alongside the testing package so reviewers compare the same written plan.",
        "Map protocol-required testing to estimate line items before submission — unsupported testing lines and missing protocol-required samples are both reduction risks.",
        "Coordinate with production teams so protocol sampling windows are not missed when containment or cleaning schedules change.",
        "Document when protocol sampling is deferred or waived in writing by the authorizing party — missing required samples without explanation invite payment disputes.",
        "Use protocol section references in the testing narrative so desk reviewers can jump from results to written requirements.",
      ],
      notes:
        "See Mold Protocol Documentation Guide for full protocol compliance and deviation standards. Testing exhibits should prove the written plan's sampling chapter was followed or formally changed.",
    },
    {
      id: "prv-coordination",
      title: "PRV Coordination",
      owner: "office",
      actions: [
        "Treat clearance and IAQ testing exhibits as a dedicated section of the PRV closeout package — not a separate orphan email thread.",
        "Align clearance sample timing with terminal moisture verification and completion photos so closeout tells one chronological story.",
        "Include testing attachment index entries in the PRV package index: location photos, custody, lab reports, and results narrative.",
        "When clearance testing is not performed, state that explicitly in the PRV completion narrative and document visual verification instead per the PRV guide.",
        "Hold rebuild or close-in billing when clearance retesting is pending — covering substrates before documentation closes the evidence window.",
        "Cross-link PRV scope completion records to rooms that were sampled so clearance results map to completed remediation areas.",
        "On failed clearance, sequence corrective work, retest, and updated PRV narrative before final invoice submission.",
        "Apply Post-Remediation Verification Documentation Guide standards for closeout photos, moisture verification, and package organization alongside testing exhibits.",
      ],
      notes:
        "IAQ/clearance documentation feeds PRV; PRV organizes closeout. Keep both guides in the workflow when testing is part of project completion.",
    },
    {
      id: "commercial-iaq",
      title: "Commercial Project Considerations",
      owner: "project-manager",
      actions: [
        "Index all sampling exhibits by building, floor, unit, suite, or zone — commercial desk review fails on organization before it fails on lab quality.",
        "Multifamily — maintain unit-level sample registers and separate common-area sampling from unit interiors.",
        "Healthcare and sensitive facilities — document access restrictions, after-hours sampling, and facility coordination notes that affect collection timing.",
        "Hospitality and office — separate guest-room or suite sampling from back-of-house or mechanical areas in exhibit folders.",
        "Phased commercial remediation — label which phase each sample set belongs to so clearance for Zone A is not confused with Zone B still in production.",
        "Property manager or owner sampling requirements — file the written requirement with the testing package on commercial files.",
        "Apply commercial indexing patterns from the Commercial Mold Claims Guide and Commercial Water Loss Documentation Guide when mold testing follows large commercial water losses.",
        "Expect heightened demand for third-party reports, formal clearance letters, and indexed lab packages on commercial mold claims versus typical residential files.",
      ],
      notes:
        "Commercial IAQ documentation succeeds when every sample ID resolves to a property-level location label consistent across photos, custody, labs, and estimates.",
    },
    {
      id: "common-mistakes-iaq",
      title: "Common Documentation Mistakes",
      owner: "office",
      actions: [
        "Missing sample location photos — correction: photograph every sample point with room context and sample ID reference before leaving the site.",
        "Lab reports without chain-of-custody — correction: file signed custody forms matching sample IDs on the certificate in the same exhibit folder.",
        "Baseline and clearance reports mixed in one unlabeled folder — correction: separate pre- and post-remediation packages with clear folder names and index entries.",
        "Narratives that assert health conclusions — correction: stick to claim documentation: locations, methods, results as reported, and scope mapping.",
        "Testing billed without request or protocol source on file — correction: attach the carrier, protocol, or property manager request that drove sampling.",
        "Sample ID mismatches across forms and lab certificates — correction: build a crosswalk table and resolve mismatches before submission.",
        "Clearance testing filed without linking to PRV closeout — correction: include testing exhibits in the PRV attachment index with room mapping.",
        "Assuming every file needs lab clearance without documenting what this file actually required — correction: state whether testing was performed, deferred, or not required.",
      ],
      notes:
        "See Mold Documentation Mistakes blog for broader mold file error patterns. Testing-specific mistakes usually fail on indexing and chain integrity, not on lab science.",
    },
    {
      id: "claim-file-best-practices",
      title: "Best Practices for Claim Files",
      owner: "supplement-coordinator",
      actions: [
        "Index testing exhibits the same day as collection and the same day lab reports arrive — delayed filing creates payment gaps.",
        "Use one room naming system across damage photos, remediation photos, sample logs, estimates, and PRV closeout.",
        "Build a one-page testing cover sheet: who sampled, dates, sample count by type, lab name, and exhibit index pointers.",
        "Map every billed testing or consulting line to a specific exhibit set before supplement or final invoice submission.",
        "Keep contractor daily reports noting sampling events even when a third party collects samples — proves coordination and timing.",
        "Store testing packages inside the claim folder structure used for mold lifecycle exhibits — assessment, production, testing, closeout.",
        "Prep answers to common carrier questions with exhibit references: why tested, where sampled, what the lab reported, how it ties to scope.",
        "Review the Mold Claim Documentation Checklist blog items related to lab results and clearance before submission.",
      ],
      notes:
        "Best practice is operational discipline: same-day indexing, consistent labels, and line-item exhibit mapping — not more samples than the file requires.",
    },
    {
      id: "related-workflow",
      title: "Related Documentation Workflow",
      owner: "project-manager",
      actions: [
        "Start with Mold Damage Documentation Guide for moisture source and growth mapping that frames why sampling areas were selected.",
        "Use Mold Protocol Documentation Guide when a written protocol defines sampling methods, locations, or clearance criteria.",
        "Apply Mold Remediation Documentation Guide for containment, removal, and cleaning evidence that must precede or accompany clearance sampling.",
        "Use this IAQ & Testing Documentation Guide for sample location photos, custody, lab indexing, and testing narratives.",
        "Close with Post-Remediation Verification Documentation Guide so clearance and IAQ exhibits land in the carrier-ready closeout package.",
        "For multi-unit or large-loss organization, follow Commercial Mold Claims Guide indexing standards across all testing zones.",
        "Drive supplements and settlement packaging through the Mold Supplement Playbook when testing lines need estimate recovery support.",
        "Reference Claim Documentation Standards and Photo Documentation Standards for company-wide folder and labeling conventions.",
      ],
      notes:
        "The mold documentation lifecycle is assessment → protocol (when present) → remediation production → IAQ/testing documentation → PRV closeout. Keep guides linked in the claim file index.",
    },
  ],
  qualityGates: [
    {
      id: "sampling-scope-documented",
      label: "Sampling scope and request source documented",
      required: true,
      detail: "Who sampled, why testing occurred, and areas covered are written on file.",
    },
    {
      id: "location-photos-complete",
      label: "Sample location photos complete for every sample ID",
      required: true,
      detail: "Each lab sample ID maps to a dated room-context photo.",
    },
    {
      id: "sample-type-log-complete",
      label: "Sample type log distinguishes air, surface, and other methods",
      required: true,
      detail: "Field log lists method, ID, room, and collection date/time.",
    },
    {
      id: "chain-of-custody-complete",
      label: "Chain-of-custody complete and ID-matched",
      required: true,
      detail: "Custody forms match lab certificate sample IDs without gaps.",
    },
    {
      id: "full-lab-reports-filed",
      label: "Full laboratory reports filed as PDFs",
      required: true,
      detail: "Complete certificates indexed; not screenshots alone.",
    },
    {
      id: "results-narrative-written",
      label: "Results narrative maps findings to rooms and estimate lines",
      required: true,
      detail: "Claim-facing summary without health or legal conclusions.",
    },
    {
      id: "baseline-clearance-separated",
      label: "Baseline and clearance packages separated when both exist",
      required: false,
      detail: "Pre- and post-remediation lab sets clearly labeled.",
    },
    {
      id: "protocol-crosswalk-complete",
      label: "Protocol sampling crosswalk complete when protocol applies",
      required: false,
      detail: "Protocol areas and methods mapped to collected samples or logged deviations.",
    },
    {
      id: "prv-index-includes-testing",
      label: "PRV closeout index includes testing exhibits when clearance performed",
      required: false,
      detail: "Testing package linked in closeout attachment index.",
    },
    {
      id: "testing-attachment-index",
      label: "Testing package attachment index complete",
      required: true,
      detail: "Exhibit list with file names and line-item mapping ready for submission.",
    },
    {
      id: "commercial-zone-indexing",
      label: "Commercial files indexed by building, unit, or zone",
      required: false,
      detail: "Property-level naming applied on multifamily and commercial sampling files.",
    },
    {
      id: "retest-corrective-exhibits",
      label: "Failed clearance includes corrective work and retest exhibits",
      required: false,
      detail: "Corrective photos and passed retest filed between failed and final reports.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Submitting lab reports without sample location photos",
      impact:
        "Carriers cannot verify where samples were collected — testing and clearance lines face reduction or denial as unsupported.",
      correction:
        "Photograph every sample point with room context and sample ID reference; place photos immediately before lab certificates in the package.",
    },
    {
      mistake: "Broken or missing chain-of-custody",
      impact:
        "Lab results lose credibility on desk review when custody forms are absent or sample IDs do not match certificates.",
      correction:
        "Complete custody at collection, file signed forms with the lab package, and build an ID crosswalk before submission.",
    },
    {
      mistake: "Mixing baseline and clearance results without labels",
      impact:
        "Adjusters misread pre-remediation findings as clearance — or vice versa — triggering unnecessary additional information requests.",
      correction:
        "Separate folders and index entries for pre-remediation and post-remediation packages; name files with phase and date.",
    },
    {
      mistake: "Billing testing without documenting who requested it",
      impact:
        "Testing lines appear discretionary; carriers cut costs when protocol, carrier, or owner request is not on file.",
      correction:
        "Attach the written request source or protocol sampling section to the testing package cover sheet.",
    },
    {
      mistake: "Narratives that interpret health risk instead of claim scope",
      impact:
        "Files invite disputes outside insurance documentation scope and distract from line-item support.",
      correction:
        "Limit narratives to locations, methods, reported results, and mapping to remediation boundaries and estimate lines.",
    },
    {
      mistake: "Clearance sampling without linking exhibits to PRV closeout",
      impact:
        "Final payment stalls when closeout packages omit lab results that exist elsewhere in email or vendor portals.",
      correction:
        "Include testing exhibits in the PRV attachment index with room mapping per the Post-Remediation Verification Documentation Guide.",
    },
    {
      mistake: "Sample ID mismatches across field forms and lab certificates",
      impact:
        "Desk reviewers reject the package as unreliable even when sampling work was performed correctly.",
      correction:
        "Reconcile IDs in a crosswalk table; request corrected lab paperwork before carrier submission when mismatches appear.",
    },
    {
      mistake: "Proceeding to rebuild before documenting failed clearance and corrective work",
      impact:
        "Retest evidence and corrective cleaning photos become impossible after close-in — supplements and payment disputes follow.",
      correction:
        "Document corrective actions and retest results before covering substrates; sequence exhibits chronologically in the closeout package.",
    },
    {
      mistake: "Conflating air and surface sample exhibits in one unlabeled set",
      impact:
        "Estimate lines and protocol requirements cannot be matched to the correct method on review.",
      correction:
        "Maintain a sample-type log and separate or clearly label air versus surface sequences in exhibit folders.",
    },
    {
      mistake: "Assuming lab clearance is required on every mold file without stating what this file used",
      impact:
        "Files look incomplete when no labs exist, or over-documented when unnecessary testing is billed without justification.",
      correction:
        "State whether testing was performed, deferred, or not required; document visual verification when labs were not part of the file.",
    },
  ],
  supplementOpportunities: [
    {
      trigger: "Protocol or carrier requires sampling not on the original estimate",
      documentation:
        "Written protocol or carrier directive, sample location photos, chain-of-custody, and lab reports mapped to new testing lines.",
      lineItemHint: "IAQ / mold sampling and laboratory analysis lines",
    },
    {
      trigger: "Clearance retesting after initial failed or conditional results",
      documentation:
        "Failed report, corrective cleaning photos, retest location photos, and passed laboratory certificates with narrative.",
      lineItemHint: "Additional cleaning, retesting, and verification lines",
    },
    {
      trigger: "Multi-zone commercial sampling beyond initial allowance",
      documentation:
        "Zone-indexed sample registers, property manager requirements, and lab packages by building or unit.",
      lineItemHint: "Additional sampling events and consulting coordination lines",
    },
    {
      trigger: "Baseline and clearance packages both required on the same claim",
      documentation:
        "Separated pre- and post-remediation packages with request sources and estimate crosswalk for each phase.",
      lineItemHint: "Pre-remediation and post-remediation testing line sets",
    },
    {
      trigger: "Carrier denial of testing lines for missing exhibits",
      documentation:
        "Resubmission with location photos, custody forms, full lab PDFs, and line-item exhibit index addressing the denial reason.",
      lineItemHint:
        "Testing resubmission with exhibit mapping; Claims Ninja supports documentation review and claim recovery workflows",
    },
  ],
  faq: [
    {
      question: "What is IAQ testing documentation on a mold insurance claim?",
      answer:
        "IAQ testing documentation is the organized evidence package that shows what was sampled, where and when, who collected and analyzed it, and how laboratory results connect to remediation rooms and billed testing lines. It typically includes sample location photos, sample-type logs, chain-of-custody forms, full lab reports, and a claim-facing narrative — not health advice or environmental consulting opinions.",
    },
    {
      question: "Do all mold claims require clearance or IAQ laboratory testing?",
      answer:
        "No. Testing requirements vary by carrier, policy, protocol, property type, and jurisdiction. When testing is performed or required, document locations, custody, lab reports, and scope mapping. When testing is not performed, document the verification method used instead (often visual inspection and moisture verification) and state that laboratory sampling was not part of the file.",
    },
    {
      question: "What belongs in a mold testing documentation package for carriers?",
      answer:
        "A carrier-ready testing package typically includes: sampling scope and request source, sample location photos, sample-type log, chain-of-custody, full laboratory reports with sample ID crosswalk, results narrative mapped to rooms and estimate lines, protocol crosswalk when a protocol applies, and an attachment index. Include the package in PRV closeout when clearance sampling supports project completion.",
    },
  ],
  relatedResources: [
    {
      label: "Mold Supplement Playbook for Contractors",
      href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
    },
    {
      label: "Commercial Mold Claims Guide",
      href: "/resources/guides/mold/commercial-mold-claims-guide",
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
      label: "Post-Remediation Verification (PRV) Documentation Guide",
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
      label: "Claim Documentation Standards",
      href: "/resources/guides/general-claims/documentation-standards-guide",
    },
    {
      label: "Photo Documentation Standards",
      href: "/resources/guides/general-claims/photo-documentation-standards-guide",
    },
    {
      label: "Mold Claim Documentation Checklist",
      href: "/resources/blog/mold-claim-documentation-checklist",
    },
    {
      label: "Mold Documentation Mistakes",
      href: "/resources/blog/mold-documentation-mistakes",
    },
    {
      label: "Why Mold Insurance Claims Get Underpaid",
      href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
    },
    { label: "Mold solutions", href: SOLUTION_PATH },
    { label: "Water damage solutions", href: "/solutions/water-damage" },
    { label: "Pricing", href: "/pricing" },
    { label: "Claims Ninja platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
});
