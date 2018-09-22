const path = require('path');
const webpack = require('webpack');

const port = process.env.PORT || 8000;
const serverPort = process.env.SERVER_PORT || 8001;

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, '../src/client'),
  target: 'web',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  devServer: {
    proxy: {
      '**': {
        target: `http://localhost:${serverPort}`,
        secure: false
      }
    },
    port,
    inline: true,
    historyApiFallback: true,
    hot: true,
    stats: { assets: true, colors: true }
  },
  output: {
    path: __dirname + '../public',
    filename: 'assets/reax.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, '../src/client'),
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
