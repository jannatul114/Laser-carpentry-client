module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#1f2937",

        "secondary": "#f59e0b",

        "accent": "#ea580c",

        "neutral": "#fcd34d",

        "base-100": "#FFFFFF",

        "info": "#3ABFF8",

        "success": "#36D399",

        "warning": "#FBBD23",

        "error": "#F87272",
      },
    },
  ],
  plugins: [require("daisyui")],
}