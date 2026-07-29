/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#FFFFFF",
        panel: "#F4F9FD",
        panel2: "#E9F2FB",
        grid: "#D6E6F7",
        signal: "#2563EB",
        signal2: "#38BDF8",
        mint: "#1FBF8F",
        ink: "#0E2A47",
        muted: "#5E7994",
        online: "#1FBF8F",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
    },
  },
  plugins: [],
};
