const root = require('node-root')
const assetsHash = require(root('webpack-assets'))
const routes = module.exports = {}

routes.index = (req, res) => {
  res.render('index', { assetsHash: assetsHash })
}