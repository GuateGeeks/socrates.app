import { languageLessons, type LanguageTopic } from './lesson';

/** L2 · Unidad 2 · Semana 17. Corpus de trabajo suministrado en español; adaptación a otra L2 requiere revisión lingüística. */
const topics: LanguageTopic[] = [
  {
    "title": "Palabras compuestas",
    "cnb": [
      "l2:4.2.3",
      "l2:4.3.1"
    ],
    "idea": "Una palabra compuesta une dos bases conocidas y puede tener un significado nuevo.",
    "rule": "Identifica las dos bases, interpreta el conjunto y escribe una oración con mayúscula y punto.",
    "model": {
      "problem": "«Paraguas» combina para + aguas.",
      "steps": [
        "Reconozco las dos partes",
        "Escribo: «El paraguas está junto a la puerta.»"
      ],
      "answer": "La oración comienza con mayúscula y termina con punto."
    },
    "guided": [
      {
        "left": "sacapuntas",
        "right": "Saca + puntas"
      },
      {
        "left": "abrelatas",
        "right": "Abre + latas"
      }
    ],
    "apply": {
      "prompt": "¿Qué oración usa correctamente una palabra compuesta?",
      "correct": "El sacapuntas está en la mesa.",
      "wrong": [
        "el Sacapuntas está en la mesa",
        "El saca puntas está en la mesa"
      ]
    },
    "exits": [
      {
        "prompt": "¿Qué palabra combina «abre» y «latas»?",
        "correct": "abrelatas",
        "wrong": [
          "abre la tas",
          "latasabre"
        ]
      },
      {
        "text": "Una oración completa puede empezar con minúscula y terminar sin punto",
        "answer": false,
        "why": "La norma pide mayúscula inicial y punto final."
      }
    ],
    "production": {
      "prompt": "Escribe dos oraciones nuevas con palabras compuestas distintas. Señala las dos bases de cada una y usa mayúscula inicial y punto final.",
      "model": "El abrelatas quedó en la cocina. Guardé el paraguas después de la lluvia. Abrelatas une abre y latas; paraguas une para y aguas.",
      "rubric": [
        "Usé dos compuestas reales",
        "Identifiqué las bases",
        "Puntué ambas oraciones"
      ]
    },
    "contrast": {
      "text": "«Abrelatas» une dos bases conocidas para nombrar un objeto.",
      "answer": true,
      "why": "Une abre y latas."
    }
  },
  {
    "title": "Crear palabras con sílabas conocidas",
    "cnb": [
      "l2:4.2.4",
      "l2:4.3.1"
    ],
    "idea": "Unir sílabas conocidas forma palabras solo cuando el resultado tiene uso y significado.",
    "rule": "Separa en sílabas, combina, verifica sentido y escribe una oración completa.",
    "model": {
      "problem": "De «cama» (ca-ma) y «mesa» (me-sa), une ca + sa.",
      "steps": [
        "ca + sa = casa",
        "Escribo: «La casa tiene una puerta.»"
      ],
      "answer": "«Casa» es una palabra conocida y la oración está puntuada."
    },
    "guided": [
      {
        "left": "ca + sa",
        "right": "casa"
      },
      {
        "left": "me + sa",
        "right": "mesa"
      }
    ],
    "apply": {
      "prompt": "¿Qué forma una palabra conocida de ca + sa?",
      "correct": "casa",
      "wrong": [
        "saca",
        "acas"
      ]
    },
    "exits": [
      {
        "prompt": "¿Qué oración completa está bien escrita?",
        "correct": "La casa está cerca.",
        "wrong": [
          "la casa está cerca",
          "La casa está cerca"
        ]
      },
      {
        "text": "Verificar el significado evita aceptar cualquier mezcla de sílabas",
        "answer": true,
        "why": "No toda combinación forma una palabra de uso real."
      }
    ],
    "production": {
      "prompt": "Forma una palabra conocida al unir sílabas de dos palabras suministradas y úsala en dos oraciones completas. Explica cómo verificaste su significado.",
      "model": "La casa está junto al patio. En esa casa guardamos libros. Formé casa con ca y sa, y verifiqué que es una palabra de uso conocido.",
      "rubric": [
        "Formé una palabra real",
        "Escribí dos oraciones con sentido",
        "Usé mayúscula y punto"
      ]
    },
    "contrast": {
      "text": "Cualquier mezcla de sílabas inventadas sirve aunque nadie reconozca su significado.",
      "answer": false,
      "why": "Hay que verificar uso y significado."
    }
  }
];

export default languageLessons(17, topics);
