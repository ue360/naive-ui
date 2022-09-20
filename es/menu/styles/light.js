import { changeColor } from 'seemly'
import { tooltipLight } from '../../tooltip/styles'
import { commonLight } from '../../_styles/common'
import { createTheme } from '../../_mixins/use-theme'
export function createPartialInvertedVars(color, activeColor, groupColor) {
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
export const self = (vars) => {
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
      itemColorActive: changeColor(primaryColor, { alpha: 0.1 }),
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
const menuLight = createTheme({
  name: 'Menu',
  common: commonLight,
  peers: {
    Tooltip: tooltipLight
  },
  self
})
export default menuLight