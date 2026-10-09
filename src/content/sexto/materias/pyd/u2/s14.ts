import { productivityLesson, type ProductivityTopic } from './lesson';

/** Productividad y Desarrollo · Unidad 2 · Semana 14. */
const topic: ProductivityTopic = {
  "title": "Proyecto de vida con opciones y revisión",
  "cnb": [
    "pyd:2.4.1"
  ],
  "principle": "Un proyecto de vida expresa intereses y metas revisables; no determina un destino único.",
  "method": "Elige una meta próxima, un paso alcanzable, apoyo disponible y una fecha para revisar.",
  "model": {
    "case": "Caso simulado: Mariela quiere aprender a reparar bicicletas, pero dispone de una hora semanal.",
    "steps": [
      "Define aprender una reparación básica",
      "Busca guía segura y herramienta prestada autorizada",
      "Revisa progreso en cuatro semanas"
    ],
    "result": "La meta es flexible y segura; puede ajustarse con nueva información."
  },
  "guided": [
    {
      "left": "Meta próxima",
      "right": "Aprender una reparación básica"
    },
    {
      "left": "Revisión",
      "right": "Comprobar avances y ajustar plan"
    }
  ],
  "apply": {
    "prompt": "¿Qué plan es alcanzable?",
    "correct": "Practicar una reparación segura con guía una hora por semana",
    "wrong": [
      "Prometer abrir un taller en una semana",
      "Abandonar la escuela para conseguir herramientas"
    ]
  },
  "exit": [
    {
      "prompt": "Una niña quiere explorar dos oficios. ¿Qué paso es respetuoso?",
      "correct": "Comparar información y conversar con personas competentes si están disponibles",
      "wrong": [
        "Elegir de inmediato el oficio que otros impongan",
        "Suponer que un oficio está prohibido por su género"
      ]
    },
    {
      "text": "Una meta personal puede cambiar cuando aparecen intereses o condiciones nuevas",
      "answer": true,
      "why": "El plan se revisa sin considerar el cambio un fracaso."
    }
  ],
  "contrast": {
    "text": "Una meta elegida a los once años no puede modificarse después.",
    "answer": false,
    "why": "El proyecto de vida se revisa."
  }
};

export default productivityLesson(14, topic);
