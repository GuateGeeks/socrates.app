import { useEffect, useState } from 'react';

/** Router por hash (funciona en hosting estático, file:// y PWA offline). */
export type Route =
  | { name: 'home' }
  | { name: 'anio' }
  | { name: 'mission'; missionId: string }
  | { name: 'lesson'; missionId: string; lessonId: string }
  | { name: 'repaso' }
  | { name: 'explorar'; area?: string }
  | { name: 'materias' }
  | { name: 'materia'; area: string }
  | { name: 'cuaderno' }
  | { name: 'perfil' }
  | { name: 'logros' }
  | { name: 'docente' }
  | { name: 'medios' }
  | { name: 'sistema' }
  | { name: 'ajustes' }
  | { name: 'encuesta-beta' }
  | { name: 'aws-curriculum' }
  | { name: 'aws-domain'; domainId: string }
  | { name: 'aws-lesson'; lessonId: string };

export function parse(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  switch (parts[0]) {
    case 'anio': return { name: 'anio' };
    case 'mision': case 'semana': return parts[1] ? { name: 'mission', missionId: parts[1] } : { name: 'anio' };
    case 'leccion': return parts[1] && parts[2] ? { name: 'lesson', missionId: parts[1], lessonId: parts[2] } : { name: 'home' };
    case 'repaso': return { name: 'repaso' };
    case 'explorar': return parts[1] ? { name: 'materia', area: parts[1] } : { name: 'materias' };
    case 'materias': return { name: 'materias' };
    case 'materia': return parts[1] ? { name: 'materia', area: parts[1] } : { name: 'materias' };
    case 'cuaderno': return { name: 'cuaderno' };
    case 'perfil': return { name: 'perfil' };
    case 'logros': return { name: 'logros' };
    case 'docente': case 'medios': case 'sistema': return { name: 'perfil' };
    case 'ajustes': return { name: 'ajustes' };
    case 'encuesta-beta': return { name: 'encuesta-beta' };
    case 'aws-temario': return { name: 'aws-curriculum' };
    case 'aws-ruta': return { name: 'aws-curriculum' };
    case 'aws-dominio': return parts[1] ? { name: 'aws-domain', domainId: parts[1] } : { name: 'aws-curriculum' };
    case 'aws-leccion': return parts[1] ? { name: 'aws-lesson', lessonId: parts[1] } : { name: 'aws-curriculum' };
    default: return { name: 'home' };
  }
}

export function href(r: Route): string {
  switch (r.name) {
    case 'home': return '#/';
    case 'mission': return `#/semana/${encodeURIComponent(r.missionId)}`;
    case 'lesson': return `#/leccion/${encodeURIComponent(r.missionId)}/${encodeURIComponent(r.lessonId)}`;
    case 'explorar': return r.area ? `#/explorar/${r.area}` : '#/explorar';
    case 'materia': return `#/materia/${r.area}`;
    case 'aws-curriculum': return '#/aws-temario';
    case 'aws-domain': return `#/aws-dominio/${encodeURIComponent(r.domainId)}`;
    case 'aws-lesson': return `#/aws-leccion/${encodeURIComponent(r.lessonId)}`;
    default: return `#/${r.name}`;
  }
}

export function navigate(r: Route) { location.hash = href(r); }

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parse(location.hash));
  useEffect(() => {
    const on = () => { setRoute(parse(location.hash)); window.scrollTo({ top: 0 }); };
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  return route;
}
