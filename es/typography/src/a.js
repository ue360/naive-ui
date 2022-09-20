import { h, defineComponent, computed } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { typographyLight } from '../styles'
import style from './styles/a.cssr'
const aProps = Object.assign({}, useTheme.props)
export default defineComponent({
  name: 'A',
  props: aProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Typography',
      'A',
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
          self: { aTextColor }
        } = themeRef.value
        return {
          '--text-color': aTextColor,
          '--bezier': cubicBezierEaseInOut
        }
      })
    }
  },
  render() {
    return h(
      'a',
      { class: `${this.mergedClsPrefix}-a`, style: this.cssVars },
      this.$slots
    )
  }
})