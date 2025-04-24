/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'solid': '10px 10px 0 0 rgb(0 0 0)',
      }

    },
  },
  plugins: [],
}

