import { mathLessons, type MathTopic } from './lesson';

/** Matemáticas · Unidad 2 · Semana 11. */
const topics: MathTopic[] = [
  {
    "title": "Área de triángulos acutángulos y obtusángulos",
    "icon": "Triangle",
    "cnb": [
      "mat:1.2.2"
    ],
    "idea": "La altura es perpendicular a la recta de la base: en un triángulo acutángulo cae dentro y en uno obtusángulo puede caer sobre la prolongación exterior.",
    "rule": "Área = base × altura ÷ 2; la unidad es cuadrada.",
    "model": {
      "problem": "Un banderín acutángulo tiene base 8 cm y altura 5 cm.",
      "steps": [
        "8 × 5 = 40",
        "40 ÷ 2 = 20"
      ],
      "answer": "20 cm²"
    },
    "mistake": "Multiplicar base por altura sin dividir entre dos",
    "items": [
      {
        "prompt": "Triángulo obtusángulo de base 6 cm y altura exterior perpendicular 4 cm: ¿área?",
        "answer": 12
      },
      {
        "prompt": "Base 10 cm y altura 7 cm: ¿área?",
        "answer": 35
      },
      {
        "prompt": "Base 12 cm y altura 3 cm: ¿área?",
        "answer": 18
      },
      {
        "prompt": "Base 14 cm y altura 6 cm: ¿área?",
        "answer": 42
      }
    ]
  },
  {
    "title": "Superficie de pirámides y conos",
    "icon": "Pyramid",
    "cnb": [
      "mat:1.4.1"
    ],
    "idea": "Una pirámide tiene caras laterales triangulares; un cono tiene superficie lateral curva. En ambos se suma el área de la base.",
    "rule": "Pirámide cuadrada: área total = lado² + 4×(lado×apotema lateral÷2). Cono: área total = πr² + πr×generatriz; π≈3.14.",
    "model": {
      "problem": "Pirámide cuadrada con lado 4 cm y apotema lateral 3 cm: ¿superficie total?",
      "steps": [
        "Base: 4²=16 cm²",
        "Cuatro caras: 4×(4×3÷2)=24 cm²",
        "Total: 16+24=40 cm²"
      ],
      "answer": "40 cm²"
    },
    "mistake": "Confundir altura vertical con apotema o generatriz lateral",
    "items": [
      {
        "prompt": "Pirámide cuadrada: lado 2 cm, apotema lateral 3 cm. ¿Área total?",
        "answer": 16
      },
      {
        "prompt": "Cono: radio 1 cm, generatriz 3 cm. ¿Área total con π=3.14?",
        "answer": 12.56
      },
      {
        "prompt": "Pirámide cuadrada: lado 6 cm, apotema lateral 4 cm. ¿Área total?",
        "answer": 84
      },
      {
        "prompt": "Cono: radio 2 cm, generatriz 3 cm. ¿Área total con π=3.14?",
        "answer": 31.4
      }
    ]
  },
  {
    "title": "Longitud de una circunferencia",
    "icon": "Circle",
    "cnb": [
      "mat:1.2.3"
    ],
    "idea": "La circunferencia es el borde del círculo; su longitud crece con el diámetro.",
    "rule": "Longitud = π × diámetro; usa π ≈ 3.14.",
    "model": {
      "problem": "Una rueda tiene diámetro 10 cm. ¿Cuánto mide su borde?",
      "steps": [
        "El diámetro completo mide 10 cm; no debo duplicarlo otra vez.",
        "3.14 × 10 = 31.4"
      ],
      "answer": "31.4 cm"
    },
    "mistake": "Usar el área π × radio² para medir un borde",
    "items": [
      {
        "prompt": "Diámetro 20 cm: longitud con π=3.14",
        "answer": 62.8
      },
      {
        "prompt": "Diámetro 5 cm: longitud con π=3.14",
        "answer": 15.7
      },
      {
        "prompt": "Diámetro 30 cm: longitud con π=3.14",
        "answer": 94.2
      },
      {
        "prompt": "Diámetro 8 cm: longitud con π=3.14",
        "answer": 25.12
      }
    ]
  },
  {
    "title": "Área del círculo",
    "icon": "CircleDot",
    "cnb": [
      "mat:1.2.3"
    ],
    "idea": "El área mide la superficie interior; el radio va del centro al borde.",
    "rule": "Área = π × radio²; primero eleva el radio al cuadrado y usa π ≈ 3.14.",
    "model": {
      "problem": "Una tapa circular tiene radio 3 cm. ¿Área aproximada?",
      "steps": [
        "3² = 9",
        "3.14 × 9 = 28.26"
      ],
      "answer": "28.26 cm²"
    },
    "mistake": "Multiplicar π por el diámetro sin elevar el radio al cuadrado",
    "items": [
      {
        "prompt": "Radio 2 cm: área con π=3.14",
        "answer": 12.56
      },
      {
        "prompt": "Radio 5 cm: área con π=3.14",
        "answer": 78.5
      },
      {
        "prompt": "Radio 4 cm: área con π=3.14",
        "answer": 50.24
      },
      {
        "prompt": "Radio 6 cm: área con π=3.14",
        "answer": 113.04
      }
    ]
  },
  {
    "title": "Superficie de prismas y cilindros",
    "icon": "Cylinder",
    "cnb": [
      "mat:1.4.1"
    ],
    "idea": "El área total de un prisma suma todas sus caras; la de un cilindro suma dos círculos y un rectángulo lateral al desplegarlo.",
    "rule": "Prisma rectangular: 2(largo×ancho + largo×alto + ancho×alto). Cilindro: 2πr² + 2πrh; el cubo tiene 6 caras cuadradas.",
    "model": {
      "problem": "Una caja mide 4 cm × 3 cm × 2 cm. ¿Área total?",
      "steps": [
        "Caras distintas: 4×3=12, 4×2=8, 3×2=6",
        "Dos de cada una: 2×(12+8+6)=52"
      ],
      "answer": "52 cm²"
    },
    "mistake": "Multiplicar largo×ancho×alto: eso calcula volumen",
    "items": [
      {
        "prompt": "Cubo de arista 2 cm: ¿área total?",
        "answer": 24
      },
      {
        "prompt": "Cilindro de radio 1 cm y altura 2 cm: ¿área total con π=3.14?",
        "answer": 18.84
      },
      {
        "prompt": "Prisma rectangular 3×3×2 cm: ¿área total?",
        "answer": 42
      },
      {
        "prompt": "Cilindro de radio 2 cm y altura 3 cm: ¿área total con π=3.14?",
        "answer": 62.8
      }
    ]
  }
];

export default mathLessons(11, topics);
