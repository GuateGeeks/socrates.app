/**
 * Ciencias Sociales · Unidad 1 · Semana 8 — Ciudadanía activa ante los problemas del mundo.
 * Progresión: leer datos e informes para identificar la problemática mundial actual → las normas
 * jurídicas que definen nuestras responsabilidades fiscales → resolver problemas con diálogo, servir a la
 * comunidad y practicar la cultura de paz (con repaso espiral de la unidad).
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Problemas del mundo actual ───────────────────────── */
  lesson({
    id: 's08-ccss-1',
    title: 'Los grandes problemas del mundo, en datos',
    icon: 'BarChart3',
    minutes: 15,
    gancho: 'Todos los días escuchas noticias sobre sequías, migración, precios altos o contaminación. ¿Son problemas solo de Guatemala o de todo el planeta? ¿Cómo sabemos qué tan grandes son?',
    objetivos: [
      'Identificar los principales problemas mundiales actuales',
      'Leer e interpretar datos de informes y gráficas sobre la población mundial',
      'Relacionar los problemas mundiales con la vida en tu comunidad',
    ],
    resumen: [
      'Problemas mundiales actuales: pobreza y hambre, desigualdad, cambio climático, falta de agua potable, pérdida de bosques y biodiversidad, contaminación, migración forzada, conflictos armados, enfermedades y falta de acceso a la educación.',
      'Organismos como la ONU publican informes con datos estadísticos para medir estos problemas. Según la ONU, aproximadamente 1 de cada 11 personas en el mundo pasa hambre y cerca de 1 de cada 4 no tiene agua potable segura en casa.',
      'Para leer un informe: identifica el tema, la fuente y la fecha; lee título, unidades y escalas de las gráficas; compara datos y saca conclusiones sin exagerar.',
      'En 2015, los países de la ONU acordaron 17 Objetivos de Desarrollo Sostenible (Agenda 2030) para enfrentar juntos estos problemas. Lo global también se vive y se resuelve en lo local.',
    ],
    media: {
      id: 's08-ccss-1-ods', kind: 'image', title: 'Un planeta, muchos retos', aspect: '16:9',
      alt: 'Ilustración de un globo terráqueo rodeado de íconos de problemas mundiales: una mazorca seca, una gota de agua tachada, un termómetro alto, un árbol cortado, una mochila de migrante y un libro cerrado.',
      brief: 'Ilustración central de la Tierra rodeada de 8 íconos grandes y amables, cada uno con una etiqueta breve: Hambre (plato vacío), Agua (gota con signo de interrogación), Cambio climático (termómetro alto), Bosques (tocón de árbol), Contaminación (bolsa plástica en el mar), Migración forzada (familia con mochilas), Educación (libro cerrado), Desigualdad (balanza inclinada). Debajo: "La ONU mide estos problemas con informes y datos". Estilo plano, colores suaves, sin fotos de personas reales ni imágenes dolorosas.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:8.3.1'], ambito: 'conocer',
          prompt: 'Este año la lluvia llegó tarde y muchas milpas del Corredor Seco se perdieron. Al mismo tiempo, hubo sequías en partes de África y Asia. ¿Qué nos dice esto?',
          explain: 'Algunos problemas **no respetan fronteras**: el cambio climático, el hambre o la contaminación afectan a muchos países a la vez. Son **problemas mundiales**.' },
        { options: [
          { id: 'a', text: 'Que hay problemas que afectan a muchos países a la vez', icon: 'Globe' },
          { id: 'b', text: 'Que es pura casualidad y no tiene relación', icon: 'Dice5', feedback: 'Cuando algo se repite en muchos lugares, conviene investigar si hay causas comunes, como el cambio del clima.' },
          { id: 'c', text: 'Que solo Guatemala tiene problemas', icon: 'MapPin', feedback: 'La sequía también ocurre en otros continentes: es un problema compartido.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:8.3.1'], ambito: 'conocer', title: 'La problemática mundial actual',
          prompt: 'Los informes de la ONU y de otros organismos describen varios problemas que enfrenta la humanidad hoy. Toca cada tarjeta.' },
        { icon: 'Globe', body: 'Estos problemas están **conectados**: la sequía causa hambre, el hambre empuja a migrar, la pobreza impide estudiar… Por eso se buscan soluciones que atiendan varias causas a la vez.', reveal: [
          { icon: 'Wheat', front: 'Pobreza y hambre', back: 'Según la ONU, aproximadamente **1 de cada 11 personas** en el mundo pasa hambre. En Guatemala, la desnutrición crónica infantil es un problema grave.' },
          { icon: 'Droplets', front: 'Agua', back: 'Cerca de **1 de cada 4 personas** en el mundo no tiene agua potable segura en su casa.' },
          { icon: 'Thermometer', front: 'Cambio climático', back: 'El planeta se calienta por los gases que producen la quema de combustibles y la tala de bosques. Hay sequías y tormentas más fuertes.' },
          { icon: 'TreePine', front: 'Bosques y biodiversidad', back: 'Se pierden bosques y muchas especies de plantas y animales están en peligro.' },
          { icon: 'Route', front: 'Migración forzada', back: 'Millones de personas dejan su hogar por pobreza, violencia, conflictos o desastres.' },
          { icon: 'BookOpen', front: 'Educación', back: 'Millones de niñas y niños en el mundo no van a la escuela, sobre todo en zonas pobres o con conflictos.' },
          { icon: 'Target', front: 'Una respuesta común: los ODS', back: 'En **2015**, los países de la ONU acordaron **17 Objetivos de Desarrollo Sostenible** (la **Agenda 2030**): metas comunes como acabar con el hambre, dar educación de calidad, agua limpia y cuidar el clima.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:8.3.1'], ambito: 'hacer', title: 'Cómo leer un informe estadístico',
          prompt: 'Los **datos estadísticos** son números que describen un problema. Para leerlos bien, sigue estos pasos. Toca cada tarjeta.',
          media: { id: 's08-ccss-1-grafica', kind: 'diagram', title: 'Partes de una gráfica', aspect: '4:3',
            alt: 'Gráfica de barras con flechas que señalan sus partes: título, fuente, eje de categorías, eje de valores con unidades y la barra más alta.',
            brief: 'Gráfica de barras de ejemplo con datos hipotéticos rotulados "Ejemplo" y flechas que señalan: (1) Título: "Hogares con agua entubada en cuatro aldeas (supuesto)"; (2) Fuente y año, en letra pequeña abajo; (3) Eje horizontal con los nombres de las aldeas; (4) Eje vertical con la unidad "%" y escala de 0 a 100 de 20 en 20; (5) la barra más alta y la más baja resaltadas. Colores claros, textos grandes.' } },
        { icon: 'BarChart3', body: 'Un buen lector de datos no exagera: dice **lo que muestran los números** y aclara si son **aproximados** o **supuestos**.', reveal: [
          { icon: 'FileText', front: '1. Tema, fuente y fecha', back: '¿De qué trata? ¿Quién lo publicó (ONU, INE, municipalidad)? ¿De qué año son los datos? Una fuente confiable dice cómo obtuvo sus datos.' },
          { icon: 'Ruler', front: '2. Unidades y escala', back: '¿Son personas, porcentajes (%) o millones? ¿De cuánto en cuánto sube la escala?' },
          { icon: 'Search', front: '3. Comparar', back: '¿Cuál es el dato mayor y el menor? ¿Aumentó o disminuyó con el tiempo?' },
          { icon: 'Lightbulb', front: '4. Concluir', back: 'Escribe una conclusión que salga de los datos: "La aldea C tiene la menor cobertura de agua".' },
        ] },
      ),
      S.chart(
        { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:8.3.1'], ambito: 'hacer',
          prompt: 'Construye la gráfica con los datos de este informe **hipotético** de una municipalidad: porcentaje de hogares con agua entubada en cuatro aldeas.',
          hint: 'Lee cada dato de la tabla y sube la barra hasta ese número. La escala va de 10 en 10.',
          explain: 'La gráfica muestra de un vistazo que la aldea Los Pinos tiene la menor cobertura: allí debería priorizarse un proyecto de agua.' },
        { categories: [
          { id: 'a', label: 'El Llano', icon: 'Home' },
          { id: 'b', label: 'San José', icon: 'Home' },
          { id: 'c', label: 'Los Pinos', icon: 'Home' },
          { id: 'd', label: 'La Cumbre', icon: 'Home' },
        ], data: [80, 60, 30, 50], max: 100, step: 10, unit: '%', source: 'Informe municipal (datos supuestos): El Llano 80 %, San José 60 %, Los Pinos 30 %, La Cumbre 50 %' },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['ccss', 'l1'], cnb: ['ccss:8.3.1'], ambito: 'conocer', prompt: 'Lee este fragmento de un informe **hipotético** y responde.' },
        { genre: 'Informe (datos supuestos)', heading: 'Informe regional sobre niñez y educación', passage:
          'Supongamos que un organismo internacional estudió cuatro países de una región durante 10 años. Estos son algunos resultados.\n\nEn 2014, **20 de cada 100** niñas y niños en edad de primaria no asistían a la escuela. En 2024, la cifra bajó a **12 de cada 100**. La mejora fue mayor en las ciudades que en las áreas rurales.\n\nEl informe señala tres causas principales de la falta de asistencia: la **pobreza** (las familias necesitan que los niños trabajen), la **distancia** a la escuela y la **migración** de las familias. Recomienda becas, transporte escolar y escuelas cercanas en el área rural.',
          questions: [
            { q: '¿Qué pasó con la asistencia escolar entre 2014 y 2024?', options: [
              { id: 'a', text: 'Mejoró: los que no asistían bajaron de 20 a 12 de cada 100' },
              { id: 'b', text: 'Empeoró: subieron de 12 a 20 de cada 100' },
              { id: 'c', text: 'No cambió nada' },
            ], correct: 'a' },
            { q: '¿Cuántos niños de cada 100 **dejaron** de estar fuera de la escuela en esos 10 años?', options: [
              { id: 'a', text: '8' },
              { id: 'b', text: '12' },
              { id: 'c', text: '32' },
            ], correct: 'a', why: '20 − 12 = 8 de cada 100.' },
            { q: '¿Qué conclusión está **mejor apoyada** por los datos?', options: [
              { id: 'a', text: 'Hubo avances, pero el área rural necesita más apoyo' },
              { id: 'b', text: 'El problema ya está resuelto en todas partes' },
              { id: 'c', text: 'La educación no tiene relación con la pobreza' },
            ], correct: 'a', why: 'El informe dice que la mejora fue menor en el área rural y que la pobreza es una causa.' },
          ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:8.3.1'], ambito: 'conocer',
          prompt: 'Un mismo problema mundial se vive también en tu comunidad. Clasifica cada situación local según el **problema mundial** al que pertenece.',
          explain: 'Pensar globalmente y actuar localmente: entender el problema mundial ayuda a actuar donde vivimos.' },
        { buckets: [
          { id: 'cli', label: 'Cambio climático y ambiente', icon: 'Thermometer', color: 'var(--c-ok)' },
          { id: 'pob', label: 'Pobreza y hambre', icon: 'Wheat', color: 'var(--c-maiz-strong)' },
          { id: 'mig', label: 'Migración', icon: 'Route', color: 'var(--area-ccss)' },
        ], items: [
          { id: 'l1', text: 'La lluvia llega tarde y se pierde la cosecha', bucket: 'cli' },
          { id: 'l2', text: 'Un joven se va a otro país a buscar trabajo', bucket: 'mig' },
          { id: 'l3', text: 'Familias que no alcanzan a comprar la canasta básica', bucket: 'pob' },
          { id: 'l4', text: 'Basura plástica en el río del pueblo', bucket: 'cli' },
          { id: 'l5', text: 'Niños con desnutrición en la aldea', bucket: 'pob' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:8.3.1'], ambito: 'conocer',
          prompt: 'En 2015, los países de la ONU acordaron los **17 Objetivos de Desarrollo Sostenible** (ODS). ¿Para qué sirven?',
          explain: 'Los ODS son metas comunes para el año 2030: acabar con la pobreza y el hambre, garantizar educación, agua, igualdad de género, cuidar el clima y más. Cada país, municipio y persona puede aportar.' },
        { options: [
          { id: 'a', text: 'Son metas comunes para enfrentar juntos los grandes problemas del mundo' },
          { id: 'b', text: 'Son reglas de un deporte internacional', feedback: 'No: son metas de desarrollo que los países acordaron en la ONU.' },
          { id: 'c', text: 'Son impuestos que se pagan a la ONU', feedback: 'No son impuestos: son objetivos que guían las políticas de los países.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.3.1'], prompt: '¿Cuál de estos es un **problema mundial actual**?' },
        { options: [
          { id: 'a', text: 'El cambio climático, que causa sequías y tormentas más fuertes' },
          { id: 'b', text: 'La construcción de pirámides en Egipto' },
          { id: 'c', text: 'La invención de la imprenta' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['ccss', 'mat'], cnb: ['ccss:8.3.1'], prompt: 'Supongamos que un informe dice: en 2010, **30 de cada 100** hogares de un municipio no tenían luz eléctrica; en 2020, **18 de cada 100**. ¿En cuántos hogares de cada 100 **mejoró** la situación?' },
        { answer: 12, unit: 'de cada 100' },
      ),
    ],
  }),

  /* ───────────────────────── 2. Impuestos y normas jurídicas ───────────────────────── */
  lesson({
    id: 's08-ccss-2',
    title: 'Impuestos: una responsabilidad de todos',
    icon: 'Landmark',
    minutes: 15,
    gancho: 'Cuando compras un cuaderno de Q10, una parte de ese dinero no es para la librería. ¿Para quién es? ¿Y quién decidió que así fuera?',
    objetivos: [
      'Explicar qué son los impuestos y para qué sirven',
      'Clasificar las normas jurídicas que definen las responsabilidades fiscales de la ciudadanía',
      'Calcular el IVA en situaciones sencillas y valorar la importancia de pedir factura',
    ],
    resumen: [
      'Los impuestos son pagos obligatorios que la población y las empresas hacen al Estado para financiar servicios públicos: escuelas, hospitales, carreteras, seguridad.',
      'Las normas jurídicas tienen un orden: la Constitución Política (la ley suprema) establece el deber de contribuir a los gastos públicos y que solo el Congreso puede crear impuestos; las leyes (como la del IVA y la del ISR) y el Código Tributario los desarrollan; los reglamentos explican cómo aplicarlas. Las municipalidades cobran impuestos como el IUSI.',
      'El IVA es el 12 % del valor de lo que se compra y casi siempre ya viene incluido en el precio. El ISR se paga sobre los ingresos. La SAT es la institución que recauda los impuestos.',
      'Pedir factura, no evadir impuestos y cuidar los bienes públicos son responsabilidades ciudadanas; también lo es vigilar que el dinero público se use bien. Los tratados comerciales también fijan reglas sobre los impuestos a las importaciones.',
    ],
    media: {
      id: 's08-ccss-2-ruta', kind: 'animation', title: 'El viaje de un quetzal de impuestos', aspect: '16:9', duration: 45,
      alt: 'Animación que sigue una moneda desde la compra de un cuaderno con factura hasta el presupuesto del Estado y de ahí a una escuela, un centro de salud y una carretera.',
      brief: 'Animación 2D de 45 s. Una niña compra un cuaderno y recibe su factura. Una moneda con la etiqueta "IVA" sale de la caja registradora, viaja por una flecha hasta un edificio rotulado "SAT", luego a un cofre "Presupuesto del Estado aprobado por el Congreso", y de ahí se reparte en tres flechas hacia una escuela con pupitres nuevos, un centro de salud con medicinas y una carretera en construcción. Al final aparece la frase "Tus impuestos regresan en servicios. Pide tu factura". Narración en español con subtítulos. Sin logos oficiales reales.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:8.4.1'], ambito: 'conocer',
          prompt: 'La escuela pública, el centro de salud y la carretera de tu municipio cuestan mucho dinero. ¿De dónde sale principalmente ese dinero?',
          explain: 'Sale principalmente de los **impuestos** que pagamos todas las personas y empresas. El Estado no "tiene" dinero propio: administra lo que la población aporta.' },
        { options: [
          { id: 'a', text: 'De los impuestos que pagan las personas y las empresas', icon: 'Coins' },
          { id: 'b', text: 'El gobierno lo imprime cuando quiere', icon: 'Banknote', feedback: 'Imprimir dinero sin respaldo hace que los precios suban. Los servicios públicos se pagan principalmente con impuestos.' },
          { id: 'c', text: 'Lo regalan otros países cada año', icon: 'Gift', feedback: 'A veces hay donaciones, pero la mayor parte sale de los impuestos de la población.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:8.4.1'], ambito: 'conocer', title: '¿Qué son los impuestos?',
          prompt: 'Los **impuestos** (o tributos) son pagos **obligatorios** que se hacen al Estado, establecidos por la ley. Toca cada tarjeta.' },
        { icon: 'Landmark', body: 'La **SAT** (Superintendencia de Administración Tributaria) recauda los impuestos nacionales. El **Congreso** aprueba cada año el **presupuesto**, que dice en qué se gastará ese dinero.', reveal: [
          { icon: 'ShoppingCart', front: 'IVA', back: '**Impuesto al Valor Agregado**: el **12 %** de lo que se compra o de un servicio. Lo pagamos todos, aunque seamos niños, y **casi siempre ya viene incluido** en el precio.' },
          { icon: 'Wallet', front: 'ISR', back: '**Impuesto Sobre la Renta**: se paga sobre los **ingresos** de personas y empresas.' },
          { icon: 'Home', front: 'IUSI', back: '**Impuesto Único Sobre Inmuebles**: lo pagan los dueños de terrenos y casas, y lo cobra la **municipalidad**.' },
          { icon: 'FileText', front: 'La factura', back: 'Es el comprobante de una compra. Pedirla ayuda a que el IVA que pagaste **llegue al Estado** y no se quede en manos de quien vende.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:8.4.1'], ambito: 'conocer', title: 'Las normas jurídicas tienen un orden',
          prompt: 'Las **normas jurídicas** son las reglas obligatorias de un país. No todas tienen el mismo nivel: se ordenan como una **pirámide**. Toca cada tarjeta, de arriba hacia abajo.',
          media: { id: 's08-ccss-2-piramide', kind: 'diagram', title: 'La pirámide de las normas fiscales', aspect: '3:4',
            alt: 'Pirámide de tres niveles: arriba la Constitución, en medio las leyes del Congreso y el Código Tributario, abajo los reglamentos; a un lado, las normas municipales.',
            brief: 'Diagrama de pirámide con tres niveles de colores. Punta: "Constitución Política de la República (1985)" con la nota "deber de contribuir a los gastos públicos; solo el Congreso crea impuestos". Centro: "Leyes del Congreso (decretos)": Ley del IVA, Ley del ISR, Código Tributario. Base: "Reglamentos del Organismo Ejecutivo: explican cómo aplicar las leyes". A un lado, un recuadro "Municipalidades: IUSI y arbitrios, según la ley" y otro "Tratados internacionales aprobados por el Congreso (p. ej., impuestos a las importaciones)". Flecha lateral: "ninguna norma puede contradecir a la de arriba". Texto grande, íconos simples.' } },
        { icon: 'Layers', body: 'Regla de oro: **ninguna norma puede contradecir a otra de nivel más alto**. Si una ley contradice la Constitución, la **Corte de Constitucionalidad** puede anularla.', reveal: [
          { icon: 'ScrollText', front: 'Constitución Política', back: 'La **ley suprema**. Establece que es **deber** de los guatemaltecos **contribuir a los gastos públicos** según la ley, y que **solo el Congreso** puede crear impuestos (principio de legalidad).' },
          { icon: 'Gavel', front: 'Leyes ordinarias', back: 'Las aprueba el **Congreso** como decretos. Ejemplos: la **Ley del IVA**, la del **ISR** y el **Código Tributario**, que da las reglas generales para pagar y cobrar tributos.' },
          { icon: 'FileText', front: 'Reglamentos', back: 'Los emite el **Organismo Ejecutivo** para explicar **cómo** aplicar una ley. No pueden crear impuestos nuevos.' },
          { icon: 'Building', front: 'Normas municipales', back: 'Las municipalidades cobran impuestos como el **IUSI** y tasas por servicios (agua, mercado, basura), siempre según lo que permite la ley.' },
          { icon: 'Handshake', front: 'Tratados internacionales', back: 'Guatemala también firma **tratados** con otros países. Cuando el **Congreso** los aprueba, se vuelven obligatorios en el país. Los **tratados comerciales** (recuerda la semana 3) fijan, por ejemplo, cuánto impuesto pagan los productos que se importan.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:8.4.1'], prompt: 'Clasifica cada norma o afirmación según su **nivel** en la pirámide.',
          hint: 'Lo más general y superior está en la Constitución; los impuestos concretos, en leyes del Congreso; los detalles de cómo aplicarlas, en reglamentos.',
          explain: 'La Constitución manda el deber de contribuir; las leyes crean cada impuesto; los reglamentos dicen cómo cumplirlas.' },
        { buckets: [
          { id: 'con', label: 'Constitución', icon: 'ScrollText', color: 'var(--area-ccss)' },
          { id: 'ley', label: 'Ley del Congreso', icon: 'Gavel', color: 'var(--c-maiz-strong)' },
          { id: 'reg', label: 'Reglamento', icon: 'FileText', color: 'var(--c-ok)' },
        ], items: [
          { id: 'n1', text: 'Es deber de los guatemaltecos contribuir a los gastos públicos', bucket: 'con' },
          { id: 'n2', text: 'Ley del IVA: el impuesto es del 12 %', bucket: 'ley' },
          { id: 'n3', text: 'Detalle de cómo llenar un formulario para declarar un impuesto', bucket: 'reg' },
          { id: 'n4', text: 'Solo el Congreso puede crear impuestos', bucket: 'con' },
          { id: 'n5', text: 'Código Tributario: reglas generales para pagar tributos', bucket: 'ley' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:8.4.1'], ambito: 'hacer', title: 'Ejemplo resuelto: ¿cuánto IVA pago?',
          prompt: 'El IVA es el 12 % del valor del producto. Mira dos casos con precios supuestos.' },
        { icon: 'Calculator', problem: 'Caso 1: una mochila vale **Q50 sin IVA**. ¿Cuánto IVA se paga y cuál es el precio final? Caso 2: en una tienda pagas **Q112** por unos zapatos, **con el IVA ya incluido**. ¿Cuánto de eso es IVA?',
          steps: [
            { text: 'Caso 1: 12 % de 50 = 50 × 12 ÷ 100 = 600 ÷ 100 = **Q6** de IVA.', why: '"Por ciento" significa "de cada 100": 12 de cada 100 quetzales.' },
            { text: 'Precio final: 50 + 6 = **Q56**.' },
            { text: 'Caso 2: si el precio sin IVA fuera Q100, el IVA sería Q12 y el total Q112. Entonces, de Q112, **Q12 son IVA**.', why: 'Cuando el IVA está incluido, el precio es el 112 % del valor sin impuesto.' },
          ],
          answer: 'Caso 1: **Q6** de IVA y precio final **Q56**. Caso 2: **Q12** de los Q112 son IVA.',
          tip: 'En las tiendas de Guatemala el precio que ves casi siempre ya incluye el IVA. Por eso, pide factura.' },
      ),
      S.number(
        { fase: 'aplicar', areas: ['ccss', 'mat'], cnb: ['ccss:8.4.1'], ambito: 'hacer',
          prompt: 'Supongamos que un par de zapatos cuesta **Q200 sin IVA**. ¿Cuánto IVA (12 %) se paga?',
          explain: '12 % de 200 = 200 × 12 ÷ 100 = 24. Se pagan Q24 de IVA (precio final Q224).' },
        { answer: 24, unit: 'Q', misconceptions: [
          { value: 224, msg: 'Ese es el precio final. La pregunta es solo cuánto es el IVA.' },
          { value: 12, msg: '12 es el porcentaje. Calcula el 12 % de 200.' },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['ccss', 'fc'], cnb: ['ccss:8.4.1'], ambito: 'ser', prompt: '¿Qué harías tú?' },
        { scene: { icon: 'Store', text: 'Compras útiles escolares por Q84. El vendedor te dice: "Si no te doy factura, te lo dejo en Q80".' },
          options: [
            { id: 'a', icon: 'FileText', text: 'Pido la factura y pago el precio completo', consequence: 'El IVA que pagaste llega al Estado y se convierte en servicios públicos. Cumpliste con tu responsabilidad ciudadana.', values: ['responsabilidad', 'honestidad'], constructive: true },
            { id: 'b', icon: 'MessageCircle', text: 'Pido la factura y le explico a mi familia por qué es importante', consequence: 'Además de cumplir, ayudas a que otros entiendan que la factura protege el dinero de todos.', values: ['responsabilidad', 'solidaridad'], constructive: true },
            { id: 'c', icon: 'Coins', text: 'Acepto el descuento sin factura', consequence: 'Ahorras Q4, pero el vendedor no reporta la venta y ese impuesto no llega a escuelas ni hospitales. Es una forma de evasión.', values: [], constructive: false },
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.4.1'], prompt: '¿Qué norma jurídica establece el **deber** de todos los guatemaltecos de contribuir a los gastos públicos y es la ley suprema del país?' },
        { options: [
          { id: 'a', text: 'La Constitución Política de la República' },
          { id: 'b', text: 'Un reglamento municipal' },
          { id: 'c', text: 'El reglamento interno de la escuela' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['ccss', 'mat'], cnb: ['ccss:8.4.1'], prompt: 'Supongamos que una pelota cuesta **Q75 sin IVA**. ¿Cuántos quetzales de IVA (12 %) se pagan?' },
        { answer: 9, unit: 'Q' },
      ),
    ],
  }),

  /* ───────────────────────── 3. Resolver problemas y servir con cultura de paz ───────────────────────── */
  lesson({
    id: 's08-ccss-3',
    title: 'Resolver problemas con diálogo y servir a mi comunidad',
    icon: 'Handshake',
    minutes: 15,
    gancho: 'Dos grados quieren usar la cancha a la misma hora. Una aldea discute quién arregla el camino. ¿Existe un "método" para resolver problemas sin pelear?',
    objetivos: [
      'Aplicar un procedimiento para resolver problemas con diálogo',
      'Practicar habilidades de la cultura de paz: escuchar, expresar sin herir y buscar acuerdos',
      'Planificar una actividad de servicio en tu comunidad',
    ],
    resumen: [
      'Procedimiento para resolver problemas: 1) identificar con claridad el problema, 2) escuchar a todas las partes, 3) proponer varias alternativas, 4) elegir juntos la mejor, 5) cumplir el acuerdo, 6) evaluar si funcionó.',
      'Habilidades de la cultura de paz: escucha activa, empatía (ponerse en el lugar del otro), expresar lo que sientes sin herir ("yo me siento… cuando… porque…") y buscar soluciones en las que todos ganen.',
      'Las actividades de servicio (limpiar un espacio, leer a niños más pequeños, acompañar a personas mayores, apoyar en emergencias) fortalecen la comunidad y la paz.',
      'Las Ciencias Sociales nos ayudan a comprender los problemas; el diálogo y la participación, a resolverlos.',
    ],
    media: {
      id: 's08-ccss-3-dialogo', kind: 'video', title: 'Mediación en el recreo', aspect: '16:9', duration: 60,
      alt: 'Animación de dos grupos de estudiantes que discuten por la cancha; una compañera mediadora los ayuda a seguir los seis pasos y llegan a un acuerdo de horarios.',
      brief: 'Animación 2D de 60 s. Escena 1: dos grupos de sexto grado discuten por usar la cancha a la hora del recreo. Escena 2: una compañera mediadora con un distintivo propone sentarse en círculo; en pantalla aparecen los pasos numerados mientras ocurren: identificar el problema, escuchar a cada grupo (burbujas de diálogo con frases "yo me siento… cuando…"), proponer alternativas (turnos por día, dividir la cancha, jugar juntos), elegir juntos, cumplir y evaluar una semana después. Escena 3: un calendario pegado en la pared con los turnos y ambos grupos jugando. Personajes diversos, narración en español con subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:8.2.1'], ambito: 'convivir',
          prompt: 'Dos grados quieren usar la cancha en el mismo recreo y empiezan a gritarse. ¿Qué debería pasar **primero** para resolverlo?',
          explain: 'Antes de proponer soluciones hay que **calmarse y entender el problema**, escuchando a todos. Si no se entiende bien el problema, cualquier solución falla.' },
        { options: [
          { id: 'a', text: 'Calmarse y aclarar cuál es exactamente el problema', icon: 'Search' },
          { id: 'b', text: 'Que gane el grupo que grite más fuerte', icon: 'Megaphone', feedback: 'Así el otro grupo se siente injustamente tratado y el conflicto vuelve.' },
          { id: 'c', text: 'Prohibir la cancha para siempre', icon: 'Lock', feedback: 'Eso castiga a todos y no resuelve el problema de fondo.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:8.2.1'], ambito: 'convivir', title: 'Seis pasos para resolver problemas',
          prompt: 'Este **procedimiento** sirve igual para un problema del recreo que para uno de la comunidad o del país. Toca cada tarjeta.' },
        { icon: 'ListOrdered', body: 'La clave es el **diálogo**: hablar y escuchar con respeto para llegar a un acuerdo que todos acepten.', reveal: [
          { icon: 'Search', front: '1. Identificar el problema', back: 'Decir con claridad qué pasa, sin culpar: "Los dos grados queremos la cancha a la misma hora".' },
          { icon: 'Ear', front: '2. Escuchar a todas las partes', back: 'Cada quien explica qué necesita y cómo se siente, sin interrupciones.' },
          { icon: 'Lightbulb', front: '3. Proponer alternativas', back: 'Pensar **varias** soluciones posibles, sin descartar ninguna al inicio.' },
          { icon: 'Vote', front: '4. Elegir juntos', back: 'Escoger la alternativa que sea más justa y posible para todos.' },
          { icon: 'Handshake', front: '5. Cumplir el acuerdo', back: 'Cada parte hace lo que se comprometió.' },
          { icon: 'ClipboardCheck', front: '6. Evaluar', back: 'Después de un tiempo, revisar: ¿se resolvió? Si no, volver a dialogar.' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:8.2.1'], ambito: 'convivir',
          prompt: 'En la aldea, dos familias discuten porque el agua de lluvia de un terreno se mete al otro. Ordena el **procedimiento** para resolverlo.',
          hint: 'Primero entender, luego escuchar, después buscar opciones, decidir, cumplir y revisar.',
          explain: 'El orden importa: si se elige una solución antes de escuchar a todos, alguna parte no la aceptará.' },
        { items: [
          { id: 'r1', text: 'Identificar el problema: el agua pasa de un terreno al otro' },
          { id: 'r2', text: 'Escuchar a las dos familias con respeto' },
          { id: 'r3', text: 'Proponer alternativas: una zanja, un tubo, sembrar plantas' },
          { id: 'r4', text: 'Elegir juntos la mejor alternativa' },
          { id: 'r5', text: 'Cumplir el acuerdo: hacer la zanja entre las dos familias' },
          { id: 'r6', text: 'Evaluar en la próxima lluvia si funcionó' },
        ], labels: { start: 'Primero', end: 'Al final' } },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:7.2.5'], ambito: 'convivir', title: 'Habilidades para la cultura de paz',
          prompt: 'Para dialogar bien se necesitan **habilidades sociales** que se practican como un deporte. Toca cada tarjeta.' },
        { icon: 'HeartHandshake', body: 'Nadie nace sabiendo dialogar: se aprende practicando en la casa, la escuela y la comunidad.', reveal: [
          { icon: 'Ear', front: 'Escucha activa', back: 'Mirar a quien habla, no interrumpir y repetir lo que entendiste: "Entonces tú dices que…".' },
          { icon: 'Heart', front: 'Empatía', back: '**Ponerte en el lugar del otro**: ¿cómo me sentiría yo si me pasara eso?' },
          { icon: 'MessageCircle', front: 'Mensaje "yo"', back: 'Expresar lo que sientes sin atacar: "**Yo me siento** triste **cuando** no me dejan jugar **porque** también quiero participar". En vez de: "¡Ustedes son unos egoístas!".' },
          { icon: 'Handshake', front: 'Ganar-ganar', back: 'Buscar soluciones en las que **todas las partes** obtengan algo, no una que gana y otra que pierde.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:7.2.5'], ambito: 'convivir',
          prompt: 'Tu hermano usó tu cuaderno sin permiso y lo manchó. ¿Cuál es un buen **mensaje "yo"**?',
          hint: 'Un mensaje "yo" habla de lo que **tú sientes**, cuándo y por qué, sin insultar.',
          explain: 'El mensaje "yo" dice cómo te sientes y por qué, sin atacar a la otra persona. Así es más fácil que te escuche y que lleguen a un acuerdo.' },
        { options: [
          { id: 'a', text: '"Me siento molesto cuando usas mis cosas sin pedirlas, porque las cuido mucho"' },
          { id: 'b', text: '"¡Eres un desordenado y siempre arruinas todo!"', feedback: 'Es un mensaje "tú" que ataca. Tu hermano se defenderá en vez de escucharte.' },
          { id: 'c', text: 'No decir nada y esconder todos mis cuadernos', feedback: 'Callar guarda el enojo y el problema se repite. Es mejor expresarlo con respeto.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:7.1.3'], ambito: 'emprender', title: 'Servir a la comunidad',
          prompt: 'Una **actividad de servicio** es algo que haces, de forma voluntaria y organizada, para el bien de tu comunidad. Toca cada tarjeta.' },
        { icon: 'HandHeart', body: 'Servir también es **organizarse**: tener un objetivo, repartir tareas, pedir permiso y evaluar al final.', reveal: [
          { icon: 'Trash2', front: 'Cuidar el ambiente', back: 'Jornadas de limpieza del parque o del río, sembrar árboles, separar la basura en la escuela.' },
          { icon: 'BookOpen', front: 'Enseñar y acompañar', back: 'Leer cuentos a niños más pequeños, ayudar con tareas, acompañar a personas mayores.' },
          { icon: 'ShieldCheck', front: 'Prevenir riesgos', back: 'Hacer con tu grado un mapa de rutas de evacuación y compartirlo, como aprendiste en la semana 1.' },
          { icon: 'Users', front: 'Organización comunitaria', back: 'Apoyar al gobierno escolar, a grupos juveniles, a la iglesia o al COCODE en campañas y actividades.' },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:7.1.3', 'ccss:7.2.5', 'ccss:8.2.1'], ambito: 'emprender',
          prompt: 'Planifica una **actividad de servicio** sencilla con tu familia, tu grado o tus vecinos. Usa lo que aprendiste para resolver problemas y trabajar en paz.' },
        { goal: 'Organizar una actividad de servicio que ayude a resolver un problema real de tu comunidad.',
          steps: [
            { title: 'Identifica el problema', detail: 'Observa tu entorno y escoge un problema pequeño que puedas atender: basura en el parque, niños que necesitan apoyo con la lectura, una persona mayor que vive sola.' },
            { title: 'Escucha y consulta', detail: 'Pregunta a las personas afectadas qué necesitan. Pide permiso a quien corresponda (familia, maestra, COCODE).' },
            { title: 'Propón y elige', detail: 'Piensa al menos dos alternativas y elige con tu equipo la más posible y útil. Reparte tareas con justicia.' },
            { title: 'Realiza el servicio', detail: 'Hazlo en un día y hora acordados, con cuidado y respeto. Usa mensajes "yo" si surge un desacuerdo.' },
            { title: 'Evalúa', detail: 'Pregunta a las personas si les ayudó y anota qué mejorarías la próxima vez.' },
          ],
          evidence: 'Un registro en tu cuaderno con el problema, la actividad, quiénes participaron, una foto o dibujo y lo que aprendiste.',
          rubric: ['Identifiqué un problema real y concreto', 'Consulté a las personas afectadas y pedí permiso', 'Trabajé en equipo y resolví desacuerdos con diálogo', 'Evalué el resultado y propuse mejoras'] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:7.2.5', 'ccss:8.2.1'], ambito: 'convivir', prompt: 'Durante la jornada de limpieza surge un problema. ¿Qué harías tú?' },
        { scene: { icon: 'Users', text: 'En la limpieza del parque, dos compañeros no quieren recoger basura "porque eso no les toca" y se ponen a jugar. El resto del equipo se enoja.' },
          options: [
            { id: 'a', icon: 'MessagesSquare', text: 'Propongo detenernos, escuchar por qué no quieren y acordar tareas que todos acepten', consequence: 'Descubren que les daba asco tocar la basura; se les asigna repartir bolsas y llevar el conteo. Todos participan.', values: ['diálogo', 'empatía', 'cooperación'], constructive: true },
            { id: 'b', icon: 'MessageCircle', text: 'Les digo: "Me siento frustrado cuando no ayudan, porque así terminamos tarde todos"', consequence: 'Entienden cómo afecta al grupo y se unen. El mensaje "yo" evitó una pelea.', values: ['asertividad', 'respeto'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Les grito que son unos haraganes delante de todos', consequence: 'Se sienten humillados, se van y el grupo queda dividido. La jornada termina mal.', values: [], constructive: false },
          ] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:1.3.1', 'ccss:3.2.6', 'ccss:6.5.1'], ambito: 'conocer',
          prompt: 'Repaso de la unidad: ¿verdadero o falso?',
          explain: 'Todo lo que aprendiste en la unidad sirve para comprender tu mundo y actuar mejor en él.' },
        { statements: [
          { text: 'Vivir en la orilla de un río que se desborda aumenta la vulnerabilidad ante las lluvias.', answer: true },
          { text: 'En Guatemala se habla un solo idioma.', answer: false, why: 'Se hablan 25 idiomas: 22 mayas, xinka, garífuna y español.' },
          { text: 'La ONU se fundó en 1945, después de la Segunda Guerra Mundial.', answer: true },
        ] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.2.1'], prompt: 'Ordena los pasos para resolver un problema con diálogo.' },
        { items: [
          { id: 'p1', text: 'Identificar el problema' },
          { id: 'p2', text: 'Escuchar a todas las partes' },
          { id: 'p3', text: 'Proponer alternativas' },
          { id: 'p4', text: 'Elegir juntos una solución' },
          { id: 'p5', text: 'Cumplir el acuerdo' },
          { id: 'p6', text: 'Evaluar el resultado' },
        ], labels: { start: 'Primero', end: 'Al final' } },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:7.1.3', 'ccss:7.2.5'], prompt: '¿Cuál es una actividad de **servicio** que promueve la cultura de paz?' },
        { options: [
          { id: 'a', text: 'Organizar con el grado una tarde de lectura para niños de primero' },
          { id: 'b', text: 'Hacer una competencia para ver quién se burla mejor de otros' },
          { id: 'c', text: 'Quedarse en casa sin ayudar a nadie' },
        ], correct: ['a'] },
      ),
      cierre({ areas: ['ccss'], cnb: [] }, ['Leo datos para identificar problemas mundiales', 'Explico por qué pagar impuestos y pedir factura es una responsabilidad ciudadana', 'Resuelvo problemas con diálogo y sé organizar una actividad de servicio'],
        ['Realizaré la actividad de servicio que planifiqué', 'Usaré un mensaje "yo" la próxima vez que me enoje', 'Pediré factura cuando acompañe a mi familia a comprar']),
    ],
  }),
];
