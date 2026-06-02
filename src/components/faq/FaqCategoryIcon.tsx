import type { FaqCategoryId } from "@/lib/faq-page";
import { cn } from "@/lib/cn";

export function FaqCategoryIcon({
  id,
  className,
}: {
  id: FaqCategoryId;
  className?: string;
}) {
  const base = cn("h-5 w-5 shrink-0", className);

  switch (id) {
    case "getting_started":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4M12 17v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M3 12h4M17 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "pricing":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      );
    case "insurance_supplements":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
          <path strokeLinecap="round" d="M14 2v6h6M12 18v-6M9 15h6" />
        </svg>
      );
    case "roofing_claims":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-8 9 8M5 10v10h14V10" />
          <path strokeLinecap="round" d="M9 20v-6h6v6" />
        </svg>
      );
    case "water_damage_claims":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" />
        </svg>
      );
    case "fire_damage_claims":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c4-4 6-7.5 6-11a6 6 0 00-12 0c0 3.5 2 7 6 11z" />
          <path strokeLinecap="round" d="M12 22V12" />
        </svg>
      );
    case "mold_claims":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" d="M8 14c-2 1-3 3-3 5h14c0-2-1-4-3-5" />
          <path strokeLinecap="round" d="M6 19h12" />
        </svg>
      );
    case "contents_restoration":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <path strokeLinecap="round" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
      );
    case "carrier_negotiations":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "documentation":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path strokeLinecap="round" d="M7 9h10M7 13h6" />
        </svg>
      );
    case "platform_security":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v6c0 3.5-2.5 6.5-7 8-4.5-1.5-7-4.5-7-8V7l7-4z" />
          <path strokeLinecap="round" d="M9 12l2 2 4-4" />
        </svg>
      );
    case "ai_claim_analysis":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L8 21l-1.5-4M14.25 17L16 21l1.5-4M12 3v2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11a4 4 0 118 0 4 4 0 01-8 0z" />
          <path strokeLinecap="round" d="M4 19h16" />
        </svg>
      );
  }
}
