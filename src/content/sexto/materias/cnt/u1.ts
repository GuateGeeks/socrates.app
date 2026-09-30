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
  area: 'cnt', unidad: 1,
  hilo: 'Del origen del universo a la célula, y de la célula al cuerpo que crece y se cuida: organelos, ADN, cromosomas y genes, seres unicelulares y parásitos, diversidad animal, glándulas y pubertad, reproducción con ética, prevención del VIH y de las drogas, y una buena nutrición. La unidad se abre luego hacia la comunidad y el planeta (ambiente y salud, crecimiento urbano, reforestación y agua, energía, calentamiento global y satélites) y cierra con cómo investiga la ciencia, que prepara el trabajo experimental de las unidades siguientes.',
  semanas: { 1: s01, 2: s02, 3: s03, 4: s04, 5: s05, 6: s06, 7: s07, 8: s08 },
});
