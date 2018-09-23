module.exports = () => {
  if (process.env.NODE_ENV === 'production') {
    return require('./config/webpack.prod');
  }
  return require('./config/webpack.dev');
};
