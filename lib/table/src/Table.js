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
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const tableProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  bordered: {
    type: Boolean,
    default: true
  },
  bottomBordered: {
    type: Boolean,
    default: true
  },
  singleLine: {
    type: Boolean,
    default: true
  },
  striped: Boolean,
  singleColumn: Boolean,
  size: {
    type: String,
    default: 'medium'
  }
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Table',
  props: tableProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Table',
      'Table',
      index_cssr_1.default,
      styles_1.tableLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const { size } = props
        const {
          self: {
            borderColor,
            tdColor,
            tdColorModal,
            tdColorPopover,
            thColor,
            thColorModal,
            thColorPopover,
            thTextColor,
            tdTextColor,
            borderRadius,
            thFontWeight,
            lineHeight,
            borderColorModal,
            borderColorPopover,
            tdColorStriped,
            tdColorStripedModal,
            tdColorStripedPopover,
            [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
            [(0, _utils_1.createKey)('tdPadding', size)]: tdPadding,
            [(0, _utils_1.createKey)('thPadding', size)]: thPadding
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--td-color': tdColor,
          '--td-color-modal': tdColorModal,
          '--td-color-popover': tdColorPopover,
          '--td-text-color': tdTextColor,
          '--border-color': borderColor,
          '--border-color-modal': borderColorModal,
          '--border-color-popover': borderColorPopover,
          '--border-radius': borderRadius,
          '--font-size': fontSize,
          '--th-color': thColor,
          '--th-color-modal': thColorModal,
          '--th-color-popover': thColorPopover,
          '--th-font-weight': thFontWeight,
          '--th-text-color': thTextColor,
          '--line-height': lineHeight,
          '--td-padding': tdPadding,
          '--th-padding': thPadding,
          '--td-color-striped': tdColorStriped,
          '--td-color-striped-modal': tdColorStripedModal,
          '--td-color-striped-popover': tdColorStripedPopover
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return (0, vue_1.h)(
      'table',
      {
        class: [
          `${mergedClsPrefix}-table`,
          {
            [`${mergedClsPrefix}-table--bottom-bordered`]: this.bottomBordered,
            [`${mergedClsPrefix}-table--bordered`]: this.bordered,
            [`${mergedClsPrefix}-table--single-line`]: this.singleLine,
            [`${mergedClsPrefix}-table--single-column`]: this.singleColumn,
            [`${mergedClsPrefix}-table--striped`]: this.striped
          }
        ],
        style: this.cssVars
      },
      this.$slots
    )
  }
})
