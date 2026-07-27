import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  INTAKE_HANDOFF_PATH,
  buildIntakeHandoffUrl,
} from "./intake-handoff-url";

describe("buildIntakeHandoffUrl", () => {
  it("sends the code to /auth/intake-handoff only", () => {
    const url = buildIntakeHandoffUrl(
      "https://claims-ninja-platform-git-feat-exter-d50b06-davidp678s-projects.vercel.app",
      "abc123handoff",
    );
    const parsed = new URL(url);
    assert.equal(parsed.pathname, INTAKE_HANDOFF_PATH);
    assert.equal(parsed.searchParams.get("code"), "abc123handoff");
    assert.equal(parsed.pathname.includes("/dashboard/claims"), false);
  });

  it("strips trailing slash from platform base", () => {
    const url = buildIntakeHandoffUrl(
      "https://app.theclaimsninja.com/",
      "code-one",
    );
    assert.equal(
      url,
      "https://app.theclaimsninja.com/auth/intake-handoff?code=code-one",
    );
  });

  it("rejects missing inputs without echoing secrets", () => {
    assert.throws(() => buildIntakeHandoffUrl("", "code"), /required/i);
    assert.throws(
      () => buildIntakeHandoffUrl("https://app.theclaimsninja.com", "  "),
      /required/i,
    );
  });
});
