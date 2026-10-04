# Sistema de diseño — animación e interacción

Galería viva en la app: **Ajustes → Sistema de diseño** (`#/sistema`): colores, componentes, cada preset de movimiento reproducible, sonidos, estados de la mascota y cada actividad en un sandbox.

## Tokens (`src/design-system/tokens.css`)
- **Áreas**: colores tomados de la rueda del CNB (Fig. 2): `--area-l1 … --area-fc`. Centro/Tema Generador = `--c-maiz`.
- **Feedback**: `--c-ok`, `--c-bad`, `--c-hint` (+ versiones `-soft`).
- **Tipografía**: Nunito (redondeada, legible) con respaldo del sistema; escala `--fs-xs … --fs-3xl`.
- **Espaciado** escala 4 (`--sp-*`), **radios** `--r-*`, **elevación** `--e-*`.
- **Táctil**: `--tap-min: 48px`; botones con profundidad física (`--press-depth`) que se "hunden" al tocar.
- Modo **oscuro** automático y forzable; `safe-area` para teléfonos con muesca.

### Apariencia compartida y AWS

`Appearance` aplica el tema una sola vez, desde la raíz de la aplicación. Durante el onboarding usa el perfil; en cada programa conserva las preferencias existentes de ese programa. Claro explícito declara `color-scheme: only light`, para que el navegador no aplique su oscurecimiento automático sobre superficies claras.

Los colores de feedback (`--c-ok`, `--c-bad`) sirven para texto y bordes y se aclaran en oscuro. Las insignias que conservan texto blanco usan `--c-ok-fill` y `--c-bad-fill`. Los chips sólidos y números sobre colores curriculares oscurecen su relleno para conservar la legibilidad. AWS usa `--c-accent`, `--c-accent-soft`, `--c-accent-fill` y `--c-on-accent`.

Las lecciones AWS ofrecen **Explorar → Practicar → Comprobar**. El lector permite avanzar por secciones y consultar el texto completo. Las prácticas de `src/aws/practice.ts` se vinculan por ID a cuatro lecciones del curso publicado: `cloud-value`, `shared-responsibility`, `global-infrastructure` y `cost-tools`. Son formativas, admiten toque/teclado y no registran resultados de examen. Las respuestas y la práctica se conservan al cambiar de etapa durante la sesión; el cuestionario mantiene su mejor puntuación entre intentos.

`npm run test:ui` ejecuta pruebas de contraste y de navegación/interacción con Playwright. Requiere Chromium de Playwright y sus bibliotecas del sistema. La prueba reemplaza solamente los límites de contenido remoto, analítica y sincronización para evitar escrituras en Firebase. Verifica las seis combinaciones de tema sistema/aplicación, cambios de programa, controles nativos, las cuatro prácticas, cuestionarios, pantallas CNB y tamaños móvil/tableta/escritorio. Guarda capturas en `socrates-interface-screens` dentro del directorio temporal del sistema.

## Movimiento (`src/design-system/motion.ts`)
Tres capas; los componentes piden **intenciones**, nunca números:

| Duraciones | ms | Curvas |
|---|---|---|
| instant | 90 | standard `cubic-bezier(.2,0,0,1)` |
| fast | 160 | enter `cubic-bezier(0,0,0,1)` |
| base | 240 | exit `cubic-bezier(.3,0,1,1)` |
| slow | 420 | spring `cubic-bezier(.34,1.56,.64,1)` |
| epic | 900 | |

**Presets**: fadeIn, fadeOut, rise, slideInRight/Left, sheetUp, pop, popIn, press, shake, wiggle, glowOk, pulse, float, stamp.

**Semántica pedagógica → preset**

| Intención | Preset | Cuándo |
|---|---|---|
| `feedback.correct` | pop | respuesta correcta |
| `feedback.incorrect` | shake | respuesta incorrecta (suave, nunca castiga) |
| `feedback.hint` | wiggle | pista / error de límite |
| `select` | press | tocar una opción |
| `enter.screen` / `enter.step` / `enter.item` | rise / slideInRight / popIn | navegación y aparición |
| `reward.badge` | stamp | estrellas e insignias |
| `attention` / `idle.mascot` | pulse / float | siguiente lección, mascota |

Utilidades: `play()`, `stagger()`, `flip()` (reordenamientos), `countUp()` (XP). **Movimiento reducido** (sistema o ajuste): todo degrada a fundidos ≤160 ms.

## Retroalimentación multisensorial (`feedback.ts`)
Sonidos **sintetizados** con Web Audio (sin archivos, offline): `tap, select, drop, correct` (arpegio de marimba), `incorrect` (suave), `hint, complete, badge, tick` + `marimba(freq)` con escala Do mayor. Háptica con `navigator.vibrate`. Intención única: `feedback('correct')` = sonido + vibración.

## Patrones de interacción
1. **Todo arrastrable también funciona con toque-toque** (`useDragDrop`): tocar ficha → tocar destino. Clave en pantallas pequeñas y accesibilidad.
2. **Comprobar → retroalimentación → Continuar** en una barra inferior fija (alcance del pulgar); verde/rojo/violeta según estado.
3. **Error formativo**: mensajes específicos por distractor/error frecuente (`misconceptions`, `feedback` por opción); tras 2 intentos se ofrece **Ver solución** con explicación.
4. **Andamiaje retirable**: las actividades tienen `scaffold` en Construir y se retira en el Reto.
5. **Teclado numérico propio** (no abre el teclado del sistema que tapa la actividad).
6. **Racha de aciertos** 🔥 en la lección, **estrellas**, **XP con conteo animado**, **confeti** con colores de las áreas.
7. **Mascota Tzunún** (original) con estados: happy, think (pistas), cheer (logros), oops (salir), wave (bienvenida).

## Componentes
`Button` (primary/secondary/ghost/ok/bad/maiz · sm/md/lg), `Card`, `Chip`, `ProgressBar`, `Ring`, `Tile`, `Toggle`, `Rich` (markdown mínimo seguro), `Mascot`, `confetti()`, `TemaWheel`.

## Íconos (Lucide)
- Biblioteca **Lucide** (lucide-react, ISC): 24 × 24, trazo 2 px, extremos redondeados; combina con la tipografía redondeada.
- Uso: `<Icon name="BookOpen" size={20} />` o `<Glyph icon="Leaf" emoji="🌿" />` (el ícono tiene prioridad; el emoji queda como respaldo lúdico).
- Áreas, fases, ámbitos, unidades, insignias, pestañas y la mayoría de fichas/opciones usan íconos. El contenido declara nombres (`icon`, `leftIcon`, `rightIcon`).
- `npm run icons` escanea el código, verifica que cada nombre exista y genera `icons.generated.ts` con **solo** los íconos usados.

## Medios (maquetas de producción)
- `MediaSlot` muestra el recurso real si existe en `src/media/assets.ts`; si no, una **maqueta** con degradado del color de la semana, ícono del tipo (imagen, video, animación, diagrama, audio), duración y el texto "Próximamente".
- Tocar la maqueta muestra "Aquí verás…" (texto alternativo). Con **Ajustes → Modo productor** se ve la **ficha de producción** completa.
- **Perfil → Medios por producir**: catálogo filtrable con avance de producción y exportación CSV/JSON para el equipo audiovisual.

## Patrones de validación del aprendizaje
- **Comprobar** (boleto de salida): 2 ítems calificados al final de cada lección, sin pistas.
- **Reto semanal**: 8-10 ítems nuevos, un intento, 70 % para la medalla; resultados por indicador y recomendaciones de repaso.
- **Semana de validación**: evaluaciones por área armadas con los bancos de las 8 semanas + portafolio con autoevaluación.
- **Repaso inteligente**: lo que falló vuelve en 1, 3, 7, 16 y 35 días.
