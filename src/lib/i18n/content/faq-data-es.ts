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
        label: "Por qué se rechazan los suplementos por daños de fuego",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
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
        label: "Por qué se rechazan los suplementos por daños de fuego",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
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
    relatedLinks: [
      { label: "Soluciones de techado", href: "/solutions/roofing" },
      {
        label: "Guía de documentación de techado comercial",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
    ],
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

  // Roof Matching (5)
  {
    id: "roof-matching-insurance-claim",
    category: "roofing_claims",
    question: "¿Qué es la coincidencia de techo (roof matching) en una reclamación de seguros?",
    answer:
      "La coincidencia de techo se refiere a si los materiales de reemplazo se alinean razonablemente con el techado existente en color, perfil, textura y apariencia visible cuando la aseguradora aprueba una reparación parcial. Surgen disputas cuando las tejas están descontinuadas, los materiales están desgastados o el reemplazo parcial de pendiente deja diferencias visibles entre planos del techo. Las preocupaciones de coincidencia se evalúan con documentación de campo, disponibilidad de material y lenguaje de póliza; los resultados varían según la aseguradora y las circunstancias de la reclamación.",
    relatedLinks: [
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Lista de verificación de suplementos de techado",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
    ],
  },
  {
    id: "roof-matching-contractor-documentation",
    category: "roofing_claims",
    question: "¿Cómo deben documentar los contratistas los problemas de coincidencia de techo?",
    answer:
      "Identifique el tipo, fabricante, color, estilo y edad de la teja existente; capture fotos amplias de elevación y por pendiente; investigue la disponibilidad del material con confirmación fechada del proveedor o fabricante; documente preocupaciones de reparabilidad en material existente frágil o quebradizo; y elabore una tabla de comparación de alcance que vincule los límites de reparación de la aseguradora con las condiciones de campo. Un resumen narrativo de una página debe vincular cada partida solicitada con evidencia específica, sin argumentos legales ni garantías de resultados.",
    relatedLinks: [
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Estándar de documentación de reclamaciones de techado",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-matching-dispute-photos",
    category: "roofing_claims",
    question: "¿Qué fotos ayudan a respaldar una disputa de coincidencia de techo?",
    answer:
      "Elevaciones amplias del techo desde los ángulos de vista principales, fotos pendiente por pendiente con etiquetado consistente, fotos de detalle del material para identificación, comparaciones lado a lado de muestras de teja contra cursos existentes con iluminación consistente, y fotos de transiciones entre el área de reparación aprobada y pendientes adyacentes. Los primeros planos solo de daño sin contexto de elevación rara vez respaldan argumentos de alcance por coincidencia en revisión de escritorio.",
    relatedLinks: [
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Documentación de mediciones de techo",
        href: "/resources/guides/roofing-claims/roof-measurement-documentation-guide",
      },
    ],
  },
  {
    id: "roof-matching-supplement-denials",
    category: "roofing_claims",
    question: "¿Por qué las aseguradoras deniegan suplementos de coincidencia de techo?",
    answer:
      "Las razones comunes de denegación incluyen identificación insuficiente del material, falta de investigación de disponibilidad que confirme productos descontinuados o no disponibles, evidencia fotográfica débil sin contexto de elevación, argumentos de daño solo cosmético, lenguaje de póliza que limita el alcance de coincidencia y solicitudes de alcance no vinculadas a condiciones de campo documentadas. Las aseguradoras también deniegan cuando las preocupaciones de reparabilidad se afirman sin fotos o cuando la reparación parcial se considera suficiente según la evidencia proporcionada; los resultados varían según el programa de la aseguradora y las particularidades del expediente.",
    relatedLinks: [
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Manual de suplementos de techado",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
  },
  {
    id: "roof-matching-discontinued-shingles",
    category: "roofing_claims",
    question: "¿Pueden las tejas descontinuadas respaldar un suplemento de coincidencia de techo?",
    answer:
      "Las tejas descontinuadas o no disponibles pueden respaldar un suplemento de coincidencia cuando la documentación confirma que el producto exacto ya no está disponible y los reemplazos comparables difieren en color, perfil o dimensiones. Guarde avisos de descontinuación del fabricante con fecha, verificaciones de disponibilidad del distribuidor y fotos que muestren diferencias visibles entre el material existente y las alternativas disponibles. La documentación debe vincular la investigación de disponibilidad con partidas de alcance específicas; la aprobación no está garantizada y depende de la póliza de la aseguradora y la calidad de la evidencia.",
    relatedLinks: [
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Qué es un suplemento de techo",
        href: "/resources/blog/what-is-a-roof-supplement",
      },
    ],
  },
  {
    id: "roof-repairability-insurance-claim",
    category: "roofing_claims",
    question: "¿Qué es la reparabilidad del techo?",
    answer:
      "La reparabilidad del techo describe si el material de techado existente puede retirarse, levantarse o reemplazarse parcialmente sin causar daños adicionales a las filas adyacentes o comprometer el sistema del techo. Depende de condiciones de campo documentadas como la edad del material, fragilidad, adhesión de la banda de sellado, orientación del fabricante y riesgo de daños colaterales durante la reparación. La reparabilidad es distinta de la coincidencia — aborda la viabilidad física, no si los materiales de reemplazo se alinean con la apariencia existente. Los resultados varían según la aseguradora, la póliza y la calidad de la evidencia.",
    relatedLinks: [
      {
        label: "Guía de documentación de reparabilidad de techo",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
    ],
  },
  {
    id: "roof-repairability-contractor-documentation",
    category: "roofing_claims",
    question: "¿Cómo deben los contratistas documentar la reparabilidad del techo?",
    answer:
      "Capture fotos generales del techo y de primer plano del material; realice y documente pruebas de reparabilidad con notas de campo sobre observaciones de fragilidad, adhesión de la banda de sellado y comportamiento durante la remoción; fotografíe daños colaterales como pestañas rotas, tejas desgarradas y desprendimiento de clavos; revise las recomendaciones de reparación del fabricante; y elabore una tabla de comparación de alcance que vincule las áreas de reparación aprobadas por la aseguradora con las condiciones de campo. Un resumen del contratista de una página debe vincular cada limitación de reparación con evidencia específica — no argumentos legales ni resultados garantizados.",
    relatedLinks: [
      {
        label: "Guía de documentación de reparabilidad de techo",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Estándar de documentación de reclamaciones de techado",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-brittle-test-roofing",
    category: "roofing_claims",
    question: "¿Qué es una prueba de fragilidad en un techo?",
    answer:
      "Una prueba de fragilidad evalúa cómo responden las tejas existentes cuando se levantan o perturban durante una reparación propuesta. Los contratistas suelen seleccionar un área de prueba representativa dentro o adyacente al límite de reparación aprobado y observan si las pestañas se agrietan, se rompen, no vuelven a sellarse o causan daños colaterales a las filas adyacentes. Los resultados deben documentarse con notas de campo fechadas y fotografías de observaciones antes, durante y después. Los enfoques de prueba varían según el contratista y el programa de la aseguradora — el objetivo es documentación objetiva del comportamiento del material, no adherirse a un método obligatorio único.",
    relatedLinks: [
      {
        label: "Guía de documentación de reparabilidad de techo",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Lista de verificación de suplementos de techado",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
    ],
  },
  {
    id: "roof-repairability-documentation-evidence",
    category: "roofing_claims",
    question: "¿Qué documentación respalda las preocupaciones de reparabilidad del techo?",
    answer:
      "Un paquete completo de reparabilidad incluye fotos generales del techo, tomas de primer plano de la condición del material, documentación del cuadrado de prueba con observaciones de fragilidad, fotos de daños colaterales, identificación del fabricante y orientación de reparación, notas de campo fechadas, un resumen del contratista y una comparación de alcance que vincule la evidencia con las partidas del presupuesto. Cada limitación de reparación debe referenciar fotos o resultados de prueba específicos — las conclusiones sin respaldo rara vez sobreviven la revisión de escritorio.",
    relatedLinks: [
      {
        label: "Guía de documentación de reparabilidad de techo",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Documentación de medición de techo",
        href: "/resources/guides/roofing-claims/roof-measurement-documentation-guide",
      },
    ],
  },
  {
    id: "roof-repairability-carrier-disputes",
    category: "roofing_claims",
    question: "¿Por qué las aseguradoras disputan la reparabilidad del techo?",
    answer:
      "Las aseguradoras disputan comúnmente la reparabilidad cuando la documentación carece de observaciones de prueba, las fotos no muestran daños colaterales, falta identificación del material, los resúmenes afirman fragilidad sin evidencia de campo, o las solicitudes de alcance no están vinculadas a limitaciones de reparación documentadas en el límite aprobado. Los ajustadores también pueden argumentar que la reparación parcial es suficiente según su propia evaluación de campo o el lenguaje de la póliza. Una documentación sólida con resultados de prueba fechados, fotos indexadas y tablas de comparación de alcance mejora la comunicación durante la revisión — la aprobación no está garantizada.",
    relatedLinks: [
      {
        label: "Guía de documentación de reparabilidad de techo",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Manual de suplementos de techado",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
  },
  {
    id: "roof-reinspection-when-request",
    category: "roofing_claims",
    question: "¿Cuándo deben los contratistas solicitar una reinspección de techo?",
    answer:
      "Solicite una reinspección de techo cuando el presupuesto de la aseguradora no refleje las condiciones de campo documentadas: daños por tormenta omitidos, pendientes adicionales afectadas, preocupaciones de coincidencia o reparabilidad, omisiones de actualización de código o brechas de alcance identificadas después de la inspección inicial. Prepare el paquete de documentación completo antes de solicitar la visita, no después de programarla. La reinspección es más efectiva cuando las fotos, la comparación de alcance y el resumen están indexados y listos para la revisión del ajustador; los resultados varían según la aseguradora y la calidad de la evidencia.",
    relatedLinks: [
      {
        label: "Guía de reinspección de techo",
        href: "/resources/guides/roofing-claims/roof-reinspection-guide",
      },
      {
        label: "Lista de verificación de suplementos de techado",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
    ],
  },
  {
    id: "roof-reinspection-documentation-prep",
    category: "roofing_claims",
    question: "¿Qué documentación debe prepararse para una reinspección de techo?",
    answer:
      "Prepare fotos generales del techo y por pendiente, tomas de primer plano de daños, documentación de metales blandos, identificación de material, registros de coincidencia y reparabilidad cuando corresponda, una tabla de comparación del presupuesto de la aseguradora, un resumen del contratista y notas de respaldo del suplemento indexadas a las partidas del presupuesto. Complete el paquete antes de solicitar la reinspección para que el ajustador llegue con contexto, no argumentos legales ni resultados garantizados.",
    relatedLinks: [
      {
        label: "Guía de reinspección de techo",
        href: "/resources/guides/roofing-claims/roof-reinspection-guide",
      },
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
    ],
  },
  {
    id: "roof-reinspection-missed-damage",
    category: "roofing_claims",
    question: "¿Se puede documentar daño de techo omitido después de la inspección inicial?",
    answer:
      "Sí: los contratistas pueden documentar daños adicionales por granizo, viento o impacto descubiertos después de la visita inicial de la aseguradora usando fotos fechadas con etiqueta de pendiente, tomas de primer plano de daños, datos de medición y una comparación de alcance que muestre lo omitido del presupuesto de la aseguradora. La documentación debe capturarse tan pronto como se identifique el daño y organizarse antes de solicitar la reinspección. Las aseguradoras evalúan la documentación posterior a la inspección según la calidad de la evidencia y el momento; la aprobación no está garantizada.",
    relatedLinks: [
      {
        label: "Guía de reinspección de techo",
        href: "/resources/guides/roofing-claims/roof-reinspection-guide",
      },
      {
        label: "Guía de documentación de reparabilidad de techo",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
    ],
  },
  {
    id: "roof-reinspection-denial-reasons",
    category: "roofing_claims",
    question: "¿Por qué las aseguradoras niegan solicitudes de reinspección de techo?",
    answer:
      "Las razones comunes de denegación incluyen paquetes de documentación incompletos, fotos sin etiquetar o desorganizadas, solicitudes de alcance no vinculadas a evidencia de campo, reclamos de coincidencia o reparabilidad sin respaldo, reinspección solicitada antes de construir el paquete indexado, o determinación de la aseguradora de que la revisión de escritorio es suficiente con las fotos existentes. Las aseguradoras también pueden negar cuando el daño parece solo cosmético o cuando el lenguaje de la póliza limita el alcance solicitado; los resultados varían según el programa de la aseguradora y las particularidades del expediente.",
    relatedLinks: [
      {
        label: "Guía de reinspección de techo",
        href: "/resources/guides/roofing-claims/roof-reinspection-guide",
      },
      {
        label: "Manual de suplementos de techado",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
  },
  {
    id: "roof-reinspection-organize-photos",
    category: "roofing_claims",
    question: "¿Cómo deben los contratistas organizar las fotos para una reinspección de techo?",
    answer:
      "Etiquete cada foto con el nombre de la pendiente, la elevación y la fecha en los metadatos del archivo. Capture tomas generales amplias de cada plano antes del detalle de primer plano del daño. Combine cada primer plano con una foto de contexto que muestre la ubicación en la pendiente. Agrupe las fotos por pendiente y tipo de daño en el índice del expediente de reclamación. Vincule cada referencia fotográfica a una línea específica en la tabla de comparación de alcance y el resumen del contratista; la documentación organizada y objetiva respalda una revisión precisa de la reclamación.",
    relatedLinks: [
      {
        label: "Guía de reinspección de techo",
        href: "/resources/guides/roofing-claims/roof-reinspection-guide",
      },
      {
        label: "Estándar de documentación de reclamaciones de techado",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
    ],
  },

  // Granizo, viento y flashing (3)
  {
    id: "roof-hail-vs-wind-documentation",
    category: "roofing_claims",
    question: "¿En qué se diferencia la documentación de daños por granizo de la de daños por viento?",
    answer:
      "La documentación de granizo se centra en impactos circulares, fractura de la matriz, resultados de cuadrados de prueba o encuestas de impacto y abolladuras colaterales en metales blandos de ventilaciones y flashing. La documentación de viento se centra en tejas hendidas, tejas levantadas, sellos rotos, desplazamiento de cumbrera y arranque, y patrones direccionales de daño en pendientes barloventas. Cuando ambos riesgos aplican en el mismo expediente, documente cada mecanismo en grupos de fotos separados indexados a la misma comparación de alcance; mezclar evidencia debilita la atribución en revisión de escritorio.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por granizo en techo",
        href: "/resources/guides/roofing-claims/roof-hail-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por viento en techo",
        href: "/resources/guides/roofing-claims/roof-wind-damage-documentation-guide",
      },
    ],
  },
  {
    id: "roof-layered-tear-off-discovery",
    category: "roofing_claims",
    question: "¿Cómo deben los contratistas documentar techado en capas durante el desmontaje?",
    answer:
      "Fotografíe cada capa progresivamente a medida que avanza el desmontaje, no en una sola toma resumen posterior. Etiquete cada foto con el nombre de la pendiente, la fecha, el número de capas y el tipo de material de la capa expuesta. Vincule los cargos adicionales por capas de desmontaje a la secuencia fotográfica progresiva y a las notas de campo en la narrativa del suplemento. Las aseguradoras niegan el descubrimiento de capas reportado después del desmontaje cuando falta evidencia previa y durante la remoción.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por granizo en techo",
        href: "/resources/guides/roofing-claims/roof-hail-damage-documentation-guide",
      },
      {
        label: "Lista de verificación de suplementos de techado",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
    ],
  },
  {
    id: "roof-flashing-supplement-qualification",
    category: "roofing_claims",
    question: "¿Cuándo califica el flashing para un suplemento de techo frente a un parche?",
    answer:
      "El flashing califica para reemplazo cuando el daño por tormenta dobla, hendía o desplaza el metal más allá de una reparación con parche: flashing escalonado retirado de muros, botas de tubería agrietadas, drip edge doblado o metal de valle con deformación por impacto o viento documentada en fotos de primer plano y contexto. El alcance de solo parche es más difícil de defender cuando las fotos muestran deformación estructural, falla de sellado o múltiples segmentos dañados en la misma elevación. Indexe cada foto de flashing a una partida específica del suplemento y etiqueta de pendiente.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por granizo en techo",
        href: "/resources/guides/roofing-claims/roof-hail-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por viento en techo",
        href: "/resources/guides/roofing-claims/roof-wind-damage-documentation-guide",
      },
    ],
  },

  // Commercial Roofing Documentation (5)
  {
    id: "roof-commercial-damage-documentation",
    category: "roofing_claims",
    question: "¿Cómo se documenta el daño en un techo comercial para seguros?",
    answer:
      "La documentación de daños en techado comercial comienza con un plano de techo etiquetado y fotos indexadas por zona: pares de vista general y primer plano para daño en campo de membrana, costuras, flashings, coping, metal de borde, drenajes, scuppers y penetraciones. Documente el tipo de ensamblaje (TPO, EPDM, PVC, mod bit, BUR, metal, SPF o recubrimiento), realice estudios de humedad y muestreo por núcleo cuando se sospeche aislamiento húmedo, y correlacione mapas interiores de cielo con zonas del techo. Reconcilie mediciones con el croquis de la aseguradora, adjunte especificaciones del fabricante e indexe cada foto a las partidas del estimado antes de enviar el suplemento.",
    relatedLinks: [
      {
        label: "Guía de documentación de techado comercial",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
      {
        label: "Guía de reclamaciones de techado en HOAs",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Guía de documentación de mediciones de techo",
        href: "/resources/guides/roofing-claims/roof-measurement-documentation-guide",
      },
    ],
  },
  {
    id: "roof-commercial-supplement-documentation",
    category: "roofing_claims",
    question: "¿Qué documentación se requiere para suplementos de techado comercial?",
    answer:
      "Los suplementos de techado comercial requieren una tabla de comparación de alcance que vincule las partidas del estimado de la aseguradora con evidencia de campo indexada por zona: plano de techo, fotos progresivas de desmontaje, mapas de estudio de humedad, resultados de muestreo por núcleo, inventario de desconexión y reconexión de equipos, y mapas de migración de agua interior. Incluya orientación del fabricante al disputar alcance de solo parche, citas de código para mejoras, fotos de grúa y acopio por limitaciones de acceso, y una narrativa del contratista indexada a cada partida disputada. Ejecute la lista de verificación de suplementos de techado antes del envío: la prueba de humedad incompleta y la documentación de equipos faltante son las denegaciones más comunes en suplementos comerciales.",
    relatedLinks: [
      {
        label: "Guía de documentación de techado comercial",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
      {
        label: "Lista de verificación de suplementos de techado",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
      {
        label: "Manual de suplementos de techado",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
  },
  {
    id: "roof-commercial-moisture-survey-payment",
    category: "roofing_claims",
    question: "¿Las compañías de seguros pagan los estudios de humedad?",
    answer:
      "Muchas aseguradoras aprueban los costos de estudios de humedad y muestreo por núcleo en reclamaciones de techado comercial cuando los resultados justifican el reemplazo de aislamiento húmedo, pero el pago depende de documentación contemporánea que vincule los resultados del escaneo a zonas específicas del techo y partidas del estimado. Realice estudios antes del desmontaje cuando fugas interiores, encharcamiento o aperturas por tormenta sugieran sustrato húmedo. Documente solicitudes de autorización, informes del técnico y lecturas mapeadas indexadas al plano del techo. Las reclamaciones de aislamiento húmedo sin prueba de humedad se excluyen comúnmente aunque el alcance de reemplazo sea defendible.",
    relatedLinks: [
      {
        label: "Guía de documentación de techado comercial",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
      {
        label: "¿Qué documentación respalda reemplazar un sistema de techado comercial?",
        href: "/faq#faq-roof-commercial-system-replacement-documentation",
      },
    ],
  },
  {
    id: "roof-commercial-inspection-photos",
    category: "roofing_claims",
    question: "¿Qué se debe fotografiar durante una inspección de techo comercial?",
    answer:
      "Fotografíe la vista general del techo desde cada esquina y zona, luego primeros planos de daño en campo de membrana, costuras, flashings, coping, metal de borde, juntas de expansión, drenajes, scuppers, curbs de HVAC, tragaluces y equipos montados en techo. Capture contexto con dron y desde el suelo cuando esté permitido. Documente cuadrados de prueba o áreas de impacto, cuadrículas de estudio de humedad, ubicaciones de muestreo por núcleo, condiciones interiores de cielo y reparaciones temporales de emergencia. Cada primer plano necesita un par de vista general con etiqueta de zona, fecha y dirección: los revisores de escritorio no pueden aprobar alcance que no puedan ubicar en el plano del techo.",
    relatedLinks: [
      {
        label: "Guía de documentación de techado comercial",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
      {
        label: "Estándar de documentación de reclamaciones de techado",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-commercial-system-replacement-documentation",
    category: "roofing_claims",
    question: "¿Qué documentación respalda reemplazar un sistema de techado comercial?",
    answer:
      "El reemplazo completo de un sistema comercial requiere evidencia más allá del daño superficial de membrana: prueba de aislamiento húmedo por estudio de humedad y muestreo por núcleo, especificaciones del fabricante que muestren daño más allá de límites de parche, análisis de reparabilidad cuando la membrana envejecida no puede resellarse, documentación de coincidencia cuando el producto está descontinuado, citas de código de mejora, y fotos de múltiples áreas de impacto o costuras fallidas en secciones. Documente el conteo de capas en desmontaje, condición de la cubierta, requisitos de cover board y alcance de desconexión y reconexión de equipos. Consulte las guías de documentación de reparabilidad y coincidencia de techo cuando las aseguradoras aprueban alcance parcial en ensamblajes de baja pendiente.",
    relatedLinks: [
      {
        label: "Guía de documentación de techado comercial",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
      {
        label: "Guía de documentación de reparabilidad de techo",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
    ],
  },

  // HOA and condominium roofing (5)
  {
    id: "roof-hoa-responsible-damage",
    category: "roofing_claims",
    question: "¿Quién es responsable de los daños en el techo en una HOA?",
    answer:
      "La responsabilidad por daños en el techo en una HOA depende de los documentos de gobierno — los CC&R y estatutos definen qué techos, fachadas y accesorios son elementos comunes mantenidos por la asociación frente a responsabilidades del propietario de la unidad. Los contratistas deben documentar el resumen de responsabilidad proporcionado por la administración, fotografiar las áreas de propiedad de la asociación por separado de los límites del propietario e indexar las partidas de alcance a la parte asegurada correcta. Cuando los límites se disputan, las comunicaciones contemporáneas con la junta y la administración de la propiedad fortalecen la atribución en la revisión de la aseguradora — no la interpretación legal por parte del contratista.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones de techado en HOAs",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Guía de documentación de techado comercial",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-hoa-insurance-covers-replacement",
    category: "roofing_claims",
    question: "¿El seguro de la HOA cubre el reemplazo del techo?",
    answer:
      "Las pólizas maestras de seguro de HOA generalmente cubren los techos de elementos comunes declarados en la cobertura de la asociación, pero el pago depende de los términos de la póliza, deducibles, causa del daño y asignación según documentos de gobierno — no del reemplazo automático de toda la comunidad. Los contratistas deben documentar el número de reclamación de la póliza maestra, el manejo del deducible según orientación de la administración y el daño específico por edificio que respalde el alcance de reemplazo en estructuras afectadas. Los registros de autorización de la junta y la evidencia fotográfica por edificio fortalecen la aprobación cuando las aseguradoras cuestionan la extensión del alcance en pérdidas parciales por edificio.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones de techado en HOAs",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
    ],
  },
  {
    id: "roof-hoa-damage-documentation",
    category: "roofing_claims",
    question: "¿Cómo se debe documentar el daño en el techo de una HOA?",
    answer:
      "La documentación de daños en techos de HOA comienza con un inventario de edificios y un plano del sitio de la comunidad — cada estructura numerada de forma consistente en fotos, mediciones y estimaciones. Fotografíe cada fachada de cada edificio con pares de panorámica y primer plano; indexe los componentes compartidos (canaletas, cocheras, clubes) por separado. Adjunte resúmenes de responsabilidad de documentos de gobierno, registros de coordinación de acceso y registros de comunicación con la junta junto con la evidencia de campo. Las tablas de comparación de alcance por edificio vinculadas a índices fotográficos son esenciales antes de presentar suplementos en archivos de asociaciones comunitarias.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones de techado en HOAs",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Estándar de documentación de reclamaciones de techado",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
      {
        label: "Lista de verificación de suplementos de techado",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
    ],
  },
  {
    id: "roof-hoa-partial-building-replacement",
    category: "roofing_claims",
    question: "¿Se puede reemplazar cada edificio si solo algunos están dañados?",
    answer:
      "El reemplazo de toda la comunidad cuando solo algunos edificios están dañados depende de los requisitos de coincidencia, estándares de documentos de gobierno, límites de reparación del fabricante y atribución de daño funcional — no de la aprobación automática. Documente comparaciones de fachadas que muestren discrepancia de color y perfil entre edificios dañados y no dañados, análisis de reparabilidad por estructura y requisitos de uniformidad de documentos de gobierno citados por la administración. Las aseguradoras a menudo aprueban el reemplazo completo en edificios afectados mientras niegan estructuras no dañadas — la evidencia fotográfica por edificio y la documentación de coincidencia respaldan argumentos de alcance parcial en la comunidad.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones de techado en HOAs",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Guía de documentación de reparabilidad de techo",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
    ],
  },
  {
    id: "roof-hoa-supplement-documentation",
    category: "roofing_claims",
    question: "¿Qué documentación ayuda en los suplementos de techado de HOAs?",
    answer:
      "Los suplementos de techado de HOA requieren tablas de comparación de alcance indexadas por edificio que vinculen las partidas del estimado de la aseguradora con evidencia fotográfica, mediciones y contexto de documentos de gobierno por edificio. Incluya registros de movilización para despliegues multi-edificio, registros de retrasos de acceso, documentación de autorización de la junta y fotos progresivas de desmontaje para descubrimientos de daños ocultos. Ejecute la Lista de verificación de suplementos de techado antes de la presentación — la indexación faltante por edificio y los retrasos de acceso no documentados son las denegaciones de suplemento de HOA más comunes.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones de techado en HOAs",
        href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
      },
      {
        label: "Lista de verificación de suplementos de techado",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
      {
        label: "Manual de suplementos de techado",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
  },

  // Multi-Building Roofing Claims (5)
  {
    id: "roof-multi-building-carrier-handling",
    category: "roofing_claims",
    question: "¿Cómo manejan las aseguradoras las reclamaciones de techado multi-edificio?",
    answer:
      "Las aseguradoras tratan las reclamaciones de techado multi-edificio con mayor escrutinio: ajustadores especialistas, revisión de ingeniería, muestreo representativo en subconjuntos de edificios y tablas de alcance agregadas que pueden omitir detalle por estructura. Los revisores de escritorio esperan mapas del sitio, inventarios de edificios, índices fotográficos por estructura y reconciliación de mediciones — no documentación residencial en una sola carpeta. Documente cada edificio con estándares idénticos para que las disputas de muestreo no excluyan estructuras aparentemente intactas con condiciones de campo idénticas.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones de techado multi-edificio",
        href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
      },
      {
        label: "Guía de documentación de techado comercial",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-multi-building-partial-replacement",
    category: "roofing_claims",
    question: "¿Puede el seguro reemplazar todos los techos si solo algunos edificios están dañados?",
    answer:
      "Las aseguradoras suelen aprobar reemplazo solo en edificios con daño documentado por tormenta, pero los contratistas pueden respaldar un alcance más amplio cuando aplican argumentos de coincidencia, reparabilidad, límites de parche del fabricante o apariencia uniforme en líneas de vista del campus. Documente comparaciones de elevación, avisos de materiales descontinuados y resultados de pruebas de reparabilidad por edificio — no solo en muestras seleccionadas por la aseguradora. Las disputas de reemplazo parcial en complejos de apartamentos, parques de oficinas y campus hoteleros siguen los mismos estándares de evidencia indexada por edificio que las reclamaciones de coincidencia en estructuras individuales.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones de techado multi-edificio",
        href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
      },
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
      {
        label: "Guía de documentación de reparabilidad de techo",
        href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
      },
    ],
  },
  {
    id: "roof-multi-building-apartment-documentation",
    category: "roofing_claims",
    question: "¿Cómo deben los contratistas documentar daños de techo en complejos de apartamentos?",
    answer:
      "La documentación de techado en complejos de apartamentos comienza con un inventario de edificios y mapa del sitio etiquetado — cada estructura numerada consistentemente con los registros de administración de la propiedad. Fotografíe pares de panorámica y primer plano para cada elevación de cada edificio en carpetas indexadas separadas. Realice cuadrados de prueba por edificio en pérdidas por granizo, correlacione manchas interiores de pisos superiores con zonas de techo y registre la coordinación de acceso de inquilinos contemporáneamente. Reconcilie mediciones por edificio con el croquis de la aseguradora y vincule cada línea del estimado con evidencia fotográfica específica del edificio antes de enviar el suplemento.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones de techado multi-edificio",
        href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
      },
      {
        label: "Estándar de documentación de reclamaciones de techado",
        href: "/resources/guides/roofing-claims/roofing-documentation-guide",
      },
    ],
  },
  {
    id: "roof-multi-building-matching",
    category: "roofing_claims",
    question: "¿Qué respalda la coincidencia entre múltiples edificios?",
    answer:
      "La coincidencia entre múltiples edificios requiere fotos de elevación que muestren diferencias de color, perfil y desgaste entre estructuras reemplazadas y no reemplazadas; cartas de proveedores confirmando materiales descontinuados; y comparaciones de línea de vista del campus mostrando desajuste visible desde áreas comunes. Documente sistemas de techo y edades idénticas entre edificios para respaldar argumentos de apariencia uniforme. Cuando solo se reemplazan edificios dañados, fotografíe el contraste desde nivel del suelo y edificios adyacentes — no solo primeros planos en la estructura reparada.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones de techado multi-edificio",
        href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
      },
      {
        label: "Guía de documentación de coincidencia de techo",
        href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
      },
    ],
  },
  {
    id: "roof-multi-building-supplement-documentation",
    category: "roofing_claims",
    question: "¿Qué documentación ayuda en suplementos grandes de techado comercial?",
    answer:
      "Los suplementos grandes de techado multi-edificio requieren tablas de comparación de alcance indexadas por edificio que vinculen líneas del estimado de la aseguradora con evidencia fotográfica, mediciones y registros de movilización por estructura. Incluya fotos de configuración de grúa, restricciones de almacenamiento de materiales, cronogramas de producción por fases, fotos progresivas de desmontaje para daños ocultos y registros de retrasos de acceso en campus ocupados. Ejecute la lista de verificación de suplementos de techado antes del envío — la falta de indexación por edificio y movilizaciones no documentadas son las denegaciones más comunes en suplementos multi-edificio.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones de techado multi-edificio",
        href: "/resources/guides/roofing-claims/multi-building-roofing-claims-guide",
      },
      {
        label: "Lista de verificación de suplementos de techado",
        href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
      },
      {
        label: "Manual de suplementos de techado",
        href: "/resources/blog/roofing-supplement-playbook",
      },
    ],
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

  // Water Damage Reinspection (5)
  {
    id: "water-reinspection-when-request",
    category: "water_damage_claims",
    question: "¿Cuándo deben los contratistas solicitar una reinspección de daños por agua?",
    answer:
      "Solicite una reinspección de daños por agua cuando la humedad recién descubierta, daños ocultos o alcance expandido no puedan transmitirse completamente mediante fotos, mapas de humedad y registros de secado — o cuando el ajustador ofrezca o acepte una visita al sitio en lugar de revisión de escritorio. Los desencadenantes comunes incluyen habitaciones o unidades adicionales afectadas, humedad en cavidades encontrada después de la demolición, discrepancias de alcance entre la estimación de la aseguradora y la documentación de campo, e inspecciones iniciales incompletas por limitaciones de acceso. Prepare el paquete de documentación antes de solicitar la visita — la reinspección respalda hechos; no reemplaza evidencia indexada.",
    relatedLinks: [
      {
        label: "Guía de reinspección de daños por agua",
        href: "/resources/guides/water-damage/water-damage-reinspection-guide",
      },
      {
        label: "Recuperación de negación de suplemento de daños por agua",
        href: "/resources/blog/water-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "water-reinspection-documentation-prep",
    category: "water_damage_claims",
    question: "¿Qué documentación debe prepararse antes de una reinspección?",
    answer:
      "Prepare fotos etiquetadas, mapas de humedad iniciales y revisados con IDs de puntos consistentes, registros de secado y monitoreo completos, una tabla de comparación de alcance que vincule brechas de la estimación de la aseguradora con evidencia de campo, un resumen narrativo de una página de daños adicionales descubiertos y un paquete indexado de respaldo de factura. La documentación debe estar organizada y actualizada hasta la fecha de solicitud de reinspección — no ensamblada después de que el ajustador programe la visita.",
    relatedLinks: [
      {
        label: "Guía de reinspección de daños por agua",
        href: "/resources/guides/water-damage/water-damage-reinspection-guide",
      },
      {
        label: "Guía de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
      {
        label: "Guía de recolección de registros de secado",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
    ],
  },
  {
    id: "water-reinspection-additional-damage-documented",
    category: "water_damage_claims",
    question: "¿Se puede documentar daño adicional después de la inspección inicial?",
    answer:
      "Sí — cuando se descubre humedad adicional, daños ocultos o expansión de alcance después de la inspección inicial de la aseguradora, la documentación contemporánea respalda solicitudes de reinspección y suplemento. Capture fotos de descubrimiento con marcas de tiempo, revise mapas de humedad con adiciones de puntos fechadas, actualice entradas de registro de secado desde la fecha de descubrimiento y registre cuándo y cómo se encontró el alcance adicional. Las aseguradoras evalúan si la evidencia se capturó contemporáneamente — la narrativa retroactiva sin fotos fechadas y revisiones de mapas se descuenta en la revisión de escritorio.",
    relatedLinks: [
      {
        label: "Guía de reinspección de daños por agua",
        href: "/resources/guides/water-damage/water-damage-reinspection-guide",
      },
      {
        label: "Guía de monitoreo diario",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
    ],
  },
  {
    id: "water-reinspection-denial-reasons",
    category: "water_damage_claims",
    question: "¿Por qué las aseguradoras niegan solicitudes de reinspección?",
    answer:
      "Las aseguradoras pueden rechazar solicitudes de reinspección cuando la documentación no justifica una visita al sitio — mapas de humedad débiles, registros de secado incompletos o reclamos de alcance no respaldados sugieren que la revisión de escritorio es suficiente. Otras razones incluyen antigüedad del archivo, reinspección previa sin envío de estimación actualizada, solicitudes repetidas sin nueva evidencia y disputas de alcance que las aseguradoras consideran revisiones de estimación en lugar de problemas de verificación de campo. Fortalezca la solicitud con un paquete de documentación indexado y tabla de comparación de alcance antes de pedir una nueva visita.",
    relatedLinks: [
      {
        label: "Guía de reinspección de daños por agua",
        href: "/resources/guides/water-damage/water-damage-reinspection-guide",
      },
      {
        label: "Brechas de documentación que provocan denegaciones de reclamaciones de agua",
        href: "/resources/blog/documentation-gaps-that-trigger-water-claim-denials",
      },
    ],
  },
  {
    id: "water-reinspection-organize-documentation",
    category: "water_damage_claims",
    question: "¿Cómo deben los contratistas organizar la documentación para una reinspección?",
    answer:
      "Organice la documentación en capas: resumen narrativo de una página, tabla de comparación de alcance con referencias de líneas de estimación, mapa de humedad actual, resumen de registro de secado, adjuntos de fotos indexados por habitación o cámara y prueba de colocación de equipos. Use nombres de habitaciones consistentes en mapas, registros, fotos y estimaciones. Entregue al ajustador un paquete enfocado vinculado a líneas disputadas — no un volcado de archivos no estructurado. Actualice la estimación escrita la misma semana de la visita para que las líneas discutidas en el sitio aparezcan en el alcance enviado.",
    relatedLinks: [
      {
        label: "Guía de reinspección de daños por agua",
        href: "/resources/guides/water-damage/water-damage-reinspection-guide",
      },
      {
        label: "Guía de defensa de facturas de mitigación de agua",
        href: "/resources/guides/water-damage/water-mitigation-invoice-defense-guide",
      },
    ],
  },

  // Fire Damage Claims (11)
  {
    id: "fire-damage-documentation-insurance",
    category: "fire_damage_claims",
    question: "¿Cómo se debe documentar el daño por fuego para el seguro?",
    answer:
      "Documente la autorización de seguridad del sitio, fotos exteriores y de la habitación de origen, migración de humo por habitación, componentes estructurales, estado del HVAC, daño por agua de supresión, inventario de contenidos y hallazgos durante la demolición, con etiquetas de habitación consistentes en fotos, croquis y estimado. La evidencia indexada respalda suplementos cuando el alcance excede el estimado de la aseguradora.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Lista de verificación de ingreso de reclamaciones por fuego",
        href: "/resources/guides/fire-damage/fire-claim-intake-guide",
      },
      { label: "Soluciones para daños por fuego", href: "/solutions/fire-damage" },
    ],
  },
  {
    id: "fire-damage-photos-required",
    category: "fire_damage_claims",
    question: "¿Qué fotos se requieren después de un incendio?",
    answer:
      "Las aseguradoras esperan elevaciones exteriores, habitación de origen antes de la mitigación, ruta de migración por pasillos y pisos superiores, daño estructural por calor y carbonización, registros y filtros de HVAC, saturación por agua de supresión, contenidos en su lugar antes del pack-out y hallazgos durante la demolición, todo con etiquetas de habitación y fechas en los nombres de archivo.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Procedimiento de documentación fotográfica",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "fire-smoke-damage-insurance-coverage",
    category: "fire_damage_claims",
    question: "¿El seguro paga por daños de humo?",
    answer:
      "La mayoría de las pólizas de propiedad cubren daños por humo y hollín cuando la documentación demuestra contaminación más allá del origen del fuego: fotos de migración, resultados de limpieza de prueba y alcance habitación por habitación. Las aseguradoras disputan humo localizado versus sistémico; evidencia sólida de migración y notas del método de limpieza respaldan la aprobación de partidas de limpieza, sellado y desodorización.",
    relatedLinks: [
      {
        label: "Procedimiento de documentación de humo y hollín",
        href: "/resources/guides/fire-damage/smoke-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
    ],
  },
  {
    id: "fire-hidden-damage-documentation",
    category: "fire_damage_claims",
    question: "¿Cómo se documenta el daño oculto por fuego?",
    answer:
      "Fotografíe el daño oculto de forma contemporánea durante la demolición — carbonización en cavidades, cerchas comprometidas, hollín en áticos y espacios de acceso — antes de que las reparaciones cierren el acceso. Mantenga un registro de hallazgos de demolición con fotos fechadas y mediciones. Los informes de ingeniería fortalecen el alcance estructural cuando las aseguradoras aprueban solo reparaciones parciales.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Procedimiento de documentación de estabilización estructural",
        href: "/resources/guides/fire-damage/structural-stabilization-documentation-guide",
      },
    ],
  },
  {
    id: "fire-supplement-documentation-support",
    category: "fire_damage_claims",
    question: "¿Qué documentación respalda los suplementos por daños de fuego?",
    answer:
      "Los paquetes de suplemento por fuego necesitan fotos indexadas por habitación, narrativa de la ruta de migración, registros de hallazgos de demolición, evidencia de HVAC y contenidos, informes de ingeniería o pruebas cuando se usen, y una carta de presentación que mapee cada adjunto a las partidas del estimado. Este es el inventario de evidencia que los revisores de escritorio verifican — los suplementos por fases con captura contemporánea superan la narrativa al final del trabajo armada después de que la producción cierra el acceso.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Por qué se rechazan los suplementos por daños de fuego",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Recuperación ante denegación de suplementos por fuego",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "smoke-damage-documentation-insurance",
    category: "fire_damage_claims",
    question: "¿Cómo se debe documentar el daño por humo para el seguro?",
    answer:
      "Documente la contaminación por habitación con fotos generales y de primer plano del sustrato, narrativa de la ruta de migración desde el origen por pasillos y pisos superiores, notas del tipo de hollín, condición de rejillas y filtros HVAC, registros de olor y resultados de limpieza de prueba cuando se dispute limpiar frente a reemplazar, con etiquetas de habitación consistentes en fotos, croquis y estimado. La evidencia indexada respalda suplementos cuando el alcance de humo excede el estimado de la aseguradora.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Procedimiento de documentación de humo y hollín",
        href: "/resources/guides/fire-damage/smoke-documentation-guide",
      },
      {
        label: "Errores de documentación de daños por humo",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
      { label: "Soluciones para daños por fuego", href: "/solutions/fire-damage" },
    ],
  },
  {
    id: "soot-damage-insurance-coverage",
    category: "fire_damage_claims",
    question: "¿El seguro cubre el daño por hollín?",
    answer:
      "La mayoría de las pólizas de propiedad cubren el daño por hollín cuando la documentación demuestra contaminación más allá del origen del fuego: fotos de migración, primeros planos de sustrato, resultados de limpieza de prueba y alcance habitación por habitación. Las aseguradoras disputan hollín localizado frente a sistémico; evidencia sólida de migración, notas del tipo de hollín y documentación del método de limpieza respaldan la aprobación de partidas de limpieza, sellado y limpieza especializada.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
    ],
  },
  {
    id: "smoke-damage-photos-required",
    category: "fire_damage_claims",
    question: "¿Qué fotografías se deben tomar después de daños por humo?",
    answer:
      "Las aseguradoras esperan contexto general de habitación más primeros planos del sustrato mostrando color, textura y extensión del hollín en techos, paredes, molduras y accesorios; ruta de migración por pasillos, closets y pisos superiores; rejillas y filtros HVAC; interiores de gabinetes y cavidades; series de limpieza de prueba antes y después en sustratos disputados; y acceso a ático o crawlspace cuando se reclame migración, todo con etiquetas de habitación y fechas en los nombres de archivo.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Procedimiento de documentación fotográfica de campo",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "smoke-damage-clean-vs-replace",
    category: "fire_damage_claims",
    question: "¿Cuándo deben reemplazarse los materiales dañados por humo en lugar de limpiarse?",
    answer:
      "Reemplace cuando la limpieza de prueba falle en el sustrato, el tipo de hollín impida la restauración (residuo proteico en materiales porosos, hollín de combustible en madera sin acabado), la guía del fabricante prohíba la limpieza o el daño por calor y carbonización comprometa el ensamblaje. Documente fotos de limpieza de prueba antes y después, condición del sustrato y boletines del fabricante que respalden el reemplazo frente a macros de solo limpieza de la aseguradora.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Procedimiento de documentación de humo y hollín",
        href: "/resources/guides/fire-damage/smoke-documentation-guide",
      },
    ],
  },
  {
    id: "smoke-damage-supplement-documentation",
    category: "fire_damage_claims",
    question: "¿Qué documentación respalda los suplementos por daño de humo?",
    answer:
      "Los suplementos por humo necesitan fotos indexadas por habitación, narrativa de la ruta de migración, resultados de limpieza de prueba, evidencia de HVAC y olor, fotos de cavidades y ático del descubrimiento en demolición, y una carta de presentación que mapee los adjuntos a las partidas. Los suplementos por fases con evidencia de migración contemporánea superan la narrativa de fin de trabajo ensamblada después de que la limpieza oculte las condiciones.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Por qué se rechazan los suplementos por daños de fuego",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Recuperación ante denegación de suplementos por fuego",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "smoke-damage-contractor-documentation-insurance",
    category: "fire_damage_claims",
    question: "¿Cómo documentan los contratistas el daño por humo para reclamaciones de seguro?",
    answer:
      "Los contratistas documentan el daño por humo con fotos de contaminación habitación por habitación, narrativa de la ruta de migración desde el origen por pasillos y pisos superiores, registros de intensidad de olor, inspección de rejillas y filtros HVAC, resultados de limpieza de prueba para decisiones de limpiar frente a reemplazar, y fotos de áreas ocultas en áticos y cavidades, todo con etiquetas de habitación que coincidan con croquis y estimación. Las carpetas indexadas por habitación y fase respaldan suplementos cuando el alcance de humo excede el estimado de la aseguradora.",
    relatedLinks: [
      {
        label: "Errores de documentación de daños por humo",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
    ],
  },
  {
    id: "smoke-damage-claim-photos-required",
    category: "fire_damage_claims",
    question: "¿Qué fotos se deben tomar para reclamaciones por daño de humo?",
    answer:
      "Las reclamaciones por daño de humo necesitan contexto general de habitación, tomas de propagación vertical a media distancia y fotos de primer plano del sustrato en techos, paredes, molduras, gabinetes y pisos en cada habitación afectada; ruta de migración por pasillos y conductos; rejillas, filtros y ductos accesibles HVAC; inspección de ático y crawlspace cuando se reclame migración; series de limpieza de prueba antes y después; y fotos de contenidos in situ, todo etiquetado consistentemente con nombres de habitación del croquis y fechado en la admisión.",
    relatedLinks: [
      {
        label: "Errores de documentación de daños por humo",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Procedimiento de estándares de documentación fotográfica",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "smoke-damage-hvac-documentation-required",
    category: "fire_damage_claims",
    question: "¿El daño por humo requiere documentación HVAC?",
    answer:
      "Sí — cuando el HVAC funcionó después del incendio o cuando las reclamaciones de migración incluyen rutas de ductos, las aseguradoras esperan fotos de rejillas y difusores, condición de filtros en la admisión, inspección de ductos y plenum accesibles, fotos del interior del manejador de aire cuando se factura limpieza de unidad, notas del tipo de sistema y verificación post-limpieza. El alcance HVAC sin evidencia de campo está entre las primeras partidas de humo reducidas en revisión de escritorio.",
    relatedLinks: [
      {
        label: "Contaminación HVAC en reclamaciones por daños de fuego",
        href: "/resources/blog/hvac-contamination-in-fire-damage-claims",
      },
      {
        label: "Procedimiento de documentación de contaminación HVAC",
        href: "/resources/guides/fire-damage/hvac-contamination-guide",
      },
      {
        label: "Errores de documentación de daños por humo",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
    ],
  },
  {
    id: "smoke-damage-claims-underpaid-why",
    category: "fire_damage_claims",
    question: "¿Por qué las reclamaciones de seguro por daño de humo reciben pagos insuficientes?",
    answer:
      "Las reclamaciones por humo reciben pagos insuficientes cuando la documentación trata la contaminación como cosmética, omite mapeo de olor y evidencia HVAC, salta áreas ocultas, entrega rollos de fotos sin etiquetar, no separa limpieza de reemplazo y carece de narrativa escrita de migración. Las aseguradoras aprueban alcance que pueden emparejar con habitaciones del croquis — los expedientes de humo incompletos producen reducciones proporcionales en lugar de denegación total.",
    relatedLinks: [
      {
        label: "Errores de documentación de daños por humo",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
      {
        label: "Por qué las reclamaciones por daños de fuego reciben pagos insuficientes",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
    ],
  },
  {
    id: "smoke-damage-invisible-without-soot",
    category: "fire_damage_claims",
    question: "¿Puede existir daño por humo sin hollín visible?",
    answer:
      "Sí. El daño por humo incluye deposición en fase de vapor, absorción de olor en materiales porosos, partículas en cavidades de pared y hollín microscópico en medios HVAC, a menudo sin manchas superficiales obvias. Los incendios de proteína y pérdidas de combustión lenta producen frecuentemente olor persistente con residuo visible mínimo. Documente registros de olor, inspección de cavidades, resultados de limpieza de prueba y condición de filtros HVAC para probar impacto que las aseguradoras no pueden ver solo en fotos generales.",
    relatedLinks: [
      {
        label: "Errores de documentación de daños por humo",
        href: "/resources/blog/smoke-damage-documentation-mistakes",
      },
      {
        label: "Mitigación de olores en reclamaciones por daños de fuego",
        href: "/resources/blog/odor-mitigation-in-fire-damage-claims",
      },
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
    ],
  },

  // Fire Claim Documentation Checklist FAQs (5)
  {
    id: "fire-supplement-checklist-documents",
    category: "fire_damage_claims",
    question: "¿Qué documentos deben incluir los contratistas con un suplemento de seguro por incendio?",
    answer:
      "Incluya carta de presentación con índice de anexos, estimación Xactimate revisada, exhibiciones fotográficas etiquetadas por habitación, narrativa de migración de humo, registro de descubrimientos en demolición, evidencia de inspección HVAC, páginas de inventario de contenidos, registros de cadena de custodia de pack-out, citas de código con respaldo de permisos, extractos de informes especializados cuando se usen, y registro de correspondencia. Cada línea solicitada debe corresponder a al menos un anexo nombrado antes del envío.",
    relatedLinks: [
      {
        label: "Lista de verificación de documentación de reclamaciones por incendio",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "¿Qué debe incluirse en un suplemento por daños de fuego?",
        href: "/faq#faq-fire-supplement-included-items",
      },
    ],
  },
  {
    id: "fire-claim-photo-volume",
    category: "fire_damage_claims",
    question: "¿Cuántas fotos se deben tomar durante una reclamación por incendio?",
    answer:
      "Planifique un conjunto estructurado mínimo por habitación afectada: al menos una foto general, una de techo y paredes a media distancia, y primeros planos de sustrato por cada superficie facturada, más progresión de migración, elevaciones exteriores, registros HVAC, descubrimientos en demolición e imágenes de contenidos in situ. Las reclamaciones complejas por incendio suelen superar 200–400 fotos etiquetadas; el volumen importa menos que la cobertura completa por habitación y etiquetas consistentes entre fotos, croquis y estimación.",
    relatedLinks: [
      {
        label: "Lista de verificación de documentación de reclamaciones por incendio",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "¿Qué fotos se requieren después de un incendio?",
        href: "/faq#faq-fire-damage-photos-required",
      },
    ],
  },
  {
    id: "fire-smoke-documentation-support",
    category: "fire_damage_claims",
    question: "¿Qué documentación respalda el daño por humo en reclamaciones por incendio?",
    answer:
      "La documentación de daño por humo incluye fotos de ruta de migración desde el origen por espacios conectados, registros de olor por habitación antes del tratamiento, primeros planos de sustrato con notas de tipo de hollín, resultados de limpieza de prueba cuando se disputa limpiar vs reemplazar, condición de registros y filtros HVAC, y justificación del método de limpieza según el tipo de contaminación. La evidencia indexada respalda líneas de suplemento cuando el alcance de humo supera la estimación de la aseguradora.",
    relatedLinks: [
      {
        label: "Lista de verificación de documentación de reclamaciones por incendio",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "¿Cómo se debe documentar el daño por humo para el seguro?",
        href: "/faq#faq-smoke-damage-documentation-insurance",
      },
    ],
  },
  {
    id: "fire-hidden-damage-required",
    category: "fire_damage_claims",
    question: "¿Deben los contratistas documentar daños ocultos por incendio?",
    answer:
      "Sí: el daño oculto por incendio debe documentarse de forma contemporánea durante la demolición antes de que las reparaciones cierren el acceso. Carbón en cavidades de pared, cerchas comprometidas, hollín en áticos y aislamiento húmedo por supresión son alcances de suplemento comunes que las aseguradoras no pueden verificar en inspecciones iniciales. No fotografiar descubrimientos durante el desmontaje elimina la evidencia que los revisores de escritorio necesitan para aprobar líneas estructurales y de humo descubiertas después de la primera estimación.",
    relatedLinks: [
      {
        label: "Lista de verificación de documentación de reclamaciones por incendio",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "¿Cómo se debe documentar el daño oculto por incendio?",
        href: "/faq#faq-fire-hidden-damage-documentation",
      },
    ],
  },
  {
    id: "fire-carrier-additional-documentation-why",
    category: "fire_damage_claims",
    question: "¿Por qué las aseguradoras solicitan documentación adicional durante reclamaciones por incendio?",
    answer:
      "Las aseguradoras solicitan documentación adicional cuando los expedientes no están listos para revisión: fotos sin etiquetar, nombres de habitación inconsistentes entre croquis e inventario, cadena de custodia de pack-out faltante, alcance HVAC sin evidencia de registros, listas de contenidos sin imágenes in situ, o paquetes de suplemento sin índices de anexo a línea. Cada solicitud de información añade días antes del pago; la documentación completa previa al envío evita RFIs iterativos y reducciones proporcionales en líneas sin respaldo.",
    relatedLinks: [
      {
        label: "Lista de verificación de documentación de reclamaciones por incendio",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "¿Qué errores de documentación retrasan las reclamaciones por incendio?",
        href: "/faq#faq-fire-claim-documentation-delays",
      },
      {
        label: "¿Cómo pueden los contratistas mejorar la documentación de reclamaciones por incendio?",
        href: "/faq#faq-fire-claim-documentation-improve",
      },
    ],
  },
  // Fire Supplement Denial FAQs (5)
  {
    id: "fire-supplement-denied-why",
    category: "fire_damage_claims",
    question: "¿Por qué se rechazan los suplementos por daños de fuego?",
    answer:
      "Los suplementos por daños de fuego se rechazan cuando la documentación no respalda el alcance facturado: fotos de habitaciones incompletas, evidencia débil de humo y hollín, daños ocultos sin documentar, inventarios de contenidos faltantes, vacíos en cadena de custodia de pack-out, mejoras de código sin respaldo, estimaciones desorganizadas o narrativas ausentes. Los revisores de escritorio aprueban el alcance que pueden verificar; las líneas no verificables se rechazan o reducen proporcionalmente aunque el trabajo de campo fuera legítimo.",
    relatedLinks: [
      {
        label: "Por qué se rechazan los suplementos por daños de fuego",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Guía del playbook de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Recuperación de suplementos por incendio rechazados",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
    ],
  },
  {
    id: "fire-supplement-denial-missing-documentation",
    category: "fire_damage_claims",
    question: "¿Puede la documentación faltante causar un rechazo de suplemento?",
    answer:
      "Sí. La documentación faltante es la causa principal de rechazos de suplementos por incendio y reducciones proporcionales. Fotos sin etiquetar, habitaciones sin tomas de techo, narrativas de migración ausentes, evidencia HVAC incompleta, listas de contenidos sin imágenes in situ, y paquetes de suplemento sin índices de anexo a línea dan a los revisores motivo para rechazar alcance sin respaldo — aunque exista cobertura para el tipo de daño.",
    relatedLinks: [
      {
        label: "Por qué se rechazan los suplementos por daños de fuego",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Lista de verificación de documentación de reclamaciones por incendio",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "¿Qué documentos deben incluir los contratistas con un suplemento por incendio?",
        href: "/faq#faq-fire-supplement-checklist-documents",
      },
    ],
  },
  {
    id: "fire-supplement-denial-response",
    category: "fire_damage_claims",
    question: "¿Cómo deben responder los contratistas a un suplemento por incendio rechazado?",
    answer:
      "Revise las razones de rechazo indicadas línea por línea, identifique la brecha de documentación para cada ítem rechazado, y reenvíe con evidencia dirigida: estimación revisada, índice de fotos etiquetadas por habitación, respaldo de humo y hollín, anexos HVAC, inventarios de contenidos, y carta de presentación que mapee anexos a números de línea. Responda cada pregunta de la aseguradora con anexos nombrados en lugar de reenviar el mismo paquete. La guía de recuperación de suplementos por incendio rechazados cubre el flujo de reenvío.",
    relatedLinks: [
      {
        label: "Recuperación de suplementos por incendio rechazados",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
      {
        label: "Por qué se rechazan los suplementos por daños de fuego",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Guía de recuperación de suplementos rechazados",
        href: "/resources/blog/supplement-denial-recovery-guide",
      },
    ],
  },
  {
    id: "fire-supplement-denial-additional-docs",
    category: "fire_damage_claims",
    question: "¿Pueden los contratistas enviar documentación adicional después de un rechazo?",
    answer:
      "Sí. El reenvío modifica la misma pérdida — no es una reclamación nueva. Envíe fotos adicionales, registros de descubrimiento, informes HVAC, inventarios de contenidos, citas de código, y narrativas de estimación revisadas que aborden cada razón de rechazo indicada. La evidencia nueva capturada después de que las reparaciones cierran el acceso tiene menos peso que la documentación contemporánea; los suplementos por fases enviados durante la investigación recuperan más alcance que los reenvíos rellenados retroactivamente.",
    relatedLinks: [
      {
        label: "Recuperación de suplementos por incendio rechazados",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
      {
        label: "Por qué se rechazan los suplementos por daños de fuego",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "¿Pueden los contratistas enviar múltiples suplementos por incendio?",
        href: "/faq#faq-fire-supplement-multiple-submissions",
      },
    ],
  },
  {
    id: "fire-supplement-denial-common-reason",
    category: "fire_damage_claims",
    question: "¿Cuál es la razón más común por la que fallan los suplementos por incendio?",
    answer:
      "La documentación fotográfica incompleta es el fallo evitable más común: habitaciones faltantes, tomas de techo y migración ausentes, volúmenes de imágenes sin etiquetar, y conjuntos de fotos que no coinciden con los nombres de habitación del croquis y la estimación. La documentación débil de humo y los daños ocultos sin documentar durante la demolición son la segunda y tercera causa. La mayoría de los fallos son problemas de documentación, no disputas de cobertura — evitables con listas de verificación previas al envío y flujo de trabajo repetible.",
    relatedLinks: [
      {
        label: "Por qué se rechazan los suplementos por daños de fuego",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Lista de verificación de documentación de reclamaciones por incendio",
        href: "/resources/blog/fire-claim-documentation-checklist",
      },
      {
        label: "¿Cuántas fotos se deben tomar durante una reclamación por incendio?",
        href: "/faq#faq-fire-claim-photo-volume",
      },
    ],
  },
  {
    id: "contents-inventory-documentation-insurance",
    category: "fire_damage_claims",
    question: "¿Cómo se deben documentar los contenidos después de un incendio?",
    answer:
      "Documente inventarios habitación por habitación con descripción, cantidad, condición previa a la pérdida y tipo de daño antes del pack-out. Fotografíe artículos de alto valor y cuestionables in situ, capture números de serie y modelo en electrodomésticos y electrónicos, y mantenga registros de cadena de custodia para almacenamiento fuera del sitio. Las etiquetas de habitación deben coincidir en fotos, inventario, croquis y estimación.",
    relatedLinks: [
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Procedimiento de documentación de contenidos",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
      {
        label: "Guía de documentación de pack-out",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
    ],
  },
  {
    id: "contents-inventory-insurance-required",
    category: "fire_damage_claims",
    question: "¿Qué inventario se requiere para reclamaciones de seguro?",
    answer:
      "Las aseguradoras esperan inventarios ubicados por habitación con descripciones de artículos, cantidades, notas de condición, disposición de recuperabilidad y fotos para artículos de alto valor. Los números de serie, documentación de propiedad y notas de evaluación de daños respaldan líneas de reemplazo. Los cargos de pack-out y almacenamiento requieren referencias de lote de inventario y registros de cadena de custodia.",
    relatedLinks: [
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Guía de documentación de reclamaciones por incendio (blog)",
        href: "/resources/blog/fire-damage-claim-documentation-guide",
      },
      {
        label: "Guía de documentación de pack-out",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
    ],
  },
  {
    id: "contents-smoke-damage-documentation",
    category: "fire_damage_claims",
    question: "¿Cómo documentan los contratistas la propiedad personal dañada por humo?",
    answer:
      "Fotografíe recubrimiento de hollín, penetración de olores y contaminación en textiles, muebles y electrónicos antes de manipularlos. Anote daños por humo versus calor por separado, documente pruebas de limpieza fallidas cuando se reclama reemplazo, y separe carpetas de evidencia de contenidos de la documentación estructural de humo. Las evaluaciones especializadas respaldan líneas de electrónicos, arte y textiles.",
    relatedLinks: [
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
    ],
  },
  {
    id: "contents-clean-vs-replace",
    category: "fire_damage_claims",
    question: "¿Cuándo deben reemplazarse los contenidos en lugar de limpiarse?",
    answer:
      "Reemplace cuando el daño por calor, resultados fallidos de limpieza de prueba, orientación del fabricante que prohíbe la restauración, o exposición combinada a humo y agua hace que la limpieza sea irrazonable. Documente fotos de carbonización, fusión o deformación, informes de evaluación especializada y justificación de eliminación antes de líneas de reemplazo. Las aseguradoras aplican macros de solo limpieza cuando la disposición carece de evidencia de respaldo.",
    relatedLinks: [
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Procedimiento de documentación de contenidos",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
    ],
  },
  {
    id: "contents-supplement-documentation",
    category: "fire_damage_claims",
    question: "¿Qué documentación respalda los suplementos de contenidos?",
    answer:
      "Los suplementos de contenidos necesitan inventarios ubicados por habitación con fotos in situ, registros de cadena de custodia, informes de limpieza especializada, registros de duración de almacenamiento y una carta de presentación que mapee filas de inventario a líneas no pagadas. Artículos adicionales descubiertos, almacenamiento extendido, pruebas de electrónicos y reemplazo de alto valor requieren documentación contemporánea — no adiciones globales al final del trabajo.",
    relatedLinks: [
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Recuperación de negación de suplementos por daños de fuego",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
      {
        label: "Guía de documentación de pack-out",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
    ],
  },
  {
    id: "pack-out-documentation-insurance",
    category: "fire_damage_claims",
    question: "¿Cómo se debe documentar un pack-out para el seguro?",
    answer:
      "Documente fotos de habitaciones y verificación de inventario antes del primer movimiento de artículos. Mantenga registros continuos de cadena de custodia desde el sitio hasta transporte, almacenamiento y procesamiento. Asigne números de caja y contenedor vinculados a lotes de inventario, complete manifiestos de carga y registros de conductor para cada movimiento de vehículo, y cruce cada línea de pack-out con documentación de custodia antes de enviar la estimación.",
    relatedLinks: [
      {
        label: "Guía de documentación de pack-out",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Procedimiento de documentación de contenidos",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
    ],
  },
  {
    id: "pack-out-chain-of-custody-documentation",
    category: "fire_damage_claims",
    question: "¿Qué documentación de cadena de custodia se requiere?",
    answer:
      "Las aseguradoras esperan identificadores únicos de artículos, sistemas de códigos de barras o etiquetas cruzados con inventario, numeración de cajas y contenedores en manifiestos de carga, registros de vehículo y conductor para cada transferencia, y firmas de cliente o instalación en puntos de entrega. La cadena de custodia debe ser continua desde el primer movimiento hasta ingreso a almacenamiento, procesamiento y entrega de regreso — sin vacíos sin documentar.",
    relatedLinks: [
      {
        label: "Guía de documentación de pack-out",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      {
        label: "Procedimiento de documentación de contenidos",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
    ],
  },
  {
    id: "pack-out-storage-tracking",
    category: "fire_damage_claims",
    question: "¿Cómo se deben rastrear los contenidos durante el almacenamiento?",
    answer:
      "Registre instalación de almacenamiento, asignación de bóveda o estante, fecha de ingreso y referencia de lote de inventario al ingreso. Documente condiciones ambientales para artículos sensibles al clima, registros de inspección periódica cuando el almacenamiento se extiende más allá de la estimación inicial, y medidas de seguridad cuando las aseguradoras cuestionan la necesidad del almacenamiento. Vincule cada línea de almacenamiento a referencias de lote y registros de custodia.",
    relatedLinks: [
      {
        label: "Guía de documentación de pack-out",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
    ],
  },
  {
    id: "pack-out-charges-documentation",
    category: "fire_damage_claims",
    question: "¿Qué documentación respalda los cargos de pack-out?",
    answer:
      "Los cargos de pack-out requieren inventarios ubicados por habitación con referencias de lote, manifiestos de carga que vinculen cajas a filas de inventario, registros de conductor y transporte, documentación de ingreso a almacenamiento, y referencias cruzadas de estimación que mapeen cada línea de manipulación, transporte y almacenamiento a registros de custodia. La facturación sin sustancia de inventario y prueba de manifiesto falla en la revisión de escritorio de contenidos.",
    relatedLinks: [
      {
        label: "Guía de documentación de pack-out",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
    ],
  },
  {
    id: "pack-out-return-documentation",
    category: "fire_damage_claims",
    question: "¿Cómo se deben documentar los contenidos devueltos?",
    answer:
      "Documente fecha de entrega de regreso, cuadrilla, manifiesto de vehículo y habitaciones de colocación con referencia cruzada de lote de inventario. Fotografíe la colocación de artículos de alto valor, obtenga reconocimiento del cliente de la entrega completada, y registre cualquier cambio de condición notado en la entrega. Las líneas de entrega de regreso y reempaque requieren registros de entrega contemporáneos — no reconstrucción al final del trabajo.",
    relatedLinks: [
      {
        label: "Guía de documentación de pack-out",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      {
        label: "Procedimiento de documentación de contenidos",
        href: "/resources/guides/fire-damage/contents-documentation-guide",
      },
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
    ],
  },
  {
    id: "fire-claims-underpaid-why",
    category: "fire_damage_claims",
    question: "¿Por qué las reclamaciones por daños de fuego reciben pagos insuficientes?",
    answer:
      "Las reclamaciones por daños de fuego reciben pagos insuficientes cuando la documentación no puede respaldar el alcance facturado: evidencia estructural incompleta, prueba débil de migración de humo, fotos de contenidos y números de serie faltantes, brechas en la cadena de custodia del pack-out, y paquetes de suplemento ensamblados después de que la producción cierra el acceso. Los revisores de escritorio reducen líneas que no pueden reenviar internamente — el pago insuficiente proporcional sigue cuando fotos, inventarios y registros carecen de etiquetas de habitación y marcas de tiempo contemporáneas.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones por daños de fuego reciben pagos insuficientes",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "¿Qué documentación requieren las aseguradoras después de un incendio?",
        href: "/faq#faq-fire-claim-documentation-required",
      },
    ],
  },
  {
    id: "fire-claim-documentation-required",
    category: "fire_damage_claims",
    question: "¿Qué documentación requieren las aseguradoras después de un incendio?",
    answer:
      "Las aseguradoras esperan autorización de seguridad del sitio, fotos exteriores y de la habitación de origen, evidencia estructural y de descubrimiento en demolición, migración de humo por habitación, estado del HVAC, daños por agua de supresión, inventario de contenidos con fotos, cadena de custodia del pack-out, y narrativas de estimación con etiquetas de habitación consistentes en fotos, croquis y partidas. La evidencia indexada respalda suplementos cuando el alcance excede la estimación de la aseguradora.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones por daños de fuego reciben pagos insuficientes",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "¿Cómo se debe documentar el daño por fuego para el seguro?",
        href: "/faq#faq-fire-damage-documentation-insurance",
      },
    ],
  },
  {
    id: "fire-supplement-contractor-documentation",
    category: "fire_damage_claims",
    question: "¿Cómo respaldan los contratistas los suplementos por daños de fuego?",
    answer:
      "Los contratistas respaldan suplementos de fuego asignando un responsable de suplemento, manteniendo un registro de brechas desde la admisión, comparando estimaciones de la aseguradora en 48 horas, y enviando paquetes por fases con cartas de presentación que mapean evidencia contemporánea a partidas. Los equipos de campo capturan prueba de demolición, migración, HVAC y pack-out durante la producción — no después de que la reconstrucción cierra el acceso — para que los reenvíos y reinspecciones tengan exhibiciones indexadas listas.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones por daños de fuego reciben pagos insuficientes",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "¿Qué documentación respalda los suplementos por daños de fuego?",
        href: "/faq#faq-fire-supplement-documentation-support",
      },
    ],
  },
  {
    id: "fire-claim-documentation-delays",
    category: "fire_damage_claims",
    question: "¿Qué errores de documentación retrasan las reclamaciones por incendio?",
    answer:
      "Los desencadenantes comunes de retraso incluyen fotos sin etiquetar, nombres de habitación inconsistentes entre croquis e inventario, cadena de custodia de pack-out faltante, alcance de HVAC sin fotos de rejillas, listas de contenidos sin imágenes in situ, y envíos de suplemento sin índices de portada. Las aseguradoras solicitan información adicional de forma iterativa cuando los archivos no están listos para revisión — cada ronda añade días antes del pago o aprobación parcial.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones por daños de fuego reciben pagos insuficientes",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "¿Cómo pueden los contratistas mejorar la documentación de reclamaciones por incendio?",
        href: "/faq#faq-fire-claim-documentation-improve",
      },
    ],
  },
  {
    id: "fire-claim-documentation-improve",
    category: "fire_damage_claims",
    question: "¿Cómo pueden los contratistas mejorar la documentación de reclamaciones por incendio?",
    answer:
      "Mejore la documentación de reclamaciones por incendio indexando archivos por habitación y fase desde la admisión, usando etiquetas consistentes en cada foto y registro, capturando rutas de migración y descubrimiento en demolición de forma contemporánea, manteniendo la cadena de custodia del pack-out, y enviando suplementos con índices de portada de adjunto a partida. Compare estimaciones de la aseguradora temprano, capacite a líderes de campo en estándares de captura de humo y contenidos, y retenga la reconstrucción hasta cerrar brechas de documentación de alto riesgo.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones por daños de fuego reciben pagos insuficientes",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Guía de estándares de documentación",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
    ],
  },
  {
    id: "fire-smoke-soot",
    category: "fire_damage_claims",
    question: "¿Cómo se documenta el daño por humo y hollín para las aseguradoras?",
    answer:
      "Los expedientes efectivos combinan evidencia visual, detalle del alcance por habitación, notas del método de limpieza y separación de oficios. Las aseguradoras examinan si el daño por humo es localizado o sistémico; la documentación debe coincidir con lo que su cuadrilla observó en el sitio.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por humo y hollín (blog)",
        href: "/resources/blog/smoke-and-soot-damage-documentation-guide",
      },
      { label: "Soluciones para daños por fuego", href: "/solutions/fire-damage" },
    ],
  },
  {
    id: "resources-fire-damage-documentation",
    category: "fire_damage_claims",
    question: "¿Tienen recursos sobre documentación de reclamaciones por daños de fuego?",
    answer:
      "Sí. Nuestra biblioteca de recursos para contratistas cubre documentación de incendios, estándares de inventario de contenidos, suplementos, evidencia de humo y hollín, contaminación de HVAC, mitigación de olores y recuperación ante denegación de suplementos, organizados para equipos de restauración y suplementos.",
    relatedLinks: [
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
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
    relatedLinks: [
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
      { label: "Restauración de contenidos", href: "/solutions/contents" },
    ],
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
  {
    id: "fire-commercial-claims-documentation",
    category: "fire_damage_claims",
    question: "¿Cómo se documentan las reclamaciones comerciales por incendio?",
    answer:
      "Las reclamaciones comerciales por incendio requieren indexación a nivel de edificio o suite escalada al tamaño de la propiedad: plan de documentación con índice de carpetas, inventario de edificios, registros de coordinación con inquilinos, carpetas separadas de estructura y contenidos, informes de ingeniería referenciados a las partidas del estimado y envíos de suplementos por fases. Trate pérdidas en oficinas, comercios, industria y multiinquilino con evidencia indexada por suite o zona — no patrones de expediente residencial de un solo archivo.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones comerciales por incendio",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "fire-commercial-tenant-owner-responsibility",
    category: "fire_damage_claims",
    question: "¿Cómo se separan las responsabilidades del propietario y del inquilino en reclamaciones comerciales por incendio?",
    answer:
      "Revise el tipo de arrendamiento antes de atribuir el alcance. Los propietarios del edificio normalmente cubren la estructura, las áreas comunes y los sistemas base del edificio; los inquilinos cubren el acabado interior, los accesorios comerciales y la propiedad personal del negocio bajo arrendamientos triple neto o comerciales estándar. Etiquete cada entrada de inventario, carpeta de fotos y partida del estimado como estructura, mejora del inquilino o contenidos para evitar disputas de cobertura en ambas pólizas.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones comerciales por incendio",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
      {
        label: "Guía de documentación de inventario de contenidos",
        href: "/resources/guides/fire-damage/contents-inventory-documentation-guide",
      },
    ],
  },
  {
    id: "fire-commercial-large-loss-scrutiny",
    category: "fire_damage_claims",
    question: "¿Por qué las reclamaciones comerciales por incendio reciben mayor escrutinio?",
    answer:
      "Los valores asegurados más altos activan ajustadores especialistas, revisión de ingeniería y auditoría de terceros. Las aseguradoras reconcilian el alcance estructural, de humo, HVAC, contenidos y condiciones generales contra fotos indexadas por edificio e informes de ingeniería — no macros de estimado residencial. La coordinación con inquilinos, la superposición de interrupción del negocio y los suplementos por fases añaden capas de revisión que los expedientes de una sola vivienda rara vez enfrentan. La evidencia débil a nivel de edificio invita reducciones proporcionales en todo el expediente comercial.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones comerciales por incendio",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
      {
        label: "Por qué las reclamaciones por daños de fuego quedan infrapagadas",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
    ],
  },
  {
    id: "fire-commercial-business-interruption-role",
    category: "fire_damage_claims",
    question: "¿Qué papel de documentación desempeñan los contratistas en la interrupción del negocio por incendio?",
    answer:
      "Los contratistas de mitigación documentan hechos operativos contemporáneos: fechas de inicio y finalización de la mitigación, calendarios de liberación de zonas, restricciones de acceso, coordinación de desplazamiento de inquilinos y cronogramas de producción por fases. Esto respalda las narrativas de BI del asegurado pero no reemplaza el análisis de cobertura ni la preparación de reclamaciones financieras. Comparta exportaciones de cronogramas indexados con el preparador de BI del asegurado sin elaborar proyecciones de ingresos ni valoraciones de pérdidas y ganancias.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones comerciales por incendio",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "fire-commercial-supplement-opportunities",
    category: "fire_damage_claims",
    question: "¿Cuáles son las oportunidades comunes de suplemento en reclamaciones comerciales por incendio?",
    answer:
      "Brechas frecuentes: daño estructural oculto descubierto durante la demolición, migración de humo más allá de las zonas de origen, contaminación HVAC tras la inspección del sistema, actualizaciones de código en reconstrucción comercial, instalaciones temporales durante mitigación extendida, pack-out y almacenamiento de contenidos comerciales, mitigación ambiental, condiciones generales con alcance insuficiente en expedientes de gran pérdida y revisiones de ingeniería que amplían el alcance MEP. Envíe suplementos por fases con fotos contemporáneas e informes indexados antes de cubrir nuevos ensamblajes.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones comerciales por incendio",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "FAQ de respaldo de documentación para suplementos por incendio",
        href: "/faq#faq-fire-supplement-documentation-support",
      },
    ],
  },

  // Fire Code Upgrades (5)
  {
    id: "fire-code-upgrade-insurance-coverage",
    category: "fire_damage_claims",
    question: "¿El seguro paga las actualizaciones de código por incendio?",
    answer:
      "Las actualizaciones de código por incendio pueden estar cubiertas cuando aplican endosos de ordenanza y ley y la documentación demuestra que la mejora es exigida por la autoridad competente — no preferencia del contratista. La cobertura depende de la póliza individual, los límites del endoso y si la aseguradora acepta registros de permisos, informes de inspección y citas de código vinculadas a partidas específicas. Los contratistas documentan requisitos del AHJ y separan el alcance de código del reparo similar; las aseguradoras aplican el lenguaje de la póliza. Los resultados varían según la aseguradora y la calidad de la evidencia.",
    relatedLinks: [
      {
        label: "Guía de documentación de mejoras por código en incendios",
        href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
    ],
  },
  {
    id: "fire-ordinance-law-coverage",
    category: "fire_damage_claims",
    question: "¿Qué es la cobertura de Ordenanza y Ley?",
    answer:
      "La cobertura de ordenanza y ley es un endoso de póliza que puede pagar costos asociados con el cumplimiento del código de construcción durante reparación o reconstrucción — comúnmente estructurada como Cobertura A (demolición de porción no dañada), Cobertura B (costo incrementado de construcción) y Cobertura C (responsabilidad contingente) cuando aparecen listadas. La disponibilidad, límites y sublímites varían según la aseguradora y la póliza. Los contratistas documentan activadores de código y evidencia del AHJ; no interpretan el lenguaje de la póliza ni garantizan resultados de cobertura.",
    relatedLinks: [
      {
        label: "Guía de documentación de mejoras por código en incendios",
        href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
      },
      {
        label: "¿El seguro paga las actualizaciones de código por incendio?",
        href: "/faq#faq-fire-code-upgrade-insurance-coverage",
      },
    ],
  },
  {
    id: "fire-code-upgrade-contractor-documentation",
    category: "fire_damage_claims",
    question: "¿Cómo documentan los contratistas las actualizaciones de código requeridas?",
    answer:
      "Identifique la jurisdicción y la edición de código adoptada temprano; obtenga solicitud de permiso e informes de inspección; asigne una cita de código específica o requisito escrito del AHJ por partida de mejora; capture fotos de demolición que muestren condición previa no conforme y fotos de instalación antes del cierre; separe el alcance de código del reparo similar en Xactimate; y redacte narrativas de suplemento vinculando activador, cita, referencia fotográfica y cantidad. La documentación gana suplementos de código — las listas genéricas de código provocan denegaciones.",
    relatedLinks: [
      {
        label: "Guía de documentación de mejoras por código en incendios",
        href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
      },
      {
        label: "Estándares de documentación de reclamaciones",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "fire-code-upgrade-who-determines-required",
    category: "fire_damage_claims",
    question: "¿Quién determina si una actualización de código es requerida?",
    answer:
      "La autoridad competente (AHJ) — típicamente el departamento de construcción local, revisor de planos o inspector — determina si el código vigente aplica al alcance de reparación o reconstrucción. Las aseguradoras evalúan si los requisitos documentados están vinculados a la pérdida y respaldados por evidencia de permisos e inspección. Los contratistas investigan ediciones de código adoptadas, presentan permisos y registran comunicación con inspectores; no declaran unilateralmente requisitos de código sin respaldo del AHJ o cita escrita de código.",
    relatedLinks: [
      {
        label: "Guía de documentación de mejoras por código en incendios",
        href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
      },
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
    ],
  },
  {
    id: "fire-code-upgrade-supplement-denials",
    category: "fire_damage_claims",
    question: "¿Por qué se deniegan los suplementos de actualización de código por incendio?",
    answer:
      "Razones comunes de denegación: listas genéricas de código sin aplicación específica al trabajo, sin documentación de permisos o inspección, fotos de demolición faltantes de condición previa no conforme, partidas de código enterradas en macros de reparo indiferenciadas, mejoras de preferencia del propietario argumentadas como requisitos de código, sin cobertura de ordenanza y ley en la póliza, y suplementos tardíos armados después de que la producción cierra el acceso. Reenvíe con registros de permisos indexados, avisos de corrección del AHJ y una cita por partida — los resultados varían según la aseguradora y las particularidades del expediente.",
    relatedLinks: [
      {
        label: "Guía de documentación de mejoras por código en incendios",
        href: "/resources/guides/fire-damage/fire-code-upgrade-documentation-guide",
      },
      {
        label: "Por qué se rechazan los suplementos por daños de fuego",
        href: "/resources/blog/why-fire-damage-supplements-get-denied",
      },
      {
        label: "Recuperación de denegación de suplemento por daños de fuego",
        href: "/resources/blog/fire-damage-supplement-denial-recovery",
      },
    ],
  },

  // Fire Damage Supplement Playbook FAQs (5)
  {
    id: "fire-supplement-included-items",
    category: "fire_damage_claims",
    question: "¿Qué debe incluirse en un suplemento por daños de fuego?",
    answer:
      "Un suplemento completo por daños de fuego incluye carta de presentación con tabla resumen, estimado Xactimate revisado, exhibiciones fotográficas indexadas por habitación, narrativa de ruta de migración, páginas de inventario de contenidos, evidencia de inspección HVAC, fotos de descubrimiento en demolición, extractos de informes de especialistas cuando se usen, y registro de correspondencia. Cada partida solicitada debe corresponder a al menos una exhibición nombrada.",
    relatedLinks: [
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Flujo de envío de suplementos",
        href: "/resources/guides/general-claims/supplement-submission-guide",
      },
      { label: "Soluciones para daños de fuego", href: "/solutions/fire-damage" },
    ],
  },
  {
    id: "fire-supplement-when-to-submit",
    category: "fire_damage_claims",
    question: "¿Cuándo deben los contratistas enviar un suplemento por incendio?",
    answer:
      "Envíe cuando el alcance documentado supere el estimado de la aseguradora y exista evidencia contemporánea — dentro de las 48 horas en brechas visibles del estimado, después del descubrimiento en demolición, cuando regrese la inspección HVAC, o cuando el inventario de pack-out esté completo. El envío por fases supera esperar la factura final: los suplementos de migración, HVAC y contenidos se aprueban mejor cuando la evidencia se captura antes de que la reconstrucción oculte las condiciones.",
    relatedLinks: [
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Primeras 48 horas después del estimado de la aseguradora",
        href: "/resources/blog/first-48-hours-after-carrier-estimate",
      },
    ],
  },
  {
    id: "fire-supplement-documentation-evidence",
    category: "fire_damage_claims",
    question: "¿Qué documentación respalda un suplemento por daños de fuego?",
    answer:
      "La documentación de suplemento por incendio incluye fotos indexadas por habitación, narrativa de ruta de migración, registros de descubrimiento en demolición durante el desmontaje, fotos de registros y componentes HVAC, inventarios de contenidos ubicados por habitación con cadena de custodia de pack-out, extractos de informes de ingeniería o higiene industrial cuando se usen, y una carta de presentación que mapee cada adjunto a números de partida del estimado. La evidencia contemporánea por fases supera la narrativa de fin de trabajo armada después de que la producción cierra el acceso.",
    relatedLinks: [
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Guía de documentación de daños por fuego",
        href: "/resources/guides/fire-damage/fire-damage-documentation-guide",
      },
      {
        label: "¿Qué documentación respalda los suplementos por daños de fuego?",
        href: "/faq#faq-fire-supplement-documentation-support",
      },
    ],
  },
  {
    id: "fire-supplement-multiple-submissions",
    category: "fire_damage_claims",
    question: "¿Se pueden enviar múltiples suplementos durante una reclamación por incendio?",
    answer:
      "Sí. Las reclamaciones por incendio comúnmente requieren suplementos por fases — migración y alcance de emergencia primero, luego HVAC y contenidos después de la inspección, luego descubrimiento en demolición y mejoras de código durante la reconstrucción. Etiquete cada versión de suplemento en CRM con fase y fecha para que los revisores de la aseguradora sigan el descubrimiento sin tratar envíos posteriores como facturación duplicada.",
    relatedLinks: [
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Flujo de envío de suplementos",
        href: "/resources/guides/general-claims/supplement-submission-guide",
      },
    ],
  },
  {
    id: "fire-supplement-commonly-missed-items",
    category: "fire_damage_claims",
    question: "¿Cuáles son las partidas de suplemento por incendio más comúnmente omitidas?",
    answer:
      "Las partidas de suplemento por incendio más comúnmente omitidas incluyen limpieza de humo y hollín en habitaciones de migración, limpieza de ductos HVAC y reemplazo de componentes, manipulación de contenidos y pack-out, procedimientos especializados de limpieza de hollín, equipos de mitigación de olores, demolición selectiva con fotos pre-demolición, extensiones de protección temporal, ensamblajes de reconstrucción impulsados por código, y superposición de mitigación de agua de supresión documentada por separado del alcance de residuos de incendio.",
    relatedLinks: [
      {
        label: "Manual de suplementos por daños de fuego",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Por qué las reclamaciones por daños de fuego se pagan menos",
        href: "/resources/blog/why-fire-damage-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por humo y hollín",
        href: "/resources/guides/fire-damage/smoke-soot-damage-documentation-guide",
      },
    ],
  },

  // Mold Claims (5)
  {
    id: "mold-remediation-docs",
    category: "mold_claims",
    question: "¿Qué documentación respalda las reclamaciones de remediación de moho?",
    answer:
      "Las aseguradoras normalmente revisan la documentación de la fuente de humedad, el protocolo de remediación, el detalle de contención, el scrubbing de aire y las pruebas de clearance cuando se requieren. Las fotos, el alcance habitación por habitación y la alineación con prácticas orientadas a IICRC fortalecen el expediente.",
    relatedLinks: [
      { label: "Soluciones para moho", href: "/solutions/mold" },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
    ],
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
    relatedLinks: [
      { label: "Soluciones para daños por agua", href: "/solutions/water-damage" },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por agua categoría 3",
        href: "/resources/guides/water-damage/category-3-water-damage-documentation-guide",
      },
    ],
  },

  // Mold Documentation Cornerstone (5)
  {
    id: "mold-damage-documentation-insurance",
    category: "mold_claims",
    question: "¿Cómo deben los contratistas documentar los daños por moho para reclamaciones de seguros?",
    answer:
      "Documente primero la fuente de humedad, luego el crecimiento visible y oculto con fotos indexadas por habitación, área afectada aproximada, lecturas de humedad y narrativas de inspección. Vincule el alcance de demolición, contención, limpieza y remoción con carpetas de fotos y lecturas antes del envío a la aseguradora. Consulte la Guía de documentación de daños por moho para el estándar completo.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      { label: "Soluciones para moho", href: "/solutions/mold" },
    ],
  },
  {
    id: "mold-claim-photos-required",
    category: "mold_claims",
    question: "¿Qué fotos deben tomarse para reclamaciones de moho?",
    answer:
      "Capture fotos de la fuente de humedad, contexto amplio de la habitación y primeros planos del crecimiento en cada superficie afectada. Documente cavidades ocultas, capas de piso, respaldos de gabinetes, espacios de arrastre, áticos y áreas de HVAC durante el acceso. Etiquete cada imagen por habitación y fecha antes de que la limpieza o contención alteren la escena.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Estándares de documentación fotográfica",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-moisture-readings-support",
    category: "mold_claims",
    question: "¿Las lecturas de humedad ayudan a respaldar reclamaciones de moho?",
    answer:
      "Sí. Las lecturas con medidores de contacto y sin contacto en materiales afectados y de referencia respaldan argumentos de humedad activa, alcance de secado y disputas sobre si el crecimiento es histórico o actual. Combine las lecturas con imágenes térmicas cuando los acabados oculten sustratos húmedos.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Procedimiento de mapeo de humedad",
        href: "/resources/guides/water-damage/moisture-mapping-guide",
      },
    ],
  },
  {
    id: "mold-insurance-documentation-required",
    category: "mold_claims",
    question: "¿Qué documentación solicitan las compañías de seguros para daños por moho?",
    answer:
      "Las aseguradoras normalmente solicitan evidencia de la fuente de humedad, fotos de crecimiento habitación por habitación, lecturas de humedad, documentación de cavidades ocultas, fotos de contención y remoción, registros de pruebas cuando se usan, narrativas de inspección y un estimado indexado a los anexos. La causalidad y el alcance se revisan por separado en expedientes de moho.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Estándares de documentación de reclamaciones",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-hidden-damage-documentation",
    category: "mold_claims",
    question: "¿Cómo debe documentarse el moho oculto?",
    answer:
      "Fotografíe cavidades de pared, vanos de techo, subpiso, respaldos de gabinetes, espacios de arrastre, áticos e interiores de HVAC durante el acceso con imágenes fechadas. Mantenga un registro de descubrimientos antes de que las reparaciones cierren las aberturas: los suplementos por moho oculto fallan cuando la evidencia de cavidad se captura después de la remediación.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
    ],
  },

  // Mold Remediation Documentation Cornerstone (5)
  {
    id: "mold-remediation-work-documentation",
    category: "mold_claims",
    question: "¿Cómo deben los contratistas documentar el trabajo de remediación de moho?",
    answer:
      "Documente fotos de referencia previas a la remediación, instalación de contención, remoción con secuencias antes-durante-después, verificación de limpieza, registros de tiempo de equipos, fotos de progreso diario y lecturas de humedad durante la producción. Vincule cada partida principal con anexos fechados antes del envío a la aseguradora. Consulte la Guía de documentación de remediación de moho para el estándar completo.",
    relatedLinks: [
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      { label: "Soluciones para moho", href: "/solutions/mold" },
    ],
  },
  {
    id: "mold-remediation-photos-required",
    category: "mold_claims",
    question: "¿Qué fotos deben tomarse durante la remediación de moho?",
    answer:
      "Capture la referencia previa a la remediación, barreras de contención e instalación de aire negativo, secuencias de remoción antes-durante-después, verificación de limpieza en el armazón, ubicación de equipos, progreso diario y eliminación de residuos. Etiquete cada imagen por habitación, fase y fecha. Las fotos de producción prueban el alcance facturado; las fotos de ingreso por sí solas no respaldan partidas de remediación.",
    relatedLinks: [
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Estándares de documentación fotográfica",
        href: "/resources/guides/general-claims/photo-documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-remediation-moisture-readings-support",
    category: "mold_claims",
    question: "¿Deben incluirse lecturas de humedad con la documentación de remediación de moho?",
    answer:
      "Sí. Registre lecturas de humedad en sustratos expuestos durante la remoción y antes del cierre o reconstrucción. Las lecturas respaldan la profundidad de limpieza, argumentos de estándar seco y disputas sobre si los materiales estaban listos para reconstruir. Combine con registros de monitoreo diario cuando el secado estructural se superpone con el alcance de remediación.",
    relatedLinks: [
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Procedimiento de monitoreo diario",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
    ],
  },
  {
    id: "mold-remediation-insurance-documentation",
    category: "mold_claims",
    question: "¿Qué documentación respalda las reclamaciones de seguros por remediación de moho?",
    answer:
      "Las aseguradoras revisan fotos de contención, evidencia de cantidades de remoción, verificación de limpieza, registros de tiempo de equipos, registros de progreso diario, lecturas de humedad, registros de eliminación, inventario de contenidos cuando aplica, narrativas de remediación y estimados indexados a anexos. La evidencia de producción debe ser contemporánea: la remediación no documentada enfrenta reducción partida por partida en la revisión.",
    relatedLinks: [
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Estándares de documentación de reclamaciones",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-remediation-containment-documentation",
    category: "mold_claims",
    question: "¿Cómo deben los contratistas documentar la contención durante la remediación de moho?",
    answer:
      "Fotografíe los límites del área de trabajo, barreras críticas, ubicación de máquinas de aire negativo, posiciones de depuradores de aire, diseño de cámara de descontaminación y protección de áreas no afectadas al instalar. Tome fotos diarias del estado de las barreras en proyectos de varios días. Documente lecturas de presión diferencial cuando se midan. Las fotos de contención respaldan partidas de mano de obra y equipos en la revisión de la aseguradora.",
    relatedLinks: [
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      { label: "Soluciones para moho", href: "/solutions/mold" },
    ],
  },

  // Mold PRV Documentation Cornerstone (5)
  {
    id: "mold-prv-definition",
    category: "mold_claims",
    question: "¿Qué es la verificación post-remediación (PRV)?",
    answer:
      "La verificación post-remediación (PRV) es la prueba documentada de que el trabajo de remediación de moho está completo y la condición del sitio respalda la reconstrucción, la reocupación o el pago final en una reclamación de seguros. La PRV incluye registros de finalización del alcance, lecturas finales de humedad, fotos de cierre, documentación de autorización cuando se realizaron pruebas, cierre de registros de equipos y paquetes de cierre organizados — no el trabajo de remediación en sí, sino la evidencia que cierra el capítulo de remediación. Los requisitos varían según la aseguradora, la póliza y el tipo de proyecto.",
    relatedLinks: [
      {
        label: "Guía de documentación de verificación post-remediación (PRV)",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },
  {
    id: "mold-prv-documentation-insurance",
    category: "mold_claims",
    question: "¿Cómo deben los contratistas documentar la PRV para reclamaciones de seguros?",
    answer:
      "Documente la finalización del alcance por habitación, lecturas finales de humedad comparadas con el estándar de secado, conjuntos de fotos de cierre que muestren sustratos limpios y equipos desmovilizados, registros de inspección visual o de autorización cuando corresponda, registros de tiempo de equipos hasta el último día activo, reconciliación de contenidos cuando exista alcance de pack-out, y una narrativa de finalización escrita con índice de anexos que vincule evidencia con partidas. Organice evidencia de evaluación, producción y cierre juntos para la revisión de la aseguradora.",
    relatedLinks: [
      {
        label: "Guía de documentación de verificación post-remediación (PRV)",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Estándares de documentación de reclamaciones",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-prv-moisture-readings-required",
    category: "mold_claims",
    question: "¿Se requieren lecturas de humedad durante la PRV?",
    answer:
      "Las lecturas finales de humedad son uno de los anexos de PRV más importantes en expedientes de moho — las aseguradoras a menudo retienen la autorización de reconstrucción o el pago final cuando faltan lecturas terminales contra el estándar de secado. Registre lecturas con pin o sin pin en todos los puntos activos del mapa en armazón expuesto, subpiso y cavidades antes del cierre. Alinee las lecturas terminales con la fecha de retiro de equipos y la última entrada del registro de secado. Los requisitos varían según la aseguradora y si el secado estructural se superpuso con el alcance de remediación.",
    relatedLinks: [
      {
        label: "Guía de documentación de verificación post-remediación (PRV)",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Procedimiento de monitoreo diario",
        href: "/resources/guides/water-damage/daily-monitoring-guide",
      },
      {
        label: "Procedimiento de recopilación de registros de secado",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
    ],
  },
  {
    id: "mold-prv-closeout-package",
    category: "mold_claims",
    question: "¿Qué documentación pertenece a un paquete de cierre de un proyecto de moho?",
    answer:
      "Un paquete de cierre de proyecto de moho típicamente incluye: estimado final y órdenes de cambio, narrativa de finalización del alcance, lecturas terminales de humedad y mapas de humedad, conjuntos de fotos finales, registros de tiempo de equipos hasta el último día activo, registros de inspección visual o de autorización, informes de laboratorio cuando se realizaron pruebas, reconciliación de contenidos cuando exista alcance de pack-out, e índice de anexos que vincule evidencia con partidas. Incluya evidencia de evaluación de la Guía de documentación de daños por moho y evidencia de producción de la Guía de documentación de remediación de moho junto con registros de cierre.",
    relatedLinks: [
      {
        label: "Guía de documentación de verificación post-remediación (PRV)",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },
  {
    id: "mold-prv-clearance-documentation-required",
    category: "mold_claims",
    question: "¿Las compañías de seguros requieren documentación de autorización después de la remediación de moho?",
    answer:
      "Los requisitos de documentación de autorización varían según la aseguradora, la póliza, el tipo de propiedad y la jurisdicción — no existe una regla universal de que cada expediente de moho requiera autorización de laboratorio. Cuando se realiza o se requiere prueba de autorización, inspección visual por un tercero o verificación independiente, documente fotos de ubicación de muestras, cadena de custodia, informes de laboratorio y narrativa que conecte resultados con los límites de remediación. Cuando no se realizan pruebas, documente la finalización de la inspección visual con fotos fechadas que muestren sustratos limpios y contención retirada.",
    relatedLinks: [
      {
        label: "Guía de documentación de verificación post-remediación (PRV)",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },

  // Mold Protocol Documentation Cornerstone (5)
  {
    id: "mold-protocol-definition",
    category: "mold_claims",
    question: "¿Qué es un protocolo de remediación de moho?",
    answer:
      "Un protocolo de remediación de moho es un plan de trabajo escrito — a menudo preparado por un higienista industrial o consultor ambiental — que define las áreas afectadas, los objetivos del proyecto, las expectativas de contención, los métodos de remoción y limpieza, el manejo de contenidos y los criterios de finalización o verificación. En reclamaciones de seguros, el protocolo se convierte en un exhibición controladora que las aseguradoras comparan con fotos, registros y estimados del contratista. Consulte la Guía de documentación de protocolos de moho para documentar el trabajo realizado bajo un protocolo.",
    relatedLinks: [
      {
        label: "Guía de documentación de protocolos de moho",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      { label: "Soluciones de moho", href: "/solutions/mold" },
    ],
  },
  {
    id: "mold-protocol-follow-exactly",
    category: "mold_claims",
    question: "¿Los contratistas deben seguir un protocolo de moho exactamente?",
    answer:
      "Los contratistas deben implementar el protocolo escrito y documentar el cumplimiento habitación por habitación. Cuando las condiciones de campo difieren — moho oculto, contaminación expandida, cambios de humedad o descubrimientos estructurales — documente desviaciones justificadas con fotos contemporáneas, un registro de cambios y actualizaciones del estimado en lugar de trabajar en silencio fuera del plan. La expansión no documentada es un desencadenante común de reducción por parte de la aseguradora incluso cuando el trabajo adicional era necesario.",
    relatedLinks: [
      {
        label: "Guía de documentación de protocolos de moho",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
    ],
  },
  {
    id: "mold-protocol-change-documentation",
    category: "mold_claims",
    question: "¿Cómo deben documentarse los cambios al protocolo?",
    answer:
      "Documente cada desviación justificada el mismo día en que aparece: fotos del descubrimiento con marca de tiempo, una entrada escrita en el registro de desviaciones o cambios, actualizaciones de humedad cuando corresponda, registros de notificación cuando se requieran, y una orden de cambio o página revisada del estimado que cite el exhibición del descubrimiento. Combine la documentación de cambios con el PDF original del protocolo para que los revisores de escritorio vean qué estaba escrito, qué cambió y por qué.",
    relatedLinks: [
      {
        label: "Guía de documentación de protocolos de moho",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Estándares de documentación de reclamaciones",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-protocol-supporting-documentation",
    category: "mold_claims",
    question: "¿Qué documentación debe acompañar un protocolo de moho?",
    answer:
      "Incluya el protocolo escrito con fecha de versión y autor, notas de interpretación del protocolo, registros de alineación de condiciones de campo, secuencias de fotos de contención y alcance, lecturas de humedad, registros diarios, registros de tiempo de equipo, informes de laboratorio cuando corresponda, narrativas del estimado referenciadas a secciones del protocolo y documentación de cambios por desviaciones. Vincule la evidencia de producción de la Guía de documentación de remediación de moho y los exhibiciones de cierre de la Guía de documentación de verificación post-remediación cuando el protocolo especifique criterios de finalización.",
    relatedLinks: [
      {
        label: "Guía de documentación de protocolos de moho",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Guía de documentación de verificación post-remediación (PRV)",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Estándares de documentación de reclamaciones",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-protocol-field-conditions-differ",
    category: "mold_claims",
    question: "¿Pueden las condiciones de campo diferir del protocolo de remediación?",
    answer:
      "Sí. Las condiciones de campo a menudo difieren de un protocolo escrito cuando aparece moho oculto, contaminación expandida, descubrimientos estructurales o cambios de humedad durante la producción. Documente coincidencias y diferencias en un registro de alineación con referencias fotográficas, luego emita documentación de cambios para el trabajo facturado fuera del plan original. Las diferencias son esperadas; las diferencias no documentadas son las que las aseguradoras reducen.",
    relatedLinks: [
      {
        label: "Guía de documentación de protocolos de moho",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "¿Cómo debe documentarse el moho oculto?",
        href: "/faq#faq-mold-hidden-damage-documentation",
      },
    ],
  },

  // Commercial Mold Claims Guide (5)
  {
    id: "mold-commercial-claims-vs-residential",
    category: "mold_claims",
    question: "¿En qué se diferencian las reclamaciones comerciales por moho de las residenciales?",
    answer:
      "Las reclamaciones comerciales por moho involucran huellas más grandes, indexación multiunidad, coordinación con inquilinos, remediación por fases en condiciones ocupadas, revisiones de protocolo por área y paquetes de autorización PRV que los patrones de expediente residencial de un solo archivo no pueden organizar. Los contratistas deben escalar la documentación a una jerarquía Edificio → Piso → Unidad → Habitación y mantener seguimiento de cambios en el estimado — no simplemente tomar más fotos del mismo flujo residencial.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones comerciales por moho",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de pérdidas comerciales por agua",
        href: "/resources/guides/water-damage/commercial-water-loss-documentation-guide",
      },
    ],
  },
  {
    id: "mold-commercial-documentation-organization",
    category: "mold_claims",
    question: "¿Cómo deben organizar los contratistas la documentación de reclamaciones comerciales por moho?",
    answer:
      "Publique un plan de documentación comercial en 24 horas usando nomenclatura Edificio → Piso → Ala → Unidad → Habitación → Área de trabajo en fotos, mapas de humedad, registros de equipos, páginas de protocolo, informes PRV y secciones de Xactimate. Verifique que artefactos aleatorios resuelvan al mismo ID de área antes de que cualquier paquete salga de la oficina. Separe carpetas de fuente de humedad, producción de remediación, protocolo/PRV, contenidos y estimado.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones comerciales por moho",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Estándares de documentación de reclamaciones",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
      {
        label: "¿Cómo deben documentarse las reclamaciones de moho multiunidad?",
        href: "/faq#faq-mold-commercial-multi-unit-documentation",
      },
    ],
  },
  {
    id: "mold-commercial-multi-unit-documentation",
    category: "mold_claims",
    question: "¿Cómo deben documentarse las reclamaciones de moho multiunidad?",
    answer:
      "Adopte los números de unidad de la administración de la propiedad en cada nombre de archivo de foto, fila de registro de humedad, entrada de inventario y sección del estimado. Mapee lecturas de humedad y crecimiento por piso y unidad, mantenga el alcance de áreas comunes separado del de unidades de inquilinos, y conserve registros de coordinación con inquilinos en edificios ocupados. Nunca mezcle fotos o lecturas de distintas unidades en una carpeta sin etiquetar — la documentación mezclada entre unidades es una de las principales causas de denegación en moho comercial.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones comerciales por moho",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Documentación de pérdidas de agua en apartamentos",
        href: "/faq#faq-water-apartment-loss-documentation",
      },
    ],
  },
  {
    id: "mold-commercial-insurance-documentation",
    category: "mold_claims",
    question: "¿Qué documentación respalda las reclamaciones de seguro comerciales por moho?",
    answer:
      "Paquetes de investigación de fuente de humedad, mapas de humedad y crecimiento piso por piso, registros de contención y producción diaria, revisiones de protocolo, PRV por área, registros de contenidos y cadena de custodia, estimados indexados por edificio con seguimiento de cambios, registros comerciales de equipos por zona y registros cronológicos de comunicación con la aseguradora. Juntos forman un paquete recuperable de reclamación comercial por moho para revisión de escritorio y reinspección.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones comerciales por moho",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Guía de documentación de protocolos de moho",
        href: "/resources/guides/mold/mold-protocol-documentation-guide",
      },
      {
        label: "Guía de documentación de verificación post-remediación",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
    ],
  },
  {
    id: "mold-commercial-phased-remediation",
    category: "mold_claims",
    question: "¿Cómo deben documentar los contratistas la remediación comercial de moho por fases?",
    answer:
      "Documente qué pisos, alas o unidades están en remediación activa frente a retenidas; fotografie la contención por área de trabajo; mantenga registros diarios de producción con IDs de área; indexe revisiones de protocolo cuando los descubrimientos expandan el alcance; y autorice PRV por área antes de la reocupación — no como un único evento al final del proyecto. El trabajo comercial por fases sin evidencia de progreso indexada por área falla en la revisión de escritorio de gran pérdida.",
    relatedLinks: [
      {
        label: "Guía de reclamaciones comerciales por moho",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Guía de documentación de verificación post-remediación",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
    ],
  },

  // Mold Blog Bridge (5)
  {
    id: "mold-claims-underpaid-why",
    category: "mold_claims",
    question: "¿Por qué las reclamaciones de seguro por moho reciben pagos insuficientes?",
    answer:
      "Las reclamaciones de moho reciben pagos insuficientes cuando la documentación no puede respaldar el alcance facturado: evidencia faltante de la fuente de humedad, crecimiento oculto sin fotografiar, lecturas de humedad débiles, registros escasos de producción de remediación, cierre PRV ausente y paquetes de suplemento desorganizados enviados antes de completar la investigación. Los revisores de escritorio reducen partidas que no pueden reenviar internamente: el pago insuficiente proporcional sigue cuando la evidencia de causalidad, producción y verificación carece de etiquetas de habitación y marcas de tiempo contemporáneas.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "¿Cómo deben los contratistas documentar los daños por moho para reclamaciones de seguros?",
        href: "/faq#faq-mold-damage-documentation-insurance",
      },
    ],
  },
  {
    id: "mold-documentation-affects-claim-outcomes",
    category: "mold_claims",
    question: "¿Cómo afecta la documentación las reclamaciones de seguro por moho?",
    answer:
      "La calidad de la documentación determina los resultados de las reclamaciones de moho porque las aseguradoras evalúan la causalidad de la fuente de humedad, la extensión del crecimiento, la producción de remediación y la verificación post-remediación por separado. Fotos indexadas, registros de humedad, registros diarios de producción y paquetes de cierre PRV permiten a los revisores de escritorio aprobar el alcance sin visitas de campo: los expedientes incompletos producen reducciones proporcionales incluso cuando el trabajo es legítimo.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Estándares de documentación de reclamaciones",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-moisture-readings-settlement-support",
    category: "mold_claims",
    question: "¿Las lecturas de humedad ayudan a respaldar reclamaciones de moho?",
    answer:
      "Sí. Las lecturas de humedad respaldan los acuerdos de reclamaciones de moho al distinguir pérdida activa de condiciones históricas, documentar el alcance de secado y correlacionar el crecimiento con sustratos húmedos. Las lecturas con medidores de contacto y sin contacto combinadas con imágenes térmicas y mapas de humedad dan a las aseguradoras evidencia objetiva para partidas de remoción, limpieza y reconstrucción: las lecturas ausentes del expediente están entre los primeros grupos de alcance reducidos en la revisión.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "¿Las lecturas de humedad ayudan a respaldar reclamaciones de moho?",
        href: "/faq#faq-mold-moisture-readings-support",
      },
    ],
  },
  {
    id: "mold-hidden-damage-affects-payment",
    category: "mold_claims",
    question: "¿El moho oculto puede afectar los pagos de reclamaciones?",
    answer:
      "El moho oculto afecta directamente los pagos de reclamaciones cuando la contaminación en cavidades, ensamblajes y vanos se documenta durante el acceso, y reduce los pagos cuando la investigación se omite o se reconstruye en el suplemento. Las aseguradoras aprueban el alcance de moho oculto cuando existen fotos contemporáneas de cavidades, lecturas de humedad en el sustrato y registros de descubrimiento antes de retirar materiales; las cavidades cerradas sin evidencia de ingreso rara vez respaldan el pago completo.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "¿Cómo debe documentarse el moho oculto?",
        href: "/faq#faq-mold-hidden-damage-documentation",
      },
    ],
  },
  {
    id: "mold-documentation-improves-settlement",
    category: "mold_claims",
    question: "¿Qué documentación mejora los acuerdos de seguro por moho?",
    answer:
      "Los acuerdos mejoran cuando los expedientes incluyen fotos de la fuente de humedad, documentación de crecimiento indexada por habitación, mapas y lecturas de humedad, registros de producción de remediación con evidencia de contención y remoción, cierre PRV con lecturas finales y registros de autorización, y narrativas de estimado indexadas a carpetas de fotos. Los paquetes organizados con etiquetas de habitación consistentes en fotos, croquis y partidas recuperan más alcance legítimo que rollos de fotos sin etiquetar enviados sin narrativa.",
    relatedLinks: [
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
      {
        label: "Guía de documentación de verificación post-remediación (PRV)",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
    ],
  },

  // Mold Documentation Mistakes Blog (5)
  {
    id: "mold-common-documentation-mistakes",
    category: "mold_claims",
    question: "¿Cuáles son los errores de documentación de moho más comunes?",
    answer:
      "Los errores de documentación de moho más comunes son no documentar la fuente de humedad, conjuntos fotográficos deficientes de antes/durante/después, omitir lecturas y mapas de humedad, ignorar moho oculto en cavidades y ensamblajes, registros débiles de producción de remediación, cierre PRV ausente, desviaciones de protocolo sin documentar, índices comerciales desorganizados por edificio/piso/unidad, narrativas de estimado débiles y enviar paquetes incompletos demasiado pronto. Cada brecha es prevenible con evidencia contemporánea indexada por habitación.",
    relatedLinks: [
      {
        label: "10 errores de documentación de moho que cuestan dinero a los contratistas",
        href: "/resources/blog/mold-documentation-mistakes",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "¿Puede la documentación deficiente reducir los pagos de seguro por moho?",
        href: "/faq#faq-mold-poor-documentation-reduces-payment",
      },
    ],
  },
  {
    id: "mold-poor-documentation-reduces-payment",
    category: "mold_claims",
    question: "¿Puede la documentación deficiente reducir los pagos de seguro por moho?",
    answer:
      "Sí. La documentación deficiente reduce los pagos de seguro por moho cuando las aseguradoras no pueden verificar la causalidad, la extensión del crecimiento, la producción de remediación o la verificación post-remediación. Fotos de fuente faltantes, rollos fotográficos escasos, lecturas de humedad ausentes, moho oculto sin documentar, registros diarios escasos y paquetes PRV incompletos producen revisiones demoradas, partidas disputadas y reducciones proporcionales — incluso cuando el trabajo de campo fue legítimo.",
    relatedLinks: [
      {
        label: "10 errores de documentación de moho que cuestan dinero a los contratistas",
        href: "/resources/blog/mold-documentation-mistakes",
      },
      {
        label: "Por qué las reclamaciones de seguro por moho reciben pagos insuficientes",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
    ],
  },
  {
    id: "mold-moisture-readings-why-important",
    category: "mold_claims",
    question: "¿Por qué son importantes las lecturas de humedad en reclamaciones de moho?",
    answer:
      "Las lecturas de humedad son importantes en reclamaciones de moho porque separan la pérdida activa de condiciones históricas, respaldan el alcance de secado y remoción, y correlacionan el crecimiento con sustratos húmedos. Registros de medidores de pin y sin pin, lecturas de confirmación con imagen térmica, datos de higrómetro y mapas de humedad fechados dan a los revisores de escritorio evidencia objetiva: los expedientes sin lecturas invitan reducciones y disputas en partidas dependientes de humedad.",
    relatedLinks: [
      {
        label: "10 errores de documentación de moho que cuestan dinero a los contratistas",
        href: "/resources/blog/mold-documentation-mistakes",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "¿Las lecturas de humedad ayudan a respaldar las reclamaciones de moho?",
        href: "/faq#faq-mold-moisture-readings-settlement-support",
      },
    ],
  },
  {
    id: "mold-claim-documentation-organization",
    category: "mold_claims",
    question: "¿Cómo deben los contratistas organizar la documentación de reclamaciones de moho?",
    answer:
      "Organice la documentación de reclamaciones de moho por habitación (o por edificio, piso y unidad en pérdidas comerciales) con convenciones de nomenclatura que coincidan con el croquis y el estimado. Indexe fotos por fase — antes, durante, después —, mantenga lecturas y mapas de humedad en las mismas carpetas de habitación, archive registros diarios de producción con evidencia de remediación y ensamble el cierre PRV como un solo paquete indexado. Etiquetas consistentes en fotos, registros, protocolo y narrativas de estimado permiten a los revisores de escritorio aprobar el alcance sin reconstruir la pérdida.",
    relatedLinks: [
      {
        label: "10 errores de documentación de moho que cuestan dinero a los contratistas",
        href: "/resources/blog/mold-documentation-mistakes",
      },
      {
        label: "Guía de reclamaciones comerciales de moho",
        href: "/resources/guides/mold/commercial-mold-claims-guide",
      },
      {
        label: "Estándares de documentación de reclamaciones",
        href: "/resources/guides/general-claims/documentation-standards-guide",
      },
    ],
  },
  {
    id: "mold-documentation-package-contents",
    category: "mold_claims",
    question: "¿Qué debe incluir un paquete de documentación de moho?",
    answer:
      "Un paquete completo de documentación de moho incluye evidencia de la fuente de humedad, fotos indexadas por habitación de antes/durante/después, lecturas y mapas de humedad, registros de investigación de moho oculto cuando se accede, documentación de producción de remediación (contención, remoción, limpieza, equipo, registros diarios), notas de protocolo y desviaciones cuando aplique, narrativas de estimado vinculadas a carpetas de evidencia, y cierre PRV con fotos finales, documentación de autorización y verificación de humedad. Envíe paquetes cuando el conjunto de evidencia coincida con la fase que se factura — no antes.",
    relatedLinks: [
      {
        label: "10 errores de documentación de moho que cuestan dinero a los contratistas",
        href: "/resources/blog/mold-documentation-mistakes",
      },
      {
        label: "Guía de documentación de verificación post-remediación (PRV)",
        href: "/resources/guides/mold/post-remediation-verification-documentation-guide",
      },
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },

  // Mold Supplement Playbook FAQs (5)
  {
    id: "mold-supplement-included-items",
    category: "mold_claims",
    question: "¿Qué debe incluirse en un suplemento por daños de moho?",
    answer:
      "Un suplemento completo por daños de moho incluye carta de presentación con tabla resumen, estimado Xactimate revisado, exhibiciones fotográficas indexadas por habitación o zona, paquete de investigación de fuente de humedad (mapa, lecturas, narrativa de causalidad), documentación de contención y equipos, extractos de protocolo cuando se usen, evidencia de cierre PRV, y registro de correspondencia. Cada partida solicitada debe corresponder a al menos una exhibición nombrada.",
    relatedLinks: [
      {
        label: "Manual de suplementos por moho para contratistas",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Flujo de envío de suplementos",
        href: "/resources/guides/general-claims/supplement-submission-guide",
      },
      { label: "Soluciones para moho", href: "/solutions/mold" },
    ],
  },
  {
    id: "mold-supplement-when-to-submit",
    category: "mold_claims",
    question: "¿Cuándo deben los contratistas enviar un suplemento por moho?",
    answer:
      "Envíe cuando el alcance documentado supere el estimado de la aseguradora y exista evidencia contemporánea — dentro de las 48 horas en brechas visibles del estimado, después de la investigación de humedad, cuando la contención y el equipo estén documentados, después de revisiones de protocolo, o cuando se complete la autorización PRV. El envío por fases supera esperar la factura final: los suplementos de humedad, contención y PRV se aprueban mejor cuando la evidencia se captura antes de que la reconstrucción oculte las condiciones.",
    relatedLinks: [
      {
        label: "Manual de suplementos por moho para contratistas",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Primeras 48 horas después del estimado de la aseguradora",
        href: "/resources/blog/first-48-hours-after-carrier-estimate",
      },
    ],
  },
  {
    id: "mold-supplement-documentation-evidence",
    category: "mold_claims",
    question: "¿Qué documentación respalda un suplemento por daños de moho?",
    answer:
      "La documentación de suplemento por moho incluye fotos indexadas por habitación o zona, narrativa de fuente de humedad con mapa y lecturas, fotos de construcción de contención y aire negativo, registros de días de equipo, extractos de protocolo y fotos de revisión cuando aplique, fotos de cavidades durante aperturas, registros de autorización PRV, y una carta de presentación que mapee cada adjunto a números de partida del estimado. La evidencia contemporánea por fases supera la narrativa de fin de trabajo armada después de que la producción cierra el acceso.",
    relatedLinks: [
      {
        label: "Manual de suplementos por moho para contratistas",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Guía de documentación de daños por moho",
        href: "/resources/guides/mold/mold-damage-documentation-guide",
      },
      {
        label: "Guía de documentación de remediación de moho",
        href: "/resources/guides/mold/mold-remediation-documentation-guide",
      },
    ],
  },
  {
    id: "mold-supplement-multiple-submissions",
    category: "mold_claims",
    question: "¿Se pueden enviar múltiples suplementos durante una reclamación por moho?",
    answer:
      "Sí. Las reclamaciones por moho comúnmente requieren suplementos por fases — investigación de humedad y alcance de daños primero, luego contención y equipo después de iniciar producción, luego revisión de protocolo y descubrimiento durante aperturas, luego PRV y reconstrucción restante en el cierre. Etiquete cada versión de suplemento en CRM con fase y fecha para que los revisores de la aseguradora sigan el descubrimiento sin tratar envíos posteriores como facturación duplicada.",
    relatedLinks: [
      {
        label: "Manual de suplementos por moho para contratistas",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Flujo de envío de suplementos",
        href: "/resources/guides/general-claims/supplement-submission-guide",
      },
    ],
  },
  {
    id: "mold-supplement-commonly-missed-items",
    category: "mold_claims",
    question: "¿Cuáles son las partidas de suplemento por moho más comúnmente omitidas?",
    answer:
      "Las partidas de suplemento por moho más comúnmente omitidas incluyen investigación y mapeo de fuente de humedad, construcción de contención y esclusas de aire, días de equipo de aire negativo y depuradores de aire, aspirado HEPA más allá de cantidades simbólicas, demolición selectiva y limpieza de cavidades por crecimiento oculto, alcance de revisión de protocolo, protección o pack-out de contenidos durante remediación, y documentación de PRV o autorización requerida antes de la reconstrucción.",
    relatedLinks: [
      {
        label: "Manual de suplementos por moho para contratistas",
        href: "/resources/guides/mold/mold-supplement-playbook-for-contractors",
      },
      {
        label: "Por qué las reclamaciones de seguro por moho se pagan de menos",
        href: "/resources/blog/why-mold-insurance-claims-get-underpaid",
      },
      {
        label: "Errores de documentación de moho",
        href: "/resources/blog/mold-documentation-mistakes",
      },
    ],
  },

  // Contents Restoration (5)
  {
    id: "contents-pack-out",
    category: "contents_restoration",
    question: "¿Cómo apoyan las reclamaciones de pack-out y limpieza de contenidos?",
    answer:
      "Revisamos inventarios, mano de obra de pack-out, almacenamiento, códigos de método de limpieza y manejo de artículos especiales. Los expedientes de contenidos fallan cuando los inventarios están incompletos o las partidas de limpieza no coinciden con los tipos de artículos; ayudamos a fortalecer esa documentación.",
    relatedLinks: [
      { label: "Soluciones para contenidos", href: "/solutions/contents" },
      {
        label: "Guía de documentación de pack-out",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
    ],
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
    relatedLinks: [
      {
        label: "Guía de documentación de pack-out",
        href: "/resources/guides/fire-damage/pack-out-documentation-guide",
      },
      { label: "Soluciones para contenidos", href: "/solutions/contents" },
    ],
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
  {
    id: "commercial-claims-handled",
    category: "insurance_supplements",
    question: "¿Claims Ninja gestiona reclamaciones de seguros comerciales?",
    answer:
      "Sí — las reclamaciones de seguros comerciales son una de nuestras especialidades, no un servicio ocasional. Claims Ninja apoya a los contratistas de restauración en reclamaciones comerciales complejas y de grandes pérdidas en todo el país con documentación disciplinada, estimación de grandes pérdidas, suplementos estratégicos y negociación con aseguradoras en pérdidas de techado, agua, fuego, moho, contenidos y reconstrucción.",
    relatedLinks: [
      { label: "Reclamaciones de seguros comerciales", href: "/solutions/commercial" },
      {
        label: "Guía de reclamaciones comerciales por incendio",
        href: "/resources/guides/fire-damage/commercial-fire-claims-guide",
      },
    ],
  },
  {
    id: "commercial-apartment-complex-claims",
    category: "insurance_supplements",
    question: "¿Puede Claims Ninja ayudar con reclamaciones de seguros de complejos de apartamentos?",
    answer:
      "Sí. Claims Ninja apoya reclamaciones de complejos de apartamentos y multifamiliares con documentación unidad por unidad, alcance de áreas comunes, seguimiento del impacto en inquilinos y registros de equipo escalados al tamaño de la propiedad. Ayudamos a los contratistas a organizar pérdidas de múltiples unidades en expedientes indexados y defendibles que las aseguradoras revisan unidad por unidad, el estándar que esperan en pérdidas multifamiliares.",
    relatedLinks: [
      { label: "Reclamaciones de seguros comerciales", href: "/solutions/commercial" },
      {
        label: "Documentación de daños por agua para complejos de apartamentos",
        href: "/resources/blog/water-damage-documentation-for-apartment-complexes",
      },
    ],
  },
  {
    id: "commercial-national-restoration-programs",
    category: "insurance_supplements",
    question: "¿Apoyan a empresas nacionales de restauración?",
    answer:
      "Sí. Claims Ninja apoya a empresas nacionales de restauración y programas multi-mercado con documentación y estimación estandarizadas en todo el portafolio. La cobertura a nivel nacional, los flujos de reclamaciones consistentes y los profesionales experimentados en reclamaciones comerciales ayudan a los grandes operadores a mantener la calidad documental y la disciplina de suplementos consistentes de mercado a mercado.",
    relatedLinks: [
      { label: "Reclamaciones de seguros comerciales", href: "/solutions/commercial" },
    ],
  },
  {
    id: "commercial-large-loss-support",
    category: "insurance_supplements",
    question: "¿Puede Claims Ninja asistir con reclamaciones comerciales de grandes pérdidas?",
    answer:
      "Sí. Las reclamaciones comerciales de grandes pérdidas son un enfoque central. Claims Ninja apoya alcances de reconstrucción por fases, condiciones generales, múltiples movilizaciones, coordinación de ingeniería y mejoras requeridas por código, con la disciplina de estimación y la calidad de evidencia que exigen estas reclamaciones de mayor escrutinio. Ayudamos a los contratistas a documentar y negociar una recuperación legítima de grandes pérdidas sin crear un departamento interno de reclamaciones.",
    relatedLinks: [
      { label: "Reclamaciones de seguros comerciales", href: "/solutions/commercial" },
      {
        label: "Mejores prácticas de documentación de mitigación de agua en grandes pérdidas",
        href: "/resources/blog/large-loss-water-mitigation-documentation-best-practices",
      },
    ],
  },
  {
    id: "commercial-property-types-supported",
    category: "insurance_supplements",
    question: "¿Qué tipos de propiedades comerciales apoya Claims Ninja?",
    answer:
      "Claims Ninja apoya toda la gama de pérdidas de propiedades comerciales: comunidades de apartamentos, HOAs y condominios, hoteles y hospitalidad, edificios de oficinas, centros comerciales, instalaciones industriales, instalaciones de salud, escuelas y edificios municipales, iglesias y desarrollos de uso mixto. Cada tipo de propiedad conlleva su propia complejidad de partes interesadas, documentación y estimación, y nuestros flujos de trabajo están diseñados para ello.",
    relatedLinks: [
      { label: "Reclamaciones de seguros comerciales", href: "/solutions/commercial" },
    ],
  },
] as const;
