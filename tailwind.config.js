/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom_yellow: "#ebc009",
        yellow_hover: "#fdcd01",
        custom_green: "#109a27",
        green_hover: "#0fac29",
        custom_red: "#b51527",
        custom_red_hover: "#ce1127",
      },
      backgroundColor:{
        custom_yellow: "#ebc009",
        yellow_hover: "#fdcd01",
        custom_green: "#109a27",
        green_hover: "#0fac29",
        custom_red: "#b51527",
        custom_red_hover: "#ce1127",
      }
    },
  },
  plugins: [],
};
