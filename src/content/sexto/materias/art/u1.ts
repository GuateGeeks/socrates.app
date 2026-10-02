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
  area: 'art', unidad: 1,
  hilo: 'Empieza leyendo y escribiendo música (figuras, pentagrama, compás y melodía) para escuchar con atención y valorar con criterio la música que consumimos; luego pasa a las artes visuales: técnicas gráficas para comunicar en carteles, texturas encontradas y creadas (también para hacer el arte accesible a personas con discapacidad visual), volumen y movimiento en una composición visual ambiental, y cierra investigando y publicando la vida de artistas de la comunidad, del país y del mundo.',
  semanas: { 1: s01, 2: s02, 3: s03, 4: s04, 5: s05, 6: s06, 7: s07, 8: s08 },
});
