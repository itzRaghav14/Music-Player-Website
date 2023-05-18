/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors : {
        dominant : {
          DEFAULT : '#121213',
          1 : '#111727',
          2 : '#0B1320'
        },
        complementary : {
          DEFAULT : '#FFFFFF',
          1 : '#4c5262',
          2 : '#696969',
          3 : '#B8B8B8',
          4 : '#a4a8b4'
        },
        accent : {
          DEFAULT : '#36e2ec',
          1 : '#5adae0'
        }
      }
    },
  },
  plugins: [],
}

