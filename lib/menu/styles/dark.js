'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const seemly_1 = require('seemly')
const styles_1 = require('../../tooltip/styles')
const common_1 = require('../../_styles/common')
const light_1 = require('./light')
const menuDark = {
  name: 'Menu',
  common: common_1.commonDark,
  peers: {
    Tooltip: styles_1.tooltipDark
  },
  self(vars) {
    const { primaryColor, primaryColorSuppl } = vars
    const commonSelf = (0, light_1.self)(vars)
    commonSelf.itemColorActive = (0, seemly_1.changeColor)(primaryColor, {
      alpha: 0.15
    })
    commonSelf.itemColorActiveInverted = primaryColorSuppl
    commonSelf.itemColorActiveCollapsedInverted = primaryColorSuppl
    commonSelf.colorInverted = '#0000'
    return commonSelf
  }
}
exports.default = menuDark