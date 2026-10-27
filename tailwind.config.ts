import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--background) / <alpha-value>)",
        paper: "rgb(var(--foreground) / <alpha-value>)",
        violet: "rgb(var(--primary) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
