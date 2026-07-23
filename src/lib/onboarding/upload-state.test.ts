import assert from "node:assert/strict";
import { test } from "node:test";

import { stateLabel } from "@/components/onboarding/UploadZone";

test("upload security states map to user-facing labels", () => {
  assert.equal(stateLabel("preparing"), "Preparing…");
  assert.equal(stateLabel("uploading"), "Uploading…");
  assert.equal(stateLabel("uploaded"), "Uploaded");
  assert.equal(stateLabel("scan_pending"), "Scanning…");
  assert.equal(stateLabel("scan_unavailable"), "Scan unavailable");
  assert.equal(stateLabel("ready"), "Ready");
  assert.equal(stateLabel("rejected"), "Rejected");
  assert.equal(stateLabel("failed"), "Failed");
});
