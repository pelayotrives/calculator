/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '1 1 25%',
        '3': '1 1 33.333%',
      },
      rotate: {
        '360': '360deg',
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1.1)' },
        },
        microzoom: {
          '0%, 100%': { transform: 'scale(1.05)' },
        },
        alternate: {
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-75px)' },
        },
      },
      animation: {
        zoom: 'zoom 1.5s ease-in-out infinite',
        microzoom: 'microzoom 1.5s ease-in-out infinite',
        alternate: 'alternate 2s ease-in-out infinite alternate',
      }
    },
    screens: {
      'xsm':'350px',
      'sm':'500px',
      'xmd':'625px',
      'md':'750px',
      'xlg':'875px',
      'lg':'1000px',
      'xl':'1125px',
      '2xl':'1250px',
      '3xl':'1325px',
      '4xl':'1450px',
      '5xl':'1575px',
      '6xl':'1700px',
      '7xl':'1825px',
      '8xl':'1950px',
    }
  },
  plugins: [],
}
