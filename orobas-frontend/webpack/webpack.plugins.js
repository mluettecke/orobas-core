const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { isDevelopment } = require("./webpack.helpers");

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  isDevelopment() && new ReactRefreshWebpackPlugin(),
  isDevelopment() && new ReactRefreshWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: "public/index.html",
    inject: true,
    filename: "./index.html",
  }),
];
