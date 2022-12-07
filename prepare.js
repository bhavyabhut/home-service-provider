// prepare.js
const isCi = process.env.CI !== undefined;
if (!isCi) {
  require('husky').install();
}
