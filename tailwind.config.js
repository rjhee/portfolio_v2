/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'phone': "url('/assets/img/phone.png')",
      },
      keyframes: {
        slideShow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideHidden: {
          '100%': { transform: 'translateX(-100%)' },
          '0%': { transform: 'translateX(0%)' },
        }
      },
    },
  },
  plugins: [],
}
