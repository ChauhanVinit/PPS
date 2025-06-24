/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    screens: {
      xxs: '390px',
      xs: '480px',
      sm: '640px',
      md: '790px',
      lg: '1040px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        jakarta: 'Plus Jakarta Sans',
        urbanist: 'Urbanist',
        dmSans: 'DM Sans',
      },
     
    },
  },
  plugins: [
    function ({ matchVariant }) {
      matchVariant('dots', () => `& > ul`);
      matchVariant('dot', () => `& > ul > li > button`);
      matchVariant('activeDot', () => `& > ul > li > .is-active`);
    },
  ],
};

