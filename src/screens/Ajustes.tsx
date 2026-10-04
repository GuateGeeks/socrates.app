import './mobile-screens.css';
import { useState } from 'react';
import { useProgress, updateProgress, resetProgress, type Settings } from '@/core/progress';
import { navigate } from '@/core/router';
import { Button, Card, SectionTitle, Toggle, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { DAILY_GOALS, updateLearnerProfile, type DailyGoal, type LearnerProfile } from '@/core/learner-profile';
import { PROGRAMS, PROGRAM_IDS, type ProgramId } from '@/core/programs';
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
        <h1>Ajustes</h1>
      </div>
      <Card>
        <SectionTitle>Perfil</SectionTitle>
        <input className="ds-input" style={{ marginTop: 8 }} value={activeProgram === 'cnb-sexto' ? p.profile.name : profile.displayName} maxLength={20} aria-label="Nombre"
          onChange={(e) => { if (activeProgram === 'cnb-sexto') updateProgress((x) => ({ ...x, profile: { ...x.profile, name: e.target.value } })); updateLearnerProfile({ displayName: e.target.value }); }} />
      </Card>
      <Card>
        <SectionTitle>Programa educativo</SectionTitle>
        <p className="ds-small ds-muted" style={{ margin: '8px 0 12px' }}>Puedes cambiar de programa. Tu avance en cada uno se conserva.</p>
        <div className="ds-stack" style={{ gap: 8 }}>
          {PROGRAM_IDS.map((id) => <Button key={id} variant={activeProgram === id ? 'primary' : 'secondary'}
            aria-pressed={activeProgram === id} onClick={() => changeProgram(id)}>
            <Icon name={PROGRAMS[id].icon} size={18} /> {PROGRAMS[id].title}
          </Button>)}
        </div>
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
        {activeProgram === 'cnb-sexto' && <Toggle label="Modo productor de contenidos" desc="Muestra las fichas de producción de imágenes y videos" checked={shownSettings.producerMode} onChange={(v) => set({ producerMode: v })} />}
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
          {activeProgram === 'cnb-sexto' && <Button variant="secondary" onClick={() => navigate({ name: 'sistema' })}><Icon name="Palette" size={18} /> Sistema de diseño y actividades</Button>}
          {!confirmReset
            ? <Button variant="ghost" onClick={() => setConfirmReset(true)}>Borrar mi progreso en este programa</Button>
            : <div className="ds-row"><Button variant="bad" onClick={() => { if (activeProgram === 'cnb-sexto') resetProgress(); else resetAwsProgress(); setConfirmReset(false); }}>Sí, borrar</Button><Button variant="secondary" onClick={() => setConfirmReset(false)}>Cancelar</Button></div>}
        </div>
      </Card>
      {activeProgram === 'cnb-sexto' && <p className="ds-xs ds-muted ds-center">Socrates Aprende · Contenido basado en el Currículo Nacional Base (CNB) de Guatemala, cnbguatemala.org (CC BY-SA 4.0).</p>}
    </div>
  );
}
