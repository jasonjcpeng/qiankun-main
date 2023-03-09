const BaseConfig = require('./webpack.base');
const path = require('path');

module.exports = {
  ...BaseConfig,
  output: {
    ...BaseConfig.output,
  },
  plugins: [...BaseConfig.plugins],
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
};
