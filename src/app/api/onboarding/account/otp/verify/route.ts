import { getIntakeHandleFromCookie } from "@/lib/onboarding/cookie";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import {
  handleOnboardingRouteError,
  jsonError,
  mapPlatformResponse,
} from "@/lib/onboarding/http";
import { externalIntakeS2SJson } from "@/lib/onboarding/s2s";

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

    const { status, envelope } = await externalIntakeS2SJson(
      "POST",
      "/api/external-intake/v1/account/otp/verify",
      {
        intakeHandle,
        expectedVersion: body.expectedVersion,
        code,
      },
    );

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
