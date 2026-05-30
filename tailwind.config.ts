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
        navy: {
          900: '#0a192f', // Azul marino profundo
          800: '#112240',
          700: '#233554',
        },
        gold: {
          400: '#D4AF37', // Dorado clásico
          500: '#C5A028',
          600: '#B08D20',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};
export default config;