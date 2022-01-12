import { commonLight } from '../../_styles/common'
export const self = (vars) => {
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
const avatarLight = {
  name: 'Avatar',
  common: commonLight,
  self
}
export default avatarLight
