import { languageLessons, type LanguageTopic } from './lesson';

/** L2 · Unidad 2 · Semana 13. Corpus de trabajo suministrado en español; adaptación a otra L2 requiere revisión lingüística. */
const topics: LanguageTopic[] = [
  {
    "title": "Intercambiar información en una mesa redonda",
    "cnb": [
      "l2:1.2.1",
      "l2:1.2.3"
    ],
    "idea": "En una mesa redonda cada voz aporta información y escucha respuestas.",
    "rule": "Da un dato, indica su fuente y deja turno para una pregunta.",
    "model": {
      "problem": "Caso simulado: tres estudiantes comparan rutas seguras a la escuela.",
      "steps": [
        "Aporto «el mapa marca dos cruces»",
        "Explico que proviene del mapa suministrado"
      ],
      "answer": "El aporte es coherente y verificable."
    },
    "guided": [
      {
        "left": "Dato",
        "right": "Información comprobable"
      },
      {
        "left": "Turno de palabra",
        "right": "Espacio para escuchar respuestas"
      }
    ],
    "apply": {
      "prompt": "¿Qué intervención aporta información coherente?",
      "correct": "El mapa del caso marca dos cruces; revisemos cuál tiene señal",
      "wrong": [
        "Mi ruta es mejor porque sí",
        "Nadie más debe hablar"
      ]
    },
    "exits": [
      {
        "prompt": "¿Cómo continúas tras una objeción?",
        "correct": "Pido la evidencia y respondo a ese punto",
        "wrong": [
          "Repito mi frase más fuerte",
          "Cambio a otro asunto"
        ]
      },
      {
        "text": "Interrumpir para ganar la mesa redonda mejora la calidad del intercambio",
        "answer": false,
        "why": "La discusión exige escuchar y responder con pertinencia."
      }
    ],
    "contrast": {
      "text": "Citar el mapa suministrado hace verificable un aporte en la mesa redonda.",
      "answer": true,
      "why": "Se identifica de dónde procede el dato."
    }
  },
  {
    "title": "Relacionar lo escuchado con la vida cotidiana",
    "cnb": [
      "l2:1.2.3",
      "l2:1.2.5"
    ],
    "idea": "Una experiencia cotidiana puede ayudar a interpretar un dato oral sin reemplazarlo.",
    "rule": "Explica la relación concreta y distingue recuerdo personal de fuente.",
    "model": {
      "problem": "Audio simulado: «El patio se calienta más donde no hay sombra».",
      "steps": [
        "Recuerdo una zona soleada del patio",
        "No afirmo temperatura exacta sin medición"
      ],
      "answer": "La experiencia apoya una pregunta, no prueba una cifra."
    },
    "guided": [
      {
        "left": "Mensaje oral",
        "right": "Información de la fuente"
      },
      {
        "left": "Recuerdo del patio",
        "right": "Experiencia personal"
      }
    ],
    "apply": {
      "prompt": "¿Qué relación es responsable?",
      "correct": "En mi patio noto más calor al sol; mediría ambas zonas para comprobar",
      "wrong": [
        "Todos los patios suben exactamente cinco grados",
        "La sombra garantiza salud"
      ]
    },
    "exits": [
      {
        "prompt": "Si oyes que el agua se almacenó en un recipiente, ¿qué comparación haces?",
        "correct": "Comparo con un recipiente conocido y pregunto cómo lo taparon",
        "wrong": [
          "Afirmo que el agua es potable",
          "Concluyo que nunca falta agua"
        ]
      },
      {
        "text": "Un recuerdo personal equivale automáticamente a una medición del caso",
        "answer": false,
        "why": "La experiencia orienta preguntas, pero no reemplaza datos medidos."
      }
    ],
    "contrast": {
      "text": "Una experiencia personal debe distinguirse de un dato medido por la fuente.",
      "answer": true,
      "why": "No tienen el mismo alcance."
    }
  }
];

export default languageLessons(13, topics);
