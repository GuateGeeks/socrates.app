import './mobile-screens.css';
import type { CSSProperties } from 'react';
import { useProgress, schoolWeek } from '@/core/progress';
import { navigate } from '@/core/router';
import { WEEKS, COURSE, firstIncomplete, weekProgress } from '@/content';
import { Button, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { useSessionValue, useReturnPosition } from '@/ui/Pagination';

const KIND = { aprendizaje: '', proyecto: 'Proyecto', validacion: 'Validación' } as const;

/** Un siguiente paso visible y exploración secuencial por las cuatro unidades. */
export function Year() {
  const p = useProgress((s) => s);
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const next = firstIncomplete(p);
  const nextWeekLesson = next?.mission.semana ? next : null;
  const nextWeek = WEEKS.find((week) => week.lessons.some((lesson) => !p.lessons[lesson.id])) ?? WEEKS[WEEKS.length - 1];
  const [selectedWeekId, setSelectedWeekId] = useSessionValue('year-week', nextWeek.id);
  const selectedIndex = Math.max(0, WEEKS.findIndex((week) => week.id === selectedWeekId));
  const selectedWeek = WEEKS[selectedIndex];
  const selectedProgress = weekProgress(p, selectedWeek);
  const nextProgress = weekProgress(p, nextWeek);
  const cal = schoolWeek(p.settings.startDate);
  useReturnPosition('year');

  const chooseUnit = (unit: (typeof COURSE.units)[number]) => {
    const week = unit.weeks.find((candidate) => {
      const progress = weekProgress(p, candidate);
      return progress.done < progress.total;
    }) ?? unit.weeks[unit.weeks.length - 1];
    setSelectedWeekId(week.id);
    requestAnimationFrame(() => document.getElementById('year-selected-title')?.scrollIntoView({ block: 'start' }));
  };

  return <div ref={ref} className="ds-page ds-stack mobile-screen yr">
    <header>
      <h1>Mi año escolar</h1>
      <p className="ds-small ds-muted">Ve paso a paso. Puedes volver a una semana cuando quieras.</p>
    </header>

    <section className="yr__focus" aria-labelledby="year-next-title">
      <span className="yr__eyebrow"><Icon name="Sparkles" size={16} /> Tu siguiente paso</span>
      <h2 id="year-next-title">Semana {nextWeek.semana} · {nextWeek.title}</h2>
      <p>{nextProgress.done} de {nextProgress.total} lecciones completadas</p>
      <div className="yr__progress" role="progressbar" aria-label={`Progreso de la semana ${nextWeek.semana}`} aria-valuenow={nextProgress.done} aria-valuemin={0} aria-valuemax={nextProgress.total}><i style={{ width: `${nextProgress.pct * 100}%` }} /></div>
      <Button block size="lg" onClick={() => nextWeekLesson
        ? navigate({ name: 'lesson', missionId: nextWeekLesson.mission.id, lessonId: nextWeekLesson.lesson.id })
        : navigate({ name: 'mission', missionId: nextWeek.id })}>
        {nextWeekLesson ? 'Continuar mi aprendizaje' : 'Revisar mi semana'} <Icon name="ArrowRight" size={18} />
      </Button>
    </section>

    <section className="yr__explore" aria-labelledby="year-explore-title">
      <h2 id="year-explore-title">Explora tu año</h2>
      <p className="ds-small ds-muted">Elige una unidad para ver una semana a la vez.</p>
      <div className="yr__units">
        {COURSE.units.map((unit) => {
          const done = unit.weeks.reduce((sum, week) => sum + weekProgress(p, week).done, 0);
          const total = unit.weeks.reduce((sum, week) => sum + week.lessons.length, 0);
          const weeksDone = unit.weeks.filter((week) => weekProgress(p, week).pct === 1).length;
          return <button key={unit.n} type="button" className={`yr__unit${selectedWeek.unidad === unit.n ? ' is-selected' : ''}`}
            style={{ '--u': unit.color } as CSSProperties} aria-pressed={selectedWeek.unidad === unit.n} onClick={() => chooseUnit(unit)}>
            <span className="yr__unit-number">Unidad {unit.n}</span>
            <strong>{unit.tema}</strong>
            <span className="yr__unit-count">{weeksDone} de {unit.weeks.length} semanas</span>
            <span className="yr__unit-progress" aria-hidden="true"><i style={{ width: `${total ? done / total * 100 : 0}%` }} /></span>
          </button>;
        })}
      </div>
    </section>

    <section className="yr__selected" aria-labelledby="year-selected-title">
      <span className="yr__eyebrow">Unidad {selectedWeek.unidad} · Semana {selectedWeek.semana} de 40</span>
      <h2 id="year-selected-title">Semana {selectedWeek.semana} · {selectedWeek.title}</h2>
      <p className="ds-small ds-muted">{selectedProgress.done} de {selectedProgress.total} lecciones completadas
        {KIND[selectedWeek.kind ?? 'aprendizaje'] ? ` · ${KIND[selectedWeek.kind ?? 'aprendizaje']}` : ''}
        {cal === selectedWeek.semana ? ' · Esta semana en tu calendario' : ''}</p>
      <div className="yr__progress" role="progressbar" aria-label={`Progreso de la semana ${selectedWeek.semana}`} aria-valuenow={selectedProgress.done} aria-valuemin={0} aria-valuemax={selectedProgress.total}><i style={{ width: `${selectedProgress.pct * 100}%` }} /></div>
      <div className="yr__sequence" aria-label="Recorrer semanas">
        <Button variant="secondary" aria-label="Semana anterior" disabled={selectedIndex === 0} onClick={() => setSelectedWeekId(WEEKS[selectedIndex - 1].id)}><Icon name="ArrowLeft" size={18} /> Anterior</Button>
        <Button variant="secondary" aria-label="Semana siguiente" disabled={selectedIndex === WEEKS.length - 1} onClick={() => setSelectedWeekId(WEEKS[selectedIndex + 1].id)}>Siguiente <Icon name="ArrowRight" size={18} /></Button>
      </div>
      <Button block onClick={() => navigate({ name: 'mission', missionId: selectedWeek.id })}>Abrir semana {selectedWeek.semana} <Icon name="ArrowRight" size={18} /></Button>
    </section>
  </div>;
}
