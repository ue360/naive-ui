import { h, computed, defineComponent } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { layoutLight } from '../styles'
import { positionProp } from './interface'
import style from './styles/layout-footer.cssr'
const layoutFooterProps = Object.assign(Object.assign({}, useTheme.props), {
  inverted: Boolean,
  position: positionProp,
  bordered: Boolean
})
export default defineComponent({
  name: 'LayoutFooter',
  props: layoutFooterProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Layout',
      'LayoutFooter',
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
          vars['--color'] = self.footerColorInverted
          vars['--text-color'] = self.textColorInverted
          vars['--border-color'] = self.footerBorderColorInverted
        } else {
          vars['--color'] = self.footerColor
          vars['--text-color'] = self.textColor
          vars['--border-color'] = self.footerBorderColor
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
          `${mergedClsPrefix}-layout-footer`,
          this.position &&
            `${mergedClsPrefix}-layout-footer--${this.position}-positioned`,
          this.bordered && `${mergedClsPrefix}-layout-footer--bordered`
        ],
        style: this.cssVars
      },
      this.$slots
    )
  }
})