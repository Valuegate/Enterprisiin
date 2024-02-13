/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: {
        max: "400px",
      },

      md: {
        max: "768px",
      },
      
    },
    colors: {
      white: "#fff",
      "white-1": "#F5F5F5",
      "white-2": "#F1FFF2",
      "white-5": "#AAB7B0",
      selection: "#EFF7FF",
      blue: "#113355",
      "light-blue": "#3399FF",
      "light-blue-1": "#D6EBFF",
      green: "#2C4C3B",
      "light-green": "#00A707",
      "light-green-1": "#E9EDEB",
      "light-green-2": "#D4DBD7",
      "light-green-3": "#BFC9C4",
      "light-green-4": "#AAB7B0",
      "light-green-5": "#95A59D",
      "light-green-6": "#809389",
      "light-green-7": "#6B8175",
      "light-green-8": "#566F62",
      "light-green-9": "#2C4C3B",
      "light-green-10": "#274435",
      "light-green-11": "#233C2F",
      "light-green-12": "#1E3529",
      "light-green-13": "#1A2D23",
      "light-green-14": "#16261D",
      "light-green-15": "#111E17",
      "light-green-16": "#0D1611",
      "light-green-17": "#080F0B",
      "light-green-18": "#040705",
      "light-green-19": "#000000",
      "light-green-20": "#E3F4E4",
      "light-green-21": "#CEEFD9",
      "light-green-22": "#0A9138",
      lightblack: "#313734",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#e7e7e8",
      "gray-light-1": "#f8f8f8",
      black: "#080F0B",
      "black-1": "#DADADA",
      "light-black": "#EDEDED",
      "light-black-1": "#CECFCE",
      "light-black-2": "#ADAFAE",
      "light-black-3": "#838785",
      "light-black-4": "#5A5F5C",
      "light-black-5": "#313734",
      "light-black-6": "#080F0B",
      "light-black-7": "#070D09",
      "light-black-8": "#050A07",
      "light-black-9": "#040806",
      "light-black-10": "#030504",
      "light-black-11": "#020302",
      "light-black-12": "#FAFAFA",
      "light-black-13": "#595E5C",
      "light-black-14": "#D9D9D9",
      "light-black-15": "#D4DBD7",
      orange: "#FF5341",
      "light-yellow": "#FF8820",
      "light-yellow-1": "#FFE7D6",
      "light-yellow-2": "#DE7C32",
      "light-yellow-3": "#FFE9E9",
      danger: "#FF0000",
    },
    // extend: {
    //   spacing: {
    //     "8xl": "96rem",
    //     "9xl": "128rem",
    //   },
    //   borderRadius: {
    //     "4xl": "2rem",
    //   },
    // },
  },
  plugins: [],
};
