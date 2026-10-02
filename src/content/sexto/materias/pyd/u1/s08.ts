/** Productividad y Desarrollo · Unidad 1 · Semana 8. */
import { lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's08-pyd-1', title: 'Una práctica local de baja actividad', icon: 'Gauge', minutes: 13,
    gancho: '¿Qué ajuste voluntario puedes aplicar ahora mismo para reducir actividad opcional del dispositivo?',
    objetivos: ['Relacionar una práctica voluntaria de conservación conocida en la familia, comunidad o cultura con el recurso natural que protege, y ejecutar su adaptación en el modo de baja actividad'],
    resumen: [
      'El modo de baja actividad desactiva el sonido opcional y activa movimiento reducido; ambos cambios quedan guardados en este dispositivo.',
      'Es una práctica voluntaria, local, accesible y reversible que reduce actividad opcional de la app; no garantiza ni cuantifica ahorro de energía.',
      'Las prácticas de conservación varían entre familias, comunidades y culturas. Para evidenciar el indicador se describe solo una práctica que realmente se conoce; el ejemplo didáctico suministrado enseña, pero no acredita dominio.',
      'Una práctica explica qué recurso natural cuida y qué principio aplica. El modo de baja actividad es una adaptación contemporánea modesta de evitar actividad innecesaria.',
      'Verificar el estado después de actuar distingue una práctica ejecutada de una intención o un autorreporte.',
      'Si el modo ya está activo al entrar, mantenerlo voluntariamente durante 25 segundos y comprobar su estado constituye la práctica alternativa.',
      'Restaurar devuelve exactamente el estado previo de esos dos ajustes sin cambiar los demás.',
    ],
    media: {
      id: 's08-pyd-1-modo-baja-actividad', kind: 'diagram', title: 'Antes, después y restauración', aspect: '16:9',
      alt: 'Tres estados de ajustes: antes con sonido opcional activo y movimiento reducido inactivo; después con sonido apagado y movimiento reducido activo; restauración con los valores iniciales.',
      brief: 'Diagrama de interfaz en tres columnas conectadas por flechas: “Antes”, “Modo de baja actividad” y “Restaurado”. Mostrar controles accesibles de sonido opcional y movimiento reducido con iconos Lucide Volume2, VolumeX, Accessibility y RotateCcw, además de texto Activado/Desactivado para no depender del color. Incluir la nota “Práctica modesta; no cuantifica ahorro”. Target: public/media/s08-pyd-1-modo-baja-actividad.svg. Producción: SVG con viewBox 0 0 1600 900 y versión PNG de respaldo 1600×900 px. Accesibilidad: contraste AA, orden de lectura izquierda a derecha y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'conocer', title: 'Conservar sin inventar tradiciones', prompt: 'Lee el marco respetuoso para vincular cultura, recurso natural y acción.' },
        { icon: 'Leaf', body: 'Una práctica de conservación puede ser conocida en tu **familia, comunidad o cultura**, pero no todas las personas comparten las mismas. Nombra una que realmente conozcas o usa esta alternativa: **“Ejemplo didáctico suministrado: aprovechar la luz natural y apagar una lámpara que no se necesita”**. Este ejemplo evita uso innecesario de recursos naturales e insumos empleados para generar electricidad; no afirmes que es tradición de tu familia o comunidad.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', title: 'Del principio a una adaptación contemporánea', prompt: 'Aprende el procedimiento antes de ejecutar la práctica.' },
        { icon: 'ListChecks', body: '**Identifica** una práctica real o el ejemplo suministrado, **explica** qué recurso natural protege, **conecta** su principio de evitar actividad innecesaria con el modo de baja actividad y después **ejecuta y verifica** la ruta que muestre la app.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', title: 'Modelo con ejemplo suministrado', prompt: 'Observa cómo Ana usa el ejemplo sin atribuírselo a su cultura.' },
        { icon: 'Gauge', problem: 'Ana elige el ejemplo didáctico suministrado sobre aprovechar luz natural.', steps: [
          { text: 'Lo rotula como **ejemplo suministrado**, no como costumbre de su familia.' },
          { text: 'Explica que cuida recursos naturales e insumos usados para generar electricidad al evitar actividad innecesaria.' },
          { text: 'Lo adapta de forma contemporánea: activa el **modo de baja actividad** y verifica sus dos ajustes.' },
          { text: 'Decide conservarlo o restaurarlo sin prometer ni calcular una cantidad de ahorro.' },
        ], answer: 'La evidencia une procedencia honesta, recurso protegido, principio de conservación y acción comprobada.', tip: 'Identificar → explicar recurso → adaptar → ejecutar y verificar.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Selecciona las **dos rutas honestas** antes de crear tu evidencia cultural de conservación.', hint: 'Una ruta demuestra práctica propia, recurso y acción segura; la otra reconoce qué consulta falta sin fingir dominio.', explain: 'La evidencia elegible parte de una práctica genuinamente conocida, nombra el recurso natural y realiza una acción voluntaria segura. Si falta ese conocimiento, la ruta correcta es identificar a quién o qué fuente consultar y por qué; permite continuar, pero no acredita dominio.' },
        { multiple: true, options: [
          { id: 'known', text: 'Conozco una práctica de mi familia, nombro el recurso natural y realizo ahora una acción voluntaria segura' },
          { id: 'consult', text: 'Aún no conozco una práctica propia: indico a quién o qué fuente consultaré y por qué', icon: 'MessagesSquare' },
          { id: 'borrowed', text: 'Copio el ejemplo suministrado y afirmo que es tradición de mi comunidad', feedback: 'Un ejemplo didáctico enseña, pero no demuestra procedencia cultural propia.' },
          { id: 'unsafe', text: 'Conozco una práctica, pero ejecuto una acción riesgosa para demostrarla', feedback: 'La acción debe ser voluntaria, segura, accesible y verificable.' },
        ], correct: ['known', 'consult'] },
      ),
      S.cards(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Repasa qué revisará la persona docente en la evidencia compuesta.' },
        { cards: [
          { icon: 'Home', front: 'Procedencia', back: 'Una práctica que realmente conoces desde tu familia, comunidad o cultura; no una tradición inventada.' },
          { icon: 'Leaf', front: 'Recurso', back: 'El recurso natural que la práctica ayuda a proteger.' },
          { icon: 'ListChecks', front: 'Acción comprobada', back: 'Qué observaste antes, qué hiciste ahora y qué verificaste después.' },
        ] },
      ),
      S.culturalPractice(
        { id: 's08-pyd-1-6', fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Crea evidencia **desde tu cultura**: identifica una práctica de conservación que realmente conoces en tu familia o comunidad, nombra el recurso natural, registra antes, ejecuta ahora la adaptación voluntaria del **modo de baja actividad**, verifica sus ajustes y registra acción y después. Si aún no conoces una práctica propia, escribe **“necesito consultar”**: no afirmes dominio. Queda pendiente de revisión docente.' },
        { minWords: 30, consultationMinWords: 8, requiresLiveAction: true, rubric: ['La práctica es genuinamente conocida en mi contexto', 'Nombro el recurso natural', 'Realicé una acción segura ahora', 'Registro antes, acción y después sin inventar ahorro'], example: {
          culturalPractice: 'En mi familia aprovechamos la luz natural antes de encender una lámpara.', naturalResource: 'Cuidamos agua y otros recursos usados para generar electricidad.',
          beforeAction: 'Antes, el sonido opcional estaba activo.', actionReport: 'Activé voluntariamente el modo de baja actividad ahora.',
          afterAction: 'Después verifiqué sonido apagado y movimiento reducido activo.',
        } },
      ),
      S.explain(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', title: 'Antes de las salidas', prompt: 'Distingue qué registrarás según la ruta que elegiste.' },
        { icon: 'Route', body: 'Si conoces la práctica, conserva **procedencia, recurso natural, antes, acción segura y después**. Si necesitas consulta, registra **a quién o qué fuente consultarás y por qué**; no marques criterios que todavía no puedes demostrar.' },
      ),
      S.culturalPractice(
        { id: 's08-pyd-1-salida-a', fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Salida revisable: registra una práctica que realmente conoces desde familia, comunidad o cultura, el recurso natural y **antes → acción voluntaria segura realizada → después**. Si necesitas consulta, elige esa ruta, indica a quién o qué fuente consultar y por qué; podrás continuar sin recibir dominio todavía.' },
        { minWords: 18, consultationMinWords: 8, requiresLiveAction: false, rubric: ['Identifico procedencia cultural propia', 'Nombro recurso natural', 'Registro acción ejecutada', 'Incluyo antes y después'], example: {
          culturalPractice: 'En mi familia apagamos lámparas que quedan sin uso.', naturalResource: 'La práctica protege recursos naturales usados para producir electricidad.',
          beforeAction: 'Antes observé una actividad opcional encendida.', actionReport: 'Realicé una adaptación voluntaria y segura.', afterAction: 'Después verifiqué el estado cambiado.',
        } },
      ),
      S.culturalPractice(
        { id: 's08-pyd-1-salida-b', fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Segunda salida revisable: explica otra decisión de conservación desde una práctica realmente conocida en tu cultura, familia o comunidad; nombra el recurso natural y registra **antes, acción segura y después**. Si no conoces otra, usa la ruta de consulta y explica la fuente o persona que necesitas y por qué, sin afirmar dominio.' },
        { minWords: 18, consultationMinWords: 8, requiresLiveAction: false, rubric: ['Vinculo práctica cultural propia', 'Nombro recurso natural', 'Diferencio antes, acción y después', 'Justifico la decisión voluntaria'], example: {
          culturalPractice: 'En mi comunidad conozco aprovechar ventilación natural.', naturalResource: 'La práctica cuida recursos naturales asociados con la electricidad.',
          beforeAction: 'Antes comprobé el estado disponible.', actionReport: 'Elegí una acción accesible y voluntaria.', afterAction: 'Después verifiqué el resultado y decidí conservarlo.',
        } },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['pyd'], cnb: [], ambito: 'ser', prompt: 'Cierra sin calificar: reconoce con honestidad si tu vínculo cultural necesita conversación o revisión adicional.' },
        { statements: ['Describí solo una práctica que realmente conozco', 'Diferencié evidencia propia y ejemplo suministrado'], commitments: ['Consultaré con respeto si todavía no conozco una práctica de mi contexto'] },
      ),
    ],
  }),
];
