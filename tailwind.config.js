module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      xl: "1200px",
    },
    container: {
      center: true,
    },
    extend: {
      width: {
        "150px": "150px",
        "100px": "100px",
      },
      height: {
        "150px": "150px",
        "100px": "100px",
      },
      inset: {
        "75px": "75px",
        "-75px": "-75px",
        "-50px": "-50px",
      },
      margin: {
        "75px": "75px",
      },
      padding: {
        "75px": "75px",
      },
      backgroundColor: {
        overlay: "rgba(0,0,0,0.6)",
      },
      animation: {
        "slide-fwd-center": "slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        border: "border-anim 0.5s ease-in-out",
        "border-white": "border-anim-white 0.5s ease-in-out ",
      },
      colors: {
        "primary-dark": "#212121",
        "primary-light": "#f0f0f0",
      },
    },
  },
  variants: {
    animation: ["hover"],
    inset: ["responsive"],
    height: ["group-hover", "responsive"],
    width: ["group-hover", "responsive"],
    overflow: ["group-hover"],
    opacity: ["group-hover"],
    padding: ["group-hover", "responsive"],
    scale: ["group-hover"],
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@screen xs": {
            maxWidth: "94%",
          },
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "740px",
          },
          "@screen xl": {
            maxWidth: "1160px",
          },
        },
      });
    },
  ],
};
