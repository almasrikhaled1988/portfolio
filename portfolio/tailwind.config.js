/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Self-hosted (see main.js). Arabic falls back to IBM Plex Sans Arabic, which Inter doesn't cover.
        sans: ['"Inter Variable"', '"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        // Theme colors come from CSS variables (style.css), so the theme menu can switch them at runtime
        primary: 'rgb(var(--primary) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        night: {
          0: 'rgb(var(--bg-0) / <alpha-value>)',
          1: 'rgb(var(--bg-1) / <alpha-value>)',
          2: 'rgb(var(--bg-2) / <alpha-value>)',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'gradient-shift': {
          to: { backgroundPosition: '200% center' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        gradient: 'gradient-shift 6s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
