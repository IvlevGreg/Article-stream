import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
}: BuildOptions): Array<webpack.WebpackPluginInstance> {
  return [
    new htmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
