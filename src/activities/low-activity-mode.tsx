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
  restoreLabel?: string;
}

export interface LowActivityModeValue {
  performed: boolean;
  verified: boolean;
  active: boolean;
  restored: boolean;
  before: LowActivitySnapshot;
  after: LowActivitySnapshot;
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
  const restoredNow = Boolean(value && current.sound === value.before.sound
    && current.reducedMotion === value.before.reducedMotion
    && (value.restored || current.sound !== value.after.sound || current.reducedMotion !== value.after.reducedMotion));

  const activate = () => {
    const before = activateLowActivityMode();
    const afterSettings = getProgress().settings;
    const after = { sound: afterSettings.sound, reducedMotion: afterSettings.reducedMotion };
    onChange({ performed: true, verified: isLowActivityMode(after), active: isLowActivityMode(after), restored: false, before, after });
  };

  const restore = () => {
    if (!value) return;
    restoreLowActivityMode(value.before);
    onChange({ ...value, active: false, restored: true });
  };

  return (
    <div className="ds-stack act-low">
      <div className="act-low__states" aria-live="polite">
        <StatePanel title={value ? 'Antes de la práctica' : 'Estado actual'} snapshot={value?.before ?? current} />
        {value && <StatePanel title={restoredNow ? 'Estado restaurado' : 'Después de activar'} snapshot={current} />}
      </div>
      {!value || restoredNow ? (
        <Button block variant="ok" sound={false} disabled={locked} onClick={activate}>
          <Icon name="Gauge" size={20} /> {props.activateLabel ?? 'Activar modo de baja actividad'}
        </Button>
      ) : (
        <Button block variant="secondary" sound={false} onClick={restore}>
          <Icon name="RotateCcw" size={20} /> {props.restoreLabel ?? 'Restaurar estado anterior'}
        </Button>
      )}
      <p className="ds-small ds-muted">
        {value?.verified
          ? restoredNow
            ? 'Práctica realizada y verificada. El estado anterior quedó restaurado.'
            : 'Práctica realizada y verificada. Puedes conservarla o restaurar el estado anterior.'
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
  isReady: (_props, value) => Boolean(value?.performed && value.verified),
  check: (_props, value) => ({
    correct: Boolean(value.performed && value.verified && !value.after.sound && value.after.reducedMotion),
    score: value.performed && value.verified && !value.after.sound && value.after.reducedMotion ? 1 : 0,
    feedback: 'Activa el modo y verifica los dos cambios de estado antes de continuar.',
  }),
  validate: (props) => [
    props.activateLabel !== undefined && !props.activateLabel.trim() ? 'etiqueta de activación vacía' : '',
    props.restoreLabel !== undefined && !props.restoreLabel.trim() ? 'etiqueta de restauración vacía' : '',
  ].filter(Boolean),
  example: {
    fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'],
    prompt: 'Activa y verifica el modo de baja actividad. Después puedes restaurar el estado anterior.',
    props: {},
  },
});
