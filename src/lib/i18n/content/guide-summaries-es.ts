export type GuideSummary = {
  title: string;
  excerpt: string;
};

/** Spanish hub-card summaries keyed by `${category}/${slug}`. */
export const GUIDE_SUMMARIES_ES: Record<string, GuideSummary> = {
  "general-claims/commercial-insurance-claims-documentation-guide": {
    title:
      "Guía de documentación de reclamaciones de seguros comerciales para contratistas",
    excerpt:
      "Estándares fundamentales de documentación para reclamaciones de seguros comerciales: identificación de la propiedad, indexación multiárea, mejoras de inquilinos, consideraciones de código, apoyo a interrupción de negocio y paquetes finales de reclamación en multifamiliares, oficinas, retail, industrial, hospitalidad, educación, salud y uso mixto.",
  },
  "general-claims/commercial-insurance-supplement-playbook-for-contractors": {
    title:
      "Manual operativo de suplementos de seguros comerciales para contratistas",
    excerpt:
      "Manual operativo definitivo para suplementos de seguros comerciales: identificación de alcance insuficiente, validación de cantidades, protección temporal, condiciones generales, documentación de equipos, mano de obra y materiales, paquetes de evidencia, comunicación con la aseguradora, reinspección, ciclos múltiples y cierre de reclamaciones en propiedades comerciales y grandes pérdidas.",
  },
  "general-claims/multifamily-apartment-insurance-claims-guide": {
    title:
      "Guía de reclamaciones de seguros multifamiliares y de apartamentos para contratistas",
    excerpt:
      "Manual operativo para contratistas sobre documentación, gestión, estimación y suplementos de reclamaciones de seguros en complejos de apartamentos, vivienda multifamiliar, condominios y propiedades residenciales comerciales similares: indexación unidad por unidad, áreas comunes, coordinación con administradores de propiedad y paquetes indexados de reclamación.",
  },
  "general-claims/hoa-insurance-claims-guide": {
    title: "Guía de reclamaciones de seguros en HOAs para contratistas",
    excerpt:
      "Manual operativo para contratistas sobre documentación, gestión, estimación y suplementos de reclamaciones de seguros en HOAs, asociaciones de condominios, comunidades de townhomes y asociaciones comunitarias: gobernanza, pólizas maestras frente a pólizas de propietarios, elementos comunes, coordinación con juntas y administradores, y paquetes indexados de reclamación.",
  },
  "general-claims/industrial-warehouse-insurance-claims-guide": {
    title:
      "Guía de reclamaciones de seguros industriales y de almacenes para contratistas",
    excerpt:
      "Manual operativo para contratistas sobre documentación, gestión, estimación y suplementos de reclamaciones de seguros en almacenes, plantas de manufactura, edificios industriales, centros de distribución y propiedades logísticas: sistemas del edificio, equipos y maquinaria, estanterías de gran altura, zonas de inventario, muelles de carga, instalaciones ocupadas y paquetes indexados de reclamación.",
  },
  "general-claims/retail-office-insurance-claims-guide": {
    title:
      "Guía de reclamaciones de seguros comerciales de retail y oficinas para contratistas",
    excerpt:
      "Manual operativo para contratistas sobre documentación, gestión, estimación y suplementos de reclamaciones de seguros en centros comerciales, locales, centros de compras, edificios de oficinas, oficinas profesionales, propiedades de uso mixto e instalaciones comerciales multiinquilino: espacios de inquilinos, mejoras arrendaticias, áreas comunes, operaciones de negocios ocupados y paquetes indexados de reclamación.",
  },
  "general-claims/large-loss-commercial-insurance-claims-guide": {
    title:
      "Guía de reclamaciones de seguros comerciales de grandes pérdidas para contratistas",
    excerpt:
      "Manual operativo para contratistas sobre documentación, gestión, estimación y suplementos de grandes pérdidas comerciales: campuses multiedificio, restauración por fases, alcances complejos, coordinación de partes interesadas y paquetes indexados de reclamación en multifamiliares, HOA, retail, oficinas, industrial, almacenes, hospitalidad, institucionales y uso mixto.",
  },
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
  "general-claims/insurance-estimate-review-playbook-for-contractors": {
    title: "Playbook de revisión de estimados de seguros para contratistas",
    excerpt:
      "El playbook operativo definitivo para revisar estimados de seguros: desde recibir el estimado de la aseguradora hasta la revisión de estructura, comparación con documentación de campo, validación de alcance y cantidades, pases de código y condiciones generales, empaquetado de documentación, preparación de suplementos, comunicación con la aseguradora, apoyo a reinspección, revisión de revisiones y conciliación del acuerdo final.",
  },
  "general-claims/insurance-estimate-review-scope-validation-guide": {
    title:
      "Guía de revisión de estimados de seguros y validación de alcance para contratistas",
    excerpt:
      "Guía fundamental para evaluar estimados de aseguradoras frente a condiciones de campo documentadas: anatomía del estimado, validación de cantidades y alcance, partidas faltantes, código y protección temporal, equipo y mano de obra, documentación de respaldo, flujo de auditoría de alcance, preparación para reinspección y controles de calidad.",
  },
  "general-claims/quantity-validation-guide-for-contractors": {
    title: "Guía de validación de cantidades para contratistas",
    excerpt:
      "Guía operativa para validar cantidades de estimados de seguros frente a condiciones de campo: techado, interiores, agua, fuego y comercial; documentación de mediciones, fotografías y notas de campo; impactos de código; y listas de verificación de control de calidad para cantidades revisadas.",
  },
  "general-claims/scope-audit-guide-for-contractors": {
    title: "Guía de auditoría de alcance para contratistas",
    excerpt:
      "Guía operativa para auditar el alcance de estimados de seguros frente a condiciones de campo documentadas: trabajo faltante, demolición y reconstrucción incompletas, oficios omitidos, auditorías de techado, agua, fuego y moho, consideraciones comerciales, impactos de código, supuestos no respaldados y documentación que sustenta un alcance revisado.",
  },
  "general-claims/missing-line-item-documentation-guide-for-contractors": {
    title: "Guía de documentación de renglones faltantes para contratistas",
    excerpt:
      "Guía operativa para documentar trabajo omitido después de una auditoría de alcance: demolición, reconstrucción, mano de obra, materiales, detach/reset, acceso, secuencia de oficios, protección temporal, equipo y omisiones relacionadas con código — con mediciones, fotografías, notas de campo y anexos organizados para la revisión de suplementos del contratista.",
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
    title: "Lista de verificación del día de reinspección de techo",
    excerpt:
      "Lista de verificación en sitio para el día de reinspección de aseguradora: confirmar la visita, preparar evidencia, asignar roles, recorrer el techo con el ajustador y cerrar con documentación lista para suplemento en 24 horas.",
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
  "roofing-claims/roof-hail-damage-documentation-guide": {
    title: "Guía de documentación de daños por granizo en techo para contratistas",
    excerpt:
      "Aprenda cómo documentar daños por granizo en reclamaciones de techado: patrones de impacto, cuadrados de prueba, metales blandos, etiquetado de pendientes y evidencia de campo para revisión de reclamaciones por tormenta.",
  },
  "roofing-claims/roof-wind-damage-documentation-guide": {
    title: "Guía de documentación de daños por viento en techo para contratistas",
    excerpt:
      "Aprenda cómo documentar daños por viento en reclamaciones de techado: tejas hendidas, sellos levantados, patrones direccionales, evidencia colateral y documentación de campo para suplementos por tormenta.",
  },
  "roofing-claims/commercial-roofing-documentation-guide": {
    title: "Guía de documentación de techado comercial para contratistas",
    excerpt:
      "Aprenda cómo documentar reclamaciones de techado comercial: sistemas de membrana, estudios de humedad, muestreo por núcleo, desconexión de equipos, migración de agua interior y evidencia de campo para suplementos.",
  },
  "roofing-claims/hoa-roofing-claims-guide": {
    title: "Guía de reclamaciones de techado en HOAs para contratistas",
    excerpt:
      "Manual operativo para reclamaciones de seguro de techado en HOAs y condominios: propiedad compartida, documentación multi-edificio, comunicación con la junta, estimación y recuperación por suplementos.",
  },
  "roofing-claims/multi-building-roofing-claims-guide": {
    title: "Guía de reclamaciones de techado multi-edificio para contratistas",
    excerpt:
      "Manual operativo para documentar, estimar y gestionar reclamaciones de seguro de techado en complejos de apartamentos, campus comerciales y propiedades con múltiples estructuras.",
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
  "fire-damage/commercial-fire-claims-guide": {
    title: "Guía de reclamaciones comerciales por incendio",
    excerpt:
      "Manual operativo para contratistas sobre documentación, estimación, suplementación y recuperación de reclamaciones comerciales por incendio — oficinas, comercios, industria, hospitalidad, salud y propiedades multiinquilino con documentación de gran pérdida, coordinación con inquilinos y flujos de reconstrucción por fases.",
  },
  "fire-damage/fire-damage-supplement-playbook-for-contractors": {
    title: "Manual de suplementos por daños de fuego para contratistas",
    excerpt:
      "Manual operativo definitivo para suplementos por daños de fuego: revisión del estimado de la aseguradora, inspección del sitio, paquete de documentación, envío de suplementos, reinspección, respuesta a objeciones, coordinación comercial y liquidación final en reclamaciones por incendio.",
  },
  "fire-damage/fire-damage-documentation-guide": {
    title: "Guía de documentación de daños por fuego",
    excerpt:
      "Aprenda cómo documentar reclamaciones de seguro por daños de fuego residenciales y comerciales: inspecciones, evidencia estructural, migración de humo y hollín, contenidos, respaldo de estimación, suplementos y recuperación de reclamaciones.",
  },
  "fire-damage/fire-code-upgrade-documentation-guide": {
    title: "Guía de documentación de mejoras por código en incendios",
    excerpt:
      "Manual operativo para identificar, documentar, justificar y recuperar mejoras exigidas por código durante reclamaciones por incendio — ordenanza y ley, coordinación con AHJ, evidencia de permisos, organización en Xactimate y respaldo de suplementos.",
  },
  "fire-damage/smoke-soot-damage-documentation-guide": {
    title: "Guía de documentación de daños por humo y hollín",
    excerpt:
      "Estándar operativo para contratistas sobre documentación de contaminación por humo y hollín en reclamaciones por incendio: tipos de contaminación, flujos de inspección, evidencia de migración, alcance HVAC, respaldo de estimación, suplementos y recuperación de reclamaciones.",
  },
  "fire-damage/contents-inventory-documentation-guide": {
    title: "Guía de documentación de inventario de contenidos",
    excerpt:
      "Estándar operativo para contratistas sobre documentación de propiedad personal y contenidos comerciales en reclamaciones por incendio: inventario habitación por habitación, fotografía, respaldo de valoración, evidencia de limpieza versus reemplazo, documentación de estimación, suplementos y recuperación de reclamaciones.",
  },
  "fire-damage/pack-out-documentation-guide": {
    title: "Guía de documentación de pack-out",
    excerpt:
      "Estándar operativo para contratistas sobre documentación de operaciones de pack-out en reclamaciones por incendio: cadena de custodia, precisión de inventario, transporte, almacenamiento, coordinación de limpieza, entrega de regreso, respaldo de estimación, suplementos y expedientes de reclamación defendibles.",
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
  "mold/mold-supplement-playbook-for-contractors": {
    title: "Manual de suplementos por moho para contratistas",
    excerpt:
      "El manual operativo definitivo para contratistas sobre suplementos por moho — desde la revisión del estimado de la aseguradora hasta la investigación de la fuente de humedad, documentación de daños y remediación, empaquetado de protocolo y PRV, organización del estimado, comunicación con la aseguradora, reinspección, coordinación comercial y liquidación final en reclamaciones de seguros por moho.",
  },
  "mold/commercial-mold-claims-guide": {
    title: "Guía de reclamaciones comerciales por moho para contratistas",
    excerpt:
      "Manual operativo para contratistas sobre documentación, organización, estimación y recuperación de reclamaciones comerciales por moho — indexación multiunidad, investigación de fuente de humedad, evidencia de remediación por fases, coordinación de protocolo y PRV, y paquetes para aseguradoras en pérdidas comerciales grandes.",
  },
  "mold/mold-damage-documentation-guide": {
    title: "Guía de documentación de daños por moho para contratistas",
    excerpt:
      "Estándar operativo para contratistas que documentan reclamaciones de seguros por daños de moho residenciales y comerciales: evidencia de fuente de humedad, mapeo de crecimiento, investigación de moho oculto, lecturas de apoyo y recuperación de reclamaciones.",
  },
  "mold/mold-remediation-documentation-guide": {
    title: "Guía de documentación de remediación de moho para contratistas",
    excerpt:
      "Estándar operativo para documentar trabajo de remediación de moho en reclamaciones de seguros: condiciones iniciales, contención, remoción, limpieza, registros de equipos, contenidos y paquetes de envío listos para aseguradoras.",
  },
  "mold/post-remediation-verification-documentation-guide": {
    title: "Guía de documentación de verificación post-remediación (PRV) para contratistas",
    excerpt:
      "Estándar operativo para documentar verificación post-remediación y cierre de proyectos de moho en reclamaciones de seguros: registros de finalización del alcance, documentación de autorización, lecturas finales de humedad, fotos de cierre, cierre de registros de equipos, reconciliación de contenidos y paquetes de cierre listos para aseguradoras.",
  },
  "mold/mold-protocol-documentation-guide": {
    title: "Guía de documentación de protocolos de moho para contratistas",
    excerpt:
      "Estándar operativo para documentar protocolos de remediación de moho en reclamaciones de seguros: interpretar el alcance del protocolo, alinear condiciones de campo, documentar cumplimiento de contención y alcance, registrar desviaciones justificadas, traducir requisitos a estimados y empaquetar expedientes respaldados por protocolo.",
  },
  "mold/indoor-air-quality-testing-documentation-guide": {
    title:
      "Guía de documentación de calidad del aire interior (IAQ) y pruebas para contratistas",
    excerpt:
      "Estándar operativo para documentar pruebas de calidad del aire interior, pruebas de autorización y evidencia de laboratorio en reclamaciones de seguros por moho: registros de muestreo pre y post-remediación, cadena de documentación, indexación de informes de laboratorio, alineación con protocolos, coordinación de PRV y paquetes de pruebas listos para aseguradoras.",
  },
};
