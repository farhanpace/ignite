/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      changa: ['Changa']
    },
    extend: {
      colors: {
        igniteDarkBlue: "#0F1464",
        igniteBlue: "#005AFA",
        igniteMagenta: "#FF3264",
        igniteGreen: "#00C864",
      },
      lineHeight: {
        '6rem' : '6rem',
      },
      maxWidth: {
        'xxs' : '238px',
      },
    },

    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  plugins: [

  ],
}