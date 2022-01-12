import { commonDark } from '../../_styles/common'
export const imageDark = {
  name: 'Image',
  common: commonDark,
  self: (vars) => {
    const { textColor2 } = vars
    return {
      iconColor: textColor2
    }
  }
}
