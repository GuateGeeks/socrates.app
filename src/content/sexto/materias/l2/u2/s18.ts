import { languageLessons, type LanguageTopic } from './lesson';

/** L2 · Unidad 2 · Semana 18. Corpus de trabajo suministrado en español; adaptación a otra L2 requiere revisión lingüística. */
const topics: LanguageTopic[] = [
  {
    "title": "Adjetivos que describen y determinan",
    "cnb": [
      "l2:5.1.3"
    ],
    "idea": "El adjetivo calificativo describe una cualidad; numerales, posesivos y demostrativos precisan otros rasgos.",
    "rule": "Pregunta si dice cómo es, cuántos, de quién o cuál.",
    "model": {
      "problem": "«Tres libros nuevos»: tres indica cantidad y nuevos cualidad.",
      "steps": [
        "Identifico «tres» como numeral",
        "Identifico «nuevos» como calificativo"
      ],
      "answer": "Cumplen funciones distintas junto a «libros»."
    },
    "guided": [
      {
        "left": "mis libros",
        "right": "Posesivo"
      },
      {
        "left": "libros grandes",
        "right": "Calificativo"
      }
    ],
    "apply": {
      "prompt": "En «esta mochila roja», ¿cuál describe cualidad?",
      "correct": "roja",
      "wrong": [
        "esta",
        "mochila"
      ]
    },
    "exits": [
      {
        "prompt": "En «dos cuadernos», ¿qué expresa «dos»?",
        "correct": "Cantidad",
        "wrong": [
          "Propiedad",
          "Lugar"
        ]
      },
      {
        "text": "«Mi» en «mi cuaderno» indica posesión",
        "answer": true,
        "why": "El posesivo señala de quién es."
      }
    ],
    "production": {
      "prompt": "Escribe dos oraciones propias: una con un adjetivo calificativo y otra con un numeral o posesivo. Identifica cada función.",
      "model": "La mochila roja está en el aula. Mis dos cuadernos quedaron sobre la mesa. Roja describe una cualidad; mis indica posesión y dos señala cantidad.",
      "rubric": [
        "Distinguí cualidad de cantidad o posesión",
        "Escribí dos oraciones originales",
        "Concordé las palabras"
      ]
    },
    "contrast": {
      "text": "En «mochila roja», roja expresa cantidad.",
      "answer": false,
      "why": "Roja describe una cualidad."
    }
  },
  {
    "title": "Demostrativos y enlaces",
    "cnb": [
      "l2:5.1.4",
      "l2:5.1.5"
    ],
    "idea": "Un demostrativo acompaña a un sustantivo o lo sustituye; preposiciones y conjunciones enlazan.",
    "rule": "Observa si aparece el sustantivo después: «este libro» lo acompaña; «este» lo reemplaza.",
    "model": {
      "problem": "Compara «Este libro pesa» y «Este pesa».",
      "steps": [
        "En la primera, este acompaña a libro",
        "En la segunda, sustituye a libro"
      ],
      "answer": "La función cambia según el contexto; la ortografía actual no requiere tilde para distinguirlos."
    },
    "guided": [
      {
        "left": "este libro",
        "right": "Demostrativo determinante"
      },
      {
        "left": "este pesa",
        "right": "Demostrativo pronombre"
      }
    ],
    "apply": {
      "prompt": "¿Qué palabra enlaza en «mesa y silla»?",
      "correct": "y",
      "wrong": [
        "mesa",
        "silla"
      ]
    },
    "exits": [
      {
        "prompt": "¿Dónde funciona «esa» como pronombre?",
        "correct": "Esa es mía.",
        "wrong": [
          "Esa mochila es mía.",
          "Miro esa mochila."
        ]
      },
      {
        "text": "«Con» en «voy con Ana» es una preposición que enlaza",
        "answer": true,
        "why": "Relaciona «voy» con «Ana»."
      }
    ],
    "production": {
      "prompt": "Escribe dos oraciones propias: una con demostrativo determinante y otra con pronombre demostrativo. Incluye un enlace y explica la diferencia.",
      "model": "Esta mochila y aquel cuaderno están listos. Esta es mía y aquel es tuyo. En la primera oración los demostrativos acompañan sustantivos; en la segunda los sustituyen.",
      "rubric": [
        "Usé demostrativo con sustantivo",
        "Usé demostrativo como pronombre",
        "Incluí una conjunción o preposición"
      ]
    },
    "contrast": {
      "text": "En «este libro», este sustituye a un sustantivo ausente.",
      "answer": false,
      "why": "Acompaña al sustantivo libro."
    }
  }
];

export default languageLessons(18, topics);
