module.exports = {
  content: [],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
      tajawal: ["Tajawal", "sans-serif"],
    },
    extend: {
      colors: {
        theme0: "#973075",
        theme1: "#C01D85",
        theme2: "#AF5B94",
        body: "#FAFCFD",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c01d85",
          neutral: "#17161D",
          "base-100": "#FFFFFF",
        },
      },
    ],
    logs: false,
    darkTheme: false,
  },
};
