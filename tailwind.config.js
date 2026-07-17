/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E0BBE4', // Lavender
          DEFAULT: '#957DAD',
          dark: '#D291BC',
        },
        secondary: {
          light: '#FFDFD3', // Peach
          DEFAULT: '#FEC8D8',
          dark: '#FF9AA2',
        },
        accent: {
          mint: '#B2E2F2',
          cream: '#FAF9F6',
        },
        dark: {
          bg: '#0F0F0F',
          surface: '#1A1A1A',
          border: '#2A2A2A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
