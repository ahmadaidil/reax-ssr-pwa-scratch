const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  entry: [
    './index.js'
  ],
  output: {
    filename: 'reax.js',
    path: path.resolve(__dirname, '../public/assets'),
    publicPath: '/assets/'
  },
  devtool: false,
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};

module.exports = merge(baseConfig, prodConfig);
