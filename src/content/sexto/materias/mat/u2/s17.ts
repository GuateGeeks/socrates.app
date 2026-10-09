import { mathLessons, type MathTopic } from './lesson';

/** Matemáticas · Unidad 2 · Semana 17. */
const topics: MathTopic[] = [
  {
    "title": "Árbol de factores primos",
    "icon": "GitBranch",
    "cnb": [
      "mat:4.3.4"
    ],
    "idea": "Todo compuesto se puede escribir como producto de primos.",
    "rule": "Divide sucesivamente entre primos hasta que todos los factores sean primos.",
    "model": {
      "problem": "¿Cuántos factores primos con repetición tiene 60?",
      "steps": [
        "60=2×30=2×2×15",
        "60=2×2×3×5"
      ],
      "answer": "4 factores"
    },
    "mistake": "Detenerse en un factor todavía compuesto",
    "items": [
      {
        "prompt": "¿Cuántos factores primos con repetición tiene 24?",
        "answer": 4
      },
      {
        "prompt": "¿Cuántos factores primos con repetición tiene 36?",
        "answer": 4
      },
      {
        "prompt": "¿Cuántos factores primos con repetición tiene 45?",
        "answer": 3
      },
      {
        "prompt": "¿Cuántos factores primos con repetición tiene 72?",
        "answer": 5
      }
    ]
  },
  {
    "title": "Factorización prima y potencias",
    "icon": "Superscript",
    "cnb": [
      "mat:4.3.4"
    ],
    "idea": "Factores primos repetidos pueden escribirse mediante exponentes.",
    "rule": "Cuenta las repeticiones de cada primo y verifica multiplicando.",
    "model": {
      "problem": "En 72=2³×3², ¿cuál es el exponente de 2?",
      "steps": [
        "72=2×2×2×3×3",
        "Hay tres doses"
      ],
      "answer": "3"
    },
    "mistake": "Confundir exponente con valor de la base",
    "items": [
      {
        "prompt": "En 48=2⁴×3, ¿exponente de 2?",
        "answer": 4
      },
      {
        "prompt": "En 50=2×5², ¿exponente de 5?",
        "answer": 2
      },
      {
        "prompt": "En 81=3⁴, ¿exponente de 3?",
        "answer": 4
      },
      {
        "prompt": "En 100=2²×5², ¿exponente de 2?",
        "answer": 2
      }
    ]
  },
  {
    "title": "Mínimo común múltiplo",
    "icon": "Layers",
    "cnb": [
      "mat:4.3.5"
    ],
    "idea": "El MCM es el menor número positivo que ambos números multiplican exactamente.",
    "rule": "En factorizaciones primas toma cada primo con el exponente mayor.",
    "model": {
      "problem": "MCM de 12=2²×3 y 18=2×3².",
      "steps": [
        "Mayor 2² y mayor 3²",
        "4×9=36"
      ],
      "answer": "36"
    },
    "mistake": "Tomar solo factores que aparecen en ambos con exponente menor",
    "items": [
      {
        "prompt": "MCM de 6 y 8",
        "answer": 24
      },
      {
        "prompt": "MCM de 9 y 12",
        "answer": 36
      },
      {
        "prompt": "MCM de 10 y 15",
        "answer": 30
      },
      {
        "prompt": "MCM de 4 y 14",
        "answer": 28
      }
    ]
  },
  {
    "title": "Máximo común divisor",
    "icon": "Layers",
    "cnb": [
      "mat:4.3.5"
    ],
    "idea": "El MCD es el mayor divisor compartido.",
    "rule": "En factorizaciones primas toma solo primos comunes con el exponente menor.",
    "model": {
      "problem": "MCD de 12=2²×3 y 18=2×3².",
      "steps": [
        "Comunes: 2¹ y 3¹",
        "2×3=6"
      ],
      "answer": "6"
    },
    "mistake": "Tomar todos los factores con exponente mayor, que da el MCM",
    "items": [
      {
        "prompt": "MCD de 18 y 24",
        "answer": 6
      },
      {
        "prompt": "MCD de 20 y 30",
        "answer": 10
      },
      {
        "prompt": "MCD de 28 y 42",
        "answer": 14
      },
      {
        "prompt": "MCD de 36 y 48",
        "answer": 12
      }
    ]
  },
  {
    "title": "MCM y MCD de tres números",
    "icon": "Layers",
    "cnb": [
      "mat:4.3.5"
    ],
    "idea": "Los mismos criterios sirven para tres números: mayor exponente para MCM, menor común para MCD.",
    "rule": "Factoriza los tres; compara exponentes primo por primo antes de multiplicar.",
    "model": {
      "problem": "MCM de 4, 6 y 8.",
      "steps": [
        "4=2², 6=2×3, 8=2³",
        "2³×3=24"
      ],
      "answer": "24"
    },
    "mistake": "Calcular el MCM solo de los dos primeros y detenerse",
    "items": [
      {
        "prompt": "MCM de 3, 4 y 6",
        "answer": 12
      },
      {
        "prompt": "MCD de 12, 18 y 24",
        "answer": 6
      },
      {
        "prompt": "MCM de 4, 5 y 10",
        "answer": 20
      },
      {
        "prompt": "MCD de 24, 36 y 60",
        "answer": 12
      }
    ]
  }
];

export default mathLessons(17, topics);
