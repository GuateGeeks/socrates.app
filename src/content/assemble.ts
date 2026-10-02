import type { Lesson, Mission, StepBase } from '@/core/types';
import type { AreaId } from '@/cnb/model';
import { ODEC_CICLO_II } from '@/cnb/model';

/**
 * Semana de validación (semana 10 de cada unidad): se ARMA automáticamente con los bancos de
 * ítems de las 8 semanas de aprendizaje. Así cada unidad cierra con una evaluación por área
 * alineada a los indicadores de logro trabajados, sin duplicar autoría.
 */
const GROUPS: { id: string; title: string; icon: string; areas: AreaId[]; n: number; day: number }[] = [
  { id: 'mat', title: 'Matemáticas', icon: 'Calculator', areas: ['mat'], n: 15, day: 1 },
  { id: 'l1', title: 'Comunicación y Lenguaje', icon: 'BookOpen', areas: ['l1'], n: 15, day: 1 },
  { id: 'cnt', title: 'Ciencias Naturales y Tecnología', icon: 'FlaskConical', areas: ['cnt'], n: 12, day: 2 },
  { id: 'ccss', title: 'Ciencias Sociales', icon: 'Landmark', areas: ['ccss'], n: 12, day: 2 },
  { id: 'l2', title: 'Segundo idioma (L2)', icon: 'MessagesSquare', areas: ['l2'], n: 8, day: 3 },
  { id: 'l3', title: 'Inglés (L3)', icon: 'Languages', areas: ['l3'], n: 8, day: 3 },
  { id: 'fc', title: 'Formación Ciudadana', icon: 'Handshake', areas: ['fc'], n: 8, day: 3 },
  { id: 'art', title: 'Expresión Artística', icon: 'Palette', areas: ['art'], n: 8, day: 4 },
  { id: 'ef', title: 'Educación Física', icon: 'Bike', areas: ['ef'], n: 8, day: 4 },
  { id: 'pyd', title: 'Productividad y Desarrollo', icon: 'Sprout', areas: ['pyd'], n: 8, day: 4 },
];

/** Toma hasta `n` ítems repartidos de forma pareja entre semanas (determinista). */
function spread<T>(buckets: T[][], n: number): T[] {
  const out: T[] = []; let round = 0;
  while (out.length < n && buckets.some((b) => b.length > round)) {
    for (const b of buckets) if (b[round] && out.length < n) out.push(b[round]);
    round++;
  }
  return out;
}

export function buildValidationWeek(unidad: 1 | 2 | 3 | 4, weeks: Mission[]): Mission {
  const semana = (unidad - 1) * 10 + 10;
  const sid = `s${String(semana).padStart(2, '0')}`;
  const odec = ODEC_CICLO_II[unidad - 1];
  const learning = weeks.filter((w) => (w.kind ?? 'aprendizaje') === 'aprendizaje');
  const lessons: Lesson[] = GROUPS.map((g) => {
    // banco de la semana + boletos de salida ("comprobar") de las lecciones de materia
    const buckets = learning.map((w) => [
      ...(w.bank ?? []),
      ...w.lessons.filter((l) => l.kind === 'materia').flatMap((l) => l.steps.filter((s) => s.fase === 'comprobar')),
    ].filter((s) => g.areas.includes(s.areas[0])));
    const items = spread(buckets, g.n).map((s, i): StepBase => ({ ...s, id: `${sid}-${g.id}-${i + 1}`, fase: 'comprobar', hint: undefined }));
    return <Lesson>{ id: `${sid}-d${g.day}-evaluacion-${g.id}`, title: `Evaluación: ${g.title}`, icon: g.icon, minutes: Math.round(g.n * 0.9), kind: 'evaluacion', day: g.day,
      objetivos: ['Demostrar lo que aprendiste en la unidad', 'Descubrir qué indicadores necesitas repasar'], steps: items };
  }).filter((l) => l.steps.length > 0);
  const allCnb = [...new Set(learning.flatMap((w) => w.lessons.flatMap((l) => l.steps.flatMap((s) => s.cnb))))].slice(0, 6);
  lessons.push({
    id: `${sid}-d5-portafolio`, title: 'Mi portafolio de la unidad', icon: 'FolderOpen', minutes: 12, kind: 'evaluacion', day: 5,
    objetivos: ['Reflexionar sobre tu avance en la unidad', 'Proponerte metas para la siguiente'],
    steps: [
      { id: `${sid}-p-1`, type: 'explain', fase: 'explorar', areas: ['fc', 'l1'], cnb: [], prompt: `¡Terminaste la unidad **${odec.tema}**! Revisemos juntos lo que lograste.`,
        props: { icon: 'Trophy', body: 'En tu perfil puedes ver qué indicadores dominas y cuáles conviene repasar. El repaso inteligente te propondrá ejercicios de lo que más te costó.' } },
      { id: `${sid}-p-2`, type: 'short-answer', fase: 'reflexionar', ambito: 'ser', areas: ['l1', 'fc'], cnb: allCnb.filter((c) => c.startsWith('l1:')).slice(0, 2),
        prompt: '¿Qué fue lo más importante que aprendiste en esta unidad y cómo lo puedes usar en tu comunidad?',
        props: { model: unidad === 1
          ? 'Aprendí a comparar evidencias y lo puedo usar cuando evalúo una propuesta porque necesito razones claras. También quiero seguir aprendiendo a comunicar mis conclusiones.'
          : 'Aprendí a … y lo puedo usar cuando … porque …. También me gustaría seguir aprendiendo sobre ….',
        rubric: ['Menciono al menos un aprendizaje concreto', 'Explico cómo lo uso en mi vida o comunidad', 'Escribo con oraciones completas y buena ortografía'], minWords: 15 } },
      { id: `${sid}-p-3`, type: 'reflection', fase: 'reflexionar', ambito: 'ser', areas: ['fc'], cnb: [], prompt: 'Autoevaluación de la unidad',
        props: { statements: ['Completé las lecciones de cada semana', 'Superé los retos semanales', 'Pedí ayuda o repasé cuando algo me costó', 'Apliqué lo aprendido fuera de la escuela'],
          commitments: ['Repasaré los indicadores que están "En proceso"', 'Mantendré mi racha diaria de aprendizaje', 'Ayudaré a un compañero con lo que ya domino'] } },
    ],
  });
  return {
    id: sid, unidad, semana, kind: 'validacion',
    temaGenerador: 'Demuestro lo que aprendí', title: `Semana de validación · Unidad ${unidad}`, subtitle: 'Evaluación por áreas y portafolio',
    icon: 'ClipboardCheck', color: odec.color,
    contexto: 'Esta semana compruebas lo aprendido en toda la unidad. Cada evaluación mide indicadores de logro del CNB. No te preocupes por equivocarte: al final sabrás exactamente qué repasar.',
    ejes: ['valores'], lessons,
    badge: { id: `medalla-${sid}`, name: `Unidad ${unidad} validada`, icon: 'Award', desc: `Completaste la validación de la unidad ${unidad}` },
  };
}
