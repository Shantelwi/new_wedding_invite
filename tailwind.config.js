/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#fffdd0'
            },
        },
    },
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    content: [],
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
};

