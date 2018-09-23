const path = require('path');

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
      }
    ]
  }
};
