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
  area: 'pyd', unidad: 1,
  hilo: 'De entender qué es el desarrollo y qué determina la pobreza, al perfil emprendedor y las ideas productivas, los círculos de calidad para resolver problemas, la lectura de la naturaleza para producir y el uso seguro de herramientas; la unidad culmina planificando proyectos para la escuela y la comunidad, analizando el deterioro ambiental del mundo y guardando, con la comunidad, los saberes que conservan la naturaleza.',
  semanas: { 1: s01, 2: s02, 3: s03, 4: s04, 5: s05, 6: s06, 7: s07, 8: s08 },
});
