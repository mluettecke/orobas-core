module.exports = {
  mode: "development",
  entry: ["./src/index.tsx"],
  module: {
    rules: require("./webpack/webpack.rules"),
  },
  stats: "errors-warnings",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: require("./webpack/webpack.aliases"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: require("./webpack/webpack.plugins"),
};
