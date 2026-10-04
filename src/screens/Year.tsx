import './mobile-screens.css';
import type { CSSProperties } from 'react';
import { useProgress, schoolWeek } from '@/core/progress';
import { navigate } from '@/core/router';
import { WEEKS, COURSE, firstIncomplete, weekProgress } from '@/content';
import { Button, Ring, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';

import { useSessionValue, useReturnPosition } from '@/ui/Pagination';

const KIND = { aprendizaje: '', proyecto: 'Proyecto', validacion: 'Validación' } as const;

/** Mapa del ciclo escolar: 4 unidades × 10 semanas. */
export function Year() {
  const p = useProgress((s) => s);
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const next = firstIncomplete(p);
  const [openUnit, setOpenUnit] = useSessionValue<number | null>('year-unit', next?.mission.unidad ?? COURSE.units[0]?.n ?? 1);
  const [selectedWeek, setSelectedWeek] = useSessionValue('year-week', next?.mission.id ?? WEEKS[0].id);
  useReturnPosition('year');
  const cal = schoolWeek(p.settings.startDate);
  return (
    <div ref={ref} className="ds-page ds-stack mobile-screen">
      <div>
        <h1>Mi año escolar</h1>
        <p className="ds-small ds-muted">40 semanas · 5 lecciones por semana. Avanza a tu ritmo: puedes adelantarte o repasar cuando quieras.</p>
      </div>
      <div className="yr__jump">
        <label htmlFor="year-week">Ir a la semana</label>
        <select id="year-week" className="ds-input" value={selectedWeek} onChange={event => {
          setSelectedWeek(event.target.value);
          setOpenUnit(WEEKS.find(week => week.id === event.target.value)?.unidad ?? 1);
        }}>
          {WEEKS.map(week => <option key={week.id} value={week.id}>Semana {week.semana} · {week.title}</option>)}
        </select>
        <Button onClick={() => navigate({ name: 'mission', missionId: selectedWeek })}>Abrir semana</Button>
      </div>
      {COURSE.units.map((u) => {
        const done = u.weeks.reduce((s, w) => s + weekProgress(p, w).done, 0);
        const total = u.weeks.reduce((s, w) => s + w.lessons.length, 0);
        return (
          <section key={u.n} className="yr__unit" style={{ '--u': u.color } as CSSProperties}>
            <button type="button" className="yr__uhead" aria-expanded={openUnit === u.n} aria-controls={`unit-${u.n}`} onClick={() => setOpenUnit(openUnit === u.n ? null : u.n)}>
              <span className="yr__uicon"><Icon name={u.icon} size={24} /></span>
              <div className="ds-grow">
                <div className="ds-section-title">Unidad {u.n}</div>
                <strong className="yr__unit-title">{u.tema}</strong>
              </div>
              <Ring value={total ? done / total : 0} size={48} stroke={6} color={u.color}><span className="ds-xs">{Math.round((total ? done / total : 0) * 100)}%</span></Ring>
            </button>
            {openUnit === u.n && <ol id={`unit-${u.n}`} className="yr__weeks">
              {u.weeks.map((w) => {
                const wp = weekProgress(p, w);
                const medal = !!p.badges[w.badge.id];
                const isNext = next?.mission.id === w.id;
                const isCal = cal === w.semana;
                const empty = w.lessons.length === 0;
                return (
                  <li key={w.id}>
                    <button type="button" disabled={empty} className={`yr__week${isNext ? ' is-next' : ''}${wp.pct === 1 ? ' is-done' : ''}${empty ? ' is-empty' : ''}`}
                      style={{ '--w': w.color } as CSSProperties} onClick={() => { setSelectedWeek(w.id); navigate({ name: 'mission', missionId: w.id }); }}>
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
            </ol>}
          </section>
        );
      })}
    </div>
  );
}
