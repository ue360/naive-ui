'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const input_group_label_cssr_1 = __importDefault(
  require('./styles/input-group-label.cssr')
)
const inputGroupLabelProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    size: {
      type: String,
      default: 'medium'
    },
    bordered: {
      type: Boolean,
      default: undefined
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'InputGroupLabel',
  props: inputGroupLabelProps,
  setup(props) {
    const { mergedBorderedRef, mergedClsPrefixRef } = (0, _mixins_1.useConfig)(
      props
    )
    const themeRef = (0, _mixins_1.useTheme)(
      'Input',
      'InputGroupLabel',
      input_group_label_cssr_1.default,
      styles_1.inputLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      cssVars: (0, vue_1.computed)(() => {
        const { size } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            groupLabelColor,
            borderRadius,
            groupLabelTextColor,
            lineHeight,
            groupLabelBorder,
            [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
            [(0, _utils_1.createKey)('height', size)]: height
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--group-label-color': groupLabelColor,
          '--group-label-border': groupLabelBorder,
          '--border-radius': borderRadius,
          '--group-label-text-color': groupLabelTextColor,
          '--font-size': fontSize,
          '--line-height': lineHeight,
          '--height': height
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      { class: `${mergedClsPrefix}-input-group-label`, style: this.cssVars },
      (0, vue_1.renderSlot)(this.$slots, 'default'),
      this.mergedBordered
        ? (0, vue_1.h)('div', {
            class: `${mergedClsPrefix}-input-group-label__border`
          })
        : null
    )
  }
})
