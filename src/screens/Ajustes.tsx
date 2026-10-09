import './mobile-screens.css';
import { useState } from 'react';
import { useProgress, updateProgress, resetProgress, type Settings } from '@/core/progress';
import { navigate } from '@/core/router';
import { Button, Card, SectionTitle, Toggle, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { DAILY_GOALS, updateLearnerProfile, type DailyGoal, type LearnerProfile } from '@/core/learner-profile';
import { PROGRAMS, SCHOOL_GRADES, type ProgramId } from '@/core/programs';
import { preferencesForProgram } from '@/core/program-settings';
import { resetAwsProgress } from '@/aws/progress';

export function Ajustes({ activeProgram, profile, changeProgram }: { activeProgram: ProgramId; profile: LearnerProfile; changeProgram(id: ProgramId): void }) {
  const p = useProgress((s) => s);
  const shownSettings = preferencesForProgram(activeProgram, p.settings, profile);
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const [confirmReset, setConfirmReset] = useState(false);
  const set = (patch: Partial<Settings>) => {
    if (activeProgram === 'cnb-sexto') updateProgress((x) => ({ ...x, settings: { ...x.settings, ...patch } }));
    const settings = { ...shownSettings, ...patch };
    const dailyGoal = DAILY_GOALS.includes(settings.dailyGoal as DailyGoal) ? settings.dailyGoal as DailyGoal : 50;
    const shared = { sound: settings.sound, haptics: settings.haptics, reducedMotion: settings.reducedMotion, theme: settings.theme, dailyGoal };
    updateLearnerProfile(shared);
  };
  return (
    <div ref={ref} className="ds-page ds-stack mobile-screen">
      <div className="ds-row">
        <Button variant="ghost" icon onClick={() => navigate({ name: 'perfil' })} aria-label="Volver"><Icon name="ArrowLeft" /></Button>
        <h1>Mis datos y ajustes</h1>
      </div>
      <Card>
        <SectionTitle>Quién soy</SectionTitle>
        <label htmlFor="aj-name" className="ds-small" style={{ display: 'block', marginTop: 8 }}>Tu nombre</label>
        <input id="aj-name" className="ds-input" style={{ marginTop: 8 }} value={activeProgram === 'cnb-sexto' ? p.profile.name : profile.displayName} maxLength={20}
          onChange={(e) => { if (activeProgram === 'cnb-sexto') updateProgress((x) => ({ ...x, profile: { ...x.profile, name: e.target.value } })); updateLearnerProfile({ displayName: e.target.value }); }} />
        <p className="ds-xs ds-muted" style={{ marginTop: 8 }}>Se guarda al escribir. Puedes volver aquí desde Perfil.</p>
      </Card>
      <Card>
        <SectionTitle>Mi grado escolar</SectionTitle>
        <p className="ds-small ds-muted" style={{ margin: '8px 0 12px' }}>Sexto Primaria está disponible. Los demás grados llegarán después.</p>
        <div className="ds-stack" style={{ gap: 10 }}>
          <Button variant={activeProgram === 'cnb-sexto' ? 'primary' : 'secondary'} aria-pressed={activeProgram === 'cnb-sexto'} onClick={() => changeProgram('cnb-sexto')}>
            <Icon name="BookOpen" size={18} /> {PROGRAMS['cnb-sexto'].title} · disponible
          </Button>
          <div className="settings__future-grades">
            {SCHOOL_GRADES.filter((grade) => !grade.available).map((grade) => <div key={grade.title} className="settings__future-grade" aria-disabled="true">
              <strong>{grade.title}</strong><small>Próximamente</small>
            </div>)}
          </div>
        </div>
      </Card>
      <Card>
        <SectionTitle>Formación adicional</SectionTitle>
        <p className="ds-small ds-muted" style={{ margin: '8px 0 12px' }}>AWS es un curso de certificación independiente del año escolar. Tu avance se conserva si cambias.</p>
        <Button variant={activeProgram === 'aws-cloud-practitioner' ? 'primary' : 'secondary'} aria-pressed={activeProgram === 'aws-cloud-practitioner'} onClick={() => changeProgram('aws-cloud-practitioner')}>
          <Icon name="Cloud" size={18} /> {PROGRAMS['aws-cloud-practitioner'].title}
        </Button>
      </Card>
      {activeProgram === 'cnb-sexto' && <>
      <Card>
        <SectionTitle>Mi ciclo escolar</SectionTitle>
        <div className="ds-stack" style={{ marginTop: 8, gap: 10 }}>
          <label className="ds-toggle" htmlFor="aj-start">
            <span><strong>Inicio de clases</strong><br /><span className="ds-muted ds-small">Lunes de la semana 1 (se usa para saber en qué semana vas)</span></span>
            <input id="aj-start" type="date" className="ds-input" style={{ width: 'auto', fontSize: 'var(--fs-md)' }} value={shownSettings.startDate} onChange={(e) => e.target.value && set({ startDate: e.target.value })} />
          </label>
          <div className="ds-toggle">
            <span><strong>Meta diaria</strong><br /><span className="ds-muted ds-small">Puntos que quieres ganar cada día</span></span>
            <div className="ds-row" style={{ gap: 6 }}>
              {[30, 50, 100].map((g) => <Button key={g} size="sm" variant={shownSettings.dailyGoal === g ? 'primary' : 'secondary'} onClick={() => set({ dailyGoal: g })}>{g}</Button>)}
            </div>
          </div>
        </div>
      </Card>
      </>}
      <Card>
        <SectionTitle>Experiencia</SectionTitle>
        <Toggle label="Sonidos" desc={activeProgram === 'cnb-sexto' ? 'Marimba y efectos' : 'Efectos de la interfaz'} checked={shownSettings.sound} onChange={(v) => set({ sound: v })} />
        <Toggle label="Vibración" desc="En teléfonos compatibles" checked={shownSettings.haptics} onChange={(v) => set({ haptics: v })} />
        <Toggle label="Movimiento reducido" desc="Menos animaciones" checked={shownSettings.reducedMotion} onChange={(v) => set({ reducedMotion: v })} />
        <div className="ds-toggle">
          <strong>Tema</strong>
          <div className="ds-row" style={{ gap: 6 }}>
            {(['auto', 'light', 'dark'] as const).map((th) => (
              <Button key={th} size="sm" aria-pressed={shownSettings.theme === th} variant={shownSettings.theme === th ? 'primary' : 'secondary'} onClick={() => set({ theme: th })}>{th === 'auto' ? 'Auto' : th === 'light' ? 'Claro' : 'Oscuro'}</Button>
            ))}
          </div>
        </div>
      </Card>
      <Card>
        <SectionTitle>Más</SectionTitle>
        <div className="ds-stack" style={{ marginTop: 8 }}>
          {activeProgram === 'cnb-sexto' && <Button variant="secondary" onClick={() => navigate({ name: 'encuesta-beta' })}><Icon name="MessageSquareHeart" size={18} /> Encuesta beta · comparte tu opinión</Button>}
          {!confirmReset
            ? <Button variant="ghost" onClick={() => setConfirmReset(true)}>Borrar mi progreso en este programa</Button>
            : <div className="ds-row"><Button variant="bad" onClick={() => { if (activeProgram === 'cnb-sexto') resetProgress(); else resetAwsProgress(); setConfirmReset(false); }}>Sí, borrar</Button><Button variant="secondary" onClick={() => setConfirmReset(false)}>Cancelar</Button></div>}
        </div>
      </Card>
      {activeProgram === 'cnb-sexto' && <p className="ds-xs ds-muted ds-center">Socrates Aprende · Contenido basado en el Currículo Nacional Base (CNB) de Guatemala, cnbguatemala.org (CC BY-SA 4.0).</p>}
    </div>
  );
}
