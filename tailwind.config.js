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
      animation: {
        "slide-fwd-center": "slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        border: "border-anim 0.7s steps(3,end) infinite",
        "border-white": "border-anim-white 0.7s steps(3,end) infinite",
      },
      colors: {
        "primary-dark": "#212121",
        "primary-light": "#f0f0f0",
      },
    },
  },
  variants: {
    animation: ["hover"],
  },
  plugins: [],
};
