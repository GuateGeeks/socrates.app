import { useCallback, useEffect, useMemo, useReducer, useRef, useState, type CSSProperties } from 'react';
import { getActivity } from '@/core/registry';
import { canSubmit, initialStep, outcomeOf, REVEAL_AFTER, stepReducer } from '@/core/engine';
import { recordLesson, recordReview, saveNote, useProgress, today, type LessonSummary, type StepOutcome } from '@/core/progress';
import type { Lesson, Mission, StepBase } from '@/core/types';
import { t } from '@/core/i18n';
import { navigate } from '@/core/router';
import { AREAS, FASES } from '@/cnb/model';
import { Button, Chip, ProgressBar, Rich } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { Mascot } from '@/design-system/components/Mascot';
import { feedback } from '@/design-system/feedback';
import { play } from '@/design-system/motion';
import { evaluateBadges } from '@/content';
import { MediaSlot } from '@/ui/MediaSlot';
import { LessonComplete, ReviewComplete } from './LessonComplete';

export type PlayerMode = 'normal' | 'exam' | 'review';
export const modeOf = (l: Lesson): PlayerMode =>
  l.kind === 'reto' || l.kind === 'evaluacion' || l.kind === 'diagnostico' ? 'exam' : l.kind === 'repaso' ? 'review' : 'normal';

const KIND_LABEL: Record<string, { label: string; icon: string }> = {
  leccion: { label: 'Lección', icon: 'BookOpen' },
  materia: { label: 'Lección', icon: 'BookOpen' },
  taller: { label: 'Taller interdisciplinario', icon: 'Shapes' },
  reto: { label: 'Reto semanal', icon: 'Trophy' },
  proyecto: { label: 'Proyecto', icon: 'Hammer' },
  evaluacion: { label: 'Evaluación', icon: 'ClipboardCheck' },
  diagnostico: { label: 'Diagnóstico', icon: 'Compass' },
  extra: { label: 'Lección extra', icon: 'Sparkles' },
  repaso: { label: 'Repaso inteligente', icon: 'RefreshCw' },
};

/** Pantalla de inicio: qué aprenderé, cuánto dura, reglas del modo evaluación. */
function LessonIntro({ mission, lesson, mode, onStart }: { mission: Mission; lesson: Lesson; mode: PlayerMode; onStart: () => void }) {
  const k0 = KIND_LABEL[lesson.kind ?? 'leccion'] ?? KIND_LABEL.leccion;
  const k = lesson.area ? { label: AREAS[lesson.area].nombre, icon: AREAS[lesson.area].icon } : k0;
  const done = useProgress((p) => p.lessons[lesson.id]);
  const graded = lesson.steps.filter((s) => getActivity(s.type)?.graded).length;
  return (
    <div className="ds-page ds-stack lp-intro" style={{ '--mission': mission.color, paddingBottom: 40 } as CSSProperties}>
      <div className="ds-row">
        <Button variant="ghost" icon onClick={() => navigate(mission.semana ? { name: 'mission', missionId: mission.id } : { name: 'home' })} aria-label="Volver"><Icon name="ArrowLeft" /></Button>
        <span className="ds-xs ds-muted">{mission.semana ? `Semana ${mission.semana} · ` : ''}{mission.title}</span>
      </div>
      <div className="lp-intro__head">
        <span className="lp-intro__icon"><Icon name={lesson.icon ?? k.icon} size={30} /></span>
        <div>
          <Chip color={mission.color} solid><Icon name={k.icon} size={14} /> {k.label}{lesson.day ? ` · Día ${lesson.day}` : ''}</Chip>
          <h1>{lesson.title}</h1>
          <p className="ds-small ds-muted"><Icon name="Clock" size={14} /> ~{lesson.minutes} min · {lesson.steps.length} actividades{graded ? ` · ${graded} para comprobar` : ''}</p>
        </div>
      </div>
      {lesson.media && <MediaSlot slot={lesson.media} color={mission.color} />}
      {lesson.gancho && <p className="lp-intro__hook"><Icon name="MessageCircle" size={18} /> <Rich text={lesson.gancho} /></p>}
      {lesson.objetivos?.length ? (
        <div className="lp-intro__goals">
          <strong>Hoy aprenderás a…</strong>
          <ul>{lesson.objetivos.map((o) => <li key={o}><Icon name="Check" size={16} /> {o}</li>)}</ul>
        </div>
      ) : null}
      {mode === 'exam' && (
        <div className="lp-intro__rules">
          <Icon name="ShieldCheck" size={20} />
          <div className="ds-small">
            {lesson.kind === 'diagnostico'
              ? <><strong>Para conocer tu punto de partida.</strong> Responde con calma. No necesitas saberlo todo; al final verás qué puedes repasar.</>
              : <><strong>Modo validación.</strong> Sin pistas y un solo intento por pregunta. Al final verás qué aprendiste y qué puedes repasar.</>}
            {lesson.kind === 'reto' && ' Con 70 % o más ganas la medalla de la semana.'}
          </div>
        </div>
      )}
      <Button block size="lg" onClick={onStart}>{done ? 'Repetir' : 'Empezar'} <Icon name="ArrowRight" /></Button>
      {done && <p className="ds-xs ds-muted ds-center">Ya completaste esta lección ({done.stars} de 3 estrellas). Puedes repetirla para mejorar.</p>}
    </div>
  );
}

export function LessonPlayer({ mission, lesson, mode = modeOf(lesson), skipIntro, onExit }: {
  mission: Mission; lesson: Lesson; mode?: PlayerMode; skipIntro?: boolean; onExit?: () => void;
}) {
  const [started, setStarted] = useState(!!skipIntro);
  const [idx, setIdx] = useState(0);
  const [s, dispatch] = useReducer(stepReducer, undefined, initialStep);
  const [outcomes, setOutcomes] = useState<StepOutcome[]>([]);
  const [summary, setSummary] = useState<LessonSummary | null>(null);
  const [reviewDone, setReviewDone] = useState<StepOutcome[] | null>(null);
  const [combo, setCombo] = useState(0);
  const [confirmExit, setConfirmExit] = useState(false);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const step: StepBase | undefined = lesson.steps[idx];
  const def = getActivity(step?.type ?? '');
  const cardRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const exitDialog = useRef<HTMLDialogElement>(null);
  const [actionHeight, setActionHeight] = useState(100);
  const exam = mode === 'exam' || mode === 'review';
  const exit = onExit ?? (() => navigate(mission.semana ? { name: 'mission', missionId: mission.id } : { name: 'home' }));

  useEffect(() => {
    if (started) {
      play(cardRef.current, 'enter.step');
      cardRef.current?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [idx, started]);
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const measure = () => setActionHeight(bar.getBoundingClientRect().height);
    const observer = new ResizeObserver(measure); observer.observe(bar); measure();
    return () => observer.disconnect();
  }, [started, summary, reviewDone]);
  useEffect(() => {
    if (s.status !== 'answering') feedbackRef.current?.focus();
  }, [s.status]);
  useEffect(() => {
    if (confirmExit) exitDialog.current?.showModal(); else exitDialog.current?.close();
  }, [confirmExit]);
  useEffect(() => {
    if (s.status === 'correct') { feedback('correct'); play(barRef.current, 'enter.item'); }
    if (s.status === 'incorrect') { feedback('incorrect'); play(cardRef.current, 'feedback.incorrect'); }
    if (s.status === 'revealed') feedback('hint');
  }, [s.status, s.attempt]);

  const api = useMemo(() => ({
    submit: () => def && step && dispatch({ type: 'check', def, step }),
    setReady: (ready: boolean) => dispatch({ type: 'ready', ready }),
  }), [def, step]);
  const onChange = useCallback((value: unknown) => dispatch({ type: 'change', value }), []);

  // Gancho para pruebas E2E (solo si la página define window.__SOCRATES_TEST__)
  useEffect(() => {
    const w = window as unknown as { __SOCRATES_TEST__?: boolean; __lp?: unknown };
    if (!w.__SOCRATES_TEST__ || !def || !step) return;
    w.__lp = {
      type: step.type, index: idx, total: lesson.steps.length, started, mode,
      start: () => setStarted(true),
      solve: async () => {
        if (def.testSolve) dispatch({ type: 'change', value: await def.testSolve(step.props) });
        else if (def.solution) dispatch({ type: 'change', value: def.solution(step.props) });
        else dispatch({ type: 'ready', ready: true });
      },
    };
  }, [idx, def, step, lesson.steps.length, started, mode]);

  if (!lesson.steps.length) return <div className="ds-page">Esta lección aún no tiene actividades.</div>;
  if (!started) return <LessonIntro mission={mission} lesson={lesson} mode={mode} onStart={() => { feedback('select'); setStarted(true); }} />;
  if (summary) return <LessonComplete mission={mission} lesson={lesson} summary={summary} mode={mode} />;
  if (reviewDone) return <ReviewComplete outcomes={reviewDone} onExit={exit} />;
  if (!step || !def) return <div className="ds-page">Actividad desconocida: {step?.type}</div>;

  const advance = () => {
    const o: StepOutcome = { step, ...outcomeOf(def, s) };
    if (mode === 'review' && o.graded) recordReview(step.id, o.correct && o.firstTry);
    const all = [...outcomes, o];
    setCombo(o.graded ? (o.firstTry ? combo + 1 : 0) : combo);
    if (idx + 1 >= lesson.steps.length) {
      feedback('complete');
      if (mode === 'review') setReviewDone(all);
      else setSummary(recordLesson(mission, lesson, all, evaluateBadges));
    } else {
      setOutcomes(all);
      dispatch({ type: 'reset' });
      setIdx(idx + 1);
    }
  };

  const primary = () => {
    if (s.status === 'answering') {
      if (!def.graded) { advance(); return; }
      dispatch({ type: 'check', def, step });
    } else if (s.status === 'incorrect') {
      if (exam) advance(); else dispatch({ type: 'retry' });
    } else advance();
  };

  const fase = FASES[step.fase];
  const Comp = def.Component;
  const ready = canSubmit(def, step, s);
  const label = s.status === 'answering' ? (def.graded ? t('lesson.check') : t('lesson.continue'))
    : s.status === 'incorrect' ? (exam ? t('lesson.continue') : t('lesson.tryAgain')) : t('lesson.continue');
  const barState = s.status === 'correct' ? 'is-correct' : s.status === 'incorrect' ? 'is-incorrect' : s.status === 'revealed' ? 'is-revealed' : '';
  const color = mission.color;
  const noteKey = `${lesson.id}/${step.id}`;
  const canSave = step.type === 'explain' && !exam;

  return (
    <div className="lp" style={{ '--mission': color, '--lesson-actions-height': `${actionHeight}px` } as CSSProperties}>
      <header className="lp__top">
        <button type="button" className="lp__close" aria-label={t('lesson.exit')} onClick={() => { if (idx === 0) exit(); else setConfirmExit(true); }}><Icon name="X" size={22} /></button>
        <div className="ds-grow"><ProgressBar value={(idx + (s.status !== 'answering' ? 1 : 0)) / lesson.steps.length} color={color} label="Avance de la lección" /></div>
        {exam ? <span className="lp__count">{idx + 1}/{lesson.steps.length}</span> : combo >= 2 && <span className="lp__combo" key={combo}><Icon name="Flame" size={18} /> {combo}</span>}
      </header>

      <main className="lp__main">
        <div ref={cardRef} className="ds-stack" key={step.id} tabIndex={-1}>
          <div className="ds-row" style={{ flexWrap: 'wrap', gap: 6 }}>
            <Chip color={color} solid><Icon name={fase.icon} size={14} /> {fase.nombre}</Chip>
            {step.areas.map((a) => <Chip key={a} color={AREAS[a].color}><Icon name={AREAS[a].icon} size={13} /> {AREAS[a].corto}</Chip>)}
          </div>
          {step.title && <h2 className="lp__title">{step.title}</h2>}
          <p className="lp__prompt"><Rich text={step.prompt} /></p>
          {step.media && <MediaSlot slot={step.media} color={color} />}
          <Comp step={step} props={step.props} value={s.value} onChange={onChange} status={s.status} attempt={s.attempt} api={api} />
          {canSave && (
            <button type="button" className={`lp__save${saved[noteKey] ? ' is-on' : ''}`} disabled={saved[noteKey]}
              onClick={() => { feedback('select'); saveNote(noteKey, { text: `${step.title ? `${step.title}: ` : ''}${(step.props as { body?: string }).body ?? step.prompt}`, lessonId: lesson.id, missionId: mission.id, title: lesson.title, at: today() }); setSaved((x) => ({ ...x, [noteKey]: true })); }}>
              <Icon name={saved[noteKey] ? 'BookmarkCheck' : 'Bookmark'} size={16} /> {saved[noteKey] ? 'Guardado en tu cuaderno' : 'Guardar en mi cuaderno'}
            </button>
          )}
          {step.hint && s.status === 'answering' && !exam && (
            s.hintShown
              ? <div className="lp__hint"><Mascot mood="think" size={48} idle={false} /><Rich text={step.hint} /></div>
              : <button type="button" className="lp__hintbtn" onClick={() => { feedback('hint'); dispatch({ type: 'hint' }); }}><Icon name="Lightbulb" size={16} /> {t('lesson.hint')}</button>
          )}
          {s.status !== 'answering' && <div ref={feedbackRef} tabIndex={-1} className={`lp__explanation ${barState}`} role="status">
            {s.status === 'incorrect' && s.result?.feedback && <p><Rich text={s.result.feedback} /></p>}
            {(s.status === 'correct' || s.status === 'revealed' || exam) && step.explain && <p><Rich text={step.explain} /></p>}
          </div>}
        </div>
      </main>

      <dialog ref={exitDialog} className="lp__exit-dialog" aria-label={t('lesson.exit')} onClose={() => setConfirmExit(false)}>
        <div className="ds-stack">
          <Mascot mood="oops" size={72} idle={false} />
          <p className="ds-center"><strong>{t('lesson.exitConfirm')}</strong></p>
          <Button block autoFocus onClick={() => setConfirmExit(false)}>Seguir aprendiendo</Button>
          <Button block variant="ghost" onClick={exit}>{t('lesson.exit')}</Button>
        </div>
      </dialog>

      <footer ref={barRef} className={`ds-actionbar ${barState}`}>
        <div className="ds-actionbar__inner">
          {s.status === 'correct' && (
            <div>
              <div className="ds-feedback-title"><Icon name="CircleCheck" size={22} /> {s.attempt === 1 ? pickPraise(idx) : '¡Lo lograste!'}</div>
            </div>
          )}
          {s.status === 'incorrect' && (
            <div>
              <div className="ds-feedback-title"><Icon name="CircleAlert" size={22} /> {exam ? 'No es correcto' : t('lesson.incorrect')}</div>
            </div>
          )}
          {s.status === 'revealed' && (
            <div>
              <div className="ds-feedback-title"><Icon name="BookOpenCheck" size={22} /> {t('lesson.revealed')}</div>
            </div>
          )}
          <div className="ds-row">
            {!exam && s.status === 'incorrect' && s.attempt >= REVEAL_AFTER && def.solution && (
              <Button variant="secondary" onClick={() => dispatch({ type: 'reveal', def, step })}>{t('lesson.showSolution')}</Button>
            )}
            <Button block size="lg" className="ds-grow" disabled={!ready}
              variant={s.status === 'correct' ? 'ok' : s.status === 'incorrect' ? (exam ? 'secondary' : 'bad') : 'primary'} onClick={primary}>
              {label}
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

const PRAISE = ['¡Excelente!', '¡Muy bien!', '¡Correcto!', '¡Así se hace!', '¡Chilero!', '¡Bien pensado!'];
function pickPraise(i: number) { return PRAISE[i % PRAISE.length]; }
