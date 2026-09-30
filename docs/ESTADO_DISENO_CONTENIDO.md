# Estado de diseño y contenido · 2026-09-30

## Estado actual

- La app valida correctamente: 40/40 semanas, 432 lecciones, 4,692 pasos, 597 espacios multimedia y cobertura CNB completa: 203/203 indicadores y 833/833 contenidos.
- La arquitectura es sana para una PWA educativa: React + Vite + TypeScript, contenido como datos, actividades registradas como plugins, motor separado de la UI y validadores de contenido.
- El rediseño v3 por materias esta completo solo en Unidad 1: 216/864 lecciones de materia. Quedan pendientes 30/40 bloques materia-unidad y 24/32 semanas de aprendizaje por convertir a Taller + Reto.
- La lista interna de medios mockeados vive en `src/media/mockRegistry.ts`. La pantalla `Medios por producir` exporta, por cada mock, ficha, archivo destino sugerido y snippet para `src/media/assets.ts`.

## Diagnostico de diseño

- La estructura v3 es la direccion correcta: lecciones por materia para ensenar con profundidad, y taller/reto semanal solo para conexiones reales.
- Unidad 1 ya muestra buena variedad: ejemplos resueltos, mapas de coordenadas, ritmos, recetas, graficas, dilemas, lecturas, escritura y actividades fisicas.
- Las Unidades 2-4 aun conservan contenido integrado anterior. Son validas para cobertura, pero no siempre tienen la cohesion y profundidad de las clases por materia.
- Algunos temas generadores de semanas antiguas son amplios y pueden sentirse forzados. Al convertir Unidades 2-4, el tema semanal debe ajustarse a lo que las materias realmente ensenan, no al reves.
- Hay medios suficientes como fichas de produccion, pero siguen siendo maquetas. Cuando producir una animacion o recurso complejo sea costoso, debe quedar como mock con ficha concreta, no como sustituto visual pobre dentro de la actividad.

## Reglas de mejora para los proximos pases

1. Reorganizar sesiones por secuencia didactica de la materia: una idea central por leccion, de lo concreto a lo simbolico, con repaso espiral al final de la semana.
2. Ajustar el tema generador cuando las materias no encajen naturalmente. Es mejor un taller con 2-4 conexiones reales que una integracion artificial de todas las areas.
3. En Comunicacion y Lenguaje, las palabras, textos y actividades deben salir del tema real de la clase: lectura, vocabulario, ortografia, produccion y oralidad alrededor del mismo nucleo.
4. En Matematicas, elegir contextos que representen de verdad el contenido: mapas para coordenadas, rectas/termometros para enteros, recetas para proporcionalidad, poligonos manipulables para geometria.
5. No usar `Circle` o `Square` para representar objetos cotidianos como tortilla, ventana, piso, panela o pozo. Usar un icono de objeto (`Pizza`, `AppWindow`, `Package`, `Store`, `Landmark`, etc.) o crear un media mock con brief especifico.
6. Variar la interaccion segun el aprendizaje: mapas, puntos, sliders, construccion de graficas, dibujo guiado, animaciones educativas, ritmo, recetas, proyectos y escritura. Las opciones multiples deben validar, no reemplazar la manipulacion.
7. Si una actividad ideal requiere mucho trabajo tecnico nuevo, dejarla como media mock o proyecto escrito con ficha de reemplazo: que se vea que debe existir una animacion, simulador o imagen detallada, y como producirla.

## Mocking y reemplazo

- Mock visual: `MediaSlot` sin entrada en `MEDIA_ASSETS`. Reemplazo: producir archivo, guardarlo en `public/media/` y registrar el mismo id en `src/media/assets.ts`.
- Mock interactivo aceptable: actividad existente que describe una interaccion futura de alto costo. Debe llevar media brief o instrucciones de proyecto que expliquen el reemplazo esperado.
- No aceptable: usar una figura abstracta como sustituto permanente de un objeto concreto cuando existe un icono mas descriptivo o puede hacerse una ficha de media.
