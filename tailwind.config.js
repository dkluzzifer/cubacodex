/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e1e',
        'bg-secondary': '#252526',
        'bg-tertiary': '#2d2d2d',
        'text-primary': '#d4d4d4',
        'text-secondary': '#858585',
        'border-color': '#3c3c3c',
        accent: '#61afef',
        'accent-hover': '#4d8ccf',
        success: '#98c379',
        warning: '#e5c07b',
        error: '#e06c75',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'Consolas', 'Monaco', 'monospace'],
        sans: ['"Segoe UI"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
