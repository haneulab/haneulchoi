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
                navyDark: '#1B252F',
                grayDark: '#333333',
                orangeRed: '#FF7373',
                normalRed: '#E74343',
                pinkRed: '#f2295b',
            },
            fontFamily: {
                source: ['Source Sans Pro', 'sans-serif'],
                figtree: ['Figtree', 'sans-serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
