'use strict';

const webpack = require('webpack');
const path = require('path');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'src', 'static'),
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  plugins: [
    new NyanProgressPlugin()
  ]
};