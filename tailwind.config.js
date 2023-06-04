/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primaryDark: '#7256b3',
        text: '#EBD8FF',
        textSecondary: '#373737',
        buttonBg: '#EBD8FF',
        activeButtonBg: '#5CD3A8',
        acent: '#FDF7C3',
        border: '#7ebbd7',
        red: '#bb0a01',
      },
      backgroundImage: {
        articleBg:
          'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
      },
      boxShadow: {
        cardShadow: '-3px 7px 10px rgba(0, 0, 0, 0.23)',
        buttonShadow: '0px 3px 3px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        lg: { min: '1280px' },
        md: { min: '880px' },
        sm: { min: '400px' },
      },
    },
  },
  plugins: [],
};
