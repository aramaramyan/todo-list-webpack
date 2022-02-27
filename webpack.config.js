const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {};

  if(isProd) {
    config.minimizer = [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./js/index.js"]
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"]
  },
  devServer: {
    port: 4200,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: optimization(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, "css-loader"]
      },
      {
        test: /\.(jpeg|png|mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env"
          ]
        }
      }
    ]
  }
}