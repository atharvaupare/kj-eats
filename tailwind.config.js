/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkOrange: "#FF9800",
        lOrange: "#FFBF62",
        vlOrange: "#FFDFB0",
        gray: "rgba(34, 34, 34, 0.5)",
        graydark: "rgba(34, 34, 34, 0.8)",
        gainsboro: "#d9d9d9",
        "dark-main": "#2b2f42",
        "operator-message-bg": "#f2f2f2",
        ghostwhite: "#f5f6fa",
        'sideBar': '#f9f6ef',
      'sideBarHover' : '#f6be94',
      'sideBarLogout' : '#e97c33'
      },
    },
    fontFamily: {
      inter: "Inter",
      "open-sans": "'Open Sans'",
      roboto: "Roboto",
      
    },
  },
  plugins: [],
};
