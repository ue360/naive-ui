import { h, defineComponent, provide } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { timelineLight } from '../styles'
import style from './styles/index.cssr'
const timelineProps = Object.assign(Object.assign({}, useTheme.props), {
  horizontal: Boolean,
  itemPlacement: {
    type: String,
    default: 'left'
  },
  size: {
    type: String,
    default: 'medium'
  },
  iconSize: Number
})
export const timelineInjectionKey = Symbol('timeline')
export default defineComponent({
  name: 'Timeline',
  props: timelineProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Timeline',
      'Timeline',
      style,
      timelineLight,
      props,
      mergedClsPrefixRef
    )
    provide(timelineInjectionKey, {
      props,
      mergedThemeRef: themeRef,
      mergedClsPrefixRef
    })
    return () => {
      const { value: mergedClsPrefix } = mergedClsPrefixRef
      return h(
        'div',
        {
          class: [
            `${mergedClsPrefix}-timeline`,
            props.horizontal && `${mergedClsPrefix}-timeline--horizontal`,
            `${mergedClsPrefix}-timeline--${props.size}-size`,
            !props.horizontal &&
              `${mergedClsPrefix}-timeline--${props.itemPlacement}-placement`
          ]
        },
        slots
      )
    }
  }
})
