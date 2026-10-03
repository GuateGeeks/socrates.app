import { useEffect, useState } from 'react';
import { navigate } from '@/core/router';
import { useProgress } from '@/core/progress';
import {
  SURVEY_QUESTIONS, SURVEY_ROLES, firstSurveyInputId, focusSurveyError, loadSurveyDraft, saveSurveyDraft,
  validateSurveyAnswers, type SurveyAnswers, type SurveyDraft, type SurveyQuestionId,
  type SurveyRatingId, type SurveyRole,
} from '@/core/beta-survey';
import { Button, Card } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import './encuesta-beta.css';

export function EncuestaBeta() {
  const name = useProgress((progress) => progress.profile.name.trim());
  const [draft, setDraft] = useState<SurveyDraft>(() => loadSurveyDraft());
  const [errors, setErrors] = useState<SurveyQuestionId[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [message, setMessage] = useState('');
  const [focusTarget, setFocusTarget] = useState<SurveyQuestionId | null>(null);

  useEffect(() => { saveSurveyDraft(draft); }, [draft]);
  useEffect(() => {
    if (!focusTarget) return;
    focusSurveyError(document, focusTarget);
    setFocusTarget(null);
  }, [focusTarget]);

  const change = <K extends keyof SurveyAnswers>(key: K, value: SurveyAnswers[K]) => {
    setDraft((current) => ({ ...current, answers: { ...current.answers, [key]: value }, submittedAt: null }));
    setErrors((current) => current.filter((id) => id !== key));
    setStatus('idle');
    setMessage('');
  };

  const send = async () => {
    const missing = validateSurveyAnswers(draft.answers);
    if (missing.length) {
      setErrors(missing);
      setMessage(`Revisa ${missing.length} ${missing.length === 1 ? 'respuesta' : 'respuestas'} antes de enviar.`);
      setFocusTarget(missing[0]);
      return;
    }
    setStatus('sending');
    setMessage('');
    try {
      const { submitBetaSurvey } = await import('@/core/beta-survey-submit');
      await submitBetaSurvey(name, draft.answers);
      setDraft((current) => ({ ...current, submittedAt: Date.now() }));
      setStatus('sent');
      setMessage('¡Gracias! Recibimos tus respuestas. Puedes cambiarlas y volver a enviarlas.');
    } catch (error) {
      setStatus('idle');
      setMessage(error instanceof Error && /^(Tu borrador|Revisa el nombre|Completa las diez)/.test(error.message)
        ? error.message : 'No pudimos enviarla ahora. Tu borrador sigue guardado; inténtalo de nuevo.');
    }
  };

  return <main className="ds-page ds-stack survey-page">
    <div className="ds-row">
      <Button variant="ghost" icon aria-label="Volver a Ajustes" onClick={() => navigate({ name: 'ajustes' })}><Icon name="ArrowLeft" /></Button>
      <h1>Encuesta beta</h1>
    </div>
    <Card raised className="survey-intro">
      <div className="survey-intro__icon" aria-hidden><Icon name="MessageSquareHeart" size={30} /></div>
      <div>
        <strong>Ayúdanos a mejorar Socrates</strong>
        <p>Son diez preguntas sobre el contenido, el diseño y las actividades. Toma unos 3 minutos.</p>
        <p>Enviaremos las respuestas junto con el nombre de tu perfil: <strong>{name || 'sin nombre'}</strong>. Evita escribir datos personales en los comentarios.</p>
      </div>
    </Card>
    {draft.submittedAt && status !== 'sent' && <p className="survey-note" role="status">Ya enviaste una respuesta. Puedes editarla y volver a enviarla.</p>}
    <form className="ds-stack" onSubmit={(event) => { event.preventDefault(); void send(); }} noValidate>
      {SURVEY_QUESTIONS.map((question, index) => <Card key={question.id} className="survey-question">
        <div id={`survey-${question.id}`} className="survey-question__head">
          <span className="survey-question__number">{String(index + 1).padStart(2, '0')}</span>
          <h2>{question.label}</h2>
        </div>
        {question.kind === 'choice' && <fieldset className="survey-options" aria-label={question.label}
          aria-invalid={errors.includes(question.id)} aria-describedby={errors.includes(question.id) ? `survey-error-${question.id}` : undefined}>
          {SURVEY_ROLES.map((role, optionIndex) => <label key={role.value} className="survey-option">
            <input id={optionIndex === 0 ? firstSurveyInputId(question.id) : undefined} type="radio" name="survey-role" value={role.value} checked={draft.answers.role === role.value}
              aria-invalid={errors.includes(question.id)} aria-describedby={errors.includes(question.id) ? `survey-error-${question.id}` : undefined}
              onChange={() => change('role', role.value as SurveyRole)} />
            <span>{role.label}</span>
          </label>)}
        </fieldset>}
        {question.kind === 'rating' && <fieldset className="survey-scale" aria-label={question.label}
          aria-invalid={errors.includes(question.id)} aria-describedby={errors.includes(question.id) ? `survey-error-${question.id}` : undefined}>
          <div className="survey-scale__choices">{[1, 2, 3, 4, 5].map((value) => <label key={value} className="survey-scale__choice">
            <input id={value === 1 ? firstSurveyInputId(question.id) : undefined} type="radio" name={`survey-${question.id}`} value={value}
              aria-invalid={errors.includes(question.id)} aria-describedby={errors.includes(question.id) ? `survey-error-${question.id}` : undefined}
              checked={draft.answers[question.id as SurveyRatingId] === value}
              onChange={() => change(question.id as SurveyRatingId, value)} />
            <span>{value}</span>
          </label>)}</div>
          <div className="survey-scale__labels"><span>{question.low}</span><span>{question.high}</span></div>
        </fieldset>}
        {question.kind === 'text' && <div className="survey-text">
          <label className="sr-only" htmlFor={`answer-${question.id}`}>{question.label}</label>
          <textarea id={firstSurveyInputId(question.id)} className="ds-input" maxLength={500} rows={4}
            aria-invalid={errors.includes(question.id)} aria-describedby={errors.includes(question.id) ? `survey-error-${question.id}` : undefined}
            value={draft.answers[question.id]} onChange={(event) => change(question.id, event.target.value)}
            placeholder={question.id === 'bestPart' ? 'Cuéntanos qué funcionó bien…' : 'Cuéntanos qué cambiarías…'} />
          <small>{draft.answers[question.id].length}/500</small>
        </div>}
        {errors.includes(question.id) && <p id={`survey-error-${question.id}`} className="survey-error">
          {question.kind === 'text' ? 'Escribe entre 2 y 500 caracteres.' : 'Responde esta pregunta antes de enviar.'}
        </p>}
      </Card>)}
      <Card className="survey-submit">
        <p>El borrador se guarda en este dispositivo. Al enviar, tus respuestas y el nombre de tu perfil se guardarán en Firebase. Solo tu cuenta puede leerlas desde la app; el equipo puede revisarlas en Firebase Console. No puedes borrarlas desde la app.</p>
        {message && <p role="status" className={status === 'sent' ? 'survey-success' : 'survey-error'}>{message}</p>}
        <Button type="submit" block disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : draft.submittedAt ? 'Actualizar respuesta' : 'Enviar respuestas'}</Button>
      </Card>
    </form>
  </main>;
}
