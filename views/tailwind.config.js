/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{html,js,ejs}"],
        theme: {
            extend: {},
        },
        variants: {
            extend: {
            placeholderOpacity: ['responsive', 'focus'], // Habilitar variantes se necessário
            },
        },
    plugins: [],
};