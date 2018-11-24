const common = require('./webpack.common.js')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')

// let api_end_point = process.env['API_END_POINT']
// let app_key = process.env['APP_KEY']
// let app_secret = process.env['APP_SECRET']

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // 'API_END_POINT': JSON.stringify(api_end_point),
        // 'APP_KEY': JSON.stringify(app_key),
        // 'APP_SECRET': JSON.stringify(app_secret),
      },
    }),
  ],
})