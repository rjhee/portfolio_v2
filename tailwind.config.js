/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        phone: "url('/assets/img/phone.png')",
      },
      keyframes: {
        slideShow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideHidden: {
          '100%': { transform: 'translateX(-100%)', opacity: 1 },
          '75%': { transform: 'translateX(-75%)', opacity: 0.4 },
          '50%': { transform: 'translateX(-50%)', opacity: 0.4 },
          '25%': { transform: 'translateX(-25%)', opacity: 0.4 },
          '0%': { transform: 'translateX(0%)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
