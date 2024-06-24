const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 3s linear infinite',
          'wiggle': 'wiggle 1s ease-in-out infinite',
          'fadeInUp': 'fadeInUp 0.3s ease-in-out'
        },
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          }
        }
      },
    },
    plugins: [],
}