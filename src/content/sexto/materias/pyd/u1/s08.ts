/** Productividad y Desarrollo · Unidad 1 · Semana 8. */
import { lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's08-pyd-1', title: 'Una práctica local de baja actividad', icon: 'Gauge', minutes: 13,
    gancho: '¿Qué ajuste voluntario puedes aplicar ahora mismo para reducir actividad opcional del dispositivo?',
    objetivos: ['Ejecutar, verificar y explicar una práctica reversible de baja actividad en esta app'],
    resumen: [
      'El modo de baja actividad desactiva el sonido opcional y activa movimiento reducido; ambos cambios quedan guardados en este dispositivo.',
      'Es una práctica voluntaria, local, accesible y reversible que reduce actividad opcional de la app; no garantiza ni cuantifica ahorro de energía.',
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
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'conocer', title: 'Una acción posible aquí', prompt: 'Lee qué práctica voluntaria realizarás dentro de la app.' },
        { icon: 'Gauge', body: 'El **modo de baja actividad** reduce actividad opcional de esta sesión: apaga sonidos de respuesta y usa movimiento reducido. Es una contribución modesta; no promete una cantidad de energía ahorrada.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', title: 'Elegir, actuar y comprobar', prompt: 'Aprende el procedimiento del modo de baja actividad antes de ejecutarlo.' },
        { icon: 'ListChecks', body: '**Observa** los ajustes. Si el modo no está activo, **actívalo**, verifica ambos cambios y decide si lo conservas o restauras. Si ya está activo, **inicia y completa 25 segundos de mantenimiento** y comprueba que siga activo.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', title: 'Modelo de verificación', prompt: 'Observa cómo Ana aplica el modo de baja actividad sin exagerar su efecto.' },
        { icon: 'Gauge', problem: 'Antes: sonido opcional activado y movimiento reducido desactivado.', steps: [
          { text: 'Ana elige voluntariamente **activar** la práctica.' },
          { text: 'Después comprueba: **sonido opcional desactivado** y **movimiento reducido activado**.' },
          { text: 'Explica que reduce actividad opcional de la app, sin prometer ni calcular ahorro.' },
          { text: 'Prueba **restaurar** y confirma que regresan los dos valores anteriores.' },
        ], answer: 'La evidencia es el cambio real y persistido de los ajustes, seguido de su verificación.', tip: 'Observar → activar → verificar → conservar o restaurar.' },
      ),
      S.order(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Con ayuda, ordena la ruta de activación del modo de baja actividad.', hint: 'Primero conoces el estado inicial; después del cambio debes verificarlo.', explain: 'Observar, activar y verificar demuestra una práctica ejecutada; si ya estaba activo, la app ofrece una ruta distinta de mantenimiento medido.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'g1', text: 'Observar sonido y movimiento antes del cambio' },
          { id: 'g2', text: 'Activar el modo de baja actividad' },
          { id: 'g3', text: 'Verificar los dos ajustes después del cambio' },
          { id: 'g4', text: 'Conservar el modo o restaurar el estado anterior' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'El modo ya está activo al entrar. ¿Qué práctica demuestra una acción voluntaria?', hint: 'Una instantánea idéntica no prueba una activación; busca una acción con duración comprobada.', explain: 'En esta ruta, la práctica queda comprobada al iniciar y completar 25 segundos mientras ambos ajustes permanecen activos.' },
        { options: [
          { id: 'a', text: 'Iniciar y completar 25 segundos de mantenimiento, y verificar que el modo siga activo' },
          { id: 'b', text: 'Marcarla completa de inmediato porque los ajustes ya coinciden', feedback: 'El estado inicial no demuestra que realizaste una práctica.' },
          { id: 'c', text: 'Afirmar una cantidad de ahorro durante la espera', feedback: 'La práctica no mide ni garantiza ahorro de energía.' },
        ], correct: ['a'] },
      ),
      S.lowActivity(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Ejecuta la ruta que corresponda para el **modo de baja actividad**: si no está activo, **actívalo y verifica el cambio**; si ya está activo, **inicia y completa 25 segundos de mantenimiento**. La activación puede conservarse o restaurarse. Ninguna ruta cuantifica ahorro.', explain: 'La app exige un cambio real de ajustes o un intervalo completo con el modo ya activo; una instantánea idéntica por sí sola no cuenta como acción.' },
        { activateLabel: 'Activar y verificar la práctica', maintenanceLabel: 'Mantener el modo durante 25 segundos', restoreLabel: 'Restaurar los dos ajustes anteriores' },
      ),
      S.write(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Explica la práctica que acabas de ejecutar: identifica si realizaste activación o mantenimiento, describe la verificación y, si activaste, indica si conservaste o restauraste el estado. No atribuyas una reducción que no mediste.', explain: 'Tu explicación acompaña la acción validada por la app; no la sustituye.' },
        { minWords: 24, placeholder: 'Mi ruta fue… Realicé… Verifiqué… Decidí…', model: 'Mi ruta fue activación. Cambié los dos ajustes, verifiqué sonido opcional apagado y movimiento reducido activo, y restauré el estado anterior sin afirmar un ahorro medido.', rubric: ['Identifico activación o mantenimiento', 'Nombro el estado verificado', 'Indico la decisión reversible cuando aplica', 'No cuantifico ahorro'] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'En otro dispositivo, activa el modo de baja actividad y verifica el procedimiento reversible antes de decidir si lo conservas.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'e1', text: 'Observar el estado inicial de sonido y movimiento' },
          { id: 'e2', text: 'Activar sonido opcional apagado y movimiento reducido' },
          { id: 'e3', text: 'Comprobar ambos estados después de la acción' },
          { id: 'e4', text: 'Conservar la práctica o restaurar el estado anterior' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Verificaste sonido opcional apagado y movimiento reducido activo, pero ahora necesitas audio accesible. ¿Qué decisión conserva el procedimiento reversible?' },
        { options: [
          { id: 'a', text: 'Restaurar el estado anterior y comprobar que el sonido regresa' },
          { id: 'b', text: 'Mantener el modo aunque impida el acceso que necesito' },
          { id: 'c', text: 'Decir que ahorré una cantidad que no medí' },
        ], correct: ['a'] },
      ),
    ],
  }),
];
