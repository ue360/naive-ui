import { defineComponent, computed, h } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { createKey } from '../../_utils'
import { tableLight } from '../styles'
import style from './styles/index.cssr'
const tableProps = Object.assign(Object.assign({}, useTheme.props), {
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
export default defineComponent({
  name: 'Table',
  props: tableProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Table',
      'Table',
      style,
      tableLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
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
            [createKey('fontSize', size)]: fontSize,
            [createKey('tdPadding', size)]: tdPadding,
            [createKey('thPadding', size)]: thPadding
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
    return h(
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
