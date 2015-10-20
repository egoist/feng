var fs = require('fs')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: './build',
    filename: 'bundle.[hash].js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  postcss: function () {
    return [
      require('cssgrace'),
      require('cssnext')()
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.[contenthash].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      title: 'feng',
      template: './src/index.template'
    })
  ]
}
