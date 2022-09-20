'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.self = exports.createPartialInvertedVars = void 0
const seemly_1 = require('seemly')
const styles_1 = require('../../tooltip/styles')
const common_1 = require('../../_styles/common')
const use_theme_1 = require('../../_mixins/use-theme')
function createPartialInvertedVars(color, activeColor, groupColor) {
  return {
    itemTextColorInverted: color,
    itemTextColorHoverInverted: activeColor,
    itemTextColorChildActiveInverted: activeColor,
    itemTextColorActiveInverted: activeColor,
    itemIconColorInverted: color,
    itemIconColorHoverInverted: activeColor,
    itemIconColorActiveInverted: activeColor,
    itemIconColorChildActiveInverted: activeColor,
    itemIconColorCollapsedInverted: color,
    arrowColorInverted: color,
    arrowColorHoverInverted: activeColor,
    arrowColorChildActiveInverted: activeColor,
    arrowColorActiveInverted: activeColor,
    groupTextColorInverted: groupColor
  }
}
exports.createPartialInvertedVars = createPartialInvertedVars
const self = (vars) => {
  const {
    borderRadius,
    textColor3,
    primaryColor,
    textColor2,
    primaryColorHover,
    textColor1,
    fontSize,
    dividerColor
  } = vars
  return Object.assign(
    {
      borderRadius: borderRadius,
      color: '#0000',
      groupTextColor: textColor3,
      itemColorActive: (0, seemly_1.changeColor)(primaryColor, { alpha: 0.1 }),
      itemColorActiveCollapsed: '#0000',
      itemTextColor: textColor2,
      itemTextColorHover: primaryColorHover,
      itemTextColorChildActive: primaryColor,
      itemTextColorActive: primaryColor,
      itemIconColor: textColor1,
      itemIconColorHover: primaryColorHover,
      itemIconColorActive: primaryColor,
      itemIconColorChildActive: primaryColor,
      itemIconColorCollapsed: textColor1,
      itemHeight: '42px',
      arrowColor: textColor2,
      arrowColorHover: primaryColorHover,
      arrowColorChildActive: primaryColor,
      arrowColorActive: primaryColor,
      colorInverted: '#0000',
      itemColorActiveInverted: primaryColor,
      itemColorActiveCollapsedInverted: primaryColor,
      borderColorHorizontal: '#0000',
      fontSize,
      dividerColor
    },
    createPartialInvertedVars('#BBB', '#FFF', '#AAA')
  )
}
exports.self = self
const menuLight = (0, use_theme_1.createTheme)({
  name: 'Menu',
  common: common_1.commonLight,
  peers: {
    Tooltip: styles_1.tooltipLight
  },
  self: exports.self
})
exports.default = menuLight