import type { Configuration } from 'webpack-dev-server';
import { type BuildOptions } from './types/config';

export function buildDevServer({ port, isDev }: BuildOptions): Configuration {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: isDev,
  };
}
