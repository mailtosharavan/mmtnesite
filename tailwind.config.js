/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5a4",
        accent: "#7c3aed",
        bg: "#0f172a",
        navy: {
          900: "#020c1b",
          800: "#0a192f",
          700: "#112240",
          light: "#233554",
        },
        cyan: {
          glow: "#64ffda",
          dim: "rgba(100, 255, 218, 0.1)",
        },
      },
      boxShadow: {
        glow: "0 0 10px rgba(100, 255, 218, 0.5), 0 0 20px rgba(100, 255, 218, 0.3)",
        "glow-lg": "0 0 20px rgba(100, 255, 218, 0.6), 0 0 40px rgba(100, 255, 218, 0.4)",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: [],
};