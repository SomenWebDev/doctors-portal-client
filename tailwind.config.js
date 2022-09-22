/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7cbf2b",

          secondary: "#004a8c",

          accent: "#d3d13d",

          neutral: "#181721",

          "base-100": "#E4E9EC",

          info: "#3681E2",

          success: "#4EDA81",

          warning: "#A06D0D",

          error: "#F83F6A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
