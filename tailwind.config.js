/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        dark: {
          bg: '#0b0f19',
          card: '#151c2c',
          border: '#2a3449',
          hover: '#1e293b'
        }
      }
    },
  },
  plugins: [],
}
