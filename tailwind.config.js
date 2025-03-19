import { heroui } from '@heroui/react';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './styles/**/*.{js,jsx,ts,tsx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1200px',
            xl: '1700px',
        },
    },
    darkMode: 'class',
    plugins: [
        heroui({
            defaultTheme: 'dark', // default theme from the themes object
            // defaultExtendTheme: 'dark', // default theme to extend on custom themes
            themes: {
                dark: {
                    layout: { disabledOpacity: '0.5' },
                    colors: {
                        default: {
                            50: '#fdfdfd',
                            100: '#f9f9f9',
                            200: '#355369',
                            300: '#f3f3f3',
                            400: '#607789',
                            500: '#ececec',
                            600: '#c3c3c3',
                            700: '#999999',
                            800: '#707070',
                            900: '#474747',
                            foreground: '#ececec',
                            DEFAULT: '#d3d6db',
                        },
                        primary: {
                            50: '#e0e5e8',
                            100: '#b6c0c8',
                            200: '#8b9ca9',
                            300: '#607789',
                            400: '#355369',
                            500: '#0a2e49',
                            600: '#08263c',
                            700: '#071e2f',
                            800: '#051623',
                            900: '#030e16',
                            foreground: '#fff',
                            DEFAULT: '#0a2e49',
                        },
                        secondary: {
                            50: '#feede8',
                            100: '#fbd4c7',
                            200: '#f9bba7',
                            300: '#f7a186',
                            400: '#f58866',
                            500: '#f36f45',
                            600: '#c85c39',
                            700: '#9e482d',
                            800: '#733521',
                            900: '#492115',
                            foreground: '#e7e7e7',
                            DEFAULT: '#f36f45',
                        },
                        success: {
                            50: '#dfedfd',
                            100: '#b3d4fa',
                            200: '#86bbf7',
                            300: '#59a1f4',
                            400: '#2d88f1',
                            500: '#006fee',
                            600: '#005cc4',
                            700: '#00489b',
                            800: '#003571',
                            900: '#002147',
                            foreground: '#fff',
                            DEFAULT: '#006fee',
                        },
                        background: '#00040f',
                        foreground: '#ececec',
                        focus: '#006FEE',
                        overlay: '#ffffff',
                        content2: {
                            DEFAULT: '#733521',
                            foreground: '#fff',
                        },
                    },
                },
            },
        }),
        typography,
    ],
};
