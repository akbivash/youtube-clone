/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
   screens: {
      'xs': '480px', // min-width
      'sm':'780px',
      'md':'1080px',
      'lg':'1280px',
      'xl':'1500px',

    },
    extend: {
      colors:{
        'primary':{
          light:'#f87171',
          default:'#ef4444',
          dark:'#dc2626'
        },
        'gray':{
          light:'#4b5563',
          default:'#1f2937',
          dark:'#030712'
        },
        'shadow':{
          light:'#d1d5db',
          dark:'#292524'
        }
      }
    },
  },
  plugins: [],
}