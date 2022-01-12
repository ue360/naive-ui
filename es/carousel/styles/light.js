import { commonLight } from '../../_styles/common'
export const self = (vars) => {
  return {
    dotSize: '8px',
    dotColor: 'rgba(255, 255, 255, .3)',
    dotColorActive: 'rgba(255, 255, 255, 1)',
    arrowColor: 'rgba(255, 255, 255, .6)'
  }
}
const carouselLight = {
  name: 'Carousel',
  common: commonLight,
  self
}
export default carouselLight
