/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#343C6A",
        secondary: "#232323",
        blueGray: "#718EBF",
        skyLight: "#DFEAF2",
        steel: "#B1B1B1",
        cloud: "#F5F7FA",
      },
    },
  },
  plugins: [],
};
