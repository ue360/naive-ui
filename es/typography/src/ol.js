import { h, defineComponent, computed } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { typographyLight } from '../styles'
import style from './styles/list.cssr'
const olProps = Object.assign(Object.assign({}, useTheme.props), {
  alignText: Boolean
})
export default defineComponent({
  name: 'Ol',
  props: olProps,
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
      'ol',
      {
        class: [
          `${mergedClsPrefix}-ol`,
          this.alignText && `${mergedClsPrefix}-ol--align-text`
        ],
        style: this.cssVars
      },
      this.$slots
    )
  }
})