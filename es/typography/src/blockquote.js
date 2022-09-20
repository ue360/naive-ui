import { h, defineComponent, computed } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import style from './styles/blockquote.cssr'
import { typographyLight } from '../styles'
const blockquoteProps = Object.assign(Object.assign({}, useTheme.props), {
  alignText: Boolean
})
export default defineComponent({
  name: 'Blockquote',
  props: blockquoteProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Typography',
      'Blockquote',
      style,
      typographyLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: {
            blockquoteTextColor,
            blockquotePrefixColor,
            blockquoteLineHeight,
            blockquoteFontSize
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--font-size': blockquoteFontSize,
          '--line-height': blockquoteLineHeight,
          '--prefix-color': blockquotePrefixColor,
          '--text-color': blockquoteTextColor
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'blockquote',
      {
        class: [
          `${mergedClsPrefix}-blockquote`,
          this.alignText && `${mergedClsPrefix}-blockquote--align-text`
        ],
        style: this.cssVars
      },
      this.$slots
    )
  }
})