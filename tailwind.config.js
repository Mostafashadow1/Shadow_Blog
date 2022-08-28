/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        mainColor: "#000",
        secColor: "#828383",
        activeColor: "#ec008c",
      },
      backgroundColor: {
        mainColor: "#fff",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      borderColor: {
        mainBorder: "#00000014",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
