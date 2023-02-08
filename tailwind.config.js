// tailwind.config.js
module.exports = {
  content: [
    './source/presentation/pages/**/*.{js,ts,jsx,tsx}',
    './source/presentation/components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily:{
        poppins: ["var(--font-poppins)", "sans"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
