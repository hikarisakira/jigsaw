import rspack from '@rspack/core';
import { merge } from 'webpack-merge';
import baseConfig from './rspack.base.mjs';

export default merge(baseConfig, {
  devServer: {
    hot: true,
    open: true,
    liveReload: true,
    client: {
      logging: 'warn'
    }
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: 'demo.html',
      inject: 'head'
    }),
  ],
  mode: 'development'
});
