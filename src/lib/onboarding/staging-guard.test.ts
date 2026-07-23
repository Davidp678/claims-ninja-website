import assert from "node:assert/strict";
import { test } from "node:test";

import { assertStagingPlatformUrl } from "./staging-guard";

test("allows localhost staging platform URLs", () => {
  assert.doesNotThrow(() =>
    assertStagingPlatformUrl("http://127.0.0.1:3001"),
  );
  assert.doesNotThrow(() =>
    assertStagingPlatformUrl("http://localhost:3001"),
  );
});

test("rejects production platform hosts", () => {
  assert.throws(
    () => assertStagingPlatformUrl("https://app.theclaimsninja.com"),
    /production platform host/,
  );
});

test("rejects production supabase project refs", () => {
  assert.throws(
    () =>
      assertStagingPlatformUrl(
        "https://upwowfigsmhicdrfgepg.supabase.co",
      ),
    /production Supabase project ref/,
  );
});
