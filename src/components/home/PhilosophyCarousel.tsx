"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORDS = ["جودة", "أناقة", "أصالة", "تميّز", "ثقة", "رُقي"];

export default function PhilosophyCarousel() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const ringRef     = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ value: 0 });
  const speedRef    = useRef({ value: 0 });
  const rafRef      = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    const ring    = ringRef.current;
    if (!section || !ring) return;

    const ctx = gsap.context(() => {
      gsap.to(rotationRef.current, {
        value: 360,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            speedRef.current.value = self.getVelocity() * 0.0003;
          },
        },
      });
    });

    let currentRotation = 0;
    let currentSpeed    = 0;

    const animateRing = () => {
      rafRef.current = requestAnimationFrame(animateRing);
      currentRotation += (rotationRef.current.value - currentRotation) * 0.08;
      currentSpeed    += (speedRef.current.value - currentSpeed) * 0.1;
      speedRef.current.value *= 0.95;

      const absSpeed   = Math.abs(currentSpeed);
      const skewAmount = Math.min(absSpeed * 12, 10);
      const scaleX     = 1 + Math.min(absSpeed * 0.2, 0.12);

      ring.style.transform = `rotateX(${currentRotation}deg)`;

      ring.querySelectorAll<HTMLElement>("[data-ring-item]").forEach((item) => {
        const blur = Math.min(absSpeed * 1.5, 2);
        item.style.filter = blur > 0.1 ? `blur(${blur}px)` : "none";
        const inner = item.querySelector<HTMLElement>("span");
        if (inner) {
          inner.style.transform = `skewX(${currentSpeed > 0 ? skewAmount : -skewAmount}deg) scaleX(${scaleX})`;
        }
      });
    };

    animateRing();

    return () => {
      cancelAnimationFrame(rafRef.current);
      ctx.revert();
    };
  }, []);

  const totalItems = WORDS.length * 2;
  const angleStep  = 360 / totalItems;
  const radius     = 260;

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
    >
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "transparent",
          display: "flex",
        }}
      >
        {/* Left 35% — text panel */}
        <div style={{ flex: "0 0 35%", position: "relative" }}>
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 4vw 0 6vw",
            }}
          >
            <p
              className="font-sans-body"
              style={{
                fontSize: "12px",
                letterSpacing: "0.3em",
                color: "rgba(201,153,107,0.7)",
                textTransform: "uppercase",
                marginBottom: "24px",
                textShadow: "0 2px 24px rgba(0,0,0,0.6)",
              }}
            >
              فلسفتنا
            </p>
            <h2
              className="font-serif-display"
              style={{
                fontSize: "clamp(28px, 2.5vw, 42px)",
                fontWeight: 300,
                lineHeight: 1.35,
                color: "#EDE8E4",
                marginBottom: "28px",
                textShadow: "0 2px 24px rgba(0,0,0,0.5)",
                direction: "rtl",
              }}
            >
              الجودة والأناقة
            </h2>
            <p
              className="font-sans-body"
              style={{
                fontSize: "15px",
                lineHeight: 2,
                color: "rgba(237,232,228,0.75)",
                fontWeight: 300,
                textShadow: "0 2px 24px rgba(0,0,0,0.5)",
                direction: "rtl",
              }}
            >
              نؤمن بجمال الأشياء المصنوعة بإتقان. كل منتج في متجرنا يُختار
              بعناية لجودته وقيمته وقصته. نتعاون مع الحرفيين والعلامات
              التجارية التي تشاركنا شغفنا بالتميّز والأصالة العريقة.
            </p>
          </div>
        </div>

        {/* Right 65% — rolling ring */}
        <div style={{ flex: "0 0 65%", position: "relative" }}>
          <div
            style={{
              position: "sticky",
              top: 0,
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              perspective: "1000px",
              perspectiveOrigin: "50% 55%",
            }}
          >
            <div
              ref={ringRef}
              style={{
                position: "relative",
                width: "100%",
                height: `${radius * 2}px`,
                transformStyle: "preserve-3d",
              }}
            >
              {[...WORDS, ...WORDS].map((word, i) => (
                <div
                  key={`${word}-${i}`}
                  data-ring-item
                  style={{
                    position: "absolute",
                    width: "100%",
                    textAlign: "center",
                    left: 0,
                    top: "50%",
                    transform: `rotateX(${i * angleStep}deg) translateZ(${radius}px) translateY(-50%)`,
                    backfaceVisibility: "hidden",
                    willChange: "filter",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "'Noto Serif SC', Georgia, serif",
                      fontSize: "clamp(42px, 8vw, 100px)",
                      fontWeight: 300,
                      color: "#EDE8E4",
                      letterSpacing: "0.06em",
                      lineHeight: 1.1,
                      willChange: "transform",
                      textShadow: "0 2px 30px rgba(0,0,0,0.55)",
                    }}
                  >
                    {word}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
