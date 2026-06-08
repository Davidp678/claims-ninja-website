"use client";

import { useId, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { LeadContactFields } from "@/lib/calculator-lead";
import type { Locale } from "@/lib/i18n/config";
import { getCalculatorContent } from "@/lib/i18n/content/calculator";
import { LeadCaptureForm } from "./LeadCaptureForm";

const inputClass =
  "mt-2 block w-full rounded-lg border border-white/22 bg-brand-black/60 px-4 h-12 text-base text-white placeholder-zinc-400 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

const labelClass =
  "text-xs font-semibold uppercase tracking-wider text-zinc-300";

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

export function OrganizationRoi({ locale = "en" }: { locale?: Locale }) {
  const t = getCalculatorContent(locale).roi;
  const carrierEstId = useId();
  const jobsId = useId();
  const upliftId = useId();
  const inHouseId = useId();

  const [carrierEstimate, setCarrierEstimate] = useState<string>("25000");
  const [jobsPerMonth, setJobsPerMonth] = useState<string>("8");
  const [upliftPct, setUpliftPct] = useState<string>("25");
  const [inHouseMonthly, setInHouseMonthly] = useState<string>("7500");
  const [showLeadForm, setShowLeadForm] = useState(false);

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
      documentedIncreasePerJob,
      finalRcvPerJob,
      ninjaFeePerJob,
      netUpliftPerJob,
      annualNet,
      annualFee,
      inHouseAnnual,
      vsInHouse,
      monthlyNet,
      monthlyFee,
    };
  }, [carrierEstimate, jobsPerMonth, upliftPct, inHouseMonthly]);

  return (
    <div className="rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-2xl shadow-black/50 ring-1 ring-brand-red/25 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div>
            <label htmlFor={carrierEstId} className={labelClass}>
              {t.avgCarrierEstimate}
            </label>
            <div className="relative">
              <span
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-zinc-400"
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
            <p className="mt-1 text-xs text-zinc-400">
              {t.avgCarrierEstimateHelper}
            </p>
          </div>

          <div>
            <label htmlFor={jobsId} className={labelClass}>
              {t.jobsPerMonth}
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
              {t.assumedUplift}
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
              {t.inHouseCost}
            </label>
            <div className="relative">
              <span
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-zinc-400"
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
              {t.netAnnualUplift}
            </p>
            <p className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
              {currency.format(Math.max(0, numbers.annualNet))}
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              {t.netAnnualUpliftHelper}
            </p>
          </div>

          <div className="rounded-xl border border-white/12 bg-brand-black/55 p-5 ring-1 ring-white/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              {t.ninjaFeeAnnual}
            </p>
            <p className="mt-1 font-display text-2xl font-semibold text-white">
              {currency.format(Math.max(0, numbers.annualFee))}
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              {numbers.hasCarrier ? t.ninjaFeeWithCarrier : t.ninjaFeeFallback}
            </p>
          </div>

          <div className="rounded-xl border border-white/12 bg-brand-black/55 p-5 ring-1 ring-white/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              {t.vsInHouse}
            </p>
            <p
              className={cn(
                "mt-1 font-display text-2xl font-semibold",
                numbers.vsInHouse >= 0 ? "text-white" : "text-zinc-300",
              )}
            >
              {numbers.vsInHouse >= 0
                ? `${currency.format(numbers.vsInHouse)} ${t.saved}`
                : `${currency.format(Math.abs(numbers.vsInHouse))} ${t.short}`}
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              {t.inHouseBaseline(currency.format(numbers.inHouseAnnual))}
            </p>
          </div>

          <Button
            type="button"
            variant="secondary"
            size="lg"
            className="w-full"
            onClick={() => setShowLeadForm(true)}
          >
            {t.sendRoiReport}
          </Button>

          {showLeadForm && (
            <LeadCaptureForm
              variant="roi-report"
              defaultMonthlyVolume={jobsPerMonth}
              submitLabel={t.sendRoiReport}
              successMessage={t.roiSuccessMessage}
              locale={locale}
              className="mt-2"
              mergePayload={(lead: LeadContactFields) => ({
                calculatorType: "roi-report",
                lead,
                roiCalculatorInputs: {
                  averageCarrierEstimatePerJob: parseNumber(carrierEstimate),
                  jobsPerMonth: parseNumber(jobsPerMonth),
                  assumedUpliftPercent: parseNumber(upliftPct),
                  inHouseMonthlyCost: parseNumber(inHouseMonthly),
                },
                roiCalculatorOutputs: {
                  usesCarrierEstimateFeeModel: numbers.hasCarrier,
                  documentedIncreasePerJob: numbers.documentedIncreasePerJob,
                  finalRcvPerJob: numbers.finalRcvPerJob,
                  ninjaFeePerJob: numbers.ninjaFeePerJob,
                  netUpliftPerJob: numbers.netUpliftPerJob,
                  monthlyNetUplift: numbers.monthlyNet,
                  monthlyNinjaFee: numbers.monthlyFee,
                  annualNetUplift: numbers.annualNet,
                  annualNinjaFee: numbers.annualFee,
                  annualInHouseCost: numbers.inHouseAnnual,
                  annualVsInHouseDelta: numbers.vsInHouse,
                },
              })}
            />
          )}
        </div>
      </div>

      <details className="mt-8 rounded-xl border border-white/12 bg-brand-black/40 p-5 text-sm text-zinc-300">
        <summary className="cursor-pointer select-none text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 hover:text-white">
          {t.assumptions}
        </summary>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-300">
          {t.assumptionsItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </details>
    </div>
  );
}
