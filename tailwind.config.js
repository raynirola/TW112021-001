module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        BenchNine: ['BenchNine', 'sans-serif'],
        BebasNeue: ['Bebas Neue', 'serif'],
        Poppins: ['BenchNine', 'serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
}
