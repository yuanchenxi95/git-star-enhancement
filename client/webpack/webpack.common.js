const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path')
const rootPath =  path.resolve(path.dirname('./'))
const buildPath = path.resolve(rootPath, './build')
const srcPath = path.resolve(rootPath, './src')
const assetsPath = path.resolve(rootPath, './src/assets')
const entryPath = path.resolve(rootPath, './src/index.js')
require('@babel/polyfill')

module.exports = {
  // entry: ['babel-polyfill', entryPath],
  entry: {
    main: ['@babel/polyfill', entryPath],
  },
  output: {
    path: buildPath,
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        loader: 'less-loader', // compiles Less to CSS
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'file-loader',
          options : {
            limit: 25000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]',
          },
        }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'fonts/[hash]-[name].[ext]',
          },
        }],
      },
    ],
  },
  resolve: {
    alias: {
      src: srcPath,
    },
    extensions: ['mjs', '.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
        },
      },
      maxSize: 200 * 1024, // 200kB
    },
  },
  plugins: [
    new CleanWebpackPlugin([buildPath], {
      root: rootPath,
      verbose: true,
      dry: false,
    }),
    new CopyWebpackPlugin([{ from: assetsPath, to: buildPath }], { ignore: [ '*.html' ]}),
    new HtmlWebpackPlugin({
      template: assetsPath + '/index.html',
    }),
  ],
}
