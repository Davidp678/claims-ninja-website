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
    "mixed-use",
    "multi-building",
    "multi-building loss",
    "multi-building losses",
    "multiple buildings",
  ],
  large_loss: [
    "large loss",
    "large-loss",
    "large-loss claim",
    "large-loss reconstruction",
    "large loss commercial",
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
  ],
};

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
    label: "why mold insurance claims underpaid blog retrieves",
    message: "mold documentation mistakes contractors avoid underpaid",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /why-mold-insurance-claims-get-underpaid|Why Mold Insurance Claims Get Underpaid/i.test(
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
        /blog-category-mold|mold claim documentation|Why Mold Insurance Claims Get Underpaid/i.test(
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
        /page:\/solutions\/commercial|commercial-large-loss-support|large-loss|large loss/i.test(
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
