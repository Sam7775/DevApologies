/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': ' rgba(66, 184, 131, 0.5)', 
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      'display': ['Oswald',],
      'body': ['"Open Sans"'],
    },
    keyframes: {
      scroll: {
        '0%, 100%': { transform: 'translateX(-50%)' },
        '50%': { transform: 'translateX(1%)' },
      },
    },
    animation: {
      scroll: 'scroll 5s ease-in-out infinite',
    },

  },
  
  plugins: [],

}
