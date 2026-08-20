"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type Market = "residential" | "commercial" | "contents" | "carrierMGA";
type Tier = { name: string; eyebrow: string; description: string; price: string; unit: string; featured?: boolean; features: string[]; extras: string[] };
type AddOn = { name: string; price: string; description: string };
type MarketContent = { label: string; kicker: string; title: string; description: string; estimateTier: Tier; claimsReadyTitle: string; claimsReadyDescription: string; tiers: Tier[]; addOns?: AddOn[] };

const claimsReadyFeatures = [
  "Estimate Production plus complete claim file",
  "Organized photo evidence",
  "Structured documentation + estimate notes",
  "Missing-item flags",
];

const estimateFeatures = [
  "Finished native Xactimate ESX estimate",
  "Estimate PDF",
  "Supporting documentation",
  "Professional QA",
];

const residentialClaimsReady: Tier[] = [
  { name: "Starter", eyebrow: "1–5 claims / month", description: "Claims-ready production for lower-volume teams.", price: "$250", unit: "per claim", features: claimsReadyFeatures, extras: ["Try us out!", "Defined monthly capacity"] },
  { name: "Small", eyebrow: "6–15 claims / month", description: "Lower per-claim pricing for steady monthly volume.", price: "$200", unit: "per claim", features: claimsReadyFeatures, extras: ["Save 20%", "Defined monthly capacity"] },
  { name: "Mid-Size", eyebrow: "16–30 claims / month", description: "Volume pricing for established production teams.", price: "$187.50", unit: "per claim", featured: true, features: claimsReadyFeatures, extras: ["Save 25%", "Defined monthly capacity"] },
  { name: "Enterprise", eyebrow: "30+ claims / month", description: "Custom high-volume capacity for larger operations.", price: "Custom", unit: "pricing", features: claimsReadyFeatures, extras: ["Save up to 30%", "Custom capacity planning"] },
];

const marketCopy: Record<Market, MarketContent> = {
  residential: {
    label: "Residential",
    kicker: "Residential Claims Production",
    title: "Flexible production capacity for residential claims.",
    description: "Choose estimate-only production or scale into complete claims-ready file production, with specialist support available when your files need it.",
    estimateTier: { name: "Estimate Production", eyebrow: "Core production", description: "Professional estimate production, ready to release.", price: "$125", unit: "per claim", features: estimateFeatures, extras: ["Fast estimate turnaround", "Professional QA"] },
    claimsReadyTitle: "Claims-Ready File Production",
    claimsReadyDescription: "Complete professionally prepared claim files with volume savings built in.",
    tiers: residentialClaimsReady,
    addOns: [
      { name: "Program Compliance / TPA-MGA Review", price: "$40 / claim", description: "Applied to all claims. Program requirement check, required-document validation, pre-submission QA, deficiency-prevention work, and program reporting." },
      { name: "Negotiation Preparation", price: "$80 / claim", description: "Applied to all claims. Scope comparison, variance breakdown, evidence exhibits, supporting records, revised estimate support, and contractor-facing negotiation preparation." },
      { name: "Added Support", price: "$50 / claim", description: "Code & Documentation Research, Supplements, and more. Additional support on your claims when you need it." },
    ],
  },
  commercial: {
    label: "Commercial",
    kicker: "Commercial Claims Production",
    title: "Serious production capacity for complex commercial files.",
    description: "The same production model, configured around commercial documentation density, scope complexity, and higher production requirements.",
    estimateTier: { name: "Estimate Production", eyebrow: "Core production", description: "Professional commercial estimate production, ready to release.", price: "$300", unit: "per claim", features: estimateFeatures, extras: ["Commercial estimate capacity", "Professional QA"] },
    claimsReadyTitle: "Claims-Ready File Production",
    claimsReadyDescription: "Commercial claims-ready files with clear volume discounts for growing production demand.",
    tiers: [
      { name: "Starter", eyebrow: "1–5 claims / month", description: "Claims-ready commercial production for lower-volume teams.", price: "$500", unit: "per claim", features: claimsReadyFeatures, extras: ["Try us out!", "Commercial production capacity"] },
      { name: "Small", eyebrow: "6–15 claims / month", description: "Lower per-claim pricing for steady commercial volume.", price: "$400", unit: "per claim", features: claimsReadyFeatures, extras: ["Save 20%", "Commercial production capacity"] },
      { name: "Mid-Size", eyebrow: "16–30 claims / month", description: "Volume pricing for established commercial teams.", price: "$375", unit: "per claim", featured: true, features: claimsReadyFeatures, extras: ["Save 25%", "Commercial production capacity"] },
      { name: "Enterprise", eyebrow: "30+ claims / month", description: "Custom high-volume capacity for larger commercial operations.", price: "Custom", unit: "pricing", features: claimsReadyFeatures, extras: ["Save up to 30%", "Custom capacity planning"] },
    ],
    addOns: [
      { name: "Program Compliance / TPA-MGA Review", price: "$80 / claim", description: "Applied to all claims. Program requirement check, required-document validation, pre-submission QA, deficiency-prevention work, and program reporting." },
      { name: "Negotiation Preparation", price: "$160 / claim", description: "Applied to all claims. Scope comparison, variance breakdown, evidence exhibits, supporting records, revised estimate support, and contractor-facing negotiation preparation." },
      { name: "Added Support", price: "$100 / claim", description: "Code & Documentation Research, Supplements, and more. Additional support on your claims when you need it." },
    ],
  },
  contents: {
    label: "Contents",
    kicker: "Contents Claims Production",
    title: "The same simple production model for contents claims.",
    description: "Residential and contents use the same pricing structure: estimate production, volume-based claims-ready files, and defined specialist support.",
    estimateTier: { name: "Estimate Production", eyebrow: "Core production", description: "Professional estimate production, ready to release.", price: "$125", unit: "per claim", features: estimateFeatures, extras: ["Fast estimate turnaround", "Professional QA"] },
    claimsReadyTitle: "Claims-Ready File Production",
    claimsReadyDescription: "Complete professionally prepared claim files with volume savings built in.",
    tiers: residentialClaimsReady,
    addOns: [
      { name: "Program Compliance / TPA-MGA Review", price: "$40 / claim", description: "Applied to all claims. Program requirement check, required-document validation, pre-submission QA, deficiency-prevention work, and program reporting." },
      { name: "Negotiation Preparation", price: "$80 / claim", description: "Applied to all claims. Scope comparison, variance breakdown, evidence exhibits, supporting records, revised estimate support, and contractor-facing negotiation preparation." },
      { name: "Added Support", price: "$50 / claim", description: "Code & Documentation Research, Supplements, and more. Additional support on your claims when you need it." },
    ],
  },
  carrierMGA: {
    label: "Carrier / MGA",
    kicker: "FNOL & Intake File Production",
    title: "Cleaner first-notice files. Less downstream production drag.",
    description: "Fixed-scope FNOL and claims-ready file production for carriers, MGAs, TPAs, and program teams that need complete, structured intake files.",
    estimateTier: { name: "FNOL Production", eyebrow: "Core production", description: "Structured FNOL production, ready for downstream handling.", price: "$125", unit: "per claim", features: ["Structured FNOL production", "Source-material organization", "Document + photo indexing", "Missing-information flags"], extras: ["Program-ready intake", "Professional QA"] },
    claimsReadyTitle: "Claims-Ready File Production",
    claimsReadyDescription: "Complete FNOL and claims-ready file production with volume savings for program teams.",
    tiers: [
      { name: "Starter", eyebrow: "1–5 claims / month", description: "Claims-ready FNOL production for lower-volume teams.", price: "$250", unit: "per claim", features: ["FNOL Production plus complete claim file", "Organized photo evidence", "Structured documentation + estimate notes", "Missing-item flags"], extras: ["Try us out!", "Defined monthly capacity"] },
      { name: "Small", eyebrow: "6–15 claims / month", description: "Lower per-claim pricing for steady FNOL volume.", price: "$200", unit: "per claim", features: ["FNOL Production plus complete claim file", "Organized photo evidence", "Structured documentation + estimate notes", "Missing-item flags"], extras: ["Save 20%", "Defined monthly capacity"] },
      { name: "Mid-Size", eyebrow: "16–30 claims / month", description: "Volume pricing for established FNOL programs.", price: "$187.50", unit: "per claim", featured: true, features: ["FNOL Production plus complete claim file", "Organized photo evidence", "Structured documentation + estimate notes", "Missing-item flags"], extras: ["Save 25%", "Defined monthly capacity"] },
      { name: "Enterprise", eyebrow: "30+ claims / month", description: "Custom high-volume capacity for larger programs.", price: "Custom", unit: "pricing", features: ["FNOL Production plus complete claim file", "Organized photo evidence", "Structured documentation + estimate notes", "Missing-item flags"], extras: ["Save up to 30%", "Custom capacity planning"] },
    ],
    addOns: [
      { name: "Program Compliance / TPA-MGA Review", price: "$40 / claim", description: "Applied to all claims. Program requirement check, required-document validation, pre-submission QA, deficiency-prevention work, and program reporting." },
    ],
  },
};

const allPrograms = ["Estimate Production", "Claims-Ready File Production", "Program Compliance / TPA-MGA Review", "Supplemental & Scope Change Production", "Code & Manufacturer Documentation Research", "Contents & Inventory Production", "Negotiation Preparation", "FNOL & Intake File Production"];

function Check() { return <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0" fill="none" aria-hidden><path d="m4 10.5 3.4 3.4L16 5.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>; }

export function PricingDemoPage() {
  const [market, setMarket] = useState<Market>("residential");
  const content = marketCopy[market];

  return <main className="min-h-screen overflow-hidden bg-[#f7f7f5] text-zinc-950">
    <section className="relative border-b border-zinc-200 bg-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-red" />
      <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-red-100/60 blur-3xl" />
      <Container className="relative pb-16 pt-28 text-center sm:pb-20 sm:pt-32">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" /> Pricing Demo · Internal Prototype
        </div>
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">Claims Production Plans</p>
        <h1 className="mx-auto mt-3 max-w-5xl font-display text-5xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-6xl lg:text-7xl">Production capacity built around the work you actually need.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">Tell us what you produce. Tell us your volume. We configure the right Claims Production Plan around your operation.</p>
        <div className="mx-auto mt-10 inline-grid grid-cols-2 rounded-[1.5rem] border border-zinc-200 bg-zinc-100 p-1.5 shadow-sm sm:grid-cols-4 sm:rounded-full" role="group" aria-label="Select production type">
          {(Object.keys(marketCopy) as Market[]).map((key) => <button key={key} onClick={() => setMarket(key)} className={cn("rounded-full px-4 py-2.5 text-sm font-semibold transition-all sm:px-6", market === key ? "bg-zinc-950 text-white shadow-md" : "text-zinc-500 hover:text-zinc-950")}>{marketCopy[key].label}</button>)}
        </div>
      </Container>
    </section>

    <section className="relative py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{content.kicker}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{content.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-600">{content.description}</p>
        </div>
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,4fr)] xl:items-stretch">
          <div className="flex h-full flex-col">
            <div className="rounded-2xl bg-zinc-950 px-5 py-3 text-white shadow-[0_18px_45px_-38px_rgba(0,0,0,.45)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Base Offering</p>
            </div>
            <article className="relative mt-5 flex min-h-[34rem] flex-1 flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_24px_70px_-42px_rgba(0,0,0,.35)] sm:p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red">{content.estimateTier.eyebrow}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">{content.estimateTier.name}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-zinc-600">{content.estimateTier.description}</p>
              <div className="mt-7 border-y border-zinc-100 py-6"><div className="font-display text-4xl font-semibold tracking-tight">{content.estimateTier.price}</div><div className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-400">{content.estimateTier.unit}</div></div>
              <ul className="mt-7 space-y-3.5">{content.estimateTier.features.map(feature => <li key={feature} className="flex gap-3 text-sm leading-5 text-zinc-700"><span className="text-brand-red"><Check /></span><span>{feature}</span></li>)}</ul>
              <div className="mt-auto pt-8"><div className="mb-5 rounded-2xl bg-zinc-50 p-4">{content.estimateTier.extras.map(extra => <p key={extra} className="py-1 text-xs font-medium text-zinc-500">+ {extra}</p>)}</div><Button href="#plan-builder" className="w-full">Build this plan <span aria-hidden>→</span></Button></div>
            </article>
          </div>

          <div className="flex h-full flex-col">
            <div className="rounded-2xl bg-zinc-950 px-5 py-3 text-white shadow-[0_18px_45px_-38px_rgba(0,0,0,.45)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">{content.claimsReadyTitle}</p>
            </div>
            <div className="mt-5 grid flex-1 items-stretch gap-5 lg:grid-cols-2 2xl:grid-cols-4">
              {content.tiers.map((tier) => <article key={tier.name} className={cn("relative flex min-h-[34rem] h-full flex-col overflow-hidden rounded-[2rem] border bg-white p-7 shadow-[0_24px_70px_-42px_rgba(0,0,0,.35)] sm:p-6", tier.featured ? "border-zinc-950 ring-1 ring-zinc-950" : "border-zinc-200")}>
                {tier.featured && <div className="absolute inset-x-0 top-0 bg-zinc-950 py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white">Recommended starting point</div>}
                <div className={tier.featured ? "pt-5" : ""}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red">{tier.eyebrow}</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">{tier.name}</h3>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-zinc-600">{tier.description}</p>
                  <div className="mt-7 border-y border-zinc-100 py-6"><div className="font-display text-4xl font-semibold tracking-tight">{tier.price}</div><div className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-400">{tier.unit}</div></div>
                </div>
                <ul className="mt-7 space-y-3.5">{tier.features.map(feature => <li key={feature} className="flex gap-3 text-sm leading-5 text-zinc-700"><span className="text-brand-red"><Check /></span><span>{feature}</span></li>)}</ul>
                <div className="mt-auto pt-8"><div className="mb-5 rounded-2xl bg-zinc-50 p-4">{tier.extras.map(extra => <p key={extra} className={cn("py-1 text-xs font-semibold", extra.toLowerCase().includes("save") || extra.toLowerCase().includes("try") ? "text-brand-red" : "text-zinc-500")}>{extra.toLowerCase().includes("save") || extra.toLowerCase().includes("try") ? "★ " : "+ "}{extra}</p>)}</div><Button href="#plan-builder" className={cn("w-full", tier.featured && "shadow-[0_12px_35px_-12px_rgba(220,38,38,.75)]")}>{tier.name === "Enterprise" ? "Talk to sales" : "Build this plan"} <span aria-hidden>→</span></Button></div>
              </article>)}
            </div>
          </div>
        </div>
        {content.addOns && <div className="mx-auto mt-12 max-w-6xl">
          <div className="mx-auto mb-6 max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Additional production</p><h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">Add only the work each file needs.</h3><p className="mt-3 text-sm leading-6 text-zinc-600">Choose estimate or FNOL production on its own, or add specialist production support to your claims-ready plan as needed.</p></div>
          <div className={cn("grid gap-4", content.addOns.length === 1 ? "sm:grid-cols-1 max-w-sm mx-auto" : "sm:grid-cols-2 lg:grid-cols-3")}>{content.addOns.map((addOn) => <div key={addOn.name} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_18px_45px_-38px_rgba(0,0,0,.45)]"><p className="text-sm font-semibold text-zinc-900">{addOn.name}</p><p className="mt-3 font-display text-2xl font-semibold tracking-tight text-brand-red">{addOn.price}</p><p className="mt-2 text-xs leading-5 text-zinc-500">{addOn.description}</p></div>)}</div>
        </div>}
        <p className="mt-7 text-center text-xs leading-5 text-zinc-500">Claims Ninja provides production work—not claim strategy, negotiation, or settlement responsibility. Pricing reflects the current internal prototype and may be configured around documented scope, volume, and turnaround.</p>
      </Container>
    </section>

    <section className="border-y border-zinc-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Eight production programs</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">Tiers are the starting point. Your plan is the configuration.</h2><p className="mt-5 max-w-lg leading-7 text-zinc-600">The baseline packages make the decision easy. Behind them, Claims Ninja can allocate independent production programs to the portion of your monthly volume that actually needs each one.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{allPrograms.map((program, i) => <div key={program} className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-[#fafafa] p-4 transition hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50/40"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-xs font-bold text-white">0{i + 1}</span><span className="text-sm font-semibold text-zinc-800">{program}</span></div>)}</div>
        </div>
      </Container>
    </section>

    <section id="plan-builder" className="bg-zinc-950 py-16 text-white sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] p-8 sm:p-12 lg:p-14">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-light">Next step</p><h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">Your workload should shape the plan—not the other way around.</h2><p className="mt-5 max-w-2xl leading-7 text-zinc-400">Next we can layer in monthly job volume, residential/commercial/contents/intake mix, program allocation, required documentation, and turnaround to turn this pricing baseline into an interactive plan builder.</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Current selection</p><p className="mt-2 font-display text-2xl font-semibold">{content.label} {market === "carrierMGA" ? "Claims Production" : "Production"}</p><p className="mt-2 text-sm leading-6 text-zinc-400">Estimate or FNOL production · grouped claims-ready pricing · defined specialist add-ons.</p></div>
          </div>
        </div>
      </Container>
    </section>
  </main>;
}
