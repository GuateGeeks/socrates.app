import { useEffect, useRef, useState } from 'react';
import { getProgress, type LessonSummary, type StepOutcome } from '@/core/progress';
import { loadSurveyDraft, shouldOfferSurveyAfterLesson } from '@/core/beta-survey';
import type { Lesson, Mission } from '@/core/types';
import { navigate } from '@/core/router';
import { t } from '@/core/i18n';
import { AREAS } from '@/cnb/model';
import { areaOf, indicadorOf, indicadorText } from '@/cnb/catalog';
import { Button, Card, ProgressBar, SectionTitle } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { Mascot } from '@/design-system/components/Mascot';
import { confetti } from '@/design-system/components/Confetti';
import { countUp, stagger } from '@/design-system/motion';
import { feedback } from '@/design-system/feedback';
import { BADGES, allLessons, nextLessonAfter } from '@/content';
import type { PlayerMode } from './LessonPlayer';

/** Lecciones (no retos) que trabajan un indicador → sugerencias de repaso. */
function lessonsFor(indicador: string, exclude: string) {
  return allLessons().filter(({ lesson }) => ['leccion', 'materia', 'taller'].includes(lesson.kind ?? 'leccion') && lesson.id !== exclude
    && lesson.steps.some((s) => s.cnb.some((c) => indicadorOf(c) === indicador))).slice(0, 2);
}

export function LessonComplete({ mission, lesson, summary, mode }: { mission: Mission; lesson: Lesson; summary: LessonSummary; mode: PlayerMode }) {
  const [xp, setXp] = useState(0);
  const [surveyDismissed, setSurveyDismissed] = useState(() => {
    try { return localStorage.getItem('socrates.survey-invite.v1') === 'seen'; } catch { return false; }
  });
  const starsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const indRef = useRef<HTMLDivElement>(null);
  const next = nextLessonAfter(mission.id, lesson.id);
  const exam = mode === 'exam';
  const passed = summary.score >= 0.7;
  const isReto = lesson.kind === 'reto';
  const isDiagnostic = lesson.kind === 'diagnostico';
  const offerSurvey = shouldOfferSurveyAfterLesson(getProgress().lessons, loadSurveyDraft().submittedAt, surveyDismissed);
  const closeSurveyInvite = () => {
    setSurveyDismissed(true);
    try { localStorage.setItem('socrates.survey-invite.v1', 'seen'); } catch { /* almacenamiento no disponible */ }
  };

  useEffect(() => {
    if (!exam || passed) confetti();
    const stop = countUp(0, summary.xpGained, setXp);
    if (starsRef.current) stagger(starsRef.current.children, 'reward.badge', 220);
    if (indRef.current) stagger(indRef.current.children, 'enter.item', 50);
    const tm = setTimeout(() => { if (badgesRef.current) { stagger(badgesRef.current.children, 'reward.badge', 300); if (summary.newBadges.length) feedback('badge'); } }, 900);
    return () => { stop(); clearTimeout(tm); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const inds = Object.entries(summary.byIndicator);
  const weak = inds.filter(([, r]) => r.ok < r.total).map(([id]) => id);

  return (
    <div className="ds-page ds-stack lc" style={{ paddingBottom: 40 }}>
      <div className="ds-center ds-stack" style={{ alignItems: 'center' }}>
        <Mascot mood={exam && !passed && !isDiagnostic ? 'think' : 'cheer'} size={112} />
        <h1>{isDiagnostic ? '¡Diagnóstico completado!' : exam ? (passed ? (isReto ? '¡Reto superado!' : '¡Validación superada!') : '¡Buen intento!') : t('done.title')}</h1>
        <p className="ds-muted">{lesson.title}</p>
        <div ref={starsRef} className="lc__stars" aria-label={`${summary.stars} de 3 estrellas`}>
          {[1, 2, 3].map((n) => <span key={n} className={n <= summary.stars ? 'on' : ''}><Icon name="Star" size={42} strokeWidth={2.4} /></span>)}
        </div>
        {exam && !passed && !isDiagnostic && <p className="ds-small">Necesitas 70 % para {isReto ? 'la medalla' : 'aprobar'}. Repasa los temas marcados y vuelve a intentarlo.</p>}
      </div>

      <div className="lc__stats">
        <div className="lc__stat" style={{ borderColor: 'var(--c-maiz-strong)' }}><small>{t('done.xp')}</small><strong>+{xp}</strong></div>
        <div className="lc__stat" style={{ borderColor: 'var(--c-bad)' }}><small>{t('done.streak')}</small><strong><Icon name="Flame" size={18} /> {summary.streak}</strong></div>
        <div className="lc__stat" style={{ borderColor: 'var(--c-ok)' }}><small>{t('done.precision')}</small><strong>{Math.round(summary.score * 100)}%</strong></div>
      </div>

      {offerSurvey && <Card raised className="lc__survey-invite">
        <div className="lc__survey-icon" aria-hidden><Icon name="MessageSquareHeart" size={26} /></div>
        <div className="ds-stack" style={{ gap: 8 }}>
          <h2>¿Cómo te pareció Socrates?</h2>
          <p>¡Terminaste tu primera lección! Tu opinión nos ayuda a mejorar la experiencia para otros estudiantes. La encuesta es opcional y toma unos 3 minutos.</p>
          <div className="ds-row" style={{ flexWrap: 'wrap' }}>
            <Button onClick={() => { closeSurveyInvite(); navigate({ name: 'encuesta-beta' }); }}>Calificar la plataforma</Button>
            <Button variant="secondary" onClick={closeSurveyInvite}>Ahora no</Button>
          </div>
        </div>
      </Card>}

      {summary.newBadges.length > 0 && (
        <Card raised>
          <h3 className="ds-center" style={{ marginBottom: 12 }}>{t('badge.new')}</h3>
          <div ref={badgesRef} className="ds-row" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}>
            {summary.newBadges.map((b) => (
              <div key={b} className="ds-center" style={{ width: 110 }}>
                <div className="ds-badge-ico" style={{ margin: '0 auto' }}><Icon name={BADGES[b]?.icon ?? 'Medal'} size={30} /></div>
                <strong className="ds-small">{BADGES[b]?.name ?? b}</strong>
              </div>
            ))}
          </div>
        </Card>
      )}

      {lesson.resumen?.length ? (
        <Card>
          <SectionTitle><Icon name="NotebookPen" size={14} /> Lo que aprendí · guardado en tu cuaderno</SectionTitle>
          <ul className="lc__resumen">{lesson.resumen.map((r) => <li key={r}>{r}</li>)}</ul>
        </Card>
      ) : null}

      {inds.length > 0 && (
        <Card>
          <SectionTitle>Así te fue en cada tema</SectionTitle>
          <div ref={indRef} className="ds-stack" style={{ gap: 10, marginTop: 10 }}>
            {inds.map(([id, r]) => {
              const a = AREAS[areaOf(id)];
              const ok = r.ok === r.total;
              return (
                <div key={id} className="lc__ind">
                  <span className="lc__dot" style={{ background: a.color }} title={a.nombre}><Icon name={a.icon} size={15} color="#fff" /></span>
                  <div className="ds-grow">
                    <div className="ds-small">{indicadorText(id)}</div>
                    <div className="ds-row" style={{ gap: 8 }}>
                      <div className="ds-grow"><ProgressBar value={r.ok / r.total} color={ok ? 'var(--c-ok)' : 'var(--c-maiz-strong)'} /></div>
                      <span className="ds-xs"><strong>{r.ok}/{r.total}</strong></span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {weak.length > 0 && (
        <Card>
          <SectionTitle><Icon name="RefreshCw" size={14} /> Te recomendamos repasar</SectionTitle>
          <p className="ds-xs ds-muted" style={{ margin: '6px 0 10px' }}>Los ejercicios que fallaste se agregaron a tu Repaso inteligente de mañana.</p>
          <div className="ds-stack" style={{ gap: 8 }}>
            {weak.slice(0, 3).flatMap((ind) => lessonsFor(ind, lesson.id)).slice(0, 3).map(({ mission: m, lesson: l }) => (
              <button key={l.id} type="button" className="lc__reco" onClick={() => navigate({ name: 'lesson', missionId: m.id, lessonId: l.id })}>
                <Icon name={l.icon ?? 'BookOpen'} size={20} />
                <span className="ds-grow"><strong>{l.title}</strong><br /><span className="ds-xs ds-muted">Semana {m.semana} · {m.title}</span></span>
                <Icon name="ChevronRight" size={18} />
              </button>
            ))}
          </div>
        </Card>
      )}

      <div className="ds-stack">
        {next && <Button block size="lg" onClick={() => navigate({ name: 'lesson', missionId: next.mission.id, lessonId: next.lesson.id })}>{t('done.next')} <Icon name="ArrowRight" /></Button>}
        <Button block variant="secondary" onClick={() => navigate(mission.semana ? { name: 'mission', missionId: mission.id } : { name: 'home' })}>{mission.semana ? 'Volver a la semana' : t('done.back')}</Button>
      </div>
    </div>
  );
}

export function ReviewComplete({ outcomes, onExit }: { outcomes: StepOutcome[]; onExit: () => void }) {
  const graded = outcomes.filter((o) => o.graded);
  const ok = graded.filter((o) => o.correct).length;
  useEffect(() => { if (ok) confetti(40); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="ds-page ds-stack lc" style={{ paddingBottom: 40 }}>
      <div className="ds-center ds-stack" style={{ alignItems: 'center' }}>
        <Mascot mood="cheer" size={112} />
        <h1>¡Repaso completado!</h1>
        <p className="ds-muted">Acertaste {ok} de {graded.length}. Lo que acertaste volverá en unos días; lo demás, mañana.</p>
      </div>
      <Card>
        <SectionTitle>Así funciona tu memoria</SectionTitle>
        <p className="ds-small" style={{ marginTop: 6 }}>Repasar justo antes de olvidar hace que los aprendizajes duren más. Cada acierto aleja el siguiente repaso: 1, 3, 7, 16 y 35 días.</p>
      </Card>
      <Button block size="lg" onClick={onExit}>Listo <Icon name="Check" /></Button>
    </div>
  );
}
