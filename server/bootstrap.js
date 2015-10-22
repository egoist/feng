'use strict'

const path = require('path')
const express = require('express')
const root = require('node-root')
const argv = require('minimist')(process.argv.slice(2))
const routes = require('./routes')

const app = express()
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

if (argv.hotreload) {
  const config = require(root('scripts/webpack.config.dev'))
  const webpack = require('webpack')
  const compiler = webpack(config)
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))

  app.get('*', function(req, res) {
    res.sendFile(root('index.dev.html'))
  })
} else {
  app.use('/static', express.static('build'))
  app.get('/', routes.index)
}

app.listen(8080, 'localhost', function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:8080')
})


