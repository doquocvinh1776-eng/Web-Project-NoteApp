/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#38aef7',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },

        background: '#f8fafc', // slate-50
        card: '#ffffff',
        text: {
          primary: '#0f172a', // slate-900
          secondary: '#64748b', // slate-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        'float': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
