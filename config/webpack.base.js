const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.resolve(__dirname, '../src/client'),
  target: 'web',
  stats: { assets: true },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, '../src/client'),
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};
