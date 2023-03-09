const BaseConfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  ...BaseConfig,
  mode: 'production',
  output: {
    ...BaseConfig.output,
    filename: 'main.[hash:8].js',
  },
  module: {
    rules: BaseConfig.module.rules.map((e) => {
      if ('.less'.match(e.test)) {
        return {
          test: /\.less$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  namedExport: true,
                },
              },
            },
            'less-loader',
            'postcss-loader',
          ],
        };
      }

      return e;
    }),
  },
  plugins: [
    ...BaseConfig.plugins,
    new MiniCssExtractPlugin({
      filename: 'main.[hash:8].css',
    }),
    new CleanWebpackPlugin(),
  ],
};
