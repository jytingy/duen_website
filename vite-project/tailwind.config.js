module.exports = {
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        wave: 'wave 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
