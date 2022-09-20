import { commonLight } from '../../_styles/common'
import commonVariables from './_common'
export const self = (vars) => {
  const { textColor1, errorColor, warningColor, lineHeight, textColor3 } = vars
  return Object.assign(Object.assign({}, commonVariables), {
    lineHeight,
    labelTextColor: textColor1,
    asteriskColor: errorColor,
    feedbackTextColorError: errorColor,
    feedbackTextColorWarning: warningColor,
    feedbackTextColor: textColor3
  })
}
const formLight = {
  name: 'Form',
  common: commonLight,
  self
}
export default formLight