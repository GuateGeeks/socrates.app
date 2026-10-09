import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parse } from '../src/core/router';

test('Las rutas internas muestran una pantalla para estudiantes', () => {
  for (const path of ['#/docente', '#/medios', '#/sistema']) {
    assert.deepEqual(parse(path), { name: 'perfil' }, path);
  }
  assert.deepEqual(parse('#/explorar'), { name: 'materias' });
  assert.deepEqual(parse('#/explorar/mat'), { name: 'materia', area: 'mat' });
});
