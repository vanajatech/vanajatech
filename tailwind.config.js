module.exports = {
  important: true,
  purge: ["./src/**/*.css", "./src/**/*.svg", "./src/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
      mono: ["IBM Plex Mono", "sans-serif"],
    },
    colors: {
      red: "#b40a0a",
    },
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },
  },
  variants: {},
  plugins: [],
}
