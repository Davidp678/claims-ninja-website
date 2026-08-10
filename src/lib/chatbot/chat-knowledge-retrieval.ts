import { normalizeInput } from "@/components/chatbot/chat-match";

import {
  CHAT_KNOWLEDGE_CHUNKS,
  type ChatKnowledgeChunk,
} from "./chat-knowledge";

const PHRASE_SCORE = 10;
const KEYWORD_SCORE = 3;
const MIN_SCORE = 5;
const MAX_SNIPPETS = 5;
const MAX_CONTEXT_CHARS = 2800;
const MAX_TOKEN_OVERLAP_BONUS = 15;

const RESOURCE_INTENT_TERMS = [
  "resources",
  "guides",
  "articles",
  "what should i read",
  "do you have",
  "library",
] as const;

const PROCEDURAL_INTENT_TERMS = [
  "how do i",
  "how to",
  "checklist",
  "step-by-step",
  "steps to",
  "steps for",
  "what should i document",
  "field guide",
  "procedure",
  "on site",
  "on-site",
] as const;

const PARTNER_CHUNK_INTENT_TERMS: Record<string, readonly string[]> = {
  "partner-network:page": [
    "partner network",
    "strategic partners",
    "who are claims ninja partners",
    "claims ninja partner network",
  ],
  "partner-network:policies": [
    "partner services required",
    "do i have to use partners",
    "request an introduction",
    "who can use network partners",
    "how are partners selected",
    "network partners work with all contractors",
  ],
  "partner-network:become-partner": [
    "become a partner",
    "become a claims ninja partner",
    "strategic partner application",
    "discuss partnership opportunities",
  ],
  "partner-network:profile-gorilla": ["profilegorilla", "profile gorilla"],
  "partner-network:core-group": ["core group"],
  "partner-network:911-restoration": ["911 restoration"],
  "partner-network:daylit": ["daylit", "contractor financing"],
  "partner-network:morgan-morgan": [
    "morgan and morgan",
    "morgan & morgan",
    "legal partner",
  ],
};

const PARTNER_CHUNK_BOOST = 10;

const CATEGORY_HUB_RESOURCE_BOOST = 6;

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "can",
  "do",
  "does",
  "for",
  "how",
  "i",
  "in",
  "is",
  "it",
  "me",
  "my",
  "of",
  "on",
  "or",
  "our",
  "the",
  "this",
  "to",
  "we",
  "what",
  "when",
  "where",
  "which",
  "who",
  "why",
  "with",
  "you",
  "your",
]);

export type RetrievedSnippet = {
  source: string;
  text: string;
};

export type RetrieveKnowledgeResult = {
  snippets: RetrievedSnippet[];
  formatted: string;
};

const TOPIC_KEYWORD_MAP: Record<string, readonly string[]> = {
  pricing: [
    "price",
    "fee",
    "cost",
    "charge",
    "rcv",
    "15%",
    "4%",
    "billing",
    "percent",
    "estimate writing",
    "eagleview",
    "appraisal",
    "ach",
    "minimum",
    "1.25%",
    "0.75%",
    "0.50%",
    "invoice",
  ],
  supplements: [
    "supplement",
    "line item",
    "scope",
    "carrier estimate",
    "under-scope",
  ],
  public_adjuster: [
    "public adjuster",
    "licensed adjuster",
    "pa",
    "adjuster access",
  ],
  ai: ["ai", "analysis", "triage", "scope gap", "intelligence", "machine"],
  onboarding: [
    "onboard",
    "intake",
    "getting started",
    "first claim",
    "partnership",
  ],
  billing: ["invoice", "payment", "billed", "billing", "paid"],
  platform: ["portal", "platform", "tracking", "communication"],
  contractor_fit: ["contractor", "restoration", "roofing", "fit"],
  water_damage_claims: [
    "water damage",
    "water mitigation",
    "mitigation",
    "drying",
    "invoice defense",
    "invoice reduction",
    "mitigation invoice",
    "carrier invoice reduction",
  ],
  fire_damage_claims: [
    "fire damage",
    "fire claim",
    "smoke",
    "soot",
    "fire documentation",
    "smoke documentation",
    "soot documentation",
    "pack-out",
    "board-up",
    "soot contamination",
    "smoke migration",
    "clean vs replace",
    "contents inventory",
    "contents documentation",
    "personal property",
    "pack-out inventory",
    "contents supplement",
    "pack-out documentation",
    "chain of custody",
    "storage tracking",
    "return delivery",
    "loading manifest",
    "fire underpaid",
    "fire underpayment",
    "fire claim documentation",
  ],
  roofing_claims: [
    "roofing",
    "roof supplement",
    "storm claim",
    "shingle",
    "roof matching",
    "material matching",
    "shingle matching",
    "discontinued shingle",
    "partial roof",
    "color mismatch",
    "repairability",
    "brittle test",
    "test square",
    "collateral damage",
    "seal strip adhesion",
    "repair limitations",
    "repair versus replacement",
    "roof reinspection",
    "missed roof damage",
    "roof scope omissions",
    "reinspection documentation",
    "HOA roofing",
    "condominium roofing",
    "HOA",
    "condo roof",
    "common elements",
    "master policy",
    "board approval",
    "multi-building roof",
    "community association",
    "apartment complex roof",
    "office park roof",
    "industrial campus roof",
    "multi-building portfolio",
    "representative sampling",
    "campus roofing",
  ],
  dry_logs: [
    "dry log",
    "drying log",
    "moisture log",
    "dry standard",
    "drying day dispute",
    "drying days",
  ],
  moisture_mapping: ["moisture map", "mapping", "moisture mapping"],
  denial_recovery: [
    "denied supplement",
    "denial recovery",
    "partial denial",
    "resubmission",
    "denied",
  ],
  xactimate: ["xactimate", "estimate review", "line item", "missed line"],
  odor_mitigation: [
    "odor",
    "deodorization",
    "hydroxyl",
    "ozone",
    "thermal fog",
    "smoke odor",
  ],
  hvac_fire: ["hvac", "duct", "duct contamination", "ductwork"],
  first_48: ["first 48", "carrier estimate", "estimate receipt"],
  equipment_charges: [
    "equipment charge",
    "dehumidifier",
    "equipment day",
    "air mover",
    "HEPA",
    "air scrubber",
    "specialty drying",
    "equipment dispute",
    "equipment invoice",
  ],
  monitoring: ["monitoring visit", "daily monitoring", "monitoring log"],
  op_claims: ["o&p", "overhead", "profit", "overhead and profit"],
  blog_resources: [
    "resources",
    "guides",
    "articles",
    "documentation guides",
    "what should i read",
    "do you have",
    "library",
    "blog",
  ],
  claim_guides: [
    "claim guides",
    "operational guide",
    "checklist",
    "field guide",
    "playbook",
    "sop",
    "step-by-step",
    "how do i",
  ],
  mitigation: [
    "mitigation",
    "water mitigation",
    "drying",
    "restoration",
    "invoice defense",
    "mitigation invoice review",
    "mitigation documentation requirements",
  ],
  commercial_water: [
    "commercial water",
    "commercial water loss",
    "commercial mitigation",
    "multifamily",
    "multifamily water losses",
    "apartment water",
    "apartment complex",
    "HOA documentation",
    "tenant impact",
    "unit-by-unit documentation",
    "common area documentation",
    "business interruption",
    "large loss",
    "enterprise water losses",
    "enterprise water",
    "drying zones",
    "executive reporting",
    "vendor documentation",
    "large-loss documentation systems",
    "commercial mitigation operations",
    "commercial moisture mapping",
    "commercial mitigation package",
    "commercial claim recovery",
    "documentation mistakes",
    "invoice alignment",
    "underpaid",
    "underpayment",
    "common area omissions",
    "documentation-to-invoice",
  ],
  commercial_claims: [
    "commercial",
    "commercial insurance",
    "commercial insurance claims",
    "commercial property",
    "commercial property insurance claims",
    "commercial property loss",
    "commercial claim",
    "commercial claims",
    "commercial claim support",
    "commercial restoration",
    "commercial restoration claims",
    "commercial supplement",
    "commercial insurance supplementing",
    "commercial insurance negotiation",
    "large loss",
    "large-loss",
    "large-loss insurance claims",
    "apartment complex",
    "national restoration",
    "property management portfolio",
    "property manager",
    "property managers",
    "hotel",
    "hotels",
    "hospitality",
    "retail center",
    "retail centers",
    "shopping center",
    "office building",
    "industrial facility",
    "warehouse",
    "warehouse insurance claims",
    "industrial insurance claims",
    "distribution center",
    "manufacturing facility",
    "mixed-use",
    "multi-building",
    "multi-building loss",
    "multi-building losses",
    "multiple buildings",
    "HOA",
    "homeowners association",
    "condominium association",
    "community association",
    "commercial underpaid",
    "commercial underpayment",
    "commercial insurance underpayment",
    "why commercial insurance claims get underpaid",
    "commercial claim documentation",
    "commercial restoration claims",
  ],
  hoa_claims: [
    "HOA",
    "HOA insurance",
    "HOA insurance claims",
    "homeowners association",
    "condominium association",
    "community association",
    "townhome community",
    "master policy",
    "common elements",
    "association documentation",
    "HOA board",
    "HOA restoration",
    "HOA property damage",
  ],
  industrial_warehouse_claims: [
    "industrial",
    "industrial insurance",
    "industrial insurance claims",
    "warehouse",
    "warehouse insurance",
    "warehouse insurance claims",
    "warehouse damage documentation",
    "industrial restoration",
    "industrial restoration documentation",
    "commercial warehouse",
    "commercial warehouse insurance claims",
    "manufacturing facility",
    "distribution center",
    "logistics",
    "high-bay",
    "racking",
    "loading docks",
    "equipment documentation",
    "industrial property documentation",
    "warehouse inspections",
  ],
  retail_office_claims: [
    "retail",
    "retail insurance",
    "retail insurance claims",
    "retail property",
    "retail property damage",
    "office building",
    "office building insurance claims",
    "office restoration",
    "office restoration documentation",
    "shopping center",
    "storefront",
    "tenant improvement",
    "tenant improvements",
    "leasehold",
    "multi-tenant",
    "multi-tenant commercial",
    "occupied business",
    "occupied commercial",
    "suite documentation",
    "professional office",
    "mixed-use",
  ],
  large_loss: [
    "large loss",
    "large-loss",
    "large-loss claim",
    "large-loss reconstruction",
    "large loss commercial",
    "large-loss commercial",
    "commercial large-loss",
    "multi-building insurance",
    "multi-area documentation",
    "campus documentation",
    "phased restoration",
    "large-loss estimate",
    "large-loss reinspection",
    "large-loss mitigation",
    "complex commercial estimate",
    "commercial reinspection",
  ],
  commercial_fire: [
    "commercial fire",
    "commercial fire claims",
    "commercial fire loss",
    "large loss fire",
    "multi-tenant",
    "multi-tenant fire",
    "tenant coordination",
    "tenant owner",
    "shell tenant",
    "triple net",
    "tenant improvement",
    "business interruption",
    "industrial fire",
    "hospitality fire",
    "healthcare fire",
    "office fire",
    "retail fire",
    "engineering reports",
    "phased reconstruction",
    "general conditions",
    "commercial supplement",
    "large-loss fire",
    "commercial fire documentation",
    "commercial fire scrutiny",
    "commercial fire supplement",
  ],
  results_insights: [
    "results and insights",
    "portfolio recovery",
    "book of business",
    "claim portfolio",
    "revenue leakage",
    "recovery opportunities",
    "scope omissions",
    "code compliance",
    "pricing discrepancies",
    "o&p",
    "trade recovery",
    "case study",
    "case studies",
    "recovery case study",
    "claim recovery case study",
    "commercial roofing portfolio",
    "multi-family water loss",
    "fire restoration project",
  ],
};

const CASE_STUDY_INTENT_TERMS = [
  "case study",
  "case studies",
  "recovery case study",
  "claim recovery case study",
  "representative recovery",
] as const;

const CASE_STUDY_CHUNK_BOOST = 12;

function matchesWordBoundary(input: string, token: string): boolean {
  const pattern = new RegExp(
    `\\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
    "i",
  );
  return pattern.test(input);
}

function scoreChunk(
  normalizedMessage: string,
  chunk: ChatKnowledgeChunk,
): number {
  let score = 0;

  for (const phrase of chunk.phrases ?? []) {
    if (normalizedMessage.includes(phrase.toLowerCase())) {
      score += PHRASE_SCORE;
    }
  }

  for (const keyword of chunk.keywords ?? []) {
    const kw = keyword.toLowerCase();
    if (kw.length <= 2) {
      if (matchesWordBoundary(normalizedMessage, kw)) {
        score += KEYWORD_SCORE;
      }
    } else if (normalizedMessage.includes(kw)) {
      score += KEYWORD_SCORE;
    }
  }

  for (const topic of chunk.topics) {
    const topicKeywords = TOPIC_KEYWORD_MAP[topic];
    if (!topicKeywords) {
      continue;
    }
    for (const kw of topicKeywords) {
      const normalized = kw.toLowerCase();
      if (normalized.length <= 2) {
        if (matchesWordBoundary(normalizedMessage, normalized)) {
          score += KEYWORD_SCORE;
        }
      } else if (normalizedMessage.includes(normalized)) {
        score += KEYWORD_SCORE;
      }
    }
  }

  const structuredScore = score;

  const messageTokens = normalizedMessage
    .split(" ")
    .filter((token) => token.length >= 4 && !STOP_WORDS.has(token));
  let overlapBonus = 0;
  const chunkText = chunk.text.toLowerCase();
  for (const token of messageTokens) {
    if (chunkText.includes(token)) {
      overlapBonus += 1;
      if (overlapBonus >= MAX_TOKEN_OVERLAP_BONUS) {
        break;
      }
    }
  }

  if (structuredScore >= KEYWORD_SCORE) {
    score += overlapBonus;
  }

  if (
    (chunk.id.startsWith("blog-category:") || chunk.id.startsWith("guide-category:")) &&
    RESOURCE_INTENT_TERMS.some((term) => normalizedMessage.includes(term))
  ) {
    score += CATEGORY_HUB_RESOURCE_BOOST;
  }

  if (
    chunk.id.startsWith("guide:") &&
    PROCEDURAL_INTENT_TERMS.some((term) => normalizedMessage.includes(term))
  ) {
    score += 10;
  }

  const partnerIntentTerms = PARTNER_CHUNK_INTENT_TERMS[chunk.id];
  if (
    partnerIntentTerms?.some((term) => normalizedMessage.includes(term))
  ) {
    score += PARTNER_CHUNK_BOOST;
  }

  if (
    (chunk.id.startsWith("results-insights:case-study:") ||
      chunk.id === "results-insights:recovery-examples") &&
    CASE_STUDY_INTENT_TERMS.some((term) => normalizedMessage.includes(term))
  ) {
    score += CASE_STUDY_CHUNK_BOOST;
  }

  return score;
}

export function formatApprovedSiteContext(
  snippets: readonly RetrievedSnippet[],
): string {
  if (snippets.length === 0) {
    return "";
  }

  const body = snippets
    .map(
      (snippet) =>
        `[Source: ${snippet.source}]\n${snippet.text.trim()}`,
    )
    .join("\n\n");

  return `APPROVED CLAIMS NINJA SITE CONTEXT
Prioritize the excerpts below over general knowledge. Do not contradict them. Do not invent services, fees, or policies not stated here. If excerpts do not cover the question, answer using system guardrails only.

${body}`;
}

export function retrieveKnowledgeSnippets(
  message: string,
  options?: { minScore?: number; maxSnippets?: number; maxChars?: number },
): RetrieveKnowledgeResult {
  const normalized = normalizeInput(message);
  const minScore = options?.minScore ?? MIN_SCORE;
  const maxSnippets = options?.maxSnippets ?? MAX_SNIPPETS;
  const maxChars = options?.maxChars ?? MAX_CONTEXT_CHARS;

  if (normalized.length === 0) {
    return { snippets: [], formatted: "" };
  }

  const scored = CHAT_KNOWLEDGE_CHUNKS.map((chunk, index) => ({
    chunk,
    score: scoreChunk(normalized, chunk),
    index,
  }))
    .filter((entry) => entry.score >= minScore)
    .sort((a, b) => b.score - a.score || a.index - b.index);

  const snippets: RetrievedSnippet[] = [];
  let charCount = 0;

  for (const { chunk } of scored) {
    if (snippets.length >= maxSnippets) {
      break;
    }

    const snippetText = chunk.text.trim();
    const snippetBlock = `[Source: ${chunk.source}]\n${snippetText}`;
    const addedLength = snippetBlock.length + (snippets.length > 0 ? 2 : 0);

    if (charCount + addedLength > maxChars && snippets.length > 0) {
      break;
    }

    snippets.push({ source: chunk.source, text: snippetText });
    charCount += addedLength;
  }

  return {
    snippets,
    formatted: formatApprovedSiteContext(snippets),
  };
}

type RetrievalCheck = {
  label: string;
  message: string;
  assert: (result: RetrieveKnowledgeResult) => boolean;
};

const RETRIEVAL_CHECKS: RetrievalCheck[] = [
  {
    label: "case study question retrieves anonymized recovery benchmarks",
    message: "Tell me about the commercial roofing portfolio recovery case study",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /commercial roofing portfolio/i.test(s.text) &&
          /\$840,000|\$312,000|37%/i.test(s.text),
      ),
  },
  {
    label: "pricing question retrieves pricing context",
    message: "How much do you charge?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /15%|documented increase|fee|pricing|rcv/i.test(s.text) ||
          /pricing/i.test(s.source),
      ),
  },
  {
    label: "billing question retrieves billing context",
    message: "When do I get billed?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /bill|invoice|payment|fee/i.test(s.text) ||
          /billing|pricing/i.test(s.source),
      ),
  },
  {
    label: "estimate writing cost retrieves estimate writing rates",
    message: "How much does estimate writing cost?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /\$100|1\.25%|estimate writing/i.test(s.text) ||
          /estimate writing/i.test(s.source),
      ),
  },
  {
    label: "negotiation fee retrieves negotiation rates",
    message: "What does Claims Ninja charge for negotiation?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) => /15%|\$150|negotiation/i.test(s.text) || /negotiation/i.test(s.source),
      ),
  },
  {
    label: "supplement cost retrieves supplement rates",
    message: "What do supplements cost?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /15%|supplement|approved increase/i.test(s.text) ||
          /supplement/i.test(s.source),
      ),
  },
  {
    label: "EagleView cost retrieves additional services context",
    message: "What does an EagleView report cost?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) => /\$60|eagleview/i.test(s.text) || /additional services/i.test(s.source),
      ),
  },
  {
    label: "ACH payment retrieves free ACH context",
    message: "Is ACH free?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) => /ach/i.test(s.text) && /free|no processing fee|no fee/i.test(s.text),
      ),
  },
  {
    label: "credit card fee retrieves convenience fee context",
    message: "Are there credit card fees?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) => /3%|credit card|convenience fee/i.test(s.text)),
  },
  {
    label: "invoices due retrieves immediate payment context",
    message: "When are invoices due?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) => /immediately|once approved|invoice/i.test(s.text),
      ),
  },
  {
    label: "supplement question retrieves supplement context",
    message: "Do you help with supplements?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) => /supplement|line item|scope/i.test(s.text)),
  },
  {
    label: "AI analysis question retrieves AI context",
    message: "What does AI claim analysis review?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /ai|analysis|scope gap|line item|carrier estimate/i.test(s.text) ||
          /ai-claim-analysis/i.test(s.source),
      ),
  },
  {
    label: "public adjuster question retrieves PA context",
    message: "Are you a public adjuster?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /public adjuster|licensed|supplement|negotiation/i.test(s.text),
      ),
  },
  {
    label: "off-topic question returns no snippets",
    message: "What's the weather?",
    assert: (result) => result.snippets.length === 0,
  },
  {
    label: "dry log question retrieves blog context",
    message: "dry log documentation for insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /dry log|dry-log-documentation/i.test(s.text) ||
          /dry log|dry-log-documentation/i.test(s.source),
      ),
  },
  {
    label: "fire denial question retrieves blog context",
    message: "fire supplement denial recovery",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /fire.*denial|fire-damage-supplement-denial/i.test(s.text) ||
          /fire damage supplement denial/i.test(s.source),
      ),
  },
  {
    label: "xactimate checklist question retrieves blog context",
    message: "xactimate estimate review checklist for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /xactimate|estimate review checklist/i.test(s.text) ||
          /xactimate estimate review/i.test(s.source),
      ),
  },
  {
    label: "water mitigation resources retrieves category hub",
    message: "water mitigation resources",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /water-damage-claims|blog category — water damage claims/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "fire damage guides retrieves category hub",
    message: "fire damage guides",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /fire-damage-documentation-guide|fire-damage|guide category — fire damage|blog category — fire damage claims/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "fire damage documentation insurance retrieves guide or FAQ",
    message: "how should fire damage be documented for insurance",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-damage-documentation|fire-damage-documentation-insurance|documented for insurance|document fire damage/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire photos required retrieves guide or FAQ",
    message: "what photos are required after a fire",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-damage-photos-required|photos are required after a fire|photos.*after.*fire/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "smoke damage insurance coverage retrieves FAQ or guide",
    message: "does insurance pay for smoke damage",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-smoke-damage-insurance|insurance pay for smoke|smoke damage insurance/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "hidden fire damage documentation retrieves guide or FAQ",
    message: "how should hidden fire damage be documented",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-hidden-damage-documentation|hidden fire damage be documented|hidden fire damage/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement documentation retrieves guide or FAQ",
    message: "what documentation supports fire damage supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-documentation-support|documentation supports fire damage supplements|fire damage supplements/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "smoke damage documentation insurance retrieves guide or FAQ",
    message: "how should smoke damage be documented for insurance",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /smoke-damage-documentation-insurance|smoke-soot-damage-documentation|document smoke damage for insurance|smoke damage be documented/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "soot damage insurance coverage retrieves FAQ or guide",
    message: "does insurance cover soot damage",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /soot-damage-insurance-coverage|insurance cover soot|soot damage insurance/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "smoke damage photos required retrieves guide or FAQ",
    message: "what photographs should be taken after smoke damage",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /smoke-damage-photos-required|photographs should be taken after smoke|photos after smoke damage/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "smoke clean vs replace retrieves guide or FAQ",
    message: "when should smoke-damaged materials be replaced instead of cleaned",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /smoke-damage-clean-vs-replace|replaced instead of cleaned|clean vs replace smoke/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "smoke supplement documentation retrieves guide or FAQ",
    message: "what documentation supports smoke damage supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /smoke-damage-supplement-documentation|documentation supports smoke damage supplements|smoke damage supplements/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "contents inventory documentation insurance retrieves guide or FAQ",
    message: "how should contents be documented after a fire",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /contents-inventory-documentation-insurance|contents-inventory-documentation-guide|document contents after fire|contents be documented/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "contents inventory insurance required retrieves guide or FAQ",
    message: "what inventory is required for insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /contents-inventory-insurance-required|inventory is required for insurance|contents inventory/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "contents smoke damage documentation retrieves guide or FAQ",
    message: "how do contractors document smoke-damaged personal property",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /contents-smoke-damage-documentation|smoke-damaged personal property|smoke damaged personal property/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "contents clean vs replace retrieves guide or FAQ",
    message: "when should contents be replaced instead of cleaned",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /contents-clean-vs-replace|contents be replaced instead of cleaned|clean vs replace contents/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "contents supplement documentation retrieves guide or FAQ",
    message: "what documentation supports contents supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /contents-supplement-documentation|documentation supports contents supplements|contents supplements/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "pack-out documentation insurance retrieves guide or FAQ",
    message: "how should a pack-out be documented for insurance",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /pack-out-documentation-insurance|pack-out-documentation-guide|pack-out be documented for insurance/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "pack-out chain of custody retrieves guide or FAQ",
    message: "what chain of custody documentation is required",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /pack-out-chain-of-custody-documentation|chain of custody documentation|pack-out documentation guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "pack-out storage tracking retrieves guide or FAQ",
    message: "how should contents be tracked during storage",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /pack-out-storage-tracking|contents be tracked during storage|storage tracking/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "pack-out charges documentation retrieves guide or FAQ",
    message: "what documentation supports pack-out charges",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /pack-out-charges-documentation|documentation supports pack-out charges|pack-out charges/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "pack-out return documentation retrieves guide or FAQ",
    message: "how should returned contents be documented",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /pack-out-return-documentation|returned contents be documented|return delivery/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire damage claims underpaid retrieves blog or FAQ",
    message: "why are fire damage claims underpaid",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /why-fire-damage-claims-get-underpaid|fire-claims-underpaid-why|fire.*underpaid/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire claim documentation required retrieves guide or FAQ",
    message: "what documentation do insurance companies require after a fire",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-claim-documentation-required|fire-damage-documentation-insurance|documentation do insurance companies require after a fire|document fire damage for insurance/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement contractor documentation retrieves blog or FAQ",
    message: "how do contractors support fire damage supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-contractor-documentation|fire-supplement-documentation-support|fire damage supplements/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire claim documentation delays retrieves blog or FAQ",
    message: "what documentation mistakes delay fire claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-claim-documentation-delays|why-fire-damage-claims-get-underpaid|documentation mistakes delay fire/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire claim documentation improve retrieves blog or FAQ",
    message: "how can contractors improve fire claim documentation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-claim-documentation-improve|fire-damage-documentation-guide|improve fire claim documentation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial fire claims documentation retrieves guide or FAQ",
    message: "how do i document commercial fire damage",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-fire-claims-guide|fire-commercial-claims-documentation|commercial fire claims documentation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire damage supplement playbook retrieves guide",
    message: "fire damage supplement playbook for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-damage-supplement-playbook-for-contractors|fire damage supplement playbook|fire-supplement-included-items/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire reinspection prep retrieves playbook guide",
    message: "how do I prepare for a fire reinspection",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-damage-supplement-playbook-for-contractors|Phase 7 — Prepare for Reinspection|reinspection-packet|prepare for Reinspection/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement included items FAQ",
    message: "what should be included in a fire damage supplement",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-included-items|cover letter with summary table|fire-damage-supplement-playbook/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement when to submit FAQ",
    message: "when should contractors submit a fire supplement",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-when-to-submit|within 48 hours on visible estimate gaps|phased submission/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement multiple submissions FAQ",
    message: "can multiple supplements be submitted during a fire claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-multiple-submissions|phased supplements|multiple supplements/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement commonly missed items FAQ",
    message: "what are the most commonly missed fire supplement items",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-commonly-missed-items|migration rooms|HVAC duct cleaning/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial fire tenant responsibility retrieves guide or FAQ",
    message: "commercial fire claim tenant owner responsibility",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /owner and tenant responsibilities separated on commercial fire|fire-commercial-tenant-owner-responsibility|commercial-fire-claims-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial fire large loss scrutiny retrieves guide or FAQ",
    message: "why are commercial fire claims more heavily scrutinized",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-fire-claims-guide|fire-commercial-large-loss-scrutiny|commercial fire claims.*scrutin/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial fire business interruption contractor role retrieves guide or FAQ",
    message: "contractor role business interruption fire claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /documentation role do contractors play in business interruption on fire|fire-commercial-business-interruption-role|commercial-fire-claims-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial fire supplement opportunities retrieves guide or FAQ",
    message: "commercial fire supplement opportunities",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-fire-claims-guide|fire-commercial-supplement-opportunities|commercial fire supplement/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "large loss fire documentation retrieves commercial fire guide",
    message: "large loss fire documentation for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-fire-claims-guide|fire-commercial-large-loss-scrutiny|large loss fire documentation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "xactimate articles retrieves category hub",
    message: "xactimate articles",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /blog category — xactimate|\/resources\/blog\/category\/xactimate/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "denied supplement resources retrieves recovery context",
    message: "denied supplement resources",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /claim-recovery|denial recovery|supplement denial|blog category — claim recovery/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "claim documentation guides retrieves category hub",
    message: "claim documentation guides",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /claim-documentation|guide category|blog category — claim documentation|documentation standards guide/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "claim guides hub retrieves guide context",
    message: "claim guides checklist",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /guide —|guide category —|\/resources\/guides/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "dry log collection procedural question retrieves guide",
    message: "how do i collect dry logs on a water job",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /dry log collection|dry-log-collection-guide|guide — dry log collection/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "supplement submission guide retrieves guide context",
    message: "supplement submission steps for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /supplement submission|supplement-submission-guide|guide — supplement submission/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "water mitigation documentation procedural question retrieves guide",
    message: "How do I document a water mitigation claim?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /^guide —/i.test(s.source) ||
          /resources on water mitigation claim documentation|water mitigation claim documentation/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "insurance supplementing educational question retrieves blog or faq",
    message: "What is insurance supplementing?",
    assert: (result) => {
      if (result.snippets.length === 0) return false;
      const hasEducational = result.snippets.some(
        (s) => /^blog —|^faq —/i.test(s.source),
      );
      const guideOnly =
        result.snippets.length > 0 &&
        result.snippets.every((s) => /^guide —|^guide category —/i.test(s.source));
      return hasEducational && !guideOnly;
    },
  },
  {
    label: "water mitigation resources retrieves guide or blog category hub",
    message: "water mitigation resources",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /guide category — water damage|blog category — water damage claims|water-damage-claims/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "dry log documentation blog chunk links to dry log collection guide",
    message: "dry log documentation guide",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /dry-log-documentation-guide-insurance-claims|dry log documentation/i.test(
            `${s.text} ${s.source}`,
          ) &&
          /\/resources\/guides\/water-damage\/dry-log-collection-guide/i.test(s.text),
      ),
  },
  {
    label: "drying day reduction question retrieves blog context",
    message: "how do carriers reduce drying days",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /how-carriers-reduce-drying-days|drying day|reduce drying/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "equipment charge reduction question retrieves new blog context",
    message: "why do carriers reduce equipment charges on water claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /equipment-charges-that-get-cut-from-water-claims|equipment charge reduction/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "water claim documentation denial question retrieves blog context",
    message: "why are water damage claims denied for documentation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /documentation-gaps-that-trigger-water-claim-denials|denied for documentation issues|denied or reduced for documentation/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "documentation gaps water claim question retrieves blog context",
    message: "documentation gaps water claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /documentation-gaps-that-trigger-water-claim-denials|documentation gap/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "missing dry logs insurance claim question retrieves blog context",
    message: "missing dry logs insurance claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /documentation-gaps-that-trigger-water-claim-denials|missing dry log|dry log/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "final drying verification question retrieves blog context",
    message: "final drying verification water damage",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /documentation-gaps-that-trigger-water-claim-denials|water-final-drying-verification|final drying verification/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "commercial water loss documentation retrieves guide",
    message: "how do i document commercial water loss mitigation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-water-loss-documentation-guide|commercial water loss documentation guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial mitigation documentation retrieves guide",
    message: "commercial mitigation documentation requirements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-water-loss-documentation-guide|water-commercial-claims-documentation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "apartment water damage documentation retrieves guide or FAQ",
    message: "apartment water damage documentation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-water-loss-documentation-guide|water-apartment-loss-documentation|water-apartment-complex-documentation|water-damage-documentation-for-apartment-complexes|apartment water/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "apartment unit tracking retrieves FAQ or blog",
    message: "should contractors track each apartment unit separately water damage",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-apartment-unit-separate-tracking|water-damage-documentation-for-apartment-complexes|unit-by-unit/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "common area apartment documentation retrieves blog or FAQ",
    message: "common area water damage documentation apartment complex",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-apartment-complex-documentation|water-damage-documentation-for-apartment-complexes|common area/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "HOA water damage documentation retrieves guide or blog",
    message: "HOA water damage documentation requirements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-water-loss-documentation-guide|water-damage-documentation-for-apartment-complexes|water-apartment-complex-documentation|HOA/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "apartment tenant impact documentation retrieves FAQ or blog",
    message: "tenant impact documentation apartment water loss",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-apartment-tenant-impact-required|water-tenant-impact-documentation|water-damage-documentation-for-apartment-complexes|tenant impact/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multifamily water claims documentation retrieves guide",
    message: "multifamily water claims documentation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-water-loss-documentation-guide|water-multifamily-loss-documentation|multifamily/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multifamily water claims underpaid retrieves blog or FAQ",
    message: "multifamily water claims underpaid",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multifamily-water-claims-that-get-underpaid|water-multifamily-claims-underpaid|multifamily.*underpaid/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "apartment water claim underpayment retrieves blog or FAQ",
    message: "apartment water claim underpayment",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multifamily-water-claims-that-get-underpaid|water-multifamily-claims-underpaid|apartment.*underpaid|underpayment/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "unit-by-unit documentation multifamily retrieves blog or FAQ",
    message: "unit-by-unit documentation multifamily",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multifamily-water-claims-that-get-underpaid|water-multifamily-units-documentation|water-apartment-unit-separate-tracking|unit-by-unit/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "common area omissions water claim retrieves blog or guide",
    message: "common area omissions water claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multifamily-water-claims-that-get-underpaid|water-commercial-common-area-documentation|common area/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multifamily equipment reductions retrieves FAQ or blog",
    message: "multifamily equipment reductions",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-multifamily-equipment-reductions|equipment-charges-that-get-cut-from-water-claims|multifamily.*equipment/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "documentation to invoice mismatch multifamily retrieves guide or blog",
    message: "documentation to invoice mismatch multifamily",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-mitigation-invoice-defense-guide|multifamily-water-claims-that-get-underpaid|water-multifamily-full-payment-support|invoice.*mismatch|documentation-to-invoice/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "tenant impact documentation retrieves guide or FAQ",
    message: "tenant impact documentation water damage",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-water-loss-documentation-guide|water-tenant-impact-documentation|tenant impact/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "business interruption documentation water retrieves guide",
    message: "business interruption documentation water damage",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-water-loss-documentation-guide|water-business-interruption-documentation|business interruption/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial mitigation package question retrieves guide or FAQ",
    message: "what should be in a commercial mitigation package",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-water-loss-documentation-guide|water-commercial-mitigation-package|commercial mitigation package/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "large loss documentation retrieves guide or blog",
    message: "large loss water damage documentation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-water-loss-documentation-guide|large-loss-water-mitigation-documentation-best-practices|large loss documentation|large-loss/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "large loss qualification retrieves FAQ or blog",
    message: "what qualifies as a large-loss water mitigation project",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /What qualifies as a large-loss water mitigation project|large-loss-water-mitigation-documentation-best-practices|large-loss water mitigation typically involves enterprise/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "drying zones documentation retrieves FAQ or blog",
    message: "how should multiple drying zones be documented on a large loss",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-large-loss-drying-zones|large-loss-water-mitigation-documentation-best-practices|multiple drying zones|Document each drying zone separately/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "executive reporting large loss retrieves blog or FAQ",
    message: "executive reporting for large loss water mitigation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /large-loss-water-mitigation-documentation-best-practices|executive summaries|executive-level reporting|Executive-level reporting translates/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "vendor documentation large loss retrieves blog",
    message: "vendor documentation on large loss water mitigation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /large-loss-water-mitigation-documentation-best-practices|vendor documentation|subcontractor documentation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial documentation mistakes retrieves blog or FAQ",
    message: "common documentation mistakes commercial water loss",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /common-documentation-mistakes-on-commercial-water-losses|water-commercial-documentation-missing|commercial documentation mistakes/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial invoice reductions retrieves FAQ or guide",
    message: "why are commercial water mitigation invoices reduced",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-commercial-invoice-reduced-why|water-mitigation-invoice-defense-guide|commercial water mitigation invoices reduced/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial tenant impact documentation retrieves FAQ or blog",
    message: "should tenant impacts be documented commercial water loss",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-commercial-tenant-impact-required|common-documentation-mistakes-on-commercial-water-losses|tenant impact/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "common area documentation commercial retrieves FAQ or blog",
    message: "how to document common areas commercial water mitigation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-commercial-common-area-documentation|common-documentation-mistakes-on-commercial-water-losses|common areas be documented|common area documentation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial mitigation disputes retrieves blog or guide",
    message: "commercial mitigation documentation disputes",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /common-documentation-mistakes-on-commercial-water-losses|commercial-water-loss-documentation-guide|commercial mitigation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "documentation invoice alignment retrieves FAQ or guide",
    message: "why must documentation match mitigation invoice",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-commercial-documentation-invoice-match|water-mitigation-invoice-defense-guide|documentation match.*invoice/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "water mitigation file documentation question retrieves FAQ context",
    message: "what documentation should be in a water mitigation file",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /water-mitigation-file-documentation|documentation should be included in a water mitigation file/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "mitigation invoice defense question retrieves guide",
    message: "how do i defend a water mitigation invoice",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-mitigation-invoice-defense-guide|invoice defense|defend mitigation invoice/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "carrier mitigation invoice reduction question retrieves FAQ or guide",
    message: "why do carriers reduce mitigation invoices",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-mitigation-invoice-reductions|water-mitigation-invoice-defense-guide|carrier invoice reduction|reduce.*mitigation invoice/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mitigation invoice documentation question retrieves guide or FAQ",
    message: "what documentation supports mitigation invoice review",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /water-mitigation-invoice-documentation|water-mitigation-invoice-defense-guide|mitigation documentation requirements|documentation supports water mitigation invoices|supports mitigation invoice/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "class 4 drying documentation retrieves class 4 guide",
    message: "How do I document Class 4 drying?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /class-4-drying-documentation-guide|Class 4 Drying Documentation|class 4 drying documentation/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "class 4 drying duration retrieves duration FAQ or guide",
    message: "Why does Class 4 drying take longer?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /water-class-4-drying-duration|class-4-drying-documentation-guide|class 4 drying projects take longer|bound water/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "class 4 carrier disputes retrieves dispute FAQ or guide",
    message: "Why do carriers dispute Class 4 drying charges?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /water-class-4-carrier-disputes|class-4-drying-documentation-guide|carriers dispute Class 4 drying/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "water reinspection when retrieves guide or FAQ",
    message: "When should I request a water damage reinspection?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /water-reinspection-when-request|water-damage-reinspection-guide|request a water damage reinspection/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "water reinspection documentation prep retrieves guide or FAQ",
    message: "What documentation do I need before a reinspection?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /water-reinspection-documentation-prep|water-damage-reinspection-guide|prepared before a reinspection/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "water reinspection denial reasons retrieves FAQ or guide",
    message: "Why do carriers deny reinspection requests?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /water-reinspection-denial-reasons|water-damage-reinspection-guide|deny reinspection requests/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "commercial roof damage documentation retrieves guide",
    message: "how do i document commercial roof damage for insurance",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-roofing-documentation-guide|roof-commercial-damage-documentation|commercial roofing documentation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial roofing supplement documentation retrieves guide or FAQ",
    message: "what documentation is required for commercial roofing supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-roofing-documentation-guide|roof-commercial-supplement-documentation|commercial roofing supplement/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial roof moisture survey payment retrieves FAQ or guide",
    message: "do insurance companies pay for moisture surveys on commercial roofs",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /roof-commercial-moisture-survey-payment|commercial-roofing-documentation-guide|moisture survey/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial roof inspection photos retrieves FAQ or guide",
    message: "what should be photographed during a commercial roof inspection",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /roof-commercial-inspection-photos|commercial-roofing-documentation-guide|commercial roof inspection/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial roofing system replacement documentation retrieves guide",
    message: "what documentation supports replacing a commercial roofing system",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /roof-commercial-system-replacement-documentation|commercial-roofing-documentation-guide|replacing a commercial roofing system|commercial roofing system/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "HOA roof damage responsibility retrieves guide or FAQ",
    message: "Who is responsible for roof damage in an HOA?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /hoa-roofing-claims-guide|roof-hoa-responsible-damage|responsible for roof damage in an HOA/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "HOA roof damage documentation retrieves guide or FAQ",
    message: "How should HOA roof damage be documented?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /hoa-roofing-claims-guide|roof-hoa-damage-documentation|HOA roof damage be documented/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "HOA roofing supplement documentation retrieves guide or FAQ",
    message: "What documentation helps HOA roofing supplements?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /hoa-roofing-claims-guide|roof-hoa-supplement-documentation|HOA roofing supplement/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "HOA partial building replacement retrieves guide or FAQ",
    message: "Can every building be replaced if only some are damaged in an HOA?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /hoa-roofing-claims-guide|roof-hoa-partial-building-replacement|only some are damaged/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "HOA insurance roof replacement retrieves guide or FAQ",
    message: "Does HOA insurance cover roof replacement?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /hoa-roofing-claims-guide|roof-hoa-insurance-covers-replacement|HOA insurance cover roof replacement/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multi-building carrier handling retrieves guide or FAQ",
    message: "How do insurance companies handle multi-building roof claims?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multi-building-roofing-claims-guide|roof-multi-building-carrier-handling|multi-building roof claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multi-building partial replacement retrieves guide or FAQ",
    message: "Can insurance replace every roof if only some buildings are damaged?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multi-building-roofing-claims-guide|roof-multi-building-partial-replacement|only some buildings are damaged/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "apartment complex roof documentation retrieves guide or FAQ",
    message: "How should contractors document apartment complex roof damage?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multi-building-roofing-claims-guide|roof-multi-building-apartment-documentation|apartment complex roof damage/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multi-building matching retrieves guide or FAQ",
    message: "What supports matching across multiple buildings?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multi-building-roofing-claims-guide|roof-multi-building-matching|matching across multiple buildings/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multi-building supplement documentation retrieves guide or FAQ",
    message: "What documentation helps large commercial roofing supplements?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multi-building-roofing-claims-guide|roof-multi-building-supplement-documentation|large commercial roofing supplements/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "roof matching documentation retrieves guide",
    message: "How do I document roof matching for a partial replacement?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /roof-matching-documentation-guide|roof matching documentation guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "discontinued shingle matching retrieves guide or FAQ",
    message: "Can discontinued shingles support a roof matching supplement?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /roof-matching-discontinued-shingles|roof-matching-documentation-guide|discontinued shingles/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "shingle color mismatch retrieves guide",
    message: "How do I document shingle color mismatch on a roofing claim?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /roof-matching-documentation-guide|roof-matching-dispute-photos|shingle color mismatch/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "roof matching supplement denials retrieves FAQ",
    message: "Why do carriers deny roof matching supplements?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /roof-matching-supplement-denials|roof-matching-documentation-guide|deny roof matching/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "roof repairability documentation retrieves guide",
    message: "How do I document roof repairability on brittle shingles?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /roof-repairability-documentation-guide|roof repairability documentation guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "brittle test on roof retrieves guide or FAQ",
    message: "What is a brittle test on a roof?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /roof-brittle-test-roofing|roof-repairability-documentation-guide|brittle test/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "repairability documentation evidence retrieves FAQ or guide",
    message: "What documentation supports roof repairability concerns?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /roof-repairability-documentation-evidence|roof-repairability-documentation-guide|repairability concerns/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "roof repairability carrier disputes retrieves FAQ",
    message: "Why do carriers dispute roof repairability?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /roof-repairability-carrier-disputes|roof-repairability-documentation-guide|dispute roof repairability/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "roof reinspection when to request retrieves guide or FAQ",
    message: "When should contractors request a roof reinspection?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /roof-reinspection-when-request|roof-reinspection-guide|request a roof reinspection/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "roof reinspection documentation prep retrieves guide or FAQ",
    message: "What documentation should be prepared for a roof reinspection?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /roof-reinspection-documentation-prep|roof-reinspection-guide|prepared for a roof reinspection/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "missed roof damage after inspection retrieves FAQ or guide",
    message: "Can missed roof damage be documented after the initial inspection?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /roof-reinspection-missed-damage|roof-reinspection-guide|missed roof damage/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "roof reinspection denial reasons retrieves FAQ",
    message: "Why do carriers deny roof reinspection requests?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /roof-reinspection-denial-reasons|roof-reinspection-guide|deny roof reinspection/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "roof reinspection photo organization retrieves FAQ or guide",
    message: "How should contractors organize photos for a roof reinspection?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /roof-reinspection-organize-photos|roof-reinspection-guide|organize photos for a roof reinspection/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "client portal question retrieves portal context",
    message: "What can I do in the client portal?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /client portal|client-portal|claims command center/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "claim tracking question retrieves tracking context",
    message: "How do I track claim status in the platform?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /claim tracking|claim-tracking|pipeline visibility|claim status/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "reviews question retrieves testimonial context",
    message: "What do contractors say about Claims Ninja?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /review|testimonial|steve kranz|kenneth valentine|daniel deerwater/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "calculator question retrieves calculator context",
    message: "How does the claim review calculator work?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /calculator|single claim review|organization roi|preliminary triage/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "contact question retrieves phone and email",
    message: "How do I contact Claims Ninja?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /615.*479.*2438|info@theclaimsninja\.com|page:\/contact/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "reinspection procedural question retrieves guide",
    message: "how do i prepare for a roof reinspection",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /reinspection|reinspection-preparation-guide|guide — roof reinspection/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "mold solution question retrieves solution context",
    message: "Do you support mold remediation claims?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /mold claims|solutions\/mold|remediation protocol/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "mold documentation guide question retrieves cornerstone guide",
    message: "How should contractors document mold damage for insurance claims?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-damage-documentation-guide|mold-damage-documentation-insurance|document mold damage/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold photos FAQ retrieves photo documentation context",
    message: "What photos should be taken for mold claims?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-claim-photos-required|mold-damage-documentation-guide|photos should be taken for mold/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold moisture readings FAQ retrieves supporting evidence context",
    message: "Do moisture readings help support mold claims?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-moisture-readings-support|moisture readings help support mold|mold-damage-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold insurance documentation FAQ retrieves carrier requirements context",
    message: "What documentation do insurance companies request for mold damage?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-insurance-documentation-required|documentation do insurance companies request for mold|mold-damage-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "hidden mold documentation FAQ retrieves cavity investigation context",
    message: "How should hidden mold be documented?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-hidden-damage-documentation|hidden mold be documented|mold-damage-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold remediation guide question retrieves remediation documentation guide",
    message: "How should contractors document mold remediation work for insurance?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-remediation-documentation-guide|mold-remediation-work-documentation|document mold remediation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold remediation photos FAQ retrieves production photo context",
    message: "What photos should be taken during mold remediation?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-remediation-photos-required|mold-remediation-documentation-guide|photos should be taken during mold remediation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold remediation moisture readings FAQ retrieves remediation evidence context",
    message: "Should moisture readings be included with mold remediation documentation?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-remediation-moisture-readings-support|moisture readings be included with mold remediation|mold-remediation-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold remediation insurance documentation FAQ retrieves carrier requirements context",
    message: "What documentation supports mold remediation insurance claims?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-remediation-insurance-documentation|documentation supports mold remediation insurance|mold-remediation-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold remediation containment FAQ retrieves containment documentation context",
    message: "How should contractors document containment during mold remediation?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-remediation-containment-documentation|document containment during mold remediation|mold-remediation-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "PRV guide question retrieves post-remediation verification documentation guide",
    message: "How should contractors document PRV for insurance claims?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /post-remediation-verification-documentation-guide|mold-prv-documentation-insurance|document PRV for insurance/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "PRV definition FAQ retrieves post-remediation verification context",
    message: "What is Post-Remediation Verification (PRV)?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-prv-definition|post-remediation-verification-documentation-guide|Post-Remediation Verification/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "PRV moisture readings FAQ retrieves terminal moisture context",
    message: "Are moisture readings required during PRV?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-prv-moisture-readings-required|moisture readings required during PRV|post-remediation-verification-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "PRV closeout package FAQ retrieves mold closeout documentation context",
    message: "What documentation belongs in a mold project closeout package?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-prv-closeout-package|mold project closeout package|post-remediation-verification-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "PRV clearance documentation FAQ retrieves clearance requirements context",
    message: "Do insurance companies require clearance documentation after mold remediation?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-prv-clearance-documentation-required|clearance documentation after mold remediation|post-remediation-verification-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold protocol guide question retrieves protocol documentation guide",
    message: "How should contractors document mold remediation protocols for insurance?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-protocol-documentation-guide|mold-protocol-supporting-documentation|document mold remediation protocol/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold protocol definition FAQ retrieves protocol context",
    message: "What is a mold remediation protocol?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-protocol-definition|mold-protocol-documentation-guide|mold remediation protocol/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold protocol follow exactly FAQ retrieves compliance context",
    message: "Should contractors follow a mold protocol exactly?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-protocol-follow-exactly|follow a mold protocol exactly|mold-protocol-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold protocol change documentation FAQ retrieves change context",
    message: "How should protocol changes be documented?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-protocol-change-documentation|protocol changes be documented|mold-protocol-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold protocol supporting documentation FAQ retrieves package context",
    message: "What documentation should accompany a mold protocol?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-protocol-supporting-documentation|documentation should accompany a mold protocol|mold-protocol-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold protocol field conditions FAQ retrieves difference context",
    message: "Can field conditions differ from the remediation protocol?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-protocol-field-conditions-differ|field conditions differ from the remediation protocol|mold-protocol-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "IAQ guide question retrieves indoor air quality testing documentation guide",
    message:
      "how do i document indoor air quality testing for mold insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /indoor-air-quality-testing-documentation-guide|mold-iaq-documentation|Indoor Air Quality \(IAQ\)|indoor air quality testing/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "IAQ documentation FAQ retrieves indoor air quality testing context",
    message: "What is IAQ testing documentation on a mold insurance claim?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-iaq-documentation|indoor-air-quality-testing-documentation-guide|IAQ testing documentation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "IAQ air sampling FAQ retrieves air sampling documentation context",
    message: "How should contractors document air sampling on mold claims?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-iaq-air-sampling|document air sampling|indoor-air-quality-testing-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "IAQ clearance testing FAQ retrieves clearance testing documentation context",
    message: "How should clearance testing be documented after mold remediation?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-iaq-clearance-testing|clearance testing be documented|indoor-air-quality-testing-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "IAQ lab reports FAQ retrieves laboratory report organization context",
    message: "How should laboratory reports be organized in a mold claim file?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-iaq-lab-reports|laboratory reports be organized|indoor-air-quality-testing-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "IAQ documentation requirements FAQ retrieves testing package context",
    message:
      "What documentation is typically required for IAQ and mold testing on insurance claims?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-iaq-documentation-requirements|documentation is typically required for IAQ|indoor-air-quality-testing-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial mold claims documentation retrieves guide or FAQ",
    message: "how do i document commercial mold claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-mold-claims-guide|mold-commercial-claims-vs-residential|mold-commercial-insurance-documentation|commercial mold claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial mold vs residential FAQ retrieves",
    message: "how do commercial mold claims differ from residential",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-commercial-claims-vs-residential|commercial-mold-claims-guide|commercial mold claims differ/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial mold documentation organization FAQ retrieves",
    message: "how should contractors organize documentation for commercial mold claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-commercial-documentation-organization|commercial-mold-claims-guide|organize documentation for commercial mold/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multi-unit mold documentation FAQ retrieves",
    message: "how should multi-unit mold claims be documented",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-commercial-multi-unit-documentation|commercial-mold-claims-guide|multi-unit mold/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial mold insurance documentation FAQ retrieves",
    message: "what documentation supports commercial mold insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-commercial-insurance-documentation|commercial-mold-claims-guide|documentation supports commercial mold insurance claims|What documentation supports commercial mold/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "phased commercial mold remediation FAQ retrieves",
    message: "how should contractors document phased commercial mold remediation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-commercial-phased-remediation|commercial-mold-claims-guide|phased commercial mold remediation|Document which floors, wings, or units/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial insurance claim documentation retrieves guide or FAQ",
    message: "how should contractors document commercial insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-insurance-claims-documentation-guide|commercial-claim-documentation|How should contractors document commercial insurance claims|Scale documentation to the commercial footprint/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial claim documentation FAQ retrieves",
    message: "commercial claim documentation standards for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-claim-documentation|commercial-insurance-claims-documentation-guide|How should contractors document commercial insurance claims|Scale documentation to the commercial footprint/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "large-loss commercial project documentation FAQ retrieves",
    message: "how should contractors document large-loss commercial projects",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-large-loss-project-documentation|commercial-insurance-claims-documentation-guide|document large-loss commercial projects|Assign a documentation lead/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multi-building commercial documentation FAQ retrieves",
    message: "how should contractors document multiple buildings on a commercial claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-multi-building-documentation|commercial-insurance-claims-documentation-guide|document multiple buildings on a commercial claim|Treat each building as a top-level index/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "tenant improvements commercial documentation FAQ retrieves",
    message: "how should contractors document tenant improvements on commercial claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-tenant-improvements-documentation|commercial-insurance-claims-documentation-guide|document tenant improvements on commercial claims|shell versus tenant improvement/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial insurance documentation requirements FAQ retrieves",
    message: "what documentation do commercial insurance claims require",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-insurance-documentation-requirements|commercial-insurance-claims-documentation-guide|What documentation do commercial insurance claims require|property identification and building information/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "apartment insurance claims retrieves multifamily guide or FAQ",
    message: "how do apartment insurance claims work for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multifamily-apartment-insurance-claims-guide|commercial-apartment-insurance-claims|apartment insurance claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multifamily documentation retrieves guide or FAQ",
    message: "how should contractors document multifamily insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multifamily-apartment-insurance-claims-guide|commercial-multifamily-documentation|multifamily insurance claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "unit inspections apartment claims retrieves guide or FAQ",
    message: "how should contractors organize unit inspections on apartment claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multifamily-apartment-insurance-claims-guide|commercial-unit-inspections|unit inspections/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multifamily common areas retrieves guide or FAQ",
    message: "how should common areas be documented on multifamily claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multifamily-apartment-insurance-claims-guide|commercial-multifamily-common-areas|common areas be documented on multifamily/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "property manager apartment claims retrieves guide or FAQ",
    message: "how should contractors work with property managers on apartment insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /multifamily-apartment-insurance-claims-guide|commercial-property-manager-coordination|property managers on apartment/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "HOA insurance claims retrieves HOA guide or FAQ",
    message: "how do HOA insurance claims work for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /hoa-insurance-claims-guide|commercial-hoa-insurance-claims|HOA insurance claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "association documentation retrieves HOA guide or FAQ",
    message: "how should contractors document association insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /hoa-insurance-claims-guide|commercial-hoa-association-documentation|association insurance claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "HOA master policies retrieves guide or FAQ",
    message: "how do association master policies differ from homeowner policies on HOA claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /hoa-insurance-claims-guide|commercial-hoa-master-policies|master policies/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "HOA common elements retrieves guide or FAQ",
    message: "how should common elements be documented on HOA claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /hoa-insurance-claims-guide|commercial-hoa-common-elements|common elements be documented on HOA/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "HOA claim coordination retrieves guide or FAQ",
    message: "how should contractors coordinate HOA claims with boards and managers",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /hoa-insurance-claims-guide|commercial-hoa-claim-coordination|coordinate HOA claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "warehouse insurance claims retrieves industrial guide or FAQ",
    message: "how do warehouse insurance claims work for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /industrial-warehouse-insurance-claims-guide|commercial-warehouse-insurance-claims|warehouse insurance claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "industrial property documentation retrieves guide or FAQ",
    message: "how should contractors document industrial property insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /industrial-warehouse-insurance-claims-guide|commercial-industrial-property-documentation|industrial property/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "equipment documentation retrieves industrial guide or FAQ",
    message: "how should equipment and machinery be documented on industrial insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /industrial-warehouse-insurance-claims-guide|commercial-equipment-documentation|equipment and machinery/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "warehouse inspections retrieves guide or FAQ",
    message: "how should warehouse inspections be structured for insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /industrial-warehouse-insurance-claims-guide|commercial-warehouse-inspections|warehouse inspections/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "industrial restoration claims retrieves guide or FAQ",
    message: "how do industrial restoration claims differ from other commercial restoration claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /industrial-warehouse-insurance-claims-guide|commercial-industrial-restoration-claims|industrial restoration claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "retail insurance claims retrieves retail/office guide or FAQ",
    message: "how do retail property insurance claims work for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /retail-office-insurance-claims-guide|commercial-retail-insurance-claims|retail property insurance claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "office building insurance claims retrieves guide or FAQ",
    message: "how do office building insurance claims work for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /retail-office-insurance-claims-guide|commercial-office-building-insurance-claims|office building insurance claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "retail/office tenant improvements retrieves guide or FAQ",
    message:
      "how should contractors document leasehold and tenant improvements on retail and office claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /retail-office-insurance-claims-guide|commercial-retail-office-tenant-improvements|leasehold and tenant improvements/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multi-tenant damage documentation retrieves guide or FAQ",
    message: "how should multi-tenant commercial damage be documented",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /retail-office-insurance-claims-guide|commercial-multi-tenant-damage-documentation|multi-tenant commercial damage/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "occupied business restoration retrieves guide or FAQ",
    message: "how should contractors restore occupied commercial businesses during a claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /retail-office-insurance-claims-guide|commercial-occupied-business-restoration|occupied commercial businesses/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "large-loss commercial insurance claims retrieves guide or FAQ",
    message: "what qualifies as a large-loss commercial insurance claim for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /large-loss-commercial-insurance-claims-guide|commercial-large-loss-insurance-claims|large-loss commercial insurance claim/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "large-loss multi-area documentation retrieves guide or FAQ",
    message:
      "how should contractors document multiple buildings or areas on a large commercial loss",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /large-loss-commercial-insurance-claims-guide|commercial-large-loss-multi-area-documentation|multiple buildings or areas on a large commercial loss/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "large-loss mitigation documentation retrieves guide or FAQ",
    message: "how should contractors document emergency mitigation on a large commercial loss",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /large-loss-commercial-insurance-claims-guide|commercial-large-loss-mitigation-documentation|emergency mitigation on a large commercial loss/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "large-loss estimate organization retrieves guide or FAQ",
    message: "how should contractors organize estimates on large commercial losses",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /large-loss-commercial-insurance-claims-guide|commercial-large-loss-estimate-organization|organize estimates on large commercial losses/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "large-loss reinspection and supplements retrieves guide or FAQ",
    message: "how should contractors prepare for large-loss reinspections and supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /large-loss-commercial-insurance-claims-guide|commercial-large-loss-reinspection-supplements|large-loss reinspections and supplements/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial insurance supplement playbook retrieves guide",
    message: "commercial insurance supplement playbook for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-insurance-supplement-playbook-for-contractors|commercial insurance supplement playbook|commercial-insurance-supplements/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial supplements FAQ retrieves",
    message: "what are commercial insurance supplements for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-insurance-supplements|commercial-insurance-supplement-playbook|commercial insurance supplements are the contractor packages/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "large-loss commercial supplements retrieves playbook or FAQ",
    message: "how should contractors handle large-loss commercial supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-insurance-supplement-playbook-for-contractors|commercial-supplement-timelines|What timelines should contractors follow on commercial supplements|multiple supplement cycles on commercial|large-loss-commercial-insurance-claims-guide|large-loss supplement/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "missing commercial scope supplement retrieves playbook",
    message: "missing commercial scope on carrier estimate supplement",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-insurance-supplement-playbook-for-contractors|commercial-insurance-supplements|scope and quantity validation|missing buildings or suites|Commercial insurance supplements are the contractor packages/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial supplement documentation FAQ retrieves",
    message: "how should contractors document commercial insurance supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-supplement-documentation|commercial-insurance-supplement-playbook|Document commercial supplements with a locked master area index/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial reinspection support FAQ retrieves",
    message: "how should contractors support commercial reinspections",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-reinspection-support|commercial-insurance-supplement-playbook|Support commercial reinspections by confirming access/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "why commercial insurance claims underpaid blog retrieves",
    message: "why commercial insurance claims get underpaid",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /why-commercial-insurance-claims-get-underpaid|commercial property insurance claims get underpaid|Why Commercial Insurance Claims Get Underpaid|commercial insurance claims get underpaid/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial property claims underpaid FAQ retrieves",
    message: "why do commercial property insurance claims get underpaid",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-property-claims-underpaid|why-commercial-insurance-claims-get-underpaid|commercial property insurance claims get underpaid/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial settlement documentation FAQ retrieves",
    message: "how does better documentation improve commercial claim settlements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-settlement-documentation|commercial-insurance-claims-documentation-guide|improve commercial claim settlements|better documentation improve commercial/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial claims documentation checklist blog retrieves",
    message: "commercial claims documentation checklist for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-claims-documentation-checklist|Commercial Claims Documentation Checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial documentation checklist FAQ retrieves",
    message: "what should a commercial claims documentation checklist include",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-documentation-checklist|commercial-claims-documentation-checklist|commercial claims documentation checklist include/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial inspection checklist FAQ retrieves",
    message: "what should a commercial insurance inspection checklist cover",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-inspection-checklist|commercial insurance inspection checklist|commercial-claims-documentation-checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial photo documentation FAQ retrieves",
    message: "how should contractors handle commercial photo documentation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-photo-documentation|commercial photo documentation|commercial-claims-documentation-checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial claim file organization FAQ retrieves",
    message: "how should contractors organize a commercial claim file",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-claim-file-organization|organize a commercial claim file|commercial-claims-documentation-checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial final submission FAQ retrieves",
    message: "what belongs in a commercial claim final submission package",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-final-submission|commercial claim final submission|commercial-claims-documentation-checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "overlooked line items blog retrieves",
    message: "most overlooked line items in insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /most-overlooked-line-items-in-insurance-estimates|Most Overlooked Line Items in Insurance Estimates|overlooked line items/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "five red flags missing scope blog retrieves",
    message: "five red flags that an insurance estimate is missing scope",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /five-red-flags-that-an-insurance-estimate-is-missing-scope|Five Red Flags That an Insurance Estimate Is Missing Scope|missing scope/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "missing scope insurance estimates FAQ retrieves",
    message: "what does missing scope mean on an insurance estimate",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /missing-scope-insurance-estimates|five-red-flags-that-an-insurance-estimate-is-missing-scope|Missing scope means the carrier estimate/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "estimate red flags missing scope FAQ retrieves",
    message: "what are red flags that an insurance estimate is missing scope",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /estimate-red-flags-missing-scope|five-red-flags-that-an-insurance-estimate-is-missing-scope|Five common red flags/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "carrier estimate review missing scope FAQ retrieves",
    message: "how should contractors review a carrier estimate for missing scope",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /carrier-estimate-review-missing-scope|five-red-flags-that-an-insurance-estimate-is-missing-scope|Assign a review owner within hours of receipt/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "identifying estimate omissions FAQ retrieves",
    message: "how do contractors identify omissions on an insurance estimate",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /identifying-estimate-omissions|five-red-flags-that-an-insurance-estimate-is-missing-scope|Identify omissions by comparing documented field conditions/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "documentation supporting missing scope FAQ retrieves",
    message: "what documentation supports missing scope findings",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /documentation-supporting-missing-scope|five-red-flags-that-an-insurance-estimate-is-missing-scope|Missing-scope findings are supported by labeled dated photos/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "overlooked insurance estimate items FAQ retrieves",
    message: "what are the most overlooked line items in insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /overlooked-insurance-estimate-items|most-overlooked-line-items-in-insurance-estimates|overlooked line items typically include temporary protection/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "missing line items insurance estimates FAQ retrieves",
    message: "why are line items missing from carrier insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /missing-line-items-insurance-estimates|most-overlooked-line-items-in-insurance-estimates|Line items are missing when templates/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "documentation supporting supplements FAQ retrieves",
    message: "what documentation supports insurance estimate supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /documentation-supporting-supplements|most-overlooked-line-items-in-insurance-estimates|Supplements are supported by labeled dated photos/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "estimate review best practices FAQ retrieves",
    message: "what are estimate review best practices for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /estimate-review-best-practices|most-overlooked-line-items-in-insurance-estimates|assign a review owner within hours/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "common estimate mistakes contractors FAQ retrieves",
    message: "what are common insurance estimate mistakes contractors make",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /common-estimate-mistakes-contractors|most-overlooked-line-items-in-insurance-estimates|treating the carrier estimate as final/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "estimate review scope validation guide retrieves",
    message: "insurance estimate review and scope validation guide for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /insurance-estimate-review-scope-validation-guide|Insurance Estimate Review & Scope Validation Guide|evaluate carrier estimates against documented field conditions/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "estimate review for contractors FAQ retrieves",
    message: "how should contractors review an insurance estimate against field conditions",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /estimate-review-for-contractors|insurance-estimate-review-scope-validation-guide|Assign a review owner within hours of receipt/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "scope validation carrier estimates FAQ retrieves",
    message: "how do contractors validate scope on a carrier estimate",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /scope-validation-carrier-estimates|insurance-estimate-review-scope-validation-guide|Scope validation confirms every damaged area/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "quantity validation insurance estimates FAQ retrieves",
    message: "how should contractors validate quantities on insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /quantity-validation-insurance-estimates|quantity-validation-guide-for-contractors|insurance-estimate-review-scope-validation-guide|Recalculate high-value SF and count lines/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "quantity validation guide for contractors retrieves",
    message: "quantity validation guide for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /quantity-validation-guide-for-contractors|Quantity Validation Guide for Contractors|validating insurance estimate quantities/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "quantity validation for contractors FAQ retrieves",
    message: "what is quantity validation for contractors on insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /quantity-validation-for-contractors|quantity-validation-guide-for-contractors|Quantity validation is the disciplined comparison/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "quantity discrepancies insurance estimates FAQ retrieves",
    message: "what are quantity discrepancies on insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /quantity-discrepancies-insurance-estimates|quantity-validation-guide-for-contractors|Quantity discrepancies are differences between carrier estimate quantities/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "field measurements estimate quantities FAQ retrieves",
    message: "how should contractors use field measurements to review estimate quantities",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /field-measurements-estimate-quantities|quantity-validation-guide-for-contractors|Measure high-value assemblies independently/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "estimate quantities contractor review FAQ retrieves",
    message: "how should contractors review estimate quantities on a carrier insurance estimate",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /estimate-quantities-contractor-review|quantity-validation-guide-for-contractors|Start with the latest estimate version and area index/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "documenting quantity changes insurance estimates FAQ retrieves",
    message: "how should contractors document quantity changes on insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /documenting-quantity-changes-insurance-estimates|quantity-validation-guide-for-contractors|Package each revised quantity with carrier qty/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "quantity errors blog retrieves",
    message: "how contractors find quantity errors in insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /how-contractors-find-quantity-errors-in-insurance-estimates|How Contractors Find Quantity Errors in Insurance Estimates|quantity errors/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "identifying quantity errors FAQ retrieves",
    message: "how do contractors identify quantity errors on insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /identifying-quantity-errors-insurance-estimates|how-contractors-find-quantity-errors-in-insurance-estimates|Identify quantity errors by comparing/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "common quantity mistakes FAQ retrieves",
    message: "what are common quantity mistakes on insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /common-quantity-mistakes-insurance-estimates|how-contractors-find-quantity-errors-in-insurance-estimates|Common quantity mistakes on first-pass estimates/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "when to remeasure estimate quantities FAQ retrieves",
    message: "when should contractors remeasure estimate quantities",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /when-to-remeasure-estimate-quantities|how-contractors-find-quantity-errors-in-insurance-estimates|Remeasure when field conditions/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "scope audit guide for contractors retrieves",
    message: "scope audit guide for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /scope-audit-guide-for-contractors|Scope Audit Guide for Contractors|auditing insurance estimate scope/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "scope audit for contractors FAQ retrieves",
    message: "what is a scope audit for contractors on insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /scope-audit-for-contractors|scope-audit-guide-for-contractors|A scope audit is the disciplined comparison/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "auditing insurance estimates for contractors FAQ retrieves",
    message: "how do contractors audit insurance estimates for missing scope",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /auditing-insurance-estimates-for-contractors|scope-audit-guide-for-contractors|Lock the latest estimate version/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "missing scope contractor audit FAQ retrieves",
    message: "how do contractors identify missing scope during an insurance estimate audit",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /missing-scope-contractor-audit|scope-audit-guide-for-contractors|Compare each documented field condition/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "reviewing insurance estimate scope FAQ retrieves",
    message: "how should contractors review insurance estimate scope for completeness",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /reviewing-insurance-estimate-scope|scope-audit-guide-for-contractors|Start with the latest estimate version and area index/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "documenting omitted work insurance estimates FAQ retrieves",
    message: "how should contractors document omitted work on insurance estimates",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /documenting-omitted-work-insurance-estimates|scope-audit-guide-for-contractors|Package each omitted or incomplete scope item/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "carrier estimate anatomy contractors FAQ retrieves",
    message: "what is the anatomy of a carrier insurance estimate",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /carrier-estimate-anatomy-contractors|insurance-estimate-review-scope-validation-guide|administrative block \(claim number/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "estimate documentation requirements FAQ retrieves",
    message: "what documentation is required for estimate review and scope validation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /estimate-documentation-requirements|insurance-estimate-review-scope-validation-guide|latest carrier estimate version, an independent field scope worksheet/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "insurance estimate review playbook retrieves",
    message: "insurance estimate review playbook for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /insurance-estimate-review-playbook-for-contractors|Insurance Estimate Review Playbook|operational playbook for reviewing insurance estimates/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "estimate review workflow FAQ retrieves",
    message: "what is the contractor estimate review workflow from receipt to settlement",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /estimate-review-workflow|insurance-estimate-review-playbook-for-contractors|Receive and version the carrier estimate/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "scope audit workflow FAQ retrieves",
    message: "how do contractors run a scope audit workflow on a carrier estimate",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /scope-audit-workflow|insurance-estimate-review-playbook-for-contractors|Assign a review owner and lock the latest estimate version/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "supplement preparation FAQ retrieves",
    message: "how should contractors prepare supplements after estimate review",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /supplement-preparation|insurance-estimate-review-playbook-for-contractors|Convert only supplement-ready gaps/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "estimate organization FAQ retrieves",
    message: "how should contractors organize estimate review files and versions",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /estimate-organization|insurance-estimate-review-playbook-for-contractors|Keep a working file any reviewer can open/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "reinspection preparation FAQ retrieves",
    message: "how should contractors prepare for reinspection after estimate review",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /reinspection-preparation|insurance-estimate-review-playbook-for-contractors|Build a reinspection packet from the comparison worksheet/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "why mold insurance claims underpaid blog retrieves",
    message: "why mold insurance claims get underpaid documentation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /why-mold-insurance-claims-get-underpaid|Why Mold Insurance Claims Get Underpaid/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold documentation mistakes blog retrieves",
    message: "mold documentation mistakes contractors avoid underpaid",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-documentation-mistakes|10 Mold Documentation Mistakes/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold claims blog category hub retrieves",
    message: "mold claim articles documentation guides",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /blog-category-mold|mold claim documentation|Why Mold Insurance Claims Get Underpaid|mold-documentation-mistakes/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold claims underpaid why FAQ retrieves",
    message: "why are mold insurance claims underpaid",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-claims-underpaid-why|Why are mold insurance claims underpaid/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold documentation affects claim outcomes FAQ retrieves",
    message: "how does documentation affect mold insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-documentation-affects-claim-outcomes|documentation affect mold|mold-claims-underpaid-why/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold moisture readings settlement support FAQ retrieves",
    message: "do moisture readings help support mold claim settlements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-moisture-readings-settlement-support|moisture readings help support mold claim settlements|mold moisture readings settlement/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold hidden damage affects payment FAQ retrieves",
    message: "can hidden mold affect claim payments",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-hidden-damage-affects-payment|hidden mold affect claim payments|hidden mold claim payment/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold documentation improves settlement FAQ retrieves",
    message: "what documentation improves mold insurance settlements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-documentation-improves-settlement|documentation improves mold insurance settlements/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold common documentation mistakes FAQ retrieves",
    message: "what are the most common mold documentation mistakes",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-common-documentation-mistakes|most common mold documentation mistakes|mold-documentation-mistakes/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold poor documentation reduces payment FAQ retrieves",
    message: "can poor documentation reduce mold insurance payments",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-poor-documentation-reduces-payment|poor documentation reduce mold|mold-documentation-mistakes/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold moisture readings why important FAQ retrieves",
    message: "why are moisture readings important on mold claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-moisture-readings-why-important|moisture readings important on mold|mold-documentation-mistakes/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold claim documentation organization FAQ retrieves",
    message: "how should contractors organize mold claim documentation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-claim-documentation-organization|organize mold claim documentation|mold-documentation-mistakes/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold documentation package contents FAQ retrieves",
    message: "what should be included in a mold documentation package",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-documentation-package-contents|mold documentation package|mold-documentation-mistakes/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold claim documentation checklist blog retrieves",
    message: "mold claim documentation checklist before supplement",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-claim-documentation-checklist|Mold Claim Documentation Checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement checklist documents FAQ retrieves",
    message:
      "what documents should contractors include with a mold insurance supplement",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-checklist-documents|mold-claim-documentation-checklist|documents should contractors include with a mold insurance supplement/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold claim photo volume FAQ retrieves",
    message: "how many photos should be taken during a mold claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-claim-photo-volume|How many photos should be taken during a mold claim|mold-claim-documentation-checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold moisture containment documentation support FAQ retrieves",
    message:
      "what documentation supports moisture mapping and containment on mold claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-moisture-containment-documentation-support|moisture mapping and containment on mold|mold-claim-documentation-checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold daily progress documentation required FAQ retrieves",
    message:
      "should contractors document daily drying and remediation progress on mold claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-daily-progress-documentation-required|daily drying and remediation progress on mold|mold-claim-documentation-checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold carrier additional documentation why FAQ retrieves",
    message:
      "why do carriers request additional documentation during mold claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-carrier-additional-documentation-why|additional documentation during mold claims|mold-claim-documentation-checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "why mold supplements get denied blog retrieves",
    message: "why mold supplements get denied documentation gaps",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /why-mold-supplements-get-denied|Why Mold Supplements Get Denied/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement denied why FAQ retrieves",
    message: "why are mold supplements denied",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-denied-why|Why are mold supplements denied|why-mold-supplements-get-denied/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement denial documentation gaps FAQ retrieves",
    message: "can documentation gaps cause a mold supplement denial",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-denial-documentation-gaps|documentation gaps cause a mold supplement denial|why-mold-supplements-get-denied/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement denial carrier objections FAQ retrieves",
    message:
      "how should contractors respond to carrier objections on mold supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-denial-carrier-objections|carrier objections on mold supplements|why-mold-supplements-get-denied/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement denial estimate support FAQ retrieves",
    message: "how should estimate support be organized on mold supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-denial-estimate-support|estimate support be organized on mold|why-mold-supplements-get-denied/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement denial reinspection FAQ retrieves",
    message: "when is reinspection appropriate on mold supplements",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-denial-reinspection|reinspection appropriate on mold supplements|why-mold-supplements-get-denied/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement playbook retrieves guide",
    message: "mold supplement playbook for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-playbook-for-contractors|mold supplement playbook|mold-supplement-included-items/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold reinspection prep retrieves playbook guide",
    message: "how do I prepare for a mold reinspection",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-playbook-for-contractors|Phase 9 — Reinspection Preparation|reinspection-packet|prepare for a mold reinspection/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement included items FAQ",
    message: "what should be included in a mold damage supplement",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-included-items|cover letter with summary table|mold-supplement-playbook/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement when to submit FAQ",
    message: "when should contractors submit a mold supplement",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-when-to-submit|within 48 hours on visible estimate gaps|phased submission/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement documentation evidence FAQ",
    message: "What documentation supports a mold damage supplement?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-documentation-evidence|documentation supports a mold damage supplement|indexed photos by room or zone|mold-supplement-playbook/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold remediation docs base FAQ retrieves",
    message: "what documentation supports mold remediation claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-remediation-docs|documentation supports mold remediation claims|mold-remediation-documentation-guide/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold testing base FAQ retrieves",
    message: "how do testing and clearance reports factor into mold claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-testing|testing and clearance reports factor into mold|mold clearance/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold carrier pushback base FAQ retrieves",
    message: "why do carriers often push back on mold line items",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-carrier-pushback|carriers often push back on mold|mold line item/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold containment equipment base FAQ retrieves",
    message: "are containment and air scrubbing commonly underpaid",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-containment-equipment|containment and air scrubbing commonly underpaid|air scrubbing/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold water relationship base FAQ retrieves",
    message: "can mold supplements tie back to a water loss claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-water-relationship|mold supplements tie back to a water loss|mold often follows/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement multiple submissions FAQ",
    message: "can multiple supplements be submitted during a mold claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-multiple-submissions|phased supplements|multiple supplements/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "mold supplement commonly missed items FAQ",
    message: "what are the most commonly missed mold supplement items",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /mold-supplement-commonly-missed-items|containment build|moisture source investigation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "portfolio recovery review",
    message: "What is a portfolio recovery review?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /portfolio recovery|results-insights:portfolio/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "book of business",
    message: "Can Claims Ninja review my entire book of business?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /book of business|portfolio review/i.test(`${s.text} ${s.source}`),
      ),
  },
  {
    label: "roofing recovery opportunities",
    message: "What recovery opportunities do roofing contractors miss?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /roofing.*25%|missing accessories|results-insights:trade/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "common issues",
    message: "What issues does Claims Ninja commonly find?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /scope omissions|commonly find|results-insights:common/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial portfolios",
    message: "Do you review commercial claim portfolios?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial.*portfolio|results-insights/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "supplement recovery increase",
    message: "How much can supplementing improve recovery?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /40%|recovery increase|results-insights-recovery/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "partner network overview",
    message: "Who are Claims Ninja's partners?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /partner network|ProfileGorilla|CORE Group|Daylit|Morgan & Morgan|911 Restoration/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "legal partner",
    message: "Does Claims Ninja have a legal partner?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /Morgan & Morgan|legal partner|legal escalation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "contractor financing",
    message: "Can Claims Ninja help with contractor financing?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /Daylit|financing|cash flow|working capital/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "daylit partnership",
    message: "What is the Daylit partnership?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /Daylit|authorized partner|short-term financing/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "911 restoration partnership",
    message: "Is Claims Ninja partnered with 911 Restoration?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /911 Restoration|preferred claims settlement|franchise/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "profilegorilla partner",
    message: "What is ProfileGorilla?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /ProfileGorilla|reputation|review management/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "core group partner",
    message: "What is CORE Group?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /CORE Group|restoration industry leadership|operator network/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "become a partner",
    message: "Can I become a Claims Ninja partner?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /become a strategic partner|partnership opportunities|\/contact/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "partner services required",
    message: "Are partner services required?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /optional|not required|partner services/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial insurance claims handled retrieves commercial page or FAQ",
    message: "does claims ninja handle commercial insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /page:\/solutions\/commercial|commercial-claims-handled|commercial insurance claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "large loss commercial claims retrieves commercial content",
    message: "can you help with large loss commercial claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /page:\/solutions\/commercial|commercial-large-loss-support|large-loss-commercial-insurance-claims-guide|large-loss|large loss/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "national restoration company support retrieves commercial FAQ",
    message: "do you support national restoration companies",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-national-restoration-programs|national restoration|page:\/solutions\/commercial/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "hotel commercial claim retrieves commercial page or property-types FAQ",
    message: "do you handle hotels or hospitality property claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-property-types-supported|hotel|hospitality|page:\/solutions\/commercial/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "retail center commercial claim retrieves commercial page or property-types FAQ",
    message: "can you help with a retail center or shopping center loss",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-property-types-supported|retail center|page:\/solutions\/commercial/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "property manager support retrieves commercial context",
    message: "can you work with property managers",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /property manager|commercial property|page:\/solutions\/commercial/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "multi-building loss retrieves commercial context",
    message: "can you support multi-building losses",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial-property-types-supported|multi-building|page:\/solutions\/commercial|commercial/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire code upgrade guide retrieves for code upgrade documentation query",
    message: "how do I document fire code upgrades for insurance",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-code-upgrade-documentation-guide|fire code upgrade documentation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire code upgrade insurance FAQ retrieves",
    message: "does insurance pay for fire code upgrades",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-code-upgrade-insurance-coverage|fire code upgrade/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "ordinance and law FAQ retrieves",
    message: "what is ordinance and law coverage on a fire claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-ordinance-law-coverage|ordinance and law/i.test(`${s.text} ${s.source}`),
      ),
  },
  {
    label: "fire code upgrade contractor documentation FAQ retrieves",
    message: "how should contractors document required code upgrades after a fire",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-code-upgrade-contractor-documentation|document required code upgrades/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "AHJ code upgrade authority FAQ retrieves",
    message: "who determines whether a code upgrade is required on a fire rebuild",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-code-upgrade-who-determines-required|authority having jurisdiction|AHJ/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire code upgrade supplement denial FAQ retrieves",
    message: "why are fire code upgrade supplements denied",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-code-upgrade-supplement-denials|code upgrade supplements denied/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "contractor smoke damage documentation FAQ retrieves",
    message: "how do contractors document smoke damage for insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /smoke-damage-contractor-documentation-insurance|smoke-damage-documentation-mistakes|document smoke damage/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "smoke damage claim photos FAQ retrieves",
    message: "what photos should be taken for smoke damage claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /What photos should be taken for smoke damage claims|What photographs should be taken after smoke damage|smoke-damage-documentation-mistakes/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "smoke damage hvac documentation FAQ retrieves",
    message: "does smoke damage require hvac documentation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /smoke-damage-hvac-documentation-required|hvac-contamination|hvac documentation smoke/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "smoke damage claims underpaid FAQ retrieves",
    message: "why do smoke damage insurance claims get underpaid",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /Why do smoke damage insurance claims get underpaid|smoke-damage-documentation-mistakes|Smoke Damage Documentation Mistakes/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "invisible smoke damage without soot FAQ retrieves",
    message: "can smoke damage exist without visible soot",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /smoke-damage-invisible-without-soot|invisible smoke|without visible soot/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement checklist documents FAQ retrieves",
    message: "what documents should contractors include with a fire insurance supplement",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-checklist-documents|fire-claim-documentation-checklist|documents should contractors include with a fire insurance supplement/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire claim photo volume FAQ retrieves",
    message: "how many photos should be taken during a fire claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-claim-photo-volume|How many photos should be taken during a fire claim|fire-claim-documentation-checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire smoke documentation support FAQ retrieves",
    message: "what documentation supports smoke damage on fire claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-smoke-documentation-support|What documentation supports smoke damage on fire claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire hidden damage required FAQ retrieves",
    message: "should contractors document hidden fire damage",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-hidden-damage-required|Should contractors document hidden fire damage/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire carrier additional documentation why FAQ retrieves",
    message: "why do carriers request additional documentation during fire claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-carrier-additional-documentation-why|Why do carriers request additional documentation during fire claims/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire claim documentation checklist blog retrieves",
    message: "fire claim documentation checklist before supplement",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-claim-documentation-checklist|Fire Claim Documentation Checklist/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "why fire supplements denied blog retrieves",
    message: "why fire damage supplements get denied",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /why-fire-damage-supplements-get-denied|Why Fire Damage Supplements Get Denied/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement denied why FAQ retrieves",
    message: "why are fire damage supplements denied",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-denied-why|Why are fire damage supplements denied/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement denial missing documentation FAQ retrieves",
    message: "can missing documentation cause a fire supplement denial",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-denial-missing-documentation|Can missing documentation cause a supplement denial/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement denial response FAQ retrieves",
    message: "how should contractors respond to a denied fire supplement",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-denial-response|How should contractors respond to a denied fire supplement/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement denial additional docs FAQ retrieves",
    message: "can contractors submit additional documentation after a fire supplement denial",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-denial-additional-docs|Can contractors submit additional documentation after a denial/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "fire supplement denial common reason FAQ retrieves",
    message: "what is the most common reason fire supplements fail",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /fire-supplement-denial-common-reason|What is the most common reason fire supplements fail/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
];

export function runKnowledgeRetrievalChecks(): {
  ok: boolean;
  failures: string[];
} {
  const failures: string[] = [];

  for (const check of RETRIEVAL_CHECKS) {
    const result = retrieveKnowledgeSnippets(check.message);
    if (!check.assert(result)) {
      failures.push(check.label);
    }
  }

  return { ok: failures.length === 0, failures };
}
