import { useEffect, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps, StepStatus } from '@/core/types';
import {
  activateLowActivityMode,
  completeLowActivityMaintenance,
  getProgress,
  isLowActivityMode,
  LOW_ACTIVITY_MAINTENANCE_MS,
  restoreLowActivityMode,
  startLowActivityMaintenance,
  useProgress,
  type LowActivityPracticeReceipt,
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
  proofId: string;
  action: 'activation' | 'maintenance';
  performed: boolean;
  verified: boolean;
  active: boolean;
  restored: boolean;
  before: LowActivitySnapshot;
  after: LowActivitySnapshot;
  startedAt: number;
  completedAt?: number;
  elapsedMs?: number;
  restoredAt?: number;
  restoredTo?: LowActivitySnapshot;
  maintenanceCompleted: boolean;
}

function sameSnapshot(a: LowActivitySnapshot | undefined, b: LowActivitySnapshot | undefined) {
  if (!a || !b) return a === b;
  return a.sound === b.sound && a.reducedMotion === b.reducedMotion;
}

export function lowActivityValueFromReceipt(receipt: LowActivityPracticeReceipt): LowActivityModeValue {
  return {
    proofId: receipt.id,
    action: receipt.action,
    performed: true,
    verified: receipt.action === 'activation' || receipt.maintenanceCompleted,
    active: !receipt.restored,
    restored: receipt.restored,
    before: { ...receipt.before },
    after: { ...receipt.after },
    startedAt: receipt.startedAt,
    ...(receipt.completedAt !== undefined
      ? { completedAt: receipt.completedAt, elapsedMs: receipt.completedAt - receipt.startedAt }
      : {}),
    ...(receipt.restoredAt !== undefined ? { restoredAt: receipt.restoredAt } : {}),
    ...(receipt.restoredTo ? { restoredTo: { ...receipt.restoredTo } } : {}),
    maintenanceCompleted: receipt.maintenanceCompleted,
  };
}

export function isValidLowActivityPractice(value: LowActivityModeValue | undefined, now = Date.now()) {
  const progress = getProgress();
  const proof = progress.lowActivityPractice;
  if (!value?.performed || !value.verified || !proof || value.proofId !== proof.id
    || value.action !== proof.action || value.startedAt !== proof.startedAt
    || value.completedAt !== proof.completedAt || value.restoredAt !== proof.restoredAt
    || value.restored !== proof.restored || value.maintenanceCompleted !== proof.maintenanceCompleted
    || !sameSnapshot(value.before, proof.before) || !sameSnapshot(value.after, proof.after)
    || !sameSnapshot(value.restoredTo, proof.restoredTo)
    || !Number.isFinite(proof.startedAt) || proof.startedAt > now
    || proof.completedAt === undefined || !Number.isFinite(proof.completedAt) || proof.completedAt > now
    || proof.completedAt < proof.startedAt) return false;

  const current = { sound: progress.settings.sound, reducedMotion: progress.settings.reducedMotion };
  if (proof.action === 'activation') {
    if (isLowActivityMode(proof.before) || !isLowActivityMode(proof.after)
      || sameSnapshot(proof.before, proof.after) || proof.maintenanceCompleted) return false;
    if (proof.restored) {
      return !value.active && proof.restoredAt !== undefined && proof.restoredAt >= proof.completedAt
        && proof.restoredAt <= now && sameSnapshot(proof.restoredTo, proof.before)
        && sameSnapshot(current, proof.before);
    }
    return value.active && isLowActivityMode(current) && sameSnapshot(current, proof.after);
  }

  return value.active && !value.restored && proof.maintenanceCompleted
    && isLowActivityMode(proof.before) && isLowActivityMode(proof.after) && isLowActivityMode(current)
    && proof.completedAt - proof.startedAt >= LOW_ACTIVITY_MAINTENANCE_MS
    && value.elapsedMs === proof.completedAt - proof.startedAt;
}

export function canRestoreLowActivityPractice(status: StepStatus, value: Pick<LowActivityModeValue, 'action' | 'restored'> | undefined) {
  return status !== 'correct' && status !== 'revealed' && value?.action === 'activation' && !value.restored;
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
  const proof = useProgress((p) => p.lowActivityPractice);
  const current = { sound: settings.sound, reducedMotion: settings.reducedMotion };
  const locked = status === 'correct' || status === 'revealed';
  const [maintenanceProofId, setMaintenanceProofId] = useState<string | null>(() =>
    proof?.action === 'maintenance' && !proof.maintenanceCompleted ? proof.id : null);
  const [clock, setClock] = useState(() => Date.now());
  const [announcement, setAnnouncement] = useState('');
  const [maintenanceInterrupted, setMaintenanceInterrupted] = useState(false);
  const maintaining = maintenanceProofId !== null;
  const maintenanceStart = proof?.id === maintenanceProofId ? proof.startedAt : undefined;
  const remainingSeconds = maintenanceStart === undefined
    ? 0
    : Math.max(0, Math.ceil((LOW_ACTIVITY_MAINTENANCE_MS - (clock - maintenanceStart)) / 1000));
  const restoredNow = Boolean(value?.restored && sameSnapshot(current, value.before));
  const maintenanceComplete = value?.action === 'maintenance' && isValidLowActivityPractice(value);

  useEffect(() => {
    if (!maintaining) return;
    const timer = window.setInterval(() => setClock(Date.now()), 250);
    return () => window.clearInterval(timer);
  }, [maintaining]);

  useEffect(() => {
    if (!maintenanceProofId || maintenanceStart === undefined) return;
    if (!isLowActivityMode(current) || proof?.id !== maintenanceProofId) {
      setMaintenanceProofId(null);
      setMaintenanceInterrupted(true);
      setAnnouncement('La práctica se interrumpió porque el modo dejó de estar activo.');
      return;
    }
    if (clock - maintenanceStart < LOW_ACTIVITY_MAINTENANCE_MS) return;
    const completed = completeLowActivityMaintenance(maintenanceProofId);
    if (!completed) return;
    onChange(lowActivityValueFromReceipt(completed));
    setMaintenanceProofId(null);
    setAnnouncement('Mantenimiento completado y estado verificado.');
  }, [clock, current.reducedMotion, current.sound, maintenanceProofId, maintenanceStart, onChange, proof?.id]);

  const activate = () => {
    if (locked) return;
    const receipt = activateLowActivityMode();
    if (receipt) onChange(lowActivityValueFromReceipt(receipt));
  };

  const startMaintenance = () => {
    if (locked || maintaining) return;
    const receipt = startLowActivityMaintenance();
    if (!receipt) return;
    setMaintenanceInterrupted(false);
    setClock(receipt.startedAt);
    setMaintenanceProofId(receipt.id);
    setAnnouncement('Mantenimiento iniciado. El modo debe permanecer activo durante 25 segundos.');
  };

  const restore = () => {
    if (!canRestoreLowActivityPractice(status, value) || !value) return;
    const receipt = restoreLowActivityMode(value.proofId);
    if (receipt) onChange(lowActivityValueFromReceipt(receipt));
  };

  const alreadyActive = !value && isLowActivityMode(current);

  return (
    <div className="ds-stack act-low">
      <div className="act-low__states">
        <StatePanel title={value ? 'Antes de la práctica' : 'Estado actual'} snapshot={value?.before ?? current} />
        {value && <StatePanel title={restoredNow ? 'Estado restaurado' : 'Estado verificado'} snapshot={current} />}
      </div>
      {locked ? (
        <p className="act-low__locked"><Icon name="CircleCheck" size={20} /> Práctica registrada. Estado de solo lectura.</p>
      ) : alreadyActive || maintaining ? (
        <Button block variant="ok" sound={false} disabled={maintaining} onClick={startMaintenance}>
          <Icon name="Timer" size={20} /> {maintaining
            ? `Mantener el modo: ${remainingSeconds} s`
            : props.maintenanceLabel ?? 'Iniciar mantenimiento de 25 segundos'}
        </Button>
      ) : maintenanceComplete ? (
        <Button block variant="secondary" sound={false} disabled>
          <Icon name="CircleCheck" size={20} /> Mantenimiento completado
        </Button>
      ) : value?.restored ? (
        <Button block variant="secondary" sound={false} disabled>
          <Icon name="RotateCcw" size={20} /> Estado anterior restaurado
        </Button>
      ) : !value ? (
        <Button block variant="ok" sound={false} onClick={activate}>
          <Icon name="Gauge" size={20} /> {props.activateLabel ?? 'Activar modo de baja actividad'}
        </Button>
      ) : (
        <Button block variant="secondary" sound={false} onClick={restore}>
          <Icon name="RotateCcw" size={20} /> {props.restoreLabel ?? 'Restaurar antes de comprobar'}
        </Button>
      )}
      {maintaining && (
        <p className="act-low__timer" role="timer">
          <Icon name="Timer" size={19} /> Modo activo. Faltan {remainingSeconds} segundos.
        </p>
      )}
      <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
      <p className="ds-small ds-muted">
        {maintenanceInterrupted
          ? 'Vuelve a activar el modo antes de iniciar otra práctica.'
          : maintenanceComplete
            ? 'Mantenimiento completado: el modo permaneció activo durante 25 segundos y su estado quedó verificado.'
            : value?.restored
              ? 'Práctica verificada y estado anterior restaurado. Ya puedes comprobar la actividad.'
              : value?.action === 'activation'
                ? 'Práctica verificada. Antes de comprobar, elige conservar el modo o restaurar el estado anterior.'
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
  description: 'Práctica reversible con comprobante persistido de activación o mantenimiento.',
  graded: true,
  Component: LowActivityMode,
  isReady: (_props, value) => isValidLowActivityPractice(value),
  check: (_props, value) => ({
    correct: isValidLowActivityPractice(value),
    score: isValidLowActivityPractice(value) ? 1 : 0,
    feedback: 'Realiza la práctica desde este control y verifica el comprobante persistido antes de continuar.',
  }),
  validate: (props) => [
    props.activateLabel !== undefined && !props.activateLabel.trim() ? 'etiqueta de activación vacía' : '',
    props.maintenanceLabel !== undefined && !props.maintenanceLabel.trim() ? 'etiqueta de mantenimiento vacía' : '',
    props.restoreLabel !== undefined && !props.restoreLabel.trim() ? 'etiqueta de restauración vacía' : '',
  ].filter(Boolean),
  testSolve: () => {
    const progress = getProgress();
    if (isLowActivityMode(progress.settings) && progress.lowActivityPractice?.action === 'activation'
      && !progress.lowActivityPractice.restored) restoreLowActivityMode(progress.lowActivityPractice.id);
    const receipt = activateLowActivityMode();
    if (!receipt) throw new Error('El resolvedor E2E requiere una activación comprobable');
    return lowActivityValueFromReceipt(receipt);
  },
  example: {
    fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'],
    prompt: 'Activa y verifica el modo; si ya estaba activo, completa su mantenimiento durante 25 segundos.',
    props: {},
  },
});
