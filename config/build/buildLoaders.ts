import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({
  isDev,
}: BuildOptions): Array<webpack.RuleSetRule> {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typeScriptLoader];
}
