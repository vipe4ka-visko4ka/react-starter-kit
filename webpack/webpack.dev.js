const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config');

const config = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3000
  }
};

module.exports = merge(baseConfig, config);
