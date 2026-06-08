"use client";

import { cn } from "@/lib/cn";
import type { InternalRole } from "@/lib/help-center/types";

const ROLES: { id: InternalRole; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cm", label: "CM" },
  { id: "pa", label: "PA" },
  { id: "appraiser", label: "Appraiser" },
  { id: "tl", label: "TL" },
  { id: "exec", label: "Exec" },
];

export function HelpRoleSelector({
  role,
  onRoleChange,
}: {
  role: InternalRole;
  onRoleChange: (role: InternalRole) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {ROLES.map((r) => (
        <button
          key={r.id}
          type="button"
          onClick={() => onRoleChange(r.id)}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium transition",
            role === r.id
              ? "bg-brand-red-light/20 text-brand-red-light ring-1 ring-brand-red-light/40"
              : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200",
          )}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
