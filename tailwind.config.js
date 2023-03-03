/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '3rem',
        lg: '128px',
      },
      center: true,
      // container預設斷點拔掉,改成1024以上,1366以上
      screens: {
        'md': '1024px',
        'lg': '1366px',
      },
    },
    extend: {},
  },
  plugins: [],
}
