'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.panelPropKeys = exports.panelProps = void 0
const vue_1 = require('vue')
const button_1 = require('../../button')
const _internal_1 = require('../../_internal')
const icons_1 = require('../../_internal/icons')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const interface_1 = require('./interface')
exports.panelProps = {
  positiveText: String,
  negativeText: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  onPositiveClick: {
    type: Function,
    required: true
  },
  onNegativeClick: {
    type: Function,
    required: true
  }
}
exports.panelPropKeys = (0, _utils_1.keysOf)(exports.panelProps)
exports.default = (0, vue_1.defineComponent)({
  name: 'NPopconfirmPanel',
  props: exports.panelProps,
  setup(props) {
    const { localeRef } = (0, _mixins_1.useLocale)('Popconfirm')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { mergedClsPrefixRef, mergedThemeRef } = (0, vue_1.inject)(
      interface_1.popconfirmInjectionKey
    )
    return Object.assign(
      Object.assign({}, (0, _mixins_1.useLocale)('Popconfirm')),
      {
        mergedClsPrefix: mergedClsPrefixRef,
        cssVars: (0, vue_1.computed)(() => {
          const {
            common: { cubicBezierEaseInOut },
            self: { fontSize, iconSize, iconColor }
          } = mergedThemeRef.value
          return {
            '--bezier': cubicBezierEaseInOut,
            '--font-size': fontSize,
            '--icon-size': iconSize,
            '--icon-color': iconColor
          }
        }),
        localizedPositiveText: (0, vue_1.computed)(() => {
          return props.positiveText || localeRef.value.positiveText
        }),
        localizedNegativeText: (0, vue_1.computed)(() => {
          return props.negativeText || localeRef.value.negativeText
        }),
        handlePositiveClick(e) {
          props.onPositiveClick(e)
        },
        handleNegativeClick(e) {
          props.onNegativeClick(e)
        }
      }
    )
  },
  render() {
    const { mergedClsPrefix, $slots } = this
    const actionContentNode = $slots.action
      ? $slots.action()
      : this.negativeText === null && this.positiveText === null
      ? null
      : [
          this.negativeText !== null &&
            (0, vue_1.h)(
              button_1.NButton,
              { size: 'small', onClick: this.handleNegativeClick },
              { default: () => this.localizedNegativeText }
            ),
          this.positiveText !== null &&
            (0, vue_1.h)(
              button_1.NButton,
              {
                size: 'small',
                type: 'primary',
                onClick: this.handlePositiveClick
              },
              { default: () => this.localizedPositiveText }
            )
        ]
    return (0, vue_1.h)(
      'div',
      { style: this.cssVars },
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-popconfirm__body` },
        this.showIcon
          ? (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-popconfirm__icon` },
              (0, vue_1.renderSlot)($slots, 'icon', undefined, () => [
                (0, vue_1.h)(
                  _internal_1.NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => (0, vue_1.h)(icons_1.WarningIcon, null) }
                )
              ])
            )
          : null,
        (0, vue_1.renderSlot)($slots, 'default')
      ),
      actionContentNode
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-popconfirm__action` },
            actionContentNode
          )
        : null
    )
  }
})
