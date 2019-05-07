import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as dotenv from 'dotenv';

dotenv.config();

const env = {
  NODE_ENV: process.env.NODE_ENV,
};

export const entry = {
  bundle: [path.resolve(__dirname, '../src')],
};

export const output = {
  path: path.resolve(__dirname, '../dist'),
  publicPath: '/',
  filename: '[hash]/[name].js',
};

export const rules = [
  {
    test: /\.(png|ttf|jpg|gif|woff|woff2|eot)$/,
    loader: 'url-loader',
    options: { limit: 10000 },
  },
  {
    test: /\.svg$/,
    use: ['svg-react-loader'],
  },
];

export const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'assets/index.html',
  }),
  new webpack.DefinePlugin({
    'process.env': Object.keys(env).reduce((hash, key) => {
      hash[key] = JSON.stringify(env[key]);
      return hash;
    }, {}),
  }),
];

export const resolve = {
  alias: {
    assets: path.resolve(__dirname, '../assets'),
    src: path.resolve(__dirname, '../src'),
  },
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
};

export const styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      camelCase: true,
      modules: true,
      localIdentName: '[local]--[hash:base64:5]',
      sourceMap: true,
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
    },
  },
];
