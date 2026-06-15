/** Spanish blog post titles for related-resource links on localized guide detail pages. */
export const BLOG_TITLES_ES: Record<string, string> = {
  "why-water-mitigation-claims-get-underpaid":
    "Por qué las reclamaciones de mitigación de agua reciben pagos insuficientes",
  "why-category-3-water-claims-get-underpaid":
    "Por qué las reclamaciones de agua categoría 3 reciben pagos insuficientes",
  "water-damage-mitigation-supplement-playbook":
    "Manual de suplementos de mitigación de daños por agua",
  "dry-log-documentation-guide-insurance-claims":
    "Guía de documentación de registros de secado para reclamaciones de seguros",
  "moisture-mapping-best-practices-insurance-claims":
    "Mejores prácticas de mapeo de humedad para reclamaciones de seguros",
  "moisture-mapping-mistakes-that-cost-contractors-money":
    "Errores de mapeo de humedad que cuestan dinero a los contratistas",
  "daily-monitoring-documentation-best-practices":
    "Mejores prácticas de documentación de monitoreo diario",
  "how-carriers-reduce-drying-days":
    "Cómo las aseguradoras reducen los días de secado",
  "equipment-charges-that-get-cut-from-water-claims":
    "Cargos de equipos que recortan en reclamaciones de agua (y cómo los contratistas los recuperan)",
};

export function getBlogTitleEs(slug: string, fallback: string): string {
  return BLOG_TITLES_ES[slug] ?? fallback;
}
