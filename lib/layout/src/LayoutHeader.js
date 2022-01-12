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
const layout_header_cssr_1 = __importDefault(
  require('./styles/layout-header.cssr')
)
const headerProps = {
  position: interface_1.positionProp,
  inverted: Boolean,
  bordered: {
    type: Boolean,
    default: false
  }
}
exports.default = (0, vue_1.defineComponent)({
  name: 'LayoutHeader',
  props: Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    headerProps
  ),
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Layout',
      'LayoutHeader',
      layout_header_cssr_1.default,
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
    return (0, vue_1.h)(
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
