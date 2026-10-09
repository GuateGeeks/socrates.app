import { languageLessons, type LanguageTopic } from './lesson';

/** L2 · Unidad 2 · Semana 16. Corpus de trabajo suministrado en español; adaptación a otra L2 requiere revisión lingüística. */
const topics: LanguageTopic[] = [
  {
    "title": "Agudas, graves y esdrújulas",
    "cnb": [
      "l2:4.1.9"
    ],
    "idea": "La clase depende de dónde cae la sílaba tónica, no de la cantidad de letras.",
    "rule": "Aguda: última; grave: penúltima; esdrújula: antepenúltima.",
    "model": {
      "problem": "«Música» se separa MÚ-si-ca.",
      "steps": [
        "La fuerza cae en MÚ",
        "MÚ es antepenúltima"
      ],
      "answer": "Música es esdrújula."
    },
    "guided": [
      {
        "left": "café",
        "right": "Aguda"
      },
      {
        "left": "árbol",
        "right": "Grave"
      }
    ],
    "apply": {
      "prompt": "«Teléfono» es…",
      "correct": "Esdrújula",
      "wrong": [
        "Aguda",
        "Grave"
      ]
    },
    "exits": [
      {
        "prompt": "«Reloj» es…",
        "correct": "Aguda",
        "wrong": [
          "Grave",
          "Esdrújula"
        ]
      },
      {
        "text": "«Mesa» es grave porque la fuerza está en ME, la penúltima sílaba",
        "answer": true,
        "why": "ME-sa tiene acento oral en la penúltima."
      }
    ],
    "production": {
      "prompt": "Escribe dos oraciones originales con una palabra aguda y una grave. Marca la sílaba tónica de cada palabra y termina con punto.",
      "model": "El café caliente está sobre la mesa. Mi árbol favorito crece junto al patio. Café es aguda y árbol es grave por la posición de su sílaba tónica.",
      "rubric": [
        "Escribí dos oraciones completas",
        "Identifiqué una aguda y una grave",
        "Marqué la sílaba tónica con criterio"
      ]
    },
    "contrast": {
      "text": "«Teléfono» tiene su sílaba tónica en la última sílaba.",
      "answer": false,
      "why": "Te-LÉ-fo-no tiene fuerza en la antepenúltima."
    }
  },
  {
    "title": "Raíz, prefijo y sufijo",
    "cnb": [
      "l2:4.2.1",
      "l2:4.2.2"
    ],
    "idea": "La raíz aporta significado básico; afijos agregan matices.",
    "rule": "Compara palabras de la misma familia y separa la parte que permanece.",
    "model": {
      "problem": "Pan, panadero y panadería comparten «pan».",
      "steps": [
        "Identifico pan como base",
        "-adero y -adería forman palabras relacionadas"
      ],
      "answer": "La raíz común es pan."
    },
    "guided": [
      {
        "left": "releer",
        "right": "Prefijo re- indica repetición"
      },
      {
        "left": "jardinero",
        "right": "Sufijo -ero forma oficio"
      }
    ],
    "apply": {
      "prompt": "¿Cuál es la raíz común de flor y florero?",
      "correct": "flor",
      "wrong": [
        "ero",
        "florero"
      ]
    },
    "exits": [
      {
        "prompt": "¿Qué añade re- a «hacer»?",
        "correct": "Idea de repetir la acción",
        "wrong": [
          "Nombre de una persona",
          "Indicación de plural"
        ]
      },
      {
        "text": "En «panadería», «pan» conserva una parte del significado",
        "answer": true,
        "why": "La familia comparte la raíz pan."
      }
    ],
    "production": {
      "prompt": "Escribe dos oraciones originales con una palabra de la familia de flor y otra con el prefijo re-. Explica raíz o prefijo.",
      "model": "El florero está sobre la mesa. Voy a releer la nota antes de responder. Flor es la raíz de florero y re indica repetición en releer.",
      "rubric": [
        "Usé dos palabras formadas con sentido",
        "Expliqué la raíz y el prefijo",
        "Escribí mayúsculas y puntos"
      ]
    },
    "contrast": {
      "text": "En «releer», re- es toda la raíz de la palabra.",
      "answer": false,
      "why": "La base es leer y re- es prefijo."
    }
  }
];

export default languageLessons(16, topics);
