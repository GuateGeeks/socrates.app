export interface AwsQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctOption: number;
  explanation: string;
}

export interface AwsLesson {
  id: string;
  title: string;
  minutes: number;
  summary: string;
  sections: { heading: string; body: string }[];
  questions: AwsQuestion[];
}

export interface AwsDomain {
  id: string;
  title: string;
  weight: number;
  lessons: AwsLesson[];
}

export interface AwsCourse {
  schemaVersion: 1;
  programId: 'aws-cloud-practitioner';
  published: true;
  examCode: string;
  title: string;
  description: string;
  sourceUrl: string;
  domains: AwsDomain[];
}

const record = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === 'object' && !Array.isArray(value);
const string = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0 && value.length <= 4000;
const id = (value: unknown): value is string => typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);

export function parseAwsCourse(value: unknown): AwsCourse | null {
  if (!record(value) || value.schemaVersion !== 1 || value.programId !== 'aws-cloud-practitioner'
    || value.published !== true || !string(value.examCode) || !string(value.title)
    || !string(value.description) || !string(value.sourceUrl)
    || !/^https:\/\//.test(value.sourceUrl) || !Array.isArray(value.domains) || value.domains.length === 0) return null;
  const domainIds = new Set<string>();
  const lessonIds = new Set<string>();
  const questionIds = new Set<string>();
  for (const domain of value.domains) {
    if (!record(domain) || !id(domain.id) || domainIds.has(domain.id) || !string(domain.title)
      || typeof domain.weight !== 'number' || domain.weight <= 0 || domain.weight > 100
      || !Array.isArray(domain.lessons) || domain.lessons.length === 0) return null;
    domainIds.add(domain.id);
    for (const lesson of domain.lessons) {
      if (!record(lesson) || !id(lesson.id) || lessonIds.has(lesson.id) || !string(lesson.title)
        || !Number.isInteger(lesson.minutes) || (lesson.minutes as number) < 1 || !string(lesson.summary)
        || !Array.isArray(lesson.sections) || lesson.sections.length === 0
        || !lesson.sections.every((section: unknown) => record(section) && string(section.heading) && string(section.body))
        || !Array.isArray(lesson.questions) || lesson.questions.length === 0) return null;
      lessonIds.add(lesson.id);
      for (const question of lesson.questions) {
        if (!record(question) || !id(question.id) || questionIds.has(question.id)
          || !string(question.prompt) || !string(question.explanation)
          || !Array.isArray(question.options) || question.options.length < 2 || question.options.length > 6
          || !question.options.every(string) || !Number.isInteger(question.correctOption)
          || (question.correctOption as number) < 0 || (question.correctOption as number) >= question.options.length) return null;
        questionIds.add(question.id);
      }
    }
  }
  return value as unknown as AwsCourse;
}

export function findAwsLesson(course: AwsCourse, lessonId: string): { domain: AwsDomain; lesson: AwsLesson } | null {
  for (const domain of course.domains) {
    const lesson = domain.lessons.find((item) => item.id === lessonId);
    if (lesson) return { domain, lesson };
  }
  return null;
}
