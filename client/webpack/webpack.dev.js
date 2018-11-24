const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const path = require('path')
const rootPath =  path.resolve(path.dirname('./'))
const buildPath = path.resolve(rootPath, './build')

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: buildPath,
  },
  mode: 'development',
})