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
                grayWhite: '#eeeeee',
                normalGray: '#7d7d7d',
                normalDark: '#222222',
                navyDark: '#20262E',
                grayDark: '#333333',
                orangeRed: '#FF7373',
                normalRed: '#E74343',
                pinkRed: '#f2295b',
            },
            fontFamily: {
                source: ['Source Sans Pro', 'sans-serif'],
                figtree: ['Figtree', 'sans-serif'],
            },
            transitionProperty: {
                smooth: 'all 0.35s ease-in cubic-bezier(0.39, 0.575, 0.565, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
