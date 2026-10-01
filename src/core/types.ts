import type { ComponentType } from 'react';
import type { Ambito, AreaId, Eje, Fase } from '@/cnb/model';

/* ============================================================================
 * CONTENIDO (datos puros, serializables a JSON → se pueden cargar desde un CMS/API)
 *
 *   Course (grado) → Unit (4 unidades ODEC) → Week (40 semanas, cada una con un Tema Generador)
 *      → Lesson (5 por semana: 4 lecciones + Reto semanal; proyecto; evaluación)
 *        → Step (una actividad del registro)
 * ========================================================================== */

/** Espacio para un recurso multimedia. Mientras no exista el archivo real se muestra un "mock"
 *  con la ficha de producción (brief). Al producirlo, se registra en src/media/assets.ts. */
export interface MediaSlot {
  /** id único y estable, p.ej. "s01-l2-celula-animal" */
  id: string;
  kind: 'image' | 'video' | 'audio' | 'animation' | 'diagram';
  /** título visible */
  title: string;
  /** lo que verá/oirá el estudiante (texto alternativo accesible) */
  alt: string;
  /** ficha de producción: qué debe mostrar, estilo, duración, guion breve, referencias */
  brief: string;
  /** duración sugerida en segundos (video/audio/animación) */
  duration?: number;
  aspect?: '16:9' | '4:3' | '1:1' | '9:16' | '3:4';
}

export interface StepBase<TType extends string = string, TProps = unknown> {
  id: string;
  /** clave en el registro de actividades */
  type: TType;
  fase: Fase;
  /** áreas del CNB que integra este paso (≥1; idealmente varias) */
  areas: AreaId[];
  /** ids CNB: indicadores "mat:4.1" o contenidos "mat:4.1.5" que evidencia */
  cnb: string[];
  ambito?: Ambito;
  title?: string;
  /** consigna principal (Markdown ligero: **negrita**, _itálica_) */
  prompt: string;
  hint?: string;
  /** explicación mostrada después de responder (aprendizaje a partir del error) */
  explain?: string;
  /** recurso multimedia que acompaña al paso (se muestra arriba de la actividad) */
  media?: MediaSlot;
  props: TProps;
}

export type LessonKind = 'leccion' | 'materia' | 'taller' | 'reto' | 'proyecto' | 'evaluacion' | 'diagnostico' | 'extra' | 'repaso';

export interface Lesson {
  id: string;
  title: string;
  /** nombre de ícono Lucide (PascalCase), p.ej. "BookOpen" */
  icon?: string;
  /** compatibilidad con contenido anterior */
  emoji?: string;
  minutes: number;
  kind?: LessonKind;
  /** día de la semana (1-5). En las lecciones de materia lo asigna el horario (src/content/sexto/horario.ts). */
  day?: number;
  /** materia (área del CNB) a la que pertenece una lección de materia */
  area?: AreaId;
  /** pregunta que activa saberes previos (enfoque constructivista) */
  gancho?: string;
  /** "Hoy aprenderás a…" (2-3 objetivos en lenguaje de niño) */
  objetivos?: string[];
  /** ideas clave que se guardan en el Cuaderno al terminar */
  resumen?: string[];
  /** recurso principal de la lección */
  media?: MediaSlot;
  steps: StepBase[];
}

export type WeekKind = 'aprendizaje' | 'proyecto' | 'validacion';

/** Una semana = un Tema Generador (Fig. 1-2 del CNB). Se llama Mission por compatibilidad. */
export interface Mission {
  id: string;
  /** Unidad de la dosificación (1-4) y su tema integrador ODEC */
  unidad: 1 | 2 | 3 | 4;
  /** semana del ciclo escolar (1-40) */
  semana?: number;
  kind?: WeekKind;
  temaGenerador: string;
  title: string;
  subtitle: string;
  icon?: string;
  emoji?: string;
  /** contexto guatemalteco que da sentido (Fig. Diseño del currículum: "Contexto" al centro) */
  contexto: string;
  ejes: Eje[];
  color: string;
  media?: MediaSlot;
  lessons: Lesson[];
  /** banco de ítems calificados para la Semana de validación de la unidad */
  bank?: StepBase[];
  badge: { id: string; name: string; emoji?: string; icon?: string; desc: string };
}
export type Week = Mission;

export interface Unit {
  n: 1 | 2 | 3 | 4;
  tema: string;
  icon: string;
  color: string;
  weeks: Mission[];
}

/** Lecciones de UNA materia durante UNA unidad: { semana → lecciones en orden }. */
export interface AreaUnit {
  area: AreaId;
  unidad: 1 | 2 | 3 | 4;
  /** hilo conductor de la materia en la unidad (1-2 oraciones) */
  hilo?: string;
  semanas: Record<number, Lesson[]>;
}

export interface Course {
  id: string;
  grado: string;
  title: string;
  units: Unit[];
  /** misiones destacadas anteriores, disponibles como lecciones extra */
  missions: Mission[];
}

/* ============================================================================
 * ACTIVIDADES (plugins)
 * ========================================================================== */

export type StepStatus = 'answering' | 'correct' | 'incorrect' | 'revealed' | 'done';

export interface CheckResult {
  correct: boolean;
  /** 0..1 para crédito parcial */
  score?: number;
  /** mensaje específico según el error (retroalimentación formativa) */
  feedback?: string;
}

export interface ActivityApi {
  /** para actividades que se autoevalúan (p.ej. ritmo): fuerza el chequeo */
  submit(): void;
  /** para actividades sin respuesta correcta: marca como lista para continuar */
  setReady(ready: boolean): void;
}

export interface ActivityProps<P, A> {
  step: StepBase<string, P>;
  props: P;
  value: A | undefined;
  onChange(value: A): void;
  status: StepStatus;
  attempt: number;
  api: ActivityApi;
}

export interface ActivityDefinition<P = any, A = any> {
  type: string;
  /** nombre visible en la galería del sistema de diseño */
  label: string;
  /** ícono Lucide */
  icon: string;
  description: string;
  /** graded=false → actividad exploratoria/reflexiva; no hay "incorrecto" */
  graded: boolean;
  /** La respuesta abierta se conserva como evidencia revisable, aunque no tenga clave automática. */
  recordsEvidence?: boolean;
  Component: ComponentType<ActivityProps<P, A>>;
  /** ¿puede el niño pulsar "Comprobar"? */
  isReady?(props: P, value: A | undefined): boolean;
  check?(props: P, value: A): CheckResult;
  /** valida los datos de autoría (lo usa `npm run validate`) */
  validate?(props: P): string[];
  /** respuesta correcta para "Ver solución" tras 2 intentos */
  solution?(props: P): A;
  /** ejemplo mínimo para la galería / pruebas de humo */
  example?: Omit<StepBase<string, P>, 'id' | 'type'>;
}
