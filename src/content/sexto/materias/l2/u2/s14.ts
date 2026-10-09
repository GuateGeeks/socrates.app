import { languageLessons, type LanguageTopic } from './lesson';

/** L2 · Unidad 2 · Semana 14. Corpus de trabajo suministrado en español; adaptación a otra L2 requiere revisión lingüística. */
const topics: LanguageTopic[] = [
  {
    "title": "Opinar tras escuchar evidencia",
    "cnb": [
      "l2:1.2.7"
    ],
    "idea": "Una opinión bien fundada cita la información escuchada y reconoce límites.",
    "rule": "Di «opino que… porque la fuente indicó…» sin inventar causas.",
    "model": {
      "problem": "En un diálogo, una estudiante reporta que dos rutas tienen sombra y una no.",
      "steps": [
        "Cito el dato escuchado",
        "Formulo una preferencia provisional"
      ],
      "answer": "Prefiero revisar primero la ruta sin sombra; faltan datos de seguridad."
    },
    "guided": [
      {
        "left": "Dato escuchado",
        "right": "Dos rutas con sombra"
      },
      {
        "left": "Opinión",
        "right": "Preferencia justificada"
      }
    ],
    "apply": {
      "prompt": "¿Qué opinión se apoya en el mensaje?",
      "correct": "Conviene comparar la tercera ruta; sabemos que no tiene sombra",
      "wrong": [
        "La tercera ruta es peligrosa por definición",
        "Las dos primeras son las únicas rutas posibles"
      ]
    },
    "exits": [
      {
        "prompt": "Tras oír «tres de cinco prefieren leer», ¿qué puedes decir?",
        "correct": "Opino que la lectura interesa a la mayoría de ese grupo de cinco",
        "wrong": [
          "A toda la escuela le gusta leer",
          "Nadie prefiere otra actividad"
        ]
      },
      {
        "text": "Una opinión puede presentarse como hecho aunque exceda la muestra",
        "answer": false,
        "why": "Debe respetar el alcance de lo escuchado."
      }
    ],
    "contrast": {
      "text": "Una opinión puede apoyarse en un dato escuchado y reconocer lo que aún falta comprobar.",
      "answer": true,
      "why": "La razón tiene evidencia y límite."
    }
  },
  {
    "title": "Tablas, mapas y mímica",
    "cnb": [
      "l2:2.1.4",
      "l2:2.2.4"
    ],
    "idea": "Una tabla organiza datos; un mapa ubica lugares; la mímica comunica acciones sin palabras.",
    "rule": "Lee título, símbolos y unidades antes de interpretar; representa una acción con gesto claro.",
    "model": {
      "problem": "Tabla: lunes 4 libros, martes 6; mapa: biblioteca al norte del patio.",
      "steps": [
        "Leo encabezados y valores",
        "Ubico biblioteca usando la flecha norte"
      ],
      "answer": "El martes hubo dos libros más y la biblioteca está al norte."
    },
    "guided": [
      {
        "left": "Encabezado de tabla",
        "right": "Indica qué mide la columna"
      },
      {
        "left": "Flecha N",
        "right": "Orienta el mapa"
      }
    ],
    "apply": {
      "prompt": "¿Qué gesto representa «abrir un libro» sin hablar?",
      "correct": "Separar las manos como tapas y mirar páginas imaginarias",
      "wrong": [
        "Señalar una fecha sin contexto",
        "Mover los brazos sin relación con la acción"
      ]
    },
    "exits": [
      {
        "prompt": "Tabla: 3 visitas el lunes y 5 el martes. ¿Qué lectura es correcta?",
        "correct": "El martes hubo dos visitas más",
        "wrong": [
          "La biblioteca cambió de lugar",
          "Cinco personas distintas visitaron"
        ]
      },
      {
        "text": "La mímica puede comunicar una acción sin afirmar datos que el gesto no muestra",
        "answer": true,
        "why": "El gesto comunica la acción, pero no datos invisibles."
      }
    ],
    "contrast": {
      "text": "La mímica de cerrar una puerta comunica por sí sola la fecha exacta del hecho.",
      "answer": false,
      "why": "El gesto muestra una acción, no una fecha."
    }
  }
];

export default languageLessons(14, topics);
