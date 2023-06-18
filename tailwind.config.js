/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      heading1: "9.375rem",
      heading2: "6.25rem",
      heading3: "3.55rem",
      heading4: "2rem",
      heading5: "9.375rem",
      subheading2: "0.875rem",
      navtext: "1rem"
    },
    fontFamily: {
      'Bellefair': ['Bellefair', 'serif'],
      'Barlow': ['Barlow Condensed', 'serif'],
    },
    extend: {
      colors: {
        black: '#0B0D17',
        lightBlue: '#D0D6F9',
        white: '#FFFFFF'
      },
    },
  },
  plugins: [],
}
