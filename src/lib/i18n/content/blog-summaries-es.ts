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
  "fire-claim-documentation-checklist": {
    title:
      "Lista de verificación de documentación de reclamaciones por incendio: todo lo que los contratistas deben incluir antes de enviar un suplemento",
    excerpt:
      "Lista de verificación de documentación de reclamaciones por incendio para envío de suplementos: fotos de propiedad, evidencia de humo y hollín, descubrimientos estructurales, inventario de contenidos, cadena de custodia de pack-out, respaldo de actualizaciones de código, narrativas Xactimate y revisión previa al envío de 20 puntos para equipos de restauración.",
  },
  "why-fire-damage-supplements-get-denied": {
    title:
      "Por qué se rechazan los suplementos por daños de fuego: 12 errores de documentación y alcance que los contratistas pueden prevenir",
    excerpt:
      "Por qué se rechazan los suplementos por daños de fuego: 12 errores evitables de documentación, estimación y flujo de trabajo en fotos, humo, daños ocultos, contenidos, pack-out, actualizaciones de código y organización Xactimate — y cómo los contratistas construyen paquetes de suplemento listos para revisión.",
  },
  "why-mold-insurance-claims-get-underpaid": {
    title:
      "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes: 10 errores de documentación que los contratistas pueden evitar",
    excerpt:
      "Errores de documentación en reclamaciones de moho que provocan pagos insuficientes: evidencia débil de fuente de humedad, investigación incompleta de moho oculto, conjuntos fotográficos deficientes, lecturas de humedad inadecuadas, registros escasos de remediación, cierre PRV ausente y paquetes de suplemento desorganizados para contratistas de restauración.",
  },
};

export function getBlogSummaryEs(
  slug: string,
  fallback: { title: string; excerpt: string },
): BlogSummary {
  return BLOG_SUMMARIES_ES[slug] ?? fallback;
}
