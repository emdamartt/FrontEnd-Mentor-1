/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blackExt: 'hsl(0, 0%, 8%)',
        grayMed: 'hsl(0, 0%, 12%)',
        grayInt: 'hsl(0, 0%, 20%)',
        fluorTitle: 'hsl(75, 94%, 57%)',
        lightWhite: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
          inter: ['inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
