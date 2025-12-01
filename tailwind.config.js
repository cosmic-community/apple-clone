/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          gray: {
            50: '#fbfbfd',
            100: '#f5f5f7',
            200: '#e8e8ed',
            300: '#d2d2d7',
            400: '#86868b',
            500: '#6e6e73',
            600: '#424245',
            700: '#333336',
            800: '#1d1d1f',
            900: '#000000',
          },
          blue: '#0071e3',
          link: '#06c',
        },
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.07143', letterSpacing: '-0.005em', fontWeight: '600' }],
        'hero-md': ['48px', { lineHeight: '1.08349', letterSpacing: '-0.003em', fontWeight: '600' }],
        'hero-sm': ['32px', { lineHeight: '1.125', letterSpacing: '0.004em', fontWeight: '600' }],
        'headline': ['28px', { lineHeight: '1.14286', letterSpacing: '.007em', fontWeight: '600' }],
        'subhead': ['21px', { lineHeight: '1.19048', letterSpacing: '.011em', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '1.47059', letterSpacing: '-0.022em', fontWeight: '400' }],
        'callout': ['14px', { lineHeight: '1.42859', letterSpacing: '-0.016em', fontWeight: '400' }],
      },
      maxWidth: {
        'apple': '980px',
        'apple-wide': '1440px',
      },
    },
  },
  plugins: [],
}