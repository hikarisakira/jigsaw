const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 更新這一行

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const version = require('../package.json').version

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin('version: ' + version + '\ndocs: https://github.com/yeild/jigsaw\n')
  ],
  mode: 'production'
})
