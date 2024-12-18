/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{html,js,ejs}", "./node_modules/flowbite/**/*.js"],
        theme: {
            extend: {
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            bree: ["BreeSerif", "serif"],
        },
    plugins: [
        require('flowbite/plugin')
            ],
        },
    };