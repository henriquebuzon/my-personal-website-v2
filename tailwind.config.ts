import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#122341',
        'text-blue': '#2B609B',
        'medium-blue': '#2b609b',
        'light-blue': '#90c2c3',
        pink: '#FF61A4',
        yellow: '#FFCE62',
        gray: '#c8bcac',
        'dark-purple': '#260029',
        'medium-purple': '#3c1a3e',
      },
    },
  },
  plugins: [],
}
export default config
