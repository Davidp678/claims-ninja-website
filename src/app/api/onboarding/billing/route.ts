import { getIntakeHandleFromCookie } from "@/lib/onboarding/cookie";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import { isPaymentCaptureEnabled } from "@/lib/onboarding/config";
import {
  handleOnboardingRouteError,
  jsonError,
  jsonOk,
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
      "/api/external-intake/v1/billing/status",
      undefined,
      { searchParams: { intakeHandle } },
    );

    if (!envelope.ok || !envelope.data) {
      // Truthful local fallback when platform billing status is unavailable.
      if (status === 404 || status === 503) {
        return jsonOk({
          captureEnabled: isPaymentCaptureEnabled(),
          adapter: null,
          contact: {},
          address: {},
          instrument: null,
          profileComplete: false,
          paymentMethodOnFile: false,
          continueAllowed: false,
          continueMode: null,
          integrationPending: true,
          message:
            "Secure payment-method setup will be completed with our billing team through QuickBooks before any invoice payment is processed.",
          reason: isPaymentCaptureEnabled()
            ? "PAYMENT_VAULT_UNAVAILABLE"
            : "BILLING_PROFILE_INCOMPLETE",
          authorization: {
            acceptanceLanguage:
              "I understand Claims Ninja will collect my payment method securely through QuickBooks before payment is processed, and that payment is handled only according to my agreement and approved invoice workflow.",
            accepted: false,
            legalApprovalPending: false,
          },
        });
      }
    }

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}

export async function PATCH(request: Request) {
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
      return jsonError(400, "INVALID_JSON", "Invalid JSON body.");
    }

    // Never accept instrument fields through the billing profile autosave path.
    const banned = [
      "cardNumber",
      "cvv",
      "securityCode",
      "routingNumber",
      "accountNumber",
      "pan",
      "instrument",
    ];
    const keys = Object.keys(body);
    if (banned.some((b) => keys.includes(b))) {
      return jsonError(
        400,
        "VALIDATION_ERROR",
        "Payment instrument fields are not accepted on this endpoint.",
      );
    }

    const { status, envelope } = await externalIntakeS2SJson(
      "PATCH",
      "/api/external-intake/v1/billing/profile",
      {
        intakeHandle,
        expectedVersion: body.expectedVersion,
        contact: body.contact,
        address: body.address,
      },
    );

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
