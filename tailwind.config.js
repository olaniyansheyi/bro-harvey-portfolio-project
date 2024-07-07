/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroSlantImg: "url('~/public/img/hero-slant-bg.png')",
      },
      colors: {
        primary: "#909090",
      },
    },
  },
  plugins: [],
};
