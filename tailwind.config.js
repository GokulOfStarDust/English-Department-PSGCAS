/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        "between-lg-xl": "1067px",
        xl: "1330px",
        xxl: "1570px",
      },
      colors: {
        title: "rgba(30, 28, 26, 0.9)",
        "background-brown": "#f6f2e4",
        "navbar-brown": "#e0dccd",
        "event-card-black": "#131210",
        "text-black": "#252525",
      },
      fontFamily: {
        hanuman: ["Hanuman", "sans-serif"],
        plex: ["IBM Plex Mono", "monospace"],
        holtwood: ["Holtwood One SC", "serif"],
        josefin: ["Josefin Slab", "serif"],
      },
      textShadow: {
        title: "4px 4px 30px rgba(187, 177, 152, 0.6)",
      },

      animation: {
        fadeIn: "FadeIn 2.5s ease-in forwards",
      },

      keyframes: {
        FadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
