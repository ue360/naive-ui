'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.imageLight = void 0
const _mixins_1 = require('../../_mixins')
const common_1 = require('../../_styles/common')
function self() {
  return {
    iconColor: 'rgba(255, 255, 255, .9)'
  }
}
exports.imageLight = (0, _mixins_1.createTheme)({
  name: 'Image',
  common: common_1.commonLight,
  self
})