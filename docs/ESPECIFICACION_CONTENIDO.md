# Especificación de contenido — Socrates Aprende, Sexto Primaria

Guía obligatoria para quien escribe semanas del ciclo escolar. **La semana modelo es `src/content/sexto/semanas/s01.ts`: léela completa antes de empezar e imita su nivel de calidad, estructura y tono.**

## 1. El año
- 40 semanas = 4 unidades × 10 semanas. Semanas 1-8 de cada unidad: **aprendizaje**; semana 9: **proyecto integrador**; semana 10: **validación** (se genera sola a partir de los bancos, no se escribe).
- Numeración global: Unidad 1 = semanas 1-10, Unidad 2 = 11-20, Unidad 3 = 21-30, Unidad 4 = 31-40.
- Temas ODEC por unidad: 1 *Conociendo nuestras raíces*, 2 *Consolidando nuestras relaciones*, 3 *Valorando nuestra convivencia*, 4 *Fortaleciendo nuestro futuro*. El tema generador de cada semana debe conectar con el de su unidad.
- Contenidos asignados a cada semana: `node scripts/week-brief.mjs <n>` (fuente: `src/content/sexto/plan.json`).

## 2. Archivo de una semana
Cada semana vive en `src/content/sexto/semanas/sNN.ts` (ya existe un borrador; **reemplázalo completo**). Usa el DSL (`import { S, cierre, lesson, semana } from '../../dsl'`).

```ts
export default semana({
  id: 'sNN', unidad: U, semana: NN, kind: 'aprendizaje',            // o 'proyecto'
  temaGenerador: 'Frase corta que integra la semana', title: 'Igual o similar', subtitle: 'Qué se aprende (≤ 70 caracteres)',
  icon: 'NombreLucide', color: 'var(--area-xxx)',                    // color del área protagonista
  contexto: '2-4 oraciones con una situación real de Guatemala que da sentido a la semana (≥ 80 caracteres).',
  ejes: ['sostenible', ...],                                          // multiculturalidad | equidad | valores | vida-familiar | vida-ciudadana | sostenible | seguridad | trabajo | tecnologia
  media: { ...MediaSlot de portada... },
  badge: { id: 'medalla-sNN', name: 'Nombre atractivo', icon: 'Lucide', desc: 'Completaste la semana NN y superaste su reto' },
  lessons: [ día1, día2, día3, día4, reto ],
  bank: [ 10-12 ítems calificados ],
});
```

## 3. Lecciones de aprendizaje (días 1-4)
`lesson({ id: 'sNN-dK-slug', title, icon, minutes: 10-15, day: K, gancho, objetivos: [2-4], resumen: [2-4], media, steps })`
- **id** empieza con `sNN-dK-`. Todos los ids (lecciones, medios) son únicos en el año.
- **gancho**: pregunta cercana a la vida del niño que activa saberes previos.
- **objetivos**: "Hoy aprenderás a…" en lenguaje de niño, sin "el estudiante".
- **resumen**: ideas clave correctas y autosuficientes (se guardan en el Cuaderno del estudiante).
- **7 a 10 pasos** que sigan el ciclo E-A-E:
  1. `explorar` (1): partir del contexto/saberes previos. Suele ser `explain` con tarjetas `reveal`, o una actividad corta de predicción.
  2. `construir` (2-4): manipular y descubrir: sort, match, order, fill, slider, maya, loom, polygon, coord, chart, rhythm, recipe, highlight, reading, cards…
  3. `aplicar` (1-2): reto en contexto (problema, dilema, lectura, producción escrita).
  4. `comprobar` (2): **boleto de salida**: actividades CALIFICADAS, sin `hint`, que validan lo enseñado en ESTA lección.
  5. `reflexionar` (1): `cierre(...)` con 2-3 afirmaciones de autoevaluación y 3 compromisos.
- **Enseña antes de evaluar**: todo lo que se pregunta en `comprobar`/reto/banco debe haberse explicado o descubierto antes.
- Cada paso lleva `areas` (primera = área principal) y `cnb` (ids de CONTENIDO `area:x.y.z` preferentemente). Las referencias CNB deben corresponder a lo que realmente trabaja el paso.
- **Multidisciplinariedad**: mezcla áreas dentro de una misma lección y, cuando sea natural, dentro del mismo paso (p. ej. porcentajes con datos de población; lectura sobre derechos humanos; ritmo + fracciones).
- **Variedad**: en una semana usa al menos 10 tipos de actividad distintos. No repitas el mismo tipo más de 2 veces seguidas.
- `hint` = pista que orienta sin dar la respuesta. `explain` = el porqué, aparece tras responder.
- Distractores con `feedback` específico para errores frecuentes.

## 4. Reto semanal (día 5)
`lesson({ id: 'sNN-d5-reto', kind: 'reto', day: 5, title: 'Reto de la semana NN', icon: 'Trophy', minutes: 10-15, objetivos, resumen, media, steps })`
- 8 a 10 ítems **calificados**, todos `fase: 'comprobar'`, sin `hint`, cubriendo todas las áreas de la semana. Ítems NUEVOS (no copies los de las lecciones). Se aprueba con 70 %.

## 5. Banco de ítems (`bank`)
- 10 a 12 ítems calificados, `fase: 'comprobar'`, distintos de los del reto y de las lecciones. `areas[0]` es el área principal: el banco debe cubrir **al menos 5 áreas principales distintas** (idealmente todas las de la semana). Se usan para armar la evaluación de unidad.

## 6. Semana de proyecto (semanas 9, 19, 29, 39)
- `kind: 'proyecto'`, 5 lecciones con `kind: 'proyecto'`, días 1-5: (1) Planificar e investigar, (2) Diseñar, (3) Crear/producir, (4) Presentar/compartir, (5) Evaluar y mejorar.
- La lección 1 incluye una actividad `project` con la guía completa (meta, pasos, evidencia, rúbrica). Las demás combinan actividades (short-answer, chart, reading, dilemma, flashcards, reflection…) que hagan avanzar el proyecto.
- El proyecto integra lo aprendido en las 8 semanas de la unidad, resuelve una necesidad real de la comunidad y referencia contenidos procedimentales y actitudinales de varias áreas (especialmente Productividad y Desarrollo, Comunicación y Lenguaje, Expresión Artística y Formación Ciudadana). Mismos campos de lección (icon, objetivos, resumen, media). Sin `bank`.

## 7. Cobertura del plan
**Todo contenido asignado a la semana en `plan.json` debe aparecer en el `cnb` de al menos un paso de esa semana (lecciones, reto o banco)** y ese paso debe trabajarlo de verdad. El validador lo comprueba. Si un contenido es actitudinal o procedimental difícil de "calificar", trabájalo con dilema, reflexión, short-answer, project, pulse o cards.

## 8. Medios (imágenes, video, audio, animación, diagramas)
Aún no existen: se muestran como maquetas con su ficha de producción. Cada lección tiene `media` (principal) y **al menos 2 pasos por semana** llevan `media` propio.
```ts
media: { id: 'sNN-dK-algo', kind: 'image' | 'video' | 'animation' | 'diagram' | 'audio', title: 'Título visible',
  alt: 'Qué verá/oirá el niño (texto accesible)',
  brief: 'Ficha de producción ≥ 60 caracteres: qué mostrar exactamente, encuadre/estilo, textos en pantalla, narración, referencias de Guatemala, qué evitar.',
  duration: 45 /* s, para video/animación/audio */, aspect: '16:9' | '4:3' | '1:1' | '9:16' | '3:4' }
```
Los briefs deben ser producibles por un ilustrador o videógrafo sin más contexto. Nada de imágenes de violencia explícita, marcas comerciales ni personas reales identificables.

## 9. Íconos (Lucide)
Usa nombres PascalCase de https://lucide.dev en `icon`, `leftIcon`, `rightIcon` (opciones, fichas, cubetas, tarjetas, lecciones, semanas, insignias). Prefiere íconos a emoji. Lista segura: 
Activity, AlarmClock, AlignJustify, Anchor, Apple, Archive, Atom, Award, Baby, Backpack, BadgeCheck, Banknote, BarChart3, Beaker, Bike, Bird, Blocks, Bone, Book, BookOpen, Bookmark, Brain, Briefcase, Brush, Bug, Building, Building2, Bus, Calculator, Calendar, CalendarDays, Camera, Car, Carrot, Castle, Cat, Check, Church, Circle, CircleDot, Clipboard, ClipboardCheck, ClipboardList, Clock, Cloud, CloudRain, CloudSun, Coffee, Coins, Compass, Construction, Copy, Cpu, Crown, Diamond, Dna, Dog, DollarSign, Droplet, Droplets, Drum, Dumbbell, Ear, Earth, Egg, Eye, EyeOff, Factory, Feather, FileText, Film, Fish, Flag, Flame, FlaskConical, Flower, Flower2, Footprints, Fuel, Gavel, Gem, Gift, Glasses, Globe, GraduationCap, Grape, Guitar, Hammer, Hand, HandHeart, Handshake, HardHat, Headphones, Heart, HeartHandshake, HeartPulse, Hexagon, History, Home, Hourglass, Image, Info, Key, Landmark, Languages, Laptop, Layers, Leaf, Library, Lightbulb, LineChart, Link, List, ListChecks, ListOrdered, Lock, Magnet, Mail, Map, MapPin, Maximize2, Medal, Megaphone, MessageCircle, MessagesSquare, Mic, Microscope, Milk, Minus, Monitor, Moon, Mountain, MountainSnow, Music, Music2, Newspaper, Notebook, NotebookPen, Package, Paintbrush, Palette, PartyPopper, PenLine, PenTool, Pencil, Percent, PersonStanding, Phone, Pickaxe, PieChart, PiggyBank, Pill, Plane, Plus, Puzzle, Radio, Rainbow, Recycle, RefreshCw, Rocket, RotateCw, Route, Ruler, Sailboat, Salad, Satellite, Scale, School, Scissors, ScrollText, Search, Shapes, Shell, Shield, ShieldCheck, Ship, Shirt, ShoppingBasket, ShoppingCart, Shovel, Sigma, Signpost, Slash, Smartphone, Smile, Snowflake, Sparkles, Sprout, Square, Star, Stethoscope, Store, Sun, Sunrise, Sunset, Sword, Syringe, Target, Tent, TestTube, Thermometer, ThumbsUp, Timer, Tractor, Train, Trash2, TreeDeciduous, TreePine, Trees, TrendingUp, Triangle, Trophy, Truck, Tv, Umbrella, User, Users, Utensils, Video, Volume2, VolumeX, Vote, Wallet, Waves, Wheat, Wind, Wrench, X, Zap.

## 10. Actividades disponibles (props)
Consulta la interfaz exacta en `src/activities/<tipo>.tsx`. Resumen:
| DSL | Tipo | Props clave | Calificada |
|---|---|---|---|
| `S.explain` | explain | `body`, `icon?`, `reveal?: {icon?, front, back}[]` | no |
| `S.ejemplo` | worked-example | `problem`, `steps: {text, why?}[]` (≥2), `answer?`, `tip?`, `icon?` — ejemplo resuelto que se revela paso a paso | no |
| `S.choice` | choice | `options: {id, text, icon?, feedback?}[]`, `correct: string[]`, `multiple?` (obligatorio si hay >1 correcta), `layout?: 'grid'`, `stimulus?` | sí |
| `S.tf` | true-false | `statements: {text, answer: boolean, why?}[]` (incluye V y F) | sí |
| `S.sort` | sort | `buckets: {id, label, icon?, color?}[]`, `items: {id, text, icon?, bucket, feedback?}[]`, `layout?: 'grid2'` | sí |
| `S.order` | order | `items` en el orden CORRECTO (≥3), `labels?: {start, end}` | sí |
| `S.match` | match | `pairs: {id, left, right, leftIcon?, rightIcon?}[]`, `leftTitle?`, `rightTitle?` (textos de la derecha únicos) | sí |
| `S.fill` | fill-blank | `text` con `[[respuesta]]` o `[[resp|alternativa]]`, `distractors?` (nunca iguales a una respuesta) | sí |
| `S.highlight` | highlight | `text` con objetivos entre `{llaves}`, `target?` (p. ej. "verbos") | sí |
| `S.reading` | reading | `passage` (párrafos separados por línea en blanco), `heading?`, `genre?`, `questions: {q, options:{id,text}[], correct, why?}[]` (literales, inferenciales y críticas) | sí |
| `S.number` | number-input | `answer`, `unit?`, `allowDecimal?`, `allowFraction?`, `allowNegative?`, `tolerance?`, `stimulus?`, `misconceptions?: {value, msg}[]` | sí |
| `S.slider` | slider | `min, max, step, answer, start?, unit?, visual: 'line'|'thermometer'|'fraction'|'percent', parts?, display?: 'number'|'fraction'|'percent', ticks?` (answer alcanzable con step) | sí |
| `S.maya` | maya-number | `mode: 'build'|'read'`, `target`, `levels?`, `scaffold?`, `longCount?` | sí |
| `S.loom` | symmetry-loom | `half: (number|null)[][]` (mitad izquierda), `palette: string[]`, `motif?` | sí |
| `S.polygon` | polygon-lab | `sides` 3-10, `ask: 'triangles'|'sum'|'interior-regular'`, `scaffold?` | sí |
| `S.coord` | coordinate-map | `range`, `markers?: {id,label,emoji,x,y}[]`, `task: {kind:'place',x,y,emoji,label} | {kind:'identify',markerId}` | sí |
| `S.chart` | chart-builder | `categories: {id,label,icon?,color?}[]`, `data: number[]` (múltiplos de `step`, ≤ `max`), `max`, `step`, `unit?`, `source?` | sí |
| `S.rhythm` | rhythm | `beats`, `allowed: ('redonda'|'blanca'|'negra'|'corchea')[]`, `mustInclude?`, `showFractions?` | sí |
| `S.recipe` | recipe-scaler | `dish, icon?, baseServings, targetServings, ingredients: {name, icon?, qty, unit}[], ask: number[]` | sí |
| `S.pulse` | pulse-lab | `seconds`, `rounds: {label, exercise?: {name, icon?, seconds}}[]` | no |
| `S.dilemma` | dilemma | `scene: {icon?, text}`, `options: {id, icon?, text, consequence, values: string[], constructive}[]` | no |
| `S.write` | short-answer | `model` (respuesta modelo), `rubric: string[]`, `minWords?`, `placeholder?` | no |
| `S.cards` | flashcards | `cards: {front, back, icon?}[]` (≥3) | no |
| `S.project` | project | `goal, steps: {title, detail}[], evidence, rubric: string[]` | no |
| `S.reflect` / `cierre()` | reflection | `statements`, `commitments?` | no |

Errores típicos que el validador detecta: `multiple` fuera de `props`; `choice` de una respuesta con dos correctas; `tf` todo verdadero; distractor igual a una respuesta; `chart` con datos que no son múltiplos de `step`; `slider` con respuesta fuera de la escala; `order` con menos de 3 elementos; referencias CNB inexistentes.

## 11. Calidad del contenido
- Español de Guatemala, claro y cálido, para niñas y niños de 11-12 años. Frases cortas. Tuteo. Nada de "el alumno".
- **Exactitud**: solo hechos bien establecidos. Si un dato puede variar (población, tipo de cambio, precios), usa redondeos con "aproximadamente" o marca el ejercicio como hipotético ("supongamos que…"). No inventes estadísticas, citas ni leyes. En historia y Acuerdos de Paz, fechas e instituciones verificables.
- **Contexto guatemalteco y multicultural**: lugares, comidas, oficios, nombres de los pueblos maya, garífuna, xinka y ladino/mestizo; equidad de género en los personajes; sin estereotipos.
- **L2**: trabaja las habilidades del CNB de L2 en español como segundo idioma (normas de cortesía, acentuación, tipos de palabras, textos). No inventes vocabulario en idiomas mayas; si mencionas uno, que sea muy conocido y correcto, o pide al niño que lo investigue en su comunidad.
- **L3**: inglés sencillo y correcto; instrucciones en español, contenido en inglés.
- **Temas sensibles del CNB** (sexualidad y reproducción, ITS y VIH, drogas, conflicto armado, violencia, pobreza): lenguaje científico, respetuoso y apropiado para la edad, sin detalles gráficos, con enfoque de prevención, derechos y cuidado; invita a conversar con familia o docentes.
- Sin enlaces externos, sin marcas comerciales, sin textos con derechos de autor.

## 12. Verificación (obligatoria antes de terminar)
```bash
cd /home/claude/socrates-app && /home/claude/.npm-global/bin/tsx scripts/validate-content.ts --semanas=NN,MM --quiet
cd /home/claude && /home/claude/.npm-global/bin/tsc -p tsconfig.content.json
```
Ambos deben terminar sin errores para tus semanas. Corrige y vuelve a correr hasta que estén limpios. No modifiques archivos fuera de tus semanas.
