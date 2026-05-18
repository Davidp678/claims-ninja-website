"use client";

import { useId, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

const inputClass =
  "mt-2 block w-full rounded-lg border border-white/22 bg-brand-black/60 px-4 h-12 text-base text-white placeholder-zinc-500 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

const labelClass =
  "text-xs font-semibold uppercase tracking-wider text-zinc-400";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function parseNumber(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export function OrganizationRoi() {
  const carrierEstId = useId();
  const jobsId = useId();
  const upliftId = useId();
  const inHouseId = useId();

  const [carrierEstimate, setCarrierEstimate] = useState<string>("25000");
  const [jobsPerMonth, setJobsPerMonth] = useState<string>("8");
  const [upliftPct, setUpliftPct] = useState<string>("25");
  const [inHouseMonthly, setInHouseMonthly] = useState<string>("7500");

  const numbers = useMemo(() => {
    const carrier = parseNumber(carrierEstimate);
    const jobs = parseNumber(jobsPerMonth);
    const uplift = parseNumber(upliftPct);
    const inHouse = parseNumber(inHouseMonthly);

    const hasCarrier = carrier > 0;
    const documentedIncreasePerJob = hasCarrier
      ? carrier * (uplift / 100)
      : 0;
    const finalRcvPerJob = hasCarrier
      ? carrier + documentedIncreasePerJob
      : 0;

    const ninjaFeePerJob = hasCarrier
      ? documentedIncreasePerJob * 0.15
      : finalRcvPerJob * 0.04;

    const netUpliftPerJob = hasCarrier
      ? documentedIncreasePerJob - ninjaFeePerJob
      : -ninjaFeePerJob;

    const monthlyNet = netUpliftPerJob * jobs;
    const monthlyFee = ninjaFeePerJob * jobs;
    const annualNet = monthlyNet * 12;
    const annualFee = monthlyFee * 12;
    const inHouseAnnual = inHouse * 12;
    const vsInHouse = annualNet - inHouseAnnual;

    return {
      hasCarrier,
      annualNet,
      annualFee,
      inHouseAnnual,
      vsInHouse,
      monthlyNet,
    };
  }, [carrierEstimate, jobsPerMonth, upliftPct, inHouseMonthly]);

  return (
    <div className="rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-2xl shadow-black/50 ring-1 ring-brand-red/25 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div>
            <label htmlFor={carrierEstId} className={labelClass}>
              Avg carrier estimate per job
            </label>
            <div className="relative">
              <span
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-zinc-500"
                aria-hidden
              >
                $
              </span>
              <input
                id={carrierEstId}
                type="number"
                inputMode="decimal"
                min={0}
                step="100"
                value={carrierEstimate}
                onChange={(e) => setCarrierEstimate(e.target.value)}
                className={cn(inputClass, "pl-8 mt-2")}
              />
            </div>
            <p className="mt-1 text-xs text-zinc-500">
              Leave blank or 0 to model the 4%-of-RCV fallback.
            </p>
          </div>

          <div>
            <label htmlFor={jobsId} className={labelClass}>
              Jobs per month
            </label>
            <input
              id={jobsId}
              type="number"
              inputMode="numeric"
              min={0}
              step="1"
              value={jobsPerMonth}
              onChange={(e) => setJobsPerMonth(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={upliftId} className={labelClass}>
              Assumed uplift vs carrier estimate (%)
            </label>
            <input
              id={upliftId}
              type="number"
              inputMode="decimal"
              min={0}
              step="1"
              value={upliftPct}
              onChange={(e) => setUpliftPct(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={inHouseId} className={labelClass}>
              In-house claims team cost (per month)
            </label>
            <div className="relative">
              <span
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-zinc-500"
                aria-hidden
              >
                $
              </span>
              <input
                id={inHouseId}
                type="number"
                inputMode="decimal"
                min={0}
                step="100"
                value={inHouseMonthly}
                onChange={(e) => setInHouseMonthly(e.target.value)}
                className={cn(inputClass, "pl-8 mt-2")}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-brand-red/35 bg-brand-red/10 p-6 ring-1 ring-brand-red/20">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-red-light">
              Net annual uplift with Claims Ninja
            </p>
            <p className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
              {currency.format(Math.max(0, numbers.annualNet))}
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              After negotiation fee, across all jobs annualized.
            </p>
          </div>

          <div className="rounded-xl border border-white/12 bg-brand-black/55 p-5 ring-1 ring-white/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Claims Ninja fee (annual)
            </p>
            <p className="mt-1 font-display text-2xl font-semibold text-white">
              {currency.format(Math.max(0, numbers.annualFee))}
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              {numbers.hasCarrier
                ? "15% of documented settlement increase."
                : "4% of final RCV fallback (no carrier estimate)."}
            </p>
          </div>

          <div className="rounded-xl border border-white/12 bg-brand-black/55 p-5 ring-1 ring-white/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Vs. in-house claims team
            </p>
            <p
              className={cn(
                "mt-1 font-display text-2xl font-semibold",
                numbers.vsInHouse >= 0 ? "text-white" : "text-zinc-300",
              )}
            >
              {numbers.vsInHouse >= 0
                ? `${currency.format(numbers.vsInHouse)} saved`
                : `${currency.format(Math.abs(numbers.vsInHouse))} short`}
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              In-house baseline: {currency.format(numbers.inHouseAnnual)} per year.
            </p>
          </div>
        </div>
      </div>

      <details className="mt-8 rounded-xl border border-white/12 bg-brand-black/40 p-5 text-sm text-zinc-300">
        <summary className="cursor-pointer select-none text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 hover:text-white">
          Assumptions
        </summary>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-300">
          <li>
            Negotiation fee is modeled as 15% of the documented settlement
            increase above the carrier&apos;s original estimate.
          </li>
          <li>
            Fallback: when there is no carrier estimate, the fee is modeled at
            4% of final RCV.
          </li>
          <li>
            Assumed uplift defaults to 25% — adjust above to model your own
            scenarios.
          </li>
          <li>
            In-house claims team cost defaults to $7,500/month — adjust above to
            match your loaded cost.
          </li>
          <li>
            Estimates are directional only and not a guarantee of outcome.
          </li>
        </ul>
      </details>
    </div>
  );
}
