import { h, defineComponent, computed } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { typographyLight } from '../styles'
import style from './styles/list.cssr'
const ulProps = Object.assign(Object.assign({}, useTheme.props), {
  alignText: Boolean
})
export default defineComponent({
  name: 'Ul',
  props: ulProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Typography',
      'Ol&Ul',
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
            olPadding,
            ulPadding,
            liMargin,
            liTextColor,
            liLineHeight,
            liFontSize
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--font-size': liFontSize,
          '--line-height': liLineHeight,
          '--text-color': liTextColor,
          '--li-margin': liMargin,
          '--ol-padding': olPadding,
          '--ul-padding': ulPadding
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'ul',
      {
        class: [
          `${mergedClsPrefix}-ul`,
          this.alignText && `${mergedClsPrefix}-ul--align-text`
        ],
        style: this.cssVars
      },
      this.$slots
    )
  }
})
