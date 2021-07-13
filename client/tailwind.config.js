module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: "#ff385c",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      height: {
        mds: "70vh",
        lgs: "90vh",
        sm: "28rem",
        md: "32rem",
        lg: "34rem",
        xl: "36rem",
        xxl: "40rem",
        xxxl: "70rem"
      },
      width: {
        mds: "70vh",
        lgs: "90vh",
        sm: "28rem",
        md: "32rem",
        lg: "34rem",
        xl: "36rem",
        xxl: "40rem",
        xxxl: "50rem"
      },
    },
    screens: {
      all: "0px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
