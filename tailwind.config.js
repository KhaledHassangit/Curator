/** @type {import('tailwindcss').Config} */
module.exports = {
  // Include all app and component files that may contain NativeWind classes
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};