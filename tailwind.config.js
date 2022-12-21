/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1120px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '865px'},
      // => @media (max-width: 767px) { ... }

      'm_md': '865px',

      'm_sm': '430px',

      'sm': {'max': '430px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
