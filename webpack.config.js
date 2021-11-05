var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: "web",
  resolve: { 
    extensions: ['.js', '.jsx', '.svg'] 
  },
  entry: path.join(__dirname, '/examples/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css",}),
  ],
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
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            },
          },
          "css-loader",
        ],
      },
    ]
  },
};