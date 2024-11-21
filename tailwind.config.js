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
        "secondary-color": "var(--secondary-color)",
        "secondary2-color": "var(--secondary2-color)",
        "danger-color": "var(--danger-color)",
        "warning-color": "var(--warning-color)",
        "teal-color": "var(--teal-color)",
      },
      screens: {
        "sm-ex": "450px",
      },
    },
  },
  plugins: [],
};
