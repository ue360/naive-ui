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
const list_cssr_1 = __importDefault(require('./styles/list.cssr'))
const olProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  alignText: Boolean
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Ol',
  props: olProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Typography',
      'Ol&Ul',
      list_cssr_1.default,
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
    return (0, vue_1.h)(
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