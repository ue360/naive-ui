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
const icons_1 = require('../../_internal/icons')
const _internal_1 = require('../../_internal')
const styles_1 = require('../styles')
const _404_1 = __importDefault(require('./404'))
const _500_1 = __importDefault(require('./500'))
const _418_1 = __importDefault(require('./418'))
const _403_1 = __importDefault(require('./403'))
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const imgMap = {
  403: _403_1.default,
  404: _404_1.default,
  418: _418_1.default,
  500: _500_1.default
}
const iconMap = {
  info: (0, vue_1.h)(icons_1.InfoIcon, null),
  success: (0, vue_1.h)(icons_1.SuccessIcon, null),
  warning: (0, vue_1.h)(icons_1.WarningIcon, null),
  error: (0, vue_1.h)(icons_1.ErrorIcon, null)
}
const resultProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  size: {
    type: String,
    default: 'medium'
  },
  status: {
    type: String,
    default: 'info'
  },
  title: String,
  description: String
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Result',
  props: resultProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Result',
      'Result',
      index_cssr_1.default,
      styles_1.resultLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const { size, status } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            textColor,
            lineHeight,
            titleTextColor,
            titleFontWeight,
            [(0, _utils_1.createKey)('iconColor', status)]: iconColor,
            [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
            [(0, _utils_1.createKey)('titleFontSize', size)]: titleFontSize,
            [(0, _utils_1.createKey)('iconSize', size)]: iconSize
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--font-size': fontSize,
          '--icon-size': iconSize,
          '--line-height': lineHeight,
          '--text-color': textColor,
          '--title-font-size': titleFontSize,
          '--title-font-weight': titleFontWeight,
          '--title-text-color': titleTextColor,
          '--icon-color': iconColor
        }
      })
    }
  },
  render() {
    const { status, $slots, mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      { class: `${mergedClsPrefix}-result`, style: this.cssVars },
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-result-icon` },
        status in imgMap
          ? imgMap[status]
          : (0, vue_1.h)(
              _internal_1.NBaseIcon,
              { clsPrefix: mergedClsPrefix },
              { default: () => iconMap[status] }
            )
      ),
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-result-header` },
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-result-header__title` },
          this.title
        ),
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-result-header__description` },
          this.description
        )
      ),
      $slots.default
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-result-content` },
            $slots
          )
        : null,
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-result-footer` },
        (0, vue_1.renderSlot)($slots, 'footer')
      )
    )
  }
})
