/**
 * L2 (español como segundo idioma) · Unidad 1 · Semana 6
 * Los sonidos del español: la r suave y la r fuerte; escuchar con atención palabras que se parecen
 * (pares mínimos) y letras distintas que suenan igual.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's06-l2-1',
    title: 'La r suave y la r fuerte',
    icon: 'AudioLines',
    minutes: 14,
    gancho: '"Pero" y "perro" se parecen muchísimo… pero uno es una palabra que une ideas y el otro ¡ladra! ¿Qué las hace diferentes al oído?',
    objetivos: [
      'Pronunciar la r suave y la r fuerte del español',
    ],
    resumen: [
      'El español tiene dos sonidos de r: la r suave (la lengua toca una vez detrás de los dientes de arriba) y la r fuerte (la lengua vibra varias veces).',
      'Suena fuerte: la rr entre vocales (perro), la r al inicio de palabra (rosa) y la r después de n, l o s (Enrique, alrededor, Israel).',
      'Suena suave: la r entre vocales (pero), después de otra consonante en la misma sílaba (tres, grande) y al final de sílaba (mar, carta).',
      'Cambiar el sonido cambia el significado: pero/perro, caro/carro, cero/cerro.',
    ],
    media: {
      id: 's06-l2-1-lengua', kind: 'animation', title: 'Cómo se mueve la lengua', aspect: '16:9', duration: 40,
      alt: 'Corte lateral de la boca: en "pero" la lengua toca una vez detrás de los dientes de arriba; en "perro" vibra varias veces.',
      brief: 'Animación 2D de 40 s con vista lateral simplificada de la boca (labios, dientes, paladar y lengua en colores suaves, sin realismo médico). Parte 1: se escucha "pero" y la punta de la lengua da UN toque rápido detrás de los dientes superiores; aparece el rótulo "r suave: 1 toque". Parte 2: se escucha "perro" y la lengua vibra 3-4 veces con líneas de movimiento; rótulo "r fuerte: vibra". Parte 3: se repite con "caro / carro" y "cero / cerro". Voz de adulto, pronunciación clara de español de Guatemala.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:4.1.1'], ambito: 'conocer', title: 'Dos sonidos de r',
          prompt: 'El español tiene **dos sonidos** de r. En muchos idiomas solo hay uno, por eso vale la pena practicarlos. Toca cada tarjeta y di las palabras en voz alta.' },
        { icon: 'AudioLines', body: 'Pon la punta de la lengua detrás de los dientes de arriba. La diferencia está en **cuántas veces** toca.', reveal: [
          { icon: 'Circle', front: 'r suave', back: 'La lengua **toca una sola vez**, rápido. Di: **pero, cara, loro, mar**.' },
          { icon: 'AudioWaveform', front: 'r fuerte', back: 'La lengua **vibra varias veces**, como un motorcito. Di: **perro, carro, rosa, río**.' },
          { icon: 'Lightbulb', front: 'Truco para practicar', back: 'Di rápido "**tra, tra, tra**" o "**dra, dra, dra**" y luego alarga el sonido: "trrrrr". Así la lengua aprende a vibrar.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: ¿fuerte o suave?',
          prompt: 'Hay reglas para saber cuándo la r suena **fuerte**. Mira cómo se aplican a cuatro palabras.' },
        { icon: 'ListChecks', problem: '¿La r de **rosa**, **carro**, **Enrique** y **pero** suena fuerte o suave?',
          steps: [
            { text: '**rosa**: la r está **al inicio de la palabra** → fuerte.', why: 'Al inicio de palabra siempre se escribe una sola r, pero suena fuerte.' },
            { text: '**carro**: hay **rr** entre dos vocales → fuerte.', why: 'La rr solo aparece entre vocales y siempre suena fuerte.' },
            { text: '**Enrique**: la r va **después de n** → fuerte. Lo mismo pasa después de l (alrededor) y de s (Israel).' },
            { text: '**pero**: una sola r **entre vocales** → suave.' },
          ],
          answer: 'Fuerte: **rosa, carro, Enrique**. Suave: **pero**.',
          tip: 'Fuerte: al inicio, con rr, o después de n, l, s. En los demás casos, suave.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.2'], ambito: 'conocer',
          prompt: 'Escucha: _"Mi abuela compró un **carro**."_ ¿Qué compró la abuela?',
          explain: '"Carro" (con r fuerte) es un vehículo; "caro" (con r suave) significa que cuesta mucho. Un solo sonido cambia la palabra. Hoy aprenderás a pronunciar y distinguir las dos r.',
          media: { id: 's06-l2-1-carro', kind: 'audio', title: 'Caro o carro', duration: 10,
            alt: 'Una voz dice: "Mi abuela compró un carro."',
            brief: 'Audio de 10 s. Voz adulta femenina, clara y pausada, español de Guatemala. Texto exacto: "Mi abuela compró un carro." Pronunciar la rr con vibración múltiple bien marcada. Repetir la oración dos veces con 2 s de pausa.' } },
        { options: [
          { id: 'a', text: 'Un vehículo', icon: 'Car' },
          { id: 'b', text: 'Algo que costó mucho dinero', icon: 'Coins', feedback: 'Eso sería "caro", con r suave. Escucha: en "carro" la lengua vibra varias veces.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.1'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: di cada palabra en voz alta y clasifícala según el sonido de su r.',
          hint: 'Revisa la regla: ¿está al inicio?, ¿es rr?, ¿va después de n, l o s? Si no, es suave.',
          explain: 'Fuerte: ratón (inicio), tierra (rr), honra (después de n). Suave: cara, tres, flor.' },
        { buckets: [
          { id: 'f', label: 'r fuerte', icon: 'AudioWaveform', color: 'var(--c-maiz-strong)' },
          { id: 's', label: 'r suave', icon: 'Circle', color: 'var(--area-l2)' },
        ], items: [
          { id: 'w1', text: 'ratón', bucket: 'f' },
          { id: 'w2', text: 'cara', bucket: 's' },
          { id: 'w3', text: 'tierra', bucket: 'f' },
          { id: 'w4', text: 'tres', bucket: 's', feedback: 'La r va después de t en la misma sílaba (tres): suena suave.' },
          { id: 'w5', text: 'honra', bucket: 'f', feedback: 'Después de n la r suena fuerte, aunque se escribe una sola.' },
          { id: 'w6', text: 'flor', bucket: 's' },
        ] },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.1', 'l2:4.1.2'], ambito: 'hacer',
          prompt: 'Escucha la oración y toca las palabras que tienen **r fuerte**.',
          hint: 'Son 5. Busca rr, r al inicio de palabra y r después de n.',
          explain: 'Rubén (inicio), perro (rr), corre (rr), cerro (rr) y Enrique (después de n) tienen r fuerte. "Por" y "para" tienen r suave.',
          media: { id: 's06-l2-1-oracion', kind: 'audio', title: 'Oración con muchas r', duration: 12,
            alt: 'Una voz lee: "El perro de Rubén corre por el cerro para buscar a Enrique."',
            brief: 'Audio de 12 s. Voz adulta masculina, pausada, español de Guatemala. Texto exacto: "El perro de Rubén corre por el cerro para buscar a Enrique." Marcar con claridad la vibración de cada r fuerte y el toque simple de "por" y "para". Leer dos veces.' } },
        { target: 'palabras con r fuerte', text: 'El {perro} de {Rubén} {corre} por el {cerro} para buscar a {Enrique}.' },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.2'], ambito: 'hacer',
          prompt: 'Estas palabras solo cambian por la r. Une cada una con su significado.',
          explain: 'Pronunciar bien la r evita confusiones: no es lo mismo subir al "cero" que al "cerro".' },
        { leftTitle: 'Palabra', rightTitle: 'Significado', pairs: [
          { id: 'p1', left: 'pero', right: 'Palabra que une ideas opuestas' },
          { id: 'p2', left: 'perro', right: 'Animal que ladra' },
          { id: 'p3', left: 'caro', right: 'Que cuesta mucho dinero' },
          { id: 'p4', left: 'carro', right: 'Vehículo' },
          { id: 'p5', left: 'cero', right: 'El número 0' },
          { id: 'p6', left: 'cerro', right: 'Montaña pequeña' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.1'], ambito: 'hacer',
          prompt: 'Completa el relato con la palabra correcta. Después léelo en voz alta cuidando cada r.',
          explain: 'Cerro (montaña), perro (animal), caro (precio alto) y pero (une ideas opuestas).' },
        { text: 'Subimos al [[cerro]] para ver el volcán. El [[perro]] de Ana nos acompañó. El pasaje de la camioneta estaba [[caro]], [[pero]] valió la pena.', distractors: ['cero', 'carro'] },
      ),
      S.cards(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.1'], ambito: 'hacer',
          prompt: 'Practica con **trabalenguas** tradicionales. Lee cada tarjeta en voz alta, primero despacio y luego más rápido. Voltéala para ver el consejo.' },
        { cards: [
          { icon: 'Car', front: 'Erre con erre cigarro, erre con erre barril, rápido ruedan los carros cargados de azúcar del ferrocarril.', back: 'Marca la vibración en **erre, cigarro, barril, rápido, ruedan, carros, ferrocarril**. La r de **cargados** es suave.' },
          { icon: 'Dog', front: 'El perro de Rosa y Roque no tiene rabo, porque Ramón Ramírez se lo ha cortado.', back: '**Rosa, Roque, rabo, Ramón, Ramírez**: r al inicio = fuerte. **Perro**: rr = fuerte. **Porque, cortado**: suave.' },
          { icon: 'Mountain', front: 'Pero el perro subió al cerro, y en el cerro el perro corrió.', back: 'Alterna suave (**pero**) y fuerte (**perro, cerro, corrió**). Exagera la diferencia.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.1'], prompt: 'Boleto de salida: ¿cuál de estas palabras tiene **r suave**?' },
        { options: [
          { id: 'a', text: 'loro' },
          { id: 'b', text: 'ropa' },
          { id: 'c', text: 'burro' },
          { id: 'd', text: 'Enrique' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.1', 'l2:4.1.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La r al inicio de una palabra, como en "río", suena fuerte.', answer: true },
          { text: 'En "alrededor", la r después de l suena suave.', answer: false, why: 'Después de n, l o s, la r suena fuerte.' },
          { text: '"Cero" y "cerro" significan lo mismo.', answer: false, why: '"Cero" es el número 0 y "cerro" es una montaña pequeña.' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's06-l2-2',
    title: 'Escucho con atención: palabras que se parecen',
    icon: 'Ear',
    minutes: 14,
    gancho: 'Si alguien dice "Mi tía tiene tos" muy rápido, ¿podrías confundirlo con "Mi día tiene dos"? ¿Cómo sabes qué dijo?',
    objetivos: [
      'Distinguir palabras que cambian por un solo sonido',
    ],
    resumen: [
      'Pares mínimos: palabras que solo cambian por un sonido y significan cosas distintas: mesa/misa, peso/piso, tos/dos, casa/gasa, oso/uso.',
      'En español hay letras distintas que suenan igual: b y v (tubo/tuvo); en Guatemala, la s, la z y la c antes de e o i (casa/caza, cien/sien); ll y y en la mayoría de hablantes (calló/cayó); y la h no suena (hola/ola).',
      'Para reconocer la palabra que escuchas, pon atención al sonido y al contexto: las demás palabras de la oración.',
    ],
    media: {
      id: 's06-l2-2-pares', kind: 'audio', title: 'Pares de palabras', duration: 45,
      alt: 'Una voz dice pares de palabras parecidas: mesa, misa; peso, piso; oso, uso; tos, dos; casa, gasa; tía, día.',
      brief: 'Audio de 45 s. Voz adulta femenina, muy clara, ritmo lento, español de Guatemala. Leer cada par dos veces con 1 s entre palabras y 2 s entre pares: "mesa – misa", "peso – piso", "oso – uso", "tos – dos", "casa – gasa", "coma – goma", "tía – día". Después, oraciones: "Pon los platos en la mesa." / "El domingo vamos a misa." / "Mi tía tiene tos." Sin música de fondo.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:4.1.2', 'l2:4.1.1'], ambito: 'conocer', title: 'Pares mínimos',
          prompt: 'Un **par mínimo** son dos palabras que cambian **por un solo sonido** y significan cosas distintas. Escucha el audio de la lección y repite cada par, exagerando la diferencia.' },
        { icon: 'Ear', body: 'Para distinguirlas, fíjate en el sonido que cambia y en **cómo se mueve tu boca**.', reveal: [
          { icon: 'Smile', front: 'e / i', back: '**mesa / misa**, **peso / piso**. Para la i, estira más los labios hacia los lados.' },
          { icon: 'Circle', front: 'o / u', back: '**oso / uso**, **moda / muda**. Para la u, redondea más los labios, como para silbar.' },
          { icon: 'Volume2', front: 't / d', back: '**tos / dos**, **tía / día**. La d es más suave y la garganta vibra.' },
          { icon: 'AudioLines', front: 'c / g', back: '**casa / gasa**, **coma / goma**. La g también hace vibrar la garganta.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.1'], ambito: 'conocer', title: 'Letras distintas, mismo sonido',
          prompt: 'En español también pasa lo contrario: **letras distintas que suenan igual**. Al escuchar, no puedes saber cuál es… ¡sin el contexto!' },
        { icon: 'CaseSensitive', body: 'Estas palabras se distinguen **al escribir**, pero al oído dependen del **contexto**.', reveal: [
          { icon: 'Copy', front: 'b = v', back: 'En español suenan igual: **tubo** (un caño) / **tuvo** (del verbo tener); **botar** (tirar) / **votar** (elegir).' },
          { icon: 'Copy', front: 's = z = c (ante e, i)', back: 'En Guatemala y en casi toda América, la s, la z y la c antes de e o i suenan igual: **casa** / **caza**, **cien** / **sien**.' },
          { icon: 'Copy', front: 'll = y', back: 'En la mayoría de hablantes suenan igual: **calló** (hizo silencio) / **cayó** (se fue al suelo).' },
          { icon: 'VolumeX', front: 'h muda', back: 'La h no suena: **hola** (saludo) / **ola** (del mar); **hecho** / **echo**.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo Pedro descubre qué palabra escuchó, usando el contexto.' },
        { icon: 'Search', problem: 'Pedro escucha: _"Mi hermano [tubo/tuvo] fiebre ayer."_ Las dos suenan igual. ¿Cuál es?',
          steps: [
            { text: 'Sabe que **b** y **v** suenan igual, así que el sonido no basta.' },
            { text: 'Mira las demás palabras: "Mi hermano ___ fiebre **ayer**". Falta una acción en pasado.', why: 'El contexto dice qué clase de palabra falta.' },
            { text: '"Tubo" es un objeto (un caño). "Tuvo" es el verbo tener en pasado: "tuvo fiebre".' },
          ],
          answer: 'La palabra es **tuvo**: "Mi hermano tuvo fiebre ayer".',
          tip: 'Si dos palabras suenan igual, pregúntate cuál tiene sentido en la oración.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.2'], ambito: 'conocer',
          prompt: 'Escucha la oración: _"La niña tiene **tos**."_ ¿Qué le pasa a la niña?',
          explain: '"Tos" y "dos" solo cambian por un sonido (t/d). Además, "tiene tos" tiene sentido: el **contexto** te ayuda. Hoy aprenderás a escuchar palabras que se parecen.' },
        { options: [
          { id: 'a', text: 'Está enferma: tose', icon: 'Thermometer' },
          { id: 'b', text: 'Tiene dos cosas', icon: 'Blocks', feedback: 'Eso sería "tiene dos…", y faltaría decir dos qué. Escucha: la palabra empieza con t.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.2'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: escuchas _"Pon los platos en la m…sa"_ y no oíste bien la vocal. ¿Qué palabra fue?',
          hint: '¿Dónde se ponen los platos? El contexto te da la respuesta.',
          explain: 'Los platos se ponen en la **mesa**. "Misa" es una celebración religiosa: no tendría sentido en esta oración.' },
        { options: [
          { id: 'a', text: 'mesa' },
          { id: 'b', text: 'misa', feedback: 'La misa es una celebración; los platos no se ponen allí. Revisa el contexto.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.1', 'l2:4.1.2'], ambito: 'hacer',
          prompt: 'Di cada par en voz alta. ¿**Suenan distinto** (par mínimo) o **suenan igual** aunque se escriben distinto?',
          explain: 'Suenan distinto: casa/gasa, tos/dos, peso/piso. Suenan igual: hola/ola (h muda), tubo/tuvo (b = v), casa/caza (s = z en Guatemala).' },
        { buckets: [
          { id: 'dif', label: 'Suenan distinto', icon: 'AudioLines', color: 'var(--area-l2)' },
          { id: 'ig', label: 'Suenan igual', icon: 'Copy', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'casa / gasa', bucket: 'dif' },
          { id: 'x2', text: 'hola / ola', bucket: 'ig' },
          { id: 'x3', text: 'tos / dos', bucket: 'dif' },
          { id: 'x4', text: 'tubo / tuvo', bucket: 'ig' },
          { id: 'x5', text: 'peso / piso', bucket: 'dif' },
          { id: 'x6', text: 'casa / caza', bucket: 'ig', feedback: 'En Guatemala la s y la z suenan igual: solo el contexto dice cuál es.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.2'], ambito: 'hacer',
          prompt: 'Dictado: escucha el audio y elige la palabra exacta que oyes en cada espacio.',
          explain: 'La voz dice: "Mi tía Juana tiene dos gatos. Uno duerme en la cama y el otro sobre la mesa." Tía (no día), dos (no tos), cama (no gama), mesa (no misa).',
          media: { id: 's06-l2-2-dictado', kind: 'audio', title: 'Dictado de pares', duration: 15,
            alt: 'Una voz lee: "Mi tía Juana tiene dos gatos. Uno duerme en la cama y el otro sobre la mesa."',
            brief: 'Audio de 15 s. Voz adulta masculina, ritmo lento de dictado, español de Guatemala. Texto exacto: "Mi tía Juana tiene dos gatos. Uno duerme en la cama y el otro sobre la mesa." Pronunciar con mucha claridad t/d, c/g y e/i. Leer dos veces con 3 s de pausa.' } },
        { text: 'Mi [[tía]] Juana tiene [[dos]] gatos. Uno duerme en la [[cama]] y el otro sobre la [[mesa]].', distractors: ['día', 'tos', 'gama', 'misa'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.2'], ambito: 'hacer',
          prompt: 'Escuchas: _"El domingo los adultos van a [botar/votar] para elegir alcalde."_ ¿Cuál palabra es?',
          explain: '"Votar" (con v) es elegir en unas elecciones. "Botar" (con b) es tirar algo. Suenan igual, pero el contexto ("para elegir alcalde") lo aclara.' },
        { options: [
          { id: 'a', text: 'votar: elegir' },
          { id: 'b', text: 'botar: tirar', feedback: 'Suenan igual, pero "para elegir alcalde" indica que se trata de elegir, no de tirar.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.2'], prompt: 'Boleto de salida: por el ruido de la calle no oíste bien el primer sonido de una palabra: _"Mañana es …ía de mercado; vamos a comprar fruta."_ ¿Qué palabra tiene sentido?' },
        { options: [
          { id: 'a', text: 'día (del calendario)' },
          { id: 'b', text: 'tía (familiar)' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.1', 'l2:4.1.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: '"Peso" y "piso" son un par mínimo: cambian por un solo sonido.', answer: true },
          { text: 'En español, la b y la v suenan distinto.', answer: false, why: 'En español la b y la v suenan igual; se distinguen al escribir.' },
          { text: 'En "hola", la h no suena.', answer: true },
        ] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l2'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana?' },
        { statements: ['Pronuncio la r suave y la r fuerte', 'Distingo palabras que cambian por un solo sonido', 'Uso el contexto para reconocer palabras que suenan igual'],
          commitments: ['Diré un trabalenguas cada día para practicar la r', 'Escucharé con atención las palabras nuevas y preguntaré si no entiendo', 'Enseñaré a alguien un par de palabras que se confunden'] },
      ),
    ],
  }),
];
