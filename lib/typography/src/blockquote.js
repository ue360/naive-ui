'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const blockquote_cssr_1 = __importDefault(require('./styles/blockquote.cssr'))
const styles_1 = require('../styles')
const blockquoteProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  { alignText: Boolean }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Blockquote',
  props: blockquoteProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Typography',
      'Blockquote',
      blockquote_cssr_1.default,
      styles_1.typographyLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: {
            blockquoteTextColor,
            blockquotePrefixColor,
            blockquoteLineHeight,
            blockquoteFontSize
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--font-size': blockquoteFontSize,
          '--line-height': blockquoteLineHeight,
          '--prefix-color': blockquotePrefixColor,
          '--text-color': blockquoteTextColor
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return (0, vue_1.h)(
      'blockquote',
      {
        class: [
          `${mergedClsPrefix}-blockquote`,
          this.alignText && `${mergedClsPrefix}-blockquote--align-text`
        ],
        style: this.cssVars
      },
      this.$slots
    )
  }
})