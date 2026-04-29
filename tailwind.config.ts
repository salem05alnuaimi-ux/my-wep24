import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0071E3",
        secondary: "#2997FF",
        accent: "#0071E3",
        background: "#FFFFFF",
        "text-primary": "#333336",
        link: "#0066CC",
      },
      fontFamily: {
        sans: ['"SF Pro Text"', '"Helvetica Neue"', "Arial", "sans-serif"],
        display: ['"SF Pro Display"', '"Myriad Set Pro"', "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["17px", { lineHeight: "1.6" }],
        small: ["14px", { lineHeight: "1.5" }],
      },
      animation: {
        "float-slow": "float 20s ease-in-out infinite",
        "float-medium": "float 15s ease-in-out infinite",
        "float-fast": "float 10s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(30px, -30px) rotate(5deg)" },
          "66%": { transform: "translate(-20px, 20px) rotate(-5deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;