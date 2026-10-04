import './mobile-screens.css';
import { useState, type CSSProperties } from 'react';
import { useProgress, updateProgress, dueReviews, schoolWeek, today } from '@/core/progress';
import { navigate } from '@/core/router';
import { AREAS, ODEC_CICLO_II } from '@/cnb/model';
import { WEEKS, allLessons, firstIncomplete, lessonsOfDay, minutesOf, weekProgress } from '@/content';
import { DIAS } from '@/content/sexto/horario';
import { LessonRow } from '@/ui/LessonRow';
import { Button, Card, Ring, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { Mascot } from '@/design-system/components/Mascot';

/** Lunes de la semana actual: el calendario personal empieza cuando el niño empieza. */
function mondayOf(d = new Date()) { const x = new Date(d); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return today(x); }

const AVATARS = ['Bird', 'Cat', 'Dog', 'Fish', 'Rabbit', 'Squirrel', 'Turtle', 'Feather'];

function Onboarding() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(AVATARS[0]);
  return (
    <Card raised>
      <div className="ds-stack">
        <div className="ds-row"><Mascot mood="wave" size={72} /><div><h2>¡Te damos la bienvenida!</h2><p className="ds-muted ds-small">Soy Tzunún y te acompañaré todo el año. ¿Cómo te llamas?</p></div></div>
        <label htmlFor="onb-name" className="sr-only">Tu nombre</label>
        <input id="onb-name" className="ds-input" placeholder="Tu nombre" value={name} maxLength={20} onChange={(e) => setName(e.target.value)} aria-label="Tu nombre" />
        <div className="ds-row" style={{ flexWrap: 'wrap', gap: 8 }} role="radiogroup" aria-label="Elige tu avatar">
          {AVATARS.map((a) => (
            <button key={a} type="button" role="radio" aria-checked={avatar === a} aria-label={a} className={`home__avatar${avatar === a ? ' is-on' : ''}`} onClick={() => setAvatar(a)}>
              <Icon name={a} size={24} />
            </button>
          ))}
        </div>
        <Button block disabled={!name.trim()} onClick={() => updateProgress((p) => ({ ...p, profile: { name: name.trim(), avatar }, settings: { ...p.settings, startDate: Object.keys(p.lessons).length ? p.settings.startDate : mondayOf() } }))}>¡Empezar a aprender!</Button>
      </div>
    </Card>
  );
}

export function Home() {
  const p = useProgress((s) => s);
  const next = firstIncomplete(p);
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const d = today();
  const due = dueReviews(p, d).length;
  const goal = p.settings.dailyGoal || 50;
  const todayXp = p.daily[d] ?? 0;
  const calWeek = schoolWeek(p.settings.startDate, d);
  const myWeek = next?.mission.semana ?? 40;
  const totalLessons = allLessons().length;
  const doneLessons = allLessons().filter((x) => p.lessons[x.lesson.id]).length;
  const behind = calWeek >= 1 && calWeek <= 40 ? calWeek - myWeek : 0;
  const week = next?.mission ?? WEEKS[WEEKS.length - 1];
  const wp = weekProgress(p, week);
  const unit = ODEC_CICLO_II[(week.unidad ?? 1) - 1];
  const myDay = Math.min(5, Math.max(1, next?.lesson.day ?? 5));
  const dayLessons = lessonsOfDay(week, myDay);
  const avatar = p.profile.avatar && /^[A-Z]/.test(p.profile.avatar) ? p.profile.avatar : 'Bird';

  return (
    <div ref={ref} className="ds-page ds-stack mobile-screen">
      <header className="home__head">
        <span className="home__me"><Icon name={avatar} size={26} /></span>
        <div className="ds-grow">
          <p className="ds-xs ds-muted">Sexto Primaria · CNB Guatemala</p>
          <h1>Hola{p.profile.name ? `, ${p.profile.name}` : ''}</h1>
        </div>
        <span className="ds-pill-stat" title="Racha de días"><Icon name="Flame" size={18} color="var(--c-bad)" /> {p.streak.count}</span>
        <span className="ds-pill-stat" title="Puntos"><Icon name="Star" size={18} color="var(--c-maiz-strong)" /> {p.xp}</span>
      </header>

      {!p.profile.name && <Onboarding />}

      <div className="home__today">
        <Ring value={todayXp / goal} size={72} stroke={8} color="var(--c-ok)"><Icon name={todayXp >= goal ? 'Check' : 'Target'} size={24} /></Ring>
        <div className="ds-grow">
          <strong>Meta de hoy: {Math.min(todayXp, goal)}/{goal} puntos</strong>
          <p className="ds-small ds-muted">
            {calWeek === 0 ? `El ciclo escolar inicia el ${p.settings.startDate}. ¡Puedes adelantarte!`
              : calWeek > 40 ? 'El ciclo terminó: repasa lo que quieras.'
                : behind > 0 ? `Semana ${calWeek} del ciclo · vas ${behind} ${behind === 1 ? 'semana' : 'semanas'} atrás. ¡Tú puedes ponerte al día!`
                  : behind < 0 ? `Semana ${calWeek} del ciclo · vas ${-behind} ${behind === -1 ? 'semana' : 'semanas'} adelante.`
                    : `Semana ${calWeek} de 40 · vas al día.`}
          </p>
        </div>
      </div>

      {next && (
        <div className="home__hero" style={{ '--m': next.mission.color } as CSSProperties}>
          <div className="ds-grow">
            <span className="ds-xs home__hero-kicker">{doneLessons ? 'Continúa' : 'Empieza'} · Semana {next.mission.semana} · {next.lesson.kind === 'diagnostico' ? 'Inicio' : DIAS[(next.lesson.day ?? 1) - 1]}{next.lesson.area ? ` · ${AREAS[next.lesson.area].corto}` : ''}</span>
            <h2>{next.lesson.title}</h2>
            {next.lesson.gancho && <p className="ds-small">{next.lesson.gancho}</p>}
            <Button variant="maiz" className="home__hero-btn" onClick={() => navigate({ name: 'lesson', missionId: next.mission.id, lessonId: next.lesson.id })}>
              <Icon name="Play" size={18} /> {doneLessons ? 'Continuar' : 'Empezar'}
            </Button>
          </div>
          <span className="home__hero-icon"><Icon name={next.lesson.icon ?? 'BookOpen'} size={56} strokeWidth={1.6} /></span>
        </div>
      )}

      {due > 0 && (
        <Card raised onClick={() => navigate({ name: 'repaso' })} className="home__review">
          <div className="ds-row">
            <span className="home__review-ico"><Icon name="RefreshCw" size={24} /></span>
            <div className="ds-grow"><strong>Repaso inteligente</strong><div className="ds-small ds-muted">{due} {due === 1 ? 'ejercicio listo' : 'ejercicios listos'} para que no se te olvide</div></div>
            <Icon name="ChevronRight" />
          </div>
        </Card>
      )}

      <Card>
        <div className="ds-row" style={{ alignItems: 'flex-start' }}>
          <div className="ds-grow">
            <div className="ds-xs ds-muted">Unidad {week.unidad} · {unit.tema}</div>
            <strong>Semana {week.semana}: {week.title}</strong>
          </div>
          <Ring value={wp.pct} size={44} stroke={5} color={week.color}><span className="ds-xs">{wp.done}/{wp.total}</span></Ring>
        </div>
        {week.lessons.length > 6 ? (
          <section className="agenda" aria-label="Tu día">
            <div className="agenda__head">
              <h3>Tu día: {DIAS[myDay - 1]}</h3>
              <span className="ds-xs ds-muted">{dayLessons.filter((l) => p.lessons[l.id]).length}/{dayLessons.length} · ~{minutesOf(dayLessons)} min</span>
            </div>
            {dayLessons.map((l) => <LessonRow key={l.id} mission={week} lesson={l} next={next?.lesson.id === l.id} />)}
          </section>
        ) : (
        <div className="home__days">
          {week.lessons.map((l) => {
            const done = !!p.lessons[l.id];
            return (
              <button key={l.id} type="button" className={`home__day${done ? ' is-done' : ''}${next?.lesson.id === l.id ? ' is-next' : ''}`}
                onClick={() => navigate({ name: 'lesson', missionId: week.id, lessonId: l.id })} aria-label={`${l.title}${done ? ' (completada)' : ''}`}>
                <Icon name={done ? 'Check' : l.icon ?? 'BookOpen'} size={20} />
                <small>{l.kind === 'reto' ? 'Reto' : l.kind === 'diagnostico' ? 'Inicio' : `Día ${l.day ?? ''}`}</small>
              </button>
            );
          })}
        </div>
        )}
        <Button variant="ghost" size="sm" onClick={() => navigate({ name: 'mission', missionId: week.id })}>Ver la semana <Icon name="ChevronRight" size={16} /></Button>
      </Card>

      <div className="home__quick">
        <Card onClick={() => navigate({ name: 'anio' })}><Icon name="Map" size={26} color="var(--c-jade)" /><strong>Mi año</strong><small className="ds-muted">{doneLessons}/{totalLessons} lecciones</small></Card>
        <Card onClick={() => navigate({ name: 'materias' })}><Icon name="LibraryBig" size={26} color="var(--area-mat)" /><strong>Mis materias</strong><small className="ds-muted">Avanza a tu ritmo</small></Card>
        <Card onClick={() => navigate({ name: 'cuaderno' })}><Icon name="NotebookPen" size={26} color="var(--area-cnt)" /><strong>Mi cuaderno</strong><small className="ds-muted">{Object.keys(p.notebook ?? {}).length} ideas</small></Card>
        <Card onClick={() => navigate({ name: 'logros' })}><Icon name="Trophy" size={26} color="var(--c-maiz-strong)" /><strong>Logros</strong><small className="ds-muted">{Object.keys(p.badges).length} insignias</small></Card>
      </div>
    </div>
  );
}
