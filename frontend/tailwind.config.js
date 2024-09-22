/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        "4xl": "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      },
      backgroundImage: {
        layout: "url('/src/assets/images/setupbg.png')",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: " translateY(-90px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        grow: {
          "0%, 100%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
        },
      },
      animation: {
        bounce: "bounce 1s ease-in-out infinite",
        fadeIn: "fadeIn 0.2s ease-in-out",
        grow: "grow 1s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
  darkMode: "selector",
};
