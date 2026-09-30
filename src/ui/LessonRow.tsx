import type { CSSProperties } from 'react';
import type { Lesson, Mission } from '@/core/types';
import { useProgress } from '@/core/progress';
import { navigate } from '@/core/router';
import { AREAS } from '@/cnb/model';
import { Icon } from '@/design-system/icons';

const KIND: Record<string, { label: string; icon: string; color: string }> = {
  taller: { label: 'Taller interdisciplinario', icon: 'Shapes', color: 'var(--c-maiz-strong)' },
  reto: { label: 'Reto semanal', icon: 'Trophy', color: 'var(--c-maiz-strong)' },
  diagnostico: { label: 'Diagnóstico', icon: 'Compass', color: 'var(--c-jade)' },
  proyecto: { label: 'Proyecto integrador', icon: 'Hammer', color: 'var(--c-jade)' },
  evaluacion: { label: 'Evaluación', icon: 'ClipboardCheck', color: 'var(--c-jade)' },
  leccion: { label: 'Lección integrada', icon: 'BookOpen', color: 'var(--c-jade)' },
};

/** Etiqueta, ícono y color de una lección (materia o tipo). */
export function lessonTag(l: Lesson) {
  if (l.area) return { label: AREAS[l.area].corto, icon: AREAS[l.area].icon, color: AREAS[l.area].color };
  return KIND[l.kind ?? 'leccion'] ?? KIND.leccion;
}

/** Fila de lección para agendas y recorridos: materia (color), título, minutos y estado. */
export function LessonRow({ mission, lesson, next, sub }: { mission: Mission; lesson: Lesson; next?: boolean; sub?: string }) {
  const rec = useProgress((p) => p.lessons[lesson.id]);
  const tag = lessonTag(lesson);
  return (
    <button type="button" className={`lrow${rec ? ' is-done' : ''}${next ? ' is-next' : ''}`} style={{ '--a': tag.color } as CSSProperties}
      onClick={() => navigate({ name: 'lesson', missionId: mission.id, lessonId: lesson.id })}
      aria-label={`${tag.label}: ${lesson.title}${rec ? ' (completada)' : ''}`}>
      <span className="lrow__ico"><Icon name={rec ? 'Check' : tag.icon} size={20} strokeWidth={rec ? 3 : 2} /></span>
      <span className="ds-grow lrow__txt">
        <span className="ds-xs lrow__tag">{tag.label}{sub ? ` · ${sub}` : ''}</span>
        <strong>{lesson.title}</strong>
      </span>
      <span className="ds-xs ds-muted lrow__min">{rec ? `${rec.stars}★` : `${lesson.minutes || 10} min`}</span>
    </button>
  );
}
