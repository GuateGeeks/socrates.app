import { mathLessons, type MathTopic } from './lesson';

/** Matemáticas · Unidad 2 · Semana 18. */
const topics: MathTopic[] = [
  {
    "title": "Simplificar por divisor común",
    "icon": "Divide",
    "cnb": [
      "mat:4.4.1"
    ],
    "idea": "Dividir numerador y denominador por el mismo número conserva el valor.",
    "rule": "Busca un divisor común; repite hasta que solo compartan 1.",
    "model": {
      "problem": "Simplifica 12/18. ¿Numerador final?",
      "steps": [
        "12÷6=2, 18÷6=3",
        "12/18=2/3"
      ],
      "answer": "2"
    },
    "mistake": "Dividir solo el numerador y cambiar el valor",
    "items": [
      {
        "prompt": "Simplifica 8/12: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 2,
        "fraction": "2/3"
      },
      {
        "prompt": "Simplifica 15/25: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 3,
        "fraction": "3/5"
      },
      {
        "prompt": "Simplifica 18/24: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 3,
        "fraction": "3/4"
      },
      {
        "prompt": "Simplifica 21/28: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 3,
        "fraction": "3/4"
      }
    ]
  },
  {
    "title": "Fracción irreducible con MCD",
    "icon": "Divide",
    "cnb": [
      "mat:4.4.1"
    ],
    "idea": "El MCD permite simplificar de una sola vez.",
    "rule": "Divide numerador y denominador entre su MCD; confirma que el nuevo MCD sea 1.",
    "model": {
      "problem": "Simplifica 24/36. ¿Denominador final?",
      "steps": [
        "MCD(24,36)=12",
        "24÷12=2, 36÷12=3"
      ],
      "answer": "3"
    },
    "mistake": "Dividir por cualquier número no común",
    "items": [
      {
        "prompt": "Simplifica 16/40: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 5,
        "fraction": "2/5"
      },
      {
        "prompt": "Simplifica 14/35: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 5,
        "fraction": "2/5"
      },
      {
        "prompt": "Simplifica 30/42: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 7,
        "fraction": "5/7"
      },
      {
        "prompt": "Simplifica 45/60: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 4,
        "fraction": "3/4"
      }
    ]
  },
  {
    "title": "Sumar fracciones con denominadores distintos",
    "icon": "Plus",
    "cnb": [
      "mat:4.4.2"
    ],
    "idea": "Antes de sumar, las partes deben tener igual tamaño.",
    "rule": "Busca denominador común, convierte fracciones, suma numeradores y simplifica.",
    "model": {
      "problem": "Suma 1/2+1/4. ¿Numerador simplificado?",
      "steps": [
        "1/2=2/4",
        "2/4+1/4=3/4"
      ],
      "answer": "3"
    },
    "mistake": "Sumar denominadores directamente",
    "items": [
      {
        "prompt": "1/3+1/6: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 1,
        "fraction": "1/2"
      },
      {
        "prompt": "1/4+1/2: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 3,
        "fraction": "3/4"
      },
      {
        "prompt": "1/5+2/5: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 3,
        "fraction": "3/5"
      },
      {
        "prompt": "1/6+1/3: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 1,
        "fraction": "1/2"
      }
    ]
  },
  {
    "title": "Restar fracciones con denominadores distintos",
    "icon": "Minus",
    "cnb": [
      "mat:4.4.2"
    ],
    "idea": "Para restar, convierte a partes del mismo tamaño.",
    "rule": "Usa denominador común, resta numeradores y simplifica.",
    "model": {
      "problem": "Resta 3/4−1/2. ¿Denominador simplificado?",
      "steps": [
        "1/2=2/4",
        "3/4−2/4=1/4"
      ],
      "answer": "4"
    },
    "mistake": "Restar numeradores y denominadores por separado",
    "items": [
      {
        "prompt": "5/6−1/3: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 2,
        "fraction": "1/2"
      },
      {
        "prompt": "3/5−1/10: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 2,
        "fraction": "1/2"
      },
      {
        "prompt": "7/8−1/4: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 8,
        "fraction": "5/8"
      },
      {
        "prompt": "2/3−1/6: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 2,
        "fraction": "1/2"
      }
    ]
  },
  {
    "title": "Sumas y restas combinadas de fracciones",
    "icon": "ListOrdered",
    "cnb": [
      "mat:4.4.2"
    ],
    "idea": "En una expresión con suma y resta, convierte todas las fracciones al mismo denominador.",
    "rule": "Encuentra el MCM de denominadores, opera numeradores de izquierda a derecha y simplifica.",
    "model": {
      "problem": "Calcula 1/2+1/3−1/6. ¿Numerador simplificado?",
      "steps": [
        "3/6+2/6−1/6=4/6",
        "4/6=2/3"
      ],
      "answer": "2"
    },
    "mistake": "Cambiar el denominador en medio de una suma sin convertir todos los términos",
    "items": [
      {
        "prompt": "1/4+1/2−1/8: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 5,
        "fraction": "5/8"
      },
      {
        "prompt": "2/3−1/6+1/4: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 1,
        "fraction": "3/4"
      },
      {
        "prompt": "3/4+1/8−1/2: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 3,
        "fraction": "3/8"
      },
      {
        "prompt": "5/6−1/3+1/6: ¿cuál es la fracción completa en mínima expresión?",
        "answer": 2,
        "fraction": "2/3"
      }
    ]
  }
];

export default mathLessons(18, topics);
