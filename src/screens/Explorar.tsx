import './mobile-screens.css';
import { useMemo, type CSSProperties } from 'react';
import { useProgress, mastery, nivel, NIVEL_LABEL } from '@/core/progress';
import { navigate } from '@/core/router';
import { AREAS, WHEEL_CICLO_II, type AreaId } from '@/cnb/model';
import { getCatalog, indicadorOf } from '@/cnb/catalog';
import { allLessons } from '@/content';
import type { Lesson, Mission } from '@/core/types';
import { Button, Card, Ring, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';

import { useSessionValue, useReturnPosition } from '@/ui/Pagination';

type Ref = { mission: Mission; lesson: Lesson };

/** Explorar el CNB: aprendizaje autodirigido por área → competencia → indicador → lecciones. */
export function Explorar({ area }: { area?: string }) {
  const p = useProgress((s) => s);
  const ref = useEnter<HTMLDivElement>('enter.screen', area);
  const cat = getCatalog();
  const [q, setQ] = useSessionValue(`explore-${area ?? 'all'}-search`, '');
  useReturnPosition(`explore-${area ?? 'all'}`);
  const byInd = useMemo(() => {
    const m = new Map<string, Ref[]>();
    for (const x of allLessons()) {
      if (x.lesson.kind === 'reto' || x.lesson.kind === 'evaluacion' || x.lesson.kind === 'diagnostico') continue;
      for (const id of new Set(x.lesson.steps.flatMap((s) => s.cnb.map(indicadorOf)))) m.set(id, [...(m.get(id) ?? []), x]);
    }
    return m;
  }, []);

  if (!area || !AREAS[area as AreaId]) {
    return (
      <div ref={ref} className="ds-page ds-stack mobile-screen">
        <div>
          <h1>Explorar el CNB</h1>
          <p className="ds-small ds-muted">Elige un área y aprende lo que quieras, cuando quieras. Cada indicador de logro te lleva a sus lecciones.</p>
        </div>
        <div className="ex__grid">
          {WHEEL_CICLO_II.map((a) => {
            const inds = (cat.areas[a]?.competencias ?? []).flatMap((c) => c.indicadores);
            const m = inds.length ? inds.reduce((s, i) => s + mastery(p.evidence[i.id]), 0) / inds.length : 0;
            return (
              <Card key={a} raised onClick={() => navigate({ name: 'explorar', area: a })} className="ex__area" style={{ '--a': AREAS[a].color } as CSSProperties}>
                <span className="ex__aicon"><Icon name={AREAS[a].icon} size={26} /></span>
                <strong>{AREAS[a].nombre}</strong>
                <div className="ds-row ds-xs ds-muted" style={{ justifyContent: 'space-between' }}>
                  <span>{inds.length} indicadores</span>
                  <Ring value={m} size={34} stroke={4} color={AREAS[a].color}><span style={{ fontSize: 9 }}>{Math.round(m * 100)}%</span></Ring>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  const a = area as AreaId;
  const comps = cat.areas[a]?.competencias ?? [];
  const ql = q.trim().toLowerCase();
  return (
    <div ref={ref} className="ds-page ds-stack mobile-screen" style={{ '--a': AREAS[a].color } as CSSProperties}>
      <div className="ds-row">
        <Button variant="ghost" icon onClick={() => navigate({ name: 'explorar' })} aria-label="Volver"><Icon name="ArrowLeft" /></Button>
        <span className="ex__aicon"><Icon name={AREAS[a].icon} size={24} /></span>
        <h1 className="ds-grow" style={{ fontSize: 'var(--fs-xl)' }}>{AREAS[a].nombre}</h1>
      </div>
      <label htmlFor="ex-q" className="sr-only">Buscar</label>
      <div className="ex__search"><Icon name="Search" size={18} /><input id="ex-q" className="ds-input" placeholder="Buscar un tema (p. ej. fracciones, célula, volcanes)" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      {comps.map((c) => {
        const inds = c.indicadores.filter((i) => !ql || i.text.toLowerCase().includes(ql) || i.contenidos.some((k) => k.text.toLowerCase().includes(ql)));
        if (!inds.length) return null;
        return (
          <Card key={c.id}>
            <div className="dc__comp"><code>Competencia {c.code}</code> {c.text}</div>
            <ul className="ex__inds">
              {inds.map((i) => {
                const lv = nivel(p.evidence[i.id]);
                const lessons = byInd.get(i.id) ?? [];
                const pending = lessons.find((x) => !p.lessons[x.lesson.id]) ?? lessons[0];
                return (
                  <li key={i.id}>
                    <div className="ds-row" style={{ alignItems: 'flex-start' }}>
                      <span className={`ms__lv ms__lv--${lv}`}>{NIVEL_LABEL[lv]}</span>
                      <span className="ds-grow ds-small"><code>{i.code}</code> {i.text}</span>
                    </div>
                    {lessons.length > 0 ? (
                      <div className="ex__lessons">
                        {lessons.slice(0, 4).map(({ mission, lesson }) => (
                          <button key={lesson.id} type="button" className={`ex__lesson${p.lessons[lesson.id] ? ' is-done' : ''}`} onClick={() => navigate({ name: 'lesson', missionId: mission.id, lessonId: lesson.id })}>
                            <Icon name={p.lessons[lesson.id] ? 'Check' : lesson.icon ?? 'BookOpen'} size={14} /> S{mission.semana ?? '·'} · {lesson.title}
                          </button>
                        ))}
                        {lessons.length > 4 && <span className="ds-xs ds-muted">+{lessons.length - 4} más</span>}
                        {pending && !p.lessons[pending.lesson.id] && (
                          <Button size="sm" onClick={() => navigate({ name: 'lesson', missionId: pending.mission.id, lessonId: pending.lesson.id })}>Practicar <Icon name="ArrowRight" size={14} /></Button>
                        )}
                      </div>
                    ) : <div className="ds-xs ds-muted" style={{ marginTop: 4 }}>Lecciones en preparación.</div>}
                  </li>
                );
              })}
            </ul>
          </Card>
        );
      })}
    </div>
  );
}
