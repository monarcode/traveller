const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0097AA",
        secondary: "#F0FDFF",
      },
      container: {
        center: true,
        padding: "1.2rem",
      },
      backgroundImage: {
        "tm1-header": "url(@/assets/img/tm1-header-bg.webp)",
      },
      fontFamily: {
        product: ["Product Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0097AA",
          secondary: "#F5FEFF",
          accent: "#fcd34d",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#0ea5e9",
          success: "#36D399",
          warning: "#f97316",
          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
