/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          light: {
            500: '#6b8afd', // Base
          },
          dark: {
            500: '#6b8afd', // Base
          },
        },
        // secondary: {

        // },
        accent: {
          light: {
            600: "#F8F8F8",
            500: "#F8F8F8", // Base
            400: '#FFFFFF',
          },
          dark: {
            600: "#202329",
            500: "#2e333d", // Base
            400: '#131313',
          },
        },
        text: {
          light: {
            600: '#131313',
            500: '#A9AEBA', // Base
            400: '#85878C'
          },
          dark: {
            600: '#FFFFFF',
            500: '#A9AEBA', // Base
            400: '#85878C'
          },
        },
        success: {
          600: '#008735',
          500: '#00C77A',
          400: '#86D983',
        },
        warning: {
          600: '#EA8A32',
          500: '#FFB383',
          100: '#FFD388',
        },
        danger: {
          600: '#CC3333',
          500: '#FF4040',
          100: '#FFCBCB',
        },
        background: {
          dark: '#131313',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
      fontSize: {
        h1: ['72px', { lineHeight: '105%', letterSpacing: '0%' }],
        h2: ['56px', { lineHeight: '115%', letterSpacing: '0%' }],
        h3: ['48px', { lineHeight: '115%', letterSpacing: '0%' }],
        h4: ['32px', { lineHeight: '125%', letterSpacing: '0%' }],
        h5: ['24px', { lineHeight: '130%', letterSpacing: '0%' }],
        h6: ['20px', { lineHeight: '130%', letterSpacing: '0%' }],
        subheading1: ['24px', { lineHeight: '121%', letterSpacing: '0%' }],
        subheading2: ['20px', { lineHeight: '131%', letterSpacing: '0%' }],
        subheading3: ['16px', { lineHeight: '138%', letterSpacing: '0%' }],
        subheading4: ['14px', { lineHeight: '146%', letterSpacing: '0%' }],
        body1: ['24px', { lineHeight: '146%', letterSpacing: '0%' }],
        body2: ['20px', { lineHeight: '156%', letterSpacing: '0%' }],
        body3: ['18px', { lineHeight: '153%', letterSpacing: '0%' }],
        body4: ['16px', { lineHeight: '150%', letterSpacing: '0%' }],
        body5: ['14px', { lineHeight: '157%', letterSpacing: '0%' }],
      },
      fontWeight: {
        bold: 700,
        regular: 400,
      },
    },
  },
  plugins: [],
}