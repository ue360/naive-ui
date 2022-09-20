'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.listInjectionKey = void 0
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const listProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  size: {
    type: String,
    default: 'medium'
  },
  bordered: {
    type: Boolean,
    default: false
  }
})
exports.listInjectionKey = Symbol('list')
exports.default = (0, vue_1.defineComponent)({
  name: 'List',
  props: listProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'List',
      'List',
      index_cssr_1.default,
      styles_1.listLight,
      props,
      mergedClsPrefixRef
    )
    ;(0, vue_1.provide)(exports.listInjectionKey, {
      mergedClsPrefixRef
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: {
            fontSize,
            textColor,
            color,
            colorModal,
            colorPopover,
            borderColor,
            borderColorModal,
            borderColorPopover,
            borderRadius
          }
        } = themeRef.value
        return {
          '--font-size': fontSize,
          '--bezier': cubicBezierEaseInOut,
          '--text-color': textColor,
          '--color': color,
          '--border-radius': borderRadius,
          '--border-color': borderColor,
          '--border-color-modal': borderColorModal,
          '--border-color-popover': borderColorPopover,
          '--color-modal': colorModal,
          '--color-popover': colorPopover
        }
      })
    }
  },
  render() {
    const { $slots, mergedClsPrefix } = this
    return (0, vue_1.h)(
      'ul',
      {
        class: [
          `${mergedClsPrefix}-list`,
          this.bordered && `${mergedClsPrefix}-list--bordered`
        ],
        style: this.cssVars
      },
      $slots.header
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-list__header` },
            (0, vue_1.renderSlot)($slots, 'header')
          )
        : null,
      (0, vue_1.renderSlot)($slots, 'default'),
      $slots.footer
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-list__footer` },
            (0, vue_1.renderSlot)($slots, 'footer')
          )
        : null
    )
  }
})