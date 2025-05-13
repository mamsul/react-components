/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        slideDown: 'slideDown 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
