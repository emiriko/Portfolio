/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: 'Roboto Slab',
      },
      colors: {
        deepblue: '#4f46e5',
        description: '#797877',
      },
      backgroundImage: {
        'profile-image': "url('../../public/assets/images/ProfilePict.jpg')",
        'universitas-indonesia':
          "url('../../public/assets/images/UniversitasIndonesia.jpg')",
      },
    },
  },
  plugins: [],
}
