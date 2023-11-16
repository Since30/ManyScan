import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "light": "#FFFFFE",
        "dark": "#0F1629",
        "light-card": "#B62E35",
        "dark-card": "rgb(220 233 255 / 10%)",
        "text-light": "#FFFFFF",
        "text-dark": "##fffffe"
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
export default config
