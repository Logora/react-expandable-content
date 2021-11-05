var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: "web",
  mode: 'production',
  resolve: { 
    extensions: ['.js'] 
  },
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8081,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [
  ]
};