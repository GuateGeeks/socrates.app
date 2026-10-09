import { productivityLesson, type ProductivityTopic } from './lesson';

/** Productividad y Desarrollo · Unidad 2 · Semana 12. */
const topic: ProductivityTopic = {
  "title": "Recursos naturales para proyectos responsables",
  "cnb": [
    "pyd:1.4.1"
  ],
  "principle": "Un recurso natural puede apoyar un proyecto si su uso es legal, renovable en las condiciones locales y no daña necesidades básicas.",
  "method": "Examina disponibilidad, permiso, reposición e impacto antes de elegir el recurso.",
  "model": {
    "case": "Caso simulado: un grupo quiere producir macetas con barro de un terreno sin permiso.",
    "steps": [
      "Separa interés productivo de derecho de extracción",
      "Consulta permiso y disponibilidad",
      "Considera materiales recuperados"
    ],
    "result": "No extrae barro sin autorización ni evaluación."
  },
  "guided": [
    {
      "left": "Disponibilidad",
      "right": "Cantidad que puede usarse sin agotar"
    },
    {
      "left": "Permiso",
      "right": "Autorización para acceder al recurso"
    }
  ],
  "apply": {
    "prompt": "¿Qué decisión es responsable?",
    "correct": "Consultar permiso y probar material recuperado",
    "wrong": [
      "Tomar barro porque está cerca",
      "Afirmar que todo recurso natural es gratuito e ilimitado"
    ]
  },
  "exit": [
    {
      "prompt": "Para un vivero pequeño, ¿qué se debe verificar antes de usar agua?",
      "correct": "Fuente autorizada y cantidad disponible",
      "wrong": [
        "Que el agua nunca se acabará",
        "Solo el color del recipiente"
      ]
    },
    {
      "text": "Que un recurso exista cerca no autoriza automáticamente extraerlo",
      "answer": true,
      "why": "El acceso y el impacto deben verificarse."
    }
  ],
  "contrast": {
    "text": "Ver barro en un terreno autoriza a extraerlo para un proyecto escolar.",
    "answer": false,
    "why": "Se necesita permiso y evaluación de impacto."
  }
};

export default productivityLesson(12, topic);
