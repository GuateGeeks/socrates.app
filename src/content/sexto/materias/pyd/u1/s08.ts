/** Productividad y Desarrollo · Unidad 1 · Semana 8. */
import { lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's08-pyd-1',
    title: 'Practico una acción voluntaria de conservación',
    icon: 'Sprout',
    minutes: 14,
    gancho: 'Un sobre sin nombre puede perder su historia. ¿Cómo lo conservarías de manera segura y voluntaria?',
    objetivos: ['Realizar y documentar una práctica voluntaria, segura y simulada para conservar una muestra escolar de semillas secas'],
    resumen: [
      'Esta actividad es una simulación de aula con materiales suministrados; no afirma que se realizó conservación en una comunidad.',
      'Participar es voluntario: se puede rotular un sobre de papel o elegir la alternativa de ordenar una ficha sin tocar la muestra.',
      'La secuencia es observar sin abrir, elegir una tarea, rotular, revisar y registrar la fuente del caso.',
      'La evidencia describe la acción realmente practicada en la lección y el siguiente paso seguro.',
    ],
    media: {
      id: 's08-pyd-1-practica', kind: 'diagram', title: 'Práctica simulada de conservación', aspect: '16:9',
      alt: 'Cinco viñetas muestran un sobre cerrado con semillas secas, una elección voluntaria, una etiqueta, una revisión y un registro de fuente.',
      brief: 'Diagrama horizontal de cinco pasos: observar un sobre cerrado de muestra, elegir libremente entre rotular u ordenar una ficha, escribir nombre y fecha simulada, revisar que siga seco y cerrado, y registrar “Ficha didáctica suministrada”. Incluir una ruta alternativa accesible sin manipular semillas. No mostrar ingestión ni herramientas. Target: public/media/s08-pyd-1-practica.svg. Producción: 1600×900 px. Accesibilidad: alto contraste, icono y texto en cada paso, orden de lectura indicado y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'conocer', title: 'Caso suministrado y elección libre', prompt: 'Lee las condiciones antes de elegir una práctica.' },
        { icon: 'Package', body: '**Simulación de aula:** el paquete trae un sobre cerrado de muestra y una ficha. Puedes practicar el rotulado o elegir la alternativa de ordenar la ficha. Ninguna opción prueba una acción externa.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', title: 'Cómo practicar la conservación', prompt: 'Aprende la secuencia segura antes de ejecutarla.' },
        { icon: 'ListChecks', body: 'Haz cinco acciones: **observa** el sobre sin abrir; **elige** libremente una tarea; **rotula** nombre y fecha del caso; **revisa** que esté cerrado y seco; **registra** “Ficha didáctica suministrada”. No ingieras la muestra ni uses herramientas.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', title: 'Ejemplo resuelto', prompt: 'Sigue la práctica con el sobre de demostración.' },
        { icon: 'Archive', problem: 'El sobre dice “maíz de muestra”, pero le faltan fecha y fuente.', steps: [
          { text: '**Elijo** voluntariamente la tarea de rotular.' },
          { text: '**Escribo** “Caso simulado, 8 de agosto” sin abrir el sobre.' },
          { text: '**Reviso** cierre y condición seca; luego anoto la fuente suministrada.' },
        ], answer: 'El sobre queda identificado y la práctica queda documentada sin afirmar conservación comunitaria.', tip: 'Observar → elegir → rotular → revisar → registrar.' },
      ),
      S.order(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Ordena la práctica voluntaria simulada antes de ejecutarla.', hint: 'La revisión ocurre después del rótulo y antes del registro final.', explain: 'La secuencia protege la muestra y deja evidencia verificable: observar, elegir, rotular, revisar y registrar.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'g1', text: 'Observar el sobre cerrado', icon: 'Eye' },
          { id: 'g2', text: 'Elegir libremente una tarea', icon: 'HandHeart' },
          { id: 'g3', text: 'Rotular nombre y fecha simulada', icon: 'Tag' },
          { id: 'g4', text: 'Revisar cierre y condición seca', icon: 'ShieldCheck' },
          { id: 'g5', text: 'Registrar la fuente suministrada', icon: 'BookOpen' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Una persona elige no tocar la muestra. ¿Cómo participa de forma válida?', hint: 'La práctica es voluntaria y debe ofrecer una alternativa equivalente.', explain: 'Puede ordenar y revisar la ficha suministrada; conservar también exige información clara.' },
        { options: [
          { id: 'a', text: 'Ordena la ficha y verifica nombre, fecha y fuente', icon: 'ClipboardCheck' },
          { id: 'b', text: 'Es obligada a abrir el sobre', icon: 'PackageOpen', feedback: 'La participación no sería voluntaria ni segura.' },
          { id: 'c', text: 'Se inventa una actividad comunitaria', icon: 'FileQuestion', feedback: 'La evidencia debe describir solo lo realizado en el aula.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Realiza ahora la práctica simulada con el sobre o con la ficha: ordena cada acción conforme la completas.', explain: 'Esta interacción registra la ejecución de una acción voluntaria y segura dentro de la lección.' },
        { labels: { start: 'Inicio', end: 'Registro terminado' }, items: [
          { id: 'a1', text: 'Observo el material suministrado sin abrirlo', icon: 'Eye' },
          { id: 'a2', text: 'Elijo rotular el sobre u ordenar la ficha', icon: 'HandHeart' },
          { id: 'a3', text: 'Completo nombre y fecha del caso simulado', icon: 'Tag' },
          { id: 'a4', text: 'Reviso seguridad y condición seca', icon: 'ShieldCheck' },
          { id: 'a5', text: 'Registro la fuente del paquete', icon: 'Archive' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Documenta qué opción elegiste, qué acción realizaste, qué verificaste y cuál sería tu siguiente paso seguro.', explain: 'Describe únicamente la práctica simulada realizada; no afirmes haber conservado semillas fuera del aula.' },
        { minWords: 24, placeholder: 'Elegí… Realicé… Verifiqué… Mi siguiente paso seguro sería…', model: 'Elegí ordenar la ficha. Registré nombre, fecha simulada y fuente. Verifiqué que el sobre permaneciera cerrado y seco. Mi siguiente paso sería guardarlo en la caja rotulada.', rubric: ['Nombro una elección voluntaria', 'Describo una acción realizada', 'Registro una verificación', 'Propongo un siguiente paso seguro'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Ya rotulaste un sobre del caso simulado. ¿Qué acción sigue para completar la práctica de conservación?' },
        { options: [
          { id: 'a', text: 'Revisar que esté cerrado y seco antes de registrar la fuente' },
          { id: 'b', text: 'Afirmar que toda la comunidad conservó semillas' },
          { id: 'c', text: 'Abrirlo para probar las semillas' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'En un nuevo sobre escolar ya revisado, ordena las dos acciones finales de la práctica.' },
        { labels: { start: 'Ahora', end: 'Después' }, items: [
          { id: 'e1', text: 'Registrar “Ficha didáctica suministrada”', icon: 'BookOpen' },
          { id: 'e2', text: 'Anotar en qué caja rotulada debe guardarse', icon: 'Tag' },
          { id: 'e3', text: 'Guardar el sobre cerrado sin afirmar una acción externa', icon: 'Archive' },
        ] },
      ),
    ],
  }),
];
