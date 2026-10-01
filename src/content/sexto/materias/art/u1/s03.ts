/**
 * Expresión Artística · Unidad 1 · Semana 3 — Técnicas gráficas.
 * Progresión: técnicas secas (lápices de colores, crayones, pastel: presión, capas, degradado,
 * difuminado, esgrafiado) → tintas y técnica mixta al servicio de un cartel que comunica con íconos.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Técnicas secas ───────────────────────── */
  lesson({
    id: 's03-art-1',
    title: 'Lápices de colores, crayones y pastel',
    icon: 'Pencil',
    minutes: 15,
    gancho: 'Si dibujas la misma mazorca con lápices de colores, con crayones y con pastel, ¿crees que se verán iguales?',
    objetivos: ['Aplicar técnicas secas eligiendo presión, capas o degradado según el efecto buscado'],
    resumen: [
      'Las técnicas secas se usan sin agua: lápices de colores, crayones de cera y pastel.',
      'Lápices de colores: trazos finos y precisos, buenos para detalles. Con poca presión el color es suave; con más presión, intenso.',
      'Crayones de cera: colores fuertes que cubren rápido; permiten el esgrafiado (raspar una capa para descubrir otra) y resisten el agua.',
      'Pastel: colores suaves que se difuminan con el dedo o un algodón; se ensucia fácil, así que se trabaja de arriba hacia abajo y sin soplar el polvo.',
      'Degradado: pasar poco a poco de un color o tono a otro. Capas: poner un color sobre otro para mezclarlos (amarillo + azul = verde).',
    ],
    media: {
      id: 's03-art-1-tecnicas', kind: 'video', title: 'Una mazorca, tres técnicas', aspect: '16:9', duration: 60,
      alt: 'Unas manos de niña dibujan la misma mazorca tres veces: con lápices de colores y trazos finos, con crayones de cera de colores fuertes y con pastel difuminado con el dedo.',
      brief: 'Video cenital de 60 s sobre una mesa de madera con hojas blancas. Tres segmentos de 18 s: (1) lápices de colores: contorno, granos con trazo fino, degradado de amarillo a naranja con presión creciente; (2) crayones de cera: color fuerte que cubre rápido, capa de amarillo y encima café para la tuza; (3) pastel: manchas suaves difuminadas con el dedo, fondo de cielo. Rótulos: "precisión", "color intenso", "suavidad". Cierre: las tres mazorcas lado a lado. Música instrumental suave, sin marcas visibles en los materiales.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'conocer', title: 'Tres técnicas secas',
          prompt: 'Las **técnicas gráficas** son las formas de dibujar y colorear con distintos materiales. Las **secas** se usan sin agua. Toca cada tarjeta.' },
        { icon: 'Palette', body: 'Ninguna técnica es "mejor": cada una sirve para algo distinto. Un artista elige según **lo que quiere mostrar**.', reveal: [
          { icon: 'Pencil', front: 'Lápices de colores', back: 'Trazo **fino y preciso**. Ideales para **detalles**: las plumas de un quetzal, las letras de un cartel. Sácales punta seguido.' },
          { icon: 'Brush', front: 'Crayones de cera', back: 'Colores **intensos** que **cubren rápido** superficies grandes. La cera **resiste el agua** y permite **raspar** (esgrafiado).' },
          { icon: 'Cloud', front: 'Pastel', back: 'Barras de color en polvo compacto. Da colores **suaves** que se **difuminan** con el dedo o un algodón. Trabaja de arriba hacia abajo para no mancharte, y no soples el polvo: sacúdelo sobre un papel.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'conocer',
          prompt: 'Observa el video. ¿Con qué técnica los bordes de los colores se ven **más suaves y borrosos**, como una nube?',
          explain: 'El **pastel** se puede **difuminar** con el dedo: los colores se funden y los bordes se suavizan. Cada técnica tiene su "personalidad".' },
        { options: [
          { id: 'a', text: 'Lápices de colores', icon: 'Pencil', feedback: 'Los lápices dejan trazos finos y bordes bien definidos.' },
          { id: 'b', text: 'Crayones de cera', icon: 'Brush', feedback: 'El crayón deja colores fuertes y cerosos; no se difumina fácil.' },
          { id: 'c', text: 'Pastel', icon: 'Cloud' },
        ], correct: ['c'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'hacer', title: 'Cuatro trucos de color',
          prompt: 'Con cualquier técnica seca puedes usar estos procedimientos. Toca cada uno.',
          media: {
            id: 's03-art-1-trucos', kind: 'diagram', title: 'Presión, capas, degradado y esgrafiado', aspect: '16:9',
            alt: 'Cuatro muestras: una franja de azul de claro a oscuro; un cuadro amarillo con azul encima que se ve verde; una franja que pasa de amarillo a rojo; y un cuadro negro raspado que deja ver líneas de colores.',
            brief: 'Lámina didáctica en 4 recuadros sobre fondo blanco, con textura real de lápiz y crayón. (1) "Presión": franja azul de lápiz, de muy suave a muy intensa, con flechas 1-2-3. (2) "Capas": amarillo, luego azul encima → verde. (3) "Degradado": franja de amarillo a naranja a rojo sin cortes. (4) "Esgrafiado": crayones de colores cubiertos de crayón negro, raspados con un palito dibujando una estrella. Rótulos grandes legibles en celular.',
          } },
        { icon: 'Sparkles', body: 'Practícalos en una hoja aparte antes de usarlos en tu obra.', reveal: [
          { icon: 'Gauge', front: 'Presión', back: 'Aprieta **poco** para un color claro y **más** para uno intenso. Así, con un solo lápiz, logras varios tonos.' },
          { icon: 'Layers', front: 'Capas', back: 'Pinta un color suave y **encima** otro. Se mezclan a la vista: amarillo + azul = verde; rojo + amarillo = naranja.' },
          { icon: 'Sunset', front: 'Degradado', back: 'Pasa **poco a poco** de claro a oscuro, o de un color a otro, sin que se note el corte. Como el cielo al atardecer.' },
          { icon: 'Sparkles', front: 'Esgrafiado', back: 'Pinta manchas de colores con crayón, cúbrelas con crayón negro y **raspa** con un palito o clip abierto: aparecen líneas de colores. Raspa hacia afuera de tu cuerpo.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: un güisquil que parece real',
          prompt: 'Mira cómo Ana usa **presión, capas y degradado** con lápices de colores.' },
        { icon: 'Pencil', problem: 'Ana quiere colorear un **güisquil** (verde claro, con un lado donde le da la luz) para que no se vea "plano".',
          steps: [
            { text: 'Pinta todo el güisquil con **amarillo** y **poca presión**.', why: 'Una primera capa clara hace que el verde se vea luminoso.' },
            { text: 'Encima pasa **verde claro** con presión suave: la capa amarilla de abajo lo ilumina.' },
            { text: 'En el lado contrario a la luz, aprieta **más** el verde y agrega un poco de **azul**: hace un **degradado** de claro a oscuro.', why: 'La parte que no recibe luz se ve más oscura; el degradado hace que se vea redondo.' },
            { text: 'Con el lápiz bien afilado dibuja las **espinitas** y líneas de la cáscara.', why: 'Los detalles finos son la fortaleza del lápiz de color.' },
          ],
          answer: 'Con **capas** (amarillo + verde), **presión** y **degradado**, el güisquil se ve con volumen y los detalles salen con trazo fino.',
          tip: 'Colorea siempre en la misma dirección y con trazos cortos: el color queda parejo.' },
      ),
      S.match(
        { fase: 'construir', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'conocer',
          prompt: 'Une cada procedimiento con lo que logra.',
          hint: 'Repasa las cuatro tarjetas: presión, capas, degradado y esgrafiado.',
          explain: 'Presión → claro u oscuro con un solo color; capas → mezclar colores; degradado → paso suave de un tono a otro; esgrafiado → líneas de color al raspar.' },
        { leftTitle: 'Procedimiento', rightTitle: 'Efecto', pairs: [
          { id: 'p', left: 'Cambiar la presión', leftIcon: 'Gauge', right: 'Tonos claros u oscuros con un solo color' },
          { id: 'c', left: 'Poner capas', leftIcon: 'Layers', right: 'Un color nuevo al mezclar dos' },
          { id: 'd', left: 'Degradado', leftIcon: 'Sunset', right: 'Paso suave de un tono a otro' },
          { id: 'e', left: 'Esgrafiado', leftIcon: 'Sparkles', right: 'Líneas de color al raspar una capa oscura' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'hacer',
          prompt: '¿Qué técnica conviene para cada trabajo? Clasifica.',
          explain: 'Detalles pequeños → lápices. Superficies grandes y colores fuertes, o esgrafiado → crayones. Fondos suaves y difuminados → pastel.' },
        { buckets: [
          { id: 'l', label: 'Lápices de colores', icon: 'Pencil', color: 'var(--area-art)' },
          { id: 'c', label: 'Crayones de cera', icon: 'Brush', color: 'var(--c-maiz-strong)' },
          { id: 'p', label: 'Pastel', icon: 'Cloud', color: 'var(--area-l1)' },
        ], items: [
          { id: 't1', text: 'Las plumas finas de un colibrí', bucket: 'l' },
          { id: 't2', text: 'Un cielo de atardecer difuminado', bucket: 'p' },
          { id: 't3', text: 'Un cartel grande con colores fuertes, rápido', bucket: 'c' },
          { id: 't4', text: 'Un dibujo raspado con líneas de colores', bucket: 'c', feedback: 'El esgrafiado necesita capas gruesas de cera: crayones.' },
          { id: 't5', text: 'Las letras pequeñas del nombre de tu escuela', bucket: 'l' },
          { id: 't6', text: 'La neblina suave sobre un volcán', bucket: 'p' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'hacer',
          prompt: 'Luis solo tiene **un lápiz rojo** y quiere pintar una manzana con partes claras y oscuras. ¿Qué hace?',
          explain: 'Con un solo lápiz, la **presión** da varios tonos: poca presión en la parte iluminada y más en la sombra, con un degradado entre ambas.' },
        { options: [
          { id: 'a', text: 'Aprieta poco en la parte con luz y más en la parte sombreada' },
          { id: 'b', text: 'Aprieta igual en toda la manzana', feedback: 'Así quedaría de un solo tono, plana.' },
          { id: 'c', text: 'Pide prestado un crayón negro para la sombra', feedback: 'Podría ayudar, pero no es necesario: con la presión del mismo lápiz logra tonos oscuros.' },
        ], correct: ['a'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'hacer',
          prompt: '**En casa:** arma tu **muestrario de técnicas secas** con los materiales que tengas.' },
        { goal: 'Crear una hoja de muestras que te sirva de guía para tus próximos trabajos.',
          steps: [
            { title: 'Divide la hoja', detail: 'Dobla una hoja en 6 rectángulos y ponle título a cada uno: presión, capas, degradado, difuminado, esgrafiado y "mi favorito".' },
            { title: 'Prueba cada truco', detail: 'Usa lápices, crayones o pastel (lo que tengas). Si no tienes pastel, difumina un crayón suave o carbón con el dedo o un algodón.' },
            { title: 'Esgrafiado seguro', detail: 'Raspa con un palito de paleta o un clip abierto, siempre hacia afuera de tu cuerpo.' },
            { title: 'Rotula', detail: 'Escribe debajo de cada muestra qué material usaste y para qué te serviría.' },
          ],
          evidence: 'Tu muestrario con 6 recuadros rotulados.',
          rubric: ['Logré al menos 3 tonos con la presión', 'Mezclé dos colores con capas', 'Hice un degradado sin cortes', 'Rotulé cada muestra'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:2.2.1'], prompt: '¿Qué técnica consiste en **cubrir colores con crayón oscuro y raspar** para descubrirlos?' },
        { options: [
          { id: 'a', text: 'Degradado' },
          { id: 'b', text: 'Esgrafiado' },
          { id: 'c', text: 'Difuminado' },
          { id: 'd', text: 'Capas' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:2.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El pastel se puede difuminar con el dedo para lograr colores suaves.', answer: true },
          { text: 'Los lápices de colores son la mejor opción para cubrir rápido una pared grande.', answer: false, why: 'Su trazo es fino: sirven para detalles. Para superficies grandes, crayones u otra técnica.' },
          { text: 'Al poner una capa de azul sobre una de amarillo se ve verde.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Tintas, técnica mixta y cartel ───────────────────────── */
  lesson({
    id: 's03-art-2',
    title: 'Técnica mixta para un cartel que comunica',
    icon: 'Megaphone',
    minutes: 15,
    gancho: 'Caminando por tu comunidad ves carteles de ferias, campañas de vacunación y rutas de evacuación. ¿Por qué algunos se entienden en un segundo y otros no?',
    objetivos: ['Diseñar un cartel público claro mediante técnica mixta, ícono, contraste y pocas palabras'],
    resumen: [
      'Tintas: tinta china, marcadores y acuarelas. Dan líneas firmes (tinta) o manchas transparentes (acuarela).',
      'Técnica mixta: combinar dos o más técnicas en una obra. La más conocida es crayón + acuarela: la cera rechaza el agua y los trazos de crayón resaltan.',
      'Un ícono es un dibujo sencillo que se entiende sin palabras (una gota = agua, un corazón = salud o amor).',
      'Un buen cartel tiene un mensaje principal, un ícono grande, colores con contraste, pocas palabras con letras grandes y espacio libre para respirar.',
    ],
    media: {
      id: 's03-art-2-carteles', kind: 'image', title: '¿Cuál se entiende mejor?', aspect: '4:3',
      alt: 'Dos carteles sobre cuidar el agua. El primero tiene mucho texto pequeño y dibujos diminutos. El segundo tiene una gota grande, el título "Cierra el chorro" y colores azul y amarillo que contrastan.',
      brief: 'Ilustración escolar de dos carteles verticales colgados en una pared de escuela pública guatemalteca. Cartel A (mal ejemplo): fondo celeste pálido, 6 renglones de texto pequeño, 5 dibujos diminutos, letras claras sobre fondo claro. Cartel B (buen ejemplo): fondo amarillo, gota azul enorme con una llave de chorro cerrada, título en letras grandes "Cierra el chorro", una línea pequeña "Cada gota cuenta", espacio libre alrededor. Técnica visible: crayón de cera con acuarela. Sin marcas ni logotipos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'conocer', title: 'Tintas y técnica mixta',
          prompt: 'Además de las técnicas secas, hay técnicas con **tinta** y con **agua**. Y se pueden **combinar**. Toca cada tarjeta.' },
        { icon: 'PenTool', body: 'Cuando una obra usa **dos o más técnicas**, decimos que es de **técnica mixta**.', reveal: [
          { icon: 'PenTool', front: 'Tinta', back: 'La **tinta china** o los **marcadores** dan líneas firmes y oscuras. Sirven para contornos y letras. Déjala secar antes de tocarla para no manchar.' },
          { icon: 'Droplet', front: 'Acuarela', back: 'Pintura que se diluye en **agua**. Da manchas **transparentes** y suaves. Se usa con pincel y poca agua para no romper el papel.' },
          { icon: 'Layers', front: 'Crayón + acuarela', back: 'Dibuja con crayón de cera y luego pinta encima con acuarela: la **cera rechaza el agua** y tus trazos quedan brillando. Se llama técnica de **reserva**.' },
          { icon: 'Scissors', front: 'Otras mezclas', back: '**Collage** (papeles recortados) con lápiz de color; tinta con crayón; pastel sobre acuarela seca. ¡Experimenta!' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'conocer',
          prompt: 'Observa los dos carteles. Si pasas en bicicleta frente a ellos, ¿cuál entenderías **en un segundo**?',
          explain: 'El cartel B usa un **ícono grande**, **pocas palabras** y **colores que contrastan**. Hoy aprenderás a diseñar así, usando técnicas gráficas.' },
        { options: [
          { id: 'a', text: 'El cartel A, porque explica más cosas', icon: 'FileText', feedback: 'Tiene mucha información, pero nadie la lee de pasada. Un cartel debe entenderse rápido.' },
          { id: 'b', text: 'El cartel B, porque su mensaje se ve de lejos', icon: 'Eye' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'conocer', title: 'El lenguaje de los íconos en un cartel',
          prompt: 'Un **cartel** o **afiche** es una imagen que comunica **un mensaje rápido** a mucha gente. Su herramienta principal es el **ícono**.',
          media: {
            id: 's03-art-2-iconos', kind: 'diagram', title: 'Íconos que hablan', aspect: '16:9',
            alt: 'Seis íconos sencillos en recuadros: una gota, una mano con agua, un árbol, una flecha de salida, un corazón y un bote de basura, cada uno con la palabra que representa.',
            brief: 'Diagrama de 6 íconos planos de trazo grueso (estilo señalética), en cuadrícula 3×2 sobre fondo blanco: gota (agua), manos con gotas (lavado de manos), árbol (bosque), flecha verde saliendo por una puerta (salida), corazón (salud), bote con flecha (basura en su lugar). Debajo, la palabra. A la derecha, un ejemplo de cartel que usa uno de ellos en grande. Colores planos con contraste alto.',
          } },
        { icon: 'Megaphone', body: 'Los diseñadores siguen **cinco reglas** para que un cartel funcione. Toca cada una.', reveal: [
          { icon: 'Target', front: '1. Un solo mensaje', back: '¿Qué quieres que la gente haga o sepa? Dilo en **una frase corta**: "Cierra el chorro".' },
          { icon: 'Image', front: '2. Un ícono grande', back: 'Un dibujo **sencillo** que se entiende sin leer. Mejor uno grande que muchos pequeños.' },
          { icon: 'Contrast', front: '3. Contraste', back: 'Colores que se distinguen bien: oscuro sobre claro (azul sobre amarillo, negro sobre blanco). Claro sobre claro no se lee.' },
          { icon: 'Type', front: '4. Pocas palabras, letras grandes', back: 'El título debe leerse **a varios pasos de distancia**. Lo más importante, más grande.' },
          { icon: 'Maximize2', front: '5. Espacio libre', back: 'Deja zonas vacías alrededor del ícono y del título: el ojo descansa y encuentra rápido el mensaje.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: el cartel de lavado de manos',
          prompt: 'Mira cómo Kevin planifica un cartel para el lavamanos de su escuela.' },
        { icon: 'Hand', problem: 'La escuela necesita un cartel para recordar lavarse las manos antes de la refacción. Kevin tiene crayones, acuarelas y un marcador negro.',
          steps: [
            { text: '**Mensaje:** "Lávate las manos" (una sola idea).' },
            { text: '**Ícono:** dos manos con gotas de agua y burbujas, grande, en el centro.', why: 'Se entiende aunque alguien no lea bien o hable otro idioma.' },
            { text: '**Técnica mixta:** dibuja las burbujas con crayón **blanco** y luego pinta todo el fondo con acuarela **azul**: las burbujas aparecen brillando.', why: 'La cera rechaza el agua (técnica de reserva).' },
            { text: '**Letras:** cuando la acuarela seca, escribe el título con marcador negro, en letras grandes, arriba.', why: 'Negro sobre azul claro da buen contraste; esperar el secado evita manchas.' },
            { text: '**Revisión:** se aleja cinco pasos. ¿Se entiende? Deja espacio libre alrededor de las manos.' },
          ],
          answer: 'Un cartel con **un mensaje**, **un ícono grande**, **contraste**, **pocas palabras** y **técnica mixta** (crayón + acuarela + tinta).',
          tip: 'Haz primero un boceto pequeño a lápiz; así corriges antes de usar los materiales.' },
      ),
      S.tf(
        { fase: 'construir', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'conocer',
          prompt: 'Revisa lo aprendido. ¿Verdadero o falso?',
          hint: 'Piensa en las cinco reglas del cartel y en por qué funciona la técnica crayón + acuarela.',
          explain: 'La cera reserva el dibujo, mientras el ícono grande, el contraste y pocas palabras hacen legible el mensaje público.' },
        { statements: [
          { text: 'En la técnica de reserva, la cera del crayón rechaza la acuarela.', answer: true },
          { text: 'Un cartel es mejor si tiene muchos dibujos pequeños.', answer: false, why: 'Se ve saturado. Es mejor un ícono grande y claro.' },
          { text: 'Letras amarillas sobre fondo blanco tienen buen contraste.', answer: false, why: 'Claro sobre claro casi no se lee. Usa oscuro sobre claro.' },
          { text: 'Una obra que combina tinta, crayón y acuarela es de técnica mixta.', answer: true },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'hacer',
          prompt: 'Tu grado hará un cartel para la **ruta de evacuación** en caso de sismo. ¿Qué diseño es el más adecuado?',
          explain: 'Una flecha grande (ícono), pocas palabras ("Salida") y colores con mucho contraste (blanco sobre verde, como las señales de evacuación) se entienden rápido, incluso con prisa.' },
        { options: [
          { id: 'a', text: 'Una flecha blanca grande sobre fondo verde con la palabra "SALIDA"' },
          { id: 'b', text: 'Un párrafo que explica qué hacer durante un sismo, en letra pequeña', feedback: 'En una emergencia nadie lee un párrafo. El cartel debe entenderse de un vistazo.' },
          { id: 'c', text: 'Un paisaje con volcanes y muchas flechas pequeñas de colores', feedback: 'Es bonito, pero confunde: ¿cuál flecha seguir?' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'hacer',
          prompt: 'Planifica un **cartel** para tu escuela o comunidad (ruta segura, cuidado del agua, no tirar basura…). Describe tu plan: **mensaje**, **ícono**, **colores** (con contraste) y **técnica gráfica** que usarás y por qué.' },
        { minWords: 35, placeholder: 'Mi mensaje será… El ícono… Los colores… Usaré la técnica… porque…',
          model: 'Mi mensaje será "Basura en su lugar". El ícono será un bote de basura grande con una bolsa entrando. Usaré fondo amarillo y el bote en verde oscuro con contorno negro para que contraste. Haré técnica mixta: dibujaré el bote con crayones de cera y pintaré el fondo con acuarela amarilla, porque la cera no deja pasar el agua. El título lo escribiré con marcador negro en letras grandes.',
          rubric: ['Tiene un solo mensaje corto', 'Describe un ícono grande y sencillo', 'Elige colores con contraste', 'Nombra la técnica gráfica y explica por qué la eligió'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'hacer',
          prompt: '**En casa:** realiza tu cartel en tamaño carta o más grande y pruébalo con tu familia.' },
        { goal: 'Producir un cartel con técnica mixta que se entienda a cinco pasos de distancia.',
          steps: [
            { title: 'Boceto', detail: 'En un papel pequeño, dibuja a lápiz dónde irán el ícono, el título y el espacio libre.' },
            { title: 'Crayón primero', detail: 'Dibuja el ícono y los detalles que quieras "reservar" con crayón de cera, apretando fuerte.' },
            { title: 'Color y tinta', detail: 'Pinta el fondo con acuarela (o crayón o lápices, si no tienes). Cuando seque, escribe el título con marcador o tinta.' },
            { title: 'Prueba de los cinco pasos', detail: 'Pega el cartel en la pared, aléjate cinco pasos y pregunta a alguien de tu familia qué dice. Si duda, mejora el contraste o agranda el ícono.' },
          ],
          evidence: 'Tu cartel terminado y una nota con lo que tu familia entendió al verlo.',
          rubric: ['Mi cartel tiene un solo mensaje', 'El ícono es grande y claro', 'Usé al menos dos técnicas gráficas', 'Se entiende a cinco pasos'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:2.2.1'], prompt: '¿Por qué funciona la técnica de dibujar con **crayón de cera** y pintar encima con **acuarela**?' },
        { options: [
          { id: 'a', text: 'Porque la cera rechaza el agua y los trazos quedan visibles' },
          { id: 'b', text: 'Porque la acuarela borra el crayón' },
          { id: 'c', text: 'Porque el crayón se disuelve en el agua' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:2.2.1'], prompt: 'Clasifica cada decisión de diseño: ¿ayuda o estorba a que el cartel se entienda?' },
        { buckets: [
          { id: 'si', label: 'Ayuda', icon: 'ThumbsUp', color: 'var(--c-ok)' },
          { id: 'no', label: 'Estorba', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'd1', text: 'Un ícono grande y sencillo', bucket: 'si' },
          { id: 'd2', text: 'Título en letras pequeñas', bucket: 'no' },
          { id: 'd3', text: 'Letras oscuras sobre fondo claro', bucket: 'si' },
          { id: 'd4', text: 'Cinco mensajes distintos', bucket: 'no' },
          { id: 'd5', text: 'Espacio libre alrededor del ícono', bucket: 'si' },
        ] },
      ),
      cierre({ areas: ['art'], cnb: ['art:2.2.1'] },
        ['Uso presión, capas y degradado con técnicas secas', 'Explico cómo funciona la técnica mixta de crayón y acuarela', 'Diseño un cartel con un ícono, contraste y pocas palabras'],
        ['Completaré mi muestrario de técnicas', 'Haré mi cartel y lo probaré a cinco pasos', 'Observaré los carteles de mi comunidad y pensaré cómo mejorarlos']),
    ],
  }),
];
