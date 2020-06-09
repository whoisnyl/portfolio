const path = require("path");
const withFonts = require("next-fonts");

module.exports = withFonts({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
});
