import { S, cierre, lesson, mission } from '../../dsl';

export default mission({
  id: 'marimba',
  unidad: 2,
  temaGenerador: 'La música nos une',
  title: 'Ritmos de marimba',
  subtitle: 'Figuras musicales y fracciones',
  emoji: '🎼',
  color: 'var(--area-art)',
  contexto: 'La marimba es un símbolo nacional de Guatemala. Suena en ferias, bodas y actos cívicos de todo el país. Cada canción se organiza en compases, y las figuras musicales duran fracciones de tiempo: ¡la música también es matemática!',
  ejes: ['multiculturalidad', 'vida-ciudadana'],
  badge: { id: 'm-marimba', name: 'Marimbista', emoji: '🎶', desc: 'Completaste Ritmos de marimba' },
  lessons: [
    lesson({
      id: 'fracciones-ritmo',
      title: 'Fracciones con ritmo',
      emoji: '🥁',
      minutes: 9,
      gancho: '¿Puedes aplaudir el ritmo de una canción que te guste?',
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['art', 'mat', 'ccss'], cnb: ['art:1.1', 'art:3.1'], ambito: 'conocer', title: 'Notas que son fracciones', prompt: 'En la música escrita, cada figura dura una parte de la **redonda** (el entero). Toca las tarjetas.' },
          { emoji: '🎹', body: 'Si la redonda es **1 entero**, las demás figuras son fracciones de ella.', reveal: [
            { emoji: '⚪', front: 'Redonda', back: '**1** entero = 4 tiempos' },
            { emoji: '🎵', front: 'Blanca', back: '**1/2** = 2 tiempos' },
            { emoji: '♩', front: 'Negra', back: '**1/4** = 1 tiempo' },
            { emoji: '♪', front: 'Corchea', back: '**1/8** = medio tiempo' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['art', 'mat'], cnb: ['art:1.1', 'mat:4.4'], prompt: 'Une cada figura con la **fracción** de redonda que dura.', explain: 'Cada figura dura la mitad de la anterior: 1 → 1/2 → 1/4 → 1/8.' },
          { leftTitle: 'Figura', rightTitle: 'Fracción', pairs: [
            { id: 'r', left: 'Redonda', leftEmoji: '⚪', right: '1' },
            { id: 'b', left: 'Blanca', leftEmoji: '🎵', right: '1/2' },
            { id: 'n', left: 'Negra', leftEmoji: '♩', right: '1/4' },
            { id: 'c', left: 'Corchea', leftEmoji: '♪', right: '1/8' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'art'], cnb: ['mat:4.4.4'], prompt: '¿Cuántas **corcheas** caben en una **blanca**?', hint: 'Blanca = 1/2 y corchea = 1/8. ¿Cuántos octavos hay en un medio?', explain: '1/2 ÷ 1/8 = 4. ¡Cuatro corcheas duran lo mismo que una blanca!' },
          { answer: 4, misconceptions: [{ value: 2, msg: 'Dos corcheas duran lo mismo que una negra, no que una blanca.' }] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'art'], cnb: ['mat:4.4.2'], prompt: 'Un compás tiene una blanca y dos negras. ¿Qué fracción de redonda suma?', hint: 'Convierte 1/2 en cuartos.', explain: '2/4 + 1/4 + 1/4 = 4/4 = **1** redonda completa.' },
          { answer: 1, allowFraction: true, stimulus: '1/2 + 1/4 + 1/4 = ?', misconceptions: [{ value: 3 / 10, msg: '¡No sumes numeradores y denominadores por separado! Busca un denominador común: 2/4 + 1/4 + 1/4.' }] },
        ),
        S.rhythm(
          { fase: 'construir', areas: ['art', 'mat'], cnb: ['art:2.1', 'mat:4.4.2'], prompt: 'Compón un compás de **4 tiempos** en la marimba. Usa **al menos una corchea**. Luego ¡tócalo!', hint: 'Si usas corcheas, van de dos en dos para completar tiempos enteros.', explain: '¡Tu compás suma exactamente 4/4, es decir, 1 redonda!' },
          { beats: 4, allowed: ['blanca', 'negra', 'corchea'], mustInclude: ['corchea'], showFractions: true },
        ),
        S.slider(
          { fase: 'aplicar', areas: ['mat', 'art'], cnb: ['mat:4.4'], prompt: 'Un compás está dividido en 8 corcheas. Llena **3/8** del compás.', explain: '3 de 8 partes iguales = 3/8.' },
          { min: 0, max: 1, step: 0.125, answer: 0.375, start: 0, visual: 'fraction', parts: 8, display: 'fraction' },
        ),
        S.rhythm(
          { fase: 'aplicar', areas: ['art', 'mat', 'ef'], cnb: ['art:1.1', 'ef:1.3'], prompt: 'Reto: compón un compás de 4 tiempos que tenga **una blanca y al menos una corchea**. Tócalo y acompáñalo con palmadas.', hint: 'Blanca (2) + … = 4. Te quedan 2 tiempos para repartir.', explain: '¡Excelente! Coordinar el ritmo con el cuerpo también es Educación Física.' },
          { beats: 4, allowed: ['blanca', 'negra', 'corchea'], mustInclude: ['blanca', 'corchea'], showFractions: false },
        ),
        cierre({ areas: ['art', 'mat'], cnb: ['art:3.1'] }, ['Relaciono las figuras musicales con fracciones', 'Puedo componer un compás de 4 tiempos', 'Valoro la marimba como parte de nuestra identidad'],
          ['Escucharé una pieza de marimba con mi familia', 'Crearé un ritmo con objetos de mi casa', 'Enseñaré las figuras musicales a un amigo']),
      ],
    }),
  ],
});
