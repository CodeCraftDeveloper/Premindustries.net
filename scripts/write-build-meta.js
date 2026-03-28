const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "..", "lib", "generated");
const outputFile = path.join(outputDir, "buildMeta.js");
const generatedAt = new Date().toISOString();

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(
  outputFile,
  `export const BUILD_LASTMOD = "${generatedAt}";\nexport default BUILD_LASTMOD;\n`,
  "utf8",
);
