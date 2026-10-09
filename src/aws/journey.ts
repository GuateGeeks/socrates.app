import type { AwsCourse, AwsLesson } from './course';
import type { AwsProgress } from './progress';

export interface AwsMilestone { id: string; title: string; description: string; earned: boolean }

export function awsJourney(course: AwsCourse, progress: AwsProgress) {
  const domains = course.domains.map(domain => ({
    ...domain,
    completed: domain.lessons.filter(lesson => !!progress.lessons[lesson.id]).length,
    total: domain.lessons.length,
  }));
  const lessons = course.domains.flatMap(domain => domain.lessons);
  const completed = domains.reduce((sum, domain) => sum + domain.completed, 0);
  const next: AwsLesson | undefined = lessons.find(lesson => !progress.lessons[lesson.id]);
  const milestones: AwsMilestone[] = [
    { id: 'first-lesson', title: 'Primer paso', description: 'Completa tu primera lección', earned: completed >= 1 },
    { id: 'first-domain', title: 'Un dominio recorrido', description: 'Completa todas las lecciones de un dominio', earned: domains.some(domain => domain.completed === domain.total) },
    { id: 'halfway', title: 'A mitad de camino', description: 'Completa la mitad de las lecciones', earned: completed >= Math.ceil(lessons.length / 2) },
    { id: 'all-lessons', title: 'Ruta de estudio completa', description: 'Completa todas las lecciones del programa', earned: completed === lessons.length },
  ];
  return { completed, total: lessons.length, domains, next, milestones, earned: milestones.filter(milestone => milestone.earned) };
}
