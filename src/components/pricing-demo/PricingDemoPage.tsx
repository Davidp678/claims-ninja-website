"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type Market = "residential" | "commercial" | "contents" | "carrierMGA";
type Tier = { name: string; eyebrow: string; description: string; price: string; unit: string; featured?: boolean; features: string[]; extras: string[] };
type AddOn = { name: string; price: string; description: string };
type MarketContent = { label: string; kicker: string; title: string; description: string; tiers: Tier[]; addOns?: AddOn[] };

const marketCopy: Record<Market, MarketContent> = {
  residential: {
    label: "Residential",
    kicker: "Claim Support Concept",
    title: "Useful claim support without owning the negotiation.",
    description: "A contractor-facing production model built around the work that makes a claim file stronger, cleaner, and easier to move forward—while leaving representation, settlement strategy, and carrier negotiation with the appropriate parties.",
    tiers: [
      { name: "Core", eyebrow: "File foundation", description: "Turn field information into a clean, usable claim package.", price: "Concept", unit: "scope based", features: ["Estimate production", "Native Xactimate ESX + estimate PDF", "Supporting documentation organization", "Professional QA + release"], extras: ["Defined deliverables", "Contractor retains claim strategy"] },
      { name: "Claims-Ready", eyebrow: "Documentation", description: "Build a more complete file around the estimate and supporting evidence.", price: "Concept", unit: "scope based", features: ["Everything in Core", "Complete file assembly", "Organized photo + document evidence", "Estimate notes + missing-item flags"], extras: ["Documentation-gap review", "Structured claim summary"] },
      { name: "Scope Support", eyebrow: "Production", description: "Production support when the documented scope changes or additional support is needed.", price: "Concept", unit: "scope based", featured: true, features: ["Everything in Claims-Ready", "Supplemental scope production", "Code + manufacturer documentation research", "Scope-change documentation", "Professional QA + release"], extras: ["Research-backed support", "No settlement authority"] },
      { name: "Prepared", eyebrow: "Decision support", description: "Organize the file for the contractor or authorized representative to handle the actual claim conversation.", price: "Concept", unit: "scope based", features: ["Everything in Scope Support", "Estimate comparison", "Documented discrepancy summary", "Negotiation-preparation package"], extras: ["Clear handoff package", "No negotiation or representation"] },
    ],
    addOns: [
      { name: "Contents & Inventory Production", price: "Optional", description: "Structure contents evidence, inventory, replacement research, and supporting documentation." },
      { name: "Code & Manufacturer Research", price: "Optional", description: "Research and organize applicable code, product, and manufacturer documentation for the file." },
      { name: "Supplement Production", price: "Optional", description: "Prepare documented scope changes and supporting material for review and submission by the appropriate party." },
      { name: "Negotiation Preparation", price: "Optional", description: "Compare estimates, organize discrepancies, and prepare supporting evidence without negotiating or representing the claimant." },
    ],
  },
  commercial: {
    label: "Commercial",
    kicker: "Complex Claim Support",
    title: "The same boundary, built for more complex files.",
    description: "Higher-document-density production for commercial property claims, with the same deliberate separation between file production and claim representation.",
    tiers: [
      { name: "Core", eyebrow: "File foundation", description: "Organize the estimate and core supporting documentation.", price: "Concept", unit: "scope based", features: ["Commercial estimate production", "Native Xactimate ESX + estimate PDF", "Supporting documentation organization", "Professional QA + release"], extras: ["Complexity-weighted workflow", "Defined deliverables"] },
      { name: "Claims-Ready", eyebrow: "Documentation", description: "Assemble the larger evidence set common to commercial files.", price: "Concept", unit: "scope based", features: ["Everything in Core", "Complete file assembly", "Photo + document indexing", "Documentation-gap flags"], extras: ["Structured loss summary", "Evidence organization"] },
      { name: "Scope Support", eyebrow: "Production", description: "Support evolving scope with research and documented production.", price: "Concept", unit: "scope based", featured: true, features: ["Everything in Claims-Ready", "Supplemental scope production", "Code + manufacturer research", "Scope-change documentation"], extras: ["Research-backed support", "No settlement authority"] },
      { name: "Prepared", eyebrow: "Decision support", description: "Prepare a clean discrepancy and evidence package for the party handling negotiation.", price: "Concept", unit: "scope based", features: ["Everything in Scope Support", "Estimate comparison", "Documented discrepancy summary", "Negotiation-preparation package"], extras: ["Clear handoff package", "No negotiation or representation"] },
    ],
    addOns: [
      { name: "Contents / FF&E Production", price: "Optional", description: "Organize dense contents or FF&E inventories and supporting research." },
      { name: "Code & Manufacturer Research", price: "Optional", description: "Research and organize applicable code, product, and manufacturer documentation." },
      { name: "Supplement Production", price: "Optional", description: "Prepare documented scope changes and supporting material for review and submission." },
      { name: "Negotiation Preparation", price: "Optional", description: "Build the evidence and discrepancy package without taking responsibility for negotiation." },
    ],
  },
  contents: {
    label: "Contents",
    kicker: "Contents Production",
    title: "Turn contents evidence into a professional inventory.",
    description: "Structured production from photos, video, receipts, pack-out records, and existing inventories, with human review before release.",
    tiers: [
      { name: "Inventory", eyebrow: "Core", description: "Build a clean, organized inventory from the evidence provided.", price: "Concept", unit: "scope based", features: ["Item identification", "Room + location organization", "Category + quantity", "Photo/evidence references"], extras: ["Exception flags", "Professional QA + release"] },
      { name: "Researched", eyebrow: "Expanded", description: "Add replacement research and stronger product detail.", price: "Concept", unit: "scope based", featured: true, features: ["Everything in Inventory", "Brand/model/specification when supportable", "Replacement-product research", "Like-kind-and-quality research"], extras: ["Uncertainty flags", "Source-linked research"] },
      { name: "Complex", eyebrow: "High density", description: "Higher-touch production for dense residential inventories and commercial FF&E.", price: "Concept", unit: "scope based", features: ["Everything in Researched", "Commercial FF&E organization", "High-volume evidence structuring", "Complex item research"], extras: ["Custom output structure", "Professional QA + release"] },
    ],
  },
  carrierMGA: {
    label: "Boundaries",
    kicker: "Operating Guardrails",
    title: "Do the production work. Stop before representation.",
    description: "The concept is intentionally designed around a clear handoff: organize, research, estimate, compare, document, and prepare—then leave negotiation, settlement authority, and representation to the appropriate party.",
    tiers: [
      { name: "Produce", eyebrow: "Inside the line", description: "Create and organize objective claim deliverables.", price: "Yes", unit: "production", features: ["Estimate production", "File assembly", "Evidence organization", "Contents production"], extras: ["Objective deliverables", "Professional QA"] },
      { name: "Research", eyebrow: "Inside the line", description: "Support the file with documented research and deficiency identification.", price: "Yes", unit: "support", features: ["Code research", "Manufacturer documentation", "Missing-item flags", "Scope-change support"], extras: ["Source-backed documentation", "No advocacy"] },
      { name: "Prepare", eyebrow: "The handoff", description: "Make the file ready for the person who owns the claim conversation.", price: "Yes", unit: "preparation", featured: true, features: ["Estimate comparison", "Discrepancy summary", "Supporting evidence package", "Negotiation preparation"], extras: ["Structured handoff", "Decision support"] },
      { name: "Represent", eyebrow: "Outside the line", description: "Activities intentionally excluded from this model.", price: "No", unit: "excluded", features: ["No claimant representation", "No carrier negotiation", "No settlement authority", "No percentage-of-recovery positioning"], extras: ["Clear operating boundary", "Appropriate-party handoff"] },
    ],
  },
};

const allPrograms = ["Estimate Production", "Claims-Ready File Production", "Supplemental & Scope Change Production", "Code & Manufacturer Documentation Research", "Contents & Inventory Production", "Estimate Comparison", "Documentation Gap Review", "Negotiation Preparation"];

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
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" /> Claim Support · Working Concept
        </div>
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">Claim Support Architecture</p>
        <h1 className="mx-auto mt-3 max-w-5xl font-display text-5xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-6xl lg:text-7xl">A practical claim-support model with a deliberate boundary.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">Do the production work that makes the file better. Prepare the claim conversation. Stop short of owning representation, negotiation, or settlement.</p>
        <div className="mx-auto mt-10 inline-grid grid-cols-2 rounded-[1.5rem] border border-zinc-200 bg-zinc-100 p-1.5 shadow-sm sm:grid-cols-4 sm:rounded-full" role="group" aria-label="Select claim support view">
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
        <div className={cn("grid items-stretch gap-5", content.tiers.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
          {content.tiers.map((tier) => <article key={tier.name} className={cn("relative flex min-h-[34rem] flex-col overflow-hidden rounded-[2rem] border bg-white p-7 shadow-[0_24px_70px_-42px_rgba(0,0,0,.35)]", content.tiers.length === 4 ? "sm:p-6" : "sm:p-8", tier.featured ? "border-zinc-950 ring-1 ring-zinc-950 lg:-translate-y-3" : "border-zinc-200")}>
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
        {content.addOns && <div className="mx-auto mt-12 max-w-6xl">
          <div className="mx-auto mb-6 max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Supporting capabilities</p><h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">Layer in only the support the file needs.</h3><p className="mt-3 text-sm leading-6 text-zinc-600">These capabilities can be applied independently based on the file, documentation available, and required handoff.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{content.addOns.map((addOn) => <div key={addOn.name} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_18px_45px_-38px_rgba(0,0,0,.45)]"><p className="text-sm font-semibold text-zinc-900">{addOn.name}</p><p className="mt-3 font-display text-2xl font-semibold tracking-tight text-brand-red">{addOn.price}</p><p className="mt-2 text-xs leading-5 text-zinc-500">{addOn.description}</p></div>)}</div>
        </div>}
        <p className="mt-7 text-center text-xs leading-5 text-zinc-500">Working principle: provide high-value production, documentation, research, comparison, and preparation while deliberately leaving representation, negotiation, and settlement responsibility with the appropriate party.</p>
      </Container>
    </section>

    <section className="border-y border-zinc-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Eight support capabilities</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">The value sits in the work around the claim.</h2><p className="mt-5 max-w-lg leading-7 text-zinc-600">Each capability can stand alone or combine into a stronger claims-ready file, creating useful support before the point where representation or negotiation begins.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{allPrograms.map((program, i) => <div key={program} className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-[#fafafa] p-4 transition hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50/40"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-xs font-bold text-white">0{i + 1}</span><span className="text-sm font-semibold text-zinc-800">{program}</span></div>)}</div>
        </div>
      </Container>
    </section>

    <section id="plan-builder" className="bg-zinc-950 py-16 text-white sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] p-8 sm:p-12 lg:p-14">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-light">Working thesis</p><h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">A stronger file creates value before negotiation ever starts.</h2><p className="mt-5 max-w-2xl leading-7 text-zinc-400">The opportunity is to define a repeatable set of claim-support services that improves documentation, estimating, research, and handoff while maintaining a clear operating boundary.</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Current selection</p><p className="mt-2 font-display text-2xl font-semibold">{content.label} Claim Support</p><p className="mt-2 text-sm leading-6 text-zinc-400">Defined production · structured documentation · clear handoff boundaries.</p></div>
          </div>
        </div>
      </Container>
    </section>
  </main>;
}
