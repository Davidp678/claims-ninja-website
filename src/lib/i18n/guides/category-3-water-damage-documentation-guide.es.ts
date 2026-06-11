import { defineGuide } from "@/lib/guides/guide-builder";

export const CATEGORY_3_WATER_DAMAGE_DOCUMENTATION_GUIDE_ES = defineGuide({
  slug: "category-3-water-damage-documentation-guide",
  title: "Guía de documentación de daños por agua categoría 3",
  excerpt:
    "Aprenda cómo los contratistas de restauración deben documentar pérdidas de agua categoría 3, incluyendo mapas de humedad, registros de secado, uso de equipos, alcance de demolición, fotos, monitoreo diario y respaldo de reclamación.",
  category: "water-damage" as const,
  guideType: "documentation-standard",
  recommended: true,
  roles: ["field", "office", "project-manager"],
  claimPhase: "documentation",
  tags: [
    "Daños por agua categoría 3",
    "documentación de mitigación de agua",
    "reclamaciones por daños por agua",
    "registros de secado",
    "mapas de humedad",
    "defensa de factura de mitigación",
    "contratistas de restauración",
  ],
  publishedAt: "2026-06-08",
  updatedAt: "2026-06-11",
  estimatedMinutes: 18,
  seoTitle: "Guía de documentación de daños por agua categoría 3",
  seoDescription:
    "Conozca la documentación necesaria para respaldar reclamaciones por daños por agua categoría 3, justificar facturas de mitigación, defender cargos de secado y mejorar la recuperación de la reclamación.",
  relatedGuideSlugs: [
    "category-class-documentation-guide",
    "mitigation-intake-checklist",
    "moisture-mapping-guide",
    "dry-log-collection-guide",
    "equipment-documentation-guide",
    "daily-monitoring-guide",
  ],
  relatedBlogSlugs: [
    "why-water-mitigation-claims-get-underpaid",
    "water-damage-mitigation-supplement-playbook",
    "dry-log-documentation-guide-insurance-claims",
    "moisture-mapping-best-practices-insurance-claims",
    "daily-monitoring-documentation-best-practices",
  ],
  faqIds: [
    "water-category-3-qualifies",
    "water-category-3-documentation-required",
    "water-category-3-invoice-reductions",
    "water-moisture-maps-required",
    "water-moisture-map-contents",
    "water-moisture-reading-frequency",
    "water-dry-log-update-frequency",
    "water-dry-log-contents",
    "water-dry-log-additional-drying-days",
    "water-air-mover-documentation",
    "water-dehumidifier-documentation",
    "water-equipment-charge-reductions",
    "water-containment-documentation",
    "water-hepa-filtration-documentation",
    "water-final-mitigation-package",
    "help-equipment-drying-documentation",
    "resources-water-mitigation-documentation",
  ],
  relatedSolutionPath: "/solutions/water-damage",
  claimTypes: ["water-damage", "mitigation"],
  purpose:
    "Esta guía está diseñada para contratistas de restauración y mitigación, gerentes de proyecto y coordinadores de suplementos que documentan pérdidas de agua categoría 3 (agua negra) para la revisión de escritorio de la aseguradora. Una documentación sólida de campo y oficina defiende facturas de mitigación, cargos de secado y alcance de suplemento cuando las aseguradoras examinan líneas de PPE, eliminación y secado extendido. Claims Ninja apoya a los contratistas con estándares de documentación, empaquetado de suplementos y flujos de trabajo de recuperación de reclamaciones — no somos un perito público, representante de aseguradora ni asesor legal.",
  whenToUse: [
    {
      condition: "La pérdida se clasifica o se sospecha como categoría 3 en la admisión",
      signal:
        "Aguas residuales, inundación o fuente de agua gravemente contaminada documentada a la llegada",
    },
    {
      condition: "Demolición, PPE, eliminación o alcance de biocida se factura en el expediente",
      signal: "Líneas sensibles a la categoría aparecen en el presupuesto o la factura",
    },
    {
      condition: "El secado y el monitoreo diario continúan en una pérdida contaminada",
      signal: "Días de equipos, registros de visitas o cargos de monitoreo están en alcance",
    },
    {
      condition: "La aseguradora o el revisor de escritorio solicita paquete de documentación de mitigación",
      signal:
        "Solicitud de documentación, aviso de pago insuficiente o denegación de suplemento en líneas de mitigación",
    },
  ],
  prerequisites: [
    "Referencia de categoría y clase IICRC disponible para equipos de campo y oficina",
    "Flujo de trabajo de fotos de admisión con marcas de tiempo y etiquetas de habitación",
    "Plantillas de registro de secado y mapa de humedad listas antes de la movilización",
  ],
  requiredDocumentation: [
    {
      id: "initial-inspection",
      label: "Documentación de inspección inicial",
      required: true,
      detail:
        "Documente las condiciones de llegada, acceso al sitio, extensión de agua estancada, peligros de seguridad y PPE utilizado en la admisión. Registre el alcance de emergencia realizado el primer día — extracción, control de la fuente y estabilización inicial. Las notas de inspección contemporáneas establecen la línea base del expediente que las aseguradoras comparan con impugnaciones de alcance posteriores.",
    },
    {
      id: "category-source-documentation",
      label: "Documentación de categoría y fuente",
      required: true,
      detail:
        "Asigne categoría 3 con identificación escrita de la fuente: respaldo de aguas residuales, desbordamiento de inodoro, intrusión de río o inundación exterior, u otra fuente gravemente contaminada. Incluya tiempo de permanencia, fecha de descubrimiento y observaciones de campo que respalden la clasificación. Las líneas sensibles a la categoría — PPE, eliminación, antimicrobiano — dependen de esta documentación en la revisión de escritorio.",
    },
    {
      id: "affected-area-documentation",
      label: "Documentación de áreas afectadas",
      required: true,
      detail:
        "Inventarie cada habitación afectada, nivel de piso y tipo de ensamblaje: alfombra, base, paneles de yeso, zócalo, zócalos de gabinete, subpiso y cavidades estructurales. Anote la migración a habitaciones adyacentes, rutas de HVAC o cavidades de pared. Las aseguradoras comparan el alcance facturado con el conteo de habitaciones y la lista de ensamblajes — las áreas no documentadas se excluyen comúnmente del pago.",
    },
    {
      id: "photo-documentation",
      label: "Documentación fotográfica",
      required: true,
      detail:
        "Capture una secuencia fotográfica con marca de tiempo y etiquetada: fuente de agua, indicadores de contaminación, elevaciones amplias de habitación, detalle de daños y límites de demolición antes y después de la remoción. Las fotos son la evidencia que los revisores de escritorio reenvían cuando se disputa el alcance — imágenes sin etiquetar o posteriores a la limpieza debilitan los argumentos de categoría 3.",
    },
    {
      id: "moisture-mapping",
      label: "Mapa de humedad",
      required: true,
      detail:
        "Produzca un croquis o mapa de software con IDs de puntos de lectura, valores de humedad de referencia, tipo de medidor y material probado en cada punto. Vincule las ubicaciones de lectura con nombres de habitación que coincidan con el croquis de la aseguradora. Los mapas sólidos de admisión respaldan el conteo de habitaciones, el alcance de humedad oculta y la colocación de equipos — no macros de secado de plantilla.",
    },
    {
      id: "dry-logs-daily-monitoring",
      label: "Registros de secado y monitoreo diario",
      required: true,
      detail:
        "Registre lecturas atmosféricas diarias, valores de humedad del material, propósito de la visita, nombre del técnico y estado del objetivo de secado en cada visita de monitoreo. Anote mesetas, regresiones o cambios de equipos que extiendan la duración del secado. Los registros de secado son la evidencia principal que las aseguradoras usan para evaluar visitas de monitoreo y días de equipos — los vacíos entre entradas son una razón común por la que se reducen los cargos.",
    },
    {
      id: "equipment-documentation",
      label: "Documentación de equipos",
      required: true,
      detail:
        "Fotografíe la colocación de equipos en cada habitación afectada. Registre tipos de unidades, conteos por habitación, tiempo de funcionamiento y cualquier movimiento o adición durante el proyecto de secado. La documentación de equipos respalda líneas de deshumidificadores y ventiladores cuando las aseguradoras cuestionan la utilización o los días facturados.",
    },
    {
      id: "demolition-removal-documentation",
      label: "Documentación de demolición y remoción",
      required: true,
      detail:
        "Documente actividades de remoción y eliminación con fotos de antes y después, cantidades de sacado en bolsas y uso de PPE en materiales contaminados. Registre pies lineales o cuadrados de demolición y eliminación de residuos peligrosos cuando corresponda. Use procedimientos de bolsa y sellado etiquetados — bolsas marcadas por habitación, cantidades registradas y remoción por ruta limpia sin arrastrar materiales contaminados por zonas no afectadas. Adjunte recibo del transportista o manifiesto de residuos al facturar líneas de eliminación de residuos peligrosos o biológicos. Las líneas de demolición y eliminación de categoría 3 requieren prueba de campo — la narrativa sin cantidades se impugna frecuentemente en la revisión de factura.",
    },
    {
      id: "cleaning-contamination-control",
      label: "Documentación de limpieza y control de contaminación",
      required: true,
      detail:
        "Registre la aplicación de antimicrobiano o biocida con nombre del producto, tiempo de contacto y método de aplicación en superficies afectadas. Documente el PPE utilizado durante la limpieza — guantes, protección ocular y respirador apropiados al nivel de contaminación. Fotografíe el tipo de barrera de contención, puertas con cremallera, enrutamiento de escape de aire negativo y colocación de purificador de aire HEPA. Registre áreas de aspirado HEPA y tiempo de funcionamiento del purificador de aire en el registro de secado. El alcance de control de contaminación debe alinearse con notas de campo y líneas del presupuesto — la limpieza no documentada se elimina a menudo en expedientes de categoría 3.",
    },
    {
      id: "final-dry-standard-verification",
      label: "Verificación final del estándar de secado",
      required: true,
      detail:
        "Capture lecturas terminales de humedad contra el estándar de secado establecido para cada punto de lectura. Registre la fecha de retiro de equipos, notas de liberación y fotos de condición final. La documentación terminal cierra argumentos de duración de secado y respalda el envío de la factura final de mitigación cuando las aseguradoras auditan el cierre del proyecto.",
    },
  ],
  steps: [
    {
      id: "what-is-category-3-water-damage",
      title: "¿Qué son los daños por agua categoría 3?",
      actions: [
        "El agua categoría 3 está gravemente contaminada — las fuentes comunes incluyen respaldos de aguas residuales, desbordamientos de inodoro, intrusión de río o inundación exterior, y agua estancada con carga de contaminantes desconocida.",
        "Las pérdidas categoría 3 impulsan un alcance de contratista más allá del secado estándar: PPE reforzado, remoción y eliminación de materiales porosos, aplicación de antimicrobiano o biocida, procedimientos de sacado en bolsas y líneas de eliminación de residuos peligrosos.",
        "La categoría 3 no es una etiqueta retroactiva. Asigne la clasificación en la admisión con notas de fuente y fotos antes de que la demolición, limpieza o secado alteren las condiciones que las aseguradoras necesitan revisar.",
        "La clasificación de campo debe basarse en el tipo de fuente, contaminación visible, indicadores de olor y porosidad del material afectado — no solo en las descripciones del propietario.",
      ],
    },
    {
      id: "why-documentation-determines-claim-recovery",
      title: "Por qué la documentación determina la recuperación de la reclamación",
      actions: [
        "Las aseguradoras aprueban el alcance que pueden reenviar internamente. Fotos contemporáneas, registros de secado, mapas de humedad y notas de clasificación superan la narrativa ensamblada después del retiro de equipos.",
        "Las líneas de categoría 3 — PPE, eliminación, demolición, tratamiento antimicrobiano y secado extendido — son objetivos frecuentes de revisión de escritorio. La evidencia débil conduce a días de equipos reducidos, visitas de monitoreo recortadas y cargos de mitigación disputados.",
        "La documentación conecta la producción con las líneas del presupuesto. El expediente de reclamación organizado que envía su oficina es el mecanismo de recuperación — no el total de la factura por sí solo.",
        "Los paquetes de reclamación estructurados respaldan suplementos y reenvíos cuando las aseguradoras pagan de menos, aprueban parcialmente o solicitan evidencia adicional en pérdidas contaminadas.",
      ],
    },
    {
      id: "industry-standards-iicrc-considerations",
      title: "Estándares de la industria y consideraciones IICRC",
      actions: [
        "ANSI/IICRC S500 es la referencia reconocida de la industria para categorías de restauración por daños de agua, clases de agua y procedimientos de mitigación utilizados en todo el sector de restauración.",
        "Use terminología S500 en notas de campo, registros de secado y narrativas de presupuesto para que el personal de oficina y los revisores de aseguradora referencien el mismo lenguaje de clasificación.",
        "Las asignaciones de categoría y clase deben alinearse con la fuente de agua documentada, tiempo de permanencia, porosidad del material y los supuestos de equipos y secado en el expediente.",
        "Las decisiones de cobertura e interpretación de póliza permanecen entre el asegurado y la aseguradora. El rol operativo del contratista es documentación defendible del alcance de campo y la producción realizada.",
      ],
      notes:
        "ANSI/IICRC S500 es una referencia de la industria para la práctica de restauración — no es asesoramiento legal, autoridad de cobertura ni garantía de aprobación de la aseguradora.",
    },
    {
      id: "core-documentation-category-3-claims",
      title: "Documentación central requerida para reclamaciones de agua categoría 3",
      owner: "office",
      actions: [
        "Construya un índice de expediente de reclamación que vincule inspección de admisión, clasificación categoría 3, mapas de humedad, registros de secado, fotos, registros de demolición y lecturas de cierre en un paquete organizado.",
        "Referencie cruzadamente cada línea facturada con evidencia de campo de respaldo — PPE, eliminación, antimicrobiano, días de equipos y visitas de monitoreo deben rastrearse a un documento en el expediente.",
        "Envíe documentación mientras el secado está activo cuando las aseguradoras soliciten evidencia — esperar hasta la reconstrucción debilita argumentos de solo mitigación en pérdidas contaminadas.",
        "Un expediente completo respalda la revisión de factura, presentación de suplemento y reenvío cuando se impugna el alcance — la documentación organizada fortalece los argumentos de recuperación pero no garantiza el pago de la aseguradora.",
      ],
      notes:
        "Índice de expediente de reclamación de muestra: 01_Admisión — fotos de fuente, memo de clasificación, alcance de emergencia; 02_Áreas_Afectadas — inventario de habitaciones y notas de migración; 03_Mapa_Humedad — mapa de referencia y revisiones fechadas; 04_Registros_Diarios — entradas cronológicas hasta el cierre; 05_Equipos — fotos de colocación indexadas por fecha de visita; 06_Demo_Eliminación — demo antes/después, registro de sacado en bolsas, ticket del transportista; 07_Control_Contaminación — instalación de contención, registros de biocida, notas de aspirado HEPA; 08_Cierre — lecturas terminales, fecha de retiro de equipos, fotos de liberación. Úselo como patrón de carpetas que su oficina puede replicar — no como garantía de aprobación de la aseguradora.",
    },
    {
      id: "photo-documentation-standards",
      title: "Estándares de documentación fotográfica",
      owner: "field",
      actions: [
        "Etiquete cada foto con nombre de habitación, fecha y posición de secuencia que coincida con el croquis de la aseguradora y la nomenclatura interna del expediente del trabajo.",
        "Capture la secuencia requerida en la admisión y durante la producción: fuente de agua, indicadores de contaminación, elevaciones amplias de habitación, detalle de daños, límites de demolición, colocación de equipos y condición de cierre.",
        "Fotografíe diariamente durante la mitigación activa — volcados de fotos al final del trabajo son difíciles de conciliar para los revisores de escritorio con alcance de varios días.",
        "Las fotos son la evidencia principal que las aseguradoras y revisores de terceros reenvían cuando se disputa el alcance de categoría 3 — imágenes sin etiquetar o posteriores a la limpieza debilitan el respaldo de la factura.",
      ],
      notes:
        "Convención de etiquetado fotográfico de muestra: AAAA-MM-DD | HABITACIÓN | Vista/Detalle | Fase — ej. 2026-06-08 | Cocina | Elevación-N | Pre-demo; 2026-06-10 | Dormitorio_Principal | Disposición-equipos | Día-3. Coincida los nombres de habitación con el croquis de la aseguradora y las carpetas de exportación de gestión de trabajos.",
    },
    {
      id: "moisture-mapping-requirements",
      title: "Requisitos de mapa de humedad",
      owner: "field",
      actions: [
        "Asigne IDs de puntos de lectura en la admisión y use los mismos IDs en cada visita posterior hasta el cierre del proyecto.",
        "Registre valores de humedad de referencia en cada punto antes de instalar equipos — las referencias posteriores al secado no pueden respaldar argumentos de alcance inicial.",
        "Documente humedad oculta y en cavidades: cavidades de pared, ensamblajes de subpiso, huecos de gabinete y rutas de HVAC que expanden el conteo de habitaciones más allá del agua estancada visible.",
        "Concilie el mapa de humedad con el croquis de la aseguradora y la lista de habitaciones del presupuesto — los mapas ayudan a los revisores de escritorio a evaluar alcance más allá de macros de secado de plantilla.",
      ],
    },
    {
      id: "dry-log-documentation-standards",
      title: "Estándares de documentación de registro de secado",
      owner: "field",
      actions: [
        "Complete una entrada de registro de secado en cada día activo de secado mientras los equipos estén funcionando — sin vacíos entre visitas de monitoreo.",
        "Registre lecturas atmosféricas, valores de humedad del material en todos los puntos activos del mapa y filas de tipo/conteo de equipos en cada entrada del registro.",
        "Agregue una narrativa de progreso cuando las lecturas se estancen, regresen o requieran cambios de equipos — explique por qué la duración del secado se extiende más allá de las estimaciones iniciales.",
        "Los registros de secado son la evidencia principal que las aseguradoras usan para evaluar días de equipos y cargos de monitoreo — registros incompletos son una razón común por la que se reducen las facturas de mitigación en la revisión.",
      ],
      notes:
        "Narrativa de registro de secado de muestra: Visita 4 — Dormitorio_Principal-1 paneles de yeso 18.2% MC (anterior 19.1%), meseta notada en cavidad del zócalo. Se agregó 1 ventilador; contención y aire negativo mantenidos. Cámara activa — continuar secado.",
    },
    {
      id: "equipment-documentation-standards",
      title: "Estándares de documentación de equipos",
      owner: "field",
      actions: [
        "Fotografíe la colocación de equipos en cada habitación afectada en la instalación inicial y después de cada movimiento, adición o retiro.",
        "Registre tipos de unidades y conteos por habitación en el registro de secado — ventiladores, deshumidificadores, purificadores de aire y unidades especializadas deben coincidir con las cantidades facturadas.",
        "Alinee tiempo de funcionamiento y días en sitio con las líneas de equipos facturadas — proyectos de secado con desecante y comercial requieren lecturas ambientales adicionales según el programa de la aseguradora.",
        "La documentación de equipos defiende cargos de deshumidificadores y ventiladores cuando las aseguradoras o revisores cuestionan la utilización en expedientes de categoría 3.",
      ],
    },
    {
      id: "daily-monitoring-best-practices",
      title: "Mejores prácticas de monitoreo diario",
      owner: "field",
      actions: [
        "Documente el propósito de la visita en cada viaje de monitoreo — lectura de rutina, ajuste de equipos, liberación parcial o evaluación de cierre.",
        "Registre nombre del técnico, fecha y estado del objetivo de secado para cada cámara activa antes de salir de la propiedad.",
        "Anote decisiones de extender secado, agregar equipos o liberar cámaras con lecturas que respalden el cambio — las notas contemporáneas superan las explicaciones retroactivas.",
        "La documentación de monitoreo diario respalda líneas de visita facturadas y alcance de suplemento cuando la duración del secado excede la plantilla inicial de la aseguradora.",
      ],
    },
    {
      id: "documentation-category-3-demolition",
      title: "Documentación para demolición categoría 3",
      owner: "field",
      actions: [
        "Fotografíe materiales afectados antes y después de remoción y eliminación — alfombra, base, paneles de yeso, zócalo y gabinetes en los límites de contaminación categoría 3.",
        "Registre cantidades de sacado en bolsas, volumen de eliminación de residuos peligrosos y PPE utilizado durante la remoción — vincule cantidades con líneas de demolición y eliminación del presupuesto.",
        "Documente qué materiales porosos se consideraron irrecuperables y se removieron según protocolo categoría 3 — la narrativa debe referenciar evidencia de clasificación de admisión.",
        "Referencie cruzadamente entradas del registro de sacado en bolsas con líneas de eliminación de residuos peligrosos y desmontaje y bolsa del presupuesto — las cantidades en el expediente deben coincidir con las líneas de eliminación facturadas.",
        "La documentación de demolición respalda líneas de eliminación de residuos peligrosos, desmontaje y bolsa, y remoción y eliminación cuando las aseguradoras impugnan el alcance de demo categoría 3.",
      ],
    },
    {
      id: "category-3-contamination-ppe-hepa-disposal",
      title: "Documentación de contaminación categoría 3, PPE, HEPA y eliminación",
      owner: "field",
      actions: [
        "Fotografíe el PPE utilizado durante la remoción versus visitas de monitoreo — guantes, protección ocular y respirador apropiados al nivel de contaminación en fases de demo y limpieza.",
        "Documente la instalación de contención con fotos fechadas: barreras de polietileno, puertas con cremallera, enrutamiento de escape de aire negativo y aislamiento de cámaras afectadas de zonas limpias.",
        "Registre colocación de purificador de aire HEPA, conteo de unidades y tiempo de funcionamiento en el registro de secado — fotografíe purificadores en cuadro con límites de cámara visibles.",
        "Registre procedimientos de bolsa y sellado: bolsas etiquetadas por habitación, cantidad por sacado en bolsas y ruta de remoción que evite arrastrar materiales contaminados por áreas no afectadas.",
        "Adjunte recibo del transportista o manifiesto de residuos al facturar eliminación de residuos peligrosos o biológicos — vincule cantidades del ticket con el registro de sacado en bolsas y líneas de eliminación del presupuesto.",
        "En pérdidas mixtas, documente límites de zona categoría 3 cuando habitaciones adyacentes permanezcan categoría 1 o 2 — lecturas de límite y perímetros de contención respaldan el alcance del protocolo.",
      ],
    },
    {
      id: "defending-category-3-protocols",
      title: "Defensa de protocolos categoría 3",
      owner: "office",
      actions: [
        "Cuando las aseguradoras o revisores de terceros impugnen PPE, biocida, demolición o protocolos de secado, reenvíe el paquete de clasificación de admisión con fotos, registros y referencia cruzada de líneas.",
        "Vincule procedimientos de campo con terminología alineada a S500 en la narrativa del presupuesto — los revisores evalúan si la producción coincide con la asignación de categoría documentada.",
        "Empaquete suplementos cuando la evidencia de admisión demuestre brechas de alcance entre condiciones de campo y el presupuesto de la aseguradora — envíe antes de que la producción absorba trabajo subestimado.",
        "Claims Ninja apoya a los contratistas con revisión de documentación, preparación de suplementos, comparación de presupuestos y flujos de trabajo de recuperación de reclamaciones — no representación de aseguradora, peritaje público ni asesoramiento legal.",
      ],
      notes:
        "La documentación sólida respalda argumentos de protocolo categoría 3 en la revisión de escritorio — los resultados dependen del programa de la aseguradora, las particularidades del expediente y la calidad de la evidencia.",
    },
  ],
  qualityGates: [
    {
      id: "intake-classification-locked",
      label: "Categoría 3 asignada con fotos de fuente antes de facturación sensible a categoría",
      required: true,
      detail:
        "Memo de clasificación y fotos de fuente con marca de tiempo en o antes de la primera línea de PPE, eliminación, antimicrobiano o biocida facturada.",
    },
    {
      id: "map-sketch-room-parity",
      label: "Nombres de habitación e IDs de puntos del mapa de humedad coinciden con croquis, registros y presupuesto",
      required: true,
      detail:
        "Cada habitación húmeda en el mapa aparece en el croquis de la aseguradora y la lista de habitaciones del presupuesto; los IDs de puntos son idénticos entre mapa y entradas del registro de secado.",
    },
    {
      id: "dry-log-day-parity",
      label: "Una entrada de registro de secado por día de equipos o monitoreo facturado",
      required: true,
      detail:
        "Cada día de ventilador, deshumidificador o monitoreo facturado tiene una entrada de registro con la misma fecha calendario con lecturas — sin vacíos en fines de semana o días festivos.",
    },
    {
      id: "photo-label-sequence",
      label: "Secuencia fotográfica con marca de tiempo y etiqueta de habitación durante la producción",
      required: true,
      detail:
        "Las fotos de admisión a cierre llevan nombre de habitación, fecha y etiquetas de fase que coinciden con la convención de nomenclatura del croquis de la aseguradora.",
    },
    {
      id: "equipment-log-reconciled",
      label: "Conteo máximo en fotos y filas de registro coinciden con unidades facturadas antes de la factura",
      required: true,
      detail:
        "La conciliación de oficina confirma que el conteo máximo de equipos en fotos y registro de secado coincide con unidades y días facturados antes del envío a la aseguradora.",
    },
    {
      id: "containment-ppe-filtration",
      label: "Contención, PPE y configuración HEPA o aire negativo documentados con fotos",
      required: true,
      detail:
        "Barreras de contención, PPE durante la remoción y colocación de purificador de aire o aire negativo aparecen en fotos fechadas con notas procedimentales en el registro o expediente del trabajo.",
    },
    {
      id: "disposal-records-complete",
      label: "Cantidades de sacado en bolsas, demo antes/después y ticket del transportista cuando corresponda",
      required: true,
      detail:
        "Registro de sacado en bolsas, fotos de demolición antes/después y recibo del transportista o manifiesto de residuos adjuntos cuando se facturan líneas de eliminación de residuos peligrosos o biológicos.",
    },
    {
      id: "terminal-readings-before-pull",
      label: "Lecturas de liberación y fecha de retiro de equipos registradas antes de facturación final",
      required: true,
      detail:
        "Lecturas terminales de humedad en todos los puntos activos del mapa, fecha de retiro de equipos y fotos de liberación capturadas antes del envío de la factura final de mitigación.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Registros de secado faltantes o inconsistentes",
      impact:
        "Los vacíos entre visitas de monitoreo dan a los revisores de escritorio motivo para reducir días de equipos y recortar cargos de monitoreo facturados en expedientes de categoría 3.",
      correction:
        "Complete una entrada de registro de secado en cada día activo de secado con lecturas atmosféricas, valores de humedad del material y filas de equipos usando IDs de puntos consistentes desde la admisión.",
    },
    {
      mistake: "Mapas de humedad que no coinciden con la factura",
      impact:
        "Cuando los nombres de habitación del mapa o puntos de lectura no se alinean con el croquis de la aseguradora y el presupuesto, las habitaciones afectadas y el alcance de humedad oculta se excluyen comúnmente del pago.",
      correction:
        "Concilie el mapa de humedad con la lista de habitaciones del presupuesto en la admisión y actualice el mapa cuando se descubran nuevas áreas húmedas durante la demolición o el secado.",
    },
    {
      mistake: "Fotos que no demuestran materiales afectados o uso de equipos",
      impact:
        "Fotos sin etiquetar, sin fecha o posteriores a la limpieza no respaldan el alcance de remoción de materiales ni la utilización de equipos — ambos son objetivos frecuentes de reducción en pérdidas contaminadas.",
      correction:
        "Capture una secuencia fotográfica etiquetada y con marca de tiempo en la admisión y diariamente durante la producción: fuente, contaminación, materiales, colocación de equipos y condición de cierre.",
    },
    {
      mistake: "Días de secado sin respaldo",
      impact:
        "Cuando las lecturas de meseta o regresión no se documentan, las aseguradoras reducen la duración del secado y eliminan cargos de equipos extendidos sin evidencia contemporánea para defender.",
      correction:
        "Agregue una narrativa de progreso al registro de secado cuando el secado se extienda más allá de las estimaciones iniciales — explique lecturas, cambios de equipos y por qué son necesarios días adicionales.",
    },
    {
      mistake: "Cargos de equipos sin colocación, fechas o justificación por habitación",
      impact:
        "Líneas de deshumidificadores y ventiladores facturadas sin prueba de colocación por habitación se eliminan comúnmente de forma proporcional en la revisión de factura.",
      correction:
        "Fotografíe la colocación de equipos en la instalación inicial y después de cada movimiento. Registre tipos de unidades, conteos y asignaciones de habitación en el registro de secado para cada día facturado.",
    },
    {
      mistake: "Alcance de demolición sin respaldo de contaminación o remoción",
      impact:
        "Las líneas de remoción y eliminación y eliminación de residuos peligrosos en expedientes de categoría 3 se deniegan cuando la narrativa de demo carece de fotos de antes/después y evidencia de clasificación de admisión.",
      correction:
        "Fotografíe materiales antes y después de la remoción. Vincule cantidades de demo con notas de clasificación categoría 3 y registros de sacado en bolsas desde la admisión hasta el cierre.",
    },
    {
      mistake: "Procedimientos categoría 3 sin documentación de contención, PPE o filtración",
      impact:
        "Las líneas de PPE, barrera de contención, filtración HEPA y aire negativo se eliminan cuando los procedimientos de campo se facturan sin fotos de instalación y notas procedimentales.",
      correction:
        "Documente la instalación de contención, PPE utilizado durante la remoción y colocación de purificador de aire con fotos fechadas y narrativa en el registro de secado o notas del trabajo.",
    },
    {
      mistake: "Verificación final del estándar de secado faltante o incompleta",
      impact:
        "Lecturas terminales de humedad y fechas de retiro de equipos omitidas del expediente invitan disputas de cierre y debilitan el envío de la factura final de mitigación.",
      correction:
        "Registre lecturas terminales en todos los puntos activos del mapa contra el estándar de secado, documente la fecha de retiro de equipos y capture fotos de liberación antes de la facturación final.",
    },
  ],
  supplementOpportunities: [
    {
      trigger:
        "El presupuesto de la aseguradora o la aprobación inicial subestima la duración del secado en una pérdida categoría 3",
      documentation:
        "Registros de secado que muestran meseta o regresión de humedad, registros de visitas de monitoreo extendidas y narrativa de progreso que explique por qué son necesarios días de secado adicionales más allá de la plantilla de la aseguradora.",
      lineItemHint:
        "Días de secado adicionales, visitas de monitoreo diario, alquiler extendido de equipos",
    },
    {
      trigger:
        "Las condiciones de campo requieren adiciones de equipos a mitad del trabajo no reflejadas en el presupuesto de la aseguradora",
      documentation:
        "Mapa de humedad actualizado, fotos de colocación que muestran unidades agregadas y filas de equipos del registro de secado que documentan la fecha y razón de cada adición.",
      lineItemHint:
        "Ventiladores adicionales, deshumidificadores, purificadores de aire, equipos desecantes",
    },
    {
      trigger:
        "El presupuesto de la aseguradora omite alcance de demolición categoría 3 y remoción de materiales porosos",
      documentation:
        "Fotos de clasificación categoría 3 de admisión, imágenes de demolición antes y después, cantidades de sacado en bolsas y registros de eliminación de residuos peligrosos vinculados a líneas de remoción y eliminación.",
      lineItemHint:
        "Remover y eliminar, eliminación de materiales peligrosos, desmontar y embalar materiales contaminados",
    },
    {
      trigger:
        "El presupuesto de la aseguradora omite filtración HEPA, contención o aire negativo en pérdida contaminada",
      documentation:
        "Fotos de barrera de contención, imágenes de colocación de purificador de aire, notas de configuración de aire negativo y entradas del registro de secado que muestran tiempo de funcionamiento del equipo de filtración.",
      lineItemHint:
        "Purificador de aire HEPA, barreras de contención, escape de aire negativo, instalación de equipos",
    },
    {
      trigger:
        "El presupuesto de la aseguradora omite mano de obra de limpieza y control de contaminación en alcance categoría 3",
      documentation:
        "Registros de aplicación de antimicrobiano o biocida, notas de aspirado HEPA, narrativa de procedimiento de limpieza detallada y fotos de superficies tratadas antes de la reconstrucción.",
      lineItemHint:
        "Tratamiento antimicrobiano, aspirado HEPA, limpieza detallada, aplicar biocida",
    },
    {
      trigger:
        "La documentación está completa pero la aseguradora pagó de menos o aprobó parcialmente el alcance de mitigación",
      documentation:
        "Índice de reclamación organizado que referencia cruzadamente fotos, mapas, registros y registros de demo con cada línea disputada — empaquetado para envío de suplemento y reenvío a revisión de escritorio.",
      lineItemHint:
        "Envío de suplemento con narrativa de justificación por línea; Claims Ninja respalda revisión de presupuesto, revisión de documentación, preparación de suplementos y flujos de trabajo de recuperación de reclamaciones",
    },
  ],
  faq: [
    {
      question: "¿Qué fotos deben tomar los contratistas durante la mitigación categoría 3?",
      answer:
        "Capture una secuencia con marca de tiempo y etiqueta de habitación en la admisión y diariamente durante la producción activa: fuente de agua, indicadores de contaminación, elevaciones amplias de habitación, detalle de daños, límites de demolición antes y después de la remoción, colocación de equipos y condición de cierre. Etiquete cada foto con nombre de habitación y fecha que coincida con el croquis de la aseguradora y la nomenclatura interna del expediente del trabajo. Los volcados de fotos al final del trabajo son difíciles de conciliar para los revisores de escritorio con alcance de categoría 3 de varios días — las secuencias diarias etiquetadas superan las galerías posteriores a la limpieza.",
    },
    {
      question: "¿Qué documentación respalda el alcance de demolición?",
      answer:
        "Fotos de antes y después en los límites de contaminación categoría 3, cantidades de sacado en bolsas, PPE utilizado durante la remoción, y pies lineales o cuadrados de ensamblajes demolidos. Vincule la remoción de materiales porosos con notas de clasificación de admisión — alfombra, base, paneles de yeso, zócalo y gabinetes considerados irrecuperables según protocolo categoría 3. La narrativa sin cantidades o fotos se impugna frecuentemente en líneas de remoción y eliminación y eliminación de residuos peligrosos en la revisión de factura.",
    },
    {
      question: "¿Cómo justifican los contratistas los procedimientos de seguridad categoría 3?",
      answer:
        "Documente la instalación de contención, PPE utilizado durante la remoción, filtración HEPA y configuración de aire negativo con fotos fechadas y notas procedimentales en el registro de secado o expediente del trabajo. Vincule procedimientos de campo con clasificación categoría 3 de admisión y terminología alineada a S500 en la narrativa del presupuesto para que los revisores puedan evaluar si la producción coincide con la asignación de categoría documentada. Cuando las aseguradoras impugnen protocolos, reenvíe el paquete de clasificación de admisión con fotos, registros y referencia cruzada de líneas en lugar de agregar solo narrativa en la factura.",
    },
    {
      question: "¿Puede una mejor documentación ayudar a respaldar la recuperación de suplementos?",
      answer:
        "La documentación organizada fortalece argumentos de suplemento y reenvío cuando el alcance de campo excede el presupuesto de la aseguradora — fotos, mapas, registros y notas de clasificación referenciadas cruzadamente con líneas disputadas ayudan a los revisores de escritorio a evaluar brechas sin tratar el alcance como inflación narrativa. Presente suplementos cuando la evidencia de admisión demuestre trabajo subestimado antes de que la producción absorba mano de obra no pagada. Claims Ninja apoya a los contratistas con revisión de documentación, preparación de suplementos y flujos de trabajo de recuperación de reclamaciones — los resultados aún dependen del programa de la aseguradora, las particularidades del expediente y la calidad de la evidencia.",
    },
  ],
  relatedResources: [
    { label: "Plataforma Claims Ninja", href: "/platform" },
    { label: "Precios", href: "/pricing" },
  ],
});
