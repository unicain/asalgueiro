/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#121212',
          deepCoffee: '#1E1613',
          lightCream: '#FAF7F2',
          champagne: '#F5F0EB',
          gold: '#C5A059',
          goldLight: '#ECC880',
          goldDark: '#9F7E3B',
          whatsapp: '#25D366',
          whatsappHover: '#1EBE5D',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
      }
    },
  },
  plugins: [],
}
