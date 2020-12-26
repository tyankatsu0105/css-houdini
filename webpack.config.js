const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type import('webpack').Configuration & import('webpack-dev-server').Configuration  */
module.exports = {
  entry: './website/index.js',

  devServer: {
    contentBase: path.join(__dirname, 'website')
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'website', 'index.html')
    })
  ]
};