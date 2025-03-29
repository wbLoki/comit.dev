import { heroui } from '@heroui/react';
import typography from '@tailwindcss/typography';
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './styles/**/*.{js,jsx,ts,tsx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
        './node_modules/fumadocs-ui/dist/**/*.js',
    ],
    presets: [createPreset()],
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
            defaultExtendTheme: 'dark', // default theme to extend on custom themes
            themes: {
                dark: {
                    layout: { disabledOpacity: '0.5' },
                    colors: {
                        default: {
                            50: '#0d0d0e',
                            100: '#19191c',
                            200: '#26262a',
                            300: '#323238',
                            400: '#3f3f46',
                            500: '#65656b',
                            600: '#8c8c90',
                            700: '#b2b2b5',
                            800: '#d9d9da',
                            900: '#ffffff',
                            foreground: '#fff',
                            DEFAULT: '#3f3f46',
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
        // typography,
    ],
};
