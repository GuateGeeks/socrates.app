/** Productividad y Desarrollo · Unidad 1 · Semana 1. */
import { cierre, lesson, S } from '../../../../dsl';

export default [lesson({
  id: 's01-pyd-1', title: 'Necesidades y perfiles para emprender', icon: 'BriefcaseBusiness', minutes: 15,
  gancho: 'Un mapa muestra que varias familias recorren lejos para comprar alimentos frescos. ¿Basta con tener una idea o también importa quién puede llevarla adelante?',
  objetivos: ['Relacionar una necesidad de desarrollo con el perfil emprendedor requerido para una respuesta productiva'],
  resumen: [
    'El desarrollo mejora condiciones como alimentación, salud, educación, agua, ambiente y trabajo digno para toda la población.',
    'Un perfil emprendedor reúne saberes, habilidades y actitudes pertinentes para implementar una actividad productiva.',
    'Una respuesta responsable parte de evidencia sobre una necesidad y selecciona un perfil capaz de organizar recursos.',
  ],
  media: {
    id: 's01-pyd-1-necesidad-perfil', kind: 'diagram', title: 'De la necesidad al perfil', aspect: '16:9',
    alt: 'Mapa didáctico con un mercado lejano y una tabla que organiza saberes, habilidades y actitudes para una respuesta productiva.',
    brief: 'Diagrama horizontal 1600×900. A la izquierda, mapa ficticio rotulado CASO SIMULADO con viviendas, camino y mercado distante; a la derecha, tres columnas: SABERES, HABILIDADES y ACTITUDES. Incluir iconos descriptivos de libro, herramientas y manos colaborando. Sin respuestas completas, texto grande, contraste alto y patrones además de color.',
  },
  steps: [
    S.explain(
      { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:1.1.1'], title: 'Necesidades y desarrollo', prompt: 'El desarrollo se observa en condiciones de vida compartidas, no en la riqueza de unas pocas personas.' },
      { icon: 'TrendingUp', body: 'Alimentación, salud, educación, agua y saneamiento, vivienda, ambiente sano y trabajo digno son elementos relacionados. La pobreza aparece cuando varias necesidades básicas no pueden cubrirse; no es culpa de las personas.' },
    ),
    S.reading(
      { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.1.1'], prompt: 'Lee el caso simulado y reconoce la necesidad respaldada por datos.', hint: 'Distingue el dato de una suposición.', explain: 'Los datos describen una necesidad de acceso e ingresos; no explican por sí solos todas sus causas.' },
      { genre: 'Caso simulado', heading: 'Aldea El Encuentro', passage: 'En un registro didáctico de 30 familias, 18 recorren más de una hora para comprar hortalizas y 12 reportan ingresos inestables. Ocho personas saben cultivar y cuatro conocen ventas en el mercado. No se ha medido la disponibilidad de tierra ni de agua.', questions: [{ q: '¿Qué necesidad está respaldada?', options: [{ id: 'a', text: 'Acceso cercano a alimentos frescos e ingresos más estables' }, { id: 'b', text: 'Construir un aeropuerto' }, { id: 'c', text: 'Afirmar que todas las familias poseen terreno' }], correct: 'a' }] },
    ),
    S.explain(
      { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.2.1'], title: 'Perfil emprendedor', prompt: 'Para implementar una respuesta productiva se determina qué perfil emprendedor hace falta.' },
      { icon: 'UserRoundCog', body: 'El perfil combina **saberes** (qué conoce), **habilidades** (qué sabe hacer) y **actitudes** (cómo trabaja). Debe corresponder a la necesidad y a los recursos comprobados.', reveal: [
        { icon: 'Brain', front: 'Saberes', back: 'Conocer cultivo, costos, higiene o necesidades de clientes.' },
        { icon: 'Wrench', front: 'Habilidades', back: 'Sembrar, calcular, registrar, comunicar y organizar tareas.' },
        { icon: 'Handshake', front: 'Actitudes', back: 'Responsabilidad, honestidad, perseverancia y cooperación.' },
      ] },
    ),
    S.ejemplo(
      { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.1.1', 'pyd:1.2.1'], title: 'Modelo: necesidad y perfil', prompt: 'Observa cómo la evidencia orienta el perfil emprendedor de un proyecto productivo.' },
      { icon: 'ListChecks', problem: 'El caso muestra dificultad para conseguir hortalizas y personas con saberes de cultivo.', steps: [
        { text: 'Necesidad respaldada: acceso cercano a hortalizas e ingresos más estables.' },
        { text: 'Respuesta posible: venta semanal de hortalizas, sujeta a comprobar recursos.' },
        { text: 'Saberes: cultivo y precios; habilidades: sembrar y vender; actitudes: responsabilidad y cooperación.' },
        { text: 'Dato pendiente: disponibilidad de tierra, agua y demanda.' },
      ], answer: 'El perfil se elige por la necesidad y las tareas reales del proyecto, no por estereotipos.' },
    ),
    S.sort(
      { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.2.1'], prompt: 'Clasifica el perfil emprendedor para responder a la necesidad del caso con un proyecto productivo.', hint: 'Conocer es saber; una habilidad se demuestra al hacer; una actitud orienta la conducta.', explain: 'Un perfil útil combina las tres dimensiones.' },
      { buckets: [{ id: 's', label: 'Saberes', icon: 'Brain' }, { id: 'h', label: 'Habilidades', icon: 'Wrench' }, { id: 'a', label: 'Actitudes', icon: 'Handshake' }], items: [
        { id: '1', text: 'Conocer épocas de siembra', bucket: 's' }, { id: '2', text: 'Calcular costos', bucket: 'h' },
        { id: '3', text: 'Cumplir turnos acordados', bucket: 'a' }, { id: '4', text: 'Conocer normas de higiene', bucket: 's' },
      ] },
    ),
    S.choice(
      { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.1.1'], prompt: '¿Qué conclusión usa los datos sin culpar a las familias?', hint: 'Describe condiciones y límites.', explain: 'La necesidad se analiza con evidencia y causas posibles, no como defecto personal.' },
      { options: [{ id: 'a', text: 'Hay barreras de acceso e ingresos; faltan datos de recursos antes de decidir' }, { id: 'b', text: 'Las familias son pobres porque no se esfuerzan' }, { id: 'c', text: 'Todas tienen tierra y agua disponibles' }], correct: ['a'] },
    ),
    S.match(
      { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.1.1', 'pyd:1.2.1'], prompt: 'Relaciona cada necesidad de desarrollo con el perfil emprendedor pertinente para una respuesta productiva.' },
      { pairs: [
        { id: 'a', left: 'Alimentos frescos lejanos', right: 'Saber cultivar, organizar entregas y trabajar con responsabilidad' },
        { id: 'b', left: 'Bicicletas sin reparación cercana', right: 'Conocer mecanismos, usar herramientas y atender con honestidad' },
        { id: 'c', left: 'Fruta de temporada se desperdicia', right: 'Conocer conservación, calcular costos y cooperar en higiene' },
      ] },
    ),
    S.choice(
      { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.1.1', 'pyd:1.2.1'], prompt: 'Un caso simulado muestra poco acceso a reparación de bicicletas. ¿Qué proyecto y perfil emprendedor responden mejor a esa necesidad de desarrollo?' },
      { options: [{ id: 'a', text: 'Taller básico: saber mecánica, reparar con seguridad y cumplir acuerdos' }, { id: 'b', text: 'Venta de adornos: saber colores y no revisar la necesidad' }, { id: 'c', text: 'Prometer una fábrica sin recursos ni habilidades' }], correct: ['a'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.1.1', 'pyd:1.2.1'], prompt: 'Una población necesita empleo digno y tiene demanda de pan. ¿Qué opción relaciona la necesidad con un perfil emprendedor completo para un proyecto productivo?' },
      { options: [{ id: 'a', text: 'Conocer recetas y costos, saber hornear y vender, actuar con higiene y responsabilidad' }, { id: 'b', text: 'Tener entusiasmo sin saberes ni habilidades' }, { id: 'c', text: 'Culpar a las familias por sus ingresos' }], correct: ['a'] },
    ),
    S.sort(
      { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.1.1', 'pyd:1.2.1'], prompt: 'Comprueba qué elementos pertenecen al perfil emprendedor de un proyecto productivo que atiende una necesidad de desarrollo.' },
      { buckets: [{ id: 'perfil', label: 'Perfil pertinente' }, { id: 'no', label: 'No demuestra pertinencia' }], items: [
        { id: 'a', text: 'Saber relacionado con el producto', bucket: 'perfil' }, { id: 'b', text: 'Habilidad para una tarea necesaria', bucket: 'perfil' },
        { id: 'c', text: 'Actitud responsable y cooperativa', bucket: 'perfil' }, { id: 'd', text: 'Promesa sin datos ni recursos', bucket: 'no' },
      ] },
    ),
    cierre({ areas: ['pyd'], cnb: ['pyd:1.1.1', 'pyd:1.2.1'] }, ['Relacioné una necesidad respaldada con saberes, habilidades y actitudes pertinentes'], ['Revisaré qué datos faltan antes de proponer un proyecto']),
  ],
})];
