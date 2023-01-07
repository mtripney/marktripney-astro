/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // plexSerif: ["IBM Plex Serif", "serif"],
        // plexSans: ["IBM Plex Sans", "sans-serif"],
        angieSans: ["angie-sans", "sans-serif"],
        edita: ["edita", "serif"],
        editaSmall: ["edita-small", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
