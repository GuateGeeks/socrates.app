import { productivityLesson, type ProductivityTopic } from './lesson';

/** Productividad y Desarrollo · Unidad 2 · Semana 17. */
const topic: ProductivityTopic = {
  "title": "Ubicar ecosistemas cercanos sin inventar datos",
  "cnb": [
    "pyd:5.2.1"
  ],
  "principle": "Un ecosistema reúne seres vivos, agua, suelo y condiciones; su nombre local requiere una fuente fiable.",
  "method": "Lee un mapa o ficha suministrada, ubica el sitio y describe rasgos observables; distingue caso ficticio de comunidad propia.",
  "model": {
    "case": "Ficha simulada: al norte de la escuela hay un bosque de pino y al sur una ribera.",
    "steps": [
      "Uso la flecha norte del mapa",
      "Relaciono pinos con el bosque y agua con la ribera",
      "Anoto que el mapa es ficticio"
    ],
    "result": "Ubico dos ecosistemas del caso; no afirmo que sean los de mi comunidad."
  },
  "guided": [
    {
      "left": "Bosque de pino",
      "right": "Árboles y suelo del área norte"
    },
    {
      "left": "Ribera",
      "right": "Vegetación junto al cauce sur"
    }
  ],
  "apply": {
    "prompt": "¿Qué conclusión permite la ficha?",
    "correct": "El caso ubica bosque de pino al norte y ribera al sur",
    "wrong": [
      "Todas las escuelas de Guatemala tienen pinos",
      "La ribera nunca se inunda"
    ]
  },
  "exit": [
    {
      "prompt": "En un mapa local real aparece un manglar. ¿Qué dato adicional buscas?",
      "correct": "Fuente, escala y ubicación para confirmar que corresponde a la comunidad",
      "wrong": [
        "Que todo río tiene manglar",
        "Solo una fotografía sin lugar"
      ]
    },
    {
      "text": "Un mapa ficticio sirve para practicar ubicación sin describir la comunidad del estudiante",
      "answer": true,
      "why": "Debe declararse como caso suministrado."
    }
  ],
  "contrast": {
    "text": "Una ficha ficticia demuestra que la comunidad real tiene los mismos ecosistemas.",
    "answer": false,
    "why": "El caso suministrado no describe el entorno real."
  }
};

export default productivityLesson(17, topic);
