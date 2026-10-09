import { languageLessons, type LanguageTopic } from './lesson';

/** L2 · Unidad 2 · Semana 15. Corpus de trabajo suministrado en español; adaptación a otra L2 requiere revisión lingüística. */
const topics: LanguageTopic[] = [
  {
    "title": "Fonemas al inicio y al final",
    "cnb": [
      "l2:4.1.3",
      "l2:4.1.7"
    ],
    "idea": "Fonema es sonido; letra es signo escrito. En el corpus español se identifican sonidos al pronunciar.",
    "rule": "Pronuncia lentamente, escucha el primer y último sonido, y separa sílabas con palmadas.",
    "model": {
      "problem": "Palabra «mesa»: /m/ al inicio, /a/ al final; me-sa.",
      "steps": [
        "Pronuncio sin añadir vocal al sonido /m/",
        "Separo me-sa en dos golpes"
      ],
      "answer": "Inicio /m/, final /a/, dos sílabas."
    },
    "guided": [
      {
        "left": "/m/",
        "right": "Sonido inicial de mesa"
      },
      {
        "left": "/a/",
        "right": "Sonido final de mesa"
      }
    ],
    "apply": {
      "prompt": "En el corpus español, ¿qué sonido inicia «pato»?",
      "correct": "/p/",
      "wrong": [
        "/a/",
        "/t/"
      ]
    },
    "exits": [
      {
        "prompt": "¿Qué sonido termina «luna»?",
        "correct": "/a/",
        "wrong": [
          "/l/",
          "/n/"
        ]
      },
      {
        "text": "«Casa» tiene dos sílabas: ca-sa",
        "answer": true,
        "why": "Se separa ca-sa en dos golpes de voz."
      }
    ],
    "contrast": {
      "text": "En la palabra «pato», el sonido final es /p/.",
      "answer": false,
      "why": "El sonido final es /o/."
    }
  },
  {
    "title": "Acentuación del corpus español",
    "cnb": [
      "l2:4.1.5",
      "l2:4.1.7"
    ],
    "idea": "Las reglas escritas aquí corresponden solo al corpus español suministrado; otros L2 requieren validación propia.",
    "rule": "Escucha la sílaba tónica y aplica la tilde según la norma del español cuando corresponda.",
    "model": {
      "problem": "Compara «canto» y «cantó».",
      "steps": [
        "CAN-to tiene fuerza en la penúltima",
        "can-TÓ en la última y lleva tilde"
      ],
      "answer": "La tilde cambia la sílaba tónica y el significado."
    },
    "guided": [
      {
        "left": "canto",
        "right": "Fuerza en CAN"
      },
      {
        "left": "cantó",
        "right": "Fuerza en TÓ"
      }
    ],
    "apply": {
      "prompt": "¿Qué palabra del corpus español lleva tilde?",
      "correct": "café",
      "wrong": [
        "mesa",
        "camino"
      ]
    },
    "exits": [
      {
        "prompt": "¿Cuál forma indica que ocurrió ayer?",
        "correct": "cantó",
        "wrong": [
          "canto",
          "cantan"
        ]
      },
      {
        "text": "Toda palabra con una sílaba fuerte lleva necesariamente tilde",
        "answer": false,
        "why": "La tilde depende de reglas ortográficas, no solo del acento oral."
      }
    ],
    "contrast": {
      "text": "En «café», la fuerza cae en la última sílaba y la palabra lleva tilde.",
      "answer": true,
      "why": "Ca-FÉ es aguda terminada en vocal."
    }
  }
];

export default languageLessons(15, topics);
