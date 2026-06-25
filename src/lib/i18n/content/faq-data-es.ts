import type { FaqItem } from "@/lib/faq-page";

export const FAQ_ITEMS_ES: readonly FaqItem[] = [
  // Getting Started (18)
  {
    id: "getting-started-onboarding",
    category: "getting_started",
    question: "¿Cómo funciona la incorporación con Claims Ninja?",
    answer:
      "La incorporación comienza con la admisión: revisamos su operación, su volumen de reclamaciones y su flujo de trabajo actual. Su equipo recibe acceso a la plataforma, estándares de documentación y un proceso de entrega claro para las primeras reclamaciones. La mayoría de los contratistas presentan reclamaciones dentro de la primera semana, según el tipo y el alcance de la reclamación.",
    featured: true,
    relatedLinks: [{ label: "Contáctenos", href: "/contact" }],
  },
  {
    id: "getting-started-field-vs-support",
    category: "getting_started",
    question: "¿Qué queda a cargo de mi equipo de campo y qué de Claims Ninja?",
    answer:
      "Su cuadrilla se encarga de la producción: mitigación, reparaciones, techado, manejo de contenidos y la comunicación con el cliente en el sitio. Claims Ninja apoya la revisión de estimados, la estrategia de suplementos, la organización de la documentación y la comunicación con la aseguradora. Usted mantiene el control del trabajo; nosotros fortalecemos el expediente de la reclamación detrás de usted.",
    featured: true,
  },
  {
    id: "getting-started-who-for",
    category: "getting_started",
    question: "¿Para quién está hecho Claims Ninja?",
    answer:
      "Claims Ninja está hecho para contratistas, empresas de restauración y profesionales de reclamaciones de propiedad que manejan trabajo de seguros en volumen. Si su equipo atiende pérdidas por tormenta, agua, fuego, moho o contenidos y necesita documentación y apoyo de suplementos más sólidos sin formar un departamento de reclamaciones interno, la plataforma está diseñada para usted.",
  },
  {
    id: "getting-started-first-claim",
    category: "getting_started",
    question: "¿Qué tan rápido podemos presentar nuestra primera reclamación?",
    answer:
      "Después de la admisión y la configuración del flujo de trabajo, la mayoría de los equipos presentan su primera reclamación en unos pocos días hábiles. Los tiempos dependen de qué tan rápido pueda proporcionar fotos, estimados y detalles de la póliza. Revisamos su primer expediente para que el proceso sea repetible en todo su portafolio.",
    relatedLinks: [{ label: "Resumen de la plataforma", href: "/platform" }],
  },
  {
    id: "getting-started-intake-info",
    category: "getting_started",
    question: "¿Qué información necesitan para iniciar un expediente de reclamación?",
    answer:
      "La admisión típica incluye el estimado o alcance de la aseguradora (si está disponible), fotos del sitio, su estimado como contratista, datos del asegurado, número de reclamación y tipo de pérdida. Pueden aplicar elementos adicionales como registros de humedad, informes de pruebas o inventarios de contenidos según el tipo y alcance de la reclamación.",
  },
  {
    id: "contact-response-time",
    category: "getting_started",
    question: "¿Qué tan rápido responderá alguien?",
    answer:
      "La mayoría de las consultas enviadas a través de nuestro formulario de contacto o correo electrónico reciben respuesta dentro de un día hábil. Las revisiones de reclamaciones complejas o las evaluaciones de asociación pueden tomar un poco más mientras revisamos sus detalles; le confirmaremos los tiempos cuando respondamos.",
    relatedLinks: [{ label: "Contáctenos", href: "/contact" }],
  },
  {
    id: "contact-multiple-claims",
    category: "getting_started",
    question: "¿Puedo enviar varias reclamaciones?",
    answer:
      "Sí. Los contratistas y socios trabajan habitualmente con Claims Ninja en múltiples expedientes activos. Use el formulario de contacto para describir su situación, o inicie el ingreso de reclamaciones para expedientes individuales a través de nuestro proceso de incorporación estándar.",
    relatedLinks: [{ label: "Contáctenos", href: "/contact" }],
  },
  {
    id: "contact-carrier-estimate",
    category: "getting_started",
    question: "¿Necesito un estimado de la aseguradora antes de contactar a Claims Ninja?",
    answer:
      "No. Puede comunicarse antes de que exista un estimado de la aseguradora; le ayudaremos a entender los próximos pasos según el tipo de reclamación y su documentación. Si hay un estimado disponible, compartirlo acelera la revisión, pero no es obligatorio para iniciar una conversación.",
    relatedLinks: [{ label: "Contáctenos", href: "/contact" }],
  },
  {
    id: "getting-started-estimating-tools",
    category: "getting_started",
    question: "¿Podemos seguir usando nuestro software de estimación actual?",
    answer:
      "Sí. La mayoría de los socios continúan usando Xactimate, Symbility o flujos de trabajo de estimación internos. Claims Ninja revisa y organiza lo que usted produce; no le exigimos abandonar sus herramientas de campo ni reescribir estimados desde cero.",
  },
  {
    id: "partner-network-strategic-partners",
    category: "getting_started",
    question: "¿Quiénes son los socios estratégicos de Claims Ninja?",
    answer:
      "La red de socios estratégicos de Claims Ninja incluye ProfileGorilla (gestión de reputación y reseñas de contratistas), CORE Group (red de liderazgo en la industria de restauración), 911 Restoration Corporate (relación preferida como proveedor de liquidación de reclamaciones), Daylit (socio autorizado de financiamiento para contratistas) y Morgan & Morgan (socio legal exclusivo). Cada socio apoya una necesidad operativa diferente, desde la recuperación de reclamaciones y el flujo de caja hasta la escalación legal y el crecimiento del negocio. Obtenga más información en /partner-network.",
    relatedLinks: [{ label: "Red de socios", href: "/partner-network" }],
  },
  {
    id: "partner-network-financing",
    category: "getting_started",
    question: "¿Puede Claims Ninja conectar a contratistas con recursos de financiamiento?",
    answer:
      "Claims Ninja es socio autorizado de Daylit, que ofrece asistencia de financiamiento a corto plazo para socios contratistas. Cuando los tiempos del proyecto, las necesidades de materiales, la nómina o el capital de trabajo requieren apoyo adicional, Claims Ninja puede ayudar a conectar a socios contratistas calificados con recursos de financiamiento de Daylit, sujeto a la aprobación y calificación del socio. El financiamiento no está garantizado y depende de las circunstancias individuales.",
    relatedLinks: [{ label: "Red de socios", href: "/partner-network" }],
  },
  {
    id: "partner-network-legal-partner",
    category: "getting_started",
    question: "¿Tiene Claims Ninja un socio legal?",
    answer:
      "Sí. Morgan & Morgan es el socio legal exclusivo de Claims Ninja. Cuando una reclamación escala más allá de la negociación tradicional de suplementos, el apoyo legal puede resultar apropiado. Los clientes calificados pueden acceder a recursos legales con tarifas preferenciales de socio cuando una reclamación requiere escalación legal, como disputas de mala fe, desacuerdos de cobertura o situaciones de pago significativamente inferior. Los resultados legales no están garantizados.",
    relatedLinks: [{ label: "Red de socios", href: "/partner-network" }],
  },
  {
    id: "partner-network-911-restoration",
    category: "getting_started",
    question: "¿Qué significa la asociación con 911 Restoration?",
    answer:
      "Claims Ninja sirve como recurso preferido de liquidación de reclamaciones para 911 Restoration Corporate, directores de franquicias, liderazgo nacional y operadores de franquicias participantes. Esta relación apoya la estrategia de suplementos, la calidad de la documentación, la comunicación con la aseguradora y las oportunidades de recuperación de reclamaciones en todo el sistema 911 Restoration.",
    relatedLinks: [{ label: "Red de socios", href: "/partner-network" }],
  },
  {
    id: "partner-network-services-required",
    category: "getting_started",
    question: "¿Son obligatorios los servicios de la red de socios para trabajar con Claims Ninja?",
    answer:
      "No. Los servicios principales de Claims Ninja — documentación, suplementos, apoyo en la comunicación con la aseguradora y estrategia de flujo de trabajo de reclamaciones — funcionan por sí solos. La red de socios ofrece recursos opcionales de financiamiento, escalación legal, crecimiento de reputación y apoyo operativo cuando pueden aportar valor a su operación.",
    relatedLinks: [{ label: "Red de socios", href: "/partner-network" }],
  },
  {
    id: "partner-network-how-selected",
    category: "getting_started",
    question: "¿Cómo selecciona Claims Ninja a sus socios estratégicos?",
    answer:
      "Cada socio de la red se selecciona porque resuelve problemas reales que enfrentan los contratistas, en financiamiento, escalación legal, gestión de reputación, operaciones de franquicias y liderazgo en la industria de restauración. Claims Ninja prioriza la calidad, la adecuación y el valor medible para el contratista por encima del volumen de socios.",
    relatedLinks: [{ label: "Red de socios", href: "/partner-network" }],
  },
  {
    id: "partner-network-request-introduction",
    category: "getting_started",
    question: "¿Pueden los contratistas solicitar una presentación con un socio de la red?",
    answer:
      "Sí, cuando sea apropiado. Los contratistas que trabajan con Claims Ninja pueden solicitar una presentación con un socio de la red. Claims Ninja puede facilitar presentaciones para socios contratistas calificados, sujeto a la aprobación y calificación del socio. Usar un socio de la red es opcional y separado de su acuerdo de tarifas con Claims Ninja.",
    relatedLinks: [{ label: "Red de socios", href: "/partner-network" }],
  },
  {
    id: "partner-network-who-eligible",
    category: "getting_started",
    question: "¿Los socios de la red trabajan con todos los contratistas o solo con clientes de Claims Ninja?",
    answer:
      "Los recursos de los socios de la red se orientan principalmente a los socios contratistas de Claims Ninja. El acceso varía según el socio, el compromiso y la calificación; el financiamiento, los servicios legales y otros servicios de socios no están automáticamente disponibles para todos los contratistas.",
    relatedLinks: [{ label: "Red de socios", href: "/partner-network" }],
  },
  {
    id: "partner-network-become-partner",
    category: "getting_started",
    question: "¿Puede mi empresa convertirse en socio estratégico de Claims Ninja?",
    answer:
      "Claims Ninja está abierto a explorar relaciones estratégicas con organizaciones que apoyen el crecimiento de contratistas, los resultados de reclamaciones, el financiamiento, los recursos legales, la tecnología o la excelencia operativa. Si su empresa atiende a empresas de restauración, operadores de techado o profesionales de reclamaciones de seguros, comuníquese a través de /contact para analizar oportunidades de asociación.",
    relatedLinks: [
      { label: "Red de socios", href: "/partner-network" },
      { label: "Contáctenos", href: "/contact" },
    ],
  },

  // Pricing (18)
  {
    id: "pricing-fee-structure",
    category: "pricing",
    question: "¿Cómo se estructuran las tarifas de asociación?",
    answer:
      "Las tarifas se estructuran por tipo de servicio, no como una tarifa única para cada expediente. La redacción de estimados usa tarifas escalonadas según el valor del estimado. La negociación con la aseguradora usa un mínimo de $150 más el 15% del aumento documentado del acuerdo cuando existe un estimado de la aseguradora, o el 4% del RCV final cuando no se ha proporcionado un estimado de la aseguradora. El apoyo de suplementos es el 15% del aumento documentado aprobado a partir del alcance suplementario presentado. Servicios adicionales como apoyo de tasación o informes EagleView se cotizan según la complejidad de la reclamación.",
    featured: true,
    relatedLinks: [{ label: "Precios", href: "/pricing" }],
  },
  {
    id: "pricing-estimate-writing",
    category: "pricing",
    question: "¿Cómo se calculan las tarifas de redacción de estimados?",
    answer:
      "Las tarifas de redacción de estimados se escalonan según el valor del estimado: $100 mínimo para un valor de estimado menor a $12,500; 1.25% para $12,500–$100,000; 0.75% para $100,001–$200,000; y 0.50% para un valor de estimado superior a $200,000. Las facturas de estimados se emiten al completarse y con la aprobación del cliente a través del Portal del Cliente.",
    relatedLinks: [{ label: "Precios", href: "/pricing" }],
  },
  {
    id: "pricing-minimum-fees",
    category: "pricing",
    question: "¿Existen tarifas mínimas?",
    answer:
      "Sí. La redacción de estimados tiene un mínimo de $100 para un valor de estimado menor a $12,500. La negociación con la aseguradora tiene una tarifa mínima de $150. Estos mínimos se aplican antes de los cálculos basados en porcentaje sobre alcances mayores.",
    relatedLinks: [{ label: "Precios", href: "/pricing" }],
  },
  {
    id: "pricing-15-percent",
    category: "pricing",
    question: "¿Cuándo se aplica la tarifa del 15% sobre el aumento documentado?",
    answer:
      "La tarifa del 15% se aplica al aumento documentado del acuerdo por encima del estimado original de la aseguradora cuando hay un estimado de la aseguradora disponible — mediante la negociación con la aseguradora. También se aplica al apoyo de suplementos: 15% del aumento documentado aprobado por la aseguradora a partir del alcance suplementario presentado. La tarifa está ligada a los aumentos aprobados por la aseguradora, no a los totales brutos de la factura.",
    relatedLinks: [{ label: "Precios", href: "/pricing" }],
  },
  {
    id: "pricing-4-percent-rcv",
    category: "pricing",
    question: "¿Cuándo se aplica la tarifa del 4% del RCV?",
    answer:
      "La tarifa del 4% del acuerdo de RCV final se aplica a la negociación con la aseguradora cuando la aseguradora no ha proporcionado un estimado. Esta estructura se usa en los escenarios calificados sin estimado para que su equipo entienda la base de la tarifa antes de que avance el trabajo.",
    relatedLinks: [{ label: "Precios", href: "/pricing" }],
  },
  {
    id: "pricing-when-charged",
    category: "pricing",
    question: "¿Cuándo se facturan las tarifas?",
    answer:
      "Las facturas de estimados se emiten al completarse y con la aprobación del cliente a través del Portal del Cliente. Las facturas de negociación y suplementos se emiten tras una negociación exitosa y la aprobación final. Las facturas vencen de inmediato una vez aprobadas.",
    relatedLinks: [{ label: "Precios", href: "/pricing" }],
  },
  {
    id: "pricing-payment-processing",
    category: "pricing",
    question: "¿Existen tarifas de procesamiento de pagos?",
    answer:
      "El ACH está disponible como opción de procesamiento de pagos gratuita, sin tarifa de procesamiento. Los pagos con tarjeta de crédito incluyen una tarifa de conveniencia del 3%. El pago se procesa mediante el método registrado tras la aprobación de la factura.",
    relatedLinks: [
      { label: "Precios", href: "/pricing" },
      { label: "Facturación y pagos", href: "/platform/billing-payments" },
    ],
  },
  {
    id: "pricing-additional-services",
    category: "pricing",
    question: "¿Qué tarifas de servicios adicionales pueden aplicar?",
    answer:
      "Los servicios de tasación suelen costar entre $500 y $1,200 según la complejidad y el alcance de la reclamación. Los informes EagleView, cuando se requieren para documentación de techado, cuestan $60 por proyecto. Estas son tarifas cotizadas o de traspaso, separadas de las tarifas básicas de estimado, negociación y suplementos.",
    relatedLinks: [{ label: "Precios", href: "/pricing" }],
  },
  {
    id: "pricing-volume",
    category: "pricing",
    question: "¿Ofrecen niveles de asociación basados en volumen?",
    answer:
      "Los precios se estructuran por tipo de servicio y alcance de la reclamación, en lugar de niveles genéricos por volumen. Su equipo selecciona redacción de estimados, apoyo de suplementos, negociación o servicios avanzados según sea necesario, con tarifas definidas antes de que comience el trabajo. Contáctenos para analizar cómo se aplican los precios en todo su portafolio de negocios.",
    relatedLinks: [{ label: "Precios", href: "/pricing" }],
  },
  {
    id: "pricing-hidden-fees",
    category: "pricing",
    question: "¿Existen recargos ocultos o cargos de traspaso?",
    answer:
      "No hay recargos ocultos en las partidas. Las tarifas se definen en los términos de su asociación, vinculadas a la recuperación documentada o a la base de RCV acordada según el tipo y alcance de la reclamación. Su equipo ve lo que se buscó, lo que se aprobó y lo que se facturó.",
  },
  {
    id: "billing-how-paid",
    category: "pricing",
    question: "¿Cómo recibe pagos Claims Ninja?",
    answer:
      "Las tarifas dependen del servicio realizado: tarifas escalonadas de redacción de estimados, porcentajes de negociación o tarifas de recuperación de suplementos. Las facturas se emiten después de que el trabajo se completa y se aprueba, y luego se pagan mediante ACH (sin tarifa de procesamiento) o tarjeta de crédito (tarifa de conveniencia del 3%).",
    relatedLinks: [
      { label: "Precios", href: "/pricing" },
      { label: "Facturación y pagos", href: "/platform/billing-payments" },
    ],
  },
  {
    id: "billing-percentage-charged",
    category: "pricing",
    question: "¿Qué porcentaje cobra Claims Ninja?",
    answer:
      "Los porcentajes varían según el servicio: la redacción de estimados usa tarifas escalonadas del 0.50% al 1.25% según el valor del estimado (con un mínimo de $100 en expedientes menores). La negociación es el 15% del aumento documentado del acuerdo cuando existe un estimado de la aseguradora, o el 4% del RCV final cuando no se ha proporcionado ninguno. Los suplementos son el 15% del aumento aprobado por la aseguradora a partir del alcance suplementario presentado.",
    relatedLinks: [{ label: "Precios", href: "/pricing" }],
  },
  {
    id: "billing-upfront-fees",
    category: "pricing",
    question: "¿Debo pagar algo por adelantado?",
    answer:
      "En la mayoría de los casos, no se requieren tarifas por adelantado. Nuestra compensación normalmente está vinculada a resultados exitosos de la reclamación.",
  },
  {
    id: "billing-fee-calculated",
    category: "pricing",
    question: "¿Cómo se calcula la tarifa?",
    answer:
      "Las tarifas de redacción de estimados usan porcentajes escalonados según el valor del estimado o un mínimo de $100 en alcances menores. Las tarifas de negociación usan un mínimo de $150 más el 15% del aumento documentado del acuerdo por encima del estimado original de la aseguradora, o el 4% del RCV final cuando no existe un estimado de la aseguradora. Las tarifas de suplementos son el 15% del aumento aprobado a partir del alcance suplementario presentado.",
    relatedLinks: [{ label: "Precios", href: "/pricing" }],
  },
  {
    id: "billing-payment-due",
    category: "pricing",
    question: "¿Cuándo vence el pago?",
    answer:
      "Las facturas vencen de inmediato una vez aprobadas. Las facturas de estimados se emiten al completarse y con la aprobación del cliente. Las facturas de negociación y suplementos se emiten tras una negociación exitosa y la aprobación final.",
    relatedLinks: [{ label: "Precios", href: "/pricing" }],
  },
  {
    id: "billing-long-term-contracts",
    category: "pricing",
    question: "¿Existen contratos a largo plazo?",
    answer:
      "No. Los contratistas contratan a Claims Ninja reclamación por reclamación o mediante acuerdos de asociación continuos según sus necesidades operativas.",
  },
  {
    id: "billing-selective-claims",
    category: "pricing",
    question: "¿Puedo usar Claims Ninja solo para ciertas reclamaciones?",
    answer:
      "Sí. Muchos contratistas usan Claims Ninja de forma selectiva en reclamaciones complejas, de alto valor o que requieren muchos recursos.",
  },
  {
    id: "billing-replace-estimator",
    category: "pricing",
    question: "¿Reemplaza Claims Ninja a mi estimador interno?",
    answer:
      "No. Claims Ninja puede complementar equipos existentes, actuar como recurso de desbordamiento o funcionar como un departamento de reclamaciones completamente externalizado.",
  },

  // Insurance Supplements (9)
  {
    id: "supplements-whats-included",
    category: "insurance_supplements",
    question: "¿Qué incluye el apoyo de suplementos?",
    answer:
      "El apoyo de suplementos incluye revisión del alcance, análisis línea por línea, orientación de documentación y presentaciones de suplementos listas para la aseguradora. Los equipos expertos identifican partidas faltantes, brechas de precios y oportunidades relacionadas con códigos, y luego organizan el expediente para que los ajustadores puedan revisarlo con eficiencia.",
    featured: true,
    relatedLinks: [{ label: "Reclamaciones de techado", href: "/solutions/roofing" }],
  },
  {
    id: "supplements-process",
    category: "insurance_supplements",
    question: "¿Cómo es el proceso de suplementos?",
    answer:
      "Comparamos el alcance de la aseguradora con las condiciones de campo y su estimado, marcamos partidas defendibles y construimos paquetes de suplementos organizados con fotos y notas. Después de su revisión, las presentaciones se envían a la aseguradora con resúmenes de cambios claros. El seguimiento continúa a través de las respuestas del ajustador.",
  },
  {
    id: "supplements-turnaround",
    category: "insurance_supplements",
    question: "¿Cuánto tiempo toma la preparación de suplementos?",
    answer:
      "Los tiempos dependen de la integridad de la documentación y la complejidad de la reclamación. Las brechas de alcance sencillas pueden avanzar rápidamente; los expedientes comerciales grandes o de múltiples oficios toman más tiempo. Priorizamos los expedientes según su calendario de producción y los plazos de la aseguradora.",
  },
  {
    id: "supplements-who-submits",
    category: "insurance_supplements",
    question: "¿Quién presenta los suplementos a la aseguradora?",
    answer:
      "Claims Ninja prepara y presenta los paquetes de suplementos en su nombre, alineados con su autorización y los términos de asociación. Su equipo mantiene visibilidad a través de la plataforma: ve lo que se envió, cuándo y cómo respondió la aseguradora.",
    relatedLinks: [{ label: "Seguimiento de reclamaciones", href: "/platform/claim-tracking" }],
  },
  {
    id: "supplements-documentation",
    category: "insurance_supplements",
    question: "¿Qué documentación fortalece un suplemento?",
    answer:
      "Los suplementos sólidos combinan el detalle línea por línea con fotos, mediciones, referencias de código, especificaciones del fabricante y datos de humedad o pruebas cuando corresponda. Las narrativas organizadas ayudan a los ajustadores a entender por qué cada partida pertenece al alcance, no solo que se omitió.",
    relatedLinks: [
      { label: "Orientación sobre documentación", href: "/faq#faq-category-documentation" },
      {
        label: "Guía de suplementos de seguros",
        href: "/resources/blog/insurance-supplementing-guide-contractors",
      },
      {
        label: "Tasas de aprobación de documentación de reclamaciones",
        href: "/resources/blog/claim-documentation-approval-rates",
      },
    ],
  },
  {
    id: "supplements-multiple",
    category: "insurance_supplements",
    question: "¿Podemos presentar varios suplementos en una misma reclamación?",
    answer:
      "Sí. Muchas reclamaciones requieren suplementos secuenciales a medida que la demolición revela daños adicionales o a medida que los oficios completan el trabajo. Hacemos seguimiento de las presentaciones anteriores y las respuestas de la aseguradora para que cada ronda permanezca organizada y defendible.",
  },
  {
    id: "supplements-denied",
    category: "insurance_supplements",
    question: "¿Qué sucede si un suplemento se deniega o se aprueba parcialmente?",
    answer:
      "Documentamos la posición de la aseguradora, identificamos brechas en su razonamiento y asesoramos sobre los próximos pasos: documentación revisada, solicitudes de reinspección o escalación cuando sea apropiado. Los resultados varían según la aseguradora y el expediente; nos enfocamos en construir el registro más sólido posible.",
    relatedLinks: [
      {
        label: "Guía de recuperación ante denegación de suplementos",
        href: "/resources/blog/supplement-denial-recovery-guide",
      },
    ],
  },
  {
    id: "help-denied-supplements",
    category: "insurance_supplements",
    question: "¿Puede Claims Ninja ayudar con suplementos denegados?",
    answer:
      "Sí. Revisamos el lenguaje de denegación, identificamos brechas de documentación, organizamos paquetes de reenvío y asesoramos sobre reinspección cuando las condiciones del sitio lo requieren. La recuperación varía según la aseguradora y el expediente; nos enfocamos en construir el registro más sólido posible.",
    relatedLinks: [
      {
        label: "Guía de recuperación ante denegación de suplementos",
        href: "/resources/blog/supplement-denial-recovery-guide",
      },
      {
        label: "Guía de suplementos de seguros",
        href: "/resources/blog/insurance-supplementing-guide-contractors",
      },
    ],
  },
  {
    id: "help-missed-line-items",
    category: "insurance_supplements",
    question: "¿Puede Claims Ninja ayudar a los contratistas a identificar partidas omitidas?",
    answer:
      "Sí. Comparamos los estimados de la aseguradora con el alcance de campo y su documentación para marcar brechas defendibles: cantidades, separación de oficios, partidas de código y alcance respaldado por documentación. La revisión asistida por IA puede acelerar el triaje inicial; los equipos expertos validan antes de la presentación a la aseguradora.",
    relatedLinks: [
      {
        label: "Lista de verificación de revisión de estimados Xactimate",
        href: "/resources/blog/xactimate-estimate-review-checklist-contractors",
      },
      {
        label: "Por qué los estimados de la aseguradora omiten partidas",
        href: "/resources/blog/why-carrier-estimates-miss-line-items",
      },
      { label: "Análisis de reclamaciones con IA", href: "/platform/ai-claim-analysis" },
    ],
  },

  // Roofing Claims (6)
  {
    id: "roofing-carrier-documentation",
    category: "roofing_claims",
    question: "¿Qué documentación esperan las aseguradoras en reclamaciones de techado?",
    answer:
      "Las aseguradoras esperan fotos de todas las pendientes y del daño, mediciones precisas, partidas alineadas con cómo se construyó el techo y accesorios relacionados con código cuando corresponda. Las oportunidades de suplemento a menudo dependen de drip edge, barrera de hielo y agua, ventilación, cargos por pendiente pronunciada y factores de desperdicio documentados con claridad.",
    featured: true,
    relatedLinks: [{ label: "Soluciones de techado", href: "/solutions/roofing" }],
  },
  {
    id: "roofing-storm-vs-retail",
    category: "roofing_claims",
    question: "¿Apoyan reclamaciones de restauración por tormenta y techado minorista?",
    answer:
      "Sí. Los portafolios por tormenta necesitan consistencia en alto volumen; los trabajos minoristas necesitan precisión en el alcance y las partidas de código. Adaptamos la documentación y la estrategia de suplementos a cómo opera realmente su negocio de techado, residencial, comercial o ambos.",
    relatedLinks: [{ label: "Soluciones de techado", href: "/solutions/roofing" }],
  },
  {
    id: "roofing-code-items",
    category: "roofing_claims",
    question: "¿Cómo se manejan las partidas de código y cumplimiento en suplementos de techado?",
    answer:
      "Revisamos los requisitos de la jurisdicción, las especificaciones del fabricante y las condiciones de campo para identificar partidas impulsadas por código que las aseguradoras a menudo omiten. Partidas como drip edge, curso de arranque, barrera de hielo y ventilación se evalúan según lo que el trabajo requiere, no se agregan automáticamente a cada expediente.",
  },
  {
    id: "roofing-commercial",
    category: "roofing_claims",
    question: "¿Pueden apoyar reclamaciones de techado comercial?",
    answer:
      "Sí. El techado comercial a menudo involucra membranas, recubrimientos, sistemas metálicos y alcances mayores con requisitos de documentación más exigentes. Organizamos estimados complejos y la coordinación de oficios para que la revisión de la aseguradora sea manejable.",
    relatedLinks: [{ label: "Soluciones de techado", href: "/solutions/roofing" }],
  },
  {
    id: "roofing-measurements",
    category: "roofing_claims",
    question: "¿Qué importancia tienen las mediciones del techo y los factores de desperdicio?",
    answer:
      "Las mediciones precisas sustentan argumentos de cantidad defendibles. El desperdicio, la pendiente y los factores de complejidad deben reflejar la geometría real del techo, no valores predeterminados genéricos. Comparamos las cantidades de la aseguradora con la documentación de campo y marcamos brechas que valga la pena perseguir.",
  },
  {
    id: "roofing-op",
    category: "roofing_claims",
    question: "¿Cuándo es relevante el overhead and profit (O&P) en reclamaciones de techado?",
    answer:
      "El O&P depende de las pautas de la aseguradora, el número de oficios y cómo se estructura la reclamación. Evaluamos si el O&P aplica a su expediente y documentamos la base al perseguirlo; los resultados varían según la aseguradora y las circunstancias de la reclamación.",
  },

  // Water Damage Claims (23)
  {
    id: "water-mitigation-scope",
    category: "water_damage_claims",
    question: "¿Cómo apoyan las reclamaciones de mitigación y reconstrucción por agua?",
    answer:
      "Revisamos facturas de mitigación, registros de secado, lecturas de humedad y alcances de reconstrucción para verificar su integridad. Las brechas comunes incluyen días de equipo, contención, tratamiento antimicrobiano, demolición y partidas de reconstrucción que las aseguradoras recortan en la primera revisión.",
    relatedLinks: [{ label: "Soluciones para daños por agua", href: "/solutions/water-damage" }],
  },
  {
    id: "water-drying-documentation",
    category: "water_damage_claims",
    question: "¿Qué documentación de secado revisan más de cerca las aseguradoras?",
    answer:
      "Los registros diarios de humedad, las fotos de ubicación del equipo, las lecturas atmosféricas y los objetivos de secado claros tienen peso en la revisión. Las brechas en la documentación a menudo conducen a días de equipo reducidos o cargos de mitigación disputados.",
    relatedLinks: [
      {
        label: "Guía de documentación de registros de secado",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      { label: "Soluciones para daños por agua", href: "/solutions/water-damage" },
    ],
  },
  {
    id: "resources-water-mitigation-documentation",
    category: "water_damage_claims",
    question: "¿Tienen recursos sobre documentación de reclamaciones de mitigación de agua?",
    answer:
      "Sí. Nuestra biblioteca de recursos para contratistas cubre suplementos de mitigación de agua, registros de secado, mapeo de humedad, cargos por equipos, visitas de monitoreo y recuperación ante denegaciones, escritos para equipos de campo y de suplementos.",
    relatedLinks: [
      {
        label: "Manual de suplementos para mitigación de agua",
        href: "/resources/blog/water-damage-mitigation-supplement-playbook",
      },
      {
        label: "Guía de documentación de registros de secado",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      {
        label: "Guía de documentación de agua categoría 3",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Brechas de documentación que provocan denegaciones de reclamaciones por agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      { label: "Recursos para contratistas", href: "/resources/blog" },
    ],
  },
  {
    id: "help-equipment-drying-documentation",
    category: "water_damage_claims",
    question: "¿Puede Claims Ninja revisar cargos por equipos o documentación de secado?",
    answer:
      "Sí. Revisamos registros de secado, mapas de humedad, utilización de equipos y registros de monitoreo frente a las partidas de la aseguradora, áreas comunes de disputa en expedientes de mitigación de agua. Una documentación de campo sólida respalda los días de equipo y las visitas de monitoreo en la revisión de escritorio.",
    relatedLinks: [
      {
        label: "Cargos por equipos en reclamaciones por daños por agua",
        href: "/resources/blog/equipment-charges-water-damage-claims",
      },
      {
        label: "Guía de documentación de registros de secado",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      {
        label: "Documentación de monitoreo diario",
        href: "/resources/blog/daily-monitoring-documentation-best-practices",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-category-class",
    category: "water_damage_claims",
    question: "¿Ayudan con la documentación de categoría y clase de agua?",
    answer:
      "Sí. Nos aseguramos de que las notas de campo, las fotos y las partidas estén alineadas con cómo se clasificó la pérdida. La falta de alineación entre la narrativa de mitigación y el alcance facturado es una razón común por la que las aseguradoras reducen el pago.",
    relatedLinks: [
      {
        label: "Guía de documentación de categoría y clase",
        href: "/resources/guides/water-damage/category-class-documentation-guide",
      },
      {
        label: "Guía de documentación de agua categoría 3",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      { label: "Soluciones para daños por agua", href: "/solutions/water-damage" },
    ],
  },
  {
    id: "water-rebuild-supplements",
    category: "water_damage_claims",
    question: "¿Pueden los suplementos cubrir tanto mitigación como reconstrucción?",
    answer:
      "Por supuesto. Muchas reclamaciones por agua abarcan servicios de emergencia y reconstrucción. Hacemos seguimiento de ambas fases, comparamos los alcances de la aseguradora con las condiciones de campo y perseguimos partidas faltantes en mitigación y construcción.",
  },
  {
    id: "water-emergency-vs-rebuild",
    category: "water_damage_claims",
    question: "¿Cómo manejan el servicio de emergencia frente a la reconstrucción en la misma reclamación?",
    answer:
      "Separamos la documentación de mitigación de la estimación de reconstrucción para que las aseguradoras puedan seguir la línea de tiempo. Una separación clara de fases reduce la confusión cuando los ajustadores revisan cargos por equipos junto con el alcance de reconstrucción terminada.",
  },
  {
    id: "water-commercial-losses",
    category: "water_damage_claims",
    question: "¿Apoyan pérdidas comerciales por agua?",
    answer:
      "Sí. Las reclamaciones comerciales por agua a menudo involucran áreas de secado mayores, consideraciones de interrupción del negocio y alcances de reconstrucción de múltiples oficios. La organización de la documentación se vuelve crítica a esa escala.",
    relatedLinks: [
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Soluciones de daños por agua",
        href: "/solutions/water-damage",
      },
    ],
  },
  {
    id: "water-commercial-claims-documentation",
    category: "water_damage_claims",
    question: "¿Cómo se documentan las reclamaciones comerciales por agua?",
    answer:
      "Las reclamaciones comerciales por agua requieren documentación por zonas acorde a la huella de la propiedad: admisión y plan de documentación, mapas de humedad por cámara, registros de equipos con etiquetas de activos, registros diarios de secado, registros de impacto a inquilinos en propiedades ocupadas, prueba de contención y HEPA, y paquetes de cierre indexados. Trate pérdidas retail, oficina y multifamiliar con indexación separada por suite o unidad — no patrones de archivo residencial único.",
    relatedLinks: [
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Guía de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
    ],
  },
  {
    id: "water-apartment-loss-documentation",
    category: "water_damage_claims",
    question: "¿Qué documentación se requiere para pérdidas por agua en apartamentos?",
    answer:
      "Documente cada unidad afectada con número de unidad, piso y posición en el stack en fotos, mapas de humedad y registros de secado. Separe el alcance dentro de la unidad de las áreas comunes. Mantenga registros de acceso e impacto a inquilinos alineados con visitas de monitoreo. Capture lecturas base por unidad antes de instalar equipos y lecturas terminales al cierre — la evidencia por unidad evita reducciones proporcionales cuando las aseguradoras no pueden verificar el alcance por unidad facturada.",
    relatedLinks: [
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Documentación de daños por agua en complejos de apartamentos",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Guía de monitoreo diario",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
    ],
  },
  {
    id: "water-multifamily-loss-documentation",
    category: "water_damage_claims",
    question: "¿Cómo debe documentarse el daño por agua multifamiliar?",
    answer:
      "Trate cada unidad afectada como una cámara de secado separada con nomenclatura consistente en mapas, registros y fotos. Documente migración vertical en límites del stack y alcance de áreas comunes separado de las unidades. Coordine acceso con administración de la propiedad y registre cada evento de entrada. Suplementos por fases con revisiones de mapas fechadas cuando el alcance se expande entre pisos o unidades — los archivos multifamiliares fusionados fallan en revisión cuando la evidencia por unidad no está diferenciada.",
    relatedLinks: [
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Documentación de daños por agua en complejos de apartamentos",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Guía de recolección de registros de secado",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
    ],
  },
  {
    id: "water-commercial-claims-scrutiny",
    category: "water_damage_claims",
    question: "¿Por qué las reclamaciones comerciales por agua reciben mayor escrutinio?",
    answer:
      "Totales de factura más altos activan revisión especializada de escritorio y auditoría de terceros. Las aseguradoras reconcilian utilización de equipos, visitas de monitoreo y alcance de secado multicomercio contra fotos con etiquetas de activos y registros diarios — no macros de estimación. Coordinación con inquilinos, superposición con interrupción del negocio y suplementos por fases añaden capas de revisión que los archivos residenciales rara vez enfrentan. Evidencia débil por zona invita reducciones proporcionales en todo el archivo comercial.",
    relatedLinks: [
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Cargos de equipos que recortan de reclamaciones por agua",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-commercial-mitigation-package",
    category: "water_damage_claims",
    question: "¿Qué debe incluir un paquete de mitigación comercial?",
    answer:
      "Un paquete de cierre comercial indexado: plan de documentación, registros de admisión, mapas de humedad por zona, registros de secado cronológicos por cámara, prueba de equipos con etiquetas de activos, registros de contención y HEPA, registro de impacto a inquilinos, notas de contenidos cuando aplique, lecturas terminales y documentación de retiro de equipos. Referencie cruzadamente cada partida facturada con evidencia fechada por zona — no un volcado de fotos estilo residencial único.",
    relatedLinks: [
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "FAQ de paquete final de mitigación",
        href: "/faq#faq-water-final-mitigation-package",
      },
    ],
  },
  {
    id: "water-tenant-impact-documentation",
    category: "water_damage_claims",
    question: "¿Cómo deben documentarse los impactos a inquilinos?",
    answer:
      "Mantenga un registro de impacto a inquilinos desde la movilización: avisos de reubicación o habitabilidad, restricciones de acceso, coordinación con administración de la propiedad, interrupción de contenidos y marcas de tiempo de comunicación. Fotografíe áreas afectadas a inquilinos con identificadores de unidad y documente autorización de acceso. Alinee entradas del registro con registros de mitigación por unidad — la producción en edificios ocupados debe coincidir con documentación de acceso y coordinación en revisión de escritorio.",
    relatedLinks: [
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "water-business-interruption-documentation",
    category: "water_damage_claims",
    question: "¿Qué documentación respalda reclamaciones de interrupción del negocio?",
    answer:
      "Los contratistas de mitigación documentan impacto operacional contemporáneo: áreas cerradas al negocio, tiempo de inactividad de producción, requisitos fuera de horario y liberación por zonas con fotos fechadas y registros de acceso. Esto apoya narrativas de BI del asegurado pero no reemplaza el análisis de cobertura entre asegurado y aseguradora. Separe evidencia de mitigación de registros financieros del asegurado — documentación de campo sólida ayuda a alinear cronologías de secado con continuidad del negocio sin confundir tipos de reclamación.",
    relatedLinks: [
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Soluciones de daños por agua",
        href: "/solutions/water-damage",
      },
    ],
  },
  {
    id: "water-commercial-claims-underpaid",
    category: "water_damage_claims",
    question: "¿Qué causa que las reclamaciones comerciales por agua se paguen menos?",
    answer:
      "Factores comunes: estructura de archivo residencial en huellas multizona, equipos facturados sin prueba de ubicación con etiquetas de activos, brechas de monitoreo entre cámaras, unidades multifamiliares fusionadas en registros únicos, registros de acceso a inquilinos ausentes y paquetes de cierre sin referencia cruzada indexada por partida. Las aseguradoras aplican reducciones proporcionales cuando cualquier zona carece de evidencia contemporánea — documentación organizada por zona fortalece argumentos de recuperación y suplementos.",
    relatedLinks: [
      {
        label: "Reclamaciones de agua multifamiliar que se pagan por debajo del valor",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Brechas de documentación que provocan denegaciones",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Recuperación de denegación de suplemento por agua",
        href: "/resources/blog/water-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "water-apartment-complex-documentation",
    category: "water_damage_claims",
    question: "¿Cómo debe documentarse el daño por agua en complejos de apartamentos?",
    answer:
      "Documente pérdidas por agua en complejos de apartamentos con indexación unidad por unidad desde la admisión hasta el cierre: fotos con número de unidad, mapas de humedad por unidad afectada y área común, registros de secado cronológicos por cámara, registros de equipos con etiquetas de activos por unidad, registros de impacto a inquilinos alineados con eventos de acceso y lecturas terminales en IDs de puntos de mapa persistentes. Separe el alcance dentro de la unidad de pasillos, cuartos de servicio y amenidades compartidas — los archivos estilo residencial fusionados fallan en revisión de escritorio en huellas multifamiliares.",
    relatedLinks: [
      {
        label: "Documentación de daños por agua en complejos de apartamentos",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Guía de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
    ],
  },
  {
    id: "water-apartment-unit-separate-tracking",
    category: "water_damage_claims",
    question: "¿Deben los contratistas rastrear cada unidad de apartamento afectada por separado?",
    answer:
      "Sí. Trate cada unidad de apartamento afectada como una cámara de secado separada con números de unidad consistentes en mapas, registros de secado, fotos y registros de equipos. Los revisores de escritorio comparan el alcance facturado con evidencia por unidad — los archivos multifamiliares indiferenciados invitan reducciones proporcionales en todo el complejo cuando cualquier unidad carece de documentación contemporánea.",
    relatedLinks: [
      {
        label: "Documentación de daños por agua en complejos de apartamentos",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "¿Qué documentación se requiere para pérdidas por agua en apartamentos?",
        href: "/faq#faq-water-apartment-loss-documentation",
      },
    ],
  },
  {
    id: "water-apartment-equipment-usage-documentation",
    category: "water_damage_claims",
    question: "¿Qué documentación respalda el uso de equipos en pérdidas por agua en apartamentos?",
    answer:
      "Fotos con etiquetas de activos al instalar y retirar por unidad, filas de equipos en registros de secado que coincidan con conteos desplegados, fotos de ubicación en ángulo amplio con etiquetas de unidad y habitación visibles, y referencia cruzada con límites de cámara en el mapa de humedad. Equipos facturados sin prueba de ubicación por unidad invitan reducciones proporcionales — las fotos a nivel de edificio no defienden partidas de ventiladores, deshumidificadores o purificadores por unidad en archivos multifamiliares.",
    relatedLinks: [
      {
        label: "Documentación de daños por agua en complejos de apartamentos",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Guía de documentación de equipos",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Cargos de equipos que recortan de reclamaciones por agua",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-apartment-mitigation-claims-disputed",
    category: "water_damage_claims",
    question: "¿Por qué las reclamaciones de mitigación por agua en apartamentos se disputan con frecuencia?",
    answer:
      "Totales de factura más altos activan revisión especializada de escritorio. Las aseguradoras disputan archivos de apartamentos cuando se aplica estructura de documentación residencial a huellas multifamiliares — registros fusionados, mapas indiferenciados, registros de acceso a inquilinos ausentes y equipos facturados sin prueba de ubicación por unidad. La migración vertical entre límites del stack y el alcance de áreas comunes fusionado en archivos de unidades añade capas de revisión que producen reducciones proporcionales en lugar de recortes aislados por unidad.",
    relatedLinks: [
      {
        label: "Reclamaciones de agua multifamiliar que se pagan por debajo del valor",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Documentación de daños por agua en complejos de apartamentos",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Brechas de documentación que provocan denegaciones",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "water-apartment-tenant-impact-required",
    category: "water_damage_claims",
    question: "¿Deben documentarse los impactos a inquilinos durante pérdidas por agua en apartamentos?",
    answer:
      "Sí. Mantenga un registro de impacto a inquilinos desde la movilización: autorización de administración de la propiedad, restricciones de acceso, avisos de habitabilidad, coordinación de reubicación e interrupción de contenidos con identificadores de unidad y marcas de tiempo. La producción en edificios ocupados debe coincidir con documentación de acceso y coordinación en revisión de escritorio — partidas de monitoreo en unidades restringidas sin registros de acceso invitan recortes de días de visita.",
    relatedLinks: [
      {
        label: "Documentación de daños por agua en complejos de apartamentos",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "¿Cómo deben documentarse los impactos a inquilinos?",
        href: "/faq#faq-water-tenant-impact-documentation",
      },
    ],
  },
  {
    id: "water-multifamily-claims-underpaid",
    category: "water_damage_claims",
    question: "¿Por qué las reclamaciones de agua multifamiliar se pagan por debajo del valor?",
    answer:
      "Las reclamaciones de agua multifamiliar se pagan por debajo del valor cuando la documentación no respalda el alcance facturado por unidad y área común: archivos estilo residencial fusionados, falta de indexación unidad por unidad, evidencia omitida de áreas comunes, equipos facturados sin prueba de colocación, registros de monitoreo con vacíos, impacto a inquilinos no documentado y partidas de factura sin referencia cruzada a registros de campo fechados. Totales de factura más altos activan revisión especializada de escritorio — siguen reducciones proporcionales cuando cualquier cámara carece de evidencia contemporánea.",
    relatedLinks: [
      {
        label: "Reclamaciones de agua multifamiliar que se pagan por debajo del valor",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "¿Qué causa que las reclamaciones comerciales por agua se paguen por debajo del valor?",
        href: "/faq#faq-water-commercial-claims-underpaid",
      },
    ],
  },
  {
    id: "water-multifamily-units-documentation",
    category: "water_damage_claims",
    question: "¿Cómo deben los contratistas documentar las unidades afectadas en reclamaciones de agua multifamiliar?",
    answer:
      "Trate cada unidad afectada como una cámara de secado separada con números de unidad consistentes en mapas de humedad, registros de secado, fotos y registros de equipos. Capture condiciones a nivel de habitación con fotos específicas por unidad, lecturas de humedad base y terminales en IDs de puntos de mapa persistentes, y separe el alcance interior del de áreas comunes. La indexación unidad por unidad desde la recepción hasta el cierre evita reducciones proporcionales cuando los revisores de escritorio no pueden vincular partidas facturadas a evidencia por unidad.",
    relatedLinks: [
      {
        label: "Reclamaciones de agua multifamiliar que se pagan por debajo del valor",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Documentación de daños por agua en complejos de apartamentos",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "¿Deben los contratistas rastrear cada unidad de apartamento afectada por separado?",
        href: "/faq#faq-water-apartment-unit-separate-tracking",
      },
    ],
  },
  {
    id: "water-multifamily-equipment-reductions",
    category: "water_damage_claims",
    question: "¿Por qué las aseguradoras reducen cargos de equipos en pérdidas de agua multifamiliar?",
    answer:
      "Las aseguradoras reducen cargos de equipos en pérdidas multifamiliar cuando ventiladores, deshumidificadores y equipos especializados se facturan sin prueba de colocación por unidad o zona. Fotos de etiquetas de activos faltantes, mapas de equipos ausentes vinculados a límites de cámara, conteos de unidades no respaldados que exceden el despliegue máximo verificado por foto y verificación diaria incompleta en registros de secado provocan recortes proporcionales — las fotos a nivel de edificio no defienden partidas de equipos por unidad en archivos de apartamentos, HOAs o condominios.",
    relatedLinks: [
      {
        label: "Reclamaciones de agua multifamiliar que se pagan por debajo del valor",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Cargos de equipos que se recortan de reclamaciones por agua",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
      {
        label: "Guía de documentación de equipos",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
    ],
  },
  {
    id: "water-multifamily-tenant-impact-documentation",
    category: "water_damage_claims",
    question: "¿Debe documentarse el impacto a inquilinos en reclamaciones de agua multifamiliar?",
    answer:
      "Sí. Mantenga registros de impacto a inquilinos desde la movilización en propiedades multifamiliar ocupadas: autorización de administración de la propiedad, restricciones de acceso, avisos de habitabilidad, coordinación de reubicación temporal, manipulación de contenidos y limitaciones de programación con identificadores de unidad y marcas de tiempo. La producción y el monitoreo en unidades ocupadas sin registros de acceso invitan recortes de días de visita y mano de obra en revisión de escritorio.",
    relatedLinks: [
      {
        label: "Reclamaciones de agua multifamiliar que se pagan por debajo del valor",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Documentación de daños por agua en complejos de apartamentos",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
      {
        label: "¿Deben documentarse los impactos a inquilinos durante pérdidas por agua en apartamentos?",
        href: "/faq#faq-water-apartment-tenant-impact-required",
      },
    ],
  },
  {
    id: "water-multifamily-full-payment-support",
    category: "water_damage_claims",
    question: "¿Cómo pueden los contratistas respaldar el pago completo en reclamaciones de agua multifamiliar?",
    answer:
      "Elabore paquetes de cierre indexados con mapas, registros y fotos unidad por unidad; documentación de áreas comunes separada; registros de equipos con etiquetas de activos por cámara; monitoreo diario con lecturas de liberación terminal; registros de impacto a inquilinos alineados a eventos de acceso; y referencia cruzada de partidas que vincule cargos de factura a evidencia fechada. Presente mientras la narrativa de secado esté activa o inmediatamente después de la liberación — la documentación organizada por zona fortalece la aprobación inicial y la recuperación por suplemento en pérdidas de apartamentos, HOAs y condominios.",
    relatedLinks: [
      {
        label: "Reclamaciones de agua multifamiliar que se pagan por debajo del valor",
        href: "/resources/blog/multifamily-water-claims-that-get-underpaid",
      },
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "water-commercial-documentation-missing",
    category: "water_damage_claims",
    question: "¿Qué documentación suele faltar en reclamaciones comerciales por agua?",
    answer:
      "Los elementos que más faltan en archivos comerciales son mapas de humedad por zona con planos y rutas de migración, registros de secado cronológicos para cada día activo de secado, fotos de colocación de equipos con etiquetas de activos por cámara, registros de impacto a inquilinos en propiedades ocupadas, alcance de áreas comunes indexado por separado de suites, registros de monitoreo diario con datos psicrométricos y verificación terminal del estándar de secado antes de retirar equipos. La estructura de archivo residencial en huellas multizona produce reducciones proporcionales en toda la factura.",
    relatedLinks: [
      {
        label: "Errores comunes de documentación en pérdidas comerciales por agua",
        href: "/resources/blog/common-documentation-mistakes-on-commercial-water-losses",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Brechas de documentación que provocan denegaciones de reclamaciones por agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
    ],
  },
  {
    id: "water-commercial-invoice-reduced-why",
    category: "water_damage_claims",
    question: "¿Por qué se reducen las facturas de mitigación comercial por agua?",
    answer:
      "Las facturas de mitigación comercial se reducen cuando la documentación no respalda el alcance facturado a nivel de zona: los conteos de equipos superan el despliegue verificado en fotos por cámara, los registros de secado tienen vacíos entre días de secado facturados, las visitas de monitoreo carecen de lecturas en puntos activos del mapa, el acceso a inquilinos no está documentado en propiedades ocupadas, el alcance de áreas comunes se factura sin evidencia indexada, o las horas de mano de obra carecen de prueba contemporánea del alcance. Los totales más altos activan revisión especializada y recortes proporcionales en lugar de denegaciones totales.",
    relatedLinks: [
      {
        label: "Errores comunes de documentación en pérdidas comerciales por agua",
        href: "/resources/blog/common-documentation-mistakes-on-commercial-water-losses",
      },
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "¿Por qué las aseguradoras reducen las facturas de mitigación de agua?",
        href: "/faq#faq-water-mitigation-invoice-reductions",
      },
    ],
  },
  {
    id: "water-commercial-tenant-impact-required",
    category: "water_damage_claims",
    question: "¿Deben documentarse los impactos a inquilinos en pérdidas comerciales por agua?",
    answer:
      "Sí. Mantenga un registro de impacto a inquilinos desde la movilización en propiedades comerciales ocupadas: autorización de administración de la propiedad, restricciones de acceso, avisos de habitabilidad, coordinación de reubicación, limitaciones de programación e interrupción de contenidos con identificadores de zona y marcas de tiempo. La producción en edificios ocupados debe coincidir con documentación de acceso y coordinación en revisión de escritorio — partidas de monitoreo y mano de obra en zonas restringidas sin registros de acceso invitan recortes proporcionales.",
    relatedLinks: [
      {
        label: "Errores comunes de documentación en pérdidas comerciales por agua",
        href: "/resources/blog/common-documentation-mistakes-on-commercial-water-losses",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "¿Cómo deben documentarse los impactos a inquilinos?",
        href: "/faq#faq-water-tenant-impact-documentation",
      },
    ],
  },
  {
    id: "water-commercial-common-area-documentation",
    category: "water_damage_claims",
    question: "¿Cómo deben documentarse las áreas comunes durante la mitigación comercial por agua?",
    answer:
      "Documente áreas comunes — pasillos, cuartos de servicio, espacios mecánicos, amenidades compartidas y oficinas de arrendamiento — como zonas nombradas con mapas de humedad, registros de secado y narrativa fotográfica independientes indexados por separado del alcance de suites o unidades. Mapee la humedad de corredores con IDs de punto independientes de cámaras adyacentes. La documentación de origen de sistemas compartidos pertenece a armarios de risers y espacios mecánicos. Fusionar alcance de áreas comunes en archivos de suites produce recortes proporcionales cuando los revisores no pueden conciliar partidas facturadas.",
    relatedLinks: [
      {
        label: "Errores comunes de documentación en pérdidas comerciales por agua",
        href: "/resources/blog/common-documentation-mistakes-on-commercial-water-losses",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "Documentación de daños por agua en complejos de apartamentos",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
    ],
  },
  {
    id: "water-commercial-documentation-invoice-match",
    category: "water_damage_claims",
    question: "¿Por qué debe coincidir la documentación comercial con la factura de mitigación?",
    answer:
      "Los revisores de escritorio aprueban facturas comerciales línea por línea contra evidencia fechada. Cuando la documentación no coincide con la factura — horas de mano de obra sin prueba contemporánea, conteos de equipos que superan el despliegue verificado en fotos, días de secado que superan lecturas terminales de liberación, o alcance facturado sin revisiones contemporáneas del mapa — las aseguradoras aplican reducciones proporcionales en todo el archivo. Paquetes de cierre indexados donde cada partida facturada referencia mapas de humedad, registros de secado, prueba de equipos y registros de monitoreo previenen recortes predecibles al enviar.",
    relatedLinks: [
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Errores comunes de documentación en pérdidas comerciales por agua",
        href: "/resources/blog/common-documentation-mistakes-on-commercial-water-losses",
      },
      {
        label: "¿Qué documentación respalda las facturas de mitigación de agua?",
        href: "/faq#faq-water-mitigation-invoice-documentation",
      },
    ],
  },
  {
    id: "water-mitigation-invoice-reductions",
    category: "water_damage_claims",
    question: "¿Por qué las aseguradoras reducen las facturas de mitigación de agua?",
    answer:
      "Las aseguradoras reducen las facturas de mitigación cuando la documentación no respalda el alcance facturado: los conteos de equipos superan el despliegue verificado en fotos, los registros de secado tienen vacíos entre los días de secado facturados, las visitas de monitoreo carecen de lecturas en los puntos activos del mapa, las horas de mano de obra carecen de prueba contemporánea del alcance, o las partidas de categoría 2 y 3 carecen de evidencia de clasificación en la admisión. Las reducciones suelen ser proporcionales en lugar de denegaciones totales: se recortan días, unidades o habitaciones no respaldados mientras el alcance parcialmente respaldado permanece aprobado.",
    relatedLinks: [
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Vacíos de documentación que provocan denegaciones de reclamaciones por agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "¿Por qué las aseguradoras reducen las facturas de mitigación categoría 3?",
        href: "/faq#faq-water-category-3-invoice-reductions",
      },
    ],
  },
  {
    id: "water-mitigation-invoice-documentation",
    category: "water_damage_claims",
    question: "¿Qué documentación respalda las facturas de mitigación de agua?",
    answer:
      "Prepare un paquete indexado que cruce cada partida facturada con evidencia fechada: fotos etiquetadas desde la admisión hasta el cierre, mapas de humedad base con IDs de puntos de lectura consistentes, registros de secado cronológicos para cada día activo de secado, prueba de ubicación de equipos alineada con las filas del registro de secado, registros de monitoreo para cada día de visita facturado, notas de clasificación de categoría en pérdidas contaminadas y verificación terminal del estándar de secado antes de retirar el equipo. La reconciliación previa a la factura detecta vacíos antes del envío.",
    relatedLinks: [
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "¿Qué documentación debe incluirse en un expediente de mitigación de agua?",
        href: "/faq#faq-water-mitigation-file-documentation",
      },
      {
        label: "Guía de recolección de registros de secado",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
    ],
  },
  {
    id: "water-defend-drying-day-charges",
    category: "water_damage_claims",
    question: "¿Cómo pueden los contratistas defender los cargos por días de secado?",
    answer:
      "Defienda los días de secado con lecturas de humedad base antes de instalar el equipo, lecturas diarias en los mismos IDs de puntos del mapa en cada visita de monitoreo, narrativas de progreso cuando las lecturas se estancan o retroceden, y lecturas terminales de liberación comparadas con el estándar de secado antes de retirar el equipo. Alinee la fecha de retiro del equipo, la última entrada del registro de secado y las fotos de liberación: los vacíos entre las lecturas terminales y el último día facturado provocan recortes del último día de equipo en la revisión de escritorio.",
    relatedLinks: [
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
      {
        label: "¿Cómo respaldan los registros de secado los días adicionales de secado?",
        href: "/faq#faq-water-dry-log-additional-drying-days",
      },
    ],
  },
  {
    id: "water-equipment-invoice-documentation",
    category: "water_damage_claims",
    question: "¿Cómo debe documentarse el uso de equipos para la revisión de facturas?",
    answer:
      "Documente el equipo con fotos amplias de ubicación que muestren el conteo de unidades por cámara, filas de equipos en el registro de secado con tipo y asignación de habitación en cada día activo de secado, fotos del despliegue máximo que coincidan con los conteos máximos facturados, y registros fechados de movimientos o liberaciones parciales del equipo. Reconcilie los conteos verificados en fotos y los días registrados con los ventiladores, deshumidificadores y equipos especializados facturados antes del envío de la factura: las discrepancias de conteo son el principal desencadenante de recortes proporcionales de equipo.",
    relatedLinks: [
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Guía de documentación de equipos",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Cargos de equipo que recortan de reclamaciones por agua",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-mitigation-invoice-review-failures",
    category: "water_damage_claims",
    question: "¿Qué hace que las facturas de mitigación de agua fallen en la revisión?",
    answer:
      "Las facturas fallan en la revisión de escritorio cuando los registros de secado tienen vacíos entre los días de equipo facturados, faltan informes de monitoreo para los días de visita facturados, la documentación de equipos carece de fotos de ubicación o muestra menos unidades que las facturadas, los mapas de humedad no tienen lecturas base o IDs de puntos inconsistentes, las fotos no están etiquetadas o son solo posteriores a la limpieza, o las narrativas de factura carecen de evidencia cruzada. Los expedientes débiles producen reducciones proporcionales en múltiples partidas en lugar de una denegación formal: los contratistas lo experimentan como que la aseguradora pagó, pero no lo facturado.",
    relatedLinks: [
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Vacíos de documentación que provocan denegaciones de reclamaciones por agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "¿Por qué las aseguradoras reducen los cargos de equipo?",
        href: "/faq#faq-water-equipment-charge-reductions",
      },
    ],
  },
  {
    id: "water-category-3-qualifies",
    category: "water_damage_claims",
    question: "¿Qué califica como agua categoría 3?",
    answer:
      "El agua categoría 3 está gravemente contaminada según las definiciones IICRC — las fuentes comunes incluyen respaldo de aguas residuales, desbordamiento de inodoro, intrusión de río o inundación exterior, y agua estancada con carga de contaminantes desconocida. Asigne la clasificación en la admisión con tipo de fuente, contaminación visible, indicadores de olor, tiempo de permanencia y porosidad del material afectado documentados en notas y fotos contemporáneas. La categoría 3 no es una etiqueta aplicada retroactivamente en la factura sin evidencia de admisión — los revisores de escritorio degradan actualizaciones no respaldadas.",
    relatedLinks: [
      {
        label: "Guía de documentación de agua categoría 3",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de categoría y clase",
        href: "/resources/guides/water-damage/category-class-documentation-guide",
      },
    ],
  },
  {
    id: "water-category-3-documentation-required",
    category: "water_damage_claims",
    question: "¿Qué documentación se requiere para una reclamación de agua categoría 3?",
    answer:
      "Construya un expediente que vincule la producción con el alcance facturado: notas de inspección de admisión, clasificación de fuente categoría 3, inventario de áreas afectadas, fotos etiquetadas con marca de tiempo, mapa de humedad de referencia, registros de secado diarios, prueba de colocación de equipos, registros de demolición y eliminación, notas de control de contaminación y lecturas terminales del estándar de secado. Referencie cruzadamente cada línea sensible a la categoría — PPE, eliminación, antimicrobiano, días de equipos y visitas de monitoreo — con un documento en el paquete. Un expediente de reclamación indexado ayuda a los revisores de escritorio a evaluar el alcance sin solicitar seguimientos fragmentados.",
    relatedLinks: [
      {
        label: "Guía de documentación de agua categoría 3",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Lista de verificación de admisión de mitigación",
        href: "/resources/guides/water-damage/mitigation-intake-checklist",
      },
    ],
  },
  {
    id: "water-category-3-invoice-reductions",
    category: "water_damage_claims",
    question: "¿Por qué las aseguradoras reducen las facturas de mitigación categoría 3?",
    answer:
      "Los revisores de escritorio recortan comúnmente cargos de categoría 3 cuando los registros de secado tienen vacíos, los mapas de humedad no coinciden con el croquis de la aseguradora, las fotos están sin etiquetar o son posteriores a la limpieza, los días de equipos carecen de prueba de colocación, las líneas sensibles a la categoría carecen de evidencia de clasificación de admisión, o el alcance de demolición carece de fotos de antes y después. Las reducciones suelen ser proporcionales — los días o habitaciones no respaldados se recortan en lugar de denegarse por completo. La documentación débil obliga a suplementos defensivos en lugar de recuperación proactiva en pérdidas contaminadas.",
    relatedLinks: [
      {
        label: "Guía de documentación de agua categoría 3",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Por qué las reclamaciones de agua categoría 3 reciben pagos insuficientes",
        href: "/resources/blog/why-category-3-water-claims-get-underpaid",
      },
    ],
  },
  {
    id: "water-moisture-maps-required",
    category: "water_damage_claims",
    question: "¿Se requieren mapas de humedad para reclamaciones por daños por agua?",
    answer:
      "Las aseguradoras esperan un mapa de humedad de referencia en expedientes de mitigación de agua — establece el conteo de habitaciones afectadas, humedad oculta en cavidades y diseño de cámara antes de que la revisión de escritorio defina un alcance de plantilla. Produzca un croquis o mapa de software con IDs de puntos de lectura, valores de referencia, tipo de medidor y etiquetas de habitación que coincidan con el croquis de la aseguradora y el presupuesto. Los mapas dibujados solo al final del trabajo o con nombres de habitación inconsistentes con los registros de secado debilitan argumentos de conteo de habitaciones y humedad oculta en la revisión de suplemento.",
    relatedLinks: [
      {
        label: "Procedimiento de campo de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Mejores prácticas de mapeo de humedad",
        href: "/resources/blog/moisture-mapping-best-practices-insurance-claims",
      },
      {
        label: "Errores de mapeo de humedad que cuestan dinero a los contratistas",
        href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-moisture-map-contents",
    category: "water_damage_claims",
    question: "¿Qué debe incluir un mapa de humedad?",
    answer:
      "Incluya un plano de planta o diagrama del sitio con etiquetas de habitación que coincidan con el croquis del presupuesto, puntos de lectura numerados con valores iniciales de humedad y tipo de medidor en cada ubicación, límites húmedo/seco y rutas de migración, tipos de materiales afectados por zona, y cámaras de secado planificadas con perímetros de contención. Asigne IDs de puntos de lectura en la admisión y use los mismos IDs en cada visita posterior hasta el cierre. Los mapas que omiten humedad oculta en cavidades o diseño de cámara dejan argumentos de conteo de deshumidificadores y secado extendido sin respaldo en la revisión de escritorio.",
    relatedLinks: [
      {
        label: "Procedimiento de campo de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Mejores prácticas de mapeo de humedad",
        href: "/resources/blog/moisture-mapping-best-practices-insurance-claims",
      },
      {
        label: "Errores de mapeo de humedad que cuestan dinero a los contratistas",
        href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
      },
    ],
  },
  {
    id: "water-moisture-reading-frequency",
    category: "water_damage_claims",
    question: "¿Con qué frecuencia deben documentarse las lecturas de humedad?",
    answer:
      "Capture lecturas de humedad en cada visita de monitoreo mientras los equipos estén funcionando — típicamente una vez por día activo de secado en todos los puntos activos del mapa. Las lecturas de referencia pertenecen al mapa de admisión antes de instalar equipos; las visitas posteriores deben usar los mismos IDs de puntos hasta las lecturas terminales de liberación. Omitir lecturas en días de monitoreo facturados o cambiar IDs de puntos a mitad del trabajo da a los revisores de escritorio motivo para reducir días de equipos y recortar cargos de monitoreo.",
    relatedLinks: [
      {
        label: "Procedimiento de campo de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Procedimiento de monitoreo diario",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
      {
        label: "Errores de mapeo de humedad que cuestan dinero a los contratistas",
        href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-dry-log-update-frequency",
    category: "water_damage_claims",
    question: "¿Con qué frecuencia deben actualizarse los registros de secado?",
    answer:
      "Complete una entrada de registro de secado en cada día activo de secado mientras los equipos estén funcionando — una entrada por día de equipos facturado, ingresada en la misma fecha calendaria que la visita en sitio. Los vacíos entre visitas de monitoreo son una razón común por la que las aseguradoras reducen días de equipos y recortan cargos de monitoreo en pérdidas contaminadas. Si los equipos funcionan en fines de semana o días festivos, regístrelo — los vacíos silenciosos justifican recortes proporcionales en todo el período de facturación.",
    relatedLinks: [
      {
        label: "Procedimiento de recolección de registros de secado",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Guía de documentación de registros de secado",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-dry-log-contents",
    category: "water_damage_claims",
    question: "¿Qué información pertenece a un registro de secado?",
    answer:
      "Cada entrada del registro de secado debe incluir la fecha de visita, nombre del técnico, lecturas atmosféricas, valores de humedad del material en todos los puntos activos del mapa, filas de tipo y conteo de equipos por habitación o cámara, estado del objetivo de secado, y una narrativa de progreso cuando las lecturas se estancan o regresan. Documente lecturas de liberación en cada punto activo antes del retiro de equipos — los recortes del último día son comunes cuando faltan valores terminales. IDs de puntos consistentes desde la admisión hasta el cierre vinculan las entradas del registro con el mapa de humedad y el croquis de la aseguradora.",
    relatedLinks: [
      {
        label: "Procedimiento de recolección de registros de secado",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Guía de documentación de registros de secado",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-dry-log-additional-drying-days",
    category: "water_damage_claims",
    question: "¿Cómo respaldan los registros de secado días adicionales de secado?",
    answer:
      "Los registros de secado defienden el secado extendido cuando la cronología muestra materiales tendiendo hacia el estándar de secado con notas contemporáneas de estancamiento — lecturas de estancamiento o regresión, cambios de equipos, y una narrativa que explique por qué permanecen días adicionales necesarios. Documente lecturas de liberación en cada punto activo antes del retiro de equipos. Las aseguradoras reducen la duración del secado cuando faltan lecturas de estancamiento o existen vacíos entre días facturados y entradas del registro.",
    relatedLinks: [
      {
        label: "Procedimiento de recolección de registros de secado",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Guía de documentación de agua categoría 3",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-air-mover-documentation",
    category: "water_damage_claims",
    question: "¿Cómo deben documentarse los ventiladores?",
    answer:
      "Fotografíe la colocación de ventiladores en la instalación inicial y después de cada cambio de conteo o reubicación — tomas amplias que muestren el conteo por habitación con etiquetas de habitación que coincidan con el croquis de la aseguradora. Registre conteos de unidades y asignaciones de habitación en el registro de secado para cada día facturado. Fotografíe el despliegue máximo cuando aumente el conteo de unidades — los revisores de escritorio reducen las unidades facturadas al conteo máximo verificado en fotos. Las fechas de inicio y fin deben vincularse a lecturas de liberación antes del retiro de equipos.",
    relatedLinks: [
      {
        label: "Procedimiento de documentación de equipos de mitigación",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Cargos por equipos en reclamaciones por daños por agua",
        href: "/resources/blog/equipment-charges-water-damage-claims",
      },
      {
        label: "Cargos de equipos que recortan en reclamaciones de agua",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-dehumidifier-documentation",
    category: "water_damage_claims",
    question: "¿Qué respalda los cargos de deshumidificadores?",
    answer:
      "Documente la colocación de deshumidificadores con fotos amplias que muestren el conteo de unidades por cámara, filas de equipos del registro de secado con tipo y asignación de habitación o cámara, y diseño de cámara del mapa de humedad que justifique el conteo de unidades. Registre tiempo de funcionamiento y lecturas ambientales en cada visita de monitoreo — las tendencias de depresión de granos y humedad relativa respaldan argumentos de utilización. Concilie conteos máximos verificados en fotos y días registrados con cantidades facturadas antes del envío de la factura.",
    relatedLinks: [
      {
        label: "Procedimiento de documentación de equipos de mitigación",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Procedimiento de campo de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
      {
        label: "Cargos de equipos que recortan en reclamaciones de agua",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-equipment-charge-reductions",
    category: "water_damage_claims",
    question: "¿Por qué las aseguradoras de seguros reducen los cargos de equipos?",
    answer:
      "Los revisores de escritorio recortan líneas de equipos cuando faltan fotos de colocación o no están fechadas, las filas del registro de secado no coinciden con conteos de unidades facturados, el despliegue máximo no está fotografiado, o los días facturados exceden los días registrados. Las reducciones suelen ser proporcionales — las unidades o días no respaldados se recortan en lugar de denegarse por completo. La conciliación de oficina antes del envío de la factura detecta brechas donde la documentación de campo no respalda líneas de ventiladores, deshumidificadores o purificadores de aire.",
    relatedLinks: [
      {
        label: "Procedimiento de documentación de equipos de mitigación",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Cargos por equipos en reclamaciones por daños por agua",
        href: "/resources/blog/equipment-charges-water-damage-claims",
      },
      {
        label: "Cargos de equipos que recortan en reclamaciones de agua",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-containment-documentation",
    category: "water_damage_claims",
    question: "¿Qué documentación respalda los cargos de contención?",
    answer:
      "Fotografíe la instalación de contención con imágenes fechadas que muestren barreras de polietileno, puertas con cremallera y perímetros de cámara que aíslen zonas afectadas de áreas limpias. Registre la configuración de contención en el registro de secado o notas del trabajo con límites de cámara que coincidan con el mapa de humedad. En pérdidas categoría 3, vincule el alcance de contención con evidencia de clasificación de admisión — las barreras no documentadas se eliminan comúnmente cuando se facturan líneas de control de contaminación sin prueba de campo.",
    relatedLinks: [
      {
        label: "Guía de documentación de agua categoría 3",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Documentación de monitoreo diario",
        href: "/resources/blog/daily-monitoring-documentation-best-practices",
      },
    ],
  },
  {
    id: "water-hepa-filtration-documentation",
    category: "water_damage_claims",
    question: "¿Qué documentación respalda el equipo de filtración HEPA?",
    answer:
      "Fotografíe la colocación de purificadores de aire HEPA con los límites de la cámara visibles en el encuadre — el conteo de unidades, enrutamiento de escape y configuración de aire negativo deben aparecer en fotos fechadas. Registre el tiempo de funcionamiento del purificador en el registro de secado para cada día facturado y anote áreas de aspirado HEPA cuando corresponda. En expedientes categoría 3, vincule el alcance de filtración con clasificación de admisión y notas de control de contaminación — las líneas HEPA facturadas sin fotos de configuración y registros de tiempo de funcionamiento son objetivos frecuentes de reducción en la revisión de escritorio.",
    relatedLinks: [
      {
        label: "Guía de documentación de agua categoría 3",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Documentación de monitoreo diario",
        href: "/resources/blog/daily-monitoring-documentation-best-practices",
      },
      {
        label: "Cargos de equipos que recortan en reclamaciones de agua",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-final-mitigation-package",
    category: "water_damage_claims",
    question: "¿Qué debe incluir un paquete final de documentación de mitigación?",
    answer:
      "Envíe un paquete indexado: inspección y clasificación de admisión, mapas de humedad con revisiones fechadas, registros de secado completos, narrativa fotográfica etiquetada, prueba de colocación de equipos, registros de demolición y eliminación, notas de control de contaminación, lecturas terminales de humedad contra el estándar de secado, fecha de retiro de equipos y fotos de liberación. Referencie cruzadamente cada línea disputada o facturada con evidencia de respaldo en el expediente. La documentación terminal cierra argumentos de duración de secado y respalda el envío de la factura final de mitigación en el cierre del proyecto.",
    relatedLinks: [
      {
        label: "Guía de documentación de agua categoría 3",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
      {
        label: "Procedimiento de recolección de registros de secado",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Brechas de documentación que provocan denegaciones de reclamaciones por agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
      {
        label: "Cargos de equipos que recortan en reclamaciones de agua",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-claim-denied-documentation",
    category: "water_damage_claims",
    question: "¿Por qué se deniegan las reclamaciones por daños de agua por problemas de documentación?",
    answer:
      "Las reclamaciones por daños de agua se deniegan o reducen por problemas de documentación cuando el expediente no puede demostrar que ocurrió mitigación cubierta, que el alcance coincidió con las condiciones de campo o que las líneas facturadas se conectan con evidencia contemporánea. Lecturas de humedad faltantes, mapas incompletos, registros de secado con brechas, fotos de equipos ausentes, entradas de monitoreo débiles, clasificación de categoría no respaldada y cierre sin verificación terminal dan a los revisores motivos para denegar suplementos, degradar alcance o rechazar reenvíos — incluso cuando el trabajo de campo fue legítimo.",
    relatedLinks: [
      {
        label: "Brechas de documentación que provocan denegaciones de reclamaciones por agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Procedimiento de recolección de registros de secado",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Recuperación de denegación de suplemento por daños de agua",
        href: "/resources/blog/water-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "water-mitigation-file-documentation",
    category: "water_damage_claims",
    question: "¿Qué documentación debe incluirse en un expediente de mitigación de agua?",
    answer:
      "Un expediente completo de mitigación de agua incluye inspección de admisión y clasificación de categoría/clase, lecturas de humedad iniciales y continuas en IDs de puntos del mapa, mapas de humedad fechados, registros de secado diarios con filas de equipos y datos atmosféricos, fotos etiquetadas de colocación de equipos, entradas de visitas de monitoreo, documentación de contención y HEPA en pérdidas contaminadas, registros de demolición y eliminación, lecturas terminales de humedad contra el estándar de secado, fecha de retiro de equipos y fotos de liberación — indexados para que cada línea facturada referencie evidencia de respaldo.",
    relatedLinks: [
      {
        label: "Brechas de documentación que provocan denegaciones de reclamaciones por agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Procedimiento de documentación de categoría/clase",
        href: "/resources/guides/water-damage/category-class-documentation-guide",
      },
      {
        label: "Procedimiento de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
    ],
  },
  {
    id: "water-moisture-readings-importance",
    category: "water_damage_claims",
    question: "¿Por qué son importantes las lecturas de humedad para las reclamaciones de seguros?",
    answer:
      "Las lecturas de humedad demuestran la extensión de humedad en la admisión, rastrean el progreso de secado en IDs de puntos del mapa y establecen el estándar de secado en el cierre — sin ellas, las aseguradoras aplican suposiciones de plantilla para alcance, duración de equipos y conteo de habitaciones. Las lecturas iniciales antes de instalar equipos defienden el área afectada; las lecturas continuas en cada visita de monitoreo defienden los días de equipos; las lecturas terminales de liberación cierran argumentos de duración al retirar equipos. Omitir lecturas en días facturados invita recortes proporcionales a la duración de secado y utilización de equipos.",
    relatedLinks: [
      {
        label: "Brechas de documentación que provocan denegaciones de reclamaciones por agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Procedimiento de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "¿Con qué frecuencia deben documentarse las lecturas de humedad?",
        href: "/faq#faq-water-moisture-reading-frequency",
      },
    ],
  },
  {
    id: "water-missing-daily-monitoring",
    category: "water_damage_claims",
    question: "¿Qué sucede si faltan los registros de monitoreo diario?",
    answer:
      "Los registros de monitoreo diario faltantes producen recortes en días de visita, reducciones en duración de equipos y denegaciones de suplementos cuando las líneas de monitoreo facturadas no pueden vincularse al análisis del técnico. Las aseguradoras recortan días de equipos cuando los registros no pueden demostrar necesidad continua de secado en cada día facturado — el monitoreo es mano de obra más interpretación, no implícito en el alquiler. La cronología con brechas entre visitas invita recortes proporcionales a días registrados o duración de plantilla, y el reenvío con notas de visita rellenadas retroactivamente debilita la credibilidad del suplemento.",
    relatedLinks: [
      {
        label: "Brechas de documentación que provocan denegaciones de reclamaciones por agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Procedimiento de monitoreo diario",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },
  {
    id: "water-final-drying-verification",
    category: "water_damage_claims",
    question: "¿Por qué las aseguradoras solicitan verificación final de secado?",
    answer:
      "Las aseguradoras solicitan verificación final de secado porque las lecturas terminales de humedad en IDs de puntos activos del mapa — comparadas con el estándar de secado de cada ensamblaje — demuestran que la estructura estaba seca antes de retirar equipos y cierran argumentos de duración en el cierre. Sin lecturas de liberación, los revisores asumen que se alcanzó el estándar de secado antes de lo facturado, produciendo recortes en el último día de equipos. La verificación final junto con la fecha de retiro, fotos de liberación y referencias cruzadas indexadas en registros respalda el envío de la factura final de mitigación y defiende contra disputas de secado anticipado.",
    relatedLinks: [
      {
        label: "Brechas de documentación que provocan denegaciones de reclamaciones por agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
      {
        label: "Procedimiento de recolección de registros de secado",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "¿Qué debe incluir un paquete final de documentación de mitigación?",
        href: "/faq#faq-water-final-mitigation-package",
      },
    ],
  },
  {
    id: "water-daily-monitoring-records-importance",
    category: "water_damage_claims",
    question: "¿Por qué son importantes los registros de monitoreo diario?",
    answer:
      "Los registros de monitoreo diario demuestran que un técnico realizó análisis en cada visita facturada — lecturas de humedad en IDs de puntos del mapa, datos atmosféricos, verificación de equipos y narrativa de progreso o estancamiento cuando los materiales se estabilizan. El monitoreo es mano de obra más interpretación, no implícito en el alquiler de equipos. Los registros de monitoreo débiles o con brechas debilitan tanto las líneas de visita como los argumentos de duración de equipos — las aseguradoras recortan días de equipos cuando los registros no pueden demostrar necesidad continua de secado en cada día facturado.",
    relatedLinks: [
      {
        label: "Procedimiento de monitoreo diario",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
      {
        label: "Procedimiento de recolección de registros de secado",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Cargos de equipos que recortan en reclamaciones de agua",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
    ],
  },

  {
    id: "water-large-loss-qualifies",
    category: "water_damage_claims",
    question: "¿Qué califica como un proyecto de mitigación de agua de gran magnitud?",
    answer:
      "La mitigación de agua de gran magnitud normalmente involucra huellas a escala empresarial donde el valor de la reclamación, la cantidad de partes interesadas y el volumen de documentación superan las plantillas comerciales estándar — hospitales, escuelas, hoteles, almacenes, instalaciones de manufactura, edificios de oficinas, grandes complejos de apartamentos y eventos catastróficos de agua que afectan múltiples pisos, alas o edificios. La calificación es operacional: programas de secado multizona, duración extendida, participación de consultores, despliegues de equipos especializados y valores de factura que activan revisión especializada y auditoría de terceros.",
    relatedLinks: [
      {
        label: "Mejores prácticas de documentación de mitigación de agua en pérdidas de gran magnitud",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "¿Apoyan pérdidas comerciales por agua?",
        href: "/faq#faq-water-commercial-losses",
      },
    ],
  },
  {
    id: "water-large-loss-documentation",
    category: "water_damage_claims",
    question: "¿Cómo debe documentarse el daño por agua de gran magnitud?",
    answer:
      "Documente el daño por agua de gran magnitud con una estructura de comando de documentación desde la movilización: segmentación por zona (piso, ala, edificio o unidad), mapas de humedad base y de progreso con IDs de puntos de lectura persistentes, registros de secado diarios y reportes de monitoreo sin brechas por zona, registros de equipos con etiquetas de activos, registros de impacto en ocupantes y operaciones, recepción de paquetes de proveedores alineada al indexado por zona, resúmenes ejecutivos de estado y paquetes de cierre indexados que referencien cada línea facturada a evidencia fechada.",
    relatedLinks: [
      {
        label: "Mejores prácticas de documentación de mitigación de agua en pérdidas de gran magnitud",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
      {
        label: "¿Cómo se documentan las reclamaciones comerciales por agua?",
        href: "/faq#faq-water-commercial-claims-documentation",
      },
    ],
  },
  {
    id: "water-large-loss-scrutiny",
    category: "water_damage_claims",
    question: "¿Por qué las reclamaciones de agua de gran magnitud reciben tanto escrutinio?",
    answer:
      "Las reclamaciones de agua de gran magnitud reciben escrutinio intenso porque los valores de factura más altos activan revisión especializada, auditoría de terceros y participación de consultores antes del pago. Los despliegues de equipos multizona, la duración extendida de secado, el alcance de subcontratistas y la documentación de impacto en ocupantes deben alinearse en un paquete indexado — los revisores no pueden aprobar alcance empresarial que no puedan rastrear a evidencia fechada por zona. Las reducciones proporcionales en múltiples partidas son comunes cuando los expedientes de gran magnitud carecen de estructura de comando y segmentación.",
    relatedLinks: [
      {
        label: "Mejores prácticas de documentación de mitigación de agua en pérdidas de gran magnitud",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
      {
        label: "¿Por qué las reclamaciones comerciales por agua reciben más escrutinio?",
        href: "/faq#faq-water-commercial-claims-scrutiny",
      },
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
    ],
  },
  {
    id: "water-large-loss-drying-zones",
    category: "water_damage_claims",
    question: "¿Cómo deben documentarse múltiples zonas de secado?",
    answer:
      "Documente cada zona de secado por separado con su propio mapa de humedad, cronología de registro de secado, registros de equipos y narrativa fotográfica — indexada por identificador de piso, ala, edificio o unidad que coincida con el croquis de la aseguradora. Use IDs de puntos de lectura persistentes desde la recepción hasta las lecturas de liberación terminal por zona. Las fotos de colocación de equipos, las filas de equipos en el registro de secado y las entradas de monitoreo deben referenciar las mismas etiquetas de zona en todo el expediente. La documentación de zonas fusionadas produce reducciones proporcionales cuando los revisores no pueden conciliar el alcance facturado con prueba indexada.",
    relatedLinks: [
      {
        label: "Mejores prácticas de documentación de mitigación de agua en pérdidas de gran magnitud",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
      {
        label: "Procedimiento de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "¿Cómo deben rastrearse las unidades por separado en pérdidas de agua en apartamentos?",
        href: "/faq#faq-water-apartment-unit-separate-tracking",
      },
    ],
  },
  {
    id: "water-large-loss-invoice-documentation",
    category: "water_damage_claims",
    question: "¿Qué documentación respalda las facturas comerciales de mitigación de agua de gran magnitud?",
    answer:
      "Las facturas comerciales de mitigación de agua de gran magnitud requieren paquetes indexados donde cada línea facturada referencia evidencia fechada por zona: recepción y clasificación, mapas de humedad por zona con lecturas base y terminales, registros de secado y reportes de monitoreo completos, prueba de colocación de equipos con etiquetas de activos, registros de impacto en ocupantes y operaciones, documentación de subcontratistas, resúmenes ejecutivos con estado de áreas afectadas e hitos, y verificación final de secado antes de retirar equipos. La reconciliación previa a la factura detecta discrepancias de conteo y cronología antes de la revisión especializada.",
    relatedLinks: [
      {
        label: "Mejores prácticas de documentación de mitigación de agua en pérdidas de gran magnitud",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "¿Por qué debe coincidir la documentación comercial con la factura de mitigación?",
        href: "/faq#faq-water-commercial-documentation-invoice-match",
      },
    ],
  },

  // Class 4 Drying (5)
  {
    id: "water-class-4-drying-definition",
    category: "water_damage_claims",
    question: "¿Qué es el secado de daños por agua clase 4?",
    answer:
      "El secado de daños por agua clase 4 aborda materiales de baja permeabilidad donde la humedad está profundamente retenida y la evaporación superficial es limitada — incluyendo pisos de madera dura, yeso, concreto, ladrillo, estructura densa y subpisos saturados. El agua ligada en estos ensamblajes requiere tiempo de secado extendido, equipos especializados como sistemas Injectidry, alfombras de piso, deshumidificadores desecantes y secado por calor, además de monitoreo diario consistente. La documentación adecuada de clase 4 comienza en la admisión con identificación de materiales, lecturas de humedad iniciales y fotos que respalden la clasificación.",
    relatedLinks: [
      {
        label: "Guía de documentación de secado clase 4",
        href: "/resources/guides/water-damage/class-4-drying-documentation-guide",
      },
      {
        label: "Guía de documentación de categoría y clase",
        href: "/resources/guides/water-damage/category-class-documentation-guide",
      },
      {
        label: "¿Qué es la documentación de categoría y clase de agua?",
        href: "/faq#faq-water-category-class",
      },
    ],
  },
  {
    id: "water-class-4-documentation-required",
    category: "water_damage_claims",
    question: "¿Por qué el secado clase 4 requiere documentación adicional?",
    answer:
      "El secado clase 4 implica mayor duración, equipos especializados y ensamblajes con agua ligada que las aseguradoras escrutan más que los secados residenciales estándar. Los revisores de escritorio reducen días de secado, líneas de equipos especializados y mano de obra cuando la documentación carece de lecturas iniciales en materiales de baja permeabilidad, mapas de humedad específicos por material, registros de monitoreo diario, prueba de colocación de sistemas especializados y narrativas de progreso contemporáneas. La documentación adicional demuestra condiciones de materiales, progresión de secado y necesidad de equipos desde la admisión hasta la verificación final.",
    relatedLinks: [
      {
        label: "Guía de documentación de secado clase 4",
        href: "/resources/guides/water-damage/class-4-drying-documentation-guide",
      },
      {
        label: "Guía de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Guía de monitoreo diario",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
    ],
  },
  {
    id: "water-class-4-specialty-equipment-documentation",
    category: "water_damage_claims",
    question: "¿Cómo debe documentarse el equipo de secado especializado?",
    answer:
      "Documente el equipo de secado especializado con fotos de colocación al instalarse y cuando cambie la configuración, filas de registro de secado que coincidan con los días de equipo facturados y registros de equipo referenciados a cámaras del mapa de humedad. Los sistemas Injectidry requieren fotos de colocación de paneles, enrutamiento de mangueras y puntos de inyección. Los sistemas de alfombras de piso necesitan fotos de distribución en ensamblajes de madera dura y subpiso. Los deshumidificadores desecantes y sistemas de secado por calor requieren colocación, ductos y registros de depresión de grano o temperatura. Las fotos de aislamiento de contención vinculan la configuración de aire negativo al diseño de cámara especializada.",
    relatedLinks: [
      {
        label: "Guía de documentación de secado clase 4",
        href: "/resources/guides/water-damage/class-4-drying-documentation-guide",
      },
      {
        label: "Guía de documentación de equipos",
        href: "/resources/guides/water-damage/equipment-documentation-guide",
      },
      {
        label: "Cargos de equipos que recortan de reclamaciones de agua",
        href: "/resources/blog/equipment-charges-that-get-cut-from-water-claims",
      },
    ],
  },
  {
    id: "water-class-4-drying-duration",
    category: "water_damage_claims",
    question: "¿Por qué los proyectos de secado clase 4 tardan más?",
    answer:
      "Los proyectos de secado clase 4 tardan más porque los materiales de baja permeabilidad retienen agua ligada que se libera lentamente a través de evaporación superficial limitada. La madera dura, yeso, concreto, ladrillo, estructura densa y subpisos saturados pueden mostrar lecturas estancadas incluso cuando las condiciones ambientales parecen favorables. La complejidad del ensamblaje, las condiciones ambientales y la densidad del material extienden los plazos más allá de las plantillas residenciales de las aseguradoras. Los registros diarios con lecturas específicas por material y narrativas de progreso respaldan la duración extendida cuando el estándar de seco aún no se alcanza en todos los puntos activos del mapa.",
    relatedLinks: [
      {
        label: "Guía de documentación de secado clase 4",
        href: "/resources/guides/water-damage/class-4-drying-documentation-guide",
      },
      {
        label: "Cómo las aseguradoras reducen los días de secado",
        href: "/resources/blog/how-carriers-reduce-drying-days",
      },
      {
        label: "¿Cómo defiendo los cargos por días de secado?",
        href: "/faq#faq-water-defend-drying-day-charges",
      },
    ],
  },
  {
    id: "water-class-4-carrier-disputes",
    category: "water_damage_claims",
    question: "¿Por qué las aseguradoras disputan los cargos de secado clase 4?",
    answer:
      "Las aseguradoras disputan los cargos de secado clase 4 cuando la documentación no respalda la duración extendida, la necesidad de equipos especializados o la clasificación clase 4 en sí. Los desafíos comunes incluyen días de secado reducidos a plantillas de clase más cortas, líneas de equipos especializados eliminadas sin prueba de colocación, clase 4 degradada cuando la evidencia de materiales en admisión es débil, mano de obra recortada sin referencia cruzada de fotos y registros, y visitas de monitoreo cortadas cuando las lecturas están incompletas. La documentación indexada — mapas de humedad, registros de secado, fotos de equipos y narrativas diarias — aborda cada tipo de disputa en la revisión de escritorio.",
    relatedLinks: [
      {
        label: "Guía de documentación de secado clase 4",
        href: "/resources/guides/water-damage/class-4-drying-documentation-guide",
      },
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
      {
        label: "Brechas de documentación que provocan denegaciones de reclamaciones de agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
    ],
  },

  // Fire Damage Claims (6)
  {
    id: "fire-smoke-soot",
    category: "fire_damage_claims",
    question: "¿Cómo se documenta el daño por humo y hollín para las aseguradoras?",
    answer:
      "Los expedientes efectivos combinan evidencia visual, detalle del alcance por habitación, notas del método de limpieza y separación de oficios. Las aseguradoras examinan si el daño por humo es localizado o sistémico; la documentación debe coincidir con lo que su cuadrilla observó en el sitio.",
    relatedLinks: [
      { label: "Soluciones para daños por fuego", href: "/solutions/fire-damage" },
      {
        label: "Guía de documentación de reclamaciones por daños de fuego",
        href: "/resources/blog/fire-damage-claim-documentation-guide",
      },
    ],
  },
  {
    id: "resources-fire-damage-documentation",
    category: "fire_damage_claims",
    question: "¿Tienen recursos sobre documentación de reclamaciones por daños de fuego?",
    answer:
      "Sí. Nuestra biblioteca de recursos para contratistas cubre documentación de incendios, suplementos, evidencia de humo y hollín, contaminación de HVAC, mitigación de olores y recuperación ante denegación de suplementos, organizados para equipos de restauración y suplementos.",
    relatedLinks: [
      {
        label: "Guía de documentación de reclamaciones por daños de fuego",
        href: "/resources/blog/fire-damage-claim-documentation-guide",
      },
      { label: "Recursos para contratistas", href: "/resources/blog" },
    ],
  },
  {
    id: "fire-structural-vs-contents",
    category: "fire_damage_claims",
    question: "¿Manejan daño estructural por fuego y contenidos en el mismo expediente?",
    answer:
      "Sí. Las pérdidas por fuego a menudo abarcan estructura, retiro de contenidos (pack-out) y desodorización. Organizamos los alcances para que las aseguradoras puedan revisar edificio y contenidos por separado mientras mantenemos coherente la narrativa general de la reclamación.",
    relatedLinks: [{ label: "Restauración de contenidos", href: "/solutions/contents" }],
  },
  {
    id: "fire-demo-rebuild",
    category: "fire_damage_claims",
    question: "¿Cómo se suplementan los alcances de demolición y reconstrucción en reclamaciones por fuego?",
    answer:
      "Las reclamaciones por fuego frecuentemente evolucionan después de que la demolición revela daños ocultos. Hacemos seguimiento de órdenes de cambio y alcances revisados para que los suplementos reflejen las condiciones descubiertas durante el desmontaje, no solo la inspección inicial del ajustador.",
  },
  {
    id: "fire-odor-deodorization",
    category: "fire_damage_claims",
    question: "¿Las partidas de desodorización y calidad del aire se omiten con frecuencia?",
    answer:
      "Pueden estarlo. La filtración HEPA, el tratamiento con ozono o hidroxilo, los selladores y las partidas de limpieza de contenidos a menudo tienen un alcance insuficiente en los primeros estimados de la aseguradora. Evaluamos si su documentación respalda perseguir esas partidas.",
  },
  {
    id: "fire-total-loss-partial",
    category: "fire_damage_claims",
    question: "¿Apoyan pérdidas parciales por fuego y reconstrucciones mayores?",
    answer:
      "Sí. Desde incendios localizados en cocina hasta reconstrucciones estructurales mayores, la estrategia de suplementos se adapta a la gravedad de la pérdida. Los expedientes más grandes se benefician de desgloses organizados por oficio y documentación por fases a medida que avanza el trabajo.",
    relatedLinks: [{ label: "Soluciones para daños por fuego", href: "/solutions/fire-damage" }],
  },

  // Mold Claims (5)
  {
    id: "mold-remediation-docs",
    category: "mold_claims",
    question: "¿Qué documentación respalda las reclamaciones de remediación de moho?",
    answer:
      "Las aseguradoras normalmente revisan la documentación de la fuente de humedad, el protocolo de remediación, el detalle de contención, el scrubbing de aire y las pruebas de clearance cuando se requieren. Las fotos, el alcance habitación por habitación y la alineación con prácticas orientadas a IICRC fortalecen el expediente.",
    relatedLinks: [{ label: "Soluciones para moho", href: "/solutions/mold" }],
  },
  {
    id: "mold-testing",
    category: "mold_claims",
    question: "¿Cómo influyen las pruebas y los informes de clearance en las reclamaciones de moho?",
    answer:
      "Las pruebas antes y después de la remediación pueden respaldar la justificación del alcance y la verificación de clearance. Ayudamos a organizar los resultados de laboratorio y vincularlos con las partidas facturadas para que los ajustadores entiendan por qué las pruebas fueron necesarias.",
  },
  {
    id: "mold-carrier-pushback",
    category: "mold_claims",
    question: "¿Por qué las aseguradoras a menudo cuestionan las partidas de moho?",
    answer:
      "La cobertura de moho varía según la póliza y la causalidad. Las aseguradoras cuestionan si el daño resultó de un evento de agua cubierto frente a condiciones a largo plazo. Una documentación sólida sobre intrusión súbita de agua y mitigación oportuna ayuda a abordar esas revisiones.",
  },
  {
    id: "mold-containment-equipment",
    category: "mold_claims",
    question: "¿La contención y el scrubbing de aire se pagan con frecuencia por debajo de lo debido?",
    answer:
      "Pueden estarlo. El aire negativo, la filtración HEPA y la mano de obra de contención se recortan frecuentemente en los alcances iniciales. Comparamos su configuración de campo con las partidas de la aseguradora y perseguimos brechas cuando la documentación respalda el trabajo realizado.",
  },
  {
    id: "mold-water-relationship",
    category: "mold_claims",
    question: "¿Pueden los suplementos de moho vincularse a una reclamación por pérdida de agua?",
    answer:
      "Sí. El moho a menudo sigue a un evento de agua subyacente. Vincular la documentación de la fuente de humedad, el historial de secado y el alcance de remediación ayuda a las aseguradoras a seguir la cadena causal en el expediente.",
    relatedLinks: [{ label: "Soluciones para daños por agua", href: "/solutions/water-damage" }],
  },

  // Contents Restoration (5)
  {
    id: "contents-pack-out",
    category: "contents_restoration",
    question: "¿Cómo apoyan las reclamaciones de pack-out y limpieza de contenidos?",
    answer:
      "Revisamos inventarios, mano de obra de pack-out, almacenamiento, códigos de método de limpieza y manejo de artículos especiales. Los expedientes de contenidos fallan cuando los inventarios están incompletos o las partidas de limpieza no coinciden con los tipos de artículos; ayudamos a fortalecer esa documentación.",
    relatedLinks: [{ label: "Soluciones para contenidos", href: "/solutions/contents" }],
  },
  {
    id: "contents-inventory",
    category: "contents_restoration",
    question: "¿Qué hace que un inventario de contenidos esté listo para la aseguradora?",
    answer:
      "Las descripciones detalladas, las notas de condición, las fotos y la etiquetación consistente por habitación importan. Los artículos de alto valor necesitan detalle de respaldo. Los inventarios organizados aceleran la revisión del ajustador y reducen el ida y vuelta sobre el conteo de partidas.",
  },
  {
    id: "contents-storage",
    category: "contents_restoration",
    question: "¿Los cargos de almacenamiento y manejo se disputan con frecuencia?",
    answer:
      "Sí. Las aseguradoras cuestionan la duración, el conteo de unidades y si el almacenamiento fue necesario. Documentar los tiempos de pack-out, el uso de bóvedas o contenedores y la logística de regreso al sitio ayuda a defender esos cargos.",
  },
  {
    id: "contents-specialty-items",
    category: "contents_restoration",
    question: "¿Pueden ayudar con contenidos especiales como electrónicos o arte?",
    answer:
      "Organizamos partidas especiales con cotizaciones de proveedores y notas de manejo cuando están disponibles. Los contenidos especiales a menudo requieren justificación separada; los códigos genéricos de limpieza rara vez son suficientes.",
    relatedLinks: [{ label: "Soluciones para contenidos", href: "/solutions/contents" }],
  },
  {
    id: "contents-fire-water",
    category: "contents_restoration",
    question: "¿Las reclamaciones de contenidos difieren entre pérdidas por fuego y agua?",
    answer:
      "Sí. Los contenidos por fuego enfatizan residuo de humo, desodorización y decisiones de reemplazo frente a restauración. Los contenidos por agua se enfocan en la categoría de contaminación, los tiempos de secado y la recuperabilidad. La documentación debe coincidir con el tipo de pérdida.",
  },

  // Carrier Negotiations (6)
  {
    id: "carrier-how-handled",
    category: "carrier_negotiations",
    question: "¿Cómo maneja Claims Ninja las negociaciones con la aseguradora?",
    answer:
      "Los equipos expertos interactúan con los ajustadores mediante documentación organizada, resúmenes de cambios claros y respaldo del alcance con fotos y estimados. Hacemos seguimiento de las respuestas, revisamos las presentaciones cuando es necesario y escalamos por los canales apropiados, siempre alineados con su autorización.",
    featured: true,
    relatedLinks: [{ label: "Centro de comunicación", href: "/platform/communication-hub" }],
  },
  {
    id: "carrier-who-talks",
    category: "carrier_negotiations",
    question: "¿Quién se comunica con el ajustador en nuestro nombre?",
    answer:
      "Los especialistas en suplementos y negociación de Claims Ninja manejan la comunicación con la aseguradora dentro de los términos de su asociación. Su equipo se mantiene informado a través de la plataforma: ve el historial de correspondencia y el estado sin gestionar cada llamada con el ajustador usted mismo.",
    relatedLinks: [{ label: "Centro de comunicación", href: "/platform/communication-hub" }],
  },
  {
    id: "carrier-disputes",
    category: "carrier_negotiations",
    question: "¿Qué sucede cuando las aseguradoras disputan partidas?",
    answer:
      "Documentamos la disputa, reunimos evidencia de respaldo y respondemos con refutaciones organizadas o alcances revisados. Los resultados dependen de las pautas de la aseguradora y la solidez del expediente; nos enfocamos en construir el registro más claro posible en lugar de prometer resultados específicos.",
  },
  {
    id: "carrier-reinspection",
    category: "carrier_negotiations",
    question: "¿Pueden solicitar reinspecciones o revisiones de escritorio?",
    answer:
      "Sí, cuando la documentación lo respalda. Las reinspecciones ayudan cuando las condiciones de campo difieren del alcance inicial del ajustador. Coordinamos las solicitudes y preparamos el expediente para que los revisores lleguen con contexto.",
  },
  {
    id: "carrier-public-adjuster",
    category: "carrier_negotiations",
    question: "¿Es Claims Ninja un ajustador público?",
    answer:
      "Claims Ninja es una plataforma de apoyo a reclamaciones enfocada en contratistas que incluye acceso a ajustadores públicos licenciados, estimadores, especialistas en suplementos y otros profesionales de reclamaciones cuando se necesitan. Ayudamos a los contratistas a maximizar la recuperación de la reclamación mediante documentación, revisión de estimados, suplementos y comunicación con la aseguradora, apoyando el proceso de reclamación en su conjunto.",
  },
  {
    id: "carrier-timeline",
    category: "carrier_negotiations",
    question: "¿Cuánto tiempo suelen tomar las negociaciones con la aseguradora?",
    answer:
      "Los plazos varían ampliamente según la aseguradora, la carga de trabajo del ajustador y la complejidad de la reclamación. Las respuestas simples de suplementos pueden resolverse en días; los expedientes comerciales en disputa pueden tomar semanas. Mantenemos a su equipo actualizado sobre el estado en todo momento.",
    relatedLinks: [{ label: "Seguimiento de reclamaciones", href: "/platform/claim-tracking" }],
  },

  // Documentation (6)
  {
    id: "documentation-essentials",
    category: "documentation",
    question: "¿Qué documentación de reclamación deben capturar nuestros equipos de campo?",
    answer:
      "Como mínimo: fotos fechadas del daño y las reparaciones, lecturas de humedad cuando corresponda, notas de alcance y detalle del estimado alineado con las condiciones de campo. Los expedientes sólidos cuentan la historia de lo que ocurrió, lo que encontraron y lo que se requirió para restaurar la propiedad.",
  },
  {
    id: "documentation-photos",
    category: "documentation",
    question: "¿Cómo deben organizarse las fotos para la revisión de la aseguradora?",
    answer:
      "Agrupe las fotos por habitación, elevación u oficio con etiquetas y fechas claras. Las secuencias de antes y después ayudan a los ajustadores a seguir el trabajo. Los volcados aleatorios de fotos ralentizan la revisión e invitan a reducciones de alcance.",
  },
  {
    id: "documentation-estimates",
    category: "documentation",
    question: "¿Deben nuestros estimados coincidir con el formato de la aseguradora?",
    answer:
      "Sus estimados deben reflejar las condiciones reales de campo y los precios locales, no replicar las omisiones de la aseguradora. Comparamos su alcance con el expediente de la aseguradora e identificamos diferencias defendibles que valga la pena perseguir.",
  },
  {
    id: "documentation-moisture-logs",
    category: "documentation",
    question: "¿Cuándo se requieren registros de humedad?",
    answer:
      "Los registros de humedad son estándar en trabajos de mitigación de agua y a menudo se esperan en trabajo relacionado con moho. Las lecturas diarias, las notas de equipo y la documentación del estándar de secado respaldan los cargos por días de equipo y los tiempos de reconstrucción.",
    relatedLinks: [
      { label: "Soluciones para daños por agua", href: "/solutions/water-damage" },
      {
        label: "Procedimiento de campo de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Guía de documentación de registros de secado",
        href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
      },
      {
        label: "Errores de mapeo de humedad que cuestan dinero a los contratistas",
        href: "/resources/blog/moisture-mapping-mistakes-that-cost-contractors-money",
      },
    ],
  },
  {
    id: "documentation-policyholder",
    category: "documentation",
    question: "¿Qué información del asegurado debemos recopilar temprano?",
    answer:
      "Número de reclamación, detalles de la póliza, información de contacto, fecha de la pérdida y firmas de autorización cuando se requieran. La recopilación temprana evita retrasos cuando los suplementos o pagos necesitan verificación de la aseguradora.",
  },
  {
    id: "documentation-platform-upload",
    category: "documentation",
    question: "¿Cómo subimos documentación a la plataforma?",
    answer:
      "Los socios suben fotos, estimados y archivos de respaldo a través del portal del cliente o el flujo de admisión establecido durante la incorporación. Las cargas organizadas aceleran la revisión; su equipo puede agrupar por fase de reclamación u oficio.",
    relatedLinks: [{ label: "Portal del cliente", href: "/platform/client-portal" }],
  },

  // Platform & Security (5)
  {
    id: "platform-data-secure",
    category: "platform_security",
    question: "¿Están seguros mis datos de reclamaciones en la plataforma?",
    answer:
      "Los expedientes de reclamaciones se almacenan con controles de acceso cifrados y permisos basados en roles. El manejo de documentos sigue prácticas alineadas con los flujos de trabajo de contratistas y aseguradoras. Su equipo controla quién ve qué dentro de su organización.",
    featured: true,
    relatedLinks: [{ label: "Resumen de la plataforma", href: "/platform" }],
  },
  {
    id: "platform-access-controls",
    category: "platform_security",
    question: "¿Podemos controlar quién de nuestro equipo accede a los expedientes de reclamaciones?",
    answer:
      "Sí. El acceso basado en roles le permite limitar la visibilidad por usuario, oficina o función. Los propietarios y gerentes normalmente ven el historial completo de la reclamación; los usuarios de campo pueden ver solo los expedientes asignados.",
    relatedLinks: [{ label: "Portal del cliente", href: "/platform/client-portal" }],
  },
  {
    id: "platform-claim-tracking",
    category: "platform_security",
    question: "¿Cómo seguimos el estado de las reclamaciones en la plataforma?",
    answer:
      "El módulo de seguimiento de reclamaciones muestra el estado del expediente, el historial de suplementos, las respuestas de la aseguradora y los próximos pasos. Su oficina obtiene visibilidad sin perseguir cadenas de correos ni actualizaciones en hojas de cálculo.",
    relatedLinks: [{ label: "Seguimiento de reclamaciones", href: "/platform/claim-tracking" }],
  },
  {
    id: "platform-communication",
    category: "platform_security",
    question: "¿La plataforma centraliza la comunicación con la aseguradora e interna?",
    answer:
      "Sí. El centro de comunicación mantiene la correspondencia, las notas y las actualizaciones de estado vinculadas a cada reclamación. El historial centralizado reduce los malentendidos cuando varios miembros del equipo trabajan en el mismo expediente.",
    relatedLinks: [{ label: "Centro de comunicación", href: "/platform/communication-hub" }],
  },
  {
    id: "platform-data-retention",
    category: "platform_security",
    question: "¿Cuánto tiempo se conservan los datos de reclamaciones?",
    answer:
      "La retención sigue los términos de asociación y las prácticas aplicables de manejo de datos. Los expedientes archivados permanecen accesibles para referencia y auditoría; contáctenos para conocer los detalles de su acuerdo de asociación.",
    relatedLinks: [{ label: "Contáctenos", href: "/contact" }],
  },

  // AI Claim Analysis (5)
  {
    id: "ai-how-helps",
    category: "ai_claim_analysis",
    question: "¿Cómo ayuda el análisis de reclamaciones con IA a mi operación?",
    answer:
      "La revisión asistida por IA examina los estimados y la documentación en busca de brechas de alcance, inconsistencias de precios y oportunidades de suplementos. Los equipos expertos validan los hallazgos antes de que algo llegue a una aseguradora: la IA acelera la revisión, las personas toman la decisión.",
    featured: true,
    relatedLinks: [{ label: "Análisis de reclamaciones con IA", href: "/platform/ai-claim-analysis" }],
  },
  {
    id: "ai-replace-experts",
    category: "ai_claim_analysis",
    question: "¿La IA reemplaza a su equipo de suplementos?",
    answer:
      "No. La IA es de apoyo: marca partidas que merecen una revisión más detallada. Los especialistas en suplementos con experiencia interpretan los resultados, aplican el contexto de la aseguradora y deciden qué pertenece al expediente. La tecnología acelera el proceso; la experiencia impulsa los resultados.",
    relatedLinks: [{ label: "Análisis de reclamaciones con IA", href: "/platform/ai-claim-analysis" }],
  },
  {
    id: "ai-accuracy",
    category: "ai_claim_analysis",
    question: "¿Qué tan preciso es el análisis de reclamaciones con IA?",
    answer:
      "La IA es efectiva para reconocer patrones en alcances grandes: partidas faltantes, brechas de cantidad y precios inconsistentes. No es infalible. Cada partida marcada es revisada por su equipo de Claims Ninja antes de la presentación.",
  },
  {
    id: "ai-what-analyzed",
    category: "ai_claim_analysis",
    question: "¿Qué archivos puede analizar la IA?",
    answer:
      "Los estimados, alcances de la aseguradora, fotos y documentación estructurada de reclamaciones pueden alimentar la revisión con IA según el tipo y alcance de la reclamación. El sistema funciona mejor cuando la documentación de admisión está completa y organizada.",
  },
  {
    id: "ai-data-privacy",
    category: "ai_claim_analysis",
    question: "¿Se usan nuestros datos de reclamaciones para entrenar modelos de IA?",
    answer:
      "Sus expedientes de reclamaciones se manejan bajo las prácticas de datos de la asociación. El análisis con IA se ejecuta dentro de flujos de trabajo controlados; no tratamos sus datos de reclamaciones propietarios como material de entrenamiento público. Consúltenos los detalles de su acuerdo.",
    relatedLinks: [{ label: "Resumen de la plataforma", href: "/platform" }],
  },

  // Results & Insights (8)
  {
    id: "results-insights-what-is-page",
    category: "results_insights",
    question: "¿Qué es la página de Resultados e información?",
    answer:
      "Resultados e información en /case-studies es el centro de inteligencia de la industria de Claims Ninja: información recopilada de miles de reclamaciones de seguros en techado, restauración, mitigación, reconstrucción y proyectos comerciales. Cubre resultados de recuperación por oficio, brechas comunes de alcance y precios que encontramos, revisiones de recuperación de portafolios y referencias representativas de recuperación, no historias de clientes fabricadas.",
    relatedLinks: [{ label: "Resultados e información", href: "/case-studies" }],
  },
  {
    id: "results-insights-real-examples",
    category: "results_insights",
    question: "¿Los ejemplos de recuperación se basan en reclamaciones reales?",
    answer:
      "Los ejemplos de recuperación en Resultados e información son referencias representativas extraídas de patrones agregados de revisión de reclamaciones, no historias de clientes fabricadas con nombres o direcciones inventados. Ilustran rangos típicos de recuperación y hallazgos que vemos en expedientes revisados. Los resultados varían según el tipo de reclamación, la calidad de la documentación, el entorno de la aseguradora y el alcance.",
    relatedLinks: [{ label: "Resultados e información", href: "/case-studies" }],
  },
  {
    id: "results-insights-recovery-increase",
    category: "results_insights",
    question: "¿Cuánto puede mejorar la recuperación de reclamaciones el suplementado?",
    answer:
      "Los aumentos de recuperación varían según el oficio, el alcance y el entorno de la aseguradora. En miles de reclamaciones revisadas, los contratistas asociados con Claims Ninja han visto aumentos promedio de recuperación de aproximadamente el 40%. Los rangos típicos de mejora por oficio en Resultados e información incluyen techado del 25% al 50%, mitigación de agua del 20% al 45%, restauración por fuego del 20% al 40%, remediación de moho del 15% al 35%, reconstrucción del 20% al 45% y restauración de contenidos del 15% al 35%.",
    relatedLinks: [{ label: "Resultados e información", href: "/case-studies" }],
  },
  {
    id: "results-insights-trade-opportunities",
    category: "results_insights",
    question: "¿Qué oficios ven las mayores oportunidades de recuperación?",
    answer:
      "El techado a menudo muestra el rango típico de mejora de recuperación más amplio, del 25% al 50%, impulsado por accesorios faltantes, factores de desperdicio, brechas de cumplimiento de código y discrepancias de precios de materiales. La mitigación de agua, la restauración por fuego y la reconstrucción comúnmente caen en el rango del 20% al 45%. La remediación de moho y la restauración de contenidos normalmente van del 15% al 35%. La mayor oportunidad en cualquier expediente depende de la calidad de la documentación, las brechas de alcance de la aseguradora y la complejidad del oficio, no solo del oficio en sí.",
    relatedLinks: [{ label: "Resultados e información", href: "/case-studies" }],
  },
  {
    id: "results-insights-portfolio-review",
    category: "results_insights",
    question: "¿Qué es una revisión de recuperación de portafolio?",
    answer:
      "Una revisión de recuperación de portafolio es un análisis del libro de negocios en el que Claims Ninja revisa reclamaciones activas, cerradas y con pago inferior en la operación de un contratista. Evaluamos la calidad de los estimados, la frecuencia de suplementos, los porcentajes de recuperación, las tendencias de la aseguradora, deficiencias por oficio y oportunidades de fuga de ingresos. Los contratistas a menudo descubren ingresos sistemáticos dejados atrás en docenas o cientos de reclamaciones, no solo en un expediente.",
    relatedLinks: [{ label: "Resultados e información", href: "/case-studies" }],
  },
  {
    id: "results-insights-common-issues",
    category: "results_insights",
    question: "¿Qué problemas descubre comúnmente Claims Ninja?",
    answer:
      "En miles de reclamaciones revisadas, las categorías recurrentes de deficiencia incluyen omisiones de alcance (partidas faltantes, brechas de accesorios, retiro de escombros), brechas de cumplimiento de código (barrera de hielo y agua, ventilación, mejoras), discrepancias de precios (tarifas de materiales y mano de obra por debajo del mercado), oportunidades de documentación (fotos incompletas, registros de secado, narrativas débiles), elegibilidad de O&P en pérdidas de múltiples oficios y costos de coordinación (reembolso de equipos, supervisión, condiciones generales).",
    relatedLinks: [{ label: "Resultados e información", href: "/case-studies" }],
  },
  {
    id: "results-insights-commercial-portfolios",
    category: "results_insights",
    question: "¿Revisan portafolios de reclamaciones comerciales?",
    answer:
      "Sí. Claims Ninja revisa portafolios comerciales de techado, agua, fuego, moho, reconstrucción y contenidos, incluidos libros de múltiples oficios con alcances mayores y requisitos de documentación más exigentes. La revisión a nivel de portafolio ayuda a identificar deficiencias recurrentes en estimados, tendencias específicas de la aseguradora y oportunidades de recuperación que se acumulan en un libro comercial de negocios.",
    relatedLinks: [{ label: "Resultados e información", href: "/case-studies" }],
  },
  {
    id: "results-insights-book-of-business",
    category: "results_insights",
    question: "¿Puede Claims Ninja revisar un libro de negocios completo?",
    answer:
      "Sí. Claims Ninja realiza revisiones a nivel de portafolio de libros de negocios completos — reclamaciones activas, cerradas y con pago inferior — para identificar brechas recurrentes de alcance, problemas de flujo de trabajo de suplementos y potencial de recuperación agregado. El liderazgo obtiene visibilidad de patrones invisibles cuando las reclamaciones se evalúan una por una, incluida la fuga de ingresos en docenas o cientos de expedientes.",
    relatedLinks: [{ label: "Resultados e información", href: "/case-studies" }],
  },
] as const;
