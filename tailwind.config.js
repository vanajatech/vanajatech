module.exports = {
  important: true,
  purge: ["./src/**/*.css", "./src/**/*.svg", "./src/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
      mono: ["IBM Plex Mono", "sans-serif"],
    },
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },
    extend: {
      fontSize: {
        "9xl": "7rem",
      },
      colors: {
        red: "#b40a0a",
      },
    },
  },
  variants: {},
  plugins: [],
}
