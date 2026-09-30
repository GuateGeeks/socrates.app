/**
 * i18n de interfaz. El contenido pedagógico vive en los paquetes de contenido (src/content/*)
 * y puede traducirse por separado (p.ej. un paquete K'iche' o Kaqchikel del mismo curso).
 * Para agregar un idioma: copiar `es`, traducir valores y registrar en `dictionaries`.
 */
const es = {
  'app.name': 'Socrates Aprende',
  'nav.home': 'Camino',
  'nav.logros': 'Logros',
  'nav.docente': 'Docente',
  'nav.ajustes': 'Ajustes',
  'home.hello': 'Hola{name}',
  'home.sub': 'Sexto Primaria · CNB Guatemala',
  'home.continue': 'Continuar',
  'home.start': 'Empezar',
  'home.unidad': 'Unidad {n}',
  'mission.lessons': 'Lecciones',
  'mission.wheelHint': 'Toca un área de la rueda para ver qué aprenderás',
  'mission.contexto': 'En tu comunidad',
  'lesson.check': 'Comprobar',
  'lesson.continue': 'Continuar',
  'lesson.tryAgain': 'Intentar de nuevo',
  'lesson.showSolution': 'Ver solución',
  'lesson.hint': 'Pista',
  'lesson.correct': '¡Excelente!',
  'lesson.incorrect': 'Casi… ¡revisa y vuelve a intentar!',
  'lesson.revealed': 'Así se resuelve',
  'lesson.exit': 'Salir de la lección',
  'lesson.exitConfirm': '¿Salir? Perderás el avance de esta lección.',
  'done.title': '¡Lección completada!',
  'done.xp': 'Puntos',
  'done.streak': 'Racha',
  'done.precision': 'Precisión',
  'done.indicadores': 'Indicadores de logro que practicaste',
  'done.next': 'Siguiente lección',
  'done.back': 'Volver a la misión',
  'badge.new': '¡Nueva insignia!',
} as const;

export type I18nKey = keyof typeof es;
const dictionaries: Record<string, Partial<Record<I18nKey, string>>> = { es };
let locale = 'es';
export function setLocale(l: string) { if (dictionaries[l]) locale = l; }
export function t(key: I18nKey, vars: Record<string, string | number> = {}): string {
  const s = dictionaries[locale][key] ?? es[key];
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}
