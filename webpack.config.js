const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type import('webpack').Configuration & import('webpack-dev-server').Configuration  */
module.exports = {
  entry: './website/index.js',

  devServer: {
    contentBase: path.join(__dirname, 'website')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'website', 'index.html')
    })
  ]
};