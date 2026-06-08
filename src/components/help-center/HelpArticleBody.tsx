"use client";

import { useCallback } from "react";

import { cn } from "@/lib/cn";
import type { HelpBlock } from "@/lib/help-center/types";

const calloutStyles = {
  info: "border-sky-500/30 bg-sky-500/10 text-sky-100",
  critical: "border-red-500/40 bg-red-500/10 text-red-100",
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-100",
  warning: "border-amber-500/40 bg-amber-500/10 text-amber-100",
} as const;

function LoomEmbed({ url, title }: { url: string; title: string }) {
  const embedUrl = url.replace("/share/", "/embed/");
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
      <div className="relative aspect-video w-full">
        <iframe
          src={embedUrl}
          title={title}
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}

function CopyPromptButton({ text }: { text: string }) {
  const copy = useCallback(() => {
    void navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
    >
      Copy prompt
    </button>
  );
}

export function HelpArticleBody({ blocks }: { blocks: readonly HelpBlock[] }) {
  return (
    <article className="prose prose-invert max-w-none space-y-5 prose-headings:font-display prose-headings:tracking-tight prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-white">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="text-base leading-relaxed text-zinc-300">
                {block.text}
              </p>
            );
          case "heading": {
            const Tag = block.level === 2 ? "h2" : block.level === 3 ? "h3" : "h4";
            return (
              <Tag
                key={i}
                className={cn(
                  "font-display font-semibold text-white",
                  block.level === 2 && "mt-8 text-2xl",
                  block.level === 3 && "mt-6 text-xl",
                  block.level === 4 && "mt-4 text-lg",
                )}
              >
                {block.text}
              </Tag>
            );
          }
          case "list":
            return block.ordered ? (
              <ol key={i} className="list-decimal space-y-2 pl-5 text-zinc-300">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="list-disc space-y-2 pl-5 text-zinc-300">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div
                key={i}
                className={cn(
                  "rounded-xl border px-4 py-3 text-sm leading-relaxed",
                  calloutStyles[block.variant],
                )}
              >
                {block.text}
              </div>
            );
          case "video":
            return (
              <div key={i} className="space-y-2">
                <p className="text-sm font-medium text-zinc-400">
                  {block.title}
                  {block.duration ? ` · ${block.duration}` : ""}
                </p>
                <LoomEmbed url={block.url} title={block.title} />
              </div>
            );
          case "link":
            return (
              <p key={i}>
                <a
                  href={block.url}
                  target={block.url.startsWith("http") ? "_blank" : undefined}
                  rel={block.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-medium text-brand-red-light underline decoration-brand-red-light/40 underline-offset-4 transition hover:decoration-brand-red-light"
                >
                  {block.label}
                </a>
              </p>
            );
          case "checklist":
            return (
              <ul key={i} className="space-y-2">
                {block.items.map((item) => (
                  <li key={item.label} className="flex gap-2 text-zinc-300">
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs",
                        item.required
                          ? "border-brand-red-light/50 text-brand-red-light"
                          : "border-white/20 text-zinc-500",
                      )}
                      aria-hidden
                    >
                      {item.required ? "!" : "·"}
                    </span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            );
          case "prompt":
            return (
              <div
                key={i}
                className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{block.title}</p>
                  <CopyPromptButton text={block.text} />
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap font-sans text-sm leading-relaxed text-zinc-400">
                  {block.text}
                </pre>
              </div>
            );
          case "divider":
            return <hr key={i} className="border-white/10" />;
          default:
            return null;
        }
      })}
    </article>
  );
}
