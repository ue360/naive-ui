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
const p_cssr_1 = __importDefault(require('./styles/p.cssr'))
const pProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  depth: [String, Number]
})
exports.default = (0, vue_1.defineComponent)({
  name: 'P',
  props: pProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Typography',
      'P',
      p_cssr_1.default,
      styles_1.typographyLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const { depth } = props
        const typeSafeDepth = depth || '1'
        const {
          common: { cubicBezierEaseInOut },
          self: {
            pFontSize,
            pLineHeight,
            pMargin,
            pTextColor,
            [`pTextColor${typeSafeDepth}Depth`]: depthTextColor
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--font-size': pFontSize,
          '--line-height': pLineHeight,
          '--margin': pMargin,
          '--text-color': depth === undefined ? pTextColor : depthTextColor
        }
      })
    }
  },
  render() {
    return (0, vue_1.h)(
      'p',
      { class: `${this.mergedClsPrefix}-p`, style: this.cssVars },
      this.$slots
    )
  }
})