/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
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
