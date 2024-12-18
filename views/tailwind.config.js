/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{html,js,ejs}", "./node_modules/flowbite/**/*.js"],
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