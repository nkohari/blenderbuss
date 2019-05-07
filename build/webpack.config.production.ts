import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import * as common from './common';

const config = {
  devtool: 'cheap-module-source-map',

  entry: {
    ...common.entry,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'all',
          name: 'libs',
          test: /node_modules/,
        },
      },
    },
  },

  output: {
    ...common.output,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, ...common.styleLoaders],
      },
      ...common.rules,
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[hash]/[name].css',
    }),
    ...common.plugins,
  ],

  resolve: {
    ...common.resolve,
  },
};

export default config;
