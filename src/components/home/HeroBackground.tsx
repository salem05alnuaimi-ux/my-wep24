"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function HeroBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.offsetWidth;
    const H = el.offsetHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 100);
    camera.position.set(0, 0, 10);

    // Lights
    scene.add(new THREE.AmbientLight(0xffd5a0, 0.4));

    const sun = new THREE.DirectionalLight(0xffb060, 4.0);
    sun.position.set(5, 8, 6);
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0xC9996B, 2.5);
    fill.position.set(-6, -2, 3);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xffe0c0, 1.5);
    rim.position.set(0, -5, -4);
    scene.add(rim);

    const top = new THREE.DirectionalLight(0xfff0e0, 1.8);
    top.position.set(0, 10, 2);
    scene.add(top);

    const p1 = new THREE.PointLight(0xD4A574, 5, 14);
    p1.position.set(3, 2, 4);
    scene.add(p1);

    const p2 = new THREE.PointLight(0x8C4E2A, 4, 12);
    p2.position.set(-4, -1, 2);
    scene.add(p2);

    // Blob helper
    const noise = (x: number, y: number, z: number) =>
      Math.sin(x * 2.1 + y * 1.7 + z * 0.9) * 0.5 +
      Math.sin(x * 0.8 - y * 2.3 + z * 1.5) * 0.3 +
      Math.sin(x * 3.2 + y * 0.6 - z * 2.1) * 0.2;

    const createBlob = (
      radius: number, detail: number, color: number,
      roughness: number, metalness: number,
      pos: [number, number, number], scale: number
    ) => {
      const geo = new THREE.IcosahedronGeometry(radius, detail);
      const posAttr = geo.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i), y = posAttr.getY(i), z = posAttr.getZ(i);
        const n = noise(x, y, z);
        const len = Math.sqrt(x * x + y * y + z * z);
        posAttr.setXYZ(i, x + (x / len) * n * 0.22, y + (y / len) * n * 0.22, z + (z / len) * n * 0.22);
      }
      geo.computeVertexNormals();
      const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(color), roughness, metalness });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      mesh.scale.setScalar(scale);
      scene.add(mesh);
      return mesh;
    };

    const blobs = [
      createBlob(1.6, 6, 0x6B3A22, 0.08, 0.82, [2.0, 0.4, 0], 1.0),
      createBlob(1.4, 6, 0x3D1E0E, 0.05, 0.90, [-2.2, 0.5, -1.0], 1.0),
      createBlob(1.2, 5, 0x8C4E2A, 0.15, 0.72, [0.2, -1.6, 0.8], 1.0),
      createBlob(1.0, 5, 0xC9996B, 0.10, 0.65, [-1.0, 1.8, -0.3], 1.0),
      createBlob(0.8, 5, 0x5A2D12, 0.18, 0.78, [3.0, -1.2, 0.2], 1.0),
      createBlob(0.7, 4, 0x4A2010, 0.22, 0.85, [-3.2, 1.4, 0.4], 1.0),
      createBlob(0.55, 4, 0xA0724A, 0.20, 0.60, [0.8, 2.4, -0.8], 1.0),
      createBlob(0.45, 4, 0x7A3E1C, 0.25, 0.70, [-1.4, -2.0, 1.0], 1.0),
    ];

    // Particles
    const pGeo = new THREE.BufferGeometry();
    const pCount = 60;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 14;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ color: 0xD4A574, size: 0.05, transparent: true, opacity: 0.55 })
    );
    scene.add(particles);

    // Animate
    let frameId: number;
    const clock = new THREE.Clock();
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      blobs.forEach((b, i) => {
        const speed = 0.18 + i * 0.04;
        const amp = 0.12 + i * 0.025;
        b.rotation.x = t * speed * 0.7;
        b.rotation.y = t * speed;
        b.rotation.z = t * speed * 0.5;
        b.position.y += Math.sin(t * 0.6 + i * 1.1) * amp * 0.01;
        b.position.x += Math.cos(t * 0.45 + i * 0.8) * amp * 0.008;
      });

      p1.position.x = Math.sin(t * 0.5) * 4;
      p1.position.y = Math.cos(t * 0.4) * 3;
      p2.position.x = Math.cos(t * 0.35) * 5;
      p2.position.y = Math.sin(t * 0.55) * 2.5;
      particles.rotation.y = t * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      const w = el.offsetWidth, h = el.offsetHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // Mouse parallax
    const onMouse = (e: MouseEvent) => {
      const mx = (e.clientX / window.innerWidth - 0.5) * 0.6;
      const my = (e.clientY / window.innerHeight - 0.5) * 0.4;
      camera.position.x += (mx - camera.position.x) * 0.04;
      camera.position.y += (-my - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
    };
    window.addEventListener("mousemove", onMouse);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 overflow-hidden" />;
}
