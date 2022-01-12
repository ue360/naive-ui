import { h, defineComponent, provide } from 'vue'
import { useConfig, useStyle } from '../../_mixins'
import style from './styles/button-group.cssr'
export const buttonGroupInjectionKey = Symbol('button-group')
const buttonGroupProps = {
  size: {
    type: String,
    default: undefined
  },
  vertical: Boolean
}
export default defineComponent({
  name: 'ButtonGroup',
  props: buttonGroupProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    useStyle('ButtonGroup', style, mergedClsPrefixRef)
    provide(buttonGroupInjectionKey, props)
    return {
      mergedClsPrefix: mergedClsPrefixRef
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-button-group`,
          this.vertical && `${mergedClsPrefix}-button-group--vertical`
        ],
        role: 'group'
      },
      this.$slots
    )
  }
})
