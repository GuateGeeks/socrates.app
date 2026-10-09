import { materia } from '../../../dsl';

import s11 from './u2/s11';
import s12 from './u2/s12';
import s13 from './u2/s13';
import s14 from './u2/s14';
import s15 from './u2/s15';
import s16 from './u2/s16';
import s17 from './u2/s17';
import s18 from './u2/s18';

export default materia({
  area: 'ef', unidad: 2,
  hilo: 'Del conocimiento del cuerpo, la respiración y la coordinación al uso del lado no dominante, carreras y relevos; después practica ritmo, lanzamientos, bote y recepción. La unidad culmina con juego activo, postura, autonomía, reglas, ambiente e inclusión.',
  semanas: { 11: s11, 12: s12, 13: s13, 14: s14, 15: s15, 16: s16, 17: s17, 18: s18 },
});
