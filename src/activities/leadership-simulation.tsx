import { useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Button, Rich } from '@/design-system/components';
import { Icon } from '@/design-system/icons';

interface LeadershipOption { id: string; text: string; correct: boolean }
export interface LeadershipSimulationProps {
  scenario: string;
  instructions: LeadershipOption[];
  rolePlans: LeadershipOption[];
  adaptations: LeadershipOption[];
  sequences: LeadershipOption[];
  response: string;
}
export interface LeadershipSimulationValue {
  instructionId?: string;
  rolePlanId?: string;
  adaptationId?: string;
  sequenceId?: string;
  verified: boolean;
}

const groups = [
  ['instructionId', '1. Da la instrucción', 'instructions'],
  ['rolePlanId', '2. Abre y rota los roles', 'rolePlans'],
  ['adaptationId', '3. Adapta con seguridad', 'adaptations'],
  ['sequenceId', '4. Ordena la dirección', 'sequences'],
] as const;

const selectedCorrect = (options: LeadershipOption[], id?: string) => options.some((option) => option.id === id && option.correct);

function hasCorrectLeadershipSequence(props: LeadershipSimulationProps, value: LeadershipSimulationValue) {
  return selectedCorrect(props.instructions, value.instructionId)
    && selectedCorrect(props.rolePlans, value.rolePlanId)
    && selectedCorrect(props.adaptations, value.adaptationId)
    && selectedCorrect(props.sequences, value.sequenceId);
}

function LeadershipSimulation({ props, value, onChange, status }: ActivityProps<LeadershipSimulationProps, LeadershipSimulationValue>) {
  const current = value ?? { verified: false };
  const locked = status === 'correct' || status === 'revealed';
  const complete = groups.every(([field]) => Boolean(current[field]));
  const [announcement, setAnnouncement] = useState('');
  const choose = (field: typeof groups[number][0], id: string) => {
    if (locked) return;
    onChange({ ...current, [field]: id, verified: false });
    setAnnouncement('');
  };
  const verify = () => {
    if (!complete || locked) return;
    const verified = { ...current, verified: true };
    onChange(verified);
    setAnnouncement(hasCorrectLeadershipSequence(props, verified)
      ? 'El equipo simulado respondió a tus indicaciones.'
      : 'El equipo simulado pide revisar las indicaciones antes de continuar.');
  };
  return (
    <div className="ds-stack act-leadership">
      <div className="act-scene"><Icon name="UsersRound" size={30} /><Rich text={`**Simulación individual:** ${props.scenario}`} /></div>
      {groups.map(([field, label, source]) => (
        <fieldset key={field} className="act-leadership__group" disabled={locked}>
          <legend>{label}</legend>
          {props[source].map((option) => (
            <label key={option.id} className="act-leadership__option">
              <input type="radio" name={field} checked={current[field] === option.id} onChange={() => choose(field, option.id)} />
              <span>{option.text}</span>
            </label>
          ))}
        </fieldset>
      ))}
      <Button block variant="secondary" disabled={!complete || locked} onClick={verify}>
        <Icon name="Play" size={18} /> Ejecutar indicaciones y verificar respuesta
      </Button>
      {current.verified && (
        <div className="act-leadership__response">
          <Icon name={hasCorrectLeadershipSequence(props, current) ? 'CircleCheck' : 'CircleAlert'} size={20} />
          <Rich text={hasCorrectLeadershipSequence(props, current)
            ? props.response
            : 'El equipo simulado se detiene: revisa la instrucción, el acceso igual a roles, la adaptación segura y la rotación.'} />
        </div>
      )}
      <p className="sr-only" aria-live="polite">{announcement}</p>
    </div>
  );
}

const solution = (props: LeadershipSimulationProps): LeadershipSimulationValue => ({
  instructionId: props.instructions.find((option) => option.correct)?.id,
  rolePlanId: props.rolePlans.find((option) => option.correct)?.id,
  adaptationId: props.adaptations.find((option) => option.correct)?.id,
  sequenceId: props.sequences.find((option) => option.correct)?.id,
  verified: true,
});

export default defineActivity<LeadershipSimulationProps, LeadershipSimulationValue>({
  type: 'leadership-simulation', label: 'Simulación de liderazgo', icon: 'UsersRound',
  description: 'Dirige una rutina simulada con instrucciones, roles iguales, adaptación, rotación y respuesta visible.',
  graded: true, Component: LeadershipSimulation,
  isReady: (_props, value) => Boolean(value?.instructionId && value.rolePlanId && value.adaptationId && value.sequenceId && value.verified),
  check: (props, value) => {
    const correct = value.verified && hasCorrectLeadershipSequence(props, value);
    return { correct, score: correct ? 1 : 0, feedback: 'Revisa la instrucción, la igualdad de roles, la adaptación segura y la rotación.' };
  },
  solution, testSolve: solution,
  validate: (props) => groups.flatMap(([, label, source]) => {
    const options = props[source];
    return options.length < 2 || options.filter((option) => option.correct).length !== 1 ? [`${label}: requiere varias opciones y una correcta`] : [];
  }),
});
