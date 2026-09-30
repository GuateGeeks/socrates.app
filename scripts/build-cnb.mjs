#!/usr/bin/env node
/**
 * build-cnb.mjs — Convierte las "Dosificaciones de los aprendizajes" (Markdown exportado
 * de cnbguatemala.org) en un catálogo JSON tipado que la app usa como fuente de verdad.
 *
 *   node scripts/build-cnb.mjs [rutaContenido] [--grados=sexto-grado,quinto-grado]
 *
 * Estructura esperada:  <contenido>/<grado>/<area>/dosificacion-*.md
 * Salida:               src/cnb/generated/<grado>.json  + src/cnb/generated/index.json
 *
 * Modelo (Figuras 3 y 4 del CNB — diseño lineal):
 *   Área → Competencia de grado → Indicador de logro → Contenido (+ unidades 1..4)
 *
 * Sin dependencias: corre con Node >= 18.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const args = process.argv.slice(2);
const contentDir = resolve(args.find((a) => !a.startsWith('--')) ?? join(root, '..', 'contenido'));
const gradesArg = args.find((a) => a.startsWith('--grados='));
const outDir = join(root, 'src', 'cnb', 'generated');

/** Carpeta → id corto de área (estable; lo usan las lecciones). */
export const AREA_SLUGS = {
  'comunicacion-y-lenguaje-l-1': 'l1',
  'comunicacion-y-lenguaje-l-2': 'l2',
  'comunicacion-y-lenguaje-l-3': 'l3',
  matematicas: 'mat',
  'ciencias-naturales-y-tecnologia': 'cnt',
  'ciencias-sociales': 'ccss',
  'medio-social-y-natural': 'msn',
  'expresion-artistica': 'art',
  'educacion-fisica': 'ef',
  'formacion-ciudadana': 'fc',
  'productividad-y-desarrollo': 'pyd',
};

const GRADE_NUM = {
  'primer-grado': 1, 'segundo-grado': 2, 'tercer-grado': 3,
  'cuarto-grado': 4, 'quinto-grado': 5, 'sexto-grado': 6,
};

/** Heurística documentada: el tipo de contenido (declarativo/procedimental/actitudinal)
 *  no viene en la dosificación, se infiere por el sustantivo inicial. */
const TIPO_RULES = [
  ['actitudinal', /^(valoraci|respeto|promoci|reflexi|pr[aá]ctica de (actitudes|valores|h[aá]bitos)|participaci|aceptaci|inter[eé]s|toma de conciencia|apreciaci|disposici|manifestaci|responsabilidad|solidaridad|tolerancia|actitud|cooperaci|importancia)/i],
  ['declarativo', /^(identificaci|descripci|definici|explicaci|diferenciaci|distinci|caracteriz|reconocimiento|conocimiento|concepto|noci|relaci[oó]n entre|enumeraci|ubicaci|localizaci|comparaci|interpretaci|an[aá]lisis|clasificaci|establecimiento de la relaci)/i],
];
function inferTipo(text) {
  for (const [tipo, re] of TIPO_RULES) if (re.test(text.trim())) return tipo;
  return 'procedimental';
}

const clean = (s) => s.replace(/\s+/g, ' ').replace(/\s+([.,;:])/g, '$1').trim();
const CODE_RE = /^(\d+(?:\.\d+)*)\.?\s*(.*)$/s;

function splitRow(line) {
  const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => clean(c));
  return cells;
}

export function parseDosificacion(md, area) {
  const fm = {};
  const fmMatch = md.match(/^---\n([\s\S]*?)\n---/);
  if (fmMatch) for (const l of fmMatch[1].split('\n')) {
    const i = l.indexOf(':'); if (i > 0) fm[l.slice(0, i).trim()] = l.slice(i + 1).trim();
  }
  const competencias = [];
  let comp = null, ind = null, lastContent = null;
  for (const line of md.split('\n')) {
    if (!line.startsWith('|')) continue;
    const c = splitRow(line);
    if (c.length < 3) continue;
    const [a, b, k, ...units] = c;
    if (/^-+$/.test(a) || a === 'A' || /^Competencias$/i.test(a) || (a === '' && b === '' && k === '' )) continue;
    if (a) {
      const m = a.match(CODE_RE);
      const code = m ? m[1] : String(competencias.length + 1);
      comp = { id: `${area}:${code}`, code, text: clean(m ? m[2] : a), indicadores: [] };
      competencias.push(comp); ind = null;
    }
    if (b && comp) {
      const m = b.match(CODE_RE);
      const code = m ? m[1] : `${comp.code}.${comp.indicadores.length + 1}`;
      ind = { id: `${area}:${code}`, code, text: clean(m ? m[2] : b), contenidos: [] };
      comp.indicadores.push(ind);
    }
    if (k && ind) {
      const m = k.match(CODE_RE);
      const unidades = units.slice(0, 4).map((u, i) => (/x/i.test(u) ? i + 1 : 0)).filter(Boolean);
      if (m && m[1].split('.').length >= 3) {
        const code = m[1];
        lastContent = { id: `${area}:${code}`, code, text: clean(m[2]), tipo: inferTipo(m[2]), unidades };
        ind.contenidos.push(lastContent);
      } else if (lastContent) {
        lastContent.text = clean(`${lastContent.text} ${k}`);
      } else {
        const code = `${ind.code}.${ind.contenidos.length + 1}`;
        lastContent = { id: `${area}:${code}`, code, text: clean(k), tipo: inferTipo(k), unidades };
        ind.contenidos.push(lastContent);
      }
    }
  }
  return { fuente: fm.fuente ?? '', nombre: fm.area ?? area, competencias };
}

function main() {
  if (!existsSync(contentDir)) {
    console.error(`✖ No se encontró la carpeta de contenido: ${contentDir}`);
    process.exit(1);
  }
  mkdirSync(outDir, { recursive: true });
  const wanted = gradesArg ? gradesArg.split('=')[1].split(',') : null;
  const grades = readdirSync(contentDir).filter((g) => statSync(join(contentDir, g)).isDirectory() && GRADE_NUM[g] && (!wanted || wanted.includes(g)));
  const index = [];
  for (const grade of grades) {
    const areas = {};
    let nComp = 0, nInd = 0, nCont = 0;
    for (const folder of readdirSync(join(contentDir, grade))) {
      const slug = AREA_SLUGS[folder];
      if (!slug) { console.warn(`  ⚠ área desconocida: ${folder}`); continue; }
      const file = readdirSync(join(contentDir, grade, folder)).find((f) => f.endsWith('.md'));
      if (!file) continue;
      const parsed = parseDosificacion(readFileSync(join(contentDir, grade, folder, file), 'utf8'), slug);
      areas[slug] = parsed;
      nComp += parsed.competencias.length;
      for (const c of parsed.competencias) { nInd += c.indicadores.length; for (const i of c.indicadores) nCont += i.contenidos.length; }
    }
    const catalog = { grado: grade, numero: GRADE_NUM[grade], generado: new Date().toISOString(), areas };
    writeFileSync(join(outDir, `${grade}.json`), JSON.stringify(catalog, null, 1));
    index.push({ grado: grade, numero: GRADE_NUM[grade], areas: Object.keys(areas), competencias: nComp, indicadores: nInd, contenidos: nCont });
    console.log(`✔ ${grade}: ${Object.keys(areas).length} áreas · ${nComp} competencias · ${nInd} indicadores · ${nCont} contenidos`);
  }
  index.sort((a, b) => a.numero - b.numero);
  writeFileSync(join(outDir, 'index.json'), JSON.stringify(index, null, 1));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
