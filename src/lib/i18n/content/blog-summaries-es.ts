export type BlogSummary = {
  title: string;
  excerpt: string;
};

/** Spanish hub-card summaries keyed by blog slug. */
export const BLOG_SUMMARIES_ES: Record<string, BlogSummary> = {
  "smoke-damage-documentation-mistakes": {
    title:
      "Errores de documentación de daños por humo: 10 fallos costosos que provocan pagos insuficientes en reclamaciones por incendio",
    excerpt:
      "Errores de documentación de daños por humo que provocan pagos insuficientes: tratar la contaminación como cosmética, evidencia débil de olor y HVAC, fotografía incompleta, áreas ocultas omitidas, registros deficientes de contenidos y narrativas de suplemento débiles para contratistas de restauración.",
  },
};

export function getBlogSummaryEs(
  slug: string,
  fallback: { title: string; excerpt: string },
): BlogSummary {
  return BLOG_SUMMARIES_ES[slug] ?? fallback;
}
