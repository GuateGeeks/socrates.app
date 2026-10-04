import { useState } from 'react';
import { AVATARS, DAILY_GOALS, ONBOARDING_STEPS, validateLearnerName, type LearnerProfile, type OnboardingStep } from '@/core/learner-profile';
import { Icon } from '@/design-system/icons';
import { PROGRAMS, PROGRAM_IDS } from '@/core/programs';

interface Props { profile: LearnerProfile; updateProfile(patch: Partial<LearnerProfile>): void; complete(): void }
const COPY: Record<OnboardingStep, { title: string; text: string }> = {
  welcome: { title: 'Tu aventura comienza aquí', text: 'Vamos a preparar Socrates para aprender a tu manera.' },
  program: { title: 'Elige tu programa', text: 'Inscríbete para comenzar. Podrás cambiar de programa en Ajustes y conservar tu avance.' },
  name: { title: '¿Cómo te llamas?', text: 'Usaremos tu nombre para celebrar tus logros.' },
  avatar: { title: 'Elige tu ícono de perfil', text: 'Puedes cambiarlo después en Ajustes.' },
  goal: { title: 'Marca tu ritmo', text: 'Elige una meta diaria alcanzable.' },
  preferences: { title: 'Hazlo tuyo', text: 'Configura cómo se siente la experiencia.' },
  ready: { title: `¡Todo listo!`, text: 'Tu elección y tu avance quedan guardados para cuando vuelvas.' },
};

export function Onboarding({ profile, updateProfile, complete }: Props) {
  const index = ONBOARDING_STEPS.indexOf(profile.onboardingStep);
  const [error, setError] = useState('');
  const go = (direction: number) => {
    if (profile.onboardingStep === 'program' && direction > 0 && !profile.activeProgram) { setError('Elige un programa para continuar.'); return; }
    if (profile.onboardingStep === 'name' && direction > 0 && !validateLearnerName(profile.displayName).valid) { setError('Escribe un nombre de 1 a 30 caracteres.'); return; }
    setError('');
    updateProfile({ onboardingStep: ONBOARDING_STEPS[Math.max(0, Math.min(ONBOARDING_STEPS.length - 1, index + direction))] });
  };
  const { title, text } = COPY[profile.onboardingStep];
  return <main className="startup onboarding">
    <section className="onboarding__panel">
      <div className="onboarding__top"><span>Socrates Aprende</span><span>Paso {index + 1} de {ONBOARDING_STEPS.length}</span></div>
      <div className="onboarding__progress" role="progressbar" aria-valuenow={index + 1} aria-valuemin={1} aria-valuemax={ONBOARDING_STEPS.length}><i style={{ width: `${((index + 1) / ONBOARDING_STEPS.length) * 100}%` }} /></div>
      <div className="onboarding__body">
        <div className="onboarding__symbol"><Icon name={profile.onboardingStep === 'ready' ? 'Rocket' : 'Sparkles'} size={38} /></div>
        <h1>{title}</h1><p>{text}</p>
        {profile.onboardingStep === 'welcome' && <div className="onboarding__hero"><Icon name="BookOpenCheck" size={72} /><strong>Aprendizaje hecho para ti</strong></div>}
        {profile.onboardingStep === 'program' && <div className="onboarding__programs" role="radiogroup" aria-label="Programa educativo">
          {PROGRAM_IDS.map((id) => <button key={id} type="button" role="radio" aria-checked={profile.activeProgram === id}
            onClick={() => updateProfile({ activeProgram: id })}>
            <Icon name={PROGRAMS[id].icon} size={27} /><span><strong>{PROGRAMS[id].title}</strong><small>{PROGRAMS[id].subtitle}</small></span><Icon name={profile.activeProgram === id ? 'CircleCheck' : 'ChevronRight'} size={20} />
          </button>)}
          {error && <small role="alert">{error}</small>}
        </div>}
        {profile.onboardingStep === 'name' && <label className="onboarding__field">Tu nombre<input autoFocus value={profile.displayName} maxLength={30} onChange={(e) => updateProfile({ displayName: e.target.value })} placeholder="Escribe tu nombre" />{error && <small role="alert">{error}</small>}</label>}
        {profile.onboardingStep === 'avatar' && <div className="onboarding__choices avatars">{AVATARS.map((avatar) => <button key={avatar} aria-pressed={profile.avatar === avatar} onClick={() => updateProfile({ avatar })}><Icon name={avatar} size={34} /></button>)}</div>}
        {profile.onboardingStep === 'goal' && <div className="onboarding__choices goals">{DAILY_GOALS.map((goal) => <button key={goal} aria-pressed={profile.dailyGoal === goal} onClick={() => updateProfile({ dailyGoal: goal })}><strong>{goal}</strong><span>puntos al día</span></button>)}</div>}
        {profile.onboardingStep === 'preferences' && <div className="onboarding__prefs">
          <label>Tema <select value={profile.theme} onChange={(e) => updateProfile({ theme: e.target.value as LearnerProfile['theme'] })}><option value="auto">Automático</option><option value="light">Claro</option><option value="dark">Oscuro</option></select></label>
          {([['sound', 'Sonidos'], ['haptics', 'Vibración'], ['reducedMotion', 'Movimiento reducido']] as const).map(([key, label]) => <label key={key}><span>{label}</span><input type="checkbox" checked={profile[key]} onChange={(e) => updateProfile({ [key]: e.target.checked })} /></label>)}
        </div>}
        {profile.onboardingStep === 'ready' && <div className="onboarding__summary"><Icon name={profile.avatar} size={50} /><strong>{profile.displayName.trim()}</strong><span>{profile.activeProgram ? PROGRAMS[profile.activeProgram].title : 'Elige un programa'}</span></div>}
      </div>
      <div className="onboarding__actions">{index > 0 && <button className="secondary" onClick={() => go(-1)}>Atrás</button>}<button className="primary" onClick={profile.onboardingStep === 'ready' ? complete : () => go(1)}>{profile.onboardingStep === 'ready' ? 'Entrar a Socrates' : 'Continuar'}</button></div>
    </section>
  </main>;
}
