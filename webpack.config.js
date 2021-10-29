var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8081,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    //new ExtractTextPlugin('style.css')
  ]
};