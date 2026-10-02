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
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', title: 'Guía con retroalimentación', prompt: 'Compara dos respuestas antes de crear la tuya.' },
        { icon: 'MessagesSquare', problem: 'Luis conoce una práctica de su familia; Sara solo conoce el ejemplo suministrado.', steps: [
          { text: 'Luis nombra la práctica que realmente conoce, el recurso y lo que observó antes.', why: 'Puede construir evidencia propia sin generalizarla.' },
          { text: 'Sara escribe “necesito consultar una práctica de mi contexto”.', why: 'Es honesto, pero todavía no demuestra dominio del indicador.' },
          { text: 'Ambos pueden ejecutar el modo de baja actividad ahora; solo la conexión propia completa queda pendiente de revisión docente.' },
        ], answer: 'La procedencia cultural propia no se sustituye con el ejemplo suministrado.', tip: 'Práctica propia → recurso → antes → acción → después.' },
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
        { minWords: 30, rubric: ['La práctica es genuinamente conocida en mi contexto', 'Nombro el recurso natural', 'Realicé una acción segura ahora', 'Registro antes, acción y después sin inventar ahorro'], example: {
          culturalPractice: 'En mi familia aprovechamos la luz natural antes de encender una lámpara.', naturalResource: 'Cuidamos agua y otros recursos usados para generar electricidad.',
          beforeAction: 'Antes, el sonido opcional estaba activo.', actionReport: 'Activé voluntariamente el modo de baja actividad ahora.',
          afterAction: 'Después verifiqué sonido apagado y movimiento reducido activo.',
        } },
      ),
      S.write(
        { id: 's08-pyd-1-salida-a', fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Salida revisable: resume tu práctica genuinamente conocida desde familia, comunidad o cultura, el recurso natural y tu registro **antes → acción ejecutada ahora con el modo de baja actividad → después**, incluida la verificación de sonido opcional. Si escribiste que necesitas consultar, no reclames dominio.' },
        { minWords: 18, placeholder: 'En mi contexto conozco… Recurso… Antes… Acción… Después…', model: 'En mi familia conozco aprovechar luz natural. Recurso: agua usada al generar electricidad. Antes había sonido; activé el modo; después verifiqué sonido apagado.', rubric: ['Identifico procedencia cultural propia', 'Nombro recurso natural', 'Registro acción ejecutada', 'Incluyo antes y después'] },
      ),
      S.write(
        { id: 's08-pyd-1-salida-b', fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Segunda salida revisable: explica una decisión accesible sobre conservar o restaurar el **modo de baja actividad** y enlázala con la práctica que realmente conoces, el recurso natural y lo verificado antes, durante la acción y después.' },
        { minWords: 18, placeholder: 'Práctica de mi contexto… Recurso… Antes… Acción… Después… Decidí…', model: 'La práctica familiar cuida recursos de generación. Antes registré sonido activo, realicé la acción y verifiqué el modo. Decidí restaurar por accesibilidad.', rubric: ['Vinculo práctica cultural propia', 'Nombro recurso natural', 'Diferencio antes, acción y después', 'Justifico conservar o restaurar'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['pyd'], cnb: [], ambito: 'ser', prompt: 'Cierra sin calificar: reconoce con honestidad si tu vínculo cultural necesita conversación o revisión adicional.' },
        { statements: ['Describí solo una práctica que realmente conozco', 'Diferencié evidencia propia y ejemplo suministrado'], commitments: ['Consultaré con respeto si todavía no conozco una práctica de mi contexto'] },
      ),
    ],
  }),
];
