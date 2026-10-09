import { languageLessons, type LanguageTopic } from './lesson';

/** L2 · Unidad 2 · Semana 11. Corpus de trabajo suministrado en español; adaptación a otra L2 requiere revisión lingüística. */
const topics: LanguageTopic[] = [
  {
    "title": "Diálogo de saberes y escucha",
    "cnb": [
      "l2:1.1.1",
      "l2:1.1.2"
    ],
    "idea": "Escuchar un saber local exige distinguir lo que la persona dijo de nuestra interpretación.",
    "rule": "Anota palabras clave exactas, pregunta con respeto y reformula sin atribuir ideas nuevas.",
    "model": {
      "problem": "En un diálogo simulado, Ana dice: «La sombra del árbol conserva fresco el patio».",
      "steps": [
        "Registro la afirmación de Ana",
        "Pregunto qué observó y cuándo"
      ],
      "answer": "Ana relaciona la sombra con el fresco del patio."
    },
    "guided": [
      {
        "left": "Cita de Ana",
        "right": "Afirmación de la fuente"
      },
      {
        "left": "Mi pregunta",
        "right": "Solicitud de evidencia"
      }
    ],
    "apply": {
      "prompt": "¿Qué nota respeta mejor lo escuchado?",
      "correct": "Ana afirma que la sombra del árbol mantiene fresco el patio",
      "wrong": [
        "Ana demostró que todos los árboles bajan diez grados",
        "La sombra siempre reemplaza el agua"
      ]
    },
    "exits": [
      {
        "prompt": "Al escuchar «cuidamos la semilla», ¿qué puedes registrar?",
        "correct": "La persona dijo que cuidan la semilla",
        "wrong": [
          "Toda la comunidad usa la misma técnica",
          "La técnica garantiza la cosecha"
        ]
      },
      {
        "text": "Registrar como cita algo que no se escuchó mejora la fidelidad",
        "answer": false,
        "why": "Una cita reproduce lo dicho; las inferencias se marcan aparte."
      }
    ],
    "contrast": {
      "text": "Si una persona menciona sombra, puedo preguntar qué observó sin atribuirle una cifra.",
      "answer": true,
      "why": "Pedir precisión respeta la voz de la fuente."
    }
  },
  {
    "title": "Organizar mensajes escuchados",
    "cnb": [
      "l2:1.1.2",
      "l2:1.1.3"
    ],
    "idea": "Decodificar un mensaje oral significa reconstruir su idea, no solo repetir palabras sueltas.",
    "rule": "Agrupa información en tema general y subtemas; conserva fuente y dudas.",
    "model": {
      "problem": "Mensaje simulado: «En la milpa crecen maíz, frijol y ayote; el frijol cubre el suelo».",
      "steps": [
        "Tema: convivencia de cultivos",
        "Subtema: función del frijol"
      ],
      "answer": "Tema: cultivos de la milpa; subtema: cobertura del suelo."
    },
    "guided": [
      {
        "left": "Milpa",
        "right": "Tema general"
      },
      {
        "left": "Cobertura del suelo",
        "right": "Subtema específico"
      }
    ],
    "apply": {
      "prompt": "¿Qué esquema organiza el mensaje?",
      "correct": "Milpa → cultivos y función del frijol",
      "wrong": [
        "Frijol → todas las plantas del mundo",
        "Ayote → fecha exacta de cosecha"
      ]
    },
    "exits": [
      {
        "prompt": "«La familia guarda semillas y registra fechas». ¿Qué subtema sí aparece?",
        "correct": "Registro de fechas",
        "wrong": [
          "Precio internacional de semillas",
          "Clima del próximo año"
        ]
      },
      {
        "text": "Un subtema puede inventarse aunque no aparezca en el mensaje",
        "answer": false,
        "why": "El esquema debe conservar información escuchada."
      }
    ],
    "contrast": {
      "text": "Un esquema puede separar el tema general de un detalle concreto escuchado.",
      "answer": true,
      "why": "Tema y subtema cumplen funciones distintas."
    }
  }
];

export default languageLessons(11, topics);
