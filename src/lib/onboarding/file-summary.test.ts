import assert from "node:assert/strict";
import { test } from "node:test";

import {
  isTerminalSecurityState,
  normalizeIntakeFileList,
  normalizeIntakeFileSummary,
} from "./file-summary";

test("normalizeIntakeFileSummary maps Platform fileName to filename", () => {
  const summary = normalizeIntakeFileSummary({
    id: "f1",
    fileName: "estimate.pdf",
    sizeBytes: 1200,
    securityState: "ready",
  });
  assert.equal(summary?.filename, "estimate.pdf");
  assert.equal(summary?.securityState, "ready");
});

test("normalizeIntakeFileSummary accepts Website filename", () => {
  const summary = normalizeIntakeFileSummary({
    id: "f2",
    filename: "scope.docx",
    size_bytes: 44,
    security_state: "scan_pending",
  });
  assert.equal(summary?.filename, "scope.docx");
  assert.equal(summary?.sizeBytes, 44);
  assert.equal(summary?.securityState, "scan_pending");
});

test("normalizeIntakeFileList filters invalid rows", () => {
  const list = normalizeIntakeFileList([
    { id: "a", fileName: "a.pdf", sizeBytes: 1, securityState: "ready" },
    { fileName: "missing-id.pdf" },
    null,
  ]);
  assert.equal(list.length, 1);
  assert.equal(list[0]?.id, "a");
});

test("terminal security states", () => {
  assert.equal(isTerminalSecurityState("ready"), true);
  assert.equal(isTerminalSecurityState("scan_unavailable"), true);
  assert.equal(isTerminalSecurityState("preparing"), false);
  assert.equal(isTerminalSecurityState("scan_pending"), false);
});
