'use strict';

const webpack = require('webpack');
const path = require('path');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', path.join(__dirname, 'src', 'app-client.js')],
  output: {
    path: path.join(__dirname, 'src', 'static'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: ['babel-loader'],
      exclude: /node_modules/,
      query: {
        "presets": ["react-hmre"]
      }
    }]
  },
  plugins: [
    new NyanProgressPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        WEBPACK: true
      }
    })
  ]
};