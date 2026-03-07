/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8", // electric tech blue
        secondary: "#3b82f6", // cobalt blue
        accent: "#22d3ee", // neon cyan
        dark: "#050505", // absolute deep space dark
        darker: "#000000",
        glass: {
          light: "rgba(255,255,255,0.03)",
          border: "rgba(255,255,255,0.08)",
          glow: "rgba(56,189,248,0.18)"
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'deep-space': 'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)',
      },
    },
  },
  plugins: [],
}
