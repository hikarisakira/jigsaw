import { defineConfig } from '@rspack/cli'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseConfig = defineConfig({
  entry: {
    jigsaw: './src/jigsaw.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: 'builtin:swc-loader'
      },
      {
        test: /\.css$/i,
        type: 'javascript/auto',
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        }]
      }
    ]
  }
});

module.exports = baseConfig;