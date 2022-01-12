import { h, defineComponent, computed } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { typographyLight } from '../styles'
import style from './styles/p.cssr'
const pProps = Object.assign(Object.assign({}, useTheme.props), {
  depth: [String, Number]
})
export default defineComponent({
  name: 'P',
  props: pProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Typography',
      'P',
      style,
      typographyLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const { depth } = props
        const typeSafeDepth = depth || '1'
        const {
          common: { cubicBezierEaseInOut },
          self: {
            pFontSize,
            pLineHeight,
            pMargin,
            pTextColor,
            [`pTextColor${typeSafeDepth}Depth`]: depthTextColor
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--font-size': pFontSize,
          '--line-height': pLineHeight,
          '--margin': pMargin,
          '--text-color': depth === undefined ? pTextColor : depthTextColor
        }
      })
    }
  },
  render() {
    return h(
      'p',
      { class: `${this.mergedClsPrefix}-p`, style: this.cssVars },
      this.$slots
    )
  }
})
