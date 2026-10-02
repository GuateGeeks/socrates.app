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
      'Las prácticas de conservación varían entre familias, comunidades y culturas. Se describe solo una práctica que realmente se conoce, o se usa el ejemplo didáctico suministrado sin afirmar que pertenece a la propia comunidad.',
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
      S.order(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Con ayuda, ordena la ruta que conecta una práctica cultural o suministrada con un recurso natural y el modo de baja actividad.', hint: 'La procedencia y el recurso se explican antes de adaptar y ejecutar.', explain: 'La conexión es honesta cuando no inventa pertenencia cultural, nombra el recurso y termina en una acción verificada.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'g1', text: 'Identificar una práctica que conozco o rotular el ejemplo suministrado' },
          { id: 'g2', text: 'Explicar el recurso natural que ayuda a proteger' },
          { id: 'g3', text: 'Conectar el principio con el modo de baja actividad' },
          { id: 'g4', text: 'Ejecutar y verificar la acción reversible' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Usas el ejemplo suministrado de aprovechar luz natural. ¿Qué explicación y acción conservan su sentido?', hint: 'Debe nombrar el recurso natural y terminar en una acción comprobada.', explain: 'La relación válida conecta evitar actividad innecesaria con una adaptación contemporánea modesta y verificable.' },
        { options: [
          { id: 'a', text: 'Nombrar los recursos usados al generar electricidad, activar o mantener el modo de baja actividad y verificarlo' },
          { id: 'b', text: 'Decir que todas las familias practican lo mismo y no realizar acción', feedback: 'Generaliza una cultura y no ejecuta la adaptación.' },
          { id: 'c', text: 'Afirmar una cantidad garantizada de ahorro', feedback: 'La práctica no mide ni garantiza ahorro de energía.' },
        ], correct: ['a'] },
      ),
      S.write(
        { id: 's08-pyd-1-7', fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Prepara el vínculo que aplicarás. Identifica una práctica real de conservación que conozcas en tu familia, comunidad o cultura, **o escribe “ejemplo suministrado”** y usa aprovechar luz natural. Explica qué recurso natural protege y cómo su principio se adapta hoy al **modo de baja actividad**. No afirmes que el ejemplo suministrado pertenece a tu comunidad.', explain: 'Este registro revisable documenta procedencia, recurso y adaptación; la acción real se ejecuta en el paso siguiente.' },
        { minWords: 24, placeholder: 'Práctica real que conozco / ejemplo suministrado… Recurso natural… Adaptación contemporánea…', model: 'Uso el ejemplo suministrado de aprovechar luz natural. Ayuda a cuidar recursos naturales e insumos usados para generar electricidad. Adapto su principio evitando actividad opcional con el modo de baja actividad, sin afirmar que sea tradición de mi familia.', rubric: ['Aclaro si es práctica conocida o ejemplo suministrado', 'Nombro el recurso natural protegido', 'Conecto el principio con el modo de baja actividad', 'Evito estereotipos y cifras no medidas'] },
      ),
      S.lowActivity(
        { id: 's08-pyd-1-6', fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Ahora ejecuta la **adaptación contemporánea**: activa y verifica el **modo de baja actividad**, con sonido opcional desactivado y movimiento reducido activo. Si ya está activo, completa 25 segundos de mantenimiento. Antes de comprobar puedes conservarlo o restaurar el estado anterior. Una instantánea idéntica por sí sola no demuestra acción; la app guarda un comprobante local y ninguna ruta cuantifica ahorro.', explain: 'La app exige un cambio real respaldado por comprobante o un intervalo completo con el modo ya activo.' },
        { activateLabel: 'Activar y verificar la práctica', maintenanceLabel: 'Mantener el modo durante 25 segundos', restoreLabel: 'Restaurar antes de comprobar' },
      ),
      S.order(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Con el **ejemplo suministrado** de aprovechar luz natural, ordena cómo vincular cultura y **recurso natural** con una adaptación: activa el modo de baja actividad y verifica el procedimiento reversible.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'e1', text: 'Rotularlo como ejemplo suministrado, no como tradición propia' },
          { id: 'e2', text: 'Nombrar el recurso natural relacionado con generar electricidad' },
          { id: 'e3', text: 'Activar el modo de baja actividad como adaptación contemporánea' },
          { id: 'e4', text: 'Verificar los ajustes y decidir si conservar o restaurar' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Una práctica conocida en tu familia o comunidad cuida un **recurso natural** evitando uso innecesario. Tras adaptarla, verificaste sonido opcional apagado y movimiento reducido activo. Ahora necesitas audio accesible: ¿cómo restauras el estado anterior sin perder el principio cultural de la acción contemporánea?' },
        { options: [
          { id: 'a', text: 'Restaurar el estado anterior y comprobar el sonido; conservar el recurso también exige una adaptación accesible' },
          { id: 'b', text: 'Mantener el modo aunque impida el acceso que necesito' },
          { id: 'c', text: 'Decir que ahorré una cantidad que no medí' },
        ], correct: ['a'] },
      ),
    ],
  }),
];
