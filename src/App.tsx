import { useEffect, useState } from 'react';
import { href, useRoute, type Route } from '@/core/router';
import { useProgress } from '@/core/progress';
import { setReducedMotion } from '@/design-system/motion';
import { configureFeedback } from '@/design-system/feedback';
import { Icon } from '@/design-system/icons';
import { getLesson, getMission } from '@/content';
import { Home } from '@/screens/Home';
import { Year } from '@/screens/Year';
import { MissionScreen } from '@/screens/MissionScreen';
import { LessonPlayer } from '@/screens/LessonPlayer';
import { Repaso } from '@/screens/Repaso';
import { Explorar } from '@/screens/Explorar';
import { Materias } from '@/screens/Materias';
import { Cuaderno } from '@/screens/Cuaderno';
import { Perfil } from '@/screens/Perfil';
import { Logros } from '@/screens/Logros';
import { Docente } from '@/screens/Docente';
import { Medios } from '@/screens/Medios';
import { Sistema } from '@/screens/Sistema';
import { Ajustes } from '@/screens/Ajustes';
import { activateUpdate } from '@/pwa/service-worker';

const TABS: { route: Route; icon: string; label: string; match: Route['name'][] }[] = [
  { route: { name: 'home' }, icon: 'House', label: 'Hoy', match: ['home', 'repaso'] },
  { route: { name: 'anio' }, icon: 'Map', label: 'Mi año', match: ['anio', 'mission'] },
  { route: { name: 'materias' }, icon: 'LibraryBig', label: 'Materias', match: ['materias', 'materia', 'explorar'] },
  { route: { name: 'cuaderno' }, icon: 'NotebookPen', label: 'Cuaderno', match: ['cuaderno'] },
  { route: { name: 'perfil' }, icon: 'CircleUser', label: 'Perfil', match: ['perfil', 'logros', 'docente', 'medios', 'sistema', 'ajustes'] },
];

export function App() {
  const route = useRoute();
  const settings = useProgress((p) => p.settings);
  const [updateWorker, setUpdateWorker] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    const ready = (event: Event) => setUpdateWorker((event as CustomEvent<ServiceWorker>).detail);
    window.addEventListener('socrates:update-ready', ready);
    return () => window.removeEventListener('socrates:update-ready', ready);
  }, []);

  useEffect(() => {
    setReducedMotion(settings.reducedMotion);
    configureFeedback({ sound: settings.sound, haptics: settings.haptics });
    const root = document.documentElement;
    if (settings.theme === 'auto') delete root.dataset.theme; else root.dataset.theme = settings.theme;
  }, [settings]);

  let screen;
  switch (route.name) {
    case 'mission': {
      const m = getMission(route.missionId);
      screen = m ? <MissionScreen key={m.id} mission={m} /> : <Year />;
      break;
    }
    case 'lesson': {
      const x = getLesson(route.missionId, route.lessonId);
      return x ? <LessonPlayer key={`${x.mission.id}/${x.lesson.id}`} mission={x.mission} lesson={x.lesson} /> : <Home />;
    }
    case 'anio': screen = <Year />; break;
    case 'repaso': screen = <Repaso />; break;
    case 'explorar': screen = <Explorar key={route.area ?? 'all'} area={route.area} />; break;
    case 'materias': screen = <Materias />; break;
    case 'materia': screen = <Materias key={route.area} area={route.area} />; break;
    case 'cuaderno': screen = <Cuaderno />; break;
    case 'perfil': screen = <Perfil />; break;
    case 'logros': screen = <Logros />; break;
    case 'docente': screen = <Docente />; break;
    case 'medios': screen = <Medios />; break;
    case 'sistema': screen = <Sistema />; break;
    case 'ajustes': screen = <Ajustes />; break;
    default: screen = <Home />;
  }
  return (
    <>
      {screen}
      {updateWorker && <aside className="pwa-update" role="status"><span>Hay una nueva versión lista.</span><button onClick={() => activateUpdate(updateWorker)}>Actualizar</button></aside>}
      <footer className="ds-tabbar">
        <nav aria-label="Navegación principal">
          {TABS.map((tab) => (
            <a key={tab.route.name} href={href(tab.route)} aria-current={tab.match.includes(route.name) ? 'page' : undefined}>
              <span aria-hidden><Icon name={tab.icon} size={24} /></span><span>{tab.label}</span>
            </a>
          ))}
        </nav>
      </footer>
    </>
  );
}
