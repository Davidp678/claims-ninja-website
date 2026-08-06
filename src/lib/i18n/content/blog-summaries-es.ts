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
  "mold-documentation-mistakes": {
    title:
      "10 errores de documentación de moho que cuestan dinero a los contratistas en reclamaciones de seguro",
    excerpt:
      "10 errores de documentación de moho que cuestan dinero a los contratistas: evidencia ausente de fuente de humedad, conjuntos fotográficos deficientes, lecturas omitidas, moho oculto sin documentar, registros débiles de remediación y PRV, desviaciones de protocolo, archivos comerciales desorganizados, narrativas de estimación débiles y envío prematuro del paquete.",
  },
  "mold-claim-documentation-checklist": {
    title:
      "Lista de verificación de documentación de reclamaciones por moho: todo lo que los contratistas deben capturar antes de enviar",
    excerpt:
      "Lista de verificación de documentación de reclamaciones por moho para suplementos de seguro: preparación previa, evidencia de fuente de humedad, fotos iniciales, mapeo de humedad, contención, equipos, registros diarios, progreso de secado y remediación, cierre PRV y paquete final de envío para equipos de restauración.",
  },
  "why-mold-supplements-get-denied": {
    title:
      "Por qué se deniegan los suplementos por moho: brechas de documentación que reducen las tasas de aprobación",
    excerpt:
      "Por qué se deniegan los suplementos por moho: evidencia ausente de fuente de humedad, fotos débiles, registros de protocolo y contención ausentes, remediación y cierre PRV/IAQ sin respaldo, cargos de equipo sin registros, estimados desorganizados y errores de comunicación con la aseguradora — y cómo los contratistas mejoran las tasas de aprobación.",
  },
  "why-commercial-insurance-claims-get-underpaid": {
    title:
      "Por qué las reclamaciones de seguro comercial reciben pagos insuficientes",
    excerpt:
      "Por qué las reclamaciones de seguro de propiedad comercial reciben pagos insuficientes: documentación incompleta del edificio, validación de cantidades ausente, fotos débiles, oportunidades de código y ordenanza omitidas, mejoras de inquilinos, sistemas compartidos y estrategias prácticas de documentación para contratistas de restauración.",
  },
  "commercial-claims-documentation-checklist": {
    title:
      "Lista de verificación de documentación de reclamaciones comerciales para contratistas",
    excerpt:
      "Lista de verificación de documentación de reclamaciones comerciales para contratistas: preparación previa, registros de edificio y ocupación, evidencia de daños y mitigación, índices multiárea, documentación MEP y TI, progreso diario, mejoras de código y paquete final de reclamación para equipos de restauración comercial.",
  },
  "five-red-flags-that-an-insurance-estimate-is-missing-scope": {
    title:
      "Cinco señales de alerta de que un estimado de seguro tiene alcance faltante",
    excerpt:
      "Cinco señales de alerta de alcance faltante en estimados de seguros: condiciones de campo que exceden el alcance documentado, coordinación de oficios ausente, cantidades inconsistentes, documentación desalinhada y trabajo requerido ausente del estimado — más qué deben hacer los contratistas a continuación.",
  },
  "how-contractors-find-quantity-errors-in-insurance-estimates": {
    title:
      "Cómo los contratistas encuentran errores de cantidad en estimados de seguros",
    excerpt:
      "Cómo los contratistas encuentran errores de cantidad en estimados de seguros: por qué las cantidades no coinciden con las condiciones de campo, cómo comparar mediciones y documentación con los renglones de la aseguradora, dónde aparecen las discrepancias y cuándo las diferencias de cantidad justifican una revisión estructurada.",
  },
};

export function getBlogSummaryEs(
  slug: string,
  fallback: { title: string; excerpt: string },
): BlogSummary {
  return BLOG_SUMMARIES_ES[slug] ?? fallback;
}
