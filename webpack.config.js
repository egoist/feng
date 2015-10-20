var fs = require('fs')
var path = require('path')
var jade = require('jade')
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin')

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
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
    new ReactToHtmlPlugin('index.html', 'main', {
      template: jade.compile(fs.readFileSync(__dirname + '/src/index.jade', 'utf-8'))
    })
  ]
}
