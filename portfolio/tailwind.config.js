/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        'white': '0 4px 4px rgba(255, 255, 255, 0.8)',
      },
      // animation: {
      //   'gradient-x': 'gradient-x 5s ease infinite',
      // },
      // keyframes: {
      //   'gradient-x': {
      //     '0%, 100%': { backgroundPosition: '0% 50%' },
      //     '50%': { backgroundPosition: '100% 50%' },
      //   },
      // },
    },
  },
  plugins: [],
}