'use strict';

const webpack = require('webpack');
const path = require('path');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: ['webpack-hot-middleware/client', path.join(__dirname, 'src', 'app-client.js')],
  output: {
    path: path.join(__dirname, 'src', 'static'),
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      loader: ['babel-loader'],
      query: {
        presets: ['react', 'es2015', 'react-hmre']
      }
    }]
  },
  plugins: [
    new NyanProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        WEBPACK: true
      }
    })
  ]
};