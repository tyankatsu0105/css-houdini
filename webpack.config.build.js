const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type import('webpack').Configuration & import('webpack-dev-server').Configuration  */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', {
                  "useBuiltIns": "usage"
                }
              ]
            ]
          }
        }
      }
    ]
  }
};