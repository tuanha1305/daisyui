const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    { raw: '' },
  ],
  safelist: [
    { pattern: /.*/ },
    { pattern: /.sm/, variants: ["sm"] },
    { pattern: /.md/, variants: ["md"] },
    { pattern: /.lg/, variants: ["lg"] },
    { pattern: /.xl/, variants: ["xl"] },
  ],
  theme: {
    colors: require("../colors"),
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase(require("../../dist/base"));
      addUtilities(require("../../dist/utilities"), {
        variants: ["responsive"],
      });
      addUtilities(require("../../dist/utilities-unstyled"), {
        variants: ["responsive"],
      });
      addUtilities(require("../../dist/utilities-styled"), {
        variants: ["responsive"],
      });
    }),
  ],
};
