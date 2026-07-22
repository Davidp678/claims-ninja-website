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

    let body: { email?: string } = {};
    try {
      body = (await request.json()) as typeof body;
    } catch {
      return jsonError(400, "INVALID_JSON", "Invalid JSON body.");
    }

    const email = body.email?.trim() ?? "";
    if (!email) {
      return jsonError(400, "VALIDATION_ERROR", "Email is required.");
    }

    const { status, envelope } = await externalIntakeS2SJson(
      "POST",
      "/api/external-intake/v1/resume/request",
      { email },
    );

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
