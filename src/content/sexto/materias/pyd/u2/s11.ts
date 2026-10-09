import { productivityLesson, type ProductivityTopic } from './lesson';

/** Productividad y Desarrollo · Unidad 2 · Semana 11. */
const topic: ProductivityTopic = {
  "title": "Fuentes productivas y propuestas voluntarias",
  "cnb": [
    "pyd:1.1.2",
    "pyd:1.2.2"
  ],
  "principle": "Una fuente productiva puede ser existente o potencial; no se promete ingreso sin comprobar demanda, costo y acceso.",
  "method": "Distingue recurso, necesidad, costo, participantes y riesgo; formula una innovación voluntaria sin atribuirla a familias reales.",
  "model": {
    "case": "Caso simulado: tres familias elaboran canastos; una propone repararlos además de venderlos.",
    "steps": [
      "Identifico oficio y materiales existentes",
      "Pregunto si hay demanda y tiempo para reparar",
      "Propongo probar el servicio a pequeña escala"
    ],
    "result": "La reparación es una hipótesis de innovación, pendiente de datos."
  },
  "guided": [
    {
      "left": "Fuente existente",
      "right": "Elaboración de canastos"
    },
    {
      "left": "Potencial",
      "right": "Servicio de reparación por probar"
    }
  ],
  "apply": {
    "prompt": "¿Qué propuesta respeta la evidencia?",
    "correct": "Ofrecer una prueba voluntaria de reparación y registrar costos y demanda",
    "wrong": [
      "Asegurar que duplicará los ingresos",
      "Exigir que todas las familias cambien su oficio"
    ]
  },
  "exit": [
    {
      "prompt": "En otro caso, una familia cultiva hortalizas. ¿Qué dato falta para ampliar ventas?",
      "correct": "Costo, disponibilidad y demanda local",
      "wrong": [
        "Garantía de ganancias futuras",
        "Opinión de una sola persona como dato de todos"
      ]
    },
    {
      "text": "Una propuesta voluntaria puede evaluarse antes de pedir a otros que la adopten",
      "answer": true,
      "why": "La prueba pequeña permite aprender sin prometer resultados."
    }
  ],
  "contrast": {
    "text": "Una fuente productiva potencial asegura ingresos aunque no se conozcan costos ni demanda.",
    "answer": false,
    "why": "Es una posibilidad que requiere prueba."
  }
};

export default productivityLesson(11, topic);
