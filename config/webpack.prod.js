const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const common = require("./webpack.common");

const { NODE_ENV, SMP = false } = process.env;

// TODO 待办项 purgecss-webpack-plugin

console.table([
  ["NODE_ENV->当前环境", NODE_ENV],
  ["SMP->打包耗时分析", SMP],
]);

const basicConfig = merge(common, {
  mode: NODE_ENV,
  externals: {},
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
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            pure_funcs: ["console.log"],
          },
        },
      }),
    ],
  },
  devtool: "hidden-source-map",
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new CleanWebpackPlugin(),
  ],
});

const smpConfig = SMP ? smp.wrap(basicConfig) : basicConfig;
module.exports = smpConfig;
