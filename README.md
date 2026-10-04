# Socrates Aprende · programas educativos

Plataforma web mobile-first (PWA) con dos programas. **Sexto Primaria** conserva la experiencia basada en el Currículo Nacional Base (CNB) de Guatemala. **AWS Certified Cloud Practitioner** ofrece un temario de preparación para los 19 objetivos CLF-C02 cargado desde Firestore. El usuario elige un programa en la configuración inicial y puede cambiarlo en Ajustes; el avance de cada programa se guarda por separado.

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
- [docs/ESTADO_DISENO_CONTENIDO.md](docs/ESTADO_DISENO_CONTENIDO.md) — estado actual, brechas de cohesión y reglas para reemplazar mocks.

Contenido curricular: © MINEDUC / cnbguatemala.org, CC BY-SA 4.0. Íconos: Lucide (ISC).
# Firebase y PWA

La aplicación funciona primero con almacenamiento local y sincroniza en segundo plano con Firebase. `firebase.json` configura **Anonymous Authentication**; el proyecto `socrates-439aa` usa Firestore y Realtime Database. Para publicar cambios del backend, ejecuta `firebase deploy --only auth,firestore:rules,database --project socrates-439aa`.

`npm run dev` inicia el sitio; `npm run build` genera los iconos PWA, valida contenido, comprueba TypeScript y produce `dist/`. El primer inicio muestra una configuración de perfil a pantalla completa que también funciona sin conexión. Las cuentas anónimas pertenecen a la instalación del navegador y no se transfieren automáticamente a otro dispositivo.

Los archivos `.firebaserc`, `firebase.json`, `firestore.rules` y `database.rules.json` permiten usar Firebase CLI y emuladores sin guardar credenciales privadas. El cliente usa el archivo raíz `firebase.ts` como configuración canónica. Un push a `main` activa `.github/workflows/deploy-pages.yml` para publicar el frontend en GitHub Pages; ese flujo no despliega la configuración de Firebase.

La encuesta beta se abre desde Ajustes. Cada participante puede enviar y actualizar una respuesta; se guarda en Firestore como `betaSurveyResponses/{uid}` con el nombre de su perfil. Solo ese usuario autenticado puede leer o escribir su documento desde la app. El equipo del proyecto puede revisar las respuestas desde Firebase Console.

## Programa AWS en Firestore

El cliente lee `programs/aws-cloud-practitioner` en Firestore. Las reglas permiten leer ese documento únicamente si `published` es `true`; las escrituras se realizan con credenciales administrativas. El contenido está en [`content/aws-cloud-practitioner.json`](content/aws-cloud-practitioner.json). Cubre los 19 enunciados de tareas de los cuatro dominios de la [guía oficial CLF-C02](https://docs.aws.amazon.com/es_es/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html), con lecturas breves y preguntas explicadas de respuesta única o múltiple. Las preguntas son material de práctica independiente y no reproducen el examen oficial.

Para validar el archivo sin conectarse a Firebase, ejecuta `npm run publish:aws:dry-run`. Para publicarlo, configura credenciales de aplicación de Google con permiso de escritura en Firestore y ejecuta `GOOGLE_CLOUD_PROJECT=socrates-439aa npm run publish:aws`. Después despliega las reglas con `firebase deploy --only firestore:rules --project socrates-439aa`. El publicador exige el identificador exacto del proyecto para evitar escrituras accidentales en otro proyecto.

El progreso AWS se guarda en `socrates.aws-progress.v1` y se sincroniza en `users/{uid}/state/aws-cloud-practitioner`; el progreso CNB conserva su clave y documento anteriores. El acceso anónimo actual permite continuidad en la misma instalación del navegador.
