/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-neutral-900': 'hsl(0, 0%, 7%)',
        'bg-neutral-800': 'hsl(240, 2%, 13%)',
        'bg-neutral-900': 'hsl(240, 2%, 12%)',
        'jet': 'hsl(0, 0%, 22%)',
        'neutral-800': 'hsl(240, 1%, 17%)',
        'white-1': 'hsl(0, 0%, 100%)',
        'white-2': 'hsl(0, 0%, 98%)',
        'light-neutral': 'hsl(0, 0%, 84%)',
        'light-neutral-70': 'hsla(0, 0%, 84%, 0.7)',
        'orange-yellow-crayola': 'hsl(45, 100%, 72%)',
        'text-yellow-400': 'hsl(45, 54%, 58%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '1': '24px',
        '2': '18px',
        '3': '17px',
        '4': '16px',
        '5': '15px',
        '6': '14px',
        '7': '13px',
        '8': '11px',
      },
      boxShadow: {
        '1': '-4px 8px 24px hsla(0, 0%, 0%, 0.25)',
        '2': '0 16px 30px hsla(0, 0%, 0%, 0.25)',
        '3': '0 16px 40px hsla(0, 0%, 0%, 0.25)',
        '4': '0 25px 50px hsla(0, 0%, 0%, 0.15)',
        '5': '0 24px 80px hsla(0, 0%, 0%, 0.25)',
      },
      backgroundImage: {
        'gradient-neutral-800': 'linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97%)',
        'gradient-jet': 'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%)',
        'gradient-yellow-1': 'linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsla(36, 100%, 69%, 0) 50%)',
        'gradient-yellow-2': 'linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%)',
        'bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent': 'linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))',
      },
      screens: {
        'xs': '450px',
        'sm': '580px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1250px',
      },
    },
  },
  plugins: [],
}
