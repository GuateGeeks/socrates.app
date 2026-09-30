import { useState, type CSSProperties } from 'react';
import { useProgress } from '@/core/progress';
import { navigate } from '@/core/router';
import { AREAS, ODEC_CICLO_II, type AreaId } from '@/cnb/model';
import { trackOf } from '@/content';
import { MATERIAS, LECCIONES_POR_SEMANA } from '@/content/sexto/horario';
import { MATERIA_UNITS } from '@/content/sexto/materias';
import { Button, Card, SectionTitle, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { LessonRow } from '@/ui/LessonRow';

/** Mis materias: el recorrido de cada área del CNB a lo largo del año. */
export function Materias({ area }: { area?: string }) {
  const p = useProgress((s) => s);
  const ref = useEnter<HTMLDivElement>('enter.screen', area);
  if (area && AREAS[area as AreaId]) return <Track area={area as AreaId} />;
  return (
    <div ref={ref} className="ds-page ds-stack">
      <div>
        <h1>Mis materias</h1>
        <p className="ds-small ds-muted">Cada materia tiene su propio camino durante el año. Sigue tu horario desde <strong>Hoy</strong> o avanza en la materia que quieras.</p>
      </div>
      <div className="mat__grid">
        {MATERIAS.map((a) => {
          const t = trackOf(a);
          const done = t.filter((x) => p.lessons[x.lesson.id]).length;
          return (
            <Card key={a} raised className="mat__card" style={{ '--a': AREAS[a].color } as CSSProperties} onClick={() => navigate({ name: 'materia', area: a })}>
              <span className="mat__ico"><Icon name={AREAS[a].icon} size={24} /></span>
              <strong>{AREAS[a].corto}</strong>
              <span className="ds-xs ds-muted">{LECCIONES_POR_SEMANA[a]} por semana · {t.length ? `${done}/${t.length}` : 'próximamente'}</span>
              <div className="mat__bar"><i style={{ width: `${t.length ? (done / t.length) * 100 : 0}%` }} /></div>
            </Card>
          );
        })}
      </div>
      <Card onClick={() => navigate({ name: 'explorar' })}>
        <div className="ds-row"><Icon name="Compass" size={24} color="var(--c-jade)" /><div className="ds-grow"><strong>Explorar el CNB</strong><div className="ds-xs ds-muted">Busca por competencia e indicador de logro</div></div><Icon name="ChevronRight" /></div>
      </Card>
    </div>
  );
}

function Track({ area }: { area: AreaId }) {
  const p = useProgress((s) => s);
  const ref = useEnter<HTMLDivElement>('enter.screen', area);
  const t = trackOf(area);
  const next = t.find((x) => !p.lessons[x.lesson.id]);
  const [unit, setUnit] = useState<number>(next?.mission.unidad ?? 1);
  const meta = AREAS[area];
  const hilo = MATERIA_UNITS.find((u) => u.area === area && u.unidad === unit)?.hilo;
  const inUnit = t.filter((x) => x.mission.unidad === unit);
  const weeks = [...new Set(inUnit.map((x) => x.mission))];
  return (
    <div ref={ref} className="ds-page ds-stack" style={{ '--a': meta.color } as CSSProperties}>
      <div className="ds-row">
        <Button variant="ghost" icon onClick={() => navigate({ name: 'materias' })} aria-label="Volver a materias"><Icon name="ArrowLeft" /></Button>
        <span className="ds-xs ds-muted">Mis materias</span>
      </div>
      <div className="mat__hero">
        <Icon name={meta.icon} size={44} />
        <div className="ds-grow">
          <h1>{meta.nombre}</h1>
          <div className="ds-small">{t.filter((x) => p.lessons[x.lesson.id]).length}/{t.length} lecciones · {LECCIONES_POR_SEMANA[area]} por semana</div>
        </div>
      </div>
      {next && <Button onClick={() => navigate({ name: 'lesson', missionId: next.mission.id, lessonId: next.lesson.id })}><Icon name="Play" size={18} /> Siguiente: {next.lesson.title}</Button>}
      <div className="chips" role="group" aria-label="Unidad">
        {ODEC_CICLO_II.map((o) => <button key={o.unidad} type="button" aria-pressed={unit === o.unidad} onClick={() => setUnit(o.unidad)}>Unidad {o.unidad}</button>)}
      </div>
      <p className="ds-small ds-muted">{ODEC_CICLO_II[unit - 1].tema}{hilo ? ` — ${hilo}` : ''}</p>
      {!weeks.length && <Card><p className="ds-small ds-muted">Las lecciones de esta unidad están en preparación.</p></Card>}
      {weeks.map((w) => (
        <section key={w.id} className="agenda">
          <div className="agenda__head"><h3>Semana {w.semana}</h3><span className="ds-xs ds-muted">{w.title}</span></div>
          {inUnit.filter((x) => x.mission === w).map((x, i) => <LessonRow key={x.lesson.id} mission={w} lesson={x.lesson} next={next?.lesson.id === x.lesson.id} sub={`Lección ${i + 1}`} />)}
        </section>
      ))}
      <Button variant="ghost" onClick={() => navigate({ name: 'explorar', area })}><Icon name="Compass" size={16} /> Indicadores del CNB de {meta.corto}</Button>
    </div>
  );
}
void SectionTitle;
