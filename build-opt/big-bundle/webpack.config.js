const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  mode: "development", // "production" | "development" | "none"

  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./index.js", // string | object | array,
  optimization: {
    minimize: false,
    concatenateModules: false,
  },
  plugins:[
        new BundleAnalyzerPlugin()
  ]
}
