"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import type { ClaimNote } from "@/lib/dashboard/types";

const textareaClass =
  "mt-2 block w-full rounded-lg border border-white/22 bg-brand-black/60 px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

type ClaimNotesProps = {
  leadId: string;
  initialNotes: ClaimNote[];
};

export function ClaimNotes({ leadId, initialNotes }: ClaimNotesProps) {
  const router = useRouter();
  const [noteText, setNoteText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = noteText.trim();
    if (!trimmed) return;

    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch(`/api/dashboard/leads/${leadId}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ noteText: trimmed }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Failed to save note");
      }

      setNoteText("");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save note");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl border border-white/12 bg-brand-surface/60 p-6 ring-1 ring-white/5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
        Internal notes
      </p>

      <form onSubmit={handleSubmit} className="mt-4">
        <label htmlFor="note-text" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
          Add note
        </label>
        <textarea
          id="note-text"
          rows={3}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          className={textareaClass}
          placeholder="Ops context, follow-up, carrier updates…"
        />
        {error && (
          <p className="mt-2 text-xs text-red-300" role="alert">
            {error}
          </p>
        )}
        <div className="mt-3">
          <Button type="submit" size="sm" disabled={isSubmitting || !noteText.trim()}>
            {isSubmitting ? "Saving…" : "Save note"}
          </Button>
        </div>
      </form>

      <ul className="mt-8 space-y-4">
        {initialNotes.length === 0 ? (
          <li className="text-sm text-zinc-400">No notes yet.</li>
        ) : (
          initialNotes.map((note) => (
            <li
              key={note.id}
              className="rounded-lg border border-white/10 bg-brand-black/40 px-4 py-3"
            >
              <p className="text-sm leading-relaxed text-zinc-200">{note.noteText}</p>
              <p className="mt-2 text-xs text-zinc-400">
                {dateFmt.format(new Date(note.createdAt))}
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
