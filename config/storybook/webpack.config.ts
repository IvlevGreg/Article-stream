import path from 'path';
import { WebpackConfiguration } from 'webpack-dev-server';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config }:{config:WebpackConfiguration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module!.rules.push(buildCssLoader(true));

  config.module!.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });

  // TODO: выделить отдельно
  config.plugins!.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  config.resolve!.modules = [
    path.resolve(__dirname, '../../src'),
    'node_modules',
  ];

  return config;
};
