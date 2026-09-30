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
  area: 'l3', unidad: 1,
  hilo: 'Primeros pasos para usar el inglés en situaciones reales: ubicar cosas y lugares (semana 1), comprar en el mercado actuando diálogos (2) y contar en tres oraciones lo que viví (3). Luego mira el idioma por dentro: cómo se escribe y cómo suena (4) y cómo se ordenan pronombres, verbos, adjetivos y adverbios (5). La unidad cierra leyendo para hacer y para conocer: seguir instrucciones de juegos y proyectos (6), deducir y narrar lo que pasó antes de una imagen (7) y leer biografías de personas famosas de países donde se habla inglés (8).',
  semanas: { 1: s01, 2: s02, 3: s03, 4: s04, 5: s05, 6: s06, 7: s07, 8: s08 },
});
