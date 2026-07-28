import { getIntakeHandleFromCookie } from "@/lib/onboarding/cookie";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import {
  handleOnboardingRouteError,
  jsonError,
  mapPlatformResponse,
} from "@/lib/onboarding/http";
import { isPasswordValid } from "@/lib/onboarding/password-policy";
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

    let body: { email?: string; password?: string; expectedVersion?: number } =
      {};
    try {
      body = (await request.json()) as typeof body;
    } catch {
      return jsonError(400, "INVALID_JSON", "Invalid JSON body.");
    }

    const email = body.email?.trim() ?? "";
    const password = body.password ?? "";

    if (!email || !password) {
      return jsonError(
        400,
        "VALIDATION_ERROR",
        "Email and password are required.",
      );
    }
    if (!isPasswordValid(password)) {
      return jsonError(
        400,
        "VALIDATION_ERROR",
        "Password does not meet security requirements.",
      );
    }

    // Password is request-ephemeral only — never written to cookies or logs.
    const { status, envelope, correlationId } = await externalIntakeS2SJson(
      "POST",
      "/api/external-intake/v1/account/password",
      {
        intakeHandle,
        expectedVersion: body.expectedVersion,
        email,
        password,
      },
    );

    return mapPlatformResponse(status, envelope, correlationId);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
