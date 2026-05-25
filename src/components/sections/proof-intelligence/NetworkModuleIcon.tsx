import type { NetworkModuleId } from "@/lib/homepage-proof-intelligence";
import { cn } from "@/lib/cn";

export function NetworkModuleIcon({
  id,
  className,
}: {
  id: NetworkModuleId;
  className?: string;
}) {
  const base = cn("h-4 w-4 shrink-0", className);

  switch (id) {
    case "ai_intelligence":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L8 21l-1.5-4M14.25 17L16 21l1.5-4M12 3v2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11a4 4 0 118 0 4 4 0 01-8 0z" />
          <path strokeLinecap="round" d="M4 19h16" />
        </svg>
      );
    case "supplement_team":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "pa_support":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v6c0 3.5-2.5 6.5-7 8-4.5-1.5-7-4.5-7-8V7l7-4z" />
          <path strokeLinecap="round" d="M9 12l2 2 4-4" />
        </svg>
      );
    case "client_portal":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path strokeLinecap="round" d="M3 9h18M8 4v5M16 4v5" />
        </svg>
      );
    case "claim_coordination":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h6" />
          <path strokeLinecap="round" d="M15 15l4 4m0-4l-4 4" />
        </svg>
      );
    case "estimate_delivery":
      return (
        <svg aria-hidden viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M12 7v5l3 2" />
        </svg>
      );
  }
}
