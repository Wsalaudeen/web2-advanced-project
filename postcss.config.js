// postcss.config.js
// module.exports = {
//   plugins: [require("tailwindcss"), require("autoprefixer")],
// };
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

module.exports = {
  plugins: {
    "postcss-nested": {}, // for handling nesting
    tailwindcss: {},
    autoprefixer: {},
  },
};
