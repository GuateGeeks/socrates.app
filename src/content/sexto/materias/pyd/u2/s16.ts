import { productivityLesson, type ProductivityTopic } from './lesson';

/** Productividad y Desarrollo · Unidad 2 · Semana 16. */
const topic: ProductivityTopic = {
  "title": "Preparar una feria escolar voluntaria",
  "cnb": [
    "pyd:4.3.2"
  ],
  "principle": "Participar en una feria es voluntario; una demostración individual simulada permite practicar antes de invitar a otras personas.",
  "method": "Presenta necesidad, propuesta, costo estimado y límite de evidencia; prepara respuestas a preguntas sin prometer ventas.",
  "model": {
    "case": "Caso simulado: un estudiante propone mostrar semillas etiquetadas en un puesto de práctica.",
    "steps": [
      "Rotula muestra y fuente",
      "Calcula costo sin prometer ganancia",
      "Ensaya una explicación de 30 segundos"
    ],
    "result": "La muestra comunica una idea; no acredita ventas ni asistencia real."
  },
  "guided": [
    {
      "left": "Muestra",
      "right": "Producto o servicio que se explica"
    },
    {
      "left": "Costo estimado",
      "right": "Gasto previsto, no ganancia garantizada"
    }
  ],
  "apply": {
    "prompt": "¿Qué frase es honesta en una feria de práctica?",
    "correct": "Este es un prototipo; necesitamos probar costo y demanda",
    "wrong": [
      "Este puesto venderá seguro a todas las familias",
      "La asistencia de visitantes ya está comprobada"
    ]
  },
  "exit": [
    {
      "prompt": "Si alguien pregunta cuánto se vendió en la simulación, ¿qué respondes?",
      "correct": "No hubo venta real; esta fue una práctica",
      "wrong": [
        "Vendimos veinte para que el cartel se vea mejor",
        "Los visitantes futuros comprarán"
      ]
    },
    {
      "text": "La participación en una feria real debe presentarse como voluntaria",
      "answer": true,
      "why": "La práctica individual permite aprender sin exigir un evento externo."
    }
  ],
  "contrast": {
    "text": "Una demostración simulada acredita ventas reales aunque nadie haya comprado.",
    "answer": false,
    "why": "Simular no es vender."
  }
};

export default productivityLesson(16, topic);
