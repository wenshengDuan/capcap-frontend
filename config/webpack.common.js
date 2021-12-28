const webpack = require("webpack");
const path = require("path");
const WebpackBar = require("webpackbar");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tsImportPluginFactory = require("ts-import-plugin");

const babelLoaderOptions = require("../.babelrc");

module.exports = {
  entry: {
    index: path.join(__dirname, "../src/index"),
  },
  output: {
    path: path.join(__dirname, "../dist"),
    chunkFilename: "js/[name].[contenthash].js",
    filename: "js/[name].[contenthash].js",
    publicPath: "/",
  },
  performance: {
    hints: false,
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        "react-dom": {
          name: "react-dom",
          test: /[\\/]node_modules[\\/]react-dom[\\/]/,
          chunks: "all",
          priority: 10,
        },
        "@ant-design": {
          name: "@ant-design",
          test: /[\\/]node_modules[\\/]@ant-design[\\/]/,
          chunks: "all",
          priority: 10,
        },
        lodash: {
          name: "lodash",
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          chunks: "all",
          priority: 10,
        },
        moment: {
          name: "moment",
          test: /[\\/]node_modules[\\/]moment[\\/]/,
          chunks: "all",
          priority: 10,
        },
        antd: {
          name: "antd",
          test: /[\\/]node_modules[\\/]antd[\\/]/,
          chunks: "all",
          priority: 9,
        },
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "../src"),
      components: path.resolve(__dirname, "../src/components"),
      assets: path.resolve(__dirname, "../src/assets"),
      process: "process/browser",
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 小于8K的图片自动转成base64，并且不会存在实体图片
              limit: 8192,
              // 图片打包后存放的目录
              outputPath: "images/",
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader?cacheDirectory",
            options: babelLoaderOptions,
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: false,
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory([
                    {
                      libraryName: "antd",
                      style: true,
                    },
                  ]),
                ],
              }),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      favicon: path.join(__dirname, "../public/favicon.ico"),
      chunks: ["index"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[id].[contenthash].css",
    }),
    new WebpackBar(),
  ],
};
