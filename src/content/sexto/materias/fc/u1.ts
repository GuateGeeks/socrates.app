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
  area: 'fc', unidad: 1,
  hilo: 'De la convivencia solidaria y los derechos humanos en la vida diaria, pasando por la diversidad, el rechazo a la discriminación, el liderazgo democrático y la participación en el gobierno escolar, hasta reconocer la cultura de violencia, elegir la cultura de paz con el diálogo y ubicar la memoria del conflicto armado para que nunca más se repita.',
  semanas: { 1: s01, 2: s02, 3: s03, 4: s04, 5: s05, 6: s06, 7: s07, 8: s08 },
});
