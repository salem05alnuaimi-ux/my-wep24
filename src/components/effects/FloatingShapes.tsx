"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  opacityDir: number;
  size: number;
}

export default function FloatingShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animId: number;
    let mouseX = width / 2;
    let mouseY = height * 0.4;

    canvas.width = width;
    canvas.height = height;

    const isLowEnd = navigator.hardwareConcurrency <= 4;
    const count = isLowEnd ? 35 : 65;

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.45 + 0.08,
      opacityDir: Math.random() > 0.5 ? 1 : -1,
      size: Math.random() * 2 + 0.5,
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    const GOLD_R = 201;
    const GOLD_G = 153;
    const GOLD_B = 107;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      /* Mouse cursor warm glow */
      const mouseGlow = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        220
      );
      mouseGlow.addColorStop(
        0,
        `rgba(${GOLD_R}, ${GOLD_G}, ${GOLD_B}, 0.08)`
      );
      mouseGlow.addColorStop(1, "rgba(237,233,231,0)");
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, width, height);

      /* Update + draw particles */
      particles.forEach((p) => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        /* Gentle mouse attraction within 180px */
        if (dist < 180 && dist > 1) {
          const force = ((180 - dist) / 180) * 0.00025;
          p.vx += (dx / dist) * force * dist;
          p.vy += (dy / dist) * force * dist;
        }

        /* Dampen velocity */
        p.vx *= 0.988;
        p.vy *= 0.988;

        /* Speed cap */
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.7) {
          p.vx = (p.vx / speed) * 0.7;
          p.vy = (p.vy / speed) * 0.7;
        }

        p.x += p.vx;
        p.y += p.vy;

        /* Wrap edges */
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        /* Breathe opacity */
        p.opacity += p.opacityDir * 0.0015;
        if (p.opacity > 0.65 || p.opacity < 0.04) p.opacityDir *= -1;

        /* Particle glow */
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
        g.addColorStop(
          0,
          `rgba(${GOLD_R}, ${GOLD_G}, ${GOLD_B}, ${p.opacity})`
        );
        g.addColorStop(1, `rgba(${GOLD_R}, ${GOLD_G}, ${GOLD_B}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        /* Tiny solid core */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD_R}, ${GOLD_G}, ${GOLD_B}, ${Math.min(p.opacity * 1.8, 1)})`;
        ctx.fill();
      });

      /* Connection lines between nearby particles */
      const maxDist = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.07;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${GOLD_R}, ${GOLD_G}, ${GOLD_B}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
