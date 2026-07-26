import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { resolveOtpVerifyCookieRotation } from "./otp-verify-rotation";

describe("resolveOtpVerifyCookieRotation", () => {
  it("keeps the rotated handle for cookie set and strips it from client data", () => {
    const result = resolveOtpVerifyCookieRotation({
      intakeHandle: "new-handle-bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      status: "verified",
      stage: "activated",
      version: 12,
      nextStage: "activated",
      provisionOk: false,
      provisionMessage: "Provisioning deferred until remaining gates pass.",
    });

    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(
      result.intakeHandle,
      "new-handle-bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    );
    assert.equal(result.clientData.status, "verified");
    assert.equal(result.clientData.stage, "activated");
    assert.equal(result.clientData.version, 12);
    assert.equal("intakeHandle" in result.clientData, false);
    assert.equal(
      JSON.stringify(result.clientData).includes("new-handle-"),
      false,
    );
  });

  it("fails closed when platform omits or blanks the rotated handle", () => {
    assert.equal(resolveOtpVerifyCookieRotation(null).ok, false);
    assert.equal(resolveOtpVerifyCookieRotation({}).ok, false);
    assert.equal(
      resolveOtpVerifyCookieRotation({ intakeHandle: "   " }).ok,
      false,
    );
  });

  it("documents post-OTP session continuity for provisioning", () => {
    // Contract: cookie must receive the new handle so GET/POST provision
    // loads the same intake session the platform just advanced.
    const oldHandle = "old-handle-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    const newHandle = "new-handle-bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
    const rotated = resolveOtpVerifyCookieRotation({
      intakeHandle: newHandle,
      status: "verified",
      stage: "activated",
      version: 3,
    });
    assert.equal(rotated.ok, true);
    if (!rotated.ok) return;
    assert.notEqual(rotated.intakeHandle, oldHandle);
    assert.equal(rotated.intakeHandle, newHandle);
  });
});
