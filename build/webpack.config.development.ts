import * as path from 'path';
import * as common from './common';

const config = {
  devtool: 'cheap-module-eval-source-map',
  stats: 'minimal',

  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 8081,
    proxy: {
      '/images': {
        target: `http://localhost:${process.env.PORT}`,
        secure: false,
      },
    },
  },

  entry: {
    ...common.entry,
  },

  output: {
    ...common.output,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', ...common.styleLoaders],
      },
      ...common.rules,
    ],
  },

  plugins: [...common.plugins],

  resolve: {
    ...common.resolve,
  },
};

export default config;
