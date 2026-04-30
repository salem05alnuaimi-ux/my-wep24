"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import gsap from "gsap";

interface MediumItem {
  ar: string;
  en: string;
  description: string;
}

const MEDIUMS: MediumItem[] = [
  {
    ar: "شِمَاغ",
    en: "SHEMAGH",
    description:
      "شِماغ فاخر من أجود الخامات، يُعبّر عن الهوية الخليجية الأصيلة بتصاميم عصرية تجمع بين التراث والأناقة الرفيعة.",
  },
  {
    ar: "عُقُل",
    en: "IQAL",
    description:
      "عُقُل بريمية تُضفي على إطلالتك لمسة من الفخامة والتميّز، مصنوعة بدقة حرفية عالية من خيوط نقية مختارة.",
  },
  {
    ar: "ساعات",
    en: "WATCHES",
    description:
      "ساعات راقية من أشهر الماركات العالمية، توازن بين الدقة والأناقة وتُعبّر عن ذوقك الرفيع في كل لحظة.",
  },
  {
    ar: "مسابيح",
    en: "MISBAHA",
    description:
      "مسابيح فضية وعنبرية ونادرة، مصنوعة يدوياً بمهارة حرفية تُرافقك في كل لحظة وتُعبّر عن أصالة الذوق.",
  },
  {
    ar: "أقلام",
    en: "PENS",
    description:
      "أقلام فاخرة لمن يقدر جمال الكتابة، هدايا راقية تُعبّر عن الاهتمام والذوق الرفيع لكل مناسبة مميزة.",
  },
];

function GooeyRow({
  item,
  filterId,
  onHover,
  onLeave,
}: {
  item: MediumItem;
  filterId: string;
  onHover: () => void;
  onLeave: () => void;
}) {
  const text1Ref      = useRef<SVGTextElement>(null);
  const text2Ref      = useRef<SVGTextElement>(null);
  const groupRef      = useRef<SVGGElement>(null);
  const feBlurRef     = useRef<SVGFEGaussianBlurElement>(null);
  const tlRef         = useRef<gsap.core.Timeline | null>(null);
  const primitiveVals = useRef({ stdDeviation: 0 });

  const build = useCallback(() => {
    if (!text1Ref.current || !text2Ref.current || !groupRef.current || !feBlurRef.current) return;
    const tl = gsap.timeline({
      paused: true,
      onComplete:        () => { if (groupRef.current) groupRef.current.style.filter = "none"; },
      onReverseComplete: () => { if (groupRef.current) groupRef.current.style.filter = "none"; },
      onUpdate: () => {
        if (feBlurRef.current) feBlurRef.current.setAttribute("stdDeviation", String(primitiveVals.current.stdDeviation));
      },
    });
    tl.to(primitiveVals.current, { duration: 0.5, ease: "none", stdDeviation: 1.5, startAt: { stdDeviation: 0 } }, 0);
    tl.to(primitiveVals.current, { duration: 0.5, ease: "none", stdDeviation: 0 });
    tl.to(text1Ref.current, { duration: 1, ease: "none", opacity: 0 }, 0);
    tl.to(text2Ref.current, { duration: 1, ease: "none", opacity: 1 }, 0);
    tl.to(text1Ref.current, { duration: 1, ease: "Power2.easeInOut", x: 8 }, 0);
    tl.to(text2Ref.current, { duration: 1, ease: "Power2.easeInOut", startAt: { x: -8 }, x: 0 }, 0);
    tlRef.current = tl;
  }, []);

  useEffect(() => {
    if (text2Ref.current) gsap.set(text2Ref.current, { opacity: 0 });
    build();
    return () => { tlRef.current?.kill(); };
  }, [build]);

  const enter = () => {
    if (groupRef.current) groupRef.current.style.filter = `url(#${filterId})`;
    tlRef.current?.play();
    onHover();
  };
  const leave = () => {
    if (groupRef.current) groupRef.current.style.filter = `url(#${filterId})`;
    tlRef.current?.reverse();
    onLeave();
  };

  return (
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{
        cursor: "pointer",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "28px 0",
      }}
    >
      <svg
        viewBox="0 0 400 50"
        style={{ width: "100%", maxWidth: "480px", height: "50px", overflow: "visible" }}
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          <filter id={filterId}>
            <feGaussianBlur ref={feBlurRef} in="SourceGraphic" stdDeviation="0" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 16 -7" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <g ref={groupRef}>
          <text ref={text1Ref} x="0" y="35" fill="#EDE8E4"
            fontFamily="'Noto Serif SC', Georgia, serif"
            fontSize="32" fontWeight="300" letterSpacing="0.08em"
          >
            {item.ar}
          </text>
          <text ref={text2Ref} x="0" y="35" fill="#C9996B"
            fontFamily="'Noto Sans SC', Helvetica, sans-serif"
            fontSize="26" fontWeight="700" letterSpacing="0.14em"
          >
            {item.en}
          </text>
        </g>
      </svg>
    </div>
  );
}

export default function MediumsGlossary() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hovered = hoveredIndex !== null ? MEDIUMS[hoveredIndex] : null;

  return (
    <section
      id="mediums"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "80vh",
        background: "#050A0F",
        zIndex: 4,
        display: "flex",
        padding: "16vh 8vw",
        gap: "8vw",
      }}
    >
      {/* Left — category rows */}
      <div style={{ flex: "0 0 50%" }}>
        <p
          className="font-sans-body"
          style={{
            fontSize: "12px",
            letterSpacing: "0.3em",
            color: "rgba(237,232,228,0.35)",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          تسوق حسب القسم
        </p>
        {MEDIUMS.map((item, idx) => (
          <GooeyRow
            key={idx}
            item={item}
            filterId={`goo-yezhabk-${idx}`}
            onHover={() => setHoveredIndex(idx)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      {/* Right — description on hover */}
      <div
        style={{
          flex: "1 1 50%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            maxWidth: "380px",
          }}
        >
          {hovered && (
            <>
              <p
                className="font-sans-body"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.25em",
                  color: "#C9996B",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {hovered.en}
              </p>
              <p
                className="font-sans-body"
                style={{
                  fontSize: "19px",
                  lineHeight: 2.1,
                  color: "rgba(237,232,228,0.65)",
                  fontWeight: 300,
                  direction: "rtl",
                }}
              >
                {hovered.description}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
