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
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
        zoomOut: {
          '0%': {
            transform: 'scale3d(1.2, 1.2, 1)',
            transformStyle: 'preserve-3d'
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)',
            transformStyle: 'preserve-3d',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          },
        },
        diagonal: {
          '0%': {
            transform: 'translate3d( 200%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(44deg)',
            transformStyle: 'preserve-3d'
          },
          '100%': {
            transform: 'translate3d( -120%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(44deg)',
            transformStyle: 'preserve-3d'
          },
        }
      },
      animation: {
        slide: 'slide 24s linear infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        zoomOut: 'zoomOut 5s ease-in-out',
        diagonal: 'diagonal 1.5s linear'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
}
