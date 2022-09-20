import { h, defineComponent, computed } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { layoutLight } from '../styles'
import { positionProp } from './interface'
import style from './styles/layout-header.cssr'
const headerProps = {
  position: positionProp,
  inverted: Boolean,
  bordered: {
    type: Boolean,
    default: false
  }
}
export default defineComponent({
  name: 'LayoutHeader',
  props: Object.assign(Object.assign({}, useTheme.props), headerProps),
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Layout',
      'LayoutHeader',
      style,
      layoutLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut },
          self
        } = themeRef.value
        const vars = {
          '--bezier': cubicBezierEaseInOut
        }
        if (props.inverted) {
          vars['--color'] = self.headerColorInverted
          vars['--text-color'] = self.textColorInverted
          vars['--border-color'] = self.headerBorderColorInverted
        } else {
          vars['--color'] = self.headerColor
          vars['--text-color'] = self.textColor
          vars['--border-color'] = self.headerBorderColor
        }
        return vars
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-layout-header`,
          this.position &&
            `${mergedClsPrefix}-layout-header--${this.position}-positioned`,
          this.bordered && `${mergedClsPrefix}-layout-header--bordered`
        ],
        style: this.cssVars
      },
      this.$slots
    )
  }
})