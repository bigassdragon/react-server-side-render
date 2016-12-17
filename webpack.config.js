'use strict';

const webpack = require('webpack');
const path = require('path');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'js/[hash].js'
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
    new NyanProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.ejs',
      template: path.join(__dirname, 'src', 'views', 'index.ejs'),
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};