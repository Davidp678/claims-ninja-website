import assert from "node:assert/strict";
import { test } from "node:test";

import { stateLabel } from "@/components/onboarding/UploadZone";

test("upload security states map to user-facing labels", () => {
  assert.equal(stateLabel("preparing"), "Preparing…");
  assert.equal(stateLabel("uploading"), "Uploading…");
  assert.equal(stateLabel("uploaded"), "Upload received");
  assert.equal(stateLabel("scan_pending"), "Security scan in progress…");
  assert.equal(stateLabel("scan_unavailable"), "Protected — scan unavailable");
  assert.equal(stateLabel("ready"), "Accepted");
  assert.equal(stateLabel("rejected"), "Rejected — replace this file");
  assert.equal(stateLabel("failed"), "Temporary scan problem — try again");
});
