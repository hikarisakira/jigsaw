import rspack from '@rspack/core';
import { merge } from 'webpack-merge';
import baseConfig from './rspack.base.mjs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

export default merge(baseConfig, {
    devServer: {
      hot: true,
      open: true,
      client:{
        logging: 'warn'
      },
      static: {
        directory: path.join(__dirname, '../dist'), // 使用 static 來指定靜態文件目錄
      },
      compress: true,
    },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: 'demo.html',
      inject: 'head'
    }),
  ],
  mode: 'development'
});
