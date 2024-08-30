/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: " translateY(-90px)" },
        },
      },
      animation: {
        bounce: "bounce 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
  darkMode: "selector",
};
