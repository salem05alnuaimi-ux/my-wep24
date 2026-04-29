"use client";

import { useEffect, useState } from "react";

interface Shape {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  color: string;
  blur: number;
}

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const isLowEnd =
      navigator.hardwareConcurrency <= 4 ||
      /Android.*Mobile/.test(navigator.userAgent);
    const shapeCount = isLowEnd ? 4 : 8;

    const colors = [
      "rgba(0, 113, 227, 0.08)",
      "rgba(41, 151, 255, 0.10)",
      "rgba(0, 102, 204, 0.06)",
    ];

    const generated: Shape[] = Array.from({ length: shapeCount }, (_, i) => ({
      id: i,
      size: Math.random() * 250 + 150,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      color: colors[i % colors.length],
      blur: Math.random() * 40 + 40,
    }));

    setShapes(generated);
  }, []);

  if (reducedMotion) return null;

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute rounded-full"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            backgroundColor: shape.color,
            filter: `blur(${shape.blur}px)`,
            animation: `float ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}