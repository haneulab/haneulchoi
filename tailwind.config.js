/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './contexts/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                grayWhite: '#eeeeee',
                normalGray: '#7d7d7d',
                normalDark: '#272121',
                navyDark: '#1B252F',
                grayDark: '#333333',
                orangeRed: '#FF7373',
                normalRed: '#E74343',
                pinkRed: '#f2295b',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
