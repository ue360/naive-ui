'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const styles_1 = require('../styles')
const interface_1 = require('./interface')
const layout_footer_cssr_1 = __importDefault(
  require('./styles/layout-footer.cssr')
)
const layoutFooterProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  { inverted: Boolean, position: interface_1.positionProp, bordered: Boolean }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'LayoutFooter',
  props: layoutFooterProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Layout',
      'LayoutFooter',
      layout_footer_cssr_1.default,
      styles_1.layoutLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
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
    return (0, vue_1.h)(
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
