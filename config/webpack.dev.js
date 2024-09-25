const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const path = require('path')

module.exports = merge(baseConfig, {
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
    new HtmlWebpackPlugin({
      template: 'demo.html',
      inject: 'head'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ],
  mode: 'development'
})
