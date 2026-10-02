import { S, cierre, lesson, semana } from '../../dsl';

export default semana({
  id: 's08', unidad: 1, semana: 8, kind: 'aprendizaje',
  temaGenerador: 'Datos confiables para ahorrar energía',
  title: 'Datos confiables para ahorrar energía',
  subtitle: 'Medimos, aproximamos y publicamos sin ocultar la fuente ni los límites de los datos',
  icon: 'ChartNoAxesCombined', color: 'var(--area-cnt)',
  contexto: 'Esta semana trabajas con el paquete “Caso escolar simulado; no describe tu escuela”. Aprenderás a conservar el dato exacto al aproximar, distinguir evidencia de afirmaciones sin respaldo, explicar transformaciones de energía y publicar información legible. El cierre reúne Matemáticas, L1, Ciencias Naturales y Expresión Artística en un panel de papel con datos honestos y recomendaciones prácticas.',
  ejes: ['tecnologia', 'sostenible', 'vida-ciudadana', 'multiculturalidad', 'equidad'],
  media: {
    id: 's08-portada', kind: 'video', title: 'Del dato al panel', aspect: '16:9', duration: 55,
    alt: 'Una estudiante lee una ficha simulada de consumo, conserva el valor exacto, calcula una aproximación y ordena un panel de ahorro energético.',
    brief: 'Video animado 2D de 55 s, 1920×1080. Mostrar una ficha grande rotulada “Caso escolar simulado; no describe tu escuela”, el valor 12,468 kWh, su aproximación 12,000 kWh, una gráfica de barras y tres recomendaciones con razón científica. Usar texto de alto contraste, narración en español de Guatemala, subtítulos completos y pausa final de 3 s. No presentar edificios, recibos ni personas como pertenecientes a una escuela real. Target: public/media/s08-portada.mp4. Accesibilidad: subtítulos completos, transcripción y pausa suficiente para lectura.',
  },
  badge: { id: 'medalla-s08', name: 'Datos con respaldo', icon: 'BadgeCheck', desc: 'Completaste la semana 8 y superaste su reto' },
  lessons: [
    lesson({
      id: 's08-d5-taller', kind: 'taller', day: 5,
      title: 'Panel de energía de nuestra escuela', icon: 'Presentation', minutes: 19,
      gancho: '¿Cómo puede un panel llamar la atención sin convertir una estimación en un dato inventado?',
      objetivos: ['Construir en una hoja un panel legible que conserve dato exacto, aproximación, fuente, escenario y recomendaciones justificadas'],
      resumen: [
        'Caso escolar simulado; no describe tu escuela.',
        'El dato exacto permite verificar; el redondeado ayuda a comunicar y se presenta como aproximado.',
        'Una recomendación responsable une una acción posible con una razón científica sin prometer ahorros inventados.',
        'El panel se construye en papel o cuaderno; la actividad registra decisiones y criterios, no afirma guardar dibujos o archivos.',
      ],
      media: {
        id: 's08-taller-paquete', kind: 'image', title: 'Paquete y hoja para el panel', aspect: '16:9',
        alt: 'Ficha simulada con consumo exacto, conteos de auditoría y fuente, junto a una hoja dividida en titular, gráfica, fuente y recomendaciones.',
        brief: 'Imagen didáctica 1600×900. A la izquierda, paquete rotulado exactamente “Caso escolar simulado; no describe tu escuela”, fuente “Dossier didáctico Energía 8, edición 2026”, consumo 12,468 kWh y conteos simulados: aula 8, pasillo 5, biblioteca 3. A la derecha, hoja en blanco con cuatro zonas: titular, gráfica, fuente/escenario y recomendaciones. Texto grande y contraste AA; no incluir respuestas marcadas ni logos reales. Target: public/media/s08-taller-paquete.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
      },
      steps: [
        S.explain(
          { fase: 'construir', areas: ['mat', 'l1', 'cnt', 'art'], cnb: ['mat:4.1.4', 'l1:8.2.4', 'cnt:8.2.1'], title: '1 min · Encargo y cuatro secciones', prompt: 'En una hoja o cuaderno traza cuatro zonas con jerarquía visual: titular con dato, gráfica, fuente y escenario, y recomendaciones con razón científica.' },
          { icon: 'LayoutPanelTop', body: 'Trabajarás solo con el paquete suministrado. El rótulo **Caso escolar simulado; no describe tu escuela** debe quedar visible. No midas, entrevistes ni inventes información externa.', reveal: [
            { icon: 'Sigma', front: 'Dato', back: 'Conserva 12,468 kWh y comunica también su aproximación.' },
            { icon: 'ChartColumn', front: 'Visual', back: 'Representa los conteos simulados sin cambiar la escala.' },
            { icon: 'BookOpenCheck', front: 'Fuente', back: 'Dossier didáctico Energía 8, edición 2026.' },
            { icon: 'Lightbulb', front: 'Acción', back: 'Relaciona cada consejo con la transformación o el uso racional de energía.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l1', 'cnt'], cnb: ['l1:8.2.4', 'cnt:8.2.1'], title: '2 min · Qué afirma el paquete', prompt: 'Clasifica cada frase antes de usarla. Una afirmación confiable distingue medición simulada, fuente y algo que todavía no está respaldado.', hint: 'Busca unidad, procedencia y alcance.', explain: 'La etiqueta de escenario impide que el lector confunda datos didácticos con mediciones de su escuela.' },
          { buckets: [{ id: 'med', label: 'Dato del caso', icon: 'Gauge' }, { id: 'fue', label: 'Fuente o alcance', icon: 'BookOpenCheck' }, { id: 'sin', label: 'Sin respaldo', icon: 'CircleHelp' }], items: [
            { id: 'a', text: 'Consumo anual simulado: 12,468 kWh', bucket: 'med' },
            { id: 'b', text: 'Dossier didáctico Energía 8, edición 2026', bucket: 'fue' },
            { id: 'c', text: 'No describe tu escuela', bucket: 'fue' },
            { id: 'd', text: 'La escuela ahorrará exactamente Q3,000', bucket: 'sin' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.4'], title: '2 min · Dato exacto y aproximado', prompt: 'El caso registra **12,468 kWh**. Aproxima al millar para el titular.', hint: 'Mira la cifra de las centenas.', explain: 'La centena es 4: 12,468 kWh se aproxima a **12,000 kWh**. Conserva ambos valores.' },
          { answer: 12000, unit: 'kWh' },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.4'], title: '1 min · Titular honesto', prompt: '¿Qué titular comunica la aproximación sin ocultar el dato exacto?' },
          { options: [{ id: 'a', text: 'Caso simulado: aproximadamente 12,000 kWh (dato exacto: 12,468 kWh)' }, { id: 'b', text: 'Nuestra escuela gasta exactamente 12,000 kWh' }, { id: 'c', text: 'Ahorramos miles de quetzales' }], correct: ['a'] },
        ),
        S.chart(
          { fase: 'aplicar', areas: ['mat', 'art'], cnb: ['mat:4.1.4'], title: '2 min · Gráfica del caso', prompt: 'Construye una gráfica con los conteos **simulados** de luces encendidas. Copia después la forma general en tu hoja con título y rótulos visibles.', hint: 'Mantén la misma escala para las tres barras y destaca primero el dato principal.', explain: 'La gráfica permite comparar sin convertir el conteo en consumo eléctrico; la jerarquía visual guía la lectura.' },
          { categories: [{ id: 'a', label: 'Aula', icon: 'School' }, { id: 'b', label: 'Pasillo', icon: 'Footprints' }, { id: 'c', label: 'Biblioteca', icon: 'Library' }], data: [8, 5, 3], max: 10, step: 1, unit: 'luces', source: 'Caso escolar simulado; conteos didácticos, no mediciones reales' },
        ),
        S.match(
          { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:8.2.1'], title: '1 min · Acción y razón', prompt: 'Relaciona cada recomendación con una razón demostrable. Ninguna pareja promete una cantidad de ahorro.', explain: 'La electricidad se transforma en luz, movimiento o calor; evitar usos innecesarios reduce la energía demandada.' },
          { pairs: [
            { id: 'a', left: 'Apagar una luz cuando hay iluminación natural suficiente', leftIcon: 'Sun', right: 'Evita una transformación eléctrica-lumínica innecesaria' },
            { id: 'b', left: 'Apagar el ventilador al salir', leftIcon: 'Fan', right: 'Evita movimiento sin una persona que lo necesite' },
            { id: 'c', left: 'Revisar el sello del refrigerador', leftIcon: 'Refrigerator', right: 'Reduce pérdidas de frío que obligan al motor a trabajar más' },
          ] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['mat', 'l1', 'cnt', 'art'], cnb: ['mat:4.1.4', 'l1:8.2.4', 'cnt:8.2.1'], title: '3 min · Componer el panel', prompt: 'En tu hoja escribe el titular, el dato exacto con unidad y el rótulo completo del escenario. Usa tamaño, posición y contraste para ordenar la lectura.' },
          { goal: 'Dejar visibles la diferencia entre exacto y aproximado y la procedencia del caso.', steps: [
            { title: 'Titular', detail: 'Escribe “aproximadamente 12,000 kWh”.' },
            { title: 'Dato verificable', detail: 'Añade “dato exacto: 12,468 kWh”.' },
            { title: 'Alcance y fuente', detail: 'Copia “Caso escolar simulado; no describe tu escuela” y “Dossier didáctico Energía 8, edición 2026”.' },
          ], evidence: 'Panel de papel con los cuatro textos legibles.', rubric: ['Exacto y aproximado no se confunden', 'La unidad kWh aparece', 'Escenario y fuente son visibles'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['mat', 'l1', 'cnt', 'art'], cnb: ['mat:4.1.4', 'l1:8.2.7', 'cnt:8.2.1'], title: '2 min · Visual y recomendaciones', prompt: 'Añade a la hoja una gráfica pequeña y dos recomendaciones con su razón científica; conserva una jerarquía visual clara.' },
          { goal: 'Completar el panel sin afirmar mediciones ni ahorros que el paquete no contiene.', steps: [
            { title: 'Gráfica', detail: 'Dibuja tres barras proporcionales: 8, 5 y 3 luces.' },
            { title: 'Recomendaciones', detail: 'Escribe dos acciones posibles y, junto a cada una, por qué evita un uso innecesario.' },
          ], evidence: 'Gráfica rotulada y dos pares acción-razón en la hoja.', rubric: ['La escala permite comparar', 'Las recomendaciones son prácticas', 'No prometo ahorro exacto'] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['l1', 'art'], cnb: ['l1:8.2.7'], title: '1 min · Revisión final', prompt: 'Revisa tu hoja con un criterio a la vez, incluida la jerarquía visual.', explain: 'Una revisión breve puede detectar exageraciones y problemas de legibilidad.' },
          { buckets: [{ id: 'si', label: 'Listo', icon: 'BadgeCheck' }, { id: 'aj', label: 'Ajustar', icon: 'PencilRuler' }], items: [
            { id: 'a', text: 'El exacto y el aproximado tienen etiqueta distinta', bucket: 'si' },
            { id: 'b', text: 'La fuente aparece en letra imposible de leer', bucket: 'aj' },
            { id: 'c', text: 'Las barras parten de la misma base', bucket: 'si' },
            { id: 'd', text: 'Una recomendación promete Q500 sin cálculo', bucket: 'aj' },
          ] },
        ),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.4'], title: '1 min · Salida de aproximación', prompt: 'Otro caso registra **15,672 kWh**. Aproxima al millar.' }, { answer: 16000, unit: 'kWh' }),
        S.choice(
          { fase: 'comprobar', areas: ['l1', 'art'], cnb: ['l1:8.2.4'], title: '1 min · Salida de publicación', prompt: '¿Qué ajuste de fuente y jerarquía visual hace más confiable y legible un panel?' },
          { options: [{ id: 'a', text: 'Poner fuente y escenario junto al dato, con contraste suficiente' }, { id: 'b', text: 'Quitar “aproximadamente” para acortar el titular' }, { id: 'c', text: 'Esconder el dato exacto debajo de una imagen' }], correct: ['a'] },
        ),
        cierre({ areas: ['mat', 'l1', 'cnt', 'art'], cnb: ['mat:4.1.4', 'l1:8.2.4', 'cnt:8.2.1'] }, ['Distingo dato exacto y aproximado', 'Hago visible la fuente', 'Justifico recomendaciones sin inventar ahorros'], ['Antes de publicar, comprobaré dato, unidad, fuente y alcance']),
      ],
    }),

    lesson({
      id: 's08-d5-reto', kind: 'reto', day: 5, title: 'Reto de la semana 8', icon: 'Trophy', minutes: 14,
      objetivos: ['Resolver situaciones nuevas de las diez áreas'],
      resumen: ['Apliqué aproximación, fuentes, investigación, ciudadanía, gramática, inglés, memoria, publicación, juego inclusivo y conservación.'],
      media: {
        id: 's08-d5-reto', kind: 'image', title: 'Mesa de datos confiables', aspect: '16:9',
        alt: 'Mesa con fichas de números mayas, fuentes, energía, historia, lenguas, arte, actividad física y conservación.',
        brief: 'Imagen 1600×900 para evaluación. Mostrar diez fichas nuevas sin respuestas marcadas: número para redondear, numeral maya, nota con fuente, protocolo de investigación, dato mundial fechado, oración gramatical, fact card en inglés, mapa CEH atribuido, ficha biográfica artística, secuencia de juego y acción voluntaria. Alto contraste y texto legible; no usar datos de una escuela real. Target: public/media/s08-d5-reto.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
      },
      steps: [
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.4'], prompt: 'Aproxima **28,731** a la unidad de millar.' }, { answer: 29000 }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.4'], prompt: 'Una tabla viene del “Dossier didáctico 2026”. ¿Qué pie conserva la honestidad intelectual?' }, { options: [{ id: 'a', text: 'Fuente: Dossier didáctico 2026; datos simulados' }, { id: 'b', text: 'Medición de nuestra escuela' }, { id: 'c', text: 'Datos comprobados por todos' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.1.1'], prompt: 'Clasifica tres protocolos nuevos por el lugar donde obtienen evidencia.' }, { buckets: [{ id: 'doc', label: 'Documental' }, { id: 'cam', label: 'Campo' }, { id: 'lab', label: 'Laboratorio' }], items: [{ id: 'a', text: 'Comparar mapas satelitales publicados y sus fichas técnicas', bucket: 'doc' }, { id: 'b', text: 'Registrar sombra y temperatura en tres patios', bucket: 'cam' }, { id: 'c', text: 'Controlar material y tiempo en una prueba de aislamiento', bucket: 'lab' }] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.4.1'], prompt: 'Aplica una norma fiscal y una responsabilidad: un comercio cobró IVA, pero rechaza entregar comprobante. ¿Qué procede?' }, { options: [{ id: 'a', text: 'Solicitar el comprobante y conservarlo como respaldo de la operación' }, { id: 'b', text: 'Aceptar que el comercio sustituya la obligación con una promesa' }, { id: 'c', text: 'Crear una regla privada para eliminar el tributo' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.1'], prompt: 'Clasifica las palabras de “El medidor portátil registra”.' }, { buckets: [{ id: 's', label: 'Sustantivo' }, { id: 'a', label: 'Adjetivo' }, { id: 'v', label: 'Verbo' }], items: [{ id: '1', text: 'medidor', bucket: 's' }, { id: '2', text: 'portátil', bucket: 'a' }, { id: '3', text: 'registra', bucket: 'v' }] }),
        S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.2'], prompt: 'Caso ficticio: completa la biografía con la fact card suministrada de Elena Cruz, persona ficticia.' }, { text: 'In 2010, Elena Cruz, persona ficticia, [[became]] an electrical engineer.', distractors: ['become', 'born'] }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: 'Una tarjeta del paquete CEH nombra un pueblo y su departamento. ¿Qué acción lo localiza correctamente en el mapa?' }, { options: [{ id: 'a', text: 'Colocar la etiqueta del pueblo dentro del departamento nombrado y conservar la atribución CEH' }, { id: 'b', text: 'Elegir el color más oscuro para afirmar que sufrió más' }, { id: 'c', text: 'Quitar el nombre del departamento y la fuente' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:4.3.2'], prompt: 'Publica y comparte una ficha biográfica con obra y fuente: el registro de una ceramista ficticia ya está escrito, pero una fecha no aparece en el paquete. ¿Qué haces?' }, { options: [{ id: 'a', text: 'Eliminar el dato dudoso y abrir el resultado corregido al público del curso' }, { id: 'b', text: 'Mantener la fecha para llenar espacio' }, { id: 'c', text: 'Reemplazar la atribución con colores' }], correct: ['a'] }),
        S.fill({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.2.3'], prompt: 'Dirige una rutina con instrucción, adaptación segura y rol claro: completa la intervención ante movilidad de hombros.' }, { text: 'Primero [[anuncio]] arcos suaves y la señal descanso; luego [[reduzco]] la amplitud si hay molestia y al final [[detengo]] la actividad.', distractors: ['acelero', 'obligo', 'ignoro'] }),
        S.fill({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'En una tableta compartida, habilita el modo de baja actividad, verifica sus ajustes y deja abierta la decisión reversible.' }, { text: 'Primero [[observo]] el estado; luego [[habilito]] la práctica, [[confirmo]] el cambio y al final [[decido]] si mantengo o revierto.', distractors: ['supongo', 'prometo', 'ignoro'] }),
      ],
    }),
  ],
  bank: [
    S.maya({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.6'], prompt: 'Construye el numeral maya de **642**.' }, { mode: 'build', target: 642, levels: 3 }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.7'], prompt: '¿Qué nota sirve mejor para un informe breve?' }, { options: [{ id: 'a', text: 'LED: usa menos electricidad para producir luz; fuente: ficha técnica suministrada' }, { id: 'b', text: 'Los LED son buenos, según alguien' }, { id: 'c', text: 'Copiar toda la ficha sin fuente' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.2.1'], prompt: 'Dos grupos siguen el mismo protocolo y obtienen valores cercanos, no idénticos. ¿Qué conclusión es adecuada?' }, { options: [{ id: 'a', text: 'Los resultados compatibles apoyan revisar y repetir el procedimiento' }, { id: 'b', text: 'Solo sirven si son idénticos' }, { id: 'c', text: 'La evidencia demuestra cualquier explicación' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.4.1'], prompt: 'Aplica la jerarquía de normas fiscales: una guía técnica cambia la tasa fijada por decreto. ¿Qué decisión corresponde?' }, { options: [{ id: 'a', text: 'Mantener la tasa de la norma superior y corregir la guía técnica' }, { id: 'b', text: 'Dar prioridad automática a la guía' }, { id: 'c', text: 'Tratar ambas como consejos voluntarios' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.2'], prompt: 'En “la claridad del informe”, ¿qué clase de sustantivo es **claridad**?' }, { options: [{ id: 'a', text: 'Abstracto' }, { id: 'b', text: 'Concreto' }, { id: 'c', text: 'Propio' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.2'], prompt: 'Completa una nueva mini-biografía.' }, { text: 'Maya [[studied]] science and later wrote two books.', distractors: ['study', 'studies'] }),
    S.match({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: 'Usa dos tarjetas nuevas del paquete atribuido a la CEH para localizar pueblos y departamentos, sin inferir gravedad.' }, { leftTitle: 'Pueblo', rightTitle: 'Departamento indicado', pairs: [{ id: 'a', left: 'Chuj', right: 'Huehuetenango' }, { id: 'b', left: 'Poqomchí', right: 'Alta Verapaz' }] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:4.3.2'], prompt: 'Completa una ficha biográfica guardada y visible: la tarjeta nueva ya muestra obras y fuente. ¿Qué acción final la publica honestamente?' }, { options: [{ id: 'a', text: 'Confirmar el contenido y habilitarlo en el registro del curso' }, { id: 'b', text: 'Sustituir los hechos por un adorno' }, { id: 'c', text: 'Ocultar el origen de la información' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.2.3'], prompt: 'Lidera una rutina con instrucción, adaptación segura y rol claro: completa tu intervención cuando una marcha suave causa molestia.' }, { text: 'Yo [[suspendo]] la marcha, [[modifico]] la tarea por respiración cómoda y [[pregunto]] por el bienestar antes de cerrar.', distractors: ['acelero', 'impongo', 'omito'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'El sonido opcional ya estaba apagado. ¿Cómo activas movimiento reducido, verificas el cambio y conservas una restauración exacta?' }, { options: [{ id: 'a', text: 'Cambiar únicamente el control visual, confirmar que la preferencia de audio no varió y guardar su valor previo para deshacer la intervención' }, { id: 'b', text: 'Encender audio y animaciones para que todo sea distinto' }, { id: 'c', text: 'Escribir una intención sin modificar la app' }], correct: ['a'] }),
  ],
});
