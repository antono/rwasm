// webpack.config.js
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  entry: "./static/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: [
        'cargo build --release --target wasm32-unknown-unknown',
        'wasm-bindgen ./target/wasm32-unknown-unknown/release/rwasm.wasm --out-dir ./dist',
      ],
      onBuildEnd: ['echo "Webpack End"']
    }),
  ]
};
