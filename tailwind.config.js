/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./stories/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        hover: "4%",
        focus: "4%",
        press: "8%",
        active: "12%",
      },
      fontFamily: {
        neueMontreal: ["Neue Montreal"],
        editorialNew: ["Editorial New"],
      },
      boxShadow: {
        extraSmall: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        small: '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
        medium: '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        large: '0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        extraLarge: '0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
        extraLarge2: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        innerShadow: 'inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
      },
      
    },
  },
  plugins: [],
}
