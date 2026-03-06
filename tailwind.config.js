/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // neon cyan
        secondary: "#0df4e6", // neon purple
        accent: "#12c2e9", // soft teal
        dark: "#050505", // absolute deep space dark
        darker: "#000000",
        glass: {
          light: "rgba(255,255,255,0.03)",
          border: "rgba(255,255,255,0.08)",
          glow: "rgba(99,102,241,0.15)"
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
