import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin');


const config: Config = {
  content: [

    '.src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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
