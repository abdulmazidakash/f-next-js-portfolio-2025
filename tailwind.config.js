/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
        primary: 'var(--color-primary)',
        primaryDark: 'var(--color-primaryDark)',
      },
      backgroundImage: {
        circularLight: 'var(--background-circularLight)',
      },
      animation: {
        wiggle: 'var(--animate-wiggle)',
      },
    },
  },
  plugins: [],
};