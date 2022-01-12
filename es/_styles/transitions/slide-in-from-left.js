import { c } from '../../_utils/cssr'
import commonVariables from '../common/_common'
const { cubicBezierEaseIn, cubicBezierEaseOut } = commonVariables
export default function ({
  duration = '0.3s',
  leaveDuration = '0.2s',
  name = 'slide-in-from-left'
} = {}) {
  return [
    c(`&.${name}-transition-leave-active`, {
      transition: `transform ${leaveDuration} ${cubicBezierEaseIn}`
    }),
    c(`&.${name}-transition-enter-active`, {
      transition: `transform ${duration} ${cubicBezierEaseOut}`
    }),
    c(`&.${name}-transition-enter-to`, {
      transform: 'translateX(0)'
    }),
    c(`&.${name}-transition-enter-from`, {
      transform: 'translateX(-100%)'
    }),
    c(`&.${name}-transition-leave-from`, {
      transform: 'translateX(0)'
    }),
    c(`&.${name}-transition-leave-to`, {
      transform: 'translateX(-100%)'
    })
  ]
}
