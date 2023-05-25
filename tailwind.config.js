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
    },
      extend: {
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