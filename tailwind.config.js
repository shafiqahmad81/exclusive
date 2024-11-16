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
        "danger-color": "var(--danger-color)",
        "warning-color": "var(--warning-color)",
        "teal-color": "var(--teal-color)",
      },
    },
  },
  plugins: [],
};
