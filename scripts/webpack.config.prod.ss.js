var config  = require('./webpack.config.prod')
config.output.publicPath = '/static/'

module.exports = config