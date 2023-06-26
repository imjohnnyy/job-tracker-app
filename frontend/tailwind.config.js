/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        lightergray: "#f9f9f9",
        lightgray: "#7d7983",
        gray: "#2d2e32"
      }
    },
    variants: {
      fill: ['hover', 'focus']
    },
    screens: {
      'max-2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'max-xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'max-lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'max-md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'max-sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }


      '2xl': {'min': '1535px'},
      // => @media (min-width: 1535px) { ... }

      'xl': {'min': '1279px'},
      // => @media (min-width: 1279px) { ... }

      'lg': {'min': '1023px'},
      // => @media (min-width: 1023px) { ... }

      'md': {'min': '767px'},
      // => @media (min-width: 767px) { ... }

      'sm': {'min': '639px'},
      // => @media (min-width: 639px) { ... }
    }
  },
  plugins: [],
}
