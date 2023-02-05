import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export function buildPlugins({
  paths,
}: BuildOptions): Array<webpack.WebpackPluginInstance> {
  return [
    new htmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
}
