import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { href } from '@/core/router';
import { Icon } from '@/design-system/icons';
import { feedback } from '@/design-system/feedback';
import { awsCorrectOptions, findAwsLesson, isAwsAnswerCorrect, type AwsCourse } from './course';
import { saveAwsResult, useAwsProgress } from './progress';
import { PRACTICES } from './practice';
import { AwsReader } from './AwsReader';
import { AwsPractice } from './AwsPractice';

type Phase = 'study' | 'practice' | 'quiz' | 'result';

export function AwsLessonScreen({ course, lessonId }: { course: AwsCourse; lessonId: string }) {
  const found = findAwsLesson(course, lessonId);
  const [phase, setPhase] = useState<Phase>('study');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[][]>([]);
  const [draft, setDraft] = useState<number[]>([]);
  const [confirmed, setConfirmed] = useState(false);
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [restart, setRestart] = useState(false);
  const saved = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const phases = useRef<HTMLElement>(null);
  const [phaseHeight, setPhaseHeight] = useState(64);
  useEffect(() => {
    const element = phases.current;
    if (!element) return;
    const observer = new ResizeObserver(() => setPhaseHeight(element.getBoundingClientRect().height));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const progress = useAwsProgress();
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0 });
  }, [phase]);
  if (!found) return <div className="aws-page aws-stack"><h1>Lección no encontrada</h1><a href={href({ name: 'aws-curriculum' })}>Volver al temario</a></div>;
  const { domain, lesson } = found;
  const practice = PRACTICES[lesson.id];
  const question = lesson.questions[index];
  const correctOptions = awsCorrectOptions(question);
  const multiple = correctOptions.length > 1;
  const answerCorrect = confirmed && isAwsAnswerCorrect(question, draft);
  const allLessons = course.domains.flatMap(item => item.lessons);
  const nextLesson = allLessons[allLessons.findIndex(item => item.id === lesson.id) + 1];
  const startQuiz = () => {
    setAnswers([]); setDraft([]); setConfirmed(false); setIndex(0); setScore(null);
    setStarted(true); setRestart(false); saved.current = false; setPhase('quiz');
  };
  const finishQuestion = () => {
    if (index + 1 < lesson.questions.length) {
      setIndex(index + 1); setDraft([]); setConfirmed(false);
      requestAnimationFrame(() => document.getElementById('aws-question')?.focus());
      return;
    }
    if (saved.current) return;
    saved.current = true;
    const result = answers.filter((answer, i) => isAwsAnswerCorrect(lesson.questions[i], answer)).length / lesson.questions.length;
    saveAwsResult(lesson.id, result);
    setScore(result); setPhase('result'); feedback('complete');
  };
  const steps: { phase: Phase; label: string; icon: string }[] = [
    { phase: 'study', label: 'Explorar', icon: 'BookOpen' },
    ...(practice ? [{ phase: 'practice' as const, label: 'Practicar', icon: 'MousePointer2' }] : []),
    { phase: score === null ? 'quiz' : 'result', label: 'Comprobar', icon: 'CircleCheck' },
  ];
  return <div className="aws-page aws-stack aws-lesson" style={{ '--aws-phase-height': `${phaseHeight}px` } as CSSProperties}>
    <a className="aws-back" href={href({ name: 'aws-domain', domainId: domain.id })}><Icon name="ArrowLeft" size={18} /> {domain.title}</a>
    <header className="aws-title"><span className="aws-kicker">{lesson.taskCode ? `OBJETIVO ${lesson.taskCode} · ` : 'LECCIÓN · '}{lesson.minutes} MIN</span>
      <h1 ref={heading} tabIndex={-1}>{lesson.title}</h1><details className="aws-lesson-summary"><summary>Acerca de esta lección</summary><p>{lesson.summary}</p></details>
    </header>
    <nav ref={phases} className="aws-phases" aria-label="Etapas de aprendizaje">{steps.map((step, i) => <button key={step.label} type="button" aria-current={phase === step.phase ? 'step' : undefined} onClick={() => { setRestart(false); setPhase(step.phase); }}>
      <span className="aws-step-number">{i + 1}</span><Icon name={step.icon} size={18} /><span>{step.label}</span>
    </button>)}</nav>
    <div hidden={phase !== 'study'}><AwsReader lesson={lesson} hasPractice={!!practice} onContinue={() => setPhase(practice ? 'practice' : score === null ? 'quiz' : 'result')} /></div>
    {practice && <div hidden={phase !== 'practice'}><AwsPractice practice={practice} onContinue={() => setPhase(score === null ? 'quiz' : 'result')} /></div>}
    <div hidden={phase !== 'quiz'}>
      {!started ? <section className="aws-next"><span className="aws-kicker">Ponlo en práctica</span><h2>Comprueba lo aprendido</h2>
        <p>{lesson.questions.length} preguntas con explicación. Puedes volver a Explorar en cualquier momento; tus respuestas se conservan durante esta sesión.</p>
        <button className="aws-primary" onClick={startQuiz}>Comenzar comprobación <Icon name="ArrowRight" size={18} /></button></section>
        : <section className="aws-quiz">
          <div className="aws-quiz__top"><span className="aws-kicker">PREGUNTA {index + 1} DE {lesson.questions.length}</span><span>{Math.round(answers.length / lesson.questions.length * 100)} %</span></div>
          <div className="aws-meter" role="progressbar" aria-label="Preguntas respondidas" aria-valuenow={answers.length} aria-valuemin={0} aria-valuemax={lesson.questions.length}><span style={{ width: `${answers.length / lesson.questions.length * 100}%` }} /></div>
          <h2 id="aws-question" tabIndex={-1}>{question.prompt}</h2>
          <p className="aws-quiz__instruction">{multiple ? `Selecciona ${correctOptions.length} respuestas.` : 'Selecciona una respuesta.'}</p>
          <div className="aws-options" role="group" aria-labelledby="aws-question">{question.options.map((option, choice) => {
            const selected = draft.includes(choice);
            const correct = correctOptions.includes(choice);
            return <button key={choice} type="button" disabled={confirmed} aria-pressed={selected}
              className={`${confirmed && correct ? 'is-correct' : ''}${confirmed && selected && !correct ? ' is-incorrect' : ''}${!confirmed && selected ? ' is-selected' : ''}`}
              onClick={() => { feedback('select'); setDraft(current => multiple ? current.includes(choice) ? current.filter(item => item !== choice) : current.length < correctOptions.length ? [...current, choice] : current : [choice]); }}>
              <span aria-hidden>{confirmed && correct ? <Icon name="Check" size={18} /> : confirmed && selected ? <Icon name="X" size={18} /> : String.fromCharCode(65 + choice)}</span>
              <span className="aws-option-text">{option}</span>{confirmed && <span className="sr-only">{correct ? 'Respuesta correcta' : selected ? 'Tu respuesta, incorrecta' : ''}</span>}
            </button>;
          })}</div>
          {confirmed && <div id="aws-answer-feedback" tabIndex={-1} className={`aws-feedback${answerCorrect ? ' is-correct' : ''}`} role="status"><strong><Icon name={answerCorrect ? 'CircleCheck' : 'Lightbulb'} size={20} /> {answerCorrect ? 'Correcto' : 'Revisa este concepto'}</strong><p>{question.explanation}</p></div>}
          <div className="aws-actions aws-lesson-actions">{!confirmed ? <button className="aws-primary" disabled={draft.length !== correctOptions.length} onClick={() => {
            setAnswers(current => [...current, [...draft]]); setConfirmed(true); requestAnimationFrame(() => document.getElementById('aws-answer-feedback')?.focus()); feedback(isAwsAnswerCorrect(question, draft) ? 'correct' : 'incorrect');
          }}>Comprobar respuesta</button> : <button className="aws-primary" onClick={finishQuestion}>{index + 1 === lesson.questions.length ? 'Ver resultados' : 'Siguiente pregunta'} <Icon name="ArrowRight" size={18} /></button>}
            <button className="aws-secondary" onClick={() => setPhase('study')}><Icon name="BookOpen" size={18} /> Consultar contenido</button>
          </div>
        </section>}
    </div>
    {phase === 'result' && score !== null && <>
      <section className="aws-result"><span className="aws-result__icon"><Icon name="CircleCheck" size={44} /></span><span className="aws-kicker">COMPROBACIÓN COMPLETADA</span>
        <h2>{Math.round(score * 100)} % de aciertos</h2><p>{score === 1 ? 'Dominaste esta comprobación. Sigue con el siguiente tema.' : 'Cada intento cuenta. Revisa las explicaciones y vuelve a practicar.'}</p>
        <p className="aws-result__best">Mejor resultado: {Math.round((progress.lessons[lesson.id]?.bestScore ?? score) * 100)} %</p>
        <div className="aws-result__actions">{nextLesson && <a className="aws-primary" href={href({ name: 'aws-lesson', lessonId: nextLesson.id })}>Siguiente lección <Icon name="ArrowRight" size={18} /></a>}
          <button className="aws-secondary" onClick={() => setPhase('study')}>Repasar contenido</button>
          <button className="aws-secondary" onClick={() => setRestart(true)}>Repetir comprobación</button></div>
        {restart && <div className="aws-restart" role="group" aria-label="Confirmar reinicio"><p>Comenzarás un nuevo intento. Tu mejor resultado se conserva.</p><div className="aws-actions"><button className="aws-primary" onClick={startQuiz}>Sí, comenzar de nuevo</button><button className="aws-secondary" onClick={() => setRestart(false)}>Cancelar</button></div></div>}
      </section>
      <section className="aws-module"><h2>Lo que te llevas</h2>{lesson.questions.map((item, i) => <details className="aws-review" key={item.id}><summary><Icon name={isAwsAnswerCorrect(item, answers[i] ?? []) ? 'CircleCheck' : 'Lightbulb'} size={20} /><span>{item.prompt}</span></summary><p>{item.explanation}</p></details>)}</section>
    </>}
  </div>;
}
