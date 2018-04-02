const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./node_modules/.bin/tailwind.config.js'),
        require('autoprefixer'),
    ],
};