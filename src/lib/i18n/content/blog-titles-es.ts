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
  "fire-damage-claim-documentation-guide":
    "Guía de documentación de reclamaciones por daños de fuego",
  "fire-damage-supplement-playbook-for-contractors":
    "Manual de suplementos por daños de fuego para contratistas",
  "smoke-and-soot-damage-documentation-guide":
    "Guía de documentación de daños por humo y hollín",
  "fire-damage-supplement-denial-recovery":
    "Recuperación ante denegación de suplementos por daños de fuego",
  "why-fire-damage-claims-get-underpaid":
    "Por qué las reclamaciones por daños de fuego reciben pagos insuficientes: errores de documentación de los contratistas",
  "smoke-damage-documentation-mistakes":
    "Errores de documentación de daños por humo: 10 fallos costosos que provocan pagos insuficientes en reclamaciones por incendio",
  "fire-claim-documentation-checklist":
    "Lista de verificación de documentación de reclamaciones por incendio: todo lo que los contratistas deben incluir antes de enviar un suplemento",
  "why-fire-damage-supplements-get-denied":
    "Por qué se rechazan los suplementos por daños de fuego: 12 errores de documentación y alcance que los contratistas pueden prevenir",
  "why-mold-insurance-claims-get-underpaid":
    "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes: 10 errores de documentación que los contratistas pueden evitar",
  "mold-documentation-mistakes":
    "10 errores de documentación de moho que cuestan dinero a los contratistas en reclamaciones de seguro",
};

export function getBlogTitleEs(slug: string, fallback: string): string {
  return BLOG_TITLES_ES[slug] ?? fallback;
}
