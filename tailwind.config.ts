import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       'wedgewood': {
          '50': '#f4f7fb',
          '100': '#e9eff5',
          '200': '#cedde9',
          '300': '#a2bfd7',
          '400': '#709dc0',
          '500': '#47769a',
          '600': '#3c688d',
          '700': '#315473',
          '800': '#2c4860',
          '900': '#293d51',
          '950': '#1b2836',
       },
      },
    },
  },
  plugins: [],
} satisfies Config;
