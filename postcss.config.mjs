const config = {
  plugins: ["@tailwindcss/postcss"],
   theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        // Add more custom colors here
      },
    },
  },
};

export default config;
