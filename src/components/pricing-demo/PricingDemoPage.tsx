"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type Market = "residential" | "commercial" | "contents" | "carrierMGA";
type Tier = { name: string; eyebrow: string; description: string; price: string; unit: string; featured?: boolean; features: string[]; extras: string[] };
type Rate = { label: string; estimate: string; claimsReady: string };
type MarketContent = { label: string; kicker: string; title: string; description: string; tiers: Tier[]; rates?: Rate[]; rateNote?: string };

const marketCopy: Record<Market, MarketContent> = {
  residential: {
    label: "Residential",
    kicker: "Property Claims Production",
    title: "More estimating capacity. Less production drag.",
    description: "A clean starting point for residential contractors who want dependable claims production without building a larger back office.",
    tiers: [
      { name: "Production", eyebrow: "Core", description: "Professional estimate production for teams that need reliable capacity.", price: "From $112", unit: "per claim · custom monthly plan", features: ["Estimate Production", "Native Xactimate ESX + estimate PDF", "Supporting documentation", "Professional QA + release"], extras: ["Standard turnaround", "Defined monthly volume"] },
      { name: "Claims Ready", eyebrow: "Most complete", description: "Turn source material into a professionally assembled file ready for your team to take forward.", price: "From $224", unit: "per claim · custom monthly plan", featured: true, features: ["Everything in Production", "Claims-Ready File Production", "Organized photo evidence", "Structured documentation + estimate notes", "Missing-item documentation flags"], extras: ["Program Compliance / TPA-MGA available", "Priority capacity options"] },
      { name: "Production Plus", eyebrow: "Expanded", description: "Broader production support for contractors with changing scopes and more demanding files.", price: "From $56", unit: "add-on per claim · custom plan", features: ["Everything in Claims Ready", "Supplemental & Scope Change Production", "Code & Manufacturer Research", "Negotiation Preparation", "Evidence exhibits + variance support"], extras: ["Custom service allocation", "Custom SLA options"] },
    ],
    rates: [
      { label: "1–5 claims / month", estimate: "$112 / claim", claimsReady: "$224 / claim" },
      { label: "6–15 claims / month", estimate: "$89.60 / claim", claimsReady: "$179.20 / claim" },
      { label: "16–30 claims / month", estimate: "$84 / claim", claimsReady: "$168 / claim" },
      { label: "30+ claims / month", estimate: "$78.40 / claim", claimsReady: "$156.80 / claim" },
    ],
    rateNote: "Additional production services are $56 per claim. Program Compliance or Negotiation Preparation applied across all claims is $44.80 per claim.",
  },
  commercial: {
    label: "Commercial",
    kicker: "Commercial Claims Production",
    title: "Serious production capacity for complex property files.",
    description: "The same production programs, configured around commercial documentation density, scope complexity, and job volume.",
    tiers: [
      { name: "Production", eyebrow: "Core", description: "Structured commercial estimate production with professional review built in.", price: "From $224", unit: "per claim · custom monthly plan", features: ["Estimate Production", "Native Xactimate ESX + estimate PDF", "Supporting documentation", "Professional QA + release"], extras: ["Commercial complexity weighting", "Defined monthly capacity"] },
      { name: "Claims Ready", eyebrow: "Most complete", description: "A stronger file-production layer for documentation-heavy commercial claims.", price: "From $448", unit: "per claim · custom monthly plan", featured: true, features: ["Everything in Production", "Claims-Ready File Production", "Organized photo + document evidence", "Structured estimate notes", "Documentation-gap flags"], extras: ["TPA/MGA program review available", "Priority capacity options"] },
      { name: "Production Plus", eyebrow: "Expanded", description: "Expanded technical production for complex scope changes and contractor preparation.", price: "From $112", unit: "add-on per claim · custom plan", features: ["Everything in Claims Ready", "Supplemental & Scope Change Production", "Code & Manufacturer Research", "Negotiation Preparation", "Scope comparison + evidence exhibits"], extras: ["Segmented complex-file workflows", "Custom SLA options"] },
    ],
    rates: [
      { label: "1–5 claims / month", estimate: "$224 / claim", claimsReady: "$448 / claim" },
      { label: "6–15 claims / month", estimate: "$179.20 / claim", claimsReady: "$358.40 / claim" },
      { label: "16–30 claims / month", estimate: "$168 / claim", claimsReady: "$336 / claim" },
      { label: "30+ claims / month", estimate: "$156.80 / claim", claimsReady: "$313.60 / claim" },
    ],
    rateNote: "Additional production services are $112 per claim. Program Compliance or Negotiation Preparation applied across all claims is $89.60 per claim.",
  },
  contents: {
    label: "Contents",
    kicker: "Contents & Inventory Production",
    title: "Turn contents evidence into a professional inventory.",
    description: "Structured contents production from photos, video, receipts, pack-out records, and existing inventories—with human review before release.",
    tiers: [
      { name: "Inventory", eyebrow: "Core", description: "Build a clean, organized inventory from the evidence your team provides.", price: "$—", unit: "custom monthly plan", features: ["Item identification", "Room + location organization", "Category + quantity", "Photo/evidence references"], extras: ["Exception flags", "Professional QA + release"] },
      { name: "Researched", eyebrow: "Most complete", description: "Add replacement research and stronger product detail to the structured inventory.", price: "$—", unit: "custom monthly plan", featured: true, features: ["Everything in Inventory", "Brand/model/specification when supportable", "Replacement-product research", "Like-kind-and-quality research", "Replacement pricing sources"], extras: ["Uncertainty flags", "Source-linked research"] },
      { name: "Complex Contents", eyebrow: "Expanded", description: "Higher-touch production for dense residential inventories and commercial contents or FF&E.", price: "$—", unit: "custom monthly plan", features: ["Everything in Researched", "Commercial FF&E organization", "High-volume evidence structuring", "Complex item research", "Custom inventory output structure"], extras: ["Custom volume configuration", "Custom SLA options"] },
    ],
  },
  carrierMGA: {
    label: "Carrier / MGA",
    kicker: "FNOL & Intake File Production",
    title: "Cleaner first-notice files. Less downstream production drag.",
    description: "Fixed-scope documentation production for carrier, MGA, TPA, and program teams that need complete, structured intake files before internal handling moves forward.",
    tiers: [
      { name: "FNOL Ready", eyebrow: "Core", description: "Turn raw first-notice materials into a clean, structured intake file.", price: "$—", unit: "custom monthly plan", features: ["Structured FNOL production", "Source-material organization", "Document + photo indexing", "Missing-information flags", "Professional QA + release"], extras: ["Defined intake scope", "Defined monthly capacity"] },
      { name: "Intake Ready", eyebrow: "Most complete", description: "Build a professionally assembled intake package ready for your internal workflow.", price: "$—", unit: "custom monthly plan", featured: true, features: ["Everything in FNOL Ready", "Claims-Ready File Production", "Organized evidence + loss summary", "Required-document validation", "Deficiency-prevention checklist"], extras: ["Priority capacity options", "Configured intake requirements"] },
      { name: "Program-Ready Intake", eyebrow: "Expanded", description: "Produce and QA one complete intake package against a specific program requirement set.", price: "$—", unit: "custom monthly plan", features: ["Everything in Intake Ready", "Program-specific required-form assembly", "Pre-submission QA", "Deficiency flags", "Completed audit-ready intake package"], extras: ["No ongoing monitoring or administration", "Fixed scope + defined turnaround"] },
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
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {content.tiers.map((tier) => <article key={tier.name} className={cn("relative flex min-h-[36rem] flex-col overflow-hidden rounded-[2rem] border bg-white p-7 shadow-[0_24px_70px_-42px_rgba(0,0,0,.35)] sm:p-8", tier.featured ? "border-zinc-950 ring-1 ring-zinc-950 lg:-translate-y-3" : "border-zinc-200")}>
            {tier.featured && <div className="absolute inset-x-0 top-0 bg-zinc-950 py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white">Recommended starting point</div>}
            <div className={tier.featured ? "pt-5" : ""}>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red">{tier.eyebrow}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">{tier.name}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-zinc-600">{tier.description}</p>
              <div className="mt-7 border-y border-zinc-100 py-6"><div className="font-display text-4xl font-semibold tracking-tight">{tier.price}</div><div className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-400">{tier.unit}</div></div>
            </div>
            <ul className="mt-7 space-y-3.5">{tier.features.map(feature => <li key={feature} className="flex gap-3 text-sm leading-5 text-zinc-700"><span className="text-brand-red"><Check /></span><span>{feature}</span></li>)}</ul>
            <div className="mt-auto pt-8"><div className="mb-5 rounded-2xl bg-zinc-50 p-4">{tier.extras.map(extra => <p key={extra} className="py-1 text-xs font-medium text-zinc-500">+ {extra}</p>)}</div><Button href="#plan-builder" className={cn("w-full", tier.featured && "shadow-[0_12px_35px_-12px_rgba(220,38,38,.75)]")}>Build this plan <span aria-hidden>→</span></Button></div>
          </article>)}
        </div>
        {content.rates && <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white shadow-[0_18px_50px_-38px_rgba(0,0,0,.45)]">
          <div className="border-b border-zinc-100 px-6 py-5 sm:px-7"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Published production rates</p><p className="mt-2 text-sm leading-6 text-zinc-600">Volume pricing is retained while the underlying production rate reflects the current plan.</p></div>
          <div className="grid grid-cols-[1.1fr_.9fr_.9fr] text-sm"><div className="border-b border-zinc-100 bg-zinc-50 px-4 py-3 font-semibold text-zinc-500 sm:px-6">Monthly volume</div><div className="border-b border-l border-zinc-100 bg-zinc-50 px-4 py-3 text-right font-semibold text-zinc-500 sm:px-6">Estimate Production</div><div className="border-b border-l border-zinc-100 bg-zinc-50 px-4 py-3 text-right font-semibold text-zinc-500 sm:px-6">Claims-Ready</div>{content.rates.map((rate) => <div key={rate.label} className="contents"><div className="border-b border-zinc-100 px-4 py-4 font-medium text-zinc-700 sm:px-6">{rate.label}</div><div className="border-b border-l border-zinc-100 px-4 py-4 text-right font-semibold text-zinc-900 sm:px-6">{rate.estimate}</div><div className="border-b border-l border-zinc-100 px-4 py-4 text-right font-semibold text-zinc-900 sm:px-6">{rate.claimsReady}</div></div>)}</div>
          <p className="px-6 py-4 text-xs leading-5 text-zinc-500 sm:px-7">{content.rateNote}</p>
        </div>}
        <p className="mt-7 text-center text-xs leading-5 text-zinc-500">Published production rates are shown for Residential and Commercial work. Contents and Carrier / MGA plans are configured to documented scope, volume, and turnaround needs.</p>
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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Current selection</p><p className="mt-2 font-display text-2xl font-semibold">{content.label} {market === "carrierMGA" ? "Claims Production" : "Production"}</p><p className="mt-2 text-sm leading-6 text-zinc-400">Three baseline configurations · custom monthly capacity · professional QA and release.</p></div>
          </div>
        </div>
      </Container>
    </section>
  </main>;
}
