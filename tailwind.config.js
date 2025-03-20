/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter", sans-serif'],
        body: ['"Poppins", sans-serif'],
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "primary2-color": "var(--primary2-color)",
        "secondary-color": "var(--secondary-color)",
        "secondary2-color": "var(--secondary2-color)",
        "danger-color": "var(--danger-color)",
        "warning-color": "var(--warning-color)",
        "teal-color-light": "var(--teal-color-light)",
        "teal-color": "var(--teal-color)",
        "prestige-green": "var(--prestige-green)",
        "tricorn-black": "#2F2E30",
      },
      screens: {
        "sm-ex": "440px",
      },
    },
  },
  plugins: [],
};
