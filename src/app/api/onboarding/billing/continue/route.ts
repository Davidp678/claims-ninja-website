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

    let body: Record<string, unknown> = {};
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      body = {};
    }

    // Never accept raw instrument fields on continue.
    const banned = [
      "cardNumber",
      "cvv",
      "cvc",
      "routingNumber",
      "accountNumber",
      "pan",
      "tokenPayload",
    ];
    if (banned.some((k) => k in body)) {
      return jsonError(
        400,
        "VALIDATION_ERROR",
        "Raw payment fields are not accepted.",
      );
    }

    const { status, envelope } = await externalIntakeS2SJson(
      "POST",
      "/api/external-intake/v1/billing/continue",
      {
        intakeHandle,
        expectedVersion: body.expectedVersion,
        methodType: body.methodType === "ach" ? "ach" : "card",
      },
    );

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
