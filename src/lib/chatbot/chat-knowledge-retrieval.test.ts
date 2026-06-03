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

  it("returns empty snippets for off-topic questions", () => {
    const result = retrieveKnowledgeSnippets("What's the weather?");
    assert.equal(result.snippets.length, 0);
    assert.equal(result.formatted, "");
  });
});
