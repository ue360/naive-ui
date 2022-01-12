import { computed, defineComponent, renderSlot, h } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { createKey } from '../../_utils'
import { inputLight } from '../styles'
import style from './styles/input-group-label.cssr'
const inputGroupLabelProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: String,
    default: 'medium'
  },
  bordered: {
    type: Boolean,
    default: undefined
  }
})
export default defineComponent({
  name: 'InputGroupLabel',
  props: inputGroupLabelProps,
  setup(props) {
    const { mergedBorderedRef, mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Input',
      'InputGroupLabel',
      style,
      inputLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      cssVars: computed(() => {
        const { size } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            groupLabelColor,
            borderRadius,
            groupLabelTextColor,
            lineHeight,
            groupLabelBorder,
            [createKey('fontSize', size)]: fontSize,
            [createKey('height', size)]: height
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--group-label-color': groupLabelColor,
          '--group-label-border': groupLabelBorder,
          '--border-radius': borderRadius,
          '--group-label-text-color': groupLabelTextColor,
          '--font-size': fontSize,
          '--line-height': lineHeight,
          '--height': height
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'div',
      { class: `${mergedClsPrefix}-input-group-label`, style: this.cssVars },
      renderSlot(this.$slots, 'default'),
      this.mergedBordered
        ? h('div', { class: `${mergedClsPrefix}-input-group-label__border` })
        : null
    )
  }
})
