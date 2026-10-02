import { useEffect, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import {
  activateLowActivityMode,
  getProgress,
  isLowActivityMode,
  restoreLowActivityMode,
  useProgress,
  type LowActivitySnapshot,
} from '@/core/progress';
import { Button } from '@/design-system/components';
import { Icon } from '@/design-system/icons';

export interface LowActivityModeProps {
  activateLabel?: string;
  maintenanceLabel?: string;
  restoreLabel?: string;
}

export interface LowActivityModeValue {
  action: 'activation' | 'maintenance';
  performed: boolean;
  verified: boolean;
  active: boolean;
  restored: boolean;
  before: LowActivitySnapshot;
  after: LowActivitySnapshot;
  restoredTo?: LowActivitySnapshot;
  startedAt?: number;
  completedAt?: number;
  elapsedMs?: number;
}

export const LOW_ACTIVITY_MAINTENANCE_MS = 25_000;

function sameSnapshot(a: LowActivitySnapshot | undefined, b: LowActivitySnapshot) {
  return Boolean(a && a.sound === b.sound && a.reducedMotion === b.reducedMotion);
}

export function isValidLowActivityPractice(value: LowActivityModeValue | undefined) {
  if (!value?.performed || !value.verified) return false;

  if (value.action === 'activation') {
    const changed = !sameSnapshot(value.before, value.after);
    const beganOutsideLowMode = !isLowActivityMode(value.before);
    const activatedLowMode = isLowActivityMode(value.after);
    const validFinalState = value.restored
      ? !value.active && sameSnapshot(value.restoredTo, value.before)
      : value.active;
    return changed && beganOutsideLowMode && activatedLowMode && validFinalState;
  }

  const duration = Number(value.completedAt) - Number(value.startedAt);
  return value.action === 'maintenance'
    && value.active
    && !value.restored
    && isLowActivityMode(value.before)
    && isLowActivityMode(value.after)
    && Number.isFinite(value.startedAt)
    && Number.isFinite(value.completedAt)
    && Number.isFinite(value.elapsedMs)
    && duration >= LOW_ACTIVITY_MAINTENANCE_MS
    && value.elapsedMs === duration;
}

function stateOf(snapshot: LowActivitySnapshot) {
  return [
    { icon: snapshot.sound ? 'Volume2' : 'VolumeX', label: 'Sonido opcional', value: snapshot.sound ? 'Activado' : 'Desactivado' },
    { icon: 'Accessibility', label: 'Movimiento reducido', value: snapshot.reducedMotion ? 'Activado' : 'Desactivado' },
  ];
}

function StatePanel({ title, snapshot }: { title: string; snapshot: LowActivitySnapshot }) {
  return (
    <section className="act-low__state" aria-label={title}>
      <strong>{title}</strong>
      {stateOf(snapshot).map((item) => (
        <div className="act-low__row" key={item.label}>
          <Icon name={item.icon} size={19} />
          <span>{item.label}</span>
          <b>{item.value}</b>
        </div>
      ))}
    </section>
  );
}

function LowActivityMode({ props, value, onChange, status }: ActivityProps<LowActivityModeProps, LowActivityModeValue>) {
  const settings = useProgress((p) => p.settings);
  const current = { sound: settings.sound, reducedMotion: settings.reducedMotion };
  const locked = status === 'correct' || status === 'revealed';
  const [maintenanceStart, setMaintenanceStart] = useState<number | null>(null);
  const [clock, setClock] = useState(() => Date.now());
  const [maintenanceInterrupted, setMaintenanceInterrupted] = useState(false);
  const restoredNow = Boolean(value?.action === 'activation' && value.restored
    && sameSnapshot(current, value.before) && sameSnapshot(value.restoredTo, value.before));
  const maintaining = maintenanceStart !== null;
  const remainingSeconds = maintaining
    ? Math.max(0, Math.ceil((LOW_ACTIVITY_MAINTENANCE_MS - (clock - maintenanceStart)) / 1000))
    : 0;

  useEffect(() => {
    if (maintenanceStart === null) return;
    const timer = window.setInterval(() => setClock(Date.now()), 250);
    return () => window.clearInterval(timer);
  }, [maintenanceStart]);

  useEffect(() => {
    if (maintenanceStart === null) return;
    if (!isLowActivityMode(current)) {
      setMaintenanceStart(null);
      setMaintenanceInterrupted(true);
      return;
    }
    if (clock - maintenanceStart < LOW_ACTIVITY_MAINTENANCE_MS) return;

    const completedAt = Date.now();
    const snapshot = { ...current };
    onChange({
      action: 'maintenance', performed: true, verified: true, active: true, restored: false,
      before: snapshot, after: snapshot, startedAt: maintenanceStart, completedAt,
      elapsedMs: completedAt - maintenanceStart,
    });
    setMaintenanceStart(null);
  }, [clock, current.reducedMotion, current.sound, maintenanceStart, onChange]);

  const activate = () => {
    if (isLowActivityMode(current)) return;
    const before = activateLowActivityMode();
    const afterSettings = getProgress().settings;
    const after = { sound: afterSettings.sound, reducedMotion: afterSettings.reducedMotion };
    onChange({ action: 'activation', performed: true, verified: isLowActivityMode(after), active: isLowActivityMode(after), restored: false, before, after });
  };

  const startMaintenance = () => {
    if (!isLowActivityMode(current) || locked || maintaining) return;
    setMaintenanceInterrupted(false);
    const startedAt = Date.now();
    setClock(startedAt);
    setMaintenanceStart(startedAt);
  };

  const restore = () => {
    if (!value || value.action !== 'activation') return;
    restoreLowActivityMode(value.before);
    const restoredTo = {
      sound: getProgress().settings.sound,
      reducedMotion: getProgress().settings.reducedMotion,
    };
    onChange({ ...value, active: false, restored: true, restoredTo });
  };

  const alreadyActive = !value && isLowActivityMode(current);
  const maintenanceComplete = value?.action === 'maintenance' && isValidLowActivityPractice(value);

  return (
    <div className="ds-stack act-low">
      <div className="act-low__states" aria-live="polite">
        <StatePanel title={value ? 'Antes de la práctica' : 'Estado actual'} snapshot={value?.before ?? current} />
        {value && <StatePanel title={restoredNow ? 'Estado restaurado' : 'Estado verificado'} snapshot={current} />}
      </div>
      {alreadyActive || maintaining ? (
        <Button block variant="ok" sound={false} disabled={locked || maintaining} onClick={startMaintenance}>
          <Icon name="Timer" size={20} /> {maintaining
            ? `Mantener el modo: ${remainingSeconds} s`
            : props.maintenanceLabel ?? 'Iniciar mantenimiento de 25 segundos'}
        </Button>
      ) : maintenanceComplete ? (
        <Button block variant="secondary" sound={false} disabled>
          <Icon name="CircleCheck" size={20} /> Mantenimiento completado
        </Button>
      ) : !value || restoredNow ? (
        <Button block variant="ok" sound={false} disabled={locked} onClick={activate}>
          <Icon name="Gauge" size={20} /> {props.activateLabel ?? 'Activar modo de baja actividad'}
        </Button>
      ) : (
        <Button block variant="secondary" sound={false} onClick={restore}>
          <Icon name="RotateCcw" size={20} /> {props.restoreLabel ?? 'Restaurar estado anterior'}
        </Button>
      )}
      {maintaining && (
        <p className="act-low__timer" role="timer" aria-live="polite" aria-atomic="true">
          <Icon name="Timer" size={19} /> Modo activo. Faltan {remainingSeconds} segundos.
        </p>
      )}
      <p className="ds-small ds-muted">
        {maintenanceInterrupted
          ? 'El modo dejó de estar activo. Vuelve a activarlo antes de iniciar otra práctica.'
          : maintenanceComplete
            ? 'Mantenimiento completado: el modo permaneció activo durante 25 segundos y su estado quedó verificado.'
          : value?.verified
          ? restoredNow
            ? 'Práctica realizada y verificada. El estado anterior quedó restaurado.'
            : 'Práctica realizada y verificada. Puedes conservarla o restaurar el estado anterior.'
          : alreadyActive || maintaining
            ? 'Como el modo ya estaba activo, mantenlo durante el intervalo y verifica que siga activo. Esta práctica no cuantifica ahorro.'
            : 'La acción desactiva el sonido opcional y activa movimiento reducido. No modifica vibración, tema ni otros ajustes.'}
      </p>
    </div>
  );
}

export default defineActivity<LowActivityModeProps, LowActivityModeValue>({
  type: 'low-activity-mode',
  label: 'Modo de baja actividad',
  icon: 'Gauge',
  description: 'Práctica reversible que persiste sonido opcional desactivado y movimiento reducido activado.',
  graded: true,
  Component: LowActivityMode,
  isReady: (_props, value) => isValidLowActivityPractice(value),
  check: (_props, value) => ({
    correct: isValidLowActivityPractice(value),
    score: isValidLowActivityPractice(value) ? 1 : 0,
    feedback: 'Activa y verifica un cambio real, o completa 25 segundos de mantenimiento si el modo ya estaba activo.',
  }),
  validate: (props) => [
    props.activateLabel !== undefined && !props.activateLabel.trim() ? 'etiqueta de activación vacía' : '',
    props.maintenanceLabel !== undefined && !props.maintenanceLabel.trim() ? 'etiqueta de mantenimiento vacía' : '',
    props.restoreLabel !== undefined && !props.restoreLabel.trim() ? 'etiqueta de restauración vacía' : '',
  ].filter(Boolean),
  example: {
    fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'],
    prompt: 'Activa y verifica el modo; si ya estaba activo, completa su mantenimiento durante 25 segundos.',
    props: {},
  },
});
