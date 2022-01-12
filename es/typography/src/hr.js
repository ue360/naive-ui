import { h, defineComponent, computed } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { typographyLight } from '../styles'
import style from './styles/hr.cssr'
export default defineComponent({
  name: 'Hr',
  props: Object.assign({}, useTheme.props),
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Typography',
      'Hr',
      style,
      typographyLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        return {
          '--color': themeRef.value.self.hrColor
        }
      })
    }
  },
  render() {
    return h('hr', { class: `${this.mergedClsPrefix}-hr`, style: this.cssVars })
  }
})
