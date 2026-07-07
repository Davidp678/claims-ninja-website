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
  "documentation-gaps-that-trigger-water-claim-denials":
    "Brechas de documentación que provocan denegaciones de reclamaciones por agua",
  "water-damage-documentation-for-apartment-complexes":
    "Documentación de daños por agua en complejos de apartamentos: guía para contratistas",
  "common-documentation-mistakes-on-commercial-water-losses":
    "Errores comunes de documentación en pérdidas comerciales por agua",
  "large-loss-water-mitigation-documentation-best-practices":
    "Mejores prácticas de documentación de mitigación de agua en pérdidas de gran magnitud",
  "multifamily-water-claims-that-get-underpaid":
    "Reclamaciones de agua multifamiliar que se pagan por debajo del valor",
  "roofing-supplement-playbook":
    "Manual de suplementos de techado para contratistas",
  "what-is-a-roof-supplement": "¿Qué es un suplemento de techo?",
  "hail-damage-roof-claims-documentation-supplement":
    "Reclamaciones de techo por granizo: documentación y suplementos",
  "wind-damage-roof-claims-what-carriers-miss":
    "Reclamaciones de techo por viento: lo que las aseguradoras pasan por alto",
  "roof-matching-vs-repairability-when-to-supplement":
    "Coincidencia de techo vs reparabilidad: cuándo suplementar",
};

export function getBlogTitleEs(slug: string, fallback: string): string {
  return BLOG_TITLES_ES[slug] ?? fallback;
}
