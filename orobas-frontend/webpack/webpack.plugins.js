const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

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
  new ModuleFederationPlugin({
    name: "host",
    shared: {
      react: {
        eager: true,
        singleton: true,
        strictVersion: true,
        requiredVersion: "18.2.0",
      },
      "react-dom": {
        eager: true,
        singleton: true,
      },
    },
  }),
];
