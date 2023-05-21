const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const EslintPlugin = require("eslint-webpack-plugin");
const { DefinePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => ({
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8080,
    open: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx", ".scss"],
    modules: [path.resolve("./src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.module\.(s(a|c)ss)$/,
        use: [
          argv.mode === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(s(a|c)ss)$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          argv.mode === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      hash: true,
      favicon: "src/assets/images/favicon.png",
    }),
    new MiniCssExtractPlugin({
        filename: argv.mode === 'development' ? '[name].css':'[name].[hash].css',
        chunkFilename: argv.mode === 'development' ? '[id].css':'[id].[hash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "./public"), to: "public" },
      ],
    }),
    new Dotenv({
      path: path.join(__dirname, `.env.${argv.mode}`),
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(argv.mode)
    }),
    new EslintPlugin(),
  ].concat(
    argv.mode === "production"
      ? []
      : [new ReactRefreshWebpackPlugin()]
  ),
});
