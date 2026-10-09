import { mathLessons, type MathTopic } from './lesson';

/** Matemáticas · Unidad 2 · Semana 13. */
const topics: MathTopic[] = [
  {
    "title": "Estimar sumas y restas",
    "icon": "Calculator",
    "cnb": [
      "mat:4.2.1"
    ],
    "idea": "Redondear ayuda a comprobar si una respuesta exacta tiene sentido.",
    "rule": "Redondea cada dato a una decena próxima y luego suma o resta; declara que es estimación.",
    "model": {
      "problem": "El mercado vendió 48 y 31 canastas. Estima la suma a decenas.",
      "steps": [
        "48≈50, 31≈30",
        "50+30=80"
      ],
      "answer": "80 aproximadamente"
    },
    "mistake": "Presentar la estimación como cantidad exacta",
    "items": [
      {
        "prompt": "Estima 62+19 a decenas",
        "answer": 80
      },
      {
        "prompt": "Estima 87−32 a decenas",
        "answer": 60
      },
      {
        "prompt": "Estima 44+27 a decenas",
        "answer": 70
      },
      {
        "prompt": "Estima 91−38 a decenas",
        "answer": 50
      }
    ]
  },
  {
    "title": "Estimar productos y cocientes",
    "icon": "Calculator",
    "cnb": [
      "mat:4.2.1"
    ],
    "idea": "Los números compatibles facilitan una aproximación mental.",
    "rule": "Redondea a valores fáciles, calcula y compara luego con el resultado exacto.",
    "model": {
      "problem": "Hay 19 bolsas de 6 semillas. Estima usando 20×6.",
      "steps": [
        "19≈20",
        "20×6=120"
      ],
      "answer": "120 aproximadamente"
    },
    "mistake": "Decir que 120 es el producto exacto de 19×6",
    "items": [
      {
        "prompt": "Estima 29×4 usando decenas",
        "answer": 120
      },
      {
        "prompt": "Estima 41×5 usando decenas",
        "answer": 200
      },
      {
        "prompt": "Estima 198÷5 usando 200÷5",
        "answer": 40
      },
      {
        "prompt": "Estima 62×3 usando decenas",
        "answer": 180
      }
    ]
  },
  {
    "title": "Cálculo mental por descomposición",
    "icon": "Brain",
    "cnb": [
      "mat:4.2.2"
    ],
    "idea": "Separar decenas y unidades permite calcular sin algoritmo escrito.",
    "rule": "Descompón en partes convenientes, opera y vuelve a unir.",
    "model": {
      "problem": "Calcula mentalmente 47+26.",
      "steps": [
        "40+20=60",
        "7+6=13",
        "60+13=73"
      ],
      "answer": "73"
    },
    "mistake": "Sumar decenas y olvidar las unidades",
    "items": [
      {
        "prompt": "58+24",
        "answer": 82
      },
      {
        "prompt": "63+18",
        "answer": 81
      },
      {
        "prompt": "95−37",
        "answer": 58
      },
      {
        "prompt": "76−29",
        "answer": 47
      }
    ]
  },
  {
    "title": "Dobles y compensación",
    "icon": "Brain",
    "cnb": [
      "mat:4.2.2"
    ],
    "idea": "Compensar convierte una cuenta difícil en otra cercana sencilla.",
    "rule": "Suma lo que quitas a un término y réstalo del otro para conservar el total.",
    "model": {
      "problem": "Calcula mentalmente 49+35.",
      "steps": [
        "49+1=50",
        "35−1=34",
        "50+34=84"
      ],
      "answer": "84"
    },
    "mistake": "Cambiar solo un término: altera la suma",
    "items": [
      {
        "prompt": "39+26",
        "answer": 65
      },
      {
        "prompt": "58+17",
        "answer": 75
      },
      {
        "prompt": "99+48",
        "answer": 147
      },
      {
        "prompt": "69+34",
        "answer": 103
      }
    ]
  },
  {
    "title": "Dividir mentalmente por partes",
    "icon": "Brain",
    "cnb": [
      "mat:4.2.2"
    ],
    "idea": "Se puede repartir un número en sumandos divisibles por el mismo divisor.",
    "rule": "(a+b)÷d = a÷d + b÷d cuando ambas partes se reparten exactamente.",
    "model": {
      "problem": "Calcula mentalmente 96÷4.",
      "steps": [
        "80÷4=20",
        "16÷4=4",
        "20+4=24"
      ],
      "answer": "24"
    },
    "mistake": "Dividir una sola parte y olvidar la otra",
    "items": [
      {
        "prompt": "84÷4",
        "answer": 21
      },
      {
        "prompt": "72÷3",
        "answer": 24
      },
      {
        "prompt": "108÷6",
        "answer": 18
      },
      {
        "prompt": "156÷4",
        "answer": 39
      }
    ]
  }
];

export default mathLessons(13, topics);
