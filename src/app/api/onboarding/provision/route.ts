import { getIntakeHandleFromCookie } from "@/lib/onboarding/cookie";
import {
  handleOnboardingRouteError,
  jsonError,
  mapPlatformResponse,
} from "@/lib/onboarding/http";
import { externalIntakeS2SJson } from "@/lib/onboarding/s2s";

export const runtime = "nodejs";

export async function GET() {
  try {
    const intakeHandle = await getIntakeHandleFromCookie();
    if (!intakeHandle) {
      return jsonError(401, "SESSION_UNAUTHORIZED", "No active intake session.");
    }

    const { status, envelope } = await externalIntakeS2SJson(
      "GET",
      "/api/external-intake/v1/provision/status",
      undefined,
      { searchParams: { intakeHandle } },
    );

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
