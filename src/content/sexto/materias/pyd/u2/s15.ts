import { productivityLesson, type ProductivityTopic } from './lesson';

/** Productividad y Desarrollo · Unidad 2 · Semana 15. */
const topic: ProductivityTopic = {
  "title": "Tecnología y proyecto personal de servicio",
  "cnb": [
    "pyd:3.1.1",
    "pyd:4.1.2"
  ],
  "principle": "Una tecnología útil responde a una necesidad concreta y debe poder mantenerse con recursos disponibles.",
  "method": "Define destinatario, necesidad, solución, materiales, costo, seguridad y cómo evaluar el resultado.",
  "model": {
    "case": "Caso simulado: estudiantes quieren prestar una caja de herramientas para reparar pupitres.",
    "steps": [
      "Compruebo qué reparaciones son seguras para estudiantes",
      "Calculo materiales y supervisión necesaria",
      "Propongo registro de préstamos"
    ],
    "result": "El proyecto de servicio se prueba solo en tareas seguras y autorizadas."
  },
  "guided": [
    {
      "left": "Necesidad",
      "right": "Pupitres con piezas sueltas"
    },
    {
      "left": "Tecnología posible",
      "right": "Registro simple de préstamo"
    }
  ],
  "apply": {
    "prompt": "¿Qué propuesta básica está mejor estructurada?",
    "correct": "Lista de tareas seguras, materiales, costo y registro de uso",
    "wrong": [
      "Comprar muchas herramientas sin permiso ni presupuesto",
      "Pedir reparaciones peligrosas a estudiantes"
    ]
  },
  "exit": [
    {
      "prompt": "Un proyecto escolar usa una app sin conexión disponible. ¿Qué evaluar?",
      "correct": "Si funciona sin red y quién la mantendrá",
      "wrong": [
        "Solo el color del icono",
        "Que toda familia posee teléfono"
      ]
    },
    {
      "text": "La tecnología más nueva siempre es la mejor para cualquier comunidad",
      "answer": false,
      "why": "Su pertinencia depende de necesidad, acceso, seguridad y mantenimiento."
    }
  ],
  "contrast": {
    "text": "Un proyecto tecnológico debe definir necesidad, acceso y mantenimiento.",
    "answer": true,
    "why": "La pertinencia depende de esas condiciones."
  }
};

export default productivityLesson(15, topic);
