const path = require("path");
const cwd = process.cwd();

/**
 * Yo are we developing?
 */
function isDevelopment() {
  return process.env.NODE_ENV !== "production";
}

/**
 * Create webpack aliases
 */
function createWebpackAliases(aliases) {
  const result = {};
  for (const name in aliases) {
    result[name] = path.join(cwd, aliases[name]);
  }
  return result;
}

module.exports = {
  isDevelopment,
  createWebpackAliases,
};
