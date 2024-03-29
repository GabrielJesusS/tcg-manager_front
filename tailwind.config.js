// tailwind.config.js
module.exports = {
  content: [
    "./source/presentation/pages/**/*.{js,ts,jsx,tsx}",
    "./source/presentation/components/**/*.{js,ts,jsx,tsx}",
    "./source/presentation/hooks/**/*.{js,ts,jsx,tsx}",
    "./source/presentation/enums/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        "3.5xl": "2rem",
      },
      spacing: {
        safe: "1.5rem",
      },
      backgroundImage: {
        "bg-pattern": "url(/images/rsc/bgs/pattern-bg.png)",
      },
      colors: {
        background: "#E7E7E7",
        primary: {
          dark: "#950014",
          DEFAULT: "#cd3b3b",
          light: "#ff6e66",
        },
        secondary: {
          dark: "#005f9b",
          DEFAULT: "#278ccc",
          light: "#69bcff",
        },
        error: "#d32f2f",
        success: "#1b5e20",
        warning: "#ed6c02",
        main: "#0288d1",
        system: {
          800: "#222629",
          600: "#474b4f",
          400: "#6b6e70",
          200: "#D9D9D9",
          100: "#F1F1F1",
          DEFAULT: "#ffffff",
        },
        types: {
          grass: "#388545",
          electric: "#e9aa30",
          fairy: "#e14c89",
          fire: "#da3d38",
          normal: "#e0e0e0",
          fighter: "#b9433f",
          poison: "#9f4ea4",
          dragon: "#996e00",
          steel: "#827d79",
          water: "#3f9dc7",
          dark: "#3d5669",
        },
      },
      aspectRatio: {
        card: "7 / 9.77",
        tv: "4/3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
