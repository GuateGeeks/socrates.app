import { AssignmentBoard } from '@/ui/AssignmentBoard';
import { useMemo } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { shuffled } from './util';

export interface SortProps {
  buckets: { id: string; label: string; emoji?: string; icon?: string; color?: string }[];
  items: { id: string; text: string; emoji?: string; icon?: string; bucket: string; feedback?: string }[];
  /** 'grid2' = cubetas en 2 columnas (útil para FODA, célula animal/vegetal…) */
  layout?: 'stack' | 'grid2';
}
type SortValue = Record<string, string>;

function Sort({ step, props, value = {}, onChange, status }: ActivityProps<SortProps, SortValue>) {
  const items = useMemo(() => shuffled(props.items, step.id), [props.items, step.id]);
  return <AssignmentBoard items={items} targets={props.buckets} value={value} onChange={onChange}
    locked={status === 'correct' || status === 'revealed'} checked={status === 'incorrect' || status === 'correct' || status === 'revealed'}
    incorrect={props.items.filter(item => value[item.id] !== item.bucket).map(item => item.id)} />;
}

export default defineActivity<SortProps, SortValue>({
  type: 'sort',
  label: 'Clasificar',
  icon: 'LayoutGrid',
  description: 'Arrastrar (o tocar-tocar) fichas a categorías. Sirve para clasificar, FODA, tablas de doble entrada.',
  graded: true,
  Component: Sort,
  isReady: (p, v) => !!v && p.items.every((i) => v[i.id]),
  check(p, v) {
    const bad = p.items.filter((i) => v[i.id] !== i.bucket);
    return {
      correct: bad.length === 0,
      score: (p.items.length - bad.length) / p.items.length,
      feedback: bad.length ? bad[0].feedback ?? `${bad.length === 1 ? 'Una ficha está' : `${bad.length} fichas están`} en la categoría equivocada (marcadas en rojo).` : undefined,
    };
  },
  solution: (p) => Object.fromEntries(p.items.map((i) => [i.id, i.bucket])),
  validate: (p) => p.items.filter((i) => !p.buckets.some((b) => b.id === i.bucket)).map((i) => `ítem ${i.id} → cubeta inexistente ${i.bucket}`),
  example: { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1'], prompt: 'Clasifica los alimentos', props: { buckets: [{ id: 'p', label: 'Proteínas', emoji: '🥚' }, { id: 'c', label: 'Carbohidratos', emoji: '🌽' }], items: [{ id: '1', text: 'Frijol', emoji: '🫘', bucket: 'p' }, { id: '2', text: 'Tortilla', emoji: '🫓', bucket: 'c' }] } },
});
