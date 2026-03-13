import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-primary)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        background: { DEFAULT: "#FFFFFF", secondary: "#FAFAFA", tertiary: "#F5F5F5", dark: "#0A0A0A" },
        foreground: {
          DEFAULT: "#0A0A0A",
          secondary: "#555555",
          tertiary: "#999999",
          muted: "#CCCCCC",
          light: "#F5F5F5",
        },
        border: { DEFAULT: "#E0E0E0", light: "#F0F0F0", dark: "#1A1A1A" },
        cta: { DEFAULT: "#0A0A0A", hover: "#1A1A1A", text: "#FFFFFF" },
        accent: { DEFAULT: "#0A0A0A", light: "#1A1A1A" },
      },
      borderRadius: {
        card: "0px",
        image: "0px",
        button: "0px",
        section: "0px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 30px rgba(0,0,0,0.1)",
        navbar: "0 1px 0px rgba(0,0,0,0.08)",
        product: "0 20px 60px rgba(0,0,0,0.08)",
      },
      screens: { xs: "475px" },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        "scale-in": "scaleIn 0.6s ease forwards",
        "border-flow": "borderFlow 4s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
