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
  area: 'l2', unidad: 1,
  hilo: 'Comunicarse en español con intención y respeto: escuchar distinguiendo hechos de opiniones y anticipando mensajes (semana 1), tratar a otros con cortesía y seguir instrucciones (2), leer señales, símbolos e imágenes sin palabras (3), usar la voz y el cuerpo para recitar, dramatizar y convencer con razones (4-5). La unidad cierra mirando el idioma por dentro: sus sonidos (6), sus sílabas, acentos, ritmo y rima (7) y las clases de palabras que forman cada oración (8).',
  semanas: { 1: s01, 2: s02, 3: s03, 4: s04, 5: s05, 6: s06, 7: s07, 8: s08 },
});
