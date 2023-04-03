/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './contexts/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
