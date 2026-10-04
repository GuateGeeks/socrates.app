import { useEffect, useState } from 'react';
import { href, navigate, type Route } from '@/core/router';
import type { LearnerProfile } from '@/core/learner-profile';
import type { ProgramId } from '@/core/programs';
import { Icon } from '@/design-system/icons';
import { Ajustes } from '@/screens/Ajustes';
import { loadAwsCourse } from './content';
import { type AwsCourse, type AwsDomain, type AwsLesson } from './course';
import { AwsLessonScreen } from './AwsLessonScreen';
import { PRACTICES } from './practice';
import { useAwsProgress } from './progress';
import './aws.css';

const DOMAIN_ICONS = ['Cloud', 'ShieldCheck', 'Server', 'Wallet'] as const;

function AwsHome({ course, name }: { course: AwsCourse; name: string }) {
  const progress = useAwsProgress();
  const lessons = course.domains.flatMap((domain) => domain.lessons);
  const completed = lessons.filter((lesson) => progress.lessons[lesson.id]).length;
  const next = lessons.find((lesson) => !progress.lessons[lesson.id]) ?? lessons[0];
  return <div className="aws-page aws-stack">
    <header className="aws-hero">
      <div className="aws-hero__eyebrow"><Icon name="Cloud" size={17} /> Ruta de certificación · {course.examCode}</div>
      <h1>{name ? `Hola, ${name}` : 'Tu ruta hacia la nube'}</h1>
      <p>{course.description}</p>
      <div className="aws-hero__stats"><strong>{completed}/{lessons.length} lecciones</strong><span>{course.domains.length} dominios · Aprende a tu ritmo</span></div>
      <div className="aws-meter" role="progressbar" aria-label="Progreso del programa" aria-valuenow={completed} aria-valuemin={0} aria-valuemax={lessons.length}><span style={{ width: `${lessons.length ? completed / lessons.length * 100 : 0}%` }} /></div>
    </header>
    {next && <section className="aws-next">
      <span className="aws-kicker">{completed === lessons.length ? 'Repasa una lección' : 'Siguiente paso'}</span>
      <h2>{next.title}</h2><p>{next.summary}</p>
      <button className="aws-primary" onClick={() => navigate({ name: 'aws-lesson', lessonId: next.id })}>{completed === lessons.length ? 'Repasar' : 'Continuar'} <Icon name="ArrowRight" size={18} /></button>
    </section>}
    <section className="aws-stack"><div className="aws-section-head"><div><span className="aws-kicker">Temario</span><h2>Dominios del examen</h2></div><a href={href({ name: 'aws-curriculum' })}>Ver todo <Icon name="ArrowRight" size={16} /></a></div>
      <div className="aws-domain-grid">{course.domains.map((domain, index) => <DomainCard key={domain.id} domain={domain} index={index} completed={domain.lessons.filter((lesson) => progress.lessons[lesson.id]).length} />)}</div>
    </section>
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
  return <div className="aws-page aws-stack">
    <header className="aws-title"><span className="aws-kicker">{course.examCode}</span><h1>Tu temario</h1><p>Explora los {course.domains.length} dominios y estudia a tu ritmo.</p></header>
    {course.domains.map((domain, index) => <section key={domain.id} className="aws-module">
      <div className="aws-module__head"><span className="aws-domain__icon"><Icon name={DOMAIN_ICONS[index] ?? 'BookOpen'} size={24} /></span><div><span className="aws-kicker">DOMINIO {index + 1} · {domain.weight} %</span><h2>{domain.title}</h2></div></div>
      <div className="aws-lesson-list">{domain.lessons.map((lesson) => <LessonLink key={lesson.id} lesson={lesson} done={!!progress.lessons[lesson.id]} />)}</div>
    </section>)}
  </div>;
}

function AwsDomain({ domain, course }: { domain: AwsDomain; course: AwsCourse }) {
  const progress = useAwsProgress();
  const index = course.domains.findIndex((item) => item.id === domain.id);
  return <div className="aws-page aws-stack">
    <a className="aws-back" href={href({ name: 'aws-curriculum' })}><Icon name="ArrowLeft" size={18} /> Volver al temario</a>
    <header className="aws-title"><span className="aws-kicker">DOMINIO {index + 1} · {domain.weight} % DEL EXAMEN</span><h1>{domain.title}</h1><p>Explora los conceptos, conecta ideas en una práctica guiada y comprueba lo aprendido.</p></header>
    {domain.lessons.filter(lesson => PRACTICES[lesson.id]).map(lesson => <section className="aws-next" key={lesson.id}><span className="aws-kicker">Aprende haciendo</span><h2>{PRACTICES[lesson.id].title}</h2><p>{PRACTICES[lesson.id].scenario}</p><a className="aws-primary" href={href({ name: 'aws-lesson', lessonId: lesson.id })}>Explorar y practicar <Icon name="ArrowRight" size={18} /></a></section>)}
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
  const total = course?.domains.reduce((sum, domain) => sum + domain.lessons.length, 0) ?? 0;
  const done = course?.domains.flatMap((domain) => domain.lessons).filter((lesson) => progress.lessons[lesson.id]).length ?? 0;
  return <div className="aws-page aws-stack"><header className="aws-title"><span className="aws-kicker">MI PERFIL</span><h1>{profile.displayName || 'Estudiante'}</h1><p>Inscrito en AWS Certified Cloud Practitioner</p></header><section className="aws-module aws-profile-stats"><span><strong>{done}/{total}</strong> lecciones completadas</span><span><strong>{profile.enrolledPrograms.length}</strong> programas elegidos</span></section><a className="aws-settings-link" href={href({ name: 'ajustes' })}><Icon name="Settings" size={23} /><span><strong>Ajustes</strong><small>Programa, perfil y preferencias</small></span><Icon name="ChevronRight" size={20} /></a></div>;
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
  else if (route.name === 'aws-domain') {
    const domain = course.domains.find((item) => item.id === route.domainId);
    screen = domain ? <AwsDomain domain={domain} course={course} /> : <AwsCurriculum course={course} />;
  } else if (route.name === 'aws-curriculum') screen = <AwsCurriculum course={course} />;
  else screen = <AwsHome course={course} name={profile.displayName} />;

  const tabs: { route: Route; label: string; icon: string; active: boolean }[] = [
    { route: { name: 'home' }, label: 'Inicio', icon: 'House', active: route.name === 'home' },
    { route: { name: 'aws-curriculum' }, label: 'Temario', icon: 'LibraryBig', active: ['aws-curriculum', 'aws-domain', 'aws-lesson'].includes(route.name) },
    { route: { name: 'perfil' }, label: 'Perfil', icon: 'CircleUser', active: ['perfil', 'ajustes'].includes(route.name) },
  ];
  return <div className="aws-app">{screen}<footer className="ds-tabbar"><nav aria-label="Navegación AWS">{tabs.map((tab) => <a key={tab.label} href={href(tab.route)} aria-current={tab.active ? 'page' : undefined}><span aria-hidden><Icon name={tab.icon} size={24} /></span><span>{tab.label}</span></a>)}</nav></footer></div>;
}
