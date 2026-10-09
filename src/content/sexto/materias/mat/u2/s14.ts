import { mathLessons, type MathTopic } from './lesson';

/** Matemáticas · Unidad 2 · Semana 14. */
const topics: MathTopic[] = [
  {
    "title": "Encontrar un sumando desconocido",
    "icon": "CircleHelp",
    "cnb": [
      "mat:4.2.3"
    ],
    "idea": "Una operación abierta se resuelve deshaciendo la operación conocida.",
    "rule": "Si x+a=b, entonces x=b−a; verifica sustituyendo.",
    "model": {
      "problem": "Completa □+18=53.",
      "steps": [
        "53−18=35",
        "35+18=53"
      ],
      "answer": "35"
    },
    "mistake": "Sumar 53+18",
    "items": [
      {
        "prompt": "□+27=64",
        "answer": 37
      },
      {
        "prompt": "39+□=75",
        "answer": 36
      },
      {
        "prompt": "□+46=90",
        "answer": 44
      },
      {
        "prompt": "58+□=92",
        "answer": 34
      }
    ]
  },
  {
    "title": "Encontrar factor o divisor",
    "icon": "CircleHelp",
    "cnb": [
      "mat:4.2.3"
    ],
    "idea": "La multiplicación y la división son operaciones inversas.",
    "rule": "Si x×a=b, x=b÷a; verifica multiplicando.",
    "model": {
      "problem": "Completa □×7=63.",
      "steps": [
        "63÷7=9",
        "9×7=63"
      ],
      "answer": "9"
    },
    "mistake": "Restar 7 a 63 una sola vez",
    "items": [
      {
        "prompt": "□×8=72",
        "answer": 9
      },
      {
        "prompt": "6×□=54",
        "answer": 9
      },
      {
        "prompt": "□×9=81",
        "answer": 9
      },
      {
        "prompt": "□×4=52",
        "answer": 13
      }
    ]
  },
  {
    "title": "Jerarquía: multiplicar antes de sumar",
    "icon": "ListOrdered",
    "cnb": [
      "mat:4.2.4"
    ],
    "idea": "Sin paréntesis, multiplicación y división van antes que suma y resta.",
    "rule": "Primero × y ÷ de izquierda a derecha; después + y −.",
    "model": {
      "problem": "Calcula 8+3×4.",
      "steps": [
        "3×4=12",
        "8+12=20"
      ],
      "answer": "20"
    },
    "mistake": "Resolver de izquierda a derecha ignorando prioridad",
    "items": [
      {
        "prompt": "5+6×3",
        "answer": 23
      },
      {
        "prompt": "20−4×2",
        "answer": 12
      },
      {
        "prompt": "7×3+9",
        "answer": 30
      },
      {
        "prompt": "18+12÷3",
        "answer": 22
      }
    ]
  },
  {
    "title": "Paréntesis cambian el orden",
    "icon": "Parentheses",
    "cnb": [
      "mat:4.2.4"
    ],
    "idea": "Los paréntesis señalan la operación que se hace primero.",
    "rule": "Resuelve primero el grupo entre paréntesis; sigue la jerarquía afuera.",
    "model": {
      "problem": "Calcula (8+3)×4.",
      "steps": [
        "8+3=11",
        "11×4=44"
      ],
      "answer": "44"
    },
    "mistake": "Ignorar paréntesis y multiplicar antes",
    "items": [
      {
        "prompt": "(5+6)×3",
        "answer": 33
      },
      {
        "prompt": "(20−4)×2",
        "answer": 32
      },
      {
        "prompt": "7×(3+9)",
        "answer": 84
      },
      {
        "prompt": "(18+12)÷3",
        "answer": 10
      }
    ]
  },
  {
    "title": "Operaciones combinadas con dos grupos",
    "icon": "ListOrdered",
    "cnb": [
      "mat:4.2.4"
    ],
    "idea": "Al haber varios grupos, se resuelve cada paréntesis por separado.",
    "rule": "Paréntesis; después × y ÷; finalmente + y −. Comprueba con estimación.",
    "model": {
      "problem": "Calcula (12+8)÷4 + 3×2.",
      "steps": [
        "20÷4=5",
        "3×2=6",
        "5+6=11"
      ],
      "answer": "11"
    },
    "mistake": "Hacer la suma final antes de dividir o multiplicar",
    "items": [
      {
        "prompt": "(10+6)÷4+5",
        "answer": 9
      },
      {
        "prompt": "(18−6)÷3+4",
        "answer": 8
      },
      {
        "prompt": "2×(7+5)−3",
        "answer": 21
      },
      {
        "prompt": "(9+3)÷2+4×2",
        "answer": 14
      }
    ]
  }
];

export default mathLessons(14, topics);
