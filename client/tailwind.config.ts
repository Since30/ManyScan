import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin');


const config: Config = {
  content: [
    '.app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
  plugins: [
    plugin(({ addUtilities }: { addUtilities: any }) => {
      const newUtilities = {
      '.scrollbar-thin': {
        'scrollbar-width': 'thin',
        'scrollbar-color': '#888 #000',
      },
      '.scrollbar-thin::-webkit-scrollbar': {
        height: '3px',
        width: '3px',
      },
      '.scrollbar-thin::-webkit-scrollbar-track': {
        background: '#000',
      },
      '.scrollbar-thin::-webkit-scrollbar-thumb': {
        background: '#888',
        '&:hover': {
          background: '#555',
        },
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  }),],
  darkMode: 'class'
}
export default config
