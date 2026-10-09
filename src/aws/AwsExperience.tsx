import { useEffect, useState } from 'react';
import { href, navigate, type Route } from '@/core/router';
import type { LearnerProfile } from '@/core/learner-profile';
import type { ProgramId } from '@/core/programs';
import { Icon } from '@/design-system/icons';
import { useReturnPosition } from '@/ui/Pagination';
import { Ajustes } from '@/screens/Ajustes';
import { loadAwsCourse } from './content';
import { type AwsCourse, type AwsDomain, type AwsLesson } from './course';
import { AwsLessonScreen } from './AwsLessonScreen';
import { PRACTICES } from './practice';
import { useAwsProgress } from './progress';
import { awsJourney } from './journey';
import './aws.css';

const DOMAIN_ICONS = ['Cloud', 'ShieldCheck', 'Server', 'Wallet'] as const;

function AwsHome({ course, name }: { course: AwsCourse; name: string }) {
  const progress = useAwsProgress();
  const journey = awsJourney(course, progress);
  const { completed, total } = journey;
  const next = journey.next ?? course.domains[0]?.lessons[0];
  const nextDomain = journey.domains.find(domain => domain.lessons.some(lesson => lesson.id === next?.id));
  return <div className="aws-page aws-stack">
    <header className="aws-hero">
      <div className="aws-hero__eyebrow"><Icon name="Cloud" size={17} /> Hoy en tu preparación · {course.examCode}</div>
      <h1>{name ? `Hola, ${name}` : 'Tu preparación en la nube'}</h1>
      <p>Avanza una lección a la vez hacia AWS Certified Cloud Practitioner.</p>
      <div className="aws-hero__stats"><strong>{completed} de {total} lecciones completadas</strong><span>{journey.earned.length} logros de estudio</span></div>
      <div className="aws-meter" role="progressbar" aria-label="Progreso del programa" aria-valuenow={completed} aria-valuemin={0} aria-valuemax={total}><span style={{ width: `${total ? completed / total * 100 : 0}%` }} /></div>
    </header>
    {next && <section className="aws-next">
      <span className="aws-kicker">{completed === total ? 'Tu siguiente repaso' : `Siguiente paso · ${nextDomain?.title ?? 'Módulos'}`}</span>
      <h2>{next.title}</h2><p>{next.summary}</p>
      <button className="aws-primary" onClick={() => navigate({ name: 'aws-lesson', lessonId: next.id })}>{completed === total ? 'Repasar lección' : 'Continuar lección'} <Icon name="ArrowRight" size={18} /></button>
    </section>}
    <div className="aws-home-links"><a href={href({ name: 'aws-curriculum' })}>Explorar módulos <Icon name="ArrowRight" size={16} /></a><a href={href({ name: 'logros' })}>Ver mis logros <Icon name="ArrowRight" size={16} /></a></div>
    <p className="aws-disclaimer">Material de estudio independiente; las preguntas de práctica no son preguntas oficiales del examen. <a href={course.sourceUrl} target="_blank" rel="noreferrer">Consulta la guía oficial de AWS <Icon name="ExternalLink" size={13} /></a></p>
  </div>;
}

function DomainCard({ domain, index, completed }: { domain: AwsDomain; index: number; completed: number }) {
  return <a className="aws-domain" href={href({ name: 'aws-domain', domainId: domain.id })}>
    <span className="aws-domain__icon"><Icon name={DOMAIN_ICONS[index] ?? 'BookOpen'} size={24} /></span>
    <span className="aws-domain__number">DOMINIO {index + 1} · {domain.weight} % del examen</span>
    <strong>{domain.title}</strong>
    <div className="aws-meter" role="progressbar" aria-label={`Progreso de ${domain.title}`} aria-valuenow={completed} aria-valuemin={0} aria-valuemax={domain.lessons.length}><span style={{ width: `${completed / domain.lessons.length * 100}%` }} /></div>
    <span className="aws-domain__foot">{completed}/{domain.lessons.length} lecciones <Icon name="ArrowUpRight" size={18} /></span>
  </a>;
}

function AwsCurriculum({ course }: { course: AwsCourse }) {
  const progress = useAwsProgress();
  useReturnPosition('aws-curriculum');
  return <div className="aws-page aws-stack">
    <header className="aws-title"><span className="aws-kicker">{course.examCode} · Contenido</span><h1>Módulos</h1><p>Elige un área para ver sus lecciones y prácticas.</p></header>
    <div className="aws-domain-grid">{course.domains.map((domain, index) => <DomainCard key={domain.id} domain={domain} index={index} completed={domain.lessons.filter(lesson => !!progress.lessons[lesson.id]).length} />)}</div>
  </div>;
}

function AwsDomain({ domain, course }: { domain: AwsDomain; course: AwsCourse }) {
  const progress = useAwsProgress();
  const index = course.domains.findIndex((item) => item.id === domain.id);
  useReturnPosition(`aws-domain-${domain.id}`);
  return <div className="aws-page aws-stack">
    <a className="aws-back" href={href({ name: 'aws-curriculum' })}><Icon name="ArrowLeft" size={18} /> Volver a módulos</a>
    <header className="aws-title"><span className="aws-kicker">DOMINIO {index + 1} · {domain.weight} % DEL EXAMEN</span><h1>{domain.title}</h1><p>Explora los conceptos, conecta ideas en una práctica guiada y comprueba lo aprendido.</p></header>
    <section className="aws-module"><h2>Lecciones</h2><div className="aws-lesson-list">{domain.lessons.map((lesson) => <LessonLink key={lesson.id} lesson={lesson} done={!!progress.lessons[lesson.id]} />)}</div></section>
  </div>;
}

function LessonLink({ lesson, done }: { lesson: AwsLesson; done: boolean }) {
  return <a className="aws-lesson-link" href={href({ name: 'aws-lesson', lessonId: lesson.id })}>
    <span className={`aws-lesson-link__status${done ? ' is-done' : ''}`}><Icon name={done ? 'Check' : 'BookOpen'} size={19} /></span>
    <span><strong>{lesson.title}</strong><small>{lesson.taskCode ? `Objetivo ${lesson.taskCode} · ` : ''}{lesson.summary} · {lesson.minutes} min{PRACTICES[lesson.id] && <span className="aws-practice-label"><Icon name="MousePointer2" size={13} /> Práctica interactiva</span>}</small></span><Icon name="ChevronRight" size={20} />
  </a>;
}

function AwsProfile({ profile, course }: { profile: LearnerProfile; course: AwsCourse | null }) {
  const progress = useAwsProgress();
  const journey = course ? awsJourney(course, progress) : null;
  return <div className="aws-page aws-stack"><header className="aws-title"><span className="aws-kicker">MI PERFIL</span><h1>{profile.displayName || 'Estudiante'}</h1><p>Mi preparación para AWS Certified Cloud Practitioner</p></header><section className="aws-module aws-profile-stats"><span><strong>{journey?.completed ?? 0}/{journey?.total ?? 0}</strong> lecciones completadas</span><span><strong>{journey?.earned.length ?? 0}</strong> logros de estudio</span></section><a className="aws-settings-link" href={href({ name: 'logros' })}><Icon name="Award" size={23} /><span><strong>Mis logros</strong><small>Resultados y avance por áreas</small></span><Icon name="ChevronRight" size={20} /></a><a className="aws-settings-link" href={href({ name: 'ajustes' })}><Icon name="Settings" size={23} /><span><strong>Ajustes</strong><small>Programa, perfil y preferencias</small></span><Icon name="ChevronRight" size={20} /></a></div>;
}

function AwsAchievements({ course }: { course: AwsCourse }) {
  const journey = awsJourney(course, useAwsProgress());
  return <div className="aws-page aws-stack"><a className="aws-back" href={href({ name: 'perfil' })}><Icon name="ArrowLeft" size={18} /> Volver a perfil</a><header className="aws-title"><span className="aws-kicker">MI PREPARACIÓN</span><h1>Mis logros</h1><p>Estos logros reflejan tus lecciones y resultados guardados en esta plataforma.</p></header><section className="aws-achievement-stats"><div><strong>{journey.completed}/{journey.total}</strong><span>Lecciones completadas</span></div><div><strong>{journey.domains.filter(domain => domain.completed === domain.total).length}/{journey.domains.length}</strong><span>Áreas recorridas</span></div><div><strong>{journey.earned.length}/{journey.milestones.length}</strong><span>Logros de estudio</span></div></section><section className="aws-module"><h2>Avance por área</h2>{journey.domains.map((domain, index) => <div className="aws-achievement-area" key={domain.id}><span><strong>{index + 1}. {domain.title}</strong><small>{domain.completed} de {domain.total} lecciones</small></span><div className="aws-meter" role="progressbar" aria-label={`Progreso de ${domain.title}`} aria-valuenow={domain.completed} aria-valuemin={0} aria-valuemax={domain.total}><span style={{ width: `${domain.completed / domain.total * 100}%` }} /></div></div>)}</section><section className="aws-module"><h2>Logros de estudio</h2><div className="aws-milestone-grid">{journey.milestones.map(item => <div key={item.id} className={`aws-milestone${item.earned ? ' is-earned' : ''}`}><span><Icon name={item.earned ? 'Award' : 'LockKeyhole'} size={22} /></span><strong>{item.title}</strong><small>{item.description}</small><em>{item.earned ? 'Conseguido' : 'Por conseguir'}</em></div>)}</div></section><p className="aws-disclaimer">Estos logros muestran tu avance de estudio; no son una certificación oficial de AWS.</p></div>;
}

export function AwsExperience({ route, profile, changeProgram }: { route: Route; profile: LearnerProfile; changeProgram(id: ProgramId): void }) {
  const [course, setCourse] = useState<AwsCourse | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const retry = () => { setLoading(true); setError(''); void loadAwsCourse().then(setCourse).catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'No se pudo cargar el programa.')).finally(() => setLoading(false)); };
  useEffect(() => { retry(); }, []);

  let screen;
  if (route.name === 'ajustes') screen = <Ajustes activeProgram="aws-cloud-practitioner" profile={profile} changeProgram={changeProgram} />;
  else if (route.name === 'perfil') screen = <AwsProfile profile={profile} course={course} />;
  else if (loading) screen = <div className="aws-page aws-state" role="status"><Icon name="Cloud" size={36} /><h1>Cargando tu programa</h1><p>Preparando tus lecciones y actividades.</p></div>;
  else if (error || !course) screen = <div className="aws-page aws-state" role="alert"><Icon name="CloudOff" size={36} /><h1>Contenido no disponible</h1><p>{error || 'No se pudo cargar el programa.'}</p><button className="aws-primary" onClick={retry}>Volver a intentar</button></div>;
  else if (route.name === 'aws-lesson') screen = <AwsLessonScreen key={route.lessonId} course={course} lessonId={route.lessonId} />;
  else if (route.name === 'logros') screen = <AwsAchievements course={course} />;
  else if (route.name === 'aws-domain') {
    const domain = course.domains.find((item) => item.id === route.domainId);
    screen = domain ? <AwsDomain domain={domain} course={course} /> : <AwsCurriculum course={course} />;
  } else if (route.name === 'aws-curriculum') screen = <AwsCurriculum course={course} />;
  else screen = <AwsHome course={course} name={profile.displayName} />;

  const tabs: { route: Route; label: string; icon: string; active: boolean }[] = [
    { route: { name: 'home' }, label: 'Hoy', icon: 'House', active: route.name === 'home' },
    { route: { name: 'aws-curriculum' }, label: 'Módulos', icon: 'LibraryBig', active: ['aws-curriculum', 'aws-domain', 'aws-lesson'].includes(route.name) },
    { route: { name: 'perfil' }, label: 'Perfil', icon: 'CircleUser', active: ['perfil', 'logros', 'ajustes'].includes(route.name) },
  ];
  return <div className="aws-app">{screen}{route.name !== 'aws-lesson' && <footer className="ds-tabbar"><nav aria-label="Navegación AWS">{tabs.map((tab) => <a key={tab.label} href={href(tab.route)} aria-current={tab.active ? 'page' : undefined}><span aria-hidden><Icon name={tab.icon} size={24} /></span><span>{tab.label}</span></a>)}</nav></footer>}</div>;
}
