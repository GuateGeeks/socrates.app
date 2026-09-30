/**
 * Modelo curricular del CNB (Nivel Primario) tal como lo describen las figuras de
 * "Caracterización del nivel Primario" en cnbguatemala.org:
 *
 *  Fig. "Diseño del currículum": Contexto al centro ⇄ Competencias Marco, Actores, Áreas/Ejes,
 *     Investigación-Planificación (actividades, metodología, recursos, ecología del aula, evaluación)
 *     y Competencias → Indicadores de logro → Contenidos (declarativos, procedimentales, actitudinales).
 *  Fig. 1-2 (rueda): un TEMA GENERADOR al centro integra todas las áreas; cada área aporta
 *     Contenidos/Competencias (anillo interno) y se evalúa por Indicadores de logro (anillo externo).
 *  Fig. 3-4 (lineal): Competencias de Área → por área: Competencias de grado + Contenidos D/P/A;
 *     Ejes y Destrezas de aprendizaje transversales; Proceso de evaluación = Indicadores de logro.
 *  Fig. E-A-E: Planificación → Ejecución → Evaluación (ciclo), apoyado por ODEC, Dosificación,
 *     Aprendizajes esperados y Herramientas de evaluación.
 */

export type AreaId = 'l1' | 'l2' | 'l3' | 'mat' | 'cnt' | 'ccss' | 'msn' | 'art' | 'ef' | 'fc' | 'pyd';
export type TipoContenido = 'declarativo' | 'procedimental' | 'actitudinal';

export interface Contenido { id: string; code: string; text: string; tipo: TipoContenido; unidades: number[] }
export interface Indicador { id: string; code: string; text: string; contenidos: Contenido[] }
export interface Competencia { id: string; code: string; text: string; indicadores: Indicador[] }
export interface AreaCatalog { fuente: string; nombre: string; competencias: Competencia[] }
export interface GradeCatalog { grado: string; numero: number; generado: string; areas: Partial<Record<AreaId, AreaCatalog>> }

export interface AreaMeta {
  id: AreaId;
  nombre: string;
  corto: string;
  emoji: string;
  /** ícono Lucide */
  icon: string;
  /** variable CSS del color de área (tokens.css) */
  color: string;
  tipo: 'fundamental' | 'formacion';
  ciclos: (1 | 2)[];
}

/** Orden = orden de la rueda del Ciclo II (Figura 2), en sentido horario desde L1. */
export const AREAS: Record<AreaId, AreaMeta> = {
  l1: { id: 'l1', nombre: 'Comunicación y Lenguaje L1', corto: 'Idioma materno', emoji: '📖', icon: 'BookOpen', color: 'var(--area-l1)', tipo: 'fundamental', ciclos: [1, 2] },
  l2: { id: 'l2', nombre: 'Comunicación y Lenguaje L2', corto: 'Segundo idioma', emoji: '🗣️', icon: 'MessagesSquare', color: 'var(--area-l2)', tipo: 'fundamental', ciclos: [1, 2] },
  l3: { id: 'l3', nombre: 'Comunicación y Lenguaje L3', corto: 'Tercer idioma', emoji: '🌎', icon: 'Languages', color: 'var(--area-l3)', tipo: 'fundamental', ciclos: [1, 2] },
  mat: { id: 'mat', nombre: 'Matemáticas', corto: 'Matemáticas', emoji: '🔢', icon: 'Calculator', color: 'var(--area-mat)', tipo: 'fundamental', ciclos: [1, 2] },
  cnt: { id: 'cnt', nombre: 'Ciencias Naturales y Tecnología', corto: 'Ciencias', emoji: '🔬', icon: 'FlaskConical', color: 'var(--area-cnt)', tipo: 'fundamental', ciclos: [2] },
  ccss: { id: 'ccss', nombre: 'Ciencias Sociales', corto: 'Sociales', emoji: '🏛️', icon: 'Landmark', color: 'var(--area-ccss)', tipo: 'fundamental', ciclos: [2] },
  art: { id: 'art', nombre: 'Expresión Artística', corto: 'Arte', emoji: '🎨', icon: 'Palette', color: 'var(--area-art)', tipo: 'fundamental', ciclos: [1, 2] },
  ef: { id: 'ef', nombre: 'Educación Física', corto: 'Ed. Física', emoji: '⚽', icon: 'Bike', color: 'var(--area-ef)', tipo: 'fundamental', ciclos: [1, 2] },
  pyd: { id: 'pyd', nombre: 'Productividad y Desarrollo', corto: 'Productividad', emoji: '🌱', icon: 'Sprout', color: 'var(--area-pyd)', tipo: 'formacion', ciclos: [2] },
  fc: { id: 'fc', nombre: 'Formación Ciudadana', corto: 'Ciudadanía', emoji: '🤝', icon: 'Handshake', color: 'var(--area-fc)', tipo: 'formacion', ciclos: [1, 2] },
  msn: { id: 'msn', nombre: 'Medio Social y Natural', corto: 'Medio', emoji: '🌿', icon: 'Leaf', color: 'var(--area-msn)', tipo: 'fundamental', ciclos: [1] },
};

/** Áreas del Ciclo II en el orden de la rueda (Fig. 2). */
export const WHEEL_CICLO_II: AreaId[] = ['l1', 'l2', 'l3', 'mat', 'cnt', 'ccss', 'art', 'ef', 'pyd', 'fc'];

/** Ámbitos de formación del perfil de egreso: conocer, ser, hacer, convivir, emprender. */
export type Ambito = 'conocer' | 'ser' | 'hacer' | 'convivir' | 'emprender';
export const AMBITOS: Record<Ambito, { nombre: string; emoji: string; icon: string; desc: string }> = {
  conocer: { nombre: 'Conocer', emoji: '🧠', icon: 'Brain', desc: 'Comprendo ideas y conceptos' },
  hacer: { nombre: 'Hacer', emoji: '🛠️', icon: 'Wrench', desc: 'Aplico procedimientos y resuelvo' },
  ser: { nombre: 'Ser', emoji: '💛', icon: 'Heart', desc: 'Me conozco y actúo con valores' },
  convivir: { nombre: 'Convivir', emoji: '🤝', icon: 'Users', desc: 'Me relaciono con respeto y diálogo' },
  emprender: { nombre: 'Emprender', emoji: '🚀', icon: 'Rocket', desc: 'Creo proyectos para mi comunidad' },
};

/** Ejes del currículo (transversales, columna izquierda de Fig. 3-4). */
export type Eje = 'multiculturalidad' | 'equidad' | 'valores' | 'vida-familiar' | 'vida-ciudadana' | 'sostenible' | 'seguridad' | 'trabajo' | 'tecnologia';
export const EJES: Record<Eje, string> = {
  multiculturalidad: 'Multiculturalidad e interculturalidad',
  equidad: 'Equidad de género, de etnia y social',
  valores: 'Educación en valores',
  'vida-familiar': 'Vida familiar',
  'vida-ciudadana': 'Vida ciudadana',
  sostenible: 'Desarrollo sostenible',
  seguridad: 'Seguridad social y ambiental',
  trabajo: 'Formación en el trabajo',
  tecnologia: 'Desarrollo tecnológico',
};

/** Temas integradores de las ODEC para el Ciclo II (una Unidad = ~8 semanas de la dosificación). */
export const ODEC_CICLO_II = [
  { unidad: 1, tema: 'Conociendo nuestras raíces', emoji: '🌽', icon: 'Wheat', color: 'var(--area-ccss)' },
  { unidad: 2, tema: 'Consolidando nuestras relaciones', emoji: '🧶', icon: 'HeartHandshake', color: 'var(--area-mat)' },
  { unidad: 3, tema: 'Valorando nuestra convivencia', emoji: '🕊️', icon: 'Users', color: 'var(--area-l1)' },
  { unidad: 4, tema: 'Fortaleciendo nuestro futuro', emoji: '🌳', icon: 'TreeDeciduous', color: 'var(--c-quetzal)' },
] as const;

/** Fases de cada lección, derivadas del ciclo E-A-E y del enfoque constructivista
 *  (partir de saberes previos → construir → aplicar → evaluar/reflexionar). */
export type Fase = 'explorar' | 'construir' | 'aplicar' | 'comprobar' | 'reflexionar';
export const FASES: Record<Fase, { nombre: string; emoji: string; icon: string; desc: string }> = {
  explorar: { nombre: 'Explorar', emoji: '🔎', icon: 'Search', desc: 'Parto de lo que ya sé y de mi contexto' },
  construir: { nombre: 'Construir', emoji: '🧩', icon: 'Puzzle', desc: 'Manipulo, pruebo y descubro' },
  aplicar: { nombre: 'Reto', emoji: '⚡', icon: 'Zap', desc: 'Uso lo aprendido en un desafío' },
  comprobar: { nombre: 'Comprobar', emoji: '✅', icon: 'BadgeCheck', desc: 'Valido lo que aprendí (sin pistas)' },
  reflexionar: { nombre: 'Reflexionar', emoji: '🪞', icon: 'Sparkles', desc: 'Me autoevalúo y me comprometo' },
};
