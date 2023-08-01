/** @type {import('tailwindcss').Config} */
/* module.exports = {
  content: [
    './layout/*.liquid', 
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} */

module.exports = {
  content: {
    files: [
      './layout/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
      './templates/customers/*.liquid',
      './templates/*.liquid',
      './assets/*.css', // Include any custom CSS files you created
    ],
  },
};

