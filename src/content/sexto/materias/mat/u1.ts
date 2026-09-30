import { materia } from '../../../dsl';
import s01 from './u1/s01';
import s02 from './u1/s02';
import s03 from './u1/s03';
import s04 from './u1/s04';
import s05 from './u1/s05';
import s06 from './u1/s06';
import s07 from './u1/s07';
import s08 from './u1/s08';

export default materia({
  area: 'mat', unidad: 1,
  hilo: 'De la geometría que nos rodea (triángulos, polígonos, simetría, perímetro y cuerpos geométricos) a los números que la describen: enteros y plano cartesiano, series, conjuntos y sus operaciones, números hasta 999,999,999, romanos y el sistema vigesimal maya. Cada semana se apoya en la anterior, con repaso espiral, y prepara la unidad siguiente: áreas y volúmenes, cálculo mental, divisibilidad y fracciones.',
  semanas: { 1: s01, 2: s02, 3: s03, 4: s04, 5: s05, 6: s06, 7: s07, 8: s08 },
});
