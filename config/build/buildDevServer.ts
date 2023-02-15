import { BuildOptions } from './types/config';
import type { Configuration } from 'webpack-dev-server';

export function buildDevServer({ port }: BuildOptions): Configuration {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
