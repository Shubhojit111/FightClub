/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ts: {
          black: '#0a0a0a',
          dark: '#111111',
          charcoal: '#1a1a1a',
          muted: '#8a8a8a',
          cream: '#f5f2eb',
          white: '#ffffff',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.18em',
        nav: '0.12em',
        button: '0.08em',
      },
    },
  },
  plugins: [],
}
