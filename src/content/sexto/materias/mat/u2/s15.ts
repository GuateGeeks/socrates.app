import { mathLessons, type MathTopic } from './lesson';

/** Matemáticas · Unidad 2 · Semana 15. */
const topics: MathTopic[] = [
  {
    "title": "Raíz cuadrada como lado de un cuadrado",
    "icon": "Square",
    "cnb": [
      "mat:4.2.6"
    ],
    "idea": "La raíz cuadrada exacta de un cuadrado perfecto es su lado.",
    "rule": "Busca el número que multiplicado por sí mismo da el radicando.",
    "model": {
      "problem": "¿Cuál es √144?",
      "steps": [
        "Busco un entero cuyo cuadrado sea 144.",
        "12×12=144"
      ],
      "answer": "12"
    },
    "mistake": "Dividir el radicando entre dos",
    "items": [
      {
        "prompt": "√81",
        "answer": 9
      },
      {
        "prompt": "√169",
        "answer": 13
      },
      {
        "prompt": "√225",
        "answer": 15
      },
      {
        "prompt": "√400",
        "answer": 20
      }
    ]
  },
  {
    "title": "Cuadrados perfectos hasta mil",
    "icon": "Grid2X2",
    "cnb": [
      "mat:4.2.6"
    ],
    "idea": "Un cuadrado perfecto se obtiene multiplicando un entero por sí mismo.",
    "rule": "Entre 1 y 1000, la mayor raíz entera exacta es 31 porque 31²=961.",
    "model": {
      "problem": "¿Cuál es √729?",
      "steps": [
        "Compruebo cuadrados cercanos: 26²=676 y 28²=784.",
        "27×27=729"
      ],
      "answer": "27"
    },
    "mistake": "Aproximar y declarar exacta una raíz no comprobada",
    "items": [
      {
        "prompt": "√256",
        "answer": 16
      },
      {
        "prompt": "√484",
        "answer": 22
      },
      {
        "prompt": "√625",
        "answer": 25
      },
      {
        "prompt": "√961",
        "answer": 31
      }
    ]
  },
  {
    "title": "Multiplicar en numeración maya",
    "icon": "Columns3",
    "cnb": [
      "mat:4.2.8"
    ],
    "idea": "En el sistema maya, punto vale 1, barra 5 y la segunda posición vale 20.",
    "rule": "Convierte cada posición a valor decimal, multiplica y vuelve a agrupar en veintenas.",
    "model": {
      "problem": "Dos puntos en segunda posición y una barra abajo representan 45; multiplica por 3.",
      "steps": [
        "2×20+5=45",
        "45×3=135"
      ],
      "answer": "135"
    },
    "mistake": "Leer la posición de veintenas como unidades",
    "items": [
      {
        "prompt": "1 punto arriba y 2 barras abajo (30) × 4",
        "answer": 120
      },
      {
        "prompt": "2 barras arriba y 1 punto abajo (201) × 2",
        "answer": 402
      },
      {
        "prompt": "1 barra arriba y 3 puntos abajo (103) × 3",
        "answer": 309
      },
      {
        "prompt": "3 puntos arriba y 1 barra abajo (65) × 5",
        "answer": 325
      }
    ]
  },
  {
    "title": "Enumerar todos los divisores",
    "icon": "ListOrdered",
    "cnb": [
      "mat:4.3.1"
    ],
    "idea": "Un divisor reparte un número sin dejar residuo.",
    "rule": "Forma parejas de factores y cuenta cada divisor una sola vez.",
    "model": {
      "problem": "¿Cuántos divisores tiene 18?",
      "steps": [
        "Parejas: 1×18, 2×9, 3×6",
        "Divisores: 1,2,3,6,9,18"
      ],
      "answer": "6 divisores"
    },
    "mistake": "Contar solamente los factores mayores",
    "items": [
      {
        "prompt": "¿Cuántos divisores tiene 12?",
        "answer": 6
      },
      {
        "prompt": "¿Cuántos divisores tiene 16?",
        "answer": 5
      },
      {
        "prompt": "¿Cuántos divisores tiene 20?",
        "answer": 6
      },
      {
        "prompt": "¿Cuántos divisores tiene 36?",
        "answer": 9
      }
    ]
  },
  {
    "title": "Pares de factores",
    "icon": "ListOrdered",
    "cnb": [
      "mat:4.3.1"
    ],
    "idea": "Cada pareja de factores aporta dos divisores, salvo cuando ambos son iguales.",
    "rule": "Busca parejas hasta la raíz cuadrada y evita repetir la pareja central.",
    "model": {
      "problem": "¿Cuántos divisores tiene 25?",
      "steps": [
        "1×25 y 5×5",
        "Divisores distintos: 1,5,25"
      ],
      "answer": "3 divisores"
    },
    "mistake": "Contar 5 dos veces por la pareja 5×5",
    "items": [
      {
        "prompt": "¿Cuántos divisores tiene 49?",
        "answer": 3
      },
      {
        "prompt": "¿Cuántos divisores tiene 24?",
        "answer": 8
      },
      {
        "prompt": "¿Cuántos divisores tiene 27?",
        "answer": 4
      },
      {
        "prompt": "¿Cuántos divisores tiene 30?",
        "answer": 8
      }
    ]
  }
];

export default mathLessons(15, topics);
