'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const vooks_1 = require('vooks')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const text_cssr_1 = __importDefault(require('./styles/text.cssr'))
const textProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  code: Boolean,
  type: {
    type: String,
    default: 'default'
  },
  delete: Boolean,
  strong: Boolean,
  italic: Boolean,
  underline: Boolean,
  depth: [String, Number],
  tag: String,
  // deprecated
  as: {
    type: String,
    validator: () => {
      if (process.env.NODE_ENV !== 'production') {
        ;(0, _utils_1.warn)(
          'text',
          '`as` is deprecated, please use `tag` instead.'
        )
      }
      return true
    },
    default: undefined
  }
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Text',
  props: textProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Typography',
      'Text',
      text_cssr_1.default,
      styles_1.typographyLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compitableTag: (0, vooks_1.useCompitable)(props, ['as', 'tag']),
      cssVars: (0, vue_1.computed)(() => {
        const { depth, type } = props
        const textColorKey =
          type === 'default'
            ? depth === undefined
              ? 'textColor'
              : `textColor${depth}Depth`
            : (0, _utils_1.createKey)('textColor', type)
        const {
          common: { fontWeightStrong, fontFamilyMono },
          self: {
            codeTextColor,
            codeBorderRadius,
            codeColor,
            codeBorder,
            [textColorKey]: textColor
          }
        } = themeRef.value
        return {
          '--text-color': textColor,
          '--font-weight-strong': fontWeightStrong,
          '--font-famliy-mono': fontFamilyMono,
          '--code-border-radius': codeBorderRadius,
          '--code-text-color': codeTextColor,
          '--code-color': codeColor,
          '--code-border': codeBorder
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    const textClass = [
      `${mergedClsPrefix}-text`,
      {
        [`${mergedClsPrefix}-text--code`]: this.code,
        [`${mergedClsPrefix}-text--delete`]: this.delete,
        [`${mergedClsPrefix}-text--strong`]: this.strong,
        [`${mergedClsPrefix}-text--italic`]: this.italic,
        [`${mergedClsPrefix}-text--underline`]: this.underline
      }
    ]
    const defaultSlot = (0, vue_1.renderSlot)(this.$slots, 'default')
    return this.code
      ? (0, vue_1.h)(
          'code',
          { class: textClass, style: this.cssVars },
          this.delete ? (0, vue_1.h)('del', null, defaultSlot) : defaultSlot
        )
      : this.delete
      ? (0, vue_1.h)(
          'del',
          { class: textClass, style: this.cssVars },
          defaultSlot
        )
      : (0, vue_1.h)(
          this.compitableTag || 'span',
          { class: textClass, style: this.cssVars },
          defaultSlot
        )
  }
})
