module.exports = {
  mode: "jit",
  purge: [
    "./partials/**/*.hbs",
    "./templates/**/*.hbs",
    "./src/**/*.js",
    "./src/**/*.ts",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'm-l': '992px', // custom query
      // => @media (min-width: 992px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    container: {
        center: true,
        padding: {
            DEFAULT: '15px;'
        }
    },
    extend: {
      screens: {
        'small': '576px',
        'medium': '768px',
        'large': '992px',
        'xlarge': '1200px'
      },
      colors: {
        "ll-blue": "#00173C",
        "ll-hover-blue": "#001c48",
        "ll-red": "#E52222",
        "ll-light-blue": "#5c6d88",
        "clutter": "#037f78",
        "lightblue": "#eaf3f9",
          "dark": "#242424",
          "light": "#f9f9f9",
      },
    },
  },
  variants: {
    extend: {},
    },

    plugins: [function ({ addComponents }) {
        addComponents({
            '.container': {
                maxWidth: '100%',
                '@screen small': {
                    maxWidth: '540px',
                },
                '@screen medium': {
                    maxWidth: '810px',
                },
                '@screen large': {
                    maxWidth: '960px',
                },
                '@screen xlarge': {
                    maxWidth: '1110px',
                },
            }
        })
        addComponents({
            '.section': {
                padding: '2.5rem 0',           
                '@screen medium': {
                    padding: '3rem 0',
                },
                '@screen large': {
                    padding: '4rem 0',
                },
                
            }
        })
    }
    ],
};
