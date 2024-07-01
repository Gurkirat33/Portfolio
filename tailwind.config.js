/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        spread: {
          "0%": { filter: "drop-shadow(0px -28px 2px #A34343)" },
          "100%": { filter: "drop-shadow(0px 50px 2px #A34343)" },
        },
      },
      animation: {
        spread: "spread 1s infinite ease-in-out alternate",
      },
      colors: {
        primary: "#A34343",
        secondary: "#E9C874",
        dim: "#FBF8DD",
        lite: "#C0D6E8",
      },
    },
  },
  plugins: [],
};
