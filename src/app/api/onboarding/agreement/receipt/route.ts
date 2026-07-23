import { getIntakeHandleFromCookie } from "@/lib/onboarding/cookie";
import {
  handleOnboardingRouteError,
  jsonError,
  mapPlatformResponse,
} from "@/lib/onboarding/http";
import { externalIntakeS2SJson } from "@/lib/onboarding/s2s";

export const runtime = "nodejs";

/**
 * Application-level acceptance receipt / evidence export.
 * Email delivery remains behind the existing outbound provider gate.
 */
export async function GET() {
  try {
    const intakeHandle = await getIntakeHandleFromCookie();
    if (!intakeHandle) {
      return jsonError(401, "SESSION_UNAUTHORIZED", "No active intake session.");
    }

    const { status, envelope } = await externalIntakeS2SJson(
      "GET",
      `/api/external-intake/v1/agreement/receipt?intakeHandle=${encodeURIComponent(intakeHandle)}`,
    );

    if (status >= 400) {
      return mapPlatformResponse(status, envelope);
    }

    const data = envelope.data as {
      acceptanceBundleId?: string;
      acceptedAt?: string;
      acceptanceLanguage?: string;
      documents?: Array<{
        displayTitle?: string;
        version?: string;
        contentSha256?: string;
        text?: string;
      }>;
    } | null;

    const lines: string[] = [
      "Claims Ninja — Legal Acceptance Receipt",
      "Native clickwrap evidence (no third-party e-sign provider)",
      "",
      `Bundle: ${data?.acceptanceBundleId ?? ""}`,
      `Accepted at (UTC): ${data?.acceptedAt ?? ""}`,
      `Language: ${data?.acceptanceLanguage ?? ""}`,
      "",
    ];
    for (const doc of data?.documents ?? []) {
      lines.push("-----");
      lines.push(doc.displayTitle ?? "Document");
      lines.push(`Version: ${doc.version ?? ""}`);
      lines.push(`SHA-256: ${doc.contentSha256 ?? ""}`);
      lines.push("");
      lines.push(doc.text ?? "");
      lines.push("");
    }

    return new Response(lines.join("\n"), {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition":
          'attachment; filename="claims-ninja-acceptance-receipt.txt"',
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
