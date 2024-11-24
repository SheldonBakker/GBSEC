/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include your React files
  ],
  theme: {
    extend: {
      transitionProperty: {
        // Custom transition property for combined transform and opacity
        combined: "transform, opacity",
      },
    },
  },
  plugins: [],
};
