import { productivityLesson, type ProductivityTopic } from './lesson';

/** Productividad y Desarrollo · Unidad 2 · Semana 13. */
const topic: ProductivityTopic = {
  "title": "Problemas sociales y alternativas verificables",
  "cnb": [
    "pyd:2.1.1"
  ],
  "principle": "Investigar un problema social implica describir efectos con fuentes y comparar alternativas, sin culpar a personas afectadas.",
  "method": "Define el problema, separa causas posibles de efectos observados y evalúa acciones al alcance escolar.",
  "model": {
    "case": "Caso simulado: en una escuela se pierden turnos de uso de la biblioteca.",
    "steps": [
      "Registro horarios y reclamos sin nombres",
      "Distingo falta de información de causa probada",
      "Comparo cartel de turnos y registro simple"
    ],
    "result": "Se prueba una alternativa y se revisa si mejora el acceso."
  },
  "guided": [
    {
      "left": "Efecto observado",
      "right": "Dos grupos llegan al mismo tiempo"
    },
    {
      "left": "Causa por investigar",
      "right": "Horario poco claro"
    }
  ],
  "apply": {
    "prompt": "¿Qué pregunta investigable ayuda?",
    "correct": "¿En qué horarios se superponen reservas según el registro?",
    "wrong": [
      "¿Quién tiene la culpa siempre?",
      "¿Por qué el cartel resolverá todo con certeza?"
    ]
  },
  "exit": [
    {
      "prompt": "Si faltan libros, ¿qué alternativa se puede comparar?",
      "correct": "Préstamos por turnos con registro de uso",
      "wrong": [
        "Culpar a quienes piden libros",
        "Prometer libros nuevos sin presupuesto"
      ]
    },
    {
      "text": "Un efecto observado demuestra por sí solo una causa única",
      "answer": false,
      "why": "Hace falta información para distinguir causas."
    }
  ],
  "contrast": {
    "text": "Registrar horarios permite comparar superposiciones antes de atribuir una causa.",
    "answer": true,
    "why": "El registro aporta evidencia del efecto."
  }
};

export default productivityLesson(13, topic);
