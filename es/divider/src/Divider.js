import { h, computed, defineComponent, Fragment } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { dividerLight } from '../styles'
import style from './styles/index.cssr'
const dividerProps = Object.assign(Object.assign({}, useTheme.props), {
  titlePlacement: {
    type: String,
    default: 'center'
  },
  dashed: Boolean,
  vertical: Boolean
})
export default defineComponent({
  name: 'Divider',
  props: dividerProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Divider',
      'Divider',
      style,
      dividerLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: { color, textColor, fontWeight }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--color': color,
          '--text-color': textColor,
          '--font-weight': fontWeight
        }
      })
    }
  },
  render() {
    const {
      $slots,
      titlePlacement,
      vertical,
      dashed,
      cssVars,
      mergedClsPrefix
    } = this
    return h(
      'div',
      {
        role: 'separator',
        class: [
          `${mergedClsPrefix}-divider`,
          {
            [`${mergedClsPrefix}-divider--vertical`]: vertical,
            [`${mergedClsPrefix}-divider--no-title`]: !$slots.default,
            [`${mergedClsPrefix}-divider--dashed`]: dashed,
            [`${mergedClsPrefix}-divider--title-position-${titlePlacement}`]:
              $slots.default && titlePlacement
          }
        ],
        style: cssVars
      },
      !vertical
        ? h('div', {
            class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--left`
          })
        : null,
      !vertical && $slots.default
        ? h(
            Fragment,
            null,
            h(
              'div',
              { class: `${mergedClsPrefix}-divider__title` },
              this.$slots
            ),
            h('div', {
              class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--right`
            })
          )
        : null
    )
  }
})