import { getIntakeHandleFromCookie } from "@/lib/onboarding/cookie";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import { isPaymentCaptureEnabled } from "@/lib/onboarding/config";
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

    if (!isPaymentCaptureEnabled()) {
      return jsonError(
        403,
        "PAYMENT_CAPTURE_DISABLED",
        "Payment capture is not enabled. Instrument fields are not accepted.",
      );
    }

    const intakeHandle = await getIntakeHandleFromCookie();
    if (!intakeHandle) {
      return jsonError(401, "SESSION_UNAUTHORIZED", "No active intake session.");
    }

    let body: {
      expectedVersion?: number;
      method?: "card" | "bank";
      tokenPayload?: Record<string, unknown>;
    } = {};
    try {
      body = (await request.json()) as typeof body;
    } catch {
      return jsonError(400, "INVALID_JSON", "Invalid JSON body.");
    }

    if (body.expectedVersion === undefined) {
      return jsonError(
        400,
        "VALIDATION_ERROR",
        "expectedVersion is required.",
      );
    }

    if (body.method !== "card" && body.method !== "bank") {
      return jsonError(
        400,
        "VALIDATION_ERROR",
        "method must be card or bank.",
      );
    }

    // Forward opaque adapter payload only — never persist instrument secrets here.
    const { status, envelope } = await externalIntakeS2SJson(
      "POST",
      "/api/external-intake/v1/billing/instruments",
      {
        intakeHandle,
        expectedVersion: body.expectedVersion,
        tokenPayload: {
          method: body.method,
          ...(body.tokenPayload ?? {}),
        },
      },
    );

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
