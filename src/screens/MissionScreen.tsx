import { useState, type CSSProperties } from 'react';
import type { Mission } from '@/core/types';
import { useProgress, mastery, nivel, NIVEL_LABEL } from '@/core/progress';
import { navigate } from '@/core/router';
import { t } from '@/core/i18n';
import { AREAS, EJES, ODEC_CICLO_II, type AreaId } from '@/cnb/model';
import { areaOf, indicadorOf, indicadorText } from '@/cnb/catalog';
import { extrasOf, lessonsOfDay, minutesOf, missionAreas, missionIndicadores, weekProgress } from '@/content';
import { DIAS } from '@/content/sexto/horario';
import { LessonRow } from '@/ui/LessonRow';
import { Button, Card, Chip, Ring, SectionTitle, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { TemaWheel } from '@/ui/TemaWheel';
import { MediaSlot } from '@/ui/MediaSlot';

const DAY_LABEL: Record<string, string> = { reto: 'Reto', diagnostico: 'Inicio', proyecto: 'Proyecto', evaluacion: 'Evaluación', extra: 'Extra' };

export function MissionScreen({ mission }: { mission: Mission }) {
  const p = useProgress((s) => s);
  const areas = missionAreas(mission);
  const inds = [...new Set(missionIndicadores(mission).map(indicadorOf))];
  const [sel, setSel] = useState<AreaId | null>(areas[0] ?? null);
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const masteryByArea: Partial<Record<AreaId, number>> = {};
  for (const a of areas) {
    const list = inds.filter((i) => areaOf(i) === a);
    masteryByArea[a] = list.length ? list.reduce((s, i) => s + mastery(p.evidence[i]), 0) / list.length : 0;
  }
  const nextIdx = mission.lessons.findIndex((l) => !p.lessons[l.id]);
  const unidad = ODEC_CICLO_II[mission.unidad - 1];
  const wp = weekProgress(p, mission);
  const extras = mission.semana ? extrasOf(mission.id) : [];
  const medal = !!p.badges[mission.badge.id];
  const reto = mission.lessons.find((l) => l.kind === 'reto');
  const [day, setDay] = useState<number>(Math.min(5, Math.max(1, mission.lessons[nextIdx]?.day ?? 1)));

  return (
    <div ref={ref} className="ds-page ds-stack" style={{ '--m': mission.color } as CSSProperties}>
      <div className="ds-row">
        <Button variant="ghost" icon onClick={() => navigate({ name: 'anio' })} aria-label="Volver al año"><Icon name="ArrowLeft" /></Button>
        <div className="ds-grow">
          <div className="ds-xs ds-muted">{mission.semana ? `Semana ${mission.semana} · ` : ''}Unidad {mission.unidad} · {unidad.tema}</div>
          <h1 className="ms__title">{mission.title}</h1>
          <div className="ds-small ds-muted">{mission.subtitle}</div>
        </div>
        <Ring value={wp.pct} size={52} stroke={6} color={mission.color}><span className="ds-xs">{wp.done}/{wp.total}</span></Ring>
      </div>

      {mission.media && <MediaSlot slot={mission.media} color={mission.color} />}

      {mission.lessons.length > 6 ? (
        <>
          <div className="daytabs" role="group" aria-label="Día de la semana">
            {[1, 2, 3, 4, 5].map((d) => {
              const ls = lessonsOfDay(mission, d);
              const done = ls.length > 0 && ls.every((l) => p.lessons[l.id]);
              return (
                <button key={d} type="button" aria-pressed={day === d} className={done ? 'is-done' : ''} onClick={() => setDay(d)}>
                  {done ? <Icon name="CircleCheck" size={16} /> : <span>{DIAS[d - 1].slice(0, 3)}</span>}
                  <span className="ds-muted">{ls.filter((l) => p.lessons[l.id]).length}/{ls.length}</span>
                </button>
              );
            })}
          </div>
          <section className="agenda" aria-label={DIAS[day - 1]}>
            <div className="agenda__head"><h3>{DIAS[day - 1]}</h3><span className="ds-xs ds-muted">{lessonsOfDay(mission, day).length} lecciones · ~{minutesOf(lessonsOfDay(mission, day))} min</span></div>
            {lessonsOfDay(mission, day).map((l) => <LessonRow key={l.id} mission={mission} lesson={l} next={mission.lessons[nextIdx]?.id === l.id} />)}
          </section>
        </>
      ) : (
        <>
      <SectionTitle>{t('mission.lessons')}</SectionTitle>
      <ol className="ms__path">
        {mission.lessons.map((l, i) => {
          const rec = p.lessons[l.id];
          const isNext = i === nextIdx;
          const tag = DAY_LABEL[l.kind ?? ''] ?? (l.day ? `Día ${l.day}` : '');
          return (
            <li key={l.id} className={`ms__node${rec ? ' is-done' : ''}${isNext ? ' is-next' : ''}${l.kind === 'reto' || l.kind === 'evaluacion' ? ' is-exam' : ''}`}>
              <button type="button" className="ms__bubble" onClick={() => navigate({ name: 'lesson', missionId: mission.id, lessonId: l.id })} aria-label={`${tag}: ${l.title}`}>
                <Icon name={rec ? 'Check' : l.icon ?? 'BookOpen'} size={26} strokeWidth={rec ? 3 : 2} />
              </button>
              <div className="ds-grow">
                <div className="ds-xs ds-muted">{tag}</div>
                <strong>{l.title}</strong>
                <div className="ds-xs ds-muted">{l.steps.length} actividades · ~{l.minutes} min</div>
                {rec && <div className="ms__stars" aria-label={`${rec.stars} estrellas`}>{[1, 2, 3].map((n) => <span key={n} className={n <= rec.stars ? 'on' : ''}><Icon name="Star" size={14} /></span>)}{(l.kind === 'reto' || l.kind === 'evaluacion') && <span className="ds-xs"> · {Math.round(rec.score * 100)}%</span>}</div>}
              </div>
              {isNext && <Button size="sm" onClick={() => navigate({ name: 'lesson', missionId: mission.id, lessonId: l.id })}>Empezar</Button>}
            </li>
          );
        })}
      </ol>

        </>
      )}

      {extras.length > 0 && (
        <Card>
          <SectionTitle><Icon name="Sparkles" size={14} /> Lecciones extra de esta semana</SectionTitle>
          <div className="ds-stack" style={{ gap: 8, marginTop: 8 }}>
            {extras.map(({ mission: m, lesson: l }) => (
              <button key={l.id} type="button" className="lc__reco" onClick={() => navigate({ name: 'lesson', missionId: m.id, lessonId: l.id })}>
                <Icon name={l.icon ?? 'Sparkles'} size={20} />
                <span className="ds-grow"><strong>{l.title}</strong><br /><span className="ds-xs ds-muted">{m.title}</span></span>
                {p.lessons[l.id] ? <Icon name="Check" size={18} color="var(--c-ok)" /> : <Icon name="ChevronRight" size={18} />}
              </button>
            ))}
          </div>
        </Card>
      )}

      <Card>
        <div className="ds-row">
          <div className={`ds-badge-ico${medal ? '' : ' is-locked'}`}><Icon name={mission.badge.icon ?? 'Medal'} size={30} /></div>
          <div>
            <strong>{mission.badge.name}</strong>
            <div className="ds-small ds-muted">{medal ? '¡Conseguida!' : reto ? 'Completa las lecciones y supera el reto con 70 % o más.' : 'Completa todas las lecciones de la semana.'}</div>
          </div>
        </div>
      </Card>

      {areas.length > 0 && (
        <Card raised>
          <SectionTitle>Tema generador</SectionTitle>
          <div className="ms__wheelwrap">
            <TemaWheel tema={mission.temaGenerador} active={areas} mastery={masteryByArea} selected={sel} onSelect={(a) => areas.includes(a) && setSel(a)} size={300} />
          </div>
          <p className="ds-xs ds-muted ds-center">{t('mission.wheelHint')}</p>
          {sel && (
            <div className="ms__area" style={{ '--a': AREAS[sel].color } as CSSProperties}>
              <strong><Icon name={AREAS[sel].icon} size={16} /> {AREAS[sel].nombre}</strong>
              <ul>
                {inds.filter((i) => areaOf(i) === sel).map((i) => {
                  const lv = nivel(p.evidence[i]);
                  return <li key={i}><span className={`ms__lv ms__lv--${lv}`}>{NIVEL_LABEL[lv]}</span> {indicadorText(i)}</li>;
                })}
              </ul>
            </div>
          )}
        </Card>
      )}

      {mission.contexto && (
        <Card>
          <SectionTitle><Icon name="Home" size={14} /> {t('mission.contexto')}</SectionTitle>
          <p style={{ marginTop: 6 }}>{mission.contexto}</p>
          <div className="ds-row" style={{ flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
            {mission.ejes.map((e) => <Chip key={e} color="var(--c-jade)">{EJES[e]}</Chip>)}
          </div>
        </Card>
      )}
    </div>
  );
}
