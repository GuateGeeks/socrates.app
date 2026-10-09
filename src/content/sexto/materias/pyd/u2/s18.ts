import { productivityLesson, type ProductivityTopic } from './lesson';

/** Productividad y Desarrollo · Unidad 2 · Semana 18. */
const topic: ProductivityTopic = {
  "title": "Plan económico con cuidado ambiental",
  "cnb": [
    "pyd:5.4.1"
  ],
  "principle": "Una actividad económica sostenible compara beneficios, costos, recursos y efectos ambientales verificables.",
  "method": "Propón acción pequeña, indicador observable, costo, responsabilidad y fecha de revisión.",
  "model": {
    "case": "Caso simulado: un puesto escolar usa vasos desechables en 30 bebidas.",
    "steps": [
      "Considero vasos reutilizables autorizados y limpieza",
      "Estimo costo y agua necesaria para lavarlos",
      "Comparo residuos y esfuerzo en una prueba"
    ],
    "result": "La propuesta se prueba; no se promete ahorro sin medir."
  },
  "guided": [
    {
      "left": "Indicador",
      "right": "Cantidad de residuos observados"
    },
    {
      "left": "Costo",
      "right": "Dinero y trabajo de la alternativa"
    }
  ],
  "apply": {
    "prompt": "¿Qué plan permite comparar efectos?",
    "correct": "Prueba pequeña con conteo de residuos, costo y agua usada",
    "wrong": [
      "Declarar que cero residuos es seguro sin datos",
      "Cambiar todo sin evaluar limpieza ni recursos"
    ]
  },
  "exit": [
    {
      "prompt": "Otra escuela quiere reusar papel. ¿Qué indicador mediría?",
      "correct": "Hojas nuevas utilizadas antes y después",
      "wrong": [
        "Que toda familia está de acuerdo",
        "El entusiasmo del cartel únicamente"
      ]
    },
    {
      "text": "Una alternativa ambiental puede requerir recursos y también debe evaluarse",
      "answer": true,
      "why": "Comparar efectos evita trasladar el problema a otro recurso."
    }
  ],
  "contrast": {
    "text": "Elegir una opción ambiental sin comparar costos garantiza su sostenibilidad.",
    "answer": false,
    "why": "También deben evaluarse recursos y efectos."
  }
};

export default productivityLesson(18, topic);
