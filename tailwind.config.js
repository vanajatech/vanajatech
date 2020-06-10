const { colors } = require("@material-ui/core")

module.exports = {
  important: true,
  purge: ["./src/**/*.css", "./src/**/*.svg", "./src/**/*.js"],
  theme: {
    boxShadow: {
      red:
        "0 1px 3px 0 rgba(180, 10, 10, 0.1), 0 1px 2px 0 rgba(180, 10, 10, 0.06)",
    },
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
      mono: ["IBM Plex Mono", "sans-serif"],
    },
    colors: {
      red: "#b40a0a",
      orange: "#f26c3f",
      white: "#ffffff",
      gray: {
        "100": "#f9f9f9",
        "300": "#cdd7d6",
        "500": "#5a757f",
        "900": "#1f2538",
      },
      black: "#000000",
    },
    extend: {
      colors: {
        gray: {
          "100": "#f9f9f9",
          "300": "#cdd7d6",
          "500": "#5a757f",
          "900": "#1f2538",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
