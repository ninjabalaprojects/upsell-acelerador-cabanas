import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c9a96e",
          light: "#e8c87a",
          dark: "#a07840",
          muted: "#8a7050",
        },
        forest: {
          DEFAULT: "#3d7a52",
          light: "#4fa86c",
          dark: "#1f4530",
          deep: "#0f2418",
        },
        canvas: {
          DEFAULT: "#080c09",
          soft: "#0d1510",
          card: "#111a13",
        },
        warm: {
          white: "#f2ede4",
          gray: "#9a9080",
          muted: "#5a5248",
        },
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #c9a96e 0%, #e8c87a 50%, #c9a96e 100%)",
        "forest-gradient": "linear-gradient(135deg, #3d7a52 0%, #4fa86c 100%)",
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(61,122,82,0.45) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(201,169,110,0.12) 0%, transparent 55%)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
        "warning-bg": "linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(201,169,110,0.04) 100%)",
        "danger-bg": "linear-gradient(135deg, rgba(220,50,50,0.12) 0%, rgba(220,50,50,0.04) 100%)",
        "offer-bg": "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(61,122,82,0.18) 0%, transparent 70%)",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201,169,110,0.25), 0 8px 32px rgba(0,0,0,0.5)" },
          "50%": { boxShadow: "0 0 45px rgba(201,169,110,0.55), 0 8px 40px rgba(0,0,0,0.6)" },
        },
        "glow-pulse-green": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(79,168,108,0.25), 0 8px 32px rgba(0,0,0,0.5)" },
          "50%": { boxShadow: "0 0 45px rgba(79,168,108,0.55), 0 8px 40px rgba(0,0,0,0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        "glow-pulse-green": "glow-pulse-green 2.5s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
