"use client";

import Link from "next/link";

const COLLECTIONS = [
  {
    id: "shemagh",
    titleAr: "الشِّماغ",
    locationAr: "تشكيلة 2025",
    image: "/images/project-1.jpg",
    href: "/products?category=shemagh",
  },
  {
    id: "watches",
    titleAr: "الساعات",
    locationAr: "عالمي",
    image: "/images/project-2.jpg",
    href: "/products?category=watches",
  },
  {
    id: "misbaha",
    titleAr: "المسابيح",
    locationAr: "حرفي أصيل",
    image: "/images/project-3.jpg",
    href: "/products?category=misbaha",
  },
  {
    id: "pens",
    titleAr: "الأقلام",
    locationAr: "هدايا مميزة",
    image: "/images/project-4.jpg",
    href: "/products?category=pens",
  },
];

const textShadow = "0 2px 24px rgba(0,0,0,0.55)";

export default function ImmersiveGallery() {
  return (
    <section
      id="gallery"
      style={{
        position: "relative",
        zIndex: 2,
        background: "transparent",
        paddingTop: "15vh",
        paddingBottom: "15vh",
      }}
    >
      {/* Header */}
      <div style={{ padding: "0 2rem", marginBottom: "10vh" }}>
        <div
          className="font-sans-body"
          style={{
            fontSize: 10,
            letterSpacing: "0.25em",
            color: "rgba(255,255,255,0.45)",
            textTransform: "uppercase",
            marginBottom: 16,
            textShadow,
          }}
        >
          تشكيلاتنا المميزة / 004
        </div>
        <h2
          className="font-serif-display"
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 200,
            color: "#EDE8E4",
            letterSpacing: "0.05em",
            lineHeight: 1.2,
            margin: 0,
            textShadow,
            direction: "rtl",
          }}
        >
          اختياراتنا المختارة
        </h2>
      </div>

      {/* Asymmetric layout */}
      <div style={{ position: "relative", padding: "0 2rem" }}>
        {COLLECTIONS.map((col, i) => {
          const isLeft = i % 2 === 0;
          const marginTop =
            i === 0 ? 0 : i === 1 ? "-55vh" : i === 2 ? "-20vh" : "-45vh";
          return (
            <div
              key={col.id}
              style={{
                display: "flex",
                justifyContent: isLeft ? "flex-start" : "flex-end",
                marginTop,
                paddingLeft:  isLeft ? "5vw" : "40vw",
                paddingRight: isLeft ? "40vw" : "5vw",
              }}
            >
              <div style={{ width: "45vw", maxWidth: 580 }}>
                <Link href={col.href}>
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1024 / 1536",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={col.image}
                      alt={col.titleAr}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.6s ease",
                      }}
                      loading="lazy"
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                  </div>
                </Link>

                {/* Meta */}
                <div
                  style={{
                    marginTop: 24,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <div
                      className="font-sans-body"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        color: "rgba(201,153,107,0.6)",
                        textTransform: "uppercase",
                        marginBottom: 8,
                        textShadow,
                      }}
                    >
                      {col.id}
                    </div>
                    <Link href={col.href}>
                      <h3
                        className="font-serif-display"
                        style={{
                          fontSize: 20,
                          fontWeight: 300,
                          color: "#EDE8E4",
                          letterSpacing: "0.06em",
                          margin: 0,
                          textShadow,
                          cursor: "pointer",
                          display: "inline-block",
                          borderBottom: "1px solid transparent",
                          transition: "border-color 0.3s ease",
                          direction: "rtl",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderBottomColor = "rgba(201,153,107,0.6)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderBottomColor = "transparent";
                        }}
                      >
                        {col.titleAr}
                      </h3>
                    </Link>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      className="font-sans-body"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.15em",
                        color: "rgba(237,232,228,0.5)",
                        textShadow,
                        direction: "rtl",
                      }}
                    >
                      {col.locationAr}
                    </div>
                    <div
                      className="font-sans-body"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.15em",
                        color: "rgba(237,232,228,0.5)",
                        marginTop: 4,
                        textShadow,
                      }}
                    >
                      2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
