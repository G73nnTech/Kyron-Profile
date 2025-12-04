/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        surface: '#1e1e1e',
        primary: '#ffffff',
        secondary: '#a1a1aa',
        accent: '#3b82f6',
        ps: '#001e36',
        psText: '#31a8ff',
        blender: '#e87d0d',
        pt: '#8ca656',
        ptBg: '#182b25',
        maya: '#349399',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'flip-in': 'flipIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        flipIn: {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateX(90deg)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateX(0deg)' },
        }
      }
    },
  },
  plugins: [],
}