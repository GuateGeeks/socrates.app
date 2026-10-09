import { mathLessons, type MathTopic } from './lesson';

/** Matemáticas · Unidad 2 · Semana 12. */
const topics: MathTopic[] = [
  {
    "title": "Volumen de prismas rectangulares",
    "icon": "Box",
    "cnb": [
      "mat:1.4.2",
      "mat:1.4.3"
    ],
    "idea": "El volumen cuenta unidades cúbicas dentro de una caja.",
    "rule": "Volumen = largo × ancho × alto; expresa el resultado en cm³ o m³.",
    "model": {
      "problem": "Una caja de 4×3×2 cm: ¿cuánto espacio contiene?",
      "steps": [
        "4×3=12",
        "12×2=24"
      ],
      "answer": "24 cm³"
    },
    "mistake": "Sumar las tres medidas en lugar de multiplicarlas",
    "items": [
      {
        "prompt": "Caja 2×3×5 cm: volumen",
        "answer": 30
      },
      {
        "prompt": "Caja 4×4×3 cm: volumen",
        "answer": 48
      },
      {
        "prompt": "Caja 5×2×6 cm: volumen",
        "answer": 60
      },
      {
        "prompt": "Caja 7×2×3 cm: volumen",
        "answer": 42
      }
    ]
  },
  {
    "title": "Cubo: arista, área y volumen",
    "icon": "Box",
    "cnb": [
      "mat:1.4.2",
      "mat:1.4.3"
    ],
    "idea": "Las doce aristas del cubo son iguales; sus seis caras son cuadrados.",
    "rule": "Volumen = arista³; área total = 6×arista². No confundas cm³ con cm².",
    "model": {
      "problem": "Un cubo tiene arista de 3 cm. ¿Volumen?",
      "steps": [
        "Las tres dimensiones miden la misma arista: 3 cm.",
        "3×3×3=27"
      ],
      "answer": "27 cm³"
    },
    "mistake": "Multiplicar por seis para hallar volumen; seis corresponde a caras",
    "items": [
      {
        "prompt": "Arista 2 cm: volumen",
        "answer": 8
      },
      {
        "prompt": "Arista 4 cm: volumen",
        "answer": 64
      },
      {
        "prompt": "Arista 5 cm: volumen",
        "answer": 125
      },
      {
        "prompt": "Arista 6 cm: volumen",
        "answer": 216
      }
    ]
  },
  {
    "title": "Volumen del cilindro",
    "icon": "Cylinder",
    "cnb": [
      "mat:1.4.2",
      "mat:1.4.3"
    ],
    "idea": "El cilindro apila círculos iguales a lo largo de la altura.",
    "rule": "Volumen = π×radio²×altura; con π≈3.14 y unidades cúbicas.",
    "model": {
      "problem": "Un recipiente cilíndrico tiene radio 2 cm y altura 5 cm.",
      "steps": [
        "2²=4",
        "3.14×4×5=62.8"
      ],
      "answer": "62.8 cm³"
    },
    "mistake": "Usar el diámetro como radio",
    "items": [
      {
        "prompt": "Radio 1 cm, altura 10 cm: volumen",
        "answer": 31.4
      },
      {
        "prompt": "Radio 3 cm, altura 2 cm: volumen",
        "answer": 56.52
      },
      {
        "prompt": "Radio 2 cm, altura 4 cm: volumen",
        "answer": 50.24
      },
      {
        "prompt": "Radio 4 cm, altura 3 cm: volumen",
        "answer": 150.72
      }
    ]
  },
  {
    "title": "Volumen de una pirámide rectangular",
    "icon": "Pyramid",
    "cnb": [
      "mat:1.4.2"
    ],
    "idea": "Una pirámide ocupa un tercio del prisma con la misma base y altura.",
    "rule": "Volumen = largo×ancho×altura ÷ 3.",
    "model": {
      "problem": "Una pirámide tiene base 6×4 cm y altura 3 cm.",
      "steps": [
        "6×4=24",
        "24×3÷3=24"
      ],
      "answer": "24 cm³"
    },
    "mistake": "Olvidar dividir entre tres",
    "items": [
      {
        "prompt": "Base 3×3 cm, altura 6 cm: volumen",
        "answer": 18
      },
      {
        "prompt": "Base 6×2 cm, altura 3 cm: volumen",
        "answer": 12
      },
      {
        "prompt": "Base 5×4 cm, altura 6 cm: volumen",
        "answer": 40
      },
      {
        "prompt": "Base 9×2 cm, altura 3 cm: volumen",
        "answer": 18
      }
    ]
  },
  {
    "title": "Volumen de un cono",
    "icon": "Cone",
    "cnb": [
      "mat:1.4.2"
    ],
    "idea": "Un cono ocupa un tercio del cilindro de igual base y altura.",
    "rule": "Volumen = π×radio²×altura ÷ 3; π≈3.14.",
    "model": {
      "problem": "Un cono tiene radio 3 cm y altura 3 cm.",
      "steps": [
        "3²=9",
        "3.14×9×3÷3=28.26"
      ],
      "answer": "28.26 cm³"
    },
    "mistake": "Calcular solo el cilindro sin dividir entre tres",
    "items": [
      {
        "prompt": "Radio 2 cm, altura 3 cm: volumen",
        "answer": 12.56
      },
      {
        "prompt": "Radio 1 cm, altura 6 cm: volumen",
        "answer": 6.28
      },
      {
        "prompt": "Radio 3 cm, altura 6 cm: volumen",
        "answer": 56.52
      },
      {
        "prompt": "Radio 4 cm, altura 3 cm: volumen",
        "answer": 50.24
      }
    ]
  }
];

export default mathLessons(12, topics);
