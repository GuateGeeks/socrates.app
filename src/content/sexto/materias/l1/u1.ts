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
  area: 'l1', unidad: 1,
  hilo: 'Comunicar con intención y aprender a través del lenguaje: de la voz, el cuerpo y los medios (semana 1) a leer para aprender y buscar información (2-3), del texto dramático a la escena (3-4) y de las palabras que describen a la oración bien construida (5-6). La unidad culmina en una investigación guiada con casos suministrados (6-8): planificar, preguntar, elegir fuentes confiables, citar con honestidad y escribir un informe revisado; una sustitución local es opcional y solo se usa con datos verificados.',
  semanas: { 1: s01, 2: s02, 3: s03, 4: s04, 5: s05, 6: s06, 7: s07, 8: s08 },
});
