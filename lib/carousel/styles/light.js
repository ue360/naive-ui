'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.self = void 0
const common_1 = require('../../_styles/common')
const self = (vars) => {
  return {
    dotSize: '8px',
    dotColor: 'rgba(255, 255, 255, .3)',
    dotColorActive: 'rgba(255, 255, 255, 1)',
    arrowColor: 'rgba(255, 255, 255, .6)'
  }
}
exports.self = self
const carouselLight = {
  name: 'Carousel',
  common: common_1.commonLight,
  self: exports.self
}
exports.default = carouselLight