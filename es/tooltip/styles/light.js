import { commonLight } from '../../_styles/common'
import { popoverLight } from '../../popover/styles'
import commonVars from './_common'
import { createTheme } from '../../_mixins/use-theme'
const self = (vars) => {
  const { borderRadius, boxShadow2, baseColor } = vars
  return Object.assign(Object.assign({}, commonVars), {
    borderRadius: borderRadius,
    boxShadow: boxShadow2,
    color: 'rgba(0, 0, 0, .85)',
    textColor: baseColor
  })
}
const tooltipLight = createTheme({
  name: 'Tooltip',
  common: commonLight,
  peers: {
    Popover: popoverLight
  },
  self
})
export default tooltipLight
