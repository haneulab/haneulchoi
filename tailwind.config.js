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
                h: ['Caveat', 'cursive'],
                p: ['Abel', 'sans-serif'],
            },
            transitionProperty: {
                smooth: 'all 0.35s ease-in cubic-bezier(0.39, 0.575, 0.565, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
