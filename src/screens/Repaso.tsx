import { useMemo, useState } from 'react';
import { useProgress, dueReviews } from '@/core/progress';
import { navigate } from '@/core/router';
import type { Lesson, Mission, StepBase } from '@/core/types';
import { getMission } from '@/content';
import { Button, Card, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { Mascot } from '@/design-system/components/Mascot';
import { LessonPlayer } from './LessonPlayer';

const MAX = 10;

/** Repaso inteligente: arma una sesión con los ejercicios vencidos de la cola Leitner. */
export function Repaso() {
  const p = useProgress((s) => s);
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const [go, setGo] = useState(false);
  const session = useMemo(() => {
    const due = dueReviews(p).slice(0, MAX);
    const steps: StepBase[] = [];
    for (const c of due) {
      const m = getMission(c.missionId);
      const s = m?.lessons.flatMap((l) => l.steps).find((x) => x.id === c.stepId) ?? m?.bank?.find((x) => x.id === c.stepId);
      if (s) steps.push({ ...s, fase: 'comprobar' });
    }
    const lesson: Lesson = { id: 'repaso', title: 'Repaso inteligente', icon: 'RefreshCw', minutes: Math.max(3, steps.length), kind: 'repaso', steps };
    const mission: Mission = { id: 'repaso', unidad: 1, temaGenerador: 'Repaso', title: 'Repaso inteligente', subtitle: '', contexto: '', ejes: [], color: 'var(--area-l1)', lessons: [lesson], badge: { id: 'repaso', name: 'Repaso', desc: '' } };
    return { lesson, mission };
  }, [go]); // eslint-disable-line react-hooks/exhaustive-deps

  if (go && session.lesson.steps.length) {
    return <LessonPlayer mission={session.mission} lesson={session.lesson} mode="review" skipIntro onExit={() => navigate({ name: 'home' })} />;
  }
  const upcoming = Object.values(p.review ?? {}).filter((c) => c.box < 5).length;
  const mastered = Object.values(p.review ?? {}).filter((c) => c.box >= 5).length;
  return (
    <div ref={ref} className="ds-page ds-stack">
      <div className="ds-row">
        <Button variant="ghost" icon onClick={() => navigate({ name: 'home' })} aria-label="Volver"><Icon name="ArrowLeft" /></Button>
        <h1>Repaso inteligente</h1>
      </div>
      <Card raised>
        <div className="ds-row">
          <Mascot mood={session.lesson.steps.length ? 'happy' : 'cheer'} size={80} />
          <div className="ds-grow">
            {session.lesson.steps.length
              ? <p><strong>{session.lesson.steps.length} ejercicios</strong> te esperan hoy. Son preguntas que te costaron antes: repasarlas ahora hará que no se te olviden.</p>
              : <p><strong>¡Todo al día!</strong> No tienes repasos pendientes hoy. Vuelve mañana o sigue con tu próxima lección.</p>}
          </div>
        </div>
      </Card>
      <div className="lc__stats" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <div className="lc__stat" style={{ borderColor: 'var(--area-l1)' }}><small>En repaso</small><strong>{upcoming}</strong></div>
        <div className="lc__stat" style={{ borderColor: 'var(--c-ok)' }}><small>Dominados</small><strong>{mastered}</strong></div>
      </div>
      {session.lesson.steps.length > 0 && <Button block size="lg" onClick={() => setGo(true)}><Icon name="Play" /> Empezar repaso</Button>}
    </div>
  );
}
