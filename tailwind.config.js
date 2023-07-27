/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : 'jit',
  purge:["./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "230px auto",
      }, 
      gridTemplateRows: {
        header: "64px auto",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-black": "#20283c",
        "primary-white": "#f8f9f9",
        "gray-white": "#a2a9b5",
        "dark-gray": "#84848f",
        "gray-black": "#878c94",
        "gray-blue": "#7c8c9c",
        "gray-skin": "#bcbcc4",
        "gray": "#bdc4c4",
        "light-gray": '#c9ced5'
      },
    },
  },
  plugins: [],
};
