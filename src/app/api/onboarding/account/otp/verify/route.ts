import {
  getIntakeHandleFromCookie,
  setIntakeHandleCookie,
} from "@/lib/onboarding/cookie";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import {
  handleOnboardingRouteError,
  jsonError,
  jsonOk,
  mapPlatformResponse,
} from "@/lib/onboarding/http";
import { resolveOtpVerifyCookieRotation } from "@/lib/onboarding/otp-verify-rotation";
import { externalIntakeS2SJson } from "@/lib/onboarding/s2s";
import type { OtpVerifyPlatformData } from "@/lib/onboarding/otp-verify-rotation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const security = assertMutationSecurity(request);
    if (!security.ok) {
      return jsonError(security.status, security.code, security.message);
    }

    const intakeHandle = await getIntakeHandleFromCookie();
    if (!intakeHandle) {
      return jsonError(401, "SESSION_UNAUTHORIZED", "No active intake session.");
    }

    let body: { code?: string; expectedVersion?: number } = {};
    try {
      body = (await request.json()) as typeof body;
    } catch {
      return jsonError(400, "INVALID_JSON", "Invalid JSON body.");
    }

    const code = (body.code ?? "").replace(/\D/g, "");
    if (code.length !== 6) {
      return jsonError(400, "VALIDATION_ERROR", "Enter the 6-digit code.");
    }

    const { status, envelope } = await externalIntakeS2SJson<OtpVerifyPlatformData>(
      "POST",
      "/api/external-intake/v1/account/otp/verify",
      {
        intakeHandle,
        expectedVersion: body.expectedVersion,
        code,
      },
    );

    if (envelope.ok && envelope.data) {
      const rotated = resolveOtpVerifyCookieRotation(envelope.data);
      if (!rotated.ok) {
        return jsonError(
          502,
          rotated.code,
          "Verification succeeded but session rotation was incomplete.",
        );
      }

      // Privilege change: persist rotated handle for provision/handoff.
      await setIntakeHandleCookie(rotated.intakeHandle);
      return jsonOk(rotated.clientData, {
        status: status >= 200 && status < 300 ? status : 200,
      });
    }

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
