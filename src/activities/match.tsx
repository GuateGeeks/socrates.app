import { AssignmentBoard } from '@/ui/AssignmentBoard';
import { useMemo } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { shuffled } from './util';

export interface MatchProps {
  pairs: { id: string; left: string; right: string; leftEmoji?: string; rightEmoji?: string; leftIcon?: string; rightIcon?: string }[];
  leftTitle?: string;
  rightTitle?: string;
}
/** leftPairId → rightPairId */
type MatchValue = Record<string, string>;

function Match({ step, props, value = {}, onChange, status }: ActivityProps<MatchProps, MatchValue>) {
  const left = useMemo(() => shuffled(props.pairs, step.id + 'L'), [props.pairs, step.id]);
  const right = useMemo(() => shuffled(props.pairs, step.id + 'R'), [props.pairs, step.id]);
  return <div className="assignment-matching"><AssignmentBoard
    items={left.map(pair => ({ id: pair.id, text: pair.left, icon: pair.leftIcon, emoji: pair.leftEmoji }))}
    targets={right.map(pair => ({ id: pair.id, label: pair.right, icon: pair.rightIcon, emoji: pair.rightEmoji }))}
    value={value} onChange={onChange} oneToOne noun={props.leftTitle ?? 'Elemento'}
    locked={status === 'correct' || status === 'revealed'} checked={status === 'incorrect' || status === 'correct' || status === 'revealed'}
    incorrect={props.pairs.filter(pair => value[pair.id] !== pair.id).map(pair => pair.id)} /></div>;
}

export default defineActivity<MatchProps, MatchValue>({
  type: 'match',
  label: 'Emparejar',
  icon: 'Link',
  description: 'Unir parejas (vocabulario L2/L3, glándula–hormona, causa–efecto, organelo–función).',
  graded: true,
  Component: Match,
  isReady: (p, v) => !!v && Object.keys(v).length === p.pairs.length,
  check(p, v) {
    const right = p.pairs.filter((x) => v[x.id] === x.id).length;
    return { correct: right === p.pairs.length, score: right / p.pairs.length, feedback: right === p.pairs.length ? undefined : `${right} de ${p.pairs.length} parejas correctas.` };
  },
  solution: (p) => Object.fromEntries(p.pairs.map((x) => [x.id, x.id])),
  validate: (p) => (p.pairs.length < 2 ? ['se requieren ≥2 parejas'] : []),
});
