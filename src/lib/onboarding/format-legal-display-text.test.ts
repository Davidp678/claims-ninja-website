import assert from "node:assert/strict";
import { test } from "node:test";

import { formatLegalDisplayText } from "./format-legal-display-text";

test("joins soft-wrapped lines without removing paragraph breaks", () => {
  const raw = "This is a soft\nwrapped sentence.\n\nNext paragraph starts here.";
  const formatted = formatLegalDisplayText(raw);
  assert.equal(
    formatted,
    "This is a soft wrapped sentence.\n\nNext paragraph starts here.",
  );
});

test("preserves list line breaks", () => {
  const raw = "Items:\n\n- First item\n- Second item";
  assert.equal(formatLegalDisplayText(raw), raw);
});

test("does not invent content — empty stays empty", () => {
  assert.equal(formatLegalDisplayText(""), "");
});
