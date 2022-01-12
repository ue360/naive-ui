import { computed, defineComponent, h, renderSlot, provide } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { listLight } from '../styles'
import style from './styles/index.cssr'
const listProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: String,
    default: 'medium'
  },
  bordered: {
    type: Boolean,
    default: false
  }
})
export const listInjectionKey = Symbol('list')
export default defineComponent({
  name: 'List',
  props: listProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'List',
      'List',
      style,
      listLight,
      props,
      mergedClsPrefixRef
    )
    provide(listInjectionKey, {
      mergedClsPrefixRef
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: {
            fontSize,
            textColor,
            color,
            colorModal,
            colorPopover,
            borderColor,
            borderColorModal,
            borderColorPopover,
            borderRadius
          }
        } = themeRef.value
        return {
          '--font-size': fontSize,
          '--bezier': cubicBezierEaseInOut,
          '--text-color': textColor,
          '--color': color,
          '--border-radius': borderRadius,
          '--border-color': borderColor,
          '--border-color-modal': borderColorModal,
          '--border-color-popover': borderColorPopover,
          '--color-modal': colorModal,
          '--color-popover': colorPopover
        }
      })
    }
  },
  render() {
    const { $slots, mergedClsPrefix } = this
    return h(
      'ul',
      {
        class: [
          `${mergedClsPrefix}-list`,
          this.bordered && `${mergedClsPrefix}-list--bordered`
        ],
        style: this.cssVars
      },
      $slots.header
        ? h(
            'div',
            { class: `${mergedClsPrefix}-list__header` },
            renderSlot($slots, 'header')
          )
        : null,
      renderSlot($slots, 'default'),
      $slots.footer
        ? h(
            'div',
            { class: `${mergedClsPrefix}-list__footer` },
            renderSlot($slots, 'footer')
          )
        : null
    )
  }
})
