import type { CSSProperties } from 'react';
import { useProgress, schoolWeek } from '@/core/progress';
import { navigate } from '@/core/router';
import { COURSE, firstIncomplete, weekProgress } from '@/content';
import { Ring, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';

const KIND = { aprendizaje: '', proyecto: 'Proyecto', validacion: 'Validación' } as const;

/** Mapa del ciclo escolar: 4 unidades × 10 semanas. */
export function Year() {
  const p = useProgress((s) => s);
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const next = firstIncomplete(p);
  const cal = schoolWeek(p.settings.startDate);
  return (
    <div ref={ref} className="ds-page ds-stack">
      <div>
        <h1>Mi año escolar</h1>
        <p className="ds-small ds-muted">40 semanas · 5 lecciones por semana. Avanza a tu ritmo: puedes adelantarte o repasar cuando quieras.</p>
      </div>
      {COURSE.units.map((u) => {
        const done = u.weeks.reduce((s, w) => s + weekProgress(p, w).done, 0);
        const total = u.weeks.reduce((s, w) => s + w.lessons.length, 0);
        return (
          <section key={u.n} className="yr__unit" style={{ '--u': u.color } as CSSProperties}>
            <header className="yr__uhead">
              <span className="yr__uicon"><Icon name={u.icon} size={24} /></span>
              <div className="ds-grow">
                <div className="ds-section-title">Unidad {u.n}</div>
                <h2>{u.tema}</h2>
              </div>
              <Ring value={total ? done / total : 0} size={48} stroke={6} color={u.color}><span className="ds-xs">{Math.round((total ? done / total : 0) * 100)}%</span></Ring>
            </header>
            <ol className="yr__weeks">
              {u.weeks.map((w) => {
                const wp = weekProgress(p, w);
                const medal = !!p.badges[w.badge.id];
                const isNext = next?.mission.id === w.id;
                const isCal = cal === w.semana;
                const empty = w.lessons.length === 0;
                return (
                  <li key={w.id}>
                    <button type="button" disabled={empty} className={`yr__week${isNext ? ' is-next' : ''}${wp.pct === 1 ? ' is-done' : ''}${empty ? ' is-empty' : ''}`}
                      style={{ '--w': w.color } as CSSProperties} onClick={() => navigate({ name: 'mission', missionId: w.id })}>
                      <span className="yr__wnum">{w.semana}</span>
                      <span className="yr__wicon"><Icon name={w.icon ?? 'CalendarDays'} size={22} /></span>
                      <span className="yr__wbody">
                        <strong>{w.title}</strong>
                        <span className="ds-xs ds-muted">{empty ? 'En preparación' : `${wp.done}/${wp.total} lecciones`}{KIND[w.kind ?? 'aprendizaje'] ? ` · ${KIND[w.kind ?? 'aprendizaje']}` : ''}</span>
                        <span className="yr__wbar"><i style={{ width: `${wp.pct * 100}%` }} /></span>
                      </span>
                      <span className="yr__wtags">
                        {medal && <Icon name="Medal" size={20} color="var(--c-maiz-strong)" label="Medalla obtenida" />}
                        {isCal && <span className="yr__now">Hoy</span>}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
