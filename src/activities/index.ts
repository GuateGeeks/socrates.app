/**
 * Registro de todas las actividades disponibles.
 * Para agregar una nueva: crear src/activities/mi-actividad.tsx con defineActivity(...)
 * e importarla aquí. Ver docs/AUTHORING.md.
 */
import { registerActivity } from '@/core/registry';
import explain from './explain';
import workedExample from './worked-example';
import choice from './choice';
import sort from './sort';
import order from './order';
import match from './match';
import mayaNumber from './maya-number';
import numberInput from './number-input';
import slider from './slider';
import symmetryLoom from './symmetry-loom';
import polygonLab from './polygon-lab';
import coordinateMap from './coordinate-map';
import chartBuilder from './chart-builder';
import rhythm from './rhythm';
import pulseLab from './pulse-lab';
import dilemma from './dilemma';
import recipeScaler from './recipe-scaler';
import reflection from './reflection';
import trueFalse from './true-false';
import fillBlank from './fill-blank';
import highlight from './highlight';
import reading from './reading';
import shortAnswer from './short-answer';
import flashcards from './flashcards';
import project from './project';
import lowActivityMode from './low-activity-mode';
import leadershipSimulation from './leadership-simulation';
import culturalConservationPractice from './cultural-conservation-practice';
import fractionModel from './fraction-model';

export const ACTIVITIES = [
  explain, workedExample, choice, sort, order, match, mayaNumber, numberInput, slider, symmetryLoom,
  polygonLab, coordinateMap, chartBuilder, rhythm, pulseLab, dilemma, recipeScaler, reflection,
  trueFalse, fillBlank, highlight, reading, shortAnswer, flashcards, project, lowActivityMode,
  leadershipSimulation, culturalConservationPractice, fractionModel,
];

let done = false;
export function registerAll() {
  if (done) return;
  done = true;
  ACTIVITIES.forEach((a) => registerActivity(a));
}
