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

    let body: { expectedVersion?: number } = {};
    try {
      body = (await request.json()) as typeof body;
    } catch {
      body = {};
    }

    const { status, envelope, correlationId } = await externalIntakeS2SJson(
      "POST",
      "/api/external-intake/v1/account/otp/resend",
      {
        intakeHandle,
        expectedVersion: body.expectedVersion,
      },
    );

    return mapPlatformResponse(status, envelope, correlationId);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
