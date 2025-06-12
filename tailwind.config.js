module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#1C2541',
        charcoal: '#222222',
        offwhite: '#F8F8F8',
        gold: '#B49B6E',
      },
      fontFamily: {
        headline: ['Montserrat', 'sans-serif'],
        body: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
} 