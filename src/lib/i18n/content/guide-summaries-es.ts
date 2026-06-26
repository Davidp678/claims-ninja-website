export type GuideSummary = {
  title: string;
  excerpt: string;
};

/** Spanish hub-card summaries keyed by `${category}/${slug}`. */
export const GUIDE_SUMMARIES_ES: Record<string, GuideSummary> = {
  "general-claims/first-48-hours-checklist": {
    title: "Lista de verificación: primeras 48 horas tras el estimado de la aseguradora",
    excerpt:
      "Lista de admisión hora por hora para las primeras 48 horas tras recibir un estimado de la aseguradora: catalogar el expediente, validar el alcance frente a las condiciones de campo, asignar responsables y abrir brechas de suplemento antes de que la producción absorba trabajo no pagado.",
  },
  "general-claims/claim-file-audit-guide": {
    title: "Flujo de trabajo de auditoría de expediente de reclamación",
    excerpt:
      "Flujo de oficina para auditar un expediente de reclamación de seguros antes del envío del suplemento: verificar la documentación, la alineación del estimado, los requisitos de la aseguradora y la preparación para aprobación.",
  },
  "general-claims/supplement-submission-guide": {
    title: "Flujo de trabajo de envío de suplementos",
    excerpt:
      "Flujo de extremo a extremo para enviar un suplemento de seguros: armado del paquete, enrutamiento a la aseguradora, cadencia de seguimiento y respuesta a denegaciones sin dañar la credibilidad del expediente.",
  },
  "general-claims/carrier-estimate-review-guide": {
    title: "Flujo de trabajo de revisión de estimados de aseguradora",
    excerpt:
      "Flujo sistemático para revisar estimados Xactimate de aseguradoras: validación de la lista de habitaciones, análisis de brechas en partidas, verificación de cantidades y enrutamiento de suplementos antes de que la producción se comprometa con un alcance insuficiente.",
  },
  "general-claims/op-qualification-guide": {
    title: "Estándar de documentación para calificación de O&P",
    excerpt:
      "Estándar de documentación para calificar gastos generales y beneficio (O&P) en reclamaciones de seguros: cuándo aplica el O&P, qué evidencia esperan las aseguradoras y cómo incluirlo en suplementos sin denegación aislada.",
  },
  "general-claims/documentation-standards-guide": {
    title: "Estándares de documentación de reclamaciones",
    excerpt:
      "Estándares de documentación para toda la empresa en reclamaciones de seguros: qué capturar, cuándo capturarlo, cómo etiquetar y almacenarlo, y cómo la disciplina diaria mejora las tasas de aprobación de suplementos.",
  },
  "general-claims/photo-documentation-standards-guide": {
    title: "Procedimiento de campo para documentación fotográfica",
    excerpt:
      "Procedimiento de campo para documentación fotográfica de reclamaciones de seguros: lista de tomas, convenciones de etiquetado, secuencia de general a detalle y requisitos de carga que resisten la revisión de suplementos.",
  },
  "roofing-claims/roofing-supplement-checklist": {
    title: "Lista de verificación de suplementos de techado",
    excerpt:
      "Lista de verificación previa al envío para suplementos de techado: conciliar mediciones, verificar partidas de accesorios, confirmar documentación y empaquetar una revisión de estimado lista para la aseguradora.",
  },
  "roofing-claims/roofing-documentation-guide": {
    title: "Estándar de documentación de reclamaciones de techado",
    excerpt:
      "Estándares mínimos de fotos, mediciones y narrativa para expedientes de techado: desde antes del desmontaje hasta la instalación de la capa seca y la instalación final, diseñados para la aprobación de suplementos.",
  },
  "roofing-claims/reinspection-preparation-guide": {
    title: "Preparación para reinspección de techo",
    excerpt:
      "Flujo para preparar reinspecciones de aseguradora: confirmar el alcance en el techo, preparar evidencia, asignar roles y convertir la visita en documentación lista para suplemento.",
  },
  "roofing-claims/code-upgrade-documentation-guide": {
    title: "Documentación de mejoras por código en techado",
    excerpt:
      "Documente mejoras de techado impulsadas por código con citas de jurisdicción, registros de permisos y evidencia de desmontaje, sin argumentos genéricos que provoquen denegaciones.",
  },
  "roofing-claims/steep-high-documentation-guide": {
    title: "Documentación de techos empinados y de gran altura",
    excerpt:
      "Procedimiento de campo para documentar trabajo en pendientes pronunciadas y acceso en altura: verificación de inclinación, evidencia de seguridad y partidas que las aseguradoras omiten en estimados revisados en escritorio.",
  },
  "roofing-claims/roof-measurement-documentation-guide": {
    title: "Documentación de mediciones de techo",
    excerpt:
      "Procedimiento de campo para solicitar, verificar y archivar informes de medición de techo, y conciliarlos con croquis de aseguradora para argumentos de cantidad listos para suplemento.",
  },
  "roofing-claims/roof-matching-documentation-guide": {
    title: "Guía de documentación de coincidencia de techo para contratistas",
    excerpt:
      "Aprenda cómo documentar problemas de coincidencia de techo con fotos, identificación de material, investigación de disponibilidad, notas de reparabilidad y respaldo de alcance para reclamaciones de techado.",
  },
  "roofing-claims/roof-repairability-documentation-guide": {
    title: "Guía de documentación de reparabilidad de techo para contratistas",
    excerpt:
      "Aprenda cómo documentar la reparabilidad del techo con resultados de pruebas de fragilidad, condición del material, observaciones de daños colaterales, orientación del fabricante y documentación de campo que respalde la revisión de reclamaciones.",
  },
  "roofing-claims/roof-reinspection-guide": {
    title: "Guía de reinspección de techo para contratistas",
    excerpt:
      "Aprenda cuándo solicitar una reinspección de techo, qué documentación preparar, cómo presentar daños adicionales y cómo los contratistas pueden respaldar una revisión precisa de reclamaciones de techado.",
  },
  "water-damage/mitigation-intake-checklist": {
    title: "Lista de verificación de admisión de mitigación de agua",
    excerpt:
      "Lista de admisión lista para campo en pérdidas por agua: control de la fuente, captura de categoría/clase, línea base de humedad, disposición de equipos y apertura del expediente antes de iniciar el secado.",
  },
  "water-damage/dry-log-collection-guide": {
    title: "Procedimiento de campo para recolección de registros de secado",
    excerpt:
      "Procedimiento paso a paso de registro de secado para técnicos de mitigación: captura diaria de lecturas, filas de equipos, condiciones ambientales y estándares de calidad que las aseguradoras esperan en revisión de escritorio.",
  },
  "water-damage/moisture-mapping-guide": {
    title: "Procedimiento de campo para mapeo de humedad",
    excerpt:
      "Procedimiento de mapeo de humedad en admisión: colocación de puntos de lectura, documentación de límites, actualización del mapa ante cambios de alcance e integración con registros de secado y croquis de aseguradora.",
  },
  "water-damage/equipment-documentation-guide": {
    title: "Procedimiento de documentación de equipos de mitigación",
    excerpt:
      "Documente ventiladores, deshumidificadores y equipos especializados para revisión de aseguradora: fotos de ubicación, registros de utilización, seguimiento de cambios y conciliación de facturación.",
  },
  "water-damage/daily-monitoring-guide": {
    title: "Lista de verificación de monitoreo diario",
    excerpt:
      "Lista para visitas diarias de monitoreo en pérdidas por agua: documentación de visita, captura de lecturas, verificación de equipos y alineación con partidas de monitoreo facturadas.",
  },
  "water-damage/category-class-documentation-guide": {
    title: "Estándar de documentación de categoría y clase",
    excerpt:
      "Estándar de documentación para categoría y clase de agua según IICRC: criterios de clasificación en campo, requisitos de evidencia, alineación de partidas y expectativas de revisión de aseguradora.",
  },
  "water-damage/contents-manipulation-documentation-guide": {
    title: "Procedimiento de documentación de manipulación de contenidos",
    excerpt:
      "Procedimiento de campo para documentar manipulación de contenidos en pérdidas por agua: alcance de retiro, protección, respaldo de facturación de reinstalación y estándares fotográficos que esperan las aseguradoras.",
  },
  "water-damage/category-3-water-damage-documentation-guide": {
    title: "Guía de documentación de daños por agua categoría 3",
    excerpt:
      "Aprenda cómo los contratistas de restauración deben documentar pérdidas de agua categoría 3, incluyendo mapas de humedad, registros de secado, uso de equipos, alcance de demolición, fotos, monitoreo diario y respaldo de reclamación.",
  },
  "water-damage/commercial-water-loss-documentation-guide": {
    title: "Guía de documentación de pérdidas comerciales por agua",
    excerpt:
      "Aprenda cómo documentar pérdidas comerciales por agua, proyectos multifamiliar, pérdidas en apartamentos, propiedades comerciales y trabajos de mitigación de grandes pérdidas para respaldar la recuperación de seguros y el éxito de la reclamación.",
  },
  "water-damage/water-mitigation-invoice-defense-guide": {
    title: "Guía de defensa de facturas de mitigación de agua para contratistas",
    excerpt:
      "Aprenda a defender facturas de mitigación de agua con documentación, mapas de humedad, registros de secado, registros de monitoreo, seguimiento de equipos y estrategias de validación de alcance que respaldan la recuperación completa de la reclamación.",
  },
  "water-damage/class-4-drying-documentation-guide": {
    title: "Guía de documentación de secado clase 4 para contratistas",
    excerpt:
      "Aprenda a documentar el secado de daños por agua clase 4 usando mapeo de humedad, monitoreo diario, registros de equipos de secado especializados y estrategias de documentación que respaldan la recuperación completa de la reclamación.",
  },
  "water-damage/water-damage-reinspection-guide": {
    title: "Guía de reinspección de daños por agua para contratistas",
    excerpt:
      "Aprenda cuándo solicitar una reinspección de daños por agua, qué documentación preparar, cómo presentar daños adicionales y cómo los contratistas pueden respaldar una revisión precisa de la reclamación.",
  },
  "fire-damage/fire-claim-intake-guide": {
    title: "Lista de verificación de admisión de reclamaciones por incendio",
    excerpt:
      "Lista de admisión lista para campo en reclamaciones por incendio: asegurar el sitio, capturar evidencia de origen y migración, marcar alcance de HVAC y contenidos, y abrir un expediente listo para suplemento antes de que la producción fije supuestos de la aseguradora.",
  },
  "fire-damage/smoke-documentation-guide": {
    title: "Procedimiento de documentación de humo y hollín",
    excerpt:
      "Procedimiento de campo para evidencia de humo y hollín: tipos de contaminación, narrativa de ruta de migración, fotos de sustrato, resultados de limpieza de prueba y archivos indexados por habitación que la aseguradora puede mapear a croquis.",
  },
  "fire-damage/hvac-contamination-guide": {
    title: "Procedimiento de documentación de contaminación HVAC",
    excerpt:
      "Procedimiento de campo para inspección y documentación HVAC en reclamaciones por incendio: estado del sistema, evidencia de rejillas y ductos, fotos de componentes, informes de especialistas y diagramas de alcance parcial del sistema.",
  },
  "fire-damage/odor-documentation-guide": {
    title: "Procedimiento de documentación de mitigación de olores",
    excerpt:
      "Procedimiento de campo para evaluación y documentación de tratamiento de olores por incendio: registros previos al tratamiento, fotos de eliminación de fuente, ubicación de equipos, registros de duración y verificación posterior al tratamiento.",
  },
  "fire-damage/contents-documentation-guide": {
    title: "Procedimiento de documentación de contenidos",
    excerpt:
      "Procedimiento de campo para inventarios de contenidos por incendio, cadena de custodia de retiro, decisiones de recuperabilidad y prueba fotográfica que vincula líneas de limpieza, almacenamiento y reemplazo con evidencia por artículo.",
  },
  "fire-damage/structural-stabilization-documentation-guide": {
    title: "Procedimiento de documentación de estabilización estructural",
    excerpt:
      "Procedimiento de campo para estabilización estructural de emergencia en reclamaciones por incendio: apuntalamiento, arriostramiento, protección temporal, fotos de estructura antes de demolición y documentación de hallazgos durante el desmontaje.",
  },
  "exterior-restoration/siding-envelope-documentation-guide": {
    title: "Procedimiento de documentación de revestimiento y envolvente",
    excerpt:
      "Procedimiento de campo para documentación de revestimiento exterior y envolvente del edificio: fotos de elevaciones, mapeo de daños, evidencia de flashing y molduras, barreras de humedad y respaldo de mediciones para alcance exterior listo para suplemento.",
  },
  "exterior-restoration/window-door-documentation-guide": {
    title: "Procedimiento de documentación de ventanas y puertas",
    excerpt:
      "Procedimiento de campo para documentación de reemplazo de ventanas y puertas: mediciones de unidades, fotos de daños, integración de flashing y molduras, notas de código y egreso, y alineación de estimado que las aseguradoras aprueban.",
  },
};
