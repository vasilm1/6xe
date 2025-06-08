/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        glitch: ['var(--font-rubik-glitch)'],
        orbitron: ['var(--font-orbitron)'],
      },
      colors: {
        'gray-400': 'var(--gray-400)',
        'gray-600': 'var(--gray-600)',
        'gray-800': 'var(--gray-800)',
        'red': {
          400: '#ff6666',
          500: '#ff3333',
          600: '#ff0000',
          700: '#cc0000',
          800: '#990000',
          900: '#660000',
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E\")",
      },
      animation: {
        'glitch': 'glitchEffect 0.5s ease-in-out infinite',
      },
      keyframes: {
        glitchEffect: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
}; 