/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './contexts/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            maxWidth: {
                cutoff: '1280px',
            },
            colors: {
                themeLight: '#F9F9F9',
                themeLightDark: '#9D9D9D',
                themeDark: '#100F0F',
                themeDarkLight: '#2B2B2B',
            },
            fontFamily: {
                h: ['Inter Tight', 'sans-serif'],
                p: ['Cormorant', 'serif'],

                e1: ['Indie Flower', 'cursive'],
                e2: ['Francois One', 'snas-serif'],
                e3: ['Handlee', 'cursive'],
            },
            transitionProperty: {
                smooth: 'all 0.35s ease-in cubic-bezier(0.39, 0.575, 0.565, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
