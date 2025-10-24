import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        kingdomBlue: "#003366",
        gold: "#FFD166",
        lightBlue: "#A7C7E7",
        offWhite: "#F8F9FB",
        ink: "#1B2E59"
      },
      fontFamily: {
        h: ["var(--font-h)"],
        b: ["var(--font-b)"],
        s: ["var(--font-s)"]
      }
    },
  },
  plugins: [],
};
export default config;
