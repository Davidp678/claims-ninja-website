import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  retrieveKnowledgeSnippets,
  runKnowledgeRetrievalChecks,
} from "./chat-knowledge-retrieval";

describe("chat knowledge retrieval", () => {
  it("passes built-in retrieval checks", () => {
    const { ok, failures } = runKnowledgeRetrievalChecks();
    assert.equal(ok, true, failures.join(", "));
  });

  it("returns pricing context for fee questions", () => {
    const result = retrieveKnowledgeSnippets("How much do you charge?");
    assert.ok(result.snippets.length > 0);
    assert.match(
      result.formatted,
      /APPROVED CLAIMS NINJA SITE CONTEXT/,
    );
    assert.ok(
      result.snippets.some((s) =>
        /15%|documented increase|fee|pricing|rcv/i.test(s.text),
      ),
    );
  });

  it("returns estimate writing context for estimate writing questions", () => {
    const result = retrieveKnowledgeSnippets(
      "How much does estimate writing cost?",
    );
    assert.ok(result.snippets.length > 0);
    assert.ok(
      result.snippets.some((s) =>
        /\$100|1\.25%|estimate writing/i.test(s.text),
      ),
    );
  });

  it("returns EagleView pricing context", () => {
    const result = retrieveKnowledgeSnippets("What does an EagleView report cost?");
    assert.ok(result.snippets.length > 0);
    assert.ok(result.snippets.some((s) => /\$60|eagleview/i.test(s.text)));
  });

  it("returns empty snippets for off-topic questions", () => {
    const result = retrieveKnowledgeSnippets("What's the weather?");
    assert.equal(result.snippets.length, 0);
    assert.equal(result.formatted, "");
  });

  it("retrieves buyer-intent partner selection guidance", () => {
    const result = retrieveKnowledgeSnippets(
      "How should contractors choose an insurance supplementing company?",
    );
    assert.ok(result.snippets.length > 0);
    assert.ok(
      result.snippets.some(
        (s) =>
          /choose|scorecard|criteria|compare/i.test(s.text) ||
          /how-to-choose|supplements-how-to-choose|partner/i.test(s.source),
      ),
      result.snippets.map((s) => s.source).join(" | "),
    );
  });

  it("retrieves anonymized case-study benchmarks without inventing named customers", () => {
    const result = retrieveKnowledgeSnippets(
      "Tell me about the commercial roofing portfolio recovery case study",
    );
    assert.ok(result.snippets.length > 0);
    assert.ok(
      result.snippets.some(
        (s) =>
          /commercial roofing portfolio/i.test(s.text) &&
          /\$840,000|\$312,000|37%/i.test(s.text),
      ),
      result.snippets.map((s) => s.source).join(" | "),
    );
    assert.ok(
      result.snippets.every((s) => !/guaranteed recovery/i.test(s.text)),
    );
  });

  it("retrieves new compare-partner FAQ content", () => {
    const result = retrieveKnowledgeSnippets(
      "How can contractors compare insurance supplementing companies?",
    );
    assert.ok(result.snippets.length > 0);
    assert.ok(
      result.snippets.some((s) =>
        /compare|fee model|documentation requirements|who talks to the carrier/i.test(
          s.text,
        ),
      ),
    );
  });
});
