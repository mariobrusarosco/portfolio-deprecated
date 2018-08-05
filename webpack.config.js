'use strict'

const path = require('path'),
      webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src','index')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules')
    ]
  }
}
