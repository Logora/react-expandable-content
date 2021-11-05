var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: "web",
  resolve: { 
    extensions: ['.js', '.jsx', '.svg'] 
  },
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        
      },
    ]
  },
  plugins: [
  ]
};