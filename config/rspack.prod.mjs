import pkg from '@rspack/core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { BannerPlugin } = pkg;
import { merge } from 'webpack-merge'
import baseConfig from './rspack.base.mjs'
import packageJson from '../package.json' assert { type: "json" };
const { version } = packageJson;

export default merge(baseConfig, {
  output: {
    clean: true,
    path: path.resolve(__dirname, "../dist"),
    filename: '[name].min.js',
  },
  plugins: [
    new BannerPlugin('version: ' + version + '\ndocs: https://github.com/hikarisakira/jigsaw\n')
  ],
  mode: 'production'
})
