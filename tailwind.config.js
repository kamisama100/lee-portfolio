const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [
    require('flowbite/plugin'),
  ],
  theme: {
    screens:{
      'xs': '310px',
      ...defaultTheme.screens,
    },
    extend: {
      display: ["group-hover"],
      colors:{
        'blue':'#009ACD',
        'mint': '#FEE715FF',
        'white': '#FFFFFF',
        'gray':'#C0C0C0',
      },
      fontFamily:{
        mainFont: 'Open Sans',
        roboto: ['Roboto'],
      },
      keyframes:{
        bounceSlow:{
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
       'bounce-slow': 'bounceSlow 5s infinite',
      },
      gridTemplateColumns:{
        '50/50': '50% 50%',
      },
    }, 
  },
  plugins: [],
}
