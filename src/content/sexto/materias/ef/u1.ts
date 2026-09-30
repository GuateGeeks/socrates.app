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
  area: 'ef', unidad: 1,
  hilo: 'Parte de conocer el cuerpo que se mueve (huesos, músculos, articulaciones, lado dominante y equilibrio) para construir habilidades cada vez más complejas: acelerar y frenar, combinar habilidades, moverse con ritmo y expresión, lanzar, pasar y recibir en movimiento hasta iniciarse en el balonmano y el pase con el pie; en paralelo cultiva el cuidado personal (vestuario, respiración, relajación) y cierra con la convivencia: juego limpio, tiempo libre activo, juegos tradicionales y liderazgo con igualdad.',
  semanas: { 1: s01, 2: s02, 3: s03, 4: s04, 5: s05, 6: s06, 7: s07, 8: s08 },
});
