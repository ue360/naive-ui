'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.self = void 0
const common_1 = require('../../_styles/common')
const self = (vars) => {
  const {
    borderRadius,
    avatarColor,
    fontSize,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge
  } = vars
  return {
    borderRadius,
    fontSize,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    color: avatarColor
  }
}
exports.self = self
const avatarLight = {
  name: 'Avatar',
  common: common_1.commonLight,
  self: exports.self
}
exports.default = avatarLight