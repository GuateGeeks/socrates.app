import type { AreaId } from '@/cnb/model';

/**
 * Horario semanal de Sexto Primaria (semanas de aprendizaje).
 * Basado en la carga horaria habitual del nivel primario: Matemáticas y Comunicación y Lenguaje
 * todos los días; Ciencias Naturales y Sociales 3 veces; el resto 1-2 veces por semana.
 * Cada lección de materia dura ~10-15 min → un día escolar en la plataforma ≈ 60-80 min.
 * El viernes cierra con el Taller interdisciplinario y el Reto semanal.
 */
export const MATERIAS: AreaId[] = ['mat', 'l1', 'cnt', 'ccss', 'l2', 'l3', 'fc', 'art', 'ef', 'pyd'];

export const HORARIO: Record<1 | 2 | 3 | 4 | 5, AreaId[]> = {
  1: ['mat', 'l1', 'cnt', 'ccss', 'art'],
  2: ['mat', 'l1', 'l3', 'fc', 'ef', 'l2'],
  3: ['mat', 'l1', 'cnt', 'ccss', 'pyd'],
  4: ['mat', 'l1', 'ccss', 'l3', 'art', 'l2'],
  5: ['mat', 'l1', 'cnt', 'fc', 'ef'],
};

export const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'] as const;

/** Lecciones por semana de cada materia (derivado del horario). */
export const LECCIONES_POR_SEMANA: Record<string, number> = Object.fromEntries(
  MATERIAS.map((a) => [a, Object.values(HORARIO).filter((d) => d.includes(a)).length]),
);

/** Día (1-5) de la k-ésima lección (0-based) de una materia en la semana. */
export function diaDe(area: AreaId, k: number): number {
  const days = ([1, 2, 3, 4, 5] as const).filter((d) => HORARIO[d].includes(area));
  return days[Math.min(k, days.length - 1)] ?? 5;
}

/** Orden dentro del día (para ordenar la agenda). */
export function ordenEnDia(area: AreaId, day: number): number {
  const i = HORARIO[day as 1]?.indexOf(area) ?? -1;
  return i < 0 ? 50 : i;
}
