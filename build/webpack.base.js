const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const package = require('../package.json');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../src/main.ts'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
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
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: package.version,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../template/index.html'),
      version: package.version,
    }),
  ],
};
