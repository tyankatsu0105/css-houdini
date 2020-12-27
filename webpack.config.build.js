const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type import('webpack').Configuration & import('webpack-dev-server').Configuration  */
module.exports = {
  entry: {
    'worklet': path.resolve(__dirname, '/src/worklet.js'),
    'properties' : path.resolve(__dirname, '/src/properties.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};