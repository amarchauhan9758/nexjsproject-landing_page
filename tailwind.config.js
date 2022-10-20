/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        // large screen
        "rightFadeIn": "rightFadeIn 0.9s ease-in-out 0s forwards",
        "leftFadeIn": "leftFadeIn 0.9s ease-in-out 0s forwards",
        "leftFadeOut": "leftFadeOut 0.9s ease-in-out 0s forwards",
        "rightFadeOut": "rightFadeOut 0.9s ease-in-out 0s  forwards",

        // tab
        "rightFadeInTab": "rightFadeInTab 0.9s ease-in-out 0s forwards",
        "leftFadeInTab": "leftFadeInTab 0.9s ease-in-out 0s forwards",
        "leftFadeOutTab": "leftFadeOutTab 0.9s ease-in-out 0s forwards",
        "rightFadeOutTab": "rightFadeOutTab 0.9s ease-in-out 0s  forwards",

      },
      keyframes: theme => ({

        // large screen
        rightFadeIn: {
          '0%': {
            transform: 'translateX(-250vw)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        rightFadeOut: {

          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-250vw)'
          }


        },
        leftFadeIn: {

          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-70vw)'
          }


        },
        leftFadeOut: {

          '0%': {
            transform: 'translateX(-70vw)'
          },
          '100%': {
            transform: 'translateX(0)'
          }


        },

        // tab
        rightFadeInTab: {
          '0%': {
            transform: 'translateX(-150vw)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        rightFadeOutTab: {

          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-150vw)'
          }


        },
        leftFadeOutTab: {

          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(120vw)'
          }


        },
        leftFadeInTab: {

          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-120vw)'
          }


        },
      }),
      fontFamily: {
        nezto: ["nezto", "sans-serif"],
        josefin: ["josefin"]
      },
    },
    plugins: [],
  }
}