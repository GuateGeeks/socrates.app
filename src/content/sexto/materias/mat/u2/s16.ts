import { mathLessons, type MathTopic } from './lesson';

/** Matemáticas · Unidad 2 · Semana 16. */
const topics: MathTopic[] = [
  {
    "title": "Divisibilidad entre 2, 5 y 10",
    "icon": "Hash",
    "cnb": [
      "mat:4.3.2"
    ],
    "idea": "Las cifras finales permiten probar divisibilidad por 2, 5 y 10.",
    "rule": "2: termina en cifra par; 5: en 0 o 5; 10: en 0.",
    "model": {
      "problem": "¿Cuántos de 40, 45 y 47 son divisibles entre 5?",
      "steps": [
        "40 y 45 terminan en 0 o 5",
        "47 no"
      ],
      "answer": "2 números"
    },
    "mistake": "Sumar cifras para decidir divisibilidad entre 5",
    "items": [
      {
        "prompt": "Entre 32,35,37: ¿cuántos divisibles entre 5?",
        "answer": 1
      },
      {
        "prompt": "Entre 80,82,85: ¿cuántos divisibles entre 10?",
        "answer": 1
      },
      {
        "prompt": "Entre 21,24,26: ¿cuántos divisibles entre 2?",
        "answer": 2
      },
      {
        "prompt": "Entre 50,54,55: ¿cuántos divisibles entre 5?",
        "answer": 2
      }
    ]
  },
  {
    "title": "Divisibilidad entre 3, 6 y 9",
    "icon": "Hash",
    "cnb": [
      "mat:4.3.2"
    ],
    "idea": "La suma de cifras prueba 3 y 9; para 6 se necesita ser divisible entre 2 y 3.",
    "rule": "3: suma de cifras múltiplo de 3; 9: múltiplo de 9; 6: par y múltiplo de 3.",
    "model": {
      "problem": "¿Cuál es la suma de cifras de 234 para probar divisibilidad?",
      "steps": [
        "2+3+4=9",
        "234 es divisible entre 3 y 9; también entre 6 por ser par"
      ],
      "answer": "9"
    },
    "mistake": "Creer que basta terminar en 6 para dividir entre 6",
    "items": [
      {
        "prompt": "Suma de cifras de 126",
        "answer": 9
      },
      {
        "prompt": "Suma de cifras de 345",
        "answer": 12
      },
      {
        "prompt": "Suma de cifras de 918",
        "answer": 18
      },
      {
        "prompt": "Suma de cifras de 222",
        "answer": 6
      }
    ]
  },
  {
    "title": "Divisibilidad entre 4 y 8",
    "icon": "Hash",
    "cnb": [
      "mat:4.3.2"
    ],
    "idea": "Para 4 importan las dos últimas cifras; para 8, las tres últimas.",
    "rule": "4: últimas dos cifras divisibles entre 4; 8: últimas tres divisibles entre 8.",
    "model": {
      "problem": "¿Cuánto valen las últimas tres cifras de 1,216 para probar entre 8?",
      "steps": [
        "Últimas tres: 216",
        "216÷8=27"
      ],
      "answer": "216"
    },
    "mistake": "Mirar solamente la última cifra para dividir entre 8",
    "items": [
      {
        "prompt": "Últimas dos cifras de 532",
        "answer": 32
      },
      {
        "prompt": "Últimas tres cifras de 1,024",
        "answer": 24
      },
      {
        "prompt": "Últimas dos cifras de 748",
        "answer": 48
      },
      {
        "prompt": "Últimas tres cifras de 2,136",
        "answer": 136
      }
    ]
  },
  {
    "title": "Primos y compuestos",
    "icon": "Sparkles",
    "cnb": [
      "mat:4.3.3"
    ],
    "idea": "Un primo tiene exactamente dos divisores positivos; uno no es primo ni compuesto.",
    "rule": "Cuenta divisores distintos: 1 y el propio número indica primo.",
    "model": {
      "problem": "¿Cuántos divisores positivos tiene 13?",
      "steps": [
        "Pruebo divisores menores que 13: ninguno divide exactamente salvo 1.",
        "Solo 1 y 13 dividen 13"
      ],
      "answer": "2"
    },
    "mistake": "Decir que 1 es primo porque se divide entre sí mismo",
    "items": [
      {
        "prompt": "¿Cuántos divisores tiene 17?",
        "answer": 2
      },
      {
        "prompt": "¿Cuántos divisores tiene 21?",
        "answer": 4
      },
      {
        "prompt": "¿Cuántos divisores tiene 23?",
        "answer": 2
      },
      {
        "prompt": "¿Cuántos divisores tiene 9?",
        "answer": 3
      }
    ]
  },
  {
    "title": "Criba de números primos",
    "icon": "Grid3X3",
    "cnb": [
      "mat:4.3.3"
    ],
    "idea": "Para saber si un número es primo, prueba divisores hasta su raíz cuadrada.",
    "rule": "Tacha múltiplos de primos pequeños; el 2 es el único primo par.",
    "model": {
      "problem": "Entre 20 y 30, ¿cuántos primos hay?",
      "steps": [
        "Prueba 21..29 con 2,3,5",
        "23 y 29 son primos"
      ],
      "answer": "2"
    },
    "mistake": "Suponer que todo número impar es primo",
    "items": [
      {
        "prompt": "Entre 10 y 20, ¿cuántos primos?",
        "answer": 4
      },
      {
        "prompt": "Entre 30 y 40, ¿cuántos primos?",
        "answer": 2
      },
      {
        "prompt": "Entre 40 y 50, ¿cuántos primos?",
        "answer": 3
      },
      {
        "prompt": "Entre 1 y 10, ¿cuántos primos?",
        "answer": 4
      }
    ]
  }
];

export default mathLessons(16, topics);
