const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const common = require("./webpack.common");

const { NODE_ENV, ANALYZE = false } = process.env;

console.table([
  ["NODE_ENV->当前环境", NODE_ENV],
  ["ANALYZE->是否开启包管理分析", ANALYZE],
]);

const mergeConfig = merge(common, {
  mode: NODE_ENV,
  devtool: "cheap-module-source-map",
  cache: {
    type: "memory",
  },
  target: "web",
  plugins: [
    // 是否开启包管理分析
    ANALYZE && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  stats: "errors-only",
  devServer: {
    port: 8888,
    host: "127.0.0.1",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: {
      index: "/index.html",
      rewrites: [{ from: /^\/(!api)\//, to: "/index.html" }],
    },
  },
});

module.exports = mergeConfig;
