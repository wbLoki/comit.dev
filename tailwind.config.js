/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './styles/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00040f',
                secondary: '#00f6ff',
                dimWhite: 'rgba(255, 255, 255, 0.7)',
                dimBlue: 'rgba(9, 151, 124, 0.1)',
                orange: '#F36F45',
                blue: '#0A2E49',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1200px',
            xl: '1700px',
        },
    },
    plugins: [],
};
