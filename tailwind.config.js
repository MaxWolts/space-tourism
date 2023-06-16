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
    },
    fontFamily: {
      'Bellefair': ['Bellefair', 'serif'],
      'Barlow': ['Bellefair', 'serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#0B0D17',
        lightBlue: '#D0D6F9',
        white: '#FFFFFF'
      },
    },
  },
  plugins: [],
}
