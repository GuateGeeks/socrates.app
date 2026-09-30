import { S, cierre, lesson, mission } from '../../dsl';

export default mission({
  id: 'energia-movimiento',
  unidad: 3,
  temaGenerador: 'Energía para vivir sanos',
  title: 'Cuerpo en movimiento',
  subtitle: 'Pulso, energía y alimentación',
  emoji: '🏃',
  color: 'var(--area-ef)',
  contexto: 'Caminar al mercado, jugar fútbol en la cancha o ayudar en la milpa: todo movimiento necesita energía, y esa energía viene de los alimentos. Un corazón sano y una alimentación variada nos permiten aprender y jugar mejor.',
  ejes: ['seguridad', 'vida-familiar'],
  badge: { id: 'm-energia', name: 'Energía en acción', emoji: '⚡', desc: 'Completaste Cuerpo en movimiento' },
  lessons: [
    lesson({
      id: 'laboratorio-pulso',
      title: 'Laboratorio del pulso',
      emoji: '❤️',
      minutes: 10,
      gancho: '¿Tu corazón late igual cuando duermes que cuando corres?',
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'ef'], cnb: ['cnt:7.1.2', 'cnt:7.1.4'], ambito: 'conocer', title: 'De la tortilla al movimiento', prompt: 'Los alimentos tienen **energía química**. Tu cuerpo la transforma en **movimiento** y calor.' },
          { emoji: '🌽➡️🏃', body: 'Cuando te mueves, tus músculos piden más oxígeno y energía. ¿Quién los reparte? El corazón, bombeando sangre. Cada bombeo es un **latido** que puedes sentir como **pulso**.' },
        ),
        S.pulse(
          { fase: 'construir', areas: ['ef', 'cnt', 'mat'], cnb: ['ef:1.3', 'cnt:8.1.4', 'mat:4.2'], ambito: 'hacer', prompt: '¡Experimento! Mide tu pulso **en reposo** y **después de moverte**. Contaremos 15 segundos y multiplicaremos por 4.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de moverte', exercise: { name: 'Saltos de tijera', emoji: '🤸', seconds: 30 } },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['cnt', 'ef'], cnb: ['cnt:7.1.4', 'cnt:8.2'], prompt: '¿Por qué sube el pulso al hacer ejercicio?', explain: 'Los músculos trabajan más y necesitan más **oxígeno y energía**; el corazón late más rápido para llevárselos.' },
          { options: [
            { id: 'a', text: 'Porque los músculos necesitan más oxígeno y energía', emoji: '💪' },
            { id: 'b', text: 'Porque el corazón se asusta', emoji: '😱', feedback: 'Las emociones pueden cambiar el pulso, pero en el ejercicio la causa principal es la demanda de oxígeno.' },
            { id: 'c', text: 'Porque hace más calor afuera', emoji: '☀️', feedback: 'El calor influye un poco, pero no explica el cambio tras moverte.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'ef'], cnb: ['mat:6.4.1'], prompt: 'Cinco compañeros midieron su pulso en reposo. ¿Cuál es el **promedio**?', hint: 'Suma todos los datos y divide entre cuántos son.', explain: '(72 + 80 + 76 + 84 + 88) ÷ 5 = 400 ÷ 5 = **80 lpm**.' },
          { answer: 80, unit: 'lpm', stimulus: '72 · 80 · 76 · 84 · 88', misconceptions: [{ value: 400, msg: 'Esa es la suma. ¡Falta dividir entre 5!' }, { value: 76, msg: 'Ese es el dato del medio de la lista, no el promedio. Suma y divide.' }] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'ef'], cnb: ['mat:6.4.1'], prompt: '¿Cuál es la **moda** de estos pulsos?', hint: 'La moda es el dato que más se repite.', explain: '80 aparece 3 veces: es la **moda**.' },
          { answer: 80, unit: 'lpm', stimulus: '80 · 76 · 80 · 92 · 76 · 80' },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['cnt', 'ef'], cnb: ['cnt:7.1.3'], prompt: 'Estás en lo alto del tobogán, **quieto**, a punto de deslizarte. ¿Qué energía tienes guardada por tu altura?', explain: 'Por estar en lo alto tienes **energía potencial**. Al deslizarte se transforma en **energía cinética** (de movimiento).' },
          { options: [
            { id: 'pot', text: 'Energía potencial', emoji: '⛰️' },
            { id: 'cin', text: 'Energía cinética', emoji: '🛝', feedback: 'La cinética es la del movimiento; todavía estás quieto.' },
            { id: 'lum', text: 'Energía lumínica', emoji: '💡', feedback: 'La lumínica es la de la luz.' },
          ], correct: ['pot'] },
        ),
        cierre({ areas: ['ef', 'cnt'], cnb: ['ef:3.1'] }, ['Sé medir mi pulso', 'Calculo el promedio y la moda de datos', 'Explico cómo el alimento se transforma en movimiento'],
          ['Haré al menos 30 minutos de actividad física al día', 'Mediré el pulso de alguien de mi familia', 'Tomaré agua pura después de hacer ejercicio']),
      ],
    }),
    lesson({
      id: 'plato-sano',
      title: 'Mi plato sano',
      emoji: '🥑',
      minutes: 8,
      gancho: '¿Qué comiste hoy? ¿De qué grupos de alimentos era?',
      steps: [
        S.sort(
          { fase: 'explorar', areas: ['cnt', 'ef'], cnb: ['cnt:5.1.1', 'cnt:5.1.2', 'ef:3.2'], prompt: 'Clasifica los alimentos según el **nutriente principal** que aportan.', explain: 'Una alimentación variada combina todos los grupos. Muchos alimentos aportan varios nutrientes; aquí clasificamos por el principal.' },
          { layout: 'grid2', buckets: [
            { id: 'car', label: 'Carbohidratos', emoji: '🌽', color: 'var(--area-ccss)' },
            { id: 'pro', label: 'Proteínas', emoji: '🥚', color: 'var(--area-pyd)' },
            { id: 'vit', label: 'Vitaminas y minerales', emoji: '🥬', color: 'var(--c-quetzal)' },
            { id: 'gra', label: 'Grasas', emoji: '🥑', color: 'var(--area-art)' },
          ], items: [
            { id: 'f1', text: 'Tortilla de maíz', emoji: '🫓', bucket: 'car' },
            { id: 'f2', text: 'Arroz', emoji: '🍚', bucket: 'car' },
            { id: 'f3', text: 'Huevo', emoji: '🥚', bucket: 'pro' },
            { id: 'f4', text: 'Pollo', emoji: '🍗', bucket: 'pro' },
            { id: 'f5', text: 'Naranja', emoji: '🍊', bucket: 'vit' },
            { id: 'f6', text: 'Hierbas (chipilín, bledo)', emoji: '🥬', bucket: 'vit' },
            { id: 'f7', text: 'Aguacate', emoji: '🥑', bucket: 'gra', feedback: 'El aguacate aporta grasas saludables.' },
            { id: 'f8', text: 'Aceite', emoji: '🫗', bucket: 'gra' },
          ] },
        ),
        S.recipe(
          { fase: 'construir', areas: ['mat', 'cnt', 'pyd'], cnb: ['mat:4.6.1', 'mat:5.2.1', 'pyd:1.4'], ambito: 'hacer', prompt: 'Esta receta de **atol de elote** es para 4 personas. En tu casa son **6**. Calcula las cantidades.', hint: '6 ÷ 4 = 1.5. Multiplica cada cantidad por 1.5 (o por 3/2).', explain: 'Todas las cantidades se multiplican por el mismo factor: 6/4 = **1.5**.' },
          { dish: 'Atol de elote', emoji: '🌽', baseServings: 4, targetServings: 6, ask: [0, 1, 2], ingredients: [
            { name: 'Elotes', emoji: '🌽', qty: 6, unit: 'unidades' },
            { name: 'Agua', emoji: '💧', qty: 4, unit: 'tazas' },
            { name: 'Azúcar', emoji: '🍬', qty: 0.5, unit: 'taza' },
            { name: 'Canela', emoji: '🪵', qty: 1, unit: 'raja' },
          ] },
        ),
        S.slider(
          { fase: 'aplicar', areas: ['mat', 'cnt', 'ef'], cnb: ['mat:6.1.2', 'cnt:5.3'], prompt: 'En un grado de **20** estudiantes, **15** desayunaron hoy. ¿Qué porcentaje desayunó?', hint: '15 de 20 → ¿cuántos de 100?', explain: '15/20 = 75/100 = **75%**. ¡Desayunar ayuda a concentrarse en clase!' },
          { min: 0, max: 100, step: 5, answer: 75, start: 0, visual: 'percent', display: 'percent' },
        ),
        cierre({ areas: ['cnt', 'ef'], cnb: ['ef:3.2'] }, ['Clasifico alimentos por sus nutrientes', 'Uso proporciones para ajustar recetas'],
          ['Comeré una fruta o verdura en cada tiempo de comida', 'Tomaré agua pura en lugar de aguas gaseosas', 'Ayudaré a preparar una receta en casa']),
      ],
    }),
  ],
});
