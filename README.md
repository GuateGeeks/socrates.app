# Socrates Aprende · Sexto Primaria

Plataforma web mobile-first (PWA) para **aprender a tu ritmo durante todo el ciclo escolar**, construida sobre el **Currículo Nacional Base (CNB) de Guatemala**. Funciona como "Brilliant": cada día una lección corta e interactiva, retos de validación, repaso inteligente y un cuaderno personal.

## El año completo
| | |
|---|---|
| **40 semanas** | 4 unidades (temas ODEC) × 10 semanas |
| **Semanas 1-8 de cada unidad** | **27 lecciones por materia** según un horario escolar (5-6 por día, 10-15 min c/u ≈ 60-80 min diarios) + **Taller interdisciplinario** y **Reto semanal** el viernes (70 % para la medalla) |
| **Semana 9** | **Proyecto integrador** de la unidad (5 lecciones) |
| **Semana 10** | **Semana de validación**: 4 evaluaciones por área + portafolio (se arma sola con los bancos de ítems) |
| **Día 0** | Diagnóstico inicial |
| **Cobertura** | **100 %** del CNB de Sexto: 203/203 indicadores y 833/833 contenidos, cada uno en su semana (`src/content/sexto/plan.json`); 216 lecciones, 2 408 pasos, 335 medios por producir |

## Experiencia del estudiante
- **Hoy**: meta diaria, "continúa donde te quedaste", **agenda del día** (una lección por materia según el horario), estado del calendario (al día / adelantado / atrasado) y repaso pendiente.
- **Materias**: el recorrido anual de cada una de las 10 materias del CNB (Matemáticas, Comunicación y Lenguaje, Ciencias Naturales, Ciencias Sociales, L2, Inglés, Formación Ciudadana, Expresión Artística, Educación Física, Productividad y Desarrollo).
- **Mi año**: mapa de las 40 semanas con avance y medallas.
- **Semana**: horario de lunes a viernes, tema generador (rueda del CNB), contexto guatemalteco, lecciones extra.
- **Lección**: portada con objetivos y recurso multimedia → pasos Explorar → Construir → Reto → **Comprobar** (boleto de salida sin pistas) → Reflexionar → cierre con ideas clave y resultados por indicador.
- **Repaso inteligente** (Leitner 1-3-7-16-35 días) con lo que costó; **Explorar el CNB** por área e indicador; **Cuaderno** con ideas clave; **Logros** e insignias.
- 24 tipos de actividad interactiva, íconos **Lucide**, sonidos de marimba, animaciones con modo reducido, tema claro/oscuro.

## Inicio rápido
```bash
npm install          # incluye lucide-react
npm run cnb          # (opcional) regenera el catálogo CNB desde ../contenido
npm run plan         # (opcional) regenera el plan anual
npm run icons        # genera el subconjunto de íconos Lucide usados
npm run dev          # http://localhost:5173  (--host para abrir en el teléfono)
npm run validate     # contenido vs. CNB, claves de respuesta, estructura del año, medios, íconos
npm test             # pruebas unitarias
npm run build        # icons + validate + typecheck + build (dist/)
npm run build:standalone   # un solo HTML sin internet (dist-standalone/index.html)
npm run e2e          # recorre TODAS las lecciones en teléfono y tableta
```

## Medios por producir
Cada lección y varios pasos tienen un **espacio multimedia** (imagen, video, animación, diagrama o audio) con **ficha de producción**. Se muestran como maquetas hasta que se produzcan. Ver **Perfil → Medios por producir** (exporta CSV/JSON) y `src/media/assets.ts` para conectar los archivos reales.

## Documentación
- [docs/METODOLOGIA_CNB.md](docs/METODOLOGIA_CNB.md) — de las figuras del CNB al producto.
- [docs/ARQUITECTURA.md](docs/ARQUITECTURA.md) — capas, datos, puntos de extensión.
- [docs/SISTEMA_DE_DISENO.md](docs/SISTEMA_DE_DISENO.md) — tokens, íconos, movimiento, interacción, medios.
- [docs/ESPECIFICACION_MATERIAS.md](docs/ESPECIFICACION_MATERIAS.md) — v3: horario, lecciones por materia, taller y reto.
- [docs/AUTORIA.md](docs/AUTORIA.md) y [docs/ESPECIFICACION_CONTENIDO.md](docs/ESPECIFICACION_CONTENIDO.md) — cómo escribir semanas, lecciones y actividades.

Contenido curricular: © MINEDUC / cnbguatemala.org, CC BY-SA 4.0. Íconos: Lucide (ISC).
