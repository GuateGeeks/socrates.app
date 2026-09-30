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
  area: 'ccss', unidad: 1,
  hilo: 'De ubicarnos en el planeta a actuar como ciudadanos: primero leemos el espacio (coordenadas, climas, ecosistemas, riesgos, recursos y población), luego a las sociedades (patrimonio, tecnología, comercio, trabajo y equidad) y aprendemos a investigarlas; después recorremos la historia, desde los primeros agricultores y las civilizaciones de ríos hasta las guerras del siglo XX, la Guerra Fría y el conflicto armado, para terminar en la paz, la democracia, la integración americana y la ciudadanía activa frente a los problemas del mundo.',
  semanas: { 1: s01, 2: s02, 3: s03, 4: s04, 5: s05, 6: s06, 7: s07, 8: s08 },
});
