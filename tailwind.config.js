module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      width: {
        "150px": "150px",
      },
      height: {
        "150px": "150px",
      },
      inset: {
        "75px": "75px",
        "-75px": "-75px",
      },
      margin: {
        "75px": "75px",
      },
      padding: {
        "75px": "75px",
      },
      colors: {
        "primary-dark": "#212121",
        "primary-light": "#f0f0f0",
      },
    },
  },
  variants: {},
  plugins: [],
};
