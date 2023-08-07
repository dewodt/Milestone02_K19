/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      keyframes: {
        blink: {
          "0%": { opacity: "1" },
          "10%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 0.5s ease-in-out",
      },
      colors: {
        "custom-black": "#080808",
        "custom-soft-black": "#242323",
        "custom-blue-green": "#82D0D3",
        "custom-dark-blue-green": "#4E7C7E",
        "custom-orange": "#BE722B",
      },
    },
  },
  plugins: [],
};
