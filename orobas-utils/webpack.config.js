const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx"]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "orobas-utils.js"
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
          },
        ],
      },
}