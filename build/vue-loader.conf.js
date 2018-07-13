'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
// const sourceMapEnabled = isProduction
//   ? config.build.productionSourceMap
//   : config.dev.cssSourceMap
const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : ((config[process.env.NODE_ENV]&&config[process.env.NODE_ENV]['productionSourceMap'])?config[process.env.NODE_ENV].productionSourceMap:config.dev.cssSourceMap)

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
