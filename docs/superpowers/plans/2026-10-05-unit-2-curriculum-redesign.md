# Unidad 2 de Sexto Primaria · Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir la Unidad 2 al formato completo de la Unidad 1 sin perder cobertura CNB.

**Architecture:** El contenido permanece en el DSL existente. Diez módulos de materia alimentan automáticamente la agenda; ocho módulos semanales aportan taller, reto y banco; la semana 20 se genera desde esos bancos.

**Tech Stack:** TypeScript, React, Node `tsx`, Vite, CNB local estructurado.

---

## Mapa de archivos

- `tests/unit2-redesign.test.ts`: contratos de la estructura y progresión pedagógica.
- `src/content/sexto/materias/<area>/u2.ts` y `u2/s11.ts`…`s18.ts`: lecciones y progresión de cada una de las diez materias.
- `src/content/sexto/semanas/s11.ts`…`s18.ts`: metadatos, taller, reto y banco semanal.
- `src/content/sexto/semanas/s19.ts`: proyecto integrador de cinco días.
- `src/content/index.ts`: normalización de fichas multimedia de la Unidad 2.

## Tareas

- [ ] Registrar pruebas que fallen por el formato antiguo: 27 lecciones por materia, un taller y un reto por semana; fases ordenadas y enseñanza previa; cobertura de `plan.json`; proyecto autosuficiente.
- [ ] Redactar progresiones por materia a partir del CNB y del plan anual, sin cambiar las asignaciones curriculares.
- [ ] Crear lecciones `s11`…`s18` de Matemáticas, L2 y Productividad; comprobar cada área con el validador.
- [ ] Crear lecciones `s11`…`s18` de L1, Formación Ciudadana y Arte; comprobar cada área con el validador.
- [ ] Crear lecciones `s11`…`s18` de Ciencias Naturales, Ciencias Sociales, L3 y Educación Física; comprobar cada área con el validador.
- [ ] Reescribir `s11.ts`…`s18.ts` como semanas con taller, reto y banco basados en las materias terminadas.
- [ ] Reescribir `s19.ts` como proyecto integrador individual, breve y viable; revisar la validación generada de la semana 20.
- [ ] Normalizar medios de la Unidad 2 en `src/content/index.ts` y verificar fichas e identificadores.
- [ ] Ejecutar `npm run validate -- --unidad=2 --strict`, `npm test`, `npx tsc --noEmit`, `npm run build` y recorridos pertinentes; corregir cualquier error introducido.

Cada bloque de autoría sigue la secuencia prueba roja, contenido mínimo correcto, prueba verde y revisión del CNB. Las pruebas de aceptación inspeccionan el curso ensamblado, no solo los archivos fuente.
