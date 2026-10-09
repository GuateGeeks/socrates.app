import { useEffect, useRef, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';

export interface FractionModelProps {
  sourceNumerator: number;
  sourceDenominator: number;
  targetDenominator: number;
}

type FractionValue = boolean[];

function FractionScene({ props, selected, onToggle, onUnavailable }: {
  props: FractionModelProps; selected: FractionValue; onToggle(index: number): void; onUnavailable(): void;
}) {
  const host = useRef<HTMLDivElement>(null);
  const draw = useRef<(value: FractionValue) => void>(() => {});
  const toggle = useRef(onToggle);
  const latestSelected = useRef(selected);
  toggle.current = onToggle;
  latestSelected.current = selected;

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    void import('three').then((THREE) => {
      if (disposed || !host.current) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
      catch { onUnavailable(); return; }
      const container = host.current;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.setAttribute('aria-label', 'Dos discos de fracciones en 3D. Toca una mitad del disco derecho para pintarla.');
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(43, 1, 0.1, 30);
      camera.position.set(0, 2.8, 4.6);
      camera.lookAt(0, 0, 0);
      scene.add(new THREE.AmbientLight(0xffffff, 2.2));
      const light = new THREE.DirectionalLight(0xffffff, 2.5);
      light.position.set(-2, 6, 5);
      scene.add(light);
      const source = new THREE.Group();
      const target = new THREE.Group();
      source.position.x = -1.25;
      target.position.x = 1.25;
      scene.add(source, target);
      const targetSlices: InstanceType<typeof THREE.Mesh>[] = [];
      const geometries: InstanceType<typeof THREE.CylinderGeometry>[] = [];
      const materials: InstanceType<typeof THREE.MeshStandardMaterial>[] = [];
      const addDisc = (group: InstanceType<typeof THREE.Group>, parts: number, filled: number, selectable: boolean) => {
        const baseGeo = new THREE.CylinderGeometry(1.02, 1.02, 0.08, 64);
        const baseMat = new THREE.MeshStandardMaterial({ color: 0x526474, roughness: 0.9 });
        geometries.push(baseGeo);
        materials.push(baseMat);
        const base = new THREE.Mesh(baseGeo, baseMat);
        base.position.y = -0.15;
        group.add(base);
        for (let index = 0; index < parts; index++) {
          const angle = 2 * Math.PI / parts;
          const geometry = new THREE.CylinderGeometry(0.96, 0.96, 0.2, 48, 1, false, index * angle + 0.015, angle - 0.03);
          const material = new THREE.MeshStandardMaterial({ color: index < filled ? 0xe6aa22 : 0xf3e7cc, roughness: 0.72 });
          const mesh = new THREE.Mesh(geometry, material);
          mesh.userData.slice = index;
          group.add(mesh);
          geometries.push(geometry);
          materials.push(material);
          if (selectable) targetSlices.push(mesh);
        }
      };
      addDisc(source, props.sourceDenominator, props.sourceNumerator, false);
      addDisc(target, props.targetDenominator, 0, true);
      const render = () => renderer.render(scene, camera);
      draw.current = (value) => {
        targetSlices.forEach((mesh, index) => {
          (mesh.material as InstanceType<typeof THREE.MeshStandardMaterial>).color.set(value[index] ? 0x188d91 : 0xf3e7cc);
        });
        render();
      };
      const resize = () => {
        const width = Math.max(1, container.clientWidth);
        const height = Math.max(1, container.clientHeight);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
        render();
      };
      const observer = new ResizeObserver(resize);
      observer.observe(container);
      resize();
      draw.current(latestSelected.current);
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      let press: { x: number; y: number; moved: boolean } | null = null;
      const canvas = renderer.domElement;
      const down = (event: PointerEvent) => {
        press = { x: event.clientX, y: event.clientY, moved: false };
        canvas.setPointerCapture(event.pointerId);
      };
      const move = (event: PointerEvent) => {
        if (!press) return;
        const dx = event.clientX - press.x;
        const dy = event.clientY - press.y;
        if (Math.abs(dx) + Math.abs(dy) > 8) press.moved = true;
        if (press.moved) {
          source.rotation.y += dx * 0.009;
          target.rotation.y += dx * 0.009;
          press.x = event.clientX;
          press.y = event.clientY;
          render();
        }
      };
      const up = (event: PointerEvent) => {
        if (!press) return;
        const wasMoved = press.moved;
        press = null;
        if (wasMoved) return;
        const rect = canvas.getBoundingClientRect();
        pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(targetSlices)[0];
        if (hit) toggle.current(Number(hit.object.userData.slice));
      };
      canvas.addEventListener('pointerdown', down);
      canvas.addEventListener('pointermove', move);
      canvas.addEventListener('pointerup', up);
      canvas.addEventListener('pointercancel', () => { press = null; });
      cleanup = () => {
        observer.disconnect();
        canvas.removeEventListener('pointerdown', down);
        canvas.removeEventListener('pointermove', move);
        canvas.removeEventListener('pointerup', up);
        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        canvas.remove();
      };
    }).catch(() => { if (!disposed) onUnavailable(); });
    return () => { disposed = true; cleanup(); draw.current = () => {}; };
  }, [props.sourceNumerator, props.sourceDenominator, props.targetDenominator]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { draw.current(selected); }, [selected]);
  return <div ref={host} className="fraction-model__scene" aria-hidden="true" />;
}

function FractionModel({ props, value, onChange, status }: ActivityProps<FractionModelProps, FractionValue>) {
  const [fallback, setFallback] = useState(false);
  const selected = Array.from({ length: props.targetDenominator }, (_, index) => Boolean(value?.[index]));
  const locked = status === 'correct' || status === 'revealed';
  const toggle = (index: number) => {
    if (locked) return;
    const next = [...selected];
    next[index] = !next[index];
    onChange(next);
  };
  const controls = <div className="fraction-model__controls">
    {selected.map((filled, index) => <button key={index} type="button" className={`fraction-model__piece${filled ? ' is-filled' : ''}`}
      aria-label={`Pintar parte ${index + 1} de ${selected.length}`} aria-pressed={filled} disabled={locked} onClick={() => toggle(index)}>
      <span>{index + 1}</span>
    </button>)}
  </div>;
  return <div className="fraction-model ds-stack">
    <p className="fraction-model__instruction">Observa el disco con <strong>{props.sourceNumerator}/{props.sourceDenominator}</strong>. Toca el otro disco para pintar la misma cantidad.</p>
    <div className="fraction-model__labels"><span>Observa · {props.sourceNumerator}/{props.sourceDenominator}</span><span>Construye · {selected.filter(Boolean).length}/{props.targetDenominator}</span></div>
    {fallback ? <div className="fraction-model__fallback">
      <div className="fraction-model__source" aria-label={`${props.sourceNumerator} de ${props.sourceDenominator} partes pintadas`}>
        {Array.from({ length: props.sourceDenominator }, (_, index) => <i key={index} className={index < props.sourceNumerator ? 'is-filled' : ''} />)}
      </div>
      {controls}
    </div> : <FractionScene props={props} selected={selected} onToggle={toggle} onUnavailable={() => setFallback(true)} />}
    {!fallback && <details className="fraction-model__accessible"><summary>Usar controles sin 3D</summary>{controls}</details>}
    <p className="fraction-model__hint" aria-live="polite">{selected.some(Boolean) ? `Pintaste ${selected.filter(Boolean).length} de ${props.targetDenominator} partes. ¿Es igual a ${props.sourceNumerator}/${props.sourceDenominator}?` : 'Puedes girar los discos arrastrando el dedo.'}</p>
  </div>;
}

export default defineActivity<FractionModelProps, FractionValue>({
  type: 'fraction-model',
  label: 'Modelo de fracciones',
  icon: 'CircleDashed',
  description: 'Construir una fracción equivalente pintando partes de un objeto 3D.',
  graded: true,
  Component: FractionModel,
  isReady: (props, value) => Array.isArray(value) && value.length === props.targetDenominator && value.some(Boolean),
  check: (props, value) => {
    const filled = Array.isArray(value) ? value.filter(Boolean).length : 0;
    const correct = filled * props.sourceDenominator === props.sourceNumerator * props.targetDenominator;
    return { correct, score: correct ? 1 : 0, feedback: correct ? undefined : `Compara la parte pintada: ${props.sourceNumerator}/${props.sourceDenominator} ocupa la mitad del disco.` };
  },
  solution: (props) => Array.from({ length: props.targetDenominator }, (_, index) => index < props.sourceNumerator * props.targetDenominator / props.sourceDenominator),
  validate: (props) => Number.isInteger(props.sourceNumerator) && Number.isInteger(props.sourceDenominator) && Number.isInteger(props.targetDenominator)
    && props.sourceDenominator > 0 && props.targetDenominator > 0 && props.sourceNumerator > 0
    && props.sourceNumerator < props.sourceDenominator
    && Number.isInteger(props.sourceNumerator * props.targetDenominator / props.sourceDenominator) ? [] : ['El modelo necesita una fracción equivalente con partes enteras.'],
  example: { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.1'], prompt: 'Forma una fracción equivalente.', props: { sourceNumerator: 2, sourceDenominator: 4, targetDenominator: 2 } },
});
