/**
 * Browser-only Intuit Payments tokenization.
 * Card/bank data is posted directly to Intuit — never to Claims Ninja servers.
 */

export type IntuitCardTokenInput = {
  number: string;
  expMonth: string;
  expYear: string;
  cvc: string;
  name: string;
  address?: {
    streetAddress?: string;
    city?: string;
    region?: string;
    country?: string;
    postalCode?: string;
  };
};

export type IntuitTokenizeResult =
  | { ok: true; token: string }
  | { ok: false; message: string };

function paymentsTokenUrl(): string {
  const configured = process.env.NEXT_PUBLIC_INTUIT_PAYMENTS_TOKEN_URL?.trim();
  if (configured) return configured;
  // Sandbox default; Production must set NEXT_PUBLIC_INTUIT_PAYMENTS_TOKEN_URL.
  return "https://sandbox.api.intuit.com/quickbooks/v4/payments/tokens";
}

/**
 * Exchange card details for a single-use Intuit opaque token in the browser.
 */
export async function tokenizeCardWithIntuit(
  input: IntuitCardTokenInput,
): Promise<IntuitTokenizeResult> {
  const number = input.number.replace(/\s+/g, "");
  if (!/^\d{13,19}$/.test(number)) {
    return { ok: false, message: "Enter a valid card number." };
  }
  if (!/^\d{2}$/.test(input.expMonth)) {
    return { ok: false, message: "Enter a valid expiration month (MM)." };
  }
  if (!/^\d{4}$/.test(input.expYear)) {
    return { ok: false, message: "Enter a valid expiration year (YYYY)." };
  }
  if (!/^\d{3,4}$/.test(input.cvc)) {
    return { ok: false, message: "Enter a valid security code." };
  }

  try {
    const response = await fetch(paymentsTokenUrl(), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        card: {
          number,
          expMonth: input.expMonth,
          expYear: input.expYear,
          cvc: input.cvc,
          name: input.name,
          address: {
            streetAddress: input.address?.streetAddress ?? "",
            city: input.address?.city ?? "",
            region: input.address?.region ?? "",
            country: input.address?.country ?? "US",
            postalCode: input.address?.postalCode ?? "",
          },
        },
      }),
    });

    const text = await response.text();
    type TokenizeResponse = { value?: string; id?: string; message?: string };
    let parsed: TokenizeResponse | null = null;
    try {
      parsed = text ? (JSON.parse(text) as TokenizeResponse) : null;
    } catch {
      parsed = null;
    }

    if (!response.ok) {
      return {
        ok: false,
        message:
          parsed?.message ??
          `Unable to secure card with QuickBooks (${response.status}).`,
      };
    }

    const token = parsed?.value ?? parsed?.id;
    if (!token || typeof token !== "string") {
      return {
        ok: false,
        message: "QuickBooks did not return a payment token.",
      };
    }

    return { ok: true, token };
  } catch {
    return {
      ok: false,
      message: "Unable to reach QuickBooks Payments. Try again.",
    };
  }
}
