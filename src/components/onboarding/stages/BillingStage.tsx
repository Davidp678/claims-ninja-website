"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  FieldLabel,
  SectionCard,
  SelectInput,
  TextInput,
} from "@/components/onboarding/FormField";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { useOnboardingSession } from "@/components/onboarding/useOnboardingSession";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import type {
  BillingAddressDraft,
  BillingContactDraft,
} from "@/lib/onboarding/types";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

type BillingStatus = {
  captureEnabled: boolean;
  continueAllowed: boolean;
  reason?: string | null;
  contact?: BillingContactDraft;
  address?: BillingAddressDraft;
};

function digitsOnly(value: string, max: number) {
  return value.replace(/\D/g, "").slice(0, max);
}

function maskAccountDisplay(digits: string) {
  if (!digits) return "";
  if (digits.length <= 4) return digits;
  return `${"•".repeat(digits.length - 4)}${digits.slice(-4)}`;
}

export function BillingStage() {
  const router = useRouter();
  const { session, loading, error, saveState, saveExit, version, setSaveState } =
    useOnboardingSession();
  const [status, setStatus] = useState<BillingStatus | null>(null);
  const [contact, setContact] = useState<BillingContactDraft>({});
  const [address, setAddress] = useState<BillingAddressDraft>({});
  const [methodTab, setMethodTab] = useState<"card" | "bank">("card");
  const [authorized, setAuthorized] = useState(false);
  const [busy, setBusy] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  // Card fields — UI / BFF only; never autosaved to session.
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  // Bank fields — UI / BFF only; never autosaved to session.
  const [bankName, setBankName] = useState("");
  const [businessNameOnAccount, setBusinessNameOnAccount] = useState("");
  const [accountType, setAccountType] = useState<"checking" | "savings" | "">("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountFocused, setAccountFocused] = useState(false);

  useEffect(() => {
    void (async () => {
      const result = await onboardingFetchJson<BillingStatus>(
        "/api/onboarding/billing",
      );
      if (result.ok) {
        setStatus(result.data);
        setContact(result.data.contact ?? session?.billingContact ?? {});
        setAddress(result.data.address ?? session?.billingAddress ?? {});
      } else {
        setStatus({
          captureEnabled: false,
          continueAllowed: false,
          reason: "PAYMENT_CAPTURE_DISABLED",
        });
      }
    })();
  }, [session]);

  async function autosaveProfile(
    nextContact: BillingContactDraft,
    nextAddress: BillingAddressDraft,
  ) {
    setSaveState("saving");
    const result = await onboardingFetchJson("/api/onboarding/billing", {
      method: "PATCH",
      json: {
        expectedVersion: version,
        contact: nextContact,
        address: nextAddress,
      },
    });
    setSaveState(result.ok ? "saved" : "error");
  }

  function updateContact<K extends keyof BillingContactDraft>(
    key: K,
    value: BillingContactDraft[K],
  ) {
    setContact((prev) => {
      const next = { ...prev, [key]: value };
      void autosaveProfile(next, address);
      return next;
    });
  }

  function updateAddress<K extends keyof BillingAddressDraft>(
    key: K,
    value: BillingAddressDraft[K],
  ) {
    setAddress((prev) => {
      const next = { ...prev, [key]: value };
      void autosaveProfile(contact, next);
      return next;
    });
  }

  function validateInstrument(): string | null {
    if (!authorized) {
      return "Confirm payment authorization to continue.";
    }
    if (methodTab === "card") {
      if (!nameOnCard.trim()) return "Enter the name on the card.";
      if (digitsOnly(cardNumber, 19).length < 13) {
        return "Enter a valid card number.";
      }
      if (!/^\d{2}\s*\/\s*\d{2}$/.test(expiration.trim())) {
        return "Enter expiration as MM / YY.";
      }
      if (digitsOnly(cvv, 4).length < 3) {
        return "Enter the security code.";
      }
      return null;
    }
    if (!bankName.trim()) return "Enter the bank name.";
    if (!businessNameOnAccount.trim()) {
      return "Enter the business name on the account.";
    }
    if (!accountType) return "Select an account type.";
    if (routingNumber.length !== 9) {
      return "Routing number must be 9 digits.";
    }
    if (accountNumber.length < 4) {
      return "Enter a valid account number.";
    }
    return null;
  }

  async function handleContinue() {
    setLocalError(null);
    if (!status?.captureEnabled) {
      setLocalError(
        "Payment capture is not configured yet. Contact and address can be saved, but you cannot continue until payment capture is enabled.",
      );
      return;
    }

    const validationError = validateInstrument();
    if (validationError) {
      setLocalError(validationError);
      return;
    }

    setBusy(true);

    const tokenPayload =
      methodTab === "card"
        ? {
            nameOnCard: nameOnCard.trim(),
            cardNumber: digitsOnly(cardNumber, 19),
            expiration: expiration.trim(),
            cvv: digitsOnly(cvv, 4),
            authorized: true,
          }
        : {
            bankName: bankName.trim(),
            businessNameOnAccount: businessNameOnAccount.trim(),
            accountType,
            routingNumber,
            accountNumber,
            authorized: true,
          };

    const vault = await onboardingFetchJson<{
      instrument?: { id?: string; status?: string };
      version?: number;
    }>("/api/onboarding/billing/instruments", {
      method: "POST",
      json: {
        expectedVersion: version,
        method: methodTab,
        tokenPayload,
      },
    });

    if (!vault.ok) {
      setBusy(false);
      setLocalError(vault.message);
      return;
    }

    const cont = await onboardingFetchJson("/api/onboarding/billing/continue", {
      method: "POST",
      json: { expectedVersion: vault.data.version ?? version },
    });
    setBusy(false);
    if (!cont.ok) {
      setLocalError(cont.message);
      return;
    }
    router.push("/onboarding/activated");
  }

  if (loading) {
    return <div className="bg-brand-black px-5 py-24 text-zinc-400">Loading…</div>;
  }
  if (!session) {
    return (
      <div className="bg-brand-black px-5 py-24 text-center text-zinc-300">
        <p>{error ?? "No active intake session."}</p>
        <Link href="/" className="mt-4 inline-block text-brand-red-light">
          Start from the homepage
        </Link>
      </div>
    );
  }

  const company =
    session.company?.legalCompanyName ||
    session.company?.dbaName ||
    "your company";
  const captureEnabled = Boolean(status?.captureEnabled);
  const continueBlocked = !captureEnabled || busy;

  return (
    <OnboardingShell
      stage="billing"
      title="Billing Information"
      description={`Add billing details for ${company}.`}
      saveState={saveState}
      onSaveExit={() => void saveExit()}
      continueLabel="Save billing & continue to account →"
      onContinue={() => void handleContinue()}
      continueDisabled={continueBlocked || (captureEnabled && !authorized)}
      continueLoading={busy}
      hint={
        captureEnabled
          ? "You can return and finish later."
          : "Payment capture unavailable — continue blocked."
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Billing contact">
          <div className="space-y-4">
            <div>
              <FieldLabel htmlFor="billingName">Billing contact name</FieldLabel>
              <TextInput
                id="billingName"
                value={contact.name ?? ""}
                onChange={(e) => updateContact("name", e.target.value)}
              />
            </div>
            <div>
              <FieldLabel htmlFor="billingEmail">Billing email</FieldLabel>
              <TextInput
                id="billingEmail"
                type="email"
                value={contact.email ?? ""}
                onChange={(e) => updateContact("email", e.target.value)}
              />
            </div>
            <div>
              <FieldLabel htmlFor="billingPhone">Billing phone</FieldLabel>
              <TextInput
                id="billingPhone"
                value={contact.phone ?? ""}
                onChange={(e) => updateContact("phone", e.target.value)}
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-zinc-300">
              <input
                type="checkbox"
                checked={Boolean(contact.sameAsCompanyAddress)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  const nextContact = {
                    ...contact,
                    sameAsCompanyAddress: checked,
                  };
                  const nextAddress = checked
                    ? {
                        streetAddress: session.company?.streetAddress,
                        city: session.company?.city,
                        state: session.company?.state,
                        postalCode: session.company?.postalCode,
                        suite: address.suite,
                      }
                    : address;
                  setContact(nextContact);
                  setAddress(nextAddress);
                  void autosaveProfile(nextContact, nextAddress);
                }}
                className="h-4 w-4 rounded border-white/30 bg-brand-black text-brand-red"
              />
              Billing address is the same as company address
            </label>
          </div>

          <h3 className="mb-3 mt-6 text-sm font-semibold text-white">
            Billing address
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="street">Street address</FieldLabel>
              <TextInput
                id="street"
                value={address.streetAddress ?? ""}
                onChange={(e) => updateAddress("streetAddress", e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="suite" optional>
                Suite / unit
              </FieldLabel>
              <TextInput
                id="suite"
                value={address.suite ?? ""}
                onChange={(e) => updateAddress("suite", e.target.value)}
              />
            </div>
            <div>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <TextInput
                id="city"
                value={address.city ?? ""}
                onChange={(e) => updateAddress("city", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <FieldLabel htmlFor="state">State</FieldLabel>
                <SelectInput
                  id="state"
                  value={address.state ?? ""}
                  onChange={(e) => updateAddress("state", e.target.value)}
                >
                  <option value="">State</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </SelectInput>
              </div>
              <div>
                <FieldLabel htmlFor="zip">ZIP code</FieldLabel>
                <TextInput
                  id="zip"
                  value={address.postalCode ?? ""}
                  onChange={(e) => updateAddress("postalCode", e.target.value)}
                />
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Payment method">
          {!captureEnabled ? (
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-100">
              <p className="font-semibold">Payment capture unavailable</p>
              <p className="mt-2 text-amber-100/85">
                Payment vault configuration is pending. Card and bank details are
                not collected while payment capture is disabled. Your billing
                contact and address can still be saved. Continue to account
                remains blocked until an approved payment vault is configured.
              </p>
              {status?.reason ? (
                <p className="mt-3 text-xs text-amber-200/70">
                  Reason: {status.reason}
                </p>
              ) : null}
            </div>
          ) : (
            <>
              <div className="mb-4 flex gap-2 border-b border-white/10">
                {(
                  [
                    ["card", "Card"],
                    ["bank", "Bank account"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setMethodTab(id)}
                    className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium transition ${
                      methodTab === id
                        ? "border-brand-red text-white"
                        : "border-transparent text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {methodTab === "card" ? (
                <div className="space-y-4">
                  <div>
                    <FieldLabel htmlFor="nameOnCard">Name on card</FieldLabel>
                    <TextInput
                      id="nameOnCard"
                      autoComplete="cc-name"
                      value={nameOnCard}
                      onChange={(e) => setNameOnCard(e.target.value)}
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="cardNumber">Card number</FieldLabel>
                    <TextInput
                      id="cardNumber"
                      autoComplete="cc-number"
                      inputMode="numeric"
                      placeholder="•••• •••• •••• ••••"
                      pattern="[0-9 ]{13,23}"
                      value={cardNumber}
                      onChange={(e) =>
                        setCardNumber(digitsOnly(e.target.value, 19))
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <FieldLabel htmlFor="exp">Expiration</FieldLabel>
                      <TextInput
                        id="exp"
                        autoComplete="cc-exp"
                        placeholder="MM / YY"
                        value={expiration}
                        onChange={(e) => {
                          const digits = digitsOnly(e.target.value, 4);
                          if (digits.length <= 2) {
                            setExpiration(digits);
                            return;
                          }
                          setExpiration(`${digits.slice(0, 2)} / ${digits.slice(2)}`);
                        }}
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="cvv">Security code</FieldLabel>
                      <TextInput
                        id="cvv"
                        autoComplete="cc-csc"
                        inputMode="numeric"
                        placeholder="•••"
                        pattern="[0-9]{3,4}"
                        value={cvv}
                        onChange={(e) => setCvv(digitsOnly(e.target.value, 4))}
                      />
                      <p className="mt-1 text-xs text-zinc-500">
                        Used for verification only. CVV is never stored.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <FieldLabel htmlFor="bankName">Bank name</FieldLabel>
                    <TextInput
                      id="bankName"
                      autoComplete="off"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="businessNameOnAccount">
                      Business name on account
                    </FieldLabel>
                    <TextInput
                      id="businessNameOnAccount"
                      autoComplete="off"
                      value={businessNameOnAccount}
                      onChange={(e) => setBusinessNameOnAccount(e.target.value)}
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="accountType">Account type</FieldLabel>
                    <SelectInput
                      id="accountType"
                      value={accountType}
                      onChange={(e) =>
                        setAccountType(
                          e.target.value as "checking" | "savings" | "",
                        )
                      }
                    >
                      <option value="">Select account type</option>
                      <option value="checking">Checking</option>
                      <option value="savings">Savings</option>
                    </SelectInput>
                  </div>
                  <div>
                    <FieldLabel htmlFor="routing">Routing number</FieldLabel>
                    <TextInput
                      id="routing"
                      inputMode="numeric"
                      autoComplete="off"
                      placeholder="•••••••••"
                      pattern="[0-9]{9}"
                      maxLength={9}
                      value={routingNumber}
                      onChange={(e) =>
                        setRoutingNumber(digitsOnly(e.target.value, 9))
                      }
                    />
                    <p className="mt-1 text-xs text-zinc-500">
                      9-digit ABA routing number.
                    </p>
                  </div>
                  <div>
                    <FieldLabel htmlFor="accountNumber">Account number</FieldLabel>
                    <TextInput
                      id="accountNumber"
                      inputMode="numeric"
                      autoComplete="off"
                      placeholder="••••••••••••"
                      pattern="[0-9]{4,17}"
                      maxLength={17}
                      value={
                        accountFocused
                          ? accountNumber
                          : maskAccountDisplay(accountNumber)
                      }
                      onFocus={() => setAccountFocused(true)}
                      onBlur={() => setAccountFocused(false)}
                      onChange={(e) => {
                        const next = accountFocused
                          ? digitsOnly(e.target.value, 17)
                          : digitsOnly(
                              e.target.value.replace(/•/g, ""),
                              17,
                            );
                        setAccountNumber(next);
                      }}
                    />
                    <p className="mt-1 text-xs text-zinc-500">
                      Shown masked when not focused. Never stored in session
                      drafts.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-100">
                Stored securely for organization billing. Payment details are
                encrypted, masked, role-restricted, and logged when accessed.
              </div>
              <label className="mt-4 flex items-start gap-3 text-sm text-zinc-200">
                <input
                  type="checkbox"
                  checked={authorized}
                  onChange={(e) => setAuthorized(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/30 bg-brand-black text-brand-red"
                />
                <span>
                  I authorize Claims Ninja to store and use this payment method for
                  charges permitted by the Consulting Agreement.
                </span>
              </label>
              <p className="mt-3 text-xs text-zinc-500">
                You can update this payment method later in Organization settings.
              </p>
            </>
          )}
        </SectionCard>
      </div>

      {(localError || error) && (
        <p className="mt-4 text-sm text-brand-red-light" role="alert">
          {localError || error}
        </p>
      )}
    </OnboardingShell>
  );
}
