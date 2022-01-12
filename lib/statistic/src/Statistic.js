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
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const statisticProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    label: {
      type: String,
      default: undefined
    },
    value: {
      type: [String, Number],
      default: undefined
    },
    valueStyle: {
      type: [Object, String],
      default: undefined
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Statistic',
  props: statisticProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Statistic',
      'Statistic',
      index_cssr_1.default,
      styles_1.statisticLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          self: {
            labelFontWeight,
            valueFontWeight,
            valuePrefixTextColor,
            labelTextColor,
            valueSuffixTextColor,
            valueTextColor,
            labelFontSize
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--label-font-size': labelFontSize,
          '--label-font-weight': labelFontWeight,
          '--label-text-color': labelTextColor,
          '--value-font-weight': valueFontWeight,
          '--value-prefix-text-color': valuePrefixTextColor,
          '--value-suffix-text-color': valueSuffixTextColor,
          '--value-text-color': valueTextColor
        }
      })
    }
  },
  render() {
    var _a
    const { $slots, mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      { class: `${mergedClsPrefix}-statistic`, style: this.cssVars },
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-statistic__label` },
        this.label ||
          ((_a = $slots.label) === null || _a === void 0
            ? void 0
            : _a.call($slots))
      ),
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-statistic-value` },
        $slots.prefix
          ? (0, vue_1.h)(
              'span',
              { class: `${mergedClsPrefix}-statistic-value__prefix` },
              (0, vue_1.renderSlot)($slots, 'prefix')
            )
          : null,
        this.value !== undefined
          ? (0, vue_1.h)(
              'span',
              { class: `${mergedClsPrefix}-statistic-value__content` },
              this.value
            )
          : (0, vue_1.h)(
              'span',
              { class: `${mergedClsPrefix}-statistic-value__content` },
              $slots
            ),
        $slots.suffix
          ? (0, vue_1.h)(
              'span',
              { class: `${mergedClsPrefix}-statistic-value__suffix` },
              (0, vue_1.renderSlot)($slots, 'suffix')
            )
          : null
      )
    )
  }
})
