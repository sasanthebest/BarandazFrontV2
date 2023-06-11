/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,}",
        "./pages/**/*.{js,ts,jsx,tsx,}",
        "./components/**/*.{js,ts,jsx,tsx,}",
    ],
    variants: {
      extend: {
          display: ["group-hover"],
      }},
  theme: {
    screens: {
      'mob': '414px',
      // => @media (min-width: 992px) { ... }
      'mobmax': {'max': '415px'},
      // => @media (max-width: 639px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
      extend: {
        strokeWidth: {
          '2': '20px',
        },
        zIndex:{
          "200":"200"
        },
        height: {
          "5v": "5vh",
          "10v": "10vh",
          "20v": "20vh",
          "30v": "30vh",
          "40v": "40vh",
          "50v": "50vh",
          "60v": "60vh",
          "70v": "70vh",
          "80v": "80vh",
          "90v": "90vh",
          "100v": "100vh",
        },
        gridTemplateColumns: {
          'babak': 'repeat(auto-fit, minmax(290px, 1fr))',

        }
      },
    },
    plugins: [],

  }