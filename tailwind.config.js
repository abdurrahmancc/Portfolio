module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        myThemes: {
          primary: "#ff651c",
          secondary: "#ffffff",
          accent: "#1E293B",
          neutral: "#3D4451",
          "base-100": "#111827",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        lightThemes: {
          primary: "#570DF8",
          secondary: "#000000",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
