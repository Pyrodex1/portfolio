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
        'dark-slate': '#14161C',
        'off-white': '#E8EAEF',
        'dark-cyan': '#00CED1',
        'gray-intermediate': '#8E9BAA',
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'Space Mono', 'monospace'],
        'sans': ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
