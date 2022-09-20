'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.imageDark = void 0
const common_1 = require('../../_styles/common')
exports.imageDark = {
  name: 'Image',
  common: common_1.commonDark,
  self: (vars) => {
    const { textColor2 } = vars
    return {
      iconColor: textColor2
    }
  }
}