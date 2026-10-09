import { languageLessons, type LanguageTopic } from './lesson';

/** L2 · Unidad 2 · Semana 12. Corpus de trabajo suministrado en español; adaptación a otra L2 requiere revisión lingüística. */
const topics: LanguageTopic[] = [
  {
    "title": "Barreras en la comunicación",
    "cnb": [
      "l2:1.1.4"
    ],
    "idea": "Ruido, interrupciones y suposiciones pueden cambiar el mensaje.",
    "rule": "Identifica la barrera y pide aclaración antes de actuar.",
    "model": {
      "problem": "Luis oye «trae ocho semillas» entre ruido y cree haber oído «dieciocho».",
      "steps": [
        "Detecto el ruido",
        "Pregunto «¿ocho o dieciocho?»"
      ],
      "answer": "Pedir confirmación evita una cantidad equivocada."
    },
    "guided": [
      {
        "left": "Ruido",
        "right": "Dificulta oír palabras"
      },
      {
        "left": "Confirmación",
        "right": "Aclara el dato dudoso"
      }
    ],
    "apply": {
      "prompt": "¿Qué debe hacer Luis?",
      "correct": "Preguntar si dijeron ocho o dieciocho",
      "wrong": [
        "Llevar dieciocho sin preguntar",
        "Decir que la persona se equivocó"
      ]
    },
    "exits": [
      {
        "prompt": "Si una explicación es confusa, ¿qué ayuda?",
        "correct": "Pedir un ejemplo concreto",
        "wrong": [
          "Suponer lo que quiso decir",
          "Interrumpir y cambiar el tema"
        ]
      },
      {
        "text": "Repetir una instrucción ambigua sin confirmar elimina el malentendido",
        "answer": false,
        "why": "Debe confirmarse el significado con la fuente."
      }
    ],
    "contrast": {
      "text": "Cuando una cantidad oral es dudosa, pedir que la repitan reduce el malentendido.",
      "answer": true,
      "why": "La aclaración verifica el dato antes de actuar."
    }
  },
  {
    "title": "Corroborar y registrar fuentes",
    "cnb": [
      "l2:1.1.5",
      "l2:1.1.6"
    ],
    "idea": "Un rumor oral necesita corroboración documental antes de divulgarse como hecho.",
    "rule": "Registra afirmación, fuente, fecha y evidencia; compara con un documento pertinente.",
    "model": {
      "problem": "Circula el mensaje «mañana no habrá clases» sin autor ni fecha.",
      "steps": [
        "Separo mensaje de evidencia",
        "Consulto aviso oficial fechado"
      ],
      "answer": "Hasta corroborar, se trata de información no verificada."
    },
    "guided": [
      {
        "left": "Aviso con fecha y emisor",
        "right": "Documento verificable"
      },
      {
        "left": "Cadena anónima",
        "right": "Información sin fuente identificable"
      }
    ],
    "apply": {
      "prompt": "¿Qué ficha permite comprobar la noticia?",
      "correct": "Mensaje, emisor, fecha y enlace o copia del aviso",
      "wrong": [
        "Solo la frase repetida por tres personas",
        "Un título llamativo sin fecha"
      ]
    },
    "exits": [
      {
        "prompt": "Un cartel escolar fechado confirma un horario. ¿Qué registras?",
        "correct": "Emisor, fecha y horario indicado",
        "wrong": [
          "Que todo horario futuro será igual",
          "La opinión de quien envió el rumor"
        ]
      },
      {
        "text": "Una cadena reenviada muchas veces es por sí sola una fuente documental fiable",
        "answer": false,
        "why": "La repetición no sustituye autor, fecha ni evidencia."
      }
    ],
    "contrast": {
      "text": "Una ficha con emisor y fecha ayuda a corroborar un aviso.",
      "answer": true,
      "why": "Permite rastrear la fuente documental."
    }
  }
];

export default languageLessons(12, topics);
