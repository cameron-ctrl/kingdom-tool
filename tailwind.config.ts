// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        kingdomBlue: "#003366",
        gold: "#FFD166",
        lightBlue: "#A7C7E7",
        offWhite: "#F8F9FB",
        ink: "#1B2E59"
      }
    }
  },
  plugins: [],
};
export default config;
