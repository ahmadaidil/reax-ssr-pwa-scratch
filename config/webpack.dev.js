const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig =  require('./webpack.base');

const port = process.env.PORT || 8000;
const devPort = process.env.DEV_PORT || 8080;

const devConfig = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${devPort}`,
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  devServer: {
    proxy: {
      '**': {
        target: `http://localhost:${port}`,
        secure: false
      }
    },
    port: devPort,
    inline: true,
    historyApiFallback: true,
    hot: true,
    stats: { assets: true, colors: true }
  },
  output: {
    path: __dirname + '../public',
    filename: 'assets/reax.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(baseConfig, devConfig);
