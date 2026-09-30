/**
 * Productividad y Desarrollo · Unidad 1 · Semana 2 — Día de mercado en mi pueblo.
 * El perfil del emprendimiento (saberes, habilidades y actitudes) y cómo generar ideas de
 * proyectos productivos que mejoren la economía de familias con pocos recursos.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's02-pyd-1',
    title: 'Emprender en mi comunidad: perfil y buenas ideas',
    icon: 'Store',
    minutes: 15,
    gancho: 'Doña Chepita vende atol de elote en el mercado desde hace veinte años y siempre se le acaba. ¿Qué sabe, qué sabe hacer y cómo es ella para que su negocio funcione?',
    objetivos: [
      'Explicar qué es emprender y qué es un proyecto productivo',
      'Clasificar los saberes, habilidades y actitudes del perfil emprendedor',
      'Generar una idea productiva que una una necesidad, un recurso y un saber de la comunidad',
    ],
    resumen: [
      'Emprender es descubrir una necesidad u oportunidad y organizar recursos para ofrecer un producto o un servicio. Un proyecto productivo genera ingresos para una familia o un grupo.',
      'El perfil emprendedor combina saberes (lo que conoces), habilidades (lo que sabes hacer) y actitudes (cómo actúas: responsabilidad, perseverancia, honestidad, creatividad, trabajo en equipo).',
      'Fórmula para generar ideas: necesidad de la comunidad + recurso disponible + saber de la familia = idea productiva.',
      'Una buena idea es útil, posible con lo que hay, cuida los recursos naturales y genera ingresos.',
    ],
    media: {
      id: 's02-pyd-1-mercado-emprende', kind: 'image', title: 'Emprendimientos del mercado', aspect: '16:9',
      alt: 'Un mercado de pueblo con distintos puestos: atol, tejidos, hortalizas, reparación de celulares y panadería, atendidos por mujeres y hombres de distintas edades.',
      brief: 'Ilustración colorida de un día de mercado en un pueblo del altiplano. Cinco puestos con emprendedoras y emprendedores diversos: una señora con olla de atol de elote, una tejedora con cortes y servilletas, un joven que repara teléfonos, una familia con hortalizas en canastos, un panadero con canasto de pan dulce. Cada puesto con un globo pequeño con ícono (cazo, telar, llave, zanahoria, pan). Sin marcas comerciales ni textos legibles salvo precios en quetzales genéricos (Q5, Q10).',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:1.2.1'], ambito: 'emprender',
          prompt: '¿Por qué crees que el atol de doña Chepita **siempre se acaba**? Marca **todas** las razones que te parezcan importantes.',
          explain: 'Todo cuenta: **sabe** preparar un buen atol y cuánto cobrar, **sabe hacer** bien su trabajo y **es** puntual y amable. Eso es un **perfil emprendedor**.' },
        { multiple: true, options: [
          { id: 'a', text: 'Conoce una buena receta y el precio justo', icon: 'Brain' },
          { id: 'b', text: 'Prepara el atol rápido y lo sirve limpio', icon: 'Utensils' },
          { id: 'c', text: 'Llega puntual cada día de mercado y trata bien a sus clientes', icon: 'Heart' },
        ], correct: ['a', 'b', 'c'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.2.1'], ambito: 'conocer', title: '¿Qué es emprender?',
          prompt: '**Emprender** es descubrir una **necesidad** u **oportunidad** y organizar recursos para ofrecer un **producto** o un **servicio**. Toca cada tarjeta.' },
        { icon: 'Rocket', body: 'Emprender no es solo "tener negocio": también es emprender un proyecto en la escuela o en la comunidad.', reveal: [
          { icon: 'Package', front: 'Producto', back: 'Algo que se **fabrica o cultiva** y se vende: tortillas, tejidos, hortalizas, muebles, miel.' },
          { icon: 'Wrench', front: 'Servicio', back: 'Un **trabajo** que se hace para otra persona: reparar bicicletas, cortar el pelo, transportar carga, dar clases.' },
          { icon: 'Sprout', front: 'Proyecto productivo', back: 'Un emprendimiento que **genera ingresos** para una familia o un grupo, por ejemplo una cooperativa de hortalizas.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.2.1'], ambito: 'conocer', title: 'El perfil emprendedor',
          prompt: 'El **perfil** es el conjunto de cualidades que necesita quien emprende. Tiene tres partes. Toca cada tarjeta.' },
        { icon: 'User', body: 'Nadie nace con el perfil completo: los saberes se **estudian**, las habilidades se **practican** y las actitudes se **eligen** cada día.', reveal: [
          { icon: 'Brain', front: 'Saberes (conocer)', back: 'Lo que **conoces**: cómo se hace el producto, los precios del mercado, qué necesita la gente, cómo llevar cuentas.' },
          { icon: 'Hammer', front: 'Habilidades (hacer)', back: 'Lo que **sabes hacer** con las manos y la mente: cocinar, tejer, medir, calcular, atender al cliente, explicar.' },
          { icon: 'Heart', front: 'Actitudes (ser)', back: 'Cómo **actúas**: responsabilidad, perseverancia (no rendirse), honestidad, creatividad, trabajo en equipo, respeto.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.2.1'], prompt: 'Don Mario es carpintero y vende ventanas y mesas. Clasifica lo que necesita en **saberes**, **habilidades** y **actitudes**.',
          hint: 'Saber = conocer algo. Habilidad = hacer algo bien. Actitud = forma de comportarse.',
          explain: 'Todo emprendimiento combina lo que sabes, lo que sabes hacer y cómo actúas.' },
        { buckets: [
          { id: 'saber', label: 'Saberes (conocer)', icon: 'Brain', color: 'var(--area-l1)' },
          { id: 'hab', label: 'Habilidades (hacer)', icon: 'Hammer', color: 'var(--area-pyd)' },
          { id: 'act', label: 'Actitudes (ser)', icon: 'Heart', color: 'var(--c-ok)' },
        ], items: [
          { id: 'p1', text: 'Conocer los tipos de madera', bucket: 'saber' },
          { id: 'p2', text: 'Conocer el precio de la madera en el aserradero', bucket: 'saber' },
          { id: 'p3', text: 'Medir y cortar con precisión', bucket: 'hab' },
          { id: 'p4', text: 'Calcular cuánto cobrar por una mesa', bucket: 'hab' },
          { id: 'p5', text: 'Cumplir con las fechas de entrega', bucket: 'act' },
          { id: 'p6', text: 'Tratar con respeto a sus clientes', bucket: 'act' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.4.4'], ambito: 'conocer', title: 'Cómo nace una buena idea productiva',
          prompt: 'Las buenas ideas no caen del cielo: se **construyen** con tres ingredientes de tu propia comunidad. Toca cada uno.' },
        { icon: 'Lightbulb', body: '**Necesidad + recurso + saber = idea productiva.** Luego se revisa con cuatro preguntas: ¿es útil?, ¿es posible con lo que hay?, ¿cuida la naturaleza?, ¿genera ingresos?', reveal: [
          { icon: 'Search', front: '1. Una necesidad', back: '¿Qué hace falta o qué compra la gente fuera? Ejemplo: en la aldea no venden pan y hay que ir al pueblo.' },
          { icon: 'Package', front: '2. Un recurso disponible', back: '¿Qué hay cerca? Tierra, agua de lluvia, frutas de temporada, lana, madera caída, un horno de la familia.' },
          { icon: 'Brain', front: '3. Un saber de la familia', back: '¿Qué sabe hacer alguien de tu casa? Tejer, hornear, sembrar, criar gallinas, reparar.' },
          { icon: 'ListChecks', front: 'Revisar la idea', back: '**Útil** (alguien la necesita), **posible** (con los recursos que hay), **cuida** la naturaleza y **genera ingresos**.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.4.4', 'pyd:1.2.1'], ambito: 'emprender', title: 'Ejemplo resuelto: de la necesidad a la idea',
          prompt: 'Mira cómo la familia de Rosa, en una aldea de Sololá, generó una idea productiva.' },
        { icon: 'Sprout', problem: 'La familia de Rosa tiene pocos ingresos. ¿Qué proyecto productivo podrían emprender con lo que tienen?',
          steps: [
            { text: '**Necesidad:** en el mercado del pueblo piden hierbas como cilantro, hierbabuena y chipilín, y a veces se acaban.' },
            { text: '**Recurso:** tienen un patio con buen sol y pueden recoger agua de lluvia en toneles.' },
            { text: '**Saber:** la abuela sabe sembrar hierbas y preparar abono con restos de cocina.', why: 'El saber de la abuela es parte del perfil emprendedor de la familia.' },
            { text: '**Idea:** un huerto familiar de hierbas para vender manojos los días de mercado.' },
            { text: '**Revisión:** útil (la gente las pide), posible (patio, agua, abono), cuida la naturaleza (abono orgánico, sin químicos fuertes) y genera ingresos (manojos cada semana).' },
          ],
          answer: 'Una idea productiva **realista**: une una necesidad del mercado, los recursos del patio y el saber de la abuela.',
          tip: 'Necesidad + recurso + saber → idea → revisar con las 4 preguntas.' },
      ),
      S.match(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.4.4'], ambito: 'emprender', prompt: 'Une cada situación de una familia con la **idea productiva** que mejor aprovecha sus recursos.',
          explain: 'Cada idea une una necesidad, un recurso y un saber que la familia ya tiene.' },
        { leftTitle: 'Situación de la familia', rightTitle: 'Idea productiva', pairs: [
          { id: 'i1', left: 'Tienen muchos árboles de jocote y mango que se pierden en temporada', leftIcon: 'Apple', right: 'Hacer y vender dulces y conservas de fruta' },
          { id: 'i2', left: 'La mamá teje y en la aldea no hay quien venda servilletas', leftIcon: 'Scissors', right: 'Tejer servilletas y bolsas para vender en el mercado' },
          { id: 'i3', left: 'Tienen un patio y el abuelo sabe criar gallinas', leftIcon: 'Egg', right: 'Vender huevos de gallinas criollas' },
          { id: 'i4', left: 'El hijo mayor sabe reparar bicicletas y muchos vecinos las usan', leftIcon: 'Bike', right: 'Un taller de reparación de bicicletas' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.4.4'], ambito: 'emprender',
          prompt: 'Una familia con pocos recursos, que vive cerca de un río y tiene una parcela pequeña, quiere mejorar sus ingresos. ¿Qué idea pasa **las cuatro preguntas** (útil, posible, cuida la naturaleza, genera ingresos)?',
          explain: 'Las hortalizas con riego cuidadoso son útiles, posibles con la parcela y el agua, cuidan el río si no se contamina, y generan ingresos semanales.' },
        { options: [
          { id: 'a', text: 'Sembrar hortalizas con riego por goteo y abono orgánico para vender en el mercado' },
          { id: 'b', text: 'Talar el bosque junto al río para vender la leña', feedback: 'Genera dinero una vez, pero daña el río y el bosque. No cuida la naturaleza.' },
          { id: 'c', text: 'Abrir una fábrica de carros', feedback: 'No es posible con los recursos de una familia con una parcela pequeña.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.4.4', 'pyd:1.2.1'], ambito: 'emprender',
          prompt: 'Piensa en tu comunidad y en tu familia. Propón **una idea de proyecto productivo** usando la fórmula (necesidad + recurso + saber) y di **una actitud** del perfil emprendedor que necesitarías.' },
        { minWords: 40, placeholder: 'En mi comunidad hace falta… Tenemos… En mi familia saben…',
          model: 'En mi comunidad hace falta pan porque hay que ir hasta el pueblo a comprarlo. Mi tía tiene un horno de leña y mi abuela sabe hacer pan dulce. Mi idea es hornear pan los sábados y venderlo casa por casa. La actitud que más necesitaríamos es la responsabilidad, para tener el pan listo cada sábado a la misma hora.',
          rubric: ['Nombré una necesidad real de mi comunidad', 'Dije qué recurso disponible usaríamos', 'Nombré un saber de mi familia', 'Mencioné una actitud del perfil emprendedor'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.2.1'], prompt: '"No rendirse y seguir intentando cuando las ventas bajan" es, para una persona emprendedora…' },
        { options: [
          { id: 'a', text: 'Una actitud' },
          { id: 'b', text: 'Un saber' },
          { id: 'c', text: 'Un producto' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.2.1', 'pyd:1.4.4'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Reparar bicicletas es un servicio.', answer: true },
          { text: 'Conocer los precios del mercado es una habilidad de las manos.', answer: false, why: 'Es un saber: algo que conoces.' },
          { text: 'Una buena idea productiva debe ser posible con los recursos disponibles.', answer: true },
          { text: 'Una idea que da dinero pero destruye el río es una buena idea productiva.', answer: false, why: 'Una buena idea también cuida los recursos naturales.' },
        ] },
      ),
      cierre({ areas: ['pyd'], cnb: ['pyd:1.2.1', 'pyd:1.4.4'] },
        ['Explico qué es emprender y la diferencia entre producto y servicio', 'Reconozco saberes, habilidades y actitudes del perfil emprendedor', 'Genero una idea productiva con la fórmula necesidad + recurso + saber'],
        ['Preguntaré en casa qué saberes tiene mi familia', 'Observaré en el mercado qué productos hacen falta']),
    ],
  }),
];
