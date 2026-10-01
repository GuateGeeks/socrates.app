/**
 * Ciencias Naturales y Tecnología · Unidad 1 · Semana 3 — Diversidad de la vida y mensajeros del cuerpo.
 * Progresión: clasificar animales en vertebrados e invertebrados → por qué hay tanta diversidad
 * (ADN, genes y cromosomas) → glándulas de secreción interna y externa (prepara la semana 4).
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Vertebrados e invertebrados ───────────────────────── */
  lesson({
    id: 's03-cnt-1',
    title: 'Vertebrados e invertebrados',
    icon: 'Bird',
    minutes: 15,
    gancho: 'Pasa la mano por el centro de tu espalda: sientes una fila de huesitos. ¿Cuáles animales tienen algo así y cuáles no?',
    objetivos: ['Clasificar animales como vertebrados o invertebrados mediante rasgos observables y una clave sencilla'],
    resumen: [
      'Los vertebrados tienen columna vertebral y un esqueleto interno. Son cinco grupos: peces, anfibios, reptiles, aves y mamíferos.',
      'Los invertebrados no tienen columna vertebral. Son la gran mayoría de las especies animales: artrópodos (insectos, arácnidos, crustáceos), moluscos, anélidos (lombrices), equinodermos y medusas, entre otros.',
      'Muchos invertebrados tienen un esqueleto externo (exoesqueleto) o una concha; otros tienen el cuerpo blando.',
    ],
    media: {
      id: 's03-cnt-1-sendero', kind: 'image', title: 'Un sendero lleno de animales', aspect: '16:9',
      alt: 'Ilustración de un sendero en un bosque nuboso de Guatemala con un quetzal, una iguana, una rana, un venado, una mariposa morpho, un caracol, una tarántula, una lombriz y un río con una mojarra.',
      brief: 'Ilustración horizontal y detallada de un sendero de bosque nuboso guatemalteco (helechos, bromelias, musgo, río pequeño). Incluir, bien visibles y en proporciones realistas: quetzal en una rama, iguana en una piedra, rana verde junto al río, venado cola blanca al fondo, mojarra en el agua, mariposa azul, caracol sobre una hoja, tarántula junto a una raíz, lombriz de tierra en el suelo húmedo, hormigas en fila. Sin rótulos (el estudiante los identifica). Colores naturales, estilo de guía de naturaleza para niños.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:2.1.2'], ambito: 'conocer', title: 'Con columna o sin columna',
          prompt: 'Una forma de organizar a los animales es preguntarse: **¿tiene columna vertebral?** Toca las tarjetas.' },
        { icon: 'Bone', body: 'La **columna vertebral** es una fila de huesos llamados **vértebras** que sostiene el cuerpo y protege la médula espinal.', reveal: [
          { icon: 'Bone', front: 'Vertebrados', back: 'Tienen **columna vertebral** y **esqueleto interno** (huesos dentro del cuerpo), y un cráneo que protege el cerebro. Ejemplos: quetzal, jaguar, iguana, tú.' },
          { icon: 'Bug', front: 'Invertebrados', back: '**No** tienen columna vertebral. Algunos tienen un **esqueleto externo** duro (exoesqueleto), otros una **concha** y otros el cuerpo **blando**.' },
          { icon: 'BarChart3', front: '¿Cuántos hay?', back: 'Los invertebrados son **la gran mayoría** de las especies animales del planeta: solo los insectos son muchísimas más especies que todos los vertebrados juntos.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.2'], ambito: 'conocer',
          prompt: 'Mira el sendero de la imagen. ¿Cuál de estos animales tiene una **columna vertebral** como la tuya?',
          explain: 'La **iguana** tiene columna vertebral y esqueleto interno. El caracol y la mariposa no tienen huesos.' },
        { layout: 'grid', options: [
          { id: 'a', text: 'Caracol', icon: 'Shell', feedback: 'El caracol tiene cuerpo blando y una concha, pero no huesos.' },
          { id: 'b', text: 'Iguana', icon: 'Footprints' },
          { id: 'c', text: 'Mariposa', icon: 'Bug', feedback: 'La mariposa tiene un esqueleto externo, duro y delgado, pero no columna vertebral.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.2'], ambito: 'conocer',
          prompt: 'Organiza a los animales del sendero en **vertebrados** e **invertebrados**.',
          hint: 'Pregúntate: ¿tiene huesos por dentro? Si tiene concha, exoesqueleto o cuerpo blando, es invertebrado.',
          explain: 'Quetzal, rana, mojarra, venado e iguana tienen columna. Tarántula, caracol, lombriz y hormiga no.' },
        { buckets: [
          { id: 'v', label: 'Vertebrado', icon: 'Bone', color: 'var(--area-cnt)' },
          { id: 'i', label: 'Invertebrado', icon: 'Bug', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'a1', text: 'Quetzal', bucket: 'v' },
          { id: 'a2', text: 'Tarántula', bucket: 'i' },
          { id: 'a3', text: 'Rana', bucket: 'v' },
          { id: 'a4', text: 'Caracol', bucket: 'i' },
          { id: 'a5', text: 'Mojarra', bucket: 'v' },
          { id: 'a6', text: 'Lombriz de tierra', bucket: 'i' },
          { id: 'a7', text: 'Venado', bucket: 'v' },
          { id: 'a8', text: 'Hormiga', bucket: 'i' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.2'], ambito: 'conocer', title: 'Los cinco grupos de vertebrados',
          prompt: 'Los vertebrados se organizan en **cinco grupos**. Fíjate en la **piel** y en **cómo respiran y nacen**. Toca cada tarjeta.',
          media: { id: 's03-cnt-1-vertebrados', kind: 'diagram', title: 'Cinco grupos de vertebrados de Guatemala', aspect: '16:9',
            alt: 'Cinco columnas: mojarra (pez), rana (anfibio), iguana (reptil), quetzal (ave) y jaguar (mamífero), con íconos de su cubierta del cuerpo, forma de respirar y forma de nacer.',
            brief: 'Infografía de 5 columnas con un animal guatemalteco cada una: mojarra, rana, iguana, quetzal, jaguar. Debajo de cada uno tres íconos con texto corto: cubierta (escamas húmedas / piel húmeda / escamas secas / plumas / pelo), respiración (branquias / branquias de renacuajo y pulmones de adulto / pulmones / pulmones / pulmones) y nacimiento (huevos en agua / huevos en agua / huevos con cáscara en tierra / huevos con cáscara / la mayoría nace del vientre y toma leche). Colores planos, letra grande.' } },
        { icon: 'Bird', body: 'Todos tienen columna, pero se diferencian por su cubierta, su respiración y su forma de nacer.', reveal: [
          { icon: 'Fish', front: 'Peces', back: 'Viven en el agua, respiran por **branquias**, tienen **escamas** y **aletas**. Ejemplo: la mojarra.' },
          { icon: 'Droplets', front: 'Anfibios', back: '**Piel húmeda sin escamas**. Nacen en el agua (renacuajos con branquias) y de adultos respiran con **pulmones** y por la piel. Ejemplo: la rana.' },
          { icon: 'Footprints', front: 'Reptiles', back: 'Piel con **escamas secas**; respiran con pulmones; ponen **huevos con cáscara** en tierra. Ejemplos: iguana, tortuga, cocodrilo, serpiente.' },
          { icon: 'Feather', front: 'Aves', back: 'Cuerpo cubierto de **plumas**, pico, alas y huevos con cáscara dura. Ejemplo: el quetzal, ave nacional.' },
          { icon: 'Cat', front: 'Mamíferos', back: 'Tienen **pelo** y las madres **amamantan** a sus crías con leche. Casi todos nacen del vientre. Ejemplos: jaguar, manatí, murciélago, ser humano.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.2'], ambito: 'conocer',
          prompt: 'Une cada animal con su grupo de vertebrados.',
          hint: 'Fíjate en la cubierta del cuerpo: plumas, pelo, escamas secas, piel húmeda o escamas con aletas.',
          explain: 'Tortuga: escamas secas → reptil. Tucán: plumas → ave. Manatí: amamanta → mamífero. Salamandra: piel húmeda → anfibio. Tiburón: branquias y aletas → pez.' },
        { leftTitle: 'Animal', rightTitle: 'Grupo', pairs: [
          { id: 't', left: 'Tortuga marina', right: 'Reptil' },
          { id: 'u', left: 'Tucán', right: 'Ave' },
          { id: 'm', left: 'Manatí', right: 'Mamífero' },
          { id: 's', left: 'Salamandra', right: 'Anfibio' },
          { id: 'b', left: 'Tiburón', right: 'Pez' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.2'], ambito: 'conocer', title: 'Los grupos de invertebrados',
          prompt: 'Los invertebrados son muy variados. Conoce los grupos más comunes. Toca las tarjetas.' },
        { icon: 'Bug', body: 'El grupo más grande es el de los **artrópodos**: tienen **patas articuladas** (con "coyunturas") y un **exoesqueleto**.', reveal: [
          { icon: 'Bug', front: 'Insectos', back: 'Artrópodos con **6 patas** y el cuerpo en 3 partes (cabeza, tórax, abdomen). Muchos tienen alas. Ejemplos: hormiga, abeja, mariposa.' },
          { icon: 'Bug', front: 'Arácnidos', back: 'Artrópodos con **8 patas** y sin antenas. Ejemplos: araña, tarántula, alacrán, garrapata.' },
          { icon: 'Shell', front: 'Crustáceos y miriápodos', back: '**Crustáceos**: cangrejo y camarón (muchas patas, casi todos acuáticos). **Miriápodos**: ciempiés, con muchísimas patas.' },
          { icon: 'Shell', front: 'Moluscos', back: 'Cuerpo **blando**; muchos tienen **concha**. Ejemplos: caracol, jute, almeja, pulpo (sin concha).' },
          { icon: 'Route', front: 'Anélidos', back: 'Cuerpo blando formado por **anillos**. Ejemplo: la lombriz de tierra, que ayuda a airear el suelo.' },
          { icon: 'Star', front: 'Otros', back: '**Equinodermos** (estrella de mar), **medusas** y **esponjas** de mar.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.2'], ambito: 'hacer', title: 'Ejemplo: clasificar con una clave',
          prompt: 'Los científicos usan **claves**: preguntas de sí o no que llevan paso a paso al grupo del animal. Mira cómo se usa.' },
        { icon: 'Search', problem: 'En el patio, Josué encuentra un animal pequeño con **8 patas** articuladas y sin antenas. ¿A qué grupo pertenece?',
          steps: [
            { text: 'Pregunta 1: ¿tiene columna vertebral? **No**, su cuerpo es duro por fuera → es **invertebrado**.' },
            { text: 'Pregunta 2: ¿tiene patas articuladas y exoesqueleto? **Sí** → es un **artrópodo**.', why: 'Moluscos y anélidos no tienen patas articuladas.' },
            { text: 'Pregunta 3: ¿cuántas patas tiene? **8** y no tiene antenas → es un **arácnido**.', why: 'Los insectos tienen 6 patas; los arácnidos, 8.' },
          ],
          answer: 'Es un **arácnido** (por ejemplo, una araña): invertebrado → artrópodo → arácnido.',
          tip: 'Cuenta siempre las patas con cuidado… ¡y observa sin tocar a los animales que no conoces!' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.1.2'], ambito: 'conocer',
          prompt: 'El **murciélago** vuela y tiene alas. ¿En qué grupo lo clasificas?',
          explain: 'Aunque vuela, el murciélago tiene **pelo** y las madres **amamantan** a sus crías: es un **mamífero**.' },
        { options: [
          { id: 'a', text: 'Ave, porque vuela', icon: 'Feather', feedback: 'Volar no define a las aves: las aves tienen plumas. El murciélago tiene pelo.' },
          { id: 'b', text: 'Mamífero, porque tiene pelo y amamanta', icon: 'Cat' },
          { id: 'c', text: 'Insecto, porque tiene alas', icon: 'Bug', feedback: 'Los insectos no tienen columna vertebral; el murciélago sí.' },
        ], correct: ['b'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.1.2'], ambito: 'conocer',
          prompt: 'Un animal tiene **piel húmeda sin escamas**, pone huevos en el agua y, cuando es pequeño, respira por **branquias**. ¿Qué es?',
          explain: 'Piel húmeda, huevos en agua y una etapa con branquias: es un **anfibio**, como la rana o la salamandra.' },
        { options: [
          { id: 'a', text: 'Un pez', feedback: 'Los peces tienen escamas y respiran por branquias toda la vida.' },
          { id: 'b', text: 'Un reptil', feedback: 'Los reptiles tienen escamas secas y ponen huevos con cáscara en tierra.' },
          { id: 'c', text: 'Un anfibio' },
        ], correct: ['c'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.1.2'], ambito: 'hacer',
          prompt: 'Usa lo aprendido: clasifica cada invertebrado en su grupo.',
          explain: 'Insectos: 6 patas. Arácnidos: 8 patas. Moluscos: cuerpo blando, a veces con concha. Anélidos: cuerpo en anillos.' },
        { buckets: [
          { id: 'ins', label: 'Insecto (6 patas)', icon: 'Bug', color: 'var(--area-cnt)' },
          { id: 'ara', label: 'Arácnido (8 patas)', icon: 'Bug', color: 'var(--area-ccss)' },
          { id: 'mol', label: 'Molusco', icon: 'Shell', color: 'var(--c-maiz-strong)' },
          { id: 'ane', label: 'Anélido', icon: 'Route', color: 'var(--area-art)' },
        ], items: [
          { id: 'b1', text: 'Abeja', bucket: 'ins' },
          { id: 'b2', text: 'Alacrán', bucket: 'ara' },
          { id: 'b3', text: 'Jute (caracol de río)', bucket: 'mol' },
          { id: 'b4', text: 'Lombriz de tierra', bucket: 'ane' },
          { id: 'b5', text: 'Zancudo', bucket: 'ins' },
          { id: 'b6', text: 'Pulpo', bucket: 'mol', feedback: 'El pulpo no tiene concha, pero es un molusco de cuerpo blando.' },
          { id: 'b7', text: 'Garrapata', bucket: 'ara', feedback: 'La garrapata tiene 8 patas: es un arácnido, no un insecto.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.2'], prompt: '¿Cuál de estos animales es **invertebrado**?' },
        { options: [
          { id: 'a', text: 'La serpiente' },
          { id: 'b', text: 'El pulpo' },
          { id: 'c', text: 'La rana' },
          { id: 'd', text: 'El murciélago' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Los insectos tienen 6 patas y los arácnidos tienen 8.', answer: true },
          { text: 'Los vertebrados son la mayoría de las especies animales del planeta.', answer: false, why: 'La gran mayoría de especies son invertebrados.' },
          { text: 'Las aves son los únicos vertebrados con plumas.', answer: true },
          { text: 'La tortuga es un anfibio porque vive en el agua.', answer: false, why: 'La tortuga tiene escamas y pone huevos con cáscara en tierra: es un reptil.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. ADN y diversidad ───────────────────────── */
  lesson({
    id: 's03-cnt-2',
    title: 'ADN, genes y la diversidad de la vida',
    icon: 'Dna',
    minutes: 14,
    gancho: 'En el mercado hay mazorcas amarillas, blancas, moradas y rojas. ¿Son el mismo maíz? ¿Por qué se ven tan distintas?',
    objetivos: ['Explicar la relación entre ADN, genes, cromosomas y diversidad biológica'],
    resumen: [
      'Todos los seres vivos usan ADN con el mismo "alfabeto" químico de cuatro letras. Lo que cambia es el mensaje: genes distintos producen especies distintas.',
      'Cada especie tiene un número fijo de cromosomas (personas 46, maíz 20, perro 78). Tener más cromosomas no significa ser más complejo.',
      'Dentro de una especie hay variación porque cada individuo recibe una mezcla de genes de sus progenitores y porque el ADN puede tener pequeños cambios (mutaciones). El ambiente también influye.',
      'La diversidad protege la vida: si llega una sequía o una plaga, algunas variedades resisten.',
    ],
    media: {
      id: 's03-cnt-2-maices', kind: 'image', title: 'Los colores del maíz', aspect: '16:9',
      alt: 'Fotografía de mazorcas de maíz amarillo, blanco, morado, rojo y pinto, ordenadas sobre un petate en un mercado de Guatemala.',
      brief: 'Fotografía cenital de mazorcas de maíz de distintos colores (amarillo, blanco, negro o morado, rojo y pinto) sobre un petate, con luz natural. Sin personas identificables ni marcas. Rótulo superpuesto: "Una sola especie: Zea mays". Opcional: una mano sosteniendo una mazorca abierta para mostrar granos de dos colores.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:2.2.1'], ambito: 'conocer', title: 'El mismo alfabeto, mensajes distintos',
          prompt: 'Recuerda: el **ADN** forma los **cromosomas**, y los **genes** son pedazos de ADN con instrucciones. Toca las tarjetas.',
          media: { id: 's03-cnt-2-alfabeto', kind: 'animation', title: 'Cuatro letras, millones de seres', aspect: '16:9', duration: 40,
            alt: 'Animación: las letras A, T, C y G se ordenan en cadenas distintas; cada cadena se convierte en un ser vivo diferente: un hongo, una planta de maíz, un quetzal y una persona.',
            brief: 'Animación 2D de 40 s. Cuatro fichas de colores con las letras A, T, C, G. Se combinan en cadenas de distinto orden (como palabras). Cada cadena "florece" en un ser vivo: bacteria, hongo, planta de maíz, jaguar, quetzal, persona. Mensaje final en pantalla: "Todos usamos el mismo alfabeto. Lo que cambia es el mensaje". Narración en español con subtítulos.' } },
        { icon: 'Dna', body: 'El ADN de **todos** los seres vivos, desde una bacteria hasta un quetzal, está escrito con el mismo alfabeto químico de **cuatro "letras"** (A, T, C y G).', reveal: [
          { icon: 'BookOpen', front: 'Como las palabras', back: 'Con las mismas letras, en distinto orden, escribes "amor" o "Roma", "saco" o "cosa": palabras distintas. Con las mismas 4 letras del ADN, ordenadas de otra forma, se escriben **genes distintos**.' },
          { icon: 'Layers', front: 'Genes distintos, especies distintas', back: 'Las diferencias en los genes producen **especies diferentes**: por eso un jaguar no se parece a una iguana.' },
          { icon: 'Users', front: 'Parecidos de familia', back: 'Especies emparentadas tienen ADN **muy parecido**. Mientras más parecido es el ADN, más cercano es el parentesco.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.2.1'], ambito: 'conocer',
          prompt: 'Las mazorcas amarillas, blancas, moradas y rojas de la imagen, ¿son de la **misma especie**?',
          explain: 'Sí: todas son **maíz** (_Zea mays_). Sus colores distintos se deben a **diferencias en sus genes**. Hoy verás cómo el ADN produce tanta diversidad.' },
        { options: [
          { id: 'a', text: 'Sí, son maíz, pero con genes un poco distintos', icon: 'Wheat' },
          { id: 'b', text: 'No, cada color es una planta diferente, sin relación', icon: 'X', feedback: 'Se pueden cruzar entre sí y dar mazorcas: son la misma especie.' },
          { id: 'c', text: 'Sí, y el color depende solo de la pintura del mercado', icon: 'Palette', feedback: 'El color viene de los granos mismos, no de pintura.' },
        ], correct: ['a'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.2.1'], ambito: 'conocer', title: 'Ejemplo: ¿más cromosomas es más complejo?',
          prompt: 'Cada especie tiene un número fijo de cromosomas en sus células. Mira cómo razonar con estos datos.' },
        { icon: 'Hash', problem: 'Las células de las personas tienen **46** cromosomas; las del maíz, **20**; y las del perro, **78**. ¿Significa que el perro es más complejo que las personas?',
          steps: [
            { text: 'Ordeno: maíz 20 < personas 46 < perro 78.' },
            { text: 'Si más cromosomas fuera "más complejo", el perro sería más complejo que las personas. Pero las personas hablan, escriben y construyen ciudades.', why: 'Un contraejemplo muestra que la idea no funciona.' },
            { text: 'Lo que importa no es **cuántos** cromosomas hay, sino **qué instrucciones** (genes) llevan y cómo se usan.' },
          ],
          answer: '**No.** El número de cromosomas es una característica de cada especie, pero **no mide** qué tan complejo es un ser vivo.',
          tip: 'Lo que hace distinta a cada especie es el **mensaje** de sus genes.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.2.1'], ambito: 'conocer',
          prompt: 'Un jaguar y una iguana usan el mismo alfabeto de ADN. ¿Por qué son tan diferentes?',
          hint: 'Piensa en las palabras "saco" y "cosa": mismas letras, orden distinto.',
          explain: 'Tienen **genes diferentes**: el mismo alfabeto, pero instrucciones distintas.' },
        { options: [
          { id: 'a', text: 'Porque sus genes llevan instrucciones distintas', icon: 'Dna' },
          { id: 'b', text: 'Porque la iguana no tiene ADN', icon: 'X', feedback: 'Todos los seres vivos tienen ADN.' },
          { id: 'c', text: 'Porque viven en lugares distintos', icon: 'Map', feedback: 'El lugar influye, pero lo que hace que sean especies diferentes son sus genes.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.2.1'], ambito: 'conocer', title: '¿Por qué somos distintos dentro de una misma especie?',
          prompt: 'Todas las personas somos de la misma especie, pero nadie es igual a otra persona. Toca las tarjetas.' },
        { icon: 'Users', body: 'La **variación** dentro de una especie tiene varias causas: unas están en los genes y otra en el ambiente.', reveal: [
          { icon: 'Copy', front: 'Mezcla de genes', back: 'En la **reproducción sexual**, cada hijo recibe una mezcla de cromosomas de su madre y de su padre. Cada mezcla es diferente.' },
          { icon: 'Sparkles', front: 'Mutaciones', back: 'A veces el ADN tiene un **cambio pequeño** al copiarse. La mayoría no se nota, algunos causan problemas y unos pocos resultan útiles.' },
          { icon: 'Sun', front: 'El ambiente', back: 'Dos plantas con los mismos genes crecen distinto si una recibe más **sol, agua y abono**. Los genes y el ambiente trabajan juntos.' },
          { icon: 'Wheat', front: 'Selección de los agricultores', back: 'Durante miles de años, los agricultores de Mesoamérica **escogieron** las mejores mazorcas para sembrar. Así se formaron muchas variedades de maíz.' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.2.1'], ambito: 'conocer',
          prompt: 'Clasifica cada ejemplo: ¿es diversidad **entre especies distintas** o **dentro de una misma especie**?',
          explain: 'Frijol negro y frijol rojo son la misma especie; un jaguar y un venado son especies distintas. Todas las personas son una sola especie.' },
        { buckets: [
          { id: 'entre', label: 'Entre especies distintas', icon: 'Layers', color: 'var(--area-cnt)' },
          { id: 'dentro', label: 'Dentro de una misma especie', icon: 'Users', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'd1', text: 'Maíz amarillo y maíz morado', bucket: 'dentro' },
          { id: 'd2', text: 'Un jaguar y un venado', bucket: 'entre' },
          { id: 'd3', text: 'Dos hermanas con distinto color de cabello', bucket: 'dentro' },
          { id: 'd4', text: 'Un quetzal y una iguana', bucket: 'entre' },
          { id: 'd5', text: 'Frijol negro y frijol rojo', bucket: 'dentro' },
          { id: 'd6', text: 'Un pino y un encino', bucket: 'entre' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.2.1'], ambito: 'conocer',
          prompt: 'Doña Teresa siembra **cuatro variedades** de maíz en su terreno. Un año llega una sequía y dos de ellas se secan, pero las otras dos dan cosecha. ¿Qué muestra esto?',
          explain: 'Las variedades tienen genes distintos: algunas **resisten mejor** la sequía. Por eso cuidar la diversidad de semillas protege la alimentación.' },
        { options: [
          { id: 'a', text: 'Que es mejor sembrar una sola variedad', icon: 'Minus', feedback: 'Si hubiera sembrado solo una de las que se secaron, habría perdido toda la cosecha.' },
          { id: 'b', text: 'Que la diversidad de genes ayuda a resistir cambios del ambiente', icon: 'ShieldCheck' },
          { id: 'c', text: 'Que la sequía no afecta al maíz', icon: 'Sun', feedback: 'Sí lo afectó: dos variedades se secaron.' },
        ], correct: ['b'] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.2.1', 'cnt:1.4.1'], ambito: 'conocer',
          prompt: 'Integra todo lo aprendido: completa el texto.',
          explain: 'ADN → genes → cromosomas; genes distintos = especies distintas; mezcla de genes y mutaciones = variación dentro de la especie.' },
        { text: 'El [[ADN]] guarda las instrucciones de la vida. Sus pedazos con instrucciones se llaman [[genes]], y el ADN enrollado forma los [[cromosomas]]. Las especies son distintas porque tienen genes distintos. Dentro de una especie, cada individuo es diferente por la [[mezcla]] de genes de sus progenitores y por pequeños cambios en el ADN llamados [[mutaciones]].',
          distractors: ['vacuolas', 'nutrientes'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.2.1'], prompt: '¿Por qué hay tanta **diversidad** de seres vivos?' },
        { options: [
          { id: 'a', text: 'Porque cada ser vivo usa un alfabeto de ADN diferente' },
          { id: 'b', text: 'Porque los genes llevan instrucciones distintas en cada especie y varían entre individuos' },
          { id: 'c', text: 'Porque solo algunos seres vivos tienen ADN' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Una especie con más cromosomas siempre es más compleja.', answer: false, why: 'El perro tiene 78 y las personas 46: el número no mide la complejidad.' },
          { text: 'El maíz blanco y el maíz morado pertenecen a la misma especie.', answer: true },
          { text: 'El ambiente también influye en cómo crece un ser vivo.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Glándulas ───────────────────────── */
  lesson({
    id: 's03-cnt-3',
    title: 'Glándulas: fábricas y mensajeros del cuerpo',
    icon: 'HeartPulse',
    minutes: 15,
    gancho: 'Antes de pasar al frente a leer, a Mariana le late rápido el corazón y le sudan las manos. ¿Quién da esa orden en su cuerpo?',
    objetivos: ['Clasificar y ubicar glándulas endocrinas y exocrinas según dónde liberan sus sustancias'],
    resumen: [
      'Una glándula es un órgano que fabrica y libera sustancias.',
      'Las glándulas de secreción interna (endocrinas) liberan hormonas a la sangre: hipófisis (glándula maestra, en la base del cerebro), tiroides (cuello), suprarrenales (sobre los riñones) y páncreas.',
      'Las glándulas de secreción externa (exocrinas) sacan su producto por conductos hacia afuera del cuerpo o hacia una cavidad: sudoríparas, salivales, lagrimales, sebáceas y mamarias.',
      'El páncreas es mixto: produce insulina, que va a la sangre, y jugo digestivo, que va al intestino.',
    ],
    media: {
      id: 's03-cnt-3-glandulas', kind: 'diagram', title: 'Mapa de las glándulas del cuerpo', aspect: '3:4',
      alt: 'Silueta humana de frente con las glándulas marcadas: hipófisis en la cabeza, tiroides en el cuello, suprarrenales sobre los riñones y páncreas junto al estómago; y, en otro color, glándulas salivales, lagrimales y sudoríparas.',
      brief: 'Diagrama vertical de una silueta humana neutra (sin rasgos sexuales). Marcar en MORADO las glándulas de secreción interna: hipófisis (base del cerebro), tiroides (cuello, forma de mariposa), suprarrenales (sombrero sobre cada riñón), páncreas (detrás del estómago, marcado como "mixta" con los dos colores). Marcar en VERDE las de secreción externa: lagrimales (ojos), salivales (junto a la mandíbula), sudoríparas (lupa sobre la piel). Leyenda: "morado = a la sangre (hormonas)", "verde = hacia afuera por conductos". Letra grande, fondo blanco.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:2.3.1'], ambito: 'conocer', title: '¿Qué es una glándula?',
          prompt: 'Una **glándula** es un órgano que **fabrica y libera** sustancias. Según **hacia dónde** las envía, hay dos tipos. Toca las tarjetas.' },
        { icon: 'Factory', body: 'Liberar una sustancia se llama **secretar**, y la sustancia es la **secreción**.', reveal: [
          { icon: 'HeartPulse', front: 'Secreción interna (endocrinas)', back: 'Liberan **hormonas** directamente a la **sangre**. Las hormonas son **mensajeros químicos**: viajan por todo el cuerpo y dan órdenes a otros órganos.' },
          { icon: 'Droplets', front: 'Secreción externa (exocrinas)', back: 'Sacan su producto por **conductos** (tubitos) hacia **afuera del cuerpo** o hacia una cavidad, como la boca. Ejemplos: sudor, saliva, lágrimas.' },
          { icon: 'Copy', front: 'Glándula mixta', back: 'El **páncreas** hace las dos cosas: envía **insulina** a la sangre y **jugo digestivo** al intestino.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.1'], ambito: 'conocer',
          prompt: 'Cuando Mariana se pone nerviosa, su corazón late rápido en pocos segundos. ¿Qué crees que lo causa?',
          explain: 'Unas glándulas liberan a la sangre una sustancia llamada **adrenalina**, que llega al corazón y lo acelera. Las sustancias que viajan por la sangre como mensajes se llaman **hormonas**.' },
        { options: [
          { id: 'a', text: 'Una sustancia que su cuerpo liberó en la sangre', icon: 'Droplet' },
          { id: 'b', text: 'El frío del aula', icon: 'Snowflake', feedback: 'El frío no acelera el corazón de esa forma en unos segundos.' },
          { id: 'c', text: 'Algo que comió hace una semana', icon: 'Utensils', feedback: 'Es una respuesta inmediata, no por algo de hace días.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.1'], ambito: 'conocer', title: 'Las glándulas de secreción interna',
          prompt: 'Observa el mapa de la lección: las glándulas moradas envían hormonas a la sangre. Toca cada tarjeta.' },
        { icon: 'Brain', body: 'Aunque son pequeñas, sus hormonas controlan el **crecimiento**, la **energía**, el **azúcar de la sangre** y las **reacciones** ante el peligro.', reveal: [
          { icon: 'Crown', front: 'Hipófisis', back: 'En la **base del cerebro**; del tamaño de un frijol. Produce la **hormona del crecimiento** y da órdenes a otras glándulas: por eso la llaman **glándula maestra**.' },
          { icon: 'Thermometer', front: 'Tiroides', back: 'En el **cuello**, con forma de mariposa. Sus hormonas regulan la **velocidad con que el cuerpo usa la energía**. Necesita **yodo**: por eso se usa sal yodada.' },
          { icon: 'Zap', front: 'Suprarrenales', back: 'Como sombreritos **sobre los riñones**. Producen **adrenalina**, que prepara al cuerpo para reaccionar ante un susto o un peligro.' },
          { icon: 'Candy', front: 'Páncreas', back: '**Detrás del estómago**. Produce **insulina**, que ayuda a que el azúcar de la sangre entre a las células.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.1'], ambito: 'conocer',
          prompt: 'Clasifica cada glándula según **hacia dónde** envía lo que produce.',
          hint: 'Si su producto se ve o se siente afuera (sudor, lágrimas, saliva), es de secreción externa. Si produce hormonas, es interna.',
          explain: 'Internas: hipófisis, tiroides, suprarrenales. Externas: sudoríparas, salivales, lagrimales. Mixta: páncreas.' },
        { buckets: [
          { id: 'int', label: 'Secreción interna (a la sangre)', icon: 'HeartPulse', color: 'var(--area-fc)' },
          { id: 'ext', label: 'Secreción externa (por conductos)', icon: 'Droplets', color: 'var(--c-ok)' },
          { id: 'mix', label: 'Mixta', icon: 'Copy', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'g1', text: 'Hipófisis', bucket: 'int' },
          { id: 'g2', text: 'Glándulas sudoríparas', bucket: 'ext' },
          { id: 'g3', text: 'Tiroides', bucket: 'int' },
          { id: 'g4', text: 'Glándulas salivales', bucket: 'ext' },
          { id: 'g5', text: 'Páncreas', bucket: 'mix' },
          { id: 'g6', text: 'Suprarrenales', bucket: 'int' },
          { id: 'g7', text: 'Glándulas lagrimales', bucket: 'ext' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.1'], ambito: 'conocer', title: 'Las glándulas de secreción externa',
          prompt: 'Estas glándulas trabajan todos los días y casi no las notamos. Toca las tarjetas.' },
        { icon: 'Droplets', body: 'Sus productos protegen, limpian, enfrían o ayudan a digerir.', reveal: [
          { icon: 'Thermometer', front: 'Sudoríparas (piel)', back: 'Producen **sudor**. Al evaporarse de la piel, el sudor **enfría** el cuerpo.' },
          { icon: 'Utensils', front: 'Salivales (boca)', back: 'Producen **saliva**, que humedece la comida y **empieza la digestión**.' },
          { icon: 'Eye', front: 'Lagrimales (ojos)', back: 'Producen **lágrimas**, que **limpian y protegen** los ojos.' },
          { icon: 'Shield', front: 'Sebáceas (piel)', back: 'Producen una **grasa** que protege la piel y el cabello. En la pubertad trabajan más: por eso aparecen granitos.' },
          { icon: 'Milk', front: 'Mamarias', back: 'Producen **leche** para alimentar a los bebés después del parto.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.1'], ambito: 'conocer',
          prompt: 'Ubica cada glándula: une con el **lugar** del cuerpo donde está.',
          hint: 'Mira otra vez el mapa de glándulas de la lección.',
          explain: 'Hipófisis: base del cerebro. Tiroides: cuello. Suprarrenales: sobre los riñones. Páncreas: detrás del estómago. Lagrimales: junto a los ojos.' },
        { leftTitle: 'Glándula', rightTitle: 'Ubicación', pairs: [
          { id: 'h', left: 'Hipófisis', right: 'Base del cerebro' },
          { id: 't', left: 'Tiroides', right: 'Cuello' },
          { id: 's', left: 'Suprarrenales', right: 'Sobre los riñones' },
          { id: 'p', left: 'Páncreas', right: 'Detrás del estómago' },
          { id: 'l', left: 'Lagrimales', right: 'Junto a los ojos' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.1'], ambito: 'conocer', title: 'Ejemplo: la adrenalina en acción',
          prompt: 'Sigue paso a paso cómo una hormona funciona como **mensajero**.',
          media: { id: 's03-cnt-3-adrenalina', kind: 'animation', title: 'Un susto y una hormona', aspect: '16:9', duration: 35,
            alt: 'Animación: un perro ladra detrás de un niño; una señal viaja del cerebro a las suprarrenales; gotitas de adrenalina entran a la sangre y llegan al corazón, los pulmones y los músculos; luego todo se calma.',
            brief: 'Animación 2D de 35 s, estilo amable. Un niño camina por la calle de su aldea; un perro ladra detrás de una puerta. Vista transparente del cuerpo: el cerebro envía una señal (rayo) a las glándulas suprarrenales, que liberan gotitas moradas (adrenalina) a la sangre. Las gotitas llegan al corazón (late más rápido, contador de latidos sube), a los pulmones (respira rápido) y a los músculos (brillan). El niño se da cuenta de que el perro está detrás de la puerta; en unos minutos todo vuelve a la calma. Narración en español con subtítulos.' } },
        { icon: 'Zap', problem: 'Un perro ladra de repente detrás de Mateo. En segundos, su corazón late rápido y siente mucha energía. ¿Qué pasó dentro de su cuerpo?',
          steps: [
            { text: 'Sus ojos y oídos detectan el peligro y el **cerebro** envía una señal a las **glándulas suprarrenales**.' },
            { text: 'Las suprarrenales liberan **adrenalina** a la **sangre**.', why: 'Son glándulas de secreción interna: su producto va a la sangre.' },
            { text: 'La sangre lleva la adrenalina a todo el cuerpo: el **corazón** late más rápido, la **respiración** se acelera y los **músculos** reciben más energía.', why: 'Así el cuerpo se prepara para huir o defenderse.' },
            { text: 'Cuando el peligro pasa, el cuerpo deja de liberar adrenalina y todo **vuelve a la calma**.' },
          ],
          answer: 'Las **suprarrenales** liberaron **adrenalina** a la sangre, y esta llevó el mensaje de "¡prepárate!" a varios órganos.',
          tip: 'Por eso sentimos el corazón acelerado antes de un examen: es la adrenalina. Respirar lento y profundo ayuda a calmarse.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.3.1'], ambito: 'conocer',
          prompt: 'Después de jugar fútbol al mediodía, la camisa de Diego está mojada. ¿Qué glándulas trabajaron y de qué tipo son?',
          explain: 'Las **sudoríparas** son de **secreción externa**: sacan el sudor por conductos hacia la piel, y al evaporarse enfría el cuerpo.' },
        { options: [
          { id: 'a', text: 'Las sudoríparas, de secreción externa', icon: 'Droplets' },
          { id: 'b', text: 'La tiroides, de secreción externa', icon: 'Thermometer', feedback: 'La tiroides produce hormonas que van a la sangre: es de secreción interna, y no produce sudor.' },
          { id: 'c', text: 'Las sudoríparas, de secreción interna', icon: 'HeartPulse', feedback: 'El sudor sale por conductos hacia la piel: eso es secreción externa.' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.3.1'], ambito: 'conocer',
          prompt: 'Une cada glándula con lo que produce.',
          explain: 'Hipófisis → hormona del crecimiento; páncreas → insulina; suprarrenales → adrenalina; sudoríparas → sudor; salivales → saliva.' },
        { leftTitle: 'Glándula', rightTitle: 'Produce', pairs: [
          { id: 'h', left: 'Hipófisis', right: 'Hormona del crecimiento' },
          { id: 'p', left: 'Páncreas', right: 'Insulina' },
          { id: 's', left: 'Suprarrenales', right: 'Adrenalina' },
          { id: 'd', left: 'Sudoríparas', right: 'Sudor' },
          { id: 'v', left: 'Salivales', right: 'Saliva' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.3.1'], ambito: 'conocer',
          prompt: '¿Por qué en muchas cocinas de Guatemala se usa **sal yodada**?',
          explain: 'La **tiroides** necesita **yodo** para fabricar sus hormonas. Sin suficiente yodo, puede crecer demasiado (bocio) y no funcionar bien.' },
        { options: [
          { id: 'a', text: 'Porque la tiroides necesita yodo para fabricar sus hormonas', icon: 'Thermometer' },
          { id: 'b', text: 'Porque el yodo hace crecer el cabello', icon: 'Sparkles', feedback: 'El yodo es necesario para la tiroides, no para el cabello.' },
          { id: 'c', text: 'Porque el yodo produce saliva', icon: 'Utensils', feedback: 'La saliva la producen las glándulas salivales; el yodo es para la tiroides.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.1'], prompt: '¿Qué hace una glándula de **secreción interna** con las hormonas que produce?' },
        { options: [
          { id: 'a', text: 'Las saca por la piel' },
          { id: 'b', text: 'Las libera a la sangre' },
          { id: 'c', text: 'Las envía a la boca' },
          { id: 'd', text: 'Las guarda para siempre' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La hipófisis está en la base del cerebro y se llama glándula maestra.', answer: true },
          { text: 'Las glándulas lagrimales son de secreción interna.', answer: false, why: 'Sacan las lágrimas por conductos hacia los ojos: son de secreción externa.' },
          { text: 'La insulina la produce el páncreas.', answer: true },
          { text: 'La adrenalina calma el corazón y lo hace latir más lento.', answer: false, why: 'La adrenalina acelera el corazón y la respiración.' },
        ] },
      ),
      cierre({ areas: ['cnt'], cnb: [] },
        ['Clasifico animales en vertebrados e invertebrados', 'Explico por qué hay diversidad de seres vivos', 'Ubico glándulas y distingo las de secreción interna y externa'],
        ['Observaré los animales de mi comunidad y los clasificaré', 'Respiraré lento y profundo cuando sienta nervios']),
    ],
  }),
];
